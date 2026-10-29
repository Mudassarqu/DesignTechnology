window.TOPICS=window.TOPICS||{};
window.TOPICS['b2-1']={
id:'b2-1',code:'B2.1',title:'The design process',level:'SL + HL',hours:6,
guiding:'How do designers approach problem-solving?',
pptx:'resources/B2_1_The_Design_Process_1.pptx',pptxName:'B2.1 The design process (slides)',

notes:[
{id:'s211',ref:'2.1.1',title:'The five stages of the design process',
 must:'Outline each stage of the design process: empathize; defining the project; ideation and modelling; designing a solution; presenting a solution.',
 html:`
<p>The design process is a <b>design thinking</b> model: human-centred, flexible and <b>iterative</b>. Designers can go back to earlier stages when testing shows a problem.</p>
<div class="tw"><table class="t"><tr><th>Stage</th><th>Purpose</th><th>Typical activities</th></tr>
<tr><td><b>1. Empathize</b></td><td>Understand users’ needs, feelings and context without assumptions</td><td>Interviews, observation, empathy map, personas, storyboard, product analysis</td></tr>
<tr><td><b>2. Define the project</b></td><td>Turn research into a focused problem and success criteria</td><td>Synthesise data, problem statement, design specification</td></tr>
<tr><td><b>3. Ideation and modelling</b></td><td>Generate many different ideas and test the best ones</td><td>Brainstorming, sketching, mind maps, low-fidelity models</td></tr>
<tr><td><b>4. Design the solution</b></td><td>Create, test and refine a high-fidelity solution</td><td>Model, test, refine cycles; prototypes; formal drawings</td></tr>
<tr><td><b>5. Present the solution</b></td><td>Communicate the final design clearly</td><td>Annotated CAD, renderings, exploded and orthographic views</td></tr></table></div>
<div class="ex"><b class="l">Example: school bag.</b> Empathize: watch students pack bags and ask about back pain. Define: “How might we design a lightweight, organised, durable bag that reduces strain on students’ backs?” Ideate: sketch many layouts. Design: test a prototype on students. Present: annotated drawings for a manufacturer.</div>
<div class="tip"><b>Exam tip.</b> Describe what is <b>done</b> and what is <b>produced</b> at each stage, and mention iteration.</div>`},

{id:'s212',ref:'2.1.2',title:'Research throughout the process',
 must:'Distinguish between primary and secondary sources, qualitative and quantitative data, and how they identify opportunities, understand users and generate ideas.',
 html:`
<p>Research is <b>ongoing</b>: it finds opportunities, builds understanding of users, shows constraints (cost, materials, environment) and generates feasible ideas.</p>
<div class="tw"><table class="t"><tr><th></th><th>Primary</th><th>Secondary</th></tr>
<tr><td>Meaning</td><td>First-hand data you collect for your own design context</td><td>Existing data collected by others (third party)</td></tr>
<tr><td>Examples</td><td>Interviews, surveys, observation, focus groups, user trials, material testing, product analysis</td><td>Books, journals, government statistics, company reports, websites, patents, reviews</td></tr>
<tr><td>Strength</td><td>Specific and current; designed to answer your question</td><td>Quick, cheap, wide background; supports or validates primary data</td></tr>
<tr><td>Limit</td><td>Time-consuming; small samples</td><td>May be out of date, biased or not specific to your user</td></tr></table></div>
<div class="tw"><table class="t"><tr><th></th><th>Quantitative</th><th>Qualitative</th></tr>
<tr><td>Format</td><td>Numbers</td><td>Words, images</td></tr>
<tr><td>Answers</td><td>“How many?” “How much?”</td><td>“Why?” “What do you think?”</td></tr>
<tr><td>Collected by</td><td>Surveys, sensors, measurements, tests</td><td>Interviews, observation</td></tr>
<tr><td>Use</td><td>Measure and compare performance</td><td>Understand user experience</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Use both: numbers show <b>how many</b> people are affected, words explain <b>why</b>.</div>`},

{id:'s213',ref:'2.1.3–2.1.4',title:'Primary and secondary research methods',
 must:'Apply primary research methods and analyse secondary data to establish user requirements and design specifications, develop a persona and suggest further developments.',
 html:`
<h3>Primary research methods</h3>
<div class="tw"><table class="t"><tr><th>Method</th><th>Use in the design process</th></tr>
<tr><td>User observation</td><td>Watch users with products or environments to find pain points</td></tr>
<tr><td>User trials</td><td>Test a design with users doing set tasks to find faults</td></tr>
<tr><td>Interviews</td><td>Detailed qualitative insight into needs and expectations</td></tr>
<tr><td>Surveys / questionnaires</td><td>Quantitative and qualitative data from many users</td></tr>
<tr><td>Focus groups</td><td>Discussion of opinions and reactions to concepts</td></tr>
<tr><td>Material testing</td><td>Strength, durability, suitability of materials</td></tr>
<tr><td>Product analysis</td><td>Strengths and weaknesses of existing products</td></tr></table></div>
<h3>Secondary sources</h3>
<ul class="tight"><li><b>Internet research</b>: articles, forums, videos, reviews.</li><li><b>Government data and statistics</b>: population, health, anthropometric data.</li><li><b>University research</b>: peer-reviewed studies.</li><li><b>Literature search</b>: books, journals, standards.</li></ul>
<p>Judge sources for <b>reliability, date, authority and bias</b>.</p>
<h3>From data to requirements</h3>
<div class="ex"><b class="l">Worked example.</b> Survey of 80 students: 56 report back pain (56 ÷ 80 = <b>70%</b>). Government data: the recommended maximum load is 10% of body mass. A student of 40 kg should carry at most 4 kg. Requirement: bag mass plus contents ≤ 4 kg. Specification: empty mass under 0.8 kg; padded shoulder straps at least 40 mm wide. Persona: Sara, 12, carries 6 kg daily.</div>
<div class="tip"><b>Exam tip.</b> Show how you <b>analysed</b> the data (calculate, compare, find patterns) and what <b>requirement</b> it produced.</div>`},

{id:'s214',ref:'2.1.5–2.1.6',title:'Empathy, personas, storyboards and user journeys',
 must:'Identify issues using user-centred methods, and map a user’s journey with a storyboard to identify pain points that give design opportunities.',
 html:`
<p>To <b>empathize</b> is to understand users’ needs, thoughts and feelings by interviewing, observing and engaging with them, setting aside assumptions. An <b>empathy map</b> records what users <b>say, think, do and feel</b>.</p>
<ul class="tight"><li>A <b>persona</b> is a fictional but research-backed user. The <b>primary persona</b> is the core user; <b>secondary personae</b> are significant but less central (hospital bed: patient is primary; nurse and doctor are secondary).</li><li>Identify <b>needs, motivations, interactions</b> with products and environments.</li></ul>
<h3>Storyboards and user journeys</h3>
<p>A <b>storyboard</b> shows a user’s experience step by step as a sequence of sketches or frames. It explains the problem and justifies the need for a solution by showing difficulties and consequences. A <b>user journey map</b> follows the same steps and records how the user feels at each step.</p>
<div class="tw"><table class="t"><tr><th>Step</th><th>User action</th><th>Feeling</th><th>Pain point?</th><th>Opportunity</th></tr>
<tr><td>1</td><td>Packs bag</td><td>Annoyed</td><td>Books slide, no organiser</td><td>Compartments</td></tr>
<tr><td>2</td><td>Lifts bag</td><td>Strained</td><td>Heavy, one strap</td><td>Padded two-strap system</td></tr>
<tr><td>3</td><td>Walks to school</td><td>Uncomfortable</td><td>Back and shoulder pain</td><td>Back panel, hip belt</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> A pain point is where the user is <b>frustrated, delayed or at risk</b>. Each pain point should lead to a design opportunity.</div>`},

{id:'s215',ref:'2.1.7',title:'Product analysis',
 must:'Analyse a range of products that provide a solution to a problem or can inspire a solution.',
 html:`
<p><b>Product analysis</b> examines existing products to learn about their <b>function, performance and features</b>. It identifies strengths and weaknesses, user needs and market trends, and inspires new ideas. It is a primary research method when you examine the actual product.</p>
<div class="tw"><table class="t"><tr><th>Aspect</th><th>Questions</th></tr>
<tr><td>Function and performance</td><td>Does it do the job? How well, how fast, how reliably?</td></tr>
<tr><td>Usability and ergonomics</td><td>Is it comfortable, safe and easy to use for the target users?</td></tr>
<tr><td>Materials and manufacture</td><td>What is it made of? Which processes? How are parts joined?</td></tr>
<tr><td>Aesthetics</td><td>Form, colour, texture, branding?</td></tr>
<tr><td>Sustainability and cost</td><td>Life span, repair, recycling, price?</td></tr></table></div>
<div class="ex"><b class="l">Example.</b> Analysing three school bags: bag A is light (0.7 kg) but has thin straps; bag B has padded straps but weighs 1.4 kg; bag C is waterproof but has no organiser. Opportunity: light bag with padded straps and organiser.</div>
<div class="tip"><b>Exam tip.</b> End a product analysis with a <b>conclusion</b>: which features to keep, avoid or improve.</div>`},

{id:'s216',ref:'2.1.8–2.1.9',title:'Problem statements and design specifications',
 must:'Write a problem statement that defines design intentions. Construct design specifications with essential and desirable success criteria.',
 html:`
<p>The first step in solving a problem is to <b>define</b> it. A <b>problem statement</b> is a short, focused statement that describes <b>who</b> has the problem, <b>what</b> the problem is, <b>why</b> it matters and the design intention. It does not describe the solution.</p>
<div class="ex"><b class="l">Example.</b> “Secondary students who carry more than 10% of their body mass in school bags suffer back and shoulder pain. A lightweight, organised and durable bag is needed to reduce strain.”</div>
<div class="key"><b>Good specification:</b> measurable, testable and linked to research. Divide into <b>essential</b> (must have) and <b>desirable</b> (nice to have).</div>
<div class="tw"><table class="t"><tr><th>Category</th><th>Specification (example)</th><th>Type</th><th>Source</th></tr>
<tr><td>Function</td><td>Holds an A4 folder and a 13-inch laptop</td><td>Essential</td><td>Survey</td></tr>
<tr><td>Ergonomics</td><td>Empty mass below 0.8 kg; strap width at least 40 mm</td><td>Essential</td><td>Government guidance</td></tr>
<tr><td>Safety</td><td>Reflective strip on the front</td><td>Essential</td><td>Observation</td></tr>
<tr><td>Durability</td><td>Fabric survives 10 000 zip cycles</td><td>Essential</td><td>Material test</td></tr>
<tr><td>Aesthetics</td><td>Available in three colours</td><td>Desirable</td><td>Interviews</td></tr>
<tr><td>Sustainability</td><td>Made from at least 50% recycled fabric</td><td>Desirable</td><td>Secondary research</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Avoid vague words like “comfortable”: write “strap width at least 40 mm”. Each specification must be <b>testable</b>.</div>`},

{id:'s217',ref:'2.1.10–2.1.12',title:'Ideation and the model, test, refine cycle',
 must:'Apply ideation techniques, compare ideas with specifications and user needs, and demonstrate iterative development using model, test, refine.',
 html:`
<p><b>Ideation</b> generates a <b>wide range of distinct ideas</b> that respond to the problem statement and specification, using techniques such as <b>brainstorming, sketching, mind maps, SCAMPER and morphological analysis</b>. Quantity and variety come first; judgement comes later.</p>
<div class="tw"><table class="t"><tr><th>Technique</th><th>How</th></tr><tr><td>Brainstorming</td><td>Many ideas, no criticism at first</td></tr><tr><td>Mind map</td><td>Branches from the problem to related ideas</td></tr><tr><td>Sketching</td><td>Quick drawings with annotations</td></tr><tr><td>SCAMPER</td><td>Substitute, combine, adapt, modify, put to another use, eliminate, reverse</td></tr></table></div>
<h3>Iterative analysis and evaluation</h3>
<p>Compare each idea with the <b>specification</b> and <b>user needs</b> (for example in a table or weighted decision matrix). Combine the best features and refine.</p>
<div class="key"><b>Model → Test → Refine → repeat</b> until all major specifications and user requirements are met.</div>
<div class="ex"><b class="l">Example.</b> A bike light is modelled in foam (test: fit on handlebar), refined, then a prototype is tested in the dark. Each cycle meets more specifications: 3 of 8, then 5 of 8, then 8 of 8.</div>
<div class="tip"><b>Exam tip.</b> Show <b>what was tested, what was learned and what changed</b> in each iteration.</div>`},

{id:'s218',ref:'2.1.13',title:'Models, prototypes and mock-ups',
 must:'Create feasible models at appropriate levels of fidelity that generate performance data when tested with end-users.',
 html:`
<div class="tw"><table class="t"><tr><th>Type</th><th>Description</th><th>Used to</th></tr>
<tr><td><b>Mock-up</b></td><td>Scale or full-size, inexpensive replica (often foam or card), early stage; a prototype if it has some function</td><td>Check size, fit, proportion, ergonomics</td></tr>
<tr><td><b>Scale model</b></td><td>Smaller or larger copy of the object</td><td>Visualise form and proportion; architecture</td></tr>
<tr><td><b>Aesthetic model</b></td><td>Looks like the final product but does not work</td><td>Show appearance and feel to clients</td></tr>
<tr><td><b>Prototype</b></td><td>Working model built to test and validate a concept</td><td>Gather performance data and feedback</td></tr>
<tr><td><b>CAD / digital model</b></td><td>3D model on computer</td><td>Simulate, analyse, share, manufacture</td></tr></table></div>
<div class="tw"><table class="t"><tr><th>Fidelity</th><th>Description</th><th>Example</th></tr>
<tr><td><b>Low</b></td><td>Basic forms, cheap, quick; tests the concept</td><td>Card or foam block</td></tr>
<tr><td><b>Medium</b></td><td>More detail; some function or interaction</td><td>Foam model with moving parts</td></tr>
<tr><td><b>High</b></td><td>Close to the final product; used for client presentation and detailed testing</td><td>3D printed working prototype</td></tr></table></div>
<p>Choose the fidelity that matches the <b>question being tested</b> and the <b>stage</b>: use low fidelity early (cheap, easy to change), high fidelity late (accurate data). Test with users and record <b>performance data</b> (times, forces, ratings).</p>
<div class="tip"><b>Exam tip.</b> Justify the fidelity: “A foam mock-up is enough to test grip size”.</div>`},

{id:'s219',ref:'2.1.14–2.1.15',title:'Technical drawings and presenting the solution',
 must:'Create detailed drawings communicating dimensions, scale and assembly. Create virtual representations highlighting key usability features and explain how the solution meets the specification.',
 html:`
<p>Detailed technical drawings give a manufacturer <b>precise dimensions, tolerances, materials and assembly details</b>. They are a universal language that reduces errors, waste and safety risk.</p>
<div class="tw"><table class="t"><tr><th>Drawing</th><th>Shows</th></tr>
<tr><td>Orthographic</td><td>2D views (front, top, side) with exact dimensions</td></tr>
<tr><td>Isometric / perspective</td><td>3D form and structure</td></tr>
<tr><td>Exploded view</td><td>How parts fit together for assembly</td></tr>
<tr><td>Sectional</td><td>Internal features</td></tr>
<tr><td>Detail drawing</td><td>One component enlarged with tolerances</td></tr>
<tr><td>Assembly drawing</td><td>All parts together, with a parts list</td></tr>
<tr><td>CAD model, rendering, FEA</td><td>Digital 3D visualisation and analysis</td></tr></table></div>
<ul class="tight"><li>Include <b>dimensions, scale, units, tolerances, materials</b> and part numbers.</li><li>Use standard line types and conventions.</li></ul>
<h3>Presenting a solution</h3>
<ol class="tight"><li>State the <b>need</b> (problem and user).</li><li>Show <b>key features</b> and usability benefits with annotations.</li><li>Use <b>virtual representations</b> (renders, animation, digital prototype).</li><li>Explain how it <b>meets each specification</b>.</li><li>If it is a redesign, <b>compare</b> with the original to justify improvements.</li></ol>
<div class="tip"><b>Exam tip.</b> Annotations should state a <b>feature and its benefit</b> to the user.</div>`}
],

cards:[
['Design thinking','A human-centred, flexible and iterative approach to problem solving.'],
['Empathize','Stage 1: understand users’ needs, thoughts and feelings.'],
['Define the project','Stage 2: write a problem statement and specification.'],
['Ideation and modelling','Stage 3: generate many ideas and test them with models.'],
['Design the solution','Stage 4: create, test and refine a high-fidelity solution.'],
['Present the solution','Stage 5: communicate the final design to others.'],
['Iteration','Repeating a cycle to improve a design.'],
['Primary research','First-hand data collected for your own design context.'],
['Secondary research','Existing data collected by others.'],
['Quantitative data','Numerical data answering how many or how much.'],
['Qualitative data','Descriptive data explaining why.'],
['User trial','Users test a product with set tasks.'],
['Material testing','Testing materials for strength, durability or suitability.'],
['Empathy map','A diagram of what a user says, thinks, does and feels.'],
['Persona','A fictional, research-based representation of a user group.'],
['Storyboard','A sequence of sketches showing a user’s experience.'],
['User journey map','A map of the user’s steps, feelings and pain points.'],
['Pain point','A step where users are frustrated, delayed or at risk.'],
['Product analysis','Examining an existing product’s function, performance and features.'],
['Problem statement','A focused statement of who has what problem and why it matters.'],
['Design specification','A list of measurable success criteria for the solution.'],
['Essential criterion','A specification that the solution must meet.'],
['Desirable criterion','A specification that would be good but is not required.'],
['Ideation','Generating a wide range of ideas.'],
['Brainstorming','A technique for producing many ideas without criticism at first.'],
['SCAMPER','A prompt list to modify ideas: substitute, combine, adapt, modify, put to another use, eliminate, reverse.'],
['Model, test, refine','The iterative cycle used to develop a solution.'],
['Mock-up','An inexpensive scale or full-size replica to check size and fit.'],
['Scale model','A smaller or larger copy of an object.'],
['Aesthetic model','A non-working model that looks like the final product.'],
['Prototype','A working model built to test a design concept.'],
['Fidelity','How closely a model matches the final product.'],
['Orthographic drawing','Front, top and side views with exact dimensions.'],
['Exploded view','A drawing showing how parts fit together.'],
['Sectional view','A cutaway drawing showing internal features.'],
['Assembly drawing','A drawing showing how parts are put together.'],
['Tolerance','The allowed variation in a dimension.'],
['Virtual representation','A digital model or render of a design.'],
['Annotation','A short note on a drawing highlighting a feature.']
],

mcq:[
{ref:'2.1.1',q:'The first stage of the design process is…',o:['Empathize','Present','Ideation','Define'],a:0,why:'Designers begin by understanding users.',live:true},
{ref:'2.1.1',q:'In which stage is a problem statement written?',o:['Define the project','Empathize','Present','Modelling only'],a:0,why:'Research is synthesised into a defined problem.'},
{ref:'2.1.1',q:'The design process is described as iterative because…',o:['Designers can repeat and revisit stages','It has only one pass','It avoids testing','It is random'],a:0,why:'Feedback leads to repetition.',live:true},
{ref:'2.1.2',q:'Government statistics are an example of…',o:['Secondary data','Primary data','Observation','A prototype'],a:0,why:'They were collected by a third party.',live:true},
{ref:'2.1.2',q:'Which question is best answered by qualitative data?',o:['Why do users avoid the handle?','How many users are 12?','What is the mass?','How much does it cost?'],a:0,why:'“Why” questions need words.'},
{ref:'2.1.2',q:'A survey result such as “64% of users prefer a larger button” is…',o:['Quantitative','Qualitative','A prototype','A persona'],a:0,why:'It is numerical.',live:true},
{ref:'2.1.3',q:'Which is a primary method?',o:['Material testing','Reading a journal','Government report','A patent search'],a:0,why:'You collect the data yourself.'},
{ref:'2.1.3',q:'56 of 80 students report back pain. The percentage is…',o:['70%','56%','80%','14%'],a:0,why:'56 ÷ 80 = 0.7.',live:true},
{ref:'2.1.3',q:'A user trial tests…',o:['A design with users doing set tasks','A market price','A material colour','A drawing standard'],a:0,why:'It identifies design issues.'},
{ref:'2.1.4',q:'Secondary research is often used to…',o:['Support or validate primary findings','Replace all testing','Build the product','Draw views'],a:0,why:'It adds background and checks results.',live:true},
{ref:'2.1.4',q:'A weakness of secondary data is that it may be…',o:['Out of date or not specific','Too specific','Always free','Primary'],a:0,why:'It was collected for another purpose.'},
{ref:'2.1.5',q:'In a hospital bed design, the primary persona is the…',o:['Patient','Nurse','Doctor','Cleaner'],a:0,why:'The patient is the core user.',live:true},
{ref:'2.1.5',q:'An empathy map records what users…',o:['Say, think, do and feel','Earn and spend','Make and sell','Draw'],a:0,why:'It builds understanding of the user.'},
{ref:'2.1.6',q:'A storyboard in the design process shows…',o:['A user’s experience step by step','The final drawing only','A circuit','Material costs'],a:0,why:'It identifies pain points.',live:true},
{ref:'2.1.6',q:'A pain point is…',o:['A step where users are frustrated or at risk','The cost of the product','A material','A finish'],a:0,why:'It suggests a design opportunity.'},
{ref:'2.1.7',q:'Product analysis examines…',o:['Function, performance and features of an existing product','Only price','Only colour','The company’s profits'],a:0,why:'It guides improvement.',live:true},
{ref:'2.1.8',q:'A good problem statement…',o:['Describes the problem, not the solution','Names the solution','Lists materials','Is a drawing'],a:0,why:'It defines the intention.'},
{ref:'2.1.9',q:'Which is a measurable specification?',o:['Mass below 0.8 kg','Looks nice','Is comfortable','Feels good'],a:0,why:'It is testable.',live:true},
{ref:'2.1.9',q:'A desirable criterion is one that…',o:['Would be good but is not essential','Must be met','Is illegal','Is a tolerance'],a:0,why:'It is a nice-to-have.'},
{ref:'2.1.10',q:'Which is an ideation technique?',o:['Brainstorming','Welding','Anodising','Rendering'],a:0,why:'It produces many ideas.',live:true},
{ref:'2.1.11',q:'Designers compare their ideas with…',o:['The specification and user needs','Only their own taste','Only price','Nothing'],a:0,why:'This keeps the design relevant.'},
{ref:'2.1.12',q:'The iterative cycle used when developing a solution is…',o:['Model, test, refine','Draw, print, sell','Buy, use, throw','Cut, join, finish'],a:0,why:'It repeats until the specification is met.',live:true},
{ref:'2.1.13',q:'A model that looks like the final product but does not work is…',o:['An aesthetic model','A prototype','A functional mock-up','A CAD file'],a:0,why:'It is for appearance only.'},
{ref:'2.1.13',q:'Low-fidelity models are best for…',o:['Early testing of concepts','Final presentation','Mass production','Legal checks'],a:0,why:'They are cheap and quick to change.',live:true},
{ref:'2.1.13',q:'A foam mock-up is mainly used to check…',o:['Size and fit','Electrical load','Corrosion','Cost of tooling'],a:0,why:'It tests proportions and ergonomics.'},
{ref:'2.1.14',q:'An exploded view shows…',o:['How parts fit together','Internal cutaway','A single view','The price'],a:0,why:'It helps assembly.',live:true},
{ref:'2.1.14',q:'Orthographic drawings give…',o:['Exact dimensions in 2D views','Only 3D pictures','Colours','Costs'],a:0,why:'Front, top and side views.'},
{ref:'2.1.15',q:'When presenting a solution, designers should explain…',o:['How it meets the specification','Only the price','Only the history','Nothing'],a:0,why:'Show the need and how it is solved.',live:true},
{ref:'2.1.15',q:'An annotation on a drawing should…',o:['State a feature and its benefit','Be blank','Repeat the title','Be only a number'],a:0,why:'It communicates the purpose.'}
],

fib:[
{ref:'2.1.1',t:'The five stages are empathize, define, [[ideation]] and modelling, design the solution and [[present]] the solution.'},
{ref:'2.1.2',t:'[[Primary]] data is collected first-hand, whereas [[secondary]] data was collected by others.'},
{ref:'2.1.2',t:'[[Quantitative]] data is numerical and [[qualitative]] data is descriptive.'},
{ref:'2.1.3',t:'[[Material]] testing and product analysis are primary research methods.'},
{ref:'2.1.4',t:'Secondary research can be used to [[validate|support]] primary research.'},
{ref:'2.1.5',t:'A [[persona]] is a fictional, research-based user.'},
{ref:'2.1.6',t:'A [[storyboard]] maps a user’s journey and shows pain points.'},
{ref:'2.1.7',t:'[[Product]] analysis studies the function, performance and features of an existing product.'},
{ref:'2.1.8',t:'A problem [[statement]] defines the problem and the design intention.'},
{ref:'2.1.9',t:'A specification must be [[measurable|testable]] so that it can be checked.'},
{ref:'2.1.10',t:'[[Brainstorming]] is an ideation technique that produces many ideas.'},
{ref:'2.1.12',t:'The cycle used to develop a solution is model, [[test]] and [[refine]].'},
{ref:'2.1.13',t:'A [[mock-up|mockup]] is an inexpensive replica used to check size and fit.'},
{ref:'2.1.13',t:'[[Fidelity]] describes how closely a model matches the final product.'},
{ref:'2.1.14',t:'An [[exploded]] view shows how parts fit together.'}
],

theory:[
{ref:'2.1.1',cmd:'Outline',marks:5,q:'Outline the five stages of the design process.',
 pts:['<b>Empathize</b>: understand users’ needs through research [1]','<b>Define the project</b>: write a problem statement and specification [1]','<b>Ideation and modelling</b>: generate and test many ideas [1]','<b>Design the solution</b>: model, test and refine a high-fidelity solution [1]','<b>Present the solution</b>: communicate the final design with annotated drawings [1]'],
 award:'Award [1] for each stage outlined up to [5 max].',kw:['empathize','define','ideation','design the solution','present'],acc:'',tip:'One short sentence for each.'},
{ref:'2.1.2',cmd:'Explain',marks:4,q:'Explain why designers need both quantitative and qualitative data.',
 pts:['<b>Quantitative</b> data shows how many users are affected or measures performance [1]','It allows comparison and checking against targets [1]','<b>Qualitative</b> data explains <b>why</b> users behave or feel as they do [1]','Together they give a complete understanding and support design decisions [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['how many','measures','why','complete'],acc:'',tip:'Numbers show scale, words show reasons.'},
{ref:'2.1.3',cmd:'Apply',marks:4,q:'A survey of 80 students finds that 56 have back pain. Government guidance says a bag should be no more than 10% of body mass. Apply this information to find the maximum load for a 45 kg student, the percentage with pain, and one specification.',
 pts:['56 ÷ 80 × 100 = <b>70%</b> [1]','10% of 45 kg = <b>4.5 kg</b> [1]','Specification: total mass of bag and contents ≤ 4.5 kg [1]','Additional measurable item, for example empty mass below 0.8 kg [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['70%','4.5 kg','specification'],acc:'',tip:'Calculate, then turn into a measurable requirement.'},
{ref:'2.1.4',cmd:'Explain',marks:4,q:'Explain two advantages and two limitations of using secondary research.',
 pts:['Advantage: <b>quick and cheap</b> [1]','Advantage: gives <b>background and wide data</b>, such as statistics [1]','Limitation: may be <b>out of date or biased</b> [1]','Limitation: not collected for <b>your specific user</b> or context [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['quick','cheap','background','out of date','specific'],acc:'',tip:'Two of each.'},
{ref:'2.1.5',cmd:'Describe',marks:3,q:'Describe how a primary persona helps a designer working on a new hospital bed.',
 pts:['The persona (for example a patient) represents the <b>core user’s needs</b> [1]','It keeps the team focused on real <b>goals and frustrations</b> [1]','Secondary personae such as nurses add other requirements, for example height adjustment [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['core user','goals','secondary','nurse'],acc:'',tip:'Say what the persona changes in the design.'},
{ref:'2.1.6',cmd:'Describe',marks:4,q:'Describe how a storyboard and user journey can identify design opportunities.',
 pts:['The storyboard shows the <b>steps</b> a user takes in a task [1]','It shows what the user <b>does and feels</b> at each step [1]','<b>Pain points</b> are marked where users are frustrated or at risk [1]','Each pain point becomes a <b>design opportunity</b> [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['steps','feels','pain points','opportunity'],acc:'',tip:'Steps, feelings, pain points, opportunity.'},
{ref:'2.1.7',cmd:'Outline',marks:4,q:'Outline how a designer would carry out a product analysis of an existing water bottle.',
 pts:['Examine <b>function</b>: leak-proof, capacity, ease of drinking [1]','Examine <b>ergonomics</b>: grip, mass, lid use [1]','Examine <b>materials and manufacture</b> [1]','Record <b>strengths and weaknesses</b> and conclude which features to keep or improve [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['function','ergonomics','materials','strengths','weaknesses'],acc:'',tip:'Use several aspects and end with a conclusion.'},
{ref:'2.1.8',cmd:'Construct',marks:3,q:'Construct a problem statement for a lunchbox for primary school children.',
 pts:['<b>Who</b>: primary school children (and parents) [1]','<b>What problem</b>: lunchboxes leak or are hard to open [1]','<b>Why it matters / intention</b>: the need for a leak-proof lunchbox that children can open alone, without naming a solution [1]'],
 award:'Award [1] for each element.',kw:['who','problem','intention'],acc:'Accept an equivalent clear statement.',tip:'Who, what, why; no solution.'},
{ref:'2.1.9',cmd:'Construct',marks:4,q:'Construct four specifications for a child’s lunchbox, stating which are essential or desirable.',
 pts:['Measurable essential spec, for example “leak-proof when inverted for 30 s” [1]','Essential spec on safety, for example “food-safe polypropylene” [1]','Essential ergonomic spec, for example “lid opens with force under 10 N” [1]','Desirable spec, for example “available in four colours” [1]'],
 award:'Award [1] for each measurable and correctly classified specification.',kw:['measurable','essential','desirable','food-safe'],acc:'Accept other realistic values.',tip:'Include a number in each.'},
{ref:'2.1.10',cmd:'Explain',marks:4,q:'Explain why designers generate many ideas before choosing one.',
 pts:['More ideas give <b>variety</b> and better chance of a good solution [1]','Avoids settling on the <b>first, obvious idea</b> [1]','Different ideas can be <b>combined</b> [1]','Ideas can be compared with the <b>specification</b> to select the best [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['variety','obvious','combined','specification'],acc:'',tip:'Diversity then selection.'},
{ref:'2.1.12',cmd:'Describe',marks:4,q:'Describe the model, test, refine cycle using an example.',
 pts:['<b>Model</b>: make a representation of the design, for example a foam model [1]','<b>Test</b> it with users or against the specification [1]','<b>Refine</b> the design using the results [1]','Repeat until the major specifications are met; give an example of a change made [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['model','test','refine','repeat'],acc:'',tip:'Show the loop.'},
{ref:'2.1.13',cmd:'Explain',marks:4,q:'Explain why low-fidelity models are used early in the design process and high-fidelity prototypes later.',
 pts:['Low-fidelity models are <b>cheap and quick</b> [1]','They are easy to change after feedback [1]','High-fidelity prototypes are <b>close to the final product</b> and give accurate performance data [1]','They can be used to confirm that the specification is met and to present to a client [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['cheap','quick','accurate','performance data'],acc:'',tip:'Link cost and accuracy to stage.'},
{ref:'2.1.14',cmd:'Explain',marks:4,q:'Explain why detailed technical drawings are needed before manufacture.',
 pts:['They give <b>exact dimensions and tolerances</b> [1]','They show <b>materials and assembly</b> details [1]','They reduce <b>errors, waste and misunderstandings</b> [1]','They support quality control and safety checks [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['dimensions','tolerances','errors','quality'],acc:'',tip:'Precision, assembly, errors, checks.'},
{ref:'2.1.15',cmd:'Evaluate',marks:6,q:'Evaluate the use of a rendered CAD presentation to present a new product to a manufacturer.',
 pts:['Strength: shows <b>form, finish and colour</b> realistically [1]','Strength: can show <b>exploded and sectional views</b> to explain assembly [1]','Strength: easy to <b>edit and share</b> digitally [1]','Limitation: cannot show <b>real feel, weight or performance</b> [1]','Limitation: rendering takes <b>time and skill</b> [1]','Judgement: combine with dimensioned drawings and a physical prototype for full communication [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['realistic','exploded','edit','feel','skill','judgement'],acc:'Maximum [6].',tip:'Weigh clarity against what is missing.'}
],

practice:[
{id:'cs1',title:'Case study 1: A school bag for secondary students',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A design team works through the design process to create a new school bag for secondary students. They survey 80 students, observe students packing bags, and read government guidance that recommends a bag should not exceed 10% of body mass. The survey results are shown in Figure 1 (students out of 80). Data is illustrative.</p>`,
 fig:Fig.bars([['Back or shoulder pain',56],['Straps dig in',44],['Cannot find items',40],['Bag too heavy when empty',28]],{title:'Students reporting each problem (out of 80)',unit:'',lw:190,max:80,hl:[0]}),
 cap:'Figure 1: Survey of 80 students.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Information</th></tr><tr><th>Source</th><th>Type</th><th>Finding</th></tr><tr><td>Survey</td><td>Primary</td><td>See Figure 1</td></tr><tr><td>Observation</td><td>Primary</td><td>Books slide to the bottom; students carry on one shoulder</td></tr><tr><td>Government guidance</td><td>Secondary</td><td>Maximum load 10% of body mass</td></tr><tr><td>Average student mass</td><td>Secondary</td><td>45 kg</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'2.1.3',q:'Apply Figure 1 and Table 1 to calculate the percentage of students reporting pain and the maximum recommended load for an average student.',award:'Award [1] for each.',pts:['56 ÷ 80 × 100 = <b>70%</b> [1]','10% of 45 kg [1]','= <b>4.5 kg</b> [1]'],acc:'',kw:['70%','4.5 kg'],tip:'Divide, then take 10%.'},
 {l:'(b)',cmd:'Outline',marks:3,ref:'2.1.2',q:'Outline how the team used both primary and secondary research in Table 1.',award:'Award [1] for each valid point up to [3 max].',pts:['<b>Primary</b>: survey and observation gave first-hand data from the target users [1]','<b>Secondary</b>: government guidance supplied a recommended limit [1]','The secondary data was used to <b>set a target</b> that supports the primary finding about pain [1]'],acc:'',kw:['survey','observation','government','target'],tip:'Say which data is which.'},
 {l:'(c)',cmd:'Construct',marks:3,ref:'2.1.8',q:'Construct a problem statement using the research data.',award:'Award [1] each: who, what, why.',pts:['Who: secondary school students [1]','Problem: 70% have back or shoulder pain from heavy, disorganised bags [1]','Intention: a lighter, better organised bag is needed to reduce strain [1]'],acc:'Accept equivalent wording.',kw:['students','70%','strain'],tip:'No solution in the statement.'},
 {l:'(d)',cmd:'Construct',marks:4,ref:'2.1.9',q:'Construct two essential and two desirable specifications.',award:'Award [1] for each measurable and correctly labelled specification.',pts:['Essential: total mass with contents ≤ 4.5 kg [1]','Essential: padded straps at least 40 mm wide [1]','Desirable: separate compartment for a water bottle [1]','Desirable: at least 50% recycled fabric [1]'],acc:'Accept other measurable values.',kw:['4.5 kg','40 mm','essential','desirable'],tip:'Link each to the research.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'2.1.12',q:'Evaluate the team’s use of research before starting to generate ideas.',award:'Award [1] for each valid point up to [5 max]. Reward a judgement.',pts:['Strength: survey gives <b>numbers</b> showing the scale of the problem [1]','Strength: observation shows <b>real behaviour</b> [1]','Strength: secondary data sets a <b>measurable target</b> [1]','Limitation: no interviews, so the <b>reasons</b> behind problems are unknown [1]','Judgement: sufficient to start ideation, with further user testing in model, test, refine cycles [1]'],acc:'',kw:['numbers','real behaviour','target','interviews','judgement'],tip:'Strengths and gaps in the research.'}
 ]},

{id:'cs2',title:'Case study 2: A pill dispenser for older adults',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A team designs a pill dispenser for adults over 70. They create a storyboard of a day of medication and ask eight users to rate how they feel at each step from 1 (very frustrated) to 5 (very happy). The mean ratings form the user journey in Figure 2. The primary persona is “Mr Hassan, 76”, who lives alone and takes five medicines a day. Data is illustrative.</p>`,
 fig:Fig.xy([{name:'Mean rating',pts:[[1,4.2],[2,3.5],[3,1.8],[4,2.4],[5,3.8],[6,4.4]]}],{x0:1,x1:6,y0:0,y1:5,xl:'Step in the journey (1 to 6)',yl:'Mean feeling (1 to 5)',h:260,title:'User journey',marks:[[3,1.8]]}),
 cap:'Figure 2: User journey. Steps: 1 wake up, 2 find pills, 3 open the blister packs, 4 check the dose, 5 take pills, 6 record it.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Observation notes</th></tr><tr><th>Step</th><th>Observation</th><th>Time (s)</th></tr><tr><td>3 Open blister packs</td><td>Fingers too weak; uses scissors</td><td>85</td></tr><tr><td>4 Check the dose</td><td>Cannot read small print; checks twice</td><td>40</td></tr><tr><td>5 Take pills</td><td>Easy</td><td>15</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'2.1.6',q:'Identify the step that is the main pain point in Figure 2.',award:'Award [1].',pts:['<b>Step 3, opening the blister packs</b> (lowest rating, 1.8) [1]'],acc:'',kw:['step 3','blister'],tip:'Lowest point.'},
 {l:'(b)',cmd:'Explain',marks:3,ref:'2.1.6',q:'Explain how steps 3 and 4 offer design opportunities.',award:'Award [1] for each valid point up to [3 max].',pts:['Step 3: <b>weak grip</b> means a dispenser with an easy open mechanism (large lever) [1]','Step 4: <b>small print</b> suggests large high-contrast labels or an alarm [1]','Both reduce time and frustration and improve independence [1]'],acc:'',kw:['grip','lever','large print','independence'],tip:'Link each observation to a feature.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'2.1.3',q:'Apply Table 2 to calculate the total time of steps 3 to 5 and the percentage of this time that step 3 takes.',award:'Award [1] each.',pts:['85 + 40 + 15 = <b>140 s</b> [1]','85 ÷ 140 × 100 = <b>61%</b> [1]'],acc:'Accept 60.7%.',kw:['140 s','61%'],tip:''},
 {l:'(d)',cmd:'Describe',marks:3,ref:'2.1.5',q:'Describe a primary persona for Mr Hassan that would help the design team.',award:'Award [1] for each valid point up to [3 max].',pts:['Age, living situation and health, for example 76, lives alone, five medicines a day [1]','Goals and frustrations, for example wants independence but struggles with packaging and small print [1]','Design implications, for example large labels, one-hand opening and reminders [1]'],acc:'',kw:['76','goals','frustrations','implications'],tip:'Based on the research.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'2.1.13',q:'Evaluate the fidelity of model the team should use to test a first idea for the opening mechanism.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['A <b>low-fidelity</b> foam or card model is cheap and quick to change [1]','It can test <b>grip size and force</b> with real users [1]','But it cannot show the <b>real material, spring force or reliability</b> [1]','A <b>3D printed medium-fidelity</b> model with a working lever gives better data [1]','Decision: start low fidelity, then move to a working 3D printed prototype for user testing [1]'],acc:'',kw:['low-fidelity','grip','spring','3D printed','decision'],tip:'Match fidelity to what you need to learn.'}
 ]},

{id:'cs3',title:'Case study 3: Developing a bicycle light',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A company develops a rechargeable bicycle light using three model, test, refine cycles. The design specification contains 8 criteria. Each model is tested with 10 cyclists and the number of criteria met is recorded (Figure 3). Cycle 1 used a foam mock-up, cycle 2 a 3D printed prototype with a working LED and clip, and cycle 3 a high-fidelity prototype with the final casing and battery. Data is illustrative.</p>`,
 fig:Fig.bars([['1: Foam mock-up',3],['2: 3D printed',5],['3: High fidelity',8]],{title:'Specification criteria met (out of 8)',unit:'',lw:150,max:8,hl:[2]}),
 cap:'Figure 3: Criteria met in each cycle.',
 table:`<table class="t"><tr><th colspan="4">Table 3: Cycles</th></tr><tr><th>Cycle</th><th>What was tested</th><th>Main finding</th><th>Change made</th></tr><tr><td>1</td><td>Size and mounting on handlebar</td><td>Clip too tight on thick bars</td><td>Adjustable rubber strap</td></tr><tr><td>2</td><td>Brightness and ease of switching</td><td>Button hard to find with gloves</td><td>Larger raised button</td></tr><tr><td>3</td><td>Battery life and waterproofing</td><td>Meets all criteria</td><td>Prepare drawings</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'2.1.12',q:'Apply Figure 3 to calculate the percentage of the specification met in each cycle.',award:'Award [1] each.',pts:['3 ÷ 8 = <b>37.5%</b> [1]','5 ÷ 8 = <b>62.5%</b> [1]','8 ÷ 8 = <b>100%</b> [1]'],acc:'Accept 38%.',kw:['37.5%','62.5%','100%'],tip:''},
 {l:'(b)',cmd:'Explain',marks:3,ref:'2.1.13',q:'Explain why a foam mock-up was suitable for cycle 1.',award:'Award [1] for each valid point up to [3 max].',pts:['It is <b>cheap and quick</b> to make [1]','It can test <b>size, fit and mounting</b> on real handlebars [1]','The design can be changed easily before more money is spent [1]'],acc:'',kw:['cheap','size','fit','changed'],tip:''},
 {l:'(c)',cmd:'Describe',marks:3,ref:'2.1.12',q:'Describe how testing in cycle 2 led to a design improvement.',award:'Award [1] for each valid point up to [3 max].',pts:['Cyclists tested the light with <b>gloves</b> [1]','The <b>button was hard to find</b> (a usability problem) [1]','The design was refined with a <b>larger raised button</b> [1]'],acc:'',kw:['gloves','button','raised'],tip:'Test, finding, change.'},
 {l:'(d)',cmd:'Explain',marks:4,ref:'2.1.14',q:'Explain what drawings should be produced for the manufacturer after cycle 3.',award:'Award [1] for each valid point up to [4 max].',pts:['<b>Orthographic</b> drawings with dimensions and tolerances [1]','An <b>exploded view</b> showing how casing, LED, battery and clip assemble [1]','A <b>sectional view</b> to show internal seals and the battery [1]','Materials and part list so the product can be made accurately [1]'],acc:'',kw:['orthographic','exploded','sectional','tolerances'],tip:'Think of what a manufacturer needs.'},
 {l:'(e)',cmd:'Justify',marks:5,ref:'2.1.15',q:'Justify the use of three iterations before manufacturing the bicycle light.',award:'Award [1] for each valid reason up to [5 max].',pts:['Each cycle raised the criteria met from 37.5% to 100%, showing <b>measurable improvement</b> [1]','Early cheap models <b>found problems</b> before costly tooling [1]','Testing with real users revealed <b>usability issues</b> such as the button with gloves [1]','The final prototype was verified against <b>all specifications</b> [1]','The cost of three cycles is small compared with recalling a faulty product [1]'],acc:'',kw:['improvement','cheap','users','specifications','cost'],tip:'Use the data and the findings.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · SL + HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'2.1.1',q:'State the stage in which a problem statement is produced.',award:'Award [1].',pts:['<b>Define the project</b> [1]'],acc:'',kw:['define'],tip:''},
 {l:'2',cmd:'Identify',marks:1,ref:'2.1.3',q:'Identify one primary research method.',award:'Award [1].',pts:['Interview, survey, observation, focus group, user trial, material testing or product analysis [1]'],acc:'',kw:['interview','survey'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'2.1.4',q:'Outline one reason for using secondary research.',award:'Award [1] each.',pts:['It gives <b>background information</b> quickly and cheaply [1]','It can <b>validate</b> primary findings [1]'],acc:'',kw:['background','validate'],tip:''},
 {l:'4',cmd:'Describe',marks:2,ref:'2.1.6',q:'Describe what a pain point is.',award:'Award [1] each.',pts:['A step in a user’s journey where they are <b>frustrated, delayed or at risk</b> [1]','It signals a <b>design opportunity</b> [1]'],acc:'',kw:['frustrated','opportunity'],tip:''},
 {l:'5',cmd:'State',marks:2,ref:'2.1.9',q:'State the difference between an essential and a desirable specification.',award:'Award [1] each.',pts:['Essential: <b>must</b> be met [1]','Desirable: <b>would be good</b> but not required [1]'],acc:'',kw:['must','would be good'],tip:''},
 {l:'6',cmd:'Outline',marks:2,ref:'2.1.13',q:'Outline what is meant by fidelity of a model.',award:'Award [1] each.',pts:['How <b>closely a model matches</b> the final product [1]','Ranges from low to high [1]'],acc:'',kw:['closely','low','high'],tip:''},
 {l:'7',cmd:'Describe',marks:2,ref:'2.1.14',q:'Describe the purpose of an exploded view.',award:'Award [1] each.',pts:['Shows <b>how parts fit together</b> [1]','Used for assembly and instructions [1]'],acc:'',kw:['fit together','assembly'],tip:''},
 {l:'8',cmd:'Apply',marks:2,ref:'2.1.3',q:'In a survey of 50 people, 18 prefer a red button. Apply the data to calculate the percentage.',award:'Award [1] each.',pts:['18 ÷ 50 × 100 [1]','= <b>36%</b> [1]'],acc:'',kw:['36%'],tip:''}
 ]},

paper:[]
};
