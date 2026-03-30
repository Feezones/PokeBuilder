// ============================================
// PokéBuilder — Team Builder Module
// ============================================

import {
  getPokemonList, getPokemon, getMoveList, getMove, getItemList,
  getSpriteUrl, formatName
} from './api.js';
import {
  NATURES, STAT_KEYS, STAT_NAMES, TYPE_COLORS,
  calcAllStats, parseBaseStats, createEmptySlot,
  teamToShowdown, showdownToTeam, getNatureMod,
  capitalize, formatPokemonName, createSearchableSelect, debounce
} from './utils.js';
import { t, getLang } from './i18n.js';
import { showAbilityInfo, showMoveInfo, showItemInfo } from './info-popup.js';
import {
  getActiveTeamSlots, saveTeams, setOnTeamChanged,
  renderTeamTabs, initTeamManagement
} from './profile.js';

let team = [
  createEmptySlot(), createEmptySlot(), createEmptySlot(),
  createEmptySlot(), createEmptySlot(), createEmptySlot()
];
let activeSlot = -1;
let pokemonSearchSelect = null;
let itemSearchSelect = null;
let moveSearchSelects = [null, null, null, null];

const moveRenderOption = (item) => {
  if (item.type) {
    const color = TYPE_COLORS[item.type] || '#888';
    return `${item.label} <span class="type-badge-sm" style="background:${color}">${item.type.toUpperCase()}</span>`;
  }
  return item.label;
};

// Cached lists
let pokemonItems = [];
let moveItems = [];
let itemItems = [];

export function getTeam() { return team; }

export async function initTeamBuilder() {
  // Load data
  const [pokeList, moveList, itemList] = await Promise.all([
    getPokemonList(), getMoveList(), getItemList()
  ]);

  pokemonItems = pokeList.map(p => ({
    name: p.name,
    id: p.id,
    label: formatName(p.name)
  }));

  moveItems = moveList.map(m => ({
    name: m.name,
    label: formatName(m.name)
  }));

  itemItems = itemList.map(it => ({
    name: it.name,
    label: formatName(it.name)
  }));

  renderSlots();
  setupEditor();
  setupToolbar();
  initTeamManagement();

  // Sync team from profile manager
  loadTeamFromProfile();

  // Listen for team switches
  setOnTeamChanged(() => {
    loadTeamFromProfile();
    renderTeamTabs();
  });
  renderTeamTabs();
}

// --- Render team slots ---
function renderSlots() {
  const container = document.getElementById('team-slots');
  container.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const mon = team[i];
    const slot = document.createElement('div');
    slot.className = `team-slot ${mon.name ? '' : 'empty'} ${i === activeSlot ? 'active' : ''}`;
    slot.dataset.index = i;

    if (mon.name && mon.sprite) {
      slot.innerHTML = `
        <button class="slot-remove" data-index="${i}" title="Remove">&times;</button>
        <img class="slot-sprite" src="${mon.sprite}" alt="${mon.name}">
        <div class="slot-name">${formatPokemonName(mon.name)}</div>
        <div class="slot-types">
          ${mon.types.map(type =>
            `<span class="type-badge type-${type}" style="background:${TYPE_COLORS[type]}">${type.toUpperCase()}</span>`
          ).join('')}
        </div>
      `;
    } else {
      slot.innerHTML = `
        <div class="slot-empty-text">
          <span style="font-size:2rem;opacity:0.3">+</span><br>
          <span data-i18n="tb.emptySlot">${t('tb.emptySlot')}</span>
        </div>
      `;
    }

    slot.addEventListener('click', (e) => {
      if (e.target.classList.contains('slot-remove')) return;
      selectSlot(i);
    });

    container.appendChild(slot);
  }

  // Remove buttons
  container.querySelectorAll('.slot-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      team[idx] = createEmptySlot();
      if (activeSlot === idx) {
        activeSlot = -1;
        document.getElementById('pokemon-editor').style.display = 'none';
      }
      renderSlots();
      saveTeamToStorage();
    });
  });
}

function selectSlot(index) {
  activeSlot = index;
  renderSlots();
  showEditor();
}

