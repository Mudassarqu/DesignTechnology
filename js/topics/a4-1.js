window.TOPICS=window.TOPICS||{};
window.TOPICS['a4-1']={
id:'a4-1',code:'A4.1',title:'Manufacturing techniques',level:'HL',hours:20,
guiding:'Why are different manufacturing techniques used for producing different products?',
pptx:'resources/A4_1_HL__Manufacturing_Techniques.pptx',pptxName:'A4.1 Manufacturing techniques (slides)',

notes:[
{id:'s411',ref:'4.1.1',title:'The five categories of manufacturing technique',
 must:'Outline additive, subtractive (wasting), forming, joining and finishing techniques, relevant to the properties of the selected material(s).',
 html:`
<div class="tw"><table class="t"><tr><th>Category</th><th>Idea</th><th>Mass of material</th><th>Examples</th></tr>
<tr><td><b>Additive</b></td><td>Build the object by adding material, layer by layer</td><td>Only what is needed</td><td>FDM, SLA, SLS, LOM</td></tr>
<tr><td><b>Subtractive (wasting)</b></td><td>Remove material from a larger block or sheet</td><td>Reduced; waste produced</td><td>Cutting, milling, turning, sanding</td></tr>
<tr><td><b>Forming</b></td><td>Change the shape without adding or removing material</td><td>Constant</td><td>Bending, press forming, casting, moulding</td></tr>
<tr><td><b>Joining</b></td><td>Connect separate parts</td><td>Parts added together</td><td>Adhesives, screws, rivets, welding, stitching</td></tr>
<tr><td><b>Finishing</b></td><td>Protect and enhance the surface</td><td>Thin coating or surface change</td><td>Anodising, galvanising, powder coating, polishing</td></tr></table></div>
<p>Choosing a technique depends on the <b>material properties</b> (for example thermoplastics can be moulded but thermosets cannot be remoulded), <b>production volume</b>, <b>shape and complexity</b>, <b>tolerances and surface quality</b>, and <b>cost and sustainability</b>.</p>
<div class="tip"><b>Exam tip.</b> Link the technique to the property of the material (“ductile metals can be press formed; brittle ceramics cannot”).</div>`},

{id:'s412',ref:'4.1.2',title:'Additive manufacturing: LOM, FDM and SLA',
 must:'Explain how components are produced using additive manufacturing techniques, including laminated object manufacture (LOM), fused deposition modelling (FDM) and stereolithography (SLA).',
 html:`
<p>Additive manufacturing (AM, often called <b>3D printing</b>) creates objects <b>layer by layer</b> from a digital CAD model, adding material only where it is needed, without moulds or cutting tools.</p>
<div class="key"><b>Workflow:</b> CAD model → export as STL (mesh of triangles) → slicing software cuts into thin layers and writes G-code → printer builds layer by layer → post-processing (remove supports, clean, cure, sand).</div>
<div class="tw"><table class="t"><tr><th>Technique</th><th>How it works</th><th>Materials</th><th>Strengths and limits</th></tr>
<tr><td><b>LOM</b> (laminated object manufacture)</td><td>A roll of sheet material is bonded to the previous layer with a heated roller; a laser or blade cuts the outline of each layer; waste is cross-hatched for removal</td><td>Paper, plastic film, metal foil</td><td>Low cost, large parts, no support needed; poor detail, wasteful, old technology</td></tr>
<tr><td><b>FDM</b> (fused deposition modelling)</td><td>Thermoplastic filament is fed into a heated nozzle that moves in X and Y and deposits melted material; the layers fuse as they cool</td><td>PLA, ABS, PETG, TPU</td><td>Cheap, widely available, strong enough for functional prototypes; layer lines, supports for overhangs, anisotropic strength</td></tr>
<tr><td><b>SLA</b> (stereolithography)</td><td>A UV laser cures liquid photopolymer resin in a tank; the platform lowers one layer at a time</td><td>Photopolymer resin</td><td>Very smooth surface and fine detail; resin is toxic and needs washing and curing; resin parts are brittle and can be costly</td></tr></table></div>
<ul class="tight"><li>FDM overhangs more than about 45° need <b>support structures</b> that must be removed.</li><li>SLA machines have four main parts: tank of resin, perforated platform, UV laser and controlling computer.</li></ul>
<div class="tip"><b>Exam tip.</b> Describe the process in order (CAD → slice → build layer → finish), name the energy source or material, and give an advantage and a limitation.</div>`},

{id:'s413',ref:'4.1.3–4.1.4',title:'Rapid prototyping and additive manufacturing for production',
 must:'Distinguish rapid prototyping for initial models from techniques for refined products. Describe powder bed fusion (PBF), material extrusion and selective laser sintering (SLS).',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Rapid prototyping</th><th>Additive manufacturing for production</th></tr>
<tr><td>Purpose</td><td>Create initial base models for <b>testing and validation</b></td><td>Make <b>refined, end-use products</b> in low volume</td></tr>
<tr><td>Materials</td><td>Cheap plastics (PLA, resin)</td><td>Engineering plastics, nylon, metals</td></tr>
<tr><td>Quality</td><td>May be rough; speed and low cost matter</td><td>Strength, accuracy and repeatability matter</td></tr>
<tr><td>Typical process</td><td>FDM, SLA desktop printers</td><td>SLS, PBF with metal powders, industrial extrusion</td></tr></table></div>
<p>Advantages of rapid prototyping: shorter development time, fewer costly mistakes, more variants, ability to make complex forms, better communication with stakeholders. Disadvantages: may not replicate the final material or process, limited materials, expensive equipment, slower than expected for larger batches.</p>
<h3>Powder bed fusion, SLS and material extrusion</h3>
<div class="tw"><table class="t"><tr><th>Technique</th><th>How it works</th><th>Applications</th></tr>
<tr><td><b>Powder bed fusion (PBF)</b></td><td>A thin layer of powder (10 to 100 microns) is spread on a platform; a laser or electron beam <b>melts or fuses</b> selected areas; the platform lowers; a new layer is spread. Unfused powder supports the part, so <b>no supports</b> are needed.</td><td>Aerospace brackets, orthopaedic implants, heat exchangers with internal channels</td></tr>
<tr><td><b>Selective laser sintering (SLS)</b></td><td>A high-power laser <b>sinters</b> (fuses without fully melting) plastic, metal, ceramic or glass powder. Commonly nylon.</td><td>Functional parts, intricate geometry, small batches; machines and powders are expensive</td></tr>
<tr><td><b>Material extrusion</b></td><td>Thermoplastic filament or paste is melted and deposited through a nozzle along a toolpath; most common technology is FDM</td><td>Prototypes, jigs and fixtures, custom enclosures, low-volume consumer products</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> AM suits <b>low volume, complex or customised</b> parts, because there is no tooling cost; for high volume, moulding is usually cheaper per part.</div>`},

{id:'s414',ref:'4.1.5–4.1.6',title:'4D and 5D printing',
 must:'Explain how shape memory polymers can be deployed for 4D printing, with examples. Explain how 5D technology can be used to produce long-lasting and complex components.',
 html:`
<h3>4D printing</h3>
<p><b>4D printing</b> extends 3D printing: the printed object <b>changes shape, property or function over time</b> when exposed to an <b>external stimulus</b> (pH, temperature, water, light, magnetic field). The fourth dimension is <b>time</b>. It uses <b>smart materials</b>, especially <b>shape memory polymers (SMPs)</b>, which remember a permanent shape, hold a temporary shape, and return to the original when activated.</p>
<div class="tw"><table class="t"><tr><th>Field</th><th>Example</th></tr>
<tr><td>Medical</td><td>Self-expanding stents: printed full size, compressed to fit a catheter, expand with body heat. Smart sutures that tighten.</td></tr>
<tr><td>Aerospace</td><td>Antennas and solar arrays folded for launch, which unfold in orbit; morphing wing surfaces.</td></tr>
<tr><td>Soft robotics</td><td>Grippers that close with light or heat, without motors.</td></tr>
<tr><td>Packaging and textiles</td><td>Flat packs that fold themselves; sportswear with pores that open as body temperature rises.</td></tr></table></div>
<h3>5D printing</h3>
<p>In <b>5-axis (5D) additive manufacturing</b> the print head and/or bed can move on <b>three linear axes and two rotational axes</b>. The nozzle can stay <b>perpendicular to a curved surface</b>, so layers follow the curve instead of being flat. Benefits: <b>stronger, longer-lasting parts</b> (continuous fibres follow load paths, no weak stair-stepping), <b>less support material</b>, <b>complex curved geometry</b> such as turbine blades, rocket nozzles, bone implants and dental crowns.</p>
<div class="tip"><b>Exam tip.</b> For 4D write: stimulus → shape change → benefit. For 5D write: extra rotation → nozzle stays normal to the surface → stronger, more complex part.</div>`},

{id:'s415',ref:'4.1.7',title:'Subtractive (wasting) techniques',
 must:'Explain how components are produced using wasting techniques, including machining (cutting, milling, turning) and abrading processes, applied to both 3D and 2D materials.',
 html:`
<p>Material is removed from a block, bar or sheet until the required shape is reached. Used on metals, timbers, polymers, ceramics and composites. Waste (chips, swarf, dust) is produced, but it can often be recycled.</p>
<div class="tw"><table class="t"><tr><th>Process</th><th>How it works</th><th>Used for</th></tr>
<tr><td><b>Cutting</b></td><td>Blades, saws, shears, lasers or water jets separate or trim material, including 2D sheet</td><td>Sheet metal blanks, timber lengths, acrylic parts</td></tr>
<tr><td><b>Milling</b></td><td>A multi-point rotating cutter (end mill) moves over a fixed workpiece on X, Y and Z axes (CNC mills and routers)</td><td>Flat faces, slots, pockets, 3D contours, moulds</td></tr>
<tr><td><b>Turning</b></td><td>The workpiece is clamped in a chuck and rotated while a single-point tool is fed in</td><td>Round parts: shafts, bowls, table legs, bolts</td></tr>
<tr><td><b>Drilling</b></td><td>A rotating bit makes holes</td><td>Fixing holes, clearances</td></tr>
<tr><td><b>Abrading</b></td><td>Many tiny abrasive grains wear away material: sanding, grinding, filing</td><td>Smoothing, rounding edges, sharpening</td></tr></table></div>
<p>Tool material must be <b>harder than the workpiece</b> (high-speed steel, carbide, diamond). <b>CNC</b> (computer numerical control) gives accuracy, repeatability and complex shapes, with automation of production.</p>
<div class="ex"><b class="l">Compare.</b> Subtractive gives a good surface finish and tight tolerances in strong solid material, but wastes material and may need complex set-ups. Additive wastes little but is slower for large parts.</div>
<div class="tip"><b>Exam tip.</b> Identify what moves (tool or workpiece) and the shape produced: turning gives round parts, milling gives flat and complex ones.</div>`},

{id:'s416',ref:'4.1.8',title:'Forming: bending, press forming and casting',
 must:'Explain how components are produced using forming techniques, including bending, press-forming and casting.',
 html:`
<p>Forming changes shape using heat, force or a change of state. <b>Mass stays the same</b>; no waste is produced from cutting.</p>
<div class="tw"><table class="t"><tr><th>Process</th><th>How it works</th><th>Materials</th><th>Examples</th></tr>
<tr><td><b>Bending</b></td><td>Force around a linear axis (press brake, former, strip heater). The outer surface stretches (tension) and the inner surface is compressed.</td><td>Sheet metal, tube, thermoplastic sheet, steam-bent timber</td><td>Brackets, enclosures, bicycle frames, bentwood chairs</td></tr>
<tr><td><b>Press forming</b></td><td>A sheet blank is forced between a matched punch and die in a press, stretching into a 3D shape</td><td>Ductile sheet metals: mild steel, aluminium alloy</td><td>Car panels, sinks, drinks cans</td></tr>
<tr><td><b>Casting</b></td><td>Molten metal is poured into a mould and solidifies in the shape (sand casting uses a one-use mould; die casting uses a metal mould)</td><td>Metals (also polymers, concrete)</td><td>Engine blocks, propellers, sculptures</td></tr></table></div>
<ul class="tight"><li>Press forming has a <b>high tooling cost</b>, so it suits high volumes.</li><li>Casting suits <b>complex 3D shapes</b> that are hard to machine, but may need machining and finishing afterwards.</li></ul>
<div class="tip"><b>Exam tip.</b> Name the material property that makes the process possible (ductility for press forming, a low melting point for casting).</div>`},

{id:'s417',ref:'4.1.8',title:'Moulding processes',
 must:'Explain moulding: injection, extrusion, rotational, blow and vacuum.',
 html:`
<div class="tw"><table class="t"><tr><th>Process</th><th>How it works</th><th>Features</th><th>Products</th></tr>
<tr><td><b>Injection moulding</b></td><td>Plastic granules are melted in a heated barrel by a screw, then injected under high pressure into a cooled split mould</td><td>Fast cycle, high accuracy, complex detail; <b>high tooling cost</b>; suits high volumes</td><td>LEGO bricks, keycaps, phone cases</td></tr>
<tr><td><b>Extrusion</b></td><td>Melted plastic is pushed continuously through a shaped die and cooled</td><td>Continuous, constant cross-section</td><td>Pipes, window frames, straws, filament</td></tr>
<tr><td><b>Rotational moulding</b></td><td>Powder is loaded into a hollow mould that is rotated on two axes inside an oven; the melt coats the walls</td><td>Seamless hollow parts, uniform wall, low tooling cost, slow cycles</td><td>Kayaks, water tanks, traffic cones</td></tr>
<tr><td><b>Blow moulding</b></td><td>A hollow tube of molten plastic (parison) is placed in a split mould and inflated with air</td><td>Thin-walled hollow containers with narrow necks</td><td>Drinks bottles, detergent containers</td></tr>
<tr><td><b>Vacuum forming</b></td><td>A heated thermoplastic sheet is pulled by vacuum over a mould</td><td>Low tooling cost, shallow open shapes, no undercuts</td><td>Yoghurt pots, blister packs, trays</td></tr></table></div>
<div class="key"><b>Choosing:</b> high volume and fine detail → injection; constant profile → extrusion; large hollow, low volume → rotational; bottles → blow; thin shallow trays → vacuum forming.</div>
<div class="tip"><b>Exam tip.</b> Link the process to volume (tooling cost) and shape (hollow, open, solid, continuous).</div>`},

{id:'s418',ref:'4.1.9',title:'Joining techniques',
 must:'Explain how components are assembled using adhering, fastening, stitching, weaving and welding.',
 html:`
<p>Joints can be <b>permanent</b> (cannot be separated without damage) or <b>temporary</b> (allow disassembly, maintenance and recycling). They can join similar or dissimilar materials.</p>
<div class="tw"><table class="t"><tr><th>Process</th><th>Type</th><th>How it works</th><th>Use</th></tr>
<tr><td><b>Adhering</b> (adhesives)</td><td>Permanent</td><td>Glue on surfaces holds them together after it dries or cures; joins dissimilar materials, spreads load</td><td>Furniture, packaging, composites</td></tr>
<tr><td><b>Welding</b></td><td>Permanent</td><td>Surfaces of similar metals or plastics are melted and fuse into one mass, often with filler; very strong</td><td>Steel frames, pressure vessels</td></tr>
<tr><td><b>Brazing</b></td><td>Permanent</td><td>A filler metal with a lower melting point than the parts (above 450°C) is drawn into the gap by capillary action</td><td>Copper pipes, bicycle frames</td></tr>
<tr><td><b>Permanent fasteners</b></td><td>Permanent</td><td>Nails, rivets (the headless end is deformed to lock)</td><td>Aircraft skin, leather goods</td></tr>
<tr><td><b>Temporary fasteners</b></td><td>Temporary</td><td>Nuts and bolts, screws, pins, knock-down fittings, Velcro</td><td>Flat-pack furniture, machines</td></tr>
<tr><td><b>Stitching</b></td><td>Permanent</td><td>Thread loops through pierced holes to form a seam; keeps flexibility</td><td>Clothing, bags, upholstery</td></tr>
<tr><td><b>Weaving</b></td><td>Permanent</td><td>Warp and weft threads interlace at right angles to make a fabric</td><td>Cloth, tapestries, carpets</td></tr></table></div>
<ul class="tight"><li><b>Design for disassembly</b>: choose screws and snap fits over glue, to ease repair and recycling.</li><li>Joints affect strength: welds can equal the parent metal; adhesives spread load but can fail with heat or moisture.</li></ul>
<div class="tip"><b>Exam tip.</b> Say whether the joint is permanent or temporary, which materials it can join, and the effect on repair and recycling.</div>`},

{id:'s419',ref:'4.1.10',title:'Finishing techniques',
 must:'Suggest how natural and human-made finishing techniques, coatings, polishing and sealants enhance aesthetics, protection, durability, longevity and ease of maintenance.',
 html:`
<div class="tw"><table class="t"><tr><th>Finish</th><th>What it is</th><th>Benefits</th><th>Examples</th></tr>
<tr><td><b>Anodising</b></td><td>Electrochemical process that thickens the natural oxide layer on <b>aluminium</b>; can take dye</td><td>Hard, corrosion resistant, will not peel; satin colours</td><td>Phone cases, window frames</td></tr>
<tr><td><b>Electroplating</b></td><td>Electric current deposits a thin layer of another metal (chrome, nickel, gold)</td><td>Shiny, hard, corrosion and wear resistance</td><td>Taps, car trim, jewellery</td></tr>
<tr><td><b>Galvanising</b></td><td>Coating steel with <b>zinc</b>, usually by hot dipping</td><td>Sacrificial protection: zinc corrodes first, even if scratched; 50+ years outdoors</td><td>Guardrails, roofing, structural steel</td></tr>
<tr><td><b>Powder coating</b></td><td>Polymer powder electrostatically sprayed then cured in an oven</td><td>Tough, thick, many colours, no solvents or drips; easy to clean</td><td>Garden furniture, bicycle frames</td></tr>
<tr><td><b>Polishing</b></td><td>Abrasive buffing reduces surface roughness</td><td>Shine; fewer crevices for dirt; easier to clean</td><td>Stainless steel, brass, wood</td></tr>
<tr><td><b>Oil</b></td><td>Soaks into wood or leather</td><td>Enhances grain; repels water; easy to re-apply</td><td>Teak furniture, worktops</td></tr>
<tr><td><b>Wax</b></td><td>Surface layer fills pores</td><td>Water repellent, soft sheen; wears away so needs re-buffing</td><td>Wood, leather</td></tr>
<tr><td><b>Silicone sealant</b></td><td>Flexible waterproof barrier</td><td>Prevents water entering joints; stays flexible</td><td>Bath seals, windows</td></tr></table></div>
<div class="key"><b>Anodising</b> converts the metal surface into an oxide. <b>Electroplating</b> deposits a different metal. <b>Galvanising</b> coats steel with zinc.</div>
<div class="tip"><b>Exam tip.</b> A good finishing answer covers appearance, protection, durability and maintenance for the named material.</div>`},

{id:'s4110',ref:'4.1.11',title:'Combining techniques',
 must:'Suggest why specific manufacturing techniques have been used to create a given component.',
 html:`
<p>Most products are made by a <b>sequence</b> of techniques because each has trade-offs in speed, shape, strength and surface quality. Typically: a <b>primary process</b> forms the general shape (additive, forming), a <b>secondary process</b> refines it (subtractive), parts are <b>joined</b>, then <b>finished</b>.</p>
<div class="ex"><b class="l">Example: aluminium bicycle frame.</b> Extrude tubes → cut to length → bend or hydroform → weld → machine the bearing seats → anodise or powder coat.</div>
<div class="ex"><b class="l">Example: metal 3D printed implant.</b> PBF prints the shape → support removal and machining of mating surfaces → polishing → sterilisation.</div>
<h3>Factors when choosing</h3>
<ul class="tight"><li><b>Material</b> and its properties.</li><li><b>Volume</b>: low volume suits additive and machining; high volume suits moulding and press forming (tooling is spread over many parts).</li><li><b>Shape</b> and complexity, tolerances and surface finish.</li><li><b>Cost</b>, lead time, waste, energy and environmental impact.</li></ul>
<div class="key"><b>Break-even idea:</b> total cost = set-up (tooling) cost + cost per part × number. A process with high tooling but low unit cost wins above a certain volume.</div>
<div class="tip"><b>Exam tip.</b> “Suggest why” needs the reason for each technique linked to the material and the product’s needs.</div>`}
],

cards:[
['Additive manufacturing','Building an object layer by layer from a digital model.'],
['Subtractive manufacturing','Removing material from a larger block or sheet to make a shape.'],
['Forming','Changing the shape of a material without adding or removing material.'],
['Joining','Connecting two or more parts together.'],
['Finishing','Protecting and enhancing the surface of a component.'],
['3D printing','Another name for additive manufacturing.'],
['STL file','A mesh file format that describes the surface of a 3D model for printing.'],
['Slicing','Dividing a 3D model into thin layers and creating machine instructions.'],
['LOM','Laminated object manufacture: layers of sheet material are bonded and cut.'],
['FDM','Fused deposition modelling: a heated nozzle extrudes thermoplastic filament.'],
['SLA','Stereolithography: UV laser cures liquid resin.'],
['SLS','Selective laser sintering: a laser fuses powder.'],
['Powder bed fusion','A family of processes where a beam fuses selected areas of a powder layer.'],
['Material extrusion','Deposition of melted material through a nozzle.'],
['Rapid prototyping','Quickly making a physical model from CAD for testing.'],
['Support structure','Temporary material that holds up overhangs while printing.'],
['4D printing','3D printing with smart materials that change shape over time with a stimulus.'],
['Shape memory polymer','A polymer that returns to a remembered shape when activated.'],
['5-axis printing','Printing with three linear and two rotational axes.'],
['Machining','Removing material with cutting tools.'],
['Milling','A rotating cutter moves over a fixed workpiece.'],
['Turning','A workpiece rotates while a cutting tool is fed in.'],
['Abrading','Wearing away material with abrasive grains.'],
['CNC','Computer numerical control of machine tools.'],
['Bending','Forming a material around an axis.'],
['Press forming','Forcing sheet between a punch and die.'],
['Casting','Pouring molten material into a mould to solidify.'],
['Injection moulding','Injecting molten plastic into a closed mould.'],
['Extrusion','Pushing material through a die to make a continuous profile.'],
['Rotational moulding','Rotating a heated mould to make hollow parts.'],
['Blow moulding','Inflating a plastic tube inside a mould to make hollow containers.'],
['Vacuum forming','Pulling heated plastic sheet over a mould with a vacuum.'],
['Welding','Joining by melting and fusing the parts.'],
['Brazing','Joining metals with a lower-melting filler drawn in by capillary action.'],
['Rivet','A permanent fastener deformed after insertion.'],
['Anodising','Thickening the oxide layer on aluminium electrochemically.'],
['Electroplating','Depositing a thin layer of metal using electric current.'],
['Galvanising','Coating steel with zinc for sacrificial protection.'],
['Powder coating','A polymer powder sprayed on and cured to a tough layer.'],
['Sealant','A coating, oil, wax or silicone that protects against moisture.']
],

mcq:[
{ref:'4.1.1',q:'Which category removes material from a larger piece?',o:['Additive','Subtractive','Forming','Finishing'],a:1,why:'Subtractive (wasting) processes cut, mill, turn and abrade.',live:true},
{ref:'4.1.1',q:'Which category shapes material without changing its mass?',o:['Forming','Subtractive','Additive','Joining'],a:0,why:'Forming bends, presses, casts or moulds.'},
{ref:'4.1.2',q:'In FDM, the material is…',o:['Thermoplastic filament','Liquid resin','Powder','Paper'],a:0,why:'A heated nozzle melts filament.',live:true},
{ref:'4.1.2',q:'Which technique uses a UV laser to cure liquid resin?',o:['SLA','FDM','LOM','SLS'],a:0,why:'Stereolithography.',live:true},
{ref:'4.1.2',q:'In LOM, each layer is…',o:['Cut from sheet material and bonded','Extruded as a filament','Cured by UV','Poured as liquid metal'],a:0,why:'A laser or blade cuts the outline.'},
{ref:'4.1.2',q:'FDM overhangs above about 45° need…',o:['Support structures','No treatment','A laser','Extra powder'],a:0,why:'They would sag otherwise.'},
{ref:'4.1.3',q:'Rapid prototyping is used mainly to…',o:['Test and validate ideas quickly','Mass produce products','Reduce material properties','Finish surfaces'],a:0,why:'Models are made for testing.',live:true},
{ref:'4.1.4',q:'In powder bed fusion, unfused powder…',o:['Supports the part','Is wasted','Becomes a coating','Is removed every layer'],a:0,why:'No separate supports are needed.',live:true},
{ref:'4.1.4',q:'SLS most commonly uses…',o:['Nylon powder','Wood sheet','Resin','Sheet steel'],a:0,why:'Plastic powders such as nylon are common.'},
{ref:'4.1.4',q:'Additive manufacturing suits low-volume production because…',o:['It needs no tooling','It is always the cheapest per part','It is faster than moulding','It uses no energy'],a:0,why:'No tooling cost, so small batches are economical.',live:true},
{ref:'4.1.5',q:'4D printing adds which dimension?',o:['Time','Weight','Temperature only','Colour'],a:0,why:'The object changes with time and stimulus.',live:true},
{ref:'4.1.5',q:'A shape memory polymer stent expands because of…',o:['Body heat','Water pressure only','Magnetism only','Gravity'],a:0,why:'Temperature is the activation stimulus.'},
{ref:'4.1.6',q:'5-axis printing allows…',o:['The nozzle to stay perpendicular to curved surfaces','Printing in a vacuum only','Faster cooling','Colour printing'],a:0,why:'Two rotational axes tilt the head or bed.',live:true},
{ref:'4.1.7',q:'Turning produces mainly…',o:['Round parts','Flat sheets','Hollow bottles','Fabrics'],a:0,why:'The workpiece rotates on a lathe.',live:true},
{ref:'4.1.7',q:'In milling, the…',o:['Cutter rotates over a fixed workpiece','Workpiece rotates over a fixed cutter','Material is melted','Sheet is bent'],a:0,why:'Multi-point rotating tool.'},
{ref:'4.1.7',q:'Sanding is an example of…',o:['Abrading','Casting','Welding','Extrusion'],a:0,why:'Abrasive grains wear away material.'},
{ref:'4.1.8',q:'Press forming needs a material that is…',o:['Ductile','Brittle','Liquid','Porous'],a:0,why:'The sheet must stretch without cracking.',live:true},
{ref:'4.1.8',q:'Which process is best for yoghurt pot trays?',o:['Vacuum forming','Rotational moulding','Casting','Turning'],a:0,why:'Thin shallow shapes with low tooling cost.'},
{ref:'4.1.8',q:'Kayaks are often made by…',o:['Rotational moulding','Blow moulding','Extrusion','Milling'],a:0,why:'Seamless hollow parts with uniform wall.',live:true},
{ref:'4.1.8',q:'A plastic drinks bottle is made by…',o:['Blow moulding','Rotational moulding','Casting','Turning'],a:0,why:'A parison is inflated in a mould.'},
{ref:'4.1.8',q:'Plastic pipes are made by…',o:['Extrusion','Injection moulding','Vacuum forming','Press forming'],a:0,why:'Continuous constant cross-section.',live:true},
{ref:'4.1.9',q:'Which is a temporary joint?',o:['Nut and bolt','Rivet','Weld','Adhesive'],a:0,why:'It can be undone.',live:true},
{ref:'4.1.9',q:'In welding, the parts are…',o:['Melted and fused','Glued','Stitched','Bolted'],a:0,why:'The base materials coalesce.'},
{ref:'4.1.9',q:'Brazing uses a filler that…',o:['Melts below the parent metals’ melting point','Melts above it','Is not heated','Is a fabric'],a:0,why:'Base metals do not melt.'},
{ref:'4.1.10',q:'Galvanising protects steel with…',o:['Zinc','Chrome','Aluminium oxide','Wax'],a:0,why:'Zinc gives sacrificial protection.',live:true},
{ref:'4.1.10',q:'Anodising is mainly used on…',o:['Aluminium','Timber','Cotton','Concrete'],a:0,why:'It thickens the oxide layer.'},
{ref:'4.1.10',q:'Which finish is electrostatically sprayed then cured in an oven?',o:['Powder coating','Anodising','Oil','Polishing'],a:0,why:'Polymer powder melts into a film.',live:true},
{ref:'4.1.10',q:'Oil on timber mainly…',o:['Soaks in, enhancing grain and repelling water','Forms a hard plastic film','Dyes the wood','Welds the grain'],a:0,why:'It penetrates the cell structure.'},
{ref:'4.1.11',q:'Why are multiple techniques usually used to make a component?',o:['Each has trade-offs in shape, speed, strength and finish','To make it slower','Because machines only do one task','To use more waste'],a:0,why:'A sequence combines their strengths.',live:true}
],

fib:[
{ref:'4.1.1',t:'The five categories are [[additive]], subtractive, [[forming]], joining and finishing.'},
{ref:'4.1.2',t:'In [[FDM]], a heated nozzle extrudes thermoplastic filament layer by layer.'},
{ref:'4.1.2',t:'SLA uses an ultraviolet [[laser]] to cure liquid photopolymer resin.'},
{ref:'4.1.2',t:'A file format that describes the surface of a model as triangles is [[STL]].'},
{ref:'4.1.4',t:'In powder bed fusion, a laser fuses selected areas of a layer of [[powder]].'},
{ref:'4.1.5',t:'4D printing uses [[shape memory|smart]] materials that change shape when exposed to a stimulus.'},
{ref:'4.1.6',t:'5-axis printing has three linear axes and two [[rotational]] axes.'},
{ref:'4.1.7',t:'In [[turning]], the workpiece rotates and a single-point tool is fed in.'},
{ref:'4.1.7',t:'[[Abrading]] removes material using many tiny abrasive grains.'},
{ref:'4.1.8',t:'[[Injection]] moulding has a high tooling cost but low cost per part.'},
{ref:'4.1.8',t:'[[Blow]] moulding makes hollow thin-walled bottles.'},
{ref:'4.1.8',t:'[[Vacuum]] forming pulls heated plastic sheet over a mould.'},
{ref:'4.1.9',t:'A permanent joint cannot be separated without [[damage|damaging]] the parts.'},
{ref:'4.1.10',t:'[[Galvanising]] protects steel by coating it with zinc.'},
{ref:'4.1.10',t:'[[Anodising]] thickens the oxide layer on aluminium.'}
],

theory:[
{ref:'4.1.1',cmd:'Outline',marks:5,q:'Outline the five categories of manufacturing technique.',
 pts:['<b>Additive</b>: builds by adding material layer by layer [1]','<b>Subtractive</b>: removes material from a larger piece [1]','<b>Forming</b>: changes shape without adding or removing material [1]','<b>Joining</b>: connects separate parts [1]','<b>Finishing</b>: protects and enhances the surface [1]'],
 award:'Award [1] for each category outlined up to [5 max].',kw:['additive','subtractive','forming','joining','finishing'],acc:'Examples can support an outline.',tip:'One short statement for each category.'},
{ref:'4.1.2',cmd:'Explain',marks:4,q:'Explain how fused deposition modelling (FDM) produces a component.',
 pts:['A CAD model is exported as an <b>STL file</b> and <b>sliced into layers</b> [1]','<b>Thermoplastic filament</b> is fed into a heated nozzle [1]','The nozzle moves and <b>deposits melted material</b> in each layer, which fuses to the layer below as it cools [1]','<b>Supports</b> may be added for overhangs and removed afterwards [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['STL','sliced','filament','nozzle','supports'],acc:'',tip:'Follow the process in order.'},
{ref:'4.1.2',cmd:'Explain',marks:3,q:'Explain why stereolithography (SLA) gives a smoother surface than FDM.',
 pts:['SLA cures <b>very thin layers</b> of liquid resin with a laser [1]','The laser spot is small so detail is fine [1]','FDM builds with a round nozzle bead and <b>visible layer lines</b> [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['thin layers','resin','laser','layer lines'],acc:'',tip:'Compare how each makes a layer.'},
{ref:'4.1.3',cmd:'Outline',marks:4,q:'Outline the differences between rapid prototyping and additive manufacturing of end-use products.',
 pts:['Rapid prototyping makes <b>initial models for testing and validation</b> [1]','…using cheap materials and quick printers where finish may be poor [1]','Production additive manufacturing makes <b>refined, end-use parts</b> [1]','…using engineering materials such as nylon or metal powders with higher accuracy and strength [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['testing','validation','end-use','engineering materials'],acc:'',tip:'Purpose, material and quality.'},
{ref:'4.1.4',cmd:'Describe',marks:4,q:'Describe how powder bed fusion produces a metal component.',
 pts:['A thin layer of <b>metal powder</b> is spread across the platform [1]','A <b>laser or electron beam</b> melts or fuses the cross-section [1]','The platform lowers and a <b>new layer</b> is spread, and the cycle repeats [1]','Unfused powder <b>supports the part</b>; it is removed at the end [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['powder','laser','new layer','supports'],acc:'',tip:'Layer, beam, repeat.'},
{ref:'4.1.5',cmd:'Explain',marks:4,q:'Explain how 4D printing with shape memory polymers could be used for a self-expanding medical stent.',
 pts:['The stent is <b>3D printed</b> from a shape memory polymer in its full-size (permanent) shape [1]','It is <b>compressed</b> into a small temporary shape to pass through a catheter [1]','<b>Body heat</b> is the stimulus that activates the polymer [1]','It expands to its original shape and holds the vessel open [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['shape memory','compressed','body heat','stimulus','expands'],acc:'',tip:'Permanent shape, temporary shape, stimulus.'},
{ref:'4.1.6',cmd:'Explain',marks:3,q:'Explain one advantage of 5-axis additive manufacturing for a curved turbine blade.',
 pts:['Two extra <b>rotational axes</b> keep the nozzle perpendicular to the curved surface [1]','Layers follow the curve, giving a <b>smoother and stronger</b> surface without stair-stepping [1]','Fewer supports are needed and complex geometry can be printed in one set-up [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['rotational','perpendicular','stronger','supports'],acc:'',tip:'Say what the extra axes allow.'},
{ref:'4.1.7',cmd:'Explain',marks:4,q:'Explain why turning on a lathe is used to make a wooden table leg and milling for a slot in a metal plate.',
 pts:['In turning, the workpiece <b>rotates</b> and the tool is fed in, producing <b>round, symmetrical</b> shapes [1]','This suits table legs with beads and tapers [1]','In milling, a <b>rotating multi-point cutter</b> moves across a fixed plate [1]','This cuts flat faces, slots and pockets accurately [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['rotates','round','cutter','slot'],acc:'',tip:'What moves, what shape results.'},
{ref:'4.1.8',cmd:'Explain',marks:4,q:'Explain why injection moulding is chosen for a plastic phone case but vacuum forming for a yoghurt pot tray.',
 pts:['Injection moulding gives <b>high accuracy, fine detail</b> and a fast cycle [1]','The <b>high tooling cost</b> is shared across very large volumes [1]','Vacuum forming has <b>low tooling cost</b> and suits thin, shallow shapes with no undercuts [1]','So it suits cheap, simple, disposable packaging [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['accuracy','tooling cost','volume','shallow','low tooling'],acc:'',tip:'Link shape and volume.'},
{ref:'4.1.8',cmd:'Describe',marks:4,q:'Describe how a plastic bottle is made by blow moulding.',
 pts:['A tube of molten plastic called a <b>parison</b> is extruded [1]','A <b>split mould</b> closes around it [1]','<b>Compressed air</b> inflates the plastic against the cool mould walls [1]','The mould opens and the bottle is ejected [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['parison','split mould','compressed air'],acc:'',tip:'Sequence.'},
{ref:'4.1.9',cmd:'Explain',marks:4,q:'Explain two reasons why a designer may choose screws instead of adhesive to join parts of a flat-pack chair.',
 pts:['Screws are a <b>temporary joint</b>, so the chair can be disassembled and flat packed [1]','Easy to <b>repair or replace</b> parts [1]','Screws allow <b>recycling</b> of different materials [1]','Customers can assemble with simple tools [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['temporary','disassembled','repair','recycling'],acc:'',tip:'Think of the life of the product.'},
{ref:'4.1.10',cmd:'Explain',marks:4,q:'Explain why galvanising is used on outdoor steel guardrails.',
 pts:['Steel <b>rusts</b> in moisture and oxygen [1]','Galvanising coats it with <b>zinc</b> [1]','Zinc gives <b>sacrificial protection</b>: it corrodes first even if the coating is scratched [1]','So the guardrails last for decades with <b>little maintenance</b> [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['rusts','zinc','sacrificial','maintenance'],acc:'',tip:'Problem, finish, how it works, benefit.'},
{ref:'4.1.10',cmd:'Evaluate',marks:6,q:'Evaluate powder coating as a finish for an outdoor steel garden chair.',
 pts:['Strength: <b>thick, tough</b> layer resists chips and scratches [1]','Strength: protects from <b>corrosion and UV</b> [1]','Strength: available in many colours and textures, <b>no solvents</b> [1]','Limitation: if chipped, <b>rust can creep</b> under the coating [1]','Limitation: needs an <b>oven and spray equipment</b>, so higher set-up cost [1]','Judgement: suitable if the steel is cleaned and perhaps galvanised first for long life outdoors [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['tough','corrosion','solvents','rust','judgement'],acc:'Maximum [6].',tip:'Weigh protection against cost and damage.'},
{ref:'4.1.11',cmd:'Discuss',marks:6,q:'Discuss the combination of manufacturing techniques used to produce an aluminium bicycle frame.',
 pts:['<b>Extrusion</b> forms the tubes with constant section and good strength-to-weight [1]','<b>Cutting</b> trims the tubes to length [1]','<b>Bending or hydroforming</b> shapes them [1]','<b>Welding</b> joins the tubes into a permanent, strong frame [1]','<b>Machining</b> gives accurate bearing seats and mounting points [1]','<b>Anodising or powder coating</b> protects against corrosion and gives the colour [1]'],
 award:'Award [1] for each technique linked to its purpose up to [6 max].',kw:['extrusion','cutting','bending','welding','machining','anodising'],acc:'',tip:'Sequence, then reason for each step.'}
],

practice:[
{id:'cs1',title:'Case study 1: 3D printing or injection moulding?',paper:'Paper 2 style · HL',
 scenario:`<p>A start-up designs a plastic holder for wireless earbuds. They first make 20 prototype copies by FDM, then a slightly refined version by SLA. For production they compare printing each unit by SLS (£8 per part, no tooling) with injection moulding (tooling £6000, £0.80 per part). Figure 1 compares total cost. The start-up expects to sell 500 in the first year and 5000 in later years. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'SLS',pts:[[0,0],[1200,9600]]},{name:'Moulding',pts:[[0,6000],[1200,6960]]}],{x0:0,x1:1200,y0:0,y1:10000,xl:'Number of parts',yl:'Total cost (£)',h:270,title:'Total cost against quantity',marks:[[833,6667]]}),
 cap:'Figure 1: Total manufacturing cost for each process (SLS printing and injection moulding). The dot marks where the costs are equal.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Process comparison</th></tr><tr><th></th><th>SLS</th><th>Injection moulding</th></tr><tr><td>Tooling cost</td><td>None</td><td>£6000</td></tr><tr><td>Cost per part</td><td>£8.00</td><td>£0.80</td></tr><tr><td>Design change</td><td>Re-print the file</td><td>New or modified mould</td></tr><tr><td>Surface finish</td><td>Slightly grainy</td><td>Smooth</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'4.1.2',q:'Identify two additive manufacturing techniques named in the scenario.',award:'Award [1] each.',pts:['<b>FDM</b> [1]','<b>SLA</b> (and SLS) [1]'],acc:'',kw:['FDM','SLA','SLS'],tip:'Look for the abbreviations.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'4.1.11',q:'Apply the data in Table 1 to calculate the quantity at which both processes cost the same.',award:'Award [1] for the equation, [1] for the algebra, [1] for the answer.',pts:['8n = 6000 + 0.8n [1]','7.2n = 6000 [1]','n = <b>833</b> parts (about 833.3) [1]'],acc:'Accept 834.',kw:['8n','6000 + 0.8n','833'],tip:'Set the two total cost equations equal.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'4.1.3',q:'Explain why FDM and SLA were used for the first prototypes rather than injection moulding.',award:'Award [1] for each valid point up to [3 max].',pts:['No <b>tooling cost</b> or lead time, so prototypes are cheap [1]','The design can be <b>changed quickly</b> by editing the CAD file [1]','Prototypes are for <b>testing and validation</b>, so material properties need not match the final product [1]'],acc:'',kw:['tooling','changed','testing'],tip:'Think about what a prototype is for.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.8',q:'Explain why injection moulding becomes more economical as volume increases.',award:'Award [1] for each valid point up to [3 max].',pts:['The <b>tooling cost is fixed</b> [1]','It is shared across more parts, so the <b>cost per part falls</b> [1]','Cycle times are short and unit cost is low (£0.80 compared with £8) [1]'],acc:'',kw:['tooling','shared','cost per part','cycle'],tip:'Fixed and variable costs.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'4.1.11',q:'Evaluate which process the start-up should use to produce the holder in year one (500 parts) and in later years (5000 parts).',award:'Award [1] for each valid point. Reward a decision for each year.',pts:['500 parts is <b>below break-even</b> (833), so SLS costs £4000 against £6400 [1]','SLS needs no tooling, so there is <b>less risk</b> if sales are poor and the design can be changed [1]','At 5000 parts, SLS costs £40 000 against £10 000 for moulding [1]','Injection moulding gives a smoother finish and faster output [1]','But moulding needs money upfront and a final design; a design change would need mould modification [1]','Decision: print by SLS in year one, then switch to injection moulding when the design is stable and volume is high [1]'],acc:'Maximum [6].',kw:['break-even','tooling','risk','5000','decision'],tip:'Use the numbers for each year.'}
 ]},

