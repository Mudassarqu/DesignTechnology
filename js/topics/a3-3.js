window.TOPICS=window.TOPICS||{};
(function(){
const T=(x,y,s,a,f)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}"${f?` style="fill:${f};font-weight:700"`:''}>${s}</text>`;
const AR=`<defs><marker id="la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--bad)"/></marker><marker id="lb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
/* lever diagram: class 1,2,3. x positions of F,L,E on a bar from 60..460 */
function lever(cls,label){
 const y=84,pos={1:{F:260,L:100,E:420},2:{F:80,L:230,E:440},3:{F:80,L:440,E:250}}[cls];
 let b=AR+`<rect x="60" y="${y}" width="400" height="10" rx="2" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
 b+=`<path d="M${pos.F} ${y+10} l-14 26 h28 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`+T(pos.F,y+58,'Fulcrum');
 b+=`<line x1="${pos.L}" y1="${y-48}" x2="${pos.L}" y2="${y-3}" stroke="var(--bad)" stroke-width="3" marker-end="url(#la)"/>`+T(pos.L,y-56,'Load (L)',null,'var(--bad)');
 b+=`<line x1="${pos.E}" y1="${y-48}" x2="${pos.E}" y2="${y-3}" stroke="var(--blue)" stroke-width="3" marker-end="url(#lb)"/>`+T(pos.E,y-56,'Effort (E)',null,'var(--blue)');
 return `<svg viewBox="0 0 520 170" role="img" aria-label="${label}">${b}</svg>`;
}
const wb=(()=>{ /* wheelbarrow-like lever with distances */
 let b=AR+`<rect x="60" y="84" width="400" height="10" rx="2" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
 b+=`<path d="M130 94 l-14 26 h28 z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`+T(130,140,'Fulcrum (wheel)');
 b+=`<line x1="190" y1="36" x2="190" y2="81" stroke="var(--bad)" stroke-width="3" marker-end="url(#la)"/>`+T(190,28,'Load 600 N',null,'var(--bad)');
 b+=`<line x1="430" y1="36" x2="430" y2="81" stroke="var(--blue)" stroke-width="3" marker-end="url(#lb)"/>`+T(430,28,'Effort E',null,'var(--blue)');
 b+=`<line x1="130" y1="156" x2="190" y2="156" stroke="var(--ink)" stroke-width="1.5"/>`+T(160,170,'0.5 m')+`<line x1="130" y1="150" x2="430" y2="150" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>`+T(300,146,'1.5 m');
 return `<svg viewBox="0 0 520 180" role="img" aria-label="A wheelbarrow lever with the fulcrum at the wheel, the load 0.5 m away and the effort 1.5 m away">${b}</svg>`;
})();
const motions=(()=>{
 let b=AR;
 b+=`<line x1="50" y1="40" x2="170" y2="40" stroke="var(--blue)" stroke-width="3" marker-end="url(#lb)"/>`+T(110,70,'Linear');
 b+=`<line x1="300" y1="40" x2="440" y2="40" stroke="var(--blue)" stroke-width="3" marker-start="url(#lb)" marker-end="url(#lb)"/>`+T(370,70,'Reciprocating');
 b+=`<circle cx="110" cy="140" r="30" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M110 110 a30 30 0 0 1 28 18" fill="none" stroke="var(--blue)" stroke-width="3" marker-end="url(#lb)"/>`+T(110,194,'Rotary');
 b+=`<path d="M320 120 q50 -40 100 0" fill="none" stroke="var(--blue)" stroke-width="3" marker-start="url(#lb)" marker-end="url(#lb)"/><line x1="370" y1="95" x2="370" y2="150" stroke="var(--ink)" stroke-width="2"/><circle cx="370" cy="150" r="5" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`+T(370,194,'Oscillating');
 return `<svg viewBox="0 0 520 210" role="img" aria-label="Four types of motion: linear, reciprocating, rotary and oscillating">${b}</svg>`;
})();
const cams=(()=>{
 const c=(cx,cy,shape,label)=>`<g>${shape}${T(cx,cy+58,label)}</g>`;
 const st='fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"';
 let b='';
 b+=c(60,60,`<circle cx="60" cy="60" r="28" ${st}/><circle cx="60" cy="60" r="3" fill="var(--ink)"/>`,'Circular');
 b+=c(180,60,`<circle cx="186" cy="60" r="28" ${st}/><circle cx="174" cy="60" r="3" fill="var(--ink)"/>`,'Eccentric');
 b+=c(300,60,`<path d="M300 24 C318 24 332 46 330 64 C328 84 312 90 300 90 C288 90 274 84 272 64 C270 46 282 24 300 24Z" ${st}/><circle cx="300" cy="74" r="3" fill="var(--ink)"/>`,'Pear');
 b+=c(420,60,`<ellipse cx="420" cy="60" rx="38" ry="24" ${st}/><circle cx="420" cy="60" r="3" fill="var(--ink)"/>`,'Oval');
 b+=c(120,170,`<path d="M96 192 L150 192 L123 140Z" ${st} stroke-linejoin="round"/><circle cx="123" cy="175" r="3" fill="var(--ink)"/>`,'Triangular');
 b+=c(330,170,`<path d="M330 142 C355 144 372 160 366 180 C360 198 336 202 316 196 L330 142Z" ${st}/><circle cx="332" cy="176" r="3" fill="var(--ink)"/>`,'Snail (drop)');
 return `<svg viewBox="0 0 520 250" role="img" aria-label="Cam shapes: circular, eccentric, pear, oval, triangular and snail">${b}</svg>`;
})();

