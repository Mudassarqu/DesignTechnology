/* Shared helpers for all topic files: command terms and small SVG figure builders. */
window.TOPICS=window.TOPICS||{};
window.CMD=[
 ['Label','AO1','Add a title, labels or brief explanations to a diagram or graph.'],
 ['List','AO1','Give a sequence of brief answers with no explanation.'],
 ['State','AO1','Give a specific name, value or other brief answer without explanation or calculation.'],
 ['Apply','AO2','Use an idea, equation, principle, theory or law in relation to a given problem or issue.'],
 ['Demonstrate','AO2','Make clear by reasoning or evidence, illustrating with examples or practical application.'],
 ['Describe','AO2','Give a detailed account.'],
 ['Identify','AO2','Provide an answer from a number of possibilities.'],
 ['Outline','AO2','Give a brief account or summary.'],
 ['Present','AO2','Offer for display, observation, examination or consideration.'],
 ['Analyse','AO3','Break down in order to bring out the guiding elements or structure.'],
 ['Construct','AO3','Display information in a diagrammatic or logical form.'],
 ['Design','AO3','Produce a plan, simulation or model.'],
 ['Evaluate','AO3','Make an appraisal by weighing up the strengths and limitations.'],
 ['Explain','AO3','Give a detailed account including reasons or causes.'],
 ['Justify','AO3','Give valid reasons or evidence to support an answer or conclusion.'],
 ['Discuss','Syllabus','Not in the guide’s glossary, but some syllabus statements use it. Treat it as a considered review: several developed points, examples and limitations.']
];

