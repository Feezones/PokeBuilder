// ============================================
// PokéBuilder — Utilities & Game Data
// ============================================

// --- Natures Data ---
// { name, +stat, -stat } (null means neutral)
export const NATURES = [
  { name: 'adamant',  plus: 'atk', minus: 'spa' },
  { name: 'bashful',  plus: null,  minus: null },
  { name: 'bold',     plus: 'def', minus: 'atk' },
  { name: 'brave',    plus: 'atk', minus: 'spe' },
  { name: 'calm',     plus: 'spd', minus: 'atk' },
  { name: 'careful',  plus: 'spd', minus: 'spa' },
  { name: 'docile',   plus: null,  minus: null },
  { name: 'gentle',   plus: 'spd', minus: 'def' },
  { name: 'hardy',    plus: null,  minus: null },
  { name: 'hasty',    plus: 'spe', minus: 'def' },
  { name: 'impish',   plus: 'def', minus: 'spa' },
  { name: 'jolly',    plus: 'spe', minus: 'spa' },
  { name: 'lax',      plus: 'def', minus: 'spd' },
  { name: 'lonely',   plus: 'atk', minus: 'def' },
  { name: 'mild',     plus: 'spa', minus: 'def' },
  { name: 'modest',   plus: 'spa', minus: 'atk' },
  { name: 'naive',    plus: 'spe', minus: 'spd' },
  { name: 'naughty',  plus: 'atk', minus: 'spd' },
  { name: 'quiet',    plus: 'spa', minus: 'spe' },
  { name: 'quirky',   plus: null,  minus: null },
  { name: 'rash',     plus: 'spa', minus: 'spd' },
  { name: 'relaxed',  plus: 'def', minus: 'spe' },
  { name: 'sassy',    plus: 'spd', minus: 'spe' },
  { name: 'serious',  plus: null,  minus: null },
  { name: 'timid',    plus: 'spe', minus: 'atk' },
];

export const STAT_KEYS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
export const STAT_NAMES = {
  hp: 'HP', atk: 'Atk', def: 'Def', spa: 'SpA', spd: 'SpD', spe: 'Spe'
};

// --- Type Effectiveness Chart ---
// typeChart[attacker][defender] = multiplier
const types = [
  'normal','fire','water','electric','grass','ice','fighting','poison',
  'ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'
];

const chart = [
//          nor  fir  wat  ele  gra  ice  fig  poi  gro  fly  psy  bug  roc  gho  dra  dar  ste  fai
/*normal*/  [1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  .5,   0,   1,   1,  .5,   1],
/*fire*/    [1,  .5,  .5,   1,   2,   2,   1,   1,   1,   1,   1,   2,  .5,   1,  .5,   1,   2,   1],
/*water*/   [1,   2,  .5,   1,  .5,   1,   1,   1,   2,   1,   1,   1,   2,   1,  .5,   1,   1,   1],
/*electric*/[1,   1,   2,  .5,  .5,   1,   1,   1,   0,   2,   1,   1,   1,   1,  .5,   1,   1,   1],
/*grass*/   [1,  .5,   2,   1,  .5,   1,   1,  .5,   2,  .5,   1,  .5,   2,   1,  .5,   1,  .5,   1],
/*ice*/     [1,  .5,  .5,   1,   2,  .5,   1,   1,   2,   2,   1,   1,   1,   1,   2,   1,  .5,   1],
/*fighting*/[2,   1,   1,   1,   1,   2,   1,  .5,   1,  .5,  .5,  .5,   2,   0,   1,   2,   2,  .5],
/*poison*/  [1,   1,   1,   1,   2,   1,   1,  .5,  .5,   1,   1,   1,  .5,  .5,   1,   1,   0,   2],
/*ground*/  [1,   2,   1,   2,  .5,   1,   1,   2,   1,   0,   1,  .5,   2,   1,   1,   1,   2,   1],
/*flying*/  [1,   1,   1,  .5,   2,   1,   2,   1,   1,   1,   1,   2,  .5,   1,   1,   1,  .5,   1],
/*psychic*/ [1,   1,   1,   1,   1,   1,   2,   2,   1,   1,  .5,   1,   1,   1,   1,   0,  .5,   1],
/*bug*/     [1,  .5,   1,   1,   2,   1,  .5,  .5,   1,  .5,   2,   1,   1,  .5,   1,   2,  .5,  .5],
/*rock*/    [1,   2,   1,   1,   1,   2,  .5,   1,  .5,   2,   1,   2,   1,   1,   1,   1,  .5,   1],
/*ghost*/   [0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   2,   1,   1,   2,   1,  .5,   1,   1],
/*dragon*/  [1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   2,   1,  .5,   0],
/*dark*/    [1,   1,   1,   1,   1,   1,  .5,   1,   1,   1,   2,   1,   1,   2,   1,  .5,  .5,  .5],
/*steel*/   [1,  .5,  .5,  .5,   1,   2,   1,   1,   1,   1,   1,   1,   2,   1,   1,   1,  .5,   2],
/*fairy*/   [1,  .5,   1,   1,   1,   1,   2,  .5,   1,   1,   1,   1,   1,   1,   2,   2,  .5,   1],
];

