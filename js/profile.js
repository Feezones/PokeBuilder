// ============================================
// PokéBuilder — Profile & Multi-Team Manager
// ============================================
// Uses localStorage. Structure:
//   pokebuilder-profiles       → ["ash", "misty", ...]
//   pokebuilder-current        → "ash"
//   pokebuilder-teams-ash      → [{ name: "Team 1", slots: [...] }, ...]
//   pokebuilder-active-team-ash → 0

import { createEmptySlot } from './utils.js';
import { t } from './i18n.js';

const PROFILES_KEY = 'pokebuilder-profiles';
const CURRENT_KEY = 'pokebuilder-current';

let currentProfile = null;
let teams = [];
let activeTeamIndex = 0;
let onTeamChanged = null; // callback

function teamsKey(profile) { return `pokebuilder-teams-${profile}`; }
function activeTeamKey(profile) { return `pokebuilder-active-team-${profile}`; }

// --- Profile helpers ---
function getProfiles() {
  try {
    return JSON.parse(localStorage.getItem(PROFILES_KEY)) || [];
  } catch { return []; }
}

function saveProfiles(list) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(list));
}

function createEmptyTeam(name) {
  return {
    name: name || 'Team 1',
    slots: [
      createEmptySlot(), createEmptySlot(), createEmptySlot(),
      createEmptySlot(), createEmptySlot(), createEmptySlot()
    ]
  };
}

// --- Public API ---

export function getCurrentProfile() { return currentProfile; }
export function getActiveTeam() { return teams[activeTeamIndex]; }
export function getActiveTeamSlots() { return teams[activeTeamIndex]?.slots || []; }
export function getActiveTeamIndex() { return activeTeamIndex; }
export function getTeams() { return teams; }

export function setOnTeamChanged(cb) { onTeamChanged = cb; }

export function saveTeams() {
  if (!currentProfile) return;
  try {
    localStorage.setItem(teamsKey(currentProfile), JSON.stringify(teams));
    localStorage.setItem(activeTeamKey(currentProfile), String(activeTeamIndex));
  } catch { /* ignore */ }
}

export function login(nick) {
  const name = nick.trim();
  if (!name) return false;

  currentProfile = name.toLowerCase();

  // Add to profiles list if new
  const profiles = getProfiles();
  if (!profiles.includes(currentProfile)) {
    profiles.push(currentProfile);
    saveProfiles(profiles);
  }

  localStorage.setItem(CURRENT_KEY, currentProfile);

  // Load teams
  try {
    const saved = localStorage.getItem(teamsKey(currentProfile));
    teams = saved ? JSON.parse(saved) : [];
  } catch { teams = []; }

  // Migrate: if profile has no teams, check for legacy single-team data
  if (teams.length === 0) {
    const legacy = localStorage.getItem('pokebuilder-team');
    if (legacy) {
      try {
        const legacySlots = JSON.parse(legacy);
        if (Array.isArray(legacySlots) && legacySlots.length === 6) {
          teams.push({ name: 'Team 1', slots: legacySlots.map(s => ({ ...createEmptySlot(), ...s })) });
        }
      } catch { /* ignore */ }
    }
  }

  if (teams.length === 0) {
    teams.push(createEmptyTeam('Team 1'));
  }

  // Load active team index
  const savedIdx = parseInt(localStorage.getItem(activeTeamKey(currentProfile)));
  activeTeamIndex = (savedIdx >= 0 && savedIdx < teams.length) ? savedIdx : 0;

  saveTeams();
  return true;
}

export function logout() {
  currentProfile = null;
  teams = [];
  activeTeamIndex = 0;
  localStorage.removeItem(CURRENT_KEY);
}

export function getSavedProfile() {
  return localStorage.getItem(CURRENT_KEY) || null;
}

export function deleteProfile(name) {
  const profiles = getProfiles().filter(p => p !== name);
  saveProfiles(profiles);
  localStorage.removeItem(teamsKey(name));
  localStorage.removeItem(activeTeamKey(name));
  if (currentProfile === name) {
    logout();
  }
}

// --- Team management ---

export function switchTeam(index) {
  if (index < 0 || index >= teams.length) return;
  activeTeamIndex = index;
  saveTeams();
  if (onTeamChanged) onTeamChanged();
}

