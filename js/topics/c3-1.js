window.TOPICS=window.TOPICS||{};
(function(){
const swot=(()=>{
 const q=(x,y,t,l,f)=>`<rect x="${x}" y="${y}" width="250" height="92" rx="6" fill="${f}" stroke="var(--ink)" stroke-width="2"/><text x="${x+10}" y="${y+22}" style="font-weight:700">${t}</text><text x="${x+10}" y="${y+44}">${l[0]}</text><text x="${x+10}" y="${y+62}">${l[1]}</text><text x="${x+10}" y="${y+80}">${l[2]}</text>`;
 let b=`<text x="140" y="14" text-anchor="middle" style="font-weight:700">Internal (the product)</text><text x="400" y="14" text-anchor="middle" style="font-weight:700">External (the market)</text>`;
 b+=q(10,24,'Strengths',['Tracks hydration','Eco materials','Modern look'],'var(--card)')+q(270,24,'Opportunities',['Health trend','App partnerships','Corporate wellness'],'var(--card)');
 b+=q(10,124,'Weaknesses',['High price','Needs charging','Few phones supported'],'var(--card)')+q(270,124,'Threats',['Cheaper rivals','Software obsolescence','Privacy concerns'],'var(--card)');
 return `<svg viewBox="0 0 530 228" role="img" aria-label="SWOT grid for a smart water bottle">${b}</svg>`;
})();

window.TOPICS['c3-1']={
id:'c3-1',code:'C3.1',title:'Product analysis and evaluation',level:'SL + HL',hours:5,
guiding:'How does product analysis and evaluation inform various stakeholders and aid in a product’s future development?',
pptx:'resources/C3.1_Product_Analysis_and_Evaluation.pptx',pptxName:'C3.1 Product analysis and evaluation (slides)',

notes:[
{id:'s311',ref:'3.1.1 and 3.1.7',title:'Purpose of product analysis and evaluation',
 must:'Discuss the purpose of a product analysis exercise and why it is important for product design development.',
 html:`
<p><b>Product analysis</b> is the systematic examination of an existing product to understand its <b>function, performance, structure, materials, usability and user experience</b>. <b>Evaluation</b> is the critical judgement of how well a product (existing or a prototype) meets the design brief and user needs. Together they identify <b>strengths, weaknesses and opportunities for improvement</b>.</p>
<div class="tw"><table class="t"><tr><th>Area examined</th><th>Questions</th></tr>
<tr><td>Function and performance</td><td>What does it do and how well? Is it reliable and efficient?</td></tr>
<tr><td>Usability and ergonomics</td><td>Is it easy, safe and comfortable to use? Who struggles?</td></tr>
<tr><td>Aesthetics</td><td>Form, colour, style and fit with the target market</td></tr>
<tr><td>Materials and manufacture</td><td>What is it made from and how? Is it durable and repairable?</td></tr>
<tr><td>Cost and sustainability</td><td>Price, life cycle, energy and end of life</td></tr>
<tr><td>Target market</td><td>Does it meet the needs and wants of its users?</td></tr></table></div>
<h3>Why it matters for design development</h3>
<ul class="tight"><li>Shows what <b>works and should be kept</b> and what must change.</li><li>Gives <b>evidence</b> (data and opinions) rather than assumptions.</li><li>Reveals <b>gaps in the market</b> and ideas for new products or new versions.</li><li><b>Reduces risk and cost</b>: errors are found before large-scale manufacture.</li><li>Informs the designer’s <b>understanding</b> of competitors, users and manufacturing.</li></ul>
<div class="ex"><b class="l">Example.</b> Analysing a hair dryer looks at airflow, noise, heat control, materials, weight in the hand and energy use. The results guide the next model.</div>
<div class="tip"><b>Exam tip.</b> “Discuss” needs several developed points: purpose, benefits to the designer and limitations (for example opinions may be biased and data can be incomplete).</div>`},

{id:'s312',ref:'3.1.2',title:'Testing and stakeholders',
 must:'Identify the various stakeholders, such as users, manufacturers and engineers, that will help in any future development of a product.',
 html:`
<p>A product should be <b>tested</b> and information gathered from a <b>range of stakeholders</b>: anyone affected by, or with an interest in, the product.</p>
<div class="tw"><table class="t"><tr><th>Stakeholder</th><th>What they can tell you</th></tr>
<tr><td><b>Users</b></td><td>Comfort, ease of use, problems, wants and needs</td></tr>
<tr><td><b>Clients / buyers</b></td><td>Requirements, budget, brand needs</td></tr>
<tr><td><b>Manufacturers</b></td><td>Whether it can be made at the required cost, volume and quality</td></tr>
<tr><td><b>Engineers</b></td><td>Performance, safety, structure, reliability, standards</td></tr>
<tr><td><b>Retailers</b></td><td>Market appeal, packaging, returns and complaints</td></tr>
<tr><td><b>Maintenance and repair staff</b></td><td>Ease of repair and common faults</td></tr>
<tr><td><b>Recyclers and the community</b></td><td>End-of-life and environmental impact</td></tr></table></div>
<h3>Gathering information</h3>
<ul class="tight"><li><b>Quantitative</b> data (numbers): timed tests, measurements, surveys with scales. Objective and comparable.</li><li><b>Qualitative</b> data (opinions): interviews, observations, open comments. Rich but subjective.</li><li><b>Testing</b>: function, durability, ergonomics and safety tests give objective data.</li></ul>
<div class="tip"><b>Exam tip.</b> Name the stakeholder and the specific information they provide for the product in the question.</div>`},

{id:'s313',ref:'3.1.3',title:'SWOT analysis',
 must:'Analyse a product using a SWOT analysis based on function, performance, usability, features and materials.',
 html:`
<p><b>SWOT</b> evaluates a product’s <b>Strengths, Weaknesses, Opportunities and Threats</b>. Strengths and weaknesses are <b>internal</b> (about the product); opportunities and threats are <b>external</b> (the market and environment).</p>
${swot}
<p class="cap">SWOT for a smart water bottle.</p>
<div class="tw"><table class="t"><tr><th>Quadrant</th><th>Look at</th><th>Examples</th></tr>
<tr><td>Strengths</td><td>Function, features, materials, usability that work well</td><td>Accurate sensor; recyclable aluminium body</td></tr>
<tr><td>Weaknesses</td><td>Poor performance, usability or materials; high cost</td><td>Short battery life; heavy</td></tr>
<tr><td>Opportunities</td><td>Trends, new technology, gaps in the market</td><td>Growth in wellness; partnerships</td></tr>
<tr><td>Threats</td><td>Competitors, regulation, tech change, supply</td><td>Cheaper rivals; data privacy law</td></tr></table></div>
<p>When to use it: in <b>ideation</b> (compare concepts), <b>development</b> (prioritise improvements) and <b>before launch</b> (find risks and marketing angles).</p>
<div class="tip"><b>Exam tip.</b> Keep each point specific to the product and link it to function, performance, usability, features or materials. Do not put internal points in the external boxes.</div>`},

{id:'s314',ref:'3.1.4',title:'Testing and reverse engineering data',
 must:'Use data generated from testing and/or reverse engineering to identify areas that require improvement and to determine how well the product meets the needs of the user.',
 html:`
<h3>Testing</h3>
<ul class="tight"><li><b>Function tests</b>: does it do the job (boil time, cutting force, battery life)?</li><li><b>Performance tests</b>: how well, how fast, how efficiently, how reliably (efficiency, noise, durability cycles).</li><li><b>Usability tests</b>: observe users completing tasks, time and error counts, satisfaction scores.</li></ul>
<h3>Reverse engineering</h3>
<p><b>Reverse engineering</b> means <b>disassembling and analysing</b> a product to understand how it is made and how it works: components, materials, joining methods, the order of assembly and the manufacturing processes. It shows weaknesses (flimsy parts, hard-to-repair joints) and ideas (clever mechanisms).</p>
<div class="tw"><table class="t"><tr><th>Evidence</th><th>What it shows</th></tr>
<tr><td>Exploded view and parts list</td><td>Number of parts, joining methods, modularity, repairability</td></tr>
<tr><td>Material identification</td><td>Properties, recycling code, cost clues</td></tr>
<tr><td>Manufacturing marks</td><td>Injection moulding gates, weld seams, press-formed edges show the process</td></tr>
<tr><td>Failure points</td><td>Where wear, cracking or overheating occurs</td></tr></table></div>
<div class="ex"><b class="l">Worked example: efficiency.</b> A kettle (2000 W) heats 1 kg of water from 20°C to 100°C in 3 minutes. Energy needed = 4.2 × 1 × 80 = <b>336 kJ</b>. Energy used = 2000 × 180 = <b>360 kJ</b>. Efficiency = 336 ÷ 360 × 100 = <b>93%</b>.</div>
<div class="tip"><b>Exam tip.</b> Quote figures from the data, compare them with the target or specification, then state the improvement they point to.</div>`},

{id:'s315',ref:'3.1.5',title:'Comparing competing products',
 must:'Compare competing and similar products to identify opportunities for further product improvements.',
 html:`
<p>Comparing a product with its <b>competitors</b> and with <b>earlier versions</b> shows where it leads and where it falls behind. Weaknesses in one product are <b>opportunities</b> for the next.</p>
<div class="tw"><table class="t"><tr><th>Method</th><th>How</th></tr>
<tr><td>Comparison table</td><td>List criteria (price, mass, battery, materials) and values for each product</td></tr>
<tr><td>Weighted decision matrix</td><td>Score each product per criterion, multiply by importance, add up</td></tr>
<tr><td>Radar or bar charts</td><td>Show strengths and gaps visually</td></tr>
<tr><td>User ratings and reviews</td><td>Real use feedback on competitors</td></tr></table></div>
<div class="ex"><b class="l">Worked example: weighted matrix.</b> Weights: function 5, usability 4, cost 3.<br>Product X: 4, 3, 5 → 20 + 12 + 15 = <b>47</b>. Product Y: 5, 5, 2 → 25 + 20 + 6 = <b>51</b>.<br>Y scores higher, but its low cost score shows an opportunity: an improved design that keeps Y’s function and usability at a lower price.</div>
<div class="tip"><b>Exam tip.</b> After a comparison, always state the <b>opportunity</b> that follows.</div>`},

{id:'s316',ref:'3.1.6',title:'Constructive discontent',
 must:'Identify areas where a product is not meeting the needs of its users and determine how it can be improved.',
 html:`
<p><b>Constructive discontent</b> is a positive dissatisfaction with how something works that drives you to <b>improve</b> it. Rather than accepting a flaw, the designer asks “why does it have to be like this?”.</p>
<div class="ex"><b class="l">Example: Dyson.</b> James Dyson was frustrated that bagged vacuum cleaners lost suction as the bag clogged. His dissatisfaction led to the cyclonic bagless vacuum. Later, he improved hand dryers (Airblade) and hair dryers in the same way.</div>
<h3>How to find where needs are not met</h3>
<ul class="tight"><li><b>Observe</b> users struggling: errors, workarounds, frustration.</li><li><b>Ask</b>: interviews, surveys, reviews and complaints.</li><li><b>Test</b> against the specification and compare to competitors.</li><li><b>Analyse</b> returns and repair data.</li></ul>
<h3>User-centred principles</h3>
<p>Design based on an explicit understanding of users, tasks and environments; users involved throughout; refined by user evaluation; iterative; addresses the whole experience; multidisciplinary team.</p>
<div class="tip"><b>Exam tip.</b> Identify the unmet need, the evidence, and the improvement it suggests.</div>`}
],

cards:[
['Product analysis','The systematic examination of an existing product to understand its function, performance, usability, materials and more.'],
['Product evaluation','Critical judgement of how well a product meets the brief and user needs.'],
['Stakeholder','Anyone affected by or with an interest in a product.'],
['User','The person who uses the product.'],
['Manufacturer','The company that makes the product.'],
['Engineer','A specialist who advises on performance, structure and safety.'],
['Retailer','The seller who knows market appeal and customer feedback.'],
['SWOT analysis','A tool that evaluates strengths, weaknesses, opportunities and threats.'],
['Strength','An internal positive of a product.'],
['Weakness','An internal limitation of a product.'],
['Opportunity','An external factor that could benefit the product.'],
['Threat','An external factor that could harm the product.'],
['Internal factor','Something about the product that the designer controls.'],
['External factor','Something in the market or environment outside the designer’s control.'],
['Function','What the product does.'],
['Performance','How well and how efficiently the product does its job.'],
['Usability','How easy, safe and comfortable the product is to use.'],
['Quantitative data','Numerical data from measurements.'],
['Qualitative data','Descriptive data from opinions and observations.'],
['Reverse engineering','Disassembling a product to understand how it works and is made.'],
['Exploded view','A drawing showing parts separated to show how they fit.'],
['Usability testing','Observing users complete tasks with the product.'],
['Function test','A test that checks whether the product does its job.'],
['Efficiency','Useful output divided by total input, as a percentage.'],
['Benchmarking','Comparing a product with the best competitors.'],
['Weighted decision matrix','A table that scores options against weighted criteria.'],
['Competing product','A product that meets the same need for the same market.'],
['Constructive discontent','Positive dissatisfaction that drives improvement.'],
['Unmet need','A user need that the current product does not satisfy.'],
['Opportunity for improvement','A weakness that a new design could solve.'],
['Specification','A list of requirements the product must meet.'],
['User-centred design','Design based on understanding users, involving them throughout.'],
['Iteration','Repeating the cycle of design, test and improve.'],
['Life-cycle analysis','Assessment of a product’s environmental impact from raw materials to disposal.'],
['Market gap','An unmet need in the market that no product serves well.'],
['Bias','A distortion in data or opinion caused by a personal view.'],
['Sample size','The number of people or products tested.'],
['Reliability (data)','Results are repeatable.'],
['Repairability','How easily a product can be fixed.'],
['Dyson cyclonic vacuum','A bagless design created from constructive discontent with bagged cleaners.']
],

mcq:[
{ref:'3.1.1',q:'Product analysis is…',o:['Examining a product to find strengths, weaknesses and opportunities','Making a product cheaper only','Advertising a product','Packaging a product'],a:0,why:'It examines performance and identifies improvements.',live:true},
{ref:'3.1.1',q:'A main reason designers analyse existing products is to…',o:['Find what works and what needs improving','Copy it exactly','Avoid users','Reduce stakeholders'],a:0,why:'Evidence guides redesign.'},
{ref:'3.1.1',q:'Which is NOT normally examined in a product analysis?',o:['The designer’s favourite colour','Materials','Usability','Function'],a:0,why:'Personal taste is not an analysis criterion.',live:true},
{ref:'3.1.2',q:'Who can tell you whether a product can be made at the required cost?',o:['Manufacturer','Retailer','User','Competitor'],a:0,why:'They know the processes and costs.',live:true},
{ref:'3.1.2',q:'Users are most useful for information on…',o:['Comfort and ease of use','Machine tooling','Tax law','Shipping contracts'],a:0,why:'They experience the product.'},
{ref:'3.1.2',q:'Which is qualitative data?',o:['Interview comments','Boil time of 150 s','Mass of 480 g','Noise of 70 dB'],a:0,why:'Opinions and descriptions are qualitative.',live:true},
{ref:'3.1.2',q:'Which is quantitative data?',o:['A noise reading of 70 dB','“It feels nice”','“It looks dated”','“I love the colour”'],a:0,why:'It is a measurement.'},
{ref:'3.1.2',q:'A retailer’s feedback is useful for…',o:['Market appeal and returns','Weld strength','Motor torque','Tooling design'],a:0,why:'They see customer reactions.'},
{ref:'3.1.3',q:'In a SWOT analysis, strengths and weaknesses are…',o:['Internal','External','Always cost related','Optional'],a:0,why:'They concern the product itself.',live:true},
{ref:'3.1.3',q:'A new competitor launching a cheaper rival is a…',o:['Threat','Strength','Weakness','Opportunity'],a:0,why:'It is external and harmful.',live:true},
{ref:'3.1.3',q:'A growing market for health products is an…',o:['Opportunity','Weakness','Strength','Threat'],a:0,why:'It is an external benefit.'},
{ref:'3.1.3',q:'“Battery lasts only 3 hours” is a…',o:['Weakness','Strength','Opportunity','Threat'],a:0,why:'It is an internal limitation.',live:true},
{ref:'3.1.4',q:'Reverse engineering involves…',o:['Taking a product apart to understand it','Making a copy cheaply','Selling a product backwards','Writing a manual'],a:0,why:'Disassembly reveals construction.',live:true},
{ref:'3.1.4',q:'An exploded view helps to show…',o:['How parts fit and are joined','The price','Marketing plans','Customers’ names'],a:0,why:'It separates the parts.'},
{ref:'3.1.4',q:'A kettle uses 360 kJ to give 288 kJ to the water. Efficiency is…',o:['80%','125%','72%','28%'],a:0,why:'288 ÷ 360 = 0.8.',live:true},
{ref:'3.1.4',q:'Seeing injection moulding gate marks tells you…',o:['The manufacturing process used','The price','The user’s age','The customer rating'],a:0,why:'Marks reveal the process.'},
{ref:'3.1.4',q:'Usability testing usually records…',o:['Time taken and errors made','Weld temperatures','Raw material costs','Stock prices'],a:0,why:'Task time and errors measure usability.',live:true},
{ref:'3.1.5',q:'Comparing similar products helps to…',o:['Identify opportunities for improvement','Avoid all change','Stop testing','Copy the packaging'],a:0,why:'Gaps appear.',live:true},
{ref:'3.1.5',q:'In a weighted matrix, the weight shows…',o:['Importance of the criterion','Mass of the product','Price','Colour'],a:0,why:'Higher weights matter more.'},
{ref:'3.1.5',q:'Product X scores 4, 3, 5 with weights 5, 4, 3. Total is…',o:['47','12','60','35'],a:0,why:'20 + 12 + 15 = 47.',live:true},
{ref:'3.1.5',q:'A product’s weakness compared with rivals is best seen as…',o:['An opportunity to improve','A reason to stop','Irrelevant','A threat only'],a:0,why:'It points to redesign.'},
{ref:'3.1.6',q:'Constructive discontent means…',o:['Positive dissatisfaction that leads to improvement','Complaining without action','Satisfaction with the current design','A legal dispute'],a:0,why:'It drives better designs.',live:true},
{ref:'3.1.6',q:'Dyson’s bagless vacuum came from…',o:['Frustration with bagged cleaners losing suction','A government order','Cost cutting only','A copy of a rival'],a:0,why:'A classic constructive discontent example.',live:true},
{ref:'3.1.6',q:'One way to find unmet user needs is to…',o:['Observe users struggling with the product','Ignore returns','Use only the designer’s view','Skip testing'],a:0,why:'Observation reveals problems.'},
{ref:'3.1.7',q:'Product analysis helps the designer…',o:['Understand the product, users and market better','Avoid data','Increase risk','Remove stakeholders'],a:0,why:'Evidence leads to understanding.'},
{ref:'3.1.7',q:'A limitation of user opinions is that they may be…',o:['Biased or subjective','Always numerical','Illegal','Too accurate'],a:0,why:'Opinions vary between people.',live:true},
{ref:'3.1.3',q:'A SWOT is used mainly to…',o:['Evaluate a product and guide decisions','Cut materials','Draw circuits','Hire staff'],a:0,why:'It summarises evaluation.'},
{ref:'3.1.2',q:'A larger sample size generally makes results…',o:['More reliable','Less reliable','Qualitative','Illegal'],a:0,why:'It reduces the effect of chance.'}
],

fib:[
{ref:'3.1.1',t:'Product [[analysis]] is the systematic examination of an existing product, and evaluation is judging how well it meets the brief.'},
{ref:'3.1.2',t:'A [[stakeholder]] is anyone affected by or interested in a product.'},
{ref:'3.1.2',t:'[[Quantitative]] data are numbers, whereas [[qualitative]] data are opinions and descriptions.'},
{ref:'3.1.3',t:'SWOT stands for strengths, weaknesses, [[opportunities]] and threats.'},
{ref:'3.1.3',t:'Strengths and weaknesses are [[internal]] factors; opportunities and threats are [[external]] factors.'},
{ref:'3.1.4',t:'[[Reverse]] engineering involves taking a product apart to see how it works.'},
{ref:'3.1.4',t:'Efficiency equals useful energy output divided by energy [[input]], multiplied by 100%.'},
{ref:'3.1.4',t:'An [[exploded]] view shows how the parts of a product fit together.'},
{ref:'3.1.5',t:'A weighted decision [[matrix]] scores products against weighted criteria.'},
{ref:'3.1.5',t:'A weakness in a competing product is an [[opportunity]] for improvement.'},
{ref:'3.1.6',t:'Constructive [[discontent]] is positive dissatisfaction that drives improvement.'},
{ref:'3.1.6',t:'The Dyson [[cyclonic|bagless]] vacuum cleaner was created through constructive discontent.'},
{ref:'3.1.2',t:'A [[manufacturer]] can advise whether a design can be made at the required cost.'},
{ref:'3.1.4',t:'Usability testing records task [[time]] and the number of errors.'},
{ref:'3.1.7',t:'Product analysis helps designers [[understand]] a product better.'}
],

theory:[
{ref:'3.1.1',cmd:'Discuss',marks:6,q:'Discuss the purpose of a product analysis exercise and why it is important for product development.',
 pts:['It examines <b>function, performance, usability, materials</b> to find strengths and weaknesses [1]','It identifies <b>opportunities for improvement</b> for the next version [1]','It provides <b>evidence</b> rather than assumptions [1]','It can reveal <b>gaps in the market</b> and what competitors do [1]','It reduces <b>risk and cost</b> by finding problems before production [1]','Limitation: results depend on the quality of the data and the sample used [1]'],
 award:'Award [1] for each valid point up to [6 max].',kw:['function','weaknesses','improvement','evidence','market','risk'],acc:'',tip:'Purpose, benefits, limitation.'},
{ref:'3.1.2',cmd:'Identify',marks:3,q:'Identify three stakeholders for a new electric scooter and the information each could provide.',
 pts:['<b>User</b>: comfort, ease of riding, range needs [1]','<b>Manufacturer</b>: whether it can be built at cost and quality [1]','<b>Engineer</b>: safety, battery performance, structure [1]','Accept regulator, retailer, repair shop [1]'],
 award:'Award [1] for each stakeholder with relevant information up to [3 max].',kw:['user','manufacturer','engineer','retailer'],acc:'',tip:'Person and what they know.'},
{ref:'3.1.2',cmd:'Explain',marks:3,q:'Explain why both quantitative and qualitative data should be collected when evaluating a product.',
 pts:['Quantitative data are <b>objective and comparable</b> [1]','Qualitative data give <b>reasons and feelings</b> behind the numbers [1]','Together they give a <b>fuller, more reliable</b> picture of the product [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['objective','reasons','reliable'],acc:'',tip:'Say what each type gives.'},
{ref:'3.1.3',cmd:'Analyse',marks:6,q:'Analyse a reusable smart water bottle using a SWOT analysis.',
 pts:['<b>Strength</b>: sensor tracks hydration and reminds the user [1]','<b>Weakness</b>: needs charging and costs more than a normal bottle [1]','<b>Opportunity</b>: growing health and fitness market; app partnerships [1]','<b>Threat</b>: cheaper competitors or software becoming obsolete [1]','Strengths and weaknesses are internal; opportunities and threats are external [1]','Link: use strengths against threats, and fix weaknesses to take opportunities [1]'],
 award:'Award [1] for each valid point. Accept other realistic points.',kw:['strength','weakness','opportunity','threat','internal','external'],acc:'',tip:'One specific point per box.'},
{ref:'3.1.4',cmd:'Explain',marks:4,q:'Explain how reverse engineering of a toaster could identify areas for improvement.',
 pts:['Disassembly shows the <b>number of parts and joining methods</b> [1]','It may show <b>glued or riveted</b> joints that make repair hard [1]','Material identification may reveal <b>poor insulation or thin parts</b> [1]','The findings suggest a redesign with fewer parts or screws for repair [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['disassembly','joining','repair','materials'],acc:'',tip:'What you find and what it suggests.'},
{ref:'3.1.4',cmd:'Apply',marks:4,q:'A 1800 W kettle heats 1.0 kg of water from 20°C to 100°C in 3.5 minutes. Apply c = 4.2 kJ/kg°C to calculate its efficiency.',
 pts:['Useful energy = 4.2 × 1.0 × 80 = <b>336 kJ</b> [1]','Time = 3.5 × 60 = 210 s [1]','Energy used = 1800 × 210 = <b>378 kJ</b> [1]','Efficiency = 336 ÷ 378 × 100 = <b>89%</b> [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['336 kJ','378 kJ','89%'],acc:'Accept 88.9%.',tip:'Useful ÷ input.'},
{ref:'3.1.5',cmd:'Apply',marks:4,q:'Two torches are scored against weighted criteria: brightness (weight 5), comfort (weight 3), price (weight 2). Torch A scores 4, 2, 5. Torch B scores 3, 5, 3. Apply the weights to find the better torch.',
 pts:['A: 4×5 + 2×3 + 5×2 = 20 + 6 + 10 = <b>36</b> [1]','B: 3×5 + 5×3 + 3×2 = 15 + 15 + 6 = <b>36</b> [1]','The totals are tied [1]','Break the tie by the most important criterion (brightness) so A is slightly better, or review the weights [1]'],
 award:'Award [1] per step.',kw:['36','tied','brightness'],acc:'Accept a justified alternative tie-break.',tip:'Multiply, add, compare.'},
{ref:'3.1.5',cmd:'Explain',marks:3,q:'Explain how comparing a product with its competitors can lead to opportunities for improvement.',
 pts:['A comparison shows where the product is <b>behind</b> competitors (for example price or battery) [1]','These weaknesses become <b>targets for redesign</b> [1]','It also shows <b>market gaps</b> that competitors do not serve [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['behind','redesign','gaps'],acc:'',tip:'Weakness becomes opportunity.'},
{ref:'3.1.6',cmd:'Explain',marks:4,q:'Explain how constructive discontent led to the development of the Dyson bagless vacuum cleaner.',
 pts:['Bagged vacuum cleaners <b>lost suction</b> as the bag clogged [1]','Dyson was <b>dissatisfied</b> and refused to accept this [1]','He developed a <b>cyclonic</b> system that separates dust without a bag [1]','The result keeps suction constant and removes the cost of bags [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['suction','dissatisfied','cyclonic','bag'],acc:'Accept other valid examples.',tip:'Problem, discontent, solution.'},
{ref:'3.1.6',cmd:'Describe',marks:3,q:'Describe how a designer could identify that a kitchen tool is not meeting the needs of its users.',
 pts:['<b>Observe</b> users to see difficulties and workarounds [1]','<b>Survey or interview</b> users, or read reviews and complaints [1]','<b>Test</b> against the specification and compare with similar tools [1]'],
 award:'Award [1] for each valid method up to [3 max].',kw:['observe','survey','test','reviews'],acc:'',tip:'Observe, ask, test.'},
{ref:'3.1.7',cmd:'Evaluate',marks:6,q:'Evaluate the use of user feedback as the main source of information in a product analysis.',
 pts:['Strength: users give <b>first-hand</b> experience of comfort and usability [1]','Strength: reveals <b>unmet needs</b> that designers may not see [1]','Strength: users feel involved, which supports user-centred design [1]','Limitation: opinions may be <b>subjective and biased</b>, and sample small [1]','Limitation: users cannot judge <b>manufacturing, safety standards</b> or materials [1]','Judgement: combine feedback with testing and expert stakeholder input for balanced evidence [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['first-hand','unmet needs','subjective','manufacturing','judgement'],acc:'Maximum [6].',tip:'Weigh opinions against testing.'},
{ref:'3.1.3',cmd:'Outline',marks:2,q:'Outline when in the design process a SWOT analysis can be used.',
 pts:['During <b>ideation</b> to compare concepts [1]','During <b>development</b> to prioritise improvements, and before <b>launch</b> to find risks and marketing angles [1]'],
 award:'Award [1] each up to [2 max].',kw:['ideation','development','launch'],acc:'',tip:'Early, middle, late.'}
],

practice:[
{id:'cs1',title:'Case study 1: Comparing three electric kettles',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A consumer magazine tests three 1.0 L electric kettles. Each heats 1.0 kg of water from 20°C to 100°C. Table 1 gives power and boil time. Figure 1 shows the average user comfort score from 40 testers (out of 10). Take the specific heat capacity of water as 4.2 kJ/kg°C. Data is illustrative.</p>`,
 fig:Fig.bars([['Kettle A',6.8],['Kettle B',8.1],['Kettle C',5.9]],{title:'Comfort score (out of 10)',unit:'',lw:100,max:10,hl:[1]}),
 cap:'Figure 1: User comfort score.',
 table:`<table class="t"><tr><th colspan="4">Table 1: Test data</th></tr><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><td>Power (W)</td><td>2200</td><td>1800</td><td>3000</td></tr><tr><td>Boil time (s)</td><td>210</td><td>252</td><td>138</td></tr><tr><td>Price</td><td>£35</td><td>£50</td><td>£45</td></tr><tr><td>Handle</td><td>Hard plastic, hot</td><td>Cool-touch, angled</td><td>Metal, gets hot</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.1.2',q:'State one stakeholder, other than the testers, who could provide information about kettle C’s safety.',award:'Award [1].',pts:['An <b>engineer</b> (or safety regulator or manufacturer) [1]'],acc:'',kw:['engineer','regulator'],tip:''},
 {l:'(b)',cmd:'Apply',marks:4,ref:'3.1.4',q:'Apply the data to calculate the efficiency of kettle A.',award:'Award [1] per step.',pts:['Useful energy = 4.2 × 1.0 × 80 = <b>336 kJ</b> [1]','Energy used = 2200 × 210 = 462 000 J = <b>462 kJ</b> [1]','Efficiency = 336 ÷ 462 × 100 [1]','= <b>73%</b> (72.7%) [1]'],acc:'Follow-through applies.',kw:['336 kJ','462 kJ','73%'],tip:'Useful over input.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'3.1.4',q:'Apply the data to show that kettle C is the most efficient of the three. (Kettle B efficiency is 74%.)',award:'Award [1] each.',pts:['C: energy used = 3000 × 138 = <b>414 kJ</b> [1]','Efficiency = 336 ÷ 414 × 100 = <b>81%</b>, higher than A (73%) and B (74%) [1]'],acc:'',kw:['414 kJ','81%'],tip:''},
 {l:'(d)',cmd:'Analyse',marks:4,ref:'3.1.5',q:'Analyse the comparison to identify two opportunities for improving a future kettle.',award:'Award [1] for each opportunity and [1] for evidence, up to [4 max].',pts:['C is <b>fast and efficient</b> but has a <b>hot metal handle</b>, so add a cool-touch handle [1]','Evidence: comfort score only 5.9 [1]','B has the best comfort (8.1) but is <b>slow (252 s) and expensive (£50)</b>, so improve heating power or efficiency [1]','Combine C’s speed and efficiency with B’s handle at a competitive price [1]'],acc:'',kw:['handle','comfort','speed','price'],tip:'Weakness, evidence, improvement.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.1.7',q:'Evaluate which kettle you would recommend, using Table 1 and Figure 1.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['B has the <b>highest comfort</b> and a safe cool-touch handle [1]','But B is the <b>slowest</b> and most expensive [1]','C is the <b>fastest and most efficient</b> [1]','But the hot metal handle is a <b>safety risk</b> and the comfort score is lowest [1]','Decision: recommend B for family safety, or C only if the handle is changed, because safety outweighs speed [1]'],acc:'',kw:['comfort','efficient','safety','price','decision'],tip:'Weigh safety against speed and cost.'}
 ]},

{id:'cs2',title:'Case study 2: Reverse engineering a hair dryer',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A student team reverse engineers two hair dryers. Dryer X is a budget model. Dryer Y is a premium model. They disassemble both, test them, and score them with a weighted matrix. Weights: function 5, usability 4, cost 3. Scores are out of 5 (5 is best). Data is illustrative.</p>`,
 fig:Fig.bars([['Dryer X',47],['Dryer Y',51],['Dryer Z',43]],{title:'Weighted score (maximum 60)',unit:'',lw:100,max:60,hl:[1]}),
 cap:'Figure 2: Weighted decision matrix totals.',
 table:`<table class="t"><tr><th colspan="4">Table 2: Findings</th></tr><tr><th></th><th>X</th><th>Y</th><th>Z</th></tr><tr><td>Parts count</td><td>34</td><td>51</td><td>40</td></tr><tr><td>Noise at 30 cm (dB)</td><td>78</td><td>70</td><td>74</td></tr><tr><td>Mass (g)</td><td>520</td><td>480</td><td>560</td></tr><tr><td>Joining</td><td>Glued casing</td><td>Screws</td><td>Snap fits</td></tr><tr><td>Function, usability, cost scores</td><td>4, 3, 5</td><td>5, 5, 2</td><td>3, 4, 4</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Outline',marks:2,ref:'3.1.4',q:'Outline what is meant by reverse engineering.',award:'Award [1] each.',pts:['<b>Taking a product apart</b> and analysing it [1]','To understand how it works and is made (parts, materials, joints) [1]'],acc:'',kw:['apart','how it works','materials'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.1.5',q:'Apply the weights to verify the total score for dryer Z (3, 4, 4).',award:'Award [1] per step.',pts:['3 × 5 = 15 [1]','4 × 4 = 16 and 4 × 3 = 12 [1]','Total = 15 + 16 + 12 = <b>43</b> [1]'],acc:'',kw:['15','16','12','43'],tip:'Match the order of the weights.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.1.4',q:'Explain what the joining methods in Table 2 suggest about the repairability of each dryer.',award:'Award [1] for each valid point up to [3 max].',pts:['X is <b>glued</b>, so it is hard to open and repair without damage [1]','Y uses <b>screws</b>, so it can be disassembled and repaired [1]','Z uses <b>snap fits</b>, which allow quick opening but may break if opened repeatedly [1]'],acc:'',kw:['glued','screws','snap fits','repair'],tip:''},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.1.4',q:'Explain how the data in Table 2 shows that dryer Y has better usability than X.',award:'Award [1] for each valid point up to [3 max].',pts:['Y is <b>quieter</b> (70 dB compared with 78 dB, 8 dB lower) [1]','Y is <b>lighter</b> (480 g compared with 520 g, 40 g less) [1]','So it is more comfortable for long use, and its usability score is 5 [1]'],acc:'',kw:['70 dB','480 g','lighter','quieter'],tip:'Quote the figures.'},
 {l:'(e)',cmd:'Justify',marks:4,ref:'3.1.5',q:'Justify an opportunity for a new dryer that combines features of X and Y.',award:'Award [1] for each valid reason up to [4 max].',pts:['Y has the best function and usability but a <b>low cost score</b> (2) [1]','X has a low price (cost score 5) [1]','A design with Y’s low noise and weight but X’s <b>fewer parts (34)</b> could lower cost [1]','It would score higher overall, filling a gap in the mid-price market [1]'],acc:'',kw:['cost','fewer parts','noise','market'],tip:'Combine the best of each.'}
 ]},

{id:'cs3',title:'Case study 3: Smart water bottle survey',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A company sells a smart water bottle with a hydration sensor and an app. It surveyed 50 users who owned the bottle for three months. Figure 3 shows the main complaints (users could choose more than one). Table 3 summarises a SWOT draft. Data is illustrative.</p>`,
 fig:Fig.bars([['Charging is a nuisance',30],['App crashes',18],['Bottle too heavy',12],['Leaks',6]],{title:'Number of users out of 50 reporting each problem',unit:'',lw:180,max:50,hl:[0]}),
 cap:'Figure 3: Complaints from 50 users.',
 table:`<table class="t"><tr><th colspan="2">Table 3: SWOT draft</th></tr><tr><td>Strengths</td><td>Accurate hydration tracking; sustainable stainless steel</td></tr><tr><td>Weaknesses</td><td>Price £60, needs charging, compatible with only some phones</td></tr><tr><td>Opportunities</td><td>Health and wellness trend; sports team partnerships</td></tr><tr><td>Threats</td><td>Cheaper smart bottles; data privacy concerns</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:2,ref:'3.1.4',q:'Apply Figure 3 to calculate the percentage of users who reported charging problems and the percentage who reported leaks.',award:'Award [1] each.',pts:['30 ÷ 50 × 100 = <b>60%</b> [1]','6 ÷ 50 × 100 = <b>12%</b> [1]'],acc:'',kw:['60%','12%'],tip:''},
 {l:'(b)',cmd:'Identify',marks:2,ref:'3.1.3',q:'Identify one internal and one external factor from Table 3.',award:'Award [1] each.',pts:['Internal: a strength or weakness, for example needs charging [1]','External: an opportunity or threat, for example cheaper rivals [1]'],acc:'',kw:['internal','external'],tip:''},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.1.6',q:'Explain how the survey identifies where the bottle is not meeting user needs.',award:'Award [1] for each valid point up to [3 max].',pts:['60% report charging as a nuisance, so a <b>battery or charging need is unmet</b> [1]','36% (18 of 50) report <b>app crashes</b>, showing reliability needs fixing [1]','These form priorities for improvement because most users share them [1]'],acc:'',kw:['60%','charging','app crashes','priorities'],tip:'Use numbers and what they mean.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'3.1.2',q:'Describe two other stakeholders who could provide useful information, and what they would provide.',award:'Award [1] for each stakeholder with information up to [3 max].',pts:['<b>Software engineer</b>: cause of app crashes [1]','<b>Retailer</b>: customer returns and price feedback [1]','<b>Manufacturer</b>: ways to improve battery life or seals [1]'],acc:'',kw:['engineer','retailer','manufacturer'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'3.1.7',q:'Evaluate the draft SWOT and the survey and recommend improvements for the next version.',award:'Award [1] for each valid point. Reward a recommendation.',pts:['SWOT correctly identifies <b>charging and price</b> as weaknesses, matched by the survey [1]','The survey adds evidence of <b>app crashes and weight</b> that the SWOT missed [1]','Weakness: a survey of 50 may be <b>small and self-selected</b> [1]','Improve: longer battery or wireless charging, fix the app, reduce mass [1]','Use the opportunity: wellness partnerships, to justify the price [1]','Recommendation: prioritise charging and software fixes, because they affect most users [1]'],acc:'Maximum [6].',kw:['charging','app','sample','recommendation'],tip:'Judge the evidence then recommend.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · SL + HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.1.3',q:'State what the letter T stands for in SWOT.',award:'Award [1].',pts:['<b>Threats</b> [1]'],acc:'',kw:['threats'],tip:''},
 {l:'2',cmd:'Identify',marks:1,ref:'3.1.2',q:'Identify one stakeholder who could advise on manufacturing a product.',award:'Award [1].',pts:['<b>Manufacturer</b> (or engineer) [1]'],acc:'',kw:['manufacturer'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'3.1.4',q:'Outline one way testing can show whether a product meets user needs.',award:'Award [1] each.',pts:['Users complete tasks and the <b>time and errors</b> are recorded [1]','The results are compared with the requirement or specification [1]'],acc:'',kw:['time','errors','specification'],tip:''},
 {l:'4',cmd:'Apply',marks:2,ref:'3.1.4',q:'A device uses 500 J and delivers 400 J of useful energy. Apply the data to calculate its efficiency.',award:'Award [1] each.',pts:['400 ÷ 500 × 100 [1]','= <b>80%</b> [1]'],acc:'',kw:['80%'],tip:''},
 {l:'5',cmd:'Describe',marks:2,ref:'3.1.6',q:'Describe what is meant by constructive discontent.',award:'Award [1] each.',pts:['<b>Positive dissatisfaction</b> with how something works [1]','…that motivates the designer to find a better solution [1]'],acc:'',kw:['dissatisfaction','improve'],tip:''},
 {l:'6',cmd:'Explain',marks:2,ref:'3.1.4',q:'Explain why reverse engineering a competitor’s product could be useful.',award:'Award [1] each.',pts:['It shows <b>materials, parts and processes</b> used [1]','…so the designer can find weaknesses or ideas to improve their own product [1]'],acc:'',kw:['materials','processes','weaknesses'],tip:''},
 {l:'7',cmd:'Outline',marks:2,ref:'3.1.2',q:'Outline the difference between qualitative and quantitative data.',award:'Award [1] each.',pts:['Qualitative: <b>opinions or descriptions</b> [1]','Quantitative: <b>numerical measurements</b> [1]'],acc:'',kw:['opinions','numerical'],tip:''},
 {l:'8',cmd:'Explain',marks:2,ref:'3.1.5',q:'Explain why comparing a product with competitors helps a designer.',award:'Award [1] each.',pts:['It shows <b>strengths and weaknesses</b> relative to the market [1]','…revealing opportunities to improve or gaps to fill [1]'],acc:'',kw:['weaknesses','opportunities'],tip:''}
 ]},

paper:[]
};
})();
