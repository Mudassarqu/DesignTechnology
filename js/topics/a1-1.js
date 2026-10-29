window.TOPICS = window.TOPICS || {};
window.TOPICS['a1-1'] = {
id:'a1-1', code:'A1.1', title:'Ergonomics', level:'SL + HL', hours:10,
guiding:'How do ergonomic considerations influence the design of a product?',
pptx:'resources/A1.1_Ergonomics.pptx', pptxName:'A1.1 Ergonomics (slides)',

/* ===================== NOTES ===================== */
notes:[
{id:'s111',ref:'1.1.1',title:'What ergonomics is',
 must:'Describe how ergonomics is used to improve the design of a product by making it more efficient, usable, functional, effective and safe.',
 html:`
<p><b>Ergonomics</b> is the relationship and interaction between people (aspects of the human body) and the <b>products, systems and environments</b> they use. The word comes from the Greek <i>ergon</i> (work) and <i>nomoi</i> (natural laws). In practice it means refining a design so it fits human needs, abilities and limitations.</p>
<div class="key">A product with good ergonomics is more efficient, usable, functional, effective and safe. Learn those five words. They are the mark scheme.</div>
<div class="tw"><table class="t"><tr><th>Improves…</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Efficient</td><td>Less time and effort for the same result</td><td>A hand tool shaped so the user needs less force</td></tr>
<tr><td>Usable</td><td>Easy to learn and operate</td><td>A clear menu layout on a phone</td></tr>
<tr><td>Functional</td><td>Does the job it was designed for, in the real context</td><td>A kettle handle that stays cool and balances when full</td></tr>
<tr><td>Effective</td><td>The user achieves the goal accurately and completely</td><td>Pedals placed so a driver can brake without looking</td></tr>
<tr><td>Safe</td><td>Reduces injury, strain and error</td><td>Car seat belts, guards on machines</td></tr></table></div>
<h3>Three kinds of ergonomics</h3>
<div class="cols">
<div class="box"><h4>Physical</h4><p>Fit between body and product: posture, repetitive strain, reach. Uses anthropometric data. <i>Chair height matching desk height.</i></p></div>
<div class="box"><h4>Cognitive</h4><p>Fit between mind and product: perception, memory, reaction time. <i>A phone interface that is easy to navigate.</i></p></div>
</div>
<div class="box" style="margin-top:14px"><h4>Organisational</h4><p>Fit between systems and people: communication, work design, teamwork. <i>The workflow in an office or factory.</i></p></div>
<div class="ex"><b class="l">Worked example.</b> A café design uses all three. <b>Physical:</b> table and chair heights. <b>Cognitive:</b> menu and signage that are easy to read and order from. <b>Organisational:</b> the layout of the counter and coffee machines so staff can move and serve without getting in each other’s way.</div>
<div class="tip"><b>Exam tip.</b> Do not stop at the definition. Name a real product, say which of the five qualities improved, and say how.</div>`},

{id:'s112',ref:'1.1.2',title:'Anthropometrics: static and dynamic data',
 must:'Explain and use static and dynamic anthropometric data, and discuss how age, gender, ethnicity and disability affect it.',
 html:`
<p><b>Anthropometrics</b> is the measurement of human physical dimensions, expressed in a percentile range. Designers use it so products are the right size for the people who use them.</p>
<div class="cols">
<div class="box"><h4>Static (structural) data</h4><p>Measured with the person still in a fixed position: height, arm length, hand width, weight.</p><p><b>Easier to collect and more reliable.</b></p></div>
<div class="box"><h4>Dynamic (functional) data</h4><p>Measured while the person moves or performs a task: reach, crawling height, overhead clearance, the space reached by extending limbs (volumetric data, or kinosphere).</p><p><b>Harder to collect but often more useful.</b></p></div></div>
<h3>Types of measurement</h3>
<ul class="tight"><li><b>Skeletal:</b> distance between joint centres.</li><li><b>Stationary physical:</b> height, weight, ear size.</li><li><b>Soft tissue:</b> muscle, fat and skin.</li><li><b>Dynamic:</b> reach, clearance, volumetric data.</li></ul>
<h3>Primary and secondary data</h3>
<p><b>Primary</b> data (field research) is collected by you for your own purpose, for example measuring your target users. <b>Secondary</b> data (desk research) is collected by someone else, for example published tables. Most designers use secondary data, because it is quicker and covers large samples. Choose carefully: data is published by country, age and gender, and Asian and Western European tables can differ a lot.</p>
<h3>Why the data changes between groups</h3>
<ul class="tight"><li><b>Age:</b> children grow, older adults lose height and strength.</li><li><b>Gender:</b> on average men are taller and have larger hands, but the ranges overlap.</li><li><b>Ethnicity:</b> body proportions and head shape vary between populations (a helmet that fits one market may not fit another).</li><li><b>Disability:</b> a wheelchair user has a different seated eye height, reach and clearance needs.</li></ul>
<h3>Why measurements are unreliable</h3>
<ul class="tight"><li>Tools that are poorly calibrated or maintained.</li><li>Untrained people measuring in different places on the body.</li><li>Time of day: spinal discs compress during the day, so a person can be up to about 2.2 mm shorter in the evening.</li><li>Clothing, hats and body shape get in the way.</li><li>People do not carry out tasks in the same way (dynamic data).</li></ul>
<div class="tip"><b>Exam tip.</b> “Explain” needs a reason. Do not write “static is easier”. Write “static is easier because the person stays still, so there is less variation between measurements”.</div>`},

{id:'s113',ref:'1.1.3',title:'Percentiles',
 must:'Identify where the 5th, 50th and 5th–95th percentiles are appropriate for a design scenario.',
 html:`
<p>A <b>percentile</b> is the proportion of the population with a dimension at or below a given value. The <b>5th percentile</b> means 5% of people are this size or smaller. The <b>50th percentile</b> is the middle (the average when the data is a normal bell curve). The <b>95th percentile</b> means 95% are this size or smaller.</p>
<svg viewBox="0 0 520 190" role="img" aria-label="Bell curve with 5th, 50th and 95th percentile marked" style="width:100%;max-width:560px;display:block;margin:10px 0">
<defs><clipPath id="c5"><rect x="0" y="0" width="115" height="150"/></clipPath><clipPath id="c95"><rect x="405" y="0" width="115" height="150"/></clipPath></defs>
<path d="M10 150 C90 150 140 20 260 20 C380 20 430 150 510 150 Z" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
<path d="M10 150 C90 150 140 20 260 20 C380 20 430 150 510 150 Z" fill="var(--mark)" clip-path="url(#c5)"/>
<path d="M10 150 C90 150 140 20 260 20 C380 20 430 150 510 150 Z" fill="var(--mark)" clip-path="url(#c95)"/>
<line x1="115" y1="150" x2="115" y2="70" stroke="var(--ink)" stroke-dasharray="4 3"/><line x1="260" y1="150" x2="260" y2="20" stroke="var(--ink)" stroke-dasharray="4 3"/><line x1="405" y1="150" x2="405" y2="70" stroke="var(--ink)" stroke-dasharray="4 3"/>
<text class="dim" x="115" y="168" text-anchor="middle">5th</text><text class="dim" x="260" y="168" text-anchor="middle">50th</text><text class="dim" x="405" y="168" text-anchor="middle">95th</text>
<text class="dim" x="260" y="186" text-anchor="middle">size of a body dimension (for example arm length)</text></svg>
<h3>Which percentile do I use?</h3>
<div class="tw"><table class="t"><tr><th>You are aiming for…</th><th>Examples</th><th>Measure</th><th>Design for</th></tr>
<tr><td>Easy reach</td><td>Car dashboard, shelving</td><td>Arm length, shoulder height</td><td><b>5th</b> (smallest user)</td></tr>
<tr><td>Easy operation</td><td>Bottle tops, door handles, light switches</td><td>Grip strength, hand width</td><td><b>5th</b> (weakest user)</td></tr>
<tr><td>Clearance</td><td>Door height, inspection covers, cinema seat gap</td><td>Stature, shoulder or hip width, thigh length</td><td><b>95th</b> (largest user)</td></tr>
<tr><td>Prevent access to a hazard</td><td>Machine guard mesh</td><td>Finger width, arm length</td><td><b>5th</b> for finger width (smallest fingers must not fit through) and <b>95th</b> for arm length (longest arm must not reach)</td></tr>
<tr><td>Good match or comfortable posture</td><td>Seats, helmets, monitors, work surface height</td><td>Elbow height, eye height, head circumference</td><td><b>5th to 95th</b> range (adjustable or range of sizes)</td></tr>
<tr><td>A central size, or when nothing is critical</td><td>The “medium” of a clothing range</td><td>Torso or chest size</td><td><b>50th</b></td></tr></table></div>
<div class="key">Reach: use the 5th (if the smallest can reach, everyone can). Clearance: use the 95th (if the largest fits, everyone fits).</div>
<h3>Method of extremes</h3>
<p>Sometimes you cannot satisfy everyone. Decide which feature matters most. <b>Never compromise on safety.</b> If there is a real risk of injury, use more extreme percentiles (the <b>2.5th or 97.5th</b>) so that more than 95% are protected.</p>
<h3>Not every population is a bell curve</h3>
<p>A primary school has many small children and a few adults, so the height data is skewed towards the shorter end. Look at the data before assuming 5th/50th/95th mean what you expect.</p>
<h3>Extension: calculate a percentile</h3>
<p>The course expects you to <i>read</i> percentile tables, not calculate them. If you want to see how the table is built, try this. For a normal distribution: value = mean + z × standard deviation, with z = −1.645 for the 5th, +1.645 for the 95th, and ±1.96 for the 2.5th/97.5th.</p>
<div class="calc" id="calc"><div class="row">
<div><label for="cm">Mean (mm)</label><input id="cm" type="number" value="1750"></div>
<div><label for="cs">Standard deviation (mm)</label><input id="cs" type="number" value="75"></div>
<div><label for="cx">Or: what percentile is this value (mm)?</label><input id="cx" type="number" value="1900"></div></div>
<output id="cout" aria-live="polite"></output></div>
<div class="tip"><b>Exam tip.</b> Always say <i>why</i> a percentile suits the scenario: “5th percentile arm length, because if the smallest user can reach the control, all larger users can.”</div>`},

{id:'s114',ref:'1.1.4',title:'Adjustability and range of sizes',
 must:'Explain why designers choose adjustability and/or a range of sizes, and identify products that use each.',
 html:`
<p>A single fixed size only suits a narrow slice of the population. To cover a wider range of percentiles, designers can make a product <b>adjustable</b>, offer it in a <b>range of sizes</b>, or do both.</p>
<div class="cols">
<div class="box"><h4>Adjustability</h4><p>The user changes the product to fit. Examples: office chair, car seat, bicycle saddle, adjustable desk, rucksack straps.</p><ul class="tight"><li>One product covers many users</li><li>Fits people with different proportions</li><li>Needs a mechanism: more parts, more cost, more to break</li></ul></div>
<div class="box"><h4>Range of sizes</h4><p>The maker produces separate sizes. Examples: shoes, clothing, helmets, school furniture.</p><ul class="tight"><li>Good fit for each user</li><li>Manufacturer must make and stock many sizes</li><li>The user cannot adjust after buying</li></ul></div></div>
<div class="ex"><b class="l">Why not just design for the average?</b> Designing only for the 50th percentile excludes smaller and larger users. A car also has many variables (sitting height, leg length, arm reach, viewing angle, hip breadth), and a different person is “designed out” by each one. That is called <b>multivariate accommodation</b>, and it is why seats and steering wheels are adjustable.</div>
<p>Designers choose between the two according to the <b>product, users, cost, manufacturing complexity</b> and the percentile range required. Manufacturing for the extreme ends (below the 5th and above the 95th) is usually expensive, so these users may be given add-ons such as extensions instead.</p>
<div class="tip"><b>Exam tip.</b> A strong answer names the product, states the strategy, and gives a <i>reason</i> linked to cost or users: “School chairs come in a range of sizes because children’s dimensions change with age and a single adjustable mechanism would raise the unit cost.”</div>`},

{id:'s115',ref:'1.1.5',title:'Workspace envelope, reach, clearance',
 must:'Explain the importance of workspace envelopes, adjustability, reach, clearance and range of sizes in relation to percentiles.',
 html:`
<div class="tw"><table class="t"><tr><th>Term</th><th>Meaning</th><th>Percentile</th></tr>
<tr><td><b>Reach</b> (workspace envelope)</td><td>The 3D space in which a person can carry out work from a fixed position. Its limits depend on functional arm reach, the direction of reach and the task. Frequently used items belong in the primary and secondary zones.</td><td>Design for the <b>5th</b>: then 95% can reach everything.</td></tr>
<tr><td><b>Clearance</b></td><td>The minimum space a person needs to move into or through an area. Important for emergency exits, access panels and safety hatches.</td><td>Design for the <b>95th</b> (plus footwear, PPE, wheelchairs).</td></tr>
<tr><td><b>Adjustability</b></td><td>The product can be changed to fit the user.</td><td>Cover the <b>5th to 95th</b> range.</td></tr>
<tr><td><b>Range of sizes</b></td><td>Different sizes made for different groups.</td><td>Each size covers a slice of the 5th–95th range.</td></tr></table></div>
<div class="ex"><b class="l">Clearance examples.</b> Ceiling height must allow for the tallest user plus footwear and PPE. A gap between obstructions must allow for the widest user, including a wheelchair user. A grill opening must be too narrow to fit a finger. An unprotected hazard must be beyond the reach of the person with the longest arm.</div>
<div class="tip"><b>Watch out.</b> The same product can need both: a lorry cab needs the 5th percentile for reach to the pedals and the 95th for headroom, so the seat is adjustable.</div>`},

{id:'s116',ref:'1.1.6',title:'Physiology and biomechanics',
 must:'Explain limiting aspects of user capabilities: visual accuracy, colour perception, strength, fatigue, muscle control and hearing thresholds.',
 html:`
<p><b>Physiology</b> is the study of the body’s systems and biomechanics, and their responses, limitations and capabilities. Physiological data is gathered through performance tests, user trials and observation, and anthropometric measurement.</p>
<h3>Human limits designers must respect</h3>
<ul class="tight"><li><b>Visual accuracy and sensitivity to light</b> (text size, contrast).</li><li><b>Colour perception</b> (colour-blind users; never use colour alone to give a warning).</li><li><b>Strength and stamina</b> (grip force, how long a muscle can work).</li><li><b>Muscle control</b> and hand–eye coordination (fine motor tasks, tremor).</li><li><b>Hearing thresholds</b> (frequency and loudness range, so alarms are heard).</li><li><b>Tolerance to extremes of temperature</b> and other body tolerances.</li></ul>
<h3>Biomechanics: four factors</h3>
<p>Biomechanics is how living things move: muscles, joints, tendons, force, repetition, duration and posture. Designers aim to reduce these four risks:</p>
<div class="tw"><table class="t"><tr><th>Factor</th><th>What it is</th><th>Risk</th></tr>
<tr><td>Force</td><td>How much force the user must apply</td><td>High force jolts joints and tenses muscles, causing pain</td></tr>
<tr><td>Repetition</td><td>How often a task is repeated (a task cycle of 30 seconds or less is highly repetitive)</td><td>Repetitive strain injury</td></tr>
<tr><td>Duration</td><td>How long the user is engaged</td><td>Even small effort held for a long time becomes stressful</td></tr>
<tr><td>Posture</td><td>How the body is held</td><td>Awkward positions held for any time become painful</td></tr></table></div>
<h3>Comfort and fatigue</h3>
<p><b>Physical comfort</b> is the ease of using the product (a handle that suits the hand). <b>Psychological comfort</b> comes from the feedback a product gives: the feel, texture and build quality tell the user it is well made. <b>Fatigue</b> is physical or psychological tiredness, and it is the result of discomfort. It reduces performance and productivity, and makes users decide the product is poorly designed. Designing for comfort aims to prevent fatigue.</p>
<div class="ex"><b class="l">Torque (as used in class).</b> T = F × d, where F is the hand force in newtons and d is the distance from the turning axis in metres. A jar lid that needs more torque to open than a weak grip can supply excludes some users (older people, people with arthritis). The design fix: a larger grip diameter (more leverage), textured surfaces, or a wider range of grip shapes.</div>
<div class="tip"><b>Human factors checklist.</b> Effectiveness, efficiency, engagement, error tolerance and learnability.</div>`},

{id:'s117',ref:'1.1.7',title:'Psychology, senses and information processing',
 must:'Discuss how the human senses (smell, sound, touch, taste and vision) are used to influence the design and development of products.',
 html:`
<p><b>Psychology</b> studies the human mind, including all the senses that send information to the brain. Designers use it to create good <b>user–product interfaces</b>: simple, easy to use, logical, visible, with feedback, affordance, mapping and constraints and a low memory burden.</p>
<h3>The senses in design</h3>
<div class="tw"><table class="t"><tr><th>Sense</th><th>How designers use it</th><th>Example</th></tr>
<tr><td>Vision</td><td>Light, colour and contrast make things readable and noticeable</td><td>High-contrast signs, warning colours</td></tr>
<tr><td>Sound</td><td>Gives feedback that the user can hear</td><td>Seat-belt alarm, a click when a clip locks</td></tr>
<tr><td>Touch</td><td>Texture and shape give grip and information, and help visually impaired users</td><td>Textured grip, raised dots on buttons</td></tr>
<tr><td>Smell</td><td>A powerful response that influences comfort and quality</td><td>Added odour to natural gas so leaks are noticed</td></tr>
<tr><td>Taste</td><td>Important for children’s products, which are put in the mouth; toxins must be avoided</td><td>Bitter coating on toys</td></tr></table></div>
<h3>Human information processing system (HIPS)</h3>
<p>HIPS compares the mind to a computer. The environment gives <b>input</b>, the body <b>processes</b> it, and the user gives an <b>output</b> (a response).</p>
<div class="flow"><div>Input<small>stimulus through the senses</small></div><span>→</span><div>Process<small>sensory → central → motor</small></div><span>→</span><div>Output<small>action by the user</small></div></div>
<p><b>Breakdown</b> can happen at any stage: the input is not noticed (an alarm too quiet), the processing is wrong (misleading information), or the output fails (not enough strength or fine motor control). Age, skill, disability and fatigue all play a part. Human error is a factor in many accidents, so good design tries to <b>design out</b> the possibility of error.</p>
<h3>Alertness and perception</h3>
<p><b>Alertness</b> is the level of vigilance, readiness and caution. <b>Perception</b> is the organisation, identification and interpretation of sensory information. Situational awareness has three levels: <b>perception</b> (noticing relevant things), <b>comprehension</b> (understanding what they mean) and <b>projection</b> (predicting what will happen next).</p>
<h3>Environmental factors</h3>
<ul class="tight"><li><b>Light:</b> affects visual sharpness, safety and alertness.</li><li><b>Noise:</b> excessive noise causes harm such as tinnitus and reduces concentration.</li><li><b>Thermal comfort:</b> air temperature, radiant temperature, air velocity and humidity.</li><li><b>Space, colour and smell:</b> open-plan areas help collaboration, while focused work needs quiet space.</li></ul>
<h3>Types of data (scales)</h3>
<div class="tw"><table class="t"><tr><th>Scale</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Nominal</td><td>Categories, no order</td><td>Hair colour, favourite colour</td></tr>
<tr><td>Ordinal</td><td>Order matters, gaps do not</td><td>Comfort rated 1 to 5, a ranking</td></tr>
<tr><td>Interval</td><td>Order and equal gaps, no true zero</td><td>Temperature in °C</td></tr>
<tr><td>Ratio</td><td>Order, equal gaps and a true zero</td><td>Height, weight, length</td></tr></table></div>
<p><b>Collecting psychological data:</b> interviews (people may say what is socially acceptable), surveys and questionnaires, observation (naturalistic or in a lab), standardised tests, and case studies (in depth, but cannot be generalised).</p>
<div class="tip"><b>Exam tip.</b> “Discuss” needs more than one point with a view on each: give an advantage and a limitation, or compare two senses with examples.</div>`}
],

/* ===================== FLASHCARDS ===================== */
cards:[
['Ergonomics','The relationship and interaction between people and the products, systems and environments they use.'],
['Anthropometrics','The measurement of human physical dimensions, expressed in a percentile range.'],
['Static data','Body measurements taken with the person still (height, arm length). Easier and more reliable to collect.'],
['Dynamic data','Measurements taken while the person moves or does a task (reach, clearance). Harder to collect but often more useful.'],
['Percentile','The proportion of the population at or below a given value. The 5th percentile: 5% are this size or smaller.'],
['5th percentile','The smallest user group. Use for reach and for operating forces: if they can, everyone can.'],
['95th percentile','The largest user group. Use for clearance: if they fit, everyone fits.'],
['50th percentile','The middle or average of the population. A central size from which a range of sizes can be made.'],
['Method of extremes','Using the 2.5th or 97.5th percentile when safety is at risk, to protect more than 95% of people.'],
['Primary data','Data you collect yourself for your own purpose (field research).'],
['Secondary data','Existing data collected by others (desk research). Most designers use this.'],
['Adjustability','A product that the user can change to fit their own dimensions (office chair, car seat).'],
['Range of sizes','The same product made in separate sizes (shoes, helmets, clothing).'],
['Multivariate accommodation','Fitting several body dimensions at once. This is why adjustability is needed: one person is designed out by each variable.'],
['Reach (workspace envelope)','The 3D space in which a person can work from a fixed position. Design for the 5th percentile.'],
['Clearance','The minimum space a person needs to move into or through an area. Design for the 95th percentile.'],
['Physiology','The study of the body’s systems and biomechanics, and their responses, limitations and capabilities.'],
['Biomechanics: four factors','Force, repetition, duration and posture.'],
['Fatigue','Physical or psychological tiredness, resulting from discomfort. It reduces performance.'],
['Physical comfort','Ease of using a product, for example a handle that fits the hand.'],
['Psychological comfort','Comfort from the product’s feedback: feel, texture and build quality that signal quality.'],
['Human information processing system','Model of input → processing (sensory, central, motor) → output. The mind treated as an information processor.'],
['Nominal scale','Data in categories with no order (hair colour).'],
['Ordinal scale','Data where the order matters but the gaps do not (comfort rating 1 to 5).'],
['Interval scale','Order and equal gaps but no true zero (temperature in °C).'],
['Ratio scale','Order, equal gaps and a true zero (height, weight).'],
['Alertness','The level of vigilance, readiness and caution of a person.'],
['Situational awareness (3 levels)','Perception, comprehension, projection.'],
['Thermal comfort factors','Air temperature, radiant temperature, air velocity and humidity.']
],

/* ===================== MCQ ===================== */
mcq:[
{ref:'1.1.1',q:'Which statement best defines ergonomics?',o:['The study of how products are manufactured efficiently','The relationship and interaction between people and the products, systems and environments they use','The measurement of body sizes of a population','The study of materials used in furniture'],a:1,why:'Ergonomics is about the interaction between people and what they use. Measuring body sizes is anthropometrics, which is only one part of ergonomics.'},
{ref:'1.1.1',q:'Which of these is NOT one of the five ways ergonomics improves a design?',o:['More efficient','More safe','More decorative','More usable'],a:2,why:'The five are efficient, usable, functional, effective and safe. Decoration is an aesthetic quality.',live:true},
{ref:'1.1.1',q:'A smartphone menu is redesigned so users can find settings faster with fewer errors. Which type of ergonomics is this mainly?',o:['Physical','Cognitive','Organisational','Structural'],a:1,why:'Cognitive ergonomics is the fit between the mind and the product: perception, memory and reaction. Layout of menus is about how users think.',live:true},
{ref:'1.1.2',q:'Which of these is dynamic anthropometric data?',o:['Standing height','Hand width','Forward reach while seated and operating a control','Body weight'],a:2,why:'Dynamic data is measured while the person moves or does a task. The other three are measured with the person still.',live:true},
{ref:'1.1.2',q:'Why is static data usually more reliable than dynamic data?',o:['It is measured with more expensive tools','The person remains still so there is less variation','It always uses larger samples','It is always collected by a professional'],a:1,why:'When people stay still, there is less variation between measurements. With movement, people carry out the same task in different ways.'},
{ref:'1.1.2',q:'A student measures a classmate’s stature at 7 am and again at 6 pm and finds the second reading is lower. What is the most likely cause?',o:['Poor posture only','The discs in the spine compress during the day','The measuring tape stretched','Dynamic data always changes'],a:1,why:'Spinal discs compress under body weight during the day, so people can be up to about 2.2 mm shorter in the evening. This is a limitation of collecting static data.'},
{ref:'1.1.2',q:'A designer measures her own target users with a tape. This is…',o:['Secondary data','Primary data','Qualitative data only','Ordinal data'],a:1,why:'Data you collect yourself for your own purpose is primary data (field research). Published tables are secondary.',live:true},
{ref:'1.1.3',q:'What does the 5th percentile mean for arm length?',o:['5% of people have arms longer than this','5% of people have arms this length or shorter','The average arm length','The shortest arm in the sample'],a:1,why:'A percentile is the proportion of the population at or below a value. 5th percentile: 5% are this size or smaller.',live:true},
{ref:'1.1.3',q:'Which percentile is most appropriate for the height of a doorway?',o:['5th stature','50th stature','95th stature','5th arm length'],a:2,why:'Doorways are a clearance problem. If the tallest group (95th) fits through, everyone smaller also fits.',live:true},
{ref:'1.1.3',q:'Which percentile of arm length should be used to position the controls on a vehicle dashboard?',o:['5th','50th','95th','97.5th'],a:0,why:'Reach is designed for the smallest user. If the 5th percentile can reach the control, all larger users can too.',live:true},
{ref:'1.1.3',q:'A machine guard has a mesh opening. Which data best prevents fingers reaching the hazard?',o:['95th percentile finger width','5th percentile finger width','50th percentile finger length','95th percentile hand length'],a:1,why:'The smallest fingers must not fit through the holes, so use the 5th percentile finger width. If those fingers cannot enter, wider ones cannot either.'},
{ref:'1.1.3',q:'When would a designer use the method of extremes (2.5th or 97.5th percentile)?',o:['To lower manufacturing cost','When safety is at risk and 95% coverage is not enough','When the data is not normally distributed','Whenever a product is adjustable'],a:1,why:'Never compromise on safety. For a serious injury risk, use more extreme percentiles so that more than 95% of users are protected.'},
{ref:'1.1.3',q:'Stature has a mean of 1700 mm and a standard deviation of 70 mm (normal distribution). What is the 95th percentile? (extension)',o:['1700 mm','1770 mm','1815 mm','1940 mm'],a:2,why:'95th percentile = mean + 1.645 × SD = 1700 + 1.645 × 70 ≈ 1815 mm.'},
{ref:'1.1.4',q:'Which product uses a range of sizes rather than adjustability?',o:['Office chair','Car seat','Cycle helmet sold as S, M and L','Height-adjustable desk'],a:2,why:'A range of sizes means separate versions are made for different users. The office chair, car seat and desk are each adjusted by the user.'},
{ref:'1.1.4',q:'Which is the main disadvantage of making a product adjustable?',o:['It cannot fit extreme users','It needs a mechanism, which adds parts and cost and can fail','It reduces comfort','It is not possible for clothing'],a:1,why:'Adjustment mechanisms add components, cost and possible points of failure, though they cover a wider range of users.',live:true},
{ref:'1.1.5',q:'Why is a car seat adjustable in several directions rather than made in one fixed size?',o:['Because the average driver is hard to measure','Several dimensions (leg length, sitting height, reach) vary independently, so a fixed size designs out different people on each','Because it is cheaper to manufacture','To make the seat look modern'],a:1,why:'This is multivariate accommodation: different people are excluded by each dimension, so the user adjusts the product to fit.'},
{ref:'1.1.6',q:'Which list gives the four biomechanical factors?',o:['Force, repetition, duration, posture','Force, speed, colour, posture','Weight, height, reach, comfort','Strength, alertness, perception, posture'],a:0,why:'Biomechanics considers force, repetition, duration and posture, because each can cause discomfort or injury.',live:true},
{ref:'1.1.6',q:'A jar lid needs a large torque to open. Which design change reduces the force a weak hand must apply?',o:['A smaller lid diameter','A larger gripping diameter, giving more leverage','A smoother lid surface','A thicker glass jar'],a:1,why:'Torque = force × distance. A larger gripping diameter gives more leverage, so less force is needed for the same torque.'},
{ref:'1.1.6',q:'Which is an example of psychological comfort?',o:['A handle that fits the hand','A seat that supports the back','A product whose feel and weight suggest it is well made','A cooler working temperature'],a:2,why:'Psychological comfort comes from product feedback such as touch, texture and build quality. The others are physical comfort.'},
{ref:'1.1.7',q:'A user rates the comfort of a chair from 1 to 5. What type of scale is this?',o:['Nominal','Ordinal','Interval','Ratio'],a:1,why:'The order matters but the gaps between the numbers are not necessarily equal: an ordinal scale.',live:true},
{ref:'1.1.7',q:'In the human information processing system, which is the correct order?',o:['Output → process → input','Input → process → output','Process → input → output','Input → output → process'],a:1,why:'The environment provides input, the person processes it (sensory, central, motor) and gives an output (a response).'},
{ref:'1.1.7',q:'An alarm is so quiet in a noisy factory that nobody responds. Where has the information processing system broken down?',o:['At the output stage','At the input stage','At the manufacturing stage','There is no breakdown'],a:1,why:'The input (sound) is not detected, so nothing can be processed. The fix is to redesign the signal (louder, lights, vibration).',live:true},
{ref:'1.1.7',q:'Which is NOT a factor of thermal comfort?',o:['Air temperature','Air velocity','Humidity','Noise level'],a:3,why:'Thermal comfort depends on air temperature, radiant temperature, air velocity and humidity. Noise is a separate environmental factor.'}
],

/* ===================== FILL IN THE BLANKS ===================== */
fib:[
{ref:'1.1.1',t:'Ergonomics comes from the Greek words ergon, meaning [[work]], and nomoi, meaning natural [[laws|law]].'},
{ref:'1.1.1',t:'Good ergonomics makes a product more efficient, usable, functional, effective and [[safe]].'},
{ref:'1.1.2',t:'[[Static]] data is measured with the person still, whereas [[dynamic]] data is measured during movement or a task.'},
{ref:'1.1.2',t:'Data you collect yourself is called [[primary]] data, and published tables are called [[secondary]] data.'},
{ref:'1.1.3',t:'The 5th percentile means that [[5|5%|five]] per cent of the population are this size or smaller.'},
{ref:'1.1.3',t:'Reach is designed for the [[5th|fifth]] percentile, and clearance is designed for the [[95th|ninety-fifth]] percentile.'},
{ref:'1.1.3',t:'When safety is at risk, the method of [[extremes]] uses the 2.5th or 97.5th percentile.'},
{ref:'1.1.4',t:'A product that the user can change to fit them is [[adjustable]], and a product made in separate sizes is sold in a [[range of sizes|range]].'},
{ref:'1.1.6',t:'The four biomechanical factors are force, [[repetition]], duration and [[posture]].'},
{ref:'1.1.6',t:'[[Fatigue]] is physical or psychological tiredness caused by discomfort.'},
{ref:'1.1.7',t:'The four data scales are nominal, [[ordinal]], interval and [[ratio]].'},
{ref:'1.1.7',t:'In the human information processing system the environment provides [[input]], the person [[processes|process]] it, and then gives an output.'}
],

/* ===================== THEORY Q&A ===================== */
theory:[
{ref:'1.1.1',cmd:'Outline',marks:2,q:'Outline what is meant by ergonomics.',
 pts:['The relationship / interaction between people and products, systems or environments [1]','…so that the design fits human needs, abilities or limitations (comfort, safety, efficiency) [1]'],
 tip:'“Outline” asks for a brief account. Two clear points earn two marks.'},
{ref:'1.1.1',cmd:'Describe',marks:4,q:'Describe how ergonomics can be used to improve the design of a kitchen knife.',
 pts:['Handle shaped to fit the hand and reduce force needed (efficient) [1]','Non-slip texture or grip prevents the hand sliding onto the blade (safe) [1]','Handle size and balance reduce fatigue during repeated chopping (usable / effective) [1]','Different handle sizes or shapes for different hand sizes and users (functional) [1]'],
 tip:'Link each feature to one of efficient, usable, functional, effective or safe.'},
{ref:'1.1.2',cmd:'Describe',marks:3,q:'Describe the difference between static and dynamic anthropometric data.',
 pts:['Static data is measured with the person in a fixed position (for example stature) [1]','Dynamic data is measured while the person moves or performs a task (for example reach) [1]','Static is easier / more reliable to collect, while dynamic is more useful for designing for real use [1]'],
 tip:'To show a difference, compare directly using a word such as “whereas”, not two separate definitions.'},
{ref:'1.1.2',cmd:'Outline',marks:2,q:'Outline two limitations of collecting static anthropometric data.',
 pts:['Measuring tools may be uncalibrated or unreliable [1]','Measurers may not be trained, so they measure in different places [1]','Time of day: spinal discs compress, so people are shorter in the evening [1]','Clothing, hats or body shape make measurement difficult [1]'],
 tip:'Any two points, 1 mark each. Each limitation needs a reason or effect to score.',any:true},
{ref:'1.1.3',cmd:'Explain',marks:4,q:'Explain why a designer uses the 5th percentile for the height of the controls on a lift (elevator) panel, but the 95th percentile for the height of the lift ceiling.',
 pts:['Controls are a reach problem, so use the smallest user [1]','If the 5th percentile can reach the buttons, all larger users can too [1]','The ceiling is a clearance problem, so use the largest user [1]','If the 95th percentile fits under the ceiling, all smaller users can too [1]'],
 tip:'Each percentile needs a reason (the “because”). Marks are awarded for the reasoning, not just the number.'},
{ref:'1.1.3',cmd:'Explain',marks:3,q:'A manufacturer is designing a machine guard to keep fingers away from a moving blade. Explain why the method of extremes may be used.',
 pts:['There is a risk of serious injury [1]','Designing only for the 5th–95th range leaves 10% (5% at each end) unprotected [1]','Use the 2.5th or 97.5th percentile (for example narrowest fingers) so almost everyone is protected [1]'],
 tip:'Safety is the key idea. Never compromise on safety.'},
{ref:'1.1.4',cmd:'Explain',marks:4,q:'A school is buying chairs for students aged 11 to 18. Explain why the designer might choose a range of sizes rather than adjustability, and identify one product that uses adjustability.',
 pts:['Student body dimensions change a lot between 11 and 18, so one fixed size cannot fit [1]','A range of sizes gives a good fit for each student [1]','Adjustment mechanisms add parts and cost, and can break with frequent use by many students [1]','Identify a product that uses adjustability, for example an office chair, car seat or adjustable desk [1]'],
 tip:'Always give a reason linked to users, cost or manufacture, and name the product when asked to identify it.'},
{ref:'1.1.2',cmd:'Explain',marks:6,q:'Explain how age, gender, ethnicity and disability can affect anthropometric data.',
 pts:['Age: children are smaller and growing, older adults may lose height and strength, so one data set cannot be used for all ages [1]','Gender: on average men have larger body dimensions, but the ranges overlap, so data for the target gender should be used [1]','Ethnicity: body proportions and head shape vary between populations, so data should match the market (for example helmets, clothing) [1]','Disability: a wheelchair user has different seated height, reach and clearance, so standard data may exclude them [1]','Linked consequence: using the wrong data set means the product does not fit and may be unsafe [1]','Balanced judgement: designers should choose data from the target user group and consider adjustability or range of sizes to cover differences [1]'],
 tip:'For six marks make several developed points. Give an effect on design for each factor. (The syllabus statement says “discuss”, so expect that wording too.)'},
{ref:'1.1.6',cmd:'Explain',marks:4,q:'Explain how considering force, repetition, duration and posture would improve the design of a hand-held power tool.',
 pts:['Force: the grip and trigger need little force, to reduce strain on the joints [1]','Repetition: a trigger or switch that needs few repeated movements reduces repetitive strain [1]','Duration: light weight and vibration damping let users work longer without fatigue [1]','Posture: a handle angle that keeps the wrist straight avoids awkward positions [1]'],
 tip:'Use all four terms from the guide, and apply each to the product.'},
{ref:'1.1.7',cmd:'Discuss',marks:6,q:'Discuss how the human senses can be used to influence the design of products.',
 pts:['Vision: colour and contrast make warnings and displays easy to see, for example a red stop button [1]','Sound: audible feedback confirms an action or warns of danger, for example a seat-belt alarm or a click when a clip locks [1]','Touch: texture and shape aid grip and give information, including to visually impaired users, for example raised dots [1]','Smell: odour can warn of danger, for example an added smell in natural gas [1]','Taste: children’s products must be safe if put in the mouth and may use bitter coatings [1]','Combining senses gives a more reliable warning if one sense is impaired; limitations include users with hearing or vision loss [1]'],
 tip:'“Discuss” (used in the syllabus statements) means a considered review with several points, examples and limitations.'},
{ref:'1.1.7',cmd:'Explain',marks:3,q:'Explain one way in which the human information processing system could break down when a person uses a product.',
 pts:['Identify the stage: input, process or output [1]','Cause at that stage, for example a quiet alarm not noticed (input), confusing information (process), or lack of strength or fine motor control (output) [1]','The effect on the user’s response, for example a delayed reaction or an error, and a suggested design response [1]'],
 tip:'Name the stage first, then link cause to effect.'}
],

/* ===================== PAST PAPERS ===================== */
paper:[
 {ref:'1.1.1',what:'Specimen Paper 2 (SL), question 3(a): “State how ergonomic design principles improve usability.” [1]',key:'Markscheme: ergonomics improves efficiency, usability, functionality, effectiveness and safety. Any one relevant principle earns the mark.'},
 {ref:'1.1.3',what:'Specimen Paper 1 (HL and SL), question 3: hiking jacket for an adult, “what anthropometric data is used to support the development of the product?” (multiple choice)',key:'Markscheme answer: D (adult torso data, 50th percentile). Think about why a central size from which a range is made suits a garment.'},
 {ref:'1.1.3',what:'Specimen Paper 2 (HL and SL), question 7(b): outline the percentile range for infants when deciding the length of the MOM incubator. [2]',key:'Markscheme: the 5th to 95th percentile range, so the incubator fits between 5% and 95% of baby lengths; percentiles help choose data that satisfies the majority of users.'}
],
cmd:[
 ['State','Give a specific name, value or other brief answer without explanation or calculation.'],
 ['Identify','Provide an answer from a number of possibilities.'],
 ['Outline','Give a brief account or summary.'],
 ['Describe','Give a detailed account.'],
 ['Present','Offer for display, observation, examination or consideration.'],
 ['Apply','Use an idea, equation, principle, theory or law in relation to a given problem or issue.'],
 ['Explain','Give a detailed account including reasons or causes.'],
 ['Justify','Give valid reasons or evidence to support an answer or conclusion.'],
 ['Evaluate','Make an appraisal by weighing up the strengths and limitations.'],
 ['Discuss','Not in the guide’s glossary, but the syllabus statements use it. Treat it as a considered review with several points, examples and limitations.']
]
};
/* A1.1 exam-style practice: original case studies written for this site in the style of IB Paper 1 and Paper 2.
   Data in the tables is illustrative, made up for these questions. It is not survey data. */
