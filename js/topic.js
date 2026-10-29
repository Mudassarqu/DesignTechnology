/* Topic page engine: notes, flashcards, MCQ, fill-in-the-blanks, theory Q&A, live quiz. */
(function(){
const {$,$$,shuffle,store}=App;
const id=new URLSearchParams(location.search).get('t')||'a1-1';
const T=window.TOPICS[id]; if(!T){document.body.innerHTML='<p style="padding:2rem">Topic not found.</p>';return}
T.cmd=T.cmd||window.CMD; T.paper=T.paper||[];
document.title=T.code+' '+T.title+' · AIA Design Technology';
$('#tcode').textContent=T.code+' · '+T.level+' · '+T.hours+' hours';
$('#ttitle').textContent=T.title; $('#tgq').textContent=T.guiding;

const TABS=[['notes','Notes'],['cards','Flashcards'],['mcq','Quiz'],['fib','Fill the blanks'],['theory','Theory Q&A'],['live','Live quiz'],['paper','Exam practice']];
const tabs=$('#tabs'), main=$('#main');
TABS.forEach(([k,l])=>{const b=document.createElement('button');b.id='tab-'+k;b.textContent=l;b.setAttribute('role','tab');b.setAttribute('aria-selected','false');b.onclick=()=>show(k);tabs.appendChild(b)});
const sections={};
function show(k){ stopLive(); TABS.forEach(([x])=>$('#tab-'+x).setAttribute('aria-selected',x===k)); main.innerHTML=''; sections[k](main); location.hash=k; window.scrollTo({top:Math.min(window.scrollY,$('#tabs').offsetTop-70)}); }

/* progress meter (best % for each activity) */
App.refreshMeter=function(){ const b=App.best(T.id); const acts=['Quiz','Fill the blanks','Theory Q&A','Live quiz','Exam practice']; let n=0,sum=0;
  acts.forEach(a=>{if(b[a]!=null){n++;sum+=b[a]}}); $('#meter i').style.width=(sum/acts.length)+'%'; $('#mtxt').textContent=n+' of 5 activities tried · best average '+(n?Math.round(sum/n):0)+'%'; };

/* ---------- NOTES ---------- */
sections.notes=el=>{
  el.innerHTML=`<div class="notes"><nav class="toc" aria-label="Sections">${T.notes.map(s=>`<a href="#${s.id}" data-id="${s.id}">${s.ref} ${s.title}</a>`).join('')}</nav>
  <div>${T.notes.map(s=>`<section class="sec" id="${s.id}"><span class="ref">${s.ref}</span><h2>${s.title}</h2><div class="must"><b>You must be able to:</b> ${s.must}</div>${s.html}</section>`).join('')}
  ${T.pptx?`<p><a class="btn" href="${T.pptx}" download>Download slides: ${T.pptxName}</a></p>`:''}</div></div>`;
  $$('.toc a',el).forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.id).scrollIntoView({behavior:'smooth'})});
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){$$('.toc a',el).forEach(a=>a.classList.toggle('on',a.dataset.id===e.target.id))}})},{rootMargin:'-20% 0px -70% 0px'});
  $$('.sec',el).forEach(s=>io.observe(s));
  initCalc(el);
};
function initCalc(el){
  const o=$('#cout',el); if(!o) return;
  const f=()=>{const m=+$('#cm').value,s=+$('#cs').value,x=+$('#cx').value; if(!(s>0)){o.textContent='Enter a standard deviation above 0.';return}
    const v=p=>Math.round(m+App.Z[p]*s); const pc=App.cdf((x-m)/s)*100;
    o.innerHTML=`2.5th: ${v(2.5)} mm &nbsp; 5th: ${v(5)} mm &nbsp; 50th: ${v(50)} mm &nbsp; 95th: ${v(95)} mm &nbsp; 97.5th: ${v(97.5)} mm<br>A value of ${x} mm is at the ${pc.toFixed(1)}th percentile.`}
  $$('input',$('#calc',el)).forEach(i=>i.oninput=f); f();
}

