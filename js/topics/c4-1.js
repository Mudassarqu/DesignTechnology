window.TOPICS=window.TOPICS||{};
window.TOPICS['c4-1']={
id:'c4-1',code:'C4.1',title:'Design for manufacture strategies',level:'HL',hours:6,
guiding:'How can the evolution of production systems transform the way products are designed and manufactured, and transform the efficient disposal of products?',
pptx:'resources/C4.1HL_Design_for_Manufacture_Strategies.pptx',pptxName:'C4.1 Design for manufacture strategies (slides)',

notes:[
{id:'s411',ref:'4.1.1',title:'What is design for manufacture?',
 must:'Outline design for process, design for assembly and design for disassembly strategies.',
 html:`
<p><b>Design for manufacture (DfM)</b> means designing a product <b>with production in mind</b>, so it is faster, cheaper, more reliable and more sustainable to make, assemble and dispose of. It replaces the older approach of “I design it, you build it”, where designers worked separately from manufacturers. In DfM, <b>designers, engineers, manufacturers and other stakeholders collaborate from the start</b>, reducing costly changes later.</p>
<div class="tw"><table class="t"><tr><th>Strategy</th><th>Question it asks</th><th>Main aim</th></tr>
<tr><td><b>Design for process</b></td><td>How will the part be <b>made</b> with a particular technique?</td><td>Suit the product to the strengths and limits of the process</td></tr>
<tr><td><b>Design for assembly (DfA)</b></td><td>How will the parts be <b>put together</b>?</td><td>Fewer parts, faster, error-free assembly</td></tr>
<tr><td><b>Design for disassembly (DfD)</b></td><td>How will the parts be <b>taken apart</b> for repair, reuse or recycling?</td><td>Easy repair, reuse and recycling at end of life</td></tr></table></div>
<ul class="tight"><li>Benefits to manufacturers: lower cost, higher quality, shorter production time, less waste.</li><li>Benefits to customers: lower prices, reliability, repairable products.</li><li>Benefits to the environment: less material, energy and landfill.</li></ul>
<div class="tip"><b>Exam tip.</b> Describe each strategy with the stage of the product’s life it relates to: <b>making</b>, <b>assembling</b>, <b>taking apart</b>.</div>`},

{id:'s412',ref:'4.1.2',title:'Design for process',
 must:'Outline the advantages of design for process and explain how a product could be designed using this strategy.',
 html:`
<p>The product is designed to be made by a <b>specific manufacturing technique</b> that the company has, such as injection moulding, press forming or CNC machining. The designer uses the process’s strengths and avoids its limits.</p>
<div class="tw"><table class="t"><tr><th>Process</th><th>Design rules</th></tr>
<tr><td>Injection moulding (thermoplastic)</td><td>Even <b>wall thickness</b> (avoids sink marks and warping); <b>draft angles</b> (1° to 3°) so the part releases; rounded corners; <b>ribs</b> instead of thick sections; avoid undercuts; place gates sensibly</td></tr>
<tr><td>Sheet metal press forming</td><td>Generous bend radii; no deep draws in brittle materials; holes away from bends; standard sheet sizes</td></tr>
<tr><td>CNC milling</td><td>Allow tool access; round internal corners to match cutter radius; avoid deep narrow pockets</td></tr>
<tr><td>3D printing</td><td>Limit overhangs (about 45°); allow powder or resin to drain; consider orientation</td></tr></table></div>
<h3>Advantages</h3>
<ul class="tight"><li><b>Lower unit cost</b> and faster cycle times.</li><li><b>Less waste</b> and rework; better quality and consistency.</li><li>Takes advantage of <b>existing machines and tooling</b>.</li><li>Supports <b>mass production</b>.</li></ul>
<div class="ex"><b class="l">Example.</b> A plastic stool designed for injection moulding has uniform 3 mm walls, ribs under the seat and tapered legs so it releases from the mould. A thinner wall cools faster, so each part is made in less time.</div>
<div class="tip"><b>Exam tip.</b> “Explain how a product could be designed” needs the process named and at least two design features linked to it.</div>`},

{id:'s413',ref:'4.1.3',title:'Design for assembly',
 must:'Outline the advantages of design for assembly and explain how a product could be designed using the design for assembly strategy.',
 html:`
<p>DfA considers how <b>components are combined</b>: component to component, to sub-assemblies, and to the complete product. The aim is to <b>reduce cost, part count and time without reducing performance</b>.</p>
<div class="tw"><table class="t"><tr><th>Technique</th><th>How it helps</th></tr>
<tr><td><b>Reduce the number of parts</b></td><td>Fewer parts to make, buy, store and assemble; fewer joints to fail</td></tr>
<tr><td><b>Snap fits</b> instead of screws</td><td>Faster assembly, no extra fasteners</td></tr>
<tr><td><b>Standardise fasteners</b> and parts</td><td>Fewer tools and stock items; fewer mistakes</td></tr>
<tr><td><b>Parts that fit only one way</b> (asymmetry, poka-yoke)</td><td>Prevents assembly errors</td></tr>
<tr><td><b>Self-locating features</b>, guides and chamfers</td><td>Quicker alignment</td></tr>
<tr><td><b>Modular sub-assemblies</b></td><td>Parallel assembly and easier testing</td></tr>
<tr><td><b>Assemble from one direction</b> (top-down)</td><td>Suits robots and automation</td></tr></table></div>
<h3>Advantages</h3>
<p>Faster assembly, lower labour cost, fewer errors, higher quality, increased production efficiency and less material.</p>
<div class="ex"><b class="l">Worked example.</b> A torch has 24 parts and 11 screws; assembly takes 140 s. A redesign has 9 parts with snap fits and takes 55 s. At a labour rate of £18 per hour: old labour = 140 ÷ 3600 × 18 = <b>£0.70</b>; new labour = 55 ÷ 3600 × 18 = <b>£0.28</b>; saving = <b>£0.42 per torch</b>. For 200 000 torches: ≈ <b>£84 000</b>.</div>
<div class="tip"><b>Exam tip.</b> Link each assembly feature to the saving (time, cost, errors).</div>`},

{id:'s414',ref:'4.1.4',title:'Design for disassembly',
 must:'Outline the advantages of design for disassembly and explain how a product could be designed using this strategy.',
 html:`
<p>DfD designs a product so that, when it is <b>damaged, obsolete or at end of life</b>, it can be <b>easily and economically taken apart</b>. Parts can then be <b>repaired, reused, refurbished</b> or the materials <b>recycled</b>.</p>
<div class="tw"><table class="t"><tr><th>Technique</th><th>Why it helps</th></tr>
<tr><td><b>Non-permanent fasteners</b> (screws, snap fits, clips) instead of glue or welds</td><td>Parts separate without damage</td></tr>
<tr><td><b>Modular design</b></td><td>Replace a faulty or outdated module, not the whole product</td></tr>
<tr><td><b>Fewer material types</b>; avoid mixed materials that cannot be separated</td><td>Cleaner recycling streams</td></tr>
<tr><td><b>Label materials</b> (recycling codes)</td><td>Sorting and correct recycling</td></tr>
<tr><td><b>Standard fasteners and tools</b></td><td>Repair without special tools</td></tr>
<tr><td><b>Place parts that wear out first in accessible positions</b> (batteries, filters)</td><td>Simple, quick repair</td></tr>
<tr><td><b>Clear disassembly instructions</b></td><td>Supports repairers and recyclers</td></tr></table></div>
<h3>Questions designers ask</h3>
<p>Will it need repair? Which parts wear out first? Who will repair it? Can it be reclaimed, refurbished or resold? How can it be separated into recyclable parts?</p>
<h3>Advantages</h3>
<p>Easier <b>repair and maintenance</b>, longer life, supports <b>recycling and the circular economy</b>, less waste, lower environmental impact. Possible limits: more fasteners or modules can raise cost, and joints may be weaker or bulkier.</p>
<div class="ex"><b class="l">Example.</b> A modular smartphone allows the battery, camera and screen to be replaced with a screwdriver. A phone with a glued-in battery has to be thrown away when the battery fails.</div>
<div class="tip"><b>Exam tip.</b> DfA and DfD can conflict: glue is quick to assemble but hard to take apart. Mention the compromise (snap fits are good at both).</div>`},

{id:'s415',ref:'4.1.5',title:'Environmental impact of DfM',
 must:'Discuss how designers use DfM strategies to reduce the environmental impact of the manufacture, use and disposal of products.',
 html:`
<div class="tw"><table class="t"><tr><th>Life stage</th><th>DfM action</th><th>Environmental benefit</th></tr>
<tr><td rowspan="4"><b>Manufacture</b></td><td>Reduce part count and standardise parts</td><td>Less material, tooling and assembly energy</td></tr>
<tr><td>Design for the process to cut scrap (for example nest parts on a sheet; use additive manufacture to save material)</td><td>Less waste</td></tr>
<tr><td>Choose recyclable or low-embodied-energy materials</td><td>Lower carbon emissions</td></tr>
<tr><td>Efficient packaging and automation</td><td>Less rework and packaging waste</td></tr>
<tr><td rowspan="3"><b>Use</b></td><td>Precision assembly and durable materials</td><td>Longer life, fewer replacements</td></tr>
<tr><td>Modular parts and few moving parts</td><td>Easy repair and less wear</td></tr>
<tr><td>Energy-efficient design</td><td>Lower electricity or fuel use</td></tr>
<tr><td rowspan="3"><b>Disposal</b></td><td>Design for disassembly; avoid permanent adhesives</td><td>Parts and materials separated for recycling</td></tr>
<tr><td>Fewer material types and clear labelling</td><td>Better sorting, less landfill</td></tr>
<tr><td>Modular and durable parts</td><td>Reuse, remanufacture, secondary markets</td></tr></table></div>
<div class="ex"><b class="l">Worked example: recovery.</b> A 0.18 kg phone is produced in 100 000 units (18 000 kg of material). A glued design lets recyclers recover 40% = <b>7 200 kg</b>. A screwed, modular design allows 85% = <b>15 300 kg</b>. The difference is <b>8 100 kg</b> of material kept in use.</div>
<p><b>Trade-offs:</b> DfD may need extra fasteners (more material); design for process may lock in a process with high energy use; durable products may cost more. Designers weigh these in a life-cycle analysis.</p>
<div class="tip"><b>Exam tip.</b> “Discuss” needs points for <b>manufacture, use and disposal</b> and a limitation or balance.</div>`}
],

cards:[
['Design for manufacture (DfM)','Designing a product with its production, assembly and disposal in mind.'],
['Design for process','Designing a product to suit a specific manufacturing technique.'],
['Design for assembly (DfA)','Designing how parts will be put together to reduce cost, parts and time.'],
['Design for disassembly (DfD)','Designing a product so it can be easily taken apart for repair, reuse or recycling.'],
['Draft angle','A slight taper on moulded parts so they release from the mould.'],
['Uniform wall thickness','Even thickness that prevents warping and sink marks in moulding.'],
['Undercut','A feature that stops a part releasing from a mould.'],
['Rib','A thin supporting wall that adds stiffness without thick sections.'],
['Sink mark','A depression in a moulded part caused by thick sections cooling.'],
['Cycle time','The time to make one part.'],
['Tooling','The moulds, dies and jigs used to make parts.'],
['Mass production','Making products in large quantities.'],
['Part count','The number of separate components in a product.'],
['Snap fit','A joint where parts click together without fasteners.'],
['Standardisation','Using common parts and fasteners across a product or range.'],
['Poka-yoke','Design that prevents parts being assembled incorrectly.'],
['Self-locating feature','A shape that guides a part into the correct position.'],
['Sub-assembly','A group of parts assembled before final assembly.'],
['Modular design','A product made of separate modules that can be replaced independently.'],
['Non-permanent fastener','A fastener such as a screw that can be removed without damage.'],
['Permanent joint','A joint, such as glue or welding, that cannot be undone without damage.'],
['Repairability','How easily a product can be fixed.'],
['Remanufacturing','Rebuilding a used product to like-new condition.'],
['Refurbishing','Repairing and cleaning a product so it can be resold.'],
['Reuse','Using a product or part again without reprocessing.'],
['Recycling','Reprocessing materials into new materials or products.'],
['Material labelling','Marking parts with material codes so they can be sorted.'],
['Embodied energy','Total energy used to produce a material or product.'],
['Landfill','Disposal by burying waste in the ground.'],
['Circular economy','An economy that keeps products and materials in use.'],
['Life-cycle analysis','Assessment of a product’s environmental impact over its life.'],
['Concurrent engineering','Designers, engineers and manufacturers working together from the start.'],
['Automation','Using machines or robots to carry out production tasks.'],
['Scrap','Waste material from a manufacturing process.'],
['Nesting','Arranging parts on a sheet to minimise waste.'],
['Obsolescence','When a product becomes out of date or unusable.'],
['Design for process example','An injection moulded stool with ribs and tapered legs.'],
['DfA example','Replacing screws with snap fits to speed assembly.'],
['DfD example','A modular phone with a replaceable battery.']
],

mcq:[
{ref:'4.1.1',q:'Design for manufacture means designing…',o:['With production, assembly and disposal in mind','Only for appearance','Without testing','For one user only'],a:0,why:'DfM considers how a product is made.',live:true},
{ref:'4.1.1',q:'Which is NOT one of the three DfM strategies?',o:['Design for marketing','Design for process','Design for assembly','Design for disassembly'],a:0,why:'The strategies are process, assembly and disassembly.',live:true},
{ref:'4.1.1',q:'Compared with “I design it, you build it”, DfM involves…',o:['Collaboration from the start','Separate departments','Less testing','No manufacturers'],a:0,why:'Teams work together early.'},
{ref:'4.1.2',q:'Design for process considers…',o:['A specific manufacturing technique','Only recycling','Marketing','Packaging only'],a:0,why:'The product suits the process.',live:true},
{ref:'4.1.2',q:'Why are draft angles used in injection moulding?',o:['So the part releases from the mould','To add colour','To lower cost of plastic','To increase weight'],a:0,why:'A taper helps ejection.',live:true},
{ref:'4.1.2',q:'Uniform wall thickness in a moulded part helps to…',o:['Prevent warping and sink marks','Increase cycle time','Add weight','Avoid tooling'],a:0,why:'Even cooling avoids defects.'},
{ref:'4.1.2',q:'Ribs are used instead of thick sections to…',o:['Add stiffness with less material','Add colour','Increase cost','Prevent moulding'],a:0,why:'They stiffen thin walls.'},
{ref:'4.1.2',q:'A key advantage of design for process is…',o:['Lower unit cost and consistent quality','Longer lead times','More waste','Fewer customers'],a:0,why:'The design suits the process.',live:true},
{ref:'4.1.3',q:'Which is a DfA technique?',o:['Reduce the number of parts','Use more screws','Add decorative parts','Use special fasteners for each part'],a:0,why:'Fewer parts means faster assembly.',live:true},
{ref:'4.1.3',q:'Snap fits are used instead of screws to…',o:['Speed assembly and avoid extra fasteners','Make disassembly impossible','Raise cost','Increase weight'],a:0,why:'They click together.'},
{ref:'4.1.3',q:'Parts that fit only one way are designed to…',o:['Prevent assembly errors','Increase parts','Add colour','Make repair harder'],a:0,why:'Poka-yoke.',live:true},
{ref:'4.1.3',q:'Standardising fasteners results in…',o:['Fewer tools and fewer mistakes','More tool changes','Higher stock levels','Slower assembly'],a:0,why:'Common parts simplify assembly.'},
{ref:'4.1.3',q:'Assembly takes 120 s at £24 per hour. Labour cost per unit is…',o:['£0.80','£2.88','£0.20','£8.00'],a:0,why:'120 ÷ 3600 × 24 = 0.80.',live:true},
{ref:'4.1.4',q:'Design for disassembly aims to…',o:['Allow easy separation for repair, reuse or recycling','Prevent repair','Use more glue','Increase part count'],a:0,why:'Parts and materials can be recovered.',live:true},
{ref:'4.1.4',q:'Which fastener best supports disassembly?',o:['Screws','Permanent glue','Welds','Rivets only'],a:0,why:'Screws can be removed without damage.'},
{ref:'4.1.4',q:'A modular phone allows…',o:['Replacement of one faulty module','Only whole-phone replacement','No repair','Glue-only assembly'],a:0,why:'Modularity supports repair.',live:true},
{ref:'4.1.4',q:'Labelling plastic parts with recycling codes helps…',o:['Correct sorting for recycling','Cooling','Marketing only','Assembly speed'],a:0,why:'Recyclers know the material.'},
{ref:'4.1.4',q:'Using many different mixed materials in one part makes recycling…',o:['Harder','Easier','Unnecessary','Faster'],a:0,why:'Materials are hard to separate.'},
{ref:'4.1.5',q:'Reducing part count reduces environmental impact during…',o:['Manufacture','Only disposal','Only marketing','Nothing'],a:0,why:'Less material and energy are needed.',live:true},
{ref:'4.1.5',q:'Durable materials reduce environmental impact during…',o:['Use','Only transport','Only design','Nothing'],a:0,why:'Fewer replacements.'},
{ref:'4.1.5',q:'Avoiding permanent adhesives mainly helps…',o:['Disposal and recycling','Manufacture speed only','Appearance only','Cost of paint'],a:0,why:'Parts can be separated.',live:true},
{ref:'4.1.5',q:'DfA and DfD can conflict because…',o:['Glue is quick to assemble but hard to separate','Both need glue','Both ban fasteners','They are the same'],a:0,why:'Compromises such as snap fits are used.'},
{ref:'4.1.5',q:'Nesting parts on a sheet reduces…',o:['Scrap waste','Part count','Tooling','Colour'],a:0,why:'Less offcut material.',live:true},
{ref:'4.1.5',q:'A product recovers 85% of a 15 000 kg material load. The mass recovered is…',o:['12 750 kg','1 275 kg','2 250 kg','17 647 kg'],a:0,why:'0.85 × 15 000.'},
{ref:'4.1.1',q:'DfM can reduce…',o:['Cost, errors and waste','Quality','Stakeholders','Innovation'],a:0,why:'Better production planning.'},
{ref:'4.1.2',q:'Which design feature suits CNC milling?',o:['Rounded internal corners matching the cutter','Sharp internal corners','Deep narrow pockets','No tool access'],a:0,why:'A rotating cutter cannot make a sharp inside corner.',live:true},
{ref:'4.1.3',q:'Assembling a product from one direction suits…',o:['Automation by robots','Hand assembly only','Disassembly only','Hand finishing'],a:0,why:'Robots work well with top-down assembly.'},
{ref:'4.1.4',q:'Putting a battery in an accessible position supports…',o:['Repair','Welding','Casting','Nothing'],a:0,why:'Batteries wear out first.'},
{ref:'4.1.5',q:'Remanufacturing means…',o:['Rebuilding a used product to like-new condition','Throwing it away','Painting it','Melting it'],a:0,why:'A circular economy practice.'}
],

fib:[
{ref:'4.1.1',t:'The three DfM strategies are design for [[process]], design for [[assembly]] and design for [[disassembly]].'},
{ref:'4.1.2',t:'A [[draft]] angle on a moulded part lets it release from the mould.'},
{ref:'4.1.2',t:'Uniform wall [[thickness]] helps prevent warping and sink marks.'},
{ref:'4.1.2',t:'[[Ribs]] add stiffness to thin walls without using thick sections.'},
{ref:'4.1.3',t:'Design for assembly aims to reduce the number of [[parts]] and the assembly time.'},
{ref:'4.1.3',t:'A [[snap]] fit joins parts without screws.'},
{ref:'4.1.3',t:'Parts designed to fit only one way prevent assembly [[errors]].'},
{ref:'4.1.4',t:'[[Modular]] design lets a faulty part be replaced without replacing the whole product.'},
{ref:'4.1.4',t:'Design for disassembly favours [[screws|non-permanent fasteners]] rather than permanent glue.'},
{ref:'4.1.4',t:'Labelling materials helps [[recyclers|recycling]] sort parts.'},
{ref:'4.1.5',t:'Reducing the number of material types makes [[recycling]] easier.'},
{ref:'4.1.5',t:'Durable products reduce impact during the [[use]] phase because fewer replacements are needed.'},
{ref:'4.1.5',t:'[[Remanufacturing]] rebuilds a used product to like-new condition.'},
{ref:'4.1.1',t:'In modern DfM, designers and [[manufacturers]] collaborate from the start.'},
{ref:'4.1.5',t:'[[Nesting]] parts on a sheet reduces scrap.'}
],

theory:[
{ref:'4.1.1',cmd:'Outline',marks:3,q:'Outline the three strategies of design for manufacture.',
 pts:['<b>Design for process</b>: designing for a specific manufacturing technique [1]','<b>Design for assembly</b>: designing how components are combined [1]','<b>Design for disassembly</b>: designing so components can be separated [1]'],
 award:'Award [1] for each strategy up to [3 max].',kw:['process','assembly','disassembly'],acc:'',tip:'One line each.'},
{ref:'4.1.1',cmd:'Explain',marks:3,q:'Explain why designers, engineers and manufacturers collaborate from the start of a DfM project.',
 pts:['Manufacturers know the <b>limits of the processes</b> available [1]','Problems are found <b>early</b>, avoiding costly changes later [1]','The result is a product that is <b>cheaper, higher quality and faster</b> to produce [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['limits','early','cost','quality'],acc:'',tip:'Early input saves cost.'},
{ref:'4.1.2',cmd:'Outline',marks:3,q:'Outline three advantages of design for process.',
 pts:['<b>Lower unit cost</b> and faster cycle times [1]','<b>Less waste</b> and rework, better quality [1]','Uses <b>existing machines and tooling</b> and supports mass production [1]'],
 award:'Award [1] for each valid advantage up to [3 max].',kw:['unit cost','waste','tooling','mass production'],acc:'',tip:''},
{ref:'4.1.2',cmd:'Explain',marks:4,q:'Explain how a plastic storage box could be designed for injection moulding.',
 pts:['<b>Uniform wall thickness</b> to avoid warping and sink marks [1]','<b>Draft angles</b> on the sides so it releases from the mould [1]','<b>Ribs</b> under the base for stiffness instead of thick sections [1]','Rounded corners and <b>no undercuts</b> so the mould is simple and cheap [1]'],
 award:'Award [1] for each valid feature explained up to [4 max].',kw:['uniform','draft','ribs','undercuts'],acc:'',tip:'Feature plus reason.'},
{ref:'4.1.3',cmd:'Outline',marks:3,q:'Outline three advantages of design for assembly.',
 pts:['Faster <b>assembly time</b> [1]','Lower <b>labour cost</b> [1]','Fewer <b>assembly errors</b> and higher production efficiency [1]'],
 award:'Award [1] each up to [3 max].',kw:['assembly time','labour cost','errors'],acc:'',tip:''},
{ref:'4.1.3',cmd:'Apply',marks:4,q:'A product takes 150 s to assemble. A redesign reduces this to 60 s. Labour costs £20 per hour. Apply the data to calculate the labour saving per unit and per 100 000 units.',
 pts:['Old cost = 150 ÷ 3600 × 20 = <b>£0.83</b> [1]','New cost = 60 ÷ 3600 × 20 = <b>£0.33</b> [1]','Saving per unit = <b>£0.50</b> [1]','Per 100 000 units = <b>£50 000</b> [1]'],
 award:'Award [1] per step. Accept £0.5 saving from 90 ÷ 3600 × 20.',kw:['£0.83','£0.33','£0.50','£50 000'],acc:'Rounding accepted.',tip:'Convert seconds to hours.'},
{ref:'4.1.3',cmd:'Explain',marks:4,q:'Explain how a desk lamp could be redesigned using design for assembly.',
 pts:['<b>Reduce the number of parts</b> by combining the base and stem [1]','Use <b>snap fits</b> to join the shade rather than screws [1]','<b>Standardise fasteners</b> so one tool is needed [1]','Parts that <b>fit one way only</b> prevent wiring or assembly errors [1]'],
 award:'Award [1] for each valid feature explained up to [4 max].',kw:['fewer parts','snap fit','standard','one way'],acc:'',tip:''},
{ref:'4.1.4',cmd:'Outline',marks:3,q:'Outline three advantages of design for disassembly.',
 pts:['Easier <b>repair and maintenance</b> [1]','Supports <b>reuse and recycling</b> [1]','<b>Reduces waste</b> and environmental impact, and extends product life [1]'],
 award:'Award [1] each up to [3 max].',kw:['repair','recycling','waste'],acc:'',tip:''},
{ref:'4.1.4',cmd:'Explain',marks:4,q:'Explain how a smartphone could be designed using design for disassembly.',
 pts:['<b>Screws and clips</b> instead of glue so parts separate without damage [1]','A <b>modular</b> design allows the battery, camera or screen to be replaced [1]','<b>Labelled materials</b> and few material types help recyclers [1]','<b>Accessible battery</b> and standard tools make repair easy [1]'],
 award:'Award [1] for each valid feature explained up to [4 max].',kw:['screws','modular','labelled','battery'],acc:'',tip:''},
{ref:'4.1.4',cmd:'Discuss',marks:4,q:'Discuss the possible conflict between design for assembly and design for disassembly.',
 pts:['Adhesives are <b>quick to apply</b> in assembly [1]','…but they make products <b>hard to take apart</b> for repair and recycling [1]','Fewer parts speeds assembly but may make parts <b>harder to replace</b> individually [1]','Compromise: use <b>snap fits or screws</b> that are fast to assemble and can be separated [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['adhesive','repair','snap fits','compromise'],acc:'',tip:'Conflict, then compromise.'},
{ref:'4.1.5',cmd:'Discuss',marks:6,q:'Discuss how DfM strategies can reduce the environmental impact of a product during manufacture, use and disposal.',
 pts:['Manufacture: <b>fewer parts and less scrap</b> reduce material and energy [1]','Manufacture: choose <b>recyclable or low-embodied-energy materials</b> [1]','Use: <b>durable, precise assembly</b> gives longer life, so fewer replacements [1]','Use: <b>modular and repairable</b> parts avoid whole-product disposal [1]','Disposal: <b>disassembly and labelling</b> allow recycling and reuse [1]','Balance: extra fasteners, modules or stronger materials may use more resources, so a life-cycle analysis helps decide [1]'],
 award:'Award [1] for each valid point up to [6 max].',kw:['fewer parts','scrap','durable','modular','recycling','life-cycle'],acc:'',tip:'Cover all three stages and a balance.'},
{ref:'4.1.5',cmd:'Evaluate',marks:6,q:'Evaluate the use of a design for disassembly strategy for a washing machine.',
 pts:['Strength: <b>repairs</b> such as replacing the pump or bearings extend life [1]','Strength: parts and metals can be <b>separated for recycling</b> [1]','Strength: modular parts support <b>remanufacture</b> and reduce landfill [1]','Limitation: <b>more fasteners and joints</b> may raise cost and leak risk [1]','Limitation: repair needs <b>skills and spare parts</b> supply [1]','Judgement: worthwhile as appliances are costly and long-lived, if parts remain available [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['repair','recycling','remanufacture','cost','judgement'],acc:'Maximum [6].',tip:'Weigh repair benefits against cost.'}
],

practice:[
{id:'cs1',title:'Case study 1: Redesigning a torch for assembly',paper:'Paper 2 style · HL',
 scenario:`<p>A company makes 200 000 hand torches a year. The current model has 24 parts, 11 screws and takes 140 s to assemble by hand. The design team creates a new version with 9 parts, snap fits and a single battery tray that only fits one way. Assembly now takes 55 s. Labour costs £18 per hour. Data is illustrative.</p>`,
 fig:Fig.bars([['Old: parts',24],['New: parts',9],['Old: seconds',140],['New: seconds',55]],{title:'Part count and assembly time',unit:'',lw:120,max:150,hl:[1,3]}),
 cap:'Figure 1: Old and new torch (parts and assembly seconds).',
 table:`<table class="t"><tr><th colspan="3">Table 1: Comparison</th></tr><tr><th></th><th>Old</th><th>New</th></tr><tr><td>Fasteners</td><td>11 screws</td><td>Snap fits</td></tr><tr><td>Assembly time</td><td>140 s</td><td>55 s</td></tr><tr><td>Assembly errors per 1000</td><td>18</td><td>3</td></tr><tr><td>Tooling cost</td><td>£20 000</td><td>£45 000</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'4.1.3',q:'Identify two DfA features used in the new torch.',award:'Award [1] each.',pts:['<b>Fewer parts</b> (9 instead of 24) [1]','<b>Snap fits</b> and a battery tray that fits one way [1]'],acc:'',kw:['fewer parts','snap fits','one way'],tip:''},
 {l:'(b)',cmd:'Apply',marks:4,ref:'4.1.3',q:'Apply Table 1 to calculate the labour cost per torch for the old and new designs and the annual saving.',award:'Award [1] per step.',pts:['Old = 140 ÷ 3600 × 18 = <b>£0.70</b> [1]','New = 55 ÷ 3600 × 18 = <b>£0.275</b> (£0.28) [1]','Saving per torch = <b>£0.425</b> [1]','Annual = 0.425 × 200 000 = <b>£85 000</b> [1]'],acc:'Accept £84 000 if rounded to £0.42.',kw:['£0.70','£0.275','£85 000'],tip:'Seconds to hours first.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'4.1.3',q:'Apply Table 1 to calculate how many years of labour saving are needed to repay the extra tooling cost.',award:'Award [1] each.',pts:['Extra tooling = 45 000 − 20 000 = <b>£25 000</b> [1]','25 000 ÷ 85 000 = <b>0.29 years</b> (about 3.5 months) [1]'],acc:'',kw:['£25 000','0.29'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.3',q:'Explain how the redesign reduces assembly errors from 18 to 3 per 1000.',award:'Award [1] for each valid point up to [3 max].',pts:['The battery tray <b>fits only one way</b>, so it cannot be fitted wrongly [1]','<b>Fewer parts</b> mean fewer chances for mistakes [1]','Snap fits remove screws that might be missed or cross-threaded [1]'],acc:'',kw:['one way','fewer parts','snap'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'4.1.4',q:'Evaluate the redesign in terms of cost and disassembly for repair.',award:'Award [1] for each valid point up to [5 max]. Reward a judgement.',pts:['Quicker assembly and fewer errors cut <b>labour cost</b> and rework [1]','The extra tooling is repaid in months, so it is <b>worthwhile at this volume</b> [1]','Snap fits are <b>fast to assemble</b> but may break when opened for repair [1]','Screws were easier to take apart, so DfD is weaker [1]','Judgement: acceptable if designed with removable clips for the battery and lens [1]'],acc:'',kw:['labour','tooling','snap fits','repair','judgement'],tip:'Cost versus repair.'}
 ]},

{id:'cs2',title:'Case study 2: A phone with a replaceable battery',paper:'Paper 2 style · HL',
 scenario:`<p>A manufacturer compares two phone designs. Phone P has the battery glued in and the case sealed with adhesive. Phone Q uses screws, a clip-in battery and modules for the camera and screen. Each phone has a mass of 0.18 kg. The company plans to make 100 000 of each. Recyclers estimate that they can recover 40% of Phone P’s material and 85% of Phone Q’s material. Data is illustrative.</p>`,
 fig:Fig.flow(['Product reaches end of life','Disassemble','Reuse or repair modules','Recycle materials','Residual waste to landfill'],{per:5,bw:86,bh:60,hl:[1],title:'End-of-life route for Phone Q'}),
 cap:'Figure 2: End-of-life route for the modular phone.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Phone data</th></tr><tr><th></th><th>Phone P</th><th>Phone Q</th></tr><tr><td>Joining</td><td>Adhesive</td><td>Screws and clips</td></tr><tr><td>Battery replacement time</td><td>Cannot be replaced by user</td><td>2 minutes</td></tr><tr><td>Assembly time</td><td>95 s</td><td>130 s</td></tr><tr><td>Material recovered at recycling</td><td>40%</td><td>85%</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'4.1.4',q:'State the DfM strategy that Phone Q is following in its use of screws and modules.',award:'Award [1].',pts:['<b>Design for disassembly</b> [1]'],acc:'',kw:['disassembly'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'4.1.5',q:'Apply Table 2 to calculate the mass of material recovered for each phone design over 100 000 units, and the difference.',award:'Award [1] each.',pts:['Total mass = 0.18 × 100 000 = 18 000 kg [1]','P = 0.40 × 18 000 = <b>7 200 kg</b>; Q = 0.85 × 18 000 = <b>15 300 kg</b> [1]','Difference = <b>8 100 kg</b> [1]'],acc:'',kw:['7 200','15 300','8 100'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'4.1.5',q:'Explain how Phone Q reduces the environmental impact during use.',award:'Award [1] for each valid point up to [3 max].',pts:['The <b>battery can be replaced</b> in two minutes, so the phone lasts longer [1]','<b>Modules</b> can be repaired or upgraded without replacing the whole phone [1]','Fewer replacement phones reduce resource extraction and manufacturing emissions [1]'],acc:'',kw:['battery','modules','longer','replacement'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.3',q:'Explain why Phone Q takes longer to assemble than Phone P and why this is a trade-off.',award:'Award [1] for each valid point up to [3 max].',pts:['Screws and modules take <b>more steps</b> (130 s compared with 95 s) [1]','Higher assembly cost per phone [1]','This is balanced against <b>repairability and recycling</b>, so DfA and DfD conflict [1]'],acc:'',kw:['screws','130 s','trade-off','repair'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'4.1.5',q:'Evaluate whether the manufacturer should adopt Phone Q’s design strategy.',award:'Award [1] for each valid point up to [6 max]. Reward a judgement.',pts:['Strength: recovers <b>8 100 kg more material</b> and reduces landfill [1]','Strength: supports repair and longer life [1]','Strength: positive brand image and compliance with future repair laws [1]','Limitation: <b>slower assembly</b> and more fasteners raise cost [1]','Limitation: the screws and modules may make the phone thicker and less watertight [1]','Judgement: adopt it if the improvements justify a small price rise to eco-conscious customers [1]'],acc:'',kw:['8 100','repair','assembly','thicker','judgement'],tip:''}
 ]},

{id:'cs3',title:'Case study 3: Designing a stackable chair for moulding',paper:'Paper 2 style · HL',
 scenario:`<p>A furniture company designs a stackable polypropylene chair made by injection moulding. The design team studies the cycle time against wall thickness (Figure 3). The initial design has a 4 mm wall. The team proposes a 3 mm wall with ribs under the seat. The mould has 1° draft on all surfaces. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'Cycle',pts:[[2,25],[3,38],[4,58],[5,85]]}],{x0:2,x1:5,y0:0,y1:100,xl:'Wall thickness (mm)',yl:'Cycle time (s)',h:260,title:'Cycle time against wall thickness',marks:[[3,38],[4,58]]}),
 cap:'Figure 3: Cycle time for different wall thicknesses. The dots mark 3 mm and 4 mm.',
 table:`<table class="t"><tr><th colspan="3">Table 3: Design options</th></tr><tr><th></th><th>4 mm wall</th><th>3 mm wall with ribs</th></tr><tr><td>Mass of plastic</td><td>3.2 kg</td><td>2.5 kg</td></tr><tr><td>Strength</td><td>Meets requirement</td><td>Meets requirement (with ribs)</td></tr><tr><td>Sink marks</td><td>Visible on thick joints</td><td>None</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'4.1.2',q:'State the DfM strategy applied by designing the chair for injection moulding.',award:'Award [1].',pts:['<b>Design for process</b> [1]'],acc:'',kw:['process'],tip:''},
 {l:'(b)',cmd:'Apply',marks:4,ref:'4.1.2',q:'Apply Figure 3 to calculate the number of chairs per hour for 4 mm and 3 mm walls, and the percentage increase.',award:'Award [1] per step.',pts:['4 mm: 3600 ÷ 58 = <b>62</b> chairs per hour [1]','3 mm: 3600 ÷ 38 = <b>95</b> chairs per hour [1]','Increase = 95 − 62 = 33 [1]','33 ÷ 62 × 100 = <b>about 53%</b> [1]'],acc:'Accept 52–53%.',kw:['62','95','53%'],tip:'Parts per hour = 3600 ÷ cycle time.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'4.1.5',q:'Apply Table 3 to calculate the mass of plastic saved per 10 000 chairs.',award:'Award [1] each.',pts:['3.2 − 2.5 = <b>0.7 kg</b> per chair [1]','0.7 × 10 000 = <b>7000 kg</b> [1]'],acc:'',kw:['0.7','7000'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.2',q:'Explain why a 1° draft angle and ribs are used in the mould design.',award:'Award [1] for each valid point up to [3 max].',pts:['The <b>draft angle</b> lets the chair release from the mould without damage [1]','<b>Ribs</b> add stiffness so the wall can be thinner [1]','A thinner wall cools faster, shortening cycle time, and avoids sink marks [1]'],acc:'',kw:['draft','release','ribs','stiffness','cool'],tip:''},
 {l:'(e)',cmd:'Discuss',marks:6,ref:'4.1.5',q:'Discuss how the redesign reduces environmental impact during manufacture, use and disposal.',award:'Award [1] for each valid point up to [6 max].',pts:['Manufacture: <b>0.7 kg less plastic</b> per chair saves material [1]','Manufacture: <b>shorter cycle</b> means less energy per chair [1]','Use: ribs maintain strength, so the chair remains <b>durable</b> [1]','Use: stackable shape reduces transport emissions [1]','Disposal: <b>single material (polypropylene)</b> is easily recycled and can be labelled [1]','Balance: thinner walls may be less impact resistant and ribs make the mould costlier [1]'],acc:'',kw:['less plastic','cycle','durable','stackable','single material','mould'],tip:'Cover all three stages.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'4.1.1',q:'State what DfM stands for.',award:'Award [1].',pts:['<b>Design for manufacture</b> [1]'],acc:'',kw:['design for manufacture'],tip:''},
 {l:'2',cmd:'Outline',marks:2,ref:'4.1.2',q:'Outline what is meant by design for process.',award:'Award [1] each.',pts:['Designing a product for a <b>specific manufacturing technique</b> [1]','…using its strengths and avoiding its limits, for example injection moulding [1]'],acc:'',kw:['specific','technique'],tip:''},
 {l:'3',cmd:'Describe',marks:2,ref:'4.1.2',q:'Describe the purpose of a draft angle on a moulded product.',award:'Award [1] each.',pts:['A slight <b>taper</b> on the surfaces [1]','So the part <b>releases</b> from the mould easily without damage [1]'],acc:'',kw:['taper','release'],tip:''},
 {l:'4',cmd:'Outline',marks:2,ref:'4.1.3',q:'Outline two ways of reducing assembly time.',award:'Award [1] each.',pts:['<b>Reduce the number of parts</b> [1]','Use <b>snap fits</b> or standard fasteners [1]'],acc:'',kw:['fewer parts','snap fits'],tip:''},
 {l:'5',cmd:'Apply',marks:2,ref:'4.1.3',q:'Assembly takes 90 s at £20 per hour. Apply the data to calculate the labour cost per unit.',award:'Award [1] each.',pts:['90 ÷ 3600 × 20 [1]','= <b>£0.50</b> [1]'],acc:'',kw:['£0.50'],tip:''},
 {l:'6',cmd:'Outline',marks:2,ref:'4.1.4',q:'Outline how modular design helps repair.',award:'Award [1] each.',pts:['A faulty <b>module can be replaced</b> [1]','…without replacing or discarding the entire product [1]'],acc:'',kw:['module','replaced'],tip:''},
 {l:'7',cmd:'Explain',marks:2,ref:'4.1.4',q:'Explain why labelling the plastic type on parts helps recycling.',award:'Award [1] each.',pts:['Recyclers can <b>identify the material</b> [1]','…and sort it into the correct stream, increasing the quality of recycled material [1]'],acc:'',kw:['identify','sort'],tip:''},
 {l:'8',cmd:'Explain',marks:3,ref:'4.1.5',q:'Explain how DfM can reduce the environmental impact of a product during use.',award:'Award [1] each.',pts:['<b>Durable materials and precise assembly</b> give a longer life [1]','<b>Modular and repairable</b> design avoids replacing whole products [1]','Energy-efficient design lowers energy used in operation [1]'],acc:'',kw:['durable','modular','energy'],tip:''}
 ]},

paper:[]
};