/* ---------- SVG figure helpers (all return an <svg> string, viewBox 520 wide) ---------- */
window.Fig=(function(){
  let n=0; const uid=()=> 'fg'+(++n);
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
  const wrap=(s,max)=>{const w=String(s).split(' '),L=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>max&&c){L.push(c);c=x}else c=(c+' '+x).trim()});if(c)L.push(c);return L};
  const txt=(x,y,s,o={})=>{const L=wrap(s,o.max||16),lh=o.lh||14;const y0=y-(L.length-1)*lh/2;
    return `<text x="${x}" y="${y0+4}" text-anchor="${o.a||'middle'}" style="fill:${o.fill||'var(--ink)'};font-weight:${o.b?700:500};${o.fs?'font-size:'+o.fs+'px':''}">${L.map((l,i)=>`<tspan x="${x}" dy="${i?lh:0}">${esc(l)}</tspan>`).join('')}</text>`};
  const defs=id=>`<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
  const svg=(h,body,label)=>`<svg viewBox="0 0 520 ${h}" role="img" aria-label="${esc(label||'Diagram')}">${body}</svg>`;
  return {
    svg,txt,esc,defs,uid,
    /* flow: steps in rows of `per` boxes; loop adds a return arrow */
    flow(steps,o={}){const id=uid(),per=o.per||4,bw=o.bw||104,bh=o.bh||50,gx=(520-per*bw)/(per+1),rows=Math.ceil(steps.length/per),H=rows*(bh+34)+(o.loop?30:10)+(o.title?24:0);
      let b=defs(id),oy=o.title?28:6; if(o.title)b+=txt(260,14,o.title,{b:1,max:60});
      const P=steps.map((s,i)=>{const r=Math.floor(i/per),c=i%per,x=gx+c*(bw+gx),y=oy+r*(bh+34);return {x,y}});
      steps.forEach((s,i)=>{const {x,y}=P[i];const fill=(o.hl&&o.hl.includes(i))?'var(--mark)':'var(--card)';
        b+=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="8" fill="${fill}" stroke="var(--ink)" stroke-width="2"/>`+txt(x+bw/2,y+bh/2,s,{max:Math.floor(bw/7.4),lh:13});
        if(i<steps.length-1){const q=P[i+1];
          if(q.y===y) b+=`<line x1="${x+bw}" y1="${y+bh/2}" x2="${q.x}" y2="${y+bh/2}" stroke="var(--blue)" stroke-width="2" marker-end="url(#${id})"/>`;
          else b+=`<path d="M${x+bw/2} ${y+bh} L${x+bw/2} ${y+bh+17} L${q.x+bw/2} ${y+bh+17} L${q.x+bw/2} ${q.y}" fill="none" stroke="var(--blue)" stroke-width="2" marker-end="url(#${id})"/>`}});
      if(o.loop){const a=P[0],z=P[steps.length-1],y=oy+(rows-1)*(bh+34)+bh;b+=(rows>1?`<path d="M${z.x+bw/2} ${y} L${z.x+bw/2} ${y+18} L8 ${y+18} L8 ${a.y+bh/2} L${a.x} ${a.y+bh/2}" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${id})"/>`:`<path d="M${z.x+bw/2} ${y} L${z.x+bw/2} ${y+18} L${a.x+bw/2} ${y+18} L${a.x+bw/2} ${a.y}" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#${id})"/>`);b+=txt(260,y+30,o.loop,{max:60,fill:'var(--ink2)'})}
      return svg(H+(o.loop?14:0),b,o.label||o.title)},
    /* horizontal bars: rows [label,value]; unit string */
    bars(rows,o={}){const id=uid(),max=o.max||Math.max(...rows.map(r=>r[1])),lw=o.lw||150,bh=26,H=rows.length*(bh+10)+(o.title?32:12);let b='',oy=o.title?30:8;if(o.title)b+=txt(260,14,o.title,{b:1,max:70});
      rows.forEach((r,i)=>{const y=oy+i*(bh+10),w=(r[1]/max)*(500-lw-60);b+=txt(lw-8,y+bh/2,r[0],{a:'end',max:Math.floor(lw/7.2)})+`<rect x="${lw}" y="${y}" width="${w}" height="${bh}" rx="3" fill="${(o.hl&&o.hl.includes(i))?'var(--mark)':'var(--blue)'}" stroke="var(--ink)"/>`+`<text x="${lw+w+6}" y="${y+bh/2+4}" style="fill:var(--ink)">${r[1]}${o.unit||''}</text>`});
      return svg(H,b,o.label||o.title)},
    /* x-y line chart: series [{name,pts:[[x,y]...],dash}], axis labels; points in data units */
    xy(series,o={}){const W=520,H=o.h||250,L=56,R=20,T=o.title?34:14,B=44,xs=series.flatMap(s=>s.pts.map(p=>p[0])),ys=series.flatMap(s=>s.pts.map(p=>p[1]));
      const x0=o.x0!=null?o.x0:Math.min(...xs),x1=o.x1!=null?o.x1:Math.max(...xs),y0=o.y0!=null?o.y0:0,y1=o.y1!=null?o.y1:Math.max(...ys);
      const X=v=>L+(v-x0)/(x1-x0)*(W-L-R),Y=v=>H-B-(v-y0)/(y1-y0)*(H-B-T);let b='';
      if(o.title)b+=txt(260,16,o.title,{b:1,max:70});
      for(let i=0;i<=4;i++){const yv=y0+(y1-y0)*i/4,yy=Y(yv);b+=`<line x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}" stroke="var(--line)"/><text x="${L-6}" y="${yy+4}" text-anchor="end">${+yv.toFixed(2)}</text>`}
      for(let i=0;i<=4;i++){const xv=x0+(x1-x0)*i/4;b+=`<text x="${X(xv)}" y="${H-B+16}" text-anchor="middle">${+xv.toFixed(2)}</text>`}
      b+=`<line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" stroke="var(--ink)" stroke-width="2"/><line x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}" stroke="var(--ink)" stroke-width="2"/>`;
      if(o.xl)b+=txt((L+W-R)/2,H-6,o.xl,{max:80,fill:'var(--ink2)'}); if(o.yl)b+=`<text transform="translate(14 ${(T+H-B)/2}) rotate(-90)" text-anchor="middle">${esc(o.yl)}</text>`;
      const cols=['var(--blue)','var(--bad)','var(--ok)','var(--ink)'];
      series.forEach((s,i)=>{b+=`<polyline fill="none" stroke="${s.color||cols[i%4]}" stroke-width="3" ${s.dash?'stroke-dasharray="6 4"':''} points="${s.pts.map(p=>X(p[0]).toFixed(1)+','+Y(p[1]).toFixed(1)).join(' ')}"/>`;
        if(s.name){const lp=s.pts[s.pts.length-1];b+=`<text x="${Math.min(X(lp[0])-4,W-R-4)}" y="${Y(lp[1])-8}" text-anchor="end" style="fill:${s.color||cols[i%4]};font-weight:700">${esc(s.name)}</text>`}});
      (o.marks||[]).forEach(m=>{b+=`<circle cx="${X(m[0])}" cy="${Y(m[1])}" r="5" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`+(m[2]?txt(X(m[0])+10,Y(m[1])-10,m[2],{a:'start',max:22}):'')});
      return svg(H,b,o.label||o.title)},
    /* free block diagram: boxes [{x,y,w,h,t,hl}], arrows [[i,j,label?]] centre to centre edges */
    boxes(bx,ar,o={}){const id=uid(),H=o.h||220;let b=defs(id);
      const edge=(a,c)=>{const ax=a.x+a.w/2,ay=a.y+a.h/2,cx=c.x+c.w/2,cy=c.y+c.h/2,dx=cx-ax,dy=cy-ay;const k=(r,dx,dy)=>Math.min(Math.abs(dx)?(r.w/2)/Math.abs(dx):1e9,Math.abs(dy)?(r.h/2)/Math.abs(dy):1e9);
        return [ax+dx*k(a,dx,dy),ay+dy*k(a,dx,dy),cx-dx*k(c,dx,dy),cy-dy*k(c,dx,dy)]};
      (ar||[]).forEach(a=>{const [x1,y1,x2,y2]=edge(bx[a[0]],bx[a[1]]);b+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--blue)" stroke-width="2" marker-end="url(#${id})"/>`+(a[2]?txt((x1+x2)/2,(y1+y2)/2-9,a[2],{max:20,fill:'var(--ink2)'}):'')});
      bx.forEach(r=>{if(r.t===undefined)return;b+=`<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="${r.r==null?8:r.r}" fill="${r.hl?'var(--mark)':(r.f||'var(--card)')}" stroke="var(--ink)" stroke-width="2"/>`+txt(r.x+r.w/2,r.y+r.h/2,r.t,{max:Math.floor(r.w/7.2),lh:13})});
      (o.text||[]).forEach(t=>b+=txt(t[0],t[1],t[2],{a:t[3]||'middle',max:t[4]||40,fill:'var(--ink2)'}));
      return svg(H,b,o.label)}
  };
})();
