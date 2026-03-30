// ============================================
// PokéBuilder — Info Popup Controller
// ============================================

import { getAbility, getMove, getItem, formatName, getItemSpriteUrl } from './api.js';
import { TYPE_COLORS } from './utils.js';
import { t, getLang } from './i18n.js';

const overlay = () => document.getElementById('info-popup');
const titleEl = () => document.getElementById('info-popup-title');
const bodyEl = () => document.getElementById('info-popup-body');

function showLoading(name) {
  const popup = overlay();
  titleEl().textContent = formatName(name);
  bodyEl().innerHTML = '<div class="spinner" style="margin:20px auto"></div>';
  popup.style.display = 'flex';
}

function close() {
  overlay().style.display = 'none';
}

function getLocalizedText(entries, fallbackLang = 'en') {
  if (!entries || entries.length === 0) return '';
  const lang = getLang();
  const langMap = { 'en': 'en', 'pt-br': 'pt' };
  const target = langMap[lang] || 'en';

  const found = entries.find(e => e.language.name === target);
  if (found) return found;

  const enFallback = entries.find(e => e.language.name === 'en');
  return enFallback || entries[0];
}

// --- Show Ability Info ---
export async function showAbilityInfo(abilityName) {
  if (!abilityName) return;
  showLoading(abilityName);

  try {
    const data = await getAbility(abilityName);

    // Get localized name
    const nameEntry = getLocalizedText(data.names);
    const displayName = nameEntry?.name || formatName(abilityName);

    // Get localized flavor text
    const flavorEntry = getLocalizedText(data.flavor_text_entries);
    const flavorText = flavorEntry?.flavor_text || '';

    // Get localized effect
    const effectEntry = getLocalizedText(data.effect_entries);
    const effectText = effectEntry?.effect || effectEntry?.short_effect || '';

    // Get short effect
    const shortEffectEntry = data.effect_entries.find(e => e.language.name === 'en');
    const shortEffect = shortEffectEntry?.short_effect || '';

    titleEl().innerHTML = `<span>🔮</span> ${displayName}`;
    bodyEl().innerHTML = `
      <div class="info-row">
        <span class="info-label">${t('info.name')}</span>
        <span class="info-value">${displayName}</span>
      </div>
      ${data.is_main_series ? '' : `
        <div class="info-row">
          <span class="info-label">${t('info.note')}</span>
          <span class="info-value" style="color:var(--warning)">${t('info.notMainSeries')}</span>
        </div>
      `}
      ${shortEffect ? `
        <div class="info-row">
          <span class="info-label">${t('info.effect')}</span>
          <span class="info-value">${shortEffect}</span>
        </div>
      ` : ''}
      <div class="info-description">
        ${flavorText ? `<p>${flavorText.replace(/\n/g, ' ')}</p>` : ''}
        ${effectText ? `<p style="color:var(--text-muted);font-size:0.85rem">${effectText.replace(/\n/g, ' ')}</p>` : ''}
      </div>
    `;
  } catch {
    bodyEl().innerHTML = `<p style="color:var(--danger)">${t('info.loadError')}</p>`;
  }
}

