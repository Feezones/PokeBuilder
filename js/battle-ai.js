// ============================================
// PokéBuilder — PVE AI Team Generator
// ============================================
// Generates competitive doubles teams with roles and synergy.

import { getPokemon, getMove, getSpriteUrl } from './api.js';
import { parseBaseStats } from './utils.js';

// --- Competitive Pokémon Templates ---
// Each template defines a role-based set with nature, EVs, moves, items, abilities.
const COMPETITIVE_SETS = [
  // --- Physical Sweepers ---
  { name: 'garchomp', role: 'physical-sweeper', nature: 'jolly', ability: 'rough-skin',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['earthquake', 'dragon-claw', 'rock-slide', 'protect'] },
  { name: 'dragonite', role: 'physical-sweeper', nature: 'adamant', ability: 'multiscale',
    item: 'lum-berry', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['dragon-dance', 'dual-wingbeat', 'earthquake', 'extreme-speed'] },
  { name: 'tyranitar', role: 'physical-sweeper', nature: 'adamant', ability: 'sand-stream',
    item: 'choice-band', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['rock-slide', 'crunch', 'earthquake', 'ice-punch'] },
  { name: 'gyarados', role: 'physical-sweeper', nature: 'adamant', ability: 'intimidate',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['waterfall', 'earthquake', 'ice-fang', 'protect'] },
  { name: 'scizor', role: 'physical-sweeper', nature: 'adamant', ability: 'technician',
    item: 'choice-band', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['bullet-punch', 'u-turn', 'superpower', 'knock-off'] },
  { name: 'excadrill', role: 'physical-sweeper', nature: 'jolly', ability: 'mold-breaker',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['earthquake', 'iron-head', 'rock-slide', 'protect'] },
  { name: 'landorus-therian', role: 'physical-sweeper', nature: 'adamant', ability: 'intimidate',
    item: 'choice-scarf', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['earthquake', 'u-turn', 'rock-slide', 'superpower'] },
  { name: 'metagross', role: 'physical-sweeper', nature: 'adamant', ability: 'clear-body',
    item: 'assault-vest', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['iron-head', 'zen-headbutt', 'ice-punch', 'bullet-punch'] },
  { name: 'blaziken', role: 'physical-sweeper', nature: 'adamant', ability: 'speed-boost',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['flare-blitz', 'close-combat', 'protect', 'swords-dance'] },
  { name: 'lucario', role: 'physical-sweeper', nature: 'jolly', ability: 'inner-focus',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['close-combat', 'meteor-mash', 'extreme-speed', 'protect'] },

  // --- Special Sweepers ---
  { name: 'gengar', role: 'special-sweeper', nature: 'timid', ability: 'cursed-body',
    item: 'life-orb', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['shadow-ball', 'sludge-bomb', 'thunderbolt', 'protect'] },
  { name: 'togekiss', role: 'special-sweeper', nature: 'timid', ability: 'serene-grace',
    item: 'scope-lens', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['air-slash', 'dazzling-gleam', 'follow-me', 'protect'] },
  { name: 'volcarona', role: 'special-sweeper', nature: 'timid', ability: 'flame-body',
    item: 'life-orb', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['heat-wave', 'bug-buzz', 'quiver-dance', 'protect'] },
  { name: 'hydreigon', role: 'special-sweeper', nature: 'modest', ability: 'levitate',
    item: 'choice-specs', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['dark-pulse', 'draco-meteor', 'flamethrower', 'flash-cannon'] },
  { name: 'alakazam', role: 'special-sweeper', nature: 'timid', ability: 'magic-guard',
    item: 'life-orb', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['psychic', 'shadow-ball', 'focus-blast', 'protect'] },
  { name: 'chandelure', role: 'special-sweeper', nature: 'modest', ability: 'flash-fire',
    item: 'choice-specs', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['shadow-ball', 'heat-wave', 'energy-ball', 'trick'] },
  { name: 'rotom-wash', role: 'special-sweeper', nature: 'modest', ability: 'levitate',
    item: 'sitrus-berry', evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ['hydro-pump', 'thunderbolt', 'will-o-wisp', 'protect'] },
  { name: 'magnezone', role: 'special-sweeper', nature: 'modest', ability: 'magnet-pull',
    item: 'choice-specs', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['thunderbolt', 'flash-cannon', 'volt-switch', 'hidden-power'] },

  // --- Tanks / Walls ---
  { name: 'toxapex', role: 'wall', nature: 'bold', ability: 'regenerator',
    item: 'black-sludge', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['scald', 'toxic', 'recover', 'haze'] },
  { name: 'ferrothorn', role: 'wall', nature: 'relaxed', ability: 'iron-barbs',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['power-whip', 'gyro-ball', 'leech-seed', 'protect'] },
  { name: 'blissey', role: 'wall', nature: 'bold', ability: 'natural-cure',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['soft-boiled', 'seismic-toss', 'toxic', 'heal-bell'] },
  { name: 'clefable', role: 'wall', nature: 'bold', ability: 'magic-guard',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['moonblast', 'follow-me', 'soft-boiled', 'protect'] },
  { name: 'gastrodon', role: 'wall', nature: 'bold', ability: 'storm-drain',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['scald', 'earth-power', 'recover', 'protect'] },
  { name: 'hippowdon', role: 'wall', nature: 'impish', ability: 'sand-stream',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['earthquake', 'slack-off', 'stealth-rock', 'yawn'] },

  // --- Support ---
  { name: 'amoonguss', role: 'support', nature: 'bold', ability: 'regenerator',
    item: 'sitrus-berry', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['spore', 'rage-powder', 'giga-drain', 'protect'] },
  { name: 'grimmsnarl', role: 'support', nature: 'careful', ability: 'prankster',
    item: 'light-clay', evs: { hp: 252, atk: 0, def: 0, spa: 0, spd: 252, spe: 4 },
    moves: ['reflect', 'light-screen', 'thunder-wave', 'foul-play'] },
  { name: 'whimsicott', role: 'support', nature: 'timid', ability: 'prankster',
    item: 'focus-sash', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['tailwind', 'moonblast', 'encore', 'protect'] },
  { name: 'indeedee-female', role: 'support', nature: 'bold', ability: 'psychic-surge',
    item: 'sitrus-berry', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['follow-me', 'psychic', 'helping-hand', 'protect'] },
  { name: 'dusclops', role: 'support', nature: 'relaxed', ability: 'frisk',
    item: 'eviolite', evs: { hp: 252, atk: 0, def: 128, spa: 0, spd: 128, spe: 0 },
    moves: ['trick-room', 'night-shade', 'will-o-wisp', 'pain-split'] },
  { name: 'porygon2', role: 'support', nature: 'sassy', ability: 'download',
    item: 'eviolite', evs: { hp: 252, atk: 0, def: 128, spa: 0, spd: 128, spe: 0 },
    moves: ['trick-room', 'tri-attack', 'recover', 'ice-beam'] },

  // --- Mixed / Versatile ---
  { name: 'salamence', role: 'physical-sweeper', nature: 'jolly', ability: 'intimidate',
    item: 'life-orb', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['dragon-dance', 'dual-wingbeat', 'earthquake', 'protect'] },
  { name: 'arcanine', role: 'support', nature: 'adamant', ability: 'intimidate',
    item: 'sitrus-berry', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['flare-blitz', 'extreme-speed', 'will-o-wisp', 'protect'] },
  { name: 'milotic', role: 'wall', nature: 'bold', ability: 'competitive',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
    moves: ['scald', 'ice-beam', 'recover', 'protect'] },
  { name: 'heatran', role: 'special-sweeper', nature: 'modest', ability: 'flash-fire',
    item: 'leftovers', evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
    moves: ['heat-wave', 'flash-cannon', 'earth-power', 'protect'] },
  { name: 'rillaboom', role: 'physical-sweeper', nature: 'adamant', ability: 'grassy-surge',
    item: 'miracle-seed', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['grassy-glide', 'wood-hammer', 'knock-off', 'fake-out'] },
  { name: 'incineroar', role: 'support', nature: 'adamant', ability: 'intimidate',
    item: 'sitrus-berry', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['flare-blitz', 'knock-off', 'fake-out', 'parting-shot'] },
  { name: 'urshifu-rapid-strike', role: 'physical-sweeper', nature: 'jolly', ability: 'unseen-fist',
    item: 'choice-band', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 },
    moves: ['surging-strikes', 'close-combat', 'aqua-jet', 'u-turn'] },
  { name: 'zapdos', role: 'special-sweeper', nature: 'timid', ability: 'static',
    item: 'life-orb', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['thunderbolt', 'heat-wave', 'hurricane', 'protect'] },
  { name: 'kingdra', role: 'special-sweeper', nature: 'modest', ability: 'swift-swim',
    item: 'life-orb', evs: { hp: 0, atk: 0, def: 0, spa: 252, spd: 4, spe: 252 },
    moves: ['hydro-pump', 'draco-meteor', 'ice-beam', 'protect'] },
  { name: 'conkeldurr', role: 'physical-sweeper', nature: 'adamant', ability: 'guts',
    item: 'flame-orb', evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
    moves: ['close-combat', 'mach-punch', 'knock-off', 'protect'] },
];