{id:'cs2',title:'Case study 2: An aluminium drinks bottle',paper:'Paper 2 style · HL',
 scenario:`<p>A company makes a reusable aluminium bottle. A flat aluminium disc is press formed into a cup, then drawn into a tall body in several steps. The neck is threaded by turning, a plastic cap is injection moulded, and a silicone seal is fitted. The bottle is anodised and printed. Figure 2 shows the process.</p>`,
 fig:Fig.flow(['Blank cut from sheet','Press form and draw','Turn the neck thread','Anodise and print','Assemble with cap and seal'],{per:5,bw:86,bh:58,hl:[1],title:'Manufacturing sequence'}),
 cap:'Figure 2: Sequence for the aluminium bottle.',
 table:`<table class="t"><tr><th colspan="2">Table 2: Information</th></tr><tr><td>Aluminium property needed for press forming</td><td>Ductile</td></tr><tr><td>Cap material</td><td>Polypropylene (thermoplastic)</td></tr><tr><td>Production volume</td><td>500 000 per year</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:2,ref:'4.1.1',q:'State the category of technique for (i) press forming and (ii) turning the neck thread.',award:'Award [1] each.',pts:['(i) <b>Forming</b> [1]','(ii) <b>Subtractive</b> (machining) [1]'],acc:'',kw:['forming','subtractive'],tip:''},
 {l:'(b)',cmd:'Explain',marks:3,ref:'4.1.8',q:'Explain why aluminium is suitable for press forming the bottle body.',award:'Award [1] for each valid point up to [3 max].',pts:['Aluminium is <b>ductile and malleable</b> [1]','It can stretch into a deep shape without <b>cracking</b> [1]','The matched punch and die give <b>accurate, repeatable</b> shapes in high volume [1]'],acc:'',kw:['ductile','cracking','punch','die'],tip:'Property then process.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'4.1.10',q:'Explain how anodising improves the bottle.',award:'Award [1] for each valid point up to [3 max].',pts:['It thickens the <b>oxide layer</b>, giving corrosion resistance [1]','It is <b>hard and scratch resistant</b> and will not peel [1]','It can be dyed to give <b>colour</b>, and the bottle is easy to clean [1]'],acc:'',kw:['oxide','corrosion','scratch','colour'],tip:'Protection and appearance.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.8',q:'Explain why the cap is made by injection moulding.',award:'Award [1] for each valid point up to [3 max].',pts:['Polypropylene is a <b>thermoplastic</b> that melts and sets repeatedly [1]','Injection moulding gives <b>accurate threads</b> and fine detail [1]','It is fast and cheap per part at 500 000 a year, which pays for the tooling [1]'],acc:'',kw:['thermoplastic','accurate','tooling','500 000'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'4.1.11',q:'Evaluate the use of a sequence of processes for this bottle compared with machining it from a solid aluminium bar.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['Press forming <b>wastes little material</b> compared with machining a bar, which creates much swarf [1]','It is <b>fast and cheap per unit</b> at high volume [1]','But press tooling is <b>expensive</b>, so it is not economic for low volumes [1]','Machining gives high accuracy but is slow, with high energy and cost [1]','Decision: the sequence is best for 500 000 bottles; machining only for prototypes [1]'],acc:'',kw:['waste','swarf','volume','tooling','decision'],tip:'Link to volume.'}
 ]},

{id:'cs3',title:'Case study 3: Outdoor steel bench',paper:'Paper 2 style · HL',
 scenario:`<p>A council needs a steel park bench for a coastal town. Frame tubes are cut, bent, welded and fitted with timber slats attached with bolts. The frame is galvanised or powder coated. Table 3 compares the options.</p>`,
 fig:Fig.bars([['Bare steel',5],['Powder coat',15],['Galvanised',30],['Galvanised + powder coat',45]],{title:'Estimated years to first rust in a coastal site',unit:' years',lw:170,max:50,hl:[3]}),
 cap:'Figure 3: Estimated time to first rust (illustrative data).',
 table:`<table class="t"><tr><th colspan="4">Table 3: Finish comparison</th></tr><tr><th>Finish</th><th>Relative cost</th><th>Appearance</th><th>Maintenance</th></tr><tr><td>Powder coat</td><td>Medium</td><td>Many colours</td><td>Repair chips</td></tr><tr><td>Galvanised</td><td>Medium to high</td><td>Grey spangled</td><td>Very low</td></tr><tr><td>Galvanised + powder coat</td><td>High</td><td>Many colours</td><td>Very low</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'4.1.9',q:'Identify one permanent and one temporary joining method used in the bench.',award:'Award [1] each.',pts:['Permanent: <b>welding</b> [1]','Temporary: <b>bolts</b> [1]'],acc:'',kw:['welding','bolts'],tip:''},
 {l:'(b)',cmd:'Explain',marks:3,ref:'4.1.9',q:'Explain why timber slats are bolted rather than welded.',award:'Award [1] for each valid point up to [3 max].',pts:['Timber and steel are <b>dissimilar</b> and cannot be welded [1]','Bolts let slats be <b>replaced</b> when worn or vandalised [1]','This extends the life of the bench and eases recycling [1]'],acc:'',kw:['dissimilar','replaced','recycling'],tip:''},
 {l:'(c)',cmd:'Apply',marks:2,ref:'4.1.10',q:'Apply Figure 3 to calculate the extra years before rust of the best finish compared with powder coat alone.',award:'Award [1] each.',pts:['45 − 15 [1]','= <b>30 years</b> [1]'],acc:'',kw:['30'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'4.1.10',q:'Explain why galvanising gives better corrosion protection than powder coating if the surface is scratched.',award:'Award [1] for each valid point up to [3 max].',pts:['Zinc gives <b>sacrificial protection</b> [1]','The zinc corrodes <b>before</b> the steel, even when the coating is scratched [1]','Powder coat is only a barrier: once breached, moisture reaches the steel and rust can spread under it [1]'],acc:'',kw:['sacrificial','zinc','barrier','scratched'],tip:''},
 {l:'(e)',cmd:'Justify',marks:5,ref:'4.1.10',q:'Justify the finish you would recommend for the coastal bench.',award:'Award [1] for each valid reason up to [5 max].',pts:['Coastal salt air is highly <b>corrosive</b> [1]','Galvanising plus powder coat gives the <b>longest life</b> (45 years) [1]','It needs <b>very low maintenance</b>, reducing council costs [1]','The powder coat gives <b>colour</b> for appearance [1]','Higher cost is justified by the longer life and less replacement [1]'],acc:'Accept galvanised only if justified by cost.',kw:['corrosive','45 years','maintenance','colour','cost'],tip:''}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'4.1.2',q:'State what STL stands for in 3D printing.',award:'Award [1].',pts:['<b>Standard Tessellation Language</b> (a file of triangles describing the surface) [1]'],acc:'Accept “stereolithography” file format.',kw:['STL'],tip:''},
 {l:'2',cmd:'Identify',marks:1,ref:'4.1.7',q:'Identify the machining process in which the workpiece rotates.',award:'Award [1].',pts:['<b>Turning</b> [1]'],acc:'',kw:['turning'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'4.1.8',q:'Outline what is meant by forming.',award:'Award [1] each.',pts:['Changing the <b>shape</b> of a material [1]','<b>Without adding or removing</b> material [1]'],acc:'',kw:['shape','without'],tip:''},
 {l:'4',cmd:'Describe',marks:2,ref:'4.1.8',q:'Describe vacuum forming.',award:'Award [1] each.',pts:['A thermoplastic sheet is <b>heated until soft</b> [1]','A <b>vacuum</b> pulls it onto a mould [1]'],acc:'',kw:['heated','vacuum','mould'],tip:''},
 {l:'5',cmd:'Explain',marks:2,ref:'4.1.9',q:'Explain one advantage of welding over riveting for a steel frame.',award:'Award [1] each.',pts:['A weld forms one <b>continuous joint</b> [1]','Strength can <b>equal the parent metal</b> and no extra fastener parts are needed [1]'],acc:'',kw:['continuous','strength'],tip:''},
 {l:'6',cmd:'Outline',marks:2,ref:'4.1.10',q:'Outline one benefit of applying wax to timber.',award:'Award [1] each.',pts:['Forms a <b>water-repellent</b> layer [1]','Gives a soft sheen and protects the surface [1]'],acc:'',kw:['water','sheen'],tip:''},
 {l:'7',cmd:'Describe',marks:2,ref:'4.1.5',q:'Describe what is meant by 4D printing.',award:'Award [1] each.',pts:['A 3D printed object that <b>changes shape over time</b> [1]','…in response to a <b>stimulus</b> such as heat or water [1]'],acc:'',kw:['changes','stimulus'],tip:''},
 {l:'8',cmd:'Explain',marks:3,ref:'4.1.4',q:'Explain why additive manufacturing is suited to low-volume production.',award:'Award [1] each.',pts:['No <b>tooling</b> or mould needed [1]','Designs can be <b>customised or changed</b> by editing CAD [1]','Cost per part stays about the same, so it is economical only for small batches [1]'],acc:'',kw:['tooling','CAD','small batches'],tip:''}
 ]},

paper:[]
};
