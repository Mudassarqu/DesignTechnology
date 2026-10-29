/* Shared helpers: sign-in, score saving, progress drawer, maths. No dependencies. */
(function(){
const C = window.CONFIG || {};
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const store = {
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
const App = {$,$$,store};

/* ---------- toast ---------- */
App.toast = function(msg,ms=2600){
  let t=$('.toast'); if(t) t.remove();
  t=document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); t.textContent=msg;
  document.body.appendChild(t); setTimeout(()=>t.remove(),ms);
};

/* ---------- user ---------- */
App.user = ()=>store.get('aia.user',null);
App.signOut = ()=>{store.set('aia.user',null);location.reload()};
App.signIn = function(){
  return new Promise(res=>{
    const m=document.createElement('div'); m.className='modal';
    m.innerHTML=`<form class="in" aria-labelledby="lt"><h2 id="lt">Sign in</h2>
      <p class="sec-note">Your name and class go with every score you save, so your teacher can see your progress.</p>
      <label for="un">Full name</label><input id="un" required autocomplete="name">
      <label for="ue">School email</label><input id="ue" type="email" required autocomplete="email">
      <label for="uc">Class</label><select id="uc">${(C.CLASSES||['Class']).map(c=>`<option>${c}</option>`).join('')}</select>
      <p id="uerr" style="color:var(--bad);font:600 .9rem var(--h);min-height:1.2em;margin:10px 0 0"></p>
      <div style="display:flex;gap:10px;margin-top:8px"><button class="btn">Start practising</button><button type="button" class="btn ghost" id="ucx">Not now</button></div></form>`;
    document.body.appendChild(m);
    $('#un',m).focus();
    $('#ucx',m).onclick=()=>{m.remove();res(null)};
    $('form',m).onsubmit=e=>{
      e.preventDefault();
      const email=$('#ue',m).value.trim().toLowerCase();
      if(C.ALLOWED_DOMAIN && !email.endsWith('@'+C.ALLOWED_DOMAIN)){ $('#uerr',m).textContent='Use your school email (@'+C.ALLOWED_DOMAIN+').'; return; }
      const u={name:$('#un',m).value.trim(),email,cls:$('#uc',m).value};
      store.set('aia.user',u); m.remove(); App.renderUser(); res(u);
    };
  });
};
App.needUser = async ()=> App.user() || await App.signIn();

App.renderUser = function(){
  const el=$('#userchip'); if(!el) return;
  const u=App.user();
  el.innerHTML = u ? `<button class="chip" id="pbtn" aria-haspopup="dialog">My scores</button><button class="chip" id="sobtn" title="Sign out">${u.name.split(' ')[0]} ✕</button>`
                   : `<button class="chip" id="sibtn">Sign in</button>`;
  if(u){ $('#pbtn').onclick=App.progress; $('#sobtn').onclick=App.signOut; } else $('#sibtn').onclick=()=>App.signIn();
};

/* ---------- saving ---------- */
App.save = async function(rec){
  const u = await App.needUser();
  const row = Object.assign({ts:new Date().toISOString(),name:u?u.name:'(guest)',email:u?u.email:'',cls:u?u.cls:''},rec);
  const all=store.get('aia.scores',[]); all.push(row); store.set('aia.scores',all);
  if(C.SHEET_URL && u){
    try{ await fetch(C.SHEET_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(row)});
      App.toast('Score saved to your teacher’s sheet ✓'); }
    catch(e){ App.toast('Saved on this device. Could not reach the sheet.'); }
  } else App.toast(u?'Score saved on this device (demo mode).':'Score not saved: you are not signed in.');
  App.refreshMeter && App.refreshMeter();
};
App.best = function(topic){
  const out={}; store.get('aia.scores',[]).filter(r=>r.topic===topic).forEach(r=>{
    const pc=r.max?Math.round(100*r.score/r.max):0; if(!out[r.activity]||pc>out[r.activity]) out[r.activity]=pc; });
  return out;
};
App.progress = function(){
  const u=App.user(); const rows=store.get('aia.scores',[]).slice().reverse();
  const m=document.createElement('div'); m.className='modal';
  m.innerHTML=`<div class="in drawer" role="dialog" aria-label="My scores" style="max-width:640px"><h2>My scores${u?' · '+u.name:''}</h2>
    ${C.SHEET_URL?'':'<p class="sec-note">Demo mode: these scores live on this device only.</p>'}
    ${rows.length?`<div class="tw"><table class="t"><tr><th>When</th><th>Topic</th><th>Activity</th><th>Score</th></tr>${rows.slice(0,40).map(r=>`<tr><td>${new Date(r.ts).toLocaleDateString()}</td><td>${r.topic}</td><td>${r.activity}</td><td>${r.score}/${r.max} (${r.max?Math.round(100*r.score/r.max):0}%)</td></tr>`).join('')}</table></div>`:'<p>No scores yet. Try a quiz.</p>'}
    <button class="btn" style="margin-top:12px">Close</button></div>`;
  document.body.appendChild(m); $('button',m).onclick=()=>m.remove(); m.onclick=e=>{if(e.target===m)m.remove()};
};

/* ---------- maths ---------- */
App.erf = x=>{const s=Math.sign(x);x=Math.abs(x);const t=1/(1+0.3275911*x);
  const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);return s*y};
App.cdf = z=>0.5*(1+App.erf(z/Math.SQRT2));
App.Z = {2.5:-1.96,5:-1.645,50:0,95:1.645,97.5:1.96};
App.shuffle = a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* theme + header */
document.addEventListener('DOMContentLoaded',()=>{ App.renderUser();
  if(!C.SHEET_URL){ const b=document.createElement('div'); b.className='banner'; b.textContent='Demo mode: scores are kept on this device until the Google Sheet is connected.'; document.body.prepend(b); }
});
window.App=App;
})();
