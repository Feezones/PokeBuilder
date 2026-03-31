(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const ln="https://pokeapi.co/api/v2",mr=new Map;async function un(n){if(mr.has(n))return mr.get(n);const e=sessionStorage.getItem(`poke:${n}`);if(e){const r=JSON.parse(e);return mr.set(n,r),r}const t=await fetch(n);if(!t.ok)throw new Error(`API error: ${t.status} for ${n}`);const s=await t.json();mr.set(n,s);try{sessionStorage.setItem(`poke:${n}`,JSON.stringify(s))}catch{sessionStorage.clear()}return s}let pr=null;async function ei(){return pr||(pr=(await un(`${ln}/pokemon?limit=1025`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),pr)}async function $n(n){return un(`${ln}/pokemon/${n}`)}async function ti(n){return un(`${ln}/move/${n}`)}let gr=null;async function ni(){return gr||(gr=(await un(`${ln}/move?limit=1000`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),gr)}let yr=null;async function Bo(){return yr||(yr=(await un(`${ln}/item?limit=2000`)).results.map((e,t)=>({name:e.name,id:t+1,url:e.url})),yr)}async function Pf(n){return un(`${ln}/item/${n}`)}async function Cf(n){return un(`${ln}/ability/${n}`)}function Bt(n){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`}function kf(n){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${n}.png`}function ie(n){return n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}async function Vf(){await Promise.all([ei(),ni(),Bo()])}const xc={en:{"nav.teambuilder":"Team Builder","nav.damageCalc":"Damage Calculator","nav.ivEvCalc":"IV/EV Calculator","app.loading":"Loading...","tb.import":"Import","tb.export":"Export","tb.clearTeam":"Clear Team","tb.pokemon":"Pokémon","tb.searchPokemon":"Search Pokémon...","tb.ability":"Ability","tb.item":"Item","tb.searchItem":"Search item...","tb.nature":"Nature","tb.level":"Level","tb.moves":"Moves","tb.move1":"Move 1","tb.move2":"Move 2","tb.move3":"Move 3","tb.move4":"Move 4","tb.evs":"EVs","tb.ivs":"IVs","tb.finalStats":"Final Stats","tb.emptySlot":"Empty Slot","tb.total":"Total","tb.base":"Base","tb.ev":"EV","tb.iv":"IV","tb.stat":"Stat","tb.confirmClear":"Are you sure you want to clear the entire team?","tb.importTitle":"Import Team","tb.exportTitle":"Export Team","tb.importBtn":"Import","tb.pasteShowdown":"Paste team in Showdown format...","tb.copySuccess":"Copied to clipboard!","tb.importSuccess":"Team imported successfully!","tb.importError":"Could not parse the team format.","tb.none":"(none)","tb.renameTeam":"✏️ Rename","tb.deleteTeam":"🗑️ Delete Team","tb.newTeamName":"New team name:","tb.renameTeamPrompt":"Rename team:","tb.cantDeleteLast":"You must have at least one team.","tb.confirmDeleteTeam":'Delete team "{name}"? This cannot be undone.',"login.subtitle":"Sign in to access your teams","login.emailPlaceholder":"Email","login.passwordPlaceholder":"Password","login.namePlaceholder":"Trainer name (optional)","login.login":"Log in","login.register":"Create account","login.noAccount":"Don't have an account?","login.registerLink":"Sign up","login.hasAccount":"Already have an account?","login.loginLink":"Log in","login.logout":"Logout","login.fillFields":"Please fill in email and password.","login.weakPassword":"Password must be at least 6 characters.","login.errEmailInUse":"This email is already registered.","login.errInvalidEmail":"Invalid email address.","login.errUserNotFound":"Account not found.","login.errWrongPassword":"Incorrect password.","login.errInvalidCredential":"Invalid email or password.","login.errTooMany":"Too many attempts. Try again later.","login.errGeneric":"An error occurred. Please try again.","dc.attacker":"Attacker","dc.defender":"Defender","dc.move":"Move","dc.searchMove":"Search move...","dc.calculate":"Calculate","dc.selectBoth":"Select Pokémon and a move to calculate damage","dc.results":"Results","dc.damage":"Damage","dc.minDmg":"Min","dc.maxDmg":"Max","dc.rolls":"Damage rolls","dc.koChance":"KO Chance","dc.guaranteed":"Guaranteed","dc.possible":"Possible","dc.ohko":"OHKO","dc.2hko":"2HKO","dc.3hko":"3HKO","dc.4hko":"4HKO+","dc.noko":"Not a KO","dc.critical":"Critical Hit","dc.stab":"STAB","dc.effectiveness":"Effectiveness","dc.superEffective":"Super Effective","dc.notVeryEffective":"Not Very Effective","dc.neutral":"Neutral","dc.immune":"Immune","dc.hpPercent":"of HP","dc.power":"Power","dc.category":"Category","dc.physical":"Physical","dc.special":"Special","dc.status":"Status","dc.atkStat":"Atk stat used","dc.defStat":"Def stat used","iec.title":"IV / EV Calculator","iec.findIvs":"Find IVs","iec.findEvs":"Find EVs","iec.findStats":"Stat Builder","iec.calculate":"Calculate","iec.baseStats":"Base Stats","iec.totalBase":"Total Base","iec.possibleIvs":"Possible IVs","iec.requiredEvs":"Required EVs","iec.finalStat":"Final Stat","iec.knownStat":"Known Stat","iec.desiredStat":"Desired Stat","iec.noResults":"No valid combinations found.","stat.hp":"HP","stat.atk":"Atk","stat.def":"Def","stat.spa":"SpA","stat.spd":"SpD","stat.spe":"Spe","info.name":"Name","info.effect":"Effect","info.note":"Note","info.notMainSeries":"Not in main series games","info.type":"Type","info.accuracy":"Accuracy","info.priority":"Priority","info.hits":"Hits","info.drain":"Drain","info.healing":"Healing","info.critRate":"Crit Rate","info.loadError":"Failed to load information.","info.category":"Category","info.cost":"Cost","info.flingPower":"Fling Power","info.flingEffect":"Fling Effect"},"pt-br":{"nav.teambuilder":"Montar Time","nav.damageCalc":"Calculadora de Dano","nav.ivEvCalc":"Calculadora IV/EV","app.loading":"Carregando...","tb.import":"Importar","tb.export":"Exportar","tb.clearTeam":"Limpar Time","tb.pokemon":"Pokémon","tb.searchPokemon":"Buscar Pokémon...","tb.ability":"Habilidade","tb.item":"Item","tb.searchItem":"Buscar item...","tb.nature":"Natureza","tb.level":"Nível","tb.moves":"Golpes","tb.move1":"Golpe 1","tb.move2":"Golpe 2","tb.move3":"Golpe 3","tb.move4":"Golpe 4","tb.evs":"EVs","tb.ivs":"IVs","tb.finalStats":"Status Final","tb.emptySlot":"Slot Vazio","tb.total":"Total","tb.base":"Base","tb.ev":"EV","tb.iv":"IV","tb.stat":"Status","tb.confirmClear":"Tem certeza que deseja limpar o time inteiro?","tb.importTitle":"Importar Time","tb.exportTitle":"Exportar Time","tb.importBtn":"Importar","tb.pasteShowdown":"Cole o time no formato Showdown...","tb.copySuccess":"Copiado para a área de transferência!","tb.importSuccess":"Time importado com sucesso!","tb.importError":"Não foi possível interpretar o formato do time.","tb.none":"(nenhum)","tb.renameTeam":"✏️ Renomear","tb.deleteTeam":"🗑️ Excluir Time","tb.newTeamName":"Nome do novo time:","tb.renameTeamPrompt":"Renomear time:","tb.cantDeleteLast":"Você precisa ter pelo menos um time.","tb.confirmDeleteTeam":'Excluir time "{name}"? Isso não pode ser desfeito.',"login.subtitle":"Entre para acessar seus times","login.emailPlaceholder":"Email","login.passwordPlaceholder":"Senha","login.namePlaceholder":"Nome do treinador (opcional)","login.login":"Entrar","login.register":"Criar conta","login.noAccount":"Não tem uma conta?","login.registerLink":"Cadastre-se","login.hasAccount":"Já tem uma conta?","login.loginLink":"Entrar","login.logout":"Sair","login.fillFields":"Preencha email e senha.","login.weakPassword":"A senha deve ter pelo menos 6 caracteres.","login.errEmailInUse":"Este email já está cadastrado.","login.errInvalidEmail":"Email inválido.","login.errUserNotFound":"Conta não encontrada.","login.errWrongPassword":"Senha incorreta.","login.errInvalidCredential":"Email ou senha inválidos.","login.errTooMany":"Muitas tentativas. Tente novamente mais tarde.","login.errGeneric":"Ocorreu um erro. Tente novamente.","dc.attacker":"Atacante","dc.defender":"Defensor","dc.move":"Golpe","dc.searchMove":"Buscar golpe...","dc.calculate":"Calcular","dc.selectBoth":"Selecione Pokémon e um golpe para calcular o dano","dc.results":"Resultados","dc.damage":"Dano","dc.minDmg":"Mín","dc.maxDmg":"Máx","dc.rolls":"Rolos de dano","dc.koChance":"Chance de KO","dc.guaranteed":"Garantido","dc.possible":"Possível","dc.ohko":"OHKO","dc.2hko":"2HKO","dc.3hko":"3HKO","dc.4hko":"4HKO+","dc.noko":"Não é KO","dc.critical":"Golpe Crítico","dc.stab":"STAB","dc.effectiveness":"Efetividade","dc.superEffective":"Super Efetivo","dc.notVeryEffective":"Pouco Efetivo","dc.neutral":"Neutro","dc.immune":"Imune","dc.hpPercent":"do HP","dc.power":"Poder","dc.category":"Categoria","dc.physical":"Físico","dc.special":"Especial","dc.status":"Status","dc.atkStat":"Status de Atq usado","dc.defStat":"Status de Def usado","iec.title":"Calculadora IV / EV","iec.findIvs":"Encontrar IVs","iec.findEvs":"Encontrar EVs","iec.findStats":"Montar Status","iec.calculate":"Calcular","iec.baseStats":"Status Base","iec.totalBase":"Total Base","iec.possibleIvs":"IVs Possíveis","iec.requiredEvs":"EVs Necessários","iec.finalStat":"Status Final","iec.knownStat":"Status Conhecido","iec.desiredStat":"Status Desejado","iec.noResults":"Nenhuma combinação válida encontrada.","stat.hp":"HP","stat.atk":"Atq","stat.def":"Def","stat.spa":"SpA","stat.spd":"SpD","stat.spe":"Vel","info.name":"Nome","info.effect":"Efeito","info.note":"Nota","info.notMainSeries":"Não presente nos jogos da série principal","info.type":"Tipo","info.accuracy":"Precisão","info.priority":"Prioridade","info.hits":"Acertos","info.drain":"Dreno","info.healing":"Cura","info.critRate":"Taxa Crítico","info.loadError":"Falha ao carregar informações.","info.category":"Categoria","info.cost":"Custo","info.flingPower":"Poder Fling","info.flingEffect":"Efeito Fling"}};let xs=localStorage.getItem("pokebuilder-lang")||"en";function k(n){var e;return((e=xc[xs])==null?void 0:e[n])||xc.en[n]||n}function Df(){return xs}function pu(n){xs=n,localStorage.setItem("pokebuilder-lang",n),gu()}function Nf(){const n=xs==="en"?"pt-br":"en";return pu(n),n}function gu(){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),s=k(t);if(e.children.length>0&&!e.getAttribute("data-i18n-full")){const r=e.childNodes[0];r&&r.nodeType===Node.TEXT_NODE&&(r.textContent=s)}else e.textContent=s}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.getAttribute("data-i18n-placeholder");e.placeholder=k(t)});const n=document.getElementById("lang-label");n&&(n.textContent=xs==="en"?"EN":"PT")}const hn=[{name:"adamant",plus:"atk",minus:"spa"},{name:"bashful",plus:null,minus:null},{name:"bold",plus:"def",minus:"atk"},{name:"brave",plus:"atk",minus:"spe"},{name:"calm",plus:"spd",minus:"atk"},{name:"careful",plus:"spd",minus:"spa"},{name:"docile",plus:null,minus:null},{name:"gentle",plus:"spd",minus:"def"},{name:"hardy",plus:null,minus:null},{name:"hasty",plus:"spe",minus:"def"},{name:"impish",plus:"def",minus:"spa"},{name:"jolly",plus:"spe",minus:"spa"},{name:"lax",plus:"def",minus:"spd"},{name:"lonely",plus:"atk",minus:"def"},{name:"mild",plus:"spa",minus:"def"},{name:"modest",plus:"spa",minus:"atk"},{name:"naive",plus:"spe",minus:"spd"},{name:"naughty",plus:"atk",minus:"spd"},{name:"quiet",plus:"spa",minus:"spe"},{name:"quirky",plus:null,minus:null},{name:"rash",plus:"spa",minus:"spd"},{name:"relaxed",plus:"def",minus:"spe"},{name:"sassy",plus:"spd",minus:"spe"},{name:"serious",plus:null,minus:null},{name:"timid",plus:"spe",minus:"atk"}],Ee=["hp","atk","def","spa","spd","spe"],pe={hp:"HP",atk:"Atk",def:"Def",spa:"SpA",spd:"SpD",spe:"Spe"},Fc=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"],Lf=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,.5,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2],[1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1]],io={};Fc.forEach((n,e)=>{io[n]={},Fc.forEach((t,s)=>{io[n][t]=Lf[e][s]})});const Bn={normal:"#A8A878",fire:"#F08030",water:"#6890F0",electric:"#F8D030",grass:"#78C850",ice:"#98D8D8",fighting:"#C03028",poison:"#A040A0",ground:"#E0C068",flying:"#A890F0",psychic:"#F85888",bug:"#A8B820",rock:"#B8A038",ghost:"#705898",dragon:"#7038F8",dark:"#705848",steel:"#B8B8D0",fairy:"#EE99AC"};function jo(n,e,t,s){return n===1?1:Math.floor((2*n+e+Math.floor(t/4))*s/100)+s+10}function qo(n,e,t,s,r){return Math.floor((Math.floor((2*n+e+Math.floor(t/4))*s/100)+5)*r)}function oo(n,e){const t=hn.find(s=>s.name===n);return!t||!t.plus?1:t.plus===e?1.1:t.minus===e?.9:1}function bs(n,e,t,s,r){const i={};i.hp=jo(n.hp,e.hp,t.hp,s);for(const a of["atk","def","spa","spd","spe"]){const l=oo(r,a);i[a]=qo(n[a],e[a],t[a],s,l)}return i}function Uc(n,e,t,s={}){var I;const{critical:r=!1}=s,i=n.level,a=t.power||0;if(a===0)return{min:0,max:0,rolls:[],hpPercent:{min:0,max:0}};const l=t.category==="physical",u=l?n.stats.atk:n.stats.spa,d=l?e.stats.def:e.stats.spd;let f=Math.floor(Math.floor(Math.floor(2*i/5+2)*a*u/d)/50)+2;r&&(f=Math.floor(f*1.5));let g=1;n.types&&n.types.includes(t.type)&&(g=n.ability==="adaptability"?2:1.5);let v=1;if(e.types)for(const p of e.types)v*=((I=io[t.type])==null?void 0:I[p])??1;let E=1;n.item==="life-orb"?E=1.3:n.item==="choice-band"&&l||n.item==="choice-specs"&&!l?E=1.5:n.item==="expert-belt"&&v>1&&(E=1.2);let R=1;(n.ability==="huge-power"||n.ability==="pure-power")&&l&&(R=2);let V=1;e.ability==="multiscale"&&(V=.5),(e.ability==="filter"||e.ability==="solid-rock")&&v>1&&(V=.75),e.ability==="thick-fat"&&(t.type==="fire"||t.type==="ice")&&(V=.5),e.ability==="levitate"&&t.type==="ground"&&(v=0);const D=[];for(let p=85;p<=100;p++){let y=f;y=Math.floor(y*p/100),y=Math.floor(y*g),y=Math.floor(y*v),y=Math.floor(y*E),y=Math.floor(y*R),y=Math.floor(y*V),y=Math.max(y,v>0?1:0),D.push(y)}const x=Math.min(...D),L=Math.max(...D),F=e.stats.hp,K={min:F>0?x/F*100:0,max:F>0?L/F*100:0};let G="",j="";return v===0?(G="immune",j="ko-unlikely"):K.min>=100?(G="ohko-guaranteed",j="ko-guaranteed"):K.max>=100?(G="ohko-possible",j="ko-possible"):K.min>=50?(G="2hko",j="ko-guaranteed"):K.max>=50?(G="2hko-possible",j="ko-possible"):K.min>=33.4?(G="3hko",j="ko-possible"):(G="4hko+",j="ko-unlikely"),{min:x,max:L,rolls:D,hpPercent:K,stab:g>1,typeEff:v,koText:G,koClass:j,isPhysical:l}}function Of(n,e,t,s,r,i){const a=[];for(let l=0;l<=31;l++)(i?jo(n,l,s,e):qo(n,l,s,e,t))===r&&a.push(l);return a}function Mf(n,e,t,s,r,i){for(let a=0;a<=252;a+=4)if((i?jo(n,s,a,e):qo(n,s,a,e,t))>=r)return a;return-1}function Fs(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Rt(n){return n.split("-").map(Fs).join(" ")}function Us(n){const e={};for(const t of n.stats){const s=t.stat.name,r={hp:"hp",attack:"atk",defense:"def","special-attack":"spa","special-defense":"spd",speed:"spe"};r[s]&&(e[r[s]]=t.base_stat)}return e}function fe(){return{id:null,name:"",species:"",types:[],ability:"",item:"",nature:"adamant",level:50,moves:["","","",""],evs:{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},ivs:{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},baseStats:null,sprite:""}}function xf(n){const e=[];for(const t of n){if(!t.name)continue;let s=Rt(t.name);t.item&&(s+=` @ ${Rt(t.item)}`),e.push(s),t.ability&&e.push(`Ability: ${Rt(t.ability)}`),e.push(`Level: ${t.level}`);const r=hn.find(l=>l.name===t.nature);r&&e.push(`${Fs(r.name)} Nature`);const i=[];for(const l of Ee)t.evs[l]>0&&i.push(`${t.evs[l]} ${pe[l]}`);i.length&&e.push(`EVs: ${i.join(" / ")}`);const a=[];for(const l of Ee)t.ivs[l]<31&&a.push(`${t.ivs[l]} ${pe[l]}`);a.length&&e.push(`IVs: ${a.join(" / ")}`);for(const l of t.moves)l&&e.push(`- ${Rt(l)}`);e.push("")}return e.join(`
`)}function Ff(n){const e=[],t=n.trim().split(/\n\s*\n/);for(const s of t){if(!s.trim())continue;const r=fe(),i=s.trim().split(`
`),a=i[0],l=a.match(/^(.+?)\s*@\s*(.+)$/);l?(r.name=l[1].trim().toLowerCase().replace(/\s+/g,"-"),r.item=l[2].trim().toLowerCase().replace(/\s+/g,"-")):r.name=a.trim().toLowerCase().replace(/\s+/g,"-");for(let u=1;u<i.length;u++){const d=i[u].trim();if(d.startsWith("Ability:"))r.ability=d.replace("Ability:","").trim().toLowerCase().replace(/\s+/g,"-");else if(d.startsWith("Level:"))r.level=parseInt(d.replace("Level:","").trim())||50;else if(d.endsWith("Nature")){const f=d.replace("Nature","").trim().toLowerCase();hn.find(g=>g.name===f)&&(r.nature=f)}else if(d.startsWith("EVs:")){const g=d.replace("EVs:","").trim().split("/");for(const v of g){const E=v.trim().match(/(\d+)\s+(\w+)/);if(E){const R=parseInt(E[1]),V=E[2],D={HP:"hp",Atk:"atk",Def:"def",SpA:"spa",SpD:"spd",Spe:"spe"};D[V]&&(r.evs[D[V]]=R)}}}else if(d.startsWith("IVs:")){const g=d.replace("IVs:","").trim().split("/");for(const v of g){const E=v.trim().match(/(\d+)\s+(\w+)/);if(E){const R=parseInt(E[1]),V=E[2],D={HP:"hp",Atk:"atk",Def:"def",SpA:"spa",SpD:"spd",Spe:"spe"};D[V]&&(r.ivs[D[V]]=R)}}}else if(d.startsWith("-")){const f=d.replace("-","").trim().toLowerCase().replace(/\s+/g,"-"),g=r.moves.indexOf("");g!==-1&&(r.moves[g]=f)}}r.name&&e.push(r)}return e.slice(0,6)}function Uf(n,e=300){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>n(...s),e)}}function nt(n,e,t,s={}){const r=n.querySelector(".search-input"),i=n.querySelector(".search-dropdown");let a=-1,l=[];function u(v){l=v.slice(0,50),i.innerHTML="",a=-1;for(let E=0;E<l.length;E++){const R=l[E],V=document.createElement("div");V.className="search-option",V.dataset.index=E,s.renderOption?V.innerHTML=s.renderOption(R):V.textContent=R.label||R.name,V.addEventListener("mousedown",D=>{D.preventDefault(),d(R)}),i.appendChild(V)}}function d(v){r.value=v.label||f(v.name),r.dataset.value=v.value||v.name,n.classList.remove("open"),t(v)}function f(v){return v.split("-").map(E=>E.charAt(0).toUpperCase()+E.slice(1)).join(" ")}const g=Uf(v=>{const E=v.toLowerCase().replace(/\s+/g,"-"),R=e.filter(V=>{const D=(V.name||"").toLowerCase(),x=(V.label||"").toLowerCase();return D.includes(E)||x.includes(E)});u(R)},150);return r.addEventListener("focus",()=>{n.classList.add("open");const v=r.value.toLowerCase().replace(/\s+/g,"-");v?g(v):u(e)}),r.addEventListener("input",()=>{n.classList.add("open"),g(r.value)}),r.addEventListener("blur",()=>{setTimeout(()=>n.classList.remove("open"),200)}),r.addEventListener("keydown",v=>{var R,V;const E=i.querySelectorAll(".search-option");v.key==="ArrowDown"?(v.preventDefault(),a=Math.min(a+1,E.length-1),E.forEach((D,x)=>D.classList.toggle("highlighted",x===a)),(R=E[a])==null||R.scrollIntoView({block:"nearest"})):v.key==="ArrowUp"?(v.preventDefault(),a=Math.max(a-1,0),E.forEach((D,x)=>D.classList.toggle("highlighted",x===a)),(V=E[a])==null||V.scrollIntoView({block:"nearest"})):v.key==="Enter"?(v.preventDefault(),a>=0&&l[a]&&d(l[a])):v.key==="Escape"&&(n.classList.remove("open"),r.blur())}),{clear(){r.value="",r.dataset.value=""},setValue(v,E){r.value=E||f(v),r.dataset.value=v},updateItems(v){e=v}}}function yu(n,e,t,s=255){const r=n.getContext("2d"),i=n.width,a=n.height,l=i/2,u=a/2,d=Math.min(l,u)-40;r.clearRect(0,0,i,a);const f=["HP","Atk","Def","SpA","SpD","Spe"],g=[e.hp,e.atk,e.def,e.spa,e.spd,e.spe],v=t?[t.hp,t.atk,t.def,t.spa,t.spd,t.spe]:null,E=["#ff5959","#f5ac78","#fae078","#9db7f5","#a7db8d","#fa92b2"],R=6,V=document.documentElement.getAttribute("data-theme")==="dark",D=V?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",x=V?"#a0a0c0":"#555770";for(let L=1;L<=5;L++){r.beginPath();for(let F=0;F<=R;F++){const K=Math.PI*2*F/R-Math.PI/2,G=l+d*L/5*Math.cos(K),j=u+d*L/5*Math.sin(K);F===0?r.moveTo(G,j):r.lineTo(G,j)}r.strokeStyle=D,r.lineWidth=1,r.stroke()}for(let L=0;L<R;L++){const F=Math.PI*2*L/R-Math.PI/2;r.beginPath(),r.moveTo(l,u),r.lineTo(l+d*Math.cos(F),u+d*Math.sin(F)),r.strokeStyle=D,r.stroke()}if(v){r.beginPath();for(let L=0;L<=R;L++){const F=L%R,K=Math.PI*2*F/R-Math.PI/2,G=Math.min(v[F]/s,1),j=l+d*G*Math.cos(K),I=u+d*G*Math.sin(K);L===0?r.moveTo(j,I):r.lineTo(j,I)}r.fillStyle=V?"rgba(99,102,241,0.15)":"rgba(99,102,241,0.1)",r.fill(),r.strokeStyle="rgba(99,102,241,0.4)",r.lineWidth=1.5,r.stroke()}r.beginPath();for(let L=0;L<=R;L++){const F=L%R,K=Math.PI*2*F/R-Math.PI/2,G=Math.min(g[F]/(s*2.5),1),j=l+d*G*Math.cos(K),I=u+d*G*Math.sin(K);L===0?r.moveTo(j,I):r.lineTo(j,I)}r.fillStyle=V?"rgba(129,140,248,0.3)":"rgba(99,102,241,0.2)",r.fill(),r.strokeStyle="#818cf8",r.lineWidth=2,r.stroke();for(let L=0;L<R;L++){const F=Math.PI*2*L/R-Math.PI/2,K=Math.min(g[L]/(s*2.5),1),G=l+d*K*Math.cos(F),j=u+d*K*Math.sin(F);r.beginPath(),r.arc(G,j,4,0,Math.PI*2),r.fillStyle=E[L],r.fill();const I=l+(d+25)*Math.cos(F),p=u+(d+25)*Math.sin(F);r.font="bold 12px Segoe UI, system-ui, sans-serif",r.fillStyle=x,r.textAlign="center",r.textBaseline="middle",r.fillText(`${f[L]}`,I,p-8),r.font="11px Segoe UI, system-ui, sans-serif",r.fillStyle=E[L],r.fillText(`${g[L]}`,I,p+8)}}const Ho=()=>document.getElementById("info-popup"),si=()=>document.getElementById("info-popup-title"),en=()=>document.getElementById("info-popup-body");function zo(n){const e=Ho();si().textContent=ie(n),en().innerHTML='<div class="spinner" style="margin:20px auto"></div>',e.style.display="flex"}function zi(){Ho().style.display="none"}function it(n,e="en"){if(!n||n.length===0)return"";const t=Df(),r={en:"en","pt-br":"pt"}[t]||"en",i=n.find(l=>l.language.name===r);return i||n.find(l=>l.language.name==="en")||n[0]}async function ao(n){if(n){zo(n);try{const e=await Cf(n),t=it(e.names),s=(t==null?void 0:t.name)||ie(n),r=it(e.flavor_text_entries),i=(r==null?void 0:r.flavor_text)||"",a=it(e.effect_entries),l=(a==null?void 0:a.effect)||(a==null?void 0:a.short_effect)||"",u=e.effect_entries.find(f=>f.language.name==="en"),d=(u==null?void 0:u.short_effect)||"";si().innerHTML=`<span>🔮</span> ${s}`,en().innerHTML=`
      <div class="info-row">
        <span class="info-label">${k("info.name")}</span>
        <span class="info-value">${s}</span>
      </div>
      ${e.is_main_series?"":`
        <div class="info-row">
          <span class="info-label">${k("info.note")}</span>
          <span class="info-value" style="color:var(--warning)">${k("info.notMainSeries")}</span>
        </div>
      `}
      ${d?`
        <div class="info-row">
          <span class="info-label">${k("info.effect")}</span>
          <span class="info-value">${d}</span>
        </div>
      `:""}
      <div class="info-description">
        ${i?`<p>${i.replace(/\n/g," ")}</p>`:""}
        ${l?`<p style="color:var(--text-muted);font-size:0.85rem">${l.replace(/\n/g," ")}</p>`:""}
      </div>
    `}catch{en().innerHTML=`<p style="color:var(--danger)">${k("info.loadError")}</p>`}}}async function _u(n){if(n){zo(n);try{const e=await ti(n),t=it(e.names),s=(t==null?void 0:t.name)||ie(n),r=it(e.flavor_text_entries),i=(r==null?void 0:r.flavor_text)||"",a=it(e.effect_entries),l=(a==null?void 0:a.short_effect)||(a==null?void 0:a.effect)||"",u=e.effect_chance,d=l.replace(/\$effect_chance/g,u??"—"),f=e.type.name,g=Bn[f]||"#888",v=e.damage_class.name,E=k(v==="physical"?"dc.physical":v==="special"?"dc.special":"dc.status"),R=v;si().innerHTML=`<span class="type-badge" style="background:${g};font-size:0.75rem">${f.toUpperCase()}</span> ${s}`,en().innerHTML=`
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${k("dc.power")}</span>
          <span class="info-value" style="font-weight:700">${e.power??"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${k("info.accuracy")}</span>
          <span class="info-value" style="font-weight:700">${e.accuracy?e.accuracy+"%":"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">PP</span>
          <span class="info-value">${e.pp??"—"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${k("dc.category")}</span>
          <span class="info-value"><span class="move-cat ${R}">${E}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${k("info.type")}</span>
          <span class="info-value"><span class="type-badge" style="background:${g}">${f.toUpperCase()}</span></span>
        </div>
        <div class="info-row">
          <span class="info-label">${k("info.priority")}</span>
          <span class="info-value">${e.priority>0?"+":""}${e.priority}</span>
        </div>
      </div>
      ${e.meta?`
        <div class="info-move-meta" style="border-top:1px solid var(--border-color);padding-top:var(--sp-sm)">
          ${e.meta.min_hits!==null&&e.meta.max_hits!==null&&e.meta.max_hits>0?`
            <div class="info-row">
              <span class="info-label">${k("info.hits")}</span>
              <span class="info-value">${e.meta.min_hits===e.meta.max_hits?e.meta.min_hits:e.meta.min_hits+"–"+e.meta.max_hits}</span>
            </div>
          `:""}
          ${e.meta.drain!==0?`
            <div class="info-row">
              <span class="info-label">${k("info.drain")}</span>
              <span class="info-value">${e.meta.drain}%</span>
            </div>
          `:""}
          ${e.meta.healing!==0?`
            <div class="info-row">
              <span class="info-label">${k("info.healing")}</span>
              <span class="info-value">${e.meta.healing}%</span>
            </div>
          `:""}
          ${e.meta.crit_rate>0?`
            <div class="info-row">
              <span class="info-label">${k("info.critRate")}</span>
              <span class="info-value">+${e.meta.crit_rate}</span>
            </div>
          `:""}
        </div>
      `:""}
      <div class="info-description">
        ${d?`<p>${d.replace(/\n/g," ")}</p>`:""}
        ${i?`<p style="font-style:italic;color:var(--text-muted)">"${i.replace(/\n/g," ")}"</p>`:""}
      </div>
    `}catch{en().innerHTML=`<p style="color:var(--danger)">${k("info.loadError")}</p>`}}}async function co(n){var e,t,s;if(n){zo(n);try{const r=await Pf(n),i=it(r.names),a=(i==null?void 0:i.name)||ie(n),l=it(r.flavor_text_entries),u=(l==null?void 0:l.text)||"",d=it(r.effect_entries),f=(d==null?void 0:d.short_effect)||(d==null?void 0:d.effect)||"",g=(e=r.category)!=null&&e.name?ie(r.category.name):"—",v=((t=r.sprites)==null?void 0:t.default)||kf(n),E=r.fling_power,R=(s=r.fling_effect)!=null&&s.name?ie(r.fling_effect.name):null;si().innerHTML=`<img src="${v}" alt="" width="24" height="24" style="image-rendering:pixelated"> ${a}`,en().innerHTML=`
      <div class="info-move-meta">
        <div class="info-row">
          <span class="info-label">${k("info.name")}</span>
          <span class="info-value">${a}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${k("info.category")}</span>
          <span class="info-value">${g}</span>
        </div>
        ${E?`
          <div class="info-row">
            <span class="info-label">${k("info.flingPower")}</span>
            <span class="info-value">${E}</span>
          </div>
        `:""}
        ${R?`
          <div class="info-row">
            <span class="info-label">${k("info.flingEffect")}</span>
            <span class="info-value">${R}</span>
          </div>
        `:""}
        ${r.cost?`
          <div class="info-row">
            <span class="info-label">${k("info.cost")}</span>
            <span class="info-value">₽${r.cost}</span>
          </div>
        `:""}
      </div>
      <div class="info-description">
        ${f?`<p>${f.replace(/\n/g," ")}</p>`:""}
        ${u?`<p style="font-style:italic;color:var(--text-muted)">"${u.replace(/\n/g," ")}"</p>`:""}
      </div>
    `}catch{en().innerHTML=`<p style="color:var(--danger)">${k("info.loadError")}</p>`}}}function $f(){document.getElementById("info-popup-close").addEventListener("click",zi),document.getElementById("info-popup").addEventListener("click",n=>{n.target===n.currentTarget&&zi()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&Ho().style.display!=="none"&&zi()})}const Bf=()=>{};var $c={};/**
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
 */const Eu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},jf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,E=d&63;u||(E=64,a||(v=64)),s.push(t[f],t[g],t[v],t[E])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||d==null||g==null)throw new qf;const v=i<<2|l>>4;if(s.push(v),d!==64){const E=l<<4&240|d>>2;if(s.push(E),g!==64){const R=d<<6&192|g;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(n){const e=Eu(n);return vu.encodeByteArray(e,!0)},Lr=function(n){return Hf(n).replace(/\./g,"")},Iu=function(n){try{return vu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wf=()=>zf().__FIREBASE_DEFAULTS__,Gf=()=>{if(typeof process>"u"||typeof $c>"u")return;const n=$c.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Iu(n[1]);return e&&JSON.parse(e)},ri=()=>{try{return Bf()||Wf()||Gf()||Kf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tu=n=>{var e,t;return(t=(e=ri())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qf=n=>{const e=Tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},wu=()=>{var n;return(n=ri())==null?void 0:n.config},Au=n=>{var e;return(e=ri())==null?void 0:e[`_${n}`]};/**
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
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Lr(JSON.stringify(t)),Lr(JSON.stringify(a)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Zf(){var e;const n=(e=ri())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function em(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sm(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rm(){return!Zf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const am="FirebaseError";class mt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=am,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?cm(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new mt(r,l,s)}}function cm(n,e){return n.replace(lm,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const lm=/\{\$([^}]+)}/g;function um(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Bc(i)&&Bc(a)){if(!tn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Bc(n){return n!==null&&typeof n=="object"}/**
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
 */function Bs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ds(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hm(n,e){const t=new dm(n,e);return t.subscribe.bind(t)}class dm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");fm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Wi),r.error===void 0&&(r.error=Wi),r.complete===void 0&&(r.complete=Wi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wi(){}/**
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
 */function Me(n){return n&&n._delegate?n._delegate:n}/**
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
 */function js(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bu(n){return(await fetch(n,{credentials:"include"})).ok}class nn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class mm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gm(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pm(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pm(n){return n===Jt?void 0:n}function gm(n){return n.instantiationMode==="EAGER"}/**
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
 */class ym{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const _m={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Em=Q.INFO,vm={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Im=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=vm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=Em,this._logHandler=Im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_m[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Tm=(n,e)=>e.some(t=>n instanceof t);let jc,qc;function wm(){return jc||(jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Am(){return qc||(qc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,lo=new WeakMap,Ru=new WeakMap,Gi=new WeakMap,Go=new WeakMap;function bm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ct(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function Sm(n){if(lo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});lo.set(n,e)}let uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ru.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rm(n){uo=n(uo)}function Pm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ki(this),e,...t);return Ru.set(s,e.sort?e.sort():[e]),Ct(s)}:Am().includes(n)?function(...e){return n.apply(Ki(this),e),Ct(Su.get(this))}:function(...e){return Ct(n.apply(Ki(this),e))}}function Cm(n){return typeof n=="function"?Pm(n):(n instanceof IDBTransaction&&Sm(n),Tm(n,wm())?new Proxy(n,uo):n)}function Ct(n){if(n instanceof IDBRequest)return bm(n);if(Gi.has(n))return Gi.get(n);const e=Cm(n);return e!==n&&(Gi.set(n,e),Go.set(e,n)),e}const Ki=n=>Go.get(n);function km(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=Ct(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Ct(a.result),u.oldVersion,u.newVersion,Ct(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Vm=["get","getKey","getAll","getAllKeys","count"],Dm=["put","add","delete","clear"],Qi=new Map;function Hc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Dm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Vm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&u.done]))[0]};return Qi.set(e,i),i}Rm(n=>({...n,get:(e,t,s)=>Hc(e,t)||n.get(e,t,s),has:(e,t)=>!!Hc(e,t)||n.has(e,t)}));/**
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
 */class Nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",zc="0.14.10";/**
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
 */const lt=new Wo("@firebase/app"),Om="@firebase/app-compat",Mm="@firebase/analytics-compat",xm="@firebase/analytics",Fm="@firebase/app-check-compat",Um="@firebase/app-check",$m="@firebase/auth",Bm="@firebase/auth-compat",jm="@firebase/database",qm="@firebase/data-connect",Hm="@firebase/database-compat",zm="@firebase/functions",Wm="@firebase/functions-compat",Gm="@firebase/installations",Km="@firebase/installations-compat",Qm="@firebase/messaging",Jm="@firebase/messaging-compat",Ym="@firebase/performance",Xm="@firebase/performance-compat",Zm="@firebase/remote-config",ep="@firebase/remote-config-compat",tp="@firebase/storage",np="@firebase/storage-compat",sp="@firebase/firestore",rp="@firebase/ai",ip="@firebase/firestore-compat",op="firebase",ap="12.11.0";/**
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
 */const fo="[DEFAULT]",cp={[ho]:"fire-core",[Om]:"fire-core-compat",[xm]:"fire-analytics",[Mm]:"fire-analytics-compat",[Um]:"fire-app-check",[Fm]:"fire-app-check-compat",[$m]:"fire-auth",[Bm]:"fire-auth-compat",[jm]:"fire-rtdb",[qm]:"fire-data-connect",[Hm]:"fire-rtdb-compat",[zm]:"fire-fn",[Wm]:"fire-fn-compat",[Gm]:"fire-iid",[Km]:"fire-iid-compat",[Qm]:"fire-fcm",[Jm]:"fire-fcm-compat",[Ym]:"fire-perf",[Xm]:"fire-perf-compat",[Zm]:"fire-rc",[ep]:"fire-rc-compat",[tp]:"fire-gcs",[np]:"fire-gcs-compat",[sp]:"fire-fst",[ip]:"fire-fst-compat",[rp]:"fire-vertex","fire-js":"fire-js",[op]:"fire-js-all"};/**
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
 */const Or=new Map,lp=new Map,mo=new Map;function Wc(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){const e=n.name;if(mo.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,n);for(const t of Or.values())Wc(t,n);for(const t of lp.values())Wc(t,n);return!0}function Ko(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const up={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new $s("app","Firebase",up);/**
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
 */class hp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const jn=ap;function Pu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:fo,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(t||(t=wu()),!t)throw kt.create("no-options");const i=Or.get(r);if(i){if(tn(t,i.options)&&tn(s,i.config))return i;throw kt.create("duplicate-app",{appName:r})}const a=new ym(r);for(const u of mo.values())a.addComponent(u);const l=new hp(t,s,a);return Or.set(r,l),l}function Cu(n=fo){const e=Or.get(n);if(!e&&n===fo&&wu())return Pu();if(!e)throw kt.create("no-app",{appName:n});return e}function Vt(n,e,t){let s=cp[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}Nn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dp="firebase-heartbeat-database",fp=1,Ss="firebase-heartbeat-store";let Ji=null;function ku(){return Ji||(Ji=km(dp,fp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ss)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),Ji}async function mp(n){try{const t=(await ku()).transaction(Ss),s=await t.objectStore(Ss).get(Vu(n));return await t.done,s}catch(e){if(e instanceof mt)lt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function Gc(n,e){try{const s=(await ku()).transaction(Ss,"readwrite");await s.objectStore(Ss).put(e,Vu(n)),await s.done}catch(t){if(t instanceof mt)lt.warn(t.message);else{const s=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(s.message)}}}function Vu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pp=1024,gp=30;class yp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ep(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>gp){const a=vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){lt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kc(),{heartbeatsToSend:s,unsentEntries:r}=_p(this._heartbeatsCache.heartbeats),i=Lr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return lt.warn(t),""}}}function Kc(){return new Date().toISOString().substring(0,10)}function _p(n,e=pp){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Qc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Qc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ep{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qc(n){return Lr(JSON.stringify({version:2,heartbeats:n})).length}function vp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Ip(n){Nn(new nn("platform-logger",e=>new Nm(e),"PRIVATE")),Nn(new nn("heartbeat",e=>new yp(e),"PRIVATE")),Vt(ho,zc,n),Vt(ho,zc,"esm2020"),Vt("fire-js","")}Ip("");var Tp="firebase",wp="12.11.0";/**
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
 */Vt(Tp,wp,"app");var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,Du;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function y(){}y.prototype=p.prototype,I.F=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(w,T,b){for(var _=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)_[Ne-2]=arguments[Ne];return p.prototype[T].apply(w,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,p,y){y||(y=0);const w=Array(16);if(typeof p=="string")for(var T=0;T<16;++T)w[T]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(T=0;T<16;++T)w[T]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],T=I.g[2];let b=I.g[3],_;_=p+(b^y&(T^b))+w[0]+3614090360&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(T^p&(y^T))+w[1]+3905402710&4294967295,b=p+(_<<12&4294967295|_>>>20),_=T+(y^b&(p^y))+w[2]+606105819&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(p^T&(b^p))+w[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(b^y&(T^b))+w[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(T^p&(y^T))+w[5]+1200080426&4294967295,b=p+(_<<12&4294967295|_>>>20),_=T+(y^b&(p^y))+w[6]+2821735955&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(p^T&(b^p))+w[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(b^y&(T^b))+w[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(T^p&(y^T))+w[9]+2336552879&4294967295,b=p+(_<<12&4294967295|_>>>20),_=T+(y^b&(p^y))+w[10]+4294925233&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(p^T&(b^p))+w[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(b^y&(T^b))+w[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=b+(T^p&(y^T))+w[13]+4254626195&4294967295,b=p+(_<<12&4294967295|_>>>20),_=T+(y^b&(p^y))+w[14]+2792965006&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(p^T&(b^p))+w[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=p+(T^b&(y^T))+w[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(p^y))+w[6]+3225465664&4294967295,b=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(b^p))+w[11]+643717713&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(T^b))+w[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^b&(y^T))+w[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(p^y))+w[10]+38016083&4294967295,b=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(b^p))+w[15]+3634488961&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(T^b))+w[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^b&(y^T))+w[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(p^y))+w[14]+3275163606&4294967295,b=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(b^p))+w[3]+4107603335&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(T^b))+w[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(T^b&(y^T))+w[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(p^y))+w[2]+4243563512&4294967295,b=p+(_<<9&4294967295|_>>>23),_=T+(p^y&(b^p))+w[7]+1735328473&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^p&(T^b))+w[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=p+(y^T^b)+w[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^T)+w[8]+2272392833&4294967295,b=p+(_<<11&4294967295|_>>>21),_=T+(b^p^y)+w[11]+1839030562&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^p)+w[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^b)+w[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^T)+w[4]+1272893353&4294967295,b=p+(_<<11&4294967295|_>>>21),_=T+(b^p^y)+w[7]+4139469664&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^p)+w[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^b)+w[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^T)+w[0]+3936430074&4294967295,b=p+(_<<11&4294967295|_>>>21),_=T+(b^p^y)+w[3]+3572445317&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^p)+w[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(y^T^b)+w[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=b+(p^y^T)+w[12]+3873151461&4294967295,b=p+(_<<11&4294967295|_>>>21),_=T+(b^p^y)+w[15]+530742520&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^p)+w[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=p+(T^(y|~b))+w[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~T))+w[7]+1126891415&4294967295,b=p+(_<<10&4294967295|_>>>22),_=T+(p^(b|~y))+w[14]+2878612391&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~p))+w[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~b))+w[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~T))+w[3]+2399980690&4294967295,b=p+(_<<10&4294967295|_>>>22),_=T+(p^(b|~y))+w[10]+4293915773&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~p))+w[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~b))+w[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~T))+w[15]+4264355552&4294967295,b=p+(_<<10&4294967295|_>>>22),_=T+(p^(b|~y))+w[6]+2734768916&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~p))+w[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=p+(T^(y|~b))+w[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=b+(y^(p|~T))+w[11]+3174756917&4294967295,b=p+(_<<10&4294967295|_>>>22),_=T+(p^(b|~y))+w[2]+718787259&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~p))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+b&4294967295}s.prototype.v=function(I,p){p===void 0&&(p=I.length);const y=p-this.blockSize,w=this.C;let T=this.h,b=0;for(;b<p;){if(T==0)for(;b<=y;)r(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<p;)if(w[T++]=I.charCodeAt(b++),T==this.blockSize){r(this,w),T=0;break}}else for(;b<p;)if(w[T++]=I[b++],T==this.blockSize){r(this,w),T=0;break}}this.h=T,this.o+=p},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;p=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=p&255,p/=256;for(this.v(I),I=Array(16),p=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)I[p++]=this.g[y]>>>w&255;return I};function i(I,p){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function a(I,p){this.h=p;const y=[];let w=!0;for(let T=I.length-1;T>=0;T--){const b=I[T]|0;w&&b==p||(y[T]=b,w=!1)}this.g=y}var l={};function u(I){return-128<=I&&I<128?i(I,function(p){return new a([p|0],p<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return D(d(-I));const p=[];let y=1;for(let w=0;I>=y;w++)p[w]=I/y|0,y*=4294967296;return new a(p,0)}function f(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(f(I.substring(1),p));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let w=g;for(let b=0;b<I.length;b+=8){var T=Math.min(8,I.length-b);const _=parseInt(I.substring(b,b+T),p);T<8?(T=d(Math.pow(p,T)),w=w.j(T).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var g=u(0),v=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();let I=0,p=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);I+=(w>=0?w:4294967296+w)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(V(this))return"-"+D(this).toString(I);const p=d(Math.pow(I,6));var y=this;let w="";for(;;){const T=K(y,p).g;y=x(y,T.j(p));let b=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,R(y))return b+w;for(;b.length<6;)b="0"+b;w=b+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(let p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=x(this,I),V(I)?-1:R(I)?0:1};function D(I){const p=I.g.length,y=[];for(let w=0;w<p;w++)y[w]=~I.g[w];return new a(y,~I.h).add(v)}n.abs=function(){return V(this)?D(this):this},n.add=function(I){const p=Math.max(this.g.length,I.g.length),y=[];let w=0;for(let T=0;T<=p;T++){let b=w+(this.i(T)&65535)+(I.i(T)&65535),_=(b>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);w=_>>>16,b&=65535,_&=65535,y[T]=_<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(I,p){return I.add(D(p))}n.j=function(I){if(R(this)||R(I))return g;if(V(this))return V(I)?D(this).j(D(I)):D(D(this).j(I));if(V(I))return D(this.j(D(I)));if(this.l(E)<0&&I.l(E)<0)return d(this.m()*I.m());const p=this.g.length+I.g.length,y=[];for(var w=0;w<2*p;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<I.g.length;T++){const b=this.i(w)>>>16,_=this.i(w)&65535,Ne=I.i(T)>>>16,Ht=I.i(T)&65535;y[2*w+2*T]+=_*Ht,L(y,2*w+2*T),y[2*w+2*T+1]+=b*Ht,L(y,2*w+2*T+1),y[2*w+2*T+1]+=_*Ne,L(y,2*w+2*T+1),y[2*w+2*T+2]+=b*Ne,L(y,2*w+2*T+2)}for(I=0;I<p;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=p;I<2*p;I++)y[I]=0;return new a(y,0)};function L(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function F(I,p){this.g=I,this.h=p}function K(I,p){if(R(p))throw Error("division by zero");if(R(I))return new F(g,g);if(V(I))return p=K(D(I),p),new F(D(p.g),D(p.h));if(V(p))return p=K(I,D(p)),new F(D(p.g),p.h);if(I.g.length>30){if(V(I)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var y=v,w=p;w.l(I)<=0;)y=G(y),w=G(w);var T=j(y,1),b=j(w,1);for(w=j(w,2),y=j(y,2);!R(w);){var _=b.add(w);_.l(I)<=0&&(T=T.add(y),b=_),w=j(w,1),y=j(y,1)}return p=x(I,T.j(p)),new F(T,p)}for(T=g;I.l(p)>=0;){for(y=Math.max(1,Math.floor(I.m()/p.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),b=d(y),_=b.j(p);V(_)||_.l(I)>0;)y-=w,b=d(y),_=b.j(p);R(b)&&(b=v),T=T.add(b),I=x(I,_)}return new F(T,I)}n.B=function(I){return K(this,I).h},n.and=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)&I.i(w);return new a(y,this.h&I.h)},n.or=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)|I.i(w);return new a(y,this.h|I.h)},n.xor=function(I){const p=Math.max(this.g.length,I.g.length),y=[];for(let w=0;w<p;w++)y[w]=this.i(w)^I.i(w);return new a(y,this.h^I.h)};function G(I){const p=I.g.length+1,y=[];for(let w=0;w<p;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(y,I.h)}function j(I,p){const y=p>>5;p%=32;const w=I.g.length-y,T=[];for(let b=0;b<w;b++)T[b]=p>0?I.i(b+y)>>>p|I.i(b+y+1)<<32-p:I.i(b+y);return new a(T,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Du=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Dt=a}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nu,fs,Lu,Ar,po,Ou,Mu,xu;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _r=="object"&&_r];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,c){if(c)e:{var h=s;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break e;h=h[A]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(c){var h=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&h.push([m,c[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function f(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,A,S){for(var N=Array(arguments.length-2),W=2;W<arguments.length;W++)N[W-2]=arguments[W];return c.prototype[A].apply(m,N)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const c=o.length;if(c>0){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function R(o,c){for(let m=1;m<arguments.length;m++){const A=arguments[m];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const S=A.length||0;o.length=h+S;for(let N=0;N<S;N++)o[h+N]=A[N]}else o.push(A)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(o){a.setTimeout(()=>{throw o},0)}function x(){var o=I;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class L{constructor(){this.h=this.g=null}add(c,h){const m=F.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var F=new V(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let G,j=!1,I=new L,p=()=>{const o=Promise.resolve(void 0);G=()=>{o.then(y)}};function y(){for(var o;o=x();){try{o.h.call(o.g)}catch(h){D(h)}var c=F;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}j=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Ne(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(Ne,T),Ne.prototype.init=function(o,c){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ne.Z.h.call(this)},Ne.prototype.h=function(){Ne.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ht="closure_listenable_"+(Math.random()*1e6|0),Qd=0;function Jd(o,c,h,m,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=A,this.key=++Qd,this.da=this.fa=!1}function Zs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function er(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function Yd(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function Ma(o){const c={};for(const h in o)c[h]=o[h];return c}const xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fa(o,c){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let S=0;S<xa.length;S++)h=xa[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function tr(o){this.src=o,this.g={},this.h=0}tr.prototype.add=function(o,c,h,m,A){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const N=Ti(o,c,m,A);return N>-1?(c=o[N],h||(c.fa=!1)):(c=new Jd(c,this.src,S,!!m,A),c.fa=h,o.push(c)),c};function Ii(o,c){const h=c.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,c,void 0),S;(S=A>=0)&&Array.prototype.splice.call(m,A,1),S&&(Zs(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ti(o,c,h,m){for(let A=0;A<o.length;++A){const S=o[A];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==m)return A}return-1}var wi="closure_lm_"+(Math.random()*1e6|0),Ai={};function Ua(o,c,h,m,A){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Ua(o,c[S],h,m,A);return null}return h=ja(h),o&&o[Ht]?o.J(c,h,l(m)?!!m.capture:!1,A):Xd(o,c,h,!1,m,A)}function Xd(o,c,h,m,A,S){if(!c)throw Error("Invalid event type");const N=l(A)?!!A.capture:!!A;let W=Si(o);if(W||(o[wi]=W=new tr(o)),h=W.add(c,h,m,N,S),h.proxy)return h;if(m=Zd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)b||(A=N),A===void 0&&(A=!1),o.addEventListener(c.toString(),m,A);else if(o.attachEvent)o.attachEvent(Ba(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Zd(){function o(h){return c.call(o.src,o.listener,h)}const c=ef;return o}function $a(o,c,h,m,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)$a(o,c[S],h,m,A);else m=l(m)?!!m.capture:!!m,h=ja(h),o&&o[Ht]?(o=o.i,S=String(c).toString(),S in o.g&&(c=o.g[S],h=Ti(c,h,m,A),h>-1&&(Zs(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[S],o.h--)))):o&&(o=Si(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ti(c,h,m,A)),(h=o>-1?c[o]:null)&&bi(h))}function bi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ht])Ii(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(Ba(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Si(c))?(Ii(h,o),h.h==0&&(h.src=null,c[wi]=null)):Zs(o)}}}function Ba(o){return o in Ai?Ai[o]:Ai[o]="on"+o}function ef(o,c){if(o.da)o=!0;else{c=new Ne(c,this);const h=o.listener,m=o.ha||o.src;o.fa&&bi(o),o=h.call(m,c)}return o}function Si(o){return o=o[wi],o instanceof tr?o:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function ja(o){return typeof o=="function"?o:(o[Ri]||(o[Ri]=function(c){return o.handleEvent(c)}),o[Ri])}function Ae(){w.call(this),this.i=new tr(this),this.M=this,this.G=null}g(Ae,w),Ae.prototype[Ht]=!0,Ae.prototype.removeEventListener=function(o,c,h,m){$a(this,o,c,h,m)};function Ce(o,c){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var A=c;c=new T(m,o),Fa(c,A)}A=!0;let S,N;if(h)for(N=h.length-1;N>=0;N--)S=c.g=h[N],A=nr(S,m,!0,c)&&A;if(S=c.g=o,A=nr(S,m,!0,c)&&A,A=nr(S,m,!1,c)&&A,h)for(N=0;N<h.length;N++)S=c.g=h[N],A=nr(S,m,!1,c)&&A}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let m=0;m<h.length;m++)Zs(h[m]);delete o.g[c],o.h--}}this.G=null},Ae.prototype.J=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},Ae.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function nr(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let S=0;S<c.length;++S){const N=c[S];if(N&&!N.da&&N.capture==h){const W=N.listener,de=N.ha||N.src;N.fa&&Ii(o.i,N),A=W.call(de,m)!==!1&&A}}return A&&!m.defaultPrevented}function tf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function qa(o){o.g=tf(()=>{o.g=null,o.i&&(o.i=!1,qa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class nf extends w{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:qa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){w.call(this),this.h=o,this.g={}}g(Kn,w);var Ha=[];function za(o){er(o.g,function(c,h){this.g.hasOwnProperty(h)&&bi(c)},o),o.g={}}Kn.prototype.N=function(){Kn.Z.N.call(this),za(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=a.JSON.stringify,sf=a.JSON.parse,rf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Wa(){}function Ga(){}var Qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ci(){T.call(this,"d")}g(Ci,T);function ki(){T.call(this,"c")}g(ki,T);var zt={},Ka=null;function sr(){return Ka=Ka||new Ae}zt.Ia="serverreachability";function Qa(o){T.call(this,zt.Ia,o)}g(Qa,T);function Jn(o){const c=sr();Ce(c,new Qa(c))}zt.STAT_EVENT="statevent";function Ja(o,c){T.call(this,zt.STAT_EVENT,o),this.stat=c}g(Ja,T);function ke(o){const c=sr();Ce(c,new Ja(c,o))}zt.Ja="timingevent";function Ya(o,c){T.call(this,zt.Ja,o),this.size=c}g(Ya,T);function Yn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Xn(){this.g=!0}Xn.prototype.ua=function(){this.g=!1};function of(o,c,h,m,A,S){o.info(function(){if(o.g)if(S){var N="",W=S.split("&");for(let te=0;te<W.length;te++){var de=W[te].split("=");if(de.length>1){const ye=de[0];de=de[1];const We=ye.split("_");N=We.length>=2&&We[1]=="type"?N+(ye+"="+de+"&"):N+(ye+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+h+`
`+N})}function af(o,c,h,m,A,S,N){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+h+`
`+S+" "+N})}function _n(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+lf(o,h)+(m?" "+m:"")})}function cf(o,c){o.info(function(){return"TIMEOUT: "+c})}Xn.prototype.info=function(){};function lf(o,c){if(!o.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var A=m[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<m.length;N++)m[N]=""}}}}return Pi(S)}catch{return c}}var rr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Za;function Vi(){}g(Vi,Wa),Vi.prototype.g=function(){return new XMLHttpRequest},Za=new Vi;function Zn(o){return encodeURIComponent(String(o))}function uf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function gt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.S=m||1,this.V=new Kn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ec}function ec(){this.i=null,this.g="",this.h=!1}var tc={},Di={};function Ni(o,c,h){o.M=1,o.A=or(ze(c)),o.u=h,o.R=!0,nc(o,null)}function nc(o,c){o.F=Date.now(),ir(o),o.B=ze(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),pc(h.i,"t",m),o.C=0,h=o.j.L,o.h=new ec,o.g=Nc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new nf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,m=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ha[0]=A.toString()),A=Ha);for(let S=0;S<A.length;S++){const N=Ua(h,A[S],m||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.J?Ma(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Jn(),of(o.i,o.v,o.B,o.l,o.S,o.u)}gt.prototype.ba=function(o){o=o.target;const c=this.O;c&&Et(o)==3?c.j():this.Y(o)},gt.prototype.Y=function(o){try{if(o==this.g)e:{const W=Et(this.g),de=this.g.ya(),te=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Tc(this.g)))){this.K||W!=4||de==7||(de==8||te<=0?Jn(3):Jn(2)),Li(this);var c=this.g.ca();this.X=c;var h=hf(this);if(this.o=c==200,af(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,A=this.g;if((m=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var S=m;break t}}S=null}if(o=S)_n(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oi(this,o);else{this.o=!1,this.m=3,ke(12),Wt(this),es(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<h.length;)if(ye=df(this,h),ye==Di){W==4&&(this.m=4,ke(14),o=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==tc){this.m=4,ke(15),_n(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else _n(this.i,this.l,ye,null),Oi(this,ye);if(sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||h.length!=0||this.h.h||(this.m=1,ke(16),o=!1),this.o=this.o&&o,!o)_n(this.i,this.l,h,"[Invalid Chunked Response]"),Wt(this),es(this);else if(h.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),qi(N),N.P=!0,ke(11))}}else _n(this.i,this.l,h,null),Oi(this,h);W==4&&Wt(this),this.o&&!this.K&&(W==4?Cc(this.j,this):(this.o=!1,ir(this)))}else Sf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,ke(12)):(this.m=0,ke(13)),Wt(this),es(this)}}}catch{}finally{}};function hf(o){if(!sc(o))return o.g.la();const c=Tc(o.g);if(c==="")return"";let h="";const m=c.length,A=Et(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Wt(o),es(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<m;S++)o.h.h=!0,h+=o.h.i.decode(c[S],{stream:!(A&&S==m-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function sc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function df(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Di:(h=Number(c.substring(h,m)),isNaN(h)?tc:(m+=1,m+h>c.length?Di:(c=c.slice(m,m+h),o.C=m+h,c)))}gt.prototype.cancel=function(){this.K=!0,Wt(this)};function ir(o){o.T=Date.now()+o.H,rc(o,o.H)}function rc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Yn(d(o.aa,o),c)}function Li(o){o.D&&(a.clearTimeout(o.D),o.D=null)}gt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(cf(this.i,this.B),this.M!=2&&(Jn(),ke(17)),Wt(this),this.m=2,es(this)):rc(this,this.T-o)};function es(o){o.j.I==0||o.K||Cc(o.j,o)}function Wt(o){Li(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,za(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Oi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Mi(h.h,o))){if(!o.L&&Mi(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)hr(h),lr(h);else break e;ji(h),ke(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Yn(d(h.Va,h),6e3));ac(h.h)<=1&&h.ta&&(h.ta=void 0)}else Kt(h,11)}else if((o.L||h.g==o)&&hr(h),!_(c))for(A=h.Ba.g.parse(c),c=0;c<A.length;c++){let te=A[c];const ye=te[0];if(!(ye<=h.K))if(h.K=ye,te=te[1],h.I==2)if(te[0]=="c"){h.M=te[1],h.ba=te[2];const We=te[3];We!=null&&(h.ka=We,h.j.info("VER="+h.ka));const Qt=te[4];Qt!=null&&(h.za=Qt,h.j.info("SVER="+h.za));const vt=te[5];vt!=null&&typeof vt=="number"&&vt>0&&(m=1.5*vt,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const It=o.g;if(It){const fr=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var S=m.h;S.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(xi(S,S.h),S.h=null))}if(m.G){const Hi=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Hi&&(m.wa=Hi,ne(m.J,m.G,Hi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var N=o;if(m.na=Dc(m,m.L?m.ba:null,m.W),N.L){cc(m.h,N);var W=N,de=m.O;de&&(W.H=de),W.D&&(Li(W),ir(W)),m.g=N}else Rc(m);h.i.length>0&&ur(h)}else te[0]!="stop"&&te[0]!="close"||Kt(h,7);else h.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Kt(h,7):Bi(h):te[0]!="noop"&&h.l&&h.l.qa(te),h.A=0)}}Jn(4)}catch{}}var ff=class{constructor(o,c){this.g=o,this.map=c}};function ic(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function oc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ac(o){return o.h?1:o.g?o.g.size:0}function Mi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function xi(o,c){o.g?o.g.add(c):o.h=c}function cc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ic.prototype.cancel=function(){if(this.i=lc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function lc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return E(o.i)}var uc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let A,S=null;m>=0?(A=o[h].substring(0,m),S=o[h].substring(m+1)):A=o[h],c(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function yt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof yt?(this.l=o.l,ts(this,o.j),this.o=o.o,this.g=o.g,ns(this,o.u),this.h=o.h,Fi(this,gc(o.i)),this.m=o.m):o&&(c=String(o).match(uc))?(this.l=!1,ts(this,c[1]||"",!0),this.o=ss(c[2]||""),this.g=ss(c[3]||"",!0),ns(this,c[4]),this.h=ss(c[5]||"",!0),Fi(this,c[6]||"",!0),this.m=ss(c[7]||"")):(this.l=!1,this.i=new is(null,this.l))}yt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(rs(c,hc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(rs(c,hc,!0),"@"),o.push(Zn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(rs(h,h.charAt(0)=="/"?yf:gf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",rs(h,Ef)),o.join("")},yt.prototype.resolve=function(o){const c=ze(this);let h=!!o.j;h?ts(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var m=o.h;if(h)ns(c,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var A=c.h.lastIndexOf("/");A!=-1&&(m=c.h.slice(0,A+1)+m)}if(A=m,A==".."||A==".")m="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){m=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let N=0;N<A.length;){const W=A[N++];W=="."?m&&N==A.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&N==A.length&&S.push("")):(S.push(W),m=!0)}m=S.join("/")}else m=A}return h?c.h=m:h=o.i.toString()!=="",h?Fi(c,gc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function ze(o){return new yt(o)}function ts(o,c,h){o.j=h?ss(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ns(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Fi(o,c,h){c instanceof is?(o.i=c,vf(o.i,o.l)):(h||(c=rs(c,_f)),o.i=new is(c,o.l))}function ne(o,c,h){o.i.set(c,h)}function or(o){return ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ss(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function rs(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,pf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hc=/[#\/\?@]/g,gf=/[#\?:]/g,yf=/[#\?]/g,_f=/[#\?@]/g,Ef=/#/g;function is(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Gt(o){o.g||(o.g=new Map,o.h=0,o.i&&mf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=is.prototype,n.add=function(o,c){Gt(this),this.i=null,o=En(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function dc(o,c){Gt(o),c=En(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function fc(o,c){return Gt(o),c=En(o,c),o.g.has(c)}n.forEach=function(o,c){Gt(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(c,A,m,this)},this)},this)};function mc(o,c){Gt(o);let h=[];if(typeof c=="string")fc(o,c)&&(h=h.concat(o.g.get(En(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Gt(this),this.i=null,o=En(this,o),fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=mc(this,o),o.length>0?String(o[0]):c):c};function pc(o,c,h){dc(o,c),h.length>0&&(o.i=null,o.g.set(En(o,c),E(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var h=c[m];const A=Zn(h);h=mc(this,h);for(let S=0;S<h.length;S++){let N=A;h[S]!==""&&(N+="="+Zn(h[S])),o.push(N)}}return this.i=o.join("&")};function gc(o){const c=new is;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function En(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function vf(o,c){c&&!o.j&&(Gt(o),o.i=null,o.g.forEach(function(h,m){const A=m.toLowerCase();m!=A&&(dc(this,m),pc(this,A,h))},o)),o.j=c}function If(o,c){const h=new Xn;if(a.Image){const m=new Image;m.onload=f(_t,h,"TestLoadImage: loaded",!0,c,m),m.onerror=f(_t,h,"TestLoadImage: error",!1,c,m),m.onabort=f(_t,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(_t,h,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Tf(o,c){const h=new Xn,m=new AbortController,A=setTimeout(()=>{m.abort(),_t(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(A),S.ok?_t(h,"TestPingServer: ok",!0,c):_t(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),_t(h,"TestPingServer: error",!1,c)})}function _t(o,c,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function wf(){this.g=new rf}function Ui(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Ui,Wa),Ui.prototype.g=function(){return new ar(this.i,this.h)};function ar(o,c){Ae.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ar,Ae),n=ar.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,as(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function yc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?os(this):as(this),this.readyState==3&&yc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,os(this))},n.Na=function(o){this.g&&(this.response=o,os(this))},n.ga=function(){this.g&&os(this)};function os(o){o.readyState=4,o.l=null,o.j=null,o.B=null,as(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function as(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _c(o){let c="";return er(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function $i(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=_c(h),typeof o=="string"?h!=null&&Zn(h):ne(o,c,h))}function ce(o){Ae.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ce,Ae);var Af=/^https?$/i,bf=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Za.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Ec(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(bf,c,void 0)>=0)||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Ec(this,S)}};function Ec(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,vc(o),cr(o)}function vc(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ce(this,"complete"),Ce(this,"abort"),cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ic(this):this.Xa())},n.Xa=function(){Ic(this)};function Ic(o){if(o.h&&typeof i<"u"){if(o.v&&Et(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ce(o,"readystatechange"),Et(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=S===0){let N=String(o.D).match(uc)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),m=!Af.test(N?N.toLowerCase():"")}h=m}if(h)Ce(o,"complete"),Ce(o,"success");else{o.o=6;try{var A=Et(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",vc(o)}}finally{cr(o)}}}}function cr(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Ce(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),sf(c)}};function Tc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sf(o){const c={};o=(o.g&&Et(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(_(o[m]))continue;var h=uf(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[A]||[];c[A]=S,S.push(h)}Yd(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function wc(o){this.za=0,this.i=[],this.j=new Xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=cs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=cs("baseRetryDelayMs",5e3,o),this.Za=cs("retryDelaySeedMs",1e4,o),this.Ta=cs("forwardChannelMaxRetries",2,o),this.va=cs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ic(o&&o.concurrentRequestLimit),this.Ba=new wf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=wc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,m){ke(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Dc(this,null,this.W),ur(this)};function Bi(o){if(Ac(o),o.I==3){var c=o.V++,h=ze(o.J);if(ne(h,"SID",o.M),ne(h,"RID",c),ne(h,"TYPE","terminate"),ls(o,h),c=new gt(o,o.j,c),c.M=2,c.A=or(ze(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Nc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ir(c)}Vc(o)}function lr(o){o.g&&(qi(o),o.g.cancel(),o.g=null)}function Ac(o){lr(o),o.v&&(a.clearTimeout(o.v),o.v=null),hr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ur(o){if(!oc(o.h)&&!o.m){o.m=!0;var c=o.Ea;G||p(),j||(G(),j=!0),I.add(c,o),o.D=0}}function Rf(o,c){return ac(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Yn(d(o.Ea,o,c),kc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new gt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Ma(S),Fa(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Sc(this,A,c),h=ze(this.J),ne(h,"RID",o),ne(h,"CVER",22),this.G&&ne(h,"X-HTTP-Session-Id",this.G),ls(this,h),S&&(this.R?c="headers="+Zn(_c(S))+"&"+c:this.u&&$i(h,this.u,S)),xi(this.h,A),this.Ra&&ne(h,"TYPE","init"),this.S?(ne(h,"$req",c),ne(h,"SID","null"),A.U=!0,Ni(A,h,null)):Ni(A,h,c),this.I=2}}else this.I==3&&(o?bc(this,o):this.i.length==0||oc(this.h)||bc(this))};function bc(o,c){var h;c?h=c.l:h=o.V++;const m=ze(o.J);ne(m,"SID",o.M),ne(m,"RID",h),ne(m,"AID",o.K),ls(o,m),o.u&&o.o&&$i(m,o.u,o.o),h=new gt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Sc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),xi(o.h,h),Ni(h,m,c)}function ls(o,c){o.H&&er(o.H,function(h,m){ne(c,m,h)}),o.l&&er({},function(h,m){ne(c,m,h)})}function Sc(o,c,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var A=o.i;let W=-1;for(;;){const de=["count="+h];W==-1?h>0?(W=A[0].g,de.push("ofs="+W)):W=0:de.push("ofs="+W);let te=!0;for(let ye=0;ye<h;ye++){var S=A[ye].g;const We=A[ye].map;if(S-=W,S<0)W=Math.max(0,A[ye].g-100),te=!1;else try{S="req"+S+"_"||"";try{var N=We instanceof Map?We:Object.entries(We);for(const[Qt,vt]of N){let It=vt;l(vt)&&(It=Pi(vt)),de.push(S+Qt+"="+encodeURIComponent(It))}}catch(Qt){throw de.push(S+"type="+encodeURIComponent("_badmap")),Qt}}catch{m&&m(We)}}if(te){N=de.join("&");break e}}N=void 0}return o=o.i.splice(0,h),c.G=o,N}function Rc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;G||p(),j||(G(),j=!0),I.add(c,o),o.A=0}}function ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Yn(d(o.Da,o),kc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Pc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Yn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ke(10),lr(this),Pc(this))};function qi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pc(o){o.g=new gt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=ze(o.na);ne(c,"RID","rpc"),ne(c,"SID",o.M),ne(c,"AID",o.K),ne(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ne(c,"TO",o.ia),ne(c,"TYPE","xmlhttp"),ls(o,c),o.u&&o.o&&$i(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=or(ze(c)),h.u=null,h.R=!0,nc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,lr(this),ji(this),ke(19))};function hr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Cc(o,c){var h=null;if(o.g==c){hr(o),qi(o),o.g=null;var m=2}else if(Mi(o.h,c))h=c.G,cc(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;m=sr(),Ce(m,new Ya(m,h)),ur(o)}else Rc(o);else if(A=c.m,A==3||A==0&&c.X>0||!(m==1&&Rf(o,c)||m==2&&ji(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Kt(o,5);break;case 4:Kt(o,10);break;case 3:Kt(o,6);break;default:Kt(o,2)}}}function kc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Kt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),m=o.Ua;const A=!m;m=new yt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ts(m,"https"),or(m),A?If(m.toString(),h):Tf(m.toString(),h)}else ke(2);o.I=0,o.l&&o.l.pa(c),Vc(o),Ac(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Vc(o){if(o.I=0,o.ja=[],o.l){const c=lc(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ja,c),R(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function Dc(o,c,h){var m=h instanceof yt?ze(h):new yt(h);if(m.g!="")c&&(m.g=c+"."+m.g),ns(m,m.u);else{var A=a.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const S=new yt(null);m&&ts(S,m),c&&(S.g=c),A&&ns(S,A),h&&(S.h=h),m=S}return h=o.G,c=o.wa,h&&c&&ne(m,h,c),ne(m,"VER",o.ka),ls(o,m),m}function Nc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ce(new Ui({ab:h})):new ce(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lc(){}n=Lc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function dr(){}dr.prototype.g=function(o,c){return new Oe(o,c)};function Oe(o,c){Ae.call(this),this.g=new wc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new vn(this)}g(Oe,Ae),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Bi(this.g)},Oe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Pi(o),o=h);c.i.push(new ff(c.Ya++,o)),c.I==3&&ur(c)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,Oe.Z.N.call(this)};function Oc(o){Ci.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Oc,Ci);function Mc(){ki.call(this),this.status=1}g(Mc,ki);function vn(o){this.g=o}g(vn,Lc),vn.prototype.ra=function(){Ce(this.g,"a")},vn.prototype.qa=function(o){Ce(this.g,new Oc(o))},vn.prototype.pa=function(o){Ce(this.g,new Mc)},vn.prototype.oa=function(){Ce(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,xu=function(){return new dr},Mu=function(){return sr()},Ou=zt,po={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Ar=rr,Xa.COMPLETE="complete",Lu=Xa,Ga.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,fs=Ga,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,Nu=ce}).apply(typeof _r<"u"?_r:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
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
 */let qn="12.11.0";function Ap(n){qn=n}/**
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
 */const sn=new Wo("@firebase/firestore");function In(){return sn.logLevel}function O(n,...e){if(sn.logLevel<=Q.DEBUG){const t=e.map(Qo);sn.debug(`Firestore (${qn}): ${n}`,...t)}}function ut(n,...e){if(sn.logLevel<=Q.ERROR){const t=e.map(Qo);sn.error(`Firestore (${qn}): ${n}`,...t)}}function rn(n,...e){if(sn.logLevel<=Q.WARN){const t=e.map(Qo);sn.warn(`Firestore (${qn}): ${n}`,...t)}}function Qo(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function B(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Fu(n,s,t)}function Fu(n,e,t){let s=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ut(s),new Error(s)}function Z(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Fu(e,r,s)}function z(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Uu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class Sp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Rp{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string",31837,{l:s}),new Uu(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class Pp{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Cp{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Pp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Jo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Vp(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function go(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Yi(r)===Yi(i)?J(r,i):Yi(r)?1:-1}return J(n.length,e.length)}const Dp=55296,Np=57343;function Yi(n){const e=n.charCodeAt(0);return e>=Dp&&e<=Np}function Ln(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Xc="__name__";class Ge{constructor(e,t,s){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&B(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ge?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ge.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const s=Ge.isNumericId(e),r=Ge.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ge.extractNumericId(e).compare(Ge.extractNumericId(t)):go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dt.fromString(e.substring(4,e.length-2))}}class re extends Ge{construct(e,t,s){return new re(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new re(t)}static emptyPath(){return new re([])}}const Lp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends Ge{construct(e,t,s){return new Te(e,t,s)}static isValidIdentifier(e){return Lp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xc}static keyField(){return new Te([Xc])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(re.fromString(e))}static fromName(e){return new U(re.fromString(e).popFirst(5))}static empty(){return new U(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new re(e.slice()))}}/**
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
 */function Op(n,e,t){if(!t)throw new M(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mp(n,e,t,s){if(e===!0&&s===!0)throw new M(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zc(n){if(!U.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $u(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function Rs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function qs(n,e){if(!$u(n))throw new M(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new M(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const el=-62135596800,tl=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*tl);return new se(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<el)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tl}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qs(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-el;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:he("string",se._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new se(0,0))}static max(){return new q(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ps=-1;function xp(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=q.fromTimestamp(s===1e9?new se(t+1,0):new se(t,s));return new Lt(r,U.empty(),e)}function Fp(n){return new Lt(n.readTime,n.key,Ps)}class Lt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lt(q.min(),U.empty(),Ps)}static max(){return new Lt(q.max(),U.empty(),Ps)}}function Up(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const $p="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Hn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==$p)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,s)=>{t(e)}))}static reject(e){return new P(((t,s)=>{s(e)}))}static waitFor(e){return new P(((t,s)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(u=>s(u)))})),a=!0,i===r&&t()}))}static or(e){let t=P.resolve(!1);for(const s of e)t=t.next((r=>r?P.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new P(((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((f=>{a[d]=f,++l,l===i&&s(a)}),(f=>r(f)))}}))}static doWhile(e,t){return new P(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function jp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ii{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ii.ce=-1;/**
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
 */const Xo=-1;function oi(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function qp(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bu="";function Hp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nl(e)),e=zp(n.get(t),e);return nl(e)}function zp(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Bu:t+="";break;default:t+=i}}return t}function nl(n){return n+Bu+""}/**
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
 */function sl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function dn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ju(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ie.RED,this.left=r??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Ie(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ie.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(e){return new rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Be([])}unionWith(e){let t=new ge(Te.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qu("Invalid base64 string: "+i):i}})(e);return new we(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Wp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Wp.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */const Hu="server_timestamp",zu="__type__",Wu="__previous_value__",Gu="__local_write_time__";function Zo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zu])==null?void 0:s.stringValue)===Hu}function ai(n){const e=n.mapValue.fields[Wu];return Zo(e)?ai(e):e}function Cs(n){const e=Ot(n.mapValue.fields[Gu].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Gp{constructor(e,t,s,r,i,a,l,u,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=g}}const xr="(default)";class ks{constructor(e,t){this.projectId=e,this.database=t||xr}static empty(){return new ks("","")}get isDefaultDatabase(){return this.database===xr}isEqual(e){return e instanceof ks&&e.projectId===this.projectId&&e.database===this.database}}function Kp(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ks(n.options.projectId,e)}/**
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
 */const Ku="__type__",Qp="__max__",vr={mapValue:{}},Qu="__vector__",Fr="value";function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:Yp(n)?9007199254740991:Jp(n)?10:11:B(28295,{value:n})}function et(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cs(n).isEqual(Cs(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Ot(r.timestampValue),l=Ot(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Mt(r.bytesValue).isEqual(Mt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return le(r.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(r.geoPointValue.longitude)===le(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return le(r.integerValue)===le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=le(r.doubleValue),l=le(i.doubleValue);return a===l?Mr(a)===Mr(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Ln(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(sl(a)!==sl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!et(a[u],l[u])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function Vs(n,e){return(n.values||[]).find((t=>et(t,e)))!==void 0}function On(n,e){if(n===e)return 0;const t=xt(n),s=xt(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=le(i.integerValue||i.doubleValue),u=le(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return il(n.timestampValue,e.timestampValue);case 4:return il(Cs(n),Cs(e));case 5:return go(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Mt(i),u=Mt(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=J(l[d],u[d]);if(f!==0)return f}return J(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=J(le(i.latitude),le(a.latitude));return l!==0?l:J(le(i.longitude),le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ol(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var v,E,R,V;const l=i.fields||{},u=a.fields||{},d=(v=l[Fr])==null?void 0:v.arrayValue,f=(E=u[Fr])==null?void 0:E.arrayValue,g=J(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return g!==0?g:ol(d,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===vr.mapValue&&a===vr.mapValue)return 0;if(i===vr.mapValue)return 1;if(a===vr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const v=go(u[g],f[g]);if(v!==0)return v;const E=On(l[u[g]],d[f[g]]);if(E!==0)return E}return J(u.length,f.length)})(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function il(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Ot(n),s=Ot(e),r=J(t.seconds,s.seconds);return r!==0?r:J(t.nanos,s.nanos)}function ol(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=On(t[r],s[r]);if(i)return i}return J(t.length,s.length)}function Mn(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ot(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Mt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=yo(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${yo(t.fields[a])}`;return r+"}"})(n.mapValue):B(61005,{value:n})}function br(n){switch(xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ai(n);return e?16+br(e):16;case 5:return 2*n.stringValue.length;case 6:return Mt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+br(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return dn(s.fields,((i,a)=>{r+=i.length+br(a)})),r})(n.mapValue);default:throw B(13486,{value:n})}}function _o(n){return!!n&&"integerValue"in n}function ea(n){return!!n&&"arrayValue"in n}function al(n){return!!n&&"nullValue"in n}function cl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sr(n){return!!n&&"mapValue"in n}function Jp(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ku])==null?void 0:s.stringValue)===Qu}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return dn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Es(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(n.arrayValue.values[t]);return e}return{...n}}function Yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qp}/**
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
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Sr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=Te.emptyPath(),s={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=Es(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Sr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){dn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Ue(Es(this.value))}}function Ju(n){const e=[];return dn(n.fields,((t,s)=>{const r=new Te([t]);if(Sr(s)){const i=Ju(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Be(e)}/**
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
 */class Re{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,q.min(),q.min(),q.min(),Ue.empty(),0)}static newFoundDocument(e,t,s,r){return new Re(e,1,t,q.min(),s,r,0)}static newNoDocument(e,t){return new Re(e,2,t,q.min(),q.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,q.min(),q.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ur{constructor(e,t){this.position=e,this.inclusive=t}}function ll(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(a.referenceValue),t.key):s=On(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ul(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $r{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yu{}class me extends Yu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new eg(e,t,s):t==="array-contains"?new sg(e,s):t==="in"?new rg(e,s):t==="not-in"?new ig(e,s):t==="array-contains-any"?new og(e,s):new me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new tg(e,s):new ng(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(On(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.matchesComparison(On(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends Yu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new tt(e,t)}matches(e){return Xu(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xu(n){return n.op==="and"}function Zu(n){return Zp(n)&&Xu(n)}function Zp(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function Eo(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Mn(n.value);if(Zu(n))return n.filters.map((e=>Eo(e))).join(",");{const e=n.filters.map((t=>Eo(t))).join(",");return`${n.op}(${e})`}}function eh(n,e){return n instanceof me?(function(s,r){return r instanceof me&&s.op===r.op&&s.field.isEqual(r.field)&&et(s.value,r.value)})(n,e):n instanceof tt?(function(s,r){return r instanceof tt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,l)=>i&&eh(a,r.filters[l])),!0):!1})(n,e):void B(19439)}function th(n){return n instanceof me?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mn(t.value)}`})(n):n instanceof tt?(function(t){return t.op.toString()+" {"+t.getFilters().map(th).join(" ,")+"}"})(n):"Filter"}class eg extends me{constructor(e,t,s){super(e,t,s),this.key=U.fromName(s.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class tg extends me{constructor(e,t){super(e,"in",t),this.keys=nh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ng extends me{constructor(e,t){super(e,"not-in",t),this.keys=nh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>U.fromName(s.referenceValue)))}class sg extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ea(t)&&Vs(t.arrayValue,this.value)}}class rg extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Vs(this.value.arrayValue,t)}}class ig extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Vs(this.value.arrayValue,t)}}class og extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ea(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Vs(this.value.arrayValue,s)))}}/**
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
 */class ag{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function hl(n,e=null,t=[],s=[],r=null,i=null,a=null){return new ag(n,e,t,s,r,i,a)}function ta(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Eo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Mn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Mn(s))).join(",")),e.Te=t}return e.Te}function na(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Xp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ul(n.startAt,e.startAt)&&ul(n.endAt,e.endAt)}function vo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ci{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function cg(n,e,t,s,r,i,a,l){return new ci(n,e,t,s,r,i,a,l)}function sa(n){return new ci(n)}function dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lg(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ug(n){return n.collectionGroup!==null}function vs(n){const e=z(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(Te.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new $r(i,s))})),t.has(Te.keyField().canonicalString())||e.Ee.push(new $r(Te.keyField(),s))}return e.Ee}function Qe(n){const e=z(n);return e.Ie||(e.Ie=hg(e,vs(n))),e.Ie}function hg(n,e){if(n.limitType==="F")return hl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new $r(r.field,i)}));const t=n.endAt?new Ur(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ur(n.startAt.position,n.startAt.inclusive):null;return hl(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Io(n,e,t){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function li(n,e){return na(Qe(n),Qe(e))&&n.limitType===e.limitType}function sh(n){return`${ta(Qe(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>th(r))).join(", ")}]`),oi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Mn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Mn(r))).join(",")),`Target(${s})`})(Qe(n))}; limitType=${n.limitType})`}function ui(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):U.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of vs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,l,u){const d=ll(a,l,u);return a.inclusive?d<=0:d<0})(s.startAt,vs(s),r)||s.endAt&&!(function(a,l,u){const d=ll(a,l,u);return a.inclusive?d>=0:d>0})(s.endAt,vs(s),r))})(n,e)}function dg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rh(n){return(e,t)=>{let s=!1;for(const r of vs(n)){const i=fg(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function fg(n,e,t){const s=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?On(u,d):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return B(19790,{direction:n.dir})}}/**
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
 */class fn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return ju(this.inner)}size(){return this.innerSize}}/**
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
 */const mg=new ae(U.comparator);function ht(){return mg}const ih=new ae(U.comparator);function ms(...n){let e=ih;for(const t of n)e=e.insert(t.key,t);return e}function oh(n){let e=ih;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Yt(){return Is()}function ah(){return Is()}function Is(){return new fn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pg=new ae(U.comparator),gg=new ge(U.comparator);function Y(...n){let e=gg;for(const t of n)e=e.add(t);return e}const yg=new ge(J);function _g(){return yg}/**
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
 */function ra(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function ch(n){return{integerValue:""+n}}function Eg(n,e){return qp(e)?ch(e):ra(n,e)}/**
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
 */class hi{constructor(){this._=void 0}}function vg(n,e,t){return n instanceof Br?(function(r,i){const a={fields:{[zu]:{stringValue:Hu},[Gu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Zo(i)&&(i=ai(i)),i&&(a.fields[Wu]=i),{mapValue:a}})(t,e):n instanceof Ds?uh(n,e):n instanceof Ns?hh(n,e):(function(r,i){const a=lh(r,i),l=fl(a)+fl(r.Ae);return _o(a)&&_o(r.Ae)?ch(l):ra(r.serializer,l)})(n,e)}function Ig(n,e,t){return n instanceof Ds?uh(n,e):n instanceof Ns?hh(n,e):t}function lh(n,e){return n instanceof jr?(function(s){return _o(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Br extends hi{}class Ds extends hi{constructor(e){super(),this.elements=e}}function uh(n,e){const t=dh(e);for(const s of n.elements)t.some((r=>et(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Ns extends hi{constructor(e){super(),this.elements=e}}function hh(n,e){let t=dh(e);for(const s of n.elements)t=t.filter((r=>!et(r,s)));return{arrayValue:{values:t}}}class jr extends hi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function fl(n){return le(n.integerValue||n.doubleValue)}function dh(n){return ea(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tg(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Ds&&r instanceof Ds||s instanceof Ns&&r instanceof Ns?Ln(s.elements,r.elements,et):s instanceof jr&&r instanceof jr?et(s.Ae,r.Ae):s instanceof Br&&r instanceof Br})(n.transform,e.transform)}class wg{constructor(e,t){this.version=e,this.transformResults=t}}class ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class di{}function fh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ph(n.key,ot.none()):new Hs(n.key,n.data,ot.none());{const t=n.data,s=Ue.empty();let r=new ge(Te.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new mn(n.key,s,new Be(r.toArray()),ot.none())}}function Ag(n,e,t){n instanceof Hs?(function(r,i,a){const l=r.value.clone(),u=pl(r.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof mn?(function(r,i,a){if(!Rr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=pl(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(mh(r)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ts(n,e,t,s){return n instanceof Hs?(function(i,a,l,u){if(!Rr(i.precondition,a))return l;const d=i.value.clone(),f=gl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof mn?(function(i,a,l,u){if(!Rr(i.precondition,a))return l;const d=gl(i.fieldTransforms,u,a),f=a.data;return f.setAll(mh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(i,a,l){return Rr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function bg(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=lh(s.transform,r||null);i!=null&&(t===null&&(t=Ue.empty()),t.set(s.field,i))}return t||null}function ml(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ln(s,r,((i,a)=>Tg(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hs extends di{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mn extends di{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function pl(n,e,t){const s=new Map;Z(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,Ig(a,l,t[r]))}return s}function gl(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,vg(i,a,e))}return s}class ph extends di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sg extends di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rg{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ag(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ts(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ts(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ah();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const u=fh(a,l);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,((t,s)=>ml(t,s)))&&Ln(this.baseMutations,e.baseMutations,((t,s)=>ml(t,s)))}}class ia{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Z(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return pg})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new ia(e,t,s,r)}}/**
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
 */class Pg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Cg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,X;function kg(n){switch(n){case C.OK:return B(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function gh(n){if(n===void 0)return ut("GRPC error has no .code"),C.UNKNOWN;switch(n){case ue.OK:return C.OK;case ue.CANCELLED:return C.CANCELLED;case ue.UNKNOWN:return C.UNKNOWN;case ue.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ue.INTERNAL:return C.INTERNAL;case ue.UNAVAILABLE:return C.UNAVAILABLE;case ue.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ue.NOT_FOUND:return C.NOT_FOUND;case ue.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ue.ABORTED:return C.ABORTED;case ue.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ue.DATA_LOSS:return C.DATA_LOSS;default:return B(39323,{code:n})}}(X=ue||(ue={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Vg(){return new TextEncoder}/**
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
 */const Dg=new Dt([4294967295,4294967295],0);function yl(n){const e=Vg().encode(n),t=new Du;return t.update(e),new Uint8Array(t.digest())}function _l(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dt([t,s],0),new Dt([r,i],0)]}class oa{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ps(`Invalid padding: ${t}`);if(s<0)throw new ps(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ps(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ps(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Dt.fromNumber(s)));return r.compare(Dg)===1&&(r=new Dt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=yl(e),[s,r]=_l(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new oa(i,r,t);return s.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=yl(e),[s,r]=_l(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fi{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fi(q.min(),r,new ae(J),ht(),Y())}}class zs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new zs(s,t,Y(),Y(),Y())}}/**
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
 */class Pr{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class yh{constructor(e,t){this.targetId=e,this.Ce=t}}class _h{constructor(e,t,s=we.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class El{constructor(){this.ve=0,this.Fe=vl(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Y(),t=Y(),s=Y();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:B(38017,{changeType:i})}})),new zs(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=vl()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ng{constructor(e){this.Ge=e,this.ze=new Map,this.je=ht(),this.Je=Ir(),this.He=Ir(),this.Ze=new ae(J)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(vo(i))if(s===0){const a=new U(i.path);this.et(t,a,Re.newNoDocument(a,q.min()))}else Z(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Mt(s).toUint8Array()}catch(u){if(u instanceof qu)return rn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new oa(a,r,i)}catch(u){return rn(u instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const l=this.ot(a);if(l){if(i.current&&vo(l.target)){const u=new U(l.target.path);this.Et(u).has(a)||this.It(a,u)||this.et(a,u,Re.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=Y();this.He.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new fi(e,t,this.Ze,this.je,s);return this.je=ht(),this.Je=Ir(),this.He=Ir(),this.Ze=new ae(J),r}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new El,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ge(J),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ge(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new El),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ir(){return new ae(U.comparator)}function vl(){return new ae(U.comparator)}const Lg={asc:"ASCENDING",desc:"DESCENDING"},Og={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mg={and:"AND",or:"OR"};class xg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function To(n,e){return n.useProto3Json||oi(e)?e:{value:e}}function qr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Fg(n,e){return qr(n,e.toTimestamp())}function Je(n){return Z(!!n,49232),q.fromTimestamp((function(t){const s=Ot(t);return new se(s.seconds,s.nanos)})(n))}function aa(n,e){return wo(n,e).canonicalString()}function wo(n,e){const t=(function(r){return new re(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function vh(n){const e=re.fromString(n);return Z(bh(e),10190,{key:e.toString()}),e}function Ao(n,e){return aa(n.databaseId,e.path)}function Xi(n,e){const t=vh(e);if(t.get(1)!==n.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Th(t))}function Ih(n,e){return aa(n.databaseId,e)}function Ug(n){const e=vh(n);return e.length===4?re.emptyPath():Th(e)}function bo(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Th(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Il(n,e,t){return{name:Ao(n,e),fields:t.value.mapValue.fields}}function $g(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),we.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),we.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const f=d.code===void 0?C.UNKNOWN:gh(d.code);return new M(f,d.message||"")})(a);t=new _h(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xi(n,s.document.name),i=Je(s.document.updateTime),a=s.document.createTime?Je(s.document.createTime):q.min(),l=new Ue({mapValue:{fields:s.document.fields}}),u=Re.newFoundDocument(r,i,a,l),d=s.targetIds||[],f=s.removedTargetIds||[];t=new Pr(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xi(n,s.document),i=s.readTime?Je(s.readTime):q.min(),a=Re.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Pr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xi(n,s.document),i=s.removedTargetIds||[];t=new Pr([],i,r,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new Cg(r,i),l=s.targetId;t=new yh(l,a)}}return t}function Bg(n,e){let t;if(e instanceof Hs)t={update:Il(n,e.key,e.value)};else if(e instanceof ph)t={delete:Ao(n,e.key)};else if(e instanceof mn)t={update:Il(n,e.key,e.data),updateMask:Jg(e.fieldMask)};else{if(!(e instanceof Sg))return B(16599,{dt:e.type});t={verify:Ao(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const l=a.transform;if(l instanceof Br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ds)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ns)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw B(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Fg(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function jg(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?Je(r.updateTime):Je(i);return a.isEqual(q.min())&&(a=Je(i)),new wg(a,r.transformResults||[])})(t,e)))):[]}function qg(n,e){return{documents:[Ih(n,e.path)]}}function Hg(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ih(n,r);const i=(function(d){if(d.length!==0)return Ah(tt.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(v){return{field:wn(v.field),direction:Gg(v.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=To(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function zg(n){let e=Ug(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Z(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(g){const v=wh(g);return v instanceof tt&&Zu(v)?v.getFilters():[v]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((v=>(function(R){return new $r(An(R.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(v)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let v;return v=typeof g=="object"?g.value:g,oi(v)?null:v})(t.limit));let u=null;t.startAt&&(u=(function(g){const v=!!g.before,E=g.values||[];return new Ur(E,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const v=!g.before,E=g.values||[];return new Ur(E,v)})(t.endAt)),cg(e,r,a,i,l,"F",u,d)}function Wg(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=An(t.unaryFilter.field);return me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=An(t.unaryFilter.field);return me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(t.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=An(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return me.create(An(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return tt.create(t.compositeFilter.filters.map((s=>wh(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function Gg(n){return Lg[n]}function Kg(n){return Og[n]}function Qg(n){return Mg[n]}function wn(n){return{fieldPath:n.canonicalString()}}function An(n){return Te.fromServerFormat(n.fieldPath)}function Ah(n){return n instanceof me?(function(t){if(t.op==="=="){if(cl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NAN"}};if(al(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cl(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NOT_NAN"}};if(al(t.value))return{unaryFilter:{field:wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(t.field),op:Kg(t.op),value:t.value}}})(n):n instanceof tt?(function(t){const s=t.getFilters().map((r=>Ah(r)));return s.length===1?s[0]:{compositeFilter:{op:Qg(t.op),filters:s}}})(n):B(54877,{filter:n})}function Jg(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Pt{constructor(e,t,s,r,i=q.min(),a=q.min(),l=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Yg{constructor(e){this.yt=e}}function Xg(n){const e=zg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Io(e,e.limit,"L"):e}/**
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
 */class Zg{constructor(){this.bn=new ey}addToCollectionParentIndex(e,t){return this.bn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Lt.min())}updateCollectionGroup(e,t,s){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class ey{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(re.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(re.comparator)).toArray()}}/**
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
 */const Tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rh=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(Rh,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
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
 */class xn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new xn(0)}static ar(){return new xn(-1)}}/**
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
 */const wl="LruGarbageCollector",ty=1048576;function Al([n,e],[t,s]){const r=J(n,t);return r===0?J(e,s):r}class ny{constructor(e){this.Pr=e,this.buffer=new ge(Al),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Al(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sy{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(wl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zn(t)?O(wl,"Ignoring IndexedDB error during garbage collection: ",t):await Hn(t)}await this.Ar(3e5)}))}}class ry{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ii.ce);const s=new ny(t);return this.Vr.forEachTarget(e,(r=>s.Ir(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Ir(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Tl)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tl):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,l=Date.now(),this.removeTargets(e,s,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),In()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:g}))))}}function iy(n,e){return new ry(n,e)}/**
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
 */class oy{constructor(){this.changes=new fn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?P.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ay{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cy{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ts(s.mutation,r,Be.empty(),se.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Y()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Y()){const r=Yt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=ms();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=Yt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Y())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,s,r){let i=ht();const a=Is(),l=(function(){return Is()})();return t.forEach(((u,d)=>{const f=s.get(d.key);r.has(d.key)&&(f===void 0||f.mutation instanceof mn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ts(f.mutation,d,f.mutation.getFieldMask(),se.now())):a.set(d.key,Be.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),t.forEach(((d,f)=>l.set(d,new ay(f,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Is();let r=new ae(((a,l)=>a-l)),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let f=s.get(u)||Be.empty();f=l.applyToLocalView(d,f),s.set(u,f);const g=(r.get(l.batchId)||Y()).add(u);r=r.insert(l.batchId,g)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=ah();f.forEach((v=>{if(!i.has(v)){const E=fh(t.get(v),s.get(v));E!==null&&g.set(v,E),i=i.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return lg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ug(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):P.resolve(Yt());let l=Ps,u=i;return a.next((d=>P.forEach(d,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next((v=>{u=u.insert(f,v)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,Y()))).next((f=>({batchId:l,changes:oh(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((s=>{let r=ms();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ms();return this.indexManager.getCollectionParents(e,i).next((l=>P.forEach(l,(u=>{const d=(function(g,v){return new ci(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((f=>{f.forEach(((g,v)=>{a=a.insert(g,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Re.newInvalidDocument(f)))}));let l=ms();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&Ts(f.mutation,d,Be.empty(),se.now()),ui(t,d)&&(l=l.insert(u,d))})),l}))}}/**
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
 */class ly{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Je(r.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:Xg(r.bundledQuery),readTime:Je(r.readTime)}})(t)),P.resolve()}}/**
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
 */class uy{constructor(){this.overlays=new ae(U.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yt();return P.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),P.resolve()}getOverlaysForCollection(e,t,s){const r=Yt(),i=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return P.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ae(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let f=i.get(d.largestBatchId);f===null&&(f=Yt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Yt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>l.set(d,f))),!(l.size()>=r)););return P.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Pg(t,s));let i=this.Lr.get(t);i===void 0&&(i=Y(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class hy{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ca{constructor(){this.kr=new ge(_e.qr),this.Kr=new ge(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new _e(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new U(new re([])),s=new _e(t,e),r=new _e(t,e+1),i=[];return this.Kr.forEachInRange([s,r],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new U(new re([])),s=new _e(t,e),r=new _e(t,e+1);let i=Y();return this.Kr.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new _e(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return U.comparator(e.key,t.key)||J(e.Jr,t.Jr)}static Ur(e,t){return J(e.Jr,t.Jr)||U.comparator(e.key,t.key)}}/**
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
 */class dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ge(_e.qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Rg(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Hr=this.Hr.add(new _e(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Xo:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _e(t,0),r=new _e(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(a=>{const l=this.Zr(a.Jr);i.push(l)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(J);return t.forEach((r=>{const i=new _e(r,0),a=new _e(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(l=>{s=s.add(l.Jr)}))})),P.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const a=new _e(new U(i),0);let l=new ge(J);return this.Hr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(l=l.add(u.Jr)),!0)}),a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Z(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return P.forEach(t.mutations,(r=>{const i=new _e(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new _e(t,0),r=this.Hr.firstAfterOrEqual(s);return P.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fy{constructor(e){this.ti=e,this.docs=(function(){return new ae(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return P.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let s=ht();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))})),P.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=ht();const a=t.path,l=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Up(Fp(f),s)<=0||(r.has(f.key)||ui(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,s,r){B(9500)}ni(e,t){return P.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new my(this)}getSize(e){return P.resolve(this.size)}}class my extends oy{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class py{constructor(e){this.persistence=e,this.ri=new fn((t=>ta(t)),na),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new ca,this.targetCount=0,this.oi=xn._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new xn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),P.waitFor(i).next((()=>r))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return P.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),P.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return P.resolve(s)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class Ph{constructor(e,t){this._i={},this.overlays={},this.ai=new ii(0),this.ui=!1,this.ui=!0,this.ci=new hy,this.referenceDelegate=e(this),this.li=new py(this),this.indexManager=new Zg,this.remoteDocumentCache=(function(r){return new fy(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Yg(t),this.Pi=new ly(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new dy(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const r=new gy(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ei(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ii(e,t){return P.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class gy extends Bp{constructor(e){super(),this.currentSequenceNumber=e}}class la{constructor(e){this.persistence=e,this.Ri=new ca,this.Ai=null}static Vi(e){return new la(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),P.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(s=>{const r=U.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Hr{constructor(e,t){this.persistence=e,this.fi=new fn((s=>Hp(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=iy(this,t)}static Vi(e,t){return new Hr(e,t)}Ti(){}Ei(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?P.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((l=>{l||(s++,i.removeEntry(a,q.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=br(e.data.value)),t}wr(e,t,s){return P.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return P.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ua{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=r}static Is(e,t){let s=Y(),r=Y();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ua(e,t.fromCache,s,r)}}/**
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
 */class yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _y{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return rm()?8:jp(Pe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new yy;return this.ys(e,t,a).next((l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(In()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(In()<=Q.DEBUG&&O("QueryEngine","Query:",Tn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(In()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):P.resolve())}gs(e,t){if(dl(t))return P.resolve(null);let s=Qe(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=Io(t,null,"F"),s=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=Y(...i);return this.fs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,Io(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,r){return dl(t)||r.isEqual(q.min())?P.resolve(null):this.fs.getDocuments(e,s).next((i=>{const a=this.Ss(t,i);return this.bs(t,a,s,r)?P.resolve(null):(In()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tn(t)),this.Ds(e,a,t,xp(r,Ps)).next((l=>l)))}))}Ss(e,t){let s=new ge(rh(e));return t.forEach(((r,i)=>{ui(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return In()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.fs.getDocumentsMatchingQuery(e,t,Lt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const ha="LocalStore",Ey=3e8;class vy{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ae(J),this.Fs=new fn((i=>ta(i)),na),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Iy(n,e,t,s){return new vy(n,e,t,s)}async function Ch(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],l=[];let u=Y();for(const d of r){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Ty(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,f){const g=d.batch,v=g.keys();let E=P.resolve();return v.forEach((R=>{E=E.next((()=>f.getEntry(u,R))).next((V=>{const D=d.docVersions.get(R);Z(D!==null,48541),V.version.compareTo(D)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),f.addEntry(V)))}))})),E.next((()=>l.mutationQueue.removeMutationBatch(u,g)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let u=Y();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function kh(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function wy(n,e){const t=z(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach(((f,g)=>{const v=r.get(g);if(!v)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,g).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,g))));let E=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(we.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,s)),r=r.insert(g,E),(function(V,D,x){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Ey?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(v,E,f)&&l.push(t.li.updateTargetData(i,E))}));let u=ht(),d=Y();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(Ay(i,a,e.documentUpdates).next((f=>{u=f.Bs,d=f.Ls}))),!s.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return P.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.vs=r,i)))}function Ay(n,e,t){let s=Y(),r=Y();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=ht();return t.forEach(((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):O(ha,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{Bs:a,Ls:r}}))}function by(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Xo),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Sy(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,P.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new Pt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function So(n,e,t){const s=z(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!zn(a))throw a;O(ha,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function bl(n,e,t){const s=z(n);let r=q.min(),i=Y();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const g=z(u),v=g.Fs.get(f);return v!==void 0?P.resolve(g.vs.get(v)):g.li.getTargetData(d,f)})(s,a,Qe(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:q.min(),t?i:Y()))).next((l=>(Ry(s,dg(e),l),{documents:l,ks:i})))))}function Ry(n,e,t){let s=n.Ms.get(e)||q.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class Sl{constructor(){this.activeTargetIds=_g()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Py{constructor(){this.vo=new Sl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Sl,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cy{Mo(e){}shutdown(){}}/**
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
 */const Rl="ConnectivityMonitor";class Pl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(Rl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(Rl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tr=null;function Ro(){return Tr===null?Tr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Tr++,"0x"+Tr.toString(16)}/**
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
 */const Zi="RestConnection",ky={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vy{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===xr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=Ro(),l=this.Qo(e,t.toUriEncodedString());O(Zi,`Sending RPC '${e}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(l),f=js(d);return this.zo(e,l,u,s,f).then((g=>(O(Zi,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw rn(Zi,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",s),g}))}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+qn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=ky[e];let r=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class Dy{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const be="WebChannelConnection",us=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Rn extends Vy{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Rn.c_){const e=Mu();us(e,Ou.STAT_EVENT,(t=>{t.stat===po.PROXY?O(be,"STAT_EVENT: detected buffering proxy"):t.stat===po.NOPROXY&&O(be,"STAT_EVENT: detected no buffering proxy")})),Rn.c_=!0}}zo(e,t,s,r,i){const a=Ro();return new Promise(((l,u)=>{const d=new Nu;d.setWithCredentials(!0),d.listenOnce(Lu.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ar.NO_ERROR:const g=d.getResponseJson();O(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ar.TIMEOUT:O(be,`RPC '${e}' ${a} timed out`),u(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const v=d.getStatus();if(O(be,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let E=d.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const V=(function(x){const L=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN})(R.status);u(new M(V,R.message))}else u(new M(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new M(C.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(be,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(r);O(be,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",f,s,15)}))}T_(e,t,s){const r=Ro(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const d=i.join("");O(be,`Creating RPC '${e}' stream ${r}: ${d}`,l);const f=a.createWebChannel(d,l);this.E_(f);let g=!1,v=!1;const E=new Dy({Jo:R=>{v?O(be,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(g||(O(be,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),O(be,`RPC '${e}' stream ${r} sending:`,R),f.send(R))},Ho:()=>f.close()});return us(f,fs.EventType.OPEN,(()=>{v||(O(be,`RPC '${e}' stream ${r} transport opened.`),E.i_())})),us(f,fs.EventType.CLOSE,(()=>{v||(v=!0,O(be,`RPC '${e}' stream ${r} transport closed`),E.o_(),this.I_(f))})),us(f,fs.EventType.ERROR,(R=>{v||(v=!0,rn(be,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),E.o_(new M(C.UNAVAILABLE,"The operation could not be completed")))})),us(f,fs.EventType.MESSAGE,(R=>{var V;if(!v){const D=R.data[0];Z(!!D,16349);const x=D,L=(x==null?void 0:x.error)||((V=x[0])==null?void 0:V.error);if(L){O(be,`RPC '${e}' stream ${r} received error:`,L);const F=L.status;let K=(function(I){const p=ue[I];if(p!==void 0)return gh(p)})(F),G=L.message;F==="NOT_FOUND"&&G.includes("database")&&G.includes("does not exist")&&G.includes(this.databaseId.database)&&rn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),K===void 0&&(K=C.INTERNAL,G="Unknown error status: "+F+" with message "+L.message),v=!0,E.o_(new M(K,G)),f.close()}else O(be,`RPC '${e}' stream ${r} received:`,D),E.__(D)}})),Rn.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xu()}}/**
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
 */function Ny(n){return new Rn(n)}function eo(){return typeof document<"u"?document:null}/**
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
 */function mi(n){return new xg(n,!0)}/**
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
 */Rn.c_=!1;class Vh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Cl="PersistentStream";class Dh{constructor(e,t,s,r,i,a,l,u){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new M(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(Cl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O(Cl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ly extends Dh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=$g(this.serializer,e),s=(function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Je(a.readTime):q.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=bo(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=vo(u)?{documents:qg(i,u)}:{query:Hg(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Eh(i,a.resumeToken);const d=To(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=qr(i,a.snapshotVersion.toTimestamp());const d=To(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const s=Wg(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=bo(this.serializer),t.removeTarget=e,this.q_(t)}}class Oy extends Dh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=jg(e.writeResults,e.commitTime),s=Je(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=bo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Bg(this.serializer,s)))};this.q_(t)}}/**
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
 */class My{}class xy extends My{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,wo(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(C.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.jo(e,wo(t,s),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Fy(n,e,t,s){return new xy(n,e,t,s)}class Uy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ut(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const on="RemoteStore";class $y{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((a=>{s.enqueueAndForget((async()=>{pn(this)&&(O(on,"Restarting streams for network reachability change."),await(async function(u){const d=z(u);d.Ia.add(4),await Ws(d),d.Va.set("Unknown"),d.Ia.delete(4),await pi(d)})(this))}))})),this.Va=new Uy(s,r)}}async function pi(n){if(pn(n))for(const e of n.Ra)await e(!0)}async function Ws(n){for(const e of n.Ra)await e(!1)}function Nh(n,e){const t=z(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),pa(t)?ma(t):Wn(t).O_()&&fa(t,e))}function da(n,e){const t=z(n),s=Wn(t);t.Ea.delete(e),s.O_()&&Lh(t,e),t.Ea.size===0&&(s.O_()?s.L_():pn(t)&&t.Va.set("Unknown"))}function fa(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wn(n).Z_(e)}function Lh(n,e){n.da.$e(e),Wn(n).X_(e)}function ma(n){n.da=new Ng({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Wn(n).start(),n.Va.ua()}function pa(n){return pn(n)&&!Wn(n).x_()&&n.Ea.size>0}function pn(n){return z(n).Ia.size===0}function Oh(n){n.da=void 0}async function By(n){n.Va.set("Online")}async function jy(n){n.Ea.forEach(((e,t)=>{fa(n,e)}))}async function qy(n,e){Oh(n),pa(n)?(n.Va.ha(e),ma(n)):n.Va.set("Unknown")}async function Hy(n,e,t){if(n.Va.set("Online"),e instanceof _h&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ea.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ea.delete(l),r.da.removeTarget(l))})(n,e)}catch(s){O(on,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zr(n,s)}else if(e instanceof Pr?n.da.Xe(e):e instanceof yh?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const s=await kh(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(d);f&&i.Ea.set(d,f.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),Lh(i,u);const g=new Pt(f.target,u,d,f.sequenceNumber);fa(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(s){O(on,"Failed to raise snapshot:",s),await zr(n,s)}}async function zr(n,e,t){if(!zn(e))throw e;n.Ia.add(1),await Ws(n),n.Va.set("Offline"),t||(t=()=>kh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(on,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await pi(n)}))}function Mh(n,e){return e().catch((t=>zr(n,t,e)))}async function gi(n){const e=z(n),t=Ft(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xo;for(;zy(e);)try{const r=await by(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Wy(e,r)}catch(r){await zr(e,r)}xh(e)&&Fh(e)}function zy(n){return pn(n)&&n.Ta.length<10}function Wy(n,e){n.Ta.push(e);const t=Ft(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function xh(n){return pn(n)&&!Ft(n).x_()&&n.Ta.length>0}function Fh(n){Ft(n).start()}async function Gy(n){Ft(n).ra()}async function Ky(n){const e=Ft(n);for(const t of n.Ta)e.ea(t.mutations)}async function Qy(n,e,t){const s=n.Ta.shift(),r=ia.from(s,e,t);await Mh(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await gi(n)}async function Jy(n,e){e&&Ft(n).Y_&&await(async function(s,r){if((function(a){return kg(a)&&a!==C.ABORTED})(r.code)){const i=s.Ta.shift();Ft(s).B_(),await Mh(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await gi(s)}})(n,e),xh(n)&&Fh(n)}async function kl(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(on,"RemoteStore received new credentials");const s=pn(t);t.Ia.add(3),await Ws(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await pi(t)}async function Yy(n,e){const t=z(n);e?(t.Ia.delete(2),await pi(t)):e||(t.Ia.add(2),await Ws(t),t.Va.set("Unknown"))}function Wn(n){return n.ma||(n.ma=(function(t,s,r){const i=z(t);return i.sa(),new Ly(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:By.bind(null,n),Yo:jy.bind(null,n),t_:qy.bind(null,n),H_:Hy.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),pa(n)?ma(n):n.Va.set("Unknown")):(await n.ma.stop(),Oh(n))}))),n.ma}function Ft(n){return n.fa||(n.fa=(function(t,s,r){const i=z(t);return i.sa(),new Oy(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Gy.bind(null,n),t_:Jy.bind(null,n),ta:Ky.bind(null,n),na:Qy.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await gi(n)):(await n.fa.stop(),n.Ta.length>0&&(O(on,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ga{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new ga(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,e){if(ut("AsyncQueue",`${e}: ${n}`),zn(n))return new M(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Pn{static emptySet(e){return new Pn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||U.comparator(t.key,s.key):(t,s)=>U.comparator(t.key,s.key),this.keyedMap=ms(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Pn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Vl{constructor(){this.ga=new ae(U.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Fn{constructor(e,t,s,r,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Fn(e,t,Pn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Xy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Zy{constructor(){this.queries=Dl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=z(t),i=r.queries;r.queries=Dl(),i.forEach(((a,l)=>{for(const u of l.Sa)u.onError(s)}))})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Dl(){return new fn((n=>sh(n)),li)}async function e_(n,e){const t=z(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Xy,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=ya(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&_a(t)}async function t_(n,e){const t=z(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function n_(n,e){const t=z(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(r)&&(s=!0);a.wa=r}}s&&_a(t)}function s_(n,e,t){const s=z(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function _a(n){n.Ca.forEach((e=>{e.next()}))}var Po,Nl;(Nl=Po||(Po={})).Ma="default",Nl.Cache="cache";class r_{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Fn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Fn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Po.Cache}}/**
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
 */class Uh{constructor(e){this.key=e}}class $h{constructor(e){this.key=e}}class i_{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Y(),this.mutatedKeys=Y(),this.eu=rh(e),this.tu=new Pn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Vl,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,g)=>{const v=r.get(f),E=ui(this.query,g)?g:null,R=!!v&&this.mutatedKeys.has(v.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;v&&E?v.data.isEqual(E.data)?R!==V&&(s.track({type:3,doc:E}),D=!0):this.su(v,E)||(s.track({type:2,doc:E}),D=!0,(u&&this.eu(E,u)>0||d&&this.eu(E,d)<0)&&(l=!0)):!v&&E?(s.track({type:0,doc:E}),D=!0):v&&!E&&(s.track({type:1,doc:v}),D=!0,(u||d)&&(l=!0)),D&&(E?(a=a.add(E),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:a,iu:s,bs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,g)=>(function(E,R){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:D})}};return V(E)-V(R)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],u=this.Ya.size===0&&this.current&&!r?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new Fn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vl,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Y(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new $h(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Uh(s))})),t}cu(e){this.Za=e.ks,this.Ya=Y();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Fn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ea="SyncEngine";class o_{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class a_{constructor(e){this.key=e,this.hu=!1}}class c_{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new fn((l=>sh(l)),li),this.Eu=new Map,this.Iu=new Set,this.Ru=new ae(U.comparator),this.Au=new Map,this.Vu=new ca,this.du={},this.mu=new Map,this.fu=xn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function l_(n,e,t=!0){const s=Wh(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Bh(s,e,t,!0),r}async function u_(n,e){const t=Wh(n);await Bh(t,e,!0,!1)}async function Bh(n,e,t,s){const r=await Sy(n.localStore,Qe(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await h_(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Nh(n.remoteStore,r),l}async function h_(n,e,t,s,r){n.pu=(g,v,E)=>(async function(V,D,x,L){let F=D.view.ru(x);F.bs&&(F=await bl(V.localStore,D.query,!1).then((({documents:I})=>D.view.ru(I,F))));const K=L&&L.targetChanges.get(D.targetId),G=L&&L.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(F,V.isPrimaryClient,K,G);return Ol(V,D.targetId,j.au),j.snapshot})(n,g,v,E);const i=await bl(n.localStore,e,!0),a=new i_(e,i.ks),l=a.ru(i.documents),u=zs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(l,n.isPrimaryClient,u);Ol(n,t,d.au);const f=new o_(e,t,a);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),d.snapshot}async function d_(n,e,t){const s=z(n),r=s.Tu.get(e),i=s.Eu.get(r.targetId);if(i.length>1)return s.Eu.set(r.targetId,i.filter((a=>!li(a,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await So(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&da(s.remoteStore,r.targetId),Co(s,r.targetId)})).catch(Hn)):(Co(s,r.targetId),await So(s.localStore,r.targetId,!0))}async function f_(n,e){const t=z(n),s=t.Tu.get(e),r=t.Eu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),da(t.remoteStore,s.targetId))}async function m_(n,e,t){const s=I_(n);try{const r=await(function(a,l){const u=z(a),d=se.now(),f=l.reduce(((E,R)=>E.add(R.key)),Y());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let R=ht(),V=Y();return u.xs.getEntries(E,f).next((D=>{R=D,R.forEach(((x,L)=>{L.isValidDocument()||(V=V.add(x))}))})).next((()=>u.localDocuments.getOverlayedDocuments(E,R))).next((D=>{g=D;const x=[];for(const L of l){const F=bg(L,g.get(L.key).overlayedDocument);F!=null&&x.push(new mn(L.key,F,Ju(F.value.mapValue),ot.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,x,l)})).next((D=>{v=D;const x=D.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(E,D.batchId,x)}))})).then((()=>({batchId:v.batchId,changes:oh(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new ae(J)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d})(s,r.batchId,t),await Gs(s,r.changes),await gi(s.remoteStore)}catch(r){const i=ya(r,"Failed to persist write");t.reject(i)}}async function jh(n,e){const t=z(n);try{const s=await wy(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Au.get(i);a&&(Z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?Z(a.hu,14607):r.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))})),await Gs(t,s,e)}catch(s){await Hn(s)}}function Ll(n,e,t){const s=z(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const u=z(a);u.onlineState=l;let d=!1;u.queries.forEach(((f,g)=>{for(const v of g.Sa)v.va(l)&&(d=!0)})),d&&_a(u)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function p_(n,e,t){const s=z(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let a=new ae(U.comparator);a=a.insert(i,Re.newNoDocument(i,q.min()));const l=Y().add(i),u=new fi(q.min(),new Map,new ae(J),a,l);await jh(s,u),s.Ru=s.Ru.remove(i),s.Au.delete(e),va(s)}else await So(s.localStore,e,!1).then((()=>Co(s,e,t))).catch(Hn)}async function g_(n,e){const t=z(n),s=e.batch.batchId;try{const r=await Ty(t.localStore,e);Hh(t,s,null),qh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Gs(t,r)}catch(r){await Hn(r)}}async function y_(n,e,t){const s=z(n);try{const r=await(function(a,l){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next((g=>(Z(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(s.localStore,e);Hh(s,e,t),qh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Gs(s,r)}catch(r){await Hn(r)}}function qh(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Hh(n,e,t){const s=z(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||zh(n,s)}))}function zh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(da(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),va(n))}function Ol(n,e,t){for(const s of t)s instanceof Uh?(n.Vu.addReference(s.key,e),__(n,s)):s instanceof $h?(O(Ea,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||zh(n,s.key)):B(19791,{wu:s})}function __(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(O(Ea,"New document in limbo: "+t),n.Iu.add(s),va(n))}function va(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new U(re.fromString(e)),s=n.fu.next();n.Au.set(s,new a_(t)),n.Ru=n.Ru.insert(t,s),Nh(n.remoteStore,new Pt(Qe(sa(t.path)),s,"TargetPurposeLimboResolution",ii.ce))}}async function Gs(n,e,t){const s=z(n),r=[],i=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,u)=>{a.push(s.pu(u,e,t).then((d=>{var f;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){r.push(d);const g=ua.Is(u.targetId,d);i.push(g)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>P.forEach(d,(v=>P.forEach(v.Ts,(E=>f.persistence.referenceDelegate.addReference(g,v.targetId,E))).next((()=>P.forEach(v.Es,(E=>f.persistence.referenceDelegate.removeReference(g,v.targetId,E)))))))))}catch(g){if(!zn(g))throw g;O(ha,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const E=f.vs.get(v),R=E.snapshotVersion,V=E.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(v,V)}}})(s.localStore,i))}async function E_(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){O(Ea,"User change. New user:",e.toKey());const s=await Ch(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((l=>{l.forEach((u=>{u.reject(new M(C.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gs(t,s.Ns)}}function v_(n,e){const t=z(n),s=t.Au.get(e);if(s&&s.hu)return Y().add(s.key);{let r=Y();const i=t.Eu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function Wh(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p_.bind(null,e),e.Pu.H_=n_.bind(null,e.eventManager),e.Pu.yu=s_.bind(null,e.eventManager),e}function I_(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y_.bind(null,e),e}class Wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Iy(this.persistence,new _y,e.initialUser,this.serializer)}Cu(e){return new Ph(la.Vi,this.serializer)}Du(e){return new Py}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wr.provider={build:()=>new Wr};class T_ extends Wr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof Hr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new sy(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Ph((s=>Hr.Vi(s,t)),this.serializer)}}class ko{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ll(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=E_.bind(null,this.syncEngine),await Yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Zy})()}createDatastore(e){const t=mi(e.databaseInfo.databaseId),s=Ny(e.databaseInfo);return Fy(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,l){return new $y(s,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ll(this.syncEngine,t,0)),(function(){return Pl.v()?new Pl:new Cy})())}createSyncEngine(e,t){return(function(r,i,a,l,u,d,f){const g=new c_(r,i,a,l,u,d);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=z(r);O(on,"RemoteStore shutting down."),i.Ia.add(5),await Ws(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ko.provider={build:()=>new ko};/**
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
 */class w_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ut="FirestoreClient";class A_{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Se.UNAUTHENTICATED,this.clientId=Jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{O(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(O(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ya(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function to(n,e){n.asyncQueue.verifyOperationInProgress(),O(Ut,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Ch(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ml(n,e){n.asyncQueue.verifyOperationInProgress();const t=await b_(n);O(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>kl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>kl(e.remoteStore,r))),n._onlineComponents=e}async function b_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Ut,"Using user provided OfflineComponentProvider");try{await to(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;rn("Error using user provided cache. Falling back to memory cache: "+t),await to(n,new Wr)}}else O(Ut,"Using default OfflineComponentProvider"),await to(n,new T_(void 0));return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Ut,"Using user provided OnlineComponentProvider"),await Ml(n,n._uninitializedComponentsProvider._online)):(O(Ut,"Using default OnlineComponentProvider"),await Ml(n,new ko))),n._onlineComponents}function S_(n){return Gh(n).then((e=>e.syncEngine))}async function R_(n){const e=await Gh(n),t=e.eventManager;return t.onListen=l_.bind(null,e.syncEngine),t.onUnlisten=d_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=u_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=f_.bind(null,e.syncEngine),t}function P_(n,e,t={}){const s=new Nt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,u,d){const f=new w_({next:v=>{f.Nu(),a.enqueueAndForget((()=>t_(i,g)));const E=v.docs.has(l);!E&&v.fromCache?d.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&v.fromCache&&u&&u.source==="server"?d.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new r_(sa(l.path),f,{includeMetadataChanges:!0,qa:!0});return e_(i,g)})(await R_(n),n.asyncQueue,e,t,s))),s.promise}function C_(n,e){const t=new Nt;return n.asyncQueue.enqueueAndForget((async()=>m_(await S_(n),e,t))),t.promise}/**
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
 */function Kh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const k_="ComponentProvider",xl=new Map;function V_(n,e,t,s,r){return new Gp(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Kh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const Qh="firestore.googleapis.com",Fl=!0;class Ul{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qh,this.ssl=Fl}else this.host=e.host,this.ssl=e.ssl??Fl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ty)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kh(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new bp;switch(s.type){case"firstParty":return new Cp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=xl.get(t);s&&(O(k_,"Removing Datastore"),xl.delete(t),s.terminate())})(this),Promise.resolve()}}function D_(n,e,t,s={}){var d;n=Rs(n,Ia);const r=js(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&bu(`https://${l}`),i.host!==Qh&&i.host!==l&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:s};if(!tn(u,a)&&(n._setSettings(u),s.mockUserToken)){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Se.MOCK_USER;else{f=Yf(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Se(v)}n._authCredentials=new Sp(new Uu(f,g))}}/**
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
 */class Ta{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class ve{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(qs(t,ve._jsonSchema))return new ve(e,s||null,new U(re.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:he("string",ve._jsonSchemaVersion),referencePath:he("string")};class Ls extends Ta{constructor(e,t,s){super(e,t,sa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new U(e))}withConverter(e){return new Ls(this.firestore,e,this._path)}}function N_(n,e,...t){if(n=Me(n),arguments.length===1&&(e=Jo.newId()),Op("doc","path",e),n instanceof Ia){const s=re.fromString(e,...t);return Zc(s),new ve(n,null,new U(s))}{if(!(n instanceof ve||n instanceof Ls))throw new M(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return Zc(s),new ve(n.firestore,n instanceof Ls?n.converter:null,new U(s))}}/**
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
 */const $l="AsyncQueue";class Bl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vh(this,"async_queue_retry"),this._c=()=>{const s=eo();s&&O($l,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Nt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!zn(e))throw e;O($l,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,ut("INTERNAL UNHANDLED ERROR: ",jl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=ga.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&B(47125,{Pc:jl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function jl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class wa extends Ia{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Bl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bl(e),this._firestoreClient=void 0,await e}}}function L_(n,e){const t=typeof n=="object"?n:Cu(),s=typeof n=="string"?n:xr,r=Ko(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Qf("firestore");i&&D_(r,...i)}return r}function Jh(n){if(n._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||O_(n),n._firestoreClient}function O_(n){var s,r,i,a;const e=n._freezeSettings(),t=V_(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new A_(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class $e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $e(we.fromBase64String(e))}catch(t){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $e(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qs(e,$e._jsonSchema))return $e.fromBase64String(e.bytes)}}$e._jsonSchemaVersion="firestore/bytes/1.0",$e._jsonSchema={type:he("string",$e._jsonSchemaVersion),bytes:he("string")};/**
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
 */class Yh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xh{constructor(e){this._methodName=e}}/**
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
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(qs(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:he("string",Ye._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qs(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qe(e.vectorValues);throw new M(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:he("string",qe._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const M_=/^__.*__$/;class x_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hs(e,this.data,t,this.fieldTransforms)}}function Zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class Aa{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Aa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Gr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Zh(this.dataSource)&&M_.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class F_{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||mi(e)}A(e,t,s,r=!1){return new Aa({dataSource:e,methodName:t,targetDoc:s,path:Te.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function U_(n){const e=n._freezeSettings(),t=mi(n._databaseId);return new F_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $_(n,e,t,s,r,i={}){const a=n.A(i.merge||i.mergeFields?2:0,e,t,r);sd("Data must be an object, but it was:",a,s);const l=td(s,a);let u,d;if(i.merge)u=new Be(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const v=ba(e,g,t);if(!a.contains(v))throw new M(C.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);q_(f,v)||f.push(v)}u=new Be(f),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new x_(new Ue(l),u,d)}function ed(n,e){if(nd(n=Me(n)))return sd("Unsupported field value:",e,n),td(n,e);if(n instanceof Xh)return(function(s,r){if(!Zh(r.dataSource))throw r.yc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.yc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const l of s){let u=ed(l,r.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=Me(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Eg(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=se.fromDate(s);return{timestampValue:qr(r.serializer,i)}}if(s instanceof se){const i=new se(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:qr(r.serializer,i)}}if(s instanceof Ye)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $e)return{bytesValue:Eh(r.serializer,s._byteString)};if(s instanceof ve){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:aa(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof qe)return(function(a,l){const u=a instanceof qe?a.toArray():a;return{mapValue:{fields:{[Ku]:{stringValue:Qu},[Fr]:{arrayValue:{values:u.map((f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return ra(l.serializer,f)}))}}}}}})(s,r);if(Sh(s))return s._toProto(r.serializer);throw r.yc(`Unsupported field value: ${Yo(s)}`)})(n,e)}function td(n,e){const t={};return ju(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(n,((s,r)=>{const i=ed(r,e.dc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function nd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Ye||n instanceof $e||n instanceof ve||n instanceof Xh||n instanceof qe||Sh(n))}function sd(n,e,t){if(!nd(t)||!$u(t)){const s=Yo(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function ba(n,e,t){if((e=Me(e))instanceof Yh)return e._internalPath;if(typeof e=="string")return j_(n,e);throw Gr("Field path arguments must be of type string or ",n,!1,void 0,t)}const B_=new RegExp("[~\\*/\\[\\]]");function j_(n,e,t){if(e.search(B_)>=0)throw Gr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yh(...e.split("."))._internalPath}catch{throw Gr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gr(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new M(C.INVALID_ARGUMENT,l+n+u)}function q_(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class H_{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return dn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Fr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>le(a.doubleValue)));return new qe(t)}convertGeoPoint(e){return new Ye(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ai(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=re.fromString(e);Z(bh(s),9688,{name:e});const r=new ks(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(t)||ut(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class z_ extends H_{constructor(e){super(),this.firestore=e}convertBytes(e){return new $e(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}const ql="@firebase/firestore",Hl="4.13.0";/**
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
 */class rd{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ba("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class W_ extends rd{data(){return super.data()}}function G_(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class gs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zt extends rd{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ba("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zt._jsonSchema={type:he("string",Zt._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class Cr extends Zt{data(e={}){return super.data(e)}}class ws{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Cr(this._firestore,this._userDataWriter,s.key,s,new gs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const u=new Cr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new gs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new Cr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new gs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:K_(l.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function K_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:he("string",ws._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};/**
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
 */function Q_(n){n=Rs(n,ve);const e=Rs(n.firestore,wa),t=Jh(e);return P_(t,n._key).then((s=>X_(e,n,s)))}function J_(n,e,t){n=Rs(n,ve);const s=Rs(n.firestore,wa),r=G_(n.converter,e,t),i=U_(s);return Y_(s,[$_(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,ot.none())])}function Y_(n,e){const t=Jh(n);return C_(t,e)}function X_(n,e,t){const s=t.docs.get(e._key),r=new z_(n);return new Zt(n,r,e._key,s,new gs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Ap(jn),Nn(new nn("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new wa(new Rp(s.getProvider("auth-internal")),new kp(a,s.getProvider("app-check-internal")),Kp(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Vt(ql,Hl,e),Vt(ql,Hl,"esm2020")})();function id(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z_=id,od=new $s("auth","Firebase",id());/**
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
 */const Kr=new Wo("@firebase/auth");function eE(n,...e){Kr.logLevel<=Q.WARN&&Kr.warn(`Auth (${jn}): ${n}`,...e)}function kr(n,...e){Kr.logLevel<=Q.ERROR&&Kr.error(`Auth (${jn}): ${n}`,...e)}/**
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
 */function He(n,...e){throw Sa(n,...e)}function Xe(n,...e){return Sa(n,...e)}function ad(n,e,t){const s={...Z_(),[e]:t};return new $s("auth","Firebase",s).create(e,{appName:n.name})}function at(n){return ad(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return od.create(n,...e)}function $(n,e,...t){if(!n)throw Sa(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kr(e),new Error(e)}function dt(n,e){n||st(e)}/**
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
 */function Vo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function tE(){return zl()==="http:"||zl()==="https:"}function zl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function nE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tE()||tm()||"connection"in navigator)?navigator.onLine:!0}function sE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Xf()||nm()}get(){return nE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ra(n,e){dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oE=new Ks(3e4,6e4);function jt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qt(n,e,t,s,r={}){return ld(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=Bs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return em()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&js(n.emulatorConfig.host)&&(d.credentials="include"),cd.fetch()(await ud(n,n.config.apiHost,t,l),d)})}async function ld(n,e,t){n._canInitEmulator=!1;const s={...rE,...e};try{const r=new cE(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw wr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw wr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw wr(n,"user-disabled",a);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ad(n,f,d);He(n,f)}}catch(r){if(r instanceof mt)throw r;He(n,"network-request-failed",{message:String(r)})}}async function Qs(n,e,t,s,r={}){const i=await qt(n,e,t,s,r);return"mfaPendingCredential"in i&&He(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ud(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Ra(n.config,r):`${n.config.apiScheme}://${r}`;return iE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function aE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),oE.get())})}}function wr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Xe(n,e,s);return r.customData._tokenResponse=t,r}function Wl(n){return n!==void 0&&n.enterprise!==void 0}class lE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uE(n,e){return qt(n,"GET","/v2/recaptchaConfig",jt(n,e))}/**
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
 */async function hE(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function Qr(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function As(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dE(n,e=!1){const t=Me(n),s=await t.getIdToken(e),r=Pa(s);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:As(no(r.auth_time)),issuedAtTime:As(no(r.iat)),expirationTime:As(no(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function no(n){return Number(n)*1e3}function Pa(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Iu(t);return r?JSON.parse(r):(kr("Failed to decode base64 JWT payload"),null)}catch(r){return kr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gl(n){const e=Pa(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Os(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof mt&&fE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function fE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Do{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(n){var g;const e=n.auth,t=await n.getIdToken(),s=await Os(n,Qr(e,{idToken:t}));$(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(g=r.providerUserInfo)!=null&&g.length?hd(r.providerUserInfo):[],a=gE(n.providerData,i),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Do(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function pE(n){const e=Me(n);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gE(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function yE(n,e){const t=await ld(n,{},async()=>{const s=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await ud(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return n.emulatorConfig&&js(n.emulatorConfig.host)&&(u.credentials="include"),cd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _E(n,e){return qt(n,"POST","/v2/accounts:revokeToken",jt(n,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=Gl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await yE(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Cn;return s&&($(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function Tt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new mE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Do(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Os(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dE(this,e)}reload(){return pE(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Jr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await Os(this,hE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:E,providerData:R,stsTokenManager:V}=t;$(g&&V,e,"internal-error");const D=Cn.fromJSON(this.name,V);$(typeof g=="string",e,"internal-error"),Tt(s,e.name),Tt(r,e.name),$(typeof v=="boolean",e,"internal-error"),$(typeof E=="boolean",e,"internal-error"),Tt(i,e.name),Tt(a,e.name),Tt(l,e.name),Tt(u,e.name),Tt(d,e.name),Tt(f,e.name);const x=new je({uid:g,auth:e,email:r,emailVerified:v,displayName:s,isAnonymous:E,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:d,lastLoginAt:f});return R&&Array.isArray(R)&&(x.providerData=R.map(L=>({...L}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,t,s=!1){const r=new Cn;r.updateFromServerResponse(t);const i=new je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Jr(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Cn;l.updateFromIdToken(s);const u=new je({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Do(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Kl=new Map;function rt(n){dt(n instanceof Function,"Expected a class definition");let e=Kl.get(n);return e?(dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kl.set(n,e),e)}/**
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
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dd.type="NONE";const Ql=dd;/**
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
 */function Vr(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qr(this.auth,{idToken:e}).catch(()=>{});return t?je._fromGetAccountInfoResponse(this.auth,t,e):null}return je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new kn(rt(Ql),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||rt(Ql);const a=Vr(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){let g;if(typeof f=="string"){const v=await Qr(e,{idToken:f}).catch(()=>{});if(!v)break;g=await je._fromGetAccountInfoResponse(e,v,f)}else g=je._fromJSON(e,f);d!==i&&(l=g),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new kn(i,e,s):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new kn(i,e,s))}}/**
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
 */function Jl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_d(e))return"Blackberry";if(Ed(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||pd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fd(n=Pe()){return/firefox\//i.test(n)}function md(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pd(n=Pe()){return/crios\//i.test(n)}function gd(n=Pe()){return/iemobile/i.test(n)}function yd(n=Pe()){return/android/i.test(n)}function _d(n=Pe()){return/blackberry/i.test(n)}function Ed(n=Pe()){return/webos/i.test(n)}function Ca(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EE(n=Pe()){var e;return Ca(n)&&!!((e=window.navigator)!=null&&e.standalone)}function vE(){return sm()&&document.documentMode===10}function vd(n=Pe()){return Ca(n)||yd(n)||Ed(n)||_d(n)||/windows phone/i.test(n)||gd(n)}/**
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
 */function Id(n,e=[]){let t;switch(n){case"Browser":t=Jl(Pe());break;case"Worker":t=`${Jl(Pe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${s}`}/**
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
 */class IE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TE(n,e={}){return qt(n,"GET","/v2/passwordPolicy",jt(n,e))}/**
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
 */const wE=6;class AE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class bE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yl(this),this.idTokenSubscription=new Yl(this),this.beforeStateQueue=new IE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qr(this,{idToken:e}),s=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(at(this));const t=e?Me(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TE(this),t=new AE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _E(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&eE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gn(n){return Me(n)}class Yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=hm(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SE(n){yi=n}function Td(n){return yi.loadJS(n)}function RE(){return yi.recaptchaEnterpriseScript}function PE(){return yi.gapiScript}function CE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class kE{constructor(){this.enterprise=new VE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class VE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const DE="recaptcha-enterprise",wd="NO_RECAPTCHA";class NE{constructor(e){this.type=DE,this.auth=gn(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{uE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new lE(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function r(i,a,l){const u=window.grecaptcha;Wl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(wd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kE().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(l=>{if(!t&&Wl(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=RE();u.length!==0&&(u+=l),Td(u).then(()=>{r(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Xl(n,e,t,s=!1,r=!1){const i=new NE(n);let a;if(r)a=wd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function No(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Xl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Xl(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
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
 */function LE(n,e){const t=Ko(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(tn(i,e??{}))return r;He(r,"already-initialized")}return t.initialize({options:e})}function OE(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ME(n,e,t){const s=gn(n);$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ad(e),{host:a,port:l}=xE(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){$(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),$(tn(d,s.config.emulator)&&tn(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,js(a)?bu(`${i}//${a}${u}`):FE()}function Ad(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xE(n){const e=Ad(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Zl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Zl(a)}}}function Zl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function FE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ka{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function UE(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $E(n,e){return Qs(n,"POST","/v1/accounts:signInWithPassword",jt(n,e))}/**
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
 */async function BE(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}async function jE(n,e){return Qs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}/**
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
 */class Ms extends ka{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ms(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ms(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return No(e,t,"signInWithPassword",$E);case"emailLink":return BE(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return No(e,s,"signUpPassword",UE);case"emailLink":return jE(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vn(n,e){return Qs(n,"POST","/v1/accounts:signInWithIdp",jt(n,e))}/**
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
 */const qE="http://localhost";class an extends ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new an(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Vn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vn(e,t)}buildRequest(){const e={requestUri:qE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bs(t)}return e}}/**
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
 */function HE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zE(n){const e=hs(ds(n)).link,t=e?hs(ds(e)).deep_link_id:null,s=hs(ds(n)).deep_link_id;return(s?hs(ds(s)).link:null)||s||t||e||n}class Va{constructor(e){const t=hs(ds(e)),s=t.apiKey??null,r=t.oobCode??null,i=HE(t.mode??null);$(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=zE(e);try{return new Va(t)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,t){return Ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Va.parseLink(t);return $(s,"argument-error"),Ms._fromEmailAndCode(e,s.code,s.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Js extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Js{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class At extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return At.credential(t,s)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class bt extends Js{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class St extends Js{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return St.credential(t,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */async function WE(n,e){return Qs(n,"POST","/v1/accounts:signUp",jt(n,e))}/**
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
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await je._fromIdTokenResponse(e,s,r),a=eu(s);return new cn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=eu(s);return new cn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function eu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Yr extends mt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Yr(e,t,s,r)}}function Sd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(n,i,e,s):i})}async function GE(n,e,t=!1){const s=await Os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cn._forOperation(n,"link",s)}/**
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
 */async function KE(n,e,t=!1){const{auth:s}=n;if(Fe(s.app))return Promise.reject(at(s));const r="reauthenticate";try{const i=await Os(n,Sd(s,r,e,n),t);$(i.idToken,s,"internal-error");const a=Pa(i.idToken);$(a,s,"internal-error");const{sub:l}=a;return $(n.uid===l,s,"user-mismatch"),cn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(s,"user-mismatch"),i}}/**
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
 */async function Rd(n,e,t=!1){if(Fe(n.app))return Promise.reject(at(n));const s="signIn",r=await Sd(n,s,e),i=await cn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function QE(n,e){return Rd(gn(n),e)}/**
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
 */async function Pd(n){const e=gn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JE(n,e,t){if(Fe(n.app))return Promise.reject(at(n));const s=gn(n),a=await No(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Pd(n),u}),l=await cn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function YE(n,e,t){return Fe(n.app)?Promise.reject(at(n)):QE(Me(n),Gn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Pd(n),s})}function XE(n,e,t,s){return Me(n).onIdTokenChanged(e,t,s)}function ZE(n,e,t){return Me(n).beforeAuthStateChanged(e,t)}function ev(n,e,t,s){return Me(n).onAuthStateChanged(e,t,s)}function tv(n){return Me(n).signOut()}const Xr="__sak";/**
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
 */class Cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nv=1e3,sv=10;class kd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);vE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sv):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kd.type="LOCAL";const rv=kd;/**
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
 */class Vd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vd.type="SESSION";const Dd=Vd;/**
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
 */function iv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new _i(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await iv(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
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
 */function Da(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ov{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Da("",20);r.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ze(){return window}function av(n){Ze().location.href=n}/**
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
 */function Nd(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function cv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function uv(){return Nd()?self:null}/**
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
 */const Ld="firebaseLocalStorageDb",hv=1,Zr="firebaseLocalStorage",Od="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ei(n,e){return n.transaction([Zr],e?"readwrite":"readonly").objectStore(Zr)}function dv(){const n=indexedDB.deleteDatabase(Ld);return new Ys(n).toPromise()}function Lo(){const n=indexedDB.open(Ld,hv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Zr,{keyPath:Od})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Zr)?e(s):(s.close(),await dv(),e(await Lo()))})})}async function tu(n,e,t){const s=Ei(n,!0).put({[Od]:e,value:t});return new Ys(s).toPromise()}async function fv(n,e){const t=Ei(n,!1).get(e),s=await new Ys(t).toPromise();return s===void 0?null:s.value}function nu(n,e){const t=Ei(n,!0).delete(e);return new Ys(t).toPromise()}const mv=800,pv=3;class Md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(uv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await cv(),!this.activeServiceWorker)return;this.sender=new ov(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await tu(e,Xr,"1"),await nu(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>fv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ei(r,!1).getAll();return new Ys(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Md.type="LOCAL";const gv=Md;new Ks(3e4,6e4);/**
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
 */function yv(n,e){return e?rt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Na extends ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _v(n){return Rd(n.auth,new Na(n),n.bypassAuthState)}function Ev(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),KE(t,new Na(n),n.bypassAuthState)}async function vv(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),GE(t,new Na(n),n.bypassAuthState)}/**
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
 */class xd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _v;case"linkViaPopup":case"linkViaRedirect":return vv;case"reauthViaPopup":case"reauthViaRedirect":return Ev;default:He(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Iv=new Ks(2e3,1e4);class bn extends xd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Iv.get())};e()}}bn.currentPopupAction=null;/**
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
 */const Tv="pendingRedirect",Dr=new Map;class wv extends xd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const s=await Av(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Av(n,e){const t=Rv(e),s=Sv(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function bv(n,e){Dr.set(n._key(),e)}function Sv(n){return rt(n._redirectPersistence)}function Rv(n){return Vr(Tv,n.config.apiKey,n.name)}async function Pv(n,e,t=!1){if(Fe(n.app))return Promise.reject(at(n));const s=gn(n),r=yv(s,e),a=await new wv(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Cv=600*1e3;class kv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Fd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(su(e))}saveEventToCache(e){this.cachedEventUids.add(su(e)),this.lastProcessedEventTime=Date.now()}}function su(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fd(n);default:return!1}}/**
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
 */async function Dv(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
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
 */const Nv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lv=/^https?/;async function Ov(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Dv(n);for(const t of e)try{if(Mv(t))return}catch{}He(n,"unauthorized-domain")}function Mv(n){const e=Vo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Lv.test(t))return!1;if(Nv.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const xv=new Ks(3e4,6e4);function ru(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fv(n){return new Promise((e,t)=>{var r,i,a;function s(){ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ru(),t(Xe(n,"network-request-failed"))},timeout:xv.get()})}if((i=(r=Ze().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Ze().gapi)!=null&&a.load)s();else{const l=CE("iframefcb");return Ze()[l]=()=>{gapi.load?s():t(Xe(n,"network-request-failed"))},Td(`${PE()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function Uv(n){return Nr=Nr||Fv(n),Nr}/**
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
 */const $v=new Ks(5e3,15e3),Bv="__/auth/iframe",jv="emulator/auth/iframe",qv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zv(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ra(e,jv):`https://${n.config.authDomain}/${Bv}`,s={apiKey:e.apiKey,appName:n.name,v:jn},r=Hv.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Bs(s).slice(1)}`}async function Wv(n){const e=await Uv(n),t=Ze().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:zv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),l=Ze().setTimeout(()=>{i(a)},$v.get());function u(){Ze().clearTimeout(l),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Gv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kv=500,Qv=600,Jv="_blank",Yv="http://localhost";class iu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xv(n,e,t,s=Kv,r=Qv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u={...Gv,width:s.toString(),height:r.toString(),top:i,left:a},d=Pe().toLowerCase();t&&(l=pd(d)?Jv:t),fd(d)&&(e=e||Yv,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[E,R])=>`${v}${E}=${R},`,"");if(EE(d)&&l!=="_self")return Zv(e||"",l),new iu(null);const g=window.open(e||"",l,f);$(g,n,"popup-blocked");try{g.focus()}catch{}return new iu(g)}function Zv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const eI="__/auth/handler",tI="emulator/auth/handler",nI=encodeURIComponent("fac");async function ou(n,e,t,s,r,i){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:jn,eventId:r};if(e instanceof bd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",um(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Js){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${nI}=${encodeURIComponent(u)}`:"";return`${sI(n)}?${Bs(l).slice(1)}${d}`}function sI({config:n}){return n.emulator?Ra(n,tI):`https://${n.authDomain}/${eI}`}/**
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
 */const so="webStorageSupport";class rI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=Pv,this._overrideRedirectResult=bv}async _openPopup(e,t,s,r){var a;dt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await ou(e,t,s,Vo(),r);return Xv(e,i,Da())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await ou(e,t,s,Vo(),r);return av(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Wv(e),s=new kv(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(so,{type:so},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[so];i!==void 0&&t(!!i),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ov(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vd()||md()||Ca()}}const iI=rI;var au="@firebase/auth",cu="1.12.2";/**
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
 */class oI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cI(n){Nn(new nn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(n)},d=new bE(s,r,i,u);return OE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new nn("auth-internal",e=>{const t=gn(e.getProvider("auth").getImmediate());return(s=>new oI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(au,cu,aI(n)),Vt(au,cu,"esm2020")}/**
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
 */const lI=300,uI=Au("authIdTokenMaxAge")||lI;let lu=null;const hI=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uI)return;const r=t==null?void 0:t.token;lu!==r&&(lu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function dI(n=Cu()){const e=Ko(n,"auth");if(e.isInitialized())return e.getImmediate();const t=LE(n,{popupRedirectResolver:iI,persistence:[gv,rv,Dd]}),s=Au("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=hI(i.toString());ZE(t,a,()=>a(t.currentUser)),XE(t,l=>a(l))}}const r=Tu("auth");return r&&ME(t,`http://${r}`),t}function fI(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}SE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Xe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",fI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cI("Browser");const mI={apiKey:"AIzaSyAMfhTH_bwb6iQ5BOMWclDyWqsTq2_B3rM",authDomain:"pokebuilder-18867.firebaseapp.com",projectId:"pokebuilder-18867",storageBucket:"pokebuilder-18867.firebasestorage.app",messagingSenderId:"15661104569",appId:"1:15661104569:web:835f7351da650769f34a68",measurementId:"G-T9ZGJFH8DB"},Ud=Pu(mI),pI=L_(Ud),vi=dI(Ud);let $t=null,Xs="",oe=[],De=0,ft=null;function $d(){return N_(pI,"users",$t.uid)}function La(n){return{name:n||"Team 1",slots:[fe(),fe(),fe(),fe(),fe(),fe()]}}function Bd(){var n;return((n=oe[De])==null?void 0:n.slots)||[]}function gI(n){ft=n}async function yn(){if($t)try{await J_($d(),{displayName:Xs,teams:JSON.parse(JSON.stringify(oe)),activeTeamIndex:De},{merge:!0})}catch(n){console.error("Failed to save teams to Firestore:",n)}}async function yI(n,e,t){return $t=(await JE(vi,n,e)).user,Xs=t.trim()||n.split("@")[0],oe=[La("Team 1")],De=0,await yn(),!0}async function _I(n,e){return $t=(await YE(vi,n,e)).user,await jd(),!0}async function jd(){if($t){try{const n=await Q_($d());if(n.exists()){const e=n.data();Xs=e.displayName||$t.email.split("@")[0],oe=Array.isArray(e.teams)?e.teams:[],De=typeof e.activeTeamIndex=="number"&&e.activeTeamIndex>=0&&e.activeTeamIndex<oe.length?e.activeTeamIndex:0}}catch(n){console.error("Failed to load user data:",n)}oe.length===0&&(oe=[La("Team 1")],De=0,await yn())}}async function EI(){await tv(vi),$t=null,Xs="",oe=[],De=0}function vI(n){n<0||n>=oe.length||(De=n,yn(),ft&&ft())}function II(n){const e=n||`Team ${oe.length+1}`;oe.push(La(e)),De=oe.length-1,yn(),ft&&ft()}function TI(n){oe.length<=1||(oe.splice(n,1),De>=oe.length&&(De=oe.length-1),yn(),ft&&ft())}function wI(n,e){n<0||n>=oe.length||!e.trim()||(oe[n].name=e.trim(),yn())}function ro(){document.getElementById("login-screen").style.display="none",document.getElementById("app-header").style.display="",document.getElementById("app-nav").style.display="",document.getElementById("app-main").style.display="",document.getElementById("trainer-name").textContent=Xs,ft&&ft()}function AI(){document.getElementById("app-header").style.display="none",document.getElementById("app-nav").style.display="none",document.getElementById("app-main").style.display="none",document.getElementById("login-screen").style.display="flex"}function bI(){document.getElementById("login-screen");const n=document.getElementById("login-email"),e=document.getElementById("login-password"),t=document.getElementById("login-nick"),s=document.getElementById("login-btn"),r=document.getElementById("register-btn"),i=document.getElementById("login-toggle"),a=document.getElementById("login-error"),l=document.getElementById("login-name-group");let u=!1;function d(E){u=E,l.style.display=E?"":"none",s.style.display=E?"none":"",r.style.display=E?"":"none",i.innerHTML=E?`${k("login.hasAccount")} <a href="#">${k("login.loginLink")}</a>`:`${k("login.noAccount")} <a href="#">${k("login.registerLink")}</a>`,a.textContent=""}function f(E){a.textContent=E}async function g(){a.textContent="";const E=n.value.trim(),R=e.value;if(!E||!R)return f(k("login.fillFields"));try{await _I(E,R),ro()}catch(V){f(uu(V.code))}}async function v(){a.textContent="";const E=n.value.trim(),R=e.value,V=t.value.trim();if(!E||!R)return f(k("login.fillFields"));if(R.length<6)return f(k("login.weakPassword"));try{await yI(E,R,V),ro()}catch(D){f(uu(D.code))}}s.addEventListener("click",g),r.addEventListener("click",v),e.addEventListener("keydown",E=>{E.key==="Enter"&&(u?v():g())}),t.addEventListener("keydown",E=>{E.key==="Enter"&&u&&v()}),i.addEventListener("click",E=>{E.preventDefault(),d(!u)}),document.getElementById("btn-logout").addEventListener("click",async()=>{await EI(),AI(),n.value="",e.value="",t.value="",d(!1)}),d(!1),ev(vi,async E=>{E&&($t=E,await jd(),ro())})}function uu(n){switch(n){case"auth/email-already-in-use":return k("login.errEmailInUse");case"auth/invalid-email":return k("login.errInvalidEmail");case"auth/user-not-found":return k("login.errUserNotFound");case"auth/wrong-password":return k("login.errWrongPassword");case"auth/invalid-credential":return k("login.errInvalidCredential");case"auth/too-many-requests":return k("login.errTooMany");case"auth/weak-password":return k("login.weakPassword");default:return k("login.errGeneric")}}function Oo(){const n=document.getElementById("team-tabs");n&&(n.innerHTML=oe.map((e,t)=>`<button class="team-tab${t===De?" active":""}" data-team-index="${t}">${e.name}</button>`).join(""),n.querySelectorAll(".team-tab").forEach(e=>{e.addEventListener("click",()=>{vI(parseInt(e.dataset.teamIndex))})}))}function SI(){document.getElementById("btn-add-team").addEventListener("click",()=>{const n=prompt(k("tb.newTeamName"),`Team ${oe.length+1}`);n!==null&&II(n)}),document.getElementById("btn-rename-team").addEventListener("click",()=>{var t;const n=((t=oe[De])==null?void 0:t.name)||"",e=prompt(k("tb.renameTeamPrompt"),n);e!==null&&e.trim()&&(wI(De,e),Oo())}),document.getElementById("btn-delete-team").addEventListener("click",()=>{if(oe.length<=1){alert(k("tb.cantDeleteLast"));return}confirm(k("tb.confirmDeleteTeam").replace("{name}",oe[De].name))&&TI(De)})}let ee=[fe(),fe(),fe(),fe(),fe(),fe()],H=-1,Mo=null,xo=null,Dn=[null,null,null,null];const RI=n=>{if(n.type){const e=Bn[n.type]||"#888";return`${n.label} <span class="type-badge-sm" style="background:${e}">${n.type.toUpperCase()}</span>`}return n.label};let qd=[],Un=[],Hd=[];async function PI(){const[n,e,t]=await Promise.all([ei(),ni(),Bo()]);qd=n.map(s=>({name:s.name,id:s.id,label:ie(s.name)})),Un=e.map(s=>({name:s.name,label:ie(s.name)})),Hd=t.map(s=>({name:s.name,label:ie(s.name)})),pt(),kI(),OI(),SI(),hu(),gI(()=>{hu(),Oo()}),Oo()}function pt(){const n=document.getElementById("team-slots");n.innerHTML="";for(let e=0;e<6;e++){const t=ee[e],s=document.createElement("div");s.className=`team-slot ${t.name?"":"empty"} ${e===H?"active":""}`,s.dataset.index=e,t.name&&t.sprite?s.innerHTML=`
        <button class="slot-remove" data-index="${e}" title="Remove">&times;</button>
        <img class="slot-sprite" src="${t.sprite}" alt="${t.name}">
        <div class="slot-name">${Rt(t.name)}</div>
        <div class="slot-types">
          ${t.types.map(r=>`<span class="type-badge type-${r}" style="background:${Bn[r]}">${r.toUpperCase()}</span>`).join("")}
        </div>
      `:s.innerHTML=`
        <div class="slot-empty-text">
          <span style="font-size:2rem;opacity:0.3">+</span><br>
          <span data-i18n="tb.emptySlot">${k("tb.emptySlot")}</span>
        </div>
      `,s.addEventListener("click",r=>{r.target.classList.contains("slot-remove")||CI(e)}),n.appendChild(s)}n.querySelectorAll(".slot-remove").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const s=parseInt(e.dataset.index);ee[s]=fe(),H===s&&(H=-1,document.getElementById("pokemon-editor").style.display="none"),pt(),Ve()})})}function CI(n){H=n,pt(),Oa()}function kI(){const n=document.getElementById("editor-nature");n.innerHTML=hn.map(s=>{let r=Fs(s.name);return s.plus&&(r+=` (+${pe[s.plus]} -${pe[s.minus]})`),`<option value="${s.name}">${r}</option>`}).join(""),n.addEventListener("change",()=>{H<0||(ee[H].nature=n.value,ct(),pt(),Ve())});const e=document.getElementById("editor-level"),t=()=>{H<0||(ee[H].level=Math.max(1,Math.min(100,parseInt(e.value)||50)),e.value=ee[H].level,ct(),Ve())};e.addEventListener("change",t),e.addEventListener("input",()=>{if(H<0)return;const s=parseInt(e.value);s>=1&&s<=100&&(ee[H].level=s,ct(),Ve())}),Mo=nt(document.getElementById("pokemon-search"),qd,async s=>{H<0||await NI(H,s.name,s.id)},{renderOption:s=>`<img src="${Bt(s.id)}" alt="" width="30" height="30">${s.label} <span style="color:var(--text-muted)">#${s.id}</span>`}),xo=nt(document.getElementById("item-search"),Hd,s=>{H<0||(ee[H].item=s.name,Ve())});for(let s=0;s<4;s++){const r=document.getElementById(`move-search-${s}`);Dn[s]=nt(r,Un,i=>{H<0||(ee[H].moves[s]=i.name,Ve())},{renderOption:RI})}VI(),DI(),document.getElementById("btn-ability-info").addEventListener("click",()=>{if(H<0)return;const s=document.getElementById("editor-ability").value;s&&ao(s)}),document.getElementById("btn-item-info").addEventListener("click",()=>{if(H<0)return;const s=ee[H].item;s&&co(s)}),document.querySelectorAll(".info-btn[data-move-index]").forEach(s=>{s.addEventListener("click",()=>{if(H<0)return;const r=parseInt(s.dataset.moveIndex),i=ee[H].moves[r];i&&_u(i)})})}function VI(){const n=document.getElementById("ev-sliders");n.innerHTML="";for(const e of Ee){const t=document.createElement("div");t.className="stat-row",t.innerHTML=`
      <span class="stat-label" id="ev-label-${e}">${pe[e]}</span>
      <input type="range" class="stat-slider" id="ev-slider-${e}" min="0" max="252" step="4" value="0">
      <span class="stat-value" id="ev-value-${e}">0</span>
    `,n.appendChild(t);const s=t.querySelector(`#ev-slider-${e}`),r=t.querySelector(`#ev-value-${e}`);s.addEventListener("input",()=>{if(H<0)return;const i=parseInt(s.value),a=Wd()-ee[H].evs[e],l=Math.min(252,510-a),u=Math.min(i,l);s.value=u,ee[H].evs[e]=u,r.textContent=u,Gd(),ct(),Ve()})}}function DI(){const n=document.getElementById("iv-inputs");n.innerHTML="";for(const e of Ee){const t=document.createElement("div");t.className="iv-row",t.innerHTML=`
      <span class="stat-label" id="iv-label-${e}">${pe[e]}</span>
      <input type="range" class="stat-slider" id="iv-slider-${e}" min="0" max="31" value="31">
      <input type="number" class="iv-input" id="iv-input-${e}" min="0" max="31" value="31">
    `,n.appendChild(t);const s=t.querySelector(`#iv-slider-${e}`),r=t.querySelector(`#iv-input-${e}`);s.addEventListener("input",()=>{if(H<0)return;const i=parseInt(s.value);ee[H].ivs[e]=i,r.value=i,ct(),Ve()}),r.addEventListener("change",()=>{if(H<0)return;const i=Math.max(0,Math.min(31,parseInt(r.value)||0));ee[H].ivs[e]=i,r.value=i,s.value=i,ct(),Ve()}),r.addEventListener("input",()=>{if(H<0)return;const i=parseInt(r.value);i>=0&&i<=31&&(ee[H].ivs[e]=i,s.value=i,ct(),Ve())})}}async function NI(n,e,t){var d;const s=await $n(e),r=ee[n];r.id=t||s.id,r.name=s.name,r.species=s.species.name,r.types=s.types.map(f=>f.type.name),r.baseStats=Us(s),r.sprite=s.sprites.front_default||Bt(r.id);const i=document.getElementById("editor-ability");i.innerHTML=s.abilities.map(f=>`<option value="${f.ability.name}">${ie(f.ability.name)}${f.is_hidden?" (H)":""}</option>`).join(""),(!r.ability||!s.abilities.find(f=>f.ability.name===r.ability))&&(r.ability=((d=s.abilities[0])==null?void 0:d.ability.name)||""),i.value=r.ability,i.onchange=()=>{ee[n].ability=i.value,Ve()};const a=s.moves.map(f=>f.move.name),l=Un.filter(f=>a.includes(f.name)),u=l.length>0?l:Un;for(let f=0;f<4;f++)Dn[f].updateItems(u);Promise.allSettled(u.map(f=>ti(f.name).then(g=>({...f,type:g.type.name})))).then(f=>{const g=f.map((v,E)=>v.status==="fulfilled"?v.value:u[E]);for(let v=0;v<4;v++)Dn[v].updateItems(g)}),Oa(),ct(),pt(),Ve()}async function Oa(){const n=document.getElementById("pokemon-editor");if(H<0){n.style.display="none";return}n.style.display="block";const e=ee[H],t=document.getElementById("editor-sprite");t.src=e.sprite||"",t.style.display=e.sprite?"block":"none";const s=document.getElementById("editor-types");s.innerHTML=e.types.map(i=>`<span class="type-badge type-${i}" style="background:${Bn[i]}">${i.toUpperCase()}</span>`).join(""),e.name?Mo.setValue(e.name,Rt(e.name)):Mo.clear(),e.item?xo.setValue(e.item,Rt(e.item)):xo.clear();const r=document.getElementById("editor-ability");if(e.name){const i=await $n(e.name);r.innerHTML=i.abilities.map(d=>`<option value="${d.ability.name}">${ie(d.ability.name)}${d.is_hidden?" (H)":""}</option>`).join(""),e.ability&&(r.value=e.ability),r.onchange=()=>{ee[H].ability=r.value,Ve()};const a=i.moves.map(d=>d.move.name),l=Un.filter(d=>a.includes(d.name)),u=l.length>0?l:Un;for(let d=0;d<4;d++)Dn[d].updateItems(u)}else r.innerHTML="";document.getElementById("editor-nature").value=e.nature,document.getElementById("editor-level").value=e.level;for(let i=0;i<4;i++)e.moves[i]?Dn[i].setValue(e.moves[i],Rt(e.moves[i])):Dn[i].clear();for(const i of Ee)document.getElementById(`ev-slider-${i}`).value=e.evs[i],document.getElementById(`ev-value-${i}`).textContent=e.evs[i];Gd();for(const i of Ee)document.getElementById(`iv-slider-${i}`).value=e.ivs[i],document.getElementById(`iv-input-${i}`).value=e.ivs[i];zd(),ct()}function zd(){if(H<0)return;const n=hn.find(e=>e.name===ee[H].nature);for(const e of Ee){const t=document.getElementById(`ev-label-${e}`),s=document.getElementById(`iv-label-${e}`);t.className="stat-label",s.className="stat-label",(n==null?void 0:n.plus)===e?(t.classList.add("boosted"),s.classList.add("boosted")):(n==null?void 0:n.minus)===e&&(t.classList.add("hindered"),s.classList.add("hindered"))}}function Wd(){return H<0?0:Ee.reduce((n,e)=>n+ee[H].evs[e],0)}function Gd(){const n=Wd(),e=document.getElementById("ev-counter");e.textContent=`(${n}/510)`,e.style.color=n>510?"var(--danger)":n===510?"var(--success)":""}function ct(){if(H<0)return;const n=ee[H];if(!n.baseStats)return;const e=bs(n.baseStats,n.ivs,n.evs,n.level,n.nature),t=document.getElementById("final-stats");t.innerHTML="";const s=Ee.reduce((a,l)=>a+n.baseStats[l],0);let r=0;for(const a of Ee){const l=e[a];r+=l;const u=Math.min(l/700*100,100),d=document.createElement("div");d.className="stat-bar-row",d.innerHTML=`
      <span class="stat-label stat-${a}">${pe[a]}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill ${a}" style="width:${u}%;background:${LI(a)}"></div>
      </div>
      <span class="stat-value">${l}</span>
    `,t.appendChild(d)}const i=document.createElement("div");i.className="stat-total",i.textContent=`${k("tb.total")}: ${r} (${k("tb.base")}: ${s})`,t.appendChild(i),zd()}function LI(n){return{hp:"#ff5959",atk:"#f5ac78",def:"#fae078",spa:"#9db7f5",spd:"#a7db8d",spe:"#fa92b2"}[n]||"#888"}function OI(){document.getElementById("btn-import").addEventListener("click",MI),document.getElementById("btn-export").addEventListener("click",xI),document.getElementById("btn-clear").addEventListener("click",()=>{confirm(k("tb.confirmClear"))&&(ee=Array.from({length:6},()=>fe()),H=-1,document.getElementById("pokemon-editor").style.display="none",pt(),Ve())}),document.getElementById("modal-close").addEventListener("click",Fo),document.getElementById("modal-import-export").addEventListener("click",n=>{n.target===n.currentTarget&&Fo()})}function MI(){const n=document.getElementById("modal-import-export"),e=document.getElementById("modal-title"),t=document.getElementById("modal-textarea"),s=document.getElementById("modal-action");e.textContent=k("tb.importTitle"),t.value="",t.placeholder=k("tb.pasteShowdown"),s.textContent=k("tb.importBtn"),n.style.display="flex",s.onclick=()=>{try{const r=Ff(t.value);if(r.length===0){alert(k("tb.importError"));return}for(let a=0;a<6;a++)ee[a]=r[a]||fe();const i=ee.map(async(a,l)=>{var u;if(a.name)try{const d=await $n(a.name);a.id=d.id,a.types=d.types.map(f=>f.type.name),a.baseStats=Us(d),a.sprite=d.sprites.front_default||Bt(d.id),a.ability||(a.ability=((u=d.abilities[0])==null?void 0:u.ability.name)||"")}catch{ee[l]=fe()}});Promise.all(i).then(()=>{H=-1,document.getElementById("pokemon-editor").style.display="none",pt(),Ve(),Fo()})}catch{alert(k("tb.importError"))}}}function xI(){const n=document.getElementById("modal-import-export"),e=document.getElementById("modal-title"),t=document.getElementById("modal-textarea"),s=document.getElementById("modal-action");e.textContent=k("tb.exportTitle"),t.value=xf(ee),t.placeholder="",s.textContent="📋 Copy",n.style.display="flex",s.onclick=()=>{navigator.clipboard.writeText(t.value).then(()=>{s.textContent=`✓ ${k("tb.copySuccess")}`,setTimeout(()=>{s.textContent="📋 Copy"},1500)})}}function Fo(){document.getElementById("modal-import-export").style.display="none"}function Ve(){const n=Bd();for(let e=0;e<6;e++)n[e]=ee[e];yn()}function hu(){const n=Bd();for(let e=0;e<6;e++)ee[e]=n[e]?{...fe(),...n[e]}:fe();H=-1,document.getElementById("pokemon-editor").style.display="none",pt()}function FI(){pt(),H>=0&&Oa()}let ys=null,_s=null,xe=null,Uo;const UI=n=>{if(n.type){const e=Bn[n.type]||"#888";return`${n.label} <span class="type-badge-sm" style="background:${e}">${n.type.toUpperCase()}</span>`}return n.label};async function $I(){const[n,e,t]=await Promise.all([ei(),ni(),Bo()]),s=n.map(u=>({name:u.name,id:u.id,label:ie(u.name)})),r=e.map(u=>({name:u.name,label:ie(u.name)})),i=t.map(u=>({name:u.name,label:ie(u.name)})),a=u=>`<img src="${Bt(u.id)}" alt="" width="30" height="30">${u.label} <span style="color:var(--text-muted)">#${u.id}</span>`;nt(document.getElementById("dc-atk-pokemon-search"),s,async u=>{await BI(u.name,u.id)},{renderOption:a}),nt(document.getElementById("dc-def-pokemon-search"),s,async u=>{await jI(u.name,u.id)},{renderOption:a}),nt(document.getElementById("dc-atk-item-search"),i,()=>{}),nt(document.getElementById("dc-def-item-search"),i,()=>{}),Uo=nt(document.getElementById("dc-atk-move-search"),r,async u=>{await qI(u.name)},{renderOption:UI});const l=hn.map(u=>{let d=Fs(u.name);return u.plus&&(d+=` (+${pe[u.plus]} -${pe[u.minus]})`),`<option value="${u.name}">${d}</option>`}).join("");document.getElementById("dc-atk-nature").innerHTML=l,document.getElementById("dc-def-nature").innerHTML=l,du("dc-atk-stats"),du("dc-def-stats"),document.getElementById("dc-calculate").addEventListener("click",HI),document.getElementById("btn-dc-atk-ability-info").addEventListener("click",()=>{const u=document.getElementById("dc-atk-ability").value;u&&ao(u)}),document.getElementById("btn-dc-def-ability-info").addEventListener("click",()=>{const u=document.getElementById("dc-def-ability").value;u&&ao(u)}),document.getElementById("btn-dc-atk-move-info").addEventListener("click",()=>{xe&&_u(xe.name)}),document.getElementById("btn-dc-atk-item-info").addEventListener("click",()=>{var d;const u=(d=document.getElementById("dc-atk-item-search").querySelector(".search-input"))==null?void 0:d.dataset.value;u&&co(u)}),document.getElementById("btn-dc-def-item-info").addEventListener("click",()=>{var d;const u=(d=document.getElementById("dc-def-item-search").querySelector(".search-input"))==null?void 0:d.dataset.value;u&&co(u)})}function du(n){const e=document.getElementById(n);let t="";for(const s of Ee)t+=`
      <div class="calc-stat-item">
        <label>${pe[s]}</label>
        <input type="number" class="stat-ev-input" data-stat="${s}" data-type="ev" min="0" max="252" step="4" value="0" placeholder="EV">
        <input type="number" class="stat-iv-input" data-stat="${s}" data-type="iv" min="0" max="31" value="31" placeholder="IV">
      </div>
    `;e.innerHTML=t}async function BI(n,e){const t=await $n(n);ys={pokemon:t,baseStats:Us(t),types:t.types.map(u=>u.type.name),abilities:t.abilities.map(u=>u.ability.name)},document.getElementById("dc-atk-sprite").src=t.sprites.front_default||Bt(e);const s=document.getElementById("dc-atk-ability");s.innerHTML=t.abilities.map(u=>`<option value="${u.ability.name}">${ie(u.ability.name)}${u.is_hidden?" (H)":""}</option>`).join("");const r=t.moves.map(u=>u.move.name),i=await ni(),a=i.filter(u=>r.includes(u.name)).map(u=>({name:u.name,label:ie(u.name)})),l=a.length>0?a:i.map(u=>({name:u.name,label:ie(u.name)}));Uo.updateItems(l),Promise.allSettled(l.map(u=>ti(u.name).then(d=>({...u,type:d.type.name})))).then(u=>{const d=u.map((f,g)=>f.status==="fulfilled"?f.value:l[g]);Uo.updateItems(d)})}async function jI(n,e){const t=await $n(n);_s={pokemon:t,baseStats:Us(t),types:t.types.map(r=>r.type.name),abilities:t.abilities.map(r=>r.ability.name)},document.getElementById("dc-def-sprite").src=t.sprites.front_default||Bt(e);const s=document.getElementById("dc-def-ability");s.innerHTML=t.abilities.map(r=>`<option value="${r.ability.name}">${ie(r.ability.name)}${r.is_hidden?" (H)":""}</option>`).join("")}async function qI(n){const e=await ti(n);xe={name:e.name,type:e.type.name,power:e.power||0,accuracy:e.accuracy,category:e.damage_class.name,pp:e.pp}}function fu(n){const e=document.getElementById(`${n}-stats`),t=parseInt(document.getElementById(`${n}-level`).value)||50,s=document.getElementById(`${n}-nature`).value,r={},i={};return e.querySelectorAll(".stat-ev-input").forEach(a=>{r[a.dataset.stat]=parseInt(a.value)||0}),e.querySelectorAll(".stat-iv-input").forEach(a=>{i[a.dataset.stat]=parseInt(a.value)??31}),{level:t,nature:s,evs:r,ivs:i}}function HI(){const n=document.getElementById("dc-result-text"),e=document.getElementById("dc-result-detail");if(!ys||!_s||!xe){n.textContent=k("dc.selectBoth"),e.innerHTML="";return}if(xe.category==="status"){n.textContent=`${ie(xe.name)} — ${k("dc.status")}`,e.innerHTML=`<p>${k("dc.status")} moves don't deal direct damage.</p>`;return}const t=fu("dc-atk"),s=fu("dc-def"),r=bs(ys.baseStats,t.ivs,t.evs,t.level,t.nature),i=bs(_s.baseStats,s.ivs,s.evs,s.level,s.nature),a=document.getElementById("dc-atk-item-search").querySelector(".search-input"),l=document.getElementById("dc-def-item-search").querySelector(".search-input"),u=(a==null?void 0:a.dataset.value)||"";l!=null&&l.dataset.value;const d=document.getElementById("dc-atk-ability").value,f=document.getElementById("dc-def-ability").value,g={stats:r,types:ys.types,level:t.level,item:u,ability:d},v={stats:i,types:_s.types,ability:f},E=Uc(g,v,xe,{critical:!1}),R=Uc(g,v,xe,{critical:!0}),V=ie(ys.pokemon.name),D=ie(_s.pokemon.name),x=ie(xe.name);let L="",F="";E.typeEff===0?(L=k("dc.immune"),F="text-muted"):E.typeEff>1?(L=`${k("dc.superEffective")} (${E.typeEff}x)`,F="ko-guaranteed"):E.typeEff<1?(L=`${k("dc.notVeryEffective")} (${E.typeEff}x)`,F="ko-unlikely"):(L=`${k("dc.neutral")} (1x)`,F="");const K=Math.min(E.hpPercent.max,100),G=K>=100?"ohko":K>=70?"high":K>=40?"mid":"low";let j="";E.koText==="immune"?j=k("dc.immune"):E.koText==="ohko-guaranteed"?j=`${k("dc.ohko")} (${k("dc.guaranteed")})`:E.koText==="ohko-possible"?j=`${k("dc.ohko")} (${k("dc.possible")})`:E.koText==="2hko"?j=k("dc.2hko"):E.koText==="2hko-possible"?j=`${k("dc.2hko")} (${k("dc.possible")})`:E.koText==="3hko"?j=k("dc.3hko"):j=k("dc.4hko"),n.innerHTML=`
    ${V}'s <span style="color:${Bn[xe.type]}">${x}</span>
    → ${D}
  `,e.innerHTML=`
    <div style="margin-bottom:12px">
      <span class="${F}" style="font-weight:600">${L}</span>
      ${E.stab?'<span style="margin-left:8px;color:var(--warning)">STAB</span>':""}
    </div>

    <div style="margin-bottom:8px">
      <strong>${k("dc.damage")}:</strong> ${E.min} - ${E.max}
      (${E.hpPercent.min.toFixed(1)}% - ${E.hpPercent.max.toFixed(1)}% ${k("dc.hpPercent")})
    </div>

    <div class="result-damage-bar">
      <div class="result-damage-fill ${G}" style="width:${K}%"></div>
    </div>

    <div class="result-ko-text ${E.koClass}">${j}</div>

    <div style="margin-top:12px;font-size:0.85rem;color:var(--text-muted)">
      <strong>${k("dc.critical")}:</strong> ${R.min} - ${R.max}
      (${R.hpPercent.min.toFixed(1)}% - ${R.hpPercent.max.toFixed(1)}%)
    </div>

    <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">
      ${k("dc.power")}: ${xe.power} |
      ${k("dc.category")}: ${xe.category==="physical"?k("dc.physical"):k("dc.special")} |
      ${k("dc.atkStat")}: ${E.isPhysical?r.atk:r.spa} |
      ${k("dc.defStat")}: ${E.isPhysical?i.def:i.spd}
    </div>

    <div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">
      ${k("dc.rolls")}: [${E.rolls.join(", ")}]
    </div>
  `}let $o=null,Ke=null,Xt="iv";async function zI(){const e=(await ei()).map(s=>({name:s.name,id:s.id,label:ie(s.name)}));nt(document.getElementById("iec-pokemon-search"),e,async s=>{await WI(s.name,s.id)},{renderOption:s=>`<img src="${Bt(s.id)}" alt="" width="30" height="30">${s.label} <span style="color:var(--text-muted)">#${s.id}</span>`});const t=document.getElementById("iec-nature");t.innerHTML=hn.map(s=>{let r=Fs(s.name);return s.plus&&(r+=` (+${pe[s.plus]} -${pe[s.minus]})`),`<option value="${s.name}">${r}</option>`}).join(""),document.querySelectorAll(".iec-tab").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".iec-tab").forEach(r=>r.classList.remove("active")),s.classList.add("active"),Xt=s.dataset.mode,Sn()})}),document.getElementById("iec-calculate").addEventListener("click",GI),t.addEventListener("change",()=>{$o&&Sn()}),document.getElementById("iec-level").addEventListener("change",()=>{$o&&Sn()}),Sn()}async function WI(n,e){const t=await $n(n);$o=t,Ke=Us(t);const s=document.getElementById("iec-sprite");s.src=t.sprites.front_default||Bt(e),Kd(),Sn();const r=bs(Ke,{hp:31,atk:31,def:31,spa:31,spd:31,spe:31},{hp:0,atk:0,def:0,spa:0,spd:0,spe:0},parseInt(document.getElementById("iec-level").value)||50,document.getElementById("iec-nature").value);yu(document.getElementById("stat-radar"),r,Ke)}function Kd(){const n=document.getElementById("iec-base-stats");if(!Ke){n.innerHTML="";return}const e={hp:"#ff5959",atk:"#f5ac78",def:"#fae078",spa:"#9db7f5",spd:"#a7db8d",spe:"#fa92b2"};let t=0,s=`<h3 style="font-size:0.95rem;margin-bottom:8px;color:var(--text-secondary)">${k("iec.baseStats")}</h3>`;for(const r of Ee){const i=Ke[r];t+=i;const a=Math.min(i/255*100,100);s+=`
      <div class="base-stat-row">
        <span class="base-stat-label">${pe[r]}</span>
        <span class="base-stat-val">${i}</span>
        <div class="base-stat-bar">
          <div class="base-stat-fill" style="width:${a}%;background:${e[r]}"></div>
        </div>
      </div>
    `}s+=`<div class="stat-total">${k("iec.totalBase")}: ${t}</div>`,n.innerHTML=s}function Sn(){const n=document.getElementById("iec-stat-table");let e="";Xt==="iv"?e=`
      <div>${k("stat.hp")}</div>
      <div>EV</div>
      <div>${k("iec.knownStat")}</div>
      <div>${k("iec.possibleIvs")}</div>
    `:Xt==="ev"?e=`
      <div>${k("stat.hp")}</div>
      <div>IV</div>
      <div>${k("iec.desiredStat")}</div>
      <div>${k("iec.requiredEvs")}</div>
    `:e=`
      <div>${k("stat.hp")}</div>
      <div>EV</div>
      <div>IV</div>
      <div>${k("iec.finalStat")}</div>
    `;let t=`<div class="iec-stat-row header"><div></div>${e}</div>`;for(const s of Ee)Xt==="iv"?t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${pe[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-ev-${s}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-known-${s}" min="1" max="999" value="">
          <div id="iec-result-${s}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `:Xt==="ev"?t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${pe[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-iv-${s}" min="0" max="31" value="31">
          <input type="number" class="iec-stat-input" id="iec-desired-${s}" min="1" max="999" value="">
          <div id="iec-result-${s}" class="iv-range" style="font-size:0.85rem;color:var(--text-muted)">—</div>
        </div>
      `:t+=`
        <div class="iec-stat-row">
          <span class="stat-label stat-${s}">${pe[s]}</span>
          <input type="number" class="iec-stat-input" id="iec-sb-ev-${s}" min="0" max="252" step="4" value="0">
          <input type="number" class="iec-stat-input" id="iec-sb-iv-${s}" min="0" max="31" value="31">
          <div id="iec-result-${s}" class="stat-value" style="font-weight:700">—</div>
        </div>
      `;n.innerHTML=t}function GI(){var s,r,i,a,l,u;if(!Ke)return;const n=parseInt(document.getElementById("iec-level").value)||50,e=document.getElementById("iec-nature").value,t=document.getElementById("iec-results");if(Xt==="iv"){let d=`<h3 style="margin-bottom:8px">${k("iec.possibleIvs")}</h3>`,f=!1;for(const g of Ee){const v=parseInt((s=document.getElementById(`iec-ev-${g}`))==null?void 0:s.value)||0,E=parseInt((r=document.getElementById(`iec-known-${g}`))==null?void 0:r.value),R=document.getElementById(`iec-result-${g}`);if(isNaN(E)||E<=0){R&&(R.textContent="—");continue}const V=g==="hp",D=V?1:oo(e,g),x=Of(Ke[g],n,D,v,E,V);if(x.length>0){const L=x.length===1?`${x[0]}`:x[0]===x[x.length-1]?`${x[0]}`:`${x[0]}-${x[x.length-1]}`;R&&(R.textContent=L,R.style.color=x.length===1?"var(--success)":"var(--warning)"),d+=`<div><strong>${pe[g]}:</strong> ${x.join(", ")}</div>`,f=!0}else R&&(R.textContent="✗",R.style.color="var(--danger)")}f||(d+=`<div>${k("iec.noResults")}</div>`),t.innerHTML=d}else if(Xt==="ev"){let d=`<h3 style="margin-bottom:8px">${k("iec.requiredEvs")}</h3>`;for(const f of Ee){const g=parseInt((i=document.getElementById(`iec-iv-${f}`))==null?void 0:i.value)??31,v=parseInt((a=document.getElementById(`iec-desired-${f}`))==null?void 0:a.value),E=document.getElementById(`iec-result-${f}`);if(isNaN(v)||v<=0){E&&(E.textContent="—");continue}const R=f==="hp",V=R?1:oo(e,f),D=Mf(Ke[f],n,V,g,v,R);D>=0&&D<=252?(E&&(E.textContent=`${D}`,E.style.color="var(--success)"),d+=`<div><strong>${pe[f]}:</strong> ${D} EVs</div>`):(E&&(E.textContent="✗",E.style.color="var(--danger)"),d+=`<div><strong>${pe[f]}:</strong> Impossible</div>`)}t.innerHTML=d}else{const d={},f={};for(const R of Ee)d[R]=parseInt((l=document.getElementById(`iec-sb-ev-${R}`))==null?void 0:l.value)||0,f[R]=parseInt((u=document.getElementById(`iec-sb-iv-${R}`))==null?void 0:u.value)??31;const g=bs(Ke,f,d,n,e);let v=0;for(const R of Ee){const V=document.getElementById(`iec-result-${R}`);V&&(V.textContent=g[R],V.style.color="var(--accent)"),v+=g[R]}const E=Ee.reduce((R,V)=>R+d[V],0);t.innerHTML=`
      <h3 style="margin-bottom:8px">${k("iec.finalStat")}</h3>
      <div><strong>${k("tb.total")}:</strong> ${v}</div>
      <div><strong>EVs:</strong> ${E}/510</div>
    `,yu(document.getElementById("stat-radar"),g,Ke)}}function KI(){Sn(),Kd()}function QI(){const n=localStorage.getItem("pokebuilder-theme")||"dark";document.documentElement.setAttribute("data-theme",n),mu(n),document.getElementById("theme-toggle").addEventListener("click",()=>{const t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("pokebuilder-theme",t),mu(t)})}function mu(n){const e=document.querySelector(".theme-icon");e.textContent=n==="dark"?"☀️":"🌙"}function JI(){const n=localStorage.getItem("pokebuilder-lang")||"en";pu(n),document.getElementById("lang-toggle").addEventListener("click",()=>{Nf(),YI()})}function YI(){gu(),FI(),KI()}function XI(){const n=document.querySelectorAll(".nav-tab"),e=document.querySelectorAll(".view");n.forEach(t=>{t.addEventListener("click",()=>{var r;const s=t.dataset.tab;n.forEach(i=>i.classList.remove("active")),t.classList.add("active"),e.forEach(i=>i.classList.remove("active")),(r=document.getElementById(`view-${s}`))==null||r.classList.add("active")})})}function ZI(){document.getElementById("loading-overlay").style.display="flex"}function eT(){document.getElementById("loading-overlay").style.display="none"}async function tT(){ZI();try{QI(),XI(),$f(),bI(),await Vf(),await Promise.all([PI(),$I(),zI()]),JI()}catch(n){console.error("Failed to initialize PokéBuilder:",n)}finally{eT()}}document.addEventListener("DOMContentLoaded",tT);
