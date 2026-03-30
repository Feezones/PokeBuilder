// ============================================
// PokéBuilder — IV/EV Calculator Module
// ============================================

import { getPokemonList, getPokemon, getSpriteUrl, formatName } from './api.js';
import {
  NATURES, STAT_KEYS, STAT_NAMES, TYPE_COLORS,
  calcHP, calcStat, calcAllStats, getNatureMod,
  parseBaseStats, findPossibleIVs, findRequiredEV,
  capitalize, createSearchableSelect, drawRadarChart
} from './utils.js';
import { t } from './i18n.js';

let currentPokemon = null;
let currentBaseStats = null;
let mode = 'iv'; // 'iv', 'ev', 'stat'
let pokemonSearchSelect = null;

export async function initIVEVCalc() {
  const pokeList = await getPokemonList();
  const pokemonItems = pokeList.map(p => ({
    name: p.name,
    id: p.id,
    label: formatName(p.name)
  }));

  // Pokémon search
  pokemonSearchSelect = createSearchableSelect(
    document.getElementById('iec-pokemon-search'),
    pokemonItems,
    async (item) => {
      await selectPokemon(item.name, item.id);
    },
    {
      renderOption: (item) => {
        return `<img src="${getSpriteUrl(item.id)}" alt="" width="30" height="30">${item.label} <span style="color:var(--text-muted)">#${item.id}</span>`;
      }
    }
  );

  // Nature selector
  const natureSelect = document.getElementById('iec-nature');
  natureSelect.innerHTML = NATURES.map(n => {
    let label = capitalize(n.name);
    if (n.plus) label += ` (+${STAT_NAMES[n.plus]} -${STAT_NAMES[n.minus]})`;
    return `<option value="${n.name}">${label}</option>`;
  }).join('');

  // Mode tabs
  document.querySelectorAll('.iec-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.iec-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      mode = tab.dataset.mode;
      renderStatTable();
    });
  });

  // Calculate button
  document.getElementById('iec-calculate').addEventListener('click', calculate);

  // Events that need recalculation
  natureSelect.addEventListener('change', () => { if (currentPokemon) renderStatTable(); });
  document.getElementById('iec-level').addEventListener('change', () => { if (currentPokemon) renderStatTable(); });

  renderStatTable();
}

