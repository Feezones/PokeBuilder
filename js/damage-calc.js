// ============================================
// PokéBuilder — Damage Calculator Module
// ============================================

import {
  getPokemonList, getPokemon, getMoveList, getMove, getItemList,
  getSpriteUrl, formatName
} from './api.js';
import {
  NATURES, STAT_KEYS, STAT_NAMES, TYPE_COLORS, TYPE_CHART,
  calcAllStats, calcDamage, parseBaseStats, getNatureMod,
  capitalize, createSearchableSelect
} from './utils.js';
import { t } from './i18n.js';
import { showAbilityInfo, showMoveInfo, showItemInfo } from './info-popup.js';

let attackerData = null;
let defenderData = null;
let selectedMove = null;

let atkPokemonSearch, defPokemonSearch, atkItemSearch, defItemSearch, atkMoveSearch;

const moveRenderOption = (item) => {
  if (item.type) {
    const color = TYPE_COLORS[item.type] || '#888';
    return `${item.label} <span class="type-badge-sm" style="background:${color}">${item.type.toUpperCase()}</span>`;
  }
  return item.label;
};

export async function initDamageCalc() {
  const [pokeList, moveList, itemList] = await Promise.all([
    getPokemonList(), getMoveList(), getItemList()
  ]);

  const pokemonItems = pokeList.map(p => ({
    name: p.name, id: p.id, label: formatName(p.name)
  }));
  const moveItems = moveList.map(m => ({
    name: m.name, label: formatName(m.name)
  }));
  const itemItems = itemList.map(i => ({
    name: i.name, label: formatName(i.name)
  }));

  const spriteOption = (item) =>
    `<img src="${getSpriteUrl(item.id)}" alt="" width="30" height="30">${item.label} <span style="color:var(--text-muted)">#${item.id}</span>`;

  // Attacker Pokémon search
  atkPokemonSearch = createSearchableSelect(
    document.getElementById('dc-atk-pokemon-search'),
    pokemonItems,
    async (item) => { await selectAttacker(item.name, item.id); },
    { renderOption: spriteOption }
  );

  // Defender Pokémon search
  defPokemonSearch = createSearchableSelect(
    document.getElementById('dc-def-pokemon-search'),
    pokemonItems,
    async (item) => { await selectDefender(item.name, item.id); },
    { renderOption: spriteOption }
  );

  // Attacker Item search
  atkItemSearch = createSearchableSelect(
    document.getElementById('dc-atk-item-search'),
    itemItems,
    () => {}
  );

  // Defender Item search
  defItemSearch = createSearchableSelect(
    document.getElementById('dc-def-item-search'),
    itemItems,
    () => {}
  );

  // Move search
  atkMoveSearch = createSearchableSelect(
    document.getElementById('dc-atk-move-search'),
    moveItems,
    async (item) => { await selectMove(item.name); },
    { renderOption: moveRenderOption }
  );

  // Nature selectors
  const natureHTML = NATURES.map(n => {
    let label = capitalize(n.name);
    if (n.plus) label += ` (+${STAT_NAMES[n.plus]} -${STAT_NAMES[n.minus]})`;
    return `<option value="${n.name}">${label}</option>`;
  }).join('');
  document.getElementById('dc-atk-nature').innerHTML = natureHTML;
  document.getElementById('dc-def-nature').innerHTML = natureHTML;

  // Render stat grids
  renderStatGrid('dc-atk-stats');
  renderStatGrid('dc-def-stats');

  // Calculate button
  document.getElementById('dc-calculate').addEventListener('click', calculateDamage);

  // Info buttons
  document.getElementById('btn-dc-atk-ability-info').addEventListener('click', () => {
    const ability = document.getElementById('dc-atk-ability').value;
    if (ability) showAbilityInfo(ability);
  });
  document.getElementById('btn-dc-def-ability-info').addEventListener('click', () => {
    const ability = document.getElementById('dc-def-ability').value;
    if (ability) showAbilityInfo(ability);
  });
  document.getElementById('btn-dc-atk-move-info').addEventListener('click', () => {
    if (selectedMove) showMoveInfo(selectedMove.name);
  });
  document.getElementById('btn-dc-atk-item-info').addEventListener('click', () => {
    const item = document.getElementById('dc-atk-item-search').querySelector('.search-input')?.dataset.value;
    if (item) showItemInfo(item);
  });
  document.getElementById('btn-dc-def-item-info').addEventListener('click', () => {
    const item = document.getElementById('dc-def-item-search').querySelector('.search-input')?.dataset.value;
    if (item) showItemInfo(item);
  });
}

