// ============================================
// PokéBuilder — Internationalization (i18n)
// ============================================

const translations = {
  en: {
    // Navigation
    'nav.teambuilder': 'Team Builder',
    'nav.damageCalc': 'Damage Calculator',
    'nav.ivEvCalc': 'IV/EV Calculator',

    // App
    'app.loading': 'Loading...',

    // Team Builder
    'tb.import': 'Import',
    'tb.export': 'Export',
    'tb.clearTeam': 'Clear Team',
    'tb.pokemon': 'Pokémon',
    'tb.searchPokemon': 'Search Pokémon...',
    'tb.ability': 'Ability',
    'tb.item': 'Item',
    'tb.searchItem': 'Search item...',
    'tb.nature': 'Nature',
    'tb.level': 'Level',
    'tb.moves': 'Moves',
    'tb.move1': 'Move 1',
    'tb.move2': 'Move 2',
    'tb.move3': 'Move 3',
    'tb.move4': 'Move 4',
    'tb.evs': 'EVs',
    'tb.ivs': 'IVs',
    'tb.finalStats': 'Final Stats',
    'tb.emptySlot': 'Empty Slot',
    'tb.total': 'Total',
    'tb.base': 'Base',
    'tb.ev': 'EV',
    'tb.iv': 'IV',
    'tb.stat': 'Stat',
    'tb.confirmClear': 'Are you sure you want to clear the entire team?',
    'tb.importTitle': 'Import Team',
    'tb.exportTitle': 'Export Team',
    'tb.importBtn': 'Import',
    'tb.pasteShowdown': 'Paste team in Showdown format...',
    'tb.copySuccess': 'Copied to clipboard!',
    'tb.importSuccess': 'Team imported successfully!',
    'tb.importError': 'Could not parse the team format.',
    'tb.none': '(none)',
    'tb.renameTeam': '✏️ Rename',
    'tb.deleteTeam': '🗑️ Delete Team',
    'tb.newTeamName': 'New team name:',
    'tb.renameTeamPrompt': 'Rename team:',
    'tb.cantDeleteLast': 'You must have at least one team.',
    'tb.confirmDeleteTeam': 'Delete team "{name}"? This cannot be undone.',

    // Login
    'login.subtitle': 'Enter your trainer name to access your teams',
    'login.placeholder': 'Trainer name...',
    'login.login': 'Log in',
    'login.savedProfiles': 'Saved profiles:',
    'login.confirmDelete': 'Delete profile "{name}" and all their teams?',
    'login.logout': 'Logout',

    // Damage Calculator
    'dc.attacker': 'Attacker',
    'dc.defender': 'Defender',
    'dc.move': 'Move',
    'dc.searchMove': 'Search move...',
    'dc.calculate': 'Calculate',
    'dc.selectBoth': 'Select Pokémon and a move to calculate damage',
    'dc.results': 'Results',
    'dc.damage': 'Damage',
    'dc.minDmg': 'Min',
    'dc.maxDmg': 'Max',
    'dc.rolls': 'Damage rolls',
    'dc.koChance': 'KO Chance',
    'dc.guaranteed': 'Guaranteed',
    'dc.possible': 'Possible',
    'dc.ohko': 'OHKO',
    'dc.2hko': '2HKO',
    'dc.3hko': '3HKO',
    'dc.4hko': '4HKO+',
    'dc.noko': 'Not a KO',
    'dc.critical': 'Critical Hit',
    'dc.stab': 'STAB',
    'dc.effectiveness': 'Effectiveness',
    'dc.superEffective': 'Super Effective',
    'dc.notVeryEffective': 'Not Very Effective',
    'dc.neutral': 'Neutral',
    'dc.immune': 'Immune',
    'dc.hpPercent': 'of HP',
    'dc.power': 'Power',
    'dc.category': 'Category',
    'dc.physical': 'Physical',
    'dc.special': 'Special',
    'dc.status': 'Status',
    'dc.atkStat': 'Atk stat used',
    'dc.defStat': 'Def stat used',

    // IV/EV Calculator
    'iec.title': 'IV / EV Calculator',
    'iec.findIvs': 'Find IVs',
    'iec.findEvs': 'Find EVs',
    'iec.findStats': 'Stat Builder',
    'iec.calculate': 'Calculate',
    'iec.baseStats': 'Base Stats',
    'iec.totalBase': 'Total Base',
    'iec.possibleIvs': 'Possible IVs',
    'iec.requiredEvs': 'Required EVs',
    'iec.finalStat': 'Final Stat',
    'iec.knownStat': 'Known Stat',
    'iec.desiredStat': 'Desired Stat',
    'iec.noResults': 'No valid combinations found.',

    // Stats
    'stat.hp': 'HP',
    'stat.atk': 'Atk',
    'stat.def': 'Def',
    'stat.spa': 'SpA',
    'stat.spd': 'SpD',
    'stat.spe': 'Spe',

    // Info Popup
    'info.name': 'Name',
    'info.effect': 'Effect',
    'info.note': 'Note',
    'info.notMainSeries': 'Not in main series games',
    'info.type': 'Type',
    'info.accuracy': 'Accuracy',
    'info.priority': 'Priority',
    'info.hits': 'Hits',
    'info.drain': 'Drain',
    'info.healing': 'Healing',
    'info.critRate': 'Crit Rate',
    'info.loadError': 'Failed to load information.',
    'info.category': 'Category',
    'info.cost': 'Cost',
    'info.flingPower': 'Fling Power',
    'info.flingEffect': 'Fling Effect',
  },

  'pt-br': {
    // Navigation
    'nav.teambuilder': 'Montar Time',
    'nav.damageCalc': 'Calculadora de Dano',
    'nav.ivEvCalc': 'Calculadora IV/EV',

    // App
    'app.loading': 'Carregando...',

    // Team Builder
    'tb.import': 'Importar',
    'tb.export': 'Exportar',
    'tb.clearTeam': 'Limpar Time',
    'tb.pokemon': 'Pokémon',
    'tb.searchPokemon': 'Buscar Pokémon...',
    'tb.ability': 'Habilidade',
    'tb.item': 'Item',
    'tb.searchItem': 'Buscar item...',
    'tb.nature': 'Natureza',
    'tb.level': 'Nível',
    'tb.moves': 'Golpes',
    'tb.move1': 'Golpe 1',
    'tb.move2': 'Golpe 2',
    'tb.move3': 'Golpe 3',
    'tb.move4': 'Golpe 4',
    'tb.evs': 'EVs',
    'tb.ivs': 'IVs',
    'tb.finalStats': 'Status Final',
    'tb.emptySlot': 'Slot Vazio',
    'tb.total': 'Total',
    'tb.base': 'Base',
    'tb.ev': 'EV',
    'tb.iv': 'IV',
    'tb.stat': 'Status',
    'tb.confirmClear': 'Tem certeza que deseja limpar o time inteiro?',
    'tb.importTitle': 'Importar Time',
    'tb.exportTitle': 'Exportar Time',
    'tb.importBtn': 'Importar',
    'tb.pasteShowdown': 'Cole o time no formato Showdown...',
    'tb.copySuccess': 'Copiado para a área de transferência!',
    'tb.importSuccess': 'Time importado com sucesso!',
    'tb.importError': 'Não foi possível interpretar o formato do time.',
    'tb.none': '(nenhum)',
    'tb.renameTeam': '✏️ Renomear',
    'tb.deleteTeam': '🗑️ Excluir Time',
    'tb.newTeamName': 'Nome do novo time:',
    'tb.renameTeamPrompt': 'Renomear time:',
    'tb.cantDeleteLast': 'Você precisa ter pelo menos um time.',
    'tb.confirmDeleteTeam': 'Excluir time "{name}"? Isso não pode ser desfeito.',

    // Login
    'login.subtitle': 'Digite seu nome de treinador para acessar seus times',
    'login.placeholder': 'Nome do treinador...',
    'login.login': 'Entrar',
    'login.savedProfiles': 'Perfis salvos:',
    'login.confirmDelete': 'Excluir perfil "{name}" e todos os seus times?',
    'login.logout': 'Sair',

    // Damage Calculator
    'dc.attacker': 'Atacante',
    'dc.defender': 'Defensor',
    'dc.move': 'Golpe',
    'dc.searchMove': 'Buscar golpe...',
    'dc.calculate': 'Calcular',
    'dc.selectBoth': 'Selecione Pokémon e um golpe para calcular o dano',
    'dc.results': 'Resultados',
    'dc.damage': 'Dano',
    'dc.minDmg': 'Mín',
    'dc.maxDmg': 'Máx',
    'dc.rolls': 'Rolos de dano',
    'dc.koChance': 'Chance de KO',
    'dc.guaranteed': 'Garantido',
    'dc.possible': 'Possível',
    'dc.ohko': 'OHKO',
    'dc.2hko': '2HKO',
    'dc.3hko': '3HKO',
    'dc.4hko': '4HKO+',
    'dc.noko': 'Não é KO',
    'dc.critical': 'Golpe Crítico',
    'dc.stab': 'STAB',
    'dc.effectiveness': 'Efetividade',
    'dc.superEffective': 'Super Efetivo',
    'dc.notVeryEffective': 'Pouco Efetivo',
    'dc.neutral': 'Neutro',
    'dc.immune': 'Imune',
    'dc.hpPercent': 'do HP',
    'dc.power': 'Poder',
    'dc.category': 'Categoria',
    'dc.physical': 'Físico',
    'dc.special': 'Especial',
    'dc.status': 'Status',
    'dc.atkStat': 'Status de Atq usado',
    'dc.defStat': 'Status de Def usado',

    // IV/EV Calculator
    'iec.title': 'Calculadora IV / EV',
    'iec.findIvs': 'Encontrar IVs',
    'iec.findEvs': 'Encontrar EVs',
    'iec.findStats': 'Montar Status',
    'iec.calculate': 'Calcular',
    'iec.baseStats': 'Status Base',
    'iec.totalBase': 'Total Base',
    'iec.possibleIvs': 'IVs Possíveis',
    'iec.requiredEvs': 'EVs Necessários',
    'iec.finalStat': 'Status Final',
    'iec.knownStat': 'Status Conhecido',
    'iec.desiredStat': 'Status Desejado',
    'iec.noResults': 'Nenhuma combinação válida encontrada.',

    // Stats
    'stat.hp': 'HP',
    'stat.atk': 'Atq',
    'stat.def': 'Def',
    'stat.spa': 'SpA',
    'stat.spd': 'SpD',
    'stat.spe': 'Vel',

    // Info Popup
    'info.name': 'Nome',
    'info.effect': 'Efeito',
    'info.note': 'Nota',
    'info.notMainSeries': 'Não presente nos jogos da série principal',
    'info.type': 'Tipo',
    'info.accuracy': 'Precisão',
    'info.priority': 'Prioridade',
    'info.hits': 'Acertos',
    'info.drain': 'Dreno',
    'info.healing': 'Cura',
    'info.critRate': 'Taxa Crítico',
    'info.loadError': 'Falha ao carregar informações.',
    'info.category': 'Categoria',
    'info.cost': 'Custo',
    'info.flingPower': 'Poder Fling',
    'info.flingEffect': 'Efeito Fling',
  }
};

let currentLang = localStorage.getItem('pokebuilder-lang') || 'en';

export function t(key) {
  return translations[currentLang]?.[key] || translations['en'][key] || key;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pokebuilder-lang', lang);
  applyTranslations();
}

export function toggleLang() {
  const newLang = currentLang === 'en' ? 'pt-br' : 'en';
  setLang(newLang);
  return newLang;
}

export function applyTranslations() {
  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    // Preserve inner HTML for elements with child elements (like ev-counter span)
    if (el.children.length > 0 && !el.getAttribute('data-i18n-full')) {
      // Only replace text nodes
      const firstText = el.childNodes[0];
      if (firstText && firstText.nodeType === Node.TEXT_NODE) {
        firstText.textContent = translated;
      }
    } else {
      el.textContent = translated;
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update language button label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = currentLang === 'en' ? 'EN' : 'PT';
  }
}
