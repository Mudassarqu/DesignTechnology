window.TOPICS=window.TOPICS||{};
window.TOPICS['a3-1']={
id:'a3-1',code:'A3.1',title:'Material classification and properties',level:'SL + HL',hours:8,
guiding:'How do material properties and classifications aid material selection for a specified manufacturing process or product?',
pptx:'resources/A3.1_Material_Classification_and_Properties.pptx',pptxName:'A3.1 Material classification and properties (slides)',

notes:[
{id:'s311',ref:'3.1.1',title:'Why materials are classified',
 must:'Explain how and why materials are classified, and discuss the advantages of classifying materials by physical, chemical and mechanical properties.',
 html:`
<p>Materials are classified so designers and manufacturers can <b>predict how a material will behave</b> and choose the right one for a use. Strength, conductivity, flexibility, durability and resistance to heat or corrosion all differ. Classification makes materials easier to <b>study, compare and apply</b>.</p>
<div class="cols">
<div class="box"><h4>Physical properties</h4><p>Observed or measured <b>without changing the material</b> or its chemical identity. Mostly non-destructive tests.</p><p><i>Density, thermal conductivity, thermal expansion, melting point, electrical resistivity and conductivity, colour.</i></p></div>
<div class="box"><h4>Chemical properties</h4><p>How a material <b>reacts with another substance</b> or its environment, changing its chemical composition.</p><p><i>Corrosion resistance, reactivity, hygroscopy, flammability, toxicity.</i></p></div></div>
<div class="box" style="margin-top:14px"><h4>Mechanical properties</h4><p>How a material <b>responds to an applied force</b>. Testing may deform or break the sample.</p><p><i>Tensile and compressive strength, stiffness, toughness, hardness, malleability, elasticity, plasticity, ductility, brittleness.</i></p></div>
<div class="tip"><b>Note.</b> Hardness is often listed as physical because it can be tested without much damage. The guide places it with the <b>mechanical</b> properties because some deformation is needed to test it. Use the guide’s grouping in an exam.</div>
<h3>Advantages of classifying</h3>
<ul class="tight"><li>Designers can <b>shortlist</b> suitable materials quickly.</li><li>Materials in a class can be <b>compared fairly</b> against a requirement.</li><li>Manufacturers can predict how a material will <b>behave in a process</b> (for example melting point in moulding).</li><li>Safety and legal limits (flammability, toxicity) can be <b>checked early</b>.</li><li>Knowledge can be <b>shared</b> in data sheets with common terms.</li></ul>
<div class="tip"><b>Exam tip.</b> “Explain how and why” needs <b>how</b> (grouped by what is measured or what force is applied) and <b>why</b> (so a designer can predict behaviour and select).</div>`},

{id:'s312',ref:'3.1.2',title:'Source and origin: families of materials and structures',
 must:'Discuss frame, shell, solid and combination structures. Classify materials as natural or human-made, including timbers, polymers, metals, glass, textiles, composites, smart materials and biomaterials.',
 html:`
<p>Materials can also be classified by <b>where they come from</b>.</p>
<div class="cols">
<div class="box"><h4>Natural</h4><p>Taken from nature: geological (stone, clay, metal ores, minerals) or biological (wood, cotton, wool, leather).</p></div>
<div class="box"><h4>Human-made (synthetic)</h4><p>Produced by chemical or industrial processes, often tailored properties: polymers, composites, smart materials, engineered textiles.</p></div></div>
<div class="tw"><table class="t"><tr><th>Family</th><th>Origin</th><th>Examples</th><th>Typical use</th></tr>
<tr><td>Timbers</td><td>Natural: hardwoods, softwoods, manufactured boards (processed from natural wood)</td><td>Oak, pine, plywood, MDF</td><td>Furniture, buildings, tools</td></tr>
<tr><td>Metals</td><td>Natural ores refined (ferrous, non-ferrous, alloys)</td><td>Steel, aluminium, copper</td><td>Structures, tools, wiring</td></tr>
<tr><td>Polymers</td><td>Mainly human-made (from oil or bio-feedstock)</td><td>Thermoplastics, thermosets, elastomers</td><td>Casings, packaging, seals</td></tr>
<tr><td>Glass</td><td>Made from natural sand (silica) and other oxides</td><td>Soda-lime, borosilicate, laminated</td><td>Windows, bottles, screens</td></tr>
<tr><td>Textiles</td><td>Natural (cotton, wool) or synthetic (nylon, polyester)</td><td>Fabrics, fibres</td><td>Clothing, upholstery, safety gear</td></tr>
<tr><td>Composites</td><td>Human-made combinations</td><td>Carbon fibre, GRP, concrete</td><td>Sports equipment, vehicles, buildings</td></tr>
<tr><td>Smart materials</td><td>Human-made, react to the environment</td><td>Shape memory alloy, piezoelectric ceramic</td><td>Sensors, medical devices</td></tr>
<tr><td>Biomaterials</td><td>From living sources, or compatible with living tissue; often biodegradable</td><td>PLA, bamboo, mycelium, cellulose</td><td>Packaging, medical implants</td></tr></table></div>
<h3>Structure types</h3>
<div class="tw"><table class="t"><tr><th>Structure</th><th>Idea</th><th>Examples</th></tr>
<tr><td><b>Frame</b></td><td>An open skeleton of members that carries the load; light, with space between</td><td>Bicycle frame, scaffolding, pylons, tents</td></tr>
<tr><td><b>Shell</b></td><td>A thin outer skin that carries the load and encloses a space</td><td>Cycle helmet, car body panel, bottle, eggshell</td></tr>
<tr><td><b>Solid</b></td><td>A mass of material that carries the load directly</td><td>Stone block, hammer head, concrete dam</td></tr>
<tr><td><b>Combination</b></td><td>Frame + shell working together</td><td>Aircraft fuselage, car monocoque, canoe with ribs</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> When asked to discuss, give the structure type, an example, and <b>why it suits the product</b> (weight, strength, cost, use of material).</div>`},

{id:'s313',ref:'3.1.4',title:'Physical properties',
 must:'Explain density, thermal expansion, thermal conductivity, melting point, electrical resistivity and electrical conductivity.',
 html:`
<p>Physical properties are measured or observed <b>without changing the material</b>.</p>
<div class="tw"><table class="t"><tr><th>Property</th><th>Meaning</th><th>Why designers care</th><th>Example</th></tr>
<tr><td><b>Density</b></td><td>Mass per unit volume (kg/m³)</td><td>Weight and portability; floating or sinking; packaging foams</td><td>Aluminium (low density) for cookware and aircraft; lead (high) for weights</td></tr>
<tr><td><b>Thermal conductivity</b></td><td>How fast heat passes through a material</td><td>High: for heating and cooling. Low: for insulation.</td><td>Copper pan bases, kettle elements; polystyrene fridge insulation; vacuum flasks</td></tr>
<tr><td><b>Thermal expansion</b></td><td>Increase in length, area or volume when heated</td><td>Gaps and joints must allow for it; mismatched materials crack</td><td>Expansion joints on bridges and roads; bimetallic strips</td></tr>
<tr><td><b>Melting point</b></td><td>Temperature at which a solid becomes liquid</td><td><b>Function</b> (must not melt in use), <b>safety</b> (hot parts), <b>manufacture</b> (casting, moulding temperatures)</td><td>Aluminium for cookware; low melting point plastics moulded easily</td></tr>
<tr><td><b>Electrical conductivity</b></td><td>How easily current flows</td><td>High: wires and contacts</td><td>Copper cables</td></tr>
<tr><td><b>Electrical resistivity</b></td><td>Resistance to current flow (the opposite of conductivity)</td><td>High: insulators for safety</td><td>Ceramic insulators; plastic cable sheath</td></tr></table></div>
<div class="key">Mass is the amount of matter (kg) and does not change. <b>Weight</b> is a force (N) = mass × 9.8 on Earth. Density = mass ÷ volume.</div>
<div class="ex"><b class="l">Worked example.</b> A block of aluminium measures 0.10 m × 0.05 m × 0.04 m and has a mass of 0.54 kg. Volume = 0.10 × 0.05 × 0.04 = 0.0002 m³. Density = 0.54 ÷ 0.0002 = <b>2700 kg/m³</b>.</div>
<div class="ex"><b class="l">Context.</b> A cooking pot is made from aluminium or copper for the base (high thermal conductivity, so heat spreads), with a plastic or wooden handle (low conductivity, so it stays cool).</div>
<div class="tip"><b>Exam tip.</b> After defining a property, say <b>what happens in the product</b> because of it (“low thermal conductivity means the handle stays cool, so the user does not burn their hand”).</div>`},

{id:'s314',ref:'3.1.5',title:'Chemical properties',
 must:'Explain corrosion resistance, reactivity (food safe), hygroscopy and flammability.',
 html:`
<p>Chemical properties describe how a material <b>reacts</b> with water, oxygen, chemicals, heat or food. The reaction changes the material into something new, so designers check these properties for <b>safety, durability and suitability</b> for the environment.</p>
<div class="tw"><table class="t"><tr><th>Property</th><th>Meaning</th><th>Design context</th></tr>
<tr><td><b>Corrosion resistance</b></td><td>Ability to withstand chemical or electrochemical degradation from moisture, oxygen or acids; often a protective oxide layer forms.</td><td>Stainless steel kitchen sinks, titanium in marine use. Iron rusts, so it is painted or galvanised.</td></tr>
<tr><td><b>Reactivity (food safe)</b></td><td>How easily a material reacts with other substances. Reactive materials can react with acidic or salty food and contaminate it.</td><td>Glass jars for pickles and juices; stainless steel and food-grade polymers for cooking.</td></tr>
<tr><td><b>Hygroscopy</b></td><td>The tendency to <b>absorb moisture</b> from the air.</td><td>Wood swells and warps; nylon absorbs water and loses strength; salt clumps. Sealing or coating reduces the effect.</td></tr>
<tr><td><b>Flammability</b></td><td>Ability to ignite and keep burning. Burning is a chemical reaction.</td><td>Wood and some plastics are flammable and need care in furniture and buildings; flame-retardant treatments or metals are used instead.</td></tr>
<tr><td><b>Toxicity</b></td><td>The degree to which a substance can harm living things.</td><td>Some paints, adhesives and plastics release harmful chemicals, so safer alternatives are chosen, especially for toys.</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> A designer chooses between mild steel and stainless steel for an outdoor garden bench. Mild steel is cheaper but rusts when it meets rain and oxygen. Stainless steel contains chromium, which forms a thin protective oxide layer, so it resists corrosion with no coating. The higher material cost is justified by longer life and lower maintenance.</div>
<div class="tip"><b>Exam tip.</b> “Food safe” is a reactivity question: say the material <b>does not react with or contaminate food</b>, then name an example (glass, stainless steel).</div>`},

{id:'s315',ref:'3.1.6',title:'Mechanical properties',
 must:'Explain tensile and compressive strength, stiffness, toughness, hardness, malleability, elasticity, plasticity and ductility.',
 html:`
<p>Mechanical properties describe how a material behaves when a <b>force</b> is applied.</p>
<div class="tw"><table class="t"><tr><th>Property</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Tensile strength</b></td><td>Resistance to being pulled apart</td><td>Steel cables on a bridge</td></tr>
<tr><td><b>Compressive strength</b></td><td>Resistance to being squashed</td><td>Concrete columns; brick walls</td></tr>
<tr><td><b>Stiffness</b></td><td>Resistance to bending or deflection under a load</td><td>Aircraft wings; skateboard decks</td></tr>
<tr><td><b>Toughness</b></td><td>Ability to absorb energy and deform without fracturing; resists impact</td><td>Helmets; hammers; anvils</td></tr>
<tr><td><b>Hardness</b></td><td>Resistance to scratching, abrasion or penetration</td><td>Ceramic tiles; drill bits; tempered glass phone screens</td></tr>
<tr><td><b>Malleability</b></td><td>Can be permanently shaped by compression (hammering, rolling) without cracking</td><td>Gold leaf; aluminium sheet</td></tr>
<tr><td><b>Ductility</b></td><td>Can be permanently stretched or drawn into wire without breaking</td><td>Copper wire; mild steel</td></tr>
<tr><td><b>Elasticity</b></td><td>Returns to its original shape after the force is removed</td><td>Springs; rubber bands</td></tr>
<tr><td><b>Plasticity</b></td><td>Permanent change in shape without cracking</td><td>Plasticine; metals being forged; heated plastics being moulded</td></tr>
<tr><td><b>Brittleness</b></td><td>Fractures with very little deformation</td><td>Glass; ceramics; cast iron</td></tr></table></div>
<div class="key">Hard and tough are different. A material can be <b>hard but brittle</b> (a toffee bar, glass). Toughness needs both strength and some ductility.</div>
<h3>Stress and strain</h3>
<p><b>Stress</b> is force per unit area (N/m² or Pa). <b>Strain</b> is extension divided by original length (no units, or %). In a tensile test, a sample is pulled until it breaks, and the results form a stress–strain graph.</p>
<ul class="tight"><li>The <b>elastic region</b> is the straight section: the sample returns to its shape when the load is removed. Its gradient shows <b>stiffness</b>.</li><li>The <b>yield point</b> is where permanent (plastic) deformation begins.</li><li>The highest stress is the <b>ultimate tensile strength (UTS)</b>.</li><li>The <b>fracture point</b> is where it breaks. A long plastic region means a <b>ductile</b> material. The area under the curve represents <b>toughness</b>.</li></ul>
<div class="ex"><b class="l">Worked example.</b> A rod of cross-section 20 mm² carries a tensile force of 6000 N. Stress = F ÷ A = 6000 ÷ 0.00002 m² = 300 000 000 Pa = <b>300 MPa</b>. If the rod is 2.0 m long and extends 4 mm, strain = 0.004 ÷ 2.0 = <b>0.002</b> (0.2%).</div>
<div class="tip"><b>Exam tip.</b> Give a definition <b>and a product</b> for each property, and use contrast to show you understand: “malleable (compression, sheets) versus ductile (tension, wire)”.</div>`},

{id:'s316',ref:'3.1.3',title:'Choosing the most suitable material',
 must:'Evaluate physical, chemical and mechanical properties and aesthetic characteristics to select the most appropriate material for a purpose.',
 html:`
<p>No single material has every ideal property. Selection is a <b>trade-off</b> between requirements, and designers weigh many factors.</p>
<div class="tw"><table class="t"><tr><th>Trade-off</th><th>Example</th></tr>
<tr><td>Performance against weight</td><td>A thick steel car frame is safe but heavy and uses more fuel.</td></tr>
<tr><td>Strength against cost</td><td>Titanium is strong and light but too expensive for most consumer products.</td></tr>
<tr><td>Durability against ease of manufacture</td><td>Ceramics resist heat and scratching but are brittle and hard to shape.</td></tr>
<tr><td>Aesthetics</td><td>Appearance, texture and feel can decide the choice for consumer goods.</td></tr>
<tr><td>Environmental and ethical impact</td><td>Recyclability, source, energy used, working conditions.</td></tr></table></div>
<h3>How designers decide</h3>
<ul class="tight"><li><b>Technical data sheets</b> and manufacturer specifications give property values.</li><li><b>Testing real samples</b>: tensile, hardness, impact, thermal, wear and fatigue tests.</li><li><b>Comparison charts and Ashby diagrams</b> show many materials at once and eliminate those that fail a requirement.</li><li><b>Weighted decision matrix</b> scores each material against each criterion.</li></ul>
<div class="ex"><b class="l">Worked example: decision matrix.</b> Material for a child’s water bottle. Weighting: safety 5, weight 3, cost 2.
<div class="tw"><table class="t"><tr><th>Material</th><th>Safety (×5)</th><th>Weight (×3)</th><th>Cost (×2)</th><th>Total</th></tr><tr><td>Polypropylene</td><td>4 → 20</td><td>5 → 15</td><td>5 → 10</td><td><b>45</b></td></tr><tr><td>Stainless steel</td><td>5 → 25</td><td>3 → 9</td><td>2 → 4</td><td>38</td></tr><tr><td>Glass</td><td>3 → 15</td><td>2 → 6</td><td>4 → 8</td><td>29</td></tr></table></div>Polypropylene scores highest here. If safety were weighted more heavily, the result could change.</div>
<div class="tip"><b>Exam tip.</b> “Evaluate” needs <b>strengths and limitations of each candidate</b> and a justified choice. Link each property to a requirement in the brief.</div>`},

{id:'s317',ref:'3.1.7',title:'Composites and alloys',
 must:'Explain why combining materials can create composite materials more suitable for a specific purpose, using an example.',
 html:`
<p>A <b>composite</b> consists of two or more materials combined to <b>enhance their properties</b>. Most have a <b>matrix</b> (binds and supports) and a <b>reinforcement</b> (provides strength or stiffness).</p>
<div class="tw"><table class="t"><tr><th>Type</th><th>Reinforcement</th><th>Example</th><th>Properties gained</th></tr>
<tr><td>Fibre</td><td>Carbon, glass or aramid (Kevlar) fibres in resin</td><td>Carbon-fibre bicycle frame; GRP boat hull</td><td>Very high strength-to-weight; can be shaped into complex forms</td></tr>
<tr><td>Particle</td><td>Hard particles in a matrix</td><td>Tungsten carbide in cobalt; concrete (aggregate in cement)</td><td>Stiffness, hardness, wear resistance</td></tr>
<tr><td>Laminate / sheet</td><td>Layers bonded together</td><td>Laminated glass (PVB layer between glass sheets); plywood</td><td>Safer glass that holds together; stability against warping</td></tr></table></div>
<div class="cols">
<div class="box"><h4>Carbon fibre</h4><p>Woven carbon fabric is the reinforcement; <b>epoxy resin</b> is the matrix. Cured under heat and pressure in an autoclave, or built up by hand layup in a mould. Extremely strong and light, but expensive.</p></div>
<div class="box"><h4>Concrete</h4><p>Cement, sand, aggregate and water. Strong in compression but weak in tension, so <b>steel rebar</b> is added (reinforced concrete) to carry tensile loads.</p></div></div>
<h3>Alloys</h3>
<p>An <b>alloy</b> is a mixture of at least two elements, one of which is a metal. Different-sized atoms disturb the regular layers of atoms, so the layers slide less easily and alloys are usually <b>harder and stronger</b> than the pure metal, though less ductile and malleable.</p>
<ul class="tight"><li><b>Mild steel</b>: iron with 0.1 to 0.3% carbon. Harder, tougher and stronger than pure iron.</li><li><b>Stainless steel</b>: steel with chromium, which resists rust.</li><li><b>Alloy wheels</b>: aluminium with magnesium for strength and lightness.</li></ul>
<div class="tip"><b>Exam tip.</b> To answer “why combine materials”, name the two materials, the property each contributes, and the property that results (“glass fibre is strong in tension and the resin holds the shape: a light, strong hull”).</div>`},

{id:'s318',ref:'3.1.8',title:'Smart materials',
 must:'Explain how materials can be selected to react to external stimuli, including piezoelectricity, shape memory, photochromicity, magneto-rheostatic, electro-rheostatic and thermoelectricity.',
 html:`
<p><b>Smart materials</b> have one or more properties that can be <b>significantly changed in response to changes in their environment</b> (a stimulus such as light, temperature, pressure or a magnetic or electric field). The change is usually <b>reversible</b>.</p>
<div class="tw"><table class="t"><tr><th>Smart material</th><th>Stimulus → response</th><th>Application</th></tr>
<tr><td><b>Piezoelectric</b></td><td>Pressure or deformation → small electrical voltage (and the reverse: voltage → vibration)</td><td>Lighter igniters, sensors, buzzers, tiny speakers</td></tr>
<tr><td><b>Shape memory alloy (SMA), such as Nitinol</b></td><td>Heat → returns to a remembered shape. Super-elastic behaviour under load.</td><td>Medical stents that expand at body temperature, spectacle frames, dental braces</td></tr>
<tr><td><b>Photochromic</b></td><td>Light (UV) → reversible colour change</td><td>Transition lenses in sunglasses</td></tr>
<tr><td><b>Thermoelectric</b></td><td>Temperature difference → electricity (thermocouple)</td><td>Temperature monitors and thermostats, cool boxes</td></tr>
<tr><td><b>Magneto-rheostatic (MR) fluid</b></td><td>Magnetic field → fluid becomes almost solid in milliseconds, reversibly</td><td>Adaptive car suspension, vibration dampers</td></tr>
<tr><td><b>Electro-rheostatic (ER) fluid</b></td><td>Electric field → thickens in the same way</td><td>Clutches, dampers, tactile devices</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> A Nitinol stent enters a blood vessel small and cold. When it warms to body temperature it expands to its remembered shape and holds the vessel open. The designer chooses the material because it reacts to a stimulus (body heat) in exactly the way the product needs.</div>
<div class="tip"><b>Exam tip.</b> Always write the chain: <b>stimulus → change → benefit to the user</b>.</div>`},

{id:'s319',ref:'3.1.9',title:'Biodegradable materials and biomaterials',
 must:'Explain how biomaterials are a key part of a circular economy and can be used by designers to design out waste.',
 html:`
<p><b>Biodegradable materials</b> are broken down <b>naturally by microorganisms</b> such as bacteria and fungi after disposal or at the end of their useful life. Paper, cotton, untreated wood and natural rubber are examples. <b>Biomaterials</b> come from living sources (or are compatible with living tissue) and are often biodegradable, for example PLA from corn starch, bamboo, cellulose and mycelium packaging.</p>
<div class="cols">
<div class="box"><h4>Why they matter in a circular economy</h4><ul class="tight"><li>Biological materials can <b>return safely to nature</b> as nutrients, closing the loop.</li><li>They reduce <b>persistent waste</b> and landfill.</li><li>Many are <b>renewable</b>, so they reduce reliance on fossil fuels.</li><li>Designers can <b>design out waste</b> by choosing materials that do not need to be collected and recycled.</li></ul></div>
<div class="box"><h4>Cautions</h4><ul class="tight"><li>“Biodegradable” depends on conditions: heat, moisture and microorganisms. Some plastics only break down in industrial composters.</li><li>Biodegradable materials may be <b>weaker or less durable</b>.</li><li>Growing crops uses land, water and energy.</li><li>Mixed with non-degradable parts, the product cannot be composted.</li></ul></div></div>
<div class="tip"><b>Exam tip.</b> Link the property (biodegradable) to the <b>end-of-life route</b> (compost) and the <b>design benefit</b> (less waste), then add a limitation.</div>`}
],

cards:[
['Physical property','A property that can be measured or observed without changing the material (for example density).'],
['Chemical property','A property describing how a material reacts with other substances (for example corrosion resistance).'],
['Mechanical property','A property describing how a material responds to an applied force (for example toughness).'],
['Density','Mass per unit volume, usually in kg/m³.'],
['Thermal conductivity','How quickly heat passes through a material.'],
['Thermal expansion','The increase in length, area or volume of a material when heated.'],
['Melting point','The temperature at which a solid becomes a liquid.'],
['Electrical conductivity','How easily an electric current passes through a material.'],
['Electrical resistivity','A material’s resistance to the flow of electric current.'],
['Corrosion resistance','Ability to resist chemical or electrochemical degradation by moisture, oxygen or acids.'],
['Reactivity','How easily a material reacts with other substances. Important for food-safe products.'],
['Hygroscopy','The tendency of a material to absorb moisture from the air.'],
['Flammability','Ability of a material to ignite and keep burning.'],
['Toxicity','The degree to which a substance can harm living things.'],
['Tensile strength','Resistance to being pulled apart.'],
['Compressive strength','Resistance to being squashed.'],
['Stiffness','Resistance to bending or deflection under a load.'],
['Toughness','Ability to absorb energy and deform without fracturing.'],
['Hardness','Resistance to scratching, abrasion or penetration.'],
['Malleability','Ability to be permanently shaped by compression without cracking.'],
['Ductility','Ability to be permanently stretched, for example drawn into wire, without breaking.'],
['Elasticity','Ability to return to the original shape after the load is removed.'],
['Plasticity','Ability to be permanently reshaped without cracking.'],
['Brittleness','Tendency to fracture with very little deformation.'],
['Stress','Force per unit area (Pa or N/m²).'],
['Strain','Extension divided by original length.'],
['Yield point','The stress at which permanent (plastic) deformation begins.'],
['Ultimate tensile strength','The highest stress a material can withstand before it fractures.'],
['Natural material','Taken directly from nature, from geological or biological sources.'],
['Human-made material','Produced by chemical or industrial processes, such as polymers.'],
['Frame structure','An open skeleton of members that carries the load.'],
['Shell structure','A thin outer skin that carries the load and encloses a space.'],
['Solid structure','A mass of material that carries the load directly.'],
['Combination structure','A frame and shell working together, such as a car monocoque.'],
['Composite','Two or more materials combined to enhance their properties.'],
['Matrix and reinforcement','In a composite, the matrix binds and supports and the reinforcement provides strength or stiffness.'],
['Alloy','A mixture of at least two elements, one of which is a metal.'],
['Smart material','A material whose properties change significantly in response to a stimulus.'],
['Piezoelectric material','Produces a voltage when pressed or deformed, and vibrates when a voltage is applied.'],
['Shape memory alloy','A metal that returns to a remembered shape when heated, such as Nitinol.'],
['Photochromic material','A material that reversibly changes colour in light.'],
['Thermoelectricity','Electricity generated from a temperature difference.'],
['Magneto-rheostatic fluid','A fluid that thickens to nearly solid in a magnetic field.'],
['Biodegradable material','A material that is broken down by microorganisms after disposal.']
],

mcq:[
{ref:'3.1.1',q:'Which is a physical property?',o:['Corrosion resistance','Density','Flammability','Toughness'],a:1,why:'Density can be measured without changing the material. Corrosion resistance and flammability are chemical; toughness is mechanical.',live:true},
{ref:'3.1.1',q:'Why are materials classified into groups?',o:['To make them cheaper','So designers can predict behaviour and select suitable materials','To reduce the number of materials made','Because the law requires it'],a:1,why:'Classification supports comparison, prediction and selection.'},
{ref:'3.1.1',q:'Which property group describes how a material reacts with another substance?',o:['Physical','Chemical','Mechanical','Aesthetic'],a:1,why:'Chemical properties involve reactions that change the material’s composition.',live:true},
{ref:'3.1.2',q:'Which is a natural material?',o:['Nylon','Cotton','Polyester','Carbon fibre'],a:1,why:'Cotton comes from a plant. The others are human-made.',live:true},
{ref:'3.1.2',q:'A car body shell with a frame underneath is an example of which structure?',o:['Solid','Frame only','Shell only','Combination'],a:3,why:'A frame and shell working together is a combination structure.'},
{ref:'3.1.2',q:'A thin outer skin that carries the load and encloses a space is a…',o:['Frame structure','Shell structure','Solid structure','Fibre structure'],a:1,why:'A bottle or helmet is a shell structure.',live:true},
{ref:'3.1.3',q:'Titanium is strong and light but not used in most consumer products. Which trade-off does this show?',o:['Strength against cost','Weight against colour','Durability against flexibility','Heat against sound'],a:0,why:'Its performance is high but the cost is too high for mass-market goods.',live:true},
{ref:'3.1.3',q:'What does a weighted decision matrix do?',o:['Measures material density','Scores materials against weighted criteria to support a choice','Draws a stress–strain graph','Predicts weather'],a:1,why:'Weights show the importance of each criterion, and scores are multiplied and added.'},
{ref:'3.1.4',q:'Which property should be HIGH for a saucepan base?',o:['Electrical resistivity','Thermal conductivity','Hygroscopy','Brittleness'],a:1,why:'Heat must spread through the base quickly.',live:true},
{ref:'3.1.4',q:'Which property should be LOW for a kettle handle?',o:['Thermal conductivity','Density only','Melting point','Strain'],a:0,why:'A handle must not conduct heat to the hand.'},
{ref:'3.1.4',q:'A block has mass 1.2 kg and volume 0.0006 m³. Its density is…',o:['2 000 kg/m³','720 kg/m³','0.0005 kg/m³','2.0 kg/m³'],a:0,why:'Density = mass ÷ volume = 1.2 ÷ 0.0006 = 2000 kg/m³.',live:true},
{ref:'3.1.4',q:'Expansion gaps in bridges are needed because of…',o:['Density','Thermal expansion','Hardness','Ductility'],a:1,why:'Materials expand when heated and need space to expand.'},
{ref:'3.1.5',q:'Stainless steel is used for kitchen sinks mainly because it has good…',o:['Corrosion resistance','Flammability','Hygroscopy','Elasticity'],a:0,why:'Chromium forms a protective oxide layer that resists rust.',live:true},
{ref:'3.1.5',q:'Why are glass jars used for pickles?',o:['Glass is low in reactivity with acidic foods','Glass is flammable','Glass is ductile','Glass is a good conductor'],a:0,why:'Glass does not react with or contaminate acidic food.'},
{ref:'3.1.5',q:'Nylon absorbing water from the air and losing strength is an example of…',o:['Hygroscopy','Conductivity','Malleability','Toughness'],a:0,why:'Hygroscopic materials absorb moisture.',live:true},
{ref:'3.1.6',q:'A material that can be drawn into long thin wire without breaking is…',o:['Brittle','Ductile','Hard','Stiff'],a:1,why:'Ductility is the ability to stretch under tension.'},
{ref:'3.1.6',q:'Which property is most important for an aircraft wing so it keeps its shape?',o:['Stiffness','Flammability','Ductility','Malleability'],a:0,why:'Stiffness is resistance to deflection.',live:true},
{ref:'3.1.6',q:'Glass can scratch rarely but shatters when dropped. It is…',o:['Hard but brittle','Soft and ductile','Tough and malleable','Elastic and plastic'],a:0,why:'Hard means resistant to scratching, brittle means it fractures with little deformation.'},
{ref:'3.1.6',q:'A tensile test gives a graph of…',o:['Stress against strain','Mass against volume','Heat against time','Cost against weight'],a:0,why:'The test pulls a sample and records stress and strain.',live:true},
{ref:'3.1.6',q:'A rod of cross-section 50 mm² carries 10 kN. The stress is…',o:['200 MPa','500 MPa','0.2 MPa','2 MPa'],a:0,why:'10 000 N ÷ 0.00005 m² = 200 000 000 Pa = 200 MPa.'},
{ref:'3.1.7',q:'In a carbon-fibre composite, the epoxy resin is the…',o:['Reinforcement','Matrix','Alloy','Catalyst only'],a:1,why:'The matrix binds and supports the fibres.',live:true},
{ref:'3.1.7',q:'Why is steel rebar added to concrete?',o:['Concrete is weak in tension','Concrete is too light','Concrete is too hard','To change colour'],a:0,why:'Concrete is strong in compression but weak in tension.'},
{ref:'3.1.7',q:'An alloy is generally…',o:['Softer than the pure metal','Harder and stronger than the pure metal','A pure element','A polymer'],a:1,why:'Different-sized atoms stop layers sliding easily.',live:true},
{ref:'3.1.8',q:'Which smart material generates a voltage when pressed?',o:['Photochromic','Piezoelectric','Shape memory alloy','ER fluid'],a:1,why:'Piezoelectric materials convert deformation to electricity.',live:true},
{ref:'3.1.8',q:'A Nitinol stent expands at body temperature. This is a…',o:['Shape memory alloy','Photochromic material','MR fluid','Thermoset'],a:0,why:'Shape memory alloys return to a remembered shape when heated.'},
{ref:'3.1.8',q:'Sunglass lenses that darken in bright sunlight use…',o:['Photochromic material','Piezoelectric material','Thermoelectric material','Elastomer'],a:0,why:'They change colour in response to UV light.'},
{ref:'3.1.9',q:'Which is biodegradable?',o:['Cotton','Polystyrene','Carbon fibre','Glass'],a:0,why:'Cotton is broken down by microorganisms.',live:true},
{ref:'3.1.9',q:'Why are biomaterials linked to the circular economy?',o:['They can return safely to nature, designing out waste','They are always stronger','They never decay','They are always cheaper'],a:0,why:'Biological materials can be composted and re-enter natural cycles.'}
],

fib:[
{ref:'3.1.1',t:'[[Physical]] properties can be measured without changing the material, whereas [[chemical]] properties describe how it reacts with other substances.'},
{ref:'3.1.1',t:'Properties that describe how a material responds to a force are called [[mechanical]] properties.'},
{ref:'3.1.2',t:'A [[shell]] structure is a thin outer skin that carries the load, and a combination structure joins a [[frame]] and a shell.'},
{ref:'3.1.4',t:'Density is mass per unit [[volume]].'},
{ref:'3.1.4',t:'Materials with low thermal [[conductivity]] are used as insulators, and materials with high electrical [[resistivity]] are used as electrical insulators.'},
{ref:'3.1.5',t:'[[Hygroscopy|Hygroscopic]] materials absorb moisture from the air.'},
{ref:'3.1.5',t:'A [[food|food safe|foodsafe]] safe material does not react with the food and contaminate it.'},
{ref:'3.1.6',t:'[[Ductile]] materials can be drawn into wire, whereas [[malleable]] materials can be hammered or rolled into sheets.'},
{ref:'3.1.6',t:'The area under a stress–strain graph represents the [[toughness]] of a material.'},
{ref:'3.1.6',t:'[[Stress]] is force per unit area, and [[strain]] is extension divided by original length.'},
{ref:'3.1.7',t:'A [[composite]] combines two or more materials to enhance their properties, and an [[alloy]] is a mixture of a metal with at least one other element.'},
{ref:'3.1.7',t:'In carbon fibre, the fabric is the [[reinforcement]] and the epoxy resin is the [[matrix]].'},
{ref:'3.1.8',t:'[[Piezoelectric]] materials produce a voltage when they are squeezed.'},
{ref:'3.1.8',t:'A shape memory [[alloy]] such as Nitinol returns to a remembered shape when heated.'},
{ref:'3.1.9',t:'A [[biodegradable]] material is broken down by microorganisms after disposal.'}
],

theory:[
{ref:'3.1.1',cmd:'Explain',marks:3,q:'Explain why materials are classified by their physical, chemical and mechanical properties.',
 pts:['Classification lets designers <b>predict how a material will behave</b> [1]','…so materials can be <b>compared</b> and the right one <b>selected</b> for a use [1]','It also helps manufacturers choose processes and check safety, for example <b>melting point</b> and <b>flammability</b> [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['predict','compared','selected','manufacturers','safety'],acc:'Accept examples of each property group as support.',tip:'Link grouping to prediction and selection.'},
{ref:'3.1.2',cmd:'Describe',marks:4,q:'Describe frame, shell, solid and combination structures, with an example of each.',
 pts:['<b>Frame</b>: an open skeleton that carries the load, for example a bicycle frame [1]','<b>Shell</b>: a thin outer skin that carries load and encloses a space, for example a helmet [1]','<b>Solid</b>: a mass of material that carries the load directly, for example a stone block [1]','<b>Combination</b>: a frame and shell working together, for example an aircraft fuselage [1]'],
 award:'Award [1] for each structure described with a valid example, up to [4 max].',kw:['frame','shell','solid','combination','example'],acc:'Accept any realistic example.',tip:'Describe each in a sentence then give one product.'},
{ref:'3.1.4',cmd:'Explain',marks:4,q:'Explain why aluminium is often used for saucepans, with reference to two physical properties.',
 pts:['<b>High thermal conductivity</b> [1] so heat spreads quickly and evenly through the pan [1]','<b>Low density</b> [1] so the pan is light and easy to handle [1]','<b>Melting point</b> (660 °C) is much higher than cooking temperatures [1] so the pan does not melt in use [1]'],
 award:'Award [1] for each property identified and [1] for development, up to [4 max].',kw:['thermal conductivity','density','melting point','light','evenly'],acc:'Any two properties with development.',tip:'Property, then what it does for the pan or the user.'},
{ref:'3.1.4',cmd:'Apply',marks:3,q:'A metal block measures 80 mm × 50 mm × 25 mm and has a mass of 0.78 kg. Apply the data to calculate its density in kg/m³, and say whether it could be aluminium (2700 kg/m³) or steel (7800 kg/m³).',
 pts:['Volume = 0.08 × 0.05 × 0.025 = <b>0.0001 m³</b> [1]','Density = 0.78 ÷ 0.0001 = <b>7800 kg/m³</b> [1]','This matches <b>steel</b> [1]'],
 award:'Award [1] for the volume, [1] for the density, [1] for the conclusion.',kw:['0.0001 m³','7800','steel'],acc:'Follow-through applies. Units must be shown.',tip:'Convert mm to m first. Show working and units.'},
{ref:'3.1.5',cmd:'Explain',marks:4,q:'Explain why glass or stainless steel is preferred to a reactive metal for a food storage container.',
 pts:['Glass and stainless steel have <b>low reactivity</b> with food [1]','Acidic or salty food could <b>react with a reactive metal</b> [1]','…which could <b>contaminate the food</b> or change its taste and colour [1]','The container also stays <b>durable and hygienic</b> because it does not corrode [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['reactivity','contaminate','acidic','corrosion','hygienic'],acc:'Accept “food safe” as a linked point.',tip:'Link reactivity to food safety and durability.'},
{ref:'3.1.5',cmd:'Describe',marks:3,q:'Describe how hygroscopy could affect a wooden kitchen table and how a designer reduces the effect.',
 pts:['Wood is <b>hygroscopic</b>: it absorbs moisture from the air [1]','It <b>swells and warps</b> in damp conditions and shrinks and cracks when dry [1]','The designer uses a <b>sealant, varnish or oil</b>, or a stable manufactured board, to reduce moisture absorption [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['hygroscopic','absorbs','swells','warps','sealant'],acc:'Any appropriate protective treatment.',tip:'Define the property, say the effect, then the solution.'},
{ref:'3.1.6',cmd:'Explain',marks:4,q:'Explain the difference between malleability and ductility, with an example of each.',
 pts:['<b>Malleability</b> is the ability to be permanently shaped under compression (hammering or rolling) without cracking [1]','Example: gold leaf or aluminium sheet [1]','<b>Ductility</b> is the ability to be permanently stretched under tension, for example drawn into wire, without breaking [1]','Example: copper wire [1]'],
 award:'Award [1] for each definition and [1] for each example, up to [4 max].',kw:['malleability','compression','ductility','tension','wire'],acc:'Both sides are needed to show a difference.',tip:'Compare the type of force (compression and tension) as well as the product.'},
{ref:'3.1.6',cmd:'Explain',marks:3,q:'Explain why a bicycle helmet needs toughness but a ceramic tile needs hardness.',
 pts:['A helmet must <b>absorb impact energy</b> without fracturing, which is toughness [1]','A tile must <b>resist scratching and wear</b> from feet and tools, which is hardness [1]','Hard materials may be <b>brittle</b>, so the tile suits low impact and a helmet needs a material that can deform [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['toughness','impact','hardness','scratching','brittle'],acc:'Accept any valid contrast.',tip:'Name each property and link it to the use.'},
{ref:'3.1.6',cmd:'Analyse',marks:4,q:'Analyse a stress–strain graph for a ductile metal: identify and explain the elastic region, yield point, ultimate tensile strength and fracture point.',
 pts:['<b>Elastic region</b>: the straight section where the material returns to its shape when the load is removed [1]','<b>Yield point</b>: where permanent (plastic) deformation begins [1]','<b>UTS</b>: the highest stress on the graph, the maximum the material can carry [1]','<b>Fracture point</b>: where the material breaks; a long plastic region shows ductility [1]'],
 award:'Award [1] for each feature identified and explained, up to [4 max].',kw:['elastic region','yield point','UTS','fracture','plastic'],acc:'A labelled sketch of the graph can score.',tip:'Break the graph down into parts and say what each part tells the designer.'},
{ref:'3.1.7',cmd:'Explain',marks:4,q:'Explain why a canoe paddle is made from carbon fibre composite rather than aluminium or wood.',
 pts:['Carbon fibre has a very <b>high strength-to-weight ratio</b> [1] so the paddle is light and reduces fatigue [1]','The fibres are <b>stiff</b>, so the blade does not flex and energy is not wasted [1]','Compared with wood, it is <b>not hygroscopic</b> and resists rot, and can be moulded to complex shapes; the cost is higher [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['strength-to-weight','stiff','composite','hygroscopic','moulded'],acc:'Accept a balancing point on cost.',tip:'Name the property gained from combining the materials and link it to the user.'},
{ref:'3.1.8',cmd:'Explain',marks:4,q:'Explain how a piezoelectric material could be used in a product, and how a shape memory alloy could be used in a different product.',
 pts:['<b>Piezoelectric</b>: it produces a voltage when pressed or deformed, so it can be used as a sensor or igniter [1]','Example: the click-igniter in a gas lighter or a buzzer in an alarm [1]','<b>Shape memory alloy</b>: returns to a remembered shape when heated [1]','Example: a Nitinol stent that expands at body temperature, or spectacle frames that recover after bending [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['piezoelectric','voltage','shape memory','heated','remembered shape'],acc:'Accept other valid applications.',tip:'Use the chain: stimulus, change, benefit.'},
{ref:'3.1.9',cmd:'Evaluate',marks:6,q:'Evaluate the use of a biodegradable material, such as PLA or paper, for single-use food packaging.',
 pts:['Strength: <b>breaks down</b> naturally and reduces landfill waste [1]','Strength: often <b>renewable</b> and reduces use of fossil fuels [1]','Strength: supports a <b>circular economy</b> by returning to nature [1]','Limitation: may <b>need industrial composting</b>, so it does not decompose in the open environment [1]','Limitation: can be <b>weaker or less moisture-resistant</b>, and crop growing uses land and water [1]','Judgement: suitable if collection and composting exist, but reducing use or reuse is better than single use [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['biodegradable','renewable','circular economy','industrial composting','judgement'],acc:'Maximum [6].',tip:'Weigh benefits against conditions of use, and give a final decision.'}
],

practice:[
/* ---------- CASE 1 ---------- */
{id:'cs1',title:'Case study 1: A tensile test',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A materials laboratory tests two samples of the same size in tension. Sample A is a ductile steel. Sample B is a ceramic. The results are shown in Figure 1 (illustrative data). The cross-section of each sample is 20 mm² and the gauge length is 100 mm.</p>`,
 fig:Fig.xy([{name:'A',pts:[[0,0],[0.125,250],[2,260],[8,350],[18,400],[24,370],[28,320]]},{name:'B',pts:[[0,0],[0.4,120]]}],{x0:0,x1:30,y0:0,y1:480,xl:'Strain (%)',yl:'Stress (MPa)',h:270,title:'Stress against strain',marks:[[0.125,250,'Y'],[18,400,'UTS'],[28,320,'F']]}),
 cap:'Figure 1: Stress–strain graph for samples A and B. Y = yield point of A, UTS = highest point of A, F = fracture of A.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Sample data</th></tr><tr><th></th><th>Sample A</th><th>Sample B</th></tr><tr><td>Cross-section</td><td>20 mm²</td><td>20 mm²</td></tr><tr><td>Fracture stress</td><td>320 MPa</td><td>120 MPa</td></tr><tr><td>Strain at fracture</td><td>28%</td><td>0.4%</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.1.6',q:'State the ultimate tensile strength of sample A from Figure 1.',
  award:'Award [1].',pts:['<b>400 MPa</b> [1]'],acc:'Accept 390 to 410 MPa. Units are required.',kw:['400 MPa','UTS'],tip:'The UTS is the highest point on the curve.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'3.1.6',q:'Apply Figure 1 to calculate the maximum force that sample A carried before it began to fracture.',
  award:'Award [1] for conversion of area. Award [1] for the force.',pts:['Area = 20 mm² = 20 × 10⁻⁶ m² = <b>0.00002 m²</b> [1]','F = stress × area = 400 × 10⁶ × 0.00002 = <b>8000 N</b> (8 kN) [1]'],acc:'Accept 8 kN. Follow-through applies for an incorrect UTS.',kw:['0.00002','8000 N'],tip:'Convert mm² to m² before multiplying. Show your units.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.1.6',q:'Explain which sample is ductile and which is brittle, using evidence from Figure 1 and Table 1.',
  award:'Award [1] for each valid point up to [3 max].',pts:['<b>A is ductile</b>: it has a long plastic region and extends to 28% before breaking [1]','<b>B is brittle</b>: it breaks at only 0.4% strain with no plastic region [1]','B fractures suddenly with little warning because it absorbs very little energy [1]'],acc:'Both samples must be classified.',kw:['ductile','brittle','plastic region','28%','0.4%'],tip:'Use numbers from the data to support each classification.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.1.6',q:'Sample A is chosen for a car crumple zone. Explain why its toughness suits this purpose.',
  award:'Award [1] for each valid point up to [3 max].',pts:['Toughness is the <b>energy absorbed before fracture</b>, shown by the area under the graph [1]','A has a large area because it can <b>deform plastically</b> [1]','So in a crash it <b>absorbs impact energy</b> by deforming, protecting the passengers [1]'],acc:'Accept “toughness” defined as ability to absorb energy.',kw:['toughness','area under','plastically','absorbs','energy'],tip:'Say how the graph shows toughness, then link it to the crash.'},
 {l:'(e)',cmd:'Evaluate',marks:4,ref:'3.1.3',q:'Evaluate the use of the ceramic (sample B) for a kitchen worktop.',
  award:'Award [1] for each valid point, up to [2 max] for strengths and [2 max] for limitations. Reward a judgement.',pts:['Strength: ceramics are very <b>hard</b>, resisting scratching and wear [1]','Strength: good <b>heat and chemical resistance</b> for a kitchen [1]','Limitation: <b>brittle</b>, so it can crack or chip if something is dropped [1]','Limitation: difficult to <b>shape</b> and repair [1]','Judgement: suitable if supported on a rigid base and protected from impact [1]'],
  acc:'Maximum [4].',kw:['hard','heat resistance','brittle','chip','judgement'],tip:'Use hardness and brittleness in the same argument.'}
 ]},

/* ---------- CASE 2 ---------- */
{id:'cs2',title:'Case study 2: Choosing material for a frying pan',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A cookware company is designing a new frying pan for home cooks. The designer shortlists four metals for the body (Table 2). The pan will be used on hobs up to 300 °C, must be food safe, and the company wants a light pan that heats evenly. Figure 2 compares the densities.</p>`,
 fig:Fig.bars([['Aluminium',2700],['Cast iron',7200],['Stainless steel',7800],['Copper',8960]],{title:'Density (kg/m³)',unit:'',lw:130,max:9500,hl:[0]}),
 cap:'Figure 2: Density of the four shortlisted metals (approximate values).',
 table:`<table class="t"><tr><th colspan="5">Table 2: Approximate data</th></tr><tr><th>Property</th><th>Aluminium</th><th>Cast iron</th><th>Stainless steel</th><th>Copper</th></tr>
 <tr><td>Thermal conductivity (W/m·K)</td><td>205</td><td>55</td><td>16</td><td>400</td></tr><tr><td>Melting point (°C)</td><td>660</td><td>1200</td><td>1450</td><td>1085</td></tr>
 <tr><td>Corrosion resistance</td><td>Good (oxide layer)</td><td>Poor (rusts unless seasoned)</td><td>Excellent</td><td>Good, but tarnishes</td></tr>
 <tr><td>Relative cost</td><td>Low</td><td>Low</td><td>Medium</td><td>High</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'3.1.4',q:'Identify the metal in Table 2 with the highest thermal conductivity.',
  award:'Award [1].',pts:['<b>Copper</b> (400 W/m·K) [1]'],acc:'Do not accept units alone.',kw:['copper','400'],tip:'Look for the highest number.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'3.1.4',q:'The pan body has a volume of 0.00045 m³. Apply Figure 2 to calculate the mass of an aluminium pan and a stainless steel pan.',
  award:'Award [1] for each mass.',pts:['Aluminium: 2700 × 0.00045 = <b>1.215 kg</b> [1]','Stainless steel: 7800 × 0.00045 = <b>3.51 kg</b> [1]'],acc:'Accept 1.2 kg and 3.5 kg.',kw:['1.215 kg','3.51 kg','mass = density × volume'],tip:'Mass = density × volume.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.1.5',q:'Explain why cast iron needs a seasoning or coating before use, but stainless steel does not.',
  award:'Award [1] for each valid point up to [3 max].',pts:['Cast iron has <b>poor corrosion resistance</b> and reacts with water and oxygen to form rust [1]','Seasoning with oil forms a <b>protective barrier</b> that stops moisture reaching the iron [1]','Stainless steel contains <b>chromium</b> which forms a protective oxide layer, so it resists corrosion without coating [1]'],acc:'Accept “oxidation” for rusting.',kw:['corrosion resistance','rust','seasoning','chromium','oxide layer'],tip:'Link each material to its chemical property.'},
 {l:'(d)',cmd:'Justify',marks:4,ref:'3.1.3',q:'Justify the choice of aluminium for the pan body, using at least two properties from Table 2 or Figure 2.',
  award:'Award [1] for each valid reason, up to [4 max]. Each must use evidence.',pts:['<b>Low density</b> (2700 kg/m³) gives a light pan, 1.2 kg compared with 3.5 kg for steel [1]','<b>High thermal conductivity</b> (205 W/m·K) gives even heating and fast response [1]','<b>Melting point</b> of 660 °C is well above the 300 °C hob use [1]','<b>Low cost</b> and good corrosion resistance from the oxide layer keep the price and maintenance low [1]'],
  acc:'Reward balanced reasons with data.',kw:['density','thermal conductivity','melting point','low cost','oxide layer'],tip:'Give a property, a number, and what it means for the user.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.1.3',q:'Evaluate copper and cast iron as alternative materials for the pan body.',
  award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',pts:['Copper: <b>highest conductivity</b>, so fast and even heating [1]','Copper: <b>high cost and high density</b>, and tarnishes, so it is a premium product [1]','Cast iron: <b>retains heat</b> well and is durable [1]','Cast iron: <b>very heavy</b> (7200 kg/m³), low conductivity and <b>rusts</b> without care [1]','Both must be checked for food safety and lining (copper reacts with acid foods so is often lined) [1]','Judgement: aluminium meets most needs for a light, affordable pan; copper or cast iron suit specialist cooks [1]'],
  acc:'Maximum [6].',kw:['conductivity','cost','density','retains heat','rusts','judgement'],tip:'Weigh both materials against the brief, then give a decision.'}
 ]},

/* ---------- CASE 3 ---------- */
{id:'cs3',title:'Case study 3: A racing kayak and a smart helmet',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A manufacturer builds a racing kayak with a composite hull. The hull has an outer gel-coat, three layers of glass fibre cloth bonded with polyester resin, and a foam core between two layers of carbon fibre. The company also designs a smart helmet with a visor lens that darkens in bright light and a chin strap sensor made from a piezoelectric film.</p>`,
 fig:Fig.boxes([{x:90,y:10,w:340,h:34,t:'Gel coat (smooth, waterproof finish)',f:'var(--paper)'},{x:90,y:50,w:340,h:34,t:'Glass fibre in polyester resin ×3 layers'},{x:90,y:90,w:340,h:34,t:'Carbon fibre in epoxy resin',hl:1},{x:90,y:130,w:340,h:46,t:'Foam core (low density, keeps layers apart)',f:'var(--paper)'},{x:90,y:182,w:340,h:34,t:'Carbon fibre in epoxy resin',hl:1}],[],{h:228,label:'Layers of the kayak hull'}),
 cap:'Figure 3: Cross-section of the kayak hull (layers, not to scale).',
 table:`<table class="t"><tr><th colspan="3">Table 3: Material choices</th></tr><tr><th>Part</th><th>Material</th><th>Reason given by the designer</th></tr>
 <tr><td>Hull</td><td>Glass fibre and carbon fibre composite</td><td>High strength-to-weight, can be moulded to a smooth shape</td></tr><tr><td>Visor</td><td>Photochromic lens</td><td>Darkens in sunlight</td></tr><tr><td>Strap sensor</td><td>Piezoelectric film</td><td>Detects a fall</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.1.7',q:'State one function of the resin in the composite layers.',
  award:'Award [1].',pts:['The resin is the <b>matrix</b>: it binds and holds the fibres together [1]','It transfers load between fibres and gives the shape [1]'],acc:'Any one.',kw:['matrix','binds'],tip:'Think of the role of the matrix.'},
 {l:'(b)',cmd:'Explain',marks:3,ref:'3.1.7',q:'Explain why the designer uses a composite for the hull instead of aluminium sheet.',
  award:'Award [1] for each valid point up to [3 max].',pts:['The composite has a <b>high strength-to-weight ratio</b> so the kayak is fast and easy to carry [1]','It can be <b>moulded to complex smooth shapes</b> without joints, which reduces drag [1]','It does not corrode in water, and layers can be <b>tailored to the loads</b> [1]'],acc:'Accept a cost limitation as a balancing point.',kw:['strength-to-weight','moulded','drag','tailored','corrode'],tip:'Name the composite benefit then link it to the kayak’s use.'},
 {l:'(c)',cmd:'Describe',marks:3,ref:'3.1.2',q:'Describe why the hull is a shell structure and how the foam core makes it a combination.',
  award:'Award [1] for each valid point up to [3 max].',pts:['The hull is a <b>thin outer skin</b> that carries the load and encloses a space [1]','The foam core <b>separates the stiff skins</b>, increasing stiffness and keeping weight low [1]','Internal ribs or a frame can support the shell (combination) so the hull does not buckle [1]'],acc:'Accept a sandwich structure explanation.',kw:['shell','skin','foam core','stiffness','frame'],tip:'Describe what carries the load and what supports it.'},
 {l:'(d)',cmd:'Explain',marks:4,ref:'3.1.8',q:'Explain how the photochromic visor and the piezoelectric strap sensor each respond to a stimulus.',
  award:'Award [1] for each stimulus and [1] for each response, up to [4 max].',pts:['Photochromic: the stimulus is <b>UV light or bright sunlight</b> [1]','…the lens <b>darkens reversibly</b>, protecting the rider’s eyes [1]','Piezoelectric: the stimulus is <b>pressure or deformation</b> from a fall or tug [1]','…it <b>generates a voltage</b> that a circuit can detect to trigger an alert [1]'],acc:'Accept “returns to clear when the light reduces”.',kw:['UV light','darkens','pressure','voltage','stimulus'],tip:'Stimulus, change, benefit.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.1.7',q:'Evaluate the use of carbon fibre composite for the hull in terms of materials properties, cost and the environment.',
  award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',pts:['Strength: very <b>light and stiff</b>, so faster racing [1]','Strength: <b>durable</b> and does not corrode in water [1]','Strength: layers can be arranged to <b>suit the loads</b>, so material is used efficiently [1]','Limitation: <b>expensive</b> raw materials and labour-intensive moulding [1]','Limitation: <b>hard to recycle</b>, because fibres are bonded in thermoset resin [1]','Judgement: suitable for racing where performance matters most, but a recyclable material may suit a leisure kayak [1]'],
  acc:'Maximum [6].',kw:['light','stiff','durable','expensive','recycle','judgement'],tip:'Cover properties, cost and environment, then decide.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · SL + HL',intro:'<p>Quick questions of the kind that appear in the short-answer section. Each question is independent.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.1.4',q:'State one physical property that is important for a kettle element.',award:'Award [1].',pts:['<b>High thermal conductivity</b> (or high melting point) [1]'],acc:'Accept electrical resistivity.',kw:['thermal conductivity','melting point'],tip:'One property only.'},
 {l:'2',cmd:'Identify',marks:1,ref:'3.1.6',q:'Identify the mechanical property that describes a material’s resistance to scratching.',award:'Award [1].',pts:['<b>Hardness</b> [1]'],acc:'Do not accept toughness.',kw:['hardness'],tip:'Hard and tough are different.'},
 {l:'3',cmd:'Outline',marks:2,ref:'3.1.5',q:'Outline what is meant by corrosion resistance.',award:'Award [1] for each up to [2 max].',pts:['The ability to <b>withstand chemical or electrochemical degradation</b> [1]','…caused by moisture, oxygen or acids in the environment [1]'],acc:'Accept “resists rusting” with a reason.',kw:['degradation','moisture','oxygen'],tip:'Two brief points.'},
 {l:'4',cmd:'Describe',marks:2,ref:'3.1.6',q:'Describe what is meant by plasticity.',award:'Award [1] for each up to [2 max].',pts:['The ability of a material to be <b>permanently changed in shape</b> [1]','…by external force or pressure <b>without cracking or breaking</b> [1]'],acc:'Accept plasticine or moulding of plastics as an example.',kw:['permanently','shape','without cracking'],tip:'Say permanent and without breaking.'},
 {l:'5',cmd:'Explain',marks:3,ref:'3.1.7',q:'Explain why concrete is reinforced with steel bars.',award:'Award [1] for each up to [3 max].',pts:['Concrete is strong in <b>compression</b> [1]','…but weak in <b>tension</b> and can crack [1]','Steel bars carry the <b>tensile loads</b>, so the composite resists both [1]'],acc:'Accept “rebar”.',kw:['compression','tension','steel','rebar'],tip:'Name what each material does well.'},
 {l:'6',cmd:'Explain',marks:2,ref:'3.1.8',q:'Explain how a shape memory alloy such as Nitinol could be used for glasses frames.',award:'Award [1] for each up to [2 max].',pts:['The frame can be <b>bent or twisted</b> out of shape [1]','…and <b>returns to its original shape</b> (when heated, or by pseudo-elasticity), so it does not stay damaged [1]'],acc:'Accept stents as an alternative example.',kw:['original shape','bent','remembered shape'],tip:'Say what the user can do and what the material does.'},
 {l:'7',cmd:'Justify',marks:3,ref:'3.1.9',q:'A packaging company changes to paper from polystyrene foam. Justify the change with reference to material classification.',award:'Award [1] for each up to [3 max].',pts:['Paper is <b>natural and biodegradable</b>, so microorganisms break it down [1]','Polystyrene is a <b>human-made polymer</b> that persists in the environment [1]','Paper can be <b>recycled or composted</b>, supporting a circular economy and reducing waste [1]'],acc:'Accept a limitation as a balancing point.',kw:['natural','biodegradable','human-made','circular economy'],tip:'Use source/origin and end-of-life route.'},
 {l:'8',cmd:'Evaluate',marks:3,ref:'3.1.3',q:'Evaluate the use of titanium for a mobile phone casing.',award:'Award [1] for each up to [3 max].',pts:['Strength: <b>strong, light and corrosion resistant</b> [1]','Limitation: <b>expensive</b> and difficult to machine [1]','Judgement: suitable for a premium model, but not for a low-cost mass-market phone [1]'],acc:'Maximum [3].',kw:['strong','light','expensive','judgement'],tip:'One strength, one limitation, one decision.'}
 ]},

paper:[
 {ref:'3.1.4',what:'Specimen Paper 2, question 2(a): state a physical property of a material [1]. Markscheme examples: density, thermal conductivity.',key:'Award [1] for one relevant physical property.'},
 {ref:'3.1.5',what:'Specimen Paper 2, question 2(b): state a chemical property of a material [1]. Markscheme example: reactivity.',key:'Award [1] for one relevant chemical property.'},
 {ref:'3.1.6',what:'Specimen Paper 2, question 4(a): mechanical properties of materials are affected by the application of a force [2]. Markscheme examples: strength (maximum stress before breaking) and ductility (drawn or extruded into shape).',key:'Award [1] for each brief answer up to [2 max].'}
]
};