export const TYPE_CHART = {};
types.forEach((atkType, i) => {
  TYPE_CHART[atkType] = {};
  types.forEach((defType, j) => {
    TYPE_CHART[atkType][defType] = chart[i][j];
  });
});

export const TYPE_LIST = types;

export const TYPE_COLORS = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
  grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
  ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
  rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', dark: '#705848',
  steel: '#B8B8D0', fairy: '#EE99AC'
};

// --- Stat Calculations (Gen V+ formulas) ---

export function calcHP(base, iv, ev, level) {
  if (base === 1) return 1; // Shedinja
  return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
}

export function calcStat(base, iv, ev, level, natureMod) {
  return Math.floor((Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5) * natureMod);
}

export function getNatureMod(natureName, statKey) {
  const nature = NATURES.find(n => n.name === natureName);
  if (!nature || !nature.plus) return 1.0;
  if (nature.plus === statKey) return 1.1;
  if (nature.minus === statKey) return 0.9;
  return 1.0;
}

export function calcAllStats(baseStats, ivs, evs, level, natureName) {
  const stats = {};
  stats.hp = calcHP(baseStats.hp, ivs.hp, evs.hp, level);
  for (const key of ['atk', 'def', 'spa', 'spd', 'spe']) {
    const mod = getNatureMod(natureName, key);
    stats[key] = calcStat(baseStats[key], ivs[key], evs[key], level, mod);
  }
  return stats;
}

// --- Damage Calculation (Gen V+ simplified) ---

export function calcDamage(attacker, defender, move, options = {}) {
  const { critical = false } = options;
  const level = attacker.level || 50;

  const power = move.power || 0;
  if (power === 0) return { min: 0, max: 0, rolls: [], hpPercent: { min: 0, max: 0 } };

  // Determine physical or special
  const isPhysical = move.category === 'physical';
  const atkStat = isPhysical ? attacker.stats.atk : attacker.stats.spa;
  const defStat = isPhysical ? defender.stats.def : defender.stats.spd;

  // Base damage
  let baseDamage = Math.floor(
    Math.floor(
      (Math.floor((2 * level) / 5 + 2) * power * atkStat) / defStat
    ) / 50
  ) + 2;

  // Critical hit
  if (critical) baseDamage = Math.floor(baseDamage * 1.5);

  // STAB
  let stab = 1;
  if (attacker.types && attacker.types.includes(move.type)) {
    stab = attacker.ability === 'adaptability' ? 2 : 1.5;
  }

  // Type effectiveness
  let typeEff = 1;
  if (defender.types) {
    for (const defType of defender.types) {
      typeEff *= (TYPE_CHART[move.type]?.[defType] ?? 1);
    }
  }

  // Item modifiers
  let itemMod = 1;
  if (attacker.item === 'life-orb') itemMod = 1.3;
  else if (attacker.item === 'choice-band' && isPhysical) itemMod = 1.5;
  else if (attacker.item === 'choice-specs' && !isPhysical) itemMod = 1.5;
  else if (attacker.item === 'expert-belt' && typeEff > 1) itemMod = 1.2;

  // Ability modifiers for attacker
  let abilityAtkMod = 1;
  if (attacker.ability === 'huge-power' || attacker.ability === 'pure-power') {
    if (isPhysical) abilityAtkMod = 2;
  }

  // Ability modifiers for defender
  let abilityDefMod = 1;
  if (defender.ability === 'multiscale') abilityDefMod = 0.5;
  if ((defender.ability === 'filter' || defender.ability === 'solid-rock') && typeEff > 1) {
    abilityDefMod = 0.75;
  }
  if (defender.ability === 'thick-fat' && (move.type === 'fire' || move.type === 'ice')) {
    abilityDefMod = 0.5;
  }
  if (defender.ability === 'levitate' && move.type === 'ground') {
    typeEff = 0;
  }

  // Calculate 16 damage rolls (random factor 85-100)
  const rolls = [];
  for (let r = 85; r <= 100; r++) {
    let dmg = baseDamage;
    dmg = Math.floor(dmg * r / 100);
    dmg = Math.floor(dmg * stab);
    dmg = Math.floor(dmg * typeEff);
    dmg = Math.floor(dmg * itemMod);
    dmg = Math.floor(dmg * abilityAtkMod);
    dmg = Math.floor(dmg * abilityDefMod);
    dmg = Math.max(dmg, typeEff > 0 ? 1 : 0);
    rolls.push(dmg);
  }

  const min = Math.min(...rolls);
  const max = Math.max(...rolls);
  const defHP = defender.stats.hp;
  const hpPercent = {
    min: defHP > 0 ? (min / defHP * 100) : 0,
    max: defHP > 0 ? (max / defHP * 100) : 0
  };

  // KO estimation
  let koText = '';
  let koClass = '';
  if (typeEff === 0) {
    koText = 'immune';
    koClass = 'ko-unlikely';
  } else if (hpPercent.min >= 100) {
    koText = 'ohko-guaranteed';
    koClass = 'ko-guaranteed';
  } else if (hpPercent.max >= 100) {
    koText = 'ohko-possible';
    koClass = 'ko-possible';
  } else if (hpPercent.min >= 50) {
    koText = '2hko';
    koClass = 'ko-guaranteed';
  } else if (hpPercent.max >= 50) {
    koText = '2hko-possible';
    koClass = 'ko-possible';
  } else if (hpPercent.min >= 33.4) {
    koText = '3hko';
    koClass = 'ko-possible';
  } else {
    koText = '4hko+';
    koClass = 'ko-unlikely';
  }

  return {
    min, max, rolls, hpPercent,
    stab: stab > 1,
    typeEff,
    koText, koClass,
    isPhysical
  };
}