// --- Editor Setup ---
function setupEditor() {
  // Nature selector
  const natureSelect = document.getElementById('editor-nature');
  natureSelect.innerHTML = NATURES.map(n => {
    let label = capitalize(n.name);
    if (n.plus) label += ` (+${STAT_NAMES[n.plus]} -${STAT_NAMES[n.minus]})`;
    return `<option value="${n.name}">${label}</option>`;
  }).join('');
  natureSelect.addEventListener('change', () => {
    if (activeSlot < 0) return;
    team[activeSlot].nature = natureSelect.value;
    updateFinalStats();
    renderSlots();
    saveTeamToStorage();
  });

  // Level input
  const levelInput = document.getElementById('editor-level');
  const handleLevelChange = () => {
    if (activeSlot < 0) return;
    team[activeSlot].level = Math.max(1, Math.min(100, parseInt(levelInput.value) || 50));
    levelInput.value = team[activeSlot].level;
    updateFinalStats();
    saveTeamToStorage();
  };
  levelInput.addEventListener('change', handleLevelChange);
  levelInput.addEventListener('input', () => {
    if (activeSlot < 0) return;
    const val = parseInt(levelInput.value);
    if (val >= 1 && val <= 100) {
      team[activeSlot].level = val;
      updateFinalStats();
      saveTeamToStorage();
    }
  });

  // Pokémon search
  pokemonSearchSelect = createSearchableSelect(
    document.getElementById('pokemon-search'),
    pokemonItems,
    async (item) => {
      if (activeSlot < 0) return;
      await selectPokemon(activeSlot, item.name, item.id);
    },
    {
      renderOption: (item) => {
        const spriteUrl = getSpriteUrl(item.id);
        return `<img src="${spriteUrl}" alt="" width="30" height="30">${item.label} <span style="color:var(--text-muted)">#${item.id}</span>`;
      }
    }
  );

  // Item search
  itemSearchSelect = createSearchableSelect(
    document.getElementById('item-search'),
    itemItems,
    (item) => {
      if (activeSlot < 0) return;
      team[activeSlot].item = item.name;
      saveTeamToStorage();
    }
  );

  // Move searches
  for (let i = 0; i < 4; i++) {
    const container = document.getElementById(`move-search-${i}`);
    moveSearchSelects[i] = createSearchableSelect(
      container,
      moveItems,
      (item) => {
        if (activeSlot < 0) return;
        team[activeSlot].moves[i] = item.name;
        saveTeamToStorage();
      },
      { renderOption: moveRenderOption }
    );
  }

  // EV sliders
  setupEVSliders();

  // IV inputs
  setupIVInputs();

  // Info buttons
  document.getElementById('btn-ability-info').addEventListener('click', () => {
    if (activeSlot < 0) return;
    const ability = document.getElementById('editor-ability').value;
    if (ability) showAbilityInfo(ability);
  });

  document.getElementById('btn-item-info').addEventListener('click', () => {
    if (activeSlot < 0) return;
    const item = team[activeSlot].item;
    if (item) showItemInfo(item);
  });

  document.querySelectorAll('.info-btn[data-move-index]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (activeSlot < 0) return;
      const idx = parseInt(btn.dataset.moveIndex);
      const moveName = team[activeSlot].moves[idx];
      if (moveName) showMoveInfo(moveName);
    });
  });
}

function setupEVSliders() {
  const container = document.getElementById('ev-sliders');
  container.innerHTML = '';

  for (const key of STAT_KEYS) {
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.innerHTML = `
      <span class="stat-label" id="ev-label-${key}">${STAT_NAMES[key]}</span>
      <input type="range" class="stat-slider" id="ev-slider-${key}" min="0" max="252" step="4" value="0">
      <span class="stat-value" id="ev-value-${key}">0</span>
    `;
    container.appendChild(row);

    const slider = row.querySelector(`#ev-slider-${key}`);
    const valueDisplay = row.querySelector(`#ev-value-${key}`);

    slider.addEventListener('input', () => {
      if (activeSlot < 0) return;
      const newVal = parseInt(slider.value);
      const totalExcluding = getTotalEVs() - team[activeSlot].evs[key];
      const maxAllowed = Math.min(252, 510 - totalExcluding);
      const clamped = Math.min(newVal, maxAllowed);
      slider.value = clamped;
      team[activeSlot].evs[key] = clamped;
      valueDisplay.textContent = clamped;
      updateEVCounter();
      updateFinalStats();
      saveTeamToStorage();
    });
  }
}

