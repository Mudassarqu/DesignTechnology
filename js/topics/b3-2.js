window.TOPICS=window.TOPICS||{};
(function(){
const ln=(a,b,c,d,x)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${x||'var(--ink)'}" stroke-width="2.4"/>`;
const tx=(x,y,s,a,f)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}"${f?` style="fill:${f};font-weight:700"`:''}>${s}</text>`;
const DEF=`<defs><marker id="fb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--bad)"/></marker><marker id="fo" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
/* simply supported beam with two point loads; positions in m of L; labels */
function beam(L,loads,R,lab){
 const x0=70,x1=450,X=m=>x0+(x1-x0)*m/L;let b=DEF;
 b+=`<rect x="${x0}" y="80" width="${x1-x0}" height="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/>`;
 b+=`<path d="M${x0} 92 l-10 18 h20z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><path d="M${x1} 92 l-10 14 h20z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x1-4}" cy="112" r="3.5" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="${x1+4}" cy="112" r="3.5" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
 loads.forEach(l=>{b+=`<line x1="${X(l[0])}" y1="26" x2="${X(l[0])}" y2="77" stroke="var(--bad)" stroke-width="3" marker-end="url(#fb)"/>`+tx(X(l[0]),18,l[1],null,'var(--bad)')});
 b+=`<line x1="${x0}" y1="168" x2="${x0}" y2="122" stroke="var(--blue)" stroke-width="3" marker-end="url(#fo)"/>`+tx(x0,184,R[0],null,'var(--blue)');
 b+=`<line x1="${x1}" y1="168" x2="${x1}" y2="122" stroke="var(--blue)" stroke-width="3" marker-end="url(#fo)"/>`+tx(x1,184,R[1],null,'var(--blue)');
 b+=ln(x0,200,x1,200)+tx((x0+x1)/2,216,'Span L = '+L+' m');
 return `<svg viewBox="0 0 520 224" role="img" aria-label="${lab}">${b}</svg>`;
}
/* FEA L-bracket */
const fea=(()=>{
 let b='';
 b+=`<defs><linearGradient id="hg" x1="0" x2="1"><stop offset="0" stop-color="#2a6fdb"/><stop offset=".33" stop-color="#2fb57a"/><stop offset=".66" stop-color="#f1c232"/><stop offset="1" stop-color="#d63b2f"/></linearGradient><radialGradient id="hot" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d63b2f"/><stop offset=".5" stop-color="#f1c232"/><stop offset="1" stop-color="#2fb57a" stop-opacity="0"/></radialGradient></defs>`;
 b+=`<path d="M60 40 L120 40 L120 150 L300 150 L300 200 L60 200 Z" fill="#2a6fdb" opacity=".85" stroke="var(--ink)" stroke-width="2.4"/>`;
 b+=`<path d="M120 40 L120 150 L300 150 L300 200 L120 200 L60 200 L60 40Z" fill="none"/>`;
 b+=`<circle cx="120" cy="150" r="42" fill="url(#hot)"/>`;
 b+=ln(60,40,120,40)+`<rect x="40" y="36" width="24" height="170" fill="var(--ink)" opacity=".6"/>`+tx(52,226,'Fixed to wall');
 b+=`<line x1="292" y1="98" x2="292" y2="146" stroke="var(--bad)" stroke-width="3.5" marker-end="url(#fb)"/>`+DEF+tx(292,90,'Load',null,'var(--bad)');
 b+=`<line x1="170" y1="118" x2="128" y2="146" stroke="var(--ink)" stroke-width="1.8"/><text x="176" y="116" style="font-weight:700">Peak stress</text><text x="176" y="132">(corner)</text>`;
 b+=`<rect x="420" y="60" width="26" height="110" fill="url(#hg)" stroke="var(--ink)" stroke-width="2"/>`+tx(456,70,"High","start")+tx(456,170,"Low","start")+tx(433,48,"Stress");
 return `<svg viewBox="0 0 520 240" role="img" aria-label="An FEA colour map of an L-shaped bracket showing the highest stress at the inside corner">${b}</svg>`;
})();

