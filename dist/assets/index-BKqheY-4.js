(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const gn="https://pokeapi.co/api/v2",Tr=new Map;async function yn(n){if(Tr.has(n))return Tr.get(n);const e=sessionStorage.getItem(`poke:${n}`);if(e){const r=JSON.parse(e);return Tr.set(n,r),r}const t=await fetch(n);if(!t.ok)throw new Error(`API error: ${t.status} for ${n}`);const s=await t.json();Tr.set(n,s);try{sessionStorage.setItem(`poke:${n}`,JSON.stringify(s))}catch{sessionStorage.clear()}return s}let Ir=null;async function fi(){return Ir||(Ir=(await yn(`${gn}/pokemon?limit=1025`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),Ir)}async function _n(n){return yn(`${gn}/pokemon/${n}`)}async function zs(n){return yn(`${gn}/move/${n}`)}let wr=null;async function pi(){return wr||(wr=(await yn(`${gn}/move?limit=1000`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),wr)}let Ar=null;async function ca(){return Ar||(Ar=(await yn(`${gn}/item?limit=2000`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),Ar)}async function bp(n){return yn(`${gn}/item/${n}`)}async function Tp(n){return yn(`${gn}/ability/${n}`)}function ze(n){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`}function Ip(n){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${n}.png`}function oe(n){return n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}async function wp(){await Promise.all([fi(),pi(),ca()])}const il={en:{"nav.teambuilder":"Team Builder","nav.damageCalc":"Damage Calculator","nav.ivEvCalc":"IV/EV Calculator","nav.battle":"Battle","app.loading":"Loading...","tb.import":"Import","tb.export":"Export","tb.clearTeam":"Clear Team","tb.pokemon":"Pokémon","tb.searchPokemon":"Search Pokémon...","tb.ability":"Ability","tb.item":"Item","tb.searchItem":"Search item...","tb.nature":"Nature","tb.level":"Level","tb.moves":"Moves","tb.move1":"Move 1","tb.move2":"Move 2","tb.move3":"Move 3","tb.move4":"Move 4","tb.evs":"EVs","tb.ivs":"IVs","tb.finalStats":"Final Stats","tb.emptySlot":"Empty Slot","tb.total":"Total","tb.base":"Base","tb.ev":"EV","tb.iv":"IV","tb.stat":"Stat","tb.confirmClear":"Are you sure you want to clear the entire team?","tb.importTitle":"Import Team","tb.exportTitle":"Export Team","tb.importBtn":"Import","tb.pasteShowdown":"Paste team in Showdown format...","tb.copySuccess":"Copied to clipboard!","tb.importSuccess":"Team imported successfully!","tb.importError":"Could not parse the team format.","tb.none":"(none)","tb.renameTeam":"✏️ Rename","tb.deleteTeam":"🗑️ Delete Team","tb.newTeamName":"New team name:","tb.renameTeamPrompt":"Rename team:","tb.cantDeleteLast":"You must have at least one team.","tb.confirmDeleteTeam":'Delete team "{name}"? This cannot be undone.',"login.subtitle":"Sign in to access your teams","login.emailPlaceholder":"Email","login.passwordPlaceholder":"Password","login.namePlaceholder":"Trainer name (optional)","login.login":"Log in","login.register":"Create account","login.noAccount":"Don't have an account?","login.registerLink":"Sign up","login.hasAccount":"Already have an account?","login.loginLink":"Log in","login.logout":"Logout","login.fillFields":"Please fill in email and password.","login.weakPassword":"Password must be at least 6 characters.","login.errEmailInUse":"This email is already registered.","login.errInvalidEmail":"Invalid email address.","login.errUserNotFound":"Account not found.","login.errWrongPassword":"Incorrect password.","login.errInvalidCredential":"Invalid email or password.","login.errTooMany":"Too many attempts. Try again later.","login.errGeneric":"An error occurred. Please try again.","dc.attacker":"Attacker","dc.defender":"Defender","dc.move":"Move","dc.searchMove":"Search move...","dc.calculate":"Calculate","dc.selectBoth":"Select Pokémon and a move to calculate damage","dc.results":"Results","dc.damage":"Damage","dc.minDmg":"Min","dc.maxDmg":"Max","dc.rolls":"Damage rolls","dc.koChance":"KO Chance","dc.guaranteed":"Guaranteed","dc.possible":"Possible","dc.ohko":"OHKO","dc.2hko":"2HKO","dc.3hko":"3HKO","dc.4hko":"4HKO+","dc.noko":"Not a KO","dc.critical":"Critical Hit","dc.stab":"STAB","dc.effectiveness":"Effectiveness","dc.superEffective":"Super Effective","dc.notVeryEffective":"Not Very Effective","dc.neutral":"Neutral","dc.immune":"Immune","dc.hpPercent":"of HP","dc.power":"Power","dc.category":"Category","dc.physical":"Physical","dc.special":"Special","dc.status":"Status","dc.atkStat":"Atk stat used","dc.defStat":"Def stat used","iec.title":"IV / EV Calculator","iec.findIvs":"Find IVs","iec.findEvs":"Find EVs","iec.findStats":"Stat Builder","iec.calculate":"Calculate","iec.baseStats":"Base Stats","iec.totalBase":"Total Base","iec.possibleIvs":"Possible IVs","iec.requiredEvs":"Required EVs","iec.finalStat":"Final Stat","iec.knownStat":"Known Stat","iec.desiredStat":"Desired Stat","iec.noResults":"No valid combinations found.","stat.hp":"HP","stat.atk":"Atk","stat.def":"Def","stat.spa":"SpA","stat.spd":"SpD","stat.spe":"Spe","info.name":"Name","info.effect":"Effect","info.note":"Note","info.notMainSeries":"Not in main series games","info.type":"Type","info.accuracy":"Accuracy","info.priority":"Priority","info.hits":"Hits","info.drain":"Drain","info.healing":"Healing","info.critRate":"Crit Rate","info.loadError":"Failed to load information.","info.category":"Category","info.cost":"Cost","info.flingPower":"Fling Power","info.flingEffect":"Fling Effect","battle.title":"Battle Arena","battle.subtitle":"Choose PVP or PVE to start a Doubles battle!","battle.pve":"PVE — vs AI","battle.pveDesc":"Battle against a competitive AI-generated team.","battle.pvp":"PVP — vs Trainer","battle.pvpDesc":"Search for a trainer and challenge their team!","battle.difficulty":"Difficulty","battle.easy":"Easy","battle.normal":"Normal","battle.hard":"Hard","battle.startPVE":"Start PVE Battle","battle.searchTrainer":"Search trainer name...","battle.search":"Search","battle.challenge":"Challenge","battle.teams":"teams","battle.noTrainerFound":"No trainer found with that name.","battle.searchError":"Error searching for trainers.","battle.generating":"Generating opponent team...","battle.loading":"Loading opponent...","battle.noTeamFound":"This trainer has no valid team.","battle.back":"Back","battle.teamPreview":"Team Preview","battle.yourTeam":"Your Team","battle.select4":"Select 2-4 Pokémon","battle.selected":"Selected","battle.startBattle":"Start Battle!","battle.needTeam":"You need at least 2 Pokémon in your team to battle!","battle.preparing":"Preparing battle...","battle.initError":"Failed to initialize the battle.","battle.forfeit":"Forfeit","battle.confirmForfeit":"Are you sure you want to forfeit this battle?","battle.turn":"Turn","battle.chooseMoves":"Choose your moves","battle.selectTarget":"Select target:","battle.executeTurn":"Execute Turn","battle.chooseReplacement":"Choose a replacement Pokémon","battle.log":"Battle Log","battle.victory":"Victory!","battle.defeat":"Defeat!","battle.victoryMsg":"You won the battle! Congratulations, trainer!","battle.defeatMsg":"You lost the battle. Try again with a different strategy!","battle.backToMenu":"Back to Battle Menu","battle.you":"You","battle.opponent":"Opponent"},"pt-br":{"nav.teambuilder":"Montar Time","nav.damageCalc":"Calculadora de Dano","nav.ivEvCalc":"Calculadora IV/EV","nav.battle":"Batalha","app.loading":"Carregando...","tb.import":"Importar","tb.export":"Exportar","tb.clearTeam":"Limpar Time","tb.pokemon":"Pokémon","tb.searchPokemon":"Buscar Pokémon...","tb.ability":"Habilidade","tb.item":"Item","tb.searchItem":"Buscar item...","tb.nature":"Natureza","tb.level":"Nível","tb.moves":"Golpes","tb.move1":"Golpe 1","tb.move2":"Golpe 2","tb.move3":"Golpe 3","tb.move4":"Golpe 4","tb.evs":"EVs","tb.ivs":"IVs","tb.finalStats":"Status Final","tb.emptySlot":"Slot Vazio","tb.total":"Total","tb.base":"Base","tb.ev":"EV","tb.iv":"IV","tb.stat":"Status","tb.confirmClear":"Tem certeza que deseja limpar o time inteiro?","tb.importTitle":"Importar Time","tb.exportTitle":"Exportar Time","tb.importBtn":"Importar","tb.pasteShowdown":"Cole o time no formato Showdown...","tb.copySuccess":"Copiado para a área de transferência!","tb.importSuccess":"Time importado com sucesso!","tb.importError":"Não foi possível interpretar o formato do time.","tb.none":"(nenhum)","tb.renameTeam":"✏️ Renomear","tb.deleteTeam":"🗑️ Excluir Time","tb.newTeamName":"Nome do novo time:","tb.renameTeamPrompt":"Renomear time:","tb.cantDeleteLast":"Você precisa ter pelo menos um time.","tb.confirmDeleteTeam":'Excluir time "{name}"? Isso não pode ser desfeito.',"login.subtitle":"Entre para acessar seus times","login.emailPlaceholder":"Email","login.passwordPlaceholder":"Senha","login.namePlaceholder":"Nome do treinador (opcional)","login.login":"Entrar","login.register":"Criar conta","login.noAccount":"Não tem uma conta?","login.registerLink":"Cadastre-se","login.hasAccount":"Já tem uma conta?","login.loginLink":"Entrar","login.logout":"Sair","login.fillFields":"Preencha email e senha.","login.weakPassword":"A senha deve ter pelo menos 6 caracteres.","login.errEmailInUse":"Este email já está cadastrado.","login.errInvalidEmail":"Email inválido.","login.errUserNotFound":"Conta não encontrada.","login.errWrongPassword":"Senha incorreta.","login.errInvalidCredential":"Email ou senha inválidos.","login.errTooMany":"Muitas tentativas. Tente novamente mais tarde.","login.errGeneric":"Ocorreu um erro. Tente novamente.","dc.attacker":"Atacante","dc.defender":"Defensor","dc.move":"Golpe","dc.searchMove":"Buscar golpe...","dc.calculate":"Calcular","dc.selectBoth":"Selecione Pokémon e um golpe para calcular o dano","dc.results":"Resultados","dc.damage":"Dano","dc.minDmg":"Mín","dc.maxDmg":"Máx","dc.rolls":"Rolos de dano","dc.koChance":"Chance de KO","dc.guaranteed":"Garantido","dc.possible":"Possível","dc.ohko":"OHKO","dc.2hko":"2HKO","dc.3hko":"3HKO","dc.4hko":"4HKO+","dc.noko":"Não é KO","dc.critical":"Golpe Crítico","dc.stab":"STAB","dc.effectiveness":"Efetividade","dc.superEffective":"Super Efetivo","dc.notVeryEffective":"Pouco Efetivo","dc.neutral":"Neutro","dc.immune":"Imune","dc.hpPercent":"do HP","dc.power":"Poder","dc.category":"Categoria","dc.physical":"Físico","dc.special":"Especial","dc.status":"Status","dc.atkStat":"Status de Atq usado","dc.defStat":"Status de Def usado","iec.title":"Calculadora IV / EV","iec.findIvs":"Encontrar IVs","iec.findEvs":"Encontrar EVs","iec.findStats":"Montar Status","iec.calculate":"Calcular","iec.baseStats":"Status Base","iec.totalBase":"Total Base","iec.possibleIvs":"IVs Possíveis","iec.requiredEvs":"EVs Necessários","iec.finalStat":"Status Final","iec.knownStat":"Status Conhecido","iec.desiredStat":"Status Desejado","iec.noResults":"Nenhuma combinação válida encontrada.","stat.hp":"HP","stat.atk":"Atq","stat.def":"Def","stat.spa":"SpA","stat.spd":"SpD","stat.spe":"Vel","info.name":"Nome","info.effect":"Efeito","info.note":"Nota","info.notMainSeries":"Não presente nos jogos da série principal","info.type":"Tipo","info.accuracy":"Precisão","info.priority":"Prioridade","info.hits":"Acertos","info.drain":"Dreno","info.healing":"Cura","info.critRate":"Taxa Crítico","info.loadError":"Falha ao carregar informações.","info.category":"Categoria","info.cost":"Custo","info.flingPower":"Poder Fling","info.flingEffect":"Efeito Fling","battle.title":"Arena de Batalha","battle.subtitle":"Escolha PVP ou PVE para iniciar uma batalha Doubles!","battle.pve":"PVE — vs IA","battle.pveDesc":"Batalhe contra um time competitivo gerado por IA.","battle.pvp":"PVP — vs Treinador","battle.pvpDesc":"Busque um treinador e desafie seu time!","battle.difficulty":"Dificuldade","battle.easy":"Fácil","battle.normal":"Normal","battle.hard":"Difícil","battle.startPVE":"Iniciar Batalha PVE","battle.searchTrainer":"Buscar nome do treinador...","battle.search":"Buscar","battle.challenge":"Desafiar","battle.teams":"times","battle.noTrainerFound":"Nenhum treinador encontrado com esse nome.","battle.searchError":"Erro ao buscar treinadores.","battle.generating":"Gerando time adversário...","battle.loading":"Carregando adversário...","battle.noTeamFound":"Este treinador não tem um time válido.","battle.back":"Voltar","battle.teamPreview":"Prévia dos Times","battle.yourTeam":"Seu Time","battle.select4":"Selecione 2-4 Pokémon","battle.selected":"Selecionados","battle.startBattle":"Iniciar Batalha!","battle.needTeam":"Você precisa de pelo menos 2 Pokémon no seu time para batalhar!","battle.preparing":"Preparando batalha...","battle.initError":"Falha ao iniciar a batalha.","battle.forfeit":"Desistir","battle.confirmForfeit":"Tem certeza que deseja desistir desta batalha?","battle.turn":"Turno","battle.chooseMoves":"Escolha seus golpes","battle.selectTarget":"Selecione o alvo:","battle.executeTurn":"Executar Turno","battle.chooseReplacement":"Escolha um Pokémon substituto","battle.log":"Log de Batalha","battle.victory":"Vitória!","battle.defeat":"Derrota!","battle.victoryMsg":"Você venceu a batalha! Parabéns, treinador!","battle.defeatMsg":"Você perdeu a batalha. Tente novamente com outra estratégia!","battle.backToMenu":"Voltar ao Menu de Batalha","battle.you":"Você","battle.opponent":"Oponente"}};let Ws=localStorage.getItem("pokebuilder-lang")||"en";function P(n){var e;return((e=il[Ws])==null?void 0:e[n])||il.en[n]||n}function Ap(){return Ws}function Ku(n){Ws=n,localStorage.setItem("pokebuilder-lang",n),Qu()}function Sp(){const n=Ws==="en"?"pt-br":"en";return Ku(n),n}function Qu(){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),s=P(t);if(e.children.length>0&&!e.getAttribute("data-i18n-full")){const r=e.childNodes[0];r&&r.nodeType===Node.TEXT_NODE&&(r.textContent=s)}else e.textContent=s}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.getAttribute("data-i18n-placeholder");e.placeholder=P(t)});const n=document.getElementById("lang-label");n&&(n.textContent=Ws==="en"?"EN":"PT")}const vn=[{name:"adamant",plus:"atk",minus:"spa"},{name:"bashful",plus:null,minus:null},{name:"bold",plus:"def",minus:"atk"},{name:"brave",plus:"atk",minus:"spe"},{name:"calm",plus:"spd",minus:"atk"},{name:"careful",plus:"spd",minus:"spa"},{name:"docile",plus:null,minus:null},{name:"gentle",plus:"spd",minus:"def"},{name:"hardy",plus:null,minus:null},{name:"hasty",plus:"spe",minus:"def"},{name:"impish",plus:"def",minus:"spa"},{name:"jolly",plus:"spe",minus:"spa"},{name:"lax",plus:"def",minus:"spd"},{name:"lonely",plus:"atk",minus:"def"},{name:"mild",plus:"spa",minus:"def"},{name:"modest",plus:"spa",minus:"atk"},{name:"naive",plus:"spe",minus:"spd"},{name:"naughty",plus:"atk",minus:"spd"},{name:"quiet",plus:"spa",minus:"spe"},{name:"quirky",plus:null,minus:null},{name:"rash",plus:"spa",minus:"spd"},{name:"relaxed",plus:"def",minus:"spe"},{name:"sassy",plus:"spd",minus:"spe"},{name:"serious",plus:null,minus:null},{name:"timid",plus:"spe",minus:"atk"}],be=["hp","atk","def","spa","spd","spe"],ye={hp:"HP",atk:"Atk",def:"Def",spa:"SpA",spd:"SpD",spe:"Spe"},ol=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"],Pp=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,.5,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2],[1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1]],Hr={};ol.forEach((n,e)=>{Hr[n]={},ol.forEach((t,s)=>{Hr[n][t]=Pp[e][s]})});const Gt={normal:"#A8A878",fire:"#F08030",water:"#6890F0",electric:"#F8D030",grass:"#78C850",ice:"#98D8D8",fighting:"#C03028",poison:"#A040A0",ground:"#E0C068",flying:"#A890F0",psychic:"#F85888",bug:"#A8B820",rock:"#B8A038",ghost:"#705898",dragon:"#7038F8",dark:"#705848",steel:"#B8B8D0",fairy:"#EE99AC"};function la(n,e,t,s){return n===1?1:Math.floor((2*n+e+Math.floor(t/4))*s/100)+s+10}function ua(n,e,t,s,r){return Math.floor((Math.floor((2*n+e+Math.floor(t/4))*s/100)+5)*r)}function ko(n,e){const t=vn.find(s=>s.name===n);return!t||!t.plus?1:t.plus===e?1.1:t.minus===e?.9:1}function Hn(n,e,t,s,r){const i={};i.hp=la(n.hp,e.hp,t.hp,s);for(const a of["atk","def","spa","spd","spe"]){const c=ko(r,a);i[a]=ua(n[a],e[a],t[a],s,c)}return i}function al(n,e,t,s={}){var b;const{critical:r=!1}=s,i=n.level,a=t.power||0;if(a===0)return{min:0,max:0,rolls:[],hpPercent:{min:0,max:0}};const c=t.category==="physical",l=c?n.stats.atk:n.stats.spa,h=c?e.stats.def:e.stats.spd;let f=Math.floor(Math.floor(Math.floor(2*i/5+2)*a*l/h)/50)+2;r&&(f=Math.floor(f*1.5));let m=1;n.types&&n.types.includes(t.type)&&(m=n.ability==="adaptability"?2:1.5);let g=1;if(e.types)for(const y of e.types)g*=((b=Hr[t.type])==null?void 0:b[y])??1;let v=1;n.item==="life-orb"?v=1.3:n.item==="choice-band"&&c||n.item==="choice-specs"&&!c?v=1.5:n.item==="expert-belt"&&g>1&&(v=1.2);let S=1;(n.ability==="huge-power"||n.ability==="pure-power")&&c&&(S=2);let C=1;e.ability==="multiscale"&&(C=.5),(e.ability==="filter"||e.ability==="solid-rock")&&g>1&&(C=.75),e.ability==="thick-fat"&&(t.type==="fire"||t.type==="ice")&&(C=.5),e.ability==="levitate"&&t.type==="ground"&&(g=0);const V=[];for(let y=85;y<=100;y++){let _=f;_=Math.floor(_*y/100),_=Math.floor(_*m),_=Math.floor(_*g),_=Math.floor(_*v),_=Math.floor(_*S),_=Math.floor(_*C),_=Math.max(_,g>0?1:0),V.push(_)}const O=Math.min(...V),M=Math.max(...V),F=e.stats.hp,j={min:F>0?O/F*100:0,max:F>0?M/F*100:0};let K="",q="";return g===0?(K="immune",q="ko-unlikely"):j.min>=100?(K="ohko-guaranteed",q="ko-guaranteed"):j.max>=100?(K="ohko-possible",q="ko-possible"):j.min>=50?(K="2hko",q="ko-guaranteed"):j.max>=50?(K="2hko-possible",q="ko-possible"):j.min>=33.4?(K="3hko",q="ko-possible"):(K="4hko+",q="ko-unlikely"),{min:O,max:M,rolls:V,hpPercent:j,stab:m>1,typeEff:g,koText:K,koClass:q,isPhysical:c}}function kp(n,e,t,s,r,i){const a=[];for(let c=0;c<=31;c++)(i?la(n,c,s,e):ua(n,c,s,e,t))===r&&a.push(c);return a}function Rp(n,e,t,s,r,i){for(let a=0;a<=252;a+=4)if((i?la(n,s,a,e):ua(n,s,a,e,t))>=r)return a;return-1}function Gs(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ze(n){return n.split("-").map(Gs).join(" ")}function Yn(n){const e={};for(const t of n.stats){const s=t.stat.name,r={hp:"hp",attack:"atk",defense:"def","special-attack":"spa","special-defense":"spd",speed:"spe"};r[s]&&(e[r[s]]=t.base_stat)}return e}function pe(){return{id:null,name:"",species:"",types:[],ability:"",item:"",nature:"adamant",level:50,moves:["","","",""],evs:{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},ivs:{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},baseStats:null,sprite:""}}function Cp(n){const e=[];for(const t of n){if(!t.name)continue;let s=Ze(t.name);t.item&&(s+=` @ ${Ze(t.item)}`),e.push(s),t.ability&&e.push(`Ability: ${Ze(t.ability)}`),e.push(`Level: ${t.level}`);const r=vn.find(c=>c.name===t.nature);r&&e.push(`${Gs(r.name)} Nature`);const i=[];for(const c of be)t.evs[c]>0&&i.push(`${t.evs[c]} ${ye[c]}`);i.length&&e.push(`EVs: ${i.join(" / ")}`);const a=[];for(const c of be)t.ivs[c]<31&&a.push(`${t.ivs[c]} ${ye[c]}`);a.length&&e.push(`IVs: ${a.join(" / ")}`);for(const c of t.moves)c&&e.push(`- ${Ze(c)}`);e.push("")}return e.join(`
`)}function Dp(n){const e=[],t=n.trim().split(/\n\s*\n/);for(const s of t){if(!s.trim())continue;const r=pe(),i=s.trim().split(`
`),a=i[0],c=a.match(/^(.+?)\s*@\s*(.+)$/);c?(r.name=c[1].trim().toLowerCase().replace(/\s+/g,"-"),r.item=c[2].trim().toLowerCase().replace(/\s+/g,"-")):r.name=a.trim().toLowerCase().replace(/\s+/g,"-");for(let l=1;l<i.length;l++){const h=i[l].trim();if(h.startsWith("Ability:"))r.ability=h.replace("Ability:","").trim().toLowerCase().replace(/\s+/g,"-");else if(h.startsWith("Level:"))r.level=parseInt(h.replace("Level:","").trim())||50;else if(h.endsWith("Nature")){const f=h.replace("Nature","").trim().toLowerCase();vn.find(m=>m.name===f)&&(r.nature=f)}else if(h.startsWith("EVs:")){const m=h.replace("EVs:","").trim().split("/");for(const g of m){const v=g.trim().match(/(\d+)\s+(\w+)/);if(v){const S=parseInt(v[1]),C=v[2],V={HP:"hp",Atk:"atk",Def:"def",SpA:"spa",SpD:"spd",Spe:"spe"};V[C]&&(r.evs[V[C]]=S)}}}else if(h.startsWith("IVs:")){const m=h.replace("IVs:","").trim().split("/");for(const g of m){const v=g.trim().match(/(\d+)\s+(\w+)/);if(v){const S=parseInt(v[1]),C=v[2],V={HP:"hp",Atk:"atk",Def:"def",SpA:"spa",SpD:"spd",Spe:"spe"};V[C]&&(r.ivs[V[C]]=S)}}}else if(h.startsWith("-")){const f=h.replace("-","").trim().toLowerCase().replace(/\s+/g,"-"),m=r.moves.indexOf("");m!==-1&&(r.moves[m]=f)}}r.name&&e.push(r)}return e.slice(0,6)}function Vp(n,e=300){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>n(...s),e)}}function at(n,e,t,s={}){const r=n.querySelector(".search-input"),i=n.querySelector(".search-dropdown");let a=-1,c=[];function l(g){c=g.slice(0,50),i.innerHTML="",a=-1;for(let v=0;v<c.length;v++){const S=c[v],C=document.createElement("div");C.className="search-option",C.dataset.index=v,s.renderOption?C.innerHTML=s.renderOption(S):C.textContent=S.label||S.name,C.addEventListener("mousedown",V=>{V.preventDefault(),h(S)}),i.appendChild(C)}}function h(g){r.value=g.label||f(g.name),r.dataset.value=g.value||g.name,n.classList.remove("open"),t(g)}function f(g){return g.split("-").map(v=>v.charAt(0).toUpperCase()+v.slice(1)).join(" ")}const m=Vp(g=>{const v=g.toLowerCase().replace(/\s+/g,"-"),S=e.filter(C=>{const V=(C.name||"").toLowerCase(),O=(C.label||"").toLowerCase();return V.includes(v)||O.includes(v)});l(S)},150);return r.addEventListener("focus",()=>{n.classList.add("open");const g=r.value.toLowerCase().replace(/\s+/g,"-");g?m(g):l(e)}),r.addEventListener("input",()=>{n.classList.add("open"),m(r.value)}),r.addEventListener("blur",()=>{setTimeout(()=>n.classList.remove("open"),200)}),r.addEventListener("keydown",g=>{var S,C;const v=i.querySelectorAll(".search-option");g.key==="ArrowDown"?(g.preventDefault(),a=Math.min(a+1,v.length-1),v.forEach((V,O)=>V.classList.toggle("highlighted",O===a)),(S=v[a])==null||S.scrollIntoView({block:"nearest"})):g.key==="ArrowUp"?(g.preventDefault(),a=Math.max(a-1,0),v.forEach((V,O)=>V.classList.toggle("highlighted",O===a)),(C=v[a])==null||C.scrollIntoView({block:"nearest"})):g.key==="Enter"?(g.preventDefault(),a>=0&&c[a]&&h(c[a])):g.key==="Escape"&&(n.classList.remove("open"),r.blur())}),{clear(){r.value="",r.dataset.value=""},setValue(g,v){r.value=v||f(g),r.dataset.value=g},updateItems(g){e=g}}}function Yu(n,e,t,s=255){const r=n.getContext("2d"),i=n.width,a=n.height,c=i/2,l=a/2,h=Math.min(c,l)-40;r.clearRect(0,0,i,a);const f=["HP","Atk","Def","SpA","SpD","Spe"],m=[e.hp,e.atk,e.def,e.spa,e.spd,e.spe],g=t?[t.hp,t.atk,t.def,t.spa,t.spd,t.spe]:null,v=["#ff5959","#f5ac78","#fae078","#9db7f5","#a7db8d","#fa92b2"],S=6,C=document.documentElement.getAttribute("data-theme")==="dark",V=C?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",O=C?"#a0a0c0":"#555770";for(let M=1;M<=5;M++){r.beginPath();for(let F=0;F<=S;F++){const j=Math.PI*2*F/S-Math.PI/2,K=c+h*M/5*Math.cos(j),q=l+h*M/5*Math.sin(j);F===0?r.moveTo(K,q):r.lineTo(K,q)}r.strokeStyle=V,r.lineWidth=1,r.stroke()}for(let M=0;M<S;M++){const F=Math.PI*2*M/S-Math.PI/2;r.beginPath(),r.moveTo(c,l),r.lineTo(c+h*Math.cos(F),l+h*Math.sin(F)),r.strokeStyle=V,r.stroke()}if(g){r.beginPath();for(let M=0;M<=S;M++){const F=M%S,j=Math.PI*2*F/S-Math.PI/2,K=Math.min(g[F]/s,1),q=c+h*K*Math.cos(j),b=l+h*K*Math.sin(j);M===0?r.moveTo(q,b):r.lineTo(q,b)}r.fillStyle=C?"rgba(99,102,241,0.15)":"rgba(99,102,241,0.1)",r.fill(),r.strokeStyle="rgba(99,102,241,0.4)",r.lineWidth=1.5,r.stroke()}r.beginPath();for(let M=0;M<=S;M++){const F=M%S,j=Math.PI*2*F/S-Math.PI/2,K=Math.min(m[F]/(s*2.5),1),q=c+h*K*Math.cos(j),b=l+h*K*Math.sin(j);M===0?r.moveTo(q,b):r.lineTo(q,b)}r.fillStyle=C?"rgba(129,140,248,0.3)":"rgba(99,102,241,0.2)",r.fill(),r.strokeStyle="#818cf8",r.lineWidth=2,r.stroke();for(let M=0;M<S;M++){const F=Math.PI*2*M/S-Math.PI/2,j=Math.min(m[M]/(s*2.5),1),K=c+h*j*Math.cos(F),q=l+h*j*Math.sin(F);r.beginPath(),r.arc(K,q,4,0,Math.PI*2),r.fillStyle=v[M],r.fill();const b=c+(h+25)*Math.cos(F),y=l+(h+25)*Math.sin(F);r.font="bold 12px Segoe UI, system-ui, sans-serif",r.fillStyle=O,r.textAlign="center",r.textBaseline="middle",r.fillText(`${f[M]}`,b,y-8),r.font="11px Segoe UI, system-ui, sans-serif",r.fillStyle=v[M],r.fillText(`${m[M]}`,b,y+8)}}const ha=()=>document.getElementById("info-popup"),mi=()=>document.getElementById("info-popup-title"),an=()=>document.getElementById("info-popup-body");function da(n){const e=ha();mi().textContent=oe(n),an().innerHTML='<div class="spinner" style="margin:20px auto"></div>',e.style.display="flex"}function po(){ha().style.display="none"}function ut(n,e="en"){if(!n||n.length===0)return"";const t=Ap(),r={en:"en","pt-br":"pt"}[t]||"en",i=n.find(c=>c.language.name===r);return i||n.find(c=>c.language.name==="en")||n[0]}async function Ro(n){if(n){da(n);try{const e=await Tp(n),t=ut(e.names),s=(t==null?void 0:t.name)||oe(n),r=ut(e.flavor_text_entries),i=(r==null?void 0:r.flavor_text)||"",a=ut(e.effect_entries),c=(a==null?void 0:a.effect)||(a==null?void 0:a.short_effect)||"",l=e.effect_entries.find(f=>f.language.name==="en"),h=(l==null?void 0:l.short_effect)||"";mi().innerHTML=`<span>🔮</span> ${s}`,an().innerHTML=`
      <div class="info-row">
        <span class="info-label">${P("info.name")}</span>
        <span class="info-value">${s}</span>
      </div>
      ${e.is_main_series?"":`
        <div class="info-row">
          <span class="info-label">${P("info.note")}</span>
          <span class="info-value" style="color:var(--warning)">${P("info.notMainSeries")}</span>
        </div>
      `}
      ${h?`
        <div class="info-row">
          <span class="info-label">${P("info.effect")}</span>
          <span class="info-value">${h}</span>
        </div>
      `:""}
      <div class="info-description">
        ${i?`<p>${i.replace(/\n/g," ")}</p>`:""}
        ${c?`<p style="color:var(--text-muted);font-size:0.85rem">${c.replace(/\n/g," ")}</p>`:""}
      </div>
    `}catch{an().innerHTML=`<p style="color:var(--danger)">${P("info.loadError")}</p>`}}}async function Ju(n){if(n){da(n);try{const e=await zs(n),t=ut(e.names),s=(t==null?void 0:t.name)||oe(n),r=ut(e.flavor_text_entries),i=(r==null?void 0:r.flavor_text)||"",a=ut(e.effect_entries),c=(a==null?void 0:a.short_effect)||(a==null?void 0:a.effect)||"",l=e.effect_chance,h=c.replace(/\$effect_chance/g,l??"—"),f=e.type.name,m=Gt[f]||"#888",g=e.damage_class.name,v=P(g==="physical"?"dc.physical":g==="special"?"dc.special":"dc.status"),S=g;mi().innerHTML=`<span class="type-badge" style="background:${m};font-size:0.75rem">${f.toUpperCase()}</span> ${s}`,an().innerHTML=`
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${P("dc.power")}</span>
          <span class="info-value" style="font-weight:700">${e.power??"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${P("info.accuracy")}</span>
          <span class="info-value" style="font-weight:700">${e.accuracy?e.accuracy+"%":"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">PP</span>
          <span class="info-value">${e.pp??"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${P("dc.category")}</span>
          <span class="info-value"><span class="move-cat ${S}">${v}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${P("info.type")}</span>
          <span class="info-value"><span class="type-badge" style="background:${m}">${f.toUpperCase()}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${P("info.priority")}</span>
          <span class="info-value">${e.priority>0?"+":""}${e.priority}</span>
        </div>
      </div>
      ${e.meta?`
        <div class="info-move-meta" style="border-top:1px solid var(--border-color);padding-top:var(--sp-sm)">
          ${e.meta.min_hits!==null&&e.meta.max_hits!==null&&e.meta.max_hits>0?`
            <div class="info-row">
              <span class="info-label">${P("info.hits")}</span>
              <span class="info-value">${e.meta.min_hits===e.meta.max_hits?e.meta.min_hits:e.meta.min_hits+"–"+e.meta.max_hits}</span>
            </div>
          `:""}
          ${e.meta.drain!==0?`
            <div class="info-row">
              <span class="info-label">${P("info.drain")}</span>
              <span class="info-value">${e.meta.drain}%</span>
            </div>
          `:""}
          ${e.meta.healing!==0?`
            <div class="info-row">
              <span class="info-label">${P("info.healing")}</span>
              <span class="info-value">${e.meta.healing}%</span>
            </div>
          `:""}
          ${e.meta.crit_rate>0?`
            <div class="info-row">
              <span class="info-label">${P("info.critRate")}</span>
              <span class="info-value">+${e.meta.crit_rate}</span>
            </div>
          `:""}
        </div>
      `:""}
      <div class="info-description">
        ${h?`<p>${h.replace(/\n/g," ")}</p>`:""}
        ${i?`<p style="font-style:italic;color:var(--text-muted)">"${i.replace(/\n/g," ")}"</p>`:""}
      </div>
    `}catch{an().innerHTML=`<p style="color:var(--danger)">${P("info.loadError")}</p>`}}}async function Co(n){var e,t,s;if(n){da(n);try{const r=await bp(n),i=ut(r.names),a=(i==null?void 0:i.name)||oe(n),c=ut(r.flavor_text_entries),l=(c==null?void 0:c.text)||"",h=ut(r.effect_entries),f=(h==null?void 0:h.short_effect)||(h==null?void 0:h.effect)||"",m=(e=r.category)!=null&&e.name?oe(r.category.name):"—",g=((t=r.sprites)==null?void 0:t.default)||Ip(n),v=r.fling_power,S=(s=r.fling_effect)!=null&&s.name?oe(r.fling_effect.name):null;mi().innerHTML=`<img src="${g}" alt="" width="24" height="24" style="image-rendering:pixelated"> ${a}`,an().innerHTML=`
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${P("info.name")}</span>
          <span class="info-value">${a}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${P("info.category")}</span>
          <span class="info-value">${m}</span>
        </div>
        ${v?`
          <div class="info-row">
            <span class="info-label">${P("info.flingPower")}</span>
            <span class="info-value">${v}</span>
          </div>
        `:""}
        ${S?`
          <div class="info-row">
            <span class="info-label">${P("info.flingEffect")}</span>
            <span class="info-value">${S}</span>
          </div>
        `:""}
        ${r.cost?`
          <div class="info-row">
            <span class="info-label">${P("info.cost")}</span>
            <span class="info-value">₽${r.cost}</span>
          </div>
        `:""}
      </div>
      <div class="info-description">
        ${f?`<p>${f.replace(/\n/g," ")}</p>`:""}
        ${l?`<p style="font-style:italic;color:var(--text-muted)">"${l.replace(/\n/g," ")}"</p>`:""}
      </div>
    `}catch{an().innerHTML=`<p style="color:var(--danger)">${P("info.loadError")}</p>`}}}function Mp(){document.getElementById("info-popup-close").addEventListener("click",po),document.getElementById("info-popup").addEventListener("click",n=>{n.target===n.currentTarget&&po()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&ha().style.display!=="none"&&po()})}const Np=()=>{};var cl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},xp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,h=l?n[r+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,a||(g=64)),s.push(t[f],t[m],t[g],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const m=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||m==null)throw new Lp;const g=i<<2|c>>4;if(s.push(g),h!==64){const v=c<<4&240|h>>2;if(s.push(v),m!==64){const S=h<<6&192|m;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Op=function(n){const e=Xu(n);return Zu.encodeByteArray(e,!0)},qr=function(n){return Op(n).replace(/\./g,"")},eh=function(n){try{return Zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=()=>$p().__FIREBASE_DEFAULTS__,Bp=()=>{if(typeof process>"u"||typeof cl>"u")return;const n=cl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Up=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eh(n[1]);return e&&JSON.parse(e)},gi=()=>{try{return Np()||Fp()||Bp()||Up()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},th=n=>{var e,t;return(t=(e=gi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Hp=n=>{const e=th(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},nh=()=>{var n;return(n=gi())==null?void 0:n.config},sh=n=>{var e;return(e=gi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qr(JSON.stringify(t)),qr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Wp(){var e;const n=(e=gi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yp(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jp(){return!Wp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xp(){try{return typeof indexedDB=="object"}catch{return!1}}function Zp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="FirebaseError";class bt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=em,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?tm(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new bt(r,c,s)}}function tm(n,e){return n.replace(nm,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nm=/\{\$([^}]+)}/g;function sm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(ll(i)&&ll(a)){if(!cn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ll(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Es(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function bs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rm(n,e){const t=new im(n,e);return t.subscribe.bind(t)}class im{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");om(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=mo),r.error===void 0&&(r.error=mo),r.complete===void 0&&(r.complete=mo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function om(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rh(n){return(await fetch(n,{credentials:"include"})).ok}class ln{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lm(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cm(n){return n===nn?void 0:n}function lm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new am(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const hm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},dm=Y.INFO,fm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},pm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=fm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=dm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const mm=(n,e)=>e.some(t=>n instanceof t);let ul,hl;function gm(){return ul||(ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return hl||(hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ih=new WeakMap,Do=new WeakMap,oh=new WeakMap,go=new WeakMap,pa=new WeakMap;function _m(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(xt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ih.set(t,n)}).catch(()=>{}),pa.set(e,n),e}function vm(n){if(Do.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Do.set(n,e)}let Vo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Do.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Em(n){Vo=n(Vo)}function bm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(yo(this),e,...t);return oh.set(s,e.sort?e.sort():[e]),xt(s)}:ym().includes(n)?function(...e){return n.apply(yo(this),e),xt(ih.get(this))}:function(...e){return xt(n.apply(yo(this),e))}}function Tm(n){return typeof n=="function"?bm(n):(n instanceof IDBTransaction&&vm(n),mm(n,gm())?new Proxy(n,Vo):n)}function xt(n){if(n instanceof IDBRequest)return _m(n);if(go.has(n))return go.get(n);const e=Tm(n);return e!==n&&(go.set(n,e),pa.set(e,n)),e}const yo=n=>pa.get(n);function Im(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=xt(a);return s&&a.addEventListener("upgradeneeded",l=>{s(xt(a.result),l.oldVersion,l.newVersion,xt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const wm=["get","getKey","getAll","getAllKeys","count"],Am=["put","add","delete","clear"],_o=new Map;function dl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_o.get(e))return _o.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Am.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wm.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&l.done]))[0]};return _o.set(e,i),i}Em(n=>({...n,get:(e,t,s)=>dl(e,t)||n.get(e,t,s),has:(e,t)=>!!dl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Pm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",fl="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new fa("@firebase/app"),km="@firebase/app-compat",Rm="@firebase/analytics-compat",Cm="@firebase/analytics",Dm="@firebase/app-check-compat",Vm="@firebase/app-check",Mm="@firebase/auth",Nm="@firebase/auth-compat",xm="@firebase/database",Lm="@firebase/data-connect",Om="@firebase/database-compat",$m="@firebase/functions",Fm="@firebase/functions-compat",Bm="@firebase/installations",Um="@firebase/installations-compat",Hm="@firebase/messaging",qm="@firebase/messaging-compat",jm="@firebase/performance",zm="@firebase/performance-compat",Wm="@firebase/remote-config",Gm="@firebase/remote-config-compat",Km="@firebase/storage",Qm="@firebase/storage-compat",Ym="@firebase/firestore",Jm="@firebase/ai",Xm="@firebase/firestore-compat",Zm="firebase",eg="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="[DEFAULT]",tg={[Mo]:"fire-core",[km]:"fire-core-compat",[Cm]:"fire-analytics",[Rm]:"fire-analytics-compat",[Vm]:"fire-app-check",[Dm]:"fire-app-check-compat",[Mm]:"fire-auth",[Nm]:"fire-auth-compat",[xm]:"fire-rtdb",[Lm]:"fire-data-connect",[Om]:"fire-rtdb-compat",[$m]:"fire-fn",[Fm]:"fire-fn-compat",[Bm]:"fire-iid",[Um]:"fire-iid-compat",[Hm]:"fire-fcm",[qm]:"fire-fcm-compat",[jm]:"fire-perf",[zm]:"fire-perf-compat",[Wm]:"fire-rc",[Gm]:"fire-rc-compat",[Km]:"fire-gcs",[Qm]:"fire-gcs-compat",[Ym]:"fire-fst",[Xm]:"fire-fst-compat",[Jm]:"fire-vertex","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,ng=new Map,xo=new Map;function pl(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qn(n){const e=n.name;if(xo.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,n);for(const t of jr.values())pl(t,n);for(const t of ng.values())pl(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Ks("app","Firebase",sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=eg;function ah(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:No,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(t||(t=nh()),!t)throw Lt.create("no-options");const i=jr.get(r);if(i){if(cn(t,i.options)&&cn(s,i.config))return i;throw Lt.create("duplicate-app",{appName:r})}const a=new um(r);for(const l of xo.values())a.addComponent(l);const c=new rg(t,s,a);return jr.set(r,c),c}function ch(n=No){const e=jr.get(n);if(!e&&n===No&&nh())return ah();if(!e)throw Lt.create("no-app",{appName:n});return e}function Ot(n,e,t){let s=tg[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}qn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="firebase-heartbeat-database",og=1,Ns="firebase-heartbeat-store";let vo=null;function lh(){return vo||(vo=Im(ig,og,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),vo}async function ag(n){try{const t=(await lh()).transaction(Ns),s=await t.objectStore(Ns).get(uh(n));return await t.done,s}catch(e){if(e instanceof bt)mt.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function ml(n,e){try{const s=(await lh()).transaction(Ns,"readwrite");await s.objectStore(Ns).put(e,uh(n)),await s.done}catch(t){if(t instanceof bt)mt.warn(t.message);else{const s=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(s.message)}}}function uh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,lg=30;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>lg){const a=fg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gl(),{heartbeatsToSend:s,unsentEntries:r}=hg(this._heartbeatsCache.heartbeats),i=qr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return mt.warn(t),""}}}function gl(){return new Date().toISOString().substring(0,10)}function hg(n,e=cg){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),yl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),yl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xp()?Zp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ag(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ml(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yl(n){return qr(JSON.stringify({version:2,heartbeats:n})).length}function fg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){qn(new ln("platform-logger",e=>new Sm(e),"PRIVATE")),qn(new ln("heartbeat",e=>new ug(e),"PRIVATE")),Ot(Mo,fl,n),Ot(Mo,fl,"esm2020"),Ot("fire-js","")}pg("");var mg="firebase",gg="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(mg,gg,"app");var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,hh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(I,T,A){for(var E=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)E[Ae-2]=arguments[Ae];return y.prototype[T].apply(I,E)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,y,_){_||(_=0);const I=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)I[T]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(T=0;T<16;++T)I[T]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],T=b.g[2];let A=b.g[3],E;E=y+(A^_&(T^A))+I[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(T^y&(_^T))+I[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=T+(_^A&(y^_))+I[2]+606105819&4294967295,T=A+(E<<17&4294967295|E>>>15),E=_+(y^T&(A^y))+I[3]+3250441966&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(A^_&(T^A))+I[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(T^y&(_^T))+I[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=T+(_^A&(y^_))+I[6]+2821735955&4294967295,T=A+(E<<17&4294967295|E>>>15),E=_+(y^T&(A^y))+I[7]+4249261313&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(A^_&(T^A))+I[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(T^y&(_^T))+I[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=T+(_^A&(y^_))+I[10]+4294925233&4294967295,T=A+(E<<17&4294967295|E>>>15),E=_+(y^T&(A^y))+I[11]+2304563134&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(A^_&(T^A))+I[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(T^y&(_^T))+I[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=T+(_^A&(y^_))+I[14]+2792965006&4294967295,T=A+(E<<17&4294967295|E>>>15),E=_+(y^T&(A^y))+I[15]+1236535329&4294967295,_=T+(E<<22&4294967295|E>>>10),E=y+(T^A&(_^T))+I[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^T&(y^_))+I[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(A^y))+I[11]+643717713&4294967295,T=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(T^A))+I[0]+3921069994&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^A&(_^T))+I[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^T&(y^_))+I[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(A^y))+I[15]+3634488961&4294967295,T=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(T^A))+I[4]+3889429448&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^A&(_^T))+I[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^T&(y^_))+I[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(A^y))+I[3]+4107603335&4294967295,T=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(T^A))+I[8]+1163531501&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(T^A&(_^T))+I[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^T&(y^_))+I[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=T+(y^_&(A^y))+I[7]+1735328473&4294967295,T=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(T^A))+I[12]+2368359562&4294967295,_=T+(E<<20&4294967295|E>>>12),E=y+(_^T^A)+I[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^T)+I[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=T+(A^y^_)+I[11]+1839030562&4294967295,T=A+(E<<16&4294967295|E>>>16),E=_+(T^A^y)+I[14]+4259657740&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^A)+I[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^T)+I[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=T+(A^y^_)+I[7]+4139469664&4294967295,T=A+(E<<16&4294967295|E>>>16),E=_+(T^A^y)+I[10]+3200236656&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^A)+I[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^T)+I[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=T+(A^y^_)+I[3]+3572445317&4294967295,T=A+(E<<16&4294967295|E>>>16),E=_+(T^A^y)+I[6]+76029189&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(_^T^A)+I[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^T)+I[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=T+(A^y^_)+I[15]+530742520&4294967295,T=A+(E<<16&4294967295|E>>>16),E=_+(T^A^y)+I[2]+3299628645&4294967295,_=T+(E<<23&4294967295|E>>>9),E=y+(T^(_|~A))+I[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~T))+I[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=T+(y^(A|~_))+I[14]+2878612391&4294967295,T=A+(E<<15&4294967295|E>>>17),E=_+(A^(T|~y))+I[5]+4237533241&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~A))+I[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~T))+I[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=T+(y^(A|~_))+I[10]+4293915773&4294967295,T=A+(E<<15&4294967295|E>>>17),E=_+(A^(T|~y))+I[1]+2240044497&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~A))+I[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~T))+I[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=T+(y^(A|~_))+I[6]+2734768916&4294967295,T=A+(E<<15&4294967295|E>>>17),E=_+(A^(T|~y))+I[13]+1309151649&4294967295,_=T+(E<<21&4294967295|E>>>11),E=y+(T^(_|~A))+I[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~T))+I[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=T+(y^(A|~_))+I[2]+718787259&4294967295,T=A+(E<<15&4294967295|E>>>17),E=_+(A^(T|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,I=this.C;let T=this.h,A=0;for(;A<y;){if(T==0)for(;A<=_;)r(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(I[T++]=b.charCodeAt(A++),T==this.blockSize){r(this,I),T=0;break}}else for(;A<y;)if(I[T++]=b[A++],T==this.blockSize){r(this,I),T=0;break}}this.h=T,this.o+=y},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)b[y++]=this.g[_]>>>I&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function a(b,y){this.h=y;const _=[];let I=!0;for(let T=b.length-1;T>=0;T--){const A=b[T]|0;I&&A==y||(_[T]=A,I=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?i(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return V(h(-b));const y=[];let _=1;for(let I=0;b>=_;I++)y[I]=b/_|0,_*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return V(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let I=m;for(let A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A);const E=parseInt(b.substring(A,A+T),y);T<8?(T=h(Math.pow(y,T)),I=I.j(T).add(h(E))):(I=I.j(_),I=I.add(h(E)))}return I}var m=l(0),g=l(1),v=l(16777216);n=a.prototype,n.m=function(){if(C(this))return-V(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);b+=(I>=0?I:4294967296+I)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(C(this))return"-"+V(this).toString(b);const y=h(Math.pow(b,6));var _=this;let I="";for(;;){const T=j(_,y).g;_=O(_,T.j(y));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=T,S(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function C(b){return b.h==-1}n.l=function(b){return b=O(this,b),C(b)?-1:S(b)?0:1};function V(b){const y=b.g.length,_=[];for(let I=0;I<y;I++)_[I]=~b.g[I];return new a(_,~b.h).add(g)}n.abs=function(){return C(this)?V(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let I=0;for(let T=0;T<=y;T++){let A=I+(this.i(T)&65535)+(b.i(T)&65535),E=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);I=E>>>16,A&=65535,E&=65535,_[T]=E<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(b,y){return b.add(V(y))}n.j=function(b){if(S(this)||S(b))return m;if(C(this))return C(b)?V(this).j(V(b)):V(V(this).j(b));if(C(b))return V(this.j(V(b)));if(this.l(v)<0&&b.l(v)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<b.g.length;T++){const A=this.i(I)>>>16,E=this.i(I)&65535,Ae=b.i(T)>>>16,Yt=b.i(T)&65535;_[2*I+2*T]+=E*Yt,M(_,2*I+2*T),_[2*I+2*T+1]+=A*Yt,M(_,2*I+2*T+1),_[2*I+2*T+1]+=E*Ae,M(_,2*I+2*T+1),_[2*I+2*T+2]+=A*Ae,M(_,2*I+2*T+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function M(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function F(b,y){this.g=b,this.h=y}function j(b,y){if(S(y))throw Error("division by zero");if(S(b))return new F(m,m);if(C(b))return y=j(V(b),y),new F(V(y.g),V(y.h));if(C(y))return y=j(b,V(y)),new F(V(y.g),y.h);if(b.g.length>30){if(C(b)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;I.l(b)<=0;)_=K(_),I=K(I);var T=q(_,1),A=q(I,1);for(I=q(I,2),_=q(_,2);!S(I);){var E=A.add(I);E.l(b)<=0&&(T=T.add(_),A=E),I=q(I,1),_=q(_,1)}return y=O(b,T.j(y)),new F(T,y)}for(T=m;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=h(_),E=A.j(y);C(E)||E.l(b)>0;)_-=I,A=h(_),E=A.j(y);S(A)&&(A=g),T=T.add(A),b=O(b,E)}return new F(T,b)}n.B=function(b){return j(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)&b.i(I);return new a(_,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)|b.i(I);return new a(_,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)^b.i(I);return new a(_,this.h^b.h)};function K(b){const y=b.g.length+1,_=[];for(let I=0;I<y;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(_,b.h)}function q(b,y){const _=y>>5;y%=32;const I=b.g.length-_,T=[];for(let A=0;A<I;A++)T[A]=y>0?b.i(A+_)>>>y|b.i(A+_+1)<<32-y:b.i(A+_);return new a(T,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,hh=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,$t=a}).apply(typeof _l<"u"?_l:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dh,Ts,fh,Vr,Lo,ph,mh,gh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in d))break e;d=d[w]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,w,k){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return u.prototype[w].apply(p,x)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function v(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const w=arguments[p];var d=typeof w;if(d=d!="object"?d:w?Array.isArray(w)?"array":d:"null",d=="array"||d=="object"&&typeof w.length=="number"){d=o.length||0;const k=w.length||0;o.length=d+k;for(let x=0;x<k;x++)o[d+x]=w[x]}else o.push(w)}}class C{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(o){a.setTimeout(()=>{throw o},0)}function O(){var o=b;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class M{constructor(){this.h=this.g=null}add(u,d){const p=F.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var F=new C(()=>new j,o=>o.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let K,q=!1,b=new M,y=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(_)}};function _(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){V(d)}var u=F;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}q=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function E(o){return/^[\s\xa0]*$/.test(o)}function Ae(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(Ae,T),Ae.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(Math.random()*1e6|0),qf=0;function jf(o,u,d,p,w){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=w,this.key=++qf,this.da=this.fa=!1}function ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cr(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function zf(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function rc(o){const u={};for(const d in o)u[d]=o[d];return u}const ic="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oc(o,u){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)o[d]=p[d];for(let k=0;k<ic.length;k++)d=ic[k],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function lr(o){this.src=o,this.g={},this.h=0}lr.prototype.add=function(o,u,d,p,w){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const x=ji(o,u,p,w);return x>-1?(u=o[x],d||(u.fa=!1)):(u=new jf(u,this.src,k,!!p,w),u.fa=d,o.push(u)),u};function qi(o,u){const d=u.type;if(d in o.g){var p=o.g[d],w=Array.prototype.indexOf.call(p,u,void 0),k;(k=w>=0)&&Array.prototype.splice.call(p,w,1),k&&(ar(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ji(o,u,d,p){for(let w=0;w<o.length;++w){const k=o[w];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==p)return w}return-1}var zi="closure_lm_"+(Math.random()*1e6|0),Wi={};function ac(o,u,d,p,w){if(Array.isArray(u)){for(let k=0;k<u.length;k++)ac(o,u[k],d,p,w);return null}return d=uc(d),o&&o[Yt]?o.J(u,d,c(p)?!!p.capture:!1,w):Wf(o,u,d,!1,p,w)}function Wf(o,u,d,p,w,k){if(!u)throw Error("Invalid event type");const x=c(w)?!!w.capture:!!w;let Q=Ki(o);if(Q||(o[zi]=Q=new lr(o)),d=Q.add(u,d,p,x,k),d.proxy)return d;if(p=Gf(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)A||(w=x),w===void 0&&(w=!1),o.addEventListener(u.toString(),p,w);else if(o.attachEvent)o.attachEvent(lc(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Gf(){function o(d){return u.call(o.src,o.listener,d)}const u=Kf;return o}function cc(o,u,d,p,w){if(Array.isArray(u))for(var k=0;k<u.length;k++)cc(o,u[k],d,p,w);else p=c(p)?!!p.capture:!!p,d=uc(d),o&&o[Yt]?(o=o.i,k=String(u).toString(),k in o.g&&(u=o.g[k],d=ji(u,d,p,w),d>-1&&(ar(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[k],o.h--)))):o&&(o=Ki(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ji(u,d,p,w)),(d=o>-1?u[o]:null)&&Gi(d))}function Gi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Yt])qi(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(lc(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Ki(u))?(qi(d,o),d.h==0&&(d.src=null,u[zi]=null)):ar(o)}}}function lc(o){return o in Wi?Wi[o]:Wi[o]="on"+o}function Kf(o,u){if(o.da)o=!0;else{u=new Ae(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&Gi(o),o=d.call(p,u)}return o}function Ki(o){return o=o[zi],o instanceof lr?o:null}var Qi="__closure_events_fn_"+(Math.random()*1e9>>>0);function uc(o){return typeof o=="function"?o:(o[Qi]||(o[Qi]=function(u){return o.handleEvent(u)}),o[Qi])}function Se(){I.call(this),this.i=new lr(this),this.M=this,this.G=null}m(Se,I),Se.prototype[Yt]=!0,Se.prototype.removeEventListener=function(o,u,d,p){cc(this,o,u,d,p)};function De(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var w=u;u=new T(p,o),oc(u,w)}w=!0;let k,x;if(d)for(x=d.length-1;x>=0;x--)k=u.g=d[x],w=ur(k,p,!0,u)&&w;if(k=u.g=o,w=ur(k,p,!0,u)&&w,w=ur(k,p,!1,u)&&w,d)for(x=0;x<d.length;x++)k=u.g=d[x],w=ur(k,p,!1,u)&&w}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)ar(d[p]);delete o.g[u],o.h--}}this.G=null},Se.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Se.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ur(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let w=!0;for(let k=0;k<u.length;++k){const x=u[k];if(x&&!x.da&&x.capture==d){const Q=x.listener,fe=x.ha||x.src;x.fa&&qi(o.i,x),w=Q.call(fe,p)!==!1&&w}}return w&&!p.defaultPrevented}function Qf(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function hc(o){o.g=Qf(()=>{o.g=null,o.i&&(o.i=!1,hc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Yf extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:hc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(o){I.call(this),this.h=o,this.g={}}m(ss,I);var dc=[];function fc(o){cr(o.g,function(u,d){this.g.hasOwnProperty(d)&&Gi(u)},o),o.g={}}ss.prototype.N=function(){ss.Z.N.call(this),fc(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yi=a.JSON.stringify,Jf=a.JSON.parse,Xf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function pc(){}function mc(){}var rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ji(){T.call(this,"d")}m(Ji,T);function Xi(){T.call(this,"c")}m(Xi,T);var Jt={},gc=null;function hr(){return gc=gc||new Se}Jt.Ia="serverreachability";function yc(o){T.call(this,Jt.Ia,o)}m(yc,T);function is(o){const u=hr();De(u,new yc(u))}Jt.STAT_EVENT="statevent";function _c(o,u){T.call(this,Jt.STAT_EVENT,o),this.stat=u}m(_c,T);function Ve(o){const u=hr();De(u,new _c(u,o))}Jt.Ja="timingevent";function vc(o,u){T.call(this,Jt.Ja,o),this.size=u}m(vc,T);function os(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function as(){this.g=!0}as.prototype.ua=function(){this.g=!1};function Zf(o,u,d,p,w,k){o.info(function(){if(o.g)if(k){var x="",Q=k.split("&");for(let ne=0;ne<Q.length;ne++){var fe=Q[ne].split("=");if(fe.length>1){const ve=fe[0];fe=fe[1];const Ke=ve.split("_");x=Ke.length>=2&&Ke[1]=="type"?x+(ve+"="+fe+"&"):x+(ve+"=redacted&")}}}else x=null;else x=k;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+u+`
`+d+`
`+x})}function ep(o,u,d,p,w,k,x){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+u+`
`+d+`
`+k+" "+x})}function Sn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+np(o,d)+(p?" "+p:"")})}function tp(o,u){o.info(function(){return"TIMEOUT: "+u})}as.prototype.info=function(){};function np(o,u){if(!o.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var d=k[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var w=p[0];if(w!="noop"&&w!="stop"&&w!="close")for(let x=1;x<p.length;x++)p[x]=""}}}}return Yi(k)}catch{return u}}var dr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ec={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bc;function Zi(){}m(Zi,pc),Zi.prototype.g=function(){return new XMLHttpRequest},bc=new Zi;function cs(o){return encodeURIComponent(String(o))}function sp(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function It(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var Ic={},eo={};function to(o,u,d){o.M=1,o.A=pr(Ge(u)),o.u=d,o.R=!0,wc(o,null)}function wc(o,u){o.F=Date.now(),fr(o),o.B=Ge(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Oc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Tc,o.g=tl(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Yf(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(dc[0]=w.toString()),w=dc);for(let k=0;k<w.length;k++){const x=ac(d,w[k],p||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=o.J?rc(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),is(),Zf(o.i,o.v,o.B,o.l,o.S,o.u)}It.prototype.ba=function(o){o=o.target;const u=this.O;u&&St(o)==3?u.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{const Q=St(this.g),fe=this.g.ya(),ne=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||jc(this.g)))){this.K||Q!=4||fe==7||(fe==8||ne<=0?is(3):is(2)),no(this);var u=this.g.ca();this.X=u;var d=rp(this);if(this.o=u==200,ep(this.i,this.v,this.B,this.l,this.S,Q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,w=this.g;if((p=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(p)){var k=p;break t}}k=null}if(o=k)Sn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,so(this,o);else{this.o=!1,this.m=3,Ve(12),Xt(this),ls(this);break e}}if(this.R){o=!0;let ve;for(;!this.K&&this.C<d.length;)if(ve=ip(this,d),ve==eo){Q==4&&(this.m=4,Ve(14),o=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==Ic){this.m=4,Ve(15),Sn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Sn(this.i,this.l,ve,null),so(this,ve);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Ve(16),o=!1),this.o=this.o&&o,!o)Sn(this.i,this.l,d,"[Invalid Chunked Response]"),Xt(this),ls(this);else if(d.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ho(x),x.P=!0,Ve(11))}}else Sn(this.i,this.l,d,null),so(this,d);Q==4&&Xt(this),this.o&&!this.K&&(Q==4?Jc(this.j,this):(this.o=!1,fr(this)))}else vp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ve(12)):(this.m=0,Ve(13)),Xt(this),ls(this)}}}catch{}finally{}};function rp(o){if(!Ac(o))return o.g.la();const u=jc(o.g);if(u==="")return"";let d="";const p=u.length,w=St(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Xt(o),ls(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<p;k++)o.h.h=!0,d+=o.h.i.decode(u[k],{stream:!(w&&k==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function Ac(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ip(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?eo:(d=Number(u.substring(d,p)),isNaN(d)?Ic:(p+=1,p+d>u.length?eo:(u=u.slice(p,p+d),o.C=p+d,u)))}It.prototype.cancel=function(){this.K=!0,Xt(this)};function fr(o){o.T=Date.now()+o.H,Sc(o,o.H)}function Sc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=os(h(o.aa,o),u)}function no(o){o.D&&(a.clearTimeout(o.D),o.D=null)}It.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(tp(this.i,this.B),this.M!=2&&(is(),Ve(17)),Xt(this),this.m=2,ls(this)):Sc(this,this.T-o)};function ls(o){o.j.I==0||o.K||Jc(o.j,o)}function Xt(o){no(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,fc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function so(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||ro(d.h,o))){if(!o.L&&ro(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)vr(d),yr(d);else break e;uo(d),Ve(18)}}else d.xa=w[1],0<d.xa-d.K&&w[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=os(h(d.Va,d),6e3));Rc(d.h)<=1&&d.ta&&(d.ta=void 0)}else en(d,11)}else if((o.L||d.g==o)&&vr(d),!E(u))for(w=d.Ba.g.parse(u),u=0;u<w.length;u++){let ne=w[u];const ve=ne[0];if(!(ve<=d.K))if(d.K=ve,ne=ne[1],d.I==2)if(ne[0]=="c"){d.M=ne[1],d.ba=ne[2];const Ke=ne[3];Ke!=null&&(d.ka=Ke,d.j.info("VER="+d.ka));const tn=ne[4];tn!=null&&(d.za=tn,d.j.info("SVER="+d.za));const Pt=ne[5];Pt!=null&&typeof Pt=="number"&&Pt>0&&(p=1.5*Pt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const kt=o.g;if(kt){const br=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(br){var k=p.h;k.g||br.indexOf("spdy")==-1&&br.indexOf("quic")==-1&&br.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(io(k,k.h),k.h=null))}if(p.G){const fo=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(p.wa=fo,se(p.J,p.G,fo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var x=o;if(p.na=el(p,p.L?p.ba:null,p.W),x.L){Cc(p.h,x);var Q=x,fe=p.O;fe&&(Q.H=fe),Q.D&&(no(Q),fr(Q)),p.g=x}else Qc(p);d.i.length>0&&_r(d)}else ne[0]!="stop"&&ne[0]!="close"||en(d,7);else d.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?en(d,7):lo(d):ne[0]!="noop"&&d.l&&d.l.qa(ne),d.A=0)}}is(4)}catch{}}var op=class{constructor(o,u){this.g=o,this.map=u}};function Pc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rc(o){return o.h?1:o.g?o.g.size:0}function ro(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function io(o,u){o.g?o.g.add(u):o.h=u}function Cc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Pc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return v(o.i)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ap(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let w,k=null;p>=0?(w=o[d].substring(0,p),k=o[d].substring(p+1)):w=o[d],u(w,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof wt?(this.l=o.l,us(this,o.j),this.o=o.o,this.g=o.g,hs(this,o.u),this.h=o.h,oo(this,$c(o.i)),this.m=o.m):o&&(u=String(o).match(Vc))?(this.l=!1,us(this,u[1]||"",!0),this.o=ds(u[2]||""),this.g=ds(u[3]||"",!0),hs(this,u[4]),this.h=ds(u[5]||"",!0),oo(this,u[6]||"",!0),this.m=ds(u[7]||"")):(this.l=!1,this.i=new ps(null,this.l))}wt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(fs(u,Mc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(fs(u,Mc,!0),"@"),o.push(cs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(fs(d,d.charAt(0)=="/"?up:lp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",fs(d,dp)),o.join("")},wt.prototype.resolve=function(o){const u=Ge(this);let d=!!o.j;d?us(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)hs(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var w=u.h.lastIndexOf("/");w!=-1&&(p=u.h.slice(0,w+1)+p)}if(w=p,w==".."||w==".")p="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){p=w.lastIndexOf("/",0)==0,w=w.split("/");const k=[];for(let x=0;x<w.length;){const Q=w[x++];Q=="."?p&&x==w.length&&k.push(""):Q==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&x==w.length&&k.push("")):(k.push(Q),p=!0)}p=k.join("/")}else p=w}return d?u.h=p:d=o.i.toString()!=="",d?oo(u,$c(o.i)):d=!!o.m,d&&(u.m=o.m),u};function Ge(o){return new wt(o)}function us(o,u,d){o.j=d?ds(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function hs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function oo(o,u,d){u instanceof ps?(o.i=u,fp(o.i,o.l)):(d||(u=fs(u,hp)),o.i=new ps(u,o.l))}function se(o,u,d){o.i.set(u,d)}function pr(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ds(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,cp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mc=/[#\/\?@]/g,lp=/[#\?:]/g,up=/[#\?]/g,hp=/[#\?@]/g,dp=/#/g;function ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&ap(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ps.prototype,n.add=function(o,u){Zt(this),this.i=null,o=Pn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Nc(o,u){Zt(o),u=Pn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function xc(o,u){return Zt(o),u=Pn(o,u),o.g.has(u)}n.forEach=function(o,u){Zt(this),this.g.forEach(function(d,p){d.forEach(function(w){o.call(u,w,p,this)},this)},this)};function Lc(o,u){Zt(o);let d=[];if(typeof u=="string")xc(o,u)&&(d=d.concat(o.g.get(Pn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return Zt(this),this.i=null,o=Pn(this,o),xc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Lc(this,o),o.length>0?String(o[0]):u):u};function Oc(o,u,d){Nc(o,u),d.length>0&&(o.i=null,o.g.set(Pn(o,u),v(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const w=cs(d);d=Lc(this,d);for(let k=0;k<d.length;k++){let x=w;d[k]!==""&&(x+="="+cs(d[k])),o.push(x)}}return this.i=o.join("&")};function $c(o){const u=new ps;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Pn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function fp(o,u){u&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(d,p){const w=p.toLowerCase();p!=w&&(Nc(this,p),Oc(this,w,d))},o)),o.j=u}function pp(o,u){const d=new as;if(a.Image){const p=new Image;p.onload=f(At,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(At,d,"TestLoadImage: error",!1,u,p),p.onabort=f(At,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(At,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function mp(o,u){const d=new as,p=new AbortController,w=setTimeout(()=>{p.abort(),At(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(w),k.ok?At(d,"TestPingServer: ok",!0,u):At(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),At(d,"TestPingServer: error",!1,u)})}function At(o,u,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function gp(){this.g=new Xf}function ao(o){this.i=o.Sb||null,this.h=o.ab||!1}m(ao,pc),ao.prototype.g=function(){return new mr(this.i,this.h)};function mr(o,u){Se.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(mr,Se),n=mr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,gs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ms(this):gs(this),this.readyState==3&&Fc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ms(this))},n.Na=function(o){this.g&&(this.response=o,ms(this))},n.ga=function(){this.g&&ms(this)};function ms(o){o.readyState=4,o.l=null,o.j=null,o.B=null,gs(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function gs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bc(o){let u="";return cr(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function co(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Bc(d),typeof o=="string"?d!=null&&cs(d):se(o,u,d))}function le(o){Se.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(le,Se);var yp=/^https?$/i,_p=["POST","PUT"];n=le.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bc.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Uc(this,k);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(_p,u,void 0)>=0)||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,x]of d)this.g.setRequestHeader(k,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){Uc(this,k)}};function Uc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Hc(o),gr(o)}function Hc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,De(this,"complete"),De(this,"abort"),gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gr(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?qc(this):this.Xa())},n.Xa=function(){qc(this)};function qc(o){if(o.h&&typeof i<"u"){if(o.v&&St(o)==4)setTimeout(o.Ca.bind(o),0);else if(De(o,"readystatechange"),St(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=k===0){let x=String(o.D).match(Vc)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),p=!yp.test(x?x.toLowerCase():"")}d=p}if(d)De(o,"complete"),De(o,"success");else{o.o=6;try{var w=St(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Hc(o)}}finally{gr(o)}}}}function gr(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||De(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function St(o){return o.g?o.g.readyState:0}n.ca=function(){try{return St(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Jf(u)}};function jc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vp(o){const u={};o=(o.g&&St(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(E(o[p]))continue;var d=sp(o[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[w]||[];u[w]=k,k.push(d)}zf(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function zc(o){this.za=0,this.i=[],this.j=new as,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ys("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ys("baseRetryDelayMs",5e3,o),this.Za=ys("retryDelaySeedMs",1e4,o),this.Ta=ys("forwardChannelMaxRetries",2,o),this.va=ys("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Pc(o&&o.concurrentRequestLimit),this.Ba=new gp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zc.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Ve(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=el(this,null,this.W),_r(this)};function lo(o){if(Wc(o),o.I==3){var u=o.V++,d=Ge(o.J);if(se(d,"SID",o.M),se(d,"RID",u),se(d,"TYPE","terminate"),_s(o,d),u=new It(o,o.j,u),u.M=2,u.A=pr(Ge(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=tl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),fr(u)}Zc(o)}function yr(o){o.g&&(ho(o),o.g.cancel(),o.g=null)}function Wc(o){yr(o),o.v&&(a.clearTimeout(o.v),o.v=null),vr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _r(o){if(!kc(o.h)&&!o.m){o.m=!0;var u=o.Ea;K||y(),q||(K(),q=!0),b.add(u,o),o.D=0}}function Ep(o,u){return Rc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=os(h(o.Ea,o,u),Xc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new It(this,this.j,o);let k=this.o;if(this.U&&(k?(k=rc(k),oc(k,this.U)):k=this.U),this.u!==null||this.R||(w.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Kc(this,w,u),d=Ge(this.J),se(d,"RID",o),se(d,"CVER",22),this.G&&se(d,"X-HTTP-Session-Id",this.G),_s(this,d),k&&(this.R?u="headers="+cs(Bc(k))+"&"+u:this.u&&co(d,this.u,k)),io(this.h,w),this.Ra&&se(d,"TYPE","init"),this.S?(se(d,"$req",u),se(d,"SID","null"),w.U=!0,to(w,d,null)):to(w,d,u),this.I=2}}else this.I==3&&(o?Gc(this,o):this.i.length==0||kc(this.h)||Gc(this))};function Gc(o,u){var d;u?d=u.l:d=o.V++;const p=Ge(o.J);se(p,"SID",o.M),se(p,"RID",d),se(p,"AID",o.K),_s(o,p),o.u&&o.o&&co(p,o.u,o.o),d=new It(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Kc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),io(o.h,d),to(d,p,u)}function _s(o,u){o.H&&cr(o.H,function(d,p){se(u,p,d)}),o.l&&cr({},function(d,p){se(u,p,d)})}function Kc(o,u,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var w=o.i;let Q=-1;for(;;){const fe=["count="+d];Q==-1?d>0?(Q=w[0].g,fe.push("ofs="+Q)):Q=0:fe.push("ofs="+Q);let ne=!0;for(let ve=0;ve<d;ve++){var k=w[ve].g;const Ke=w[ve].map;if(k-=Q,k<0)Q=Math.max(0,w[ve].g-100),ne=!1;else try{k="req"+k+"_"||"";try{var x=Ke instanceof Map?Ke:Object.entries(Ke);for(const[tn,Pt]of x){let kt=Pt;c(Pt)&&(kt=Yi(Pt)),fe.push(k+tn+"="+encodeURIComponent(kt))}}catch(tn){throw fe.push(k+"type="+encodeURIComponent("_badmap")),tn}}catch{p&&p(Ke)}}if(ne){x=fe.join("&");break e}}x=void 0}return o=o.i.splice(0,d),u.G=o,x}function Qc(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;K||y(),q||(K(),q=!0),b.add(u,o),o.A=0}}function uo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=os(h(o.Da,o),Xc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Yc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=os(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ve(10),yr(this),Yc(this))};function ho(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Yc(o){o.g=new It(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Ge(o.na);se(u,"RID","rpc"),se(u,"SID",o.M),se(u,"AID",o.K),se(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(u,"TO",o.ia),se(u,"TYPE","xmlhttp"),_s(o,u),o.u&&o.o&&co(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=pr(Ge(u)),d.u=null,d.R=!0,wc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,yr(this),uo(this),Ve(19))};function vr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Jc(o,u){var d=null;if(o.g==u){vr(o),ho(o),o.g=null;var p=2}else if(ro(o.h,u))d=u.G,Cc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var w=o.D;p=hr(),De(p,new vc(p,d)),_r(o)}else Qc(o);else if(w=u.m,w==3||w==0&&u.X>0||!(p==1&&Ep(o,u)||p==2&&uo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),w){case 1:en(o,5);break;case 4:en(o,10);break;case 3:en(o,6);break;default:en(o,2)}}}function Xc(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function en(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),p=o.Ua;const w=!p;p=new wt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||us(p,"https"),pr(p),w?pp(p.toString(),d):mp(p.toString(),d)}else Ve(2);o.I=0,o.l&&o.l.pa(u),Zc(o),Wc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Zc(o){if(o.I=0,o.ja=[],o.l){const u=Dc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.oa()}}function el(o,u,d){var p=d instanceof wt?Ge(d):new wt(d);if(p.g!="")u&&(p.g=u+"."+p.g),hs(p,p.u);else{var w=a.location;p=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;const k=new wt(null);p&&us(k,p),u&&(k.g=u),w&&hs(k,w),d&&(k.h=d),p=k}return d=o.G,u=o.wa,d&&u&&se(p,d,u),se(p,"VER",o.ka),_s(o,p),p}function tl(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new le(new ao({ab:d})):new le(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nl(){}n=nl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(o,u){return new Oe(o,u)};function Oe(o,u){Se.call(this),this.g=new zc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!E(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kn(this)}m(Oe,Se),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){lo(this.g)},Oe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Yi(o),o=d);u.i.push(new op(u.Ya++,o)),u.I==3&&_r(u)},Oe.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,Oe.Z.N.call(this)};function sl(o){Ji.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(sl,Ji);function rl(){Xi.call(this),this.status=1}m(rl,Xi);function kn(o){this.g=o}m(kn,nl),kn.prototype.ra=function(){De(this.g,"a")},kn.prototype.qa=function(o){De(this.g,new sl(o))},kn.prototype.pa=function(o){De(this.g,new rl)},kn.prototype.oa=function(){De(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,gh=function(){return new Er},mh=function(){return hr()},ph=Jt,Lo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Vr=dr,Ec.COMPLETE="complete",fh=Ec,mc.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Se.prototype.listen=Se.prototype.J,Ts=mc,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,dh=le}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn="12.11.0";function yg(n){Xn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new fa("@firebase/firestore");function Rn(){return un.logLevel}function L(n,...e){if(un.logLevel<=Y.DEBUG){const t=e.map(ga);un.debug(`Firestore (${Xn}): ${n}`,...t)}}function gt(n,...e){if(un.logLevel<=Y.ERROR){const t=e.map(ga);un.error(`Firestore (${Xn}): ${n}`,...t)}}function hn(n,...e){if(un.logLevel<=Y.WARN){const t=e.map(ga);un.warn(`Firestore (${Xn}): ${n}`,...t)}}function ga(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,yh(n,s,t)}function yh(n,e,t){let s=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw gt(s),new Error(s)}function ee(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||yh(e,r,s)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _g{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ke.UNAUTHENTICATED)))}shutdown(){}}class vg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Eg{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0,42304);let s=this.i;const r=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ee(typeof s.accessToken=="string",31837,{l:s}),new _h(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class bg{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Tg{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new bg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ig{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ee(this.o===void 0,3512);const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=wg(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function Oo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Eo(r)===Eo(i)?J(r,i):Eo(r)?1:-1}return J(n.length,e.length)}const Ag=55296,Sg=57343;function Eo(n){const e=n.charCodeAt(0);return e>=Ag&&e<=Sg}function jn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="__name__";class Ye{constructor(e,t,s){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&H(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ye.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const s=Ye.isNumericId(e),r=Ye.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):Oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class re extends Ye{construct(e,t,s){return new re(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new re(t)}static emptyPath(){return new re([])}}const Pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Ye{construct(e,t,s){return new Ie(e,t,s)}static isValidIdentifier(e){return Pg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===El}static keyField(){return new Ie([El])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new $(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new $(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(re.fromString(e))}static fromName(e){return new B(re.fromString(e).popFirst(5))}static empty(){return new B(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,e,t){if(!t)throw new $(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kg(n,e,t,s){if(e===!0&&s===!0)throw new $(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bl(n){if(!B.isDocumentKey(n))throw new $(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tl(n){if(B.isDocumentKey(n))throw new $(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Eh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_a(n);throw new $(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Js(n,e){if(!Eh(n))throw new $(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new $(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-62135596800,wl=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*wl);return new ie(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Il)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wl}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Js(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Il;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:de("string",ie._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ie(0,0))}static max(){return new z(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=-1;function Rg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=z.fromTimestamp(s===1e9?new ie(t+1,0):new ie(t,s));return new Bt(r,B.empty(),e)}function Cg(n){return new Bt(n.readTime,n.key,xs)}class Bt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Bt(z.min(),B.empty(),xs)}static max(){return new Bt(z.max(),B.empty(),xs)}}function Dg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Vg)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,s)=>{t(e)}))}static reject(e){return new R(((t,s)=>{s(e)}))}static waitFor(e){return new R(((t,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&t()}),(l=>s(l)))})),a=!0,i===r&&t()}))}static or(e){let t=R.resolve(!1);for(const s of e)t=t.next((r=>r?R.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new R(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((f=>{a[h]=f,++c,c===i&&s(a)}),(f=>r(f)))}}))}static doWhile(e,t){return new R(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Ng(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function es(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=-1;function _i(n){return n==null}function zr(n){return n===0&&1/n==-1/0}function xg(n){return typeof n=="number"&&Number.isInteger(n)&&!zr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="";function Lg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Al(e)),e=Og(n.get(t),e);return Al(e)}function Og(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case bh:t+="";break;default:t+=i}}return t}function Al(n){return n+bh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Te.RED,this.left=r??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Te(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Te.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pl(this.data.getIterator())}getIteratorFrom(e){return new Pl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Pl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new He([])}unionWith(e){let t=new _e(Ie.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ih("Invalid base64 string: "+i):i}})(e);return new we(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(ee(!!n,39018),typeof n=="string"){let e=0;const t=$g.exec(n);if(ee(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="server_timestamp",Ah="__type__",Sh="__previous_value__",Ph="__local_write_time__";function Ea(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ah])==null?void 0:s.stringValue)===wh}function vi(n){const e=n.mapValue.fields[Sh];return Ea(e)?vi(e):e}function Ls(n){const e=Ut(n.mapValue.fields[Ph].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,s,r,i,a,c,l,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const Wr="(default)";class Os{constructor(e,t){this.projectId=e,this.database=t||Wr}static empty(){return new Os("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}function Bg(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new $(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="__type__",Ug="__max__",kr={mapValue:{}},Rh="__vector__",Gr="value";function qt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ea(n)?4:qg(n)?9007199254740991:Hg(n)?10:11:H(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=qt(n);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ls(n).isEqual(Ls(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Ut(r.timestampValue),c=Ut(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Ht(r.bytesValue).isEqual(Ht(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ue(r.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ue(r.integerValue)===ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ue(r.doubleValue),c=ue(i.doubleValue);return a===c?zr(a)===zr(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return jn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Sl(a)!==Sl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!it(a[l],c[l])))return!1;return!0})(n,e);default:return H(52216,{left:n})}}function $s(n,e){return(n.values||[]).find((t=>it(t,e)))!==void 0}function zn(n,e){if(n===e)return 0;const t=qt(n),s=qt(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ue(i.integerValue||i.doubleValue),l=ue(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return kl(n.timestampValue,e.timestampValue);case 4:return kl(Ls(n),Ls(e));case 5:return Oo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Ht(i),l=Ht(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=J(c[h],l[h]);if(f!==0)return f}return J(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=J(ue(i.latitude),ue(a.latitude));return c!==0?c:J(ue(i.longitude),ue(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Rl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var g,v,S,C;const c=i.fields||{},l=a.fields||{},h=(g=c[Gr])==null?void 0:g.arrayValue,f=(v=l[Gr])==null?void 0:v.arrayValue,m=J(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((C=f==null?void 0:f.values)==null?void 0:C.length)||0);return m!==0?m:Rl(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===kr.mapValue&&a===kr.mapValue)return 0;if(i===kr.mapValue)return 1;if(a===kr.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const g=Oo(l[m],f[m]);if(g!==0)return g;const v=zn(c[l[m]],h[f[m]]);if(v!==0)return v}return J(l.length,f.length)})(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function kl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Ut(n),s=Ut(e),r=J(t.seconds,s.seconds);return r!==0?r:J(t.nanos,s.nanos)}function Rl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=zn(t[r],s[r]);if(i)return i}return J(t.length,s.length)}function Wn(n){return $o(n)}function $o(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ut(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ht(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=$o(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${$o(t.fields[a])}`;return r+"}"})(n.mapValue):H(61005,{value:n})}function Mr(n){switch(qt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vi(n);return e?16+Mr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Mr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return En(s.fields,((i,a)=>{r+=i.length+Mr(a)})),r})(n.mapValue);default:throw H(13486,{value:n})}}function Fo(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Cl(n){return!!n&&"nullValue"in n}function Dl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nr(n){return!!n&&"mapValue"in n}function Hg(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[kh])==null?void 0:s.stringValue)===Rh}function ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ks(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ks(n.arrayValue.values[t]);return e}return{...n}}function qg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ug}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(t)}setAll(e){let t=Ie.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=ks(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Nr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Nr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){En(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Be(ks(this.value))}}function Ch(n){const e=[];return En(n.fields,((t,s)=>{const r=new Ie([t]);if(Nr(s)){const i=Ch(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,z.min(),z.min(),z.min(),Be.empty(),0)}static newFoundDocument(e,t,s,r){return new Re(e,1,t,z.min(),s,r,0)}static newNoDocument(e,t){return new Re(e,2,t,z.min(),z.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,z.min(),z.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.position=e,this.inclusive=t}}function Vl(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),t.key):s=zn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ml(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function jg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{}class me extends Dh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Wg(e,t,s):t==="array-contains"?new Qg(e,s):t==="in"?new Yg(e,s):t==="not-in"?new Jg(e,s):t==="array-contains-any"?new Xg(e,s):new me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Gg(e,s):new Kg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zn(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Dh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return Vh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vh(n){return n.op==="and"}function Mh(n){return zg(n)&&Vh(n)}function zg(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function Bo(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Wn(n.value);if(Mh(n))return n.filters.map((e=>Bo(e))).join(",");{const e=n.filters.map((t=>Bo(t))).join(",");return`${n.op}(${e})`}}function Nh(n,e){return n instanceof me?(function(s,r){return r instanceof me&&s.op===r.op&&s.field.isEqual(r.field)&&it(s.value,r.value)})(n,e):n instanceof ot?(function(s,r){return r instanceof ot&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&Nh(a,r.filters[c])),!0):!1})(n,e):void H(19439)}function xh(n){return n instanceof me?(function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(xh).join(" ,")+"}"})(n):"Filter"}class Wg extends me{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gg extends me{constructor(e,t){super(e,"in",t),this.keys=Lh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Kg extends me{constructor(e,t){super(e,"not-in",t),this.keys=Lh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class Qg extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&$s(t.arrayValue,this.value)}}class Yg extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$s(this.value.arrayValue,t)}}class Jg extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$s(this.value.arrayValue,t)}}class Xg extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$s(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Nl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Zg(n,e,t,s,r,i,a)}function Ta(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Bo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),_i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Wn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Wn(s))).join(",")),e.Te=t}return e.Te}function Ia(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ml(n.startAt,e.startAt)&&Ml(n.endAt,e.endAt)}function Uo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function ey(n,e,t,s,r,i,a,c){return new Ei(n,e,t,s,r,i,a,c)}function wa(n){return new Ei(n)}function xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ty(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ny(n){return n.collectionGroup!==null}function Rs(n){const e=G(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _e(Ie.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Qr(i,s))})),t.has(Ie.keyField().canonicalString())||e.Ee.push(new Qr(Ie.keyField(),s))}return e.Ee}function et(n){const e=G(n);return e.Ie||(e.Ie=sy(e,Rs(n))),e.Ie}function sy(n,e){if(n.limitType==="F")return Nl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Qr(r.field,i)}));const t=n.endAt?new Kr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Kr(n.startAt.position,n.startAt.inclusive):null;return Nl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ho(n,e,t){return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return Ia(et(n),et(e))&&n.limitType===e.limitType}function Oh(n){return`${Ta(et(n))}|lt:${n.limitType}`}function Cn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>xh(r))).join(", ")}]`),_i(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Wn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Wn(r))).join(",")),`Target(${s})`})(et(n))}; limitType=${n.limitType})`}function Ti(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):B.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Rs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,l){const h=Vl(a,c,l);return a.inclusive?h<=0:h<0})(s.startAt,Rs(s),r)||s.endAt&&!(function(a,c,l){const h=Vl(a,c,l);return a.inclusive?h>=0:h>0})(s.endAt,Rs(s),r))})(n,e)}function ry(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $h(n){return(e,t)=>{let s=!1;for(const r of Rs(n)){const i=iy(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function iy(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?zn(l,h):H(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return H(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Th(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new ce(B.comparator);function yt(){return oy}const Fh=new ce(B.comparator);function Is(...n){let e=Fh;for(const t of n)e=e.insert(t.key,t);return e}function Bh(n){let e=Fh;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function sn(){return Cs()}function Uh(){return Cs()}function Cs(){return new bn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ay=new ce(B.comparator),cy=new _e(B.comparator);function X(...n){let e=cy;for(const t of n)e=e.add(t);return e}const ly=new _e(J);function uy(){return ly}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zr(e)?"-0":e}}function Hh(n){return{integerValue:""+n}}function hy(n,e){return xg(e)?Hh(e):Aa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this._=void 0}}function dy(n,e,t){return n instanceof Yr?(function(r,i){const a={fields:{[Ah]:{stringValue:wh},[Ph]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ea(i)&&(i=vi(i)),i&&(a.fields[Sh]=i),{mapValue:a}})(t,e):n instanceof Fs?jh(n,e):n instanceof Bs?zh(n,e):(function(r,i){const a=qh(r,i),c=Ll(a)+Ll(r.Ae);return Fo(a)&&Fo(r.Ae)?Hh(c):Aa(r.serializer,c)})(n,e)}function fy(n,e,t){return n instanceof Fs?jh(n,e):n instanceof Bs?zh(n,e):t}function qh(n,e){return n instanceof Jr?(function(s){return Fo(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Yr extends Ii{}class Fs extends Ii{constructor(e){super(),this.elements=e}}function jh(n,e){const t=Wh(e);for(const s of n.elements)t.some((r=>it(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Bs extends Ii{constructor(e){super(),this.elements=e}}function zh(n,e){let t=Wh(e);for(const s of n.elements)t=t.filter((r=>!it(r,s)));return{arrayValue:{values:t}}}class Jr extends Ii{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ll(n){return ue(n.integerValue||n.doubleValue)}function Wh(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function py(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Fs&&r instanceof Fs||s instanceof Bs&&r instanceof Bs?jn(s.elements,r.elements,it):s instanceof Jr&&r instanceof Jr?it(s.Ae,r.Ae):s instanceof Yr&&r instanceof Yr})(n.transform,e.transform)}class my{constructor(e,t){this.version=e,this.transformResults=t}}class dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Gh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qh(n.key,dt.none()):new Xs(n.key,n.data,dt.none());{const t=n.data,s=Be.empty();let r=new _e(Ie.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Tn(n.key,s,new He(r.toArray()),dt.none())}}function gy(n,e,t){n instanceof Xs?(function(r,i,a){const c=r.value.clone(),l=$l(r.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Tn?(function(r,i,a){if(!xr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=$l(r.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Kh(r)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ds(n,e,t,s){return n instanceof Xs?(function(i,a,c,l){if(!xr(i.precondition,a))return c;const h=i.value.clone(),f=Fl(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof Tn?(function(i,a,c,l){if(!xr(i.precondition,a))return c;const h=Fl(i.fieldTransforms,l,a),f=a.data;return f.setAll(Kh(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,s):(function(i,a,c){return xr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function yy(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=qh(s.transform,r||null);i!=null&&(t===null&&(t=Be.empty()),t.set(s.field,i))}return t||null}function Ol(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&jn(s,r,((i,a)=>py(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xs extends wi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tn extends wi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function $l(n,e,t){const s=new Map;ee(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,fy(a,c,t[r]))}return s}function Fl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,dy(i,a,e))}return s}class Qh extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _y extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&gy(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ds(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ds(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Uh();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const l=Gh(a,c);l!==null&&s.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(z.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&jn(this.mutations,e.mutations,((t,s)=>Ol(t,s)))&&jn(this.baseMutations,e.baseMutations,((t,s)=>Ol(t,s)))}}class Sa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){ee(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return ay})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Sa(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Z;function Ty(n){switch(n){case D.OK:return H(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Yh(n){if(n===void 0)return gt("GRPC error has no .code"),D.UNKNOWN;switch(n){case he.OK:return D.OK;case he.CANCELLED:return D.CANCELLED;case he.UNKNOWN:return D.UNKNOWN;case he.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case he.INTERNAL:return D.INTERNAL;case he.UNAVAILABLE:return D.UNAVAILABLE;case he.UNAUTHENTICATED:return D.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case he.NOT_FOUND:return D.NOT_FOUND;case he.ALREADY_EXISTS:return D.ALREADY_EXISTS;case he.PERMISSION_DENIED:return D.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case he.ABORTED:return D.ABORTED;case he.OUT_OF_RANGE:return D.OUT_OF_RANGE;case he.UNIMPLEMENTED:return D.UNIMPLEMENTED;case he.DATA_LOSS:return D.DATA_LOSS;default:return H(39323,{code:n})}}(Z=he||(he={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new $t([4294967295,4294967295],0);function Bl(n){const e=Iy().encode(n),t=new hh;return t.update(e),new Uint8Array(t.digest())}function Ul(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([t,s],0),new $t([r,i],0)]}class Pa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ws(`Invalid padding: ${t}`);if(s<0)throw new ws(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ws(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=$t.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply($t.fromNumber(s)));return r.compare(wy)===1&&(r=new $t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Bl(e),[s,r]=Ul(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Pa(i,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Bl(e),[s,r]=Ul(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ai(z.min(),r,new ce(J),yt(),X())}}class Zs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Zs(s,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class Jh{constructor(e,t){this.targetId=e,this.Ce=t}}class Xh{constructor(e,t,s=we.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Hl{constructor(){this.ve=0,this.Fe=ql(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),s=X();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:H(38017,{changeType:i})}})),new Zs(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=ql()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ee(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ay{constructor(e){this.Ge=e,this.ze=new Map,this.je=yt(),this.Je=Rr(),this.He=Rr(),this.Ze=new ce(J)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:H(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Uo(i))if(s===0){const a=new B(i.path);this.et(t,a,Re.newNoDocument(a,z.min()))}else ee(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Ht(s).toUint8Array()}catch(l){if(l instanceof Ih)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Pa(a,r,i)}catch(l){return hn(l instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Uo(c.target)){const l=new B(c.target.path);this.Et(l).has(a)||this.It(a,l)||this.et(a,l,Re.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=X();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ai(e,t,this.Ze,this.je,s);return this.je=yt(),this.Je=Rr(),this.He=Rr(),this.Ze=new ce(J),r}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new _e(J),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new _e(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Rr(){return new ce(B.comparator)}function ql(){return new ce(B.comparator)}const Sy={asc:"ASCENDING",desc:"DESCENDING"},Py={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ky={and:"AND",or:"OR"};class Ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qo(n,e){return n.useProto3Json||_i(e)?e:{value:e}}function Xr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cy(n,e){return Xr(n,e.toTimestamp())}function tt(n){return ee(!!n,49232),z.fromTimestamp((function(t){const s=Ut(t);return new ie(s.seconds,s.nanos)})(n))}function ka(n,e){return jo(n,e).canonicalString()}function jo(n,e){const t=(function(r){return new re(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ed(n){const e=re.fromString(n);return ee(id(e),10190,{key:e.toString()}),e}function zo(n,e){return ka(n.databaseId,e.path)}function bo(n,e){const t=ed(e);if(t.get(1)!==n.databaseId.projectId)throw new $(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(nd(t))}function td(n,e){return ka(n.databaseId,e)}function Dy(n){const e=ed(n);return e.length===4?re.emptyPath():nd(e)}function Wo(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nd(n){return ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function jl(n,e,t){return{name:zo(n,e),fields:t.value.mapValue.fields}}function Vy(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(ee(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?D.UNKNOWN:Yh(h.code);return new $(f,h.message||"")})(a);t=new Xh(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=bo(n,s.document.name),i=tt(s.document.updateTime),a=s.document.createTime?tt(s.document.createTime):z.min(),c=new Be({mapValue:{fields:s.document.fields}}),l=Re.newFoundDocument(r,i,a,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new Lr(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=bo(n,s.document),i=s.readTime?tt(s.readTime):z.min(),a=Re.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Lr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=bo(n,s.document),i=s.removedTargetIds||[];t=new Lr([],i,r,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new by(r,i),c=s.targetId;t=new Jh(c,a)}}return t}function My(n,e){let t;if(e instanceof Xs)t={update:jl(n,e.key,e.value)};else if(e instanceof Qh)t={delete:zo(n,e.key)};else if(e instanceof Tn)t={update:jl(n,e.key,e.data),updateMask:Hy(e.fieldMask)};else{if(!(e instanceof _y))return H(16599,{dt:e.type});t={verify:zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof Yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Cy(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)})(n,e.precondition)),t}function Ny(n,e){return n&&n.length>0?(ee(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?tt(r.updateTime):tt(i);return a.isEqual(z.min())&&(a=tt(i)),new my(a,r.transformResults||[])})(t,e)))):[]}function xy(n,e){return{documents:[td(n,e.path)]}}function Ly(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=td(n,r);const i=(function(h){if(h.length!==0)return rd(ot.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Dn(g.field),direction:Fy(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=qo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:r}}function Oy(n){let e=Dy(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){ee(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const g=sd(m);return g instanceof ot&&Mh(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((g=>(function(S){return new Qr(Vn(S.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,_i(g)?null:g})(t.limit));let l=null;t.startAt&&(l=(function(m){const g=!!m.before,v=m.values||[];return new Kr(v,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const g=!m.before,v=m.values||[];return new Kr(v,g)})(t.endAt)),ey(e,r,a,i,c,"F",l,h)}function $y(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Vn(t.unaryFilter.field);return me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Vn(t.unaryFilter.field);return me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vn(t.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}})(n):n.fieldFilter!==void 0?(function(t){return me.create(Vn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((s=>sd(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return H(1026)}})(t.compositeFilter.op))})(n):H(30097,{filter:n})}function Fy(n){return Sy[n]}function By(n){return Py[n]}function Uy(n){return ky[n]}function Dn(n){return{fieldPath:n.canonicalString()}}function Vn(n){return Ie.fromServerFormat(n.fieldPath)}function rd(n){return n instanceof me?(function(t){if(t.op==="=="){if(Dl(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NAN"}};if(Cl(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dl(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NOT_NAN"}};if(Cl(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dn(t.field),op:By(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const s=t.getFilters().map((r=>rd(r)));return s.length===1?s[0]:{compositeFilter:{op:Uy(t.op),filters:s}}})(n):H(54877,{filter:n})}function Hy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function od(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,s,r,i=z.min(),a=z.min(),c=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.yt=e}}function jy(n){const e=Oy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.bn=new Wy}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Bt.min())}updateCollectionGroup(e,t,s){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Wy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new _e(re.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ad=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(ad,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Gn(0)}static ar(){return new Gn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="LruGarbageCollector",Gy=1048576;function Gl([n,e],[t,s]){const r=J(n,t);return r===0?J(e,s):r}class Ky{constructor(e){this.Pr=e,this.buffer=new _e(Gl),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Qy{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(Wl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){es(t)?L(Wl,"Ignoring IndexedDB error during garbage collection: ",t):await Zn(t)}await this.Ar(3e5)}))}}class Yy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(yi.ce);const s=new Ky(t);return this.Vr.forEachTarget(e,(r=>s.Ir(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Ir(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(zl)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zl):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r)))).next((m=>(s=m,c=Date.now(),this.removeTargets(e,s,t)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,s)))).next((m=>(h=Date.now(),Rn()<=Y.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:m}))))}}function Jy(n,e){return new Yy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.changes=new bn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?R.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ds(s.mutation,r,He.empty(),ie.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,X()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=X()){const r=sn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=Is();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=sn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,X())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let i=yt();const a=Cs(),c=(function(){return Cs()})();return t.forEach(((l,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Tn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ds(f.mutation,h,f.mutation.getFieldMask(),ie.now())):a.set(h.key,He.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>c.set(h,new Zy(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Cs();let r=new ce(((a,c)=>a-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=s.get(l)||He.empty();f=c.applyToLocalView(h,f),s.set(l,f);const m=(r.get(c.batchId)||X()).add(l);r=r.insert(c.batchId,m)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=Uh();f.forEach((g=>{if(!i.has(g)){const v=Gh(t.get(g),s.get(g));v!==null&&m.set(g,v),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return R.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return ty(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ny(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):R.resolve(sn());let c=xs,l=i;return a.next((h=>R.forEach(h,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,X()))).next((f=>({batchId:c,changes:Bh(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=Is();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Is();return this.indexManager.getCollectionParents(e,i).next((c=>R.forEach(c,(l=>{const h=(function(m,g){return new Ei(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((m,g)=>{a=a.insert(m,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Re.newInvalidDocument(f)))}));let c=Is();return a.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Ds(f.mutation,h,He.empty(),ie.now()),Ti(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:tt(r.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:jy(r.bundledQuery),readTime:tt(r.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.overlays=new ce(B.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const s=sn();return R.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),R.resolve()}getOverlaysForCollection(e,t,s){const r=sn(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ce(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=sn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=r)););return R.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Ey(t,s));let i=this.Lr.get(t);i===void 0&&(i=X(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.kr=new _e(Ee.qr),this.Kr=new _e(Ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Ee(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ee(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new B(new re([])),s=new Ee(t,e),r=new Ee(t,e+1),i=[];return this.Kr.forEachInRange([s,r],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new B(new re([])),s=new Ee(t,e),r=new Ee(t,e+1);let i=X();return this.Kr.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ee(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return B.comparator(e.key,t.key)||J(e.Jr,t.Jr)}static Ur(e,t){return J(e.Jr,t.Jr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new _e(Ee.qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vy(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Hr=this.Hr.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?va:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ee(t,0),r=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Jr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _e(J);return t.forEach((r=>{const i=new Ee(r,0),a=new Ee(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(c=>{s=s.add(c.Jr)}))})),R.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const a=new Ee(new B(i),0);let c=new _e(J);return this.Hr.forEachWhile((l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.Jr)),!0)}),a),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){ee(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return R.forEach(t.mutations,(r=>{const i=new Ee(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Ee(t,0),r=this.Hr.firstAfterOrEqual(s);return R.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.ti=e,this.docs=(function(){return new ce(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return R.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let s=yt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))})),R.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=yt();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Dg(Cg(f),s)<=0||(r.has(f.key)||Ti(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,s,r){H(9500)}ni(e,t){return R.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new o_(this)}getSize(e){return R.resolve(this.size)}}class o_ extends Xy{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.persistence=e,this.ri=new bn((t=>Ta(t)),Ia),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.ii=0,this.si=new Ra,this.targetCount=0,this.oi=Gn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),R.waitFor(i).next((()=>r))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return R.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),R.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return R.resolve(s)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this._i={},this.overlays={},this.ai=new yi(0),this.ui=!1,this.ui=!0,this.ci=new s_,this.referenceDelegate=e(this),this.li=new a_(this),this.indexManager=new zy,this.remoteDocumentCache=(function(r){return new i_(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new qy(t),this.Pi=new t_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new r_(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){L("MemoryPersistence","Starting transaction:",e);const r=new c_(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ei(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ii(e,t){return R.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class c_ extends Mg{constructor(e){super(),this.currentSequenceNumber=e}}class Ca{constructor(e){this.persistence=e,this.Ri=new Ra,this.Ai=null}static Vi(e){return new Ca(e)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),R.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(s=>{const r=B.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,z.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Zr{constructor(e,t){this.persistence=e,this.fi=new bn((s=>Lg(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Jy(this,t)}static Vi(e,t){return new Zr(e,t)}Ti(){}Ei(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?R.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mr(e.data.value)),t}wr(e,t,s){return R.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return R.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=r}static Is(e,t){let s=X(),r=X();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Da(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Jp()?8:Ng(Ce())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new l_;return this.ys(e,t,a).next((c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Rn()<=Y.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Rn()<=Y.DEBUG&&L("QueryEngine","Query:",Cn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Rn()<=Y.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):R.resolve())}gs(e,t){if(xl(t))return R.resolve(null);let s=et(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Ho(t,null,"F"),s=et(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=X(...i);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((l=>{const h=this.Ss(t,c);return this.bs(t,h,a,l.readTime)?this.gs(e,Ho(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,s,r){return xl(t)||r.isEqual(z.min())?R.resolve(null):this.fs.getDocuments(e,s).next((i=>{const a=this.Ss(t,i);return this.bs(t,a,s,r)?R.resolve(null):(Rn()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cn(t)),this.Ds(e,a,t,Rg(r,xs)).next((c=>c)))}))}Ss(e,t){let s=new _e($h(e));return t.forEach(((r,i)=>{Ti(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Rn()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Cn(t)),this.fs.getDocumentsMatchingQuery(e,t,Bt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="LocalStore",h_=3e8;class d_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ce(J),this.Fs=new bn((i=>Ta(i)),Ia),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function f_(n,e,t,s){return new d_(n,e,t,s)}async function ld(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let l=X();for(const h of r){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function p_(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const m=h.batch,g=m.keys();let v=R.resolve();return g.forEach((S=>{v=v.next((()=>f.getEntry(l,S))).next((C=>{const V=h.docVersions.get(S);ee(V!==null,48541),C.version.compareTo(V)<0&&(m.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,m)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let l=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function ud(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function m_(n,e){const t=G(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((f,m)=>{const g=r.get(m);if(!g)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,m))));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(we.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,s)),r=r.insert(m,v),(function(C,V,O){return C.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=h_?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(g,v,f)&&c.push(t.li.updateTargetData(i,v))}));let l=yt(),h=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(g_(i,a,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!s.isEqual(z.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(f)}return R.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.vs=r,i)))}function g_(n,e,t){let s=X(),r=X();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=yt();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):L(Va,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:a,Ls:r}}))}function y_(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=va),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function __(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,R.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new Nt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Go(n,e,t){const s=G(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!es(a))throw a;L(Va,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function Kl(n,e,t){const s=G(n);let r=z.min(),i=X();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const m=G(l),g=m.Fs.get(f);return g!==void 0?R.resolve(m.vs.get(g)):m.li.getTargetData(h,f)})(s,a,et(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:z.min(),t?i:X()))).next((c=>(v_(s,ry(e),c),{documents:c,ks:i})))))}function v_(n,e,t){let s=n.Ms.get(e)||z.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class Ql{constructor(){this.activeTargetIds=uy()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E_{constructor(){this.vo=new Ql,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ql,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="ConnectivityMonitor";class Jl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(Yl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(Yl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr=null;function Ko(){return Cr===null?Cr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cr++,"0x"+Cr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="RestConnection",T_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class I_{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Wr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Ko(),c=this.Qo(e,t.toUriEncodedString());L(To,`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,r,i);const{host:h}=new URL(c),f=Ys(h);return this.zo(e,c,l,s,f).then((m=>(L(To,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw hn(To,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",s),m}))}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=T_[e];let r=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection",vs=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class xn extends I_{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xn.c_){const e=mh();vs(e,ph.STAT_EVENT,(t=>{t.stat===Lo.PROXY?L(Pe,"STAT_EVENT: detected buffering proxy"):t.stat===Lo.NOPROXY&&L(Pe,"STAT_EVENT: detected no buffering proxy")})),xn.c_=!0}}zo(e,t,s,r,i){const a=Ko();return new Promise(((c,l)=>{const h=new dh;h.setWithCredentials(!0),h.listenOnce(fh.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Vr.NO_ERROR:const m=h.getResponseJson();L(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Vr.TIMEOUT:L(Pe,`RPC '${e}' ${a} timed out`),l(new $(D.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const g=h.getStatus();if(L(Pe,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const C=(function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN})(S.status);l(new $(C,S.message))}else l(new $(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new $(D.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(Pe,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(r);L(Pe,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=Ko(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");L(Pe,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=a.createWebChannel(h,c);this.E_(f);let m=!1,g=!1;const v=new w_({Jo:S=>{g?L(Pe,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(m||(L(Pe,`Opening RPC '${e}' stream ${r} transport.`),f.open(),m=!0),L(Pe,`RPC '${e}' stream ${r} sending:`,S),f.send(S))},Ho:()=>f.close()});return vs(f,Ts.EventType.OPEN,(()=>{g||(L(Pe,`RPC '${e}' stream ${r} transport opened.`),v.i_())})),vs(f,Ts.EventType.CLOSE,(()=>{g||(g=!0,L(Pe,`RPC '${e}' stream ${r} transport closed`),v.o_(),this.I_(f))})),vs(f,Ts.EventType.ERROR,(S=>{g||(g=!0,hn(Pe,`RPC '${e}' stream ${r} transport errored. Name:`,S.name,"Message:",S.message),v.o_(new $(D.UNAVAILABLE,"The operation could not be completed")))})),vs(f,Ts.EventType.MESSAGE,(S=>{var C;if(!g){const V=S.data[0];ee(!!V,16349);const O=V,M=(O==null?void 0:O.error)||((C=O[0])==null?void 0:C.error);if(M){L(Pe,`RPC '${e}' stream ${r} received error:`,M);const F=M.status;let j=(function(b){const y=he[b];if(y!==void 0)return Yh(y)})(F),K=M.message;F==="NOT_FOUND"&&K.includes("database")&&K.includes("does not exist")&&K.includes(this.databaseId.database)&&hn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=D.INTERNAL,K="Unknown error status: "+F+" with message "+M.message),g=!0,v.o_(new $(j,K)),f.close()}else L(Pe,`RPC '${e}' stream ${r} received:`,V),v.__(V)}})),xn.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){return new xn(n)}function Io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){return new Ry(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.c_=!1;class hd{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="PersistentStream";class dd{constructor(e,t,s,r,i,a,c,l){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new $(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return L(Xl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(L(Xl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class S_ extends dd{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vy(this.serializer,e),s=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?tt(a.readTime):z.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Wo(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Uo(l)?{documents:xy(i,l)}:{query:Ly(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zh(i,a.resumeToken);const h=qo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Xr(i,a.snapshotVersion.toTimestamp());const h=qo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=$y(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.q_(t)}}class P_ extends dd{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ny(e.writeResults,e.commitTime),s=tt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Wo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>My(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{}class R_ extends k_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,jo(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(D.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,jo(t,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function C_(n,e,t,s){return new R_(n,e,t,s)}class D_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(gt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="RemoteStore";class V_{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{In(this)&&(L(fn,"Restarting streams for network reachability change."),await(async function(l){const h=G(l);h.Ia.add(4),await er(h),h.Va.set("Unknown"),h.Ia.delete(4),await Pi(h)})(this))}))})),this.Va=new D_(s,r)}}async function Pi(n){if(In(n))for(const e of n.Ra)await e(!0)}async function er(n){for(const e of n.Ra)await e(!1)}function fd(n,e){const t=G(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),La(t)?xa(t):ts(t).O_()&&Na(t,e))}function Ma(n,e){const t=G(n),s=ts(t);t.Ea.delete(e),s.O_()&&pd(t,e),t.Ea.size===0&&(s.O_()?s.L_():In(t)&&t.Va.set("Unknown"))}function Na(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ts(n).Z_(e)}function pd(n,e){n.da.$e(e),ts(n).X_(e)}function xa(n){n.da=new Ay({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ts(n).start(),n.Va.ua()}function La(n){return In(n)&&!ts(n).x_()&&n.Ea.size>0}function In(n){return G(n).Ia.size===0}function md(n){n.da=void 0}async function M_(n){n.Va.set("Online")}async function N_(n){n.Ea.forEach(((e,t)=>{Na(n,e)}))}async function x_(n,e){md(n),La(n)?(n.Va.ha(e),xa(n)):n.Va.set("Unknown")}async function L_(n,e,t){if(n.Va.set("Online"),e instanceof Xh&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ea.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ea.delete(c),r.da.removeTarget(c))})(n,e)}catch(s){L(fn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ei(n,s)}else if(e instanceof Lr?n.da.Xe(e):e instanceof Jh?n.da.st(e):n.da.tt(e),!t.isEqual(z.min()))try{const s=await ud(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),pd(i,l);const m=new Nt(f.target,l,h,f.sequenceNumber);Na(i,m)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){L(fn,"Failed to raise snapshot:",s),await ei(n,s)}}async function ei(n,e,t){if(!es(e))throw e;n.Ia.add(1),await er(n),n.Va.set("Offline"),t||(t=()=>ud(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(fn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Pi(n)}))}function gd(n,e){return e().catch((t=>ei(n,t,e)))}async function ki(n){const e=G(n),t=jt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:va;for(;O_(e);)try{const r=await y_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,$_(e,r)}catch(r){await ei(e,r)}yd(e)&&_d(e)}function O_(n){return In(n)&&n.Ta.length<10}function $_(n,e){n.Ta.push(e);const t=jt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function yd(n){return In(n)&&!jt(n).x_()&&n.Ta.length>0}function _d(n){jt(n).start()}async function F_(n){jt(n).ra()}async function B_(n){const e=jt(n);for(const t of n.Ta)e.ea(t.mutations)}async function U_(n,e,t){const s=n.Ta.shift(),r=Sa.from(s,e,t);await gd(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ki(n)}async function H_(n,e){e&&jt(n).Y_&&await(async function(s,r){if((function(a){return Ty(a)&&a!==D.ABORTED})(r.code)){const i=s.Ta.shift();jt(s).B_(),await gd(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ki(s)}})(n,e),yd(n)&&_d(n)}async function Zl(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(fn,"RemoteStore received new credentials");const s=In(t);t.Ia.add(3),await er(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Pi(t)}async function q_(n,e){const t=G(n);e?(t.Ia.delete(2),await Pi(t)):e||(t.Ia.add(2),await er(t),t.Va.set("Unknown"))}function ts(n){return n.ma||(n.ma=(function(t,s,r){const i=G(t);return i.sa(),new S_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:M_.bind(null,n),Yo:N_.bind(null,n),t_:x_.bind(null,n),H_:L_.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),La(n)?xa(n):n.Va.set("Unknown")):(await n.ma.stop(),md(n))}))),n.ma}function jt(n){return n.fa||(n.fa=(function(t,s,r){const i=G(t);return i.sa(),new P_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:F_.bind(null,n),t_:H_.bind(null,n),ta:B_.bind(null,n),na:U_.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ki(n)):(await n.fa.stop(),n.Ta.length>0&&(L(fn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new Oa(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(n,e){if(gt("AsyncQueue",`${e}: ${n}`),es(n))return new $(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{static emptySet(e){return new Ln(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Is(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ln;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.ga=new ce(B.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Kn{constructor(e,t,s,r,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Kn(e,t,Ln.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class z_{constructor(){this.queries=tu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=G(t),i=r.queries;r.queries=tu(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(s)}))})(this,new $(D.ABORTED,"Firestore shutting down"))}}function tu(){return new bn((n=>Oh(n)),bi)}async function vd(n,e){const t=G(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new j_,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=$a(a,`Initialization of query '${Cn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Fa(t)}async function Ed(n,e){const t=G(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function W_(n,e){const t=G(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(r)&&(s=!0);a.wa=r}}s&&Fa(t)}function G_(n,e,t){const s=G(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function Fa(n){n.Ca.forEach((e=>{e.next()}))}var Qo,nu;(nu=Qo||(Qo={})).Ma="default",nu.Cache="cache";class bd{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Kn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.key=e}}class Id{constructor(e){this.key=e}}class K_{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=$h(e),this.tu=new Ln(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new eu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,m)=>{const g=r.get(f),v=Ti(this.query,m)?m:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let V=!1;g&&v?g.data.isEqual(v.data)?S!==C&&(s.track({type:3,doc:v}),V=!0):this.su(g,v)||(s.track({type:2,doc:v}),V=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!g&&v?(s.track({type:0,doc:v}),V=!0):g&&!v&&(s.track({type:1,doc:g}),V=!0,(l||h)&&(c=!0)),V&&(v?(a=a.add(v),i=C?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:a,iu:s,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,m)=>(function(v,S){const C=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:V})}};return C(v)-C(S)})(f.type,m.type)||this.eu(f.doc,m.doc))),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],l=this.Ya.size===0&&this.current&&!r?1:0,h=l!==this.Xa;return this.Xa=l,a.length!==0||h?{snapshot:new Kn(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new eu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Id(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Td(s))})),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ba="SyncEngine";class Q_{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Y_{constructor(e){this.key=e,this.hu=!1}}class J_{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new bn((c=>Oh(c)),bi),this.Eu=new Map,this.Iu=new Set,this.Ru=new ce(B.comparator),this.Au=new Map,this.Vu=new Ra,this.du={},this.mu=new Map,this.fu=Gn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function X_(n,e,t=!0){const s=Rd(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await wd(s,e,t,!0),r}async function Z_(n,e){const t=Rd(n);await wd(t,e,!0,!1)}async function wd(n,e,t,s){const r=await __(n.localStore,et(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await ev(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&fd(n.remoteStore,r),c}async function ev(n,e,t,s,r){n.pu=(m,g,v)=>(async function(C,V,O,M){let F=V.view.ru(O);F.bs&&(F=await Kl(C.localStore,V.query,!1).then((({documents:b})=>V.view.ru(b,F))));const j=M&&M.targetChanges.get(V.targetId),K=M&&M.targetMismatches.get(V.targetId)!=null,q=V.view.applyChanges(F,C.isPrimaryClient,j,K);return ru(C,V.targetId,q.au),q.snapshot})(n,m,g,v);const i=await Kl(n.localStore,e,!0),a=new K_(e,i.ks),c=a.ru(i.documents),l=Zs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,l);ru(n,t,h.au);const f=new Q_(e,t,a);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot}async function tv(n,e,t){const s=G(n),r=s.Tu.get(e),i=s.Eu.get(r.targetId);if(i.length>1)return s.Eu.set(r.targetId,i.filter((a=>!bi(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Go(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Ma(s.remoteStore,r.targetId),Yo(s,r.targetId)})).catch(Zn)):(Yo(s,r.targetId),await Go(s.localStore,r.targetId,!0))}async function nv(n,e){const t=G(n),s=t.Tu.get(e),r=t.Eu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ma(t.remoteStore,s.targetId))}async function sv(n,e,t){const s=uv(n);try{const r=await(function(a,c){const l=G(a),h=ie.now(),f=c.reduce(((v,S)=>v.add(S.key)),X());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let S=yt(),C=X();return l.xs.getEntries(v,f).next((V=>{S=V,S.forEach(((O,M)=>{M.isValidDocument()||(C=C.add(O))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,S))).next((V=>{m=V;const O=[];for(const M of c){const F=yy(M,m.get(M.key).overlayedDocument);F!=null&&O.push(new Tn(M.key,F,Ch(F.value.mapValue),dt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,O,c)})).next((V=>{g=V;const O=V.applyToLocalDocumentSet(m,C);return l.documentOverlayCache.saveOverlays(v,V.batchId,O)}))})).then((()=>({batchId:g.batchId,changes:Bh(m)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,l){let h=a.du[a.currentUser.toKey()];h||(h=new ce(J)),h=h.insert(c,l),a.du[a.currentUser.toKey()]=h})(s,r.batchId,t),await tr(s,r.changes),await ki(s.remoteStore)}catch(r){const i=$a(r,"Failed to persist write");t.reject(i)}}async function Ad(n,e){const t=G(n);try{const s=await m_(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?ee(a.hu,14607):r.removedDocuments.size>0&&(ee(a.hu,42227),a.hu=!1))})),await tr(t,s,e)}catch(s){await Zn(s)}}function su(n,e,t){const s=G(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const l=G(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,m)=>{for(const g of m.Sa)g.va(c)&&(h=!0)})),h&&Fa(l)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rv(n,e,t){const s=G(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new ce(B.comparator);a=a.insert(i,Re.newNoDocument(i,z.min()));const c=X().add(i),l=new Ai(z.min(),new Map,new ce(J),a,c);await Ad(s,l),s.Ru=s.Ru.remove(i),s.Au.delete(e),Ua(s)}else await Go(s.localStore,e,!1).then((()=>Yo(s,e,t))).catch(Zn)}async function iv(n,e){const t=G(n),s=e.batch.batchId;try{const r=await p_(t.localStore,e);Pd(t,s,null),Sd(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await tr(t,r)}catch(r){await Zn(r)}}async function ov(n,e,t){const s=G(n);try{const r=await(function(a,c){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((m=>(ee(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);Pd(s,e,t),Sd(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await tr(s,r)}catch(r){await Zn(r)}}function Sd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Pd(n,e,t){const s=G(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Yo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||kd(n,s)}))}function kd(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ma(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ua(n))}function ru(n,e,t){for(const s of t)s instanceof Td?(n.Vu.addReference(s.key,e),av(n,s)):s instanceof Id?(L(Ba,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||kd(n,s.key)):H(19791,{wu:s})}function av(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(L(Ba,"New document in limbo: "+t),n.Iu.add(s),Ua(n))}function Ua(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new B(re.fromString(e)),s=n.fu.next();n.Au.set(s,new Y_(t)),n.Ru=n.Ru.insert(t,s),fd(n.remoteStore,new Nt(et(wa(t.path)),s,"TargetPurposeLimboResolution",yi.ce))}}async function tr(n,e,t){const s=G(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,l)=>{a.push(s.pu(l,e,t).then((h=>{var f;if((h||t)&&s.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){r.push(h);const m=Da.Is(l.targetId,h);i.push(m)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(l,h){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(h,(g=>R.forEach(g.Ts,(v=>f.persistence.referenceDelegate.addReference(m,g.targetId,v))).next((()=>R.forEach(g.Es,(v=>f.persistence.referenceDelegate.removeReference(m,g.targetId,v)))))))))}catch(m){if(!es(m))throw m;L(Va,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const v=f.vs.get(g),S=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(g,C)}}})(s.localStore,i))}async function cv(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(Ba,"User change. New user:",e.toKey());const s=await ld(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new $(D.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await tr(t,s.Ns)}}function lv(n,e){const t=G(n),s=t.Au.get(e);if(s&&s.hu)return X().add(s.key);{let r=X();const i=t.Eu.get(e);if(!i)return r;for(const a of i){const c=t.Tu.get(a);r=r.unionWith(c.view.nu)}return r}}function Rd(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ad.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rv.bind(null,e),e.Pu.H_=W_.bind(null,e.eventManager),e.Pu.yu=G_.bind(null,e.eventManager),e}function uv(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ov.bind(null,e),e}class ti{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return f_(this.persistence,new u_,e.initialUser,this.serializer)}Cu(e){return new cd(Ca.Vi,this.serializer)}Du(e){return new E_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ti.provider={build:()=>new ti};class hv extends ti{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ee(this.persistence.referenceDelegate instanceof Zr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Qy(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new cd((s=>Zr.Vi(s,t)),this.serializer)}}class Jo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>su(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cv.bind(null,this.syncEngine),await q_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new z_})()}createDatastore(e){const t=Si(e.databaseInfo.databaseId),s=A_(e.databaseInfo);return C_(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,c){return new V_(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>su(this.syncEngine,t,0)),(function(){return Jl.v()?new Jl:new b_})())}createSyncEngine(e,t){return(function(r,i,a,c,l,h,f){const m=new J_(r,i,a,c,l,h);return f&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=G(r);L(fn,"RemoteStore shutting down."),i.Ia.add(5),await er(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Jo.provider={build:()=>new Jo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class dv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=ke.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{L(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(L(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=$a(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function wo(n,e){n.asyncQueue.verifyOperationInProgress(),L(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await ld(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fv(n);L(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Zl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Zl(e.remoteStore,r))),n._onlineComponents=e}async function fv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(zt,"Using user provided OfflineComponentProvider");try{await wo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===D.FAILED_PRECONDITION||r.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await wo(n,new ti)}}else L(zt,"Using default OfflineComponentProvider"),await wo(n,new hv(void 0));return n._offlineComponents}async function Dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(zt,"Using user provided OnlineComponentProvider"),await iu(n,n._uninitializedComponentsProvider._online)):(L(zt,"Using default OnlineComponentProvider"),await iu(n,new Jo))),n._onlineComponents}function pv(n){return Dd(n).then((e=>e.syncEngine))}async function Vd(n){const e=await Dd(n),t=e.eventManager;return t.onListen=X_.bind(null,e.syncEngine),t.onUnlisten=tv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nv.bind(null,e.syncEngine),t}function mv(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new Cd({next:g=>{f.Nu(),a.enqueueAndForget((()=>Ed(i,m)));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new $(D.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new $(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new bd(wa(c.path),f,{includeMetadataChanges:!0,qa:!0});return vd(i,m)})(await Vd(n),n.asyncQueue,e,t,s))),s.promise}function gv(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new Cd({next:g=>{f.Nu(),a.enqueueAndForget((()=>Ed(i,m))),g.fromCache&&l.source==="server"?h.reject(new $(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new bd(c,f,{includeMetadataChanges:!0,qa:!0});return vd(i,m)})(await Vd(n),n.asyncQueue,e,t,s))),s.promise}function yv(n,e){const t=new ht;return n.asyncQueue.enqueueAndForget((async()=>sv(await pv(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="ComponentProvider",ou=new Map;function vv(n,e,t,s,r){return new Fg(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Md(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="firestore.googleapis.com",au=!0;class cu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nd,this.ssl=au}else this.host=e.host,this.ssl=e.ssl??au;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ad;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gy)throw new $(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Md(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ri{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _g;switch(s.type){case"firstParty":return new Tg(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ou.get(t);s&&(L(_v,"Removing Datastore"),ou.delete(t),s.terminate())})(this),Promise.resolve()}}function Ev(n,e,t,s={}){var h;n=dn(n,Ri);const r=Ys(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&rh(`https://${c}`),i.host!==Nd&&i.host!==c&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:r,emulatorOptions:s};if(!cn(l,a)&&(n._setSettings(l),s.mockUserToken)){let f,m;if(typeof s.mockUserToken=="string")f=s.mockUserToken,m=ke.MOCK_USER;else{f=jp(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new $(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ke(g)}n._authCredentials=new vg(new _h(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class ge{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Js(t,ge._jsonSchema))return new ge(e,s||null,new B(re.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:de("string",ge._jsonSchemaVersion),referencePath:de("string")};class Ft extends Ci{constructor(e,t,s){super(e,t,wa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new B(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function bv(n,e,...t){if(n=Le(n),vh("collection","path",e),n instanceof Ri){const s=re.fromString(e,...t);return Tl(s),new Ft(n,null,s)}{if(!(n instanceof ge||n instanceof Ft))throw new $(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return Tl(s),new Ft(n.firestore,null,s)}}function xd(n,e,...t){if(n=Le(n),arguments.length===1&&(e=ya.newId()),vh("doc","path",e),n instanceof Ri){const s=re.fromString(e,...t);return bl(s),new ge(n,null,new B(s))}{if(!(n instanceof ge||n instanceof Ft))throw new $(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return bl(s),new ge(n.firestore,n instanceof Ft?n.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="AsyncQueue";class uu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hd(this,"async_queue_retry"),this._c=()=>{const s=Io();s&&L(lu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ht;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!es(e))throw e;L(lu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,gt("INTERNAL UNHANDLED ERROR: ",hu(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Oa.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&H(47125,{Pc:hu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Di extends Ri{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new uu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uu(e),this._firestoreClient=void 0,await e}}}function Tv(n,e){const t=typeof n=="object"?n:ch(),s=typeof n=="string"?n:Wr,r=ma(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Hp("firestore");i&&Ev(r,...i)}return r}function Ha(n){if(n._terminated)throw new $(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Iv(n),n._firestoreClient}function Iv(n){var s,r,i,a;const e=n._freezeSettings(),t=vv(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ue(we.fromBase64String(e))}catch(t){throw new $(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ue(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Js(e,Ue._jsonSchema))return Ue.fromBase64String(e.bytes)}}Ue._jsonSchemaVersion="firestore/bytes/1.0",Ue._jsonSchema={type:de("string",Ue._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(Js(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:de("string",nt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Js(e,je._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new je(e.vectorValues);throw new $(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}je._jsonSchemaVersion="firestore/vectorValue/1.0",je._jsonSchema={type:de("string",je._jsonSchemaVersion),vectorValues:de("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=/^__.*__$/;class Av{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xs(e,this.data,t,this.fieldTransforms)}}function $d(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:n})}}class qa{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new qa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ni(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if($d(this.dataSource)&&wv.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Sv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Si(e)}A(e,t,s,r=!1){return new qa({dataSource:e,methodName:t,targetDoc:s,path:Ie.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pv(n){const e=n._freezeSettings(),t=Si(n._databaseId);return new Sv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kv(n,e,t,s,r,i={}){const a=n.A(i.merge||i.mergeFields?2:0,e,t,r);Hd("Data must be an object, but it was:",a,s);const c=Bd(s,a);let l,h;if(i.merge)l=new He(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ja(e,m,t);if(!a.contains(g))throw new $(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Dv(f,g)||f.push(g)}l=new He(f),h=a.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,h=a.fieldTransforms;return new Av(new Be(c),l,h)}function Fd(n,e){if(Ud(n=Le(n)))return Hd("Unsupported field value:",e,n),Bd(n,e);if(n instanceof Od)return(function(s,r){if(!$d(r.dataSource))throw r.yc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.yc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let l=Fd(c,r.gc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=Le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hy(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ie.fromDate(s);return{timestampValue:Xr(r.serializer,i)}}if(s instanceof ie){const i=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xr(r.serializer,i)}}if(s instanceof nt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ue)return{bytesValue:Zh(r.serializer,s._byteString)};if(s instanceof ge){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ka(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof je)return(function(a,c){const l=a instanceof je?a.toArray():a;return{mapValue:{fields:{[kh]:{stringValue:Rh},[Gr]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Aa(c.serializer,f)}))}}}}}})(s,r);if(od(s))return s._toProto(r.serializer);throw r.yc(`Unsupported field value: ${_a(s)}`)})(n,e)}function Bd(n,e){const t={};return Th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,((s,r)=>{const i=Fd(r,e.dc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Ud(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof nt||n instanceof Ue||n instanceof ge||n instanceof Od||n instanceof je||od(n))}function Hd(n,e,t){if(!Ud(t)||!Eh(t)){const s=_a(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function ja(n,e,t){if((e=Le(e))instanceof Ld)return e._internalPath;if(typeof e=="string")return Cv(n,e);throw ni("Field path arguments must be of type string or ",n,!1,void 0,t)}const Rv=new RegExp("[~\\*/\\[\\]]");function Cv(n,e,t){if(e.search(Rv)>=0)throw ni(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ld(...e.split("."))._internalPath}catch{throw ni(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ni(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${s}`),a&&(l+=` in document ${r}`),l+=")"),new $(D.INVALID_ARGUMENT,c+n+l)}function Dv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return En(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Gr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>ue(a.doubleValue)));return new je(t)}convertGeoPoint(e){return new nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=vi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=re.fromString(e);ee(id(s),9688,{name:e});const r=new Os(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(t)||gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Vv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ue(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}const du="@firebase/firestore",fu="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ja("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mv extends jd{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function xv(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class on extends jd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ja("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=on._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}on._jsonSchemaVersion="firestore/documentSnapshot/1.0",on._jsonSchema={type:de("string",on._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Or extends on{data(e={}){return super.data(e)}}class On{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new As(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Or(this._firestore,this._userDataWriter,s.key,s,new As(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const l=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new As(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Or(r._firestore,r._userDataWriter,c.doc.key,c.doc,new As(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Lv(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=On._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ya.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On._jsonSchemaVersion="firestore/querySnapshot/1.0",On._jsonSchema={type:de("string",On._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){n=dn(n,ge);const e=dn(n.firestore,Di),t=Ha(e);return mv(t,n._key).then((s=>Bv(e,n,s)))}function Ov(n){n=dn(n,Ci);const e=dn(n.firestore,Di),t=Ha(e),s=new qd(e);return Nv(n._query),gv(t,n._query).then((r=>new On(e,s,n,r)))}function $v(n,e,t){n=dn(n,ge);const s=dn(n.firestore,Di),r=xv(n.converter,e,t),i=Pv(s);return Fv(s,[kv(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,dt.none())])}function Fv(n,e){const t=Ha(n);return yv(t,e)}function Bv(n,e,t){const s=t.docs.get(e._key),r=new qd(n);return new on(n,r,e._key,s,new As(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yg(Jn),qn(new ln("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Di(new Eg(s.getProvider("auth-internal")),new Ig(a,s.getProvider("app-check-internal")),Bg(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Ot(du,fu,e),Ot(du,fu,"esm2020")})();function Wd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uv=Wd,Gd=new Ks("auth","Firebase",Wd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new fa("@firebase/auth");function Hv(n,...e){si.logLevel<=Y.WARN&&si.warn(`Auth (${Jn}): ${n}`,...e)}function $r(n,...e){si.logLevel<=Y.ERROR&&si.error(`Auth (${Jn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,...e){throw za(n,...e)}function st(n,...e){return za(n,...e)}function Kd(n,e,t){const s={...Uv(),[e]:t};return new Ks("auth","Firebase",s).create(e,{appName:n.name})}function ft(n){return Kd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function za(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gd.create(n,...e)}function U(n,e,...t){if(!n)throw za(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $r(e),new Error(e)}function _t(n,e){n||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qv(){return pu()==="http:"||pu()==="https:"}function pu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qv()||Kp()||"connection"in navigator)?navigator.onLine:!0}function zv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=zp()||Qp()}get(){return jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kv=new nr(3e4,6e4);function Kt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Qt(n,e,t,s,r={}){return Yd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=Qs({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return Gp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Ys(n.emulatorConfig.host)&&(h.credentials="include"),Qd.fetch()(await Jd(n,n.config.apiHost,t,c),h)})}async function Yd(n,e,t){n._canInitEmulator=!1;const s={...Wv,...e};try{const r=new Yv(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Dr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Dr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Dr(n,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kd(n,f,h);We(n,f)}}catch(r){if(r instanceof bt)throw r;We(n,"network-request-failed",{message:String(r)})}}async function sr(n,e,t,s,r={}){const i=await Qt(n,e,t,s,r);return"mfaPendingCredential"in i&&We(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Wa(n.config,r):`${n.config.apiScheme}://${r}`;return Gv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Qv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),Kv.get())})}}function Dr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=st(n,e,s);return r.customData._tokenResponse=t,r}function mu(n){return n!==void 0&&n.enterprise!==void 0}class Jv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Xv(n,e){return Qt(n,"GET","/v2/recaptchaConfig",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e){return Qt(n,"POST","/v1/accounts:delete",e)}async function ri(n,e){return Qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eE(n,e=!1){const t=Le(n),s=await t.getIdToken(e),r=Ga(s);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Vs(Ao(r.auth_time)),issuedAtTime:Vs(Ao(r.iat)),expirationTime:Vs(Ao(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ao(n){return Number(n)*1e3}function Ga(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const r=eh(t);return r?JSON.parse(r):($r("Failed to decode base64 JWT payload"),null)}catch(r){return $r("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gu(n){const e=Ga(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof bt&&tE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n){var m;const e=n.auth,t=await n.getIdToken(),s=await Us(n,ri(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(m=r.providerUserInfo)!=null&&m.length?Xd(r.providerUserInfo):[],a=rE(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Zo(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function sE(n){const e=Le(n);await ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rE(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,e){const t=await Yd(n,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Jd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&Ys(n.emulatorConfig.host)&&(l.credentials="include"),Qd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oE(n,e){return Qt(n,"POST","/v2/accounts:revokeToken",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=gu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await iE(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new $n;return s&&(U(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(U(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(U(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new nE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Us(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eE(this,e)}reload(){return sE(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ii(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await Us(this,Zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:v,providerData:S,stsTokenManager:C}=t;U(m&&C,e,"internal-error");const V=$n.fromJSON(this.name,C);U(typeof m=="string",e,"internal-error"),Rt(s,e.name),Rt(r,e.name),U(typeof g=="boolean",e,"internal-error"),U(typeof v=="boolean",e,"internal-error"),Rt(i,e.name),Rt(a,e.name),Rt(c,e.name),Rt(l,e.name),Rt(h,e.name),Rt(f,e.name);const O=new qe({uid:m,auth:e,email:r,emailVerified:g,displayName:s,isAnonymous:v,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(O.providerData=S.map(M=>({...M}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,t,s=!1){const r=new $n;r.updateFromServerResponse(t);const i=new qe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ii(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];U(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Xd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new $n;c.updateFromIdToken(s);const l=new qe({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Zo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Map;function lt(n){_t(n instanceof Function,"Expected a class definition");let e=yu.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zd.type="NONE";const _u=Zd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e,t){return`firebase:${n}:${e}:${t}`}class Fn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ri(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Fn(lt(_u),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||lt(_u);const a=Fr(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const g=await ri(e,{idToken:f}).catch(()=>{});if(!g)break;m=await qe._fromGetAccountInfoResponse(e,g,f)}else m=qe._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fn(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Fn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ef(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(of(e))return"Blackberry";if(af(e))return"Webos";if(tf(e))return"Safari";if((e.includes("chrome/")||nf(e))&&!e.includes("edge/"))return"Chrome";if(rf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ef(n=Ce()){return/firefox\//i.test(n)}function tf(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nf(n=Ce()){return/crios\//i.test(n)}function sf(n=Ce()){return/iemobile/i.test(n)}function rf(n=Ce()){return/android/i.test(n)}function of(n=Ce()){return/blackberry/i.test(n)}function af(n=Ce()){return/webos/i.test(n)}function Ka(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aE(n=Ce()){var e;return Ka(n)&&!!((e=window.navigator)!=null&&e.standalone)}function cE(){return Yp()&&document.documentMode===10}function cf(n=Ce()){return Ka(n)||rf(n)||af(n)||of(n)||/windows phone/i.test(n)||sf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e=[]){let t;switch(n){case"Browser":t=vu(Ce());break;case"Worker":t=`${vu(Ce())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(n,e={}){return Qt(n,"GET","/v2/passwordPolicy",Kt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=6;class dE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new lE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ri(this,{idToken:e}),s=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(ft(this));const t=e?Le(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uE(this),t=new dE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await oE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Hv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function wn(n){return Le(n)}class Eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=rm(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pE(n){Vi=n}function uf(n){return Vi.loadJS(n)}function mE(){return Vi.recaptchaEnterpriseScript}function gE(){return Vi.gapiScript}function yE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _E{constructor(){this.enterprise=new vE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const EE="recaptcha-enterprise",hf="NO_RECAPTCHA";class bE{constructor(e){this.type=EE,this.auth=wn(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Xv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Jv(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function r(i,a,c){const l=window.grecaptcha;mu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(hf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _E().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&mu(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mE();l.length!==0&&(l+=c),uf(l).then(()=>{r(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function bu(n,e,t,s=!1,r=!1){const i=new bE(n);let a;if(r)a=hf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ea(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await bu(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await bu(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n,e){const t=ma(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(cn(i,e??{}))return r;We(r,"already-initialized")}return t.initialize({options:e})}function IE(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wE(n,e,t){const s=wn(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=df(e),{host:a,port:c}=AE(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(cn(h,s.config.emulator)&&cn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Ys(a)?rh(`${i}//${a}${l}`):SE()}function df(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function AE(n){const e=df(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Tu(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Tu(a)}}}function Tu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function SE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function PE(n,e){return Qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(n,e){return sr(n,"POST","/v1/accounts:signInWithPassword",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(n,e){return sr(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}async function CE(n,e){return sr(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Qa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Hs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Hs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",kE);case"emailLink":return RE(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,s,"signUpPassword",PE);case"emailLink":return CE(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return sr(n,"POST","/v1/accounts:signInWithIdp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="http://localhost";class pn extends Qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new pn(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:DE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ME(n){const e=Es(bs(n)).link,t=e?Es(bs(e)).deep_link_id:null,s=Es(bs(n)).deep_link_id;return(s?Es(bs(s)).link:null)||s||t||e||n}class Ya{constructor(e){const t=Es(bs(e)),s=t.apiKey??null,r=t.oobCode??null,i=VE(t.mode??null);U(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ME(e);try{return new Ya(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,t){return Hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ya.parseLink(t);return U(s,"argument-error"),Hs._fromEmailAndCode(e,s.code,s.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends rr{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Dt.credential(t,s)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends rr{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends rr{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Mt.credential(t,s)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(n,e){return sr(n,"POST","/v1/accounts:signUp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await qe._fromIdTokenResponse(e,s,r),a=Iu(s);return new mn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Iu(s);return new mn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends bt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new oi(e,t,s,r)}}function pf(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(n,i,e,s):i})}async function xE(n,e,t=!1){const s=await Us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(n,e,t=!1){const{auth:s}=n;if(Fe(s.app))return Promise.reject(ft(s));const r="reauthenticate";try{const i=await Us(n,pf(s,r,e,n),t);U(i.idToken,s,"internal-error");const a=Ga(i.idToken);U(a,s,"internal-error");const{sub:c}=a;return U(n.uid===c,s,"user-mismatch"),mn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n,e,t=!1){if(Fe(n.app))return Promise.reject(ft(n));const s="signIn",r=await pf(n,s,e),i=await mn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function OE(n,e){return mf(wn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n){const e=wn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $E(n,e,t){if(Fe(n.app))return Promise.reject(ft(n));const s=wn(n),a=await ea(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gf(n),l}),c=await mn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function FE(n,e,t){return Fe(n.app)?Promise.reject(ft(n)):OE(Le(n),ns.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&gf(n),s})}function BE(n,e,t,s){return Le(n).onIdTokenChanged(e,t,s)}function UE(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function HE(n,e,t,s){return Le(n).onAuthStateChanged(e,t,s)}function qE(n){return Le(n).signOut()}const ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=1e3,zE=10;class _f extends yf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);cE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zE):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},jE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_f.type="LOCAL";const WE=_f;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends yf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vf.type="SESSION";const Ef=vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Mi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await GE(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ja("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function QE(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function YE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function XE(){return bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="firebaseLocalStorageDb",ZE=1,ci="firebaseLocalStorage",If="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function eb(){const n=indexedDB.deleteDatabase(Tf);return new ir(n).toPromise()}function ta(){const n=indexedDB.open(Tf,ZE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ci,{keyPath:If})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ci)?e(s):(s.close(),await eb(),e(await ta()))})})}async function wu(n,e,t){const s=Ni(n,!0).put({[If]:e,value:t});return new ir(s).toPromise()}async function tb(n,e){const t=Ni(n,!1).get(e),s=await new ir(t).toPromise();return s===void 0?null:s.value}function Au(n,e){const t=Ni(n,!0).delete(e);return new ir(t).toPromise()}const nb=800,sb=3;class wf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>sb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(XE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YE(),!this.activeServiceWorker)return;this.sender=new KE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await wu(e,ai,"1"),await Au(e,ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tb(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Au(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ni(r,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wf.type="LOCAL";const rb=wf;new nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n,e){return e?lt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ob(n){return mf(n.auth,new Xa(n),n.bypassAuthState)}function ab(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),LE(t,new Xa(n),n.bypassAuthState)}async function cb(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),xE(t,new Xa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ob;case"linkViaPopup":case"linkViaRedirect":return cb;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:We(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new nr(2e3,1e4);class Mn extends Af{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lb.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="pendingRedirect",Br=new Map;class hb extends Af{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Br.get(this.auth._key());if(!e){try{const s=await db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Br.set(this.auth._key(),e)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function db(n,e){const t=mb(e),s=pb(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function fb(n,e){Br.set(n._key(),e)}function pb(n){return lt(n._redirectPersistence)}function mb(n){return Fr(ub,n.config.apiKey,n.name)}async function gb(n,e,t=!1){if(Fe(n.app))return Promise.reject(ft(n));const s=wn(n),r=ib(s,e),a=await new hb(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=600*1e3;class _b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Sf(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(st(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Su(e))}saveEventToCache(e){this.cachedEventUids.add(Su(e)),this.lastProcessedEventTime=Date.now()}}function Su(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(n,e={}){return Qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tb=/^https?/;async function Ib(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Eb(n);for(const t of e)try{if(wb(t))return}catch{}We(n,"unauthorized-domain")}function wb(n){const e=Xo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Tb.test(t))return!1;if(bb.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=new nr(3e4,6e4);function Pu(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sb(n){return new Promise((e,t)=>{var r,i,a;function s(){Pu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pu(),t(st(n,"network-request-failed"))},timeout:Ab.get()})}if((i=(r=rt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=rt().gapi)!=null&&a.load)s();else{const c=yE("iframefcb");return rt()[c]=()=>{gapi.load?s():t(st(n,"network-request-failed"))},uf(`${gE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function Pb(n){return Ur=Ur||Sb(n),Ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new nr(5e3,15e3),Rb="__/auth/iframe",Cb="emulator/auth/iframe",Db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mb(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wa(e,Cb):`https://${n.config.authDomain}/${Rb}`,s={apiKey:e.apiKey,appName:n.name,v:Jn},r=Vb.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Qs(s).slice(1)}`}async function Nb(n){const e=await Pb(n),t=rt().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:Mb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Db,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=st(n,"network-request-failed"),c=rt().setTimeout(()=>{i(a)},kb.get());function l(){rt().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lb=500,Ob=600,$b="_blank",Fb="http://localhost";class ku{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bb(n,e,t,s=Lb,r=Ob){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...xb,width:s.toString(),height:r.toString(),top:i,left:a},h=Ce().toLowerCase();t&&(c=nf(h)?$b:t),ef(h)&&(e=e||Fb,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(aE(h)&&c!=="_self")return Ub(e||"",c),new ku(null);const m=window.open(e||"",c,f);U(m,n,"popup-blocked");try{m.focus()}catch{}return new ku(m)}function Ub(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="__/auth/handler",qb="emulator/auth/handler",jb=encodeURIComponent("fac");async function Ru(n,e,t,s,r,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Jn,eventId:r};if(e instanceof ff){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof rr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${jb}=${encodeURIComponent(l)}`:"";return`${zb(n)}?${Qs(c).slice(1)}${h}`}function zb({config:n}){return n.emulator?Wa(n,qb):`https://${n.authDomain}/${Hb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="webStorageSupport";class Wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=gb,this._overrideRedirectResult=fb}async _openPopup(e,t,s,r){var a;_t((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ru(e,t,s,Xo(),r);return Bb(e,i,Ja())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Ru(e,t,s,Xo(),r);return QE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(_t(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Nb(e),s=new _b(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(So,{type:So},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[So];i!==void 0&&t(!!i),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ib(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||tf()||Ka()}}const Gb=Wb;var Cu="@firebase/auth",Du="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yb(n){qn(new ln("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lf(n)},h=new fE(s,r,i,l);return IE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),qn(new ln("auth-internal",e=>{const t=wn(e.getProvider("auth").getImmediate());return(s=>new Kb(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Cu,Du,Qb(n)),Ot(Cu,Du,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=300,Xb=sh("authIdTokenMaxAge")||Jb;let Vu=null;const Zb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Xb)return;const r=t==null?void 0:t.token;Vu!==r&&(Vu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function eT(n=ch()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=TE(n,{popupRedirectResolver:Gb,persistence:[rb,WE,Ef]}),s=sh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Zb(i.toString());UE(t,a,()=>a(t.currentUser)),BE(t,c=>a(c))}}const r=th("auth");return r&&wE(t,`http://${r}`),t}function tT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=st("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",tT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yb("Browser");const nT={apiKey:"AIzaSyAMfhTH_bwb6iQ5BOMWclDyWqsTq2_B3rM",authDomain:"pokebuilder-18867.firebaseapp.com",projectId:"pokebuilder-18867",storageBucket:"pokebuilder-18867.firebasestorage.app",messagingSenderId:"15661104569",appId:"1:15661104569:web:835f7351da650769f34a68",measurementId:"G-T9ZGJFH8DB"},Pf=ah(nT),Za=Tv(Pf),xi=eT(Pf);let Wt=null,or="",ae=[],Ne=0,vt=null;function kf(){return xd(Za,"users",Wt.uid)}function ec(n){return{name:n||"Team 1",slots:[pe(),pe(),pe(),pe(),pe(),pe()]}}function Li(){var n;return((n=ae[Ne])==null?void 0:n.slots)||[]}function sT(n){vt=n}async function An(){if(Wt)try{await $v(kf(),{displayName:or,teams:JSON.parse(JSON.stringify(ae)),activeTeamIndex:Ne},{merge:!0})}catch(n){console.error("Failed to save teams to Firestore:",n)}}async function rT(n,e,t){return Wt=(await $E(xi,n,e)).user,or=t.trim()||n.split("@")[0],ae=[ec("Team 1")],Ne=0,await An(),!0}async function iT(n,e){return Wt=(await FE(xi,n,e)).user,await Rf(),!0}async function Rf(){if(Wt){try{const n=await zd(kf());if(n.exists()){const e=n.data();or=e.displayName||Wt.email.split("@")[0],ae=Array.isArray(e.teams)?e.teams:[],Ne=typeof e.activeTeamIndex=="number"&&e.activeTeamIndex>=0&&e.activeTeamIndex<ae.length?e.activeTeamIndex:0}}catch(n){console.error("Failed to load user data:",n)}ae.length===0&&(ae=[ec("Team 1")],Ne=0,await An())}}async function oT(){await qE(xi),Wt=null,or="",ae=[],Ne=0}function aT(n){n<0||n>=ae.length||(Ne=n,An(),vt&&vt())}function cT(n){const e=n||`Team ${ae.length+1}`;ae.push(ec(e)),Ne=ae.length-1,An(),vt&&vt()}function lT(n){ae.length<=1||(ae.splice(n,1),Ne>=ae.length&&(Ne=ae.length-1),An(),vt&&vt())}function uT(n,e){n<0||n>=ae.length||!e.trim()||(ae[n].name=e.trim(),An())}function Po(){document.getElementById("login-screen").style.display="none",document.getElementById("app-header").style.display="",document.getElementById("app-nav").style.display="",document.getElementById("app-main").style.display="",document.getElementById("trainer-name").textContent=or,vt&&vt()}function hT(){document.getElementById("app-header").style.display="none",document.getElementById("app-nav").style.display="none",document.getElementById("app-main").style.display="none",document.getElementById("login-screen").style.display="flex"}function dT(){document.getElementById("login-screen");const n=document.getElementById("login-email"),e=document.getElementById("login-password"),t=document.getElementById("login-nick"),s=document.getElementById("login-btn"),r=document.getElementById("register-btn"),i=document.getElementById("login-toggle"),a=document.getElementById("login-error"),c=document.getElementById("login-name-group");let l=!1;function h(v){l=v,c.style.display=v?"":"none",s.style.display=v?"none":"",r.style.display=v?"":"none",i.innerHTML=v?`${P("login.hasAccount")} <a href="#">${P("login.loginLink")}</a>`:`${P("login.noAccount")} <a href="#">${P("login.registerLink")}</a>`,a.textContent=""}function f(v){a.textContent=v}async function m(){a.textContent="";const v=n.value.trim(),S=e.value;if(!v||!S)return f(P("login.fillFields"));try{await iT(v,S),Po()}catch(C){f(Mu(C.code))}}async function g(){a.textContent="";const v=n.value.trim(),S=e.value,C=t.value.trim();if(!v||!S)return f(P("login.fillFields"));if(S.length<6)return f(P("login.weakPassword"));try{await rT(v,S,C),Po()}catch(V){f(Mu(V.code))}}s.addEventListener("click",m),r.addEventListener("click",g),e.addEventListener("keydown",v=>{v.key==="Enter"&&(l?g():m())}),t.addEventListener("keydown",v=>{v.key==="Enter"&&l&&g()}),i.addEventListener("click",v=>{v.preventDefault(),h(!l)}),document.getElementById("btn-logout").addEventListener("click",async()=>{await oT(),hT(),n.value="",e.value="",t.value="",h(!1)}),h(!1),HE(xi,async v=>{v&&(Wt=v,await Rf(),Po())})}function Mu(n){switch(n){case"auth/email-already-in-use":return P("login.errEmailInUse");case"auth/invalid-email":return P("login.errInvalidEmail");case"auth/user-not-found":return P("login.errUserNotFound");case"auth/wrong-password":return P("login.errWrongPassword");case"auth/invalid-credential":return P("login.errInvalidCredential");case"auth/too-many-requests":return P("login.errTooMany");case"auth/weak-password":return P("login.weakPassword");default:return P("login.errGeneric")}}function na(){const n=document.getElementById("team-tabs");n&&(n.innerHTML=ae.map((e,t)=>`<button class="team-tab${t===Ne?" active":""}" data-team-index="${t}">${e.name}</button>`).join(""),n.querySelectorAll(".team-tab").forEach(e=>{e.addEventListener("click",()=>{aT(parseInt(e.dataset.teamIndex))})}))}function fT(){document.getElementById("btn-add-team").addEventListener("click",()=>{const n=prompt(P("tb.newTeamName"),`Team ${ae.length+1}`);n!==null&&cT(n)}),document.getElementById("btn-rename-team").addEventListener("click",()=>{var t;const n=((t=ae[Ne])==null?void 0:t.name)||"",e=prompt(P("tb.renameTeamPrompt"),n);e!==null&&e.trim()&&(uT(Ne,e),na())}),document.getElementById("btn-delete-team").addEventListener("click",()=>{if(ae.length<=1){alert(P("tb.cantDeleteLast"));return}confirm(P("tb.confirmDeleteTeam").replace("{name}",ae[Ne].name))&&lT(Ne)})}let te=[pe(),pe(),pe(),pe(),pe(),pe()],W=-1,sa=null,ra=null,Un=[null,null,null,null];const pT=n=>{if(n.type){const e=Gt[n.type]||"#888";return`${n.label} <span class="type-badge-sm" style="background:${e}">${n.type.toUpperCase()}</span>`}return n.label};let Cf=[],Qn=[],Df=[];async function mT(){const[n,e,t]=await Promise.all([fi(),pi(),ca()]);Cf=n.map(s=>({name:s.name,id:s.id,label:oe(s.name)})),Qn=e.map(s=>({name:s.name,label:oe(s.name)})),Df=t.map(s=>({name:s.name,label:oe(s.name)})),Tt(),yT(),TT(),fT(),Nu(),sT(()=>{Nu(),na()}),na()}function Tt(){const n=document.getElementById("team-slots");n.innerHTML="";for(let e=0;e<6;e++){const t=te[e],s=document.createElement("div");s.className=`team-slot ${t.name?"":"empty"} ${e===W?"active":""}`,s.dataset.index=e,t.name&&t.sprite?s.innerHTML=`
        <button class="slot-remove" data-index="${e}" title="Remove">&times;</button>
        <img class="slot-sprite" src="${t.sprite}" alt="${t.name}">
        <div class="slot-name">${Ze(t.name)}</div>
        <div class="slot-types">
          ${t.types.map(r=>`<span class="type-badge type-${r}" style="background:${Gt[r]}">${r.toUpperCase()}</span>`).join("")}
        </div>
      `:s.innerHTML=`
        <div class="slot-empty-text">
          <span style="font-size:2rem;opacity:0.3">+</span><br>
          <span data-i18n="tb.emptySlot">${P("tb.emptySlot")}</span>
        </div>
      `,s.addEventListener("click",r=>{r.target.classList.contains("slot-remove")||gT(e)}),n.appendChild(s)}n.querySelectorAll(".slot-remove").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const s=parseInt(e.dataset.index);te[s]=pe(),W===s&&(W=-1,document.getElementById("pokemon-editor").style.display="none"),Tt(),Me()})})}function gT(n){W=n,Tt(),tc()}function yT(){const n=document.getElementById("editor-nature");n.innerHTML=vn.map(s=>{let r=Gs(s.name);return s.plus&&(r+=` (+${ye[s.plus]} -${ye[s.minus]})`),`<option value="${s.name}">${r}</option>`}).join(""),n.addEventListener("change",()=>{W<0||(te[W].nature=n.value,pt(),Tt(),Me())});const e=document.getElementById("editor-level"),t=()=>{W<0||(te[W].level=Math.max(1,Math.min(100,parseInt(e.value)||50)),e.value=te[W].level,pt(),Me())};e.addEventListener("change",t),e.addEventListener("input",()=>{if(W<0)return;const s=parseInt(e.value);s>=1&&s<=100&&(te[W].level=s,pt(),Me())}),sa=at(document.getElementById("pokemon-search"),Cf,async s=>{W<0||await ET(W,s.name,s.id)},{renderOption:s=>`<img src="${ze(s.id)}" alt="" width="30" height="30">${s.label} <span style="color:var(--text-muted)">#${s.id}</span>`}),ra=at(document.getElementById("item-search"),Df,s=>{W<0||(te[W].item=s.name,Me())});for(let s=0;s<4;s++){const r=document.getElementById(`move-search-${s}`);Un[s]=at(r,Qn,i=>{W<0||(te[W].moves[s]=i.name,Me())},{renderOption:pT})}_T(),vT(),document.getElementById("btn-ability-info").addEventListener("click",()=>{if(W<0)return;const s=document.getElementById("editor-ability").value;s&&Ro(s)}),document.getElementById("btn-item-info").addEventListener("click",()=>{if(W<0)return;const s=te[W].item;s&&Co(s)}),document.querySelectorAll(".info-btn[data-move-index]").forEach(s=>{s.addEventListener("click",()=>{if(W<0)return;const r=parseInt(s.dataset.moveIndex),i=te[W].moves[r];i&&Ju(i)})})}function _T(){const n=document.getElementById("ev-sliders");n.innerHTML="";for(const e of be){const t=document.createElement("div");t.className="stat-row",t.innerHTML=`
      <span class="stat-label" id="ev-label-${e}">${ye[e]}</span>
      <input type="range" class="stat-slider" id="ev-slider-${e}" min="0" max="252" step="4" value="0">
      <span class="stat-value" id="ev-value-${e}">0</span>
    `,n.appendChild(t);const s=t.querySelector(`#ev-slider-${e}`),r=t.querySelector(`#ev-value-${e}`);s.addEventListener("input",()=>{if(W<0)return;const i=parseInt(s.value),a=Mf()-te[W].evs[e],c=Math.min(252,510-a),l=Math.min(i,c);s.value=l,te[W].evs[e]=l,r.textContent=l,Nf(),pt(),Me()})}}function vT(){const n=document.getElementById("iv-inputs");n.innerHTML="";for(const e of be){const t=document.createElement("div");t.className="iv-row",t.innerHTML=`
      <span class="stat-label" id="iv-label-${e}">${ye[e]}</span>
      <input type="range" class="stat-slider" id="iv-slider-${e}" min="0" max="31" value="31">
      <input type="number" class="iv-input" id="iv-input-${e}" min="0" max="31" value="31">
    `,n.appendChild(t);const s=t.querySelector(`#iv-slider-${e}`),r=t.querySelector(`#iv-input-${e}`);s.addEventListener("input",()=>{if(W<0)return;const i=parseInt(s.value);te[W].ivs[e]=i,r.value=i,pt(),Me()}),r.addEventListener("change",()=>{if(W<0)return;const i=Math.max(0,Math.min(31,parseInt(r.value)||0));te[W].ivs[e]=i,r.value=i,s.value=i,pt(),Me()}),r.addEventListener("input",()=>{if(W<0)return;const i=parseInt(r.value);i>=0&&i<=31&&(te[W].ivs[e]=i,s.value=i,pt(),Me())})}}async function ET(n,e,t){var h;const s=await _n(e),r=te[n];r.id=t||s.id,r.name=s.name,r.species=s.species.name,r.types=s.types.map(f=>f.type.name),r.baseStats=Yn(s),r.sprite=s.sprites.front_default||ze(r.id);const i=document.getElementById("editor-ability");i.innerHTML=s.abilities.map(f=>`<option value="${f.ability.name}">${oe(f.ability.name)}${f.is_hidden?" (H)":""}</option>`).join(""),(!r.ability||!s.abilities.find(f=>f.ability.name===r.ability))&&(r.ability=((h=s.abilities[0])==null?void 0:h.ability.name)||""),i.value=r.ability,i.onchange=()=>{te[n].ability=i.value,Me()};const a=s.moves.map(f=>f.move.name),c=Qn.filter(f=>a.includes(f.name)),l=c.length>0?c:Qn;for(let f=0;f<4;f++)Un[f].updateItems(l);Promise.allSettled(l.map(f=>zs(f.name).then(m=>({...f,type:m.type.name})))).then(f=>{const m=f.map((g,v)=>g.status==="fulfilled"?g.value:l[v]);for(let g=0;g<4;g++)Un[g].updateItems(m)}),tc(),pt(),Tt(),Me()}async function tc(){const n=document.getElementById("pokemon-editor");if(W<0){n.style.display="none";return}n.style.display="block";const e=te[W],t=document.getElementById("editor-sprite");t.src=e.sprite||"",t.style.display=e.sprite?"block":"none";const s=document.getElementById("editor-types");s.innerHTML=e.types.map(i=>`<span class="type-badge type-${i}" style="background:${Gt[i]}">${i.toUpperCase()}</span>`).join(""),e.name?sa.setValue(e.name,Ze(e.name)):sa.clear(),e.item?ra.setValue(e.item,Ze(e.item)):ra.clear();const r=document.getElementById("editor-ability");if(e.name){const i=await _n(e.name);r.innerHTML=i.abilities.map(h=>`<option value="${h.ability.name}">${oe(h.ability.name)}${h.is_hidden?" (H)":""}</option>`).join(""),e.ability&&(r.value=e.ability),r.onchange=()=>{te[W].ability=r.value,Me()};const a=i.moves.map(h=>h.move.name),c=Qn.filter(h=>a.includes(h.name)),l=c.length>0?c:Qn;for(let h=0;h<4;h++)Un[h].updateItems(l)}else r.innerHTML="";document.getElementById("editor-nature").value=e.nature,document.getElementById("editor-level").value=e.level;for(let i=0;i<4;i++)e.moves[i]?Un[i].setValue(e.moves[i],Ze(e.moves[i])):Un[i].clear();for(const i of be)document.getElementById(`ev-slider-${i}`).value=e.evs[i],document.getElementById(`ev-value-${i}`).textContent=e.evs[i];Nf();for(const i of be)document.getElementById(`iv-slider-${i}`).value=e.ivs[i],document.getElementById(`iv-input-${i}`).value=e.ivs[i];Vf(),pt()}function Vf(){if(W<0)return;const n=vn.find(e=>e.name===te[W].nature);for(const e of be){const t=document.getElementById(`ev-label-${e}`),s=document.getElementById(`iv-label-${e}`);t.className="stat-label",s.className="stat-label",(n==null?void 0:n.plus)===e?(t.classList.add("boosted"),s.classList.add("boosted")):(n==null?void 0:n.minus)===e&&(t.classList.add("hindered"),s.classList.add("hindered"))}}function Mf(){return W<0?0:be.reduce((n,e)=>n+te[W].evs[e],0)}function Nf(){const n=Mf(),e=document.getElementById("ev-counter");e.textContent=`(${n}/510)`,e.style.color=n>510?"var(--danger)":n===510?"var(--success)":""}function pt(){if(W<0)return;const n=te[W];if(!n.baseStats)return;const e=Hn(n.baseStats,n.ivs,n.evs,n.level,n.nature),t=document.getElementById("final-stats");t.innerHTML="";const s=be.reduce((a,c)=>a+n.baseStats[c],0);let r=0;for(const a of be){const c=e[a];r+=c;const l=Math.min(c/700*100,100),h=document.createElement("div");h.className="stat-bar-row",h.innerHTML=`
      <span class="stat-label stat-${a}">${ye[a]}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill ${a}" style="width:${l}%;background:${bT(a)}"></div>
      </div>
      <span class="stat-value">${c}</span>
    `,t.appendChild(h)}const i=document.createElement("div");i.className="stat-total",i.textContent=`${P("tb.total")}: ${r} (${P("tb.base")}: ${s})`,t.appendChild(i),Vf()}function bT(n){return{hp:"#ff5959",atk:"#f5ac78",def:"#fae078",spa:"#9db7f5",spd:"#a7db8d",spe:"#fa92b2"}[n]||"#888"}function TT(){document.getElementById("btn-import").addEventListener("click",IT),document.getElementById("btn-export").addEventListener("click",wT),document.getElementById("btn-clear").addEventListener("click",()=>{confirm(P("tb.confirmClear"))&&(te=Array.from({length:6},()=>pe()),W=-1,document.getElementById("pokemon-editor").style.display="none",Tt(),Me())}),document.getElementById("modal-close").addEventListener("click",ia),document.getElementById("modal-import-export").addEventListener("click",n=>{n.target===n.currentTarget&&ia()})}function IT(){const n=document.getElementById("modal-import-export"),e=document.getElementById("modal-title"),t=document.getElementById("modal-textarea"),s=document.getElementById("modal-action");e.textContent=P("tb.importTitle"),t.value="",t.placeholder=P("tb.pasteShowdown"),s.textContent=P("tb.importBtn"),n.style.display="flex",s.onclick=()=>{try{const r=Dp(t.value);if(r.length===0){alert(P("tb.importError"));return}for(let a=0;a<6;a++)te[a]=r[a]||pe();const i=te.map(async(a,c)=>{var l;if(a.name)try{const h=await _n(a.name);a.id=h.id,a.types=h.types.map(f=>f.type.name),a.baseStats=Yn(h),a.sprite=h.sprites.front_default||ze(h.id),a.ability||(a.ability=((l=h.abilities[0])==null?void 0:l.ability.name)||"")}catch{te[c]=pe()}});Promise.all(i).then(()=>{W=-1,document.getElementById("pokemon-editor").style.display="none",Tt(),Me(),ia()})}catch{alert(P("tb.importError"))}}}function wT(){const n=document.getElementById("modal-import-export"),e=document.getElementById("modal-title"),t=document.getElementById("modal-textarea"),s=document.getElementById("modal-action");e.textContent=P("tb.exportTitle"),t.value=Cp(te),t.placeholder="",s.textContent="📋 Copy",n.style.display="flex",s.onclick=()=>{navigator.clipboard.writeText(t.value).then(()=>{s.textContent=`✓ ${P("tb.copySuccess")}`,setTimeout(()=>{s.textContent="📋 Copy"},1500)})}}function ia(){document.getElementById("modal-import-export").style.display="none"}function Me(){const n=Li();for(let e=0;e<6;e++)n[e]=te[e];An()}function Nu(){const n=Li();for(let e=0;e<6;e++)te[e]=n[e]?{...pe(),...n[e]}:pe();W=-1,document.getElementById("pokemon-editor").style.display="none",Tt()}function AT(){Tt(),W>=0&&tc()}let Ss=null,Ps=null,$e=null,oa;const ST=n=>{if(n.type){const e=Gt[n.type]||"#888";return`${n.label} <span class="type-badge-sm" style="background:${e}">${n.type.toUpperCase()}</span>`}return n.label};async function PT(){const[n,e,t]=await Promise.all([fi(),pi(),ca()]),s=n.map(l=>({name:l.name,id:l.id,label:oe(l.name)})),r=e.map(l=>({name:l.name,label:oe(l.name)})),i=t.map(l=>({name:l.name,label:oe(l.name)})),a=l=>`<img src="${ze(l.id)}" alt="" width="30" height="30">${l.label} <span style="color:var(--text-muted)">#${l.id}</span>`;at(document.getElementById("dc-atk-pokemon-search"),s,async l=>{await kT(l.name,l.id)},{renderOption:a}),at(document.getElementById("dc-def-pokemon-search"),s,async l=>{await RT(l.name,l.id)},{renderOption:a}),at(document.getElementById("dc-atk-item-search"),i,()=>{}),at(document.getElementById("dc-def-item-search"),i,()=>{}),oa=at(document.getElementById("dc-atk-move-search"),r,async l=>{await CT(l.name)},{renderOption:ST});const c=vn.map(l=>{let h=Gs(l.name);return l.plus&&(h+=` (+${ye[l.plus]} -${ye[l.minus]})`),`<option value="${l.name}">${h}</option>`}).join("");document.getElementById("dc-atk-nature").innerHTML=c,document.getElementById("dc-def-nature").innerHTML=c,xu("dc-atk-stats"),xu("dc-def-stats"),document.getElementById("dc-calculate").addEventListener("click",DT),document.getElementById("btn-dc-atk-ability-info").addEventListener("click",()=>{const l=document.getElementById("dc-atk-ability").value;l&&Ro(l)}),document.getElementById("btn-dc-def-ability-info").addEventListener("click",()=>{const l=document.getElementById("dc-def-ability").value;l&&Ro(l)}),document.getElementById("btn-dc-atk-move-info").addEventListener("click",()=>{$e&&Ju($e.name)}),document.getElementById("btn-dc-atk-item-info").addEventListener("click",()=>{var h;const l=(h=document.getElementById("dc-atk-item-search").querySelector(".search-input"))==null?void 0:h.dataset.value;l&&Co(l)}),document.getElementById("btn-dc-def-item-info").addEventListener("click",()=>{var h;const l=(h=document.getElementById("dc-def-item-search").querySelector(".search-input"))==null?void 0:h.dataset.value;l&&Co(l)})}function xu(n){const e=document.getElementById(n);let t="";for(const s of be)t+=`
      <div class="calc-stat-item">
        <label>${ye[s]}</label>
        <input type="number" class="stat-ev-input" data-stat="${s}" data-type="ev" min="0" max="252" step="4" value="0" placeholder="EV">
        <input type="number" class="stat-iv-input" data-stat="${s}" data-type="iv" min="0" max="31" value="31" placeholder="IV">
      </div>
    `;e.innerHTML=t}async function kT(n,e){const t=await _n(n);Ss={pokemon:t,baseStats:Yn(t),types:t.types.map(l=>l.type.name),abilities:t.abilities.map(l=>l.ability.name)},document.getElementById("dc-atk-sprite").src=t.sprites.front_default||ze(e);const s=document.getElementById("dc-atk-ability");s.innerHTML=t.abilities.map(l=>`<option value="${l.ability.name}">${oe(l.ability.name)}${l.is_hidden?" (H)":""}</option>`).join("");const r=t.moves.map(l=>l.move.name),i=await pi(),a=i.filter(l=>r.includes(l.name)).map(l=>({name:l.name,label:oe(l.name)})),c=a.length>0?a:i.map(l=>({name:l.name,label:oe(l.name)}));oa.updateItems(c),Promise.allSettled(c.map(l=>zs(l.name).then(h=>({...l,type:h.type.name})))).then(l=>{const h=l.map((f,m)=>f.status==="fulfilled"?f.value:c[m]);oa.updateItems(h)})}async function RT(n,e){const t=await _n(n);Ps={pokemon:t,baseStats:Yn(t),types:t.types.map(r=>r.type.name),abilities:t.abilities.map(r=>r.ability.name)},document.getElementById("dc-def-sprite").src=t.sprites.front_default||ze(e);const s=document.getElementById("dc-def-ability");s.innerHTML=t.abilities.map(r=>`<option value="${r.ability.name}">${oe(r.ability.name)}${r.is_hidden?" (H)":""}</option>`).join("")}async function CT(n){const e=await zs(n);$e={name:e.name,type:e.type.name,power:e.power||0,accuracy:e.accuracy,category:e.damage_class.name,pp:e.pp}}function Lu(n){const e=document.getElementById(`${n}-stats`),t=parseInt(document.getElementById(`${n}-level`).value)||50,s=document.getElementById(`${n}-nature`).value,r={},i={};return e.querySelectorAll(".stat-ev-input").forEach(a=>{r[a.dataset.stat]=parseInt(a.value)||0}),e.querySelectorAll(".stat-iv-input").forEach(a=>{i[a.dataset.stat]=parseInt(a.value)??31}),{level:t,nature:s,evs:r,ivs:i}}function DT(){const n=document.getElementById("dc-result-text"),e=document.getElementById("dc-result-detail");if(!Ss||!Ps||!$e){n.textContent=P("dc.selectBoth"),e.innerHTML="";return}if($e.category==="status"){n.textContent=`${oe($e.name)} — ${P("dc.status")}`,e.innerHTML=`<p>${P("dc.status")} moves don't deal direct damage.</p>`;return}const t=Lu("dc-atk"),s=Lu("dc-def"),r=Hn(Ss.baseStats,t.ivs,t.evs,t.level,t.nature),i=Hn(Ps.baseStats,s.ivs,s.evs,s.level,s.nature),a=document.getElementById("dc-atk-item-search").querySelector(".search-input"),c=document.getElementById("dc-def-item-search").querySelector(".search-input"),l=(a==null?void 0:a.dataset.value)||"";c!=null&&c.dataset.value;const h=document.getElementById("dc-atk-ability").value,f=document.getElementById("dc-def-ability").value,m={stats:r,types:Ss.types,level:t.level,item:l,ability:h},g={stats:i,types:Ps.types,ability:f},v=al(m,g,$e,{critical:!1}),S=al(m,g,$e,{critical:!0}),C=oe(Ss.pokemon.name),V=oe(Ps.pokemon.name),O=oe($e.name);let M="",F="";v.typeEff===0?(M=P("dc.immune"),F="text-muted"):v.typeEff>1?(M=`${P("dc.superEffective")} (${v.typeEff}x)`,F="ko-guaranteed"):v.typeEff<1?(M=`${P("dc.notVeryEffective")} (${v.typeEff}x)`,F="ko-unlikely"):(M=`${P("dc.neutral")} (1x)`,F="");const j=Math.min(v.hpPercent.max,100),K=j>=100?"ohko":j>=70?"high":j>=40?"mid":"low";let q="";v.koText==="immune"?q=P("dc.immune"):v.koText==="ohko-guaranteed"?q=`${P("dc.ohko")} (${P("dc.guaranteed")})`:v.koText==="ohko-possible"?q=`${P("dc.ohko")} (${P("dc.possible")})`:v.koText==="2hko"?q=P("dc.2hko"):v.koText==="2hko-possible"?q=`${P("dc.2hko")} (${P("dc.possible")})`:v.koText==="3hko"?q=P("dc.3hko"):q=P("dc.4hko"),n.innerHTML=`
    ${C}'s <span style="color:${Gt[$e.type]}">${O}</span>
    → ${V}
  `,e.innerHTML=`
    <div style="margin-bottom:12px">
      <span class="${F}" style="font-weight:600">${M}</span>
      ${v.stab?'<span style="margin-left:8px;color:var(--warning)">STAB</span>':""}
    </div>

    <div style="margin-bottom:8px">
      <strong>${P("dc.damage")}:</strong> ${v.min} - ${v.max}
      (${v.hpPercent.min.toFixed(1)}% - ${v.hpPercent.max.toFixed(1)}% ${P("dc.hpPercent")})
    </div>

    <div class="result-damage-bar">
      <div class="result-damage-fill ${K}" style="width:${j}%"></div>
    </div>

    <div class="result-ko-text ${v.koClass}">${q}</div>

    <div style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
      <strong>${P("dc.critical")}:</strong> ${S.min} - ${S.max}
      (${S.hpPercent.min.toFixed(1)}% - ${S.hpPercent.max.toFixed(1)}%)
    </div>

    <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">
      ${P("dc.power")}: ${$e.power} |
      ${P("dc.category")}: ${$e.category==="physical"?P("dc.physical"):P("dc.special")} |
      ${P("dc.atkStat")}: ${v.isPhysical?r.atk:r.spa} |
      ${P("dc.defStat")}: ${v.isPhysical?i.def:i.spd}
    </div>

    <div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">
      ${P("dc.rolls")}: [${v.rolls.join(", ")}]
    </div>
  `}let aa=null,Xe=null,rn="iv";async function VT(){const e=(await fi()).map(s=>({name:s.name,id:s.id,label:oe(s.name)}));at(document.getElementById("iec-pokemon-search"),e,async s=>{await MT(s.name,s.id)},{renderOption:s=>`<img src="${ze(s.id)}" alt="" width="30" height="30">${s.label} <span style="color:var(--text-muted)">#${s.id}</span>`});const t=document.getElementById("iec-nature");t.innerHTML=vn.map(s=>{let r=Gs(s.name);return s.plus&&(r+=` (+${ye[s.plus]} -${ye[s.minus]})`),`<option value="${s.name}">${r}</option>`}).join(""),document.querySelectorAll(".iec-tab").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".iec-tab").forEach(r=>r.classList.remove("active")),s.classList.add("active"),rn=s.dataset.mode,Nn()})}),document.getElementById("iec-calculate").addEventListener("click",NT),t.addEventListener("change",()=>{aa&&Nn()}),document.getElementById("iec-level").addEventListener("change",()=>{aa&&Nn()}),Nn()}async function MT(n,e){const t=await _n(n);aa=t,Xe=Yn(t);const s=document.getElementById("iec-sprite");s.src=t.sprites.front_default||ze(e),xf(),Nn();const r=Hn(Xe,{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},parseInt(document.getElementById("iec-level").value)||50,document.getElementById("iec-nature").value);Yu(document.getElementById("stat-radar"),r,Xe)}function xf(){const n=document.getElementById("iec-base-stats");if(!Xe){n.innerHTML="";return}const e={hp:"#ff5959",atk:"#f5ac78",def:"#fae078",spa:"#9db7f5",spd:"#a7db8d",spe:"#fa92b2"};let t=0,s=`<h3 style="font-size:0.95rem;margin-bottom:8px;color:var(--text-secondary)">${P("iec.baseStats")}</h3>`;for(const r of be){const i=Xe[r];t+=i;const a=Math.min(i/255*100,100);s+=`
      <div class="base-stat-row">
        <span class="base-stat-label">${ye[r]}</span>
        <span class="base-stat-val">${i}</span>
        <div class="base-stat-bar">
          <div class="base-stat-fill" style="width:${a}%;background:${e[r]}"></div>
        </div>
      </div>
    `}s+=`<div class="stat-total">${P("iec.totalBase")}: ${t}</div>`,n.innerHTML=s}function Nn(){const n=document.getElementById("iec-stat-table");let e="";rn==="iv"?e=`
      <div>${P("stat.hp")}</div>
      <div>EV</div>
      <div>${P("iec.knownStat")}</div>
      <div>${P("iec.possibleIvs")}</div>
    `:rn==="ev"?e=`
      <div>${P("stat.hp")}</div>
      <div>IV</div>
      <div>${P("iec.desiredStat")}</div>
      <div>${P("iec.requiredEvs")}</div>
    `:e=`
      <div>${P("stat.hp")}</div>
      <div>EV</div>
      <div>IV</div>
      <div>${P("iec.finalStat")}</div>
    `;let t=`<div class="iec-stat-row header"><div></div>${e}</div>`;for(const s of be)rn==="iv"?t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${ye[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-ev-${s}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-known-${s}" min="1" max="999" value="">
          <div id="iec-result-${s}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `:rn==="ev"?t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${ye[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-iv-${s}" min="0" max="31" value="31">
          <input type="number" class="iec-stat-input" id="iec-desired-${s}" min="1" max="999" value="">
          <div id="iec-result-${s}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `:t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${ye[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-sb-ev-${s}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-sb-iv-${s}" min="0" max="31" value="31">
          <div id="iec-result-${s}" class="stat-value" style="font-weight:700">—</div>
        </div>
      `;n.innerHTML=t}function NT(){var s,r,i,a,c,l;if(!Xe)return;const n=parseInt(document.getElementById("iec-level").value)||50,e=document.getElementById("iec-nature").value,t=document.getElementById("iec-results");if(rn==="iv"){let h=`<h3 style="margin-bottom:8px">${P("iec.possibleIvs")}</h3>`,f=!1;for(const m of be){const g=parseInt((s=document.getElementById(`iec-ev-${m}`))==null?void 0:s.value)||0,v=parseInt((r=document.getElementById(`iec-known-${m}`))==null?void 0:r.value),S=document.getElementById(`iec-result-${m}`);if(isNaN(v)||v<=0){S&&(S.textContent="—");continue}const C=m==="hp",V=C?1:ko(e,m),O=kp(Xe[m],n,V,g,v,C);if(O.length>0){const M=O.length===1?`${O[0]}`:O[0]===O[O.length-1]?`${O[0]}`:`${O[0]}-${O[O.length-1]}`;S&&(S.textContent=M,S.style.color=O.length===1?"var(--success)":"var(--warning)"),h+=`<div><strong>${ye[m]}:</strong> ${O.join(", ")}</div>`,f=!0}else S&&(S.textContent="✗",S.style.color="var(--danger)")}f||(h+=`<div>${P("iec.noResults")}</div>`),t.innerHTML=h}else if(rn==="ev"){let h=`<h3 style="margin-bottom:8px">${P("iec.requiredEvs")}</h3>`;for(const f of be){const m=parseInt((i=document.getElementById(`iec-iv-${f}`))==null?void 0:i.value)??31,g=parseInt((a=document.getElementById(`iec-desired-${f}`))==null?void 0:a.value),v=document.getElementById(`iec-result-${f}`);if(isNaN(g)||g<=0){v&&(v.textContent="—");continue}const S=f==="hp",C=S?1:ko(e,f),V=Rp(Xe[f],n,C,m,g,S);V>=0&&V<=252?(v&&(v.textContent=`${V}`,v.style.color="var(--success)"),h+=`<div><strong>${ye[f]}:</strong> ${V} EVs</div>`):(v&&(v.textContent="✗",v.style.color="var(--danger)"),h+=`<div><strong>${ye[f]}:</strong> Impossible</div>`)}t.innerHTML=h}else{const h={},f={};for(const S of be)h[S]=parseInt((c=document.getElementById(`iec-sb-ev-${S}`))==null?void 0:c.value)||0,f[S]=parseInt((l=document.getElementById(`iec-sb-iv-${S}`))==null?void 0:l.value)??31;const m=Hn(Xe,f,h,n,e);let g=0;for(const S of be){const C=document.getElementById(`iec-result-${S}`);C&&(C.textContent=m[S],C.style.color="var(--accent)"),g+=m[S]}const v=be.reduce((S,C)=>S+h[C],0);t.innerHTML=`
      <h3 style="margin-bottom:8px">${P("iec.finalStat")}</h3>
      <div><strong>${P("tb.total")}:</strong> ${g}</div>
      <div><strong>EVs:</strong> ${v}/510</div>
    `,Yu(document.getElementById("stat-radar"),m,Xe)}}function xT(){Nn(),xf()}const Ou=[{name:"garchomp",role:"physical-sweeper",nature:"jolly",ability:"rough-skin",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["earthquake","dragon-claw","rock-slide","protect"]},{name:"dragonite",role:"physical-sweeper",nature:"adamant",ability:"multiscale",item:"lum-berry",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["dragon-dance","dual-wingbeat","earthquake","extreme-speed"]},{name:"tyranitar",role:"physical-sweeper",nature:"adamant",ability:"sand-stream",item:"choice-band",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["rock-slide","crunch","earthquake","ice-punch"]},{name:"gyarados",role:"physical-sweeper",nature:"adamant",ability:"intimidate",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["waterfall","earthquake","ice-fang","protect"]},{name:"scizor",role:"physical-sweeper",nature:"adamant",ability:"technician",item:"choice-band",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["bullet-punch","u-turn","superpower","knock-off"]},{name:"excadrill",role:"physical-sweeper",nature:"jolly",ability:"mold-breaker",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["earthquake","iron-head","rock-slide","protect"]},{name:"landorus-therian",role:"physical-sweeper",nature:"adamant",ability:"intimidate",item:"choice-scarf",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["earthquake","u-turn","rock-slide","superpower"]},{name:"metagross",role:"physical-sweeper",nature:"adamant",ability:"clear-body",item:"assault-vest",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["iron-head","zen-headbutt","ice-punch","bullet-punch"]},{name:"blaziken",role:"physical-sweeper",nature:"adamant",ability:"speed-boost",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["flare-blitz","close-combat","protect","swords-dance"]},{name:"lucario",role:"physical-sweeper",nature:"jolly",ability:"inner-focus",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["close-combat","meteor-mash","extreme-speed","protect"]},{name:"gengar",role:"special-sweeper",nature:"timid",ability:"cursed-body",item:"life-orb",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["shadow-ball","sludge-bomb","thunderbolt","protect"]},{name:"togekiss",role:"special-sweeper",nature:"timid",ability:"serene-grace",item:"scope-lens",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["air-slash","dazzling-gleam","follow-me","protect"]},{name:"volcarona",role:"special-sweeper",nature:"timid",ability:"flame-body",item:"life-orb",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["heat-wave","bug-buzz","quiver-dance","protect"]},{name:"hydreigon",role:"special-sweeper",nature:"modest",ability:"levitate",item:"choice-specs",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["dark-pulse","draco-meteor","flamethrower","flash-cannon"]},{name:"alakazam",role:"special-sweeper",nature:"timid",ability:"magic-guard",item:"life-orb",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["psychic","shadow-ball","focus-blast","protect"]},{name:"chandelure",role:"special-sweeper",nature:"modest",ability:"flash-fire",item:"choice-specs",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["shadow-ball","heat-wave","energy-ball","trick"]},{name:"rotom-wash",role:"special-sweeper",nature:"modest",ability:"levitate",item:"sitrus-berry",evs:{hp:252,atk:0,def:0,spa:252,spd:4,spe:0},moves:["hydro-pump","thunderbolt","will-o-wisp","protect"]},{name:"magnezone",role:"special-sweeper",nature:"modest",ability:"magnet-pull",item:"choice-specs",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["thunderbolt","flash-cannon","volt-switch","hidden-power"]},{name:"toxapex",role:"wall",nature:"bold",ability:"regenerator",item:"black-sludge",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["scald","toxic","recover","haze"]},{name:"ferrothorn",role:"wall",nature:"relaxed",ability:"iron-barbs",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["power-whip","gyro-ball","leech-seed","protect"]},{name:"blissey",role:"wall",nature:"bold",ability:"natural-cure",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["soft-boiled","seismic-toss","toxic","heal-bell"]},{name:"clefable",role:"wall",nature:"bold",ability:"magic-guard",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["moonblast","follow-me","soft-boiled","protect"]},{name:"gastrodon",role:"wall",nature:"bold",ability:"storm-drain",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["scald","earth-power","recover","protect"]},{name:"hippowdon",role:"wall",nature:"impish",ability:"sand-stream",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["earthquake","slack-off","stealth-rock","yawn"]},{name:"amoonguss",role:"support",nature:"bold",ability:"regenerator",item:"sitrus-berry",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["spore","rage-powder","giga-drain","protect"]},{name:"grimmsnarl",role:"support",nature:"careful",ability:"prankster",item:"light-clay",evs:{hp:252,atk:0,def:0,spa:0,spd:252,spe:4},moves:["reflect","light-screen","thunder-wave","foul-play"]},{name:"whimsicott",role:"support",nature:"timid",ability:"prankster",item:"focus-sash",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["tailwind","moonblast","encore","protect"]},{name:"indeedee-female",role:"support",nature:"bold",ability:"psychic-surge",item:"sitrus-berry",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["follow-me","psychic","helping-hand","protect"]},{name:"dusclops",role:"support",nature:"relaxed",ability:"frisk",item:"eviolite",evs:{hp:252,atk:0,def:128,spa:0,spd:128,spe:0},moves:["trick-room","night-shade","will-o-wisp","pain-split"]},{name:"porygon2",role:"support",nature:"sassy",ability:"download",item:"eviolite",evs:{hp:252,atk:0,def:128,spa:0,spd:128,spe:0},moves:["trick-room","tri-attack","recover","ice-beam"]},{name:"salamence",role:"physical-sweeper",nature:"jolly",ability:"intimidate",item:"life-orb",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["dragon-dance","dual-wingbeat","earthquake","protect"]},{name:"arcanine",role:"support",nature:"adamant",ability:"intimidate",item:"sitrus-berry",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["flare-blitz","extreme-speed","will-o-wisp","protect"]},{name:"milotic",role:"wall",nature:"bold",ability:"competitive",item:"leftovers",evs:{hp:252,atk:0,def:252,spa:0,spd:4,spe:0},moves:["scald","ice-beam","recover","protect"]},{name:"heatran",role:"special-sweeper",nature:"modest",ability:"flash-fire",item:"leftovers",evs:{hp:252,atk:0,def:0,spa:252,spd:4,spe:0},moves:["heat-wave","flash-cannon","earth-power","protect"]},{name:"rillaboom",role:"physical-sweeper",nature:"adamant",ability:"grassy-surge",item:"miracle-seed",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["grassy-glide","wood-hammer","knock-off","fake-out"]},{name:"incineroar",role:"support",nature:"adamant",ability:"intimidate",item:"sitrus-berry",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["flare-blitz","knock-off","fake-out","parting-shot"]},{name:"urshifu-rapid-strike",role:"physical-sweeper",nature:"jolly",ability:"unseen-fist",item:"choice-band",evs:{hp:0,atk:252,def:0,spa:0,spd:4,spe:252},moves:["surging-strikes","close-combat","aqua-jet","u-turn"]},{name:"zapdos",role:"special-sweeper",nature:"timid",ability:"static",item:"life-orb",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["thunderbolt","heat-wave","hurricane","protect"]},{name:"kingdra",role:"special-sweeper",nature:"modest",ability:"swift-swim",item:"life-orb",evs:{hp:0,atk:0,def:0,spa:252,spd:4,spe:252},moves:["hydro-pump","draco-meteor","ice-beam","protect"]},{name:"conkeldurr",role:"physical-sweeper",nature:"adamant",ability:"guts",item:"flame-orb",evs:{hp:252,atk:252,def:0,spa:0,spd:4,spe:0},moves:["close-combat","mach-punch","knock-off","protect"]}],$u={easy:{ivBase:20,evMultiplier:.6,levelRange:[45,48],teamSize:6},normal:{ivBase:28,evMultiplier:.85,levelRange:[48,50],teamSize:6},hard:{ivBase:31,evMultiplier:1,levelRange:[50,50],teamSize:6}},LT=[{name:"Hyper Offense",roles:["physical-sweeper","special-sweeper","physical-sweeper","support","special-sweeper","physical-sweeper"]},{name:"Balanced",roles:["physical-sweeper","special-sweeper","wall","support","physical-sweeper","wall"]},{name:"Bulky Offense",roles:["physical-sweeper","wall","support","special-sweeper","wall","support"]},{name:"Trick Room",roles:["support","physical-sweeper","wall","special-sweeper","support","physical-sweeper"]},{name:"Weather",roles:["physical-sweeper","special-sweeper","support","wall","physical-sweeper","special-sweeper"]},{name:"Intimidate Spam",roles:["support","support","special-sweeper","physical-sweeper","wall","physical-sweeper"]}];function OT(n){const e=[...n];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Fu(n){return n[Math.floor(Math.random()*n.length)]}function $T(n="normal"){const e=$u[n]||$u.normal,t=Fu(LT),s=new Set,r=new Map,i=[];for(const a of t.roles){const c=Ou.filter(f=>f.role===a&&!s.has(f.name));if(c.length===0){const f=Ou.filter(g=>!s.has(g.name));if(f.length===0)break;const m=Fu(f);s.add(m.name),i.push(Bu(m,e));continue}const l=OT(c);let h=l[0];for(const f of l)if((r.get(f.name.split("-")[0])||0)===0){h=f;break}s.add(h.name),i.push(Bu(h,e))}return{archetype:t.name,team:i}}function Bu(n,e){const t=Math.floor(Math.random()*(e.levelRange[1]-e.levelRange[0]+1))+e.levelRange[0],s=Math.min(31,e.ivBase+Math.floor(Math.random()*(32-e.ivBase))),r={hp:s,atk:s,def:s,spa:s,spd:s,spe:s},i={};for(const[a,c]of Object.entries(n.evs))i[a]=Math.floor(c*e.evMultiplier);return{name:n.name,species:n.name,types:[],ability:n.ability,item:n.item,nature:n.nature,level:t,moves:[...n.moves],evs:i,ivs:r,baseStats:null,sprite:""}}async function FT(n){const e=bv(Za,"users"),t=await Ov(e),s=[];return t.forEach(r=>{const i=r.data();i.displayName&&i.displayName.toLowerCase().includes(n.toLowerCase())&&s.push({uid:r.id,displayName:i.displayName,teams:i.teams||[],activeTeamIndex:i.activeTeamIndex||0})}),s}async function BT(n){var a;const e=xd(Za,"users",n),t=await zd(e);if(!t.exists())return null;const s=t.data(),r=s.activeTeamIndex||0,i=(a=s.teams)==null?void 0:a[r];return{displayName:s.displayName,teamName:(i==null?void 0:i.name)||"Team",slots:(i==null?void 0:i.slots)||[]}}let N=null;async function Uu(n,e,t){var l,h;if(!n||!n.name)return null;let s;try{s=await _n(n.name)}catch{return null}const r=Yn(s),i=Hn(r,n.ivs||{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},n.evs||{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},n.level||50,n.nature||"adamant"),a=s.types.map(f=>f.type.name),c=[];for(const f of n.moves)if(f)try{const m=await zs(f);c.push({name:f,displayName:oe(f),type:m.type.name,power:m.power||0,category:m.damage_class.name,accuracy:m.accuracy||100,pp:m.pp,maxPp:m.pp,priority:m.priority||0,meta:m.meta,effectChance:m.effect_chance,target:((l=m.target)==null?void 0:l.name)||"selected-pokemon",statChanges:m.stat_changes||[]})}catch{}return{name:n.name,species:Ze(n.name),id:s.id,types:a,ability:n.ability||((h=s.abilities[0])==null?void 0:h.ability.name)||"",item:n.item||"",nature:n.nature||"adamant",level:n.level||50,moves:c,stats:i,baseStats:r,currentHp:i.hp,maxHp:i.hp,sprite:ze(s.id),boosts:{atk:0,def:0,spa:0,spd:0,spe:0,accuracy:0,evasion:0},status:null,toxicCounter:0,sleepTurns:0,isPlayer:e,slotIndex:t,protectActive:!1,protectConsecutive:!1}}function qs(n,e,{isCrit:t=!1,isAttacker:s=!0}={}){const r=n.stats[e];let i=n.boosts[e]||0;t&&(s&&i<0&&(i=0),!s&&i>0&&(i=0));const c=[2/8,2/7,2/6,2/5,2/4,2/3,2/2,3/2,4/2,5/2,6/2,7/2,8/2][i+6]||1;let l=Math.floor(r*c);return e==="atk"&&(n.ability==="huge-power"||n.ability==="pure-power")&&(l=Math.floor(l*2)),e==="atk"&&n.ability==="guts"&&n.status?l=Math.floor(l*1.5):e==="atk"&&n.status==="burn"&&!t&&(l=Math.floor(l*.5)),e==="spe"&&n.status==="paralyze"&&(l=Math.floor(l*.5)),e==="spe"&&n.item==="choice-scarf"&&(l=Math.floor(l*1.5)),e==="spd"&&n.item==="assault-vest"&&(l=Math.floor(l*1.5)),(e==="def"||e==="spd")&&n.item==="eviolite"&&(l=Math.floor(l*1.5)),l}function Oi(n,e){var s;let t=1;for(const r of e)t*=((s=Hr[n])==null?void 0:s[r])??1;return t}function UT(n,e,t,s=!1){if(t.category==="status"||t.power===0)return 0;const r=n.level,i=t.category==="physical",a=qs(n,i?"atk":"spa",{isCrit:s,isAttacker:!0}),c=qs(e,i?"def":"spd",{isCrit:s,isAttacker:!1});let l=t.power;n.ability==="technician"&&l<=60&&(l=Math.floor(l*1.5));let h=Math.floor(Math.floor(Math.floor(2*r/5+2)*l*a/c)/50)+2;const f=N==null?void 0:N.weather;f==="sun"&&t.type==="fire"?h=Math.floor(h*1.5):f==="sun"&&t.type==="water"?h=Math.floor(h*.5):f==="rain"&&t.type==="water"?h=Math.floor(h*1.5):f==="rain"&&t.type==="fire"&&(h=Math.floor(h*.5)),s&&(h=Math.floor(h*1.5));let m=1;n.types.includes(t.type)&&(m=n.ability==="adaptability"?2:1.5);const g=Oi(t.type,e.types);if(g===0||e.ability==="levitate"&&t.type==="ground"||e.ability==="flash-fire"&&t.type==="fire"||(e.ability==="water-absorb"||e.ability==="storm-drain")&&t.type==="water"||(e.ability==="volt-absorb"||e.ability==="lightning-rod")&&t.type==="electric")return 0;let v=1;n.item==="life-orb"?v=1.3:n.item==="choice-band"&&i||n.item==="choice-specs"&&!i?v=1.5:n.item==="expert-belt"&&g>1&&(v=1.2);let S=1;e.ability==="multiscale"&&e.currentHp===e.maxHp&&(S*=.5),(e.ability==="filter"||e.ability==="solid-rock")&&g>1&&(S*=.75),e.ability==="thick-fat"&&(t.type==="fire"||t.type==="ice")&&(S*=.5),n.ability==="sheer-force"&&t.effectChance&&t.effectChance>0&&(S*=1.3);const V=t.target==="all-opponents"||t.target==="all-other-pokemon"?.75:1,O=Math.floor(Math.random()*16)+85;let M=h;return M=Math.floor(M*V),M=Math.floor(M*O/100),M=Math.floor(M*m),M=Math.floor(M*g),M=Math.floor(M*v),M=Math.floor(M*S),M=Math.max(M,1),M}function Hu(n,e,t,s){var f,m;const r=[],i=t.meta;if(!i)return r;const a=(f=i.ailment)==null?void 0:f.name;(m=i.category)==null||m.name,i.stat_changes,i.drain;const c=i.healing||0,l=t.effectChance||100,h=Math.random()*100<l;if(n.ability==="sheer-force"&&t.category!=="status"&&t.effectChance)return r;if(a&&a!=="none"&&!e.status&&h){const g={burn:"burn",paralysis:"paralyze",poison:"poison",freeze:"freeze",sleep:"sleep",toxic:"toxic"},v={burn:["fire"],paralyze:["electric"],poison:["poison","steel"],toxic:["poison","steel"],freeze:["ice"]},S=g[a];if(S){const C=(v[S]||[]).some(O=>e.types.includes(O)),V=S==="paralyze"&&e.ability==="limber"||(S==="poison"||S==="toxic")&&e.ability==="immunity"||S==="burn"&&e.ability==="water-veil"||S==="sleep"&&(e.ability==="insomnia"||e.ability==="vital-spirit");!C&&!V&&(e.status=S,S==="toxic"&&(e.toxicCounter=0),S==="sleep"&&(e.sleepTurns=Math.floor(Math.random()*3)+1),r.push({type:"status",target:e.species,status:S}))}}if(c>0){const g=Math.floor(n.maxHp*c/100);n.currentHp=Math.min(n.maxHp,n.currentHp+g),r.push({type:"heal",target:n.species,amount:g})}if((t.name==="protect"||t.name==="detect"||t.name==="wide-guard"||t.name==="quick-guard"||t.name==="baneful-bunker"||t.name==="kings-shield")&&(n.protectConsecutive&&Math.random()<.5?r.push({type:"miss",text:"But it failed!"}):(n.protectActive=!0,n.protectConsecutive=!0,r.push({type:"protect",text:`${n.species} protected itself!`}))),t.name==="rain-dance"?(N.weather="rain",N.weatherTurns=n.item==="damp-rock"?8:5,r.push({type:"residual",text:"It started to rain!"})):t.name==="sunny-day"?(N.weather="sun",N.weatherTurns=n.item==="heat-rock"?8:5,r.push({type:"residual",text:"The sunlight got harsh!"})):t.name==="sandstorm"?(N.weather="sandstorm",N.weatherTurns=n.item==="smooth-rock"?8:5,r.push({type:"residual",text:"A sandstorm kicked up!"})):t.name==="hail"&&(N.weather="hail",N.weatherTurns=n.item==="icy-rock"?8:5,r.push({type:"residual",text:"It started to hail!"})),t.name==="trick-room"&&(N.trickRoom>0?(N.trickRoom=0,r.push({type:"residual",text:"Trick Room wore off!"})):(N.trickRoom=5,r.push({type:"residual",text:"Trick Room distorted the dimensions!"}))),t.name==="tailwind"){const g=n.isPlayer?N.player:N.opponent;for(const v of g.active){const S=g.team[v];if(S&&S.currentHp>0){const C=S.boosts.spe||0;S.boosts.spe=Math.min(6,C+2)}}r.push({type:"boost",text:`Tailwind blew from behind ${n.isPlayer?"your":"the opponent's"} team!`})}return r}function HT(n,e,t){const s=[],i={"swords-dance":{target:"self",boosts:{atk:2}},"nasty-plot":{target:"self",boosts:{spa:2}},"dragon-dance":{target:"self",boosts:{atk:1,spe:1}},"calm-mind":{target:"self",boosts:{spa:1,spd:1}},"bulk-up":{target:"self",boosts:{atk:1,def:1}},"iron-defense":{target:"self",boosts:{def:2}},agility:{target:"self",boosts:{spe:2}},"quiver-dance":{target:"self",boosts:{spa:1,spd:1,spe:1}},"shell-smash":{target:"self",boosts:{atk:2,spa:2,spe:2,def:-1,spd:-1}},"work-up":{target:"self",boosts:{atk:1,spa:1}},coil:{target:"self",boosts:{atk:1,def:1,accuracy:1}},"tail-glow":{target:"self",boosts:{spa:3}},"cotton-guard":{target:"self",boosts:{def:3}},charm:{target:"foe",boosts:{atk:-2}},"fake-tears":{target:"foe",boosts:{spd:-2}},screech:{target:"foe",boosts:{def:-2}},growl:{target:"foe",boosts:{atk:-1}},leer:{target:"foe",boosts:{def:-1}},"helping-hand":{target:"self",boosts:{}}}[t.name];if(i){const a=i.target==="self"?n:e;for(const[c,l]of Object.entries(i.boosts)){if(l<0&&i.target==="foe"&&(a.ability==="clear-body"||a.ability==="white-smoke")){s.push({type:"boost",text:`${a.species}'s ${a.ability==="clear-body"?"Clear Body":"White Smoke"} prevents stat loss!`});continue}const h=a.boosts[c]||0;a.boosts[c]=Math.max(-6,Math.min(6,h+l));const f=l>0?"rose":"fell",m=Math.abs(l)>=3?" drastically":Math.abs(l)===2?" sharply":"";s.push({type:"boost",target:a.species,stat:c,change:l,text:`${a.species}'s ${c.toUpperCase()}${m} ${f}!`})}}return s}function qT(n,e,t){if(t.accuracy===null)return!0;const s=(n.boosts.accuracy||0)-(e.boosts.evasion||0),i=[3/9,3/8,3/7,3/6,3/5,3/4,3/3,4/3,5/3,6/3,7/3,8/3,9/3][Math.max(0,Math.min(12,s+6))],a=t.accuracy*i;return Math.random()*100<a}function jT(n){const e=[];if(n.currentHp<=0)return e;switch(n.status){case"burn":{const s=Math.max(1,Math.floor(n.maxHp/16));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is hurt by its burn! (-${s} HP)`});break}case"poison":{if(n.ability==="poison-heal")break;const s=Math.max(1,Math.floor(n.maxHp/8));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is hurt by poison! (-${s} HP)`});break}case"toxic":{if(n.ability==="poison-heal")break;n.toxicCounter++;const s=Math.max(1,Math.floor(n.maxHp*n.toxicCounter/16));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is badly poisoned! (-${s} HP)`});break}}const t=N==null?void 0:N.weather;if(t==="sandstorm"&&!["rock","ground","steel"].some(s=>n.types.includes(s))&&n.ability!=="sand-veil"&&n.ability!=="sand-rush"&&n.ability!=="sand-force"&&n.ability!=="magic-guard"&&n.ability!=="overcoat"){const s=Math.max(1,Math.floor(n.maxHp/16));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is buffeted by the sandstorm! (-${s} HP)`})}if(t==="hail"&&!n.types.includes("ice")&&n.ability!=="ice-body"&&n.ability!=="snow-cloak"&&n.ability!=="magic-guard"&&n.ability!=="overcoat"){const s=Math.max(1,Math.floor(n.maxHp/16));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is buffeted by hail! (-${s} HP)`})}if(n.ability==="poison-heal"&&(n.status==="poison"||n.status==="toxic")&&n.currentHp<n.maxHp){const s=Math.max(1,Math.floor(n.maxHp/8));n.currentHp=Math.min(n.maxHp,n.currentHp+s),e.push({type:"residual",text:`${n.species} restored HP with Poison Heal! (+${s} HP)`})}if(n.item==="leftovers"&&n.currentHp<n.maxHp&&n.currentHp>0){const s=Math.max(1,Math.floor(n.maxHp/16));n.currentHp=Math.min(n.maxHp,n.currentHp+s),e.push({type:"residual",text:`${n.species} restored HP with Leftovers! (+${s} HP)`})}if(n.item==="black-sludge"&&n.currentHp>0)if(n.types.includes("poison")){if(n.currentHp<n.maxHp){const s=Math.max(1,Math.floor(n.maxHp/16));n.currentHp=Math.min(n.maxHp,n.currentHp+s),e.push({type:"residual",text:`${n.species} restored HP with Black Sludge! (+${s} HP)`})}}else{const s=Math.max(1,Math.floor(n.maxHp/8));n.currentHp=Math.max(0,n.currentHp-s),e.push({type:"residual",text:`${n.species} is hurt by Black Sludge! (-${s} HP)`})}if(n.item==="sitrus-berry"&&n.currentHp>0&&n.currentHp<=n.maxHp/2){const s=Math.max(1,Math.floor(n.maxHp/4));n.currentHp=Math.min(n.maxHp,n.currentHp+s),n.item="",e.push({type:"residual",text:`${n.species} restored HP with its Sitrus Berry! (+${s} HP)`})}if(n.ability==="speed-boost"){const s=n.boosts.spe||0;s<6&&(n.boosts.spe=s+1,e.push({type:"boost",text:`${n.species}'s Speed Boost raised its SPE!`}))}return e}function zT(n,e){var l,h,f;const t=[],{attacker:s,defender:r,move:i}=n;if(s.currentHp<=0)return t;if(r&&r.currentHp<=0){const m=r.isPlayer?N.player:N.opponent,g=m.active.map(v=>m.team[v]).find(v=>v&&v!==r&&v.currentHp>0);if(g)n.defender=g;else return t}const a=n.defender;if(s.status==="paralyze"&&Math.random()<.25)return t.push({type:"cant-move",text:`${s.species} is paralyzed and can't move!`}),t;if(s.status==="sleep")if(s.sleepTurns!==void 0&&s.sleepTurns>0)if(s.sleepTurns--,s.sleepTurns<=0)s.status=null,t.push({type:"wake",text:`${s.species} woke up!`});else return t.push({type:"cant-move",text:`${s.species} is fast asleep!`}),t;else if(Math.random()<.33)s.status=null,t.push({type:"wake",text:`${s.species} woke up!`});else return t.push({type:"cant-move",text:`${s.species} is fast asleep!`}),t;if(s.status==="freeze")if(Math.random()<.2||i.type==="fire")s.status=null,t.push({type:"thaw",text:`${s.species} thawed out!`});else return t.push({type:"cant-move",text:`${s.species} is frozen solid!`}),t;if(t.push({type:"use-move",text:`${s.species} used ${i.displayName}!`}),a&&a.protectActive)return t.push({type:"protected",text:`${a.species} protected itself!`}),t;if(a&&!qT(s,a,i))return t.push({type:"miss",text:`${s.species}'s attack missed!`}),t;const c=HT(s,a,i);if(t.push(...c),i.category==="status"){if(a){const m=Hu(s,a,i);t.push(...m)}return t}if(a){const m=["slash","stone-edge","night-slash","cross-chop","psycho-cut","leaf-blade","crabhammer","cross-poison","shadow-claw","drill-run","razor-leaf","air-cutter","attack-order","spacial-rend"];let g=0;m.includes(i.name)&&(g+=1),s.ability==="super-luck"&&(g+=1),(s.item==="scope-lens"||s.item==="razor-claw")&&(g+=1);const S=[1/24,1/8,1/2,1][Math.min(g,3)],C=Math.random()<S,V=a.ability==="battle-armor"||a.ability==="shell-armor",O=C&&!V,M=UT(s,a,i,O),F=Oi(i.type,a.types);if(M>0){let j=M;a.item==="focus-sash"&&a.currentHp===a.maxHp&&j>=a.currentHp&&(j=a.currentHp-1,a.item="",t.push({type:"resist",text:`${a.species} held on with its Focus Sash!`})),a.ability==="sturdy"&&a.currentHp===a.maxHp&&j>=a.currentHp&&(j=a.currentHp-1,t.push({type:"resist",text:`${a.species} endured the hit with Sturdy!`})),a.currentHp=Math.max(0,a.currentHp-j),O&&t.push({type:"crit",text:"A critical hit!"}),F>1?t.push({type:"effective",text:"It's super effective!"}):F<1&&F>0?t.push({type:"resist",text:"It's not very effective..."}):F===0&&t.push({type:"immune",text:`It doesn't affect ${a.species}...`}),t.push({type:"damage",target:a.species,damage:j,hpLeft:a.currentHp,maxHp:a.maxHp}),i.type==="fire"&&a.status==="freeze"&&a.currentHp>0&&(a.status=null,t.push({type:"thaw",text:`${a.species} was thawed by the fire attack!`}));const K=((l=i.meta)==null?void 0:l.drain)||0;if(K>0){const b=Math.floor(j*K/100);s.currentHp=Math.min(s.maxHp,s.currentHp+b),t.push({type:"drain",text:`${s.species} drained ${b} HP!`})}const q=((h=i.meta)==null?void 0:h.drain)||0;if(q<0){const b=Math.max(1,Math.floor(j*Math.abs(q)/100));s.ability!=="rock-head"&&(s.currentHp=Math.max(0,s.currentHp-b),t.push({type:"recoil",text:`${s.species} was hurt by recoil! (-${b} HP)`}))}if(s.item==="life-orb"&&!(s.ability==="sheer-force"&&i.effectChance)){const b=Math.max(1,Math.floor(s.maxHp/10));s.currentHp=Math.max(0,s.currentHp-b),t.push({type:"recoil",text:`${s.species} lost some HP from Life Orb!`})}if(i.effectChance&&Math.random()*100<i.effectChance){const b=Hu(s,a,i);t.push(...b)}if(i.statChanges&&i.statChanges.length>0&&s.currentHp>0)for(const b of i.statChanges){const y=(f=b.stat)==null?void 0:f.name,_=b.change;if(!y||!_)continue;const T={attack:"atk",defense:"def","special-attack":"spa","special-defense":"spd",speed:"spe",accuracy:"accuracy",evasion:"evasion"}[y];if(!T)continue;const A=s.boosts[T]||0;s.boosts[T]=Math.max(-6,Math.min(6,A+_));const E=_>0?"rose":"fell",Ae=Math.abs(_)>=3?" drastically":Math.abs(_)===2?" sharply":"";t.push({type:"boost",text:`${s.species}'s ${T.toUpperCase()}${Ae} ${E}!`})}s.currentHp<=0&&t.push({type:"faint",text:`${s.species} fainted!`}),a.currentHp<=0&&t.push({type:"faint",text:`${a.species} fainted!`})}else t.push({type:"immune",text:`It doesn't affect ${a.species}...`})}return t}function WT(n){const e=(N==null?void 0:N.trickRoom)>0;return n.sort((t,s)=>{const r=t.move.priority||0,i=s.move.priority||0;if(r!==i)return i-r;const a=qs(t.attacker,"spe"),c=qs(s.attacker,"spe");return a!==c?e?a-c:c-a:Math.random()-.5})}function GT(n,e){if(!N||N.phase!=="battle")return[];N.turn++;const t=[{type:"turn-start",turn:N.turn}];N.trickRoom>0&&(N.trickRoom--,N.trickRoom===0&&t.push({type:"residual",text:"Trick Room wore off!"})),N.weatherTurns>0&&(N.weatherTurns--,N.weatherTurns===0&&(t.push({type:"residual",text:`The ${N.weather} subsided!`}),N.weather=null));const s=[...N.player.team,...N.opponent.team];s.forEach(c=>{c&&(c.protectActive||(c.protectConsecutive=!1),c.protectActive=!1)});const r=[...n,...e];WT(r);for(const c of r){const l=zT(c);t.push(...l)}for(const c of s)if(c&&c.currentHp>0){const l=jT(c);t.push(...l),c.currentHp<=0&&t.push({type:"faint",text:`${c.species} fainted!`})}KT();const i=N.player.team.filter(c=>c&&c.currentHp>0).length,a=N.opponent.team.filter(c=>c&&c.currentHp>0).length;return i===0?(N.phase="ended",N.winner="opponent",t.push({type:"battle-end",winner:"opponent"})):a===0&&(N.phase="ended",N.winner="player",t.push({type:"battle-end",winner:"player"})),N.log.push(...t),t}function KT(){for(const n of[N.player,N.opponent])for(let e=0;e<n.team.length;e++)n.team[e]&&n.team[e].currentHp<=0&&n.fainted.add(e)}function nc(n){const e=[];for(let t=0;t<n.team.length;t++)!n.active.includes(t)&&!n.fainted.has(t)&&n.team[t]&&e.push({index:t,mon:n.team[t]});return e}function qu(n,e,t){n.active[e]=t;const s=n.team[t],r=[{type:"switch",text:`${s.species} was sent out!`}];if(s.ability==="intimidate"){const i=n===N.player?N.opponent:N.player;for(const a of i.active){const c=i.team[a];if(c&&c.currentHp>0)if(c.ability==="clear-body"||c.ability==="white-smoke"||c.ability==="hyper-cutter")r.push({type:"boost",text:`${c.species}'s ${c.ability==="hyper-cutter"?"Hyper Cutter":c.ability==="clear-body"?"Clear Body":"White Smoke"} prevents Intimidate!`});else{const l=c.boosts.atk||0;if(c.boosts.atk=Math.max(-6,l-1),r.push({type:"boost",text:`${s.species}'s Intimidate lowered ${c.species}'s ATK!`}),c.ability==="defiant"&&(c.boosts.atk=Math.min(6,c.boosts.atk+2),r.push({type:"boost",text:`${c.species}'s Defiant raised its ATK sharply!`})),c.ability==="competitive"){const h=c.boosts.spa||0;c.boosts.spa=Math.min(6,h+2),r.push({type:"boost",text:`${c.species}'s Competitive raised its SPA sharply!`})}}}}return s.ability==="drizzle"?(N.weather="rain",N.weatherTurns=5,r.push({type:"residual",text:`${s.species}'s Drizzle made it rain!`})):s.ability==="drought"?(N.weather="sun",N.weatherTurns=5,r.push({type:"residual",text:`${s.species}'s Drought intensified the sun!`})):s.ability==="sand-stream"?(N.weather="sandstorm",N.weatherTurns=5,r.push({type:"residual",text:`${s.species}'s Sand Stream whipped up a sandstorm!`})):s.ability==="snow-warning"&&(N.weather="hail",N.weatherTurns=5,r.push({type:"residual",text:`${s.species}'s Snow Warning summoned a hailstorm!`})),r}function Lf(n){const e=[];for(let t=0;t<n.active.length;t++){const s=n.active[t];n.team[s]&&n.team[s].currentHp<=0&&nc(n).length>0&&e.push(t)}return e}function QT(n){const e=[],t=n===N.player?N.opponent:N.player;for(const s of n.active){const r=n.team[s];if(!r||r.currentHp<=0||r.moves.length===0)continue;const i=t.active.map(h=>t.team[h]).filter(h=>h&&h.currentHp>0);if(i.length===0)continue;let a=r.moves[0],c=i[0],l=-1/0;for(const h of r.moves)if(!(h.pp<=0))for(const f of i){let m=0;if(h.category==="status")["swords-dance","nasty-plot","dragon-dance","calm-mind","quiver-dance","shell-smash"].includes(h.name)?m=60-N.turn*10:f.status?m=-50:m=30;else{const g=Oi(h.type,f.types),v=r.types.includes(h.type)?1.5:1,S=h.category==="physical",C=qs(r,S?"atk":"spa");m=(h.power||0)*g*v*(C/100),f.currentHp<f.maxHp*.3&&(m*=1.5),g===0&&(m=-100)}m>l&&(l=m,a=h,c=f)}a.pp--,e.push({attacker:r,defender:c,move:a})}return e}function YT(n){const e=n===N.player?N.opponent:N.player,t=nc(n);if(t.length===0)return null;const s=e.active.map(a=>e.team[a]).filter(a=>a&&a.currentHp>0);let r=t[0].index,i=-1/0;for(const{index:a,mon:c}of t){let l=c.currentHp/c.maxHp*50;for(const h of s)for(const f of c.moves){if(f.category==="status")continue;const m=Oi(f.type,h.types),g=c.types.includes(f.type)?1.5:1;l+=(f.power||0)*m*g*.1}l>i&&(i=l,r=a)}return r}async function JT(n,e,t,s){const r=[];for(let c=0;c<e.length;c++){const l=await Uu(e[c],!0,c);l&&r.push(l)}const i=[];for(let c=0;c<t.length;c++){const l=await Uu(t[c],!1,c);l&&i.push(l)}N={mode:n,player:{name:P("battle.you"),team:r,active:[0,Math.min(1,r.length-1)],fainted:new Set},opponent:{name:s||P("battle.opponent"),team:i,active:[0,Math.min(1,i.length-1)],fainted:new Set},log:[],turn:0,phase:"battle",winner:null,weather:null,weatherTurns:0,trickRoom:0};const a=[];for(const c of[N.player,N.opponent])for(const l of c.active){const h=c.team[l];h&&(h.ability==="drizzle"?(N.weather="rain",N.weatherTurns=5,a.push({type:"residual",text:`${h.species}'s Drizzle made it rain!`})):h.ability==="drought"?(N.weather="sun",N.weatherTurns=5,a.push({type:"residual",text:`${h.species}'s Drought intensified the sun!`})):h.ability==="sand-stream"?(N.weather="sandstorm",N.weatherTurns=5,a.push({type:"residual",text:`${h.species}'s Sand Stream kicked up a sandstorm!`})):h.ability==="snow-warning"&&(N.weather="hail",N.weatherTurns=5,a.push({type:"residual",text:`${h.species}'s Snow Warning summoned hail!`})))}for(const c of[N.player,N.opponent]){const l=c===N.player?N.opponent:N.player;for(const h of c.active){const f=c.team[h];if(!(!f||f.ability!=="intimidate"))for(const m of l.active){const g=l.team[m];if(g&&g.currentHp>0)if(g.ability==="clear-body"||g.ability==="white-smoke"||g.ability==="hyper-cutter")a.push({type:"boost",text:`${g.species}'s ability prevents Intimidate!`});else{const v=g.boosts.atk||0;g.boosts.atk=Math.max(-6,v-1),a.push({type:"boost",text:`${f.species}'s Intimidate lowered ${g.species}'s ATK!`}),g.ability==="defiant"&&(g.boosts.atk=Math.min(6,g.boosts.atk+2),a.push({type:"boost",text:`${g.species}'s Defiant raised its ATK sharply!`})),g.ability==="competitive"&&(g.boosts.spa=Math.min(6,(g.boosts.spa||0)+2),a.push({type:"boost",text:`${g.species}'s Competitive raised its SPA sharply!`}))}}}}return N.log.push(...a),N}function $i(){return N}function XT(){N=null}let Je=new Set,Fi="menu",Qe=[],Bi=null,Ui="",sc=null,Of="normal",js=[],Hi=[],Ms=!1;function ZT(){Et()}function eI(){Fi==="menu"&&Et()}function Et(){Fi="menu",XT(),Je.clear(),js=[],Hi=[],Ms=!1;const n=document.getElementById("battle-container");n.innerHTML=`
    <div class="battle-menu">
      <h2 class="battle-title">⚔️ ${P("battle.title")}</h2>
      <p class="battle-subtitle">${P("battle.subtitle")}</p>

      <div class="battle-mode-cards">
        <div class="battle-mode-card" id="btn-pve">
          <div class="mode-icon">🤖</div>
          <h3>${P("battle.pve")}</h3>
          <p>${P("battle.pveDesc")}</p>
          <div class="difficulty-selector">
            <label>${P("battle.difficulty")}</label>
            <select id="pve-difficulty" class="select-input">
              <option value="easy">${P("battle.easy")}</option>
              <option value="normal" selected>${P("battle.normal")}</option>
              <option value="hard">${P("battle.hard")}</option>
            </select>
          </div>
          <button class="btn btn-primary battle-start-btn" id="btn-start-pve">${P("battle.startPVE")}</button>
        </div>

        <div class="battle-mode-card" id="btn-pvp">
          <div class="mode-icon">👥</div>
          <h3>${P("battle.pvp")}</h3>
          <p>${P("battle.pvpDesc")}</p>
          <div class="pvp-search">
            <input type="text" id="pvp-search-input" class="search-input" placeholder="${P("battle.searchTrainer")}">
            <button class="btn btn-secondary" id="btn-search-trainer">${P("battle.search")}</button>
          </div>
          <div id="pvp-results" class="pvp-results"></div>
        </div>
      </div>
    </div>
  `,document.getElementById("btn-start-pve").addEventListener("click",()=>{Of=document.getElementById("pve-difficulty").value,sc="pve",tI()}),document.getElementById("btn-search-trainer").addEventListener("click",ju),document.getElementById("pvp-search-input").addEventListener("keydown",e=>{e.key==="Enter"&&ju()})}async function tI(){const n=document.getElementById("battle-container");n.innerHTML=`<div class="battle-loading"><div class="spinner"></div><p>${P("battle.generating")}</p></div>`;const{archetype:e,team:t}=$T(Of);Bi=t,Ui=`AI (${e})`,$f()}async function ju(){const n=document.getElementById("pvp-search-input"),e=document.getElementById("pvp-results"),t=n.value.trim();if(t){e.innerHTML='<div class="spinner" style="margin:10px auto"></div>';try{const s=await FT(t);if(s.length===0){e.innerHTML=`<p class="no-results">${P("battle.noTrainerFound")}</p>`;return}e.innerHTML=s.map(r=>`
      <div class="trainer-result" data-uid="${r.uid}">
        <span class="trainer-result-name">🎮 ${r.displayName}</span>
        <span class="trainer-result-teams">${r.teams.length} ${P("battle.teams")}</span>
        <button class="btn btn-sm btn-primary btn-challenge" data-uid="${r.uid}">${P("battle.challenge")}</button>
      </div>
    `).join(""),e.querySelectorAll(".btn-challenge").forEach(r=>{r.addEventListener("click",async()=>{sc="pvp",await nI(r.dataset.uid)})})}catch{e.innerHTML=`<p class="no-results">${P("battle.searchError")}</p>`}}}async function nI(n){const e=document.getElementById("battle-container");e.innerHTML=`<div class="battle-loading"><div class="spinner"></div><p>${P("battle.loading")}</p></div>`;try{const t=await BT(n);if(!t||!t.slots||t.slots.filter(s=>s.name).length===0){e.innerHTML=`<div class="battle-error"><p>${P("battle.noTeamFound")}</p><button class="btn btn-secondary" id="btn-back-menu">${P("battle.back")}</button></div>`,document.getElementById("btn-back-menu").addEventListener("click",Et);return}Bi=t.slots,Ui=t.displayName,$f()}catch{e.innerHTML=`<div class="battle-error"><p>${P("battle.searchError")}</p><button class="btn btn-secondary" id="btn-back-menu">${P("battle.back")}</button></div>`,document.getElementById("btn-back-menu").addEventListener("click",Et)}}function $f(){Fi="select-team",Je.clear();const n=Li();if(n.filter(s=>s&&s.name).length<2){const s=document.getElementById("battle-container");s.innerHTML=`
      <div class="battle-error">
        <p>${P("battle.needTeam")}</p>
        <button class="btn btn-secondary" id="btn-back-menu">${P("battle.back")}</button>
      </div>`,document.getElementById("btn-back-menu").addEventListener("click",Et);return}const t=document.getElementById("battle-container");t.innerHTML=`
    <div class="team-preview">
      <button class="btn btn-secondary battle-back-btn" id="btn-back-menu">← ${P("battle.back")}</button>
      <h2>⚔️ ${P("battle.teamPreview")}</h2>

      <div class="preview-sides">
        <div class="preview-side">
          <h3>👤 ${P("battle.yourTeam")} <span class="select-hint">(${P("battle.select4")})</span></h3>
          <div class="preview-slots player-preview" id="player-preview">
            ${n.map((s,r)=>s&&s.name?zu(s,r,!0):"").join("")}
          </div>
        </div>

        <div class="preview-vs">VS</div>

        <div class="preview-side">
          <h3>🎯 ${Ui}</h3>
          <div class="preview-slots opponent-preview" id="opponent-preview">
            ${Bi.map((s,r)=>s&&s.name?zu(s,r,!1):"").join("")}
          </div>
        </div>
      </div>

      <div class="preview-actions">
        <p id="selection-count" class="selection-count">${P("battle.selected")}: 0/4</p>
        <button class="btn btn-primary btn-lg" id="btn-start-battle" disabled>${P("battle.startBattle")}</button>
      </div>
    </div>
  `,document.getElementById("btn-back-menu").addEventListener("click",Et),t.querySelectorAll(".preview-slot.selectable").forEach(s=>{s.addEventListener("click",()=>{const r=parseInt(s.dataset.index);Je.has(r)?(Je.delete(r),s.classList.remove("selected")):Je.size<4&&(Je.add(r),s.classList.add("selected")),sI()})}),document.getElementById("btn-start-battle").addEventListener("click",()=>{Je.size>=2&&Je.size<=4&&rI()})}function zu(n,e,t){const s=n.sprite||(n.id?ze(n.id):ze(n.name)),r=(n.types||[]).map(i=>`<span class="type-badge" style="background:${Gt[i]||"#888"}">${i}</span>`).join("");return`
    <div class="preview-slot ${t?"selectable":""}" data-index="${e}">
      <img src="${s}" alt="${n.name}" class="preview-sprite" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
      <div class="preview-name">${Ze(n.name)}</div>
      <div class="preview-types">${r}</div>
      ${t?'<div class="select-check">✓</div>':""}
    </div>
  `}function sI(){const n=document.getElementById("selection-count"),e=document.getElementById("btn-start-battle"),t=Je.size;n.textContent=`${P("battle.selected")}: ${t}/4`,e.disabled=t<2}async function rI(){const n=document.getElementById("battle-container");n.innerHTML=`<div class="battle-loading"><div class="spinner"></div><p>${P("battle.preparing")}</p></div>`;const e=Li(),t=[...Je].map(r=>e[r]).filter(r=>r&&r.name);let s=Bi.filter(r=>r&&r.name);s.length>4&&(s=[...s].sort(()=>Math.random()-.5).slice(0,4));try{await JT(sc,t,s,Ui),Fi="battle",Hi=[],js=[],iI();const r=$i();r&&r.log.length>0&&di(r.log)}catch(r){console.error("Battle init failed:",r),n.innerHTML=`
      <div class="battle-error">
        <p>${P("battle.initError")}</p>
        <button class="btn btn-secondary" id="btn-back-menu">${P("battle.back")}</button>
      </div>`,document.getElementById("btn-back-menu").addEventListener("click",Et)}}function li(n){let e="";for(let t=0;t<n.team.length;t++){const s=n.team[t];if(!s)continue;const r=s.currentHp<=0,i=n.active.includes(t);let a="pokeball-icon";r?a+=" pokeball-fainted":i&&(a+=" pokeball-active"),e+=`<span class="${a}" title="${s.species}"></span>`}return e}function iI(){const n=$i();if(!n)return;const e=document.getElementById("battle-container");e.innerHTML=`
    <div class="bf-wrapper">
      <div class="bf-topbar">
        <button class="btn btn-danger btn-sm" id="btn-forfeit">✕ ${P("battle.forfeit")}</button>
        <span class="bf-turn">${P("battle.turn")} ${n.turn}</span>
      </div>

      <div class="bf-arena">
        <div class="bf-opp-zone">
          <div class="bf-opp-mons">
            ${ui(n.opponent,!1)}
          </div>
          <div class="bf-pokeballs bf-opp-pokeballs">
            ${li(n.opponent)}
          </div>
        </div>

        <div class="bf-field">
          <div class="bf-field-opp-sprites">
            ${hi(n.opponent,!1)}
          </div>
          <div class="bf-field-player-sprites">
            ${hi(n.player,!0)}
          </div>
        </div>

        <div class="bf-player-zone">
          <div class="bf-pokeballs bf-player-pokeballs">
            ${li(n.player)}
          </div>
          <div class="bf-player-mons">
            ${ui(n.player,!0)}
          </div>
        </div>
      </div>

      <div class="bf-bottom">
        <div class="bf-chatlog" id="bf-chatlog">
          <div class="bf-chatlog-header">
            <span>📜 ${P("battle.log")}</span>
          </div>
          <div class="bf-chatlog-messages" id="bf-chatlog-messages">
            ${cI()}
          </div>
          <div class="bf-chatlog-current" id="bf-chatlog-current"></div>
        </div>

        <div class="bf-actions" id="bf-actions">
          ${Ff(n)}
        </div>
      </div>
    </div>
  `,Uf(),Hf(n)}function ui(n,e){return n.active.map(t=>{const s=n.team[t];if(!s)return"";const r=s.maxHp>0?s.currentHp/s.maxHp*100:0,i=r>50?"hp-high":r>20?"hp-mid":"hp-low",a=s.currentHp<=0,c=s.status?`<span class="bf-status bf-status-${s.status}">${s.status.toUpperCase().slice(0,3)}</span>`:"";return`
      <div class="bf-mon-card ${a?"bf-mon-fainted":""} ${e?"bf-card-player":"bf-card-opp"}">
        <div class="bf-card-top">
          <span class="bf-mon-name">${s.species}</span>
          ${c}
          <span class="bf-mon-lv">Lv${s.level}</span>
        </div>
        <div class="bf-hp-bar-wrap">
          <span class="bf-hp-label">HP</span>
          <div class="bf-hp-bar">
            <div class="bf-hp-fill ${i}" style="width:${r}%"></div>
          </div>
        </div>
        ${e?`<div class="bf-hp-numbers">${s.currentHp} / ${s.maxHp}</div>`:""}
      </div>
    `}).join("")}function hi(n,e){return n.active.map(t=>{const s=n.team[t];if(!s)return"";const r=s.currentHp<=0,i="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",a=e?`${i}/back/${s.id}.png`:`${i}/${s.id}.png`;return`
      <div class="bf-field-sprite ${r?"bf-sprite-fainted":""}" title="${s.species}">
        <img src="${a}" alt="${s.species}"
          onerror="this.src='${i}/${s.id}.png'">
        ${r?'<div class="bf-faint-x">✕</div>':""}
      </div>
    `}).join("")}function Ff(n){if(n.phase==="ended")return aI(n);const e=Lf(n.player);if(e.length>0)return oI(n,e);const t=n.player.active.map(r=>n.player.team[r]).filter(r=>r&&r.currentHp>0);if(t.length===0)return"";let s='<div class="bf-move-panel">';for(const r of t){const i=n.opponent.active.map(a=>n.opponent.team[a]).filter(a=>a&&a.currentHp>0);s+=`
      <div class="bf-mon-moves" data-mon-slot="${r.slotIndex}">
        <div class="bf-mon-moves-header">
          <img src="${r.sprite}" class="bf-moves-sprite">
          <strong>${r.species}</strong>
        </div>
        <div class="bf-moves-grid">
          ${r.moves.map((a,c)=>{const l=Gt[a.type]||"#888",h=a.pp<=0?"disabled":"";return`
              <button class="bf-move-btn ${h}" data-mon="${r.slotIndex}" data-move="${c}" ${h}
                style="--move-color: ${l}">
                <span class="bf-move-name">${a.displayName}</span>
                <span class="bf-move-meta">
                  <span class="bf-move-type" style="background:${l}">${a.type}</span>
                  <span>${a.power||"—"}</span>
                  <span class="bf-move-pp">${a.pp}/${a.maxPp}</span>
                </span>
              </button>`}).join("")}
        </div>
        ${i.length>1?`
          <div class="bf-target-select" id="target-${r.slotIndex}" style="display:none">
            <span>${P("battle.selectTarget")}:</span>
            ${i.map(a=>`
              <button class="bf-target-btn" data-mon="${r.slotIndex}" data-target="${a.slotIndex}">
                🎯 ${a.species}
              </button>
            `).join("")}
          </div>
        `:""}
      </div>
    `}return s+="</div>",s+=`<button class="btn btn-primary bf-execute-btn" id="btn-execute-turn" disabled>⚔️ ${P("battle.executeTurn")}</button>`,s}function oI(n,e){const t=nc(n.player);return t.length===0?"":`
    <div class="bf-replacement">
      <h3>${P("battle.chooseReplacement")}</h3>
      <div class="bf-replacement-list">
        ${t.map(({index:s,mon:r})=>`
          <button class="bf-replacement-btn" data-bench-idx="${s}" data-active-slot="${e[0]}">
            <img src="${r.sprite}" class="bf-replacement-sprite">
            <div>
              <div class="bf-replacement-name">${r.species}</div>
              <div class="bf-replacement-hp">${r.currentHp}/${r.maxHp} HP</div>
            </div>
          </button>
        `).join("")}
      </div>
    </div>
  `}function aI(n){const e=n.winner==="player";return`
    <div class="bf-result ${e?"bf-victory":"bf-defeat"}">
      <div class="bf-result-icon">${e?"🏆":"💀"}</div>
      <h2>${P(e?"battle.victory":"battle.defeat")}</h2>
      <p>${P(e?"battle.victoryMsg":"battle.defeatMsg")}</p>
      <button class="btn btn-primary btn-lg" id="btn-back-menu">${P("battle.backToMenu")}</button>
    </div>
  `}function cI(){return Hi.map(n=>`<div class="bf-log-msg bf-log-${n.type||"info"}">${n.html}</div>`).join("")}function lI(n){return n.type==="turn-start"?{html:`<strong class="bf-log-turn">━━ ${P("battle.turn")} ${n.turn} ━━</strong>`,type:"turn-start"}:n.type==="use-move"?{html:`▶ ${n.text}`,type:"use-move"}:n.type==="damage"?{html:`💥 ${n.target}: <strong>-${n.damage}</strong> HP <span class="bf-log-dim">(${n.hpLeft}/${n.maxHp})</span>`,type:"damage"}:n.type==="crit"?{html:`✨ ${n.text}`,type:"crit"}:n.type==="effective"?{html:`🔥 ${n.text}`,type:"effective"}:n.type==="resist"?{html:`🛡️ ${n.text}`,type:"resist"}:n.type==="immune"?{html:`⬛ ${n.text}`,type:"immune"}:n.type==="faint"?{html:`☠️ ${n.text}`,type:"faint"}:n.type==="status"?{html:`🔮 ${n.target} was ${n.status}ed!`,type:"status"}:n.type==="heal"||n.type==="drain"?{html:`💚 ${n.text||`${n.target} recovered ${n.amount} HP!`}`,type:"heal"}:n.type==="boost"?{html:`📊 ${n.text}`,type:"boost"}:n.type==="cant-move"||n.type==="miss"?{html:`💨 ${n.text}`,type:"miss"}:n.type==="switch"?{html:`🔄 ${n.text}`,type:"switch"}:n.type==="residual"?{html:`⏳ ${n.text}`,type:"residual"}:n.type==="battle-end"?{html:`<strong class="bf-log-endgame">${n.winner==="player"?"🏆 "+P("battle.victory"):"💀 "+P("battle.defeat")}!</strong>`,type:"battle-end"}:n.type==="protected"?{html:`🛡️ ${n.text}`,type:"protect"}:n.type==="recoil"?{html:`💢 ${n.text}`,type:"recoil"}:n.text?{html:n.text,type:n.type||"info"}:null}function di(n){for(const e of n){if(!e)continue;const t=lI(e);t&&js.push(t)}Ms||Bf()}function Bf(){if(js.length===0){Ms=!1,uI();return}Ms=!0;const n=js.shift();Hi.push(n);const e=document.getElementById("bf-chatlog-current"),t=document.getElementById("bf-chatlog-messages");if(!e||!t){Ms=!1;return}e.innerHTML&&(t.innerHTML+=e.innerHTML),e.innerHTML=`<div class="bf-log-msg bf-log-${n.type} bf-log-new">${n.html}</div>`,Uf();const s=n.type==="turn-start"?400:n.type==="faint"||n.type==="battle-end"?800:350;setTimeout(()=>Bf(),s)}function Uf(){const n=document.getElementById("bf-chatlog");n&&(n.scrollTop=n.scrollHeight)}function uI(){const n=$i();if(!n)return;const e=document.querySelector(".bf-opp-mons");e&&(e.innerHTML=ui(n.opponent,!1));const t=document.querySelector(".bf-player-mons");t&&(t.innerHTML=ui(n.player,!0));const s=document.querySelector(".bf-field-opp-sprites");s&&(s.innerHTML=hi(n.opponent,!1));const r=document.querySelector(".bf-field-player-sprites");r&&(r.innerHTML=hi(n.player,!0));const i=document.querySelector(".bf-opp-pokeballs");i&&(i.innerHTML=li(n.opponent));const a=document.querySelector(".bf-player-pokeballs");a&&(a.innerHTML=li(n.player));const c=document.querySelector(".bf-turn");c&&(c.textContent=`${P("battle.turn")} ${n.turn}`);const l=document.getElementById("bf-actions");l&&(l.innerHTML=Ff(n),Hf(n))}function Hf(n){if(!n)return;Qe=[];const e=document.getElementById("btn-forfeit");e&&e.addEventListener("click",()=>{confirm(P("battle.confirmForfeit"))&&Et()});const t=document.getElementById("btn-back-menu");t&&t.addEventListener("click",Et),document.querySelectorAll(".bf-replacement-btn").forEach(a=>{a.addEventListener("click",()=>{const c=parseInt(a.dataset.benchIdx),l=parseInt(a.dataset.activeSlot),h=qu(n.player,l,c);di(Array.isArray(h)?h:[h]);const f=Lf(n.opponent);for(const m of f){const g=YT(n.opponent);if(g!==null){const v=qu(n.opponent,m,g);di(Array.isArray(v)?v:[v])}}})});const r=n.player.active.map(a=>n.player.team[a]).filter(a=>a&&a.currentHp>0).length;document.querySelectorAll(".bf-move-btn:not([disabled])").forEach(a=>{a.addEventListener("click",()=>{const c=parseInt(a.dataset.mon),l=parseInt(a.dataset.move),f=n.player.team[c].moves[l];Qe=Qe.filter(g=>g.monSlot!==c),document.querySelectorAll(`.bf-move-btn[data-mon="${c}"]`).forEach(g=>g.classList.remove("bf-move-selected")),a.classList.add("bf-move-selected");const m=n.opponent.active.map(g=>n.opponent.team[g]).filter(g=>g&&g.currentHp>0);if(m.length>1&&f.category!=="status"){const g=document.getElementById(`target-${c}`);g&&(g.style.display="flex",g.querySelectorAll(".bf-target-btn").forEach(v=>{v.onclick=()=>{const S=parseInt(v.dataset.target);Qe=Qe.filter(C=>C.monSlot!==c),Qe.push({monSlot:c,moveIdx:l,targetSlot:S}),g.style.display="none",Wu(r)}}))}else{const g=m.length>0?m[0].slotIndex:null;Qe.push({monSlot:c,moveIdx:l,targetSlot:g}),Wu(r)}})});const i=document.getElementById("btn-execute-turn");i&&i.addEventListener("click",()=>{Qe.length<r||hI()})}function Wu(n){const e=document.getElementById("btn-execute-turn");e&&(e.disabled=Qe.length<n)}function hI(){const n=$i();if(!n)return;const e=document.getElementById("bf-actions");e&&(e.innerHTML=`<div class="bf-waiting">⏳ ${P("battle.processing")}...</div>`);try{const t=[];for(const i of Qe){const a=n.player.team[i.monSlot];if(!a)continue;const c=a.moves[i.moveIdx];if(!c)continue;c.pp=Math.max(0,c.pp-1);let l=null;i.targetSlot!==null&&(l=n.opponent.team.find(h=>h&&h.slotIndex===i.targetSlot)),l||(l=n.opponent.active.map(f=>n.opponent.team[f]).filter(f=>f&&f.currentHp>0)[0]),a&&l&&t.push({attacker:a,defender:l,move:c})}const s=QT(n.opponent),r=GT(t,s);di(r)}catch(t){console.error("Turn execution error:",t),e&&(e.innerHTML=`<div class="bf-waiting">Error: ${t.message}</div>`)}}function dI(){const n=localStorage.getItem("pokebuilder-theme")||"dark";document.documentElement.setAttribute("data-theme",n),Gu(n),document.getElementById("theme-toggle").addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("pokebuilder-theme",t),Gu(t)})}function Gu(n){const e=document.querySelector(".theme-icon");e.textContent=n==="dark"?"☀️":"🌙"}function fI(){const n=localStorage.getItem("pokebuilder-lang")||"en";Ku(n),document.getElementById("lang-toggle").addEventListener("click",()=>{Sp(),pI()})}function pI(){Qu(),AT(),xT(),eI()}function mI(){const n=document.querySelectorAll(".nav-tab"),e=document.querySelectorAll(".view");n.forEach(t=>{t.addEventListener("click",()=>{var r;const s=t.dataset.tab;n.forEach(i=>i.classList.remove("active")),t.classList.add("active"),e.forEach(i=>i.classList.remove("active")),(r=document.getElementById(`view-${s}`))==null||r.classList.add("active")})})}function gI(){document.getElementById("loading-overlay").style.display="flex"}function yI(){document.getElementById("loading-overlay").style.display="none"}async function _I(){gI();try{dI(),mI(),Mp(),dT(),await wp(),await Promise.all([mT(),PT(),VT()]),ZT(),fI()}catch(n){console.error("Failed to initialize PokéBuilder:",n)}finally{yI()}}document.addEventListener("DOMContentLoaded",_I);
