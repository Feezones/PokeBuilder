// ============================================
// PokéBuilder — Battle Engine (Doubles 2v2)
// ============================================

import { getPokemon, getMove, getSpriteUrl, formatName } from './api.js';
import {
  TYPE_CHART, TYPE_COLORS, NATURES,
  calcAllStats, parseBaseStats, getNatureMod, formatPokemonName
} from './utils.js';
import { t } from './i18n.js';
import { getTeams, getActiveTeamSlots } from './profile.js';
import { generatePVETeam } from './battle-ai.js';
import { findOpponent } from './battle-pvp.js';

// --- Battle State ---
let battleState = null;

/*
  battleState = {
    mode: 'pve' | 'pvp',
    player: { name, team: [...4 mons], active: [idx, idx], fainted: Set },
    opponent: { name, team: [...4 mons], active: [idx, idx], fainted: Set },
    log: [],
    turn: 0,
    phase: 'select-team' | 'battle' | 'ended',
    winner: null,
    weather: null,
  }

  Each mon in battle team:
  {
    name, species, id, types, ability, item, nature, level,
    moves: [{name, type, power, category, accuracy, pp, maxPp, priority}],
    stats: {hp, atk, def, spa, spd, spe},
    currentHp, maxHp, sprite,
    boosts: {atk:0, def:0, spa:0, spd:0, spe:0, accuracy:0, evasion:0},
    status: null, // 'burn','paralyze','poison','sleep','freeze','toxic'
    toxicCounter: 0,
    isPlayer: bool,
    slotIndex: number
  }
*/

