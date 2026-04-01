// ============================================
// PokeBuilder - Battle UI Module (Traditional Style)
// ============================================

import { getSpriteUrl, formatName } from './api.js';
import { TYPE_COLORS, formatPokemonName } from './utils.js';
import { t } from './i18n.js';
import { getTeams, getActiveTeamSlots, getActiveTeamIndex } from './profile.js';
import {
  initBattle, executeTurn, getBattleState, resetBattle,
  aiChooseActions, aiChooseReplacement, needsReplacement,
  switchIn, getBenchMons
} from './battle.js';
import { generatePVETeam, getDifficulties } from './battle-ai.js';
import { findOpponent, getOpponentTeam } from './battle-pvp.js';

let selectedPlayerSlots = new Set();
let currentPhase = 'menu';
let pendingMoveSelections = [];
let opponentFullTeam = null;
let opponentName = '';
let battleMode = null;
let pveDifficulty = 'normal';

// Battle log queue for sequential display
let logQueue = [];
let logHistory = [];
let isAnimatingLog = false;

export function initBattleUI() {
  renderBattleMenu();
}

export function refreshBattleUI() {
  if (currentPhase === 'menu') renderBattleMenu();
}

// ===== BATTLE MENU =====
function renderBattleMenu() {
  currentPhase = 'menu';
  resetBattle();
  selectedPlayerSlots.clear();
  logQueue = [];
  logHistory = [];
  isAnimatingLog = false;

  const container = document.getElementById('battle-container');
  container.innerHTML = `
    <div class="battle-menu">
      <h2 class="battle-title">\u2694\uFE0F ${t('battle.title')}</h2>
      <p class="battle-subtitle">${t('battle.subtitle')}</p>

      <div class="battle-mode-cards">
        <div class="battle-mode-card" id="btn-pve">
          <div class="mode-icon">\uD83E\uDD16</div>
          <h3>${t('battle.pve')}</h3>
          <p>${t('battle.pveDesc')}</p>
          <div class="difficulty-selector">
            <label>${t('battle.difficulty')}</label>
            <select id="pve-difficulty" class="select-input">
              <option value="easy">${t('battle.easy')}</option>
              <option value="normal" selected>${t('battle.normal')}</option>
              <option value="hard">${t('battle.hard')}</option>
            </select>
          </div>
          <button class="btn btn-primary battle-start-btn" id="btn-start-pve">${t('battle.startPVE')}</button>
        </div>

        <div class="battle-mode-card" id="btn-pvp">
          <div class="mode-icon">\uD83D\uDC65</div>
          <h3>${t('battle.pvp')}</h3>
          <p>${t('battle.pvpDesc')}</p>
          <div class="pvp-search">
            <input type="text" id="pvp-search-input" class="search-input" placeholder="${t('battle.searchTrainer')}">
            <button class="btn btn-secondary" id="btn-search-trainer">${t('battle.search')}</button>
          </div>
          <div id="pvp-results" class="pvp-results"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-start-pve').addEventListener('click', () => {
    pveDifficulty = document.getElementById('pve-difficulty').value;
    battleMode = 'pve';
    startPVE();
  });

  document.getElementById('btn-search-trainer').addEventListener('click', searchTrainer);
  document.getElementById('pvp-search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchTrainer();
  });
}

// ===== PVE FLOW =====
async function startPVE() {
  const container = document.getElementById('battle-container');
  container.innerHTML = `<div class="battle-loading"><div class="spinner"></div><p>${t('battle.generating')}</p></div>`;

  const { archetype, team } = generatePVETeam(pveDifficulty);
  opponentFullTeam = team;
  opponentName = `AI (${archetype})`;

  showTeamPreview();
}

// ===== PVP FLOW =====
async function searchTrainer() {
  const input = document.getElementById('pvp-search-input');
  const resultsDiv = document.getElementById('pvp-results');
  const name = input.value.trim();
  if (!name) return;

  resultsDiv.innerHTML = `<div class="spinner" style="margin:10px auto"></div>`;

  try {
    const results = await findOpponent(name);
    if (results.length === 0) {
      resultsDiv.innerHTML = `<p class="no-results">${t('battle.noTrainerFound')}</p>`;
      return;
    }

    resultsDiv.innerHTML = results.map(r => `
      <div class="trainer-result" data-uid="${r.uid}">
        <span class="trainer-result-name">\uD83C\uDFAE ${r.displayName}</span>
        <span class="trainer-result-teams">${r.teams.length} ${t('battle.teams')}</span>
        <button class="btn btn-sm btn-primary btn-challenge" data-uid="${r.uid}">${t('battle.challenge')}</button>
      </div>
    `).join('');

    resultsDiv.querySelectorAll('.btn-challenge').forEach(btn => {
      btn.addEventListener('click', async () => {
        battleMode = 'pvp';
        await startPVP(btn.dataset.uid);
      });
    });
  } catch (err) {
    resultsDiv.innerHTML = `<p class="no-results">${t('battle.searchError')}</p>`;
  }
}

async function startPVP(uid) {
  const container = document.getElementById('battle-container');
  container.innerHTML = `<div class="battle-loading"><div class="spinner"></div><p>${t('battle.loading')}</p></div>`;

  try {
    const data = await getOpponentTeam(uid);
    if (!data || !data.slots || data.slots.filter(s => s.name).length === 0) {
      container.innerHTML = `<div class="battle-error"><p>${t('battle.noTeamFound')}</p><button class="btn btn-secondary" id="btn-back-menu">${t('battle.back')}</button></div>`;
      document.getElementById('btn-back-menu').addEventListener('click', renderBattleMenu);
      return;
    }
    opponentFullTeam = data.slots;
    opponentName = data.displayName;
    showTeamPreview();
  } catch (err) {
    container.innerHTML = `<div class="battle-error"><p>${t('battle.searchError')}</p><button class="btn btn-secondary" id="btn-back-menu">${t('battle.back')}</button></div>`;
    document.getElementById('btn-back-menu').addEventListener('click', renderBattleMenu);
  }
}

// ===== TEAM PREVIEW & SELECTION =====
function showTeamPreview() {
  currentPhase = 'select-team';
  selectedPlayerSlots.clear();

  const playerTeam = getActiveTeamSlots();
  const filledSlots = playerTeam.filter(s => s && s.name);

  if (filledSlots.length < 2) {
    const container = document.getElementById('battle-container');
    container.innerHTML = `
      <div class="battle-error">
        <p>${t('battle.needTeam')}</p>
        <button class="btn btn-secondary" id="btn-back-menu">${t('battle.back')}</button>
      </div>`;
    document.getElementById('btn-back-menu').addEventListener('click', renderBattleMenu);
    return;
  }

  const container = document.getElementById('battle-container');
  container.innerHTML = `
    <div class="team-preview">
      <button class="btn btn-secondary battle-back-btn" id="btn-back-menu">\u2190 ${t('battle.back')}</button>
      <h2>\u2694\uFE0F ${t('battle.teamPreview')}</h2>

      <div class="preview-sides">
        <div class="preview-side">
          <h3>\uD83D\uDC64 ${t('battle.yourTeam')} <span class="select-hint">(${t('battle.select4')})</span></h3>
          <div class="preview-slots player-preview" id="player-preview">
            ${playerTeam.map((s, i) => s && s.name ? renderPreviewSlot(s, i, true) : '').join('')}
          </div>
        </div>

        <div class="preview-vs">VS</div>

        <div class="preview-side">
          <h3>\uD83C\uDFAF ${opponentName}</h3>
          <div class="preview-slots opponent-preview" id="opponent-preview">
            ${opponentFullTeam.map((s, i) => s && s.name ? renderPreviewSlot(s, i, false) : '').join('')}
          </div>
        </div>
      </div>

      <div class="preview-actions">
        <p id="selection-count" class="selection-count">${t('battle.selected')}: 0/4</p>
        <button class="btn btn-primary btn-lg" id="btn-start-battle" disabled>${t('battle.startBattle')}</button>
      </div>
    </div>
  `;

  document.getElementById('btn-back-menu').addEventListener('click', renderBattleMenu);

  container.querySelectorAll('.preview-slot.selectable').forEach(slot => {
    slot.addEventListener('click', () => {
      const idx = parseInt(slot.dataset.index);
      if (selectedPlayerSlots.has(idx)) {
        selectedPlayerSlots.delete(idx);
        slot.classList.remove('selected');
      } else if (selectedPlayerSlots.size < 4) {
        selectedPlayerSlots.add(idx);
        slot.classList.add('selected');
      }
      updateSelectionCount();
    });
  });

  document.getElementById('btn-start-battle').addEventListener('click', () => {
    if (selectedPlayerSlots.size >= 2 && selectedPlayerSlots.size <= 4) {
      beginBattle();
    }
  });
}

function renderPreviewSlot(slot, index, isPlayer) {
  const spriteUrl = slot.sprite || (slot.id ? getSpriteUrl(slot.id) : getSpriteUrl(slot.name));
  const types = (slot.types || []).map(tp =>
    `<span class="type-badge" style="background:${TYPE_COLORS[tp] || '#888'}">${tp}</span>`
  ).join('');

  return `
    <div class="preview-slot ${isPlayer ? 'selectable' : ''}" data-index="${index}">
      <img src="${spriteUrl}" alt="${slot.name}" class="preview-sprite" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
      <div class="preview-name">${formatPokemonName(slot.name)}</div>
      <div class="preview-types">${types}</div>
      ${isPlayer ? '<div class="select-check">\u2713</div>' : ''}
    </div>
  `;
}

function updateSelectionCount() {
  const countEl = document.getElementById('selection-count');
  const btn = document.getElementById('btn-start-battle');
  const count = selectedPlayerSlots.size;
  countEl.textContent = `${t('battle.selected')}: ${count}/4`;
  btn.disabled = count < 2;
}

// ===== BEGIN BATTLE =====
async function beginBattle() {
  const container = document.getElementById('battle-container');
  container.innerHTML = `<div class="battle-loading"><div class="spinner"></div><p>${t('battle.preparing')}</p></div>`;

  const playerTeam = getActiveTeamSlots();
  const chosenPlayerSlots = [...selectedPlayerSlots].map(i => playerTeam[i]).filter(s => s && s.name);

  let chosenOpponentSlots = opponentFullTeam.filter(s => s && s.name);
  if (chosenOpponentSlots.length > 4) {
    const shuffled = [...chosenOpponentSlots].sort(() => Math.random() - 0.5);
    chosenOpponentSlots = shuffled.slice(0, 4);
  }

  try {
    await initBattle(battleMode, chosenPlayerSlots, chosenOpponentSlots, opponentName);
    currentPhase = 'battle';
    logHistory = [];
    logQueue = [];
    renderBattleField();
    // Show initial battle logs (Intimidate, weather abilities on leads)
    const initState = getBattleState();
    if (initState && initState.log.length > 0) {
      enqueueLog(initState.log);
    }
  } catch (err) {
    console.error('Battle init failed:', err);
    container.innerHTML = `
      <div class="battle-error">
        <p>${t('battle.initError')}</p>
        <button class="btn btn-secondary" id="btn-back-menu">${t('battle.back')}</button>
      </div>`;
    document.getElementById('btn-back-menu').addEventListener('click', renderBattleMenu);
  }
}

// ===== POKEBALL INDICATOR =====
function renderPokeballs(side) {
  let html = '';
  for (let i = 0; i < side.team.length; i++) {
    const mon = side.team[i];
    if (!mon) continue;
    const fainted = mon.currentHp <= 0;
    const active = side.active.includes(i);
    let cls = 'pokeball-icon';
    if (fainted) cls += ' pokeball-fainted';
    else if (active) cls += ' pokeball-active';
    html += `<span class="${cls}" title="${mon.species}"></span>`;
  }
  return html;
}

// ===== BATTLE FIELD (Traditional Layout) =====
function renderBattleField() {
  const state = getBattleState();
  if (!state) return;

  const container = document.getElementById('battle-container');
  container.innerHTML = `
    <div class="bf-wrapper">
      <div class="bf-topbar">
        <button class="btn btn-danger btn-sm" id="btn-forfeit">\u2715 ${t('battle.forfeit')}</button>
        <span class="bf-turn">${t('battle.turn')} ${state.turn}</span>
      </div>

      <div class="bf-arena">
        <div class="bf-opp-zone">
          <div class="bf-opp-mons">
            ${renderBattleMonCards(state.opponent, false)}
          </div>
          <div class="bf-pokeballs bf-opp-pokeballs">
            ${renderPokeballs(state.opponent)}
          </div>
        </div>

        <div class="bf-field">
          <div class="bf-field-opp-sprites">
            ${renderFieldSprites(state.opponent, false)}
          </div>
          <div class="bf-field-player-sprites">
            ${renderFieldSprites(state.player, true)}
          </div>
        </div>

        <div class="bf-player-zone">
          <div class="bf-pokeballs bf-player-pokeballs">
            ${renderPokeballs(state.player)}
          </div>
          <div class="bf-player-mons">
            ${renderBattleMonCards(state.player, true)}
          </div>
        </div>
      </div>

      <div class="bf-bottom">
        <div class="bf-chatlog" id="bf-chatlog">
          <div class="bf-chatlog-header">
            <span>\uD83D\uDCDC ${t('battle.log')}</span>
          </div>
          <div class="bf-chatlog-messages" id="bf-chatlog-messages">
            ${renderLogHistory()}
          </div>
          <div class="bf-chatlog-current" id="bf-chatlog-current"></div>
        </div>

        <div class="bf-actions" id="bf-actions">
          ${renderActions(state)}
        </div>
      </div>
    </div>
  `;

  scrollLogToBottom();
  bindAllButtons(state);
}

// ===== MON INFO CARD =====
function renderBattleMonCards(side, isPlayer) {
  return side.active.map((teamIdx) => {
    const mon = side.team[teamIdx];
    if (!mon) return '';
    const hpPercent = mon.maxHp > 0 ? (mon.currentHp / mon.maxHp * 100) : 0;
    const hpClass = hpPercent > 50 ? 'hp-high' : hpPercent > 20 ? 'hp-mid' : 'hp-low';
    const fainted = mon.currentHp <= 0;
    const statusBadge = mon.status
      ? `<span class="bf-status bf-status-${mon.status}">${mon.status.toUpperCase().slice(0,3)}</span>`
      : '';

    return `
      <div class="bf-mon-card ${fainted ? 'bf-mon-fainted' : ''} ${isPlayer ? 'bf-card-player' : 'bf-card-opp'}">
        <div class="bf-card-top">
          <span class="bf-mon-name">${mon.species}</span>
          ${statusBadge}
          <span class="bf-mon-lv">Lv${mon.level}</span>
        </div>
        <div class="bf-hp-bar-wrap">
          <span class="bf-hp-label">HP</span>
          <div class="bf-hp-bar">
            <div class="bf-hp-fill ${hpClass}" style="width:${hpPercent}%"></div>
          </div>
        </div>
        ${isPlayer ? `<div class="bf-hp-numbers">${mon.currentHp} / ${mon.maxHp}</div>` : ''}
      </div>
    `;
  }).join('');
}

// ===== FIELD SPRITES =====
function renderFieldSprites(side, isPlayer) {
  return side.active.map((teamIdx) => {
    const mon = side.team[teamIdx];
    if (!mon) return '';
    const fainted = mon.currentHp <= 0;
    const spriteBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;
    const sprite = isPlayer ? `${spriteBase}/back/${mon.id}.png` : `${spriteBase}/${mon.id}.png`;

    return `
      <div class="bf-field-sprite ${fainted ? 'bf-sprite-fainted' : ''}" title="${mon.species}">
        <img src="${sprite}" alt="${mon.species}"
          onerror="this.src='${spriteBase}/${mon.id}.png'">
        ${fainted ? '<div class="bf-faint-x">\u2715</div>' : ''}
      </div>
    `;
  }).join('');
}

// ===== ACTIONS PANEL =====
function renderActions(state) {
  if (state.phase === 'ended') return renderBattleResult(state);

  const playerNeeds = needsReplacement(state.player);
  if (playerNeeds.length > 0) return renderReplacementUI(state, playerNeeds);

  const activeMons = state.player.active
    .map(i => state.player.team[i])
    .filter(m => m && m.currentHp > 0);

  if (activeMons.length === 0) return '';

  let html = `<div class="bf-move-panel">`;

  for (const mon of activeMons) {
    const targets = state.opponent.active
      .map(i => state.opponent.team[i])
      .filter(m => m && m.currentHp > 0);

    html += `
      <div class="bf-mon-moves" data-mon-slot="${mon.slotIndex}">
        <div class="bf-mon-moves-header">
          <img src="${mon.sprite}" class="bf-moves-sprite">
          <strong>${mon.species}</strong>
        </div>
        <div class="bf-moves-grid">
          ${mon.moves.map((move, mi) => {
            const typeColor = TYPE_COLORS[move.type] || '#888';
            const disabled = move.pp <= 0 ? 'disabled' : '';
            return `
              <button class="bf-move-btn ${disabled}" data-mon="${mon.slotIndex}" data-move="${mi}" ${disabled}
                style="--move-color: ${typeColor}">
                <span class="bf-move-name">${move.displayName}</span>
                <span class="bf-move-meta">
                  <span class="bf-move-type" style="background:${typeColor}">${move.type}</span>
                  <span>${move.power || '\u2014'}</span>
                  <span class="bf-move-pp">${move.pp}/${move.maxPp}</span>
                </span>
              </button>`;
          }).join('')}
        </div>
        ${targets.length > 1 ? `
          <div class="bf-target-select" id="target-${mon.slotIndex}" style="display:none">
            <span>${t('battle.selectTarget')}:</span>
            ${targets.map(tgt => `
              <button class="bf-target-btn" data-mon="${mon.slotIndex}" data-target="${tgt.slotIndex}">
                \uD83C\uDFAF ${tgt.species}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  html += `</div>`;
  html += `<button class="btn btn-primary bf-execute-btn" id="btn-execute-turn" disabled>\u2694\uFE0F ${t('battle.executeTurn')}</button>`;

  return html;
}

function renderReplacementUI(state, neededSlots) {
  const bench = getBenchMons(state.player);
  if (bench.length === 0) return '';

  return `
    <div class="bf-replacement">
      <h3>${t('battle.chooseReplacement')}</h3>
      <div class="bf-replacement-list">
        ${bench.map(({ index, mon }) => `
          <button class="bf-replacement-btn" data-bench-idx="${index}" data-active-slot="${neededSlots[0]}">
            <img src="${mon.sprite}" class="bf-replacement-sprite">
            <div>
              <div class="bf-replacement-name">${mon.species}</div>
              <div class="bf-replacement-hp">${mon.currentHp}/${mon.maxHp} HP</div>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBattleResult(state) {
  const won = state.winner === 'player';
  return `
    <div class="bf-result ${won ? 'bf-victory' : 'bf-defeat'}">
      <div class="bf-result-icon">${won ? '\uD83C\uDFC6' : '\uD83D\uDC80'}</div>
      <h2>${won ? t('battle.victory') : t('battle.defeat')}</h2>
      <p>${won ? t('battle.victoryMsg') : t('battle.defeatMsg')}</p>
      <button class="btn btn-primary btn-lg" id="btn-back-menu">${t('battle.backToMenu')}</button>
    </div>
  `;
}

// ===== LOG SYSTEM =====
function renderLogHistory() {
  return logHistory.map(entry => `<div class="bf-log-msg bf-log-${entry.type || 'info'}">${entry.html}</div>`).join('');
}

function formatLogEntry(entry) {
  if (entry.type === 'turn-start') {
    return { html: `<strong class="bf-log-turn">\u2501\u2501 ${t('battle.turn')} ${entry.turn} \u2501\u2501</strong>`, type: 'turn-start' };
  } else if (entry.type === 'use-move') {
    return { html: `\u25B6 ${entry.text}`, type: 'use-move' };
  } else if (entry.type === 'damage') {
    return { html: `\uD83D\uDCA5 ${entry.target}: <strong>-${entry.damage}</strong> HP <span class="bf-log-dim">(${entry.hpLeft}/${entry.maxHp})</span>`, type: 'damage' };
  } else if (entry.type === 'crit') {
    return { html: `\u2728 ${entry.text}`, type: 'crit' };
  } else if (entry.type === 'effective') {
    return { html: `\uD83D\uDD25 ${entry.text}`, type: 'effective' };
  } else if (entry.type === 'resist') {
    return { html: `\uD83D\uDEE1\uFE0F ${entry.text}`, type: 'resist' };
  } else if (entry.type === 'immune') {
    return { html: `\u2B1B ${entry.text}`, type: 'immune' };
  } else if (entry.type === 'faint') {
    return { html: `\u2620\uFE0F ${entry.text}`, type: 'faint' };
  } else if (entry.type === 'status') {
    return { html: `\uD83D\uDD2E ${entry.target} was ${entry.status}ed!`, type: 'status' };
  } else if (entry.type === 'heal' || entry.type === 'drain') {
    return { html: `\uD83D\uDC9A ${entry.text || `${entry.target} recovered ${entry.amount} HP!`}`, type: 'heal' };
  } else if (entry.type === 'boost') {
    return { html: `\uD83D\uDCCA ${entry.text}`, type: 'boost' };
  } else if (entry.type === 'cant-move' || entry.type === 'miss') {
    return { html: `\uD83D\uDCA8 ${entry.text}`, type: 'miss' };
  } else if (entry.type === 'switch') {
    return { html: `\uD83D\uDD04 ${entry.text}`, type: 'switch' };
  } else if (entry.type === 'residual') {
    return { html: `\u23F3 ${entry.text}`, type: 'residual' };
  } else if (entry.type === 'battle-end') {
    return { html: `<strong class="bf-log-endgame">${entry.winner === 'player' ? '\uD83C\uDFC6 ' + t('battle.victory') : '\uD83D\uDC80 ' + t('battle.defeat')}!</strong>`, type: 'battle-end' };
  } else if (entry.type === 'protected') {
    return { html: `\uD83D\uDEE1\uFE0F ${entry.text}`, type: 'protect' };
  } else if (entry.type === 'recoil') {
    return { html: `\uD83D\uDCA2 ${entry.text}`, type: 'recoil' };
  } else if (entry.text) {
    return { html: entry.text, type: entry.type || 'info' };
  }
  return null;
}

function enqueueLog(entries) {
  for (const entry of entries) {
    if (!entry) continue;
    const formatted = formatLogEntry(entry);
    if (formatted) logQueue.push(formatted);
  }
  if (!isAnimatingLog) animateNextLog();
}

function animateNextLog() {
  if (logQueue.length === 0) {
    isAnimatingLog = false;
    updateFieldDisplay();
    return;
  }

  isAnimatingLog = true;
  const entry = logQueue.shift();
  logHistory.push(entry);

  const currentEl = document.getElementById('bf-chatlog-current');
  const messagesEl = document.getElementById('bf-chatlog-messages');
  if (!currentEl || !messagesEl) {
    isAnimatingLog = false;
    return;
  }

  if (currentEl.innerHTML) {
    messagesEl.innerHTML += currentEl.innerHTML;
  }

  currentEl.innerHTML = `<div class="bf-log-msg bf-log-${entry.type} bf-log-new">${entry.html}</div>`;
  scrollLogToBottom();

  const delay = entry.type === 'turn-start' ? 400 : entry.type === 'faint' || entry.type === 'battle-end' ? 800 : 350;
  setTimeout(() => animateNextLog(), delay);
}

function scrollLogToBottom() {
  const parent = document.getElementById('bf-chatlog');
  if (parent) parent.scrollTop = parent.scrollHeight;
}

function updateFieldDisplay() {
  const state = getBattleState();
  if (!state) return;

  const oppMonsEl = document.querySelector('.bf-opp-mons');
  if (oppMonsEl) oppMonsEl.innerHTML = renderBattleMonCards(state.opponent, false);

  const playerMonsEl = document.querySelector('.bf-player-mons');
  if (playerMonsEl) playerMonsEl.innerHTML = renderBattleMonCards(state.player, true);

  const oppSprites = document.querySelector('.bf-field-opp-sprites');
  if (oppSprites) oppSprites.innerHTML = renderFieldSprites(state.opponent, false);

  const playerSprites = document.querySelector('.bf-field-player-sprites');
  if (playerSprites) playerSprites.innerHTML = renderFieldSprites(state.player, true);

  const oppPokeballs = document.querySelector('.bf-opp-pokeballs');
  if (oppPokeballs) oppPokeballs.innerHTML = renderPokeballs(state.opponent);

  const playerPokeballs = document.querySelector('.bf-player-pokeballs');
  if (playerPokeballs) playerPokeballs.innerHTML = renderPokeballs(state.player);

  const turnEl = document.querySelector('.bf-turn');
  if (turnEl) turnEl.textContent = `${t('battle.turn')} ${state.turn}`;

  const actionsEl = document.getElementById('bf-actions');
  if (actionsEl) {
    actionsEl.innerHTML = renderActions(state);
    bindAllButtons(state);
  }
}

// ===== BUTTON BINDINGS =====
function bindAllButtons(state) {
  if (!state) return;
  pendingMoveSelections = [];

  const forfeitBtn = document.getElementById('btn-forfeit');
  if (forfeitBtn) {
    forfeitBtn.addEventListener('click', () => {
      if (confirm(t('battle.confirmForfeit'))) renderBattleMenu();
    });
  }

  const backBtn = document.getElementById('btn-back-menu');
  if (backBtn) backBtn.addEventListener('click', renderBattleMenu);

  document.querySelectorAll('.bf-replacement-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const benchIdx = parseInt(btn.dataset.benchIdx);
      const activeSlot = parseInt(btn.dataset.activeSlot);
      const logEntries = switchIn(state.player, activeSlot, benchIdx);
      enqueueLog(Array.isArray(logEntries) ? logEntries : [logEntries]);

      const aiNeeds = needsReplacement(state.opponent);
      for (const slot of aiNeeds) {
        const aiPick = aiChooseReplacement(state.opponent);
        if (aiPick !== null) {
          const aiLogEntries = switchIn(state.opponent, slot, aiPick);
          enqueueLog(Array.isArray(aiLogEntries) ? aiLogEntries : [aiLogEntries]);
        }
      }
    });
  });

  const activeMons = state.player.active
    .map(i => state.player.team[i])
    .filter(m => m && m.currentHp > 0);
  const totalNeeded = activeMons.length;

  document.querySelectorAll('.bf-move-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const monSlot = parseInt(btn.dataset.mon);
      const moveIdx = parseInt(btn.dataset.move);
      const mon = state.player.team[monSlot];
      const move = mon.moves[moveIdx];

      pendingMoveSelections = pendingMoveSelections.filter(s => s.monSlot !== monSlot);

      document.querySelectorAll(`.bf-move-btn[data-mon="${monSlot}"]`).forEach(b => b.classList.remove('bf-move-selected'));
      btn.classList.add('bf-move-selected');

      const targets = state.opponent.active
        .map(i => state.opponent.team[i])
        .filter(m => m && m.currentHp > 0);

      if (targets.length > 1 && move.category !== 'status') {
        const selector = document.getElementById(`target-${monSlot}`);
        if (selector) {
          selector.style.display = 'flex';
          selector.querySelectorAll('.bf-target-btn').forEach(tBtn => {
            tBtn.onclick = () => {
              const targetSlot = parseInt(tBtn.dataset.target);
              pendingMoveSelections = pendingMoveSelections.filter(s => s.monSlot !== monSlot);
              pendingMoveSelections.push({ monSlot, moveIdx, targetSlot });
              selector.style.display = 'none';
              checkAllSelected(totalNeeded);
            };
          });
        }
      } else {
        const targetSlot = targets.length > 0 ? targets[0].slotIndex : null;
        pendingMoveSelections.push({ monSlot, moveIdx, targetSlot });
        checkAllSelected(totalNeeded);
      }
    });
  });

  const execBtn = document.getElementById('btn-execute-turn');
  if (execBtn) {
    execBtn.addEventListener('click', () => {
      if (pendingMoveSelections.length < totalNeeded) return;
      executeBattleTurn();
    });
  }
}