(function(){
const T=window.TOPICS['a1-1'];

/* ---- command terms: full guide glossary ---- */
T.cmd=[
 ['Label','AO1','Add a title, labels or brief explanations to a diagram or graph.'],
 ['List','AO1','Give a sequence of brief answers with no explanation.'],
 ['State','AO1','Give a specific name, value or other brief answer without explanation or calculation.'],
 ['Apply','AO2','Use an idea, equation, principle, theory or law in relation to a given problem or issue.'],
 ['Demonstrate','AO2','Make clear by reasoning or evidence, illustrating with examples or practical application.'],
 ['Describe','AO2','Give a detailed account.'],
 ['Identify','AO2','Provide an answer from a number of possibilities.'],
 ['Outline','AO2','Give a brief account or summary.'],
 ['Present','AO2','Offer for display, observation, examination or consideration.'],
 ['Analyse','AO3','Break down in order to bring out the guiding elements or structure.'],
 ['Construct','AO3','Display information in a diagrammatic or logical form.'],
 ['Design','AO3','Produce a plan, simulation or model.'],
 ['Evaluate','AO3','Make an appraisal by weighing up the strengths and limitations.'],
 ['Explain','AO3','Give a detailed account including reasons or causes.'],
 ['Justify','AO3','Give valid reasons or evidence to support an answer or conclusion.'],
 ['Discuss','Syllabus','Not in the guide’s glossary, but the A1.1 syllabus statements use it. Treat it as a considered review: several developed points, examples and limitations.']
];

const A='<defs><marker id="MK" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>';
const mk=id=>A.replace(/MK/g,id);

T.practice=[

/* ============ CASE 1 ============ */
{id:'cs1',title:'Case study 1: Economy cabin seating',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A regional airline wants to carry more passengers on short flights by reducing the distance between rows of seats. Passengers have complained that their knees touch the seat in front. The design team collects <b>static anthropometric data</b> for adult passengers on the airline’s routes (Table 1). They also plan to fit a call button to the armrest and a tray table that folds down from the seat in front.</p>`,
 fig:`<svg viewBox="0 0 520 250" role="img" aria-label="Side view of two airline seats in a row. A seated passenger has the hip point and knee marked. Dimension A runs from hip to knee, B from knee to the back of the seat in front, and C from hip to the back of the seat in front.">${mk('a1')}
<line x1="10" y1="215" x2="510" y2="215" stroke="var(--ink)" stroke-width="2"/>
<path d="M62 150 L48 62" stroke="var(--ink)" stroke-width="12" stroke-linecap="round" fill="none"/>
<rect x="58" y="150" width="108" height="14" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><line x1="112" y1="164" x2="112" y2="215" stroke="var(--ink)" stroke-width="5"/>
<circle cx="72" cy="62" r="12" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
<path d="M80 146 L74 78" stroke="var(--ink)" stroke-width="9" stroke-linecap="round" fill="none"/>
<path d="M80 146 L170 140 L174 206 L196 206" stroke="var(--ink)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="80" cy="146" r="5" fill="var(--mark)" stroke="var(--ink)"/><circle cx="170" cy="140" r="5" fill="var(--mark)" stroke="var(--ink)"/>
<path d="M224 150 L210 62" stroke="var(--ink)" stroke-width="12" stroke-linecap="round" fill="none"/>
<rect x="224" y="150" width="108" height="14" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><line x1="278" y1="164" x2="278" y2="215" stroke="var(--ink)" stroke-width="5"/>
<line x1="80" y1="118" x2="170" y2="118" stroke="var(--blue)" stroke-width="2" marker-start="url(#a1)" marker-end="url(#a1)"/>
<line x1="175" y1="118" x2="214" y2="118" stroke="var(--blue)" stroke-width="2" marker-start="url(#a1)" marker-end="url(#a1)"/>
<line x1="80" y1="170" x2="80" y2="232" stroke="var(--blue)" stroke-dasharray="4 3"/><line x1="214" y1="170" x2="214" y2="232" stroke="var(--blue)" stroke-dasharray="4 3"/>
<line x1="80" y1="228" x2="214" y2="228" stroke="var(--blue)" stroke-width="2" marker-start="url(#a1)" marker-end="url(#a1)"/>
<text x="120" y="110">A</text><text x="190" y="110">B</text><text x="142" y="246">C</text>
<text x="346" y="100">Seat in front</text><text x="346" y="116">(back rest slopes</text><text x="346" y="132">back when reclined)</text></svg>`,
 cap:'Figure 1: Side view of a seat row (not to scale). A = buttock–knee length, B = clearance gap in front of the knee, C = distance from the hip to the back of the seat in front.',
 table:`<table class="t"><tr><th colspan="4">Table 1: Illustrative static data for adult passengers (mm)</th></tr><tr><th>Dimension</th><th>5th</th><th>50th</th><th>95th</th></tr>
 <tr><td>Buttock–knee length (seated)</td><td>520</td><td>570</td><td>620</td></tr>
 <tr><td>Lower leg length (seat height range)</td><td>380</td><td>420</td><td>470</td></tr>
 <tr><td>Forward grip reach (armrest button)</td><td>690</td><td>740</td><td>800</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'1.1.3',q:'Identify the percentile the designer should use to decide the minimum space between the hip and the back of the seat in front.',
  award:'Award [1] for the correct percentile.',pts:['<b>95th percentile</b> (largest user, because this is a clearance problem) [1]'],
  acc:'Accept: 95th, 97.5th or “largest”. Do not accept: 5th or 50th.',kw:['95th percentile','clearance','largest'],tip:'Clearance problems use the largest user, so that everyone smaller also fits.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.1.3',q:'The design team wants a gap (B) of 60 mm in front of the knee. Apply Table 1 to determine the minimum distance C.',
  award:'Award [1] for selecting the correct data. Award [1] for the correct answer with units.',pts:['Uses the 95th percentile buttock–knee length of 620 mm (A) [1]','C = 620 + 60 = <b>680 mm</b> [1]'],
  acc:'Award [1] for 680 mm even if the working is not shown. Do not accept an answer without units.',kw:['620 mm','680 mm'],tip:'“Apply” means use the data in the table in this situation. Show the working and include the unit.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.1.3',q:'The armrest call button is placed using forward grip reach. Explain which percentile should be used, and why.',
  award:'Award [1] for each valid point up to [3 max].',pts:['The <b>5th percentile</b> should be used [1]','This is a <b>reach</b> problem, so the user with the shortest reach sets the limit [1]','If the smallest user can reach the button, <b>larger users</b> can also reach it [1]'],
  acc:'Accept: 690 mm for the 5th percentile as supporting evidence. Do not accept: “average” or 50th percentile.',kw:['5th percentile','reach','smallest','larger users'],tip:'Name the percentile, say whether it is a reach or clearance problem, then show what that means for the other users.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.1.4',q:'Describe two ways the designers could make the seat more suitable for passengers with different leg lengths without changing the seat pitch.',
  award:'Award [1] for each way identified and [1] for development, up to [3 max].',pts:['A <b>height-adjustable</b> seat or footrest to suit different lower leg lengths [1]','A <b>slim backrest</b> or a shaped seat-back that gives extra knee room [1]','A sliding seat or a few rows with more legroom (a <b>range of sizes</b>) that passengers can choose [1]','Development linked to the user, for example a taller passenger gets more clearance or a shorter passenger can rest their feet [1]'],
  acc:'Accept any realistic ergonomic feature that changes the fit.',kw:['adjustable','range of sizes','clearance'],tip:'For “describe”, name the feature and say what it does for the user.'},
 {l:'(e)',cmd:'Evaluate',marks:4,ref:'1.1.4',q:'Evaluate the airline’s decision to reduce legroom to carry more passengers.',
  award:'Award [1] for each valid point, up to [2 max] for strengths and [2 max] for limitations. Reward a judgement.',pts:['Strength: more seats per flight, so more income and a lower ticket price [1]','Strength: a lower cost per passenger may attract customers who value price over comfort [1]','Limitation: tall users (95th percentile and above) cannot fit and may be injured or uncomfortable [1]','Limitation: long-term discomfort and poor circulation can damage the airline’s reputation or lose customers [1]'],
  acc:'Maximum [3] if there is no weighing up of the two sides.',kw:['strength','limitation','95th percentile','cost'],tip:'“Evaluate” needs both sides. End with a short judgement about which side matters more.'}
 ]},

/* ============ CASE 2 ============ */
{id:'cs2',title:'Case study 2: Metro ticket machine',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A city metro company is replacing its ticket machines. The existing machines have a high touchscreen and no other controls. Passengers include commuters, tourists, children, people who use wheelchairs and people with visual impairments. The new machine is designed using static anthropometric data (Table 2) and must be usable in a noisy station.</p>`,
 fig:`<svg viewBox="0 0 520 275" role="img" aria-label="Front view of a ticket machine with the heights of the touchscreen, card reader, note slot and ticket tray labelled, next to a seated wheelchair user reaching toward it.">
<line x1="10" y1="255" x2="510" y2="255" stroke="var(--ink)" stroke-width="2"/>
<rect x="170" y="20" width="130" height="235" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
<rect x="185" y="35" width="100" height="60" rx="3" fill="var(--paper)" stroke="var(--ink)"/><text x="214" y="70">Screen</text>
<rect x="200" y="112" width="70" height="16" fill="var(--paper)" stroke="var(--ink)"/><rect x="200" y="140" width="70" height="8" fill="var(--paper)" stroke="var(--ink)"/>
<rect x="195" y="208" width="80" height="26" rx="3" fill="var(--paper)" stroke="var(--ink)"/>
<g stroke="var(--ink2)"><line x1="285" y1="65" x2="318" y2="65"/><line x1="270" y1="120" x2="318" y2="120"/><line x1="270" y1="144" x2="318" y2="144"/><line x1="275" y1="221" x2="318" y2="221"/></g>
<text x="322" y="62">Touchscreen</text><text x="322" y="76">centre 1350 mm</text><text x="322" y="123">Card reader 1100 mm</text><text x="322" y="147">Note slot 1050 mm</text><text x="322" y="218">Ticket tray</text><text x="322" y="232">500 mm</text>
<circle cx="85" cy="222" r="30" fill="none" stroke="var(--ink)" stroke-width="3"/><circle cx="85" cy="222" r="4" fill="var(--ink)"/>
<path d="M62 190 L104 190" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/><path d="M68 190 L66 140" stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/>
<circle cx="66" cy="126" r="11" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
<path d="M68 152 L128 140" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
<path d="M128 140 Q160 90 168 62" stroke="var(--bad)" stroke-width="2" stroke-dasharray="5 4" fill="none"/><text x="20" y="272">Wheelchair user (dashed line: reach limit)</text></svg>`,
 cap:'Figure 2: Front view of the proposed ticket machine with a wheelchair user reaching forward (not to scale).',
 table:`<table class="t"><tr><th colspan="4">Table 2: Illustrative maximum comfortable reach height (mm)</th></tr><tr><th>User group</th><th>5th</th><th>50th</th><th>95th</th></tr>
 <tr><td>Standing adult</td><td>1580</td><td>1720</td><td>1860</td></tr>
 <tr><td>Adult wheelchair user (seated)</td><td>1050</td><td>1180</td><td>1290</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'1.1.3',q:'State the percentile that should be used to set the maximum height of the controls.',
  award:'Award [1] for the correct percentile.',pts:['<b>5th percentile</b> (smallest reach) [1]'],acc:'Accept: 5th or “smallest reach”. Do not accept: 95th or 50th.',kw:['5th percentile','reach'],tip:'“State” needs only the answer, no explanation.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.1.5',q:'Apply Table 2 and Figure 2 to identify two controls that a 5th percentile wheelchair user cannot reach.',
  award:'Award [1] for each control up to [2 max].',pts:['<b>Touchscreen</b> (centre at 1350 mm is higher than 1050 mm) [1]','<b>Card reader</b> (1100 mm is higher than 1050 mm) [1]'],
  acc:'Do not accept: note slot (1050 mm is at the limit, so it can be reached) or ticket tray.',kw:['touchscreen','card reader','1050 mm'],tip:'Compare each height in the figure with the 5th percentile wheelchair value.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.1.2',q:'Explain why the designer should collect data for wheelchair users as well as standing adults.',
  award:'Award [1] for each valid point up to [3 max].',pts:['Wheelchair users have a different <b>seated height and reach</b> from standing users [1]','Using only standing data would <b>exclude</b> these users, so the machine could not be used independently [1]','Designing with the lower reach limit means <b>larger and standing users</b> can also reach the controls, which makes the product inclusive [1]'],
  acc:'Accept: “disability affects anthropometric data”.',kw:['reach','exclude','inclusive','disability'],tip:'Link the data to the user, then to a consequence for the design.'},
 {l:'(d)',cmd:'Describe',marks:4,ref:'1.1.7',q:'The station is noisy and some passengers have a visual impairment. Describe two ways the machine can use different senses to give feedback.',
  award:'Award [1] for each way identified and [1] for each development, up to [4 max].',pts:['<b>Touch</b>: raised buttons or tactile markings (such as Braille) [1] that let users find controls without seeing them [1]','<b>Sound</b>: spoken prompts or a distinct beep [1] through a headphone socket or a loud speaker so the noise does not hide it [1]','<b>Vision</b>: high-contrast, large text or a bright confirmation light [1] that helps passengers with partial sight and those who cannot hear [1]'],
  acc:'Accept any two different senses. A development must be linked to the station or to the user.',kw:['touch','sound','vision','feedback','visual impairment'],tip:'Use the pattern: sense, then how it is used, then why it helps this user.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'1.1.7',q:'Evaluate the use of a touchscreen as the only control for the ticket machine.',
  award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a concluding judgement.',
  pts:['Strength: the interface can be updated easily (languages, prices, text size) without new hardware [1]','Strength: fewer moving parts, so lower manufacturing and maintenance cost [1]','Strength: large, clear text can help partially sighted users [1]','Limitation: no tactile feedback, so people with a visual impairment cannot find the controls [1]','Limitation: glare in sunlight, wet or gloved hands and fingerprints reduce usability [1]','Limitation: if the screen fails, nothing works; reaching the screen may be difficult for a wheelchair user (Table 2) [1]','Judgement: a touchscreen combined with a few physical buttons and audio gives the best balance [1]'],
  acc:'Maximum [6]. A response with only one side scores a maximum of [3].',kw:['strength','limitation','tactile','judgement','cost'],tip:'Aim for three developed points on each side, then a one-sentence decision.'}
 ]},