// --- Prepare a mon for battle ---
async function prepareBattleMon(slot, isPlayer, slotIndex) {
  if (!slot || !slot.name) return null;

  let pokeData;
  try {
    pokeData = await getPokemon(slot.name);
  } catch {
    return null;
  }

  const baseStats = parseBaseStats(pokeData);
  const stats = calcAllStats(
    baseStats,
    slot.ivs || { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    slot.evs || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    slot.level || 50,
    slot.nature || 'adamant'
  );

  const types = pokeData.types.map(t => t.type.name);

  // Load moves
  const moves = [];
  for (const moveName of slot.moves) {
    if (!moveName) continue;
    try {
      const moveData = await getMove(moveName);
      moves.push({
        name: moveName,
        displayName: formatName(moveName),
        type: moveData.type.name,
        power: moveData.power || 0,
        category: moveData.damage_class.name, // physical, special, status
        accuracy: moveData.accuracy || 100,
        pp: moveData.pp,
        maxPp: moveData.pp,
        priority: moveData.priority || 0,
        meta: moveData.meta,
        effectChance: moveData.effect_chance,
        target: moveData.target?.name || 'selected-pokemon',
        statChanges: moveData.stat_changes || [],
      });
    } catch {
      // skip invalid moves
    }
  }

  return {
    name: slot.name,
    species: formatPokemonName(slot.name),
    id: pokeData.id,
    types,
    ability: slot.ability || pokeData.abilities[0]?.ability.name || '',
    item: slot.item || '',
    nature: slot.nature || 'adamant',
    level: slot.level || 50,
    moves,
    stats,
    baseStats,
    currentHp: stats.hp,
    maxHp: stats.hp,
    sprite: getSpriteUrl(pokeData.id),
    boosts: { atk: 0, def: 0, spa: 0, spd: 0, spe: 0, accuracy: 0, evasion: 0 },
    status: null,
    toxicCounter: 0,
    sleepTurns: 0,
    isPlayer,
    slotIndex,
    protectActive: false,
    protectConsecutive: false,
  };
}

// --- Get effective stat with boosts ---
// isCrit: if true, ignore attacker's negative boosts / defender's positive boosts
function getEffectiveStat(mon, statKey, { isCrit = false, isAttacker = true } = {}) {
  const base = mon.stats[statKey];
  let boost = mon.boosts[statKey] || 0;

  // Crits ignore unfavourable boosts
  if (isCrit) {
    if (isAttacker && boost < 0) boost = 0;  // ignore attacker's drops
    if (!isAttacker && boost > 0) boost = 0; // ignore defender's raises
  }

  const stages = [2/8, 2/7, 2/6, 2/5, 2/4, 2/3, 2/2, 3/2, 4/2, 5/2, 6/2, 7/2, 8/2];
  const multiplier = stages[boost + 6] || 1;
  let stat = Math.floor(base * multiplier);

  // Ability: Huge Power / Pure Power doubles Attack
  if (statKey === 'atk' && (mon.ability === 'huge-power' || mon.ability === 'pure-power')) {
    stat = Math.floor(stat * 2);
  }
  // Ability: Guts — 1.5x Attack when statused (replaces burn penalty)
  if (statKey === 'atk' && mon.ability === 'guts' && mon.status) {
    stat = Math.floor(stat * 1.5);
  } else if (statKey === 'atk' && mon.status === 'burn' && !isCrit) {
    // Burn halves physical attack (crits ignore burn penalty)
    stat = Math.floor(stat * 0.5);
  }

  // Paralysis halves speed (Gen VII+)
  if (statKey === 'spe' && mon.status === 'paralyze') stat = Math.floor(stat * 0.5);
  // Choice Scarf: 1.5x speed
  if (statKey === 'spe' && mon.item === 'choice-scarf') stat = Math.floor(stat * 1.5);
  // Assault Vest: 1.5x SpDef
  if (statKey === 'spd' && mon.item === 'assault-vest') stat = Math.floor(stat * 1.5);
  // Eviolite: 1.5x Def and SpDef (for NFE mons — simplified, always apply if item is eviolite)
  if ((statKey === 'def' || statKey === 'spd') && mon.item === 'eviolite') stat = Math.floor(stat * 1.5);

  return stat;
}

// --- Type effectiveness ---
function getTypeEffectiveness(moveType, defenderTypes) {
  let eff = 1;
  for (const dt of defenderTypes) {
    eff *= (TYPE_CHART[moveType]?.[dt] ?? 1);
  }
  return eff;
}

// --- Calculate battle damage ---
function calcBattleDamage(attacker, defender, move, isCritical = false) {
  if (move.category === 'status') return 0;
  if (move.power === 0) return 0;

  const level = attacker.level;
  const isPhysical = move.category === 'physical';
  // Crits ignore attacker's negative boosts and defender's positive boosts
  const atkStat = getEffectiveStat(attacker, isPhysical ? 'atk' : 'spa', { isCrit: isCritical, isAttacker: true });
  const defStat = getEffectiveStat(defender, isPhysical ? 'def' : 'spd', { isCrit: isCritical, isAttacker: false });

  // Effective power (Technician, weather-boosted moves)
  let power = move.power;
  if (attacker.ability === 'technician' && power <= 60) power = Math.floor(power * 1.5);

  let baseDamage = Math.floor(
    Math.floor(
      (Math.floor((2 * level) / 5 + 2) * power * atkStat) / defStat
    ) / 50
  ) + 2;

  // Weather modifiers
  const weather = battleState?.weather;
  if (weather === 'sun' && move.type === 'fire') baseDamage = Math.floor(baseDamage * 1.5);
  else if (weather === 'sun' && move.type === 'water') baseDamage = Math.floor(baseDamage * 0.5);
  else if (weather === 'rain' && move.type === 'water') baseDamage = Math.floor(baseDamage * 1.5);
  else if (weather === 'rain' && move.type === 'fire') baseDamage = Math.floor(baseDamage * 0.5);

  if (isCritical) baseDamage = Math.floor(baseDamage * 1.5);

  // STAB
  let stab = 1;
  if (attacker.types.includes(move.type)) {
    stab = attacker.ability === 'adaptability' ? 2 : 1.5;
  }

  // Type effectiveness
  const typeEff = getTypeEffectiveness(move.type, defender.types);
  if (typeEff === 0) return 0;

  // Ability levitate immunity
  if (defender.ability === 'levitate' && move.type === 'ground') return 0;
  // Ability: Flash Fire grants fire immunity + fire boost
  if (defender.ability === 'flash-fire' && move.type === 'fire') return 0;
  // Ability: Water Absorb / Volt Absorb / Storm Drain / Lightning Rod
  if ((defender.ability === 'water-absorb' || defender.ability === 'storm-drain') && move.type === 'water') return 0;
  if ((defender.ability === 'volt-absorb' || defender.ability === 'lightning-rod') && move.type === 'electric') return 0;

  // Item modifiers
  let itemMod = 1;
  if (attacker.item === 'life-orb') itemMod = 1.3;
  else if (attacker.item === 'choice-band' && isPhysical) itemMod = 1.5;
  else if (attacker.item === 'choice-specs' && !isPhysical) itemMod = 1.5;
  else if (attacker.item === 'expert-belt' && typeEff > 1) itemMod = 1.2;

  // Ability modifiers (defensive)
  let abilityMod = 1;
  if (defender.ability === 'multiscale' && defender.currentHp === defender.maxHp) abilityMod *= 0.5;
  if ((defender.ability === 'filter' || defender.ability === 'solid-rock') && typeEff > 1) abilityMod *= 0.75;
  if (defender.ability === 'thick-fat' && (move.type === 'fire' || move.type === 'ice')) abilityMod *= 0.5;
  // Sheer Force: 1.3x on moves with secondary effects, but removes the secondary effect
  if (attacker.ability === 'sheer-force' && move.effectChance && move.effectChance > 0) abilityMod *= 1.3;

  // Spread move reduction in doubles (0.75x)
  const isSpread = move.target === 'all-opponents' || move.target === 'all-other-pokemon';
  const spreadMod = isSpread ? 0.75 : 1;

  // Random factor 85-100
  const roll = Math.floor(Math.random() * 16) + 85;
  let dmg = baseDamage;
  dmg = Math.floor(dmg * spreadMod);
  dmg = Math.floor(dmg * roll / 100);
  dmg = Math.floor(dmg * stab);
  dmg = Math.floor(dmg * typeEff);
  dmg = Math.floor(dmg * itemMod);
  dmg = Math.floor(dmg * abilityMod);
  dmg = Math.max(dmg, 1);

  return dmg;
}

// --- Apply status move effects ---
function applyMoveEffects(attacker, defender, move, allMons) {
  const log = [];
  const meta = move.meta;
  if (!meta) return log;

  const ailment = meta.ailment?.name;
  const category = meta.category?.name;
  const statChanges = meta.stat_changes || [];
  const drain = meta.drain || 0;
  const healing = meta.healing || 0;
  const effectChance = move.effectChance || 100;
  const rolls = Math.random() * 100 < effectChance;

  // Sheer Force suppresses secondary effects on damaging moves
  if (attacker.ability === 'sheer-force' && move.category !== 'status' && move.effectChance) {
    return log; // no secondary effects
  }

  // Status ailments
  if (ailment && ailment !== 'none' && !defender.status && rolls) {
    const statusMap = {
      'burn': 'burn', 'paralysis': 'paralyze', 'poison': 'poison',
      'freeze': 'freeze', 'sleep': 'sleep', 'toxic': 'toxic'
    };
    const immunities = {
      'burn': ['fire'], 'paralyze': ['electric'],
      'poison': ['poison', 'steel'], 'toxic': ['poison', 'steel'],
      'freeze': ['ice']
    };
    const statusKey = statusMap[ailment];
    if (statusKey) {
      const immune = (immunities[statusKey] || []).some(t => defender.types.includes(t));
      // Ability: Limber prevents paralysis, Immunity prevents poison/toxic
      const abilityImmune =
        (statusKey === 'paralyze' && defender.ability === 'limber') ||
        ((statusKey === 'poison' || statusKey === 'toxic') && defender.ability === 'immunity') ||
        (statusKey === 'burn' && defender.ability === 'water-veil') ||
        (statusKey === 'sleep' && (defender.ability === 'insomnia' || defender.ability === 'vital-spirit'));
      if (!immune && !abilityImmune) {
        defender.status = statusKey;
        if (statusKey === 'toxic') defender.toxicCounter = 0;
        if (statusKey === 'sleep') defender.sleepTurns = Math.floor(Math.random() * 3) + 1;
        log.push({ type: 'status', target: defender.species, status: statusKey });
      }
    }
  }

  // Self-healing
  if (healing > 0) {
    const healAmount = Math.floor(attacker.maxHp * healing / 100);
    attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + healAmount);
    log.push({ type: 'heal', target: attacker.species, amount: healAmount });
  }

  // Drain
  if (drain > 0) {
    // drain is applied after damage in the main flow
  }

  // Protect-like (with consecutive-use fail chance)
  if (move.name === 'protect' || move.name === 'detect' || move.name === 'wide-guard'
      || move.name === 'quick-guard' || move.name === 'baneful-bunker' || move.name === 'kings-shield') {
    if (attacker.protectConsecutive && Math.random() < 0.5) {
      log.push({ type: 'miss', text: `But it failed!` });
    } else {
      attacker.protectActive = true;
      attacker.protectConsecutive = true;
      log.push({ type: 'protect', text: `${attacker.species} protected itself!` });
    }
  }

  // Weather-setting moves
  if (move.name === 'rain-dance') {
    battleState.weather = 'rain';
    battleState.weatherTurns = attacker.item === 'damp-rock' ? 8 : 5;
    log.push({ type: 'residual', text: `It started to rain!` });
  } else if (move.name === 'sunny-day') {
    battleState.weather = 'sun';
    battleState.weatherTurns = attacker.item === 'heat-rock' ? 8 : 5;
    log.push({ type: 'residual', text: `The sunlight got harsh!` });
  } else if (move.name === 'sandstorm') {
    battleState.weather = 'sandstorm';
    battleState.weatherTurns = attacker.item === 'smooth-rock' ? 8 : 5;
    log.push({ type: 'residual', text: `A sandstorm kicked up!` });
  } else if (move.name === 'hail') {
    battleState.weather = 'hail';
    battleState.weatherTurns = attacker.item === 'icy-rock' ? 8 : 5;
    log.push({ type: 'residual', text: `It started to hail!` });
  }

  // Trick Room
  if (move.name === 'trick-room') {
    if (battleState.trickRoom > 0) {
      battleState.trickRoom = 0;
      log.push({ type: 'residual', text: `Trick Room wore off!` });
    } else {
      battleState.trickRoom = 5;
      log.push({ type: 'residual', text: `Trick Room distorted the dimensions!` });
    }
  }

  // Tailwind (doubles speed for 4 turns — simplified as +2 boost to all allies)
  if (move.name === 'tailwind') {
    const side = attacker.isPlayer ? battleState.player : battleState.opponent;
    for (const idx of side.active) {
      const mon = side.team[idx];
      if (mon && mon.currentHp > 0) {
        const prev = mon.boosts.spe || 0;
        mon.boosts.spe = Math.min(6, prev + 2);
      }
    }
    log.push({ type: 'boost', text: `Tailwind blew from behind ${attacker.isPlayer ? 'your' : "the opponent's"} team!` });
  }

  return log;
}