// --- Difficulty Scaling ---
const DIFFICULTY_PROFILES = {
  easy: { ivBase: 20, evMultiplier: 0.6, levelRange: [45, 48], teamSize: 6 },
  normal: { ivBase: 28, evMultiplier: 0.85, levelRange: [48, 50], teamSize: 6 },
  hard: { ivBase: 31, evMultiplier: 1.0, levelRange: [50, 50], teamSize: 6 },
};

// --- Team Compositions (role distribution for doubles) ---
const TEAM_ARCHETYPES = [
  { name: 'Hyper Offense', roles: ['physical-sweeper', 'special-sweeper', 'physical-sweeper', 'support', 'special-sweeper', 'physical-sweeper'] },
  { name: 'Balanced', roles: ['physical-sweeper', 'special-sweeper', 'wall', 'support', 'physical-sweeper', 'wall'] },
  { name: 'Bulky Offense', roles: ['physical-sweeper', 'wall', 'support', 'special-sweeper', 'wall', 'support'] },
  { name: 'Trick Room', roles: ['support', 'physical-sweeper', 'wall', 'special-sweeper', 'support', 'physical-sweeper'] },
  { name: 'Weather', roles: ['physical-sweeper', 'special-sweeper', 'support', 'wall', 'physical-sweeper', 'special-sweeper'] },
  { name: 'Intimidate Spam', roles: ['support', 'support', 'special-sweeper', 'physical-sweeper', 'wall', 'physical-sweeper'] },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- Generate a competitive PVE team ---
export function generatePVETeam(difficulty = 'normal') {
  const profile = DIFFICULTY_PROFILES[difficulty] || DIFFICULTY_PROFILES.normal;
  const archetype = pickRandom(TEAM_ARCHETYPES);

  const usedNames = new Set();
  const usedTypes = new Map(); // track type coverage
  const team = [];

  for (const role of archetype.roles) {
    const candidates = COMPETITIVE_SETS.filter(s =>
      s.role === role && !usedNames.has(s.name)
    );

    if (candidates.length === 0) {
      // Fallback: any unused mon
      const fallback = COMPETITIVE_SETS.filter(s => !usedNames.has(s.name));
      if (fallback.length === 0) break;
      const pick = pickRandom(fallback);
      usedNames.add(pick.name);
      team.push(buildSlotFromTemplate(pick, profile));
      continue;
    }

    // Prefer type diversity
    const shuffled = shuffle(candidates);
    let chosen = shuffled[0];

    // Simple diversity score
    for (const c of shuffled) {
      const typePenalty = (usedTypes.get(c.name.split('-')[0]) || 0);
      if (typePenalty === 0) {
        chosen = c;
        break;
      }
    }

    usedNames.add(chosen.name);
    team.push(buildSlotFromTemplate(chosen, profile));
  }

  return { archetype: archetype.name, team };
}

function buildSlotFromTemplate(template, profile) {
  const level = Math.floor(
    Math.random() * (profile.levelRange[1] - profile.levelRange[0] + 1)
  ) + profile.levelRange[0];

  const ivVal = Math.min(31, profile.ivBase + Math.floor(Math.random() * (32 - profile.ivBase)));
  const ivs = { hp: ivVal, atk: ivVal, def: ivVal, spa: ivVal, spd: ivVal, spe: ivVal };

  const evs = {};
  for (const [key, val] of Object.entries(template.evs)) {
    evs[key] = Math.floor(val * profile.evMultiplier);
  }

  return {
    name: template.name,
    species: template.name,
    types: [],  // will be filled when loading from API
    ability: template.ability,
    item: template.item,
    nature: template.nature,
    level,
    moves: [...template.moves],
    evs,
    ivs,
    baseStats: null,
    sprite: '',
  };
}

// --- Get list of available difficulties ---
export function getDifficulties() {
  return Object.keys(DIFFICULTY_PROFILES);
}
