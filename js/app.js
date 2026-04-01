// ============================================
// PokéBuilder — Main App Controller
// ============================================

import { preloadEssentials } from './api.js';
import { applyTranslations, toggleLang, getLang, setLang } from './i18n.js';
import { initTeamBuilder, refreshTeamBuilder } from './teambuilder.js';
import { initDamageCalc, refreshDamageCalc } from './damage-calc.js';
import { initIVEVCalc, refreshIVEVCalc } from './iv-ev-calc.js';
import { initInfoPopup } from './info-popup.js';
import { initLoginScreen, getCurrentProfile } from './profile.js';
import { initBattleUI, refreshBattleUI } from './battle-ui.js';

// --- Theme ---
function initTheme() {
  const saved = localStorage.getItem('pokebuilder-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pokebuilder-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-icon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// --- Language ---
function initLanguage() {
  const saved = localStorage.getItem('pokebuilder-lang') || 'en';
  setLang(saved);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const newLang = toggleLang();
    refreshAllViews();
  });
}

function refreshAllViews() {
  applyTranslations();
  refreshTeamBuilder();
  refreshDamageCalc();
  refreshIVEVCalc();
  refreshBattleUI();
}

// --- Navigation ---
function initNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  const views = document.querySelectorAll('.view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      views.forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${target}`)?.classList.add('active');
    });
  });
}

// --- Loading ---
function showLoading() {
  document.getElementById('loading-overlay').style.display = 'flex';
}
function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

// --- Init ---
async function init() {
  showLoading();

  try {
    initTheme();
    initNavigation();
    initInfoPopup();
    initLoginScreen();

    // Preload API data
    await preloadEssentials();

    // Initialize modules
    await Promise.all([
      initTeamBuilder(),
      initDamageCalc(),
      initIVEVCalc()
    ]);

    initBattleUI();

    // Apply language after everything is set up
    initLanguage();

  } catch (err) {
    console.error('Failed to initialize PokéBuilder:', err);
  } finally {
    hideLoading();
  }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