window.TOPICS['a3-3']={
id:'a3-3',code:'A3.3',title:'Introduction to mechanical systems',level:'HL',hours:6,
guiding:'How are mechanisms present in everyday products?',
pptx:'resources/A3_3_HL__Introduction_to_Mechanical_Systems.pptx',pptxName:'A3.3 Introduction to mechanical systems (slides)',

notes:[
{id:'s331',ref:'3.3.1–3.3.2',title:'Motion, inputs, processes and outputs',
 must:'Identify the four types of mechanical motion. Describe inputs, processes and outputs in mechanical systems.',
 html:`
${motions}
<div class="tw"><table class="t"><tr><th>Motion</th><th>Description</th><th>Examples</th></tr>
<tr><td><b>Linear</b></td><td>Straight line, one direction</td><td>Drawer opening; train on a straight track</td></tr>
<tr><td><b>Reciprocating</b></td><td>Straight line, back and forth in a repeating cycle</td><td>Piston in an engine; sewing machine needle; saw blade</td></tr>
<tr><td><b>Rotary</b></td><td>Circular path around a fixed point (axle or shaft)</td><td>Wheel, drill bit, fan, gear</td></tr>
<tr><td><b>Oscillating</b></td><td>Curved path (arc) back and forth about a pivot</td><td>Swing, pendulum, windscreen wiper</td></tr></table></div>
<div class="key">Reciprocating moves in a <b>straight line</b> back and forth. Oscillating moves along an <b>arc</b> back and forth.</div>
<h3>A mechanical system: input, process, output</h3>
<div class="cols"><div class="box"><h4>Input</h4><p>The force or motion put into the system (a hand turning a crank, a motor).</p></div>
<div class="box"><h4>Process</h4><p>The mechanism that changes the speed, force, direction or type of motion (gears, cam, lever).</p></div>
<div class="box"><h4>Output</h4><p>The useful motion or force delivered (a wheel turning, a needle moving).</p></div></div>
<div class="ex"><b class="l">Example: engine.</b> Input: reciprocating motion of the pistons from combustion. Process: connecting rods and crankshaft. Output: rotary motion that drives the wheels.</div>
<div class="ex"><b class="l">Example: bicycle.</b> Input: rotary motion at the pedals. Process: chain and sprockets (with a derailleur to change the ratio). Output: rotary motion at the rear wheel.</div>
<div class="tip"><b>Exam tip.</b> When asked to describe a system, state the type of motion at the input, name the component that changes it, and state the type of motion at the output.</div>`},

{id:'s332',ref:'3.3.3',title:'Mechanical advantage, velocity ratio and efficiency',
 must:'Outline a mechanical advantage and suggest how simple mechanical systems may improve performance in function and efficiency.',
 html:`
<div class="key"><b>Mechanical advantage (MA) = load ÷ effort</b> (no unit). <b>Velocity ratio (VR) = distance moved by the effort ÷ distance moved by the load.</b> <b>Efficiency = (MA ÷ VR) × 100%</b> (equivalently, work out ÷ work in).</div>
<ul class="tight"><li>MA &gt; 1: a <b>small effort moves a larger load</b> (force multiplier). The effort moves a larger distance.</li><li>MA &lt; 1: the system multiplies <b>speed or distance</b> instead (the load moves further or faster).</li><li>No machine is 100% efficient: friction, flexing and heat make MA lower than VR.</li></ul>
<div class="ex"><b class="l">Worked example: pulley block.</b> A block and tackle lifts a 500 N load with an effort of 150 N. The effort rope moves 4 m while the load rises 1 m. MA = 500 ÷ 150 = <b>3.33</b>. VR = 4 ÷ 1 = <b>4</b>. Efficiency = 3.33 ÷ 4 × 100 = <b>83%</b>.</div>
<div class="tip"><b>Exam tip.</b> Show each formula, substitute with units, and say what the answer means (“a 150 N effort lifts a 500 N load”). Efficiency is below 100% because of friction.</div>
<h3>Improving performance</h3>
<ul class="tight"><li><b>Function</b>: a lever makes lifting heavy objects easier; gears reduce speed and increase torque to climb hills.</li><li><b>Efficiency</b>: lubrication, bearings, and good alignment reduce friction losses; fewer parts mean fewer losses.</li></ul>`},

{id:'s333',ref:'3.3.6',title:'Gears',
 must:'Identify the different types of gear systems (spur, bevel, rack and pinion, worm, ratchet and pawl, idler and compound) and their components, and outline how they are used.',
 html:`
<p>Gears transmit <b>rotary motion</b> from one shaft to another. They can change the <b>speed, torque and direction</b>. The <b>driver</b> gear is on the input shaft and the <b>driven</b> gear is on the output shaft. Meshing gears turn in <b>opposite</b> directions.</p>
<div class="key"><b>Gear ratio = teeth on driven ÷ teeth on driver.</b> Output speed = input speed ÷ gear ratio. A driver smaller than the driven gives a ratio above 1: <b>speed decreases, torque increases</b> (gearing down). The reverse gives more speed and less torque.</div>
<div class="ex"><b class="l">Worked example.</b> A motor with a 15-tooth driver at 1200 rpm drives a 45-tooth gear. Ratio = 45 ÷ 15 = 3. Output speed = 1200 ÷ 3 = <b>400 rpm</b>. Torque is about three times larger (less friction losses).</div>
<div class="tw"><table class="t"><tr><th>Gear system</th><th>What it does</th><th>Examples</th></tr>
<tr><td><b>Spur</b></td><td>Straight teeth on parallel shafts; simple, efficient; noisy at speed</td><td>Clocks, toys, gearboxes</td></tr>
<tr><td><b>Bevel</b></td><td>Changes the axis of rotation, usually <b>90°</b></td><td>Hand drill, differential in a car</td></tr>
<tr><td><b>Rack and pinion</b></td><td>Converts <b>rotary to linear</b> (or linear to rotary)</td><td>Car steering, sliding doors, drill press</td></tr>
<tr><td><b>Worm and wheel</b></td><td>Worm shaft turns the wheel through 90° with a very <b>large reduction</b>; it often cannot be back-driven (self-locking)</td><td>Guitar tuning pegs, conveyor drives, lifts</td></tr>
<tr><td><b>Ratchet and pawl</b></td><td>Allows rotation in <b>one direction only</b></td><td>Socket wrench, cable tie, winch</td></tr>
<tr><td><b>Idler</b></td><td>Placed between driver and driven; <b>changes direction</b> (the driven turns the same way as the driver) without changing the ratio</td><td>Reverse gear, printers</td></tr>
<tr><td><b>Compound</b></td><td>Two gears on the same shaft; gives a <b>large ratio in a small space</b>. Overall ratio is the product of the ratios.</td><td>Gearboxes, clocks</td></tr></table></div>
<div class="ex"><b class="l">Worked example: compound.</b> Stage 1: 15 → 45 (ratio 3). Stage 2: 12 → 48 (ratio 4). Overall ratio = 3 × 4 = 12. Input 1200 rpm gives 1200 ÷ 12 = <b>100 rpm</b>.</div>
<div class="tip"><b>Exam tip.</b> Idlers change direction but not the ratio. Worms give large ratios in one stage.</div>`},

{id:'s334',ref:'3.3.7',title:'Belt drives and pulleys',
 must:'Identify components of pulley systems and outline how they are used.',
 html:`
<p>A <b>belt drive</b> transmits rotary motion between two shafts that are some distance apart, using a belt over pulleys. The <b>driver pulley</b> is on the input shaft and the <b>driven pulley</b> on the output.</p>
<div class="key"><b>Velocity ratio = diameter of driven pulley ÷ diameter of driver pulley.</b> A larger driven pulley reduces speed and increases torque. An <b>open belt</b> keeps the same direction; a <b>crossed belt</b> reverses it.</div>
<div class="tw"><table class="t"><tr><th>Belt</th><th>Properties</th><th>Examples</th></tr>
<tr><td>Flat</td><td>Simple; may slip</td><td>Conveyor belts</td></tr>
<tr><td>V-belt</td><td>Wedge shape grips the pulley groove; less slip, more power</td><td>Car engine accessories, drill press</td></tr>
<tr><td>Round</td><td>Low power; flexible</td><td>Sewing machines, toys</td></tr>
<tr><td>Toothed (timing) belt</td><td>No slip; keeps timing</td><td>Car cam timing, 3D printers</td></tr></table></div>
<ul class="tight"><li><b>Advantages</b>: quiet, cheap, smooth; slips under overload, which protects the machine; shafts can be far apart.</li><li><b>Disadvantages</b>: slip (except timing belts); stretch and wear; needs tension adjustment.</li></ul>
<h3>Pulley systems for lifting</h3>
<p>A <b>fixed pulley</b> only changes the direction of the effort (MA = 1). A <b>movable pulley</b> or a <b>block and tackle</b> (several pulleys and one rope) gives MA greater than 1 because the load is shared across several rope lengths. VR = number of rope sections supporting the load.</p>
<div class="tip"><b>Exam tip.</b> Identify components: pulley wheel, belt or rope, driver and driven, tensioner, fixed and moving blocks.</div>`},

{id:'s335',ref:'3.3.8',title:'Cams and followers',
 must:'Identify different shaped cams (pear, circular, triangular, eccentric, oval and snail) and outline how they are used.',
 html:`
${cams}
<p>A <b>cam</b> is a shaped wheel that turns rotary motion into <b>reciprocating or oscillating</b> motion of a <b>follower</b>. The <b>shape</b> of the cam decides the motion. A period when the follower stays still is the <b>dwell</b>.</p>
<div class="tw"><table class="t"><tr><th>Cam</th><th>Follower motion</th><th>Uses</th></tr>
<tr><td><b>Circular</b> (centred)</td><td>No movement (follower stays level)</td><td>A circular cam turning on its centre gives no motion; the axle must be off-centre (eccentric) to move the follower</td></tr>
<tr><td><b>Eccentric</b> (off-centre circle)</td><td>Smooth rise and fall once per turn, equal times</td><td>Pumps, automata toys, steam engines</td></tr>
<tr><td><b>Pear</b></td><td>Dwell, then rise and fall quickly</td><td>Engine valves</td></tr>
<tr><td><b>Oval</b></td><td>Two rises and falls per turn</td><td>Simple pumps, toys</td></tr>
<tr><td><b>Triangular</b></td><td>Rises and falls in a quick, jerky way with corners, three times per turn</td><td>Reciprocating mechanisms, jerky toy movement</td></tr>
<tr><td><b>Snail (drop)</b></td><td>Slow rise then <b>sudden drop</b>, once per turn</td><td>Hammers, ratchet-style drops, stamps</td></tr></table></div>
<p>Followers can be <b>knife-edge, roller or flat</b>: a roller reduces wear and friction. A spring or gravity keeps the follower in contact.</p>
<div class="ex"><b class="l">Example.</b> A car engine camshaft has pear-shaped cams that open the valves at the right time. As the camshaft turns (rotary), each valve moves up and down (reciprocating).</div>
<div class="tip"><b>Exam tip.</b> Name the cam shape, the follower motion produced and an example.</div>`},

{id:'s336',ref:'3.3.9',title:'Levers',
 must:'Identify the three types of levers (1st, 2nd and 3rd class) and the position of the load, effort and fulcrum, and outline how they are used.',
 html:`
<p>A <b>lever</b> is a rigid bar that pivots about a <b>fulcrum</b>. The <b>effort (E)</b> is the force applied; the <b>load (L)</b> is the force to overcome.</p>
<div class="key"><b>Principle of moments:</b> Effort × distance from fulcrum = Load × distance from fulcrum. <b>MA = L ÷ E = effort arm ÷ load arm.</b></div>
<div class="tw"><table class="t"><tr><th>Class</th><th>Order</th><th>Typical MA</th><th>Examples</th></tr>
<tr><td><b>1st class</b></td><td>Load – <b>Fulcrum</b> – Effort (fulcrum between)</td><td>Above or below 1</td><td>Seesaw, scissors, pliers, crowbar</td></tr>
<tr><td><b>2nd class</b></td><td>Fulcrum – <b>Load</b> – Effort (load between)</td><td>Always above 1</td><td>Wheelbarrow, nutcracker, bottle opener</td></tr>
<tr><td><b>3rd class</b></td><td>Fulcrum – <b>Effort</b> – Load (effort between)</td><td>Always below 1 (gains speed and distance)</td><td>Tweezers, fishing rod, broom, forearm</td></tr></table></div>
<p><b>1st class</b></p>${lever(1,'A first class lever with the fulcrum between the load and the effort')}
<p><b>2nd class</b></p>${lever(2,'A second class lever with the load between the fulcrum and the effort')}
<p><b>3rd class</b></p>${lever(3,'A third class lever with the effort between the fulcrum and the load')}
<div class="ex"><b class="l">Worked example: wheelbarrow.</b> The wheel is the fulcrum. The 600 N load is 0.5 m from the wheel and the handles are 1.5 m from the wheel.<br>E × 1.5 = 600 × 0.5, so E = <b>200 N</b>. MA = 600 ÷ 200 = <b>3</b>.</div>
${wb}
<div class="tip"><b>Memory aid.</b> The class tells you which of F, L, E is in the <b>middle</b>: 1 – Fulcrum, 2 – Load, 3 – Effort (“1-2-3: F-L-E”).</div>`},

{id:'s337',ref:'3.3.10',title:'Linkages',
 must:'Identify parallel, reverse and bell crank linkages, and outline how they are used.',
 html:`
<p>A <b>linkage</b> is a set of rigid bars joined by pivots. Linkages <b>change the direction</b> of motion, alter the <b>size of a force</b>, or make parts move in a particular way.</p>
<div class="tw"><table class="t"><tr><th>Linkage</th><th>What it does</th><th>Examples</th></tr>
<tr><td><b>Parallel motion</b></td><td>Two pairs of equal bars keep the output <b>parallel to the input</b>, moving in the same direction and keeping the same orientation</td><td>Toolbox tray, scissor lift, car windscreen wiper arms, pantograph</td></tr>
<tr><td><b>Reverse motion</b></td><td>The output moves the same distance in the <b>opposite direction</b>; a central pivot is used</td><td>Foot-pedal pumps, dual-brake calipers, tilt mechanisms</td></tr>
<tr><td><b>Bell crank</b></td><td>L-shaped lever that turns motion through <b>90°</b>; can also change the force if the arms are of different lengths</td><td>Bicycle brake lever cable, aircraft controls, pedal systems</td></tr></table></div>
<div class="ex"><b class="l">Example.</b> A pull on a bicycle brake lever moves a cable horizontally; a bell crank at the brake turns it through 90° and applies the pads to the wheel rim.</div>
<div class="key"><b>Four-bar linkages</b> can create many motions by choosing different bar lengths. A <b>crank and slider</b> turns rotary into reciprocating motion (engine).</div>
<div class="tip"><b>Exam tip.</b> Parallel = same direction; reverse = opposite direction; bell crank = 90°.</div>`},

{id:'s338',ref:'3.3.4–3.3.5',title:'Combining mechanisms into complex systems',
 must:'Explain the basic principles of mechanical motion and discuss how gears, pulleys, cams, levers and linkages can be combined to create complex mechanical systems.',
 html:`
<p>Real products rarely use a single mechanism. Several are linked so that the <b>output of one becomes the input of the next</b>. A designer chooses each stage for what it does best.</p>
<div class="tw"><table class="t"><tr><th>Need</th><th>Mechanism</th></tr>
<tr><td>Reduce speed, increase torque</td><td>Gears (worm, compound) or a belt with a large driven pulley</td></tr>
<tr><td>Transmit motion over a distance</td><td>Belt, chain</td></tr>
<tr><td>Change rotary to linear</td><td>Rack and pinion; cam and follower; crank and slider</td></tr>
<tr><td>Change direction by 90°</td><td>Bevel gear; bell crank</td></tr>
<tr><td>Make force larger</td><td>Lever, pulley block, gear reduction</td></tr>
<tr><td>Allow only one direction</td><td>Ratchet and pawl</td></tr></table></div>
<div class="ex"><b class="l">Example: hand-cranked automata.</b> Crank (input, rotary) → compound gears (reduce speed) → camshaft (rotary to reciprocating) → followers and levers → a bird’s head nodding (output).</div>
<div class="ex"><b class="l">Example: bicycle.</b> Pedals and cranks (rotary) → chain and sprockets (gears, ratio) → rear wheel; brakes use levers and bell cranks; the derailleur is a parallelogram linkage.</div>
<div class="tip"><b>Exam tip.</b> When asked to discuss, show how <b>two or three</b> mechanisms combine, state the motion at each stage, and comment on friction, cost and complexity.</div>`}
],

cards:[
['Linear motion','Movement in a straight line in one direction.'],
['Reciprocating motion','Movement in a straight line back and forth.'],
['Rotary motion','Movement in a circle about a fixed centre.'],
['Oscillating motion','Movement back and forth along an arc about a pivot.'],
['Input','The force or motion put into a mechanical system.'],
['Process','The mechanism that changes speed, force, direction or type of motion.'],
['Output','The useful motion or force delivered by the system.'],
['Mechanical advantage','Load divided by effort.'],
['Velocity ratio','Distance moved by effort divided by distance moved by load.'],
['Efficiency','(MA ÷ VR) × 100%; the share of input work that becomes useful output.'],
['Torque','The turning effect of a force about an axis.'],
['Driver gear','The gear on the input shaft.'],
['Driven gear','The gear on the output shaft.'],
['Gear ratio','Teeth on the driven gear divided by teeth on the driver gear.'],
['Spur gear','Straight-toothed gear for parallel shafts.'],
['Bevel gear','Gear that turns the axis of rotation, often by 90°.'],
['Rack and pinion','Gear pair that converts rotary motion to linear motion.'],
['Worm gear','A screw-like gear that drives a wheel with a large reduction and 90° change.'],
['Ratchet and pawl','A gear and catch that allow rotation in one direction only.'],
['Idler gear','A gear between driver and driven that reverses direction without changing the ratio.'],
['Compound gear','Two gears on the same shaft, giving a large ratio in a small space.'],
['Pulley','A grooved wheel that guides a belt or rope.'],
['Belt drive','A belt over two pulleys that transmits rotary motion.'],
['Block and tackle','A system of pulleys and a rope that gives mechanical advantage.'],
['Cam','A shaped wheel that produces reciprocating or oscillating motion in a follower.'],
['Follower','The part that rides on the cam surface.'],
['Dwell','A period in which the follower does not move.'],
['Eccentric cam','A circular cam whose axle is off-centre.'],
['Pear cam','A cam with a dwell, then a quick rise and fall.'],
['Snail cam','A cam with a slow rise then a sudden drop.'],
['Lever','A rigid bar that pivots about a fulcrum.'],
['Fulcrum','The pivot point of a lever.'],
['First-class lever','Fulcrum between load and effort.'],
['Second-class lever','Load between fulcrum and effort.'],
['Third-class lever','Effort between fulcrum and load.'],
['Linkage','Rigid bars joined by pivots to change direction, force or path.'],
['Parallel motion linkage','Keeps output parallel to input, in the same direction.'],
['Reverse motion linkage','Output moves in the opposite direction to the input.'],
['Bell crank','An L-shaped lever that changes direction through 90°.'],
['Crank and slider','Converts rotary motion to reciprocating motion.']
],

mcq:[
{ref:'3.3.1',q:'A windscreen wiper moves with…',o:['Linear motion','Oscillating motion','Reciprocating motion','Rotary motion'],a:1,why:'It swings back and forth along an arc about a pivot.',live:true},
{ref:'3.3.1',q:'A piston in an engine moves with…',o:['Rotary motion','Oscillating motion','Reciprocating motion','Linear only'],a:2,why:'Straight-line back and forth.',live:true},
{ref:'3.3.1',q:'A drawer sliding in and out once is…',o:['Linear','Rotary','Oscillating','Reciprocating always'],a:0,why:'Straight line, one direction at a time.'},
{ref:'3.3.2',q:'In a mechanical system, the mechanism that changes speed or direction is the…',o:['Input','Process','Output','Load'],a:1,why:'The process is the “middle” stage.',live:true},
{ref:'3.3.2',q:'In a car engine, the crankshaft converts reciprocating motion into…',o:['Rotary motion','Linear motion','Oscillating motion','Heat'],a:0,why:'The pistons move up and down; the crankshaft rotates.'},
{ref:'3.3.3',q:'MA = ',o:['Load ÷ effort','Effort ÷ load','Distance ÷ time','Force × distance'],a:0,why:'Mechanical advantage is the force multiplier.',live:true},
{ref:'3.3.3',q:'A 40 N effort lifts a 200 N load. MA =',o:['5','0.2','240','8000'],a:0,why:'200 ÷ 40 = 5.'},
{ref:'3.3.3',q:'MA = 3 and VR = 4. Efficiency =',o:['75%','133%','12%','25%'],a:0,why:'3 ÷ 4 × 100 = 75%.',live:true},
{ref:'3.3.3',q:'No real machine is 100% efficient because of…',o:['Friction','Gravity only','Velocity ratio','Larger MA'],a:0,why:'Friction and other losses waste input work.'},
{ref:'3.3.6',q:'Which gear changes the axis of rotation by 90°?',o:['Spur','Bevel','Idler','Compound'],a:1,why:'Bevel gears mesh at an angle.',live:true},
{ref:'3.3.6',q:'Car steering uses…',o:['Rack and pinion','Worm','Ratchet and pawl','Idler'],a:0,why:'It converts rotary to linear.'},
{ref:'3.3.6',q:'An idler gear…',o:['Changes direction, not ratio','Doubles the speed','Gives large reduction','Allows one-way motion'],a:0,why:'Its size does not change the ratio.',live:true},
{ref:'3.3.6',q:'A driver of 20 teeth drives a gear of 60 teeth. The gear ratio is…',o:['3','0.33','40','80'],a:0,why:'60 ÷ 20 = 3.',live:true},
{ref:'3.3.6',q:'The driver turns at 900 rpm with ratio 3. The driven gear turns at…',o:['300 rpm','2700 rpm','897 rpm','903 rpm'],a:0,why:'900 ÷ 3 = 300 rpm.'},
{ref:'3.3.6',q:'Which allows rotation in only one direction?',o:['Ratchet and pawl','Spur','Worm','Idler'],a:0,why:'The pawl blocks backward movement.'},
{ref:'3.3.6',q:'Which system gives the largest reduction in one stage?',o:['Worm and wheel','Spur pair of equal size','Idler','Bevel of equal size'],a:0,why:'A single-start worm advances the wheel one tooth per turn.',live:true},
{ref:'3.3.7',q:'A larger driven pulley than the driver pulley will…',o:['Reduce speed and increase torque','Increase speed','Reverse direction','Give no change'],a:0,why:'Velocity ratio above 1.'},
{ref:'3.3.7',q:'Which belt does not slip?',o:['Toothed timing belt','Flat belt','Round belt','V-belt'],a:0,why:'Teeth mesh with the pulley.',live:true},
{ref:'3.3.7',q:'A fixed pulley…',o:['Changes the direction of the effort only','Doubles the force','Halves the load','Has MA of 3'],a:0,why:'MA = 1.'},
{ref:'3.3.8',q:'A cam with a sudden drop after a slow rise is…',o:['Snail','Eccentric','Oval','Pear'],a:0,why:'Also called a drop cam.',live:true},
{ref:'3.3.8',q:'Engine valves are usually operated by…',o:['Pear cams','Bevel gears','Worms','Idlers'],a:0,why:'The pear gives a dwell, then a quick rise and fall.'},
{ref:'3.3.8',q:'A cam converts rotary motion into…',o:['Reciprocating motion of the follower','Rotary motion','No motion','Linear force only'],a:0,why:'The follower rises and falls.'},
{ref:'3.3.9',q:'In a 2nd class lever, which is in the middle?',o:['Load','Effort','Fulcrum','Pivot arm'],a:0,why:'Fulcrum – Load – Effort.',live:true},
{ref:'3.3.9',q:'A wheelbarrow is a…',o:['1st class lever','2nd class lever','3rd class lever','Cam'],a:1,why:'The load is between the wheel (fulcrum) and the handles.'},
{ref:'3.3.9',q:'Tweezers are a…',o:['3rd class lever','1st class lever','2nd class lever','Bell crank'],a:0,why:'The effort is between fulcrum and load.',live:true},
{ref:'3.3.9',q:'A load of 400 N is 0.2 m from the fulcrum. The effort is 1.0 m away. The effort needed is…',o:['80 N','2000 N','400 N','160 N'],a:0,why:'E × 1.0 = 400 × 0.2, E = 80 N.',live:true},
{ref:'3.3.10',q:'A bell crank changes the direction of motion by…',o:['90°','45°','180°','0°'],a:0,why:'It is an L-shaped lever.'},
{ref:'3.3.10',q:'Which linkage keeps the output moving in the same direction and parallel to the input?',o:['Parallel motion','Reverse motion','Bell crank','Crank and slider'],a:0,why:'Two pairs of equal bars form a parallelogram.',live:true},
{ref:'3.3.10',q:'A reverse motion linkage…',o:['Moves the output in the opposite direction','Moves it in the same direction','Turns 90°','Has no pivots'],a:0,why:'A central pivot reverses the movement.'}
],

fib:[
{ref:'3.3.1',t:'[[Reciprocating]] motion is straight back and forth, whereas [[oscillating]] motion moves along an arc about a pivot.'},
{ref:'3.3.2',t:'A mechanical system has an [[input]], a [[process]] and an [[output]].'},
{ref:'3.3.3',t:'Mechanical advantage is [[load]] divided by effort.'},
{ref:'3.3.3',t:'Efficiency is MA divided by [[velocity ratio|VR]] multiplied by 100%.'},
{ref:'3.3.6',t:'Gear ratio is the teeth on the [[driven]] gear divided by the teeth on the [[driver]] gear.'},
{ref:'3.3.6',t:'A [[rack]] and pinion converts rotary motion to linear motion.'},
{ref:'3.3.6',t:'An [[idler]] gear reverses direction without changing the gear ratio.'},
{ref:'3.3.6',t:'A [[ratchet]] and pawl lets a shaft turn in one direction only.'},
{ref:'3.3.6',t:'A [[worm]] gear gives a large reduction and turns the motion through 90°.'},
{ref:'3.3.7',t:'A [[timing|toothed]] belt does not slip because its teeth mesh with the pulley.'},
{ref:'3.3.8',t:'The part that rides on a cam is the [[follower]].'},
{ref:'3.3.8',t:'A period when a cam follower does not move is called a [[dwell]].'},
{ref:'3.3.9',t:'In a first-class lever the [[fulcrum]] is between the load and the effort.'},
{ref:'3.3.9',t:'A [[third|3rd]] class lever, such as tweezers, has the effort between the fulcrum and the load.'},
{ref:'3.3.10',t:'A bell [[crank]] changes the direction of a movement through 90°.'}
],

theory:[
{ref:'3.3.1',cmd:'Describe',marks:4,q:'Describe the four types of mechanical motion with an example of each.',
 pts:['<b>Linear</b>: straight line in one direction, for example a drawer [1]','<b>Reciprocating</b>: straight line back and forth, for example a piston [1]','<b>Rotary</b>: circular around a fixed point, for example a wheel [1]','<b>Oscillating</b>: back and forth along an arc about a pivot, for example a pendulum [1]'],
 award:'Award [1] for each motion described with an example up to [4 max].',kw:['linear','reciprocating','rotary','oscillating'],acc:'Any valid example.',tip:'Say the path as well as the example.'},
{ref:'3.3.2',cmd:'Describe',marks:4,q:'Describe the input, process and output of a hand-cranked pencil sharpener.',
 pts:['<b>Input</b>: rotary motion of the handle turned by the user [1]','<b>Process</b>: gears (or a shaft) transmit and change the speed of the rotation [1]','…the cutter blades rotate against the pencil [1]','<b>Output</b>: a sharpened pencil point and shavings [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['input','rotary','process','gears','output'],acc:'Accept other mechanical products if each stage is described.',tip:'State the type of motion at each stage.'},
{ref:'3.3.3',cmd:'Apply',marks:4,q:'A block and tackle lifts a 800 N load with an effort of 250 N. The effort rope moves 5 m when the load rises 1.5 m. Apply the data to calculate MA, VR and efficiency.',
 pts:['MA = load ÷ effort = 800 ÷ 250 = <b>3.2</b> [1]','VR = 5 ÷ 1.5 = <b>3.33</b> [1]','Efficiency = MA ÷ VR × 100 = 3.2 ÷ 3.33 × 100 [1]','= <b>96%</b> [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['3.2','3.33','96%'],acc:'Accept 95–96%.',tip:'Show formulas and each substitution.'},
{ref:'3.3.3',cmd:'Explain',marks:3,q:'Explain why the efficiency of a mechanical system is always less than 100%.',
 pts:['<b>Friction</b> between moving parts converts input energy to heat [1]','Some energy is lost in <b>deformation or vibration</b> of parts, or sound [1]','So the output work is less than the input work, so MA is less than VR [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['friction','heat','output work','input work'],acc:'',tip:'Name causes and the consequence.'},
{ref:'3.3.6',cmd:'Explain',marks:4,q:'Explain the function of an idler gear and a compound gear in a gear train.',
 pts:['An <b>idler</b> is placed between driver and driven gears [1]','…it makes the driven gear turn in the <b>same direction</b> as the driver without changing the ratio [1]','A <b>compound</b> gear has two gears on the same shaft [1]','…giving a <b>large ratio in a small space</b> [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['idler','direction','compound','same shaft','large ratio'],acc:'',tip:'One sentence for each gear.'},
{ref:'3.3.6',cmd:'Apply',marks:4,q:'A motor turns at 1800 rpm. It drives a 20-tooth gear that meshes with a 60-tooth gear on the same shaft as a 15-tooth gear, which meshes with a 45-tooth gear. Apply the data to calculate the output speed.',
 pts:['Stage 1 ratio = 60 ÷ 20 = <b>3</b> [1]','Stage 2 ratio = 45 ÷ 15 = <b>3</b> [1]','Overall ratio = 3 × 3 = <b>9</b> [1]','Output speed = 1800 ÷ 9 = <b>200 rpm</b> [1]'],
 award:'Award [1] per step.',kw:['3','9','200 rpm'],acc:'Follow-through applies.',tip:'Multiply stage ratios for a compound train.'},
{ref:'3.3.6',cmd:'Outline',marks:3,q:'Outline how a rack and pinion works and give one example of its use.',
 pts:['A <b>pinion</b> (small gear) meshes with a toothed straight bar called a rack [1]','Turning the pinion moves the rack in a <b>straight line</b> (rotary to linear) [1]','Example: car steering [1]'],
 award:'Award [1] for each up to [3 max].',kw:['pinion','rack','rotary','linear','steering'],acc:'',tip:'Describe both parts and the conversion.'},
{ref:'3.3.7',cmd:'Explain',marks:4,q:'Explain why a V-belt or toothed belt may be preferred to a flat belt, and why a belt drive may be preferred to gears in some products.',
 pts:['A <b>V-belt</b> grips the groove so there is less slip [1]','A <b>toothed belt</b> does not slip and keeps timing [1]','A belt drive can join shafts that are <b>far apart</b> and is <b>quiet and cheap</b> [1]','It may slip under overload, protecting the motor, and needs no lubrication [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['grip','slip','timing','quiet','far apart'],acc:'',tip:'Compare belts, then belts and gears.'},
{ref:'3.3.8',cmd:'Explain',marks:3,q:'Explain how a snail cam and follower could be used in a stamping machine.',
 pts:['The cam turns with <b>rotary motion</b> [1]','The follower is lifted <b>slowly</b> as the radius increases [1]','…then falls <b>suddenly</b> at the drop, so the stamp hits the surface [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['rotary','slowly','suddenly','follower','drop'],acc:'Accept a hammer example.',tip:'Describe the motion of the follower in two stages.'},
{ref:'3.3.9',cmd:'Apply',marks:3,q:'A crowbar of length 1.2 m has its fulcrum 0.2 m from the load end. Apply the data to calculate the effort needed to move a 900 N load and state its class.',
 pts:['Effort arm = 1.2 − 0.2 = <b>1.0 m</b>; E × 1.0 = 900 × 0.2 [1]','E = <b>180 N</b> [1]','<b>1st class</b> lever (fulcrum between load and effort) [1]'],
 award:'Award [1] for each step.',kw:['180 N','1st class','fulcrum'],acc:'Follow-through applies.',tip:'Use moments about the fulcrum.'},
{ref:'3.3.10',cmd:'Describe',marks:4,q:'Describe how a bell crank and a parallel motion linkage are used.',
 pts:['A <b>bell crank</b> is an L-shaped lever that changes the direction of motion by 90° [1]','Example: bicycle brake cable or aircraft control [1]','A <b>parallel motion</b> linkage keeps the output parallel to the input and moves in the same direction [1]','Example: toolbox tray or scissor lift [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['bell crank','90°','parallel','same direction','example'],acc:'',tip:'Say the direction change and an example.'},
{ref:'3.3.5',cmd:'Discuss',marks:6,q:'Discuss how gears, a cam and a lever could be combined in a hand-cranked automata toy of a nodding bird.',
 pts:['The <b>crank</b> gives rotary input [1]','<b>Gears</b> (compound) reduce the speed and increase torque so the movement is slow and easy to turn [1]','A <b>cam</b> on the shaft turns rotary motion into reciprocating motion of the follower [1]','A <b>lever</b> (or linkage) transmits the follower’s motion and may change its direction to nod the head [1]','Each stage adds <b>friction</b>, so efficiency is reduced; lubricate and keep parts few [1]','Judgement: the combination gives a controlled, attractive movement but a more complex and costly build than a single mechanism [1]'],
 award:'Award [1] for each valid point up to [6 max].',kw:['crank','gears','cam','follower','lever','friction'],acc:'',tip:'Follow the motion from input to output.'}
],

practice:[
{id:'cs1',title:'Case study 1: An electric winch for a boat trailer',paper:'Paper 2 style · HL',
 scenario:`<p>A company designs a small electric winch to pull a boat onto a trailer. A motor turns at 1500 rpm. Its rotation is slowed by a compound gear train and then drives a drum that winds a rope. The motor gear has 15 teeth and drives a 60-tooth gear. A 12-tooth gear on the same shaft drives a 48-tooth gear fixed to the drum. A ratchet and pawl stops the drum from unwinding when the motor stops. Data is illustrative.</p>`,
 fig:Fig.flow(['Motor (rotary)','Gear 1: 15 → 60','Gear 2: 12 → 48','Drum winds rope','Boat moves (linear)'],{per:5,bw:84,bh:54,hl:[1,2],title:'Winch system'}),
 cap:'Figure 1: Block diagram of the winch.',
 table:`<table class="t"><tr><th colspan="2">Table 1: Winch data</th></tr><tr><td>Motor speed</td><td>1500 rpm</td></tr><tr><td>Rope pull needed</td><td>2400 N</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'3.3.1',q:'Identify the type of motion at the input and at the output of the winch.',award:'Award [1] each.',pts:['Input: <b>rotary</b> [1]','Output: <b>linear</b> (the boat moves in a straight line) [1]'],acc:'Rope winding may be accepted as rotary.',kw:['rotary','linear'],tip:'Motor and boat.'},
 {l:'(b)',cmd:'Apply',marks:4,ref:'3.3.6',q:'Apply the data to calculate the overall gear ratio and the drum speed.',award:'Award [1] per step.',pts:['Stage 1: 60 ÷ 15 = <b>4</b> [1]','Stage 2: 48 ÷ 12 = <b>4</b> [1]','Overall ratio = 4 × 4 = <b>16</b> [1]','Drum speed = 1500 ÷ 16 = <b>94 rpm</b> (93.75) [1]'],acc:'Follow-through applies.',kw:['4','16','94 rpm'],tip:'Multiply the stage ratios.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.3.6',q:'Explain what happens to the torque at the drum, and why this is needed.',award:'Award [1] for each valid point up to [3 max].',pts:['Torque is <b>increased by about 16 times</b> (less friction losses) [1]','A small motor can then pull a <b>heavy load</b> [1]','The cost is lower speed, which is acceptable for slowly pulling a boat [1]'],acc:'',kw:['torque','increased','16','slower'],tip:'Speed down means torque up.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.6',q:'Explain how a ratchet and pawl keeps the boat from rolling back when the motor stops.',award:'Award [1] for each valid point up to [3 max].',pts:['The ratchet wheel has <b>angled teeth</b> on the drum shaft [1]','The <b>pawl</b> engages the teeth and allows rotation only in the winding direction [1]','It blocks reverse rotation so the rope cannot unwind [1]'],acc:'',kw:['teeth','pawl','one direction','unwind'],tip:'Describe the parts and what each does.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.3.5',q:'Evaluate the use of a compound gear train in this winch compared with a single pair of gears with the same overall ratio.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['Compound gives a <b>large ratio (16:1) in a compact space</b> [1]','A single pair would need a very large driven gear or tiny driver, with a weak small tooth [1]','Compound has more gears, so <b>more friction and lower efficiency</b> [1]','More parts raise <b>cost and maintenance</b> [1]','Decision: compound is better for this heavy, slow job because of size and strength [1]'],acc:'',kw:['compact','large ratio','friction','cost','decision'],tip:'Weigh space against friction and cost.'}
 ]},

{id:'cs2',title:'Case study 2: A wheelbarrow and a garden tool',paper:'Paper 2 style · HL',
 scenario:`<p>A gardening company sells a wheelbarrow, a pair of long-handled pruning shears and a fishing-style telescopic fruit picker. The wheelbarrow is shown in Figure 2: the wheel is the fulcrum, the load is carried 0.5 m from the wheel and the handles are held 1.5 m from the wheel.</p>`,
 fig:wb,
 cap:'Figure 2: Wheelbarrow as a lever.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Garden tools</th></tr><tr><th>Tool</th><th>Lever class</th><th>Notes</th></tr><tr><td>Wheelbarrow</td><td>?</td><td>Load 600 N</td></tr><tr><td>Pruning shears</td><td>1st</td><td>Blades far from the fulcrum are used for cutting thick branches near the pivot</td></tr><tr><td>Fruit picker</td><td>3rd</td><td>Effort is between fulcrum and load</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'3.3.9',q:'Identify the class of lever of the wheelbarrow.',award:'Award [1].',pts:['<b>2nd class</b> [1]'],acc:'',kw:['2nd class'],tip:'Which one is in the middle?'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.3.9',q:'Apply Figure 2 to calculate the effort needed to lift the load and the mechanical advantage.',award:'Award [1] for moments, [1] for effort, [1] for MA.',pts:['E × 1.5 = 600 × 0.5 [1]','E = <b>200 N</b> [1]','MA = 600 ÷ 200 = <b>3</b> [1]'],acc:'',kw:['200 N','3'],tip:'Moments about the fulcrum.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.3.9',q:'Explain why moving the load closer to the wheel makes the wheelbarrow easier to lift.',award:'Award [1] for each valid point up to [3 max].',pts:['The <b>load arm becomes shorter</b> [1]','The moment of the load about the fulcrum is smaller, so the effort needed is smaller [1]','MA increases [1]'],acc:'',kw:['load arm','moment','MA'],tip:'Use the moments equation.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.9',q:'Explain why a 3rd class lever such as the fruit picker has an MA below 1 and why it is still useful.',award:'Award [1] for each valid point up to [3 max].',pts:['The effort is closer to the fulcrum than the load, so <b>more effort than load</b> is needed (MA &lt; 1) [1]','But the load end moves a <b>larger distance and faster</b> [1]','This lets the user reach high fruit and make precise movements [1]'],acc:'',kw:['MA < 1','distance','speed','reach'],tip:'Say what is gained instead of force.'},
 {l:'(e)',cmd:'Evaluate',marks:4,ref:'3.3.3',q:'The wheelbarrow handle is replaced with a longer handle of 2.0 m (load still 0.5 m from the wheel). Evaluate this change.',award:'Award [1] for each valid point up to [4 max].',pts:['Effort = 600 × 0.5 ÷ 2.0 = <b>150 N</b>, so it is easier to lift [1]','MA = 4, VR is larger [1]','But the barrow is <b>longer and harder to turn in tight spaces</b>, and uses more material [1]','Judgement: worth it for heavy loads on open ground, not for small gardens [1]'],acc:'',kw:['150 N','MA 4','harder to turn','judgement'],tip:'Calculate and weigh the trade-offs.'}
 ]},

{id:'cs3',title:'Case study 3: A mechanical bird automaton',paper:'Paper 2 style · HL',
 scenario:`<p>A designer makes a hand-cranked automaton of a woodpecker. A user turns a crank. A belt on two pulleys slows the rotation (driver 30 mm, driven 90 mm). The driven pulley is fixed to a shaft with an eccentric cam. A follower rests on the cam and is joined to a lever that tilts the woodpecker’s head. A bell crank joins a second cam follower to the tail. Data is illustrative.</p>`,
 fig:Fig.flow(['Crank (rotary)','Belt and pulleys','Cam on shaft','Follower','Lever and bell crank','Head and tail move'],{per:3,bw:130,bh:48,hl:[2],title:'Automaton mechanism'}),
 cap:'Figure 3: Mechanism of the automaton.',
 table:'',
 parts:[
 {l:'(a)',cmd:'Apply',marks:2,ref:'3.3.7',q:'Apply the pulley sizes to calculate the velocity ratio and the output speed if the crank turns at 120 rpm.',award:'Award [1] each.',pts:['VR = 90 ÷ 30 = <b>3</b> [1]','Speed = 120 ÷ 3 = <b>40 rpm</b> [1]'],acc:'',kw:['3','40 rpm'],tip:'Driven ÷ driver.'},
 {l:'(b)',cmd:'Explain',marks:3,ref:'3.3.8',q:'Explain how the eccentric cam and follower produce the motion of the head.',award:'Award [1] for each valid point up to [3 max].',pts:['The cam’s <b>rotary motion</b> pushes the follower up and down [1]','The eccentric shape gives a <b>smooth rise and fall</b> once per turn [1]','The follower motion is reciprocating and is passed to the head through the lever [1]'],acc:'',kw:['rotary','follower','smooth','reciprocating'],tip:'Say what the follower does.'},
 {l:'(c)',cmd:'Describe',marks:2,ref:'3.3.10',q:'Describe the purpose of the bell crank joining the second follower to the tail.',award:'Award [1] each.',pts:['It changes the direction of the motion through <b>90°</b> [1]','So a vertical follower movement becomes a horizontal tail movement (or a different arrangement can be chosen) [1]'],acc:'',kw:['90°','direction'],tip:'Direction change.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.7',q:'Explain one advantage and one disadvantage of using a belt drive rather than gears in this toy.',award:'Award [1] each, up to [3 max].',pts:['Advantage: <b>quiet and cheap</b>, and the shafts can be spaced as required [1]','Advantage: slips if the mechanism jams, protecting the parts [1]','Disadvantage: the belt may <b>slip or stretch</b>, so timing is not exact [1]'],acc:'',kw:['quiet','cheap','slip','stretch'],tip:'One of each.'},
 {l:'(e)',cmd:'Discuss',marks:5,ref:'3.3.5',q:'Discuss the efficiency and reliability of an automaton that combines a belt, cam, lever and bell crank.',award:'Award [1] for each valid point up to [5 max].',pts:['Each stage adds <b>friction</b> so overall efficiency falls [1]','The input effort needed by the user rises [1]','Lubrication, smooth cams and roller followers reduce losses [1]','More joints mean more <b>wear and play</b>, lowering reliability and precision [1]','Judgement: for a toy, low loads make the losses acceptable; simplify the mechanism for better reliability [1]'],acc:'',kw:['friction','wear','roller follower','lubrication','judgement'],tip:'Link number of stages to losses.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'Identify',marks:1,ref:'3.3.1',q:'Identify the type of motion of a swing.',award:'Award [1].',pts:['<b>Oscillating</b> [1]'],acc:'',kw:['oscillating'],tip:'Arc about a pivot.'},
 {l:'2',cmd:'State',marks:1,ref:'3.3.6',q:'State the purpose of a worm gear.',award:'Award [1].',pts:['A <b>large reduction in speed</b> with a 90° change of axis (and increased torque) [1]'],acc:'',kw:['reduction','90°'],tip:'Think of a tuning peg.'},
 {l:'3',cmd:'Apply',marks:2,ref:'3.3.6',q:'A 24-tooth driver turns a 72-tooth gear at 600 rpm. Apply the data to calculate the speed of the driven gear.',award:'Award [1] each.',pts:['Ratio = 72 ÷ 24 = 3 [1]','Speed = 600 ÷ 3 = <b>200 rpm</b> [1]'],acc:'',kw:['3','200 rpm'],tip:'Ratio, then divide.'},
 {l:'4',cmd:'Outline',marks:2,ref:'3.3.9',q:'Outline what is meant by a 3rd class lever.',award:'Award [1] each.',pts:['A lever with the <b>effort between the fulcrum and the load</b> [1]','Example: tweezers or fishing rod [1]'],acc:'',kw:['effort','between','example'],tip:'Say the order.'},
 {l:'5',cmd:'Apply',marks:2,ref:'3.3.3',q:'MA is 2.5 and VR is 3. Apply the data to calculate the efficiency.',award:'Award [1] each.',pts:['Efficiency = MA ÷ VR × 100 [1]','= <b>83%</b> [1]'],acc:'Accept 83.3%.',kw:['83%'],tip:'MA ÷ VR.'},
 {l:'6',cmd:'Describe',marks:2,ref:'3.3.8',q:'Describe the motion of a follower on a snail cam.',award:'Award [1] each.',pts:['<b>Slow rise</b> as the radius increases [1]','<b>Sudden drop</b> once per turn [1]'],acc:'',kw:['slow rise','sudden drop'],tip:'Two stages.'},
 {l:'7',cmd:'Outline',marks:2,ref:'3.3.10',q:'Outline one use of a reverse motion linkage.',award:'Award [1] each.',pts:['It <b>moves the output in the opposite direction</b> to the input [1]','Example: foot pedal pump or a tilt mechanism [1]'],acc:'',kw:['opposite','example'],tip:'Name a product.'},
 {l:'8',cmd:'Explain',marks:2,ref:'3.3.7',q:'Explain why a timing belt is used for the cam of a car engine.',award:'Award [1] each.',pts:['It has <b>teeth that do not slip</b> [1]','…so the valves and pistons stay <b>in time</b> [1]'],acc:'',kw:['teeth','slip','timing'],tip:'Slip changes timing.'}
 ]},

paper:[]
};
})();