// --- Process stat boost moves ---
function processStatChanges(user, target, move) {
  const log = [];
  const boostMoves = {
    'swords-dance': { target: 'self', boosts: { atk: 2 } },
    'nasty-plot': { target: 'self', boosts: { spa: 2 } },
    'dragon-dance': { target: 'self', boosts: { atk: 1, spe: 1 } },
    'calm-mind': { target: 'self', boosts: { spa: 1, spd: 1 } },
    'bulk-up': { target: 'self', boosts: { atk: 1, def: 1 } },
    'iron-defense': { target: 'self', boosts: { def: 2 } },
    'agility': { target: 'self', boosts: { spe: 2 } },
    'quiver-dance': { target: 'self', boosts: { spa: 1, spd: 1, spe: 1 } },
    'shell-smash': { target: 'self', boosts: { atk: 2, spa: 2, spe: 2, def: -1, spd: -1 } },
    'work-up': { target: 'self', boosts: { atk: 1, spa: 1 } },
    'coil': { target: 'self', boosts: { atk: 1, def: 1, accuracy: 1 } },
    'tail-glow': { target: 'self', boosts: { spa: 3 } },
    'cotton-guard': { target: 'self', boosts: { def: 3 } },
    'charm': { target: 'foe', boosts: { atk: -2 } },
    'fake-tears': { target: 'foe', boosts: { spd: -2 } },
    'screech': { target: 'foe', boosts: { def: -2 } },
    'growl': { target: 'foe', boosts: { atk: -1 } },
    'leer': { target: 'foe', boosts: { def: -1 } },
    'helping-hand': { target: 'self', boosts: {} },
  };

  // Ability: Clear Body / White Smoke prevents stat drops from foes
  const def = boostMoves[move.name];
  if (def) {
    const mon = def.target === 'self' ? user : target;
    for (const [stat, change] of Object.entries(def.boosts)) {
      if (change < 0 && def.target === 'foe' && (mon.ability === 'clear-body' || mon.ability === 'white-smoke')) {
        log.push({ type: 'boost', text: `${mon.species}'s ${mon.ability === 'clear-body' ? 'Clear Body' : 'White Smoke'} prevents stat loss!` });
        continue;
      }
      const prev = mon.boosts[stat] || 0;
      mon.boosts[stat] = Math.max(-6, Math.min(6, prev + change));
      const dir = change > 0 ? 'rose' : 'fell';
      const sharpness = Math.abs(change) >= 3 ? ' drastically' : Math.abs(change) === 2 ? ' sharply' : '';
      log.push({
        type: 'boost',
        target: mon.species,
        stat,
        change,
        text: `${mon.species}'s ${stat.toUpperCase()}${sharpness} ${dir}!`
      });
    }
  }

  return log;
}

