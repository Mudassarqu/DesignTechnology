window.TOPICS=window.TOPICS||{};
(function(){
const tx=(x,y,s,a,f)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}"${f?` style="fill:${f};font-weight:700"`:''}>${s}</text>`;
const DEF=`<defs><marker id="la" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--bad)"/></marker><marker id="lb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
/* lever with F at fx, L at lx, E at ex (px), labelled distances */
function lever(fx,lx,ex,lLab,eLab,dL,dE,aria){
 let b=DEF+`<rect x="50" y="76" width="420" height="10" rx="2" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/>`;
 b+=`<path d="M${fx} 86 l-14 26 h28z" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/>`+tx(fx,128,'Fulcrum');
 b+=`<line x1="${lx}" y1="28" x2="${lx}" y2="73" stroke="var(--bad)" stroke-width="3" marker-end="url(#la)"/>`+tx(lx,20,lLab,null,'var(--bad)');
 b+=`<line x1="${ex}" y1="28" x2="${ex}" y2="73" stroke="var(--blue)" stroke-width="3" marker-end="url(#lb)"/>`+tx(ex,20,eLab,null,'var(--blue)');
 const y1=148,y2=180;
 b+=`<line x1="${fx}" y1="${y1}" x2="${lx}" y2="${y1}" stroke="var(--ink)" stroke-width="1.6"/>`+tx(lx+8,y1+4,dL,'start');
 b+=`<line x1="${fx}" y1="${y2}" x2="${ex}" y2="${y2}" stroke="var(--ink)" stroke-width="1.6"/>`+tx((fx+ex)/2,y2+14,dE);
 return `<svg viewBox="0 0 520 200" role="img" aria-label="${aria}">${b}</svg>`;
}
const wb=lever(110,170,430,'Load 30 kg','Effort E','Load arm 300 mm','Effort arm 900 mm','A wheelbarrow lever: load arm 300 millimetres, effort arm 900 millimetres');
const opener=lever(70,110,430,'Load 90 N','Effort E','Load arm 20 mm','Effort arm 100 mm','A bottle opener lever with the fulcrum at the cap edge, load arm 20 millimetres and effort arm 100 millimetres');

window.TOPICS['b3-3']={
id:'b3-3',code:'B3.3',title:'Mechanical systems: application and selection',level:'HL',hours:8,
guiding:'How can mechanical systems be incorporated into product design?',
pptx:'resources/B3.3HL_Mechanical_Systems_Application_and_Selection.pptx',pptxName:'B3.3 Mechanical systems: application and selection (slides)',

notes:[
{id:'s331',ref:'3.3.1',title:'Calculating mechanical advantage',
 must:'Calculate mechanical advantage in gear, pulley, belt and lever systems.',
 html:`
<div class="key"><b>Mechanical advantage (MA) = load ÷ effort.</b> It shows how much a machine multiplies the input force. MA above 1 means less effort is needed, but the effort moves a longer distance. It is <b>ideal</b> if friction is ignored and <b>actual</b> when measured.</div>
<div class="tw"><table class="t"><tr><th>System</th><th>MA (ideal)</th><th>Worked example</th></tr>
<tr><td><b>Gears</b></td><td>teeth on driven ÷ teeth on driver (or diameter ratio)</td><td>10-tooth driver, 40-tooth driven: MA = 40 ÷ 10 = <b>4</b>. Output torque is four times the input.</td></tr>
<tr><td><b>Pulleys</b> (block and tackle)</td><td>number of rope sections supporting the load (do not count the free end you pull)</td><td>4 supporting ropes: MA = <b>4</b></td></tr>
<tr><td><b>Belt drive</b></td><td>diameter of driven pulley ÷ diameter of driver pulley</td><td>Driver 8 cm, driven 24 cm: MA = 24 ÷ 8 = <b>3</b></td></tr>
<tr><td><b>Levers</b></td><td>effort arm ÷ load arm</td><td>Effort arm 60 cm, load arm 20 cm: MA = <b>3</b></td></tr></table></div>
<div class="ex"><b class="l">Why designers calculate MA.</b> To make products easy and safe to use (scissors, bottle openers), to ensure the user can apply the force (children, older users), to balance force against speed (a crane needs force; a fan needs speed), and to choose materials that can carry the forces.</div>
<div class="tip"><b>Exam tip.</b> Choose the correct formula for the system, show the substitution and give the result with a meaning (“three times less effort”).</div>`},

{id:'s332',ref:'3.3.2',title:'Calculating velocity ratio',
 must:'Calculate velocity ratios for gear-, pulley- and belt-driven systems.',
 html:`
<div class="key"><b>Velocity ratio (VR) = distance moved by the effort ÷ distance moved by the load.</b> VR compares movement, not force.</div>
<div class="tw"><table class="t"><tr><th>System</th><th>VR</th><th>Example</th></tr>
<tr><td>General machine</td><td>effort distance ÷ load distance</td><td>Handle moves 10 ft, load rises 2 ft: VR = <b>5</b></td></tr>
<tr><td>Gears</td><td>teeth on driven ÷ teeth on driver</td><td>Driven 40, driver 10: VR = <b>4</b> (the driver turns 4 times for 1 turn of the driven)</td></tr>
<tr><td>Belt and pulleys</td><td>diameter of driven ÷ diameter of driver</td><td>Driven 200 mm, driver 100 mm: VR = <b>2</b> (the driven turns at half speed)</td></tr>
<tr><td>Pulley block</td><td>number of rope sections supporting the load</td><td>Pulling 5 m of rope raises the load 1 m: VR = <b>5</b></td></tr></table></div>
<div class="box" style="margin-top:14px"><h4>Do not confuse MA and VR</h4><p><b>VR depends only on geometry</b> (sizes, teeth, distances). <b>MA depends on forces</b> and includes friction. In a perfect machine MA = VR; in a real one, MA &lt; VR.</p></div>
<div class="tip"><b>Exam tip.</b> If a question gives distances or sizes, it is VR. If it gives forces, it is MA.</div>`},

{id:'s333',ref:'3.3.3',title:'Calculating efficiency',
 must:'Calculate efficiency for gear- and belt-driven systems.',
 html:`
<div class="key"><b>Efficiency = (useful work output ÷ total energy input) × 100%.</b> For machines: <b>efficiency = (MA ÷ VR) × 100%</b>, and for power transmission: output power ÷ input power × 100%.</div>
<div class="ex"><b class="l">Worked example 1.</b> 100 J is put into a pulley system and 80 J is used to lift the load. Efficiency = 80 ÷ 100 × 100 = <b>80%</b>. The other 20 J is lost as heat and friction.</div>
<div class="ex"><b class="l">Worked example 2: belt drive.</b> Driver 80 mm, driven 240 mm, so VR = 3. A measured input torque of 1.0 N·m gives an output torque of 2.6 N·m, so the actual MA = 2.6. Efficiency = 2.6 ÷ 3 × 100 = <b>86.7%</b>.</div>
<div class="ex"><b class="l">Worked example 3: gears.</b> A gear pair with ratio 4 gives 3.6 N·m from 1.0 N·m. Efficiency = (3.6 ÷ 4) × 100 = <b>90%</b>.</div>
<ul class="tight"><li>Loss causes: friction between gear teeth (heat), belt slippage and flexing, poor lubrication, misalignment.</li><li>Typical: spur gears 90–98% per stage; belts 90–95%; worm gears often 40–80%.</li><li>In a train of several stages, <b>efficiencies multiply</b>: 0.95 × 0.90 = 0.855 (85.5%).</li></ul>
<p>Designers care about efficiency to <b>reduce wasted energy and running cost</b>, to select materials and components that reduce friction and wear, to make systems last longer, and to meet safety and environmental standards.</p>
<div class="tip"><b>Exam tip.</b> Efficiency can never exceed 100%. If your answer does, recheck.</div>`},

{id:'s334',ref:'3.3.4',title:'Gear and belt systems: ratios and speeds',
 must:'Calculate gear and belt ratios, speeds at several points, and construct systems that increase or decrease speed.',
 html:`
<p>Gear and belt systems change the <b>speed, torque (power), direction</b> and <b>efficiency</b> of rotary motion. Speed and torque trade off: a small driver turning a large driven gear gives <b>less speed and more torque</b>.</p>
<div class="key"><b>Gear ratio = teeth on driven ÷ teeth on driver.</b> <b>Output speed = input speed ÷ ratio</b> (= input × driver teeth ÷ driven teeth). For belts use pulley diameters.</div>
<div class="ex"><b class="l">Worked example.</b> A 25-tooth driver turns at 600 rpm and drives a 75-tooth gear. Ratio = 75 ÷ 25 = 3. Output speed = 600 ÷ 3 = <b>200 rpm</b>.</div>
<h3>Compound train and speeds at several points</h3>
<div class="ex"><b class="l">Worked example.</b> A motor runs at 1800 rpm. Stage 1: 15-tooth gear drives a 45-tooth gear (ratio 3). On the same shaft as the 45-tooth gear is a 12-tooth gear that drives a 48-tooth gear (ratio 4).<br>Speed after stage 1 = 1800 ÷ 3 = <b>600 rpm</b>. Final speed = 600 ÷ 4 = <b>150 rpm</b>. Overall ratio = 3 × 4 = 12, so 1800 ÷ 12 = 150 rpm. ✓</div>
<ul class="tight"><li>An <b>idler</b> gear changes direction but not the ratio.</li><li><b>Meshing gears</b> rotate in opposite directions.</li><li>A <b>crossed belt</b> reverses direction; an open belt does not.</li><li>Belts are quieter and can slip (overload protection); gears do not slip but can be noisy and lose energy to friction.</li></ul>
<h3>Constructing a system</h3>
<p>To reduce 1200 rpm to 100 rpm you need a ratio of 12. One pair with ratio 12 needs a very large gear, so use <b>two stages</b>: 12-tooth → 48-tooth (ratio 4) and 12-tooth → 36-tooth (ratio 3), giving 4 × 3 = 12. To increase speed, put the larger gear on the input.</p>
<div class="tip"><b>Exam tip.</b> Write the speed after each stage. Multiply ratios for a compound train.</div>`},

{id:'s335',ref:'3.3.5',title:'Cams, followers and displacement diagrams',
 must:'Analyse how cam systems translate rotary motion into reciprocating motion, construct systems that use cams, and interpret diagrams of cams in a system.',
 html:`
<p>A <b>cam</b> is a profiled disc on a rotating shaft; the <b>follower</b> rests against it. As the cam turns, its profile moves the follower up and down (reciprocating motion). The <b>cam profile</b> controls the <b>timing, distance and dwell</b>.</p>
<div class="tw"><table class="t"><tr><th>Cam</th><th>Follower motion</th></tr><tr><td>Pear</td><td>Long dwell, then a sudden rise and fall</td></tr><tr><td>Snail (drop)</td><td>Gradual rise then a sudden drop</td></tr><tr><td>Eccentric (circular off-centre)</td><td>Smooth, regular rise and fall (sine-like)</td></tr></table></div>
<p>Uses: engine valves, sewing-machine needles, automata toys, packaging machines.</p>
<h3>Displacement diagram</h3>
<p>A <b>displacement diagram</b> plots follower height (lift) against cam angle for one full rotation (360°). Designers draw it <b>before</b> the cam. Read it by sections: <b>rise</b> (line goes up), <b>dwell</b> (flat), <b>fall</b> (line goes down).</p>
<div class="tw"><table class="t"><tr><th>Cam angle (°)</th><th>0</th><th>60</th><th>120</th><th>180</th><th>240</th><th>300</th><th>360</th></tr><tr><td>Displacement (mm)</td><td>0</td><td>30</td><td>30</td><td>40</td><td>40</td><td>20</td><td>0</td></tr></table></div>
<ul class="tight"><li>0° to 60°: <b>rise</b> by 30 mm (0.5 mm per degree).</li><li>60° to 120°: <b>dwell</b> at 30 mm.</li><li>120° to 180°: <b>rise</b> by 10 mm to 40 mm.</li><li>180° to 240°: <b>dwell</b> at the maximum, 40 mm.</li><li>240° to 360°: <b>fall</b> from 40 mm to 0 mm.</li></ul>
<div class="ex"><b class="l">Speed link.</b> A cam turning at 60 rpm completes one turn per second. A 60° section takes 60 ÷ 360 = 1/6 s = 0.167 s. The follower makes 60 strokes per minute.</div>
<div class="tip"><b>Exam tip.</b> “Analyse” a cam diagram by splitting it into rise, dwell and fall, quoting angles and distances.</div>`},

{id:'s336',ref:'3.3.6',title:'Levers: load, effort and fulcrum',
 must:'Analyse load, effort and fulcrum, calculate load and effort, construct systems that use levers, and interpret diagrams of levers.',
 html:`
<div class="key"><b>Principle of moments: effort × effort arm = load × load arm.</b> <b>MA = effort arm ÷ load arm = load ÷ effort.</b> Arms are measured from the fulcrum.</div>
<div class="tw"><table class="t"><tr><th>Class</th><th>Middle point</th><th>MA</th><th>Examples</th></tr><tr><td>1st</td><td>Fulcrum</td><td>May be above or below 1; can reverse direction</td><td>Pliers, scissors, seesaw</td></tr><tr><td>2nd</td><td>Load</td><td>Always above 1; reduces effort</td><td>Wheelbarrow, bottle opener, nutcracker</td></tr><tr><td>3rd</td><td>Effort</td><td>Always below 1; more control and speed</td><td>Tweezers, fishing rod</td></tr></table></div>
${wb}
<div class="ex"><b class="l">Worked example: wheelbarrow.</b> Effort arm 900 mm, load arm 300 mm, load 30 kg. MA = 900 ÷ 300 = <b>3</b>. Effort = 30 ÷ 3 = <b>10 kg</b>. The load feels 20 kg lighter than the actual load.</div>
<div class="ex"><b class="l">Calculating the load.</b> A user pushes with 150 N on a 2nd-class lever with effort arm 0.8 m and load arm 0.2 m. Load = effort × MA = 150 × 4 = <b>600 N</b>.</div>
<h3>Designing with levers</h3>
<ul class="tight"><li>To reduce effort, <b>lengthen the effort arm</b> or <b>shorten the load arm</b>.</li><li>Longer arms mean the effort moves further and the product is larger.</li><li>Choose class by purpose: 2nd to reduce effort, 3rd for precision, 1st to reverse direction or balance.</li></ul>
<div class="tip"><b>Exam tip.</b> Identify the class by the middle position, then use moments.</div>`},

{id:'s337',ref:'3.3.1–3.3.6',title:'Choosing and combining mechanisms',
 must:'Apply the calculations to select and combine mechanical systems for a purpose.',
 html:`
<div class="tw"><table class="t"><tr><th>Need</th><th>Choose</th><th>Reason and trade-off</th></tr>
<tr><td>Slow output, high torque</td><td>Compound gears or worm gear</td><td>Large ratio in small space; friction losses; worm gears are less efficient</td></tr>
<tr><td>Link shafts far apart, quiet</td><td>Belt drive</td><td>Quiet, cheap, slips on overload; stretches and slips</td></tr>
<tr><td>Exact timing</td><td>Gears or toothed belt</td><td>No slip</td></tr>
<tr><td>Lift heavy loads by hand</td><td>Block and tackle</td><td>High MA but long rope pulled</td></tr>
<tr><td>Rotary to reciprocating</td><td>Cam and follower</td><td>Profile sets the motion; wear at the contact</td></tr>
<tr><td>Reduce user effort</td><td>2nd-class lever</td><td>Larger product, longer travel</td></tr></table></div>
<div class="ex"><b class="l">Worked example: hand-crank winch.</b> A crank (effort arm 0.30 m) turns a drum of radius 0.06 m. VR = 0.30 ÷ 0.06 = 5. With 90% efficiency, MA = 5 × 0.9 = 4.5, so a 100 N effort lifts a load of 450 N.</div>
<div class="tip"><b>Exam tip.</b> Combine a calculation with a justification: state the number and why it suits the user.</div>`}
],

cards:[
['Mechanical advantage','Load divided by effort.'],
['Velocity ratio','Distance moved by effort divided by distance moved by load.'],
['Efficiency','(MA ÷ VR) × 100%, or output work divided by input work × 100%.'],
['Ideal MA','MA calculated without friction losses.'],
['Actual MA','MA measured in a real machine.'],
['Gear ratio','Teeth on driven gear divided by teeth on driver gear.'],
['Driver gear','The gear on the input shaft.'],
['Driven gear','The gear on the output shaft.'],
['Compound gear train','Gears on shared shafts so that ratios multiply.'],
['Idler gear','A gear that changes direction without changing the ratio.'],
['Output speed','Input speed divided by the gear ratio.'],
['Torque','The turning effect of a force.'],
['Belt drive','Pulleys joined by a belt to transmit rotary motion.'],
['Driver pulley','The pulley on the input shaft.'],
['Driven pulley','The pulley on the output shaft.'],
['Crossed belt','A belt twisted to reverse rotation.'],
['Block and tackle','A pulley system with several rope sections that gives MA.'],
['Supporting ropes','The rope sections that carry the load; MA equals their number.'],
['Cam','A shaped wheel that moves a follower.'],
['Follower','The part that rides on the cam.'],
['Reciprocating motion','Back-and-forth motion in a straight line.'],
['Dwell','A period when the follower does not move.'],
['Displacement diagram','A graph of follower height against cam angle.'],
['Pear cam','Long dwell then a sudden rise.'],
['Snail cam','Gradual rise then sudden drop.'],
['Eccentric cam','Smooth regular rise and fall.'],
['Lever','A rigid bar that pivots about a fulcrum.'],
['Fulcrum','The pivot point of a lever.'],
['Effort arm','Distance from the fulcrum to the effort.'],
['Load arm','Distance from the fulcrum to the load.'],
['Principle of moments','Effort × effort arm = load × load arm.'],
['1st class lever','Fulcrum in the middle.'],
['2nd class lever','Load in the middle; MA always above 1.'],
['3rd class lever','Effort in the middle; MA always below 1.'],
['Friction','A force that opposes movement and wastes energy as heat.'],
['Slip','Loss of drive between a belt and pulley.'],
['Lubrication','Using oil or grease to reduce friction.'],
['rpm','Revolutions per minute.'],
['Newton metre (N·m)','The unit of torque.']
],

mcq:[
{ref:'3.3.1',q:'MA =',o:['Load ÷ effort','Effort ÷ load','Distance ÷ time','Force × distance'],a:0,why:'Definition.',live:true},
{ref:'3.3.1',q:'A 10-tooth driver turns a 40-tooth gear. MA =',o:['4','0.25','30','400'],a:0,why:'40 ÷ 10.',live:true},
{ref:'3.3.1',q:'A pulley system has 5 supporting ropes. MA =',o:['5','1','0.2','25'],a:0,why:'Count the supporting ropes.'},
{ref:'3.3.1',q:'A belt with driver 8 cm and driven 24 cm has MA =',o:['3','0.33','16','192'],a:0,why:'24 ÷ 8.',live:true},
{ref:'3.3.1',q:'A lever has effort arm 60 cm and load arm 20 cm. MA =',o:['3','0.33','40','1200'],a:0,why:'60 ÷ 20.'},
{ref:'3.3.1',q:'A higher MA means…',o:['Less effort is needed','More effort is needed','No movement','Higher speed'],a:0,why:'Force is multiplied.',live:true},
{ref:'3.3.2',q:'VR =',o:['Effort distance ÷ load distance','Load ÷ effort','Teeth only','Speed ÷ torque'],a:0,why:'Definition.',live:true},
{ref:'3.3.2',q:'The handle moves 10 m and the load rises 2 m. VR =',o:['5','0.2','8','20'],a:0,why:'10 ÷ 2.'},
{ref:'3.3.2',q:'Driven pulley 200 mm, driver 100 mm. VR =',o:['2','0.5','100','20 000'],a:0,why:'200 ÷ 100.',live:true},
{ref:'3.3.2',q:'MA and VR are equal only in…',o:['A perfect machine with no friction','Every machine','A broken machine','A gear only'],a:0,why:'Friction makes MA smaller.'},
{ref:'3.3.2',q:'VR depends on…',o:['Geometry (sizes, teeth, distances)','Friction','Mass','Colour'],a:0,why:'It is a purely geometric ratio.'},
{ref:'3.3.3',q:'Efficiency =',o:['(Output ÷ input) × 100%','Input ÷ output','MA × VR','Load ÷ effort'],a:0,why:'Percentage of useful work.',live:true},
{ref:'3.3.3',q:'MA = 2.4 and VR = 3. Efficiency =',o:['80%','125%','7.2%','0.8%'],a:0,why:'2.4 ÷ 3 × 100.',live:true},
{ref:'3.3.3',q:'100 J in, 75 J useful out. Efficiency =',o:['75%','25%','175%','7500%'],a:0,why:'75 ÷ 100.'},
{ref:'3.3.3',q:'Two stages with efficiencies 90% and 90% give an overall…',o:['81%','90%','180%','100%'],a:0,why:'0.9 × 0.9.',live:true},
{ref:'3.3.3',q:'An efficiency above 100% would mean…',o:['A calculation error','A perfect machine','High torque','Low friction'],a:0,why:'Energy cannot be created.'},
{ref:'3.3.4',q:'A 25-tooth driver drives a 75-tooth gear. The gear ratio is…',o:['3','0.33','50','100'],a:0,why:'75 ÷ 25.',live:true},
{ref:'3.3.4',q:'Input 600 rpm with ratio 3. Output =',o:['200 rpm','1800 rpm','603 rpm','597 rpm'],a:0,why:'600 ÷ 3.'},
{ref:'3.3.4',q:'A small driver turning a large driven gear gives…',o:['Lower speed and higher torque','Higher speed','Same speed','No torque'],a:0,why:'Gearing down.',live:true},
{ref:'3.3.4',q:'Two ratios of 3 and 4 in a compound train give…',o:['12','7','1.33','0.75'],a:0,why:'Multiply.'},
{ref:'3.3.4',q:'An idler gear…',o:['Changes direction, not ratio','Changes ratio','Doubles torque','Adds slip'],a:0,why:'It sits between driver and driven.',live:true},
{ref:'3.3.4',q:'A crossed belt…',o:['Reverses direction','Increases speed','Stops slip','Is a gear'],a:0,why:'The twist reverses rotation.'},
{ref:'3.3.5',q:'A cam and follower changes rotary motion to…',o:['Reciprocating motion','Rotary motion','Heat','Electric current'],a:0,why:'The follower moves up and down.',live:true},
{ref:'3.3.5',q:'A flat horizontal section on a displacement diagram shows…',o:['Dwell','Rise','Fall','Error'],a:0,why:'The follower stays still.'},
{ref:'3.3.5',q:'Which cam gives a gradual rise and sudden drop?',o:['Snail','Pear','Eccentric','Oval'],a:0,why:'Also called a drop cam.',live:true},
{ref:'3.3.5',q:'The x-axis of a displacement diagram is…',o:['Cam angle','Time in hours','Load','Mass'],a:0,why:'One revolution is 360°.'},
{ref:'3.3.6',q:'A wheelbarrow is a…',o:['2nd class lever','1st class lever','3rd class lever','Cam'],a:0,why:'Load in the middle.',live:true},
{ref:'3.3.6',q:'Effort arm 900 mm, load arm 300 mm, load 30 kg. Effort =',o:['10 kg','90 kg','3 kg','27 kg'],a:0,why:'30 ÷ 3.',live:true},
{ref:'3.3.6',q:'Third-class levers always have MA…',o:['Below 1','Above 1','Equal to 1','Infinite'],a:0,why:'Effort arm is shorter than load arm.'},
{ref:'3.3.6',q:'To reduce the effort needed from a lever you…',o:['Lengthen the effort arm','Shorten the effort arm','Remove the fulcrum','Increase the load arm'],a:0,why:'MA = effort arm ÷ load arm.'}
],

fib:[
{ref:'3.3.1',t:'Mechanical advantage = [[load]] ÷ effort.'},
{ref:'3.3.1',t:'The mechanical advantage of a pulley system equals the number of [[ropes|rope sections]] supporting the load.'},
{ref:'3.3.2',t:'Velocity ratio = distance moved by the [[effort]] ÷ distance moved by the load.'},
{ref:'3.3.2',t:'[[Velocity ratio|VR]] depends only on geometry, but MA includes the effect of friction.'},
{ref:'3.3.3',t:'Efficiency = (MA ÷ [[VR|velocity ratio]]) × 100%.'},
{ref:'3.3.3',t:'No machine is 100% efficient because of [[friction]].'},
{ref:'3.3.4',t:'Gear ratio = teeth on the [[driven]] gear ÷ teeth on the driver gear.'},
{ref:'3.3.4',t:'Output speed = input speed ÷ gear [[ratio]].'},
{ref:'3.3.4',t:'In a compound gear train the ratios of each stage are [[multiplied|multiplied together]].'},
{ref:'3.3.4',t:'A [[crossed]] belt reverses the direction of rotation.'},
{ref:'3.3.5',t:'A [[cam]] and follower converts rotary motion to reciprocating motion.'},
{ref:'3.3.5',t:'A flat section of a displacement diagram is called a [[dwell]].'},
{ref:'3.3.6',t:'The principle of [[moments]] states effort × effort arm = load × load arm.'},
{ref:'3.3.6',t:'In a [[second|2nd]] class lever the load is between the fulcrum and the effort.'},
{ref:'3.3.6',t:'The pivot of a lever is the [[fulcrum]].'}
],

theory:[
{ref:'3.3.1',cmd:'Apply',marks:4,q:'Apply the formulae to calculate the mechanical advantage of (i) a gear pair with a 12-tooth driver and 60-tooth driven gear and (ii) a lever with effort arm 0.9 m and load arm 0.3 m.',
 pts:['MA gear = driven ÷ driver teeth [1]','= 60 ÷ 12 = <b>5</b> [1]','MA lever = effort arm ÷ load arm [1]','= 0.9 ÷ 0.3 = <b>3</b> [1]'],
 award:'Award [1] per step.',kw:['60 ÷ 12','5','0.9 ÷ 0.3','3'],acc:'',tip:'Right formula each time.'},
{ref:'3.3.1',cmd:'Explain',marks:4,q:'Explain why designers calculate mechanical advantage when designing a product for older users.',
 pts:['MA shows how much <b>effort</b> the user must apply [1]','A higher MA reduces the force so users with <b>weak grip or strength</b> can operate it [1]','It avoids user <b>fatigue and injury</b> [1]','The designer can balance this against the longer distance moved [1]'],
 award:'Award [1] each up to [4 max].',kw:['effort','grip','fatigue','distance'],acc:'',tip:'Link to inclusive design.'},
{ref:'3.3.2',cmd:'Apply',marks:3,q:'A pulley block needs 6 m of rope to be pulled to lift a load 1.5 m. A 120 N effort lifts a 360 N load. Apply the data to calculate VR and MA.',
 pts:['VR = 6 ÷ 1.5 = <b>4</b> [1]','MA = 360 ÷ 120 = <b>3</b> [1]','MA is less than VR because of friction [1]'],
 award:'Award [1] each.',kw:['4','3','friction'],acc:'',tip:'Distances for VR, forces for MA.'},
{ref:'3.3.2',cmd:'Explain',marks:3,q:'Explain the difference between velocity ratio and mechanical advantage.',
 pts:['<b>VR</b> compares distances moved (or sizes or teeth) [1]','<b>MA</b> compares forces (load and effort) [1]','VR is purely geometric, whereas MA is reduced by friction [1]'],
 award:'Award [1] each.',kw:['distance','force','geometric','friction'],acc:'',tip:'Distances against forces.'},
{ref:'3.3.3',cmd:'Apply',marks:3,q:'A belt drive has a driver of 60 mm and a driven pulley of 180 mm. The input torque is 2.0 N·m and the output torque is 5.1 N·m. Apply the data to calculate the efficiency.',
 pts:['VR = 180 ÷ 60 = <b>3</b> [1]','Actual MA = 5.1 ÷ 2.0 = <b>2.55</b> [1]','Efficiency = 2.55 ÷ 3 × 100 = <b>85%</b> [1]'],
 award:'Award [1] each.',kw:['3','2.55','85%'],acc:'',tip:'MA ÷ VR.'},
{ref:'3.3.3',cmd:'Explain',marks:4,q:'Explain two reasons why the efficiency of a gear train is less than 100% and how a designer could improve it.',
 pts:['<b>Friction</b> between gear teeth wastes energy as heat [1]','Poor <b>alignment or meshing</b> increases losses [1]','Use <b>lubrication</b> or low-friction materials [1]','Use <b>fewer stages</b> and accurate manufacture [1]'],
 award:'Award [1] each.',kw:['friction','heat','lubrication','fewer stages'],acc:'',tip:'Causes and fixes.'},
{ref:'3.3.4',cmd:'Apply',marks:4,q:'A motor runs at 1500 rpm and drives a 20-tooth gear that meshes with a 60-tooth gear. A 15-tooth gear on the same shaft as the 60-tooth gear drives a 45-tooth gear. Apply the data to calculate the speed after each stage and the overall ratio.',
 pts:['Stage 1 ratio = 60 ÷ 20 = 3; speed = 1500 ÷ 3 = <b>500 rpm</b> [1]','Stage 2 ratio = 45 ÷ 15 = 3 [1]','Final speed = 500 ÷ 3 = <b>167 rpm</b> [1]','Overall ratio = 3 × 3 = <b>9</b> [1]'],
 award:'Award [1] each.',kw:['500 rpm','167 rpm','9'],acc:'Accept 166.7.',tip:'Each stage in turn.'},
{ref:'3.3.4',cmd:'Construct',marks:4,q:'Construct a gear system that reduces a speed of 1200 rpm to 100 rpm using whole numbers of teeth, with at least 12 teeth on each gear.',
 pts:['Overall ratio needed = 1200 ÷ 100 = <b>12</b> [1]','A single pair would need a very large driven gear, so use <b>two stages</b> [1]','Stage 1: 12 → 48 (ratio 4) [1]','Stage 2: 12 → 36 (ratio 3), so 4 × 3 = 12 and 1200 ÷ 12 = 100 rpm [1]'],
 award:'Award [1] each. Accept any valid combination.',kw:['12','two stages','48','36'],acc:'Other combinations accepted, such as 3 × 4 or 2 × 6.',tip:'Factorise the ratio.'},
{ref:'3.3.4',cmd:'Explain',marks:4,q:'Explain one advantage and one disadvantage of using a belt drive rather than gears in a power drill press.',
 pts:['Advantage: belts are <b>quiet and cheap</b> and allow shafts to be spaced apart [1]','Advantage: they <b>slip on overload</b>, protecting the motor [1]','Disadvantage: they can <b>slip or stretch</b>, so exact timing is lost [1]','…and need tension adjustment and replacement [1]'],
 award:'Award [1] each.',kw:['quiet','slip','overload','stretch'],acc:'',tip:'One of each.'},
{ref:'3.3.5',cmd:'Analyse',marks:5,q:'Analyse the displacement diagram data: angle 0°, 60°, 120°, 180°, 240°, 300°, 360° gives 0, 30, 30, 40, 40, 20, 0 mm.',
 pts:['0° to 60°: <b>rise</b> of 30 mm [1]','60° to 120°: <b>dwell</b> at 30 mm [1]','120° to 180°: <b>rise</b> of a further 10 mm [1]','180° to 240°: <b>dwell</b> at the maximum of 40 mm [1]','240° to 360°: <b>fall</b> back to 0 [1]'],
 award:'Award [1] each.',kw:['rise','dwell','fall','40 mm'],acc:'',tip:'Name each section.'},
{ref:'3.3.5',cmd:'Explain',marks:3,q:'Explain why a snail cam is more suitable than an eccentric cam for a mechanism that must drop a hammer suddenly.',
 pts:['A snail cam lifts the follower <b>gradually</b> [1]','…then it <b>drops suddenly</b> at the step in the profile [1]','An eccentric cam has a smooth fall, so it cannot give a sudden strike [1]'],
 award:'Award [1] each.',kw:['gradually','drops suddenly','smooth'],acc:'',tip:'Match profile to motion.'},
{ref:'3.3.6',cmd:'Apply',marks:4,q:'A bottle opener (2nd class lever) has a load arm of 20 mm and an effort arm of 100 mm. The cap needs 90 N. Apply the data to calculate the effort and MA, and the effort arm needed to reduce the effort to 10 N.',
 pts:['E × 100 = 90 × 20 [1]','E = <b>18 N</b>; MA = 90 ÷ 18 = <b>5</b> [1]','For 10 N: effort arm = 90 × 20 ÷ 10 [1]','= <b>180 mm</b> [1]'],
 award:'Award [1] each.',kw:['18 N','5','180 mm'],acc:'',tip:'Moments about the fulcrum.'},
{ref:'3.3.6',cmd:'Explain',marks:3,q:'Explain why tweezers use a 3rd class lever even though the MA is below 1.',
 pts:['The effort is between the fulcrum and the load, so <b>MA &lt; 1</b> [1]','The tips move <b>more precisely</b> and over a larger distance than the fingers [1]','Precision control is more important than force [1]'],
 award:'Award [1] each.',kw:['MA < 1','precise','control'],acc:'',tip:'What is gained instead of force.'}
],

practice:[
{id:'cs1',title:'Case study 1: A belt and gear reduction for a small conveyor',paper:'Paper 2 style · HL',
 scenario:`<p>A conveyor motor runs at 3000 rpm. A belt drive connects a 40 mm driver pulley to a 120 mm driven pulley. The driven pulley shares a shaft with a 12-tooth gear that drives a 36-tooth gear on the conveyor roller. A test shows an input torque of 0.5 N·m produces an output torque of 3.8 N·m at the roller. Data is illustrative.</p>`,
 fig:Fig.flow(['Motor 3000rpm','Belt 40→120','Gears 12→36','Roller (output)'],{per:4,bw:104,bh:58,hl:[1,2],title:'Drive system'}),
 cap:'Figure 1: Conveyor drive.',
 table:'',
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.3.2',q:'Apply the data to calculate the velocity ratio of the belt stage and the speed of the driven pulley.',award:'Award [1] each.',pts:['VR = 120 ÷ 40 = <b>3</b> [1]','Speed = 3000 ÷ 3 [1]','= <b>1000 rpm</b> [1]'],acc:'',kw:['3','1000 rpm'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.3.4',q:'Apply the data to calculate the gear ratio and the roller speed.',award:'Award [1] each.',pts:['Ratio = 36 ÷ 12 = <b>3</b> [1]','Speed = 1000 ÷ 3 [1]','= <b>333 rpm</b> [1]'],acc:'',kw:['3','333 rpm'],tip:''},
 {l:'(c)',cmd:'Apply',marks:4,ref:'3.3.3',q:'Apply the test data to calculate the overall velocity ratio, the actual mechanical advantage and the efficiency.',award:'Award [1] each.',pts:['Overall VR = 3 × 3 = <b>9</b> [1]','Actual MA = 3.8 ÷ 0.5 = <b>7.6</b> [1]','Efficiency = 7.6 ÷ 9 × 100 [1]','= <b>84%</b> (84.4) [1]'],acc:'',kw:['9','7.6','84%'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.3',q:'Explain where the remaining 16% of the energy is lost.',award:'Award [1] each up to [3 max].',pts:['<b>Friction</b> between gear teeth produces heat [1]','<b>Belt slip and flexing</b> lose energy [1]','Bearing friction and misalignment add losses [1]'],acc:'',kw:['friction','slip','heat'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.3.4',q:'Evaluate the use of a belt for the first stage and gears for the second stage.',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['Belt at high speed is <b>quiet, cheap</b> and protects the motor by slipping [1]','Belt can stretch and slip, but the first stage timing is not critical [1]','Gears give <b>positive drive</b> without slip at the high-torque stage [1]','Gears are noisier and need lubrication [1]','Decision: the mix is sensible: belt where speed is high, gears where torque is high [1]'],acc:'',kw:['quiet','slip','positive drive','torque','decision'],tip:''}
 ]},

{id:'cs2',title:'Case study 2: A cam-driven packaging machine',paper:'Paper 2 style · HL',
 scenario:`<p>A packaging machine uses a camshaft turning at 60 rpm. A follower pushes a carton flap closed. The designer plots the follower movement in Figure 2 (the displacement diagram) for one cam revolution. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'Follower',pts:[[0,0],[60,30],[120,30],[180,40],[240,40],[300,20],[360,0]]}],{x0:0,x1:360,y0:0,y1:48,xl:'Cam angle (degrees)',yl:'Displacement (mm)',h:260,title:'Displacement diagram',marks:[[60,30],[180,40],[240,40]]}),
 cap:'Figure 2: Follower displacement over one revolution.',
 table:`<table class="t"><tr><th colspan="7">Table 1: Data</th></tr><tr><th>Angle (°)</th><td>0</td><td>60</td><td>120</td><td>180</td><td>240</td><td>300</td><td>360</td></tr><tr><th>Lift (mm)</th><td>0</td><td>30</td><td>30</td><td>40</td><td>40</td><td>20</td><td>0</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:2,ref:'3.3.5',q:'State the maximum displacement of the follower and the angles over which it dwells at that height.',award:'Award [1] each.',pts:['<b>40 mm</b> [1]','From <b>180° to 240°</b> [1]'],acc:'',kw:['40 mm','180','240'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.3.5',q:'Apply the data to calculate the time the cam takes to turn from 0° to 60°, and the number of strokes per minute.',award:'Award [1] each.',pts:['One revolution = 1 s at 60 rpm [1]','60° takes 60 ÷ 360 = <b>0.167 s</b> [1]','<b>60</b> strokes per minute [1]'],acc:'',kw:['0.167','60'],tip:''},
 {l:'(c)',cmd:'Analyse',marks:3,ref:'3.3.5',q:'Analyse the movement of the follower between 240° and 360°.',award:'Award [1] each.',pts:['The follower <b>falls</b> [1]','From 40 mm to 0 mm, a drop of 40 mm over 120° [1]','The fall is at a steady rate: 20 mm per 60° [1]'],acc:'Accept: fall at a steady rate.',kw:['falls','40 mm','120°'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.5',q:'Explain why a pear-shaped cam would not match this diagram.',award:'Award [1] each.',pts:['A pear cam has <b>one long dwell</b> and one rise and fall [1]','This diagram has <b>two rises and two dwells</b> [1]','So a custom profile is needed [1]'],acc:'',kw:['dwell','two rises','custom'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.3.5',q:'Evaluate using a cam and follower rather than a motor-driven crank for this task.',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['A cam gives <b>precise timing and dwell</b> for each action [1]','The profile can be changed to alter the motion [1]','Cam and follower contact causes <b>wear</b> and needs lubrication [1]','A crank gives smooth motion but no dwell without extra parts [1]','Decision: a cam is better because dwell is needed for sealing [1]'],acc:'',kw:['timing','dwell','wear','crank','decision'],tip:''}
 ]},

{id:'cs3',title:'Case study 3: Levers and pulleys in a workshop',paper:'Paper 2 style · HL',
 scenario:`<p>A designer improves two tools. First, a bottle opener (Figure 3) for older users: the cap needs 90 N, the load arm is 20 mm and the effort arm is 100 mm. Second, a hand hoist uses a block and tackle with 4 rope sections supporting the load. A 200 N load is lifted by an actual effort of 60 N. Data is illustrative.</p>`,
 fig:opener,
 cap:'Figure 3: Bottle opener as a 2nd class lever (not to scale).',
 table:'',
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.3.6',q:'Apply the principle of moments to calculate the effort and MA of the bottle opener.',award:'Award [1] each.',pts:['E × 100 = 90 × 20 [1]','E = <b>18 N</b> [1]','MA = 90 ÷ 18 = <b>5</b> [1]'],acc:'',kw:['18 N','5'],tip:''},
 {l:'(b)',cmd:'Apply',marks:2,ref:'3.3.6',q:'Older users should apply no more than 10 N. Apply the data to calculate the effort arm needed.',award:'Award [1] each.',pts:['Arm = 90 × 20 ÷ 10 [1]','= <b>180 mm</b> [1]'],acc:'',kw:['180'],tip:''},
 {l:'(c)',cmd:'Apply',marks:4,ref:'3.3.3',q:'Apply the data to calculate the ideal effort, actual MA, VR and efficiency of the block and tackle.',award:'Award [1] each.',pts:['Ideal MA = 4, so ideal effort = 200 ÷ 4 = <b>50 N</b> [1]','Actual MA = 200 ÷ 60 = <b>3.33</b> [1]','VR = <b>4</b> [1]','Efficiency = 3.33 ÷ 4 × 100 = <b>83%</b> [1]'],acc:'',kw:['50 N','3.33','83%'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.3.1',q:'Explain what the user gives up in exchange for the reduced effort in the hoist.',award:'Award [1] each.',pts:['The effort rope must be pulled <b>4 times as far</b> as the load rises [1]','So lifting is <b>slower</b> [1]','Energy is conserved: less force, more distance [1]'],acc:'',kw:['4 times','slower','distance'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.3.6',q:'Evaluate lengthening the opener handle to 180 mm for older users.',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['Effort falls to <b>10 N</b>, easier for weaker grip [1]','The longer handle moves through a larger arc [1]','The product is <b>larger and heavier</b>, harder to store [1]','Material stress at the lever increases, so a stiffer material or section is needed [1]','Decision: worthwhile for an inclusive product [1]'],acc:'',kw:['10 N','larger','stress','inclusive','decision'],tip:''}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.3.1',q:'State the formula for mechanical advantage.',award:'Award [1].',pts:['<b>Load ÷ effort</b> [1]'],acc:'',kw:['load','effort'],tip:''},
 {l:'2',cmd:'Apply',marks:2,ref:'3.3.4',q:'A 15-tooth driver at 900 rpm drives a 45-tooth gear. Apply the data to calculate the output speed.',award:'Award [1] each.',pts:['Ratio = 3 [1]','900 ÷ 3 = <b>300 rpm</b> [1]'],acc:'',kw:['300 rpm'],tip:''},
 {l:'3',cmd:'Apply',marks:2,ref:'3.3.2',q:'A driver pulley of 50 mm drives a 150 mm pulley. Apply the data to calculate VR.',award:'Award [1] each.',pts:['150 ÷ 50 [1]','= <b>3</b> [1]'],acc:'',kw:['3'],tip:''},
 {l:'4',cmd:'Apply',marks:2,ref:'3.3.3',q:'MA is 3.6 and VR is 4. Apply the data to calculate the efficiency.',award:'Award [1] each.',pts:['3.6 ÷ 4 × 100 [1]','= <b>90%</b> [1]'],acc:'',kw:['90%'],tip:''},
 {l:'5',cmd:'Identify',marks:1,ref:'3.3.6',q:'Identify the class of lever in which the effort is between the fulcrum and the load.',award:'Award [1].',pts:['<b>3rd class</b> [1]'],acc:'',kw:['3rd'],tip:''},
 {l:'6',cmd:'Outline',marks:2,ref:'3.3.5',q:'Outline what a dwell is on a displacement diagram.',award:'Award [1] each.',pts:['A section where the follower <b>does not move</b> [1]','Shown as a horizontal line [1]'],acc:'',kw:['not move','horizontal'],tip:''},
 {l:'7',cmd:'Apply',marks:2,ref:'3.3.6',q:'A 2nd class lever has effort arm 0.6 m, load arm 0.2 m and load 300 N. Apply the data to calculate the effort.',award:'Award [1] each.',pts:['E × 0.6 = 300 × 0.2 [1]','E = <b>100 N</b> [1]'],acc:'',kw:['100 N'],tip:''},
 {l:'8',cmd:'Explain',marks:2,ref:'3.3.3',q:'Explain why efficiency can never be 100%.',award:'Award [1] each.',pts:['Some energy is lost to <b>friction</b> as heat [1]','…so output work is always less than input work [1]'],acc:'',kw:['friction','heat'],tip:''}
 ]},

paper:[]
};
})();