// --- IV Finder ---
// Given base stat, level, nature, EV, and actual stat value → find possible IVs

export function findPossibleIVs(baseStat, level, natureMod, ev, actualStat, isHP) {
  const possible = [];
  for (let iv = 0; iv <= 31; iv++) {
    const calc = isHP
      ? calcHP(baseStat, iv, ev, level)
      : calcStat(baseStat, iv, ev, level, natureMod);
    if (calc === actualStat) possible.push(iv);
  }
  return possible;
}

// --- EV Finder ---
// Given base stat, level, nature, IV, and desired stat → find required EV

export function findRequiredEV(baseStat, level, natureMod, iv, desiredStat, isHP) {
  for (let ev = 0; ev <= 252; ev += 4) {
    const calc = isHP
      ? calcHP(baseStat, iv, ev, level)
      : calcStat(baseStat, iv, ev, level, natureMod);
    if (calc >= desiredStat) return ev;
  }
  return -1; // impossible
}

// --- Capitalize / Format helpers ---
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPokemonName(name) {
  return name.split('-').map(capitalize).join(' ');
}

// --- Parse base stats from API response ---
export function parseBaseStats(pokemonData) {
  const stats = {};
  for (const s of pokemonData.stats) {
    const name = s.stat.name;
    const map = {
      'hp': 'hp', 'attack': 'atk', 'defense': 'def',
      'special-attack': 'spa', 'special-defense': 'spd', 'speed': 'spe'
    };
    if (map[name]) stats[map[name]] = s.base_stat;
  }
  return stats;
}

// --- Create empty Pokémon slot ---
export function createEmptySlot() {
  return {
    id: null,
    name: '',
    species: '',
    types: [],
    ability: '',
    item: '',
    nature: 'adamant',
    level: 50,
    moves: ['', '', '', ''],
    evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    baseStats: null,
    sprite: ''
  };
}