/* ---------- FLASHCARDS ---------- */
sections.cards=el=>{
  let deck=T.cards.slice(), i=0, known=new Set();
  el.innerHTML=`<div class="fc" id="fc"><div class="card" tabindex="0" role="button" aria-label="Flip card"><div class="face front"></div><div class="face back"></div></div></div>
  <p class="sec-note" style="text-align:center" id="fcn"></p>
  <div class="row-c"><button class="btn ghost" id="fp">Previous</button><button class="btn" id="ff">Flip</button><button class="btn ghost" id="fn">Next</button></div>
  <div class="row-c"><button class="btn sm" id="fk">I know this</button><button class="btn sm ghost" id="fs">Shuffle</button><button class="btn sm ghost" id="fr">Reset</button></div>`;
  const draw=()=>{const c=deck[i]; $('.front',el).textContent=c[0]; $('.back',el).textContent=c[1]; $('#fc').classList.remove('flip');
    $('#fcn').textContent=`Card ${i+1} of ${deck.length} · ${known.size} marked as known`};
  const flip=()=>$('#fc').classList.toggle('flip');
  $('.card',el).onclick=flip; $('.card',el).onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};
  $('#ff').onclick=flip; $('#fn').onclick=()=>{i=(i+1)%deck.length;draw()}; $('#fp').onclick=()=>{i=(i-1+deck.length)%deck.length;draw()};
  $('#fk').onclick=()=>{known.add(deck[i][0]); if(known.size===deck.length){App.toast('You know all the cards!')} $('#fn').click()};
  $('#fs').onclick=()=>{deck=shuffle(deck);i=0;draw()}; $('#fr').onclick=()=>{deck=T.cards.slice();known.clear();i=0;draw()};
  draw();
};

/* ---------- MCQ ---------- */
sections.mcq=el=>{
  const qs=shuffle(T.mcq).map(q=>{const idx=shuffle(q.o.map((_,k)=>k)); return {...q,o:idx.map(k=>q.o[k]),a:idx.indexOf(q.a)}});
  let i=0,score=0,t0=Date.now(),done=false;
  const L='ABCD';
  const draw=()=>{ if(i>=qs.length) return end(); const q=qs[i]; let ans=false;
    el.innerHTML=`<div class="qwrap"><div class="qh"><span>Question ${i+1} of ${qs.length} · ${q.ref}</span><span>Score ${score}</span></div>
      <div class="meter" style="max-width:none;margin-bottom:14px"><i style="width:${100*i/qs.length}%;background:var(--blue)"></i></div>
      <div class="qq">${q.q}</div>${q.o.map((o,k)=>`<button class="opt" data-k="${k}"><span class="l">${L[k]}</span><span>${o}</span></button>`).join('')}<div id="fb"></div></div>`;
    $$('.opt',el).forEach(b=>b.onclick=()=>{ if(ans) return; ans=true; const k=+b.dataset.k; const ok=k===q.a; if(ok) score++;
      $$('.opt',el).forEach(x=>{x.disabled=true; if(+x.dataset.k===q.a) x.classList.add('ok')}); if(!ok) b.classList.add('no');
      $('#fb').innerHTML=`<div class="fb"><b>${ok?'Correct.':'Not quite.'}</b> ${q.why}</div><button class="btn" id="nx">${i+1<qs.length?'Next question':'See my score'}</button>`;
      $('#nx').focus(); $('#nx').onclick=()=>{i++;draw()}; }); };
  const end=async()=>{ const pc=Math.round(100*score/qs.length);
    el.innerHTML=`<div class="res"><p>Quiz complete</p><div class="big">${score}/${qs.length}</div><p>${pc}% · ${pc>=80?'Strong. Try the live quiz next.':pc>=50?'Getting there. Re-read the notes for the ones you missed.':'Go back to the notes, then try again.'}</p>
      <div class="row-c"><button class="btn" id="again">Try again</button></div></div>`;
    $('#again').onclick=()=>sections.mcq(el);
    await App.save({topic:T.id,activity:'Quiz',score,max:qs.length,secs:Math.round((Date.now()-t0)/1000)}); };
  draw();
};