// --- Check accuracy ---
function checkAccuracy(attacker, defender, move) {
  if (move.accuracy === null) return true; // never-miss moves
  const accStage = (attacker.boosts.accuracy || 0) - (defender.boosts.evasion || 0);
  const stages = [3/9, 3/8, 3/7, 3/6, 3/5, 3/4, 3/3, 4/3, 5/3, 6/3, 7/3, 8/3, 9/3];
  const mult = stages[Math.max(0, Math.min(12, accStage + 6))];
  const finalAcc = move.accuracy * mult;
  return Math.random() * 100 < finalAcc;
}

// --- End-of-turn effects ---
function endOfTurnEffects(mon) {
  const log = [];
  if (mon.currentHp <= 0) return log;

  switch (mon.status) {
    case 'burn': {
      const dmg = Math.max(1, Math.floor(mon.maxHp / 16));
      mon.currentHp = Math.max(0, mon.currentHp - dmg);
      log.push({ type: 'residual', text: `${mon.species} is hurt by its burn! (-${dmg} HP)` });
      break;
    }
    case 'poison': {
      if (mon.ability === 'poison-heal') break; // handled below
      const dmg = Math.max(1, Math.floor(mon.maxHp / 8));
      mon.currentHp = Math.max(0, mon.currentHp - dmg);
      log.push({ type: 'residual', text: `${mon.species} is hurt by poison! (-${dmg} HP)` });
      break;
    }
    case 'toxic': {
      if (mon.ability === 'poison-heal') break; // handled below
      mon.toxicCounter++;
      const dmg = Math.max(1, Math.floor(mon.maxHp * mon.toxicCounter / 16));
      mon.currentHp = Math.max(0, mon.currentHp - dmg);
      log.push({ type: 'residual', text: `${mon.species} is badly poisoned! (-${dmg} HP)` });
      break;
    }
  }

  // Weather damage
  const weather = battleState?.weather;
  if (weather === 'sandstorm' && !['rock', 'ground', 'steel'].some(t => mon.types.includes(t))
      && mon.ability !== 'sand-veil' && mon.ability !== 'sand-rush' && mon.ability !== 'sand-force'
      && mon.ability !== 'magic-guard' && mon.ability !== 'overcoat') {
    const dmg = Math.max(1, Math.floor(mon.maxHp / 16));
    mon.currentHp = Math.max(0, mon.currentHp - dmg);
    log.push({ type: 'residual', text: `${mon.species} is buffeted by the sandstorm! (-${dmg} HP)` });
  }
  if (weather === 'hail' && !mon.types.includes('ice')
      && mon.ability !== 'ice-body' && mon.ability !== 'snow-cloak'
      && mon.ability !== 'magic-guard' && mon.ability !== 'overcoat') {
    const dmg = Math.max(1, Math.floor(mon.maxHp / 16));
    mon.currentHp = Math.max(0, mon.currentHp - dmg);
    log.push({ type: 'residual', text: `${mon.species} is buffeted by hail! (-${dmg} HP)` });
  }

  // Ability: Poison Heal — heals instead of taking poison damage
  if (mon.ability === 'poison-heal' && (mon.status === 'poison' || mon.status === 'toxic') && mon.currentHp < mon.maxHp) {
    const heal = Math.max(1, Math.floor(mon.maxHp / 8));
    mon.currentHp = Math.min(mon.maxHp, mon.currentHp + heal);
    log.push({ type: 'residual', text: `${mon.species} restored HP with Poison Heal! (+${heal} HP)` });
  }

  // Leftovers
  if (mon.item === 'leftovers' && mon.currentHp < mon.maxHp && mon.currentHp > 0) {
    const heal = Math.max(1, Math.floor(mon.maxHp / 16));
    mon.currentHp = Math.min(mon.maxHp, mon.currentHp + heal);
    log.push({ type: 'residual', text: `${mon.species} restored HP with Leftovers! (+${heal} HP)` });
  }

  // Black Sludge (heals poison types, damages others)
  if (mon.item === 'black-sludge' && mon.currentHp > 0) {
    if (mon.types.includes('poison')) {
      if (mon.currentHp < mon.maxHp) {
        const heal = Math.max(1, Math.floor(mon.maxHp / 16));
        mon.currentHp = Math.min(mon.maxHp, mon.currentHp + heal);
        log.push({ type: 'residual', text: `${mon.species} restored HP with Black Sludge! (+${heal} HP)` });
      }
    } else {
      const dmg = Math.max(1, Math.floor(mon.maxHp / 8));
      mon.currentHp = Math.max(0, mon.currentHp - dmg);
      log.push({ type: 'residual', text: `${mon.species} is hurt by Black Sludge! (-${dmg} HP)` });
    }
  }

  // Sitrus Berry (restores 25% HP when below 50%) — consumed once
  if (mon.item === 'sitrus-berry' && mon.currentHp > 0 && mon.currentHp <= mon.maxHp / 2) {
    const heal = Math.max(1, Math.floor(mon.maxHp / 4));
    mon.currentHp = Math.min(mon.maxHp, mon.currentHp + heal);
    mon.item = ''; // consumed
    log.push({ type: 'residual', text: `${mon.species} restored HP with its Sitrus Berry! (+${heal} HP)` });
  }

  // Ability: Speed Boost
  if (mon.ability === 'speed-boost') {
    const prev = mon.boosts.spe || 0;
    if (prev < 6) {
      mon.boosts.spe = prev + 1;
      log.push({ type: 'boost', text: `${mon.species}'s Speed Boost raised its SPE!` });
    }
  }

  return log;
}