// --- Export team to Showdown format ---
export function teamToShowdown(team) {
  const lines = [];
  for (const mon of team) {
    if (!mon.name) continue;
    let line = formatPokemonName(mon.name);
    if (mon.item) line += ` @ ${formatPokemonName(mon.item)}`;
    lines.push(line);

    if (mon.ability) lines.push(`Ability: ${formatPokemonName(mon.ability)}`);
    lines.push(`Level: ${mon.level}`);

    const nature = NATURES.find(n => n.name === mon.nature);
    if (nature) lines.push(`${capitalize(nature.name)} Nature`);

    // EVs
    const evParts = [];
    for (const key of STAT_KEYS) {
      if (mon.evs[key] > 0) evParts.push(`${mon.evs[key]} ${STAT_NAMES[key]}`);
    }
    if (evParts.length) lines.push(`EVs: ${evParts.join(' / ')}`);

    // IVs (only non-31)
    const ivParts = [];
    for (const key of STAT_KEYS) {
      if (mon.ivs[key] < 31) ivParts.push(`${mon.ivs[key]} ${STAT_NAMES[key]}`);
    }
    if (ivParts.length) lines.push(`IVs: ${ivParts.join(' / ')}`);

    // Moves
    for (const move of mon.moves) {
      if (move) lines.push(`- ${formatPokemonName(move)}`);
    }

    lines.push('');
  }
  return lines.join('\n');
}

// --- Parse Showdown format to team ---
export function showdownToTeam(text) {
  const team = [];
  const blocks = text.trim().split(/\n\s*\n/);

  for (const block of blocks) {
    if (!block.trim()) continue;
    const mon = createEmptySlot();
    const lines = block.trim().split('\n');

    // First line: Name @ Item
    const firstLine = lines[0];
    const atMatch = firstLine.match(/^(.+?)\s*@\s*(.+)$/);
    if (atMatch) {
      mon.name = atMatch[1].trim().toLowerCase().replace(/\s+/g, '-');
      mon.item = atMatch[2].trim().toLowerCase().replace(/\s+/g, '-');
    } else {
      mon.name = firstLine.trim().toLowerCase().replace(/\s+/g, '-');
    }

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('Ability:')) {
        mon.ability = line.replace('Ability:', '').trim().toLowerCase().replace(/\s+/g, '-');
      } else if (line.startsWith('Level:')) {
        mon.level = parseInt(line.replace('Level:', '').trim()) || 50;
      } else if (line.endsWith('Nature')) {
        const natureName = line.replace('Nature', '').trim().toLowerCase();
        if (NATURES.find(n => n.name === natureName)) mon.nature = natureName;
      } else if (line.startsWith('EVs:')) {
        const evStr = line.replace('EVs:', '').trim();
        const evParts = evStr.split('/');
        for (const part of evParts) {
          const m = part.trim().match(/(\d+)\s+(\w+)/);
          if (m) {
            const val = parseInt(m[1]);
            const statName = m[2];
            const keyMap = { HP: 'hp', Atk: 'atk', Def: 'def', SpA: 'spa', SpD: 'spd', Spe: 'spe' };
            if (keyMap[statName]) mon.evs[keyMap[statName]] = val;
          }
        }
      } else if (line.startsWith('IVs:')) {
        const ivStr = line.replace('IVs:', '').trim();
        const ivParts = ivStr.split('/');
        for (const part of ivParts) {
          const m = part.trim().match(/(\d+)\s+(\w+)/);
          if (m) {
            const val = parseInt(m[1]);
            const statName = m[2];
            const keyMap = { HP: 'hp', Atk: 'atk', Def: 'def', SpA: 'spa', SpD: 'spd', Spe: 'spe' };
            if (keyMap[statName]) mon.ivs[keyMap[statName]] = val;
          }
        }
      } else if (line.startsWith('-')) {
        const moveName = line.replace('-', '').trim().toLowerCase().replace(/\s+/g, '-');
        const emptyIdx = mon.moves.indexOf('');
        if (emptyIdx !== -1) mon.moves[emptyIdx] = moveName;
      }
    }

    if (mon.name) team.push(mon);
  }

  return team.slice(0, 6);
}