function renderStatGrid(containerId) {
  const container = document.getElementById(containerId);
  let html = '';

  for (const key of STAT_KEYS) {
    html += `
      <div class="calc-stat-item">
        <label>${STAT_NAMES[key]}</label>
        <input type="number" class="stat-ev-input" data-stat="${key}" data-type="ev" min="0" max="252" step="4" value="0" placeholder="EV">
        <input type="number" class="stat-iv-input" data-stat="${key}" data-type="iv" min="0" max="31" value="31" placeholder="IV">
      </div>
    `;
  }

  container.innerHTML = html;
}

async function selectAttacker(name, id) {
  const data = await getPokemon(name);
  attackerData = {
    pokemon: data,
    baseStats: parseBaseStats(data),
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name)
  };

  // Update sprite
  document.getElementById('dc-atk-sprite').src = data.sprites.front_default || getSpriteUrl(id);

  // Update abilities
  const abilitySelect = document.getElementById('dc-atk-ability');
  abilitySelect.innerHTML = data.abilities.map(a =>
    `<option value="${a.ability.name}">${formatName(a.ability.name)}${a.is_hidden ? ' (H)' : ''}</option>`
  ).join('');

  // Filter moves to learned moves
  const learnedMoves = data.moves.map(m => m.move.name);
  const moveList = await getMoveList();
  const filteredMoves = moveList
    .filter(m => learnedMoves.includes(m.name))
    .map(m => ({ name: m.name, label: formatName(m.name) }));
  const movesToUse = filteredMoves.length > 0 ? filteredMoves : moveList.map(m => ({ name: m.name, label: formatName(m.name) }));
  atkMoveSearch.updateItems(movesToUse);

  // Fetch move types in background and update dropdown
  Promise.allSettled(movesToUse.map(m => getMove(m.name).then(d => ({ ...m, type: d.type.name }))))
    .then(results => {
      const enriched = results.map((r, idx) => r.status === 'fulfilled' ? r.value : movesToUse[idx]);
      atkMoveSearch.updateItems(enriched);
    });
}

async function selectDefender(name, id) {
  const data = await getPokemon(name);
  defenderData = {
    pokemon: data,
    baseStats: parseBaseStats(data),
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name)
  };

  // Update sprite
  document.getElementById('dc-def-sprite').src = data.sprites.front_default || getSpriteUrl(id);

  // Update abilities
  const abilitySelect = document.getElementById('dc-def-ability');
  abilitySelect.innerHTML = data.abilities.map(a =>
    `<option value="${a.ability.name}">${formatName(a.ability.name)}${a.is_hidden ? ' (H)' : ''}</option>`
  ).join('');
}

async function selectMove(name) {
  const moveData = await getMove(name);
  selectedMove = {
    name: moveData.name,
    type: moveData.type.name,
    power: moveData.power || 0,
    accuracy: moveData.accuracy,
    category: moveData.damage_class.name, // physical, special, status
    pp: moveData.pp
  };
}

function getStatsFromPanel(prefix) {
  const container = document.getElementById(`${prefix}-stats`);
  const level = parseInt(document.getElementById(`${prefix}-level`).value) || 50;
  const nature = document.getElementById(`${prefix}-nature`).value;

  const evs = {};
  const ivs = {};

  container.querySelectorAll('.stat-ev-input').forEach(input => {
    evs[input.dataset.stat] = parseInt(input.value) || 0;
  });
  container.querySelectorAll('.stat-iv-input').forEach(input => {
    ivs[input.dataset.stat] = parseInt(input.value) ?? 31;
  });

  return { level, nature, evs, ivs };
}