// --- Show Move Info ---
export async function showMoveInfo(moveName) {
  if (!moveName) return;
  showLoading(moveName);

  try {
    const data = await getMove(moveName);

    // Get localized name
    const nameEntry = getLocalizedText(data.names);
    const displayName = nameEntry?.name || formatName(moveName);

    // Get localized flavor text
    const flavorEntry = getLocalizedText(data.flavor_text_entries);
    const flavorText = flavorEntry?.flavor_text || '';

    // Get localized effect
    const effectEntry = getLocalizedText(data.effect_entries);
    const effectText = effectEntry?.short_effect || effectEntry?.effect || '';
    // Replace $effect_chance placeholder
    const effectChance = data.effect_chance;
    const effectFinal = effectText.replace(/\$effect_chance/g, effectChance ?? '—');

    const typeName = data.type.name;
    const typeColor = TYPE_COLORS[typeName] || '#888';
    const category = data.damage_class.name;

    const catLabel = category === 'physical' ? t('dc.physical') :
                     category === 'special' ? t('dc.special') : t('dc.status');
    const catClass = category;

    titleEl().innerHTML = `<span class="type-badge" style="background:${typeColor};font-size:0.75rem">${typeName.toUpperCase()}</span> ${displayName}`;
    bodyEl().innerHTML = `
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${t('dc.power')}</span>
          <span class="info-value" style="font-weight:700">${data.power ?? '—'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('info.accuracy')}</span>
          <span class="info-value" style="font-weight:700">${data.accuracy ? data.accuracy + '%' : '—'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">PP</span>
          <span class="info-value">${data.pp ?? '—'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('dc.category')}</span>
          <span class="info-value"><span class="move-cat ${catClass}">${catLabel}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('info.type')}</span>
          <span class="info-value"><span class="type-badge" style="background:${typeColor}">${typeName.toUpperCase()}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('info.priority')}</span>
          <span class="info-value">${data.priority > 0 ? '+' : ''}${data.priority}</span>
        </div>
      </div>
      ${data.meta ? `
        <div class="info-move-meta" style="border-top:1px solid var(--border-color);padding-top:var(--sp-sm)">
          ${data.meta.min_hits !== null && data.meta.max_hits !== null && data.meta.max_hits > 0 ? `
            <div class="info-row">
              <span class="info-label">${t('info.hits')}</span>
              <span class="info-value">${data.meta.min_hits === data.meta.max_hits ? data.meta.min_hits : data.meta.min_hits + '–' + data.meta.max_hits}</span>
            </div>
          ` : ''}
          ${data.meta.drain !== 0 ? `
            <div class="info-row">
              <span class="info-label">${t('info.drain')}</span>
              <span class="info-value">${data.meta.drain}%</span>
            </div>
          ` : ''}
          ${data.meta.healing !== 0 ? `
            <div class="info-row">
              <span class="info-label">${t('info.healing')}</span>
              <span class="info-value">${data.meta.healing}%</span>
            </div>
          ` : ''}
          ${data.meta.crit_rate > 0 ? `
            <div class="info-row">
              <span class="info-label">${t('info.critRate')}</span>
              <span class="info-value">+${data.meta.crit_rate}</span>
            </div>
          ` : ''}
        </div>
      ` : ''}
      <div class="info-description">
        ${effectFinal ? `<p>${effectFinal.replace(/\n/g, ' ')}</p>` : ''}
        ${flavorText ? `<p style="font-style:italic;color:var(--text-muted)">"${flavorText.replace(/\n/g, ' ')}"</p>` : ''}
      </div>
    `;
  } catch {
    bodyEl().innerHTML = `<p style="color:var(--danger)">${t('info.loadError')}</p>`;
  }
}

// --- Show Item Info ---
export async function showItemInfo(itemName) {
  if (!itemName) return;
  showLoading(itemName);

  try {
    const data = await getItem(itemName);

    // Get localized name
    const nameEntry = getLocalizedText(data.names);
    const displayName = nameEntry?.name || formatName(itemName);

    // Get localized flavor text
    const flavorEntry = getLocalizedText(data.flavor_text_entries);
    const flavorText = flavorEntry?.text || '';

    // Get localized effect
    const effectEntry = getLocalizedText(data.effect_entries);
    const effectText = effectEntry?.short_effect || effectEntry?.effect || '';

    // Category
    const category = data.category?.name ? formatName(data.category.name) : '—';

    // Sprite
    const spriteUrl = data.sprites?.default || getItemSpriteUrl(itemName);

    // Fling power / effect
    const flingPower = data.fling_power;
    const flingEffect = data.fling_effect?.name ? formatName(data.fling_effect.name) : null;

    titleEl().innerHTML = `<img src="${spriteUrl}" alt="" width="24" height="24" style="image-rendering:pixelated"> ${displayName}`;
    bodyEl().innerHTML = `
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${t('info.name')}</span>
          <span class="info-value">${displayName}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('info.category')}</span>
          <span class="info-value">${category}</span>
        </div>
        ${flingPower ? `
          <div class="info-row">
            <span class="info-label">${t('info.flingPower')}</span>
            <span class="info-value">${flingPower}</span>
          </div>
        ` : ''}
        ${flingEffect ? `
          <div class="info-row">
            <span class="info-label">${t('info.flingEffect')}</span>
            <span class="info-value">${flingEffect}</span>
          </div>
        ` : ''}
        ${data.cost ? `
          <div class="info-row">
            <span class="info-label">${t('info.cost')}</span>
            <span class="info-value">₽${data.cost}</span>
          </div>
        ` : ''}
      </div>
      <div class="info-description">
        ${effectText ? `<p>${effectText.replace(/\n/g, ' ')}</p>` : ''}
        ${flavorText ? `<p style="font-style:italic;color:var(--text-muted)">"${flavorText.replace(/\n/g, ' ')}"</p>` : ''}
      </div>
    `;
  } catch {
    bodyEl().innerHTML = `<p style="color:var(--danger)">${t('info.loadError')}</p>`;
  }
}

// --- Init popup close handlers ---
export function initInfoPopup() {
  document.getElementById('info-popup-close').addEventListener('click', close);
  document.getElementById('info-popup').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay().style.display !== 'none') close();
  });
}