/* ============ CASE 3 ============ */
{id:'cs3',title:'Case study 3: Warehouse packing bench',paper:'Paper 2 style · SL + HL',
 scenario:`<p>Workers at an online retailer’s warehouse pack parcels on a fixed bench for an 8-hour shift with one 30-minute break. Several workers report back and shoulder pain. A health-and-safety review gathers the information in Table 3. Ergonomic guidance for this task is that the bench surface should be about <b>50 mm below elbow height</b>.</p>`,
 fig:`<svg viewBox="0 0 520 250" role="img" aria-label="A worker bending forward at a low packing bench. A dashed ghost figure shows an upright posture.">${mk('a3')}
<line x1="10" y1="228" x2="510" y2="228" stroke="var(--ink)" stroke-width="2"/>
<rect x="250" y="158" width="190" height="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><line x1="265" y1="168" x2="265" y2="228" stroke="var(--ink)" stroke-width="5"/><line x1="425" y1="168" x2="425" y2="228" stroke="var(--ink)" stroke-width="5"/>
<rect x="262" y="118" width="52" height="40" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><text x="268" y="142">4.5 kg</text>
<path d="M186 228 L190 140 L232 98" stroke="var(--ink)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M232 98 L266 122" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
<circle cx="250" cy="88" r="11" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M168 228 L200 228" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>
<path d="M190 140 L190 70" stroke="var(--ink2)" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round" fill="none"/><circle cx="190" cy="56" r="11" fill="none" stroke="var(--ink2)" stroke-dasharray="4 3"/>
<line x1="330" y1="132" x2="490" y2="132" stroke="var(--ink2)" stroke-dasharray="4 4"/><text x="326" y="106">ideal bench height</text><text x="326" y="122">(near elbow height)</text>
<line x1="470" y1="168" x2="470" y2="228" stroke="var(--blue)" stroke-width="2" marker-start="url(#a3)" marker-end="url(#a3)"/><text x="360" y="246">current bench 700 mm</text>
<text x="20" y="100">back bent forward</text><text x="20" y="116">for every parcel</text></svg>`,
 cap:'Figure 3: Worker at the current packing bench (solid) and an upright posture (dashed). Not to scale.',
 table:`<table class="t"><tr><th colspan="2">Table 3: Task and worker data (illustrative)</th></tr>
 <tr><td>Parcel handling rate</td><td>1 parcel every 12 seconds</td></tr><tr><td>Mean parcel mass</td><td>4.5 kg</td></tr><tr><td>Current bench height</td><td>700 mm (fixed)</td></tr>
 <tr><td>Standing elbow height, 5th percentile</td><td>960 mm</td></tr><tr><td>Standing elbow height, 50th percentile</td><td>1040 mm</td></tr><tr><td>Standing elbow height, 95th percentile</td><td>1130 mm</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:1,ref:'1.1.6',q:'From force, repetition, duration and posture, identify the factor most clearly shown in Figure 3.',
  award:'Award [1] for the correct factor.',pts:['<b>Posture</b> (the back is bent forward) [1]'],acc:'Accept: awkward or poor posture. Do not accept: repetition (this is shown by Table 3 and not by the figure).',kw:['posture'],tip:'Read the question carefully: it asks about the factor shown in the figure.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.1.6',q:'Apply the data in Table 3 to determine the total mass of parcels one worker handles in one hour.',
  award:'Award [1] for the number of parcels per hour. Award [1] for the correct mass with units.',pts:['3600 ÷ 12 = <b>300 parcels</b> per hour [1]','300 × 4.5 = <b>1350 kg</b> per hour [1]'],acc:'Follow-through marks apply if the first answer is wrong but used correctly.',kw:['300 parcels','1350 kg'],tip:'Convert one hour to seconds first. Show each step.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'1.1.3',q:'The bench surface should be 50 mm below elbow height. Apply Table 3 to determine the range of bench heights needed to suit the 5th to 95th percentile workers.',
  award:'Award [1] for each correct end of the range.',pts:['5th percentile: 960 − 50 = <b>910 mm</b> [1]','95th percentile: 1130 − 50 = <b>1080 mm</b> [1]'],acc:'Accept 910–1080 mm written as a range.',kw:['910 mm','1080 mm'],tip:'Work out both ends of the range, then state it with units.'},
 {l:'(d)',cmd:'Explain',marks:4,ref:'1.1.6',q:'Explain two ways in which the current bench height of 700 mm could harm the health of the workers.',
  award:'Award [1] for each way identified and [1] for each reason, up to [4 max].',pts:['The bench is far below elbow height, so workers <b>bend forward</b> (poor posture) [1] which strains the lower back and can lead to musculoskeletal injury [1]','Posture is held for the whole shift (<b>duration</b>) [1] so muscles <b>fatigue</b> and the chance of errors and accidents rises [1]','A parcel is handled every 12 seconds (<b>repetition</b>) [1] which causes repetitive strain injury in the shoulders, back and wrists [1]','Lifting from a low bench needs more <b>force</b> from the back [1] which increases the risk of injury [1]'],
  acc:'Each way must be a different factor.',kw:['posture','duration','repetition','fatigue','force','strain'],tip:'Pair each factor from the guide with the part of the body or the result for the worker.'},
 {l:'(e)',cmd:'Justify',marks:3,ref:'1.1.4',q:'Justify the decision to make the bench height adjustable instead of fixing it at the 50th percentile height.',
  award:'Award [1] for each valid reason up to [3 max].',pts:['The range of bench heights needed is about <b>170 mm</b> (910–1080 mm), so one fixed height cannot suit everyone [1]','A fixed 50th percentile bench makes short workers reach up and tall workers <b>stoop</b>, which causes the same health problems [1]','<b>Adjustability</b> fits any worker or shift, covers different tasks, and lowers the injury and absence costs for the company [1]'],
  acc:'Accept: “a range of sizes” is not suitable because workers share benches.',kw:['adjustable','range','50th percentile','170 mm'],tip:'“Justify” means give reasons backed by evidence from the data.'}
 ]},

/* ============ CASE 4 ============ */
{id:'cs4',title:'Case study 4: Child car seat',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A company designs a child car seat for children aged 1 to 8 years. Dynamic movement matters because children shift their position, but the first prototype is based on <b>static</b> seated shoulder height (Table 4). The seat will be sold in several countries.</p>`,
 fig:`<svg viewBox="0 0 520 260" role="img" aria-label="Side view of a child car seat with an adjustable headrest and a harness. Horizontal dashed lines mark the seated shoulder height of a small child and of a larger child.">${mk('a4')}
<line x1="60" y1="225" x2="480" y2="225" stroke="var(--ink)" stroke-width="2"/>
<path d="M150 218 L300 214" stroke="var(--ink)" stroke-width="14" stroke-linecap="round"/><path d="M150 218 L166 70" stroke="var(--ink)" stroke-width="14" stroke-linecap="round"/>
<rect x="156" y="34" width="38" height="36" rx="6" fill="var(--mark)" stroke="var(--ink)" stroke-width="2"/><line x1="214" y1="30" x2="214" y2="72" stroke="var(--blue)" stroke-width="2" marker-start="url(#a4)" marker-end="url(#a4)"/>
<text x="224" y="56">adjustable headrest</text>
<circle cx="200" cy="124" r="14" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M200 140 L200 200 L280 204" stroke="var(--ink)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M204 156 L272 196" stroke="var(--blue)" stroke-width="3" fill="none"/><text x="252" y="176">harness</text>
<line x1="206" y1="150" x2="440" y2="150" stroke="var(--ink2)" stroke-dasharray="4 4"/><line x1="206" y1="118" x2="440" y2="118" stroke="var(--ink2)" stroke-dasharray="4 4"/><line x1="296" y1="210" x2="440" y2="210" stroke="var(--ink2)" stroke-dasharray="4 4"/>
<line x1="360" y1="210" x2="360" y2="150" stroke="var(--blue)" stroke-width="2" marker-start="url(#a4)" marker-end="url(#a4)"/><line x1="430" y1="210" x2="430" y2="118" stroke="var(--blue)" stroke-width="2" marker-start="url(#a4)" marker-end="url(#a4)"/>
<text x="290" y="243">small child</text><text x="400" y="243">larger child</text><text x="330" y="106">seated shoulder height</text></svg>`,
 cap:'Figure 4: Child car seat with adjustable headrest and harness. The solid figure is a small child and the dashed outline a larger child (not to scale).',
 table:`<table class="t"><tr><th colspan="4">Table 4: Illustrative seated shoulder height (mm)</th></tr><tr><th>Age</th><th>5th</th><th>50th</th><th>95th</th></tr>
 <tr><td>1 year</td><td>280</td><td>310</td><td>340</td></tr><tr><td>4 years</td><td>350</td><td>385</td><td>420</td></tr><tr><td>8 years</td><td>430</td><td>470</td><td>510</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'1.1.2',q:'State one reason why adult anthropometric data cannot be used to design the child seat.',
  award:'Award [1] for a valid reason.',pts:['Children are <b>smaller</b> and have different proportions (for example a larger head compared with the body) [1]','Children are <b>still growing</b>, so dimensions change with age [1]'],acc:'Any one reason. Do not accept: “children are different” without a reason.',kw:['smaller','proportions','growing'],tip:'Give one specific difference.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.1.3',q:'Apply Table 4 to determine the range of seated shoulder height a single seat for children aged 1 to 8 must cover.',
  award:'Award [1] for each end of the range, or [1] for the difference.',pts:['Smallest value: 1 year, 5th percentile = <b>280 mm</b> [1]','Largest value: 8 years, 95th percentile = <b>510 mm</b> (range 230 mm) [1]'],acc:'Accept 280–510 mm or 230 mm.',kw:['280 mm','510 mm','230 mm'],tip:'Take the lowest and highest values in the whole table, not the 50th percentile.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.1.4',q:'Explain why the company uses an adjustable headrest and harness rather than selling three separate fixed-size seats.',
  award:'Award [1] for each valid point up to [3 max].',pts:['A range of <b>230 mm</b> is too large for one fixed size, so adjustment is needed [1]','The seat <b>grows with the child</b>, which gives a longer useful life and lowers the cost for the family [1]','Adjustment allows a precise fit for children between the sizes (for example between the 5th and 95th percentile) and uses less material than three seats [1]'],
  acc:'Accept: sustainability (fewer products made).',kw:['adjustable','grows with the child','range','cost'],tip:'Use the data from part (b) in your answer.'},
 {l:'(d)',cmd:'Evaluate',marks:4,ref:'1.1.4',q:'Evaluate the use of adjustability in the child car seat.',
  award:'Award [1] for each valid point, up to [2 max] for strengths and [2 max] for limitations. Reward a judgement.',pts:['Strength: fits a wide range of children and different body proportions [1]','Strength: long service life and good value, with less waste [1]','Limitation: more parts, so higher manufacturing cost and weight, and mechanisms can wear or fail [1]','Limitation: a parent may set it up wrongly, so the child is less safe (user error) [1]','Judgement: good provided the adjustment is simple, with clear indicators or a one-handed mechanism [1]'],
  acc:'Maximum [4]. A one-sided answer scores a maximum of [2].',kw:['strength','limitation','user error','judgement'],tip:'Include at least one safety point because this product protects a child.'},
 {l:'(e)',cmd:'Explain',marks:2,ref:'1.1.2',q:'Explain why the company should use data from each country where the seat is sold.',
  award:'Award [1] for each valid point up to [2 max].',pts:['<b>Ethnicity</b> and region affect body proportions and dimensions, so data differ between populations [1]','Using the wrong data means the seat may <b>not fit</b>, which reduces safety and comfort [1]'],
  acc:'Accept: age and gender are not the answer here.',kw:['ethnicity','population','fit','safety'],tip:'Mention the factor from the guide (ethnicity) and the effect on the user.'}
 ]},

/* ============ CASE 5 ============ */
{id:'cs5',title:'Case study 5: Hospital infusion pump',paper:'Paper 2 style · SL + HL',
 scenario:`<p>An infusion pump delivers medicine to patients on a busy hospital ward. Nurses say they sometimes miss alarms and confuse the status lights. The pump has a red and a green LED, four buttons and a small buzzer. Tests show the buzzer is 50 dB and the ward’s background noise is between 55 and 65 dB. Around 1 in 12 men have red–green colour vision deficiency.</p>`,
 fig:`<svg viewBox="0 0 520 250" role="img" aria-label="Front of an infusion pump showing a small screen reading 125 millilitres per hour, a red and a green LED side by side, four buttons and a buzzer grille.">
<rect x="130" y="14" width="260" height="222" rx="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
<rect x="150" y="32" width="220" height="74" rx="4" fill="var(--paper)" stroke="var(--ink)"/><text x="170" y="60" style="font-size:20px">125 mL/h</text><text x="170" y="86">Channel A</text>
<circle cx="190" cy="140" r="13" fill="#d33" stroke="var(--ink)" stroke-width="2"/><circle cx="240" cy="140" r="13" fill="#2a8" stroke="var(--ink)" stroke-width="2"/>
<g stroke="var(--ink)" stroke-width="2"><line x1="300" y1="128" x2="360" y2="128"/><line x1="300" y1="138" x2="360" y2="138"/><line x1="300" y1="148" x2="360" y2="148"/><line x1="300" y1="158" x2="360" y2="158"/></g>
<text x="300" y="176">buzzer</text>
<g fill="var(--paper)" stroke="var(--ink)" stroke-width="2"><circle cx="175" cy="205" r="14"/><circle cx="225" cy="205" r="14"/><circle cx="275" cy="205" r="14"/><circle cx="325" cy="205" r="14"/></g>
<text x="169" y="210">▲</text><text x="219" y="210">▼</text><text x="269" y="210">■</text><text x="319" y="210">✔</text>
<text x="140" y="178">LEDs have no text labels</text></svg>`,
 cap:'Figure 5: Front panel of the infusion pump (not to scale).',
 table:`<table class="t"><tr><th colspan="2">Table 5: Sound levels (illustrative)</th></tr><tr><td>Pump buzzer</td><td>50 dB</td></tr><tr><td>Ward background noise</td><td>55–65 dB</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'List',marks:3,ref:'1.1.7',q:'List the three stages of the human information processing system.',
  award:'Award [1] for each stage.',pts:['<b>Input</b> (information is received through the senses) [1]','<b>Process</b> (the brain interprets and decides) [1]','<b>Output</b> (the user responds, for example presses a button) [1]'],acc:'Accept: processing or decision.',kw:['input','process','output'],tip:'“List” needs only the names, no explanation.'},
 {l:'(b)',cmd:'Explain',marks:2,ref:'1.1.7',q:'Using Table 5, explain why a nurse may not notice the alarm.',
  award:'Award [1] for each valid point up to [2 max].',pts:['The buzzer (50 dB) is <b>quieter</b> than the background noise (55–65 dB) [1]','So the sound is <b>masked</b> and the information does not reach the nurse at the <b>input</b> stage [1]'],acc:'Accept: “below the hearing threshold in the ward”.',kw:['quieter','masked','input','hearing'],tip:'Use the numbers in the table as evidence.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.1.6',q:'Explain why using only a red and a green LED is poor design for some nurses.',
  award:'Award [1] for each valid point up to [3 max].',pts:['Some users have <b>colour vision deficiency</b> (red–green), so they cannot tell the two lights apart [1]','They may <b>misread</b> the pump status, for example think it is working when it has stopped [1]','The error could <b>delay treatment</b> and harm the patient; a safer design adds shape, position or text as well as colour [1]'],
  acc:'Accept: colour perception. Do not accept: “colour blind people cannot see the pump”.',kw:['colour vision deficiency','misread','patient','shape','text'],tip:'Link the physiological limit (colour perception) to a consequence and to a fix.'},
 {l:'(d)',cmd:'Describe',marks:4,ref:'1.1.7',q:'Describe two changes that use different senses to make the alarm easier to notice.',
  award:'Award [1] for each change identified and [1] for each development, up to [4 max].',pts:['<b>Sound</b>: a louder alarm above 65 dB [1] with a distinct pitch or rhythm so it stands out from other ward noises [1]','<b>Vision</b>: a flashing, labelled message such as “OCCLUSION” on the screen [1] that is visible from across the room and works for colour-deficient nurses [1]','<b>Touch</b>: a vibration sent to a nurse’s wearable device [1] which works when the ward is loud or the nurse is not looking [1]'],
  acc:'Two different senses are needed for full marks.',kw:['sound','vision','touch','distinct','vibration'],tip:'Name the sense, say what changes, and say why it helps.'},
 {l:'(e)',cmd:'Justify',marks:3,ref:'1.1.7',q:'Justify the use of more than one sense to give critical warnings from the pump.',
  award:'Award [1] for each valid reason up to [3 max].',pts:['Some users may have a <b>sensory limit</b> (hearing loss, colour vision deficiency) [1]','Users may be <b>distracted</b> or the environment may hide one signal, for example noise [1]','A warning given through two senses is more likely to be received, so the response is faster and a <b>serious error</b> is less likely [1]'],
  acc:'The word “redundancy” may be used for full credit.',kw:['sensory limit','distracted','redundancy','serious error'],tip:'Give reasons with evidence from the case, not general statements.'}
 ]}
];