/* ---------- FILL IN THE BLANKS ---------- */
sections.fib=el=>{
  const norm=s=>s.toLowerCase().replace(/[.,;]/g,'').replace(/\s+/g,' ').trim();
  const items=T.fib.map(f=>{const ans=[]; const html=f.t.replace(/\[\[(.+?)\]\]/g,(m,a)=>{ans.push(a.split('|').map(norm)); return `<input data-n="${ans.length-1}" autocomplete="off" aria-label="blank">`}); return {html,ans,ref:f.ref}});
  const bank=shuffle([...new Set(T.fib.flatMap(f=>[...f.t.matchAll(/\[\[(.+?)\]\]/g)].map(m=>m[1].split('|')[0])))]);
  el.innerHTML=`<div class="qwrap fib"><p>Type the missing word in each blank. Capital letters do not matter.</p><div class="bank" aria-label="Word bank">${bank.map(w=>`<span>${w}</span>`).join('')}</div>
    ${items.map((it,n)=>`<p data-i="${n}"><b class="sec-note">${it.ref}</b> &nbsp;${it.html}</p>`).join('')}
    <div class="row-c" style="justify-content:flex-start"><button class="btn" id="chk">Check answers</button><button class="btn ghost" id="rst">Clear</button></div><div id="fr"></div></div>`;
  $('#rst').onclick=()=>sections.fib(el);
  $('#chk').onclick=async()=>{ let ok=0,tot=0;
    $$('p[data-i]',el).forEach((p,n)=>{ $$('input',p).forEach(inp=>{tot++; const good=items[n].ans[+inp.dataset.n].includes(norm(inp.value)); inp.classList.remove('ok','no'); inp.classList.add(good?'ok':'no'); if(good) ok++; else inp.title='Answer: '+items[n].ans[+inp.dataset.n][0]; inp.readOnly=true}) });
    const wrong=$$('input.no',el).map(i=>i.title.replace('Answer: ',''));
    $('#fr').innerHTML=`<div class="fb"><b>${ok} of ${tot} correct.</b> ${wrong.length?'Missed answers: '+wrong.join(', ')+'.':'Perfect.'}</div>`;
    $('#chk').disabled=true; await App.save({topic:T.id,activity:'Fill the blanks',score:ok,max:tot}); };
};

/* ---------- shared: IB-style question blocks with mark schemes ---------- */
const cdef=c=>{const x=(T.cmd||[]).find(r=>r[0].toLowerCase()===String(c).toLowerCase());return x?x[2]:''};
const reEsc=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function ptHTML(p,kw){
  if(/<b>/.test(p)) return p.replace(/<b>/g,'<mark class="kw">').replace(/<\/b>/g,'</mark>');
  if(!kw||!kw.length) return p;
  const re=new RegExp('('+kw.slice().sort((x,y)=>y.length-x.length).map(reEsc).join('|')+')','gi');
  return p.split(/(<[^>]+>)/).map(seg=>seg.startsWith('<')?seg:seg.replace(re,'<mark class="kw">$1</mark>')).join('');
}
function qHTML(q,head){
  return `<div class="tq"><span class="m">${head?head+' · ':''}${q.ref} · ${q.cmd} · [${q.marks}]</span><p style="margin:.3em 0">${q.q}</p>
  <p class="cdef"><b>${q.cmd}</b> means: ${cdef(q.cmd)}</p>
  <textarea aria-label="Your answer" placeholder="Write your answer here…"></textarea><button class="btn sm rv">Show mark scheme</button>
  <div class="model"><p class="award">${q.award||'Award [1] for each valid point up to ['+q.marks+' max].'}</p>
  <div class="pts">${q.pts.map(p=>`<label><input type="checkbox"><span>${ptHTML(p,q.kw)}</span></label>`).join('')}</div>
  ${q.acc?`<p class="acc">${q.acc}</p>`:''}
  ${q.kw&&q.kw.length?`<p class="kws"><span class="sec-note">Keywords to use:</span> ${q.kw.map(k=>`<span>${k}</span>`).join('')}</p>`:''}
  <div class="fb"><b>Tip.</b> ${q.tip}</div><p class="sec-note">Points ticked: <b class="tk">0</b> / ${q.marks}</p></div></div>`;
}
function bindQs(root,list){ $$('.tq',root).forEach((box,n)=>{ const q=list[n];
  $('.rv',box).onclick=e=>{$('.model',box).classList.add('show'); e.target.hidden=true};
  $$('input[type=checkbox]',box).forEach(c=>c.onchange=()=>{const k=$$('input:checked',box).length; $('.tk',box).textContent=Math.min(k,q.marks)}); }); }
function tally(root,list){ let s=0,m=0,att=0; $$('.tq',root).forEach((box,n)=>{ if($('.model',box).classList.contains('show')){att++; m+=list[n].marks; s+=Math.min($$('input:checked',box).length,list[n].marks)} }); return {s,m,att}; }

/* ---------- THEORY Q&A (self-marked, IB mark-scheme style) ---------- */
sections.theory=el=>{
  el.innerHTML=`<div class="qwrap"><p>Write your answer first. Then reveal the mark scheme. Tick each point you made. <mark class="kw">Highlighted keywords</mark> are the words examiners look for. Each question shows its command term and what it asks you to do. Be honest: examiners only credit what is written.</p>
  ${T.theory.map(q=>qHTML(q)).join('')}
  <button class="btn" id="tsave">Save my theory mark</button><p id="tmsg" class="sec-note"></p></div>`;
  bindQs(el,T.theory);
  $('#tsave').onclick=async()=>{ const {s,m,att}=tally(el,T.theory);
    if(!att){$('#tmsg').textContent='Open at least one mark scheme and tick your points first.';return}
    $('#tmsg').textContent=`You scored ${s} out of ${m} marks on ${att} question${att>1?'s':''}.`; await App.save({topic:T.id,activity:'Theory Q&A',score:s,max:m,extra:att+' questions'}); };
};