// --- Execute a single action ---
function executeAction(action, allMons) {
  const log = [];
  const { attacker, defender, move } = action;

  if (attacker.currentHp <= 0) return log;
  if (defender && defender.currentHp <= 0) {
    const side = defender.isPlayer ? battleState.player : battleState.opponent;
    const altTarget = side.active
      .map(i => side.team[i])
      .find(m => m && m !== defender && m.currentHp > 0);
    if (altTarget) {
      action.defender = altTarget;
    } else {
      return log;
    }
  }

  const target = action.defender;

  // Check paralyze (25% fully paralyzed)
  if (attacker.status === 'paralyze' && Math.random() < 0.25) {
    log.push({ type: 'cant-move', text: `${attacker.species} is paralyzed and can't move!` });
    return log;
  }

  // Check sleep (counter-based, 1-3 turns)
  if (attacker.status === 'sleep') {
    if (attacker.sleepTurns !== undefined && attacker.sleepTurns > 0) {
      attacker.sleepTurns--;
      if (attacker.sleepTurns <= 0) {
        attacker.status = null;
        log.push({ type: 'wake', text: `${attacker.species} woke up!` });
      } else {
        log.push({ type: 'cant-move', text: `${attacker.species} is fast asleep!` });
        return log;
      }
    } else {
      // Fallback: random wake for mons that didn't get a counter
      if (Math.random() < 0.33) {
        attacker.status = null;
        log.push({ type: 'wake', text: `${attacker.species} woke up!` });
      } else {
        log.push({ type: 'cant-move', text: `${attacker.species} is fast asleep!` });
        return log;
      }
    }
  }

  // Check freeze (20% self-thaw, fire moves thaw user)
  if (attacker.status === 'freeze') {
    if (Math.random() < 0.2 || move.type === 'fire') {
      attacker.status = null;
      log.push({ type: 'thaw', text: `${attacker.species} thawed out!` });
    } else {
      log.push({ type: 'cant-move', text: `${attacker.species} is frozen solid!` });
      return log;
    }
  }

  log.push({ type: 'use-move', text: `${attacker.species} used ${move.displayName}!` });

  // Protect check — blocks ALL moves (damaging and status)
  if (target && target.protectActive) {
    log.push({ type: 'protected', text: `${target.species} protected itself!` });
    return log;
  }

  // Accuracy check
  if (target && !checkAccuracy(attacker, target, move)) {
    log.push({ type: 'miss', text: `${attacker.species}'s attack missed!` });
    return log;
  }

  // Stat changes
  const boostLog = processStatChanges(attacker, target, move);
  log.push(...boostLog);

  // Status move effects
  if (move.category === 'status') {
    if (target) {
      const effectLog = applyMoveEffects(attacker, target, move, allMons);
      log.push(...effectLog);
    }
    return log;
  }

  // Damage
  if (target) {
    // Critical hit rate: stage 0 = 1/24, stage 1+ = 1/8, stage 2+ = 1/2, stage 3+ = always
    // High-crit moves: slash, stone-edge, night-slash, cross-chop, psycho-cut, leaf-blade, crabhammer, etc.
    const highCritMoves = [
      'slash', 'stone-edge', 'night-slash', 'cross-chop', 'psycho-cut',
      'leaf-blade', 'crabhammer', 'cross-poison', 'shadow-claw', 'drill-run',
      'razor-leaf', 'air-cutter', 'attack-order', 'spacial-rend',
    ];
    let critStage = 0;
    if (highCritMoves.includes(move.name)) critStage += 1;
    if (attacker.ability === 'super-luck') critStage += 1;
    if (attacker.item === 'scope-lens' || attacker.item === 'razor-claw') critStage += 1;

    const critRates = [1/24, 1/8, 1/2, 1]; // stages 0, 1, 2, 3+
    const critChance = critRates[Math.min(critStage, 3)];
    const isCritical = Math.random() < critChance;

    // Ability: Battle Armor / Shell Armor block crits
    const critBlocked = (target.ability === 'battle-armor' || target.ability === 'shell-armor');
    const finalCrit = isCritical && !critBlocked;

    const dmg = calcBattleDamage(attacker, target, move, finalCrit);
    const typeEff = getTypeEffectiveness(move.type, target.types);

    if (dmg > 0) {
      let actualDmg = dmg;

      // Focus Sash: survive OHKO from full HP with 1 HP
      if (target.item === 'focus-sash' && target.currentHp === target.maxHp && actualDmg >= target.currentHp) {
        actualDmg = target.currentHp - 1;
        target.item = ''; // consumed
        log.push({ type: 'resist', text: `${target.species} held on with its Focus Sash!` });
      }

      // Ability: Sturdy (same as Focus Sash at full HP)
      if (target.ability === 'sturdy' && target.currentHp === target.maxHp && actualDmg >= target.currentHp) {
        actualDmg = target.currentHp - 1;
        log.push({ type: 'resist', text: `${target.species} endured the hit with Sturdy!` });
      }

      target.currentHp = Math.max(0, target.currentHp - actualDmg);

      if (finalCrit) log.push({ type: 'crit', text: `A critical hit!` });
      if (typeEff > 1) log.push({ type: 'effective', text: `It's super effective!` });
      else if (typeEff < 1 && typeEff > 0) log.push({ type: 'resist', text: `It's not very effective...` });
      else if (typeEff === 0) log.push({ type: 'immune', text: `It doesn't affect ${target.species}...` });

      log.push({ type: 'damage', target: target.species, damage: actualDmg, hpLeft: target.currentHp, maxHp: target.maxHp });

      // Fire moves thaw frozen targets
      if (move.type === 'fire' && target.status === 'freeze' && target.currentHp > 0) {
        target.status = null;
        log.push({ type: 'thaw', text: `${target.species} was thawed by the fire attack!` });
      }

      // Drain
      const drain = move.meta?.drain || 0;
      if (drain > 0) {
        const healAmt = Math.floor(actualDmg * drain / 100);
        attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + healAmt);
        log.push({ type: 'drain', text: `${attacker.species} drained ${healAmt} HP!` });
      }

      // Recoil from move itself (e.g. brave-bird, flare-blitz, head-smash)
      const moveRecoil = move.meta?.drain || 0;
      if (moveRecoil < 0) {
        const recoilAmt = Math.max(1, Math.floor(actualDmg * Math.abs(moveRecoil) / 100));
        if (attacker.ability !== 'rock-head') {
          attacker.currentHp = Math.max(0, attacker.currentHp - recoilAmt);
          log.push({ type: 'recoil', text: `${attacker.species} was hurt by recoil! (-${recoilAmt} HP)` });
        }
      }

      // Life Orb recoil (Sheer Force + Life Orb = no recoil)
      if (attacker.item === 'life-orb' && !(attacker.ability === 'sheer-force' && move.effectChance)) {
        const recoil = Math.max(1, Math.floor(attacker.maxHp / 10));
        attacker.currentHp = Math.max(0, attacker.currentHp - recoil);
        log.push({ type: 'recoil', text: `${attacker.species} lost some HP from Life Orb!` });
      }

      // Secondary effects from damaging moves
      if (move.effectChance && Math.random() * 100 < move.effectChance) {
        const effectLog = applyMoveEffects(attacker, target, move, allMons);
        log.push(...effectLog);
      }

      // Move's guaranteed stat changes on the user (e.g. Close Combat -1 Def/-1 SpD, Draco Meteor -2 SpA)
      if (move.statChanges && move.statChanges.length > 0 && attacker.currentHp > 0) {
        for (const sc of move.statChanges) {
          const statName = sc.stat?.name;
          const change = sc.change;
          if (!statName || !change) continue;
          const statMap = { 'attack': 'atk', 'defense': 'def', 'special-attack': 'spa', 'special-defense': 'spd', 'speed': 'spe', 'accuracy': 'accuracy', 'evasion': 'evasion' };
          const key = statMap[statName];
          if (!key) continue;
          const prev = attacker.boosts[key] || 0;
          attacker.boosts[key] = Math.max(-6, Math.min(6, prev + change));
          const dir = change > 0 ? 'rose' : 'fell';
          const sharpness = Math.abs(change) >= 3 ? ' drastically' : Math.abs(change) === 2 ? ' sharply' : '';
          log.push({ type: 'boost', text: `${attacker.species}'s ${key.toUpperCase()}${sharpness} ${dir}!` });
        }
      }

      // Check attacker fainted from recoil
      if (attacker.currentHp <= 0) {
        log.push({ type: 'faint', text: `${attacker.species} fainted!` });
      }

      if (target.currentHp <= 0) {
        log.push({ type: 'faint', text: `${target.species} fainted!` });
      }
    } else {
      log.push({ type: 'immune', text: `It doesn't affect ${target.species}...` });
    }
  }

  return log;
}