async function selectPokemon(name, id) {
  const data = await getPokemon(name);
  currentPokemon = data;
  currentBaseStats = parseBaseStats(data);

  // Update sprite
  const sprite = document.getElementById('iec-sprite');
  sprite.src = data.sprites.front_default || getSpriteUrl(id);

  // Update base stats display
  renderBaseStats();
  renderStatTable();

  // Draw initial radar
  const stats = calcAllStats(
    currentBaseStats,
    { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    parseInt(document.getElementById('iec-level').value) || 50,
    document.getElementById('iec-nature').value
  );
  drawRadarChart(
    document.getElementById('stat-radar'),
    stats,
    currentBaseStats
  );
}

function renderBaseStats() {
  const container = document.getElementById('iec-base-stats');
  if (!currentBaseStats) {
    container.innerHTML = '';
    return;
  }

  const statColors = {
    hp: '#ff5959', atk: '#f5ac78', def: '#fae078',
    spa: '#9db7f5', spd: '#a7db8d', spe: '#fa92b2'
  };

  let bst = 0;
  let html = `<h3 style="font-size:0.95rem;margin-bottom:8px;color:var(--text-secondary)">${t('iec.baseStats')}</h3>`;

  for (const key of STAT_KEYS) {
    const val = currentBaseStats[key];
    bst += val;
    const pct = Math.min((val / 255) * 100, 100);
    html += `
      <div class="base-stat-row">
        <span class="base-stat-label">${STAT_NAMES[key]}</span>
        <span class="base-stat-val">${val}</span>
        <div class="base-stat-bar">
          <div class="base-stat-fill" style="width:${pct}%;background:${statColors[key]}"></div>
        </div>
      </div>
    `;
  }
  html += `<div class="stat-total">${t('iec.totalBase')}: ${bst}</div>`;
  container.innerHTML = html;
}

function renderStatTable() {
  const container = document.getElementById('iec-stat-table');

  let headerCols = '';
  if (mode === 'iv') {
    headerCols = `
      <div>${t('stat.hp')}</div>
      <div>EV</div>
      <div>${t('iec.knownStat')}</div>
      <div>${t('iec.possibleIvs')}</div>
    `;
  } else if (mode === 'ev') {
    headerCols = `
      <div>${t('stat.hp')}</div>
      <div>IV</div>
      <div>${t('iec.desiredStat')}</div>
      <div>${t('iec.requiredEvs')}</div>
    `;
  } else {
    headerCols = `
      <div>${t('stat.hp')}</div>
      <div>EV</div>
      <div>IV</div>
      <div>${t('iec.finalStat')}</div>
    `;
  }

  let html = `<div class="iec-stat-row header"><div></div>${headerCols}</div>`;

  for (const key of STAT_KEYS) {
    if (mode === 'iv') {
      html += `
        <div class="iec-stat-row">
          <span class="stat-label stat-${key}">${STAT_NAMES[key]}</span>
          <input type="number" class="iec-stat-input" id="iec-ev-${key}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-known-${key}" min="1" max="999" value="">
          <div id="iec-result-${key}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `;
    } else if (mode === 'ev') {
      html += `
        <div class="iec-stat-row">
          <span class="stat-label stat-${key}">${STAT_NAMES[key]}</span>
          <input type="number" class="iec-stat-input" id="iec-iv-${key}" min="0" max="31" value="31">
          <input type="number" class="iec-stat-input" id="iec-desired-${key}" min="1" max="999" value="">
          <div id="iec-result-${key}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `;
    } else {
      html += `
        <div class="iec-stat-row">
          <span class="stat-label stat-${key}">${STAT_NAMES[key]}</span>
          <input type="number" class="iec-stat-input" id="iec-sb-ev-${key}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-sb-iv-${key}" min="0" max="31" value="31">
          <div id="iec-result-${key}" class="stat-value" style="font-weight:700">—</div>
        </div>
      `;
    }
  }

  container.innerHTML = html;
}

function calculate() {
  if (!currentBaseStats) return;

  const level = parseInt(document.getElementById('iec-level').value) || 50;
  const natureName = document.getElementById('iec-nature').value;
  const results = document.getElementById('iec-results');

  if (mode === 'iv') {
    let html = `<h3 style="margin-bottom:8px">${t('iec.possibleIvs')}</h3>`;
    let anyResult = false;

    for (const key of STAT_KEYS) {
      const ev = parseInt(document.getElementById(`iec-ev-${key}`)?.value) || 0;
      const known = parseInt(document.getElementById(`iec-known-${key}`)?.value);
      const resultEl = document.getElementById(`iec-result-${key}`);

      if (isNaN(known) || known <= 0) {
        if (resultEl) resultEl.textContent = '—';
        continue;
      }

      const isHP = key === 'hp';
      const natureMod = isHP ? 1 : getNatureMod(natureName, key);
      const possible = findPossibleIVs(currentBaseStats[key], level, natureMod, ev, known, isHP);

      if (possible.length > 0) {
        const text = possible.length === 1 ? `${possible[0]}` :
          possible[0] === possible[possible.length - 1] ? `${possible[0]}` :
          `${possible[0]}-${possible[possible.length - 1]}`;
        if (resultEl) {
          resultEl.textContent = text;
          resultEl.style.color = possible.length === 1 ? 'var(--success)' : 'var(--warning)';
        }
        html += `<div><strong>${STAT_NAMES[key]}:</strong> ${possible.join(', ')}</div>`;
        anyResult = true;
      } else {
        if (resultEl) {
          resultEl.textContent = '✗';
          resultEl.style.color = 'var(--danger)';
        }
      }
    }

    if (!anyResult) html += `<div>${t('iec.noResults')}</div>`;
    results.innerHTML = html;

  } else if (mode === 'ev') {
    let html = `<h3 style="margin-bottom:8px">${t('iec.requiredEvs')}</h3>`;

    for (const key of STAT_KEYS) {
      const iv = parseInt(document.getElementById(`iec-iv-${key}`)?.value) ?? 31;
      const desired = parseInt(document.getElementById(`iec-desired-${key}`)?.value);
      const resultEl = document.getElementById(`iec-result-${key}`);

      if (isNaN(desired) || desired <= 0) {
        if (resultEl) resultEl.textContent = '—';
        continue;
      }

      const isHP = key === 'hp';
      const natureMod = isHP ? 1 : getNatureMod(natureName, key);
      const requiredEV = findRequiredEV(currentBaseStats[key], level, natureMod, iv, desired, isHP);

      if (requiredEV >= 0 && requiredEV <= 252) {
        if (resultEl) {
          resultEl.textContent = `${requiredEV}`;
          resultEl.style.color = 'var(--success)';
        }
        html += `<div><strong>${STAT_NAMES[key]}:</strong> ${requiredEV} EVs</div>`;
      } else {
        if (resultEl) {
          resultEl.textContent = '✗';
          resultEl.style.color = 'var(--danger)';
        }
        html += `<div><strong>${STAT_NAMES[key]}:</strong> Impossible</div>`;
      }
    }

    results.innerHTML = html;

  } else {
    // Stat Builder mode
    const evs = {};
    const ivs = {};
    for (const key of STAT_KEYS) {
      evs[key] = parseInt(document.getElementById(`iec-sb-ev-${key}`)?.value) || 0;
      ivs[key] = parseInt(document.getElementById(`iec-sb-iv-${key}`)?.value) ?? 31;
    }

    const stats = calcAllStats(currentBaseStats, ivs, evs, level, natureName);

    let total = 0;
    for (const key of STAT_KEYS) {
      const resultEl = document.getElementById(`iec-result-${key}`);
      if (resultEl) {
        resultEl.textContent = stats[key];
        resultEl.style.color = 'var(--accent)';
      }
      total += stats[key];
    }

    const evTotal = STAT_KEYS.reduce((s, k) => s + evs[k], 0);
    results.innerHTML = `
      <h3 style="margin-bottom:8px">${t('iec.finalStat')}</h3>
      <div><strong>${t('tb.total')}:</strong> ${total}</div>
      <div><strong>EVs:</strong> ${evTotal}/510</div>
    `;

    // Update radar chart
    drawRadarChart(
      document.getElementById('stat-radar'),
      stats,
      currentBaseStats
    );
  }
}

export function refreshIVEVCalc() {
  renderStatTable();
  renderBaseStats();
}