// --- Debounce helper ---
export function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// --- Searchable Select Helper ---
export function createSearchableSelect(container, items, onSelect, opts = {}) {
  const input = container.querySelector('.search-input');
  const dropdown = container.querySelector('.search-dropdown');
  let highlighted = -1;
  let filteredItems = [];

  function render(list) {
    filteredItems = list.slice(0, 50); // Limit for performance
    dropdown.innerHTML = '';
    highlighted = -1;

    for (let i = 0; i < filteredItems.length; i++) {
      const item = filteredItems[i];
      const opt = document.createElement('div');
      opt.className = 'search-option';
      opt.dataset.index = i;

      if (opts.renderOption) {
        opt.innerHTML = opts.renderOption(item);
      } else {
        opt.textContent = item.label || item.name;
      }

      opt.addEventListener('mousedown', (e) => {
        e.preventDefault();
        selectItem(item);
      });
      dropdown.appendChild(opt);
    }
  }

  function selectItem(item) {
    input.value = item.label || formatPokemonName(item.name);
    input.dataset.value = item.value || item.name;
    container.classList.remove('open');
    onSelect(item);
  }

  function formatPokemonName(name) {
    return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  const debouncedFilter = debounce((query) => {
    const q = query.toLowerCase().replace(/\s+/g, '-');
    const filtered = items.filter(item => {
      const name = (item.name || '').toLowerCase();
      const label = (item.label || '').toLowerCase();
      return name.includes(q) || label.includes(q);
    });
    render(filtered);
  }, 150);

  input.addEventListener('focus', () => {
    container.classList.add('open');
    const q = input.value.toLowerCase().replace(/\s+/g, '-');
    if (q) {
      debouncedFilter(q);
    } else {
      render(items);
    }
  });

  input.addEventListener('input', () => {
    container.classList.add('open');
    debouncedFilter(input.value);
  });

  input.addEventListener('blur', () => {
    setTimeout(() => container.classList.remove('open'), 200);
  });

  input.addEventListener('keydown', (e) => {
    const options = dropdown.querySelectorAll('.search-option');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlighted = Math.min(highlighted + 1, options.length - 1);
      options.forEach((o, i) => o.classList.toggle('highlighted', i === highlighted));
      options[highlighted]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlighted = Math.max(highlighted - 1, 0);
      options.forEach((o, i) => o.classList.toggle('highlighted', i === highlighted));
      options[highlighted]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlighted >= 0 && filteredItems[highlighted]) {
        selectItem(filteredItems[highlighted]);
      }
    } else if (e.key === 'Escape') {
      container.classList.remove('open');
      input.blur();
    }
  });

  // Allow external clear
  return {
    clear() {
      input.value = '';
      input.dataset.value = '';
    },
    setValue(name, label) {
      input.value = label || formatPokemonName(name);
      input.dataset.value = name;
    },
    updateItems(newItems) {
      items = newItems;
    }
  };
}

// --- Draw Radar Chart on Canvas ---
export function drawRadarChart(canvas, stats, baseStats, maxStat = 255) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(cx, cy) - 40;

  ctx.clearRect(0, 0, w, h);

  const labels = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
  const statVals = [stats.hp, stats.atk, stats.def, stats.spa, stats.spd, stats.spe];
  const baseVals = baseStats
    ? [baseStats.hp, baseStats.atk, baseStats.def, baseStats.spa, baseStats.spd, baseStats.spe]
    : null;
  const statColors = ['#ff5959', '#f5ac78', '#fae078', '#9db7f5', '#a7db8d', '#fa92b2'];
  const n = 6;

  // Get theme
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = isDark ? '#a0a0c0' : '#555770';

  // Draw grid
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + (r * ring / 5) * Math.cos(angle);
      const y = cy + (r * ring / 5) * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx.strokeStyle = gridColor;
    ctx.stroke();
  }

  // Draw base stats polygon (if provided)
  if (baseVals) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
      const val = Math.min(baseVals[idx] / maxStat, 1);
      const x = cx + r * val * Math.cos(angle);
      const y = cy + r * val * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.fillStyle = isDark ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(99,102,241,0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Draw stat polygon
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
    const val = Math.min(statVals[idx] / (maxStat * 2.5), 1); // Scale for final stats
    const x = cx + r * val * Math.cos(angle);
    const y = cy + r * val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.fillStyle = isDark ? 'rgba(129,140,248,0.3)' : 'rgba(99,102,241,0.2)';
  ctx.fill();
  ctx.strokeStyle = '#818cf8';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw stat dots and labels
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;

    // Dot
    const val = Math.min(statVals[i] / (maxStat * 2.5), 1);
    const dx = cx + r * val * Math.cos(angle);
    const dy = cy + r * val * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(dx, dy, 4, 0, Math.PI * 2);
    ctx.fillStyle = statColors[i];
    ctx.fill();

    // Label
    const lx = cx + (r + 25) * Math.cos(angle);
    const ly = cy + (r + 25) * Math.sin(angle);
    ctx.font = 'bold 12px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${labels[i]}`, lx, ly - 8);
    ctx.font = '11px Segoe UI, system-ui, sans-serif';
    ctx.fillStyle = statColors[i];
    ctx.fillText(`${statVals[i]}`, lx, ly + 8);
  }
}
