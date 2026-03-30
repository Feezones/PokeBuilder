// ============================================
// PokéBuilder — PokeAPI Service with Caching
// ============================================

const API_BASE = 'https://pokeapi.co/api/v2';
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) return cache.get(url);

  // Check sessionStorage
  const stored = sessionStorage.getItem(`poke:${url}`);
  if (stored) {
    const data = JSON.parse(stored);
    cache.set(url, data);
    return data;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status} for ${url}`);
  const data = await res.json();

  cache.set(url, data);
  try {
    sessionStorage.setItem(`poke:${url}`, JSON.stringify(data));
  } catch {
    // sessionStorage full, clear old entries
    sessionStorage.clear();
  }
  return data;
}

// --- Pokémon List ---
let pokemonListCache = null;

export async function getPokemonList() {
  if (pokemonListCache) return pokemonListCache;

  const data = await fetchWithCache(`${API_BASE}/pokemon?limit=1025`);
  pokemonListCache = data.results.map((p, i) => ({
    name: p.name,
    id: i + 1,
    url: p.url
  }));
  return pokemonListCache;
}

// --- Pokémon Details ---
export async function getPokemon(nameOrId) {
  return fetchWithCache(`${API_BASE}/pokemon/${nameOrId}`);
}

// --- Pokémon Species (for localized names) ---
export async function getPokemonSpecies(nameOrId) {
  return fetchWithCache(`${API_BASE}/pokemon-species/${nameOrId}`);
}

// --- Move Details ---
export async function getMove(nameOrId) {
  return fetchWithCache(`${API_BASE}/move/${nameOrId}`);
}

// --- Move List ---
let moveListCache = null;

export async function getMoveList() {
  if (moveListCache) return moveListCache;

  const data = await fetchWithCache(`${API_BASE}/move?limit=1000`);
  moveListCache = data.results.map((m, i) => ({
    name: m.name,
    id: i + 1,
    url: m.url
  }));
  return moveListCache;
}

// --- Item List ---
let itemListCache = null;

export async function getItemList() {
  if (itemListCache) return itemListCache;

  // Fetch held items category (more relevant for competitive)
  const data = await fetchWithCache(`${API_BASE}/item?limit=2000`);
  itemListCache = data.results.map((item, i) => ({
    name: item.name,
    id: i + 1,
    url: item.url
  }));
  return itemListCache;
}

// --- Item Details ---
export async function getItem(nameOrId) {
  return fetchWithCache(`${API_BASE}/item/${nameOrId}`);
}

// --- Ability Details ---
export async function getAbility(nameOrId) {
  return fetchWithCache(`${API_BASE}/ability/${nameOrId}`);
}

// --- Nature Details ---
export async function getNature(nameOrId) {
  return fetchWithCache(`${API_BASE}/nature/${nameOrId}`);
}

// --- Type Details ---
export async function getType(nameOrId) {
  return fetchWithCache(`${API_BASE}/type/${nameOrId}`);
}

// --- Sprite URL Helper ---
export function getSpriteUrl(pokemonId) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}

export function getItemSpriteUrl(itemName) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${itemName}.png`;
}

// --- Format name for display ---
export function formatName(name) {
  return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// --- Get localized name ---
export function getLocalizedName(namesArray, lang) {
  if (!namesArray) return null;
  const langMap = { 'en': 'en', 'pt-br': 'pt' };
  const target = langMap[lang] || 'en';
  const found = namesArray.find(n => n.language.name === target);
  return found ? found.name : null;
}

// --- Preload essential data ---
export async function preloadEssentials() {
  // Load pokemon and move lists in parallel
  await Promise.all([
    getPokemonList(),
    getMoveList(),
    getItemList()
  ]);
}
