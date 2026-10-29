window.TOPICS=window.TOPICS||{};
(function(){
/* small custom figures */
const beamFig=(()=>{
 const t=(x,y,s,a)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}">${s}</text>`;
 const beam=(x,y,w)=>`<rect x="${x}" y="${y}" width="${w}" height="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
 const pin=(x,y)=>`<path d="M${x} ${y} l-9 15 h18 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`;
 const roller=(x,y)=>`<path d="M${x} ${y} l-9 12 h18 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x-4}" cy="${y+16}" r="3" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="${x+4}" cy="${y+16}" r="3" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
 const wall=(x,y,h)=>`<rect x="${x}" y="${y}" width="12" height="${h}" fill="var(--ink)" opacity=".75"/>`;
 const load=(x,y)=>`<line x1="${x}" y1="${y}" x2="${x}" y2="${y+24}" stroke="var(--bad)" stroke-width="2.5" marker-end="url(#ar)"/>`;
 let b=`<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--bad)"/></marker></defs>`;
 /* a simply supported */
 b+=t(130,16,'Simply supported',  'middle')+beam(50,60,160)+pin(60,70)+roller(200,70)+load(130,28);
 /* b fixed */
 b+=t(390,16,'Fixed beam')+wall(298,38,60)+beam(310,60,160)+wall(470,38,60)+load(390,28);
 /* c cantilever */
 b+=t(130,136,'Cantilever')+wall(48,118,64)+beam(60,140,150)+load(205,108);
 /* d continuous */
 b+=t(390,136,'Continuously supported')+beam(300,150,200)+pin(310,160)+roller(400,160)+roller(490,160)+load(350,118)+load(445,118);
 /* e column */
 b+=t(130,206,'Column (carries compression)')+`<rect x="116" y="218" width="28" height="64" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="100" y="282" width="60" height="8" fill="var(--ink)" opacity=".75"/><line x1="130" y1="200" x2="130" y2="216" stroke="var(--bad)" stroke-width="2.5" marker-end="url(#ar)"/>`;
 b+=t(390,206,'Beams carry bending; columns carry compression');
 b+=`<rect x="300" y="222" width="180" height="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="310" y="232" width="14" height="58" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="456" y="232" width="14" height="58" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(390,258,'beam')}${t(390,274,'columns below')}`;
 return `<div class="fig"><svg viewBox="0 0 520 300" role="img" aria-label="Types of beam and a column">${b}</svg><p class="cap">Types of beam: simply supported, fixed, cantilever, continuous, and a column.</p></div>`;
})();
const trussFig=(()=>{
 const L=(a,b,c,d,s)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${s||'var(--ink)'}" stroke-width="${s?3.5:3}"/>`;
 let b='';
 /* truss: bottom nodes x 60..460 step 100, apex top nodes */
 b+=L(60,170,460,170);
 b+=L(60,170,160,90)+L(160,90,260,90)+L(260,90,360,90)+L(360,90,460,170);
 b+=L(160,90,160,170,'var(--blue)')+L(260,90,260,170,'var(--blue)')+L(360,90,360,170,'var(--blue)');
 b+=L(160,90,260,170,'var(--bad)')+L(260,170,360,90,'var(--bad)');
 [[60,170],[160,90],[260,90],[360,90],[460,170],[160,170],[260,170],[360,170]].forEach(p=>b+=`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`);
 b+=`<text x="260" y="70" text-anchor="middle">Top chord</text><text x="260" y="196" text-anchor="middle">Bottom chord</text>`;
 b+=`<path d="M60 170 l-8 14 h16 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><path d="M460 170 l-8 14 h16 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`;
 return `<svg viewBox="0 0 520 215" role="img" aria-label="A roof truss made of triangles with vertical and diagonal members">${b}</svg>`;
})();