/* ---------- LIVE QUIZ (Kahoot-style, solo) ---------- */
let liveTimer=null, audio=null, mute=true;
function stopLive(){ clearInterval(liveTimer); liveTimer=null }
function beep(f,d=.12,v=.06){ if(mute) return; try{ audio=audio||new (window.AudioContext||window.webkitAudioContext)(); const o=audio.createOscillator(),g=audio.createGain(); o.frequency.value=f; g.gain.value=v; o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+d)}catch(e){} }
sections.live=el=>{
  const SH=['▲','◆','●','■'], LIMIT=20;
  const pool=T.mcq.filter(q=>q.live); const N=Math.min(10,pool.length);
  el.innerHTML=`<div class="live"><div class="stage"><h2>Live quiz</h2><p style="margin:0 auto 1em">${N} questions. ${LIMIT} seconds each. Faster correct answers score more (up to 1,000 points). Two or more correct in a row earns a streak bonus.</p>
   <p><label style="font:600 .95rem var(--h)"><input type="checkbox" id="snd"> Sound on</label></p><button class="btn" id="go" style="font-size:1.2rem;padding:.8em 2em">Start</button></div></div>`;
  $('#snd').onchange=e=>mute=!e.target.checked;
  $('#go').onclick=()=>{ const qs=shuffle(pool).slice(0,N).map(q=>{const idx=shuffle(q.o.map((_,k)=>k)); return {...q,o:idx.map(k=>q.o[k]),a:idx.indexOf(q.a)}});
    let i=0,pts=0,right=0,streak=0,best=0; const t0=Date.now(); const st=$('.stage',el);
    const count=(n)=>{ if(n===0){return ask()} st.innerHTML=`<div class="pop">${n}</div><p>Get ready</p>`; beep(440); setTimeout(()=>count(n-1),800)};
    const ask=()=>{ if(i>=qs.length) return fin(); const q=qs[i]; let left=LIMIT, locked=false; const tstart=performance.now();
      st.innerHTML=`<div class="qh"><span>Question ${i+1} of ${qs.length}</span><span>Score ${pts}${streak>1?' · streak '+streak+' 🔥':''}</span></div><div class="timer" aria-hidden="true"><i id="tb"></i></div><div class="lq">${q.q}</div>
        <div class="tiles">${q.o.map((o,k)=>`<button class="tile" data-k="${k}"><span class="sh" aria-hidden="true">${SH[k]}</span><span>${o}</span></button>`).join('')}</div><p class="sec-note" id="tl">${left}s</p>`;
      const settle=(k)=>{ if(locked) return; locked=true; stopLive(); const el_=(performance.now()-tstart)/1000; const ok=k===q.a; let gain=0;
        if(ok){ right++; streak++; best=Math.max(best,streak); gain=Math.round(500+500*Math.max(0,(LIMIT-el_)/LIMIT)); if(streak>=2) gain+=Math.min(300,(streak-1)*100); pts+=gain; beep(660,.2) } else { streak=0; beep(180,.3) }
        $$('.tile',st).forEach(t=>{t.disabled=true; if(+t.dataset.k!==q.a) t.classList.add('dim')});
        const msg=k==null?'Time is up.':ok?'Correct!':'Not this time.';
        setTimeout(()=>{ st.innerHTML=`<div class="pop" style="font-size:3rem">${msg}</div>${ok?`<div class="pts-pop">+${gain}</div>`:''}<div class="fb" style="text-align:left;max-width:640px;margin:14px auto"><b>Answer: ${q.o[q.a]}.</b> ${q.why}</div><p>Total ${pts} points${streak>1?' · streak '+streak:''}</p><button class="btn" id="nx">${i+1<qs.length?'Next':'Finish'}</button>`;
          $('#nx').focus(); $('#nx').onclick=()=>{i++;ask()}; },700); };
      $$('.tile',st).forEach(t=>t.onclick=()=>settle(+t.dataset.k));
      liveTimer=setInterval(()=>{ const e=(performance.now()-tstart)/1000; left=Math.max(0,Math.ceil(LIMIT-e)); const tb=$('#tb',st); if(tb) tb.style.width=Math.max(0,100*(1-e/LIMIT))+'%'; const tl=$('#tl',st); if(tl) tl.textContent=left+'s'; if(left<=5&&left>0) beep(880,.05,.03); if(e>=LIMIT) settle(null)},100); };
    const fin=async()=>{ stopLive(); st.innerHTML=`<div class="pop">${pts.toLocaleString()}</div><p>points</p><div><span class="stat"><b>${right}/${qs.length}</b>correct</span><span class="stat"><b>${best}</b>best streak</span><span class="stat"><b>${Math.round((Date.now()-t0)/1000)}s</b>total time</span></div><div class="row-c"><button class="btn" id="again">Play again</button></div>`;
      $('#again').onclick=()=>sections.live(el); await App.save({topic:T.id,activity:'Live quiz',score:right,max:qs.length,points:pts,streak:best}); };
    count(3); };
};