/* ---- Paper 1 style short-answer set ---- */
T.short={title:'Short-answer set',paper:'Paper 1 style · SL + HL',
 intro:'<p>Quick questions of the kind that appear in the short-answer section. Each question is independent.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'1.1.3',q:'State what the 50th percentile value of a body dimension represents.',
  award:'Award [1].',pts:['The <b>middle</b> value: half the population are smaller and half are larger [1]'],acc:'Accept: median or “average” of the sample. Do not accept: “most people”.',kw:['middle','half'],tip:'Say what the number means for the population.'},
 {l:'2',cmd:'Identify',marks:1,ref:'1.1.5',q:'A stop button on a school bus must be reachable by all pupils sitting in their seats. Identify the percentile of arm reach that should be used.',
  award:'Award [1].',pts:['<b>5th percentile</b> [1]'],acc:'Do not accept: 95th or 50th.',kw:['5th percentile','reach'],tip:'Reach problem: smallest user.'},
 {l:'3',cmd:'Outline',marks:2,ref:'1.1.2',q:'Outline why anthropometric data may become out of date.',
  award:'Award [1] for each valid point up to [2 max].',pts:['The population changes over time (for example average height and weight increase with better nutrition) [1]','Data collected from an old or small sample may not represent today’s users or a new market [1]'],acc:'Accept: migration or lifestyle change.',kw:['population','sample','change over time'],tip:'Two brief, separate points.'},
 {l:'4',cmd:'Apply',marks:2,ref:'1.1.3',q:'The 95th percentile standing height of workers is 1830 mm. A doorway needs 100 mm of clearance. Apply this data to determine the minimum height of the doorway.',
  award:'Award [1] for the correct data and [1] for the correct answer.',pts:['Uses <b>1830 mm</b> (95th percentile) [1]','1830 + 100 = <b>1930 mm</b> [1]'],acc:'Do not accept an answer without units.',kw:['1830 mm','1930 mm','clearance'],tip:'Add the clearance to the largest user.'},
 {l:'5',cmd:'Explain',marks:2,ref:'1.1.2',q:'Explain why a pair of scissors with a symmetrical grip is a better choice for a school classroom than one shaped for the right hand.',
  award:'Award [1] for each valid point up to [2 max].',pts:['Students include <b>left-handed and right-handed</b> users [1]','A right-hand shape is uncomfortable and unsafe for left-handed users, so a symmetrical grip fits more users [1]'],acc:'Accept: ambidextrous.',kw:['left-handed','right-handed','symmetrical'],tip:'Name the users who are affected and the effect.'},
 {l:'6',cmd:'Explain',marks:3,ref:'1.1.7',q:'A lift announces “third floor” aloud and also shows the number on a display. Explain why the designer uses two senses.',
  award:'Award [1] for each valid point up to [3 max].',pts:['<b>Sound</b> helps passengers with a visual impairment [1]','<b>Vision</b> helps passengers who are deaf or who are in a noisy lift [1]','The two sources <b>confirm</b> each other, which reduces errors [1]'],acc:'Accept: inclusive design.',kw:['sound','vision','visual impairment','confirm'],tip:'Cover both user groups and the combined benefit.'},
 {l:'7',cmd:'Justify',marks:3,ref:'1.1.2',q:'A hard hat is made in Europe but sold in East Asia. Justify the use of anthropometric data from the East Asian market.',
  award:'Award [1] for each valid reason up to [3 max].',pts:['<b>Head shape and size</b> differ between populations [1]','Using European data may give a poor <b>fit</b> that lets the helmet move or fall off [1]','A good fit is a <b>safety</b> requirement, so data from the target users must be used [1]'],acc:'Accept: ethnicity as the factor.',kw:['head shape','fit','safety','target users'],tip:'Give reasons with evidence, not opinion.'},
 {l:'8',cmd:'Describe',marks:3,ref:'1.1.6',q:'Describe how a designer could reduce fatigue when a user holds a power drill for long periods.',
  award:'Award [1] for each valid point up to [3 max].',pts:['<b>Reduce weight</b> and balance the tool so the wrist does not carry a load [1]','Add a <b>second handle</b> or support so the force is shared [1]','Use a <b>soft grip</b> and vibration damping to reduce strain on the hand [1]'],acc:'Accept any realistic feature that reduces force, duration or poor posture.',kw:['weight','balance','grip','vibration','fatigue'],tip:'Each feature should reduce force, duration or awkward posture.'}
 ]};
})();
/* IB-style mark scheme details for the A1.1 theory questions: award wording, accept / do not accept, keywords */
(function(){
const T=window.TOPICS['a1-1'];
const M=[
 {award:'Award [1] for each valid point up to [2 max].',kw:['ergonomics','people','products','environment','safety','comfort','efficiency'],acc:'Accept: “how people interact with products or environments”. Do not accept: “making things comfortable” with no link to people.'},
 {award:'Award [1] for each feature described and linked to the user up to [4 max]. A feature on its own, with no benefit to the user, does not score.',kw:['handle','grip','force','fatigue','safe','efficient','usable','sizes'],acc:'Accept any realistic ergonomic feature of a knife. Do not accept: sharper blade (not an ergonomic feature).'},
 {award:'Award [1] for each valid point up to [3 max]. A difference needs both sides to be shown.',kw:['static','dynamic','fixed position','moving','reach','stature'],acc:'Accept: static = “structural” and dynamic = “functional” data.'},
 {award:'Award [1] for each limitation up to [2 max].',kw:['calibrated','trained','time of day','clothing','sample'],acc:'Each limitation needs a reason or effect. Do not accept: “data can be wrong” on its own.'},
 {award:'Award [1] for each valid point up to [4 max].',kw:['5th percentile','95th percentile','reach','clearance','smallest','largest'],acc:'Accept the idea without exact wording. Do not accept: a percentile with no reason.'},
 {award:'Award [1] for each valid point up to [3 max].',kw:['method of extremes','safety','2.5th','97.5th','injury','risk'],acc:'Accept: 1st and 99th percentile.'},
 {award:'Award [1] for each valid point up to [4 max]. The last mark is for correctly identifying a product.',kw:['range of sizes','adjustability','cost','growth','mechanism','fit'],acc:'Accept products such as adjustable office chair, car seat, adjustable spanner or desk. Do not accept: shoes or clothes for adjustability.'},
 {award:'Award [1] for each developed point up to [6 max]. A factor needs the effect on data and/or on the design.',kw:['age','gender','ethnicity','disability','target user group','data set'],acc:'Accept other relevant factors such as nutrition or occupation if developed.'},
 {award:'Award [1] for each factor applied to the tool up to [4 max].',kw:['force','repetition','duration','posture','strain','fatigue'],acc:'Accept: any reasonable power-tool example. Do not accept: a factor with no application to the tool.'},
 {award:'Award [1] for each developed point up to [6 max]. Reward examples and a limitation.',kw:['vision','sound','touch','smell','taste','warning','feedback','limitation'],acc:'Accept any realistic product example.',cmd:'Explain',q:'Explain how the human senses can be used to influence the design of products.',tip:'The syllabus statement uses the word “discuss”, so you may see that wording. Give several developed points, each with an example, and mention a limitation.'},
 {award:'Award [1] for each valid point up to [3 max].',kw:['input','process','output','delay','error','sense'],acc:'Accept any realistic cause at the stage named.'}
];
T.theory.forEach((q,i)=>Object.assign(q,M[i]||{}));
})();