export function addTeam(name) {
  const teamName = name || `Team ${teams.length + 1}`;
  teams.push(createEmptyTeam(teamName));
  activeTeamIndex = teams.length - 1;
  saveTeams();
  if (onTeamChanged) onTeamChanged();
}

export function deleteTeam(index) {
  if (teams.length <= 1) return; // keep at least 1
  teams.splice(index, 1);
  if (activeTeamIndex >= teams.length) activeTeamIndex = teams.length - 1;
  saveTeams();
  if (onTeamChanged) onTeamChanged();
}

export function renameTeam(index, newName) {
  if (index < 0 || index >= teams.length || !newName.trim()) return;
  teams[index].name = newName.trim();
  saveTeams();
}

// --- Login UI ---

export function initLoginScreen() {
  const screen = document.getElementById('login-screen');
  const input = document.getElementById('login-nick');
  const btn = document.getElementById('login-btn');
  const profilesList = document.getElementById('login-profiles-list');
  const profilesContainer = document.getElementById('login-profiles');

  function renderProfiles() {
    const profiles = getProfiles();
    if (profiles.length === 0) {
      profilesContainer.style.display = 'none';
      return;
    }
    profilesContainer.style.display = 'block';
    profilesList.innerHTML = profiles.map(p =>
      `<div class="profile-chip" data-profile="${p}">
        <span>${p}</span>
        <button class="chip-remove" data-delete="${p}" title="Delete">&times;</button>
      </div>`
    ).join('');

    profilesList.querySelectorAll('.profile-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip-remove')) return;
        const profile = chip.dataset.profile;
        input.value = profile;
        doLogin(profile);
      });
    });

    profilesList.querySelectorAll('.chip-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.dataset.delete;
        if (confirm(t('login.confirmDelete').replace('{name}', name))) {
          deleteProfile(name);
          renderProfiles();
        }
      });
    });
  }

  function doLogin(nick) {
    if (login(nick)) {
      screen.style.display = 'none';
      document.getElementById('app-header').style.display = '';
      document.getElementById('app-nav').style.display = '';
      document.getElementById('app-main').style.display = '';
      document.getElementById('trainer-name').textContent = currentProfile;
      if (onTeamChanged) onTeamChanged();
    }
  }

  btn.addEventListener('click', () => doLogin(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doLogin(input.value);
  });

  // Logout
  document.getElementById('btn-logout').addEventListener('click', () => {
    logout();
    document.getElementById('app-header').style.display = 'none';
    document.getElementById('app-nav').style.display = 'none';
    document.getElementById('app-main').style.display = 'none';
    screen.style.display = 'flex';
    input.value = '';
    renderProfiles();
  });

  renderProfiles();

  // Auto-login if saved
  const saved = getSavedProfile();
  if (saved) {
    doLogin(saved);
  }
}

// --- Team Tabs UI ---

export function renderTeamTabs() {
  const container = document.getElementById('team-tabs');
  if (!container) return;

  container.innerHTML = teams.map((team, i) =>
    `<button class="team-tab${i === activeTeamIndex ? ' active' : ''}" data-team-index="${i}">${team.name}</button>`
  ).join('');

  container.querySelectorAll('.team-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchTeam(parseInt(tab.dataset.teamIndex));
    });
  });
}

export function initTeamManagement() {
  document.getElementById('btn-add-team').addEventListener('click', () => {
    const name = prompt(t('tb.newTeamName'), `Team ${teams.length + 1}`);
    if (name !== null) addTeam(name);
  });

  document.getElementById('btn-rename-team').addEventListener('click', () => {
    const current = teams[activeTeamIndex]?.name || '';
    const name = prompt(t('tb.renameTeamPrompt'), current);
    if (name !== null && name.trim()) {
      renameTeam(activeTeamIndex, name);
      renderTeamTabs();
    }
  });

  document.getElementById('btn-delete-team').addEventListener('click', () => {
    if (teams.length <= 1) {
      alert(t('tb.cantDeleteLast'));
      return;
    }
    if (confirm(t('tb.confirmDeleteTeam').replace('{name}', teams[activeTeamIndex].name))) {
      deleteTeam(activeTeamIndex);
    }
  });
}
