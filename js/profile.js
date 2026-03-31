// ============================================
// PokéBuilder — Profile & Multi-Team Manager
// ============================================
// Uses Firebase Auth (email/password) + Firestore only.
// Firestore structure:
//   users/{uid} → { displayName, teams: [...], activeTeamIndex: 0 }

import { createEmptySlot } from './utils.js';
import { t } from './i18n.js';
import { db, auth } from './firebase.js';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser
} from 'firebase/auth';

let currentUser = null; // Firebase Auth user object
let displayName = '';
let teams = [];
let activeTeamIndex = 0;
let onTeamChanged = null; // callback

function userDocRef() {
  return doc(db, 'users', currentUser.uid);
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

export function getCurrentProfile() { return displayName; }
export function getActiveTeam() { return teams[activeTeamIndex]; }
export function getActiveTeamSlots() { return teams[activeTeamIndex]?.slots || []; }
export function getActiveTeamIndex() { return activeTeamIndex; }
export function getTeams() { return teams; }

export function setOnTeamChanged(cb) { onTeamChanged = cb; }

export async function saveTeams() {
  if (!currentUser) return;
  try {
    await setDoc(userDocRef(), {
      displayName,
      teams: JSON.parse(JSON.stringify(teams)),
      activeTeamIndex
    }, { merge: true });
  } catch (err) {
    console.error('Failed to save teams to Firestore:', err);
  }
}

// --- Auth ---

export async function register(email, password, name) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  currentUser = cred.user;
  displayName = name.trim() || email.split('@')[0];
  teams = [createEmptyTeam('Team 1')];
  activeTeamIndex = 0;
  await saveTeams();
  return true;
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  currentUser = cred.user;
  await loadUserData();
  return true;
}

async function loadUserData() {
  if (!currentUser) return;
  try {
    const snap = await getDoc(userDocRef());
    if (snap.exists()) {
      const data = snap.data();
      displayName = data.displayName || currentUser.email.split('@')[0];
      teams = Array.isArray(data.teams) ? data.teams : [];
      activeTeamIndex = (typeof data.activeTeamIndex === 'number' && data.activeTeamIndex >= 0 && data.activeTeamIndex < teams.length)
        ? data.activeTeamIndex : 0;
    }
  } catch (err) {
    console.error('Failed to load user data:', err);
  }
  if (teams.length === 0) {
    teams = [createEmptyTeam('Team 1')];
    activeTeamIndex = 0;
    await saveTeams();
  }
}

export async function logout() {
  await signOut(auth);
  currentUser = null;
  displayName = '';
  teams = [];
  activeTeamIndex = 0;
}

export async function deleteAccount() {
  if (!currentUser) return;
  try {
    await deleteDoc(userDocRef());
    await deleteUser(currentUser);
  } catch (err) {
    console.error('Failed to delete account:', err);
    throw err;
  }
  currentUser = null;
  displayName = '';
  teams = [];
  activeTeamIndex = 0;
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

function showApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-header').style.display = '';
  document.getElementById('app-nav').style.display = '';
  document.getElementById('app-main').style.display = '';
  document.getElementById('trainer-name').textContent = displayName;
  if (onTeamChanged) onTeamChanged();
}

function showLogin() {
  document.getElementById('app-header').style.display = 'none';
  document.getElementById('app-nav').style.display = 'none';
  document.getElementById('app-main').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
}

export function initLoginScreen() {
  const screen = document.getElementById('login-screen');
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const nameInput = document.getElementById('login-nick');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const toggleLink = document.getElementById('login-toggle');
  const errorEl = document.getElementById('login-error');
  const nameGroup = document.getElementById('login-name-group');

  let isRegisterMode = false;

  function setMode(registerMode) {
    isRegisterMode = registerMode;
    nameGroup.style.display = registerMode ? '' : 'none';
    loginBtn.style.display = registerMode ? 'none' : '';
    registerBtn.style.display = registerMode ? '' : 'none';
    toggleLink.innerHTML = registerMode
      ? `${t('login.hasAccount')} <a href="#">${t('login.loginLink')}</a>`
      : `${t('login.noAccount')} <a href="#">${t('login.registerLink')}</a>`;
    errorEl.textContent = '';
  }

  function showError(msg) {
    errorEl.textContent = msg;
  }

  async function doLogin() {
    errorEl.textContent = '';
    const email = emailInput.value.trim();
    const pass = passwordInput.value;
    if (!email || !pass) return showError(t('login.fillFields'));
    try {
      await login(email, pass);
      showApp();
    } catch (err) {
      showError(firebaseErrorMsg(err.code));
    }
  }

  async function doRegister() {
    errorEl.textContent = '';
    const email = emailInput.value.trim();
    const pass = passwordInput.value;
    const name = nameInput.value.trim();
    if (!email || !pass) return showError(t('login.fillFields'));
    if (pass.length < 6) return showError(t('login.weakPassword'));
    try {
      await register(email, pass, name);
      showApp();
    } catch (err) {
      showError(firebaseErrorMsg(err.code));
    }
  }

  loginBtn.addEventListener('click', doLogin);
  registerBtn.addEventListener('click', doRegister);

  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      isRegisterMode ? doRegister() : doLogin();
    }
  });

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && isRegisterMode) doRegister();
  });

  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    setMode(!isRegisterMode);
  });

  // Logout
  document.getElementById('btn-logout').addEventListener('click', async () => {
    await logout();
    showLogin();
    emailInput.value = '';
    passwordInput.value = '';
    nameInput.value = '';
    setMode(false);
  });

  setMode(false);

  // Auto-login if session persisted by Firebase
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUser = user;
      await loadUserData();
      showApp();
    }
  });
}

function firebaseErrorMsg(code) {
  switch (code) {
    case 'auth/email-already-in-use': return t('login.errEmailInUse');
    case 'auth/invalid-email': return t('login.errInvalidEmail');
    case 'auth/user-not-found': return t('login.errUserNotFound');
    case 'auth/wrong-password': return t('login.errWrongPassword');
    case 'auth/invalid-credential': return t('login.errInvalidCredential');
    case 'auth/too-many-requests': return t('login.errTooMany');
    case 'auth/weak-password': return t('login.weakPassword');
    default: return t('login.errGeneric');
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
