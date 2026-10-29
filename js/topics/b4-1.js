window.TOPICS=window.TOPICS||{};
window.TOPICS['b4-1']={
id:'b4-1',code:'B4.1',title:'Production systems',level:'HL',hours:7,
guiding:'How is the ideal production system determined for a product?',
pptx:null,

notes:[
{id:'s411',ref:'4.1.1',title:'Types of production system',
 must:'Identify the most effective type of production system (craft, mechanized, automated, assembly line, hybrid and CIM) used in the manufacture of a given product.',
 html:`
<p>A <b>production system</b> is the combination of people, machines, methods and layout used to make a product. The systems differ in the <b>balance between the worker and the machine</b>.</p>
<div class="tw"><table class="t"><tr><th>System</th><th>Description</th><th>Typical products</th></tr>
<tr><td><b>Craft</b></td><td>A skilled worker makes the product mainly by hand with simple tools; flexible, high skill</td><td>Bespoke furniture, jewellery, handmade ceramics</td></tr>
<tr><td><b>Mechanized</b></td><td>Machines do the physical work but a human controls them and makes decisions</td><td>Workshop with lathes, saws, sewing machines</td></tr>
<tr><td><b>Automated</b></td><td>Machines run with little human input using sensors and control systems (CNC, robots)</td><td>CNC-machined parts, injection moulding cells, robot welding</td></tr>
<tr><td><b>Assembly line</b></td><td>The product moves past a series of workstations, each doing one task; work is divided</td><td>Cars, appliances, electronics</td></tr>
<tr><td><b>Hybrid</b></td><td>Combines two or more systems, for example automated machines plus manual assembly</td><td>Most modern factories: car interiors, phones, sports shoes</td></tr>
<tr><td><b>CIM</b> (computer integrated manufacturing)</td><td>Computers link design (CAD), manufacture (CAM), planning, stock control and testing in one connected system</td><td>Smart factories, aircraft parts, high-tech electronics</td></tr></table></div>
<div class="key">As you move from craft to CIM, the <b>machine and computer</b> do more of the work and the human does less physical work but more supervision and programming.</div>
<div class="tip"><b>Exam tip.</b> Choose the system by <b>the product</b>: its volume, accuracy, flexibility needed and labour cost.</div>`},

{id:'s412',ref:'4.1.2',title:'Advantages and disadvantages of each system',
 must:'Discuss the advantages and disadvantages of craft, mechanization, automation, assembly line, hybrid and CIM.',
 html:`
<div class="tw"><table class="t"><tr><th>System</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Craft</td><td>Unique, high quality, flexible, customisable; low capital cost</td><td>Slow, costly per item, inconsistent, depends on skilled workers</td></tr>
<tr><td>Mechanized</td><td>Faster than craft; less physical effort; more consistent</td><td>Still needs skilled operators; moderate cost; limited speed</td></tr>
<tr><td>Automated</td><td>Fast, accurate, repeatable, 24-hour running, lower labour cost per unit, safer for dangerous tasks</td><td>High capital cost, programming and maintenance skills, inflexible, job losses</td></tr>
<tr><td>Assembly line</td><td>High output, low unit cost, specialised workers, predictable</td><td>Costly to set up; one stoppage halts the whole line; repetitive work; slow to change design</td></tr>
<tr><td>Hybrid</td><td>Uses the best of each: machines for repeat tasks and people for dexterity and judgement; flexible</td><td>Complex to manage and balance; needs both skills</td></tr>
<tr><td>CIM</td><td>Fully connected, real-time data, little waste, quick design changes, quality tracking</td><td>Very high set-up cost, cyber security and software risks, needs highly skilled staff</td></tr></table></div>
<div class="ex"><b class="l">Worked comparison.</b> A craft potter makes 6 mugs per day at £30 labour per mug. A mechanized slip-casting workshop makes 60 mugs per day at £4 labour per mug, with £8000 of equipment to buy back.</div>
<div class="tip"><b>Exam tip.</b> “Discuss” needs advantages and disadvantages of the named system in the context of the product.</div>`},

{id:'s413',ref:'4.1.3',title:'Scale of production',
 must:'Determine appropriate manufacturing techniques for one-off, batch, mass, mass customization and continuous production.',
 html:`
<div class="tw"><table class="t"><tr><th>Scale</th><th>Quantity</th><th>Features</th><th>Techniques and examples</th></tr>
<tr><td><b>One-off</b> (job)</td><td>1</td><td>Made to order; high skill; highest cost per item</td><td>Craft, CNC, 3D printing: a bridge, a bespoke ring, a prototype</td></tr>
<tr><td><b>Batch</b></td><td>Tens to thousands</td><td>A set number made, then the machines are reset; flexible; stock held</td><td>Mechanized or CNC with jigs: bakery loaves, limited-edition shoes</td></tr>
<tr><td><b>Mass</b></td><td>Very large, identical</td><td>Dedicated machines and assembly lines; low unit cost; high tooling cost</td><td>Injection moulding, press forming: phones, cans, cars</td></tr>
<tr><td><b>Mass customization</b></td><td>Large, but each can differ</td><td>Mass production efficiency with options chosen by the customer; flexible automation, modular design</td><td>Configurable trainers, car options, printed phone cases</td></tr>
<tr><td><b>Continuous</b></td><td>Non-stop, 24 h</td><td>Product flows without stopping; very low unit cost; costly to stop and restart</td><td>Steel, glass float, chemicals, paper, extruded pipe</td></tr></table></div>
<div class="key"><b>Unit cost</b> = (set-up or tooling cost ÷ quantity) + variable cost per unit. Higher volume spreads the fixed cost.</div>
<div class="ex"><b class="l">Worked example.</b> A mould costs £30 000 and each part costs £0.50 to make. For 10 000 parts: 30 000 ÷ 10 000 + 0.50 = <b>£3.50 per part</b>. For 100 000 parts: 0.30 + 0.50 = <b>£0.80</b>.</div>
<div class="tip"><b>Exam tip.</b> Name the scale, then the technique, then explain using the cost or flexibility reason.</div>`},

{id:'s414',ref:'4.1.4',title:'Factors that influence the choice of technique',
 must:'Discuss factors that influence choices of manufacturing techniques and justify the selection for a product.',
 html:`
<div class="tw"><table class="t"><tr><th>Factor</th><th>How it affects the choice</th><th>Example</th></tr>
<tr><td><b>Type of product (part)</b></td><td>Size, shape, tolerances, hollow or solid, number of parts</td><td>A hollow bottle suggests blow moulding</td></tr>
<tr><td><b>Material</b></td><td>Properties limit the processes: thermoplastics can be moulded; ductile metals pressed; brittle ceramics cast</td><td>Aluminium sheet can be press formed</td></tr>
<tr><td><b>Scale of production</b></td><td>Low volume needs low tooling; high volume justifies tooling</td><td>One-off: 3D print; mass: injection mould</td></tr>
<tr><td><b>Production system</b></td><td>The equipment, labour skills and layout available</td><td>A craft workshop cannot run injection moulding economically</td></tr>
<tr><td><b>Cost constraints</b></td><td>Capital, tooling, labour, material and energy costs, and the selling price</td><td>Cheap toy: thin plastic, few parts</td></tr>
<tr><td><b>Environmental considerations</b></td><td>Waste, energy, emissions, recyclability, transport</td><td>Casting or forming wastes less than machining from a block</td></tr></table></div>
<div class="ex"><b class="l">Justifying a choice.</b> Plastic stacking chair, 200 000 units: polypropylene (thermoplastic, low cost) + injection moulding (high volume, one-piece shape) + automated production cell. Reason: a £60 000 mould is spread over 200 000 chairs (£0.30 each).</div>
<div class="tip"><b>Exam tip.</b> A justification links <b>at least two factors</b> to the choice, with figures if you can.</div>`},

{id:'s415',ref:'4.1.5',title:'Deconstructing multi-component products',
 must:'Deconstruct and analyse multi-component products to determine how they were made and their relevance within the assembly and function of a product.',
 html:`
<p>To <b>deconstruct</b> a product, take it apart, list every component and record what each is for, what it is made of and how it was made and joined.</p>
<div class="tw"><table class="t"><tr><th>Component (desk lamp)</th><th>Function</th><th>Material</th><th>Probable process</th><th>Joined by</th></tr>
<tr><td>Base</td><td>Stability</td><td>Cast zinc alloy or pressed steel</td><td>Die casting or press forming</td><td>Screw</td></tr>
<tr><td>Arm tubes</td><td>Support and reach</td><td>Aluminium tube</td><td>Extrusion, cutting, bending</td><td>Pivot bolts</td></tr>
<tr><td>Lamp shade</td><td>Direct light, protect</td><td>Polypropylene</td><td>Injection moulding</td><td>Snap fit</td></tr>
<tr><td>Cable</td><td>Carry power</td><td>Copper, PVC sheath</td><td>Wire drawing, extrusion</td><td>Soldered or crimped</td></tr>
<tr><td>Finish</td><td>Appearance, protection</td><td>Powder coat or anodising</td><td>Surface treatment</td><td>n/a</td></tr></table></div>
<ul class="tight"><li>Look for <b>clues</b>: parting lines and ejector pin marks (moulding), weld seams, rivets, tool marks (machining), layer lines (3D printing), screw types.</li><li>Draw an <b>exploded view</b> and a <b>bill of materials (BOM)</b> and a sequence of assembly.</li><li>Ask which parts could be <b>combined, removed or standardised</b> to cut cost.</li></ul>
<div class="tip"><b>Exam tip.</b> For each part state function, material, process and joining method, and the reason it suits the volume.</div>`},

{id:'s416',ref:'4.1.6',title:'How production methods influence design',
 must:'Discuss how production methods can influence the function and aesthetics of a product.',
 html:`
<p>The design is not free: it has to be <b>made</b>. Production limits shape the product.</p>
<div class="tw"><table class="t"><tr><th>Process</th><th>Design rules and effects</th></tr>
<tr><td>Injection moulding</td><td><b>Draft angles</b> (1 to 3°) so parts release; <b>uniform wall thickness</b> to avoid sink marks; no undercuts; parting lines and ejector pin marks are visible</td></tr>
<tr><td>Press forming</td><td>Radii (no sharp corners), limited depth of draw; ductile materials only</td></tr>
<tr><td>Vacuum forming</td><td>Shallow shapes, no undercuts, rounded corners; wall thins at deep draws</td></tr>
<tr><td>CNC milling</td><td>Internal corners have the radius of the cutter; deep narrow slots are difficult</td></tr>
<tr><td>3D printing</td><td>Allows complex internal shapes; layer lines; supports for overhangs</td></tr>
<tr><td>Assembly line</td><td>Fewer, simpler parts; easy to grip and orient; snap fits and standard fasteners</td></tr></table></div>
<ul class="tight"><li><b>Function</b>: a one-piece moulded part has no joints to fail; a part made of many pressings may need seals.</li><li><b>Aesthetics</b>: the process leaves its character (seams, textures, surface finish) and limits colours and shapes.</li><li><b>Design for manufacture and assembly (DFMA)</b> reduces part count and assembly time.</li></ul>
<div class="tip"><b>Exam tip.</b> Link a named process to a visible feature on a product (parting lines, draft, radii) and its effect on function or look.</div>`},

{id:'s417',ref:'4.1.1–4.1.4',title:'Calculations: output, cycle time and cost',
 must:'Apply simple production calculations to compare systems (supports 4.1.1 to 4.1.4).',
 html:`
<div class="key"><b>Output per hour = 60 ÷ cycle time (min)</b>. On an assembly line the <b>slowest station (bottleneck)</b> sets the cycle time.<br><b>Utilisation = station time ÷ cycle time × 100%.</b><br><b>Break-even quantity = fixed cost difference ÷ variable cost difference per unit.</b></div>
<div class="ex"><b class="l">Assembly line.</b> Five stations take 1.2, 1.5, 2.0, 1.0 and 1.8 minutes. The bottleneck is 2.0 min, so output = 60 ÷ 2.0 = <b>30 units/hour</b>. Total work = 7.5 min, so line efficiency = 7.5 ÷ (5 × 2.0) = <b>75%</b>.</div>
<div class="ex"><b class="l">Break-even.</b> Batch: £2000 set-up + £12 per unit. Craft: no set-up + £40 per unit. Equal when 40n = 2000 + 12n, so n = 2000 ÷ 28 = <b>71 units</b>. Above 71 units batch production is cheaper.</div>
<div class="tip"><b>Exam tip.</b> Identify the bottleneck first; improving a non-bottleneck station does not raise output.</div>`}
],

cards:[
['Production system','The people, machines, methods and layout used to make a product.'],
['Craft production','A skilled worker makes a product mainly by hand.'],
['Mechanized production','Machines do the physical work, with human control.'],
['Automated production','Machines run with little human input using sensors and controls.'],
['Assembly line','A product moves past workstations that each do one task.'],
['Hybrid production','A mix of two or more production systems.'],
['CIM','Computer integrated manufacturing: computers link design, production and control.'],
['CAD','Computer-aided design.'],
['CAM','Computer-aided manufacture.'],
['CNC','Computer numerical control of machine tools.'],
['One-off production','Making a single product, often to order.'],
['Batch production','Making a set number of items before changing the set-up.'],
['Mass production','Making very large quantities of an identical product.'],
['Mass customization','Mass production with options to suit individual customers.'],
['Continuous production','Production that runs non-stop, 24 hours a day.'],
['Tooling cost','The cost of moulds, dies and jigs used to make a product.'],
['Fixed cost','A cost that does not change with the quantity made.'],
['Variable cost','A cost per unit that rises with the quantity made.'],
['Unit cost','Total cost divided by the number of units.'],
['Break-even quantity','The quantity at which two options cost the same.'],
['Bottleneck','The slowest stage that limits the output of a line.'],
['Cycle time','The time between finished units leaving a line.'],
['Workstation','A place on a line where a specific task is done.'],
['Jig','A device that holds and guides work so parts are made the same.'],
['Flexibility','The ease of changing a system to make different products.'],
['Capital cost','Money spent on buildings and equipment.'],
['Deconstruction','Taking a product apart to see how it works and was made.'],
['Bill of materials','A list of all components with materials and quantities.'],
['Exploded view','A drawing showing parts separated along their assembly lines.'],
['Draft angle','A taper on moulded parts that lets them release from the mould.'],
['Parting line','A line on a moulded part where the two mould halves meet.'],
['Ejector pin mark','A small circular mark left by pins that push the part from a mould.'],
['Undercut','A feature that stops a part releasing from a mould.'],
['Uniform wall thickness','Keeping walls the same thickness to avoid sink marks and warping.'],
['DFMA','Design for manufacture and assembly.'],
['Lean manufacturing','A system that cuts waste and keeps stock low.'],
['Just in time','Delivering materials only when needed.'],
['Smart factory','A highly connected CIM factory using sensors and data.'],
['Robot','A programmable machine that carries out tasks automatically.'],
['Standardisation','Using common parts and sizes to reduce cost.']
],

mcq:[
{ref:'4.1.1',q:'Which system relies mainly on a skilled person using hand tools?',o:['Craft','Automated','CIM','Continuous'],a:0,why:'Craft production is handmade.',live:true},
{ref:'4.1.1',q:'A production system in which machines carry out tasks with minimal human input is…',o:['Automated','Craft','Mechanized','One-off'],a:0,why:'Sensors and controllers run the machines.',live:true},
{ref:'4.1.1',q:'CIM stands for…',o:['Computer integrated manufacturing','Central industrial machinery','Controlled injection moulding','Continuous in-line manufacture'],a:0,why:'Computers link all stages.'},
{ref:'4.1.1',q:'In an assembly line each worker or machine…',o:['Performs one task at a workstation','Builds the whole product','Works alone off-line','Needs no tools'],a:0,why:'Work is divided.',live:true},
{ref:'4.1.1',q:'A hybrid system is…',o:['A combination of two or more systems','Always fully automated','A one-off craft','A continuous process'],a:0,why:'Most modern factories use several.'},
{ref:'4.1.2',q:'A key disadvantage of automation is…',o:['High capital cost','Slow output','Inconsistent quality','No need for programming'],a:0,why:'Equipment and set-up are expensive.',live:true},
{ref:'4.1.2',q:'An advantage of craft production is…',o:['Customisation and unique quality','Lowest unit cost','Highest output','24-hour running'],a:0,why:'Handwork can be unique.'},
{ref:'4.1.2',q:'A disadvantage of an assembly line is…',o:['One stoppage can halt the line','It is slow','It cannot be repeated','It needs no workers'],a:0,why:'Stations depend on each other.',live:true},
{ref:'4.1.3',q:'A single bespoke wedding ring is…',o:['One-off production','Mass production','Continuous production','Batch production'],a:0,why:'Made once to order.'},
{ref:'4.1.3',q:'Bread made in 500 loaves per oven load is…',o:['Batch production','One-off production','Continuous production','Mass customization'],a:0,why:'A set quantity then reset.',live:true},
{ref:'4.1.3',q:'Float glass and steel are usually made by…',o:['Continuous production','One-off','Craft','Batch of five'],a:0,why:'The process runs non-stop.'},
{ref:'4.1.3',q:'Trainers where customers choose colours from a configurator use…',o:['Mass customization','One-off','Continuous production','Craft only'],a:0,why:'Mass production with choices.',live:true},
{ref:'4.1.3',q:'Mould £20 000, £1 per part. Unit cost for 20 000 parts is…',o:['£2','£1','£20','£0.50'],a:0,why:'20 000 ÷ 20 000 + 1 = £2.',live:true},
{ref:'4.1.3',q:'Mass production has…',o:['High tooling cost but low unit cost','No tooling cost','Highest unit cost','Customised items only'],a:0,why:'Fixed cost is spread out.'},
{ref:'4.1.4',q:'Which factor decides if a part can be moulded or pressed?',o:['The material','The colour of the box','The shipping weight','The brand'],a:0,why:'Material properties limit the processes.'},
{ref:'4.1.4',q:'Low volume production favours…',o:['Low tooling processes such as 3D printing','High tooling processes such as injection moulding','Continuous production','Blow moulding'],a:0,why:'Tooling cannot be recovered.',live:true},
{ref:'4.1.4',q:'Which environmental advantage does forming have over machining a block?',o:['Less waste material','More swarf','More offcuts','Higher energy use'],a:0,why:'Forming does not remove material.'},
{ref:'4.1.5',q:'Ejector pin marks on a product suggest…',o:['Injection moulding','Welding','Weaving','Sanding'],a:0,why:'Pins push the part out of the mould.',live:true},
{ref:'4.1.5',q:'A list of all components with materials and quantities is a…',o:['Bill of materials','Truth table','Flow chart','Gantt chart'],a:0,why:'BOM.'},
{ref:'4.1.5',q:'Visible weld seams suggest…',o:['A fabricated metal frame','A moulded part','A woven fabric','A cast block'],a:0,why:'Pieces were welded.'},
{ref:'4.1.6',q:'Draft angles are needed so that…',o:['The part can be released from the mould','The part is lighter','The part is cheaper to ship','Colour sticks'],a:0,why:'Straight walls would stick.',live:true},
{ref:'4.1.6',q:'Uniform wall thickness in moulding reduces…',o:['Sink marks and warping','Weight to zero','Material choice','Cycle times to zero'],a:0,why:'Thick areas cool slowly.'},
{ref:'4.1.6',q:'Internal corners of a CNC-milled pocket have…',o:['A radius from the cutter','Perfectly sharp corners','No limits','Hollow sections only'],a:0,why:'A round cutter cannot cut a sharp corner.',live:true},
{ref:'4.1.6',q:'Reducing part count in a design mainly speeds up…',o:['Assembly','Casting only','Printing only','Packaging colour'],a:0,why:'Fewer parts mean fewer assembly steps.'},
{ref:'4.1.1',q:'Five stations take 1.0, 1.5, 2.5, 1.0, 2.0 min. Output per hour is…',o:['24','40','60','30'],a:0,why:'Bottleneck 2.5 min: 60 ÷ 2.5 = 24.',live:true},
{ref:'4.1.1',q:'The bottleneck of a line is the…',o:['Slowest station','Fastest station','First station','Final inspection only'],a:0,why:'It sets the cycle time.'},
{ref:'4.1.2',q:'CIM is most likely to give…',o:['Real-time tracking of quality and stock','No need for software','Craft quality','Lower set-up cost'],a:0,why:'Connected computers share data.'},
{ref:'4.1.3',q:'Batch production compared with mass production is…',o:['More flexible','Always cheaper','Always faster','Less flexible'],a:0,why:'Machines are reset for different products.',live:true},
{ref:'4.1.4',q:'A designer justifies a production method best by…',o:['Linking it to two or more factors','Naming it only','Giving the brand','Stating the colour'],a:0,why:'Reasons based on factors.'}
],

fib:[
{ref:'4.1.1',t:'In [[craft]] production a skilled person makes the product mainly by hand.'},
{ref:'4.1.1',t:'[[CIM|Computer integrated manufacturing]] links design, production and control with computers.'},
{ref:'4.1.1',t:'On an assembly line each workstation does one [[task]].'},
{ref:'4.1.2',t:'Automation has a high [[capital]] cost but a low cost per unit at high volume.'},
{ref:'4.1.3',t:'[[Batch]] production makes a set number of items before changing the set-up.'},
{ref:'4.1.3',t:'[[Mass]] customization combines mass production with customer choice.'},
{ref:'4.1.3',t:'[[Continuous]] production runs non-stop, as in steel or chemicals.'},
{ref:'4.1.3',t:'Unit cost equals tooling cost divided by [[quantity]] plus variable cost per unit.'},
{ref:'4.1.4',t:'High-volume parts justify expensive [[tooling]].'},
{ref:'4.1.5',t:'A [[bill of materials|BOM]] lists every component, its material and its quantity.'},
{ref:'4.1.5',t:'[[Parting]] lines and ejector pin marks are clues that a part was injection moulded.'},
{ref:'4.1.6',t:'A [[draft]] angle lets a moulded part release from the mould.'},
{ref:'4.1.6',t:'[[Uniform]] wall thickness avoids sink marks in moulded parts.'},
{ref:'4.1.1',t:'The slowest station on a line is the [[bottleneck]].'},
{ref:'4.1.3',t:'Output per hour is 60 divided by the [[cycle]] time in minutes.'}
],

theory:[
{ref:'4.1.1',cmd:'Outline',marks:6,q:'Outline craft, mechanized, automated, assembly line, hybrid and CIM production systems.',
 pts:['<b>Craft</b>: a skilled worker makes items by hand [1]','<b>Mechanized</b>: machines do the work under human control [1]','<b>Automated</b>: machines run with little human input using sensors and control [1]','<b>Assembly line</b>: product passes through workstations that each do one task [1]','<b>Hybrid</b>: a combination of systems [1]','<b>CIM</b>: computers integrate design, manufacture and control [1]'],
 award:'Award [1] for each system outlined up to [6 max].',kw:['craft','mechanized','automated','assembly line','hybrid','CIM'],acc:'Examples may support.',tip:'A short phrase for each.'},
{ref:'4.1.2',cmd:'Discuss',marks:6,q:'Discuss the advantages and disadvantages of automated production for a car body panel.',
 pts:['Advantage: <b>fast and repeatable</b> output with consistent accuracy [1]','Advantage: runs <b>24 hours</b>, reducing the labour cost per unit [1]','Advantage: robots do dangerous tasks such as welding and lifting [1]','Disadvantage: <b>high capital cost</b> of presses and robots [1]','Disadvantage: <b>inflexible</b> and costly to retool for a new model [1]','Disadvantage: skilled maintenance and job losses [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for advantages or disadvantages alone.',kw:['repeatable','24 hours','capital cost','inflexible','maintenance'],acc:'Maximum [6].',tip:'Balance both sides in the context of the product.'},
{ref:'4.1.2',cmd:'Explain',marks:3,q:'Explain why a hybrid production system is common in modern factories.',
 pts:['Machines do <b>repetitive or dangerous tasks</b> accurately [1]','People do tasks needing <b>dexterity, judgement and inspection</b> [1]','So the factory is <b>flexible and cost-effective</b> without the full cost of total automation [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['repetitive','dexterity','flexible','cost'],acc:'',tip:'Best of both.'},
{ref:'4.1.3',cmd:'Outline',marks:5,q:'Outline one-off, batch, mass, mass customization and continuous production.',
 pts:['<b>One-off</b>: a single item made to order [1]','<b>Batch</b>: a set number made, then reset [1]','<b>Mass</b>: very large quantities of identical items [1]','<b>Mass customization</b>: mass production with individual options [1]','<b>Continuous</b>: non-stop production, 24 hours [1]'],
 award:'Award [1] for each up to [5 max].',kw:['one-off','batch','mass','customization','continuous'],acc:'',tip:'Add an example if time.'},
{ref:'4.1.3',cmd:'Apply',marks:4,q:'A mould costs £48 000 and each part costs £0.60 to make. Apply the figures to calculate the unit cost for 20 000 parts and for 200 000 parts, and state what this shows.',
 pts:['20 000: 48 000 ÷ 20 000 + 0.60 [1]','= <b>£3.00</b> [1]','200 000: 48 000 ÷ 200 000 + 0.60 = <b>£0.84</b> [1]','Higher volume <b>spreads the tooling cost</b>, so unit cost falls [1]'],
 award:'Award [1] per step.',kw:['£3.00','£0.84','spreads'],acc:'',tip:'Fixed cost divided by quantity.'},
{ref:'4.1.3',cmd:'Apply',marks:3,q:'A craft process costs £25 per unit with no set-up. A batch process costs £1500 to set up and £10 per unit. Apply the data to calculate the break-even quantity.',
 pts:['25n = 1500 + 10n [1]','15n = 1500 [1]','n = <b>100</b> units [1]'],
 award:'Award [1] per step.',kw:['25n','1500','100'],acc:'',tip:'Set total costs equal.'},
{ref:'4.1.4',cmd:'Discuss',marks:6,q:'Discuss factors that influence the choice of manufacturing technique for a plastic garden chair.',
 pts:['<b>Material</b>: polypropylene is a thermoplastic that can be moulded [1]','<b>Product type</b>: a one-piece stackable shape suits injection moulding [1]','<b>Scale</b>: very high volume spreads the mould cost [1]','<b>Cost</b>: low material cost and fast cycle give a low unit price [1]','<b>Production system</b>: an automated cell with robots removes parts [1]','<b>Environment</b>: recyclable material and low waste; regrind of scraps [1]'],
 award:'Award [1] for each factor discussed up to [6 max].',kw:['material','scale','cost','automated','environment'],acc:'',tip:'Name each factor and apply it.'},
{ref:'4.1.4',cmd:'Justify',marks:4,q:'Justify one-off 3D printing, rather than injection moulding, for a custom hearing-aid shell.',
 pts:['Each shell is <b>unique</b> to the user’s ear [1]','Printing needs <b>no tooling</b> [1]','The design can be changed from the <b>CAD scan</b> quickly [1]','Injection moulding would need a new mould for each shell, which is uneconomical [1]'],
 award:'Award [1] for each valid reason up to [4 max].',kw:['unique','no tooling','CAD','mould'],acc:'',tip:'Link to the scale.'},
{ref:'4.1.5',cmd:'Explain',marks:4,q:'Explain how deconstructing a plastic kettle shows how its parts were made.',
 pts:['Parting lines and <b>ejector pin marks</b> on the body show injection moulding [1]','A metal element and base show <b>pressing or casting</b> [1]','Screws and <b>snap fits</b> show how parts were joined and could be taken apart [1]','A bill of materials records the material and the process of each part [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['parting lines','ejector pin','snap fits','bill of materials'],acc:'',tip:'Name the clue and the process.'},
{ref:'4.1.6',cmd:'Explain',marks:4,q:'Explain how the injection moulding process influences the design of a phone case.',
 pts:['<b>Draft angles</b> allow the part to be released [1]','<b>Uniform wall thickness</b> avoids sink marks and warping [1]','<b>Undercuts</b> must be avoided or need slides in the mould [1]','Parting lines and ejector marks affect the appearance and must be placed carefully [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['draft','wall thickness','undercuts','parting lines'],acc:'',tip:'Design rules and their effect.'},
{ref:'4.1.1',cmd:'Apply',marks:4,q:'A line has four stations with times 1.5, 2.4, 1.8 and 1.2 minutes. Apply the data to calculate the hourly output and the line efficiency.',
 pts:['Bottleneck = 2.4 min [1]','Output = 60 ÷ 2.4 = <b>25 per hour</b> [1]','Total work = 1.5 + 2.4 + 1.8 + 1.2 = 6.9 min [1]','Efficiency = 6.9 ÷ (4 × 2.4) = <b>72%</b> [1]'],
 award:'Award [1] per step.',kw:['2.4','25','6.9','72%'],acc:'Accept 71.9%.',tip:'Find the bottleneck first.'},
{ref:'4.1.2',cmd:'Evaluate',marks:6,q:'Evaluate the use of computer integrated manufacturing (CIM) for a company producing aircraft components.',
 pts:['Strength: very high <b>accuracy and traceability</b> of each part [1]','Strength: <b>CAD to CAM</b> links give quick design changes [1]','Strength: real-time data reduces waste and downtime [1]','Limitation: <b>very high capital cost</b> and software investment [1]','Limitation: <b>cyber security</b> and system failure risks [1]','Judgement: justified for high-value, high-accuracy aerospace parts, but not for low-value simple products [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['accuracy','CAD','capital cost','cyber security','judgement'],acc:'Maximum [6].',tip:'Weigh benefits against cost and risk.'}
],

practice:[
{id:'cs1',title:'Case study 1: Choosing a scale for a stool',paper:'Paper 2 style · HL',
 scenario:`<p>A designer creates a plywood stool. She considers three ways to produce it. Table 1 lists the costs. She expects to sell 500 stools in the first year. Figure 1 shows the estimated total cost for 500 stools. Data is illustrative.</p>`,
 fig:Fig.bars([['Craft (workshop)',20000],['Batch (CNC + jigs)',8000],['Mass (press mould)',51500]],{title:'Total cost for 500 stools (£)',unit:'',lw:150,max:55000,hl:[1]}),
 cap:'Figure 1: Total cost for 500 stools.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Cost data</th></tr><tr><th>System</th><th>Set-up / tooling (£)</th><th>Cost per stool (£)</th></tr><tr><td>Craft</td><td>0</td><td>40</td></tr><tr><td>Batch (CNC + jigs)</td><td>2000</td><td>12</td></tr><tr><td>Mass (press mould)</td><td>50 000</td><td>3</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'4.1.3',q:'Identify the scale of production that matches the CNC and jigs option.',award:'Award [1].',pts:['<b>Batch</b> [1]'],acc:'',kw:['batch'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'4.1.3',q:'Apply Table 1 to verify the total cost of the craft and mass options for 500 stools.',award:'Award [1] each.',pts:['Craft: 40 × 500 = <b>£20 000</b> [1]','Mass: 50 000 + 3 × 500 [1]','= <b>£51 500</b> [1]'],acc:'',kw:['20 000','51 500'],tip:''},
 {l:'(c)',cmd:'Apply',marks:3,ref:'4.1.3',q:'Apply the data to calculate the quantity at which mass production becomes cheaper than batch production.',award:'Award [1] each.',pts:['2000 + 12n = 50 000 + 3n [1]','9n = 48 000 [1]','n = <b>5333</b> stools (about 5300) [1]'],acc:'',kw:['9n','48 000','5333'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.2',q:'Explain why craft production is not suitable for 5000 stools.',award:'Award [1] each, up to [3].',pts:['Each stool takes <b>long to make by hand</b> [1]','The cost per stool is the <b>highest</b> (£40) [1]','Quality may vary between stools [1]'],acc:'',kw:['long','£40','quality'],tip:''},
 {l:'(e)',cmd:'Justify',marks:4,ref:'4.1.4',q:'Justify the production method recommended for the first year.',award:'Award [1] each up to [4 max].',pts:['At 500 stools batch costs £8000, the <b>lowest</b> [1]','The tooling cost is small, so <b>low financial risk</b> [1]','CNC and jigs give <b>consistent quality</b> [1]','The design can still be changed if sales are poor, unlike a £50 000 press mould [1]'],acc:'',kw:['£8000','risk','consistent','changed'],tip:''}
 ]},

{id:'cs2',title:'Case study 2: A speaker assembly line',paper:'Paper 2 style · HL',
 scenario:`<p>A factory assembles a Bluetooth speaker on a line of five workstations. Station times are in Figure 2. The factory works an 8-hour shift. The manager considers adding a robot at station 3 that would reduce its time from 2.0 min to 1.0 min. Data is illustrative.</p>`,
 fig:Fig.bars([['1 Fit battery',1.2],['2 Fit board',1.5],['3 Fit driver',2.0],['4 Close case',1.0],['5 Test',1.8]],{title:'Station time (minutes)',unit:' min',lw:130,max:2.4,hl:[2]}),
 cap:'Figure 2: Time at each workstation.',
 table:`<table class="t"><tr><th colspan="2">Table 2: Robot at station 3</th></tr><tr><td>Cost of robot cell</td><td>£90 000</td></tr><tr><td>Profit per speaker</td><td>£4.00</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'4.1.1',q:'Identify the bottleneck in the line.',award:'Award [1].',pts:['<b>Station 3</b> (2.0 min) [1]'],acc:'',kw:['station 3'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'4.1.1',q:'Apply Figure 2 to calculate the output per hour and per 8-hour shift.',award:'Award [1] each.',pts:['60 ÷ 2.0 = <b>30 per hour</b> [1]','30 × 8 [1]','= <b>240 per shift</b> [1]'],acc:'',kw:['30','240'],tip:''},
 {l:'(c)',cmd:'Apply',marks:3,ref:'4.1.1',q:'Apply the data to calculate the new output per hour after the robot is installed, and the percentage increase.',award:'Award [1] each.',pts:['New bottleneck is station 5 at 1.8 min [1]','60 ÷ 1.8 = <b>33.3 per hour</b> [1]','Increase = 3.3 ÷ 30 = <b>11%</b> [1]'],acc:'',kw:['1.8','33.3','11%'],tip:'The bottleneck moves.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.2',q:'Explain why the robot gives only a small improvement even though it halves the time at station 3.',award:'Award [1] each, up to [3].',pts:['The line is limited by its <b>slowest station</b> [1]','After the change the <b>bottleneck moves to station 5</b> (1.8 min) [1]','Other stations also need improving to raise output further [1]'],acc:'',kw:['slowest','bottleneck','station 5'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'4.1.2',q:'Evaluate whether the company should buy the robot, using Table 2.',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['Extra output = 3.3 × 8 = <b>26.7</b> speakers per shift [1]','Extra profit = 26.7 × £4 = <b>£107</b> per shift [1]','Payback = 90 000 ÷ 107 = about <b>840 shifts</b> (over three years of one shift per day) [1]','Other benefits: consistency and less repetitive work [1]','Decision: not worthwhile for this gain alone; first improve station 5 or add robots where combined gains are larger [1]'],acc:'',kw:['26.7','£107','payback','decision'],tip:'Use the payback idea.'}
 ]},

{id:'cs3',title:'Case study 3: Deconstructing a desk lamp',paper:'Paper 2 style · HL',
 scenario:`<p>Students take apart a desk lamp and record the parts in Table 3. The base is a cast zinc alloy, the arm is aluminium tube, and the shade is polypropylene. Around the shade, there are parting lines, circular marks on the inside and a snap-fit clip. The company makes 100 000 lamps each year and offers three colours.</p>`,
 fig:Fig.flow(['Die cast base','Extrude and bend arm tubes','Injection mould shade','Anodise and powder coat','Assemble and test'],{per:5,bw:86,bh:62,hl:[2],title:'Likely production sequence'}),
 cap:'Figure 3: Probable manufacturing sequence.',
 table:`<table class="t"><tr><th colspan="3">Table 3: Component record</th></tr><tr><th>Part</th><th>Material</th><th>Joining</th></tr><tr><td>Base</td><td>Zinc alloy</td><td>Screw</td></tr><tr><td>Arm</td><td>Aluminium tube</td><td>Pivot bolts</td></tr><tr><td>Shade</td><td>Polypropylene</td><td>Snap fit</td></tr><tr><td>Cable</td><td>Copper and PVC</td><td>Crimped</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'4.1.5',q:'Identify two features on the shade that show it was injection moulded.',award:'Award [1] each.',pts:['<b>Parting lines</b> [1]','<b>Ejector pin marks</b> (circular marks on the inside) [1]'],acc:'',kw:['parting','ejector'],tip:''},
 {l:'(b)',cmd:'Explain',marks:3,ref:'4.1.5',q:'Explain why the base is die cast rather than machined from a block.',award:'Award [1] each, up to [3].',pts:['Die casting is <b>fast</b> and suits 100 000 units [1]','Machining a block <b>wastes material</b> [1]','Zinc has a <b>low melting point</b> and casts detailed shapes well [1]'],acc:'',kw:['fast','waste','low melting point'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'4.1.6',q:'Explain how injection moulding affects the design of the shade.',award:'Award [1] each, up to [3].',pts:['Walls have a <b>draft angle</b> so the shade releases [1]','<b>Uniform wall thickness</b> avoids sink marks [1]','The snap-fit clip is moulded in, which reduces parts and assembly time [1]'],acc:'',kw:['draft','uniform','snap fit'],tip:''},
 {l:'(d)',cmd:'Discuss',marks:4,ref:'4.1.3',q:'Discuss whether mass customization could be used for the three colours.',award:'Award [1] each up to [4 max].',pts:['Colour can be changed by <b>powder coat or masterbatch</b> without changing tooling [1]','Moulds and dies are the same for all colours, so mass production efficiency is kept [1]','Stock of each colour must be managed [1]','Final assembly can be made to order from standard parts [1]'],acc:'',kw:['powder coat','same tooling','stock','assembly'],tip:''},
 {l:'(e)',cmd:'Justify',marks:4,ref:'4.1.4',q:'Justify a hybrid production system for the lamp.',award:'Award [1] each up to [4 max].',pts:['Die casting, extrusion and moulding are <b>automated</b> for speed and accuracy [1]','Cable fitting and final assembly need <b>dexterity</b> and are done by people [1]','Quality testing of electrical safety is done by machine and person [1]','This avoids the cost of full automation at 100 000 units [1]'],acc:'',kw:['automated','dexterity','testing','cost'],tip:''}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'4.1.3',q:'State the scale of production used to make a single bridge to order.',award:'Award [1].',pts:['<b>One-off</b> [1]'],acc:'',kw:['one-off'],tip:''},
 {l:'2',cmd:'Outline',marks:2,ref:'4.1.1',q:'Outline what is meant by an assembly line.',award:'Award [1] each.',pts:['A product moves past a series of <b>workstations</b> [1]','Each does a <b>specific task</b> [1]'],acc:'',kw:['workstations','task'],tip:''},
 {l:'3',cmd:'Apply',marks:2,ref:'4.1.1',q:'Station times are 2.0, 3.0 and 1.5 min. Apply the data to find the output per hour.',award:'Award [1] each.',pts:['Bottleneck 3.0 min [1]','60 ÷ 3.0 = <b>20 per hour</b> [1]'],acc:'',kw:['3.0','20'],tip:''},
 {l:'4',cmd:'Outline',marks:2,ref:'4.1.2',q:'Outline one disadvantage of automated production.',award:'Award [1] each.',pts:['<b>High capital cost</b> of equipment [1]','…and less flexibility to change the product [1]'],acc:'Accept job losses or programming skill.',kw:['capital cost','flexibility'],tip:''},
 {l:'5',cmd:'Describe',marks:2,ref:'4.1.3',q:'Describe mass customization.',award:'Award [1] each.',pts:['Mass production methods are used [1]','…but customers can choose options so products differ [1]'],acc:'',kw:['mass production','options'],tip:''},
 {l:'6',cmd:'Apply',marks:2,ref:'4.1.3',q:'Tooling costs £10 000 and parts cost £1 each. Apply the data to find the unit cost for 5000 parts.',award:'Award [1] each.',pts:['10 000 ÷ 5000 + 1 [1]','= <b>£3</b> [1]'],acc:'',kw:['£3'],tip:''},
 {l:'7',cmd:'Explain',marks:2,ref:'4.1.6',q:'Explain why moulded parts have a draft angle.',award:'Award [1] each.',pts:['So the part can be <b>released</b> from the mould [1]','Straight walls would <b>grip</b> the mould surface and damage the part [1]'],acc:'',kw:['released','grip'],tip:''},
 {l:'8',cmd:'Outline',marks:2,ref:'4.1.5',q:'Outline the purpose of a bill of materials.',award:'Award [1] each.',pts:['Lists <b>all components</b> in a product [1]','With their <b>materials and quantities</b> for planning and costing [1]'],acc:'',kw:['components','materials'],tip:''}
 ]},

paper:[]
};