function setupIVInputs() {
  const container = document.getElementById('iv-inputs');
  container.innerHTML = '';

  for (const key of STAT_KEYS) {
    const row = document.createElement('div');
    row.className = 'iv-row';
    row.innerHTML = `
      <span class="stat-label" id="iv-label-${key}">${STAT_NAMES[key]}</span>
      <input type="range" class="stat-slider" id="iv-slider-${key}" min="0" max="31" value="31">
      <input type="number" class="iv-input" id="iv-input-${key}" min="0" max="31" value="31">
    `;
    container.appendChild(row);

    const slider = row.querySelector(`#iv-slider-${key}`);
    const input = row.querySelector(`#iv-input-${key}`);

    slider.addEventListener('input', () => {
      if (activeSlot < 0) return;
      const val = parseInt(slider.value);
      team[activeSlot].ivs[key] = val;
      input.value = val;
      updateFinalStats();
      saveTeamToStorage();
    });

    input.addEventListener('change', () => {
      if (activeSlot < 0) return;
      const val = Math.max(0, Math.min(31, parseInt(input.value) || 0));
      team[activeSlot].ivs[key] = val;
      input.value = val;
      slider.value = val;
      updateFinalStats();
      saveTeamToStorage();
    });

    input.addEventListener('input', () => {
      if (activeSlot < 0) return;
      const val = parseInt(input.value);
      if (val >= 0 && val <= 31) {
        team[activeSlot].ivs[key] = val;
        slider.value = val;
        updateFinalStats();
        saveTeamToStorage();
      }
    });
  }
}

// --- Select Pokémon ---
async function selectPokemon(slotIndex, name, id) {
  const pokemonData = await getPokemon(name);
  const mon = team[slotIndex];

  mon.id = id || pokemonData.id;
  mon.name = pokemonData.name;
  mon.species = pokemonData.species.name;
  mon.types = pokemonData.types.map(t => t.type.name);
  mon.baseStats = parseBaseStats(pokemonData);
  mon.sprite = pokemonData.sprites.front_default || getSpriteUrl(mon.id);

  // Set abilities
  const abilitySelect = document.getElementById('editor-ability');
  abilitySelect.innerHTML = pokemonData.abilities.map(a =>
    `<option value="${a.ability.name}">${formatName(a.ability.name)}${a.is_hidden ? ' (H)' : ''}</option>`
  ).join('');
  if (!mon.ability || !pokemonData.abilities.find(a => a.ability.name === mon.ability)) {
    mon.ability = pokemonData.abilities[0]?.ability.name || '';
  }
  abilitySelect.value = mon.ability;
  abilitySelect.onchange = () => {
    team[slotIndex].ability = abilitySelect.value;
    saveTeamToStorage();
  };

  // Update learned moves for filtering
  const learnedMoves = pokemonData.moves.map(m => m.move.name);
  const filteredMoveItems = moveItems.filter(m => learnedMoves.includes(m.name));
  const itemsToUse = filteredMoveItems.length > 0 ? filteredMoveItems : moveItems;
  for (let i = 0; i < 4; i++) {
    moveSearchSelects[i].updateItems(itemsToUse);
  }

  // Fetch move types in background and update dropdown
  Promise.allSettled(itemsToUse.map(m => getMove(m.name).then(d => ({ ...m, type: d.type.name }))))
    .then(results => {
      const enriched = results.map((r, idx) => r.status === 'fulfilled' ? r.value : itemsToUse[idx]);
      for (let i = 0; i < 4; i++) {
        moveSearchSelects[i].updateItems(enriched);
      }
    });

  showEditor();
  updateFinalStats();
  renderSlots();
  saveTeamToStorage();
}

