window.TOPICS=window.TOPICS||{};
window.TOPICS['b1-1']={
id:'b1-1',code:'B1.1',title:'User-centred design',level:'SL + HL',hours:4,
guiding:'How does understanding user needs directly impact the design of products and services?',
pptx:'resources/B1_1_User-Centred_Design_1.pptx',pptxName:'B1.1 User-centred design (slides)',

notes:[
{id:'s111',ref:'1.1.1',title:'Planning a user-centred design (UCD) process',
 must:'Construct a plan for a UCD process based on research questions that engage with user-centred research methods.',
 html:`
<p><b>User-centred design (UCD)</b> is a design process that pays particular attention to the needs of the people who will use a product. Users are involved <b>through all stages</b>: research, concept, prototype and testing. It is sometimes called “empathic design”.</p>
<div class="key"><b>Principles of UCD:</b> design is based on an explicit understanding of users, tasks and environments; users are involved throughout; evaluation with users drives and refines the design; the process is <b>iterative</b>; it addresses the whole user experience; the team has multidisciplinary skills.</div>
<h3>Building a UCD plan</h3>
<div class="tw"><table class="t"><tr><th>Step</th><th>What you do</th><th>Example: school lunchbox</th></tr>
<tr><td>1. Define the users</td><td>Who are you designing for?</td><td>Primary school students and their parents</td></tr>
<tr><td>2. Write research questions</td><td>What do you need to know?</td><td>“What problems do students face when using lunchboxes?”</td></tr>
<tr><td>3. Choose methods</td><td>Match each method to a question</td><td>Observation at lunch; survey for parents; interviews with students</td></tr>
<tr><td>4. Plan the stages</td><td>Research → analysis → design → prototype and test → refine</td><td>Survey first, then observation, then concepts</td></tr>
<tr><td>5. Justify</td><td>Say why these methods suit this user group</td><td>Young children cannot always explain, so watch them</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> Research question: “What physical challenges do parents face when carrying infants?” Methods: observe parents using existing carriers; interview new parents; analyse posture and strain. Personas: first-time urban parent, active outdoor parent, parent with a physical limitation. Product focus: an ergonomic, adaptable baby carrier.</div>
<div class="tip"><b>Exam tip.</b> A good plan links <b>each research question to a method and to a stage</b>, and justifies the choice with reference to the user group (age, ability, setting).</div>`},

{id:'s112',ref:'1.1.2',title:'User-centred research methods',
 must:'Apply field research, user observation, interviews, questionnaires and focus groups and analyse data to establish users’ characteristics, behaviours, wants and needs.',
 html:`
<div class="cols"><div class="box"><h4>Primary research</h4><p>Original data you collect yourself from the target users: observations, interviews, questionnaires, focus groups, user trials, field trials.</p></div>
<div class="box"><h4>Secondary research</h4><p>Existing information collected for another purpose: books, articles, websites, forums, reports. Quicker and cheaper but may not fit your user.</p></div></div>
<div class="tw"><table class="t"><tr><th>Method</th><th>What it is</th><th>Data</th><th>Strength</th><th>Limit</th></tr>
<tr><td><b>Field research</b></td><td>Studying users in their own environment (home, work, shop)</td><td>Mainly qualitative</td><td>Shows what people <b>actually do</b>, not what they say</td><td>Costly and time-consuming</td></tr>
<tr><td><b>User observation</b></td><td>Watching users use a product or do a task, with little interference</td><td>Qualitative and quantitative (times, errors)</td><td>Reveals unexpected use and misuse</td><td>Observer effect; interpretation can be subjective</td></tr>
<tr><td><b>Interviews</b></td><td>One-to-one conversation: structured, semi-structured or unstructured</td><td>Qualitative</td><td>Deep insight into feelings and reasons</td><td>Small sample; time to transcribe; interviewer bias</td></tr>
<tr><td><b>Questionnaires</b></td><td>Set questions (closed, Likert scale, open)</td><td>Quantitative and some qualitative</td><td>Large samples quickly and cheaply</td><td>Cannot probe; poor questions give poor data</td></tr>
<tr><td><b>Focus groups</b></td><td>Facilitated discussion with a small group</td><td>Qualitative</td><td>Diverse opinions and ideas; compare views</td><td>Dominant voices; group-think</td></tr></table></div>
<h3>Demographics and sampling</h3>
<p><b>Demographic data</b> describes a population: age, gender, income, education, occupation, location. Sample users to match the target population. The <b>method of extremes</b> picks users from the extremes of a range (for example the 2.5th and 97.5th percentile) plus a middle value, so that the design works for the whole range.</p>
<div class="ex"><b class="l">Analysing data.</b> A survey of 50 users: 35 find the handle hard to grip. Percentage = 35 ÷ 50 × 100 = <b>70%</b>. Qualitative comments are grouped into themes (for example “too heavy”, “slippery”) using an <b>affinity diagram</b>: write each comment on a note, cluster similar notes, label the clusters.</div>
<h3>Related methods</h3>
<ul class="tight"><li><b>User trials</b>: users test a product over time and give comments.</li><li><b>Participatory design</b>: users help design, not just comment.</li><li><b>Paper prototyping</b>: low-fidelity paper versions tested with users; cheap and quick to change.</li><li><b>Usability lab or natural environment</b>: a lab gives control; testing at home or work gives realistic behaviour.</li></ul>
<div class="tip"><b>Exam tip.</b> Match the method to the question: use observation for “what do they do”, interviews for “why”, questionnaires for “how many”.</div>`},

{id:'s113',ref:'1.1.3',title:'Personae, use cases and scenarios',
 must:'Create a primary persona or personae based on user-centred research to aid design development.',
 html:`
<p>A <b>persona</b> is a fictional person who represents a major group of users. It is based on research data, and has a name, photo, age, background, goals, frustrations and behaviours. Personas give a human face to “the user” and keep the team focused on real needs.</p>
<div class="tw"><table class="t"><tr><th>Type</th><th>Meaning</th></tr>
<tr><td><b>Primary persona</b></td><td>The main target user whose needs must be met</td></tr>
<tr><td><b>Secondary persona</b></td><td>Not the main target but the product should still meet their needs; offers other insights</td></tr>
<tr><td><b>Anti-persona</b></td><td>Someone the product is <b>not</b> designed for (helps define limits)</td></tr></table></div>
<h3>Creating a persona from research</h3>
<ol class="tight"><li><b>Gather</b> data (interviews, surveys, observation, focus groups).</li><li><b>Analyse</b> for patterns: common needs, pain points, behaviours.</li><li><b>Segment</b> users into groups with shared characteristics.</li><li><b>Write</b> the persona: demographics, context, goals, frustrations, quote, and how the product fits their life.</li></ol>
<div class="ex"><b class="l">Mini persona.</b> <b>Amira, 34, first-time parent, lives in a flat in Dubai.</b> Uses public transport. Goal: carry her baby hands-free in shopping malls. Frustration: straps are hard to adjust alone. Survey: 70% of parents report back pain. Design implication: single-hand adjustment, padded lumbar support.</div>
<h3>Use cases and scenarios</h3>
<ul class="tight"><li>A <b>use case</b> describes who uses the product, what they want to do, the steps they take and how the product responds.</li><li>A <b>scenario or user story</b> is an imagined sequence of events in a persona’s day: best, average and worst cases. A good one has a character, back-story, actions and responses, and a result.</li></ul>
<div class="tip"><b>Exam tip.</b> A persona must be <b>based on data</b>, not invented. Link at least two research findings to features in the design.</div>`},

{id:'s114',ref:'1.1.4',title:'Five usability objectives',
 must:'Explain and apply the five usability objectives (learnability, efficiency, memorability, errors and satisfaction) to evaluate a product.',
 html:`
<p><b>Usability</b> is how effectively and efficiently specific users can reach their goals with a product, and how satisfying it is to use.</p>
<div class="tw"><table class="t"><tr><th>Objective</th><th>Question</th><th>How to measure</th><th>Example</th></tr>
<tr><td><b>Learnability</b></td><td>Can a new user work it out quickly?</td><td>Time and help needed on the first attempt</td><td>Smartphone icons</td></tr>
<tr><td><b>Efficiency</b></td><td>Can experienced users do tasks fast with few steps?</td><td>Task time, number of steps or clicks</td><td>One-touch “30 seconds” on a microwave</td></tr>
<tr><td><b>Memorability</b></td><td>Can they use it after a break?</td><td>Re-test after days or weeks; compare to earlier time</td><td>ATM sequence</td></tr>
<tr><td><b>Errors</b></td><td>How many mistakes, how serious, how easy to recover?</td><td>Count errors; time to recover</td><td>Undo button; card returned before cash</td></tr>
<tr><td><b>Satisfaction</b></td><td>Is it pleasant and comfortable?</td><td>Rating scales, interviews</td><td>Smooth pairing and comfort of earbuds</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> A ticket machine: first-use average 95 s, second use 48 s, after two weeks 70 s. Learnability: time fell by (95 − 48) ÷ 95 = <b>49%</b>, so users learn quickly. Memorability: after two weeks the task was 22 s slower than the second attempt (46% slower), so users forgot some steps. Improvement: clearer step numbers on the screen.</div>
<div class="tip"><b>Exam tip.</b> To “apply” the objectives, name each one, give evidence from the product or data, and suggest a design improvement.</div>`},

{id:'s115',ref:'1.1.5',title:'Task analysis',
 must:'Apply task analysis techniques to break down a process into steps and identify the critical points for design improvement.',
 html:`
<p><b>Task analysis</b> breaks a task into steps to understand how users carry it out, the order, the skills and resources needed, and where things go wrong. It builds <b>empathy</b> and shows where design can help.</p>
<div class="tw"><table class="t"><tr><th>Type</th><th>Focus</th><th>Example</th><th>Critical point</th></tr>
<tr><td><b>Hierarchical (HTA)</b></td><td>Goal → sub-goals → operations</td><td>Making tea</td><td>Handling boiling water; fix with auto shut-off kettle or cool-touch handle</td></tr>
<tr><td><b>Cognitive</b></td><td>Mental processes: decisions, memory, problem solving</td><td>Air-traffic control</td><td>High cognitive load; add alerts or automation</td></tr>
<tr><td><b>Procedural</b></td><td>Steps, order and conditions of a procedure</td><td>Operating a machine; following a recipe</td><td>Steps done in the wrong order; add interlocks or checklists</td></tr></table></div>
<h3>How to do a task analysis</h3>
<ol class="tight"><li><b>Select the task</b> and define its start and end.</li><li><b>Break it into steps</b> (observe real users).</li><li><b>Identify critical points</b>: where users hesitate, make errors, are slow, or are at risk.</li><li><b>Propose design improvements</b> for each critical point.</li></ol>
<div class="ex"><b class="l">Worked example: making tea.</b> 0. Make a cup of tea → 1 Fill kettle and boil → 2 Add teabag to cup → 3 Pour water → 4 Remove teabag → 5 Add milk or sugar. Critical points: step 1 (burn risk, overfilling) and step 3 (spill). Improvements: auto shut-off, spout and handle design, fill-level markings.</div>
<div class="tip"><b>Exam tip.</b> Give each critical point a <b>reason</b> and a matching <b>design change</b>.</div>`}
],

cards:[
['User-centred design (UCD)','A design process that involves users at every stage and focuses on their needs.'],
['Empathic design','Another name for UCD: the team gets close to the people they design for.'],
['Research question','A focused question that a design team wants to answer about users.'],
['UCD plan','A structured plan linking users, research questions, methods and stages.'],
['Iterative process','A process repeated several times, improving the design each time.'],
['Primary research','Original data collected directly from users.'],
['Secondary research','Existing information collected for another purpose.'],
['Quantitative data','Numerical data that can be measured.'],
['Qualitative data','Descriptive data about opinions, feelings and reasons.'],
['Field research','Studying users in their own environment.'],
['User observation','Watching users interact with a product with little interference.'],
['Interview','A one-to-one conversation to gather in-depth information.'],
['Questionnaire','A set of questions given to many users to gather data.'],
['Focus group','A facilitated group discussion with target users.'],
['Likert scale','A scale (for example 1 to 5) to rate agreement with a statement.'],
['Demographics','Statistical characteristics of a population such as age, gender and income.'],
['Method of extremes','Choosing users from the extremes of a range plus a middle value.'],
['User trial','Users test a product and give feedback.'],
['Participatory design','Users take part in designing, not just commenting.'],
['Paper prototyping','Low-fidelity paper models tested with users.'],
['Usability lab','A controlled space for observing users test a product.'],
['Affinity diagram','Clustering notes into groups to find themes.'],
['Persona','A fictional user profile based on research data.'],
['Primary persona','The main user whose needs must be met.'],
['Secondary persona','A user who is not the main target but whose needs should be met.'],
['Anti-persona','A user the product is not designed for.'],
['Use case','A description of how a user interacts with a product to achieve a goal.'],
['Scenario (user story)','An imagined sequence of events in the day of a persona.'],
['Usability','How effectively, efficiently and satisfactorily users can reach their goals.'],
['Learnability','How easily a new user can learn to use the product.'],
['Efficiency','How quickly users can do tasks once they have learned the product.'],
['Memorability','How easily users can use the product again after a break.'],
['Errors (usability)','How many mistakes users make, their severity and ease of recovery.'],
['Satisfaction','How pleasant and rewarding the product is to use.'],
['Task analysis','Breaking a task into steps to find critical points for improvement.'],
['Hierarchical task analysis','Breaking a goal into sub-goals and operations.'],
['Cognitive task analysis','Studying the mental processes used in a task.'],
['Procedural task analysis','Studying the steps, order and conditions of a procedure.'],
['Critical point','A step where users struggle, make errors or are at risk.']
],

mcq:[
{ref:'1.1.1',q:'UCD involves users…',o:['Only at the final test','Throughout the design process','Only at the start','Never directly'],a:1,why:'Users take part in all stages.',live:true},
{ref:'1.1.1',q:'The first step of a UCD plan is to…',o:['Define the users and research questions','Build the final product','Choose the colours','Advertise'],a:0,why:'Research starts with who and what you need to know.'},
{ref:'1.1.1',q:'UCD is described as iterative because…',o:['The process repeats and refines the design','It happens only once','It avoids testing','It uses one method'],a:0,why:'Feedback leads to improvement cycles.',live:true},
{ref:'1.1.2',q:'Which is primary research?',o:['An interview with users','A web search','A magazine article','A government report'],a:0,why:'You collect the data directly.',live:true},
{ref:'1.1.2',q:'Which is secondary research?',o:['Reading existing market reports','Observing users','Running a focus group','A user trial'],a:0,why:'The data already exists.'},
{ref:'1.1.2',q:'Which data is qualitative?',o:['“The handle feels slippery”','72% of users were satisfied','Task time 45 s','3 errors'],a:0,why:'Qualitative data is descriptive.',live:true},
{ref:'1.1.2',q:'Field research is mainly useful because it shows…',o:['What users actually do','Only what users say','Only costs','Market share'],a:0,why:'People’s actions often differ from what they say.'},
{ref:'1.1.2',q:'A questionnaire is best for…',o:['Reaching many users quickly','Deep personal insight','Observing posture','Testing a prototype physically only'],a:0,why:'It scales to large samples.',live:true},
{ref:'1.1.2',q:'A disadvantage of focus groups is…',o:['Dominant members can influence others','They give no ideas','They need no facilitator','They are always quantitative'],a:0,why:'Group dynamics can bias the data.'},
{ref:'1.1.2',q:'In a survey of 80 users, 60 find a product hard to open. The percentage is…',o:['75%','60%','25%','133%'],a:0,why:'60 ÷ 80 = 0.75.',live:true},
{ref:'1.1.2',q:'The method of extremes selects users from…',o:['The ends of the range plus a middle value','Only the average','Only the tallest','Random strangers'],a:0,why:'It ensures the whole range is considered.'},
{ref:'1.1.2',q:'An affinity diagram is used to…',o:['Cluster notes into themes','Measure force','Draw a circuit','Calculate cost'],a:0,why:'It organises qualitative data.',live:true},
{ref:'1.1.2',q:'Paper prototyping is…',o:['Low-fidelity testing with users','A final manufacturing process','A type of printing','A material'],a:0,why:'Cheap and quick to change.'},
{ref:'1.1.3',q:'A persona is…',o:['A fictional user profile based on research','A real celebrity','A product feature','A material'],a:0,why:'Personas represent a user group.',live:true},
{ref:'1.1.3',q:'An anti-persona is…',o:['A user the product is not designed for','The main user','A competitor','A client'],a:0,why:'It defines the limits of the target.'},
{ref:'1.1.3',q:'A scenario or user story describes…',o:['A sequence of events in a persona’s life with the product','A circuit','A material test','A cost'],a:0,why:'It shows what the persona does.'},
{ref:'1.1.3',q:'A primary persona is…',o:['The main target user','The least important user','A supplier','A designer'],a:0,why:'Their needs must be addressed.',live:true},
{ref:'1.1.4',q:'Which objective is about using a product after a long break?',o:['Memorability','Learnability','Efficiency','Satisfaction'],a:0,why:'Memorability means remembering how to use it.',live:true},
{ref:'1.1.4',q:'An undo button mainly improves…',o:['Error recovery','Learnability','Efficiency only','Aesthetics only'],a:0,why:'It helps users recover from mistakes.'},
{ref:'1.1.4',q:'One-touch “popcorn” on a microwave improves…',o:['Efficiency','Memorability','Errors only','Cost'],a:0,why:'Fewer steps to do a task.',live:true},
{ref:'1.1.4',q:'Learnability is best measured by…',o:['First-time user performance','Expert speed','Manufacturing cost','Weight'],a:0,why:'It is about new users.'},
{ref:'1.1.4',q:'Which objective relates to comfort and emotional experience?',o:['Satisfaction','Errors','Efficiency','Learnability'],a:0,why:'Satisfaction is about enjoyment.',live:true},
{ref:'1.1.4',q:'The first time, a task takes 80 s and the second time 40 s. The reduction is…',o:['50%','40%','100%','25%'],a:0,why:'(80 − 40) ÷ 80 = 50%.'},
{ref:'1.1.5',q:'Task analysis breaks a task into…',o:['Steps or sub-tasks','Materials','Costs','Colours'],a:0,why:'To find critical points.',live:true},
{ref:'1.1.5',q:'In hierarchical task analysis, the highest level is the…',o:['Overall goal','Final operation','Cost','Material'],a:0,why:'It is then broken into sub-goals.'},
{ref:'1.1.5',q:'Air-traffic control is best analysed by…',o:['Cognitive task analysis','Procedural task analysis only','Cost analysis','Material testing'],a:0,why:'It involves complex decisions and mental load.',live:true},
{ref:'1.1.5',q:'A critical point in a task is where…',o:['Users struggle, make errors or are at risk','The task ends','The cost is calculated','A persona is named'],a:0,why:'These are targets for design improvement.'},
{ref:'1.1.5',q:'Which is a design improvement for a boiling-water risk?',o:['Auto shut-off and cool-touch handle','A larger logo','A darker colour','A longer cable only'],a:0,why:'It reduces burn risk.',live:true}
],

fib:[
{ref:'1.1.1',t:'In UCD, users are involved at [[all|every]] stages and the process is [[iterative]].'},
{ref:'1.1.2',t:'[[Primary]] research is original data collected directly from users.'},
{ref:'1.1.2',t:'[[Qualitative]] data is descriptive, whereas [[quantitative]] data is numerical.'},
{ref:'1.1.2',t:'[[Field]] research studies users in their own environment.'},
{ref:'1.1.2',t:'A [[questionnaire]] can collect data from a large number of users quickly.'},
{ref:'1.1.2',t:'A facilitated discussion with a small group of users is a [[focus]] group.'},
{ref:'1.1.2',t:'An [[affinity]] diagram clusters notes into themes.'},
{ref:'1.1.3',t:'A [[persona]] is a fictional user profile based on research data.'},
{ref:'1.1.3',t:'An [[anti-persona|anti persona]] is a user the product is not designed for.'},
{ref:'1.1.4',t:'The five usability objectives are learnability, efficiency, [[memorability]], errors and [[satisfaction]].'},
{ref:'1.1.4',t:'[[Learnability]] describes how easily a new user can learn a product.'},
{ref:'1.1.5',t:'[[Task]] analysis breaks a process into steps to find critical points.'},
{ref:'1.1.5',t:'[[Hierarchical]] task analysis breaks a goal into sub-goals and operations.'},
{ref:'1.1.5',t:'[[Cognitive]] task analysis focuses on mental processes such as decisions and memory.'},
{ref:'1.1.5',t:'A [[critical]] point is a step where users struggle, make errors or are at risk.'}
],

theory:[
{ref:'1.1.1',cmd:'Outline',marks:4,q:'Outline the main elements of a plan for a UCD process.',
 pts:['Define the <b>users</b> and write <b>research questions</b> [1]','Select <b>research methods</b> that suit each question and the user group [1]','Plan the <b>stages</b>: analysis, concepts, prototype and testing with users [1]','<b>Iterate</b>: refine the design from feedback [1]'],
 award:'Award [1] for each valid element up to [4 max].',kw:['users','research questions','methods','prototype','iterate'],acc:'Accept “create personas” as an element.',tip:'Move from who, to what to ask, to how, to what next.'},
{ref:'1.1.1',cmd:'Construct',marks:6,q:'Construct a UCD research plan for a new school water bottle for children aged 7 to 10.',
 pts:['Users: children aged 7 to 10, parents and teachers [1]','Research question, for example “What problems do pupils have opening, carrying and cleaning bottles?” [1]','Method 1: <b>observation</b> of pupils at break time (young children may not explain problems) [1]','Method 2: <b>questionnaire</b> for parents about cleaning and durability, or <b>interviews</b> with pupils [1]','Stages: analyse data, create personas, develop concepts, <b>prototype</b> and test with pupils [1]','Justification linking methods to the age group and a plan to <b>refine</b> after testing [1]'],
 award:'Award [1] for each valid element up to [6 max]. Reward a plan with justification.',kw:['observation','questionnaire','persona','prototype','refine'],acc:'Accept other reasonable methods if justified.',tip:'Link each method to the user group.'},
{ref:'1.1.2',cmd:'Explain',marks:4,q:'Explain why field research may give more reliable information about how people use a kitchen product than a questionnaire.',
 pts:['Field research shows <b>actual behaviour</b> in the real environment [1]','People often say they do something differently from what they <b>actually do</b> [1]','Observation reveals <b>unexpected problems</b> and workarounds that people do not mention [1]','A questionnaire relies on <b>self-reporting</b> and cannot capture context [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['actual behaviour','environment','self-reporting','context'],acc:'',tip:'Say vs do.'},
{ref:'1.1.2',cmd:'Apply',marks:3,q:'A questionnaire is completed by 120 users. 90 say the bottle lid is hard to open and 48 say it leaks. Apply the data to calculate the percentage for each problem and state which is the main concern.',
 pts:['Hard to open: 90 ÷ 120 × 100 = <b>75%</b> [1]','Leaks: 48 ÷ 120 × 100 = <b>40%</b> [1]','The lid being hard to open is the <b>main concern</b> [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['75%','40%','main concern'],acc:'',tip:'Divide by the total number of users.'},
{ref:'1.1.2',cmd:'Explain',marks:4,q:'Explain two advantages and two limitations of using focus groups to evaluate a prototype.',
 pts:['Advantage: users compare views and generate <b>new ideas</b> [1]','Advantage: shows <b>diverse opinions</b> quickly in one session [1]','Limitation: <b>dominant members</b> may influence others [1]','Limitation: results are <b>qualitative</b> and from a small sample, so not statistically reliable [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['ideas','diverse','dominant','qualitative','sample'],acc:'',tip:'Two of each.'},
{ref:'1.1.3',cmd:'Describe',marks:4,q:'Describe how research data is used to create a primary persona.',
 pts:['<b>Gather</b> data from interviews, surveys and observation [1]','<b>Analyse</b> it for patterns, needs and pain points [1]','Group users into segments with <b>shared characteristics</b> [1]','Write a persona with a name, demographics, goals and frustrations that represents the main group [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['gather','analyse','patterns','segments','goals'],acc:'',tip:'Data first, persona second.'},
{ref:'1.1.3',cmd:'Explain',marks:3,q:'Explain why designers use both primary and anti-personae.',
 pts:['A <b>primary persona</b> focuses the team on the main user’s needs [1]','An <b>anti-persona</b> shows who the product is not for, so the team does not try to satisfy everyone [1]','Together they <b>prioritise features</b> and avoid over-complex designs [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['primary persona','anti-persona','prioritise','focus'],acc:'',tip:'One point for each, one for the combined effect.'},
{ref:'1.1.4',cmd:'Explain',marks:5,q:'Explain the five usability objectives with reference to an ATM.',
 pts:['<b>Learnability</b>: clear on-screen instructions let new users start quickly [1]','<b>Efficiency</b>: fast-cash options reduce steps [1]','<b>Memorability</b>: the same sequence (card, PIN, amount, cash) is easy to recall after weeks [1]','<b>Errors</b>: the card is returned before the cash, and a cancel option allows recovery [1]','<b>Satisfaction</b>: a clear display and comfortable height make use pleasant [1]'],
 award:'Award [1] for each objective explained with an ATM example up to [5 max].',kw:['learnability','efficiency','memorability','errors','satisfaction'],acc:'',tip:'Name, then product evidence.'},
{ref:'1.1.4',cmd:'Apply',marks:4,q:'A ticket machine is tested. First use takes 95 s, the second use 48 s and a retest after two weeks 70 s. Apply the usability objectives to evaluate the machine and suggest one improvement.',
 pts:['Learnability: time fell by 49% from the first to the second use, so it is <b>learned fairly quickly</b> [1]','Memorability: after two weeks time rose by 22 s, so some steps are <b>forgotten</b> [1]','Efficiency: 48 s is still long for a simple purchase, so there may be <b>too many steps</b> [1]','Improvement: <b>number the steps</b> or reduce them with a quick-buy button [1]'],
 award:'Award [1] for each point up to [4 max]. Follow-through applies.',kw:['49%','forgotten','steps','improvement'],acc:'',tip:'Use the numbers.'},
{ref:'1.1.5',cmd:'Outline',marks:4,q:'Outline the steps of a task analysis.',
 pts:['<b>Select the task</b> with a clear start and end [1]','<b>Break it into steps</b> by observing users [1]','<b>Identify critical points</b> such as errors, delays or risks [1]','<b>Propose design improvements</b> for those points [1]'],
 award:'Award [1] for each step up to [4 max].',kw:['select','break','critical points','improvements'],acc:'',tip:'Four steps in order.'},
{ref:'1.1.5',cmd:'Apply',marks:5,q:'Apply hierarchical task analysis to the task “use a kettle to make a hot drink” and identify two critical points with design improvements.',
 pts:['Goal: make a hot drink [1]','Sub-tasks listed in order, for example fill, boil, pour, add to cup [1]','Critical point 1: <b>burn or scald risk</b> when pouring [1]','Improvement: <b>cool-touch handle</b>, spout design or auto shut-off [1]','Critical point 2 with improvement, for example overfilling → <b>fill-level markings</b> [1]'],
 award:'Award [1] for each valid point up to [5 max].',kw:['goal','sub-tasks','burn','cool-touch','fill-level'],acc:'',tip:'Goal, steps, risk, fix.'},
{ref:'1.1.5',cmd:'Explain',marks:4,q:'Explain the difference between hierarchical and cognitive task analysis.',
 pts:['<b>Hierarchical</b> breaks a task into goals, sub-goals and operations [1]','It is suited to physical, multi-step tasks such as making tea [1]','<b>Cognitive</b> studies mental processes such as decisions, memory and attention [1]','It is suited to tasks with high mental load, such as air-traffic control [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['hierarchical','sub-goals','cognitive','mental','decisions'],acc:'',tip:'Define each and give an example.'},
{ref:'1.1.1',cmd:'Evaluate',marks:6,q:'Evaluate the use of a UCD approach for designing a wheelchair-accessible bus.',
 pts:['Strength: involving users <b>reveals real needs</b> (ramps, space, securing straps) [1]','Strength: testing prototypes with users <b>reduces costly mistakes</b> [1]','Strength: improves <b>satisfaction and inclusion</b> [1]','Limitation: research and testing take <b>time and money</b> [1]','Limitation: different users’ needs may <b>conflict</b> and need compromise [1]','Judgement: benefits outweigh the costs because safety and inclusion are critical [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['needs','prototypes','inclusion','time and money','conflict','judgement'],acc:'Maximum [6].',tip:'Weigh benefits against cost and time.'}
],

practice:[
{id:'cs1',title:'Case study 1: Designing a baby carrier',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A company wants to redesign its baby carrier. The design team surveys 60 parents with a questionnaire, interviews 8 parents, and observes 6 parents using carriers at a park. The questionnaire results are shown in Figure 1 (number of parents out of 60 reporting each problem). Three personas are created: a first-time urban parent, an active outdoor parent and a parent with a physical limitation. Data is illustrative.</p>`,
 fig:Fig.bars([['Back or shoulder pain',42],['Hard to adjust straps',33],['Too hot for baby',27],['Buckle hard to fasten',18]],{title:'Parents reporting each problem (out of 60)',unit:'',lw:170,max:60,hl:[0]}),
 cap:'Figure 1: Questionnaire results.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Research methods used</th></tr><tr><th>Method</th><th>Number of users</th><th>Data type</th></tr><tr><td>Questionnaire</td><td>60</td><td>Mainly quantitative</td></tr><tr><td>Interviews</td><td>8</td><td>Qualitative</td></tr><tr><td>Observation</td><td>6</td><td>Qualitative</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:2,ref:'1.1.2',q:'Apply Figure 1 to calculate the percentage of parents who reported back or shoulder pain, and the percentage who reported that straps are hard to adjust.',award:'Award [1] each.',pts:['42 ÷ 60 × 100 = <b>70%</b> [1]','33 ÷ 60 × 100 = <b>55%</b> [1]'],acc:'',kw:['70%','55%'],tip:'Divide by 60.'},
 {l:'(b)',cmd:'Explain',marks:3,ref:'1.1.2',q:'Explain why the team also used interviews and observation as well as a questionnaire.',award:'Award [1] for each valid point up to [3 max].',pts:['Interviews give <b>reasons and detail</b> that a questionnaire cannot [1]','Observation shows <b>actual use</b>, including problems parents do not mention [1]','Using several methods <b>cross-checks</b> the data and improves reliability [1]'],acc:'',kw:['reasons','actual use','cross-check'],tip:'Different methods answer different questions.'},
 {l:'(c)',cmd:'Describe',marks:3,ref:'1.1.3',q:'Describe a primary persona for the first-time urban parent, using the data in Figure 1.',award:'Award [1] for each valid point up to [3 max].',pts:['Name, age and context, for example a first-time parent living in a flat who uses public transport [1]','Goals and frustrations using data, for example <b>70% report pain</b> so wants good back support [1]','Design implication, for example <b>single-hand strap adjustment</b> [1]'],acc:'',kw:['name','goals','frustrations','70%','implication'],tip:'Use at least one number from the research.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'1.1.4',q:'The buckle was hard to fasten for 30% of parents. Explain which usability objectives this affects and one improvement.',award:'Award [1] for each valid point up to [3 max].',pts:['<b>Efficiency</b>: more time and effort to fasten [1]','<b>Errors</b> or safety: a badly fastened buckle could be dangerous [1]','Improvement: a <b>magnetic or one-hand buckle</b> with audible click [1]'],acc:'',kw:['efficiency','errors','safety','one-hand'],tip:'Name the objective, then link it to the problem.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'1.1.1',q:'Evaluate the research plan used by the team.',award:'Award [1] for each valid point up to [5 max]. Reward a judgement.',pts:['Strength: <b>mixed methods</b> give both numbers and reasons [1]','Strength: observation in a real setting shows actual behaviour [1]','Limitation: the sample of 8 and 6 is <b>small</b>, so qualitative findings may not represent all parents [1]','Limitation: the sample may not include fathers or grandparents (<b>demographic gaps</b>) [1]','Judgement: a good plan, but widen the sample and test prototypes with users [1]'],acc:'',kw:['mixed methods','small','demographic','prototype','judgement'],tip:'Strengths, limits, decision.'}
 ]},

{id:'cs2',title:'Case study 2: A railway ticket machine',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A railway company evaluates a new ticket machine. Ten first-time users each buy a ticket three times: on day 1 (attempt 1), straight afterwards (attempt 2), and again after two weeks (attempt 3). The mean times are shown in Figure 2. Observers also record errors, and users rate satisfaction from 1 (very poor) to 5 (very good). Data is illustrative.</p>`,
 fig:Fig.bars([['Attempt 1 (day 1)',95],['Attempt 2 (day 1)',48],['Attempt 3 (two weeks)',70]],{title:'Mean time to buy a ticket (s)',unit:' s',lw:170,max:110,hl:[2]}),
 cap:'Figure 2: Mean task time.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Other results (mean of 10 users)</th></tr><tr><th>Measure</th><th>Attempt 1</th><th>Attempt 3</th></tr><tr><td>Errors per user</td><td>3.2</td><td>1.8</td></tr><tr><td>Satisfaction (1 to 5)</td><td>2.9</td><td>3.6</td></tr><tr><td>Steps to complete</td><td>12</td><td>12</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'1.1.4',q:'Apply Figure 2 to calculate the percentage reduction in time between attempts 1 and 2, and the increase between attempts 2 and 3.',award:'Award [1] for each calculation and [1] for the units or conclusion.',pts:['(95 − 48) ÷ 95 × 100 = <b>49%</b> [1]','(70 − 48) ÷ 48 × 100 = <b>46%</b> [1]','Both calculated as percentage of the correct starting value [1]'],acc:'Accept 49.5% and 45.8%.',kw:['49%','46%'],tip:'Percentage change = difference ÷ starting value.'},
 {l:'(b)',cmd:'Explain',marks:4,ref:'1.1.4',q:'Explain what Figure 2 shows about learnability and memorability.',award:'Award [1] for each valid point up to [4 max].',pts:['Time almost <b>halved</b> from attempt 1 to 2, so users <b>learn quickly</b> [1]','So learnability is reasonably good once the user has tried once [1]','After two weeks time <b>rose to 70 s</b>, showing users <b>forgot</b> some steps [1]','So memorability is only moderate [1]'],acc:'',kw:['halved','learn quickly','70 s','forgot'],tip:'Use the data in each sentence.'},
 {l:'(c)',cmd:'Analyse',marks:3,ref:'1.1.4',q:'Analyse Table 2 to identify the usability objectives that need most attention.',award:'Award [1] for each valid point up to [3 max].',pts:['<b>Errors</b> are still 1.8 per user at attempt 3, so error prevention needs work [1]','<b>Efficiency</b>: 12 steps is high for a simple purchase [1]','<b>Satisfaction</b> of 3.6 out of 5 is only moderate [1]'],acc:'',kw:['errors','1.8','12 steps','satisfaction'],tip:'Pick the weakest scores.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.1.5',q:'Describe a task analysis for buying a ticket, identifying one critical point and a design improvement.',award:'Award [1] for each valid point up to [3 max].',pts:['Steps: select destination → ticket type → passengers → pay → collect ticket [1]','Critical point: <b>selecting ticket type</b>, where users make errors or hesitate [1]','Improvement: show <b>pictures or a simple default</b>, or a confirmation screen before payment [1]'],acc:'',kw:['steps','critical point','confirmation'],tip:'List steps in order.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'1.1.4',q:'Evaluate the usability of the ticket machine and recommend changes.',award:'Award [1] for each valid point up to [5 max]. Reward a recommendation.',pts:['Strength: time and errors <b>fall with practice</b> [1]','Strength: satisfaction improves to 3.6 [1]','Weakness: <b>time rose again</b> after a break, so steps are not memorable [1]','Weakness: <b>12 steps</b> and 1.8 errors suggest inefficiency [1]','Recommendation: reduce steps, add clear numbering and an undo or back button, and retest with users [1]'],acc:'',kw:['practice','satisfaction','memorable','12 steps','retest'],tip:'Use evidence for each point.'}
 ]},

{id:'cs3',title:'Case study 3: Task analysis of a self-service check-in kiosk',paper:'Paper 2 style · SL + HL',
 scenario:`<p>An airport introduces self-service check-in kiosks. Researchers observe 20 passengers and analyse the task with hierarchical task analysis (Figure 3). Many passengers struggle at the passport scanning step, and elderly passengers have difficulty reading the small text. Data is illustrative.</p>`,
 fig:Fig.flow(['Start: scan booking','Select flight','Scan passport','Choose seat','Print boarding pass'],{per:5,bw:86,bh:58,hl:[2],title:'Task steps (critical point highlighted)'}),
 cap:'Figure 3: Task analysis of kiosk check-in.',
 table:`<table class="t"><tr><th colspan="3">Table 3: Observation of 20 passengers</th></tr><tr><th>Step</th><th>Passengers needing help</th><th>Mean time (s)</th></tr><tr><td>Scan booking</td><td>2</td><td>10</td></tr><tr><td>Select flight</td><td>3</td><td>15</td></tr><tr><td>Scan passport</td><td>11</td><td>45</td></tr><tr><td>Choose seat</td><td>4</td><td>20</td></tr><tr><td>Print boarding pass</td><td>1</td><td>8</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'1.1.5',q:'Identify the critical point in the task, using Table 3.',award:'Award [1].',pts:['<b>Scan passport</b> [1]'],acc:'',kw:['scan passport'],tip:'Largest help count and time.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'1.1.5',q:'Apply Table 3 to calculate the total mean time for the task and the percentage taken by the passport step.',award:'Award [1] each.',pts:['Total = 10 + 15 + 45 + 20 + 8 = <b>98 s</b> [1]','45 ÷ 98 × 100 [1]','= <b>46%</b> [1]'],acc:'Accept 45.9%.',kw:['98 s','46%'],tip:'Add, then divide.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.1.5',q:'Explain why 11 out of 20 passengers needing help at the passport step is evidence for a design change.',award:'Award [1] for each valid point up to [3 max].',pts:['55% of users (11 ÷ 20) could not complete the step alone [1]','This is a <b>usability error</b> that slows the task and creates queues [1]','A design change would improve <b>efficiency and satisfaction</b> [1]'],acc:'',kw:['55%','errors','efficiency'],tip:'Quantify and link to the objective.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.1.4',q:'Describe two design improvements to the kiosk to help elderly users.',award:'Award [1] for each valid improvement and [1] for a reason, up to [3 max].',pts:['Larger text and high contrast on screen [1]','Animated diagram showing where to place the passport [1]','These improve <b>learnability</b> and reduce errors for older users [1]'],acc:'Accept other inclusive design features.',kw:['larger text','diagram','learnability'],tip:'Link to the user group.'},
 {l:'(e)',cmd:'Discuss',marks:5,ref:'1.1.2',q:'Discuss how the researchers could use two further user-centred research methods to improve the kiosk.',award:'Award [1] for each valid point up to [5 max].',pts:['<b>Interviews</b> with passengers to find out why the passport step was confusing [1]','<b>Focus group</b> with elderly passengers to test new screen layouts [1]','A <b>questionnaire</b> to measure satisfaction before and after the change [1]','Limitation: small samples need care; test with a range of ages and languages [1]','Combine with <b>prototype testing</b> to confirm the improvement [1]'],acc:'',kw:['interviews','focus group','questionnaire','prototype'],tip:'Method, what it adds, limitation.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · SL + HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'1.1.2',q:'State one example of secondary research.',award:'Award [1].',pts:['A <b>literature search</b>, website, forum or report [1]'],acc:'',kw:['literature','website'],tip:''},
 {l:'2',cmd:'Identify',marks:1,ref:'1.1.4',q:'Identify the usability objective that describes how pleasant a product is to use.',award:'Award [1].',pts:['<b>Satisfaction</b> [1]'],acc:'',kw:['satisfaction'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'1.1.3',q:'Outline what a persona is.',award:'Award [1] each.',pts:['A <b>fictional</b> user profile [1]','Based on <b>research data</b> and representing a group of users [1]'],acc:'',kw:['fictional','research'],tip:''},
 {l:'4',cmd:'Apply',marks:2,ref:'1.1.2',q:'In a survey of 40 users, 14 say the product is too heavy. Apply the data to calculate the percentage.',award:'Award [1] each.',pts:['14 ÷ 40 × 100 [1]','= <b>35%</b> [1]'],acc:'',kw:['35%'],tip:''},
 {l:'5',cmd:'Describe',marks:2,ref:'1.1.2',q:'Describe one advantage of using interviews rather than a questionnaire.',award:'Award [1] each.',pts:['Interviews allow <b>follow-up questions</b> [1]','…giving deeper, more detailed insight into reasons [1]'],acc:'',kw:['follow-up','deeper'],tip:''},
 {l:'6',cmd:'Explain',marks:2,ref:'1.1.4',q:'Explain how an undo button improves usability.',award:'Award [1] each.',pts:['Users can <b>recover</b> from mistakes easily [1]','This reduces the effect of <b>errors</b> and frustration [1]'],acc:'',kw:['recover','errors'],tip:''},
 {l:'7',cmd:'Outline',marks:2,ref:'1.1.5',q:'Outline what is meant by a critical point in a task analysis.',award:'Award [1] each.',pts:['A step where users <b>struggle, make errors or are at risk</b> [1]','A target for design improvement [1]'],acc:'',kw:['struggle','improvement'],tip:''},
 {l:'8',cmd:'Describe',marks:2,ref:'1.1.2',q:'Describe what is meant by paper prototyping.',award:'Award [1] each.',pts:['A <b>low-fidelity</b> paper version of a product or interface [1]','Tested with users so changes can be made cheaply [1]'],acc:'',kw:['low-fidelity','cheap'],tip:''}
 ]},

paper:[]
};