/* ---------- EXAM PRACTICE ---------- */
sections.paper=el=>{
  const P=T.practice||[], S=T.short;
  const tot=l=>l.reduce((a,q)=>a+q.marks,0);
  el.innerHTML=`<div class="qwrap"><h2>Exam practice</h2>
  <p>Original questions written for this site in the style of IB Paper 1 (short answer) and Paper 2 (case study with figures and data). The data in the tables is made up for the questions. Answer in the box, reveal the mark scheme, tick the points you made, then save your mark.</p>
  <p class="jump">${P.map(c=>`<a class="chip" href="#${c.id}">${c.title.replace(/^Case study \d: /,'')}</a>`).join('')}${S?'<a class="chip" href="#short">Short answers</a>':''}</p>
  ${P.map(c=>`<section class="case" id="${c.id}"><span class="sec-note">${c.paper} · [${tot(c.parts)} marks]</span><h2>${c.title}</h2>${c.scenario}
    <figure class="fig">${c.fig}<figcaption>${c.cap}</figcaption></figure><div class="tw">${c.table}</div>
    ${c.parts.map(q=>qHTML(q,q.l)).join('')}
    <button class="btn csave">Save my mark for this case study</button><p class="sec-note cmsg"></p></section>`).join('')}
  ${S?`<section class="case" id="short"><span class="sec-note">${S.paper} · [${tot(S.parts)} marks]</span><h2>${S.title}</h2>${S.intro}${S.parts.map(q=>qHTML(q,q.l)).join('')}<button class="btn csave">Save my mark for this set</button><p class="sec-note cmsg"></p></section>`:''}
  ${T.paper.length?'<h2 style="margin-top:1.4em">Questions in the 2027 specimen papers</h2><p class="sec-note">These point to the specimen papers. The questions are not reproduced here.</p>':''}
  ${T.paper.map(p=>`<div class="box" style="margin-bottom:12px"><b class="sec-note">${p.ref}</b><p style="margin:.2em 0">${p.what}</p><details><summary style="cursor:pointer;font:600 .9rem var(--h)">Show markscheme note</summary><p style="margin-top:8px">${p.key}</p></details></div>`).join('')}
  <h2 style="margin-top:1.4em">Command terms from the guide</h2><p class="sec-note">The command term tells you how much to write. AO1 = recall, AO2 = understand and apply, AO3 = analyse and evaluate.</p>
  <div class="tw"><table class="t"><tr><th>Term</th><th>Level</th><th>What to do</th></tr>${T.cmd.map(c=>`<tr><td><b>${c[0]}</b></td><td>${c[1]}</td><td>${c[2]}</td></tr>`).join('')}</table></div>
  ${T.pptx?`<h2 style="margin-top:1.4em">Slides</h2><p><a class="btn" href="${T.pptx}" download>Download: ${T.pptxName}</a></p>`:''}</div>`;
  const sets=[...P.map(c=>[c.title,c.parts]),...(S?[[S.title,S.parts]]:[])];
  $$('.case',el).forEach((sec,i)=>{ const [name,list]=sets[i]; const root=sec;
    bindQs(root,list);
    $('.csave',sec).onclick=async()=>{ const {s,m,att}=tally(root,list); const msg=$('.cmsg',sec);
      if(!att){msg.textContent='Open at least one mark scheme and tick your points first.';return}
      msg.textContent=`You scored ${s} out of ${m} marks on ${att} part${att>1?'s':''}.`;
      await App.save({topic:T.id,activity:'Exam practice',score:s,max:m,extra:name+' ('+att+' parts)'}); App.refreshMeter(); }; });
  $$('.jump a',el).forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.getAttribute('href').slice(1)).scrollIntoView({behavior:'smooth'})});
};

App.refreshMeter();
const start=location.hash.slice(1); show(sections[start]?start:'notes');
})();