window.TOPICS['a3-2']={
id:'a3-2',code:'A3.2',title:'Introduction to structural systems',level:'HL',hours:6,
guiding:'How are structures present in everyday products?',
pptx:'resources/A3_2_HL__Introduction_to_Structural_Systems.pptx',pptxName:'A3.2 Introduction to structural systems (slides)',

notes:[
{id:'s321',ref:'3.2.1',title:'Structures in nature and the built environment',
 must:'Analyse and interpret a variety of human-made and natural structures.',
 html:`
<p>A <b>structure</b> is anything built or formed from interrelated parts that <b>supports a load, protects, or holds a shape</b>. Structures are found everywhere, from eggshells and spider webs to bridges, chairs and phone casings.</p>
<div class="tw"><table class="t"><tr><th>Natural structure</th><th>What it does</th><th>Design lesson</th></tr>
<tr><td>Eggshell</td><td>Thin curved <b>shell</b> that protects the contents and resists compression from the outside</td><td>Curved shells are strong for their weight (domes, helmets)</td></tr>
<tr><td>Bone</td><td>Hollow with a honeycomb inside: strong, stiff and light</td><td>Hollow sections and lattices save material</td></tr>
<tr><td>Tree trunk</td><td>Tapered <b>column</b> with a wide base; flexible in wind</td><td>Wider base and flexible design resist wind and bending</td></tr>
<tr><td>Spider web</td><td>A <b>frame</b> of tension members</td><td>Thin members in tension are efficient</td></tr>
<tr><td>Snail shell</td><td>Spiral <b>shell</b> that spreads weight and protects</td><td>Curves spread forces evenly</td></tr></table></div>
<div class="tw"><table class="t"><tr><th>Human-made structure</th><th>Type</th><th>Why this structure?</th></tr>
<tr><td>Suspension bridge</td><td>Frame with cables in tension</td><td>Long spans with minimal material</td></tr>
<tr><td>Dam</td><td>Mass (solid)</td><td>Its weight resists the water pressure</td></tr>
<tr><td>Drinks can</td><td>Shell</td><td>Thin wall, strong when sealed and pressurised</td></tr>
<tr><td>Bicycle frame</td><td>Frame</td><td>Triangles give a stiff, light structure</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> “Analyse” a structure by breaking it into <b>parts</b>, saying which <b>forces</b> each part resists and <b>why the shape and material suit it</b>.</div>`},

{id:'s322',ref:'3.2.2',title:'Frame, shell and solid (mass) structures',
 must:'Discuss frame, shell and solid structures, and how they are used in the design of products.',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Frame</th><th>Shell</th><th>Solid (mass)</th></tr>
<tr><td><b>Idea</b></td><td>Individual members joined to form a skeleton. Each part alone is not strong enough, together they carry the load.</td><td>Thin material that forms the outside and carries the load, creating an enclosed space.</td><td>Relies on the weight and bulk of material for strength.</td></tr>
<tr><td><b>Examples</b></td><td>Bicycle frame, scaffolding, pylon, building skeleton, chair frame</td><td>Egg, helmet, car body panel, bottle, aircraft fuselage, Sydney Opera House roofs</td><td>Dam, stone wall, brick, hammer head, concrete block</td></tr>
<tr><td><b>Advantages</b></td><td>Strong for the weight; can span large gaps; cladding can be changed for appearance</td><td>High strength compared with its own weight; protects the inside; can be made from thin sheet; attractive forms</td><td>Very strong in compression; stable; simple</td></tr>
<tr><td><b>Disadvantages</b></td><td>Needs many joints; can be complex to assemble; cladding adds weight</td><td>Can dent or buckle if the skin is damaged; needs tooling to form</td><td>Heavy; uses a lot of material; costly to transport</td></tr>
<tr><td><b>Suited manufacturing</b></td><td>Cutting, welding, jointing</td><td>Moulding, pressing, deep drawing, blow moulding</td><td>Casting, pouring, building up</td></tr></table></div>
<div class="cols"><div class="box"><h4>Combination: car body</h4><p>A car uses a <b>frame</b> (chassis or monocoque) for strength and a <b>shell</b> (body panels) for protection and shape. Aircraft use a frame of ribs and stringers inside a skin.</p></div>
<div class="box"><h4>Strengthening a shell</h4><p>Thin sheet can be strengthened by <b>curving, corrugating or folding</b> it, for example a corrugated roof or a folded plate.</p></div></div>
<div class="tip"><b>Exam tip.</b> “Discuss” needs advantages <b>and</b> disadvantages and an example: say why each type suits the product’s function, weight and manufacturing method.</div>`},

{id:'s323',ref:'3.2.3',title:'Beams and columns',
 must:'Identify simply supported beams, fixed beams, cantilever beams, continuously supported beams and columns, and explain their function.',
 html:`
${beamFig}
<div class="tw"><table class="t"><tr><th>Member</th><th>Supports</th><th>Behaviour</th><th>Examples</th></tr>
<tr><td><b>Simply supported beam</b></td><td>Rests on a support at each end (one pinned, one roller); free to rotate</td><td>Bending and shear; maximum bending moment near the middle</td><td>Planks over a stream, floor joists, railway sleepers</td></tr>
<tr><td><b>Fixed beam</b></td><td>Rigidly clamped at both ends; no rotation</td><td>Stiffer, deflects less and carries more than a simply supported beam; costlier to make</td><td>Beams built into walls, rigid bridge decks</td></tr>
<tr><td><b>Cantilever beam</b></td><td>Fixed at one end only; the other is free</td><td>Greatest bending moment and deflection at the fixed end and tip respectively; uses less material</td><td>Balcony, diving board, crane jib, street sign arm</td></tr>
<tr><td><b>Continuously supported beam</b></td><td>Rests on three or more supports</td><td>Smaller bending moments than simple spans; economical for long runs</td><td>Multi-span bridges, elevated roads</td></tr>
<tr><td><b>Column</b></td><td>A vertical member carrying load along its length</td><td>Carries <b>compression</b>; short columns crush, slender columns <b>buckle</b></td><td>Pillars, table legs, bridge piers</td></tr></table></div>
<div class="key">A <b>beam</b> resists <b>bending</b> from loads that act across its length. A <b>column</b> resists <b>compression</b> from loads along its length.</div>
<div class="tip"><b>Exam tip.</b> Describe the support, then the main force, then an example.</div>`},

{id:'s324',ref:'3.2.4',title:'Forces on structures',
 must:'Explain how compression, tension, torsion, bending and shear forces act within a structure, and differentiate between static and dynamic forces.',
 html:`
<div class="tw"><table class="t"><tr><th>Force</th><th>Effect</th><th>Example</th></tr>
<tr><td><b>Compression</b></td><td>Pushes or squashes the material</td><td>Column carrying a roof; legs of a stool</td></tr>
<tr><td><b>Tension</b></td><td>Pulls or stretches the material</td><td>Cable of a suspension bridge; rope on a swing</td></tr>
<tr><td><b>Torsion</b></td><td>Twists the material about its axis</td><td>Screwdriver shaft; drive shaft; wringing a cloth</td></tr>
<tr><td><b>Bending</b></td><td>Combination: one side is in tension, the other in compression</td><td>Shelf with books; diving board</td></tr>
<tr><td><b>Shear</b></td><td>Two parallel forces act in opposite directions and slide layers past each other</td><td>Scissors; bolt holding two plates; paper punch</td></tr></table></div>
<h3>Static and dynamic forces</h3>
<div class="tw"><table class="t"><tr><th></th><th>Static</th><th>Dynamic</th></tr>
<tr><td>Definition</td><td>Applied slowly, constant over time</td><td>Change rapidly in size or direction (sudden, repeated or moving)</td></tr>
<tr><td>Types of load</td><td>Dead load (own weight, permanent) and live load (people, furniture)</td><td>Impact, vibration, wind, earthquake, moving vehicles</td></tr>
<tr><td>Example</td><td>A book on a shelf; a person standing on a bridge</td><td>Wind on a tower; vehicles crossing a bridge; a hammer striking</td></tr>
<tr><td>Design</td><td>Simpler to calculate</td><td>Can cause <b>fatigue</b> and cracks; needs bigger safety factors, damping and bracing</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Give a definition, show where the force acts in a named product, and say whether it is static or dynamic. Remember that bending contains both tension and compression.</div>`},

{id:'s325',ref:'3.2.5',title:'Stress, strain and Young’s modulus',
 must:'Describe the relationship between stress and strain, and outline Young’s modulus, yield strength, ultimate strength and fracture on a stress–strain graph.',
 html:`
<div class="cols"><div class="box"><h4>Stress (σ)</h4><p>Force per unit area: <b>σ = F ÷ A</b>. Unit: pascal (Pa = N/m²), often MPa.</p></div>
<div class="box"><h4>Strain (ε)</h4><p>Change in length per original length: <b>ε = ΔL ÷ L</b>. No unit (or %).</p></div></div>
<div class="key"><b>Young’s modulus (E) = stress ÷ strain</b>, the gradient of the straight (elastic) part of the graph. It measures <b>stiffness</b>: how much a material resists stretching or compressing. Unit: Pa or GPa.</div>
<h3>Reading a stress–strain graph</h3>
<div class="tw"><table class="t"><tr><th>Feature</th><th>Meaning</th></tr>
<tr><td>Straight line (proportional region)</td><td>Stress is proportional to strain (Hooke’s law). Elastic: the material returns to its original shape. The <b>gradient is Young’s modulus</b>.</td></tr>
<tr><td>Elastic limit / yield point</td><td>Beyond this, the material is permanently deformed. The stress at this point is the <b>yield strength</b>.</td></tr>
<tr><td>Plastic region</td><td>Strain increases quickly for small stress changes; permanent deformation (plastic).</td></tr>
<tr><td>Ultimate strength (UTS)</td><td>The maximum stress the material can withstand.</td></tr>
<tr><td>Fracture</td><td>The material breaks. If the ultimate and fracture points are close together the material is <b>brittle</b>; if far apart, <b>ductile</b>.</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> A steel rod of cross-section 50 mm² and length 2.0 m carries a tensile force of 10 kN and extends by 2.0 mm.<br>Stress = 10 000 ÷ 0.00005 = <b>200 MPa</b>. Strain = 0.002 ÷ 2.0 = <b>0.001</b>. Young’s modulus = 200 × 10⁶ ÷ 0.001 = <b>200 GPa</b>, which matches steel.</div>
<div class="tip"><b>Exam tip.</b> Convert mm² to m² (÷ 1 000 000) and mm to m before dividing, and show units.</div>`},

{id:'s326',ref:'3.2.6',title:'High and low Young’s modulus',
 must:'Compare materials with a high and low Young’s modulus and explain why this is important when designing structures.',
 html:`
<div class="tw"><table class="t"><tr><th>Material</th><th>Young’s modulus (approx.)</th><th>Behaviour under stress</th></tr>
<tr><td>Diamond / ceramics</td><td>Over 400 GPa</td><td>Extremely stiff</td></tr>
<tr><td>Steel</td><td>200 GPa</td><td>Very stiff; small extension</td></tr>
<tr><td>Aluminium</td><td>70 GPa</td><td>About one-third as stiff as steel</td></tr>
<tr><td>Timber (along the grain)</td><td>10 GPa</td><td>Moderate</td></tr>
<tr><td>Polymers (nylon, PE)</td><td>1 to 3 GPa</td><td>Flexible</td></tr>
<tr><td>Rubber</td><td>0.01 to 0.1 GPa</td><td>Very flexible; large strain</td></tr></table></div>
<div class="cols"><div class="box"><h4>High modulus (stiff)</h4><p>Small strain for a given stress. Keeps its shape: bridge girders, aircraft wings, building frames, machine bases. Often <b>brittle</b> or heavy.</p></div>
<div class="box"><h4>Low modulus (flexible)</h4><p>Large strain for the same stress. Absorbs shock and movement: rubber bumpers, running shoes, fishing rods, flexible joints.</p></div></div>
<div class="ex"><b class="l">Worked example.</b> A 100 MPa stress on a 2 m rod gives a strain of 100 MPa ÷ 200 GPa = 0.0005 (extension 1 mm) in steel, but 100 MPa ÷ 70 GPa = 0.00143 (extension 2.9 mm) in aluminium.</div>
<div class="tip"><b>Exam tip.</b> Choice of modulus depends on the function: stiff for shape-holding, flexible for shock-absorbing. Young’s modulus is about stiffness, not strength.</div>`},

{id:'s327',ref:'3.2.7',title:'Equilibrium and failure',
 must:'Describe when a structure is in equilibrium and identify the conditions where a structure will fail.',
 html:`
<p>A structure is in <b>equilibrium</b> when all forces and moments acting on it are balanced, so it does not move or rotate.</p>
<div class="key"><b>Conditions:</b> ΣF<sub>x</sub> = 0 (no net horizontal force), ΣF<sub>y</sub> = 0 (no net vertical force), and ΣM = 0 (no net moment or turning effect).</div>
<div class="ex"><b class="l">Worked example.</b> A 3.0 m simply supported plank carries a 600 N person standing in the middle. By symmetry each support gives 300 N upward. Check moments about the left support: R<sub>B</sub> × 3.0 = 600 × 1.5, so R<sub>B</sub> = 300 N, and R<sub>A</sub> = 600 − 300 = 300 N.</div>
<p>A <b>free body diagram</b> isolates the object and shows every external force as a labelled arrow (weight, reactions, friction, applied loads).</p>
<h3>Supports</h3>
<div class="tw"><table class="t"><tr><th>Support</th><th>Reactions</th><th>Example</th></tr><tr><td>Roller</td><td>One (perpendicular to the surface)</td><td>Bridge end that can expand</td></tr><tr><td>Pinned</td><td>Two (vertical and horizontal); free to rotate</td><td>Door hinge</td></tr><tr><td>Fixed</td><td>Three (vertical, horizontal, moment); no rotation</td><td>Flagpole set in concrete</td></tr></table></div>
<h3>Why structures fail</h3>
<ul class="tight"><li>The load exceeds the material’s strength: <b>fracture</b>, yielding, crushing.</li><li><b>Buckling</b> of slender columns under compression.</li><li>Unbalanced moments: the structure <b>tips or rotates</b> (a base that is too narrow or an overhang that is too long).</li><li><b>Dynamic loads</b>, fatigue, resonance (wind, earthquakes).</li><li>Poor joints, corrosion, or weakened material over time.</li></ul>
<div class="tip"><b>Exam tip.</b> State the three conditions, then link them to a named structure and the consequence if one fails.</div>`},

{id:'s328',ref:'3.2.8',title:'Strengthening techniques',
 must:'Explain how structures can be strengthened by using struts, shape, lamination and composite materials.',
 html:`
${trussFig}
<p class="cap">A roof truss: triangles of top chord, bottom chord, vertical and diagonal members.</p>
<div class="tw"><table class="t"><tr><th>Technique</th><th>How it strengthens</th><th>Examples</th></tr>
<tr><td><b>Struts and ties</b></td><td>A <b>strut</b> resists compression; a <b>tie</b> resists tension. Diagonals turn rectangles into rigid triangles, reduce span and bending, and prevent buckling.</td><td>Roof truss, shelf bracket, Warren truss bridge, bike frame</td></tr>
<tr><td><b>Shape</b></td><td><b>Triangulation</b>: a triangle cannot change shape unless a side changes length. <b>Arch</b>: turns vertical load into compression along the curve, needs abutments to resist outward thrust. <b>Dome</b>: a 3D arch. <b>Corrugation / folding / I-section</b>: adds stiffness without much extra material.</td><td>Crane, Eiffel Tower; Roman aqueduct; Pantheon; corrugated roof; steel I-beam</td></tr>
<tr><td><b>Lamination</b></td><td>Bonding thin layers (often with grain at 90°) gives stability, resists splitting and warping, and stops cracks spreading.</td><td>Plywood, glulam beams, laminated glass, cross-laminated timber</td></tr>
<tr><td><b>Composite materials</b></td><td>Combine materials so each does what it is best at.</td><td>Reinforced concrete (steel takes tension), GRP hull, carbon fibre frame</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> A wooden square frame racks (becomes a parallelogram) when pushed sideways. Adding a diagonal brace makes two triangles, so the shape cannot change without a side stretching or compressing.</div>
<div class="tip"><b>Exam tip.</b> Name the technique, the force it deals with and a product. For an arch say “compression” and for a tie say “tension”.</div>`},

{id:'s329',ref:'3.2.9–3.2.10',title:'Safety factor',
 must:'Define an SF as a ratio of absolute strength to allowable load, explain why structures include an SF, outline what an SF of 1 means and why most structures have an SF above 1.',
 html:`
<div class="key"><b>Safety factor (SF) = absolute strength (failure load) ÷ allowable load (working load).</b></div>
<div class="ex"><b class="l">Worked example.</b> A bridge girder is designed for a working load of 100 kN. The steel fails at 400 kN. SF = 400 ÷ 100 = <b>4</b>.</div>
<ul class="tight"><li><b>SF = 1</b>: the structure can carry only exactly the design load. No margin: any extra load, defect or wear leads to failure.</li><li><b>SF above 1</b> is used for most structures because of <b>uncertainty</b> in material quality, manufacturing defects, loads (misuse, impact, overloading), fatigue, corrosion and ageing, and for <b>safety, legal codes and public trust</b>.</li></ul>
<div class="tw"><table class="t"><tr><th>Application</th><th>Typical SF</th><th>Reason</th></tr>
<tr><td>Aircraft parts</td><td>1.2 to 1.5</td><td>Weight is critical; extensively tested</td></tr>
<tr><td>Steel structures</td><td>1.5 to 2.5</td><td>Consistent, predictable material</td></tr>
<tr><td>Consumer products (chairs, ladders)</td><td>2 to 4</td><td>Variable user loads</td></tr>
<tr><td>Reinforced concrete</td><td>3 to 4</td><td>Variation in casting and curing</td></tr>
<tr><td>Timber structures</td><td>4 to 6</td><td>Natural defects and inconsistency</td></tr>
<tr><td>Ropes, cables, chains</td><td>6 to 10</td><td>High uncertainty and critical safety role</td></tr></table></div>
<h3>Trade-off</h3>
<p>A higher SF means a <b>safer but heavier, costlier</b> structure that uses more material and energy. A lower SF saves material but increases risk. Designers choose the SF according to the <b>consequence of failure</b> and how well the loads and material are known.</p>
<div class="tip"><b>Exam tip.</b> Always show the formula, the substitution and a sensible interpretation (“SF 4 means it could carry four times the working load before failing”).</div>`}
],

cards:[
['Structure','Something built or formed from interrelated parts to support a load, protect or hold a shape.'],
['Frame structure','A skeleton of joined members that carries the load.'],
['Shell structure','A thin outer skin that carries the load and encloses a space.'],
['Solid (mass) structure','A structure that relies on the weight and bulk of its material for strength.'],
['Beam','A member that resists bending from loads across its length.'],
['Column','A vertical member that carries compression along its length.'],
['Simply supported beam','A beam resting on a support at each end, free to rotate.'],
['Fixed beam','A beam rigidly clamped at both ends, preventing rotation.'],
['Cantilever beam','A beam fixed at one end and free at the other.'],
['Continuously supported beam','A beam resting on three or more supports.'],
['Compression','A force that pushes or squashes a material.'],
['Tension','A force that pulls or stretches a material.'],
['Torsion','A force that twists a material.'],
['Bending','A force that causes one side of a member to be in tension and the other in compression.'],
['Shear','Two parallel opposite forces that slide layers of a material past each other.'],
['Static force','A force applied slowly that remains constant.'],
['Dynamic force','A force that changes quickly in size or direction.'],
['Dead load','The permanent weight of a structure itself.'],
['Live load','A temporary load such as people or furniture.'],
['Stress','Force per unit area: σ = F ÷ A.'],
['Strain','Change in length divided by original length.'],
['Young’s modulus','Stress divided by strain in the elastic region; a measure of stiffness.'],
['Yield strength','The stress at which permanent deformation begins.'],
['Ultimate strength','The maximum stress a material can withstand.'],
['Fracture','The point at which a material breaks.'],
['Hooke’s law','In the elastic region, stress is proportional to strain.'],
['Equilibrium','The state in which forces and moments balance, so the structure does not move.'],
['Moment','The turning effect of a force: force × perpendicular distance.'],
['Buckling','Sideways collapse of a slender column under compression.'],
['Strut','A member that resists compression.'],
['Tie','A member that resists tension.'],
['Triangulation','Using triangles to make a frame rigid.'],
['Arch','A curved form that converts vertical loads into compression along the curve.'],
['Lamination','Bonding thin layers together to improve strength and stability.'],
['Safety factor','Absolute strength divided by allowable load.'],
['Allowable load','The maximum load a structure is designed to carry in use.'],
['Free body diagram','A diagram showing an isolated object and all external forces on it.'],
['Roller support','A support giving one reaction, perpendicular to the surface.'],
['Pinned support','A support giving vertical and horizontal reactions but allowing rotation.'],
['Fixed support','A support preventing movement and rotation; gives three reactions.']
],

mcq:[
{ref:'3.2.2',q:'A thin outer skin that carries the load and encloses a space is a…',o:['Frame structure','Shell structure','Solid structure','Cantilever'],a:1,why:'An eggshell or helmet is a shell.',live:true},
{ref:'3.2.2',q:'A dam is mainly a…',o:['Frame','Shell','Mass (solid) structure','Tension structure'],a:2,why:'Its weight resists the water.'},
{ref:'3.2.2',q:'A bicycle frame is an example of a…',o:['Frame structure','Shell structure','Solid structure','Fluid structure'],a:0,why:'Joined tubes form a skeleton.',live:true},
{ref:'3.2.3',q:'A balcony fixed at one end and free at the other is a…',o:['Simply supported beam','Cantilever','Continuous beam','Column'],a:1,why:'One fixed end, one free end.',live:true},
{ref:'3.2.3',q:'Which member mainly carries compression along its length?',o:['Beam','Tie','Column','Cable'],a:2,why:'Columns carry compressive loads.'},
{ref:'3.2.3',q:'A beam on three or more supports is…',o:['Fixed','Continuously supported','Cantilever','Simply supported'],a:1,why:'It extends over several spans.'},
{ref:'3.2.3',q:'Compared with a simply supported beam, a fixed beam…',o:['Is less stiff','Deflects less','Cannot carry load','Needs no supports'],a:1,why:'End fixing prevents rotation, increasing stiffness.',live:true},
{ref:'3.2.4',q:'A rope on a swing is in…',o:['Compression','Tension','Torsion','Shear'],a:1,why:'It is pulled.',live:true},
{ref:'3.2.4',q:'A screwdriver turning a screw puts its shaft in…',o:['Torsion','Compression','Tension only','Shear only'],a:0,why:'Twisting is torsion.'},
{ref:'3.2.4',q:'Scissors cutting paper mainly use…',o:['Shear','Tension','Torsion','Compression'],a:0,why:'Two blades slide past each other.',live:true},
{ref:'3.2.4',q:'Wind on a tall tower is a…',o:['Static force','Dynamic force','Dead load only','Torsion only'],a:1,why:'Wind varies in strength and direction.'},
{ref:'3.2.4',q:'Books resting on a shelf are a…',o:['Dynamic load','Static (live) load','Impact load','Seismic load'],a:1,why:'They are applied slowly and stay constant.',live:true},
{ref:'3.2.5',q:'Stress is…',o:['Force per unit area','Extension per length','Mass per volume','Force × distance'],a:0,why:'σ = F ÷ A.',live:true},
{ref:'3.2.5',q:'Young’s modulus is the…',o:['Gradient of the elastic region of a stress–strain graph','Highest stress','Area under the graph','Strain at fracture'],a:0,why:'E = stress ÷ strain.'},
{ref:'3.2.5',q:'A stress of 300 MPa gives a strain of 0.0015. Young’s modulus is…',o:['200 GPa','450 GPa','0.2 GPa','20 GPa'],a:0,why:'300 ÷ 0.0015 = 200 000 MPa = 200 GPa.',live:true},
{ref:'3.2.5',q:'The point after which a material is permanently deformed is the…',o:['Yield point','Fracture point','Origin','Hooke point'],a:0,why:'Beyond yield the deformation is plastic.'},
{ref:'3.2.5',q:'If the ultimate strength and fracture points are very close, the material is…',o:['Brittle','Ductile','Elastic','Plastic'],a:0,why:'It breaks soon after reaching maximum stress.',live:true},
{ref:'3.2.6',q:'Which material has the highest Young’s modulus?',o:['Rubber','Steel','Nylon','Timber'],a:1,why:'About 200 GPa.'},
{ref:'3.2.6',q:'A running shoe sole should have a…',o:['High modulus','Low modulus','Zero modulus','Very high strength only'],a:1,why:'It must deform to absorb shock.',live:true},
{ref:'3.2.7',q:'For equilibrium, the sum of moments must be…',o:['Positive','Negative','Zero','Equal to the weight'],a:2,why:'ΣM = 0.'},
{ref:'3.2.7',q:'A 300 N weight hangs midway on a plank supported at each end. Each support reaction is…',o:['150 N','300 N','600 N','75 N'],a:0,why:'Symmetry: 300 ÷ 2 = 150 N.',live:true},
{ref:'3.2.7',q:'A tall slender column fails by sideways bending. This is…',o:['Buckling','Shear','Torsion','Creep'],a:0,why:'Slender columns buckle before they crush.'},
{ref:'3.2.8',q:'A strut resists…',o:['Compression','Tension','Torsion only','Heat'],a:0,why:'A tie resists tension.',live:true},
{ref:'3.2.8',q:'Why are triangles used in frames?',o:['They are rigid and cannot change shape without changing side length','They look nice','They are cheaper','They are lighter always'],a:0,why:'Triangulation gives rigidity.'},
{ref:'3.2.8',q:'Plywood is stronger than a single board of the same thickness because of…',o:['Lamination','Casting','Corrosion','Torsion'],a:0,why:'Layers with alternating grain stop splitting and warping.',live:true},
{ref:'3.2.8',q:'In reinforced concrete the steel bars mainly carry…',o:['Tension','Compression','Heat','Torsion only'],a:0,why:'Concrete is weak in tension.'},
{ref:'3.2.9',q:'Safety factor =',o:['Failure load ÷ allowable load','Allowable load ÷ failure load','Load × area','Stress × strain'],a:0,why:'Absolute strength divided by allowable load.',live:true},
{ref:'3.2.9',q:'A rope fails at 12 kN and its allowable load is 2 kN. SF =',o:['6','0.17','24','10'],a:0,why:'12 ÷ 2 = 6.'},
{ref:'3.2.10',q:'An SF of 1 means…',o:['No margin for overloading','Very safe','Twice as strong','Infinite load'],a:0,why:'The structure is designed to carry exactly its working load before failure.',live:true}
],

fib:[
{ref:'3.2.2',t:'A [[shell]] structure encloses a space with a thin skin, whereas a [[frame]] structure uses joined members.'},
{ref:'3.2.3',t:'A [[cantilever]] beam is fixed at one end, and a [[column]] mainly carries compression.'},
{ref:'3.2.4',t:'[[Tension]] pulls a material, [[compression]] pushes it, and [[torsion]] twists it.'},
{ref:'3.2.4',t:'[[Shear]] forces act in opposite parallel directions and slide layers past each other.'},
{ref:'3.2.4',t:'A [[static]] force is applied slowly, while a [[dynamic]] force changes quickly in size or direction.'},
{ref:'3.2.5',t:'Stress is force per unit [[area]] and strain is change in length per original [[length]].'},
{ref:'3.2.5',t:'Young’s [[modulus]] is the gradient of the elastic part of a stress–strain graph.'},
{ref:'3.2.5',t:'The stress at which permanent deformation begins is the [[yield]] strength.'},
{ref:'3.2.6',t:'A material with a [[high]] Young’s modulus is stiff and a material with a [[low]] one is flexible.'},
{ref:'3.2.7',t:'In equilibrium, the sum of forces and the sum of [[moments]] are both zero.'},
{ref:'3.2.7',t:'A slender column under compression may fail by [[buckling]].'},
{ref:'3.2.8',t:'A [[strut]] resists compression and a [[tie]] resists tension.'},
{ref:'3.2.8',t:'[[Triangulation]] makes a frame rigid.'},
{ref:'3.2.8',t:'[[Lamination]] bonds thin layers together, as in plywood.'},
{ref:'3.2.9',t:'Safety factor is the failure load divided by the [[allowable]] load.'}
],

theory:[
{ref:'3.2.1',cmd:'Analyse',marks:4,q:'Analyse an eggshell as a structure.',
 pts:['It is a <b>shell</b> structure: a thin curved skin that encloses a space [1]','The <b>curved shape</b> spreads a load over the whole surface, so compression is carried around the shell [1]','Strong for its weight because the material is <b>thin</b>, so little material is used [1]','It is weak when loaded <b>at a point from inside</b> or with a sharp tap, showing limits of the shell [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['shell','curved','spreads','compression','thin'],acc:'Accept other relevant natural structures if analysed in the same way.',tip:'Break it into shape, material and forces.'},
{ref:'3.2.2',cmd:'Discuss',marks:6,q:'Discuss the use of frame and shell structures in the design of a car body.',
 pts:['<b>Frame</b> (chassis or monocoque): carries the loads, joins the wheels and engine [1]','A frame is strong for its weight and can be built from <b>tubes or pressed members</b>, which are welded together [1]','<b>Shell</b> (body panels): protects passengers, gives shape and aerodynamics [1]','Shell panels are thin sheet, <b>pressed to shape</b> and strengthened by curving or folding [1]','Combining them makes a <b>light, strong structure</b> [1]','Limitations: many joints and more complex assembly; shells can dent; repair costs [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for frame or shell alone.',kw:['frame','shell','chassis','pressed','protect','light'],acc:'Maximum [6].',tip:'Discuss both types and the balance between them.'},
{ref:'3.2.3',cmd:'Describe',marks:4,q:'Describe the difference between a cantilever beam and a simply supported beam, with an example of each.',
 pts:['A <b>cantilever</b> is fixed at one end and free at the other [1]','Example: a balcony or diving board [1]','A <b>simply supported beam</b> rests on supports at both ends and can rotate [1]','Example: a plank across a stream or a floor joist [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['fixed','free end','both ends','example'],acc:'Both types needed.',tip:'Describe supports first, then name one product.'},
{ref:'3.2.4',cmd:'Explain',marks:4,q:'Explain how bending produces both tension and compression in a shelf carrying books.',
 pts:['The load makes the shelf <b>bend downwards</b> [1]','The <b>top surface</b> is squashed (compression) [1]','The <b>bottom surface</b> is stretched (tension) [1]','The centre line experiences little stress (neutral axis), so material can be removed or hollowed, as in an I-beam [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['bend','top','compression','bottom','tension'],acc:'Accept a labelled sketch.',tip:'Say which side is in which state and why.'},
{ref:'3.2.4',cmd:'Explain',marks:3,q:'Explain the difference between static and dynamic forces using a bridge as an example.',
 pts:['<b>Static</b> forces are applied slowly and stay constant, for example the weight of the bridge deck [1]','<b>Dynamic</b> forces change rapidly, for example vehicles crossing or wind gusts [1]','Dynamic loads can cause <b>fatigue and resonance</b>, so need higher safety factors or damping [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['static','constant','dynamic','vehicles','fatigue'],acc:'Both types with a bridge example.',tip:'Contrast definition, example and design consequence.'},
{ref:'3.2.5',cmd:'Apply',marks:4,q:'A rod of cross-sectional area 40 mm² and length 1.5 m is pulled with a force of 8 kN and extends by 1.5 mm. Apply the data to calculate the stress, strain and Young’s modulus.',
 pts:['Area = 40 × 10⁻⁶ m²; stress = 8000 ÷ 0.00004 = <b>200 MPa</b> [1]','Strain = 0.0015 ÷ 1.5 = <b>0.001</b> [1]','E = 200 × 10⁶ ÷ 0.001 [1]','= <b>200 GPa</b> (2 × 10¹¹ Pa), consistent with steel [1]'],
 award:'Award [1] for each step. Follow-through applies.',kw:['200 MPa','0.001','200 GPa'],acc:'Units are required.',tip:'Convert units before dividing.'},
{ref:'3.2.5',cmd:'Describe',marks:5,q:'Describe the key features of a stress–strain graph for a ductile metal.',
 pts:['<b>Straight line</b> at the start: stress proportional to strain, elastic (Hooke’s law) [1]','Gradient = <b>Young’s modulus</b> [1]','<b>Yield point</b>: permanent deformation begins [1]','<b>Ultimate strength</b>: highest stress [1]','<b>Fracture</b>: the material breaks; a long plastic region shows ductility [1]'],
 award:'Award [1] for each feature up to [5 max].',kw:['Hooke','Young’s modulus','yield','ultimate','fracture'],acc:'A labelled graph can score.',tip:'Work along the graph from left to right.'},
{ref:'3.2.6',cmd:'Explain',marks:4,q:'Explain why a high Young’s modulus is desirable for an aircraft wing spar, but a low Young’s modulus is desirable for a rubber bumper.',
 pts:['A <b>high modulus</b> means small strain for a given stress, so the wing does not bend or flex too much [1]','This keeps its shape and control in flight [1]','A <b>low modulus</b> means large strain, so the bumper deforms easily [1]','…and absorbs impact energy then returns to shape [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['high modulus','small strain','low modulus','absorbs','deforms'],acc:'Accept stiffness language.',tip:'Link the modulus to the function.'},
{ref:'3.2.7',cmd:'Explain',marks:4,q:'Explain why a tall, thin bookcase may topple when an upper shelf is overloaded.',
 pts:['The load at the top gives a <b>moment</b> about the base edge [1]','When the toppling moment is greater than the restoring moment from the <b>weight</b> through the narrow base, ΣM ≠ 0 [1]','So the bookcase is <b>not in equilibrium</b> and rotates [1]','Solutions: wider base, lower centre of gravity, fixing to the wall [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['moment','centre of gravity','base','equilibrium','topple'],acc:'Accept “centre of mass”.',tip:'Use the idea of moments and base width.'},
{ref:'3.2.8',cmd:'Explain',marks:4,q:'Explain two ways in which a frame structure can be strengthened.',
 pts:['<b>Triangulation / struts</b>: diagonal members make rigid triangles that resist racking [1]','…and carry compression or tension, reducing bending [1]','<b>Lamination or composite materials</b>: layers or reinforcement increase strength and stop cracks spreading [1]','Example: plywood gussets or carbon fibre tubes [1]'],
 award:'Award [1] for each valid point up to [4 max].Other techniques accepted: arch, I-section, corrugation.',kw:['triangulation','struts','lamination','composite','rigid'],acc:'Any two methods with explanation.',tip:'Method, how, and a product.'},
{ref:'3.2.9',cmd:'Apply',marks:3,q:'A lifting sling fails at 54 kN. It is used to lift loads of up to 9 kN. Apply the data to calculate the safety factor and state what it means.',
 pts:['SF = absolute strength ÷ allowable load [1]','= 54 ÷ 9 = <b>6</b> [1]','The sling could carry <b>six times</b> the working load before failure [1]'],
 award:'Award [1] for each step.',kw:['54 ÷ 9','6','six times'],acc:'Follow-through applies.',tip:'Always interpret the number.'},
{ref:'3.2.10',cmd:'Explain',marks:4,q:'Explain why most structures are designed with a safety factor greater than 1.',
 pts:['<b>Uncertainty</b> in the material’s strength and manufacturing quality [1]','Loads may be <b>higher than expected</b> (overloading, dynamic loads) [1]','Strength reduces with <b>fatigue, corrosion and wear</b> [1]','Failure may cause <b>injury or death</b> and legal consequences, so a margin is needed [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['uncertainty','overloading','fatigue','corrosion','safety'],acc:'Accept “legal regulations”.',tip:'Give causes of uncertainty and consequence.'}
],

practice:[
{id:'cs1',title:'Case study 1: Testing prototype shelf brackets',paper:'Paper 2 style · HL',
 scenario:`<p>A design team tests four prototype shelf brackets. Each is screwed to a test wall, and a load is increased until the bracket fails. The brackets are made from the same 3 mm sheet steel. Bracket 1 is a plain L-shape (control). Bracket 2 has a diagonal strut. Bracket 3 has a curved (arched) gusset. Bracket 4 is laminated from two thin layers. The working (allowable) load for the shelf is 250 N. Data is illustrative.</p>`,
 fig:Fig.bars([['1: Plain L',400],['2: With strut',900],['3: Curved gusset',1300],['4: Laminated',1100]],{title:'Load at failure (N)',unit:' N',lw:140,max:1500,hl:[2]}),
 cap:'Figure 1: Failure load of each bracket.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Observations</th></tr><tr><th>Bracket</th><th>Failure mode</th><th>Mass (g)</th></tr><tr><td>1</td><td>Bent at the corner</td><td>60</td></tr><tr><td>2</td><td>Strut buckled</td><td>78</td></tr><tr><td>3</td><td>Screw pulled out of the wall</td><td>72</td></tr><tr><td>4</td><td>Layers peeled at the edge</td><td>110</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'3.2.3',q:'Identify the type of beam that the shelf bracket acts as, if it is fixed to the wall at one end and loaded at the other.',award:'Award [1].',pts:['<b>Cantilever</b> [1]'],acc:'Do not accept “fixed beam”.',kw:['cantilever'],tip:'One end fixed, one free.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.2.9',q:'Apply Figure 1 to calculate the safety factor of brackets 1 and 3.',award:'Award [1] for the formula, [1] for each SF.',pts:['SF = failure load ÷ allowable load [1]','Bracket 1: 400 ÷ 250 = <b>1.6</b> [1]','Bracket 3: 1300 ÷ 250 = <b>5.2</b> [1]'],acc:'Accept a correct formula implied by working.',kw:['400 ÷ 250','1.6','1300 ÷ 250','5.2'],tip:'Show the formula, then the substitution.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.2.8',q:'Explain why bracket 2 performs better than bracket 1.',award:'Award [1] for each valid point up to [3 max].',pts:['The diagonal <b>strut</b> forms a <b>triangle</b>, which is rigid [1]','It carries <b>compression</b> and reduces the bending moment at the corner [1]','So the load is shared and the corner does not bend until a much higher load [1]'],acc:'Accept “triangulation”.',kw:['strut','triangle','compression','bending moment'],tip:'Strut, triangle, force.'},
 {l:'(d)',cmd:'Describe',marks:2,ref:'3.2.7',q:'Bracket 2’s strut buckled. Describe what buckling is.',award:'Award [1] for each point up to [2 max].',pts:['Buckling is the <b>sideways bowing</b> of a slender member [1]','…under <b>compression</b>, before the material itself is crushed [1]'],acc:'Accept a sketch.',kw:['sideways','slender','compression'],tip:'Slender members buckle.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.2.8',q:'Evaluate which bracket should be recommended for production, using Figure 1 and Table 1.',award:'Award [1] for each valid point. A maximum of [4] for points about brackets. Reward a clear decision.',pts:['Bracket 3 has the <b>highest failure load</b> (1300 N, SF 5.2) [1]','The <b>arched shape</b> carries load in compression and spreads it [1]','Its mass of 72 g is low compared with bracket 4 (110 g) [1]','But it failed by <b>screw pull-out</b>, so the fixing is now the weak point and needs better screws or a wider plate [1]','Bracket 2 is lighter and simpler to make but has a lower SF (3.6) and buckled [1]','Decision: recommend bracket 3 with improved fixings; the SF is well above 1 for a shelf, meeting the 250 N working load [1]'],acc:'Maximum [6].',kw:['failure load','arch','mass','screw pull-out','safety factor','decision'],tip:'Use data and say how the weak point could be fixed.'}
 ]},

{id:'cs2',title:'Case study 2: Choosing a material for a footbridge',paper:'Paper 2 style · HL',
 scenario:`<p>A designer compares steel and aluminium for the beams of a 12 m footbridge. Tests on small samples give the elastic parts of the stress–strain graphs in Figure 2. The bridge must not deflect noticeably when people walk across it. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'Steel',pts:[[0,0],[0.2,400]]},{name:'Aluminium',pts:[[0,0],[0.2,140]]}],{x0:0,x1:0.2,y0:0,y1:400,xl:'Strain (%)',yl:'Stress (MPa)',h:260,title:'Elastic region of the stress–strain graphs'}),
 cap:'Figure 2: Elastic region of each material.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Properties</th></tr><tr><th></th><th>Steel</th><th>Aluminium</th></tr><tr><td>Density (kg/m³)</td><td>7800</td><td>2700</td></tr><tr><td>Corrosion resistance</td><td>Needs painting</td><td>Good</td></tr><tr><td>Relative cost</td><td>Low</td><td>Medium</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.2.5',q:'Apply Figure 2 to calculate Young’s modulus for steel in GPa. (0.2% strain = 0.002.)',award:'Award [1] for strain, [1] for the division, [1] for the unit.',pts:['Strain = 0.2% = <b>0.002</b> [1]','E = 400 MPa ÷ 0.002 = 200 000 MPa [1]','= <b>200 GPa</b> [1]'],acc:'Follow-through applies.',kw:['0.002','200 GPa'],tip:'Gradient of the straight line.'},
 {l:'(b)',cmd:'State',marks:1,ref:'3.2.6',q:'State the Young’s modulus of aluminium from Figure 2 in GPa.',award:'Award [1].',pts:['<b>70 GPa</b> (140 ÷ 0.002 = 70 000 MPa) [1]'],acc:'Accept 70.',kw:['70 GPa'],tip:'Same method.'},
 {l:'(c)',cmd:'Apply',marks:3,ref:'3.2.6',q:'A 2.0 m tie rod carries a stress of 100 MPa. Apply the values to calculate the extension in steel.',award:'Award [1] for strain, [1] for extension in m, [1] for mm.',pts:['Strain = stress ÷ E = 100 × 10⁶ ÷ 200 × 10⁹ = <b>0.0005</b> [1]','Extension = 0.0005 × 2.0 = 0.001 m [1]','= <b>1 mm</b> [1]'],acc:'Follow-through applies.',kw:['0.0005','1 mm'],tip:'ΔL = strain × original length.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.6',q:'Explain why steel’s higher Young’s modulus is an advantage for the bridge beams.',award:'Award [1] for each valid point up to [3 max].',pts:['Steel has a <b>higher modulus</b>, so it has a smaller strain under the same stress [1]','The beams <b>deflect less</b> when people walk across [1]','So the bridge feels stable and avoids <b>excess vibration</b> [1]'],acc:'Accept “stiffer”.',kw:['higher modulus','deflect less','stiffer','vibration'],tip:'Say what happens to the beam under load.'},
 {l:'(e)',cmd:'Justify',marks:4,ref:'3.2.3',q:'Justify the use of aluminium for an alternative lightweight footbridge, despite its lower modulus.',award:'Award [1] for each valid reason up to [4 max].',pts:['<b>Density</b> is about one-third of steel’s, so the bridge is much lighter [1]','A deeper section or <b>I-beam shape</b> can compensate for lower stiffness [1]','<b>Corrosion resistant</b>, so less maintenance [1]','Lighter parts are <b>easier to transport and install</b>, but cost is higher [1]'],acc:'Maximum [4].',kw:['density','I-beam','corrosion','install','cost'],tip:'Use Table 2 and say how the lower stiffness is solved.'}
 ]},