function checkAllSelected(needed) {
  const btn = document.getElementById('btn-execute-turn');
  if (btn) btn.disabled = pendingMoveSelections.length < needed;
}

// ===== EXECUTE TURN =====
function executeBattleTurn() {
  const state = getBattleState();
  if (!state) return;

  const actionsEl = document.getElementById('bf-actions');
  if (actionsEl) actionsEl.innerHTML = `<div class="bf-waiting">\u23F3 ${t('battle.processing')}...</div>`;

  try {
    const playerActions = [];
    for (const sel of pendingMoveSelections) {
      const mon = state.player.team[sel.monSlot];
      if (!mon) continue;
      const move = mon.moves[sel.moveIdx];
      if (!move) continue;
      move.pp = Math.max(0, move.pp - 1);

      let target = null;
      if (sel.targetSlot !== null) {
        target = state.opponent.team.find(m => m && m.slotIndex === sel.targetSlot);
      }
      if (!target) {
        const targets = state.opponent.active
          .map(i => state.opponent.team[i])
          .filter(m => m && m.currentHp > 0);
        target = targets[0];
      }

      if (mon && target) playerActions.push({ attacker: mon, defender: target, move });
    }

    const aiActions = aiChooseActions(state.opponent);
    const turnLog = executeTurn(playerActions, aiActions);

    enqueueLog(turnLog);
  } catch (err) {
    console.error('Turn execution error:', err);
    if (actionsEl) actionsEl.innerHTML = `<div class="bf-waiting">Error: ${err.message}</div>`;
  }
}