// --- Show Editor ---
async function showEditor() {
  const editor = document.getElementById('pokemon-editor');
  if (activeSlot < 0) {
    editor.style.display = 'none';
    return;
  }

  editor.style.display = 'block';
  const mon = team[activeSlot];

  // Update sprite
  const sprite = document.getElementById('editor-sprite');
  sprite.src = mon.sprite || '';
  sprite.style.display = mon.sprite ? 'block' : 'none';

  // Update types
  const typesDiv = document.getElementById('editor-types');
  typesDiv.innerHTML = mon.types.map(type =>
    `<span class="type-badge type-${type}" style="background:${TYPE_COLORS[type]}">${type.toUpperCase()}</span>`
  ).join('');

  // Update search value
  if (mon.name) {
    pokemonSearchSelect.setValue(mon.name, formatPokemonName(mon.name));
  } else {
    pokemonSearchSelect.clear();
  }

  // Update item
  if (mon.item) {
    itemSearchSelect.setValue(mon.item, formatPokemonName(mon.item));
  } else {
    itemSearchSelect.clear();
  }

  // Update ability — repopulate options from Pokémon data so the saved ability is selectable
  const abilitySelect = document.getElementById('editor-ability');
  if (mon.name) {
    const pokemonData = await getPokemon(mon.name);
    abilitySelect.innerHTML = pokemonData.abilities.map(a =>
      `<option value="${a.ability.name}">${formatName(a.ability.name)}${a.is_hidden ? ' (H)' : ''}</option>`
    ).join('');
    if (mon.ability) {
      abilitySelect.value = mon.ability;
    }
    abilitySelect.onchange = () => {
      team[activeSlot].ability = abilitySelect.value;
      saveTeamToStorage();
    };

    // Update learned moves for filtering
    const learnedMoves = pokemonData.moves.map(m => m.move.name);
    const filteredMoveItems = moveItems.filter(m => learnedMoves.includes(m.name));
    const itemsToUse = filteredMoveItems.length > 0 ? filteredMoveItems : moveItems;
    for (let i = 0; i < 4; i++) {
      moveSearchSelects[i].updateItems(itemsToUse);
    }
  } else {
    abilitySelect.innerHTML = '';
  }

  // Update nature
  document.getElementById('editor-nature').value = mon.nature;

  // Update level
  document.getElementById('editor-level').value = mon.level;

  // Update moves
  for (let i = 0; i < 4; i++) {
    if (mon.moves[i]) {
      moveSearchSelects[i].setValue(mon.moves[i], formatPokemonName(mon.moves[i]));
    } else {
      moveSearchSelects[i].clear();
    }
  }

  // Update EV sliders
  for (const key of STAT_KEYS) {
    document.getElementById(`ev-slider-${key}`).value = mon.evs[key];
    document.getElementById(`ev-value-${key}`).textContent = mon.evs[key];
  }
  updateEVCounter();

  // Update IV inputs
  for (const key of STAT_KEYS) {
    document.getElementById(`iv-slider-${key}`).value = mon.ivs[key];
    document.getElementById(`iv-input-${key}`).value = mon.ivs[key];
  }

  // Update nature stat colors
  updateNatureColors();
  updateFinalStats();
}

function updateNatureColors() {
  if (activeSlot < 0) return;
  const nature = NATURES.find(n => n.name === team[activeSlot].nature);

  for (const key of STAT_KEYS) {
    const evLabel = document.getElementById(`ev-label-${key}`);
    const ivLabel = document.getElementById(`iv-label-${key}`);
    evLabel.className = 'stat-label';
    ivLabel.className = 'stat-label';

    if (nature?.plus === key) {
      evLabel.classList.add('boosted');
      ivLabel.classList.add('boosted');
    } else if (nature?.minus === key) {
      evLabel.classList.add('hindered');
      ivLabel.classList.add('hindered');
    }
  }
}

function getTotalEVs() {
  if (activeSlot < 0) return 0;
  return STAT_KEYS.reduce((sum, key) => sum + team[activeSlot].evs[key], 0);
}

function updateEVCounter() {
  const total = getTotalEVs();
  const counter = document.getElementById('ev-counter');
  counter.textContent = `(${total}/510)`;
  counter.style.color = total > 510 ? 'var(--danger)' : total === 510 ? 'var(--success)' : '';
}

function updateFinalStats() {
  if (activeSlot < 0) return;
  const mon = team[activeSlot];
  if (!mon.baseStats) return;

  const stats = calcAllStats(mon.baseStats, mon.ivs, mon.evs, mon.level, mon.nature);
  const container = document.getElementById('final-stats');
  container.innerHTML = '';

  const bst = STAT_KEYS.reduce((sum, key) => sum + mon.baseStats[key], 0);
  let total = 0;

  for (const key of STAT_KEYS) {
    const val = stats[key];
    total += val;
    const pct = Math.min((val / 700) * 100, 100); // 700 as rough max
    let colorClass = '';
    if (val < 60) colorClass = 'stat-low';
    else if (val < 100) colorClass = 'stat-med';
    else if (val < 150) colorClass = 'stat-high';
    else colorClass = 'stat-max';

    const row = document.createElement('div');
    row.className = 'stat-bar-row';
    row.innerHTML = `
      <span class="stat-label stat-${key}">${STAT_NAMES[key]}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill ${key}" style="width:${pct}%;background:${getStatColor(key)}"></div>
      </div>
      <span class="stat-value">${val}</span>
    `;
    container.appendChild(row);
  }

  // Total line
  const totalEl = document.createElement('div');
  totalEl.className = 'stat-total';
  totalEl.textContent = `${t('tb.total')}: ${total} (${t('tb.base')}: ${bst})`;
  container.appendChild(totalEl);

  updateNatureColors();
}