// --- Sort actions by priority/speed ---
function sortActions(actions) {
  const trickRoom = battleState?.trickRoom > 0;
  return actions.sort((a, b) => {
    // Higher priority first
    const priA = a.move.priority || 0;
    const priB = b.move.priority || 0;
    if (priA !== priB) return priB - priA;

    // Speed — Trick Room reverses speed order
    const speA = getEffectiveStat(a.attacker, 'spe');
    const speB = getEffectiveStat(b.attacker, 'spe');
    if (speA !== speB) {
      return trickRoom ? speA - speB : speB - speA;
    }

    // Random tiebreak
    return Math.random() - 0.5;
  });
}

// --- Execute a full turn ---
export function executeTurn(playerActions, opponentActions) {
  if (!battleState || battleState.phase !== 'battle') return [];

  battleState.turn++;
  const turnLog = [{ type: 'turn-start', turn: battleState.turn }];

  // Tick down Trick Room
  if (battleState.trickRoom > 0) {
    battleState.trickRoom--;
    if (battleState.trickRoom === 0) {
      turnLog.push({ type: 'residual', text: `Trick Room wore off!` });
    }
  }

  // Tick down weather
  if (battleState.weatherTurns > 0) {
    battleState.weatherTurns--;
    if (battleState.weatherTurns === 0) {
      turnLog.push({ type: 'residual', text: `The ${battleState.weather} subsided!` });
      battleState.weather = null;
    }
  }

  // Reset protect — track consecutive protect usage
  const allMons = [...battleState.player.team, ...battleState.opponent.team];
  allMons.forEach(m => {
    if (m) {
      // If mon didn't use protect this turn, reset consecutive counter
      if (!m.protectActive) m.protectConsecutive = false;
      m.protectActive = false;
    }
  });

  // Combine actions
  const actions = [...playerActions, ...opponentActions];
  sortActions(actions);

  // Execute each action
  for (const action of actions) {
    const actionLog = executeAction(action, allMons);
    turnLog.push(...actionLog);
  }

  // End of turn effects
  for (const mon of allMons) {
    if (mon && mon.currentHp > 0) {
      const eotLog = endOfTurnEffects(mon);
      turnLog.push(...eotLog);
      if (mon.currentHp <= 0) {
        turnLog.push({ type: 'faint', text: `${mon.species} fainted!` });
      }
    }
  }

  // Update fainted sets and check for send-ins needed
  updateFaintedSets();

  // Check win
  const playerAlive = battleState.player.team.filter(m => m && m.currentHp > 0).length;
  const opponentAlive = battleState.opponent.team.filter(m => m && m.currentHp > 0).length;

  if (playerAlive === 0) {
    battleState.phase = 'ended';
    battleState.winner = 'opponent';
    turnLog.push({ type: 'battle-end', winner: 'opponent' });
  } else if (opponentAlive === 0) {
    battleState.phase = 'ended';
    battleState.winner = 'player';
    turnLog.push({ type: 'battle-end', winner: 'player' });
  }

  battleState.log.push(...turnLog);
  return turnLog;
}