{id:'cs3',title:'Case study 3: A plank bridge and a roof truss',paper:'Paper 2 style · HL',
 scenario:`<p>A community garden has a simple wooden plank bridge across a stream. The plank is 3.0 m long and rests on a support at each end. A volunteer builds a roof truss for the tool shed (Figure 3). The truss is made of timber members joined in triangles. The shed owner asks why triangles are used and why the plank bridge may fail if a group crosses at once.</p>`,
 fig:trussFig,
 cap:'Figure 3: A roof truss with verticals (blue) and diagonals (red).',
 table:'',
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.2.7',q:'A volunteer weighing 600 N stands in the middle of the 3.0 m plank. Apply moments to calculate the reaction at each end.',award:'Award [1] for the moment equation, [1] for each reaction (or one with symmetry).',pts:['Moments about the left support: R<sub>B</sub> × 3.0 = 600 × 1.5 [1]','R<sub>B</sub> = <b>300 N</b> [1]','R<sub>A</sub> = 600 − 300 = <b>300 N</b> [1]'],acc:'Accept symmetry with reasoning.',kw:['moment','300 N'],tip:'Take moments about one support.'},
 {l:'(b)',cmd:'Describe',marks:2,ref:'3.2.7',q:'Describe the conditions for the plank to be in equilibrium.',award:'Award [1] for each up to [2 max].',pts:['The <b>sum of vertical and horizontal forces is zero</b> [1]','The <b>sum of moments is zero</b>, so it does not rotate [1]'],acc:'ΣF = 0 and ΣM = 0.',kw:['forces','moments','zero'],tip:'Two conditions.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.2.4',q:'Explain why a group of people running across the plank is more likely to cause failure than the same people standing still.',award:'Award [1] for each valid point up to [3 max].',pts:['Running creates <b>dynamic (impact) loads</b> that are larger than the static weight [1]','The forces change quickly and cause <b>vibration and fatigue</b> [1]','So the stress may exceed the plank’s design limit, which is why a high safety factor is needed [1]'],acc:'Accept “bouncing”.',kw:['dynamic','impact','vibration','fatigue'],tip:'Contrast static and dynamic.'},
 {l:'(d)',cmd:'Explain',marks:4,ref:'3.2.8',q:'Explain why the truss in Figure 3 uses triangles, and identify the likely force in the diagonals and in the bottom chord.',award:'Award [1] for each valid point up to [4 max].',pts:['A triangle is a <b>rigid shape</b>, so the truss cannot change shape without a member changing length [1]','Loads on the roof are distributed through the members as <b>tension and compression</b> [1]','Diagonals and rafters typically carry <b>compression (struts)</b> [1]','The bottom chord acts as a <b>tie in tension</b>, stopping the supports spreading apart [1]'],acc:'Accept diagonals as tension or compression depending on loading if explained.',kw:['triangle','rigid','struts','tie','tension'],tip:'Rigid shape then force in each member.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.2.9',q:'Evaluate the use of a safety factor of 2 for the plank bridge when a safety factor of 5 or more is common for timber structures.',award:'Award [1] for each valid point. Reward a decision.',pts:['A lower SF gives a <b>lighter, cheaper</b> plank [1]','But timber has <b>natural defects</b> such as knots, so the real strength is uncertain [1]','Outdoor wood suffers <b>rot, moisture and wear</b>, reducing strength over time [1]','People and <b>dynamic loads</b> make the loads unpredictable [1]','A failure could cause injury, and the owner has a responsibility to users [1]','Decision: increase the SF (or add a support or thicker plank) because the cost of extra timber is small compared with the risk [1]'],acc:'Maximum [6].',kw:['defects','rot','dynamic','injury','decision'],tip:'Weigh savings against the consequence of failure.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.2.4',q:'State the force acting on a rope in a tug of war.',award:'Award [1].',pts:['<b>Tension</b> [1]'],acc:'',kw:['tension'],tip:'It is pulled.'},
 {l:'2',cmd:'Identify',marks:1,ref:'3.2.3',q:'Identify the beam type of a diving board.',award:'Award [1].',pts:['<b>Cantilever</b> [1]'],acc:'',kw:['cantilever'],tip:'Fixed at one end.'},
 {l:'3',cmd:'Outline',marks:2,ref:'3.2.5',q:'Outline what is meant by Young’s modulus.',award:'Award [1] each up to [2 max].',pts:['The <b>ratio of stress to strain</b> in the elastic region [1]','A measure of the <b>stiffness</b> of a material [1]'],acc:'Accept gradient of the graph.',kw:['stress','strain','stiffness'],tip:'Say ratio and stiffness.'},
 {l:'4',cmd:'Apply',marks:2,ref:'3.2.5',q:'A rod of area 25 mm² carries a force of 5 kN. Apply the data to calculate the stress in MPa.',award:'Award [1] for conversion, [1] for the answer.',pts:['25 mm² = 25 × 10⁻⁶ m² [1]','5000 ÷ 0.000025 = <b>200 MPa</b> [1]'],acc:'',kw:['200 MPa'],tip:'σ = F ÷ A.'},
 {l:'5',cmd:'Describe',marks:2,ref:'3.2.8',q:'Describe how lamination strengthens plywood.',award:'Award [1] each up to [2 max].',pts:['Thin veneers are bonded with the <b>grain at 90°</b> [1]','…so strength is equal in both directions and splitting or warping is reduced [1]'],acc:'',kw:['grain','90°','splitting'],tip:'Alternate grain direction.'},
 {l:'6',cmd:'Explain',marks:2,ref:'3.2.8',q:'Explain why an arch needs strong abutments.',award:'Award [1] each up to [2 max].',pts:['The arch converts vertical load into <b>compression along the curve</b> [1]','…which pushes <b>outward</b> at the base, so the supports must resist the thrust [1]'],acc:'',kw:['compression','outward','abutments'],tip:'Outward thrust.'},
 {l:'7',cmd:'Apply',marks:2,ref:'3.2.9',q:'A chair fails at 3600 N and the heaviest expected user is 1200 N. Apply the data to calculate the safety factor.',award:'Award [1] for the formula or substitution, [1] for the answer.',pts:['SF = 3600 ÷ 1200 [1]','= <b>3</b> [1]'],acc:'',kw:['3600 ÷ 1200','3'],tip:'Failure load ÷ allowable load.'},
 {l:'8',cmd:'Explain',marks:2,ref:'3.2.10',q:'Explain what an SF of 1 means for a structure.',award:'Award [1] each up to [2 max].',pts:['The structure can carry only its <b>design load</b> [1]','There is <b>no margin</b>, so any extra load or weakness could cause failure [1]'],acc:'',kw:['no margin','design load'],tip:'No margin for error.'}
 ]},

paper:[]
};
})();