window.TOPICS['b3-2']={
id:'b3-2',code:'B3.2',title:'Structural systems: application and selection',level:'HL',hours:8,
guiding:'How can structural systems be incorporated into product design?',
pptx:null,

notes:[
{id:'s321',ref:'3.2.1',title:'Analysing structures in everyday products',
 must:'Analyse and model the forces acting on and within the structure of existing products and suggest how existing structures can be strengthened.',
 html:`
<p>To <b>analyse</b> a structure, break it into parts, name the forces on each part, and say where it is likely to fail. Then <b>model</b> it with a simple diagram.</p>
<div class="tw"><table class="t"><tr><th>Step</th><th>Question</th><th>Example: a wall-mounted shelf</th></tr>
<tr><td>1. Classify</td><td>Frame, shell, solid, or combination?</td><td>Frame: shelf board with two brackets</td></tr>
<tr><td>2. Identify loads</td><td>Dead load, live load, dynamic load?</td><td>Weight of the shelf (dead); books (live)</td></tr>
<tr><td>3. Identify supports</td><td>Fixed, pinned, roller, simply supported?</td><td>Each bracket acts as a cantilever fixed to the wall</td></tr>
<tr><td>4. Forces in members</td><td>Tension, compression, bending, shear, torsion?</td><td>Top of bracket: tension; lower diagonal: compression</td></tr>
<tr><td>5. Weak point</td><td>Where will it fail first?</td><td>Screws pulling out; corner where bracket meets wall</td></tr>
<tr><td>6. Strengthen</td><td>Struts, shape, lamination, composites, bigger section</td><td>Add a diagonal strut; thicker plate; more screws</td></tr></table></div>
<h3>Strengthening</h3>
<ul class="tight"><li><b>Struts and ties</b>: triangulation to resist racking and bending.</li><li><b>Shape</b>: arches, domes, I-sections, ribs, corrugation.</li><li><b>Lamination</b>: plywood, glulam.</li><li><b>Composites</b>: reinforced concrete, carbon fibre.</li><li><b>Larger or deeper section</b>: bending resistance rises quickly with depth.</li></ul>
<div class="tip"><b>Exam tip.</b> When asked to suggest how to strengthen, say <b>what force</b> the change resists and <b>where</b> in the structure it goes.</div>`},

{id:'s322',ref:'3.2.2',title:'Young’s modulus and stress–strain graphs',
 must:'Calculate Young’s modulus using E = σ/ε, and interpret stress–strain graphs, identifying Young’s modulus, yield strength, ultimate strength and fracture.',
 html:`
<div class="key"><b>Stress σ = F ÷ A</b> (Pa). <b>Strain ε = ΔL ÷ L</b> (no unit). <b>Young’s modulus E = σ ÷ ε</b> (Pa or GPa). E is the gradient of the straight (elastic) part and measures <b>stiffness</b>.</div>
<div class="ex"><b class="l">Worked example 1.</b> A steel wire has a cross-section of 2.0 mm² and carries 400 N. Stress = 400 ÷ 2.0×10⁻⁶ = 200 MPa. Its 2.0 m length extends 2.0 mm, so strain = 0.002 ÷ 2.0 = 0.001. E = 200 × 10⁶ ÷ 0.001 = <b>200 GPa</b>.</div>
<div class="ex"><b class="l">Worked example 2: from a graph.</b> At a point on the straight line, stress is 70 MPa when strain is 0.001. E = 70 × 10⁶ ÷ 0.001 = <b>70 GPa</b> (aluminium).</div>
<div class="tw"><table class="t"><tr><th>Point on graph</th><th>Meaning</th></tr><tr><td>Straight line</td><td>Elastic, stress ∝ strain; gradient = E</td></tr><tr><td>Yield point (yield strength)</td><td>Start of permanent (plastic) deformation</td></tr><tr><td>Ultimate strength (UTS)</td><td>Maximum stress</td></tr><tr><td>Fracture</td><td>Material breaks; long distance after the UTS shows ductility</td></tr></table></div>
<div class="tw"><table class="t"><tr><th>Material</th><th>E (GPa)</th><th>Yield (MPa)</th><th>UTS (MPa)</th></tr><tr><td>Mild steel</td><td>200</td><td>250</td><td>400</td></tr><tr><td>Aluminium alloy</td><td>70</td><td>275</td><td>310</td></tr><tr><td>Oak (along grain)</td><td>12</td><td>n/a</td><td>90</td></tr><tr><td>Nylon</td><td>2.5</td><td>60</td><td>80</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Convert to Pa before dividing. A stiff material has a <b>steep</b> gradient; a strong material has a <b>high</b> UTS. These are different.</div>`},

{id:'s323',ref:'3.2.3',title:'Why structures fail, and FEA',
 must:'Identify why a structure has failed, including interpreting data from finite element analysis (FEA).',
 html:`
<div class="tw"><table class="t"><tr><th>Cause</th><th>How it leads to failure</th><th>Example</th></tr>
<tr><td><b>Overloading</b></td><td>Load exceeds the strength of the structure</td><td>Too many people on a balcony</td></tr>
<tr><td><b>Material choice</b></td><td>Brittle material cracks; weak material yields; corrosion or rot reduces strength; fatigue from repeated loads</td><td>Cast iron bracket snaps; rusted bolts</td></tr>
<tr><td><b>Size</b></td><td>Too thin or too short a section gives high stress or buckling</td><td>Slender table leg buckles</td></tr>
<tr><td><b>Shape</b></td><td>Sharp internal corners and holes concentrate stress; flat panels bend easily</td><td>Crack starting at the corner of a window or bracket</td></tr></table></div>
<h3>Finite element analysis (FEA)</h3>
<p><b>FEA</b> is computer software that divides a CAD model into many small <b>elements</b> (the mesh), applies <b>loads and fixings</b> (boundary conditions) and calculates the stress, strain and deflection in each element. Results appear as a <b>colour map</b>: red is high stress, blue is low.</p>
<ul class="tight"><li>Use it to <b>find weak points</b> before building, and to test changes quickly (add a fillet, thicken a section).</li><li>Compare peak stress with the material’s <b>yield strength</b>; the safety factor is yield (or UTS) ÷ peak stress.</li><li><b>Limits</b>: results depend on correct inputs, mesh quality, material data and loads (garbage in, garbage out); real defects and manufacture are not modelled; physical testing is still needed.</li></ul>
${fea}
<p class="cap">FEA map of an L-bracket: the inside corner is red (high stress).</p>
<div class="ex"><b class="l">Worked example.</b> FEA gives a peak stress of 240 MPa at the corner. The steel yields at 250 MPa, so the safety factor on yield is 250 ÷ 240 = 1.04. This is too low. Adding a 5 mm radius reduces the peak to 110 MPa, giving 250 ÷ 110 = 2.3.</div>
<div class="tip"><b>Exam tip.</b> Say where the stress is highest, why (stress concentration, thin section), and how to fix it.</div>`},

{id:'s324',ref:'3.2.4',title:'Force diagrams and beams',
 must:'Interpret simple force diagrams for a given structure.',
 html:`
<p>A <b>force diagram</b> (free body diagram) shows the structure isolated, with <b>every external force</b> as a labelled arrow: loads, weights, reactions at supports.</p>
<div class="key"><b>Equilibrium:</b> ΣF vertical = 0, ΣF horizontal = 0, ΣM = 0. To find unknown reactions, take moments about one support.</div>
${beam(4,[[1,'2 kN'],[3,'3 kN']],['Reaction A','Reaction B'],'Simply supported beam with a 2 kilonewton load 1 metre from A and a 3 kilonewton load 3 metres from A')}
<div class="ex"><b class="l">Worked example.</b> A 4 m beam carries 2 kN at 1 m and 3 kN at 3 m from A. Moments about A: R<sub>B</sub> × 4 = 2×1 + 3×3 = 11, so R<sub>B</sub> = <b>2.75 kN</b>. Vertical: R<sub>A</sub> = 5 − 2.75 = <b>2.25 kN</b>.</div>
<h3>Results worth remembering</h3>
<div class="tw"><table class="t"><tr><th>Situation</th><th>Reactions</th><th>Maximum bending moment</th></tr>
<tr><td>Simply supported, central point load W, span L</td><td>W/2 at each end</td><td>WL/4 at the centre</td></tr>
<tr><td>Simply supported, uniform load w per metre</td><td>wL/2 at each end</td><td>wL²/8 at the centre</td></tr>
<tr><td>Cantilever, point load W at the tip, length L</td><td>W up and moment WL at the fixed end</td><td>WL at the fixed support</td></tr></table></div>
<div class="ex"><b class="l">Example.</b> A 3 m beam carries 6 kN at the centre: M = 6 × 3 ÷ 4 = <b>4.5 kN·m</b>. A 2 m cantilever with 500 N at the tip: M = 500 × 2 = <b>1000 N·m</b>.</div>
<p><b>Reading shear force and bending moment diagrams:</b> the bending moment is largest where the shear force crosses zero; for a simply supported beam it is zero at the supports; for a cantilever it is largest at the fixed end.</p>
<div class="tip"><b>Exam tip.</b> Draw the diagram, label all forces and distances, then take moments about a support to remove one unknown.</div>`},

{id:'s325',ref:'3.2.5',title:'Safety factors and design',
 must:'Calculate SFs using SF = ultimate load (stress) ÷ allowable load (stress); calculate maximum intended loads; and design structures with an SF.',
 html:`
<div class="key"><b>SF = ultimate load ÷ allowable load</b> (or ultimate stress ÷ allowable stress). <b>Allowable load = ultimate load ÷ SF.</b></div>
<div class="ex"><b class="l">Worked example 1.</b> A rope breaks at 48 kN. SF required = 6. Allowable load = 48 ÷ 6 = <b>8 kN</b>.</div>
<div class="ex"><b class="l">Worked example 2: from stress.</b> A steel bar of area 200 mm² has UTS 400 MPa. Ultimate load = 400 × 10⁶ × 200 × 10⁻⁶ = 80 000 N = 80 kN. With SF 2.5, allowable load = 80 ÷ 2.5 = <b>32 kN</b>.</div>
<div class="ex"><b class="l">Worked example 3: design for an SF.</b> A cable must carry 12 kN with SF 4 and the steel UTS is 400 MPa. Required ultimate load = 12 × 4 = 48 kN. Area = 48 000 ÷ 400×10⁶ = 1.2×10⁻⁴ m² = <b>120 mm²</b> minimum.</div>
<h3>Choosing an SF</h3>
<div class="tw"><table class="t"><tr><th>Higher SF when</th><th>Lower SF when</th></tr><tr><td>Failure would cause injury or death</td><td>Failure is not dangerous</td></tr><tr><td>Material is variable (timber, castings)</td><td>Material is consistent and tested</td></tr><tr><td>Loads are uncertain or dynamic</td><td>Loads are well known</td></tr><tr><td>Environment is corrosive or fatigue is likely</td><td>Environment is controlled</td></tr><tr><td>Weight and cost are less important</td><td>Weight is critical (aircraft, SF about 1.2 to 1.5)</td></tr></table></div>
<p>SF of 1 means no margin. SF below 1 means the structure fails at its design load.</p>
<div class="tip"><b>Exam tip.</b> Check units: N, kN, Pa, MPa. Say what the SF means (“it can carry 4 times the working load”).</div>`}
],

cards:[
['Structure','Parts arranged to support a load, protect, or hold a shape.'],
['Dead load','The permanent weight of a structure.'],
['Live load','A temporary load such as people or goods.'],
['Dynamic load','A load that changes rapidly, such as wind or impact.'],
['Compression','A force that squashes a material.'],
['Tension','A force that stretches a material.'],
['Shear','Forces that slide layers of a material past each other.'],
['Torsion','A twisting force.'],
['Bending','A force that puts one side in tension and the other in compression.'],
['Stress','Force per unit area (σ = F ÷ A).'],
['Strain','Extension divided by original length.'],
['Young’s modulus','Stress divided by strain in the elastic region; a measure of stiffness.'],
['Yield strength','The stress at which permanent deformation begins.'],
['Ultimate strength','The maximum stress a material can carry.'],
['Fracture point','Where a material breaks on a stress–strain graph.'],
['Elastic region','The part where the material returns to its shape.'],
['Plastic region','The part with permanent deformation.'],
['Ductile','Able to stretch a long way before breaking.'],
['Brittle','Breaks with little deformation.'],
['Fatigue','Weakening and cracking from repeated loading.'],
['Stress concentration','A local rise in stress at sharp corners or holes.'],
['Fillet','A rounded internal corner that reduces stress concentration.'],
['Buckling','Sideways collapse of a slender member in compression.'],
['FEA','Finite element analysis: software that predicts stress and deformation.'],
['Mesh','The small elements into which FEA divides a model.'],
['Boundary conditions','The loads and fixings applied in an FEA model.'],
['Force diagram','A diagram showing all external forces on a structure.'],
['Reaction force','The force at a support that balances the loads.'],
['Moment','The turning effect of a force: force × distance.'],
['Equilibrium','Forces and moments balanced; no movement.'],
['Simply supported beam','A beam resting on a support at each end.'],
['Cantilever','A beam fixed at one end only.'],
['Safety factor','Ultimate load divided by allowable load.'],
['Allowable load','The maximum load a structure is designed to carry.'],
['Ultimate load','The load at which a structure fails.'],
['Strut','A member that resists compression.'],
['Tie','A member that resists tension.'],
['Triangulation','Using triangles to make a frame rigid.'],
['Lamination','Bonding thin layers to increase strength and stability.'],
['Overloading','Applying a load greater than the structure is designed for.']
],

mcq:[
{ref:'3.2.1',q:'Which is the best first step when analysing a structure?',o:['Classify it and identify the loads','Choose a colour','Order materials','Calculate the cost'],a:0,why:'Classification and loads come first.'},
{ref:'3.2.1',q:'A diagonal strut added to a shelf bracket mainly resists…',o:['Bending and racking','Heat','Corrosion','Torsion only'],a:0,why:'It triangulates the frame.',live:true},
{ref:'3.2.1',q:'Books on a shelf are a…',o:['Live load','Dead load','Dynamic impact','Reaction'],a:0,why:'They are a temporary, usually steady load.'},
{ref:'3.2.2',q:'Young’s modulus is…',o:['Stress ÷ strain','Strain ÷ stress','Force × area','Load × length'],a:0,why:'E = σ ÷ ε.',live:true},
{ref:'3.2.2',q:'A stress of 100 MPa gives strain 0.0005. E =',o:['200 GPa','50 GPa','0.2 GPa','20 GPa'],a:0,why:'100 ÷ 0.0005 = 200 000 MPa.',live:true},
{ref:'3.2.2',q:'A steeper straight section means a…',o:['Stiffer material','Weaker material','More ductile material','Lighter material'],a:0,why:'Gradient is E.'},
{ref:'3.2.2',q:'A force of 600 N acts on an area of 3 mm². The stress is…',o:['200 MPa','200 Pa','0.2 MPa','1800 MPa'],a:0,why:'600 ÷ 3×10⁻⁶ = 2×10⁸ Pa.',live:true},
{ref:'3.2.2',q:'A rod 1.0 m long extends 0.5 mm. The strain is…',o:['0.0005','0.5','0.05','5'],a:0,why:'0.0005 ÷ 1.0.'},
{ref:'3.2.2',q:'The highest point of a stress–strain graph is the…',o:['Ultimate strength','Yield point','Origin','Elastic limit'],a:0,why:'UTS.',live:true},
{ref:'3.2.2',q:'A material with a long plastic region before fracture is…',o:['Ductile','Brittle','Elastic only','Rigid'],a:0,why:'It deforms a lot before breaking.'},
{ref:'3.2.3',q:'Sharp internal corners cause…',o:['Stress concentration','Lower stress','Corrosion resistance','Higher modulus'],a:0,why:'Stress rises locally.',live:true},
{ref:'3.2.3',q:'A fillet radius at a corner…',o:['Reduces peak stress','Increases peak stress','Has no effect','Removes loads'],a:0,why:'Rounded corners spread stress.'},
{ref:'3.2.3',q:'In FEA colour maps, red usually shows…',o:['High stress','Low stress','No load','Support'],a:0,why:'Convention.',live:true},
{ref:'3.2.3',q:'FEA divides a model into…',o:['Small elements','Layers of paint','Photographs','Beams only'],a:0,why:'The mesh.'},
{ref:'3.2.3',q:'A limit of FEA is that…',o:['Results depend on correct inputs','It needs no data','It is always exact','It cannot show stress'],a:0,why:'Garbage in, garbage out.',live:true},
{ref:'3.2.3',q:'Failure from repeated cycles of loading is…',o:['Fatigue','Buckling','Torsion','Shear'],a:0,why:'Cracks grow with cycles.'},
{ref:'3.2.4',q:'For a simply supported beam with a central load W, each reaction is…',o:['W/2','W','2W','W/4'],a:0,why:'Symmetry.',live:true},
{ref:'3.2.4',q:'A 4 m beam has a central load 8 kN. The maximum bending moment is…',o:['8 kN·m','32 kN·m','16 kN·m','4 kN·m'],a:0,why:'WL/4 = 8×4/4.'},
{ref:'3.2.4',q:'The bending moment of a cantilever is highest…',o:['At the fixed end','At the free end','At the middle','Nowhere'],a:0,why:'Moment arm is longest there.',live:true},
{ref:'3.2.4',q:'To find a reaction, take moments about…',o:['One support','The load','The sky','Nothing'],a:0,why:'It removes one unknown.'},
{ref:'3.2.4',q:'ΣM = 0 means…',o:['No net turning effect','No weight','No force','No load'],a:0,why:'The structure does not rotate.',live:true},
{ref:'3.2.5',q:'SF =',o:['Ultimate load ÷ allowable load','Allowable ÷ ultimate','Load × area','Stress × strain'],a:0,why:'Definition.',live:true},
{ref:'3.2.5',q:'A cable fails at 30 kN and the SF is 5. The allowable load is…',o:['6 kN','150 kN','35 kN','25 kN'],a:0,why:'30 ÷ 5.'},
{ref:'3.2.5',q:'A rod of area 100 mm² has UTS 300 MPa. The ultimate load is…',o:['30 kN','3 kN','300 kN','30 N'],a:0,why:'300×10⁶ × 100×10⁻⁶ = 30 000 N.',live:true},
{ref:'3.2.5',q:'SF of 1 means…',o:['No margin','Very safe','Twice as strong','Failure only above double'],a:0,why:'Ultimate equals allowable.'},
{ref:'3.2.5',q:'Which usually needs the highest SF?',o:['A climbing rope','An aircraft panel','A toy','A lamp'],a:0,why:'Failure is critical and loads are dynamic.',live:true},
{ref:'3.2.5',q:'Timber structures have high SFs because timber is…',o:['Variable with defects','Always weak','Ductile','Dense'],a:0,why:'Knots and defects.'},
{ref:'3.2.5',q:'Required ultimate load for 5 kN working load at SF 3 is…',o:['15 kN','1.7 kN','8 kN','2 kN'],a:0,why:'5 × 3.',live:true},
{ref:'3.2.1',q:'Which strengthening method uses layers of material bonded together?',o:['Lamination','Casting','Anodising','Welding'],a:0,why:'Like plywood.'}
],

fib:[
{ref:'3.2.2',t:'Young’s modulus is [[stress]] divided by strain.'},
{ref:'3.2.2',t:'Strain is the extension divided by the original [[length]].'},
{ref:'3.2.2',t:'The stress at which permanent deformation begins is the [[yield]] strength.'},
{ref:'3.2.2',t:'The highest stress on a stress–strain graph is the [[ultimate]] strength.'},
{ref:'3.2.2',t:'A [[stiff]] material has a high Young’s modulus.'},
{ref:'3.2.3',t:'Sharp corners cause stress [[concentration]].'},
{ref:'3.2.3',t:'FEA divides a model into a [[mesh]] of small elements.'},
{ref:'3.2.3',t:'In an FEA map, [[red]] normally shows the highest stress.'},
{ref:'3.2.3',t:'Failure caused by repeated loading is called [[fatigue]].'},
{ref:'3.2.4',t:'A force diagram shows all [[external]] forces on a structure.'},
{ref:'3.2.4',t:'In equilibrium the sum of [[moments]] is zero.'},
{ref:'3.2.4',t:'A [[cantilever]] beam has the highest bending moment at its fixed end.'},
{ref:'3.2.5',t:'Safety factor = ultimate load divided by [[allowable]] load.'},
{ref:'3.2.5',t:'An SF of [[1]] means there is no margin for overloading.'},
{ref:'3.2.5',t:'Allowable load = ultimate load ÷ [[SF|safety factor]].'}
],

theory:[
{ref:'3.2.1',cmd:'Analyse',marks:5,q:'Analyse the forces in a wall-mounted shelf bracket carrying books, and suggest one way to strengthen it.',
 pts:['The books give a <b>downward load</b> on the shelf and bracket [1]','The bracket acts as a <b>cantilever</b> fixed to the wall [1]','The <b>upper part</b> is in tension and the <b>lower diagonal</b> in compression [1]','The wall fixings resist <b>shear and pull-out</b> forces [1]','Strengthen by adding a <b>diagonal strut</b> or thicker section or more screws [1]'],
 award:'Award [1] for each valid point up to [5 max].',kw:['cantilever','tension','compression','shear','strut'],acc:'',tip:'Load, supports, member forces, weak point, fix.'},
{ref:'3.2.2',cmd:'Apply',marks:4,q:'A steel rod of area 25 mm² and length 1.5 m carries a tensile force of 5 kN and extends by 1.5 mm. Apply the data to calculate the stress, strain and Young’s modulus.',
 pts:['Stress = 5000 ÷ 25×10⁻⁶ = <b>200 MPa</b> [1]','Strain = 0.0015 ÷ 1.5 = <b>0.001</b> [1]','E = 200×10⁶ ÷ 0.001 [1]','= <b>200 GPa</b> [1]'],
 award:'Award [1] for each step.',kw:['200 MPa','0.001','200 GPa'],acc:'Units required.',tip:'Convert mm² to m².'},
{ref:'3.2.2',cmd:'Describe',marks:5,q:'Describe how Young’s modulus, yield strength, ultimate strength and fracture are identified on a stress–strain graph.',
 pts:['<b>Young’s modulus</b>: gradient of the initial straight line [1]','<b>Yield strength</b>: the stress where the line first curves and plastic deformation begins [1]','<b>Ultimate strength</b>: the highest point of the curve [1]','<b>Fracture</b>: the end of the curve where the material breaks [1]','A long gap between UTS and fracture means ductility [1]'],
 award:'Award [1] for each valid point up to [5 max].',kw:['gradient','yield','highest point','fracture','ductile'],acc:'Accept a labelled sketch.',tip:'Work along the curve.'},
{ref:'3.2.2',cmd:'Compare',marks:0,q:'',pts:[],award:'',kw:[],acc:'',tip:''},
{ref:'3.2.3',cmd:'Explain',marks:4,q:'Explain two reasons why a plastic chair leg might fail at a sharp internal corner.',
 pts:['Sharp corners cause <b>stress concentration</b> [1]','The local stress exceeds the strength even if the average stress is safe [1]','Repeated loading causes <b>fatigue cracks</b> to start at the corner [1]','A brittle plastic cannot yield to share the load [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['stress concentration','fatigue','crack','brittle'],acc:'',tip:'Shape and material.'},
{ref:'3.2.3',cmd:'Explain',marks:4,q:'Explain how FEA could be used to improve a bracket design before manufacture.',
 pts:['The CAD model is meshed and <b>loads and fixings</b> are applied [1]','The colour map shows the <b>highest stress locations</b> [1]','The designer adds a fillet or thickens the section and <b>re-runs</b> the analysis [1]','This saves cost compared with building and breaking prototypes [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['mesh','colour map','fillet','re-run','prototypes'],acc:'',tip:'Describe the loop.'},
{ref:'3.2.3',cmd:'Evaluate',marks:5,q:'Evaluate the use of FEA rather than physical testing alone to check a structure.',
 pts:['Strength: <b>fast and cheap</b> to test many designs [1]','Strength: shows <b>stress throughout</b> the part, not just failure [1]','Limitation: depends on <b>accurate inputs and mesh</b> [1]','Limitation: may not model defects, fatigue and manufacture [1]','Judgement: use FEA to refine, then confirm with a physical test [1]'],
 award:'Award [1] for each valid point up to [5 max].',kw:['fast','stress','inputs','defects','judgement'],acc:'',tip:'Balance.'},
{ref:'3.2.4',cmd:'Apply',marks:4,q:'A 3 m simply supported plank carries loads of 400 N at 1 m from A and 600 N at 2 m from A. Apply moments to calculate the reactions at A and B.',
 pts:['Moments about A: R<sub>B</sub> × 3 = 400×1 + 600×2 [1]','= 1600 [1]','R<sub>B</sub> = <b>533 N</b> [1]','R<sub>A</sub> = 1000 − 533 = <b>467 N</b> [1]'],
 award:'Award [1] per step.',kw:['moments','533 N','467 N'],acc:'Accept 533.3 and 466.7.',tip:'Take moments about A.'},
{ref:'3.2.4',cmd:'Apply',marks:3,q:'A 2.5 m cantilever carries a 600 N load at its free end. Apply the data to calculate the bending moment at the fixed end and state where the maximum occurs.',
 pts:['M = W × L = 600 × 2.5 [1]','= <b>1500 N·m</b> [1]','The maximum is at the <b>fixed end</b> [1]'],
 award:'Award [1] each.',kw:['1500','fixed end'],acc:'',tip:'Force × distance.'},
{ref:'3.2.5',cmd:'Apply',marks:4,q:'A steel bar has a cross-section of 150 mm² and UTS of 420 MPa. Apply the data to calculate the ultimate load and the allowable load when SF = 3.',
 pts:['Ultimate load = 420×10⁶ × 150×10⁻⁶ [1]','= <b>63 000 N (63 kN)</b> [1]','Allowable load = 63 ÷ 3 [1]','= <b>21 kN</b> [1]'],
 award:'Award [1] per step.',kw:['63 kN','21 kN'],acc:'',tip:'Stress × area then ÷ SF.'},
{ref:'3.2.5',cmd:'Explain',marks:4,q:'Explain why a climbing rope has a higher safety factor than an aircraft wing spar.',
 pts:['A rope’s loads are <b>highly variable and dynamic</b> (falls) [1]','Rope material is <b>affected by wear, UV and knots</b> [1]','Failure is <b>fatal</b> and cannot be inspected each use [1]','An aircraft is <b>weight-critical</b> and heavily tested and inspected, so a low SF is acceptable [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['dynamic','wear','fatal','weight','inspected'],acc:'',tip:'Uncertainty and consequence.'},
{ref:'3.2.5',cmd:'Design',marks:4,q:'A cable must safely carry 9 kN with a safety factor of 4. The steel has a UTS of 360 MPa. Design the minimum cross-sectional area of the cable.',
 pts:['Required ultimate load = 9 × 4 = <b>36 kN</b> [1]','Area = force ÷ stress [1]','= 36 000 ÷ 360×10⁶ [1]','= 1.0×10⁻⁴ m² = <b>100 mm²</b> [1]'],
 award:'Award [1] per step.',kw:['36 kN','100 mm²'],acc:'',tip:'Work back from the SF.'}
].filter(q=>q.q),

practice:[
{id:'cs1',title:'Case study 1: A garden bench seat',paper:'Paper 2 style · HL',
 scenario:`<p>A garden bench has a 2.4 m timber seat plank simply supported at both ends on metal brackets. Two people sit on it as shown in Figure 1. Lab tests on the plank show that it fails under a total central load of 6000 N. The designer must check the reactions and safety factor. Data is illustrative.</p>`,
 fig:beam(2.4,[[0.6,'800 N'],[1.8,'700 N']],['Reaction A','Reaction B'],'Seat plank with an 800 newton load 0.6 metres from A and a 700 newton load 1.8 metres from A'),
 cap:'Figure 1: Force diagram for the seat plank.',
 table:`<table class="t"><tr><th colspan="2">Table 1: Test data</th></tr><tr><td>Plank failure load</td><td>6000 N</td></tr><tr><td>Required SF</td><td>4</td></tr><tr><td>Plank</td><td>Pine, 2.4 m</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:4,ref:'3.2.4',q:'Apply moments about A to calculate R<sub>B</sub> and R<sub>A</sub>.',award:'Award [1] per step.',pts:['R<sub>B</sub> × 2.4 = 800×0.6 + 700×1.8 [1]','= 480 + 1260 = 1740 [1]','R<sub>B</sub> = <b>725 N</b> [1]','R<sub>A</sub> = 1500 − 725 = <b>775 N</b> [1]'],acc:'',kw:['725 N','775 N'],tip:'Moments about A.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.2.5',q:'Apply the data to calculate the allowable load and the actual safety factor if the plank carries the two people (1500 N).',award:'Award [1] per step.',pts:['Allowable load = 6000 ÷ 4 = <b>1500 N</b> [1]','Actual SF = 6000 ÷ 1500 [1]','= <b>4</b> [1]'],acc:'',kw:['1500 N','4'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.2.5',q:'Explain why the designer chooses an SF of 4 for a timber bench rather than 1.5.',award:'Award [1] each up to [3 max].',pts:['Timber is <b>variable</b> with knots and defects [1]','Loads vary: people jump or stand and the bench is outdoors with <b>rot and moisture</b> [1]','Failure could injure a user [1]'],acc:'',kw:['variable','defects','rot','injure'],tip:''},
 {l:'(d)',cmd:'Suggest',marks:0,ref:'3.2.1',q:'',award:'',pts:[],acc:'',kw:[],tip:''},
 {l:'(d)',cmd:'Outline',marks:3,ref:'3.2.1',q:'Outline one way to strengthen the bench if the seat deflects too much.',award:'Award [1] each up to [3 max].',pts:['Add a <b>central support or strut</b> beneath the plank [1]','This shortens the span, <b>reducing bending</b> [1]','Or use a deeper or laminated plank [1]'],acc:'',kw:['support','span','laminated'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.2.5',q:'Evaluate whether an SF of 4 is appropriate for the plank if three adults sit at once (total 2400 N).',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['Allowable load is <b>1500 N</b>, so 2400 N is above it [1]','Actual SF = 6000 ÷ 2400 = <b>2.5</b>, below the design SF [1]','But the plank has not failed and the margin is still above 1 [1]','Three adults is a likely use on a public bench, so the design should consider it [1]','Decision: redesign with a central support or stronger plank to restore SF 4 at 2400 N [1]'],acc:'',kw:['2.5','1500 N','central support','decision'],tip:''}
 ].filter(p=>p.q)},

{id:'cs2',title:'Case study 2: Choosing a material for a tie rod',paper:'Paper 2 style · HL',
 scenario:`<p>A designer compares two materials for a tie rod in a canopy: a mild steel and an aluminium alloy. The rod has a cross-section of 300 mm² and carries a working tensile force of 36 kN. The test data are in Table 2 and Figure 2. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'Steel',pts:[[0,0],[0.125,250],[2,260],[8,350],[18,400],[26,340]]},{name:'Alloy',pts:[[0,0],[0.4,275],[2,285],[6,305],[10,310],[13,270]]}],{x0:0,x1:28,y0:0,y1:480,xl:'Strain (%)',yl:'Stress (MPa)',h:270,title:'Stress–strain graphs'}),
 cap:'Figure 2: Stress against strain for the two materials.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Material data</th></tr><tr><th></th><th>Steel</th><th>Aluminium alloy</th></tr><tr><td>Young’s modulus</td><td>200 GPa</td><td>70 GPa</td></tr><tr><td>Yield strength</td><td>250 MPa</td><td>275 MPa</td></tr><tr><td>UTS</td><td>400 MPa</td><td>310 MPa</td></tr><tr><td>Density (kg/m³)</td><td>7800</td><td>2700</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.2.2',q:'Apply the working load to calculate the stress in the rod.',award:'Award [1] each.',pts:['Area = 300×10⁻⁶ m² [1]','Stress = 36 000 ÷ 300×10⁻⁶ [1]','= <b>120 MPa</b> [1]'],acc:'',kw:['120 MPa'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.2.2',q:'Apply Hooke’s law to calculate the strain and the extension of a 2.0 m steel rod at this stress.',award:'Award [1] each.',pts:['Strain = σ ÷ E = 120×10⁶ ÷ 200×10⁹ [1]','= <b>0.0006</b> [1]','Extension = 0.0006 × 2.0 = <b>1.2 mm</b> [1]'],acc:'',kw:['0.0006','1.2 mm'],tip:''},
 {l:'(c)',cmd:'Apply',marks:3,ref:'3.2.5',q:'Apply the data to calculate the safety factor of each rod based on UTS and working stress (120 MPa).',award:'Award [1] each.',pts:['Steel: 400 ÷ 120 = <b>3.3</b> [1]','Alloy: 310 ÷ 120 = <b>2.6</b> [1]','Both are above 1 but steel has the larger margin [1]'],acc:'',kw:['3.3','2.6'],tip:''},
 {l:'(d)',cmd:'Compare',marks:0,ref:'3.2.2',q:'',award:'',pts:[],acc:'',kw:[],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.2',q:'Explain what Figure 2 shows about the ductility of the two materials.',award:'Award [1] each up to [3 max].',pts:['Steel has a <b>long plastic region</b> (to about 26% strain) [1]','The alloy’s curve ends earlier (about 13%) [1]','So steel is more ductile and gives more warning before fracture [1]'],acc:'',kw:['plastic region','26%','13%','warning'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.2.5',q:'Evaluate which material is better for the canopy tie rod.',award:'Award [1] each. Reward a decision.',pts:['Steel has higher SF (3.3) and E, so it <b>stretches less</b> [1]','Steel is more ductile and shows warning of overloading [1]','Alloy is <b>much lighter</b> (2700 against 7800 kg/m³), easier to install [1]','Alloy resists corrosion, so less maintenance outdoors [1]','But alloy stretches 3 times more (E 70 against 200 GPa) and has the lower SF [1]','Decision: steel (galvanised) if stiffness and safety matter; alloy if weight and corrosion matter [1]'],acc:'',kw:['SF','stretches','ductile','lighter','corrosion','decision'],tip:''}
 ].filter(p=>p.q)},

{id:'cs3',title:'Case study 3: Analysing a failed bracket',paper:'Paper 2 style · HL',
 scenario:`<p>A steel L-bracket on a shop display cracked at the inside corner. The company runs FEA on the original design and on three redesigns with different corner radii. The bracket is made from steel with yield strength 200 MPa. Figure 3 shows the FEA map of the original design. The results for each redesign are in Table 3. Data is illustrative.</p>`,
 fig:fea,
 cap:'Figure 3: FEA colour map of the original bracket.',
 table:`<table class="t"><tr><th colspan="3">Table 3: FEA results</th></tr><tr><th>Corner radius (mm)</th><th>Peak stress (MPa)</th><th>SF on yield</th></tr><tr><td>0 (sharp)</td><td>240</td><td>?</td></tr><tr><td>2</td><td>160</td><td>?</td></tr><tr><td>5</td><td>110</td><td>?</td></tr><tr><td>10</td><td>85</td><td>?</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'3.2.3',q:'Identify where the highest stress occurs in Figure 3 and the likely failure mode.',award:'Award [1] each.',pts:['At the <b>inside corner</b> [1]','<b>Cracking</b> or yielding from stress concentration [1]'],acc:'',kw:['inside corner','crack'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.2.5',q:'Apply the yield strength to calculate the safety factor on yield for the sharp corner and for the 5 mm radius.',award:'Award [1] each.',pts:['SF = yield ÷ peak stress [1]','Sharp: 200 ÷ 240 = <b>0.83</b> [1]','5 mm: 200 ÷ 110 = <b>1.8</b> [1]'],acc:'Accept 1.82.',kw:['0.83','1.8'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.2.3',q:'Explain why the original bracket failed, using Table 3.',award:'Award [1] each up to [3 max].',pts:['Peak stress 240 MPa was <b>above the yield strength</b> (200 MPa) [1]','SF below 1 means yielding at the design load [1]','The sharp corner caused <b>stress concentration</b> [1]'],acc:'',kw:['240 MPa','200 MPa','stress concentration'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.1',q:'Explain how increasing the corner radius improves the bracket.',award:'Award [1] each up to [3 max].',pts:['A rounded corner <b>spreads the stress</b> over a larger area [1]','Peak stress falls from 240 to 110 MPa at 5 mm [1]','This raises the SF and reduces the chance of fatigue cracks [1]'],acc:'',kw:['spreads','110 MPa','fatigue'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.2.3',q:'Evaluate whether the company should rely on FEA results alone to approve the 5 mm radius design.',award:'Award [1] each up to [5 max].',pts:['FEA shows stress throughout and is quick [1]','But results depend on <b>correct loads and fixings</b> [1]','FEA may not model <b>welds, defects and fatigue</b> [1]','A physical <b>load test</b> would confirm the result [1]','Decision: use FEA to select the design then test a prototype [1]'],acc:'',kw:['loads','welds','fatigue','test','decision'],tip:''}
 ].filter(p=>p.q)}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.2.2',q:'State the formula for Young’s modulus.',award:'Award [1].',pts:['<b>E = stress ÷ strain</b> [1]'],acc:'',kw:['stress','strain'],tip:''},
 {l:'2',cmd:'Apply',marks:2,ref:'3.2.2',q:'A rod of area 40 mm² carries 8 kN. Apply the data to calculate the stress.',award:'Award [1] each.',pts:['8000 ÷ 40×10⁻⁶ [1]','= <b>200 MPa</b> [1]'],acc:'',kw:['200 MPa'],tip:''},
 {l:'3',cmd:'Identify',marks:1,ref:'3.2.3',q:'Identify one design feature that causes stress concentration.',award:'Award [1].',pts:['<b>Sharp internal corner</b> (or a hole or notch) [1]'],acc:'',kw:['sharp','hole'],tip:''},
 {l:'4',cmd:'Outline',marks:2,ref:'3.2.3',q:'Outline what FEA is.',award:'Award [1] each.',pts:['Software that divides a model into <b>small elements</b> [1]','…and calculates the <b>stress and deformation</b> under loads [1]'],acc:'',kw:['elements','stress'],tip:''},
 {l:'5',cmd:'Apply',marks:2,ref:'3.2.4',q:'A simply supported 5 m beam has a central load of 10 kN. Apply the data to calculate the maximum bending moment (WL/4).',award:'Award [1] each.',pts:['10 × 5 ÷ 4 [1]','= <b>12.5 kN·m</b> [1]'],acc:'',kw:['12.5'],tip:''},
 {l:'6',cmd:'Apply',marks:2,ref:'3.2.5',q:'A hook fails at 45 kN and has an allowable load of 9 kN. Apply the data to calculate the safety factor.',award:'Award [1] each.',pts:['45 ÷ 9 [1]','= <b>5</b> [1]'],acc:'',kw:['5'],tip:''},
 {l:'7',cmd:'Explain',marks:2,ref:'3.2.5',q:'Explain why an SF of 1 is not acceptable for a footbridge.',award:'Award [1] each.',pts:['There is <b>no margin</b> for overloading or defects [1]','Failure could cause <b>injury or death</b> [1]'],acc:'',kw:['no margin','injury'],tip:''},
 {l:'8',cmd:'Outline',marks:2,ref:'3.2.1',q:'Outline how a strut strengthens a frame.',award:'Award [1] each.',pts:['It forms <b>triangles</b>, making the frame rigid [1]','It carries <b>compression</b> and reduces bending [1]'],acc:'',kw:['triangles','compression'],tip:''}
 ]},

paper:[]
};
})();