function calculateDamage() {
  const resultText = document.getElementById('dc-result-text');
  const resultDetail = document.getElementById('dc-result-detail');

  if (!attackerData || !defenderData || !selectedMove) {
    resultText.textContent = t('dc.selectBoth');
    resultDetail.innerHTML = '';
    return;
  }

  if (selectedMove.category === 'status') {
    resultText.textContent = `${formatName(selectedMove.name)} — ${t('dc.status')}`;
    resultDetail.innerHTML = `<p>${t('dc.status')} moves don't deal direct damage.</p>`;
    return;
  }

  // Get stats from panels
  const atkPanel = getStatsFromPanel('dc-atk');
  const defPanel = getStatsFromPanel('dc-def');

  // Calculate actual stats
  const atkStats = calcAllStats(attackerData.baseStats, atkPanel.ivs, atkPanel.evs, atkPanel.level, atkPanel.nature);
  const defStats = calcAllStats(defenderData.baseStats, defPanel.ivs, defPanel.evs, defPanel.level, defPanel.nature);

  // Get items and abilities
  const atkItemInput = document.getElementById('dc-atk-item-search').querySelector('.search-input');
  const defItemInput = document.getElementById('dc-def-item-search').querySelector('.search-input');
  const atkItem = atkItemInput?.dataset.value || '';
  const defItem = defItemInput?.dataset.value || '';
  const atkAbility = document.getElementById('dc-atk-ability').value;
  const defAbility = document.getElementById('dc-def-ability').value;

  const attacker = {
    stats: atkStats,
    types: attackerData.types,
    level: atkPanel.level,
    item: atkItem,
    ability: atkAbility
  };

  const defender = {
    stats: defStats,
    types: defenderData.types,
    level: defPanel.level,
    item: defItem,
    ability: defAbility
  };

  // Calculate damage (normal and crit)
  const result = calcDamage(attacker, defender, selectedMove, { critical: false });
  const critResult = calcDamage(attacker, defender, selectedMove, { critical: true });

  // Format results
  const atkName = formatName(attackerData.pokemon.name);
  const defName = formatName(defenderData.pokemon.name);
  const moveName = formatName(selectedMove.name);

  // Effectiveness text
  let effText = '';
  let effClass = '';
  if (result.typeEff === 0) { effText = t('dc.immune'); effClass = 'text-muted'; }
  else if (result.typeEff > 1) { effText = `${t('dc.superEffective')} (${result.typeEff}x)`; effClass = 'ko-guaranteed'; }
  else if (result.typeEff < 1) { effText = `${t('dc.notVeryEffective')} (${result.typeEff}x)`; effClass = 'ko-unlikely'; }
  else { effText = `${t('dc.neutral')} (1x)`; effClass = ''; }

  // HP bar
  const hpPctMax = Math.min(result.hpPercent.max, 100);
  const barClass = hpPctMax >= 100 ? 'ohko' : hpPctMax >= 70 ? 'high' : hpPctMax >= 40 ? 'mid' : 'low';

  // KO text
  let koDisplay = '';
  if (result.koText === 'immune') koDisplay = t('dc.immune');
  else if (result.koText === 'ohko-guaranteed') koDisplay = `${t('dc.ohko')} (${t('dc.guaranteed')})`;
  else if (result.koText === 'ohko-possible') koDisplay = `${t('dc.ohko')} (${t('dc.possible')})`;
  else if (result.koText === '2hko') koDisplay = t('dc.2hko');
  else if (result.koText === '2hko-possible') koDisplay = `${t('dc.2hko')} (${t('dc.possible')})`;
  else if (result.koText === '3hko') koDisplay = t('dc.3hko');
  else koDisplay = t('dc.4hko');

  resultText.innerHTML = `
    ${atkName}'s <span style="color:${TYPE_COLORS[selectedMove.type]}">${moveName}</span>
    → ${defName}
  `;

  resultDetail.innerHTML = `
    <div style="margin-bottom:12px">
      <span class="${effClass}" style="font-weight:600">${effText}</span>
      ${result.stab ? `<span style="margin-left:8px;color:var(--warning)">STAB</span>` : ''}
    </div>

    <div style="margin-bottom:8px">
      <strong>${t('dc.damage')}:</strong> ${result.min} - ${result.max}
      (${result.hpPercent.min.toFixed(1)}% - ${result.hpPercent.max.toFixed(1)}% ${t('dc.hpPercent')})
    </div>

    <div class="result-damage-bar">
      <div class="result-damage-fill ${barClass}" style="width:${hpPctMax}%"></div>
    </div>

    <div class="result-ko-text ${result.koClass}">${koDisplay}</div>

    <div style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
      <strong>${t('dc.critical')}:</strong> ${critResult.min} - ${critResult.max}
      (${critResult.hpPercent.min.toFixed(1)}% - ${critResult.hpPercent.max.toFixed(1)}%)
    </div>

    <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">
      ${t('dc.power')}: ${selectedMove.power} |
      ${t('dc.category')}: ${selectedMove.category === 'physical' ? t('dc.physical') : t('dc.special')} |
      ${t('dc.atkStat')}: ${result.isPhysical ? atkStats.atk : atkStats.spa} |
      ${t('dc.defStat')}: ${result.isPhysical ? defStats.def : defStats.spd}
    </div>

    <div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">
      ${t('dc.rolls')}: [${result.rolls.join(', ')}]
    </div>
  `;
}

export function refreshDamageCalc() {
  // Re-render with translations
}