function updateFaintedSets() {
  for (const side of [battleState.player, battleState.opponent]) {
    for (let i = 0; i < side.team.length; i++) {
      if (side.team[i] && side.team[i].currentHp <= 0) {
        side.fainted.add(i);
      }
    }
  }
}

// --- Get bench mons (non-active, non-fainted) ---
export function getBenchMons(side) {
  const bench = [];
  for (let i = 0; i < side.team.length; i++) {
    if (!side.active.includes(i) && !side.fainted.has(i) && side.team[i]) {
      bench.push({ index: i, mon: side.team[i] });
    }
  }
  return bench;
}

// --- Switch in a mon (with Intimidate) ---
export function switchIn(side, activeSlot, benchIndex) {
  side.active[activeSlot] = benchIndex;
  const mon = side.team[benchIndex];
  const logs = [{ type: 'switch', text: `${mon.species} was sent out!` }];

  // Ability: Intimidate — lower opposing active mons' Attack by 1
  if (mon.ability === 'intimidate') {
    const oppSide = side === battleState.player ? battleState.opponent : battleState.player;
    for (const oppIdx of oppSide.active) {
      const opp = oppSide.team[oppIdx];
      if (opp && opp.currentHp > 0) {
        if (opp.ability === 'clear-body' || opp.ability === 'white-smoke' || opp.ability === 'hyper-cutter') {
          logs.push({ type: 'boost', text: `${opp.species}'s ${opp.ability === 'hyper-cutter' ? 'Hyper Cutter' : opp.ability === 'clear-body' ? 'Clear Body' : 'White Smoke'} prevents Intimidate!` });
        } else {
          const prev = opp.boosts.atk || 0;
          opp.boosts.atk = Math.max(-6, prev - 1);
          logs.push({ type: 'boost', text: `${mon.species}'s Intimidate lowered ${opp.species}'s ATK!` });
          // Ability: Defiant — raises Attack by 2 when stat is lowered
          if (opp.ability === 'defiant') {
            opp.boosts.atk = Math.min(6, opp.boosts.atk + 2);
            logs.push({ type: 'boost', text: `${opp.species}'s Defiant raised its ATK sharply!` });
          }
          // Ability: Competitive — raises SpA by 2 when stat is lowered
          if (opp.ability === 'competitive') {
            const spaPrev = opp.boosts.spa || 0;
            opp.boosts.spa = Math.min(6, spaPrev + 2);
            logs.push({ type: 'boost', text: `${opp.species}'s Competitive raised its SPA sharply!` });
          }
        }
      }
    }
  }

  // Ability: Drizzle / Drought / Sand Stream / Snow Warning (weather on switch-in)
  if (mon.ability === 'drizzle') {
    battleState.weather = 'rain';
    battleState.weatherTurns = 5;
    logs.push({ type: 'residual', text: `${mon.species}'s Drizzle made it rain!` });
  } else if (mon.ability === 'drought') {
    battleState.weather = 'sun';
    battleState.weatherTurns = 5;
    logs.push({ type: 'residual', text: `${mon.species}'s Drought intensified the sun!` });
  } else if (mon.ability === 'sand-stream') {
    battleState.weather = 'sandstorm';
    battleState.weatherTurns = 5;
    logs.push({ type: 'residual', text: `${mon.species}'s Sand Stream whipped up a sandstorm!` });
  } else if (mon.ability === 'snow-warning') {
    battleState.weather = 'hail';
    battleState.weatherTurns = 5;
    logs.push({ type: 'residual', text: `${mon.species}'s Snow Warning summoned a hailstorm!` });
  }

  return logs;
}

// --- Check if side needs to send in replacements ---
export function needsReplacement(side) {
  const needed = [];
  for (let i = 0; i < side.active.length; i++) {
    const idx = side.active[i];
    if (side.team[idx] && side.team[idx].currentHp <= 0) {
      const bench = getBenchMons(side);
      if (bench.length > 0) {
        needed.push(i);
      }
    }
  }
  return needed;
}

