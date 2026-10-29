window.TOPICS=window.TOPICS||{};
window.TOPICS['c3-2']={
id:'c3-2',code:'C3.2',title:'Life-cycle analysis',level:'HL',hours:7,
guiding:'Why should designers consider the effects a product has on the environment?',
pptx:null,

notes:[
{id:'s321',ref:'3.2.1',title:'What is a life-cycle analysis?',
 must:'Explain and discuss life-cycle analysis considerations such as global warming potential, air, water and soil pollution, ecotoxicity and resource depletion.',
 html:`
<p>A <b>life-cycle analysis</b> (LCA, also called life-cycle assessment) is a method used to <b>factually analyse a product’s whole life</b> and measure its environmental impact. It gives designers <b>data</b> instead of opinions, so they can find the stage with the greatest impact and compare design options.</p>
<h3>Impact categories</h3>
<div class="tw"><table class="t"><tr><th>Consideration</th><th>Meaning</th><th>Example cause</th></tr>
<tr><td><b>Global warming potential (GWP)</b></td><td>Contribution to climate change, measured in kg CO₂ equivalent (CO₂e)</td><td>Burning fossil fuels for electricity; methane from landfill</td></tr>
<tr><td><b>Air pollution</b></td><td>Harmful gases and particles in the air: smog, acid rain, particulates, NOx, SO₂</td><td>Smelting, transport exhaust, solvent vapours</td></tr>
<tr><td><b>Water pollution</b></td><td>Contamination of rivers, lakes and seas, and excess water use</td><td>Dyeing textiles, mining run-off, microplastics</td></tr>
<tr><td><b>Soil pollution</b></td><td>Contamination of land by chemicals and waste</td><td>Landfill leachate, heavy metals from e-waste, pesticides on cotton</td></tr>
<tr><td><b>Ecotoxicity</b></td><td>Harm to living things and ecosystems from toxic substances</td><td>Mercury, lead, flame retardants, pesticides</td></tr>
<tr><td><b>Resource depletion</b></td><td>Using up finite resources: fossil fuels, metals, minerals, water</td><td>Mining rare earths, oil for plastics</td></tr></table></div>
<div class="key"><b>CO₂e</b> converts other greenhouse gases to the amount of CO₂ that would cause the same warming. Methane has a GWP of about 28 times CO₂ over 100 years.</div>
<div class="tip"><b>Exam tip.</b> Name the impact category, the stage or process causing it, and the consequence for the environment.</div>`},

{id:'s322',ref:'3.2.2',title:'The five stages: cradle to grave',
 must:'Explain the life-cycle analysis inventory stages (cradle-to-grave) and the materials and energy usage that go into these processes.',
 html:`
<p>An LCA follows a product from <b>cradle</b> (raw material extraction) to <b>grave</b> (final disposal). The <b>inventory</b> lists the materials and energy that go in, and the emissions and waste that come out, at each of the five stages.</p>
<div class="tw"><table class="t"><tr><th>Stage</th><th>Inputs (materials and energy)</th><th>Typical impacts</th></tr>
<tr><td><b>1. Raw material extraction and processing</b></td><td>Ores, oil, wood, water; energy for mining, refining and processing</td><td>Habitat loss, resource depletion, high energy use, water and soil pollution</td></tr>
<tr><td><b>2. Manufacture</b></td><td>Energy for moulding, machining, joining and finishing; water; chemicals; packaging</td><td>Waste, emissions, scrap, toxic by-products</td></tr>
<tr><td><b>3. Distribution and transport</b></td><td>Fuel for lorries, ships, planes; packaging</td><td>CO₂ and air pollution that grow with distance and weight</td></tr>
<tr><td><b>4. Use and maintenance</b></td><td>Electricity, water, consumables (batteries, filters); repairs and spare parts</td><td>For energy-using products this can be the largest stage</td></tr>
<tr><td><b>5. Disposal and recycling</b></td><td>Energy for collection, sorting, recycling or incineration</td><td>Landfill, leachate, methane; recycling saves raw materials</td></tr></table></div>
<div class="ex"><b class="l">Example: aluminium drinks can.</b> Extraction: bauxite mining and very energy-intensive smelting. Manufacture: rolling and forming. Transport: filled cans are heavy. Use: none. Disposal: aluminium recycles with about 95% less energy than new metal, so the grave stage can reduce impact.</div>
<div class="key"><b>Cradle to grave</b> ends in disposal. A <b>circular economy</b> aims for <b>cradle to cradle</b>, where materials return to use instead of ending as waste.</div>
<div class="tip"><b>Exam tip.</b> For each stage give at least one input (energy or material) and one impact.</div>`},

{id:'s323',ref:'3.2.1–3.2.2',title:'Carrying out an LCA: inventory, data and units',
 must:'Explain how the inventory of materials and energy is used to analyse impact (supports 3.2.1 and 3.2.2).',
 html:`
<p>An LCA follows a clear method.</p>
<div class="tw"><table class="t"><tr><th>Step</th><th>What you do</th></tr>
<tr><td>1. Goal and scope</td><td>State why you are doing the LCA, the product, and the <b>functional unit</b> so comparisons are fair (for example “1000 litres of drink delivered” or “10 years of lighting”).</td></tr>
<tr><td>2. Inventory</td><td>Collect data on <b>materials, energy, emissions and waste</b> for each of the five stages.</td></tr>
<tr><td>3. Impact assessment</td><td>Convert the inventory to impact categories, such as kg CO₂e, litres of water or MJ of energy.</td></tr>
<tr><td>4. Interpretation</td><td>Find the <b>hot spots</b> (stages with the biggest impact), compare options, and decide what to change.</td></tr></table></div>
<div class="ex"><b class="l">Worked example: carbon footprint of a kettle (per year).</b> Production, spread over 5 years: 8.0 kg CO₂e ÷ 5 = 1.6 kg/yr. Transport 0.4 kg/yr. Use: 150 kWh × 0.5 kg CO₂e/kWh = <b>75 kg/yr</b>. Disposal 0.2 kg/yr. Total = 77.2 kg/yr. The use stage is 75 ÷ 77.2 = <b>97%</b> of the total.</div>
<div class="ex"><b class="l">Percentage by stage.</b> Total 200 kg CO₂e: extraction 40, manufacture 90, transport 20, use 40, disposal 10. Manufacture = 90 ÷ 200 × 100 = <b>45%</b>.</div>
<h3>Limitations</h3>
<ul class="tight"><li>Data may be <b>missing, old or estimated</b>, and results depend on assumptions (such as the electricity mix).</li><li>It takes <b>time and money</b>; software and databases are often needed.</li><li>Results may <b>shift the problem</b> from one impact to another.</li><li>It does not measure social impact such as working conditions.</li></ul>
<div class="tip"><b>Exam tip.</b> Fair comparisons need the same functional unit and the same scope.</div>`},

{id:'s324',ref:'3.2.2',title:'Using results: improving each stage',
 must:'Explain how a designer uses LCA results at each inventory stage.',
 html:`
<div class="tw"><table class="t"><tr><th>Stage</th><th>Design actions</th></tr>
<tr><td>Extraction</td><td>Use <b>recycled or renewable</b> material; reduce material weight; avoid scarce or toxic materials; choose responsibly sourced material</td></tr>
<tr><td>Manufacture</td><td>Choose low-waste processes (forming rather than machining); fewer parts and finishes; renewable energy; reuse scrap; avoid harmful chemicals</td></tr>
<tr><td>Distribution</td><td>Reduce weight and volume; flat-pack; local production; efficient packaging; sea rather than air freight</td></tr>
<tr><td>Use and maintenance</td><td>Improve <b>energy efficiency</b> (auto shut-off, insulation); durable design; repairable parts; software updates</td></tr>
<tr><td>Disposal</td><td>Design for <b>disassembly</b>; label plastics; use mono-materials; take-back schemes; biodegradable or compostable materials where appropriate</td></tr></table></div>
<div class="ex"><b class="l">Break-even for a reusable product.</b> A single-use bottle has 0.16 kg CO₂e per use. A reusable steel bottle takes 5.0 kg CO₂e to make and 0.02 kg per wash. It is better after n uses when 5.0 + 0.02n &lt; 0.16n, so n &gt; 5.0 ÷ 0.14 = <b>36 uses</b>.</div>
<div class="ex"><b class="l">Longer life.</b> A phone with 56 kg CO₂e embodied, used for 2 years, is 28 kg/yr from production. Used for 4 years it is 14 kg/yr.</div>
<div class="tip"><b>Exam tip.</b> Target the <b>hot spot</b> stage first. Making a durable product that lasts longer often reduces the impact per year of use.</div>`},

{id:'s325',ref:'3.2.1–3.2.2',title:'Discussing a product’s LCA',
 must:'Discuss life-cycle analysis considerations for a given product.',
 html:`
<p>When asked to <b>discuss</b> an LCA, build a structured answer with impacts, stage and evidence.</p>
<div class="tw"><table class="t"><tr><th>Product</th><th>Hot spot</th><th>Why</th><th>Design response</th></tr>
<tr><td>Smartphone</td><td>Extraction and manufacture (about 80%)</td><td>Rare metals, chips, energy-intensive manufacturing</td><td>Longer life, repair, recycling of metals</td></tr>
<tr><td>Washing machine</td><td>Use (electricity and water)</td><td>Hundreds of washes per year for 10 years</td><td>Energy and water efficiency, low-temperature cycles</td></tr>
<tr><td>Cotton T-shirt</td><td>Extraction (water, pesticides) and use (washing)</td><td>Thirsty crop; repeated washing and drying</td><td>Organic or recycled cotton; care label advice</td></tr>
<tr><td>Plastic packaging</td><td>Disposal</td><td>Persists in soil and sea; microplastics</td><td>Mono-material, recycled content, reuse</td></tr>
<tr><td>Electric car</td><td>Manufacture (battery) and electricity source</td><td>Mining of lithium and cobalt; grid emissions</td><td>Battery recycling, renewable power</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Include a balanced judgement: LCA is a tool; decisions also consider cost, user needs and social impact.</div>`}
],

cards:[
['Life-cycle analysis','A method to analyse the environmental impact of a product over its whole life.'],
['Cradle','The start of a product’s life: raw material extraction.'],
['Grave','The end of a product’s life: disposal.'],
['Cradle to grave','All stages from raw materials to disposal.'],
['Cradle to cradle','A system where materials return to use at end of life.'],
['Inventory','A list of the materials and energy used and the emissions and waste produced.'],
['Functional unit','The measure of the service a product delivers, used for fair comparison.'],
['Impact assessment','Converting inventory data into environmental impacts.'],
['Hot spot','The stage with the greatest environmental impact.'],
['Global warming potential','A product’s contribution to climate change.'],
['CO₂ equivalent','A unit that expresses all greenhouse gases as the CO₂ giving the same warming.'],
['Carbon footprint','Total greenhouse gas emissions caused by a product or activity.'],
['Air pollution','Harmful gases and particles released into the air.'],
['Water pollution','Contamination of water by waste or chemicals.'],
['Soil pollution','Contamination of land by chemicals and waste.'],
['Ecotoxicity','Harm to living organisms and ecosystems by toxic substances.'],
['Resource depletion','Using up finite resources faster than they can be replaced.'],
['Embodied energy','The total energy used to make a product, including extraction and manufacture.'],
['Raw material extraction','Mining, drilling or harvesting the materials for a product.'],
['Manufacture','The stage where materials are made into a product.'],
['Distribution and transport','Moving materials and products between locations.'],
['Use and maintenance','The stage when the product is used and repaired.'],
['Disposal','The end of life of a product: landfill, incineration or recycling.'],
['Landfill','Burying waste in the ground.'],
['Leachate','Liquid that drains from landfill and can pollute water.'],
['Incineration','Burning waste, sometimes to recover energy.'],
['Recycling','Processing waste into new materials.'],
['Downcycling','Recycling into a lower-quality material.'],
['Renewable resource','A resource that is replaced naturally, such as timber.'],
['Non-renewable resource','A finite resource such as oil or metal ore.'],
['Design for disassembly','Designing a product so it can be taken apart easily.'],
['Planned obsolescence','Designing a product with a limited useful life.'],
['Take-back scheme','A scheme in which a manufacturer collects used products.'],
['E-waste','Discarded electrical and electronic products.'],
['Mono-material','A product made of a single material, easier to recycle.'],
['Eco-design','Designing to reduce environmental impact at every stage.'],
['Energy efficiency','Using less energy to do the same job.'],
['Embodied carbon','The CO₂e emitted in making a product.'],
['Life-cycle inventory','The data-collection stage of LCA.']
],

mcq:[
{ref:'3.2.1',q:'A life-cycle analysis measures…',o:['The environmental impact of a product over its whole life','Only the cost of a product','Only manufacturing speed','The profit'],a:0,why:'It covers all stages.',live:true},
{ref:'3.2.1',q:'CO₂e stands for…',o:['Carbon dioxide equivalent','Carbon oxide energy','CO₂ emissions only','Clean oxygen emission'],a:0,why:'All greenhouse gases in CO₂ terms.'},
{ref:'3.2.1',q:'Which impact category describes harm to living organisms from toxic chemicals?',o:['Ecotoxicity','Resource depletion','Global warming potential','Noise'],a:0,why:'Ecotoxicity.',live:true},
{ref:'3.2.1',q:'Using up finite metals and fossil fuels is…',o:['Resource depletion','Air pollution','Soil pollution','Ecotoxicity'],a:0,why:'They are non-renewable.'},
{ref:'3.2.1',q:'Landfill leachate mostly causes…',o:['Water and soil pollution','Global cooling','Noise pollution','Light pollution'],a:0,why:'It drains into soil and water.',live:true},
{ref:'3.2.1',q:'Methane from landfill contributes mainly to…',o:['Global warming potential','Ozone repair','Water use','Soil nutrients'],a:0,why:'It is a strong greenhouse gas.'},
{ref:'3.2.2',q:'“Cradle” in cradle-to-grave refers to…',o:['Raw material extraction','Disposal','Use','Transport'],a:0,why:'The start of the life.',live:true},
{ref:'3.2.2',q:'“Grave” refers to…',o:['Final disposal','Extraction','Manufacture','Design'],a:0,why:'The end of the life.'},
{ref:'3.2.2',q:'How many inventory stages are in the LCA used here?',o:['5','3','7','9'],a:0,why:'Extraction, manufacture, distribution, use, disposal.',live:true},
{ref:'3.2.2',q:'For a kettle, which stage often has the largest impact?',o:['Use','Disposal','Extraction','Packaging'],a:0,why:'Energy for heating water over many years.',live:true},
{ref:'3.2.2',q:'Flat-packing furniture mainly reduces the impact of…',o:['Distribution','Extraction','Disposal','Use'],a:0,why:'More products per lorry.'},
{ref:'3.2.2',q:'Aluminium recycling saves about 95% of…',o:['Energy needed compared with new metal','The weight','The colour','The price of electricity'],a:0,why:'Smelting from ore needs much more energy.',live:true},
{ref:'3.2.2',q:'Cradle to cradle aims to…',o:['Return materials to use rather than waste','Bury waste','Burn everything','Ignore disposal'],a:0,why:'Circular economy idea.'},
{ref:'3.2.2',q:'Which is an input to the manufacture stage?',o:['Energy for machines','Landfill gas','Used products','Customer reviews'],a:0,why:'Energy and materials.'},
{ref:'3.2.1',q:'A functional unit is used so that…',o:['Products can be compared fairly','Prices rise','All stages are ignored','Only the maker benefits'],a:0,why:'It defines the service delivered.',live:true},
{ref:'3.2.1',q:'The stage with the biggest impact is the…',o:['Hot spot','Cold spot','Functional unit','Inventory'],a:0,why:'The place to focus design changes.'},
{ref:'3.2.2',q:'Total 200 kg CO₂e with 90 kg from manufacture. Manufacture is…',o:['45%','90%','22%','18%'],a:0,why:'90 ÷ 200 = 45%.',live:true},
{ref:'3.2.2',q:'A kettle uses 150 kWh a year; grid is 0.5 kg CO₂e per kWh. Use stage emissions are…',o:['75 kg CO₂e','300 kg CO₂e','150 kg CO₂e','7.5 kg CO₂e'],a:0,why:'150 × 0.5 = 75.'},
{ref:'3.2.2',q:'Extending the life of a phone from 2 to 4 years…',o:['Halves its annual production footprint','Doubles it','Has no effect','Removes all impact'],a:0,why:'The same embodied emissions are spread over more years.',live:true},
{ref:'3.2.2',q:'Design for disassembly mainly helps the…',o:['Disposal and recycling stage','Extraction stage','Distribution stage','Advertising'],a:0,why:'Parts can be separated and recycled.'},
{ref:'3.2.2',q:'Sea freight rather than air freight reduces…',o:['Transport emissions','Raw material use','Electricity use in the home','Packaging colour'],a:0,why:'Ships emit less per tonne-km.'},
{ref:'3.2.1',q:'A limitation of LCA is that…',o:['Data may be missing or estimated','It is always perfectly accurate','It needs no assumptions','It includes social impacts fully'],a:0,why:'Results depend on data and assumptions.',live:true},
{ref:'3.2.2',q:'E-waste can cause…',o:['Soil pollution and ecotoxicity from heavy metals','No problems','Global cooling','More resources'],a:0,why:'Lead and mercury leach out.'},
{ref:'3.2.2',q:'Planned obsolescence tends to…',o:['Increase resource use and waste','Reduce waste','Extend life','Help the circular economy'],a:0,why:'Products are replaced sooner.'},
{ref:'3.2.2',q:'Which is most renewable?',o:['Sustainably harvested timber','Crude oil','Coal','Copper ore'],a:0,why:'Trees regrow.',live:true},
{ref:'3.2.2',q:'A mono-material product is easier to…',o:['Recycle','Mine','Ship by air','Heat'],a:0,why:'No need to separate materials.'},
{ref:'3.2.2',q:'A single-use item has 0.2 kg CO₂e per use and a reusable one 6.0 kg to make plus 0.02 per wash. Break-even is…',o:['34 uses','30 uses','300 uses','3 uses'],a:0,why:'6 ÷ (0.2 − 0.02) = 33.3, so 34 uses.',live:true},
{ref:'3.2.1',q:'Air pollution is mainly caused by…',o:['Smelting, exhaust gases and solvents','Landfill leachate','Mining water','Deforestation soils'],a:0,why:'Gases and particles in the air.'},
{ref:'3.2.2',q:'Take-back schemes help at the…',o:['Disposal stage','Extraction stage','Design stage only','Distribution only'],a:0,why:'The maker collects products for reuse or recycling.'}
],

fib:[
{ref:'3.2.1',t:'A life-cycle analysis measures the [[environmental]] impact of a product over its whole life.'},
{ref:'3.2.1',t:'Greenhouse gases are expressed in kg of CO₂ [[equivalent]].'},
{ref:'3.2.1',t:'[[Ecotoxicity]] is harm to living organisms and ecosystems caused by toxic substances.'},
{ref:'3.2.1',t:'[[Resource]] depletion is the using up of finite materials and fuels.'},
{ref:'3.2.2',t:'In cradle to grave, the cradle is raw material [[extraction]] and the grave is [[disposal]].'},
{ref:'3.2.2',t:'The [[inventory]] lists the materials, energy, emissions and waste at each stage.'},
{ref:'3.2.2',t:'The five stages are extraction, manufacture, distribution, [[use]] and disposal.'},
{ref:'3.2.2',t:'The stage with the greatest impact is called the [[hot spot|hotspot]].'},
{ref:'3.2.1',t:'A [[functional]] unit allows fair comparison between products.'},
{ref:'3.2.2',t:'Rainwater draining through landfill creates [[leachate]].'},
{ref:'3.2.2',t:'Designing a product that can be taken apart is called design for [[disassembly]].'},
{ref:'3.2.2',t:'Recycling aluminium needs about [[95]] percent less energy than making new metal.'},
{ref:'3.2.2',t:'Flat-pack design reduces the impact of [[distribution|transport]].'},
{ref:'3.2.2',t:'A circular economy aims for cradle to [[cradle]].'},
{ref:'3.2.1',t:'Methane has a higher [[global warming potential|GWP]] than carbon dioxide.'}
],

theory:[
{ref:'3.2.1',cmd:'Explain',marks:3,q:'Explain why designers carry out a life-cycle analysis.',
 pts:['It gives <b>factual data</b> on the environmental impact of a product [1]','It shows which stage is the <b>hot spot</b>, so changes can be targeted [1]','It lets designers <b>compare options</b> (materials, processes) fairly and reduce environmental harm [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['data','hot spot','compare','environmental'],acc:'',tip:'Data, target, compare.'},
{ref:'3.2.1',cmd:'Outline',marks:6,q:'Outline global warming potential, air pollution, water pollution, soil pollution, ecotoxicity and resource depletion.',
 pts:['<b>GWP</b>: contribution to climate change, measured as CO₂e [1]','<b>Air pollution</b>: harmful gases and particles released to the air [1]','<b>Water pollution</b>: contamination of water bodies [1]','<b>Soil pollution</b>: chemicals or waste contaminating land [1]','<b>Ecotoxicity</b>: toxic harm to living organisms [1]','<b>Resource depletion</b>: use of finite resources [1]'],
 award:'Award [1] for each up to [6 max].',kw:['CO₂e','air','water','soil','toxic','finite'],acc:'',tip:'One short phrase each.'},
{ref:'3.2.2',cmd:'Explain',marks:5,q:'Explain the inputs and impacts at the raw material extraction stage for an aluminium can.',
 pts:['Aluminium comes from <b>bauxite ore</b> that is mined [1]','Mining causes <b>habitat loss</b> and soil and water pollution [1]','Refining and smelting need <b>very large amounts of electricity</b> [1]','If this uses fossil fuels the <b>global warming potential</b> is high [1]','Bauxite is a <b>finite resource</b>, so use causes depletion [1]'],
 award:'Award [1] for each valid point up to [5 max].',kw:['bauxite','habitat loss','electricity','global warming','finite'],acc:'',tip:'Inputs first, then impacts.'},
{ref:'3.2.2',cmd:'Describe',marks:5,q:'Describe the five stages of a life-cycle analysis for a plastic toy.',
 pts:['<b>Extraction</b>: crude oil is extracted and refined into plastic [1]','<b>Manufacture</b>: injection moulding and finishing use energy [1]','<b>Distribution</b>: shipped, often long distances, with packaging [1]','<b>Use</b>: little energy, but possible batteries and repair [1]','<b>Disposal</b>: landfill, incineration or recycling [1]'],
 award:'Award [1] for each stage up to [5 max].',kw:['oil','injection moulding','shipped','batteries','landfill'],acc:'',tip:'One line per stage with a detail.'},
{ref:'3.2.2',cmd:'Apply',marks:4,q:'A kettle has these annual emissions: production 1.6 kg, transport 0.4 kg, use 75 kg, disposal 0.2 kg CO₂e. Apply the data to calculate the total and the percentage from the use stage.',
 pts:['Total = 1.6 + 0.4 + 75 + 0.2 [1]','= <b>77.2 kg CO₂e</b> [1]','75 ÷ 77.2 × 100 [1]','= <b>97%</b> [1]'],
 award:'Award [1] per step.',kw:['77.2','97%'],acc:'',tip:'Add then divide.'},
{ref:'3.2.2',cmd:'Apply',marks:3,q:'A reusable bottle takes 8.0 kg CO₂e to make and 0.03 kg per wash. A single-use bottle emits 0.19 kg per use. Apply the data to calculate the number of uses at which the reusable bottle becomes better.',
 pts:['8.0 + 0.03n = 0.19n [1]','8.0 = 0.16n [1]','n = <b>50 uses</b> [1]'],
 award:'Award [1] per step.',kw:['0.16n','50'],acc:'',tip:'Set total emissions equal.'},
{ref:'3.2.2',cmd:'Explain',marks:4,q:'Explain how a designer can reduce the impact of a product at the distribution stage.',
 pts:['Reduce the <b>weight and volume</b> so more fit in each load [1]','<b>Flat-pack</b> designs increase the number per lorry or container [1]','Choose <b>local manufacture</b> or sea freight rather than air freight [1]','Use less or recyclable packaging [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['weight','flat-pack','local','sea freight','packaging'],acc:'',tip:'Reduce distance, mass or volume.'},
{ref:'3.2.2',cmd:'Explain',marks:4,q:'Explain why extending the life of a smartphone from two years to four years reduces its environmental impact per year.',
 pts:['Most emissions occur in <b>extraction and manufacture</b> (about 80%) [1]','These are fixed once the phone is made [1]','A longer life <b>spreads</b> these emissions over more years [1]','Fewer replacements mean less resource use and e-waste [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['extraction','manufacture','spreads','e-waste'],acc:'',tip:'Fixed impact divided by years.'},
{ref:'3.2.2',cmd:'Explain',marks:4,q:'Explain two design decisions that improve the disposal and recycling stage of a product.',
 pts:['<b>Design for disassembly</b> (screws, snap fits) so parts can be separated [1]','This allows materials to be sorted and recycled [1]','<b>Mono-materials</b> or labelling of plastics increase recycling quality [1]','Take-back schemes keep products and materials in use [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['disassembly','sorted','mono-material','labelling','take-back'],acc:'',tip:'Decision, effect.'},
{ref:'3.2.1',cmd:'Discuss',marks:6,q:'Discuss the limitations of using a life-cycle analysis to select a material for a product.',
 pts:['Data may be <b>missing, out of date or estimated</b> [1]','Results depend on <b>assumptions</b>, such as electricity source and product life [1]','Comparisons need the same <b>functional unit and scope</b> to be fair [1]','An LCA can be <b>expensive and time-consuming</b> [1]','It may ignore <b>social and economic factors</b> [1]','It is a useful tool but must be combined with other criteria such as cost and performance [1]'],
 award:'Award [1] for each valid point up to [6 max].',kw:['data','assumptions','functional unit','cost','social'],acc:'',tip:'Limitations and how to balance them.'},
{ref:'3.2.2',cmd:'Evaluate',marks:6,q:'Evaluate the use of a compostable PLA cup instead of a polystyrene cup from an LCA viewpoint.',
 pts:['Strength: PLA comes from <b>renewable plants</b>, reducing fossil fuel depletion [1]','Strength: can be composted, reducing landfill persistence [1]','Limitation: farming uses <b>land, water and fertilisers</b> [1]','Limitation: needs <b>industrial composting</b>; in landfill it produces methane [1]','Limitation: contaminates plastic recycling if mixed [1]','Judgement: only better if the infrastructure exists; reusable cups give the greatest reduction [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['renewable','compost','methane','industrial composting','judgement'],acc:'Maximum [6].',tip:'Weigh stages, and end with a decision.'},
{ref:'3.2.2',cmd:'Discuss',marks:6,q:'Discuss how the design of an energy-using product such as a washing machine can reduce its life-cycle impact.',
 pts:['The <b>use stage</b> dominates, so energy and water efficiency matter most [1]','Sensors adjust the load and water to avoid waste [1]','Low-temperature cycles cut electricity [1]','A durable, repairable design extends life [1]','At manufacture, recycled steel and fewer parts reduce impact [1]','Design for disassembly aids recycling metals and electronics at the end [1]'],
 award:'Award [1] for each valid point up to [6 max].',kw:['use stage','efficiency','sensors','repairable','recycled','disassembly'],acc:'',tip:'Hot spot first, then other stages.'}
],

practice:[
{id:'cs1',title:'Case study 1: Single-use or reusable bottle?',paper:'Paper 2 style · HL',
 scenario:`<p>A café chain compares a single-use PET bottle with a reusable stainless steel bottle. The analysis uses the functional unit “one drink served”. Figure 1 gives emissions for the single-use bottle at each stage (kg CO₂e per bottle). Data is illustrative.</p>`,
 fig:Fig.bars([['Extraction',0.04],['Manufacture',0.05],['Distribution',0.03],['Use',0.00],['Disposal',0.04]],{title:'Single-use bottle: kg CO₂e per bottle',unit:' kg',lw:120,max:0.06,hl:[1]}),
 cap:'Figure 1: Emissions at each stage for one single-use bottle.',
 table:`<table class="t"><tr><th colspan="2">Table 1: Reusable steel bottle</th></tr><tr><td>Making the bottle (extraction and manufacture)</td><td>5.0 kg CO₂e</td></tr><tr><td>Washing after each use</td><td>0.02 kg CO₂e</td></tr><tr><td>Disposal at end of life</td><td>0.3 kg CO₂e (steel is recycled)</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:2,ref:'3.2.2',q:'Apply Figure 1 to calculate the total emissions for one single-use bottle.',award:'Award [1] each.',pts:['0.04 + 0.05 + 0.03 + 0 + 0.04 [1]','= <b>0.16 kg CO₂e</b> [1]'],acc:'',kw:['0.16'],tip:''},
 {l:'(b)',cmd:'Identify',marks:1,ref:'3.2.2',q:'Identify the stage with the greatest impact for the single-use bottle.',award:'Award [1].',pts:['<b>Manufacture</b> (0.05 kg) [1]'],acc:'',kw:['manufacture'],tip:''},
 {l:'(c)',cmd:'Apply',marks:4,ref:'3.2.2',q:'Apply Table 1 to calculate the number of uses after which the reusable bottle has lower emissions than single-use bottles. Ignore disposal.',award:'Award [1] each.',pts:['Reusable: 5.0 + 0.02n [1]','Single-use: 0.16n [1]','5.0 = 0.14n [1]','n = <b>36</b> uses (35.7) [1]'],acc:'Accept 36. Disposal of 0.3 gives 37.8, so 38.',kw:['0.14n','36'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.2',q:'Explain why a reusable bottle used only five times is worse for the environment than five single-use bottles.',award:'Award [1] each up to [3].',pts:['Making the steel bottle needs much <b>more energy and material</b> (5.0 kg) [1]','Five uses give 5.0 + 0.1 = 5.1 kg compared with 0.8 kg for five single-use bottles [1]','The impact is not spread over enough uses [1]'],acc:'',kw:['5.0','0.8','uses'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.2.2',q:'Evaluate the café’s plan to encourage reusable bottles.',award:'Award [1] each up to [5 max]. Reward a decision.',pts:['Strength: over 36 uses the reusable bottle has <b>lower emissions</b> [1]','Strength: less waste and litter, supporting a circular economy [1]','Limitation: depends on <b>people actually reusing</b> it; many are forgotten [1]','Limitation: washing uses water and energy; hygiene concerns [1]','Decision: promote reusables with deposits or discounts to raise the number of uses [1]'],acc:'',kw:['36 uses','waste','reuse','washing','decision'],tip:''}
 ]},

{id:'cs2',title:'Case study 2: A smartphone life cycle',paper:'Paper 2 style · HL',
 scenario:`<p>An LCA of a smartphone gives the emissions in Figure 2 over a 2-year life (kg CO₂e). The company wants to reduce the footprint by offering a repair service and a battery replacement so the phone lasts 4 years. Data is illustrative.</p>`,
 fig:Fig.bars([['Extraction + manufacture',56],['Distribution',1.5],['Use (2 years)',12],['Disposal',1.5]],{title:'Emissions over 2 years (kg CO₂e)',unit:' kg',lw:170,max:62,hl:[0]}),
 cap:'Figure 2: Phone emissions by stage over a 2-year life.',
 table:`<table class="t"><tr><th colspan="2">Table 2: Information</th></tr><tr><td>Use stage per year</td><td>6 kg CO₂e</td></tr><tr><td>Battery replacement</td><td>2 kg CO₂e</td></tr><tr><td>Recycling gold and cobalt</td><td>Saves 3 kg CO₂e</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.2.2',q:'Apply Figure 2 to calculate the total emissions over 2 years and the percentage from extraction and manufacture.',award:'Award [1] each.',pts:['56 + 1.5 + 12 + 1.5 = <b>71 kg</b> [1]','56 ÷ 71 × 100 [1]','= <b>79%</b> [1]'],acc:'',kw:['71','79%'],tip:''},
 {l:'(b)',cmd:'Apply',marks:4,ref:'3.2.2',q:'Apply Table 2 to calculate the emissions per year if the phone is used for 4 years with one battery replacement. (Distribution and disposal stay the same.)',award:'Award [1] each.',pts:['Use over 4 years = 4 × 6 = 24 kg [1]','Total = 56 + 1.5 + 24 + 1.5 + 2 = <b>85 kg</b> [1]','Per year = 85 ÷ 4 [1]','= <b>21.3 kg per year</b> [1]'],acc:'Compare 71 ÷ 2 = 35.5 kg per year.',kw:['85','21.3'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.2.2',q:'Explain why a longer life reduces the environmental impact per year.',award:'Award [1] each up to [3].',pts:['Most impact comes from <b>extraction and manufacture</b> [1]','This happens once, so a longer life <b>spreads</b> it over more years [1]','Fewer new phones and less e-waste are needed [1]'],acc:'',kw:['extraction','spreads','e-waste'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.2',q:'Explain how recycling gold and cobalt reduces the impact of the phone.',award:'Award [1] each up to [3].',pts:['It avoids <b>mining new ore</b>, reducing habitat loss and pollution [1]','Recycled metal needs <b>less energy</b> than new (saves 3 kg CO₂e) [1]','It reduces resource depletion and e-waste [1]'],acc:'',kw:['mining','energy','depletion'],tip:''},
 {l:'(e)',cmd:'Discuss',marks:5,ref:'3.2.1',q:'Discuss the ecotoxicity and soil pollution risks of discarded phones and how designers could reduce them.',award:'Award [1] each up to [5 max].',pts:['Phones contain <b>lead, mercury and flame retardants</b> that leach into soil [1]','This harms organisms (ecotoxicity) and can enter water [1]','Informal burning releases toxic fumes [1]','Design for disassembly and take-back schemes keep phones out of landfill [1]','Avoiding hazardous substances in the design reduces the risk at source [1]'],acc:'',kw:['lead','leach','ecotoxicity','take-back','hazardous'],tip:''}
 ]},

{id:'cs3',title:'Case study 3: Improving an electric kettle',paper:'Paper 2 style · HL',
 scenario:`<p>A manufacturer redesigns its electric kettle. Heating 1 litre of water from 20 °C to 100 °C needs 335 kJ (0.093 kWh). The kettle is 85% efficient. A household boils 1500 times per year. The electricity grid emits 0.5 kg CO₂e per kWh. The kettle is made from polypropylene and stainless steel. The company wants a ‘rapid-boil’ model with a 0.5 litre minimum fill line.</p>`,
 fig:Fig.flow(['Raw materials','Manufacture and assemble','Ship to stores','Use: 1500 boils a year','Recycle steel, plastics to landfill'],{per:5,bw:86,bh:68,hl:[3],loop:'Recycled steel re-enters the cycle',title:'Kettle life cycle'}),
 cap:'Figure 3: Life-cycle stages for the kettle.',
 table:`<table class="t"><tr><th colspan="2">Table 3: Annual data</th></tr><tr><td>Production (spread over 5 years)</td><td>1.6 kg CO₂e</td></tr><tr><td>Transport</td><td>0.4 kg CO₂e</td></tr><tr><td>Disposal</td><td>0.2 kg CO₂e</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:4,ref:'3.2.2',q:'Apply the data to calculate the electricity used per boil of 1 litre and per year, and the use-stage emissions.',award:'Award [1] each.',pts:['Electricity per boil = 0.093 ÷ 0.85 = <b>0.109 kWh</b> [1]','Per year = 0.109 × 1500 = <b>164 kWh</b> [1]','Emissions = 164 × 0.5 [1]','= <b>82 kg CO₂e</b> [1]'],acc:'Accept 81 to 82 kg.',kw:['0.109','164','82'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.2.2',q:'Apply the data to calculate the total annual emissions and the percentage from the use stage.',award:'Award [1] each.',pts:['1.6 + 0.4 + 82 + 0.2 = <b>84.2 kg</b> [1]','82 ÷ 84.2 × 100 [1]','= <b>97%</b> [1]'],acc:'',kw:['84.2','97%'],tip:''},
 {l:'(c)',cmd:'Apply',marks:3,ref:'3.2.2',q:'Apply the data to calculate the annual saving if users boil only 0.5 litre instead of 1 litre each time (assume the energy is proportional to the volume).',award:'Award [1] each.',pts:['Use halves: 164 ÷ 2 = <b>82 kWh</b> [1]','Emissions 82 × 0.5 = 41 kg [1]','Saving = <b>41 kg CO₂e</b> per year [1]'],acc:'',kw:['82 kWh','41 kg'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.2.2',q:'Explain why designers should focus on the use stage for this product.',award:'Award [1] each up to [3].',pts:['The use stage is the <b>hot spot</b> (97% of the total) [1]','Small efficiency gains repeat 1500 times a year [1]','Production changes could save only a small share of the emissions [1]'],acc:'',kw:['hot spot','97%','repeat'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.2.2',q:'Evaluate design changes the company could make: a minimum fill line, auto shut-off, recycled steel and a take-back scheme.',award:'Award [1] each. A maximum of [4] for strengths or limitations alone. Reward a decision.',pts:['A <b>minimum fill line</b> reduces energy as users do not overfill [1]','<b>Auto shut-off</b> and good insulation prevent wasted heating [1]','<b>Recycled steel</b> cuts extraction impact but affects only about 2% of emissions [1]','A <b>take-back scheme</b> improves recycling but needs collection costs [1]','Users may ignore the fill line; indicators and fill markings can help [1]','Decision: prioritise use-stage features first, then add recycled content [1]'],acc:'Maximum [6].',kw:['fill line','shut-off','recycled','take-back','decision'],tip:''}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'List',marks:2,ref:'3.2.2',q:'List the five inventory stages of a life-cycle analysis.',award:'Award [1] for 3 to 4 correct, [2] for all five.',pts:['Raw material extraction, manufacture, distribution and transport, use and maintenance, disposal and recycling [2]'],acc:'',kw:['extraction','manufacture','distribution','use','disposal'],tip:''},
 {l:'2',cmd:'State',marks:1,ref:'3.2.1',q:'State what CO₂e measures.',award:'Award [1].',pts:['The <b>global warming effect</b> of greenhouse gases as an equivalent amount of CO₂ [1]'],acc:'',kw:['warming','equivalent'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'3.2.1',q:'Outline what is meant by ecotoxicity.',award:'Award [1] each.',pts:['<b>Harm</b> to living organisms or ecosystems [1]','…caused by toxic substances released by a product [1]'],acc:'',kw:['harm','toxic'],tip:''},
 {l:'4',cmd:'Apply',marks:2,ref:'3.2.2',q:'A product has 60 kg CO₂e in total, with 15 kg from transport. Apply the data to find the percentage from transport.',award:'Award [1] each.',pts:['15 ÷ 60 × 100 [1]','= <b>25%</b> [1]'],acc:'',kw:['25%'],tip:''},
 {l:'5',cmd:'Explain',marks:2,ref:'3.2.2',q:'Explain why flat-pack furniture can reduce the impact of the distribution stage.',award:'Award [1] each.',pts:['It takes <b>less volume</b>, so more products fit per load [1]','Fewer journeys mean <b>less fuel and emissions</b> [1]'],acc:'',kw:['volume','fuel'],tip:''},
 {l:'6',cmd:'Outline',marks:2,ref:'3.2.2',q:'Outline one reason why the use stage is the hot spot for a washing machine.',award:'Award [1] each.',pts:['Many <b>washes over its life</b> [1]','Each uses electricity and water [1]'],acc:'',kw:['many','electricity','water'],tip:''},
 {l:'7',cmd:'Describe',marks:2,ref:'3.2.2',q:'Describe what is meant by cradle to cradle.',award:'Award [1] each.',pts:['Materials are <b>reused or recycled</b> at the end of life [1]','…so there is no waste (a circular system) [1]'],acc:'',kw:['reused','no waste'],tip:''},
 {l:'8',cmd:'Explain',marks:2,ref:'3.2.2',q:'Explain one limitation of a life-cycle analysis.',award:'Award [1] each.',pts:['Data may be <b>incomplete or estimated</b> [1]','So results depend on assumptions and may not be reliable [1]'],acc:'',kw:['incomplete','assumptions'],tip:''}
 ]},

paper:[]
};