function getStatColor(key) {
  const colors = {
    hp: '#ff5959', atk: '#f5ac78', def: '#fae078',
    spa: '#9db7f5', spd: '#a7db8d', spe: '#fa92b2'
  };
  return colors[key] || '#888';
}

// --- Toolbar ---
function setupToolbar() {
  document.getElementById('btn-import').addEventListener('click', showImportModal);
  document.getElementById('btn-export').addEventListener('click', showExportModal);
  document.getElementById('btn-clear').addEventListener('click', () => {
    if (confirm(t('tb.confirmClear'))) {
      team = Array.from({ length: 6 }, () => createEmptySlot());
      activeSlot = -1;
      document.getElementById('pokemon-editor').style.display = 'none';
      renderSlots();
      saveTeamToStorage();
    }
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-import-export').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
}

function showImportModal() {
  const modal = document.getElementById('modal-import-export');
  const title = document.getElementById('modal-title');
  const textarea = document.getElementById('modal-textarea');
  const actionBtn = document.getElementById('modal-action');

  title.textContent = t('tb.importTitle');
  textarea.value = '';
  textarea.placeholder = t('tb.pasteShowdown');
  actionBtn.textContent = t('tb.importBtn');
  modal.style.display = 'flex';

  actionBtn.onclick = () => {
    try {
      const parsed = showdownToTeam(textarea.value);
      if (parsed.length === 0) {
        alert(t('tb.importError'));
        return;
      }

      // Fill team slots
      for (let i = 0; i < 6; i++) {
        team[i] = parsed[i] || createEmptySlot();
      }

      // Load Pokémon data for each
      const loadPromises = team.map(async (mon, i) => {
        if (mon.name) {
          try {
            const data = await getPokemon(mon.name);
            mon.id = data.id;
            mon.types = data.types.map(t => t.type.name);
            mon.baseStats = parseBaseStats(data);
            mon.sprite = data.sprites.front_default || getSpriteUrl(data.id);
            if (!mon.ability) {
              mon.ability = data.abilities[0]?.ability.name || '';
            }
          } catch {
            // Pokemon not found, clear it
            team[i] = createEmptySlot();
          }
        }
      });

      Promise.all(loadPromises).then(() => {
        activeSlot = -1;
        document.getElementById('pokemon-editor').style.display = 'none';
        renderSlots();
        saveTeamToStorage();
        closeModal();
      });
    } catch {
      alert(t('tb.importError'));
    }
  };
}

function showExportModal() {
  const modal = document.getElementById('modal-import-export');
  const title = document.getElementById('modal-title');
  const textarea = document.getElementById('modal-textarea');
  const actionBtn = document.getElementById('modal-action');

  title.textContent = t('tb.exportTitle');
  textarea.value = teamToShowdown(team);
  textarea.placeholder = '';
  actionBtn.textContent = '📋 Copy';
  modal.style.display = 'flex';

  actionBtn.onclick = () => {
    navigator.clipboard.writeText(textarea.value).then(() => {
      actionBtn.textContent = `✓ ${t('tb.copySuccess')}`;
      setTimeout(() => { actionBtn.textContent = '📋 Copy'; }, 1500);
    });
  };
}

function closeModal() {
  document.getElementById('modal-import-export').style.display = 'none';
}

// --- Persistence ---
function saveTeamToStorage() {
  // Sync local team array back to profile manager and persist
  const slots = getActiveTeamSlots();
  for (let i = 0; i < 6; i++) {
    slots[i] = team[i];
  }
  saveTeams();
}

function loadTeamFromProfile() {
  const slots = getActiveTeamSlots();
  for (let i = 0; i < 6; i++) {
    team[i] = slots[i] ? { ...createEmptySlot(), ...slots[i] } : createEmptySlot();
  }
  activeSlot = -1;
  document.getElementById('pokemon-editor').style.display = 'none';
  renderSlots();
}

export function refreshTeamBuilder() {
  renderSlots();
  if (activeSlot >= 0) showEditor();
}