// --- AI chooses move ---
export function aiChooseActions(side) {
  const actions = [];
  const oppSide = side === battleState.player ? battleState.opponent : battleState.player;

  for (const activeIdx of side.active) {
    const mon = side.team[activeIdx];
    if (!mon || mon.currentHp <= 0) continue;
    if (mon.moves.length === 0) continue;

    // Pick a target
    const targets = oppSide.active
      .map(i => oppSide.team[i])
      .filter(m => m && m.currentHp > 0);

    if (targets.length === 0) continue;

    // Score each move against each target
    let bestMove = mon.moves[0];
    let bestTarget = targets[0];
    let bestScore = -Infinity;

    for (const move of mon.moves) {
      if (move.pp <= 0) continue;
      for (const target of targets) {
        let score = 0;

        if (move.category === 'status') {
          // Boost moves are valuable early
          if (['swords-dance', 'nasty-plot', 'dragon-dance', 'calm-mind', 'quiver-dance', 'shell-smash'].includes(move.name)) {
            score = 60 - battleState.turn * 10;
          } else if (target.status) {
            score = -50; // don't status an already-statused mon
          } else {
            score = 30;
          }
        } else {
          const typeEff = getTypeEffectiveness(move.type, target.types);
          const stab = mon.types.includes(move.type) ? 1.5 : 1;
          const isPhysical = move.category === 'physical';
          const atkStat = getEffectiveStat(mon, isPhysical ? 'atk' : 'spa');
          score = (move.power || 0) * typeEff * stab * (atkStat / 100);

          // Prefer KO-ing low HP targets
          if (target.currentHp < target.maxHp * 0.3) score *= 1.5;

          if (typeEff === 0) score = -100;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMove = move;
          bestTarget = target;
        }
      }
    }

    bestMove.pp--;
    actions.push({ attacker: mon, defender: bestTarget, move: bestMove });
  }

  return actions;
}

// --- AI chooses replacement ---
export function aiChooseReplacement(side) {
  const oppSide = side === battleState.player ? battleState.opponent : battleState.player;
  const bench = getBenchMons(side);
  if (bench.length === 0) return null;

  // Pick the mon with best type advantage against opponent active
  const oppActive = oppSide.active
    .map(i => oppSide.team[i])
    .filter(m => m && m.currentHp > 0);

  let bestIdx = bench[0].index;
  let bestScore = -Infinity;

  for (const { index, mon } of bench) {
    let score = mon.currentHp / mon.maxHp * 50; // prefer healthier mon
    for (const opp of oppActive) {
      for (const move of mon.moves) {
        if (move.category === 'status') continue;
        const eff = getTypeEffectiveness(move.type, opp.types);
        const stab = mon.types.includes(move.type) ? 1.5 : 1;
        score += (move.power || 0) * eff * stab * 0.1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIdx = index;
    }
  }

  return bestIdx;
}

// --- Initialize battle ---
export async function initBattle(mode, playerSlots, opponentSlots, opponentName) {
  const playerTeam = [];
  for (let i = 0; i < playerSlots.length; i++) {
    const mon = await prepareBattleMon(playerSlots[i], true, i);
    if (mon) playerTeam.push(mon);
  }

  const opponentTeam = [];
  for (let i = 0; i < opponentSlots.length; i++) {
    const mon = await prepareBattleMon(opponentSlots[i], false, i);
    if (mon) opponentTeam.push(mon);
  }

  battleState = {
    mode,
    player: {
      name: t('battle.you'),
      team: playerTeam,
      active: [0, Math.min(1, playerTeam.length - 1)],
      fainted: new Set()
    },
    opponent: {
      name: opponentName || t('battle.opponent'),
      team: opponentTeam,
      active: [0, Math.min(1, opponentTeam.length - 1)],
      fainted: new Set()
    },
    log: [],
    turn: 0,
    phase: 'battle',
    winner: null,
    weather: null,
    weatherTurns: 0,
    trickRoom: 0,
  };

  // Trigger weather-setting abilities on lead mons
  const initLog = [];
  for (const side of [battleState.player, battleState.opponent]) {
    for (const idx of side.active) {
      const mon = side.team[idx];
      if (!mon) continue;
      // Weather abilities
      if (mon.ability === 'drizzle') { battleState.weather = 'rain'; battleState.weatherTurns = 5; initLog.push({ type: 'residual', text: `${mon.species}'s Drizzle made it rain!` }); }
      else if (mon.ability === 'drought') { battleState.weather = 'sun'; battleState.weatherTurns = 5; initLog.push({ type: 'residual', text: `${mon.species}'s Drought intensified the sun!` }); }
      else if (mon.ability === 'sand-stream') { battleState.weather = 'sandstorm'; battleState.weatherTurns = 5; initLog.push({ type: 'residual', text: `${mon.species}'s Sand Stream kicked up a sandstorm!` }); }
      else if (mon.ability === 'snow-warning') { battleState.weather = 'hail'; battleState.weatherTurns = 5; initLog.push({ type: 'residual', text: `${mon.species}'s Snow Warning summoned hail!` }); }
    }
  }
  // Trigger Intimidate on lead mons
  for (const side of [battleState.player, battleState.opponent]) {
    const oppSide = side === battleState.player ? battleState.opponent : battleState.player;
    for (const idx of side.active) {
      const mon = side.team[idx];
      if (!mon || mon.ability !== 'intimidate') continue;
      for (const oppIdx of oppSide.active) {
        const opp = oppSide.team[oppIdx];
        if (opp && opp.currentHp > 0) {
          if (opp.ability === 'clear-body' || opp.ability === 'white-smoke' || opp.ability === 'hyper-cutter') {
            initLog.push({ type: 'boost', text: `${opp.species}'s ability prevents Intimidate!` });
          } else {
            const prev = opp.boosts.atk || 0;
            opp.boosts.atk = Math.max(-6, prev - 1);
            initLog.push({ type: 'boost', text: `${mon.species}'s Intimidate lowered ${opp.species}'s ATK!` });
            if (opp.ability === 'defiant') {
              opp.boosts.atk = Math.min(6, opp.boosts.atk + 2);
              initLog.push({ type: 'boost', text: `${opp.species}'s Defiant raised its ATK sharply!` });
            }
            if (opp.ability === 'competitive') {
              opp.boosts.spa = Math.min(6, (opp.boosts.spa || 0) + 2);
              initLog.push({ type: 'boost', text: `${opp.species}'s Competitive raised its SPA sharply!` });
            }
          }
        }
      }
    }
  }
  battleState.log.push(...initLog);

  return battleState;
}

export function getBattleState() {
  return battleState;
}

export function resetBattle() {
  battleState = null;
}
