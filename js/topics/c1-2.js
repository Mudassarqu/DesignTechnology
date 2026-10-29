window.TOPICS=window.TOPICS||{};
(function(){
/* normal curve for case study 2 */
const M=1750,S=75,pdf=v=>Math.exp(-0.5*((v-M)/S)**2)*100;
const pts=[];for(let v=1500;v<=2000;v+=10)pts.push([v,+pdf(v).toFixed(1)]);
const curve=Fig.xy([{name:'',pts}],{x0:1500,x1:2000,y0:0,y1:100,xl:'Adult stature (mm)',yl:'Relative number of people',h:250,title:'Distribution of adult stature (illustrative)',marks:[[1603,+pdf(1603).toFixed(1)],[1750,100],[1897,+pdf(1897).toFixed(1)]]});

window.TOPICS['c1-2']={
id:'c1-2',code:'C1.2',title:'Inclusive design',level:'SL + HL',hours:2,
guiding:'How do designers design mainstream products and environments that are accessible and attractive to the largest possible number of people?',
pptx:'resources/C1.2_Inclusive_Design.pptx',pptxName:'C1.2 Inclusive design (slides)',

notes:[
{id:'s1121a',ref:'1.2.1',title:'What inclusive design is',
 must:'Discuss how inclusive design requires designing universally accessible products for all users, including those with physical, sensory and cognitive impairments.',
 html:`
<p><b>Inclusive design</b> creates mainstream products, services and environments that can be used by the <b>widest possible range of people</b>, whatever their age or ability. It aims for products that are <b>universally acceptable</b> and attractive, not “special” products that single people out.</p>
<div class="tw"><table class="t"><tr><th>Impairment</th><th>Examples of people affected</th><th>Design response</th></tr>
<tr><td><b>Physical</b></td><td>Arthritis, limited reach, wheelchair users, tremor, weak grip, one hand</td><td>Large or lever handles, low-force controls, reachable heights, step-free access, one-handed use</td></tr>
<tr><td><b>Sensory</b></td><td>Low vision, blindness, colour blindness, hearing loss, reduced touch</td><td>High contrast, large text, tactile markings, audio and visual alerts, captions, not relying on colour alone</td></tr>
<tr><td><b>Cognitive</b></td><td>Dyslexia, dementia, autism, learning difficulties, stress or distraction</td><td>Clear, simple layouts; consistent icons; plain language; step-by-step instructions; error prevention</td></tr></table></div>
<h3>Why it matters</h3>
<ul class="tight"><li><b>Social</b>: fair access and dignity for all users.</li><li><b>Commercial</b>: populations are ageing and many people have some form of impairment, so ignoring them excludes a large market.</li><li><b>Better for everyone</b>: features designed for impairments (for example captions, ramps, easy-grip handles) help people in many situations.</li><li><b>Legal</b>: accessibility laws and standards apply to many buildings and websites.</li></ul>
<div class="key"><b>Related terms.</b> <b>Accessibility</b> means a product can be used by people with disabilities. <b>Universal design</b> aims for one design that suits everyone. <b>Inclusive design</b> is a process that designs <b>with</b> a wide range of users and recognises that one size may not fit all.</div>
<div class="tip"><b>Exam tip.</b> “Discuss” needs advantages and limitations. Link each group of users to a feature and a named product.</div>`},

{id:'s1121b',ref:'1.2.1',title:'Classifying users',
 must:'Discuss how inclusive design requires designing for all users, including those with physical, sensory and cognitive impairments.',
 html:`
<p>To understand needs, designers <b>classify user populations</b> into groups, for example by <b>age, gender, physical condition, habits and interests</b>. Each group may give different feedback.</p>
<div class="ex"><b class="l">Example.</b> A group of users with arthritis in the wrists will have different concerns about jar lids, taps and keyboards than a group without arthritis. A designer who interviews both groups will find solutions that work for each.</div>
<h3>The pyramid model of diversity</h3>
<p>Imagine a pyramid. The <b>wide base</b> is people with no difficulty. Moving up are people with mild, then moderate impairments, and at the <b>top</b> are people with severe impairments. Inclusive design tries to extend the mainstream product <b>higher up the pyramid</b>, accepting that some people at the very top may still need specialist products.</p>
<div class="tip"><b>Exam tip.</b> Explain that the aim is the widest possible market, not necessarily everyone.</div>`},

{id:'s1122',ref:'1.2.2',title:'Average person and the limits of inclusive design',
 must:'Discuss how the average person correlates to the 50th percentile adult and child, and how it is not always appropriate to design for the average person. Discuss why inclusive design is not always possible.',
 html:`
<h3>The average person</h3>
<p>The <b>50th percentile</b> value is the middle of the data: half of the population is above and half below it. People often say “the average person” for the 50th percentile adult or child. Designing only for the average is a poor strategy: it <b>fits only about half</b> of the population for any single dimension, and nobody is average in every dimension.</p>
<div class="ex"><b class="l">Worked example.</b> A doorway designed for the average height (1750 mm) excludes about half the adults, who are taller. A doorway designed using the average hip width does not fit half the people who are wider. You must consider the extremes of <b>each</b> dimension.</div>
<h3>Why inclusive design is not always possible</h3>
<div class="tw"><table class="t"><tr><th>Limitation</th><th>Explanation and example</th></tr>
<tr><td>Conflicting needs</td><td>What suits one group harms another: tiny buttons suit nimble hands but exclude users with motor impairments.</td></tr>
<tr><td>Cost and time</td><td>Extra research, features and testing add cost; small firms may not afford several modes.</td></tr>
<tr><td>Technology limits</td><td>Older hardware may not support high-contrast or voice control.</td></tr>
<tr><td>Lack of knowledge</td><td>Designers may not know about certain impairments or may rely on default assumptions.</td></tr>
<tr><td>Variety of human differences</td><td>It is impossible to predict and test every sensory, physical, cognitive and cultural variation.</td></tr>
<tr><td>Regulations and existing buildings</td><td>Old infrastructure may not allow ramps or wider doors.</td></tr>
<tr><td>Complexity</td><td>More modes can make products heavy, slow and harder to maintain.</td></tr>
<tr><td>Aesthetics and branding</td><td>Accessibility features may clash with a minimalist brand.</td></tr>
<tr><td>Cultural context</td><td>What is accessible in one place may not be in another (colour meanings, internet speed).</td></tr></table></div>
<div class="tip"><b>Exam tip.</b> Name two or three limitations with a product, and say what the designer can do (specialist version, adjustable features).</div>`},

{id:'s1123',ref:'1.2.3',title:'Design for extremes',
 must:'Discuss the advantages of designing for extremes when designing products for a general population, and identify where a design for extremes strategy has been used.',
 html:`
<p><b>Design for extremes</b> (the <b>method of extremes</b>) means designing for the users at the <b>ends of the range</b>, for example the smallest or weakest and the largest or strongest, plus one or two intermediate users. Products that suit the extremes then suit most people between them, and often the general population too.</p>
<div class="ex"><b class="l">Worked example.</b> Kitchen worktop height. Test users at the 2.5th percentile (1500 mm tall), 50th percentile (1625 mm) and 97.5th percentile (1740 mm). A height or adjustable worktop that suits both extremes will suit those in between.</div>
<h3>Advantages</h3>
<ul class="tight"><li><b>Widest market</b>: covers most of the population with one design.</li><li><b>Better for everyone</b>: features for extremes also help the general population (for example a low-force handle helps people carrying shopping).</li><li><b>Safer</b>: designing for the weakest or smallest protects the most vulnerable.</li><li><b>Fewer sizes or variants</b> needed, lowering cost.</li><li><b>Reduces stigma</b>: mainstream products feel normal to all users.</li></ul>
<h3>Choosing the percentile</h3>
<div class="tw"><table class="t"><tr><th>Design purpose</th><th>Examples</th><th>Accommodate</th></tr>
<tr><td>Easy reach</td><td>Shelving, dashboards, ticket machines</td><td>Smallest user (5th percentile)</td></tr>
<tr><td>Clearance</td><td>Doorways, cinema seats, inspection covers</td><td>Largest user (95th percentile)</td></tr>
<tr><td>Easy operation</td><td>Door handles, switches, screw lids</td><td>Weakest user (5th percentile force)</td></tr>
<tr><td>Fit between user and product</td><td>Seats, helmets, pushchairs</td><td>Range 5th to 95th</td></tr>
<tr><td>Safety-critical or risk of injury</td><td>Machine guards, railings, emergency stops</td><td>Wider range, such as 1st to 99th</td></tr></table></div>
<h3>Where it has been used</h3>
<ul class="tight"><li><b>Easy-grip kitchen tools</b> (for example thick soft handles): designed for arthritis, preferred by all.</li><li><b>Dropped kerbs and ramps</b>: for wheelchair users, but used by people with prams and suitcases.</li><li><b>Captions and subtitles</b>: for deaf users, but also used in noisy places.</li><li><b>Automatic doors and lever handles</b>: for limited strength, but easier for everyone.</li><li><b>Adjustable seats and pedals in cars</b>: cover small to large drivers.</li></ul>
<div class="tip"><b>Exam tip.</b> Never compromise safety: for safety-critical design use the more extreme percentiles. Say why that percentile suits the function.</div>`}
],

cards:[
['Inclusive design','Designing mainstream products that can be used by the widest range of people.'],
['Accessibility','The extent to which a product can be used by people with disabilities.'],
['Universal design','Designing one product that suits all users.'],
['Physical impairment','A limit in movement, strength, reach or dexterity.'],
['Sensory impairment','A limit in sight, hearing, touch, smell or taste.'],
['Cognitive impairment','A limit in thinking, learning, memory or understanding.'],
['Pyramid model of diversity','A model showing mainstream users at the base and people with severe needs at the top.'],
['User classification','Grouping users by age, gender, ability, habits or interests.'],
['Arthritis','A condition causing joint pain and stiffness that affects grip and movement.'],
['Percentile','The percentage of a population at or below a given value.'],
['50th percentile','The middle value: half the population is above and half below.'],
['Average person','Often taken as the 50th percentile adult or child.'],
['5th percentile','A small or weak user: 95% of people are bigger or stronger.'],
['95th percentile','A large user: only 5% of people are bigger.'],
['Design for extremes','Designing for users at both ends of the range so most people in between are included.'],
['Method of extremes','Selecting sample users at the extremes of the population plus one or two intermediate values.'],
['Clearance','The space needed for a user to pass or fit without contact or trapping.'],
['Reach','How far a user can stretch to operate a control.'],
['Grip strength','The force a person can apply when gripping.'],
['Low-force control','A control that needs little force to operate.'],
['Lever handle','A door handle that can be operated with an arm or elbow.'],
['High contrast','A strong difference in tone or colour that makes things easy to see.'],
['Tactile marking','Raised or textured marks that can be felt.'],
['Captions','Text showing speech and sounds in video.'],
['Screen reader','Software that reads screen text aloud.'],
['Colour blindness','A reduced ability to tell some colours apart.'],
['Dyslexia','A learning difference that affects reading and spelling.'],
['Dropped kerb','A sloped kerb that allows wheelchair, pram or suitcase access.'],
['Ageing population','A population in which a larger share of people are older.'],
['Adjustability','A product feature that lets users change size, height or setting.'],
['Stigma','A negative label that can come from being given a special product.'],
['Mainstream product','A product designed for general use.'],
['Specialist product','A product designed for a particular group or need.'],
['Conflicting needs','Needs of one group that work against those of another.'],
['Plain language','Clear, simple wording.'],
['Anthropometric data','Measurements of the human body.'],
['Legacy system','An older system that constrains new design.'],
['Safety-critical','A design where failure could cause serious injury.'],
['User-centred research','Gathering information from users to guide design.'],
['Dignity','Being respected and treated as equal.']
],

mcq:[
{ref:'1.2.1',q:'Inclusive design aims to…',o:['Serve the widest possible range of users','Serve only the average user','Serve only disabled users','Serve only one age group'],a:0,why:'It aims for the widest possible audience.',live:true},
{ref:'1.2.1',q:'Which is a physical impairment?',o:['Limited grip strength','Colour blindness','Dyslexia','Hearing loss'],a:0,why:'Strength and dexterity are physical.',live:true},
{ref:'1.2.1',q:'Colour blindness is a…',o:['Sensory impairment','Physical impairment','Cognitive impairment','Social impairment'],a:0,why:'It affects sight.'},
{ref:'1.2.1',q:'Dyslexia is classed as…',o:['Cognitive','Physical','Sensory','Legal'],a:0,why:'It affects reading and processing information.',live:true},
{ref:'1.2.1',q:'A key reason for inclusive design is that populations are…',o:['Ageing and diverse','Identical','Shrinking in height','Increasing in cost'],a:0,why:'Demographic change affects design.'},
{ref:'1.2.1',q:'Captions designed for deaf users also help…',o:['People in noisy places','No one else','Only children','Only designers'],a:0,why:'They benefit the general population.',live:true},
{ref:'1.2.1',q:'At the top of the pyramid model of diversity are people with…',o:['Severe impairments','No difficulty','Mild difficulty','Average ability'],a:0,why:'They may need specialist products.'},
{ref:'1.2.2',q:'The 50th percentile means…',o:['Half the population is above and half below','50% are taller than the 95th','Everyone fits','The smallest 50%'],a:0,why:'It is the middle value.',live:true},
{ref:'1.2.2',q:'Designing only for the average person…',o:['Excludes about half the users for that dimension','Includes everyone','Is always safe','Is the best inclusive design'],a:0,why:'Half the population is above or below average.',live:true},
{ref:'1.2.2',q:'Why is inclusive design not always possible?',o:['User needs can conflict','All users are identical','It is always free','There are no impairments'],a:0,why:'One group’s solution can disadvantage another.'},
{ref:'1.2.2',q:'Which is a cost limitation?',o:['Extra research, features and testing','Cheap prototypes','Large profit','Fewer users'],a:0,why:'Inclusive features can need more time and money.'},
{ref:'1.2.2',q:'Tiny buttons on a touchscreen are a problem for users with…',o:['Motor impairments','Normal dexterity','No difficulties','High grip'],a:0,why:'They are hard to press accurately.',live:true},
{ref:'1.2.2',q:'Old buildings may not allow wide ramps because of…',o:['Regulations and structural constraints','Lack of users','High profit','Style'],a:0,why:'Legacy constraints.'},
{ref:'1.2.3',q:'Design for extremes means designing for…',o:['Users at both ends of the range','Only the average','Only the tallest','Only children'],a:0,why:'Extreme users define the range.',live:true},
{ref:'1.2.3',q:'For a doorway clearance you accommodate the…',o:['Largest user (95th percentile)','Smallest user','Median only','Lightest'],a:0,why:'If the biggest fit, everyone fits.',live:true},
{ref:'1.2.3',q:'For the height of a top shelf you accommodate the…',o:['Smallest user (5th percentile)','Largest user','Average','Heaviest'],a:0,why:'If the smallest can reach, everyone can.'},
{ref:'1.2.3',q:'For the force needed to open a door you design for the…',o:['Weakest user','Strongest user','Average','Heaviest'],a:0,why:'If the weakest can operate it, all can.',live:true},
{ref:'1.2.3',q:'For safety-critical items, designers may use…',o:['A wider range like 1st to 99th percentile','Only the 50th percentile','Only the 5th','No data'],a:0,why:'Safety must not be compromised.'},
{ref:'1.2.3',q:'Easy-grip handles on kitchen tools are an example of…',o:['Design for extremes','Planned obsolescence','Style obsolescence','Mass production'],a:0,why:'Designed for arthritis, but better for everyone.',live:true},
{ref:'1.2.3',q:'A dropped kerb is used by wheelchair users and also…',o:['People with prams and suitcases','No one else','Only cyclists','Only pedestrians'],a:0,why:'Others benefit.'},
{ref:'1.2.3',q:'An advantage of designing for extremes is…',o:['It reduces the number of variants needed','It makes products costlier always','It excludes the average','It removes safety'],a:0,why:'One design covers most people.',live:true},
{ref:'1.2.1',q:'Inclusive design differs from special-needs design because it…',o:['Is for mainstream products','Is only for experts','Is for one group','Ignores users'],a:0,why:'It focuses on better mainstream solutions.'},
{ref:'1.2.2',q:'Which percentile is shorter than 95% of the population?',o:['5th','50th','95th','99th'],a:0,why:'5th is small.'},
{ref:'1.2.3',q:'Adjustable seats in cars are an example of…',o:['Accommodating a range of users','Designing for the average only','Style obsolescence','Fixed design'],a:0,why:'They cover 5th to 95th percentile drivers.'},
{ref:'1.2.1',q:'A screen reader helps users who have…',o:['Low vision or blindness','Reduced grip','Reduced hearing','Weak legs'],a:0,why:'It reads text aloud.',live:true},
{ref:'1.2.2',q:'A brand with minimalist style may reject accessibility features because of…',o:['Aesthetics and branding conflict','Too many users','Low cost','Safety'],a:0,why:'Features such as high-contrast modes may clash.'},
{ref:'1.2.3',q:'A person 1500 mm tall is at about the…',o:['2.5th percentile in the worktop example','97.5th percentile','50th percentile','99th percentile'],a:0,why:'The example uses 1500 mm as the 2.5th percentile.'},
{ref:'1.2.1',q:'A stigma can arise when a product is…',o:['Designed as a special product for disabled people','Used by everyone','Cheap','Mainstream'],a:0,why:'Users may feel singled out.'},
{ref:'1.2.3',q:'Which dimension should be considered for each design feature?',o:['The extremes of each dimension separately','Only height','Only mass','Only colour'],a:0,why:'The tallest are not always the widest.'}
],

fib:[
{ref:'1.2.1',t:'[[Inclusive]] design aims to serve the widest possible range of users regardless of age or ability.'},
{ref:'1.2.1',t:'Physical, [[sensory]] and cognitive impairments must all be considered in inclusive design.'},
{ref:'1.2.1',t:'Dyslexia is an example of a [[cognitive]] impairment.'},
{ref:'1.2.1',t:'The [[pyramid]] model of diversity shows mainstream users at the base and severe needs at the top.'},
{ref:'1.2.2',t:'The [[50th]] percentile is the middle value, with half the population above and half below.'},
{ref:'1.2.2',t:'Designing only for the [[average]] person fails about half the users.'},
{ref:'1.2.2',t:'Inclusive design is not always possible because user [[needs|requirements]] can conflict.'},
{ref:'1.2.3',t:'Design for [[extremes]] means designing for users at both ends of the range.'},
{ref:'1.2.3',t:'For reach, accommodate the [[smallest]] user, and for clearance accommodate the [[largest]] user.'},
{ref:'1.2.3',t:'For the force needed to operate a handle, design for the [[weakest]] user.'},
{ref:'1.2.3',t:'For safety-critical designs, a wider range such as the 1st to [[99th]] percentile may be used.'},
{ref:'1.2.3',t:'A dropped [[kerb]] helps wheelchair users and people with prams.'},
{ref:'1.2.1',t:'[[Captions]] help deaf users and also people in noisy places.'},
{ref:'1.2.2',t:'A 5th percentile user is [[small]], whereas a 95th percentile user is large.'},
{ref:'1.2.1',t:'[[Universal]] design aims for one design that suits all users.'}
],

theory:[
{ref:'1.2.1',cmd:'Discuss',marks:6,q:'Discuss how inclusive design can be used to design a mobile phone for users with physical, sensory and cognitive impairments.',
 pts:['<b>Physical</b>: large touch targets and voice control for limited dexterity [1]','…a case with a good grip for weak hands [1]','<b>Sensory</b>: high contrast, adjustable text size and a screen reader for low vision [1]','…vibrations and visual alerts for hearing loss [1]','<b>Cognitive</b>: simple consistent layouts, plain language and clear icons [1]','Limitation: features may add <b>cost and complexity</b> or conflict; users should be involved in testing [1]'],
 award:'Award [1] for each valid point. A maximum of [4] if one group is missing. Reward a limitation or conclusion.',kw:['physical','sensory','cognitive','voice control','screen reader','plain language'],acc:'Maximum [6].',tip:'Cover each group with a feature.'},
{ref:'1.2.1',cmd:'Explain',marks:4,q:'Explain why inclusive design may be commercially important to a company.',
 pts:['The population is <b>ageing</b> and many people have some impairment [1]','So excluding them excludes a <b>large market</b> [1]','Mainstream products with accessible features avoid <b>stigma</b> and appeal to all [1]','Features such as captions benefit everyone, increasing <b>sales and loyalty</b> [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['ageing','market','stigma','sales'],acc:'',tip:'Link users to market size.'},
{ref:'1.2.1',cmd:'Describe',marks:3,q:'Describe the pyramid model of diversity.',
 pts:['A pyramid where the <b>base</b> represents users with no difficulty [1]','Higher levels represent <b>mild, moderate and severe</b> impairments [1]','Inclusive design extends the mainstream product up the pyramid, but the top may still need <b>specialist</b> products [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['base','severe','specialist'],acc:'A labelled sketch can score.',tip:'Describe base, levels and the aim.'},
{ref:'1.2.2',cmd:'Explain',marks:4,q:'Explain why designing a doorway for the 50th percentile adult would not be inclusive.',
 pts:['The 50th percentile is the <b>average</b>, with half the population above it [1]','About <b>half the adults</b> would be too tall (or too wide) for the doorway [1]','The tallest are not always the widest, so each dimension needs its own extreme [1]','The designer should use the 95th or 97.5th percentile for clearance [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['average','half','tall','extreme','95th'],acc:'',tip:'Say who is excluded.'},
{ref:'1.2.2',cmd:'Apply',marks:3,q:'Adult stature is normally distributed with a mean of 1750 mm and a standard deviation of 75 mm. Apply the data to calculate the height of the 97.5th percentile (mean + 1.96 standard deviations).',
 pts:['1.96 × 75 [1]','= 147 mm [1]','1750 + 147 = <b>1897 mm</b> [1]'],
 award:'Award [1] for each step. Accept 1900 mm.',kw:['1.96','147','1897'],acc:'Follow-through applies.',tip:'Mean + 1.96 SD.'},
{ref:'1.2.2',cmd:'Discuss',marks:6,q:'Discuss two reasons why inclusive design is not always possible.',
 pts:['<b>Conflicting needs</b>: what suits one group may disadvantage another [1]','Example: tiny buttons suit nimble hands but not users with motor impairment [1]','<b>Cost and time</b>: extra research, features and testing [1]','Small companies may not afford several modes [1]','Designers can respond with <b>adjustable features</b> or a specialist version [1]','Judgement: inclusive design should be pursued as far as is reasonable, balancing cost and benefit [1]'],
 award:'Award [1] for each valid point. Other reasons are accepted: technology, regulation, complexity, culture.',kw:['conflicting','cost','time','adjustable','specialist'],acc:'Maximum [6].',tip:'Two reasons, each developed with an example.'},
{ref:'1.2.3',cmd:'Explain',marks:4,q:'Explain the advantages of designing for extremes using an easy-grip kitchen tool as an example.',
 pts:['Users with <b>arthritis</b> or weak grip are at the extreme of the population [1]','A large soft handle needs <b>less force and pain</b> [1]','It is also <b>more comfortable</b> for the general population [1]','One mainstream product reduces <b>stigma</b> and widens the market [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['arthritis','less force','comfortable','mainstream'],acc:'',tip:'Extreme user, feature, benefit to all.'},
{ref:'1.2.3',cmd:'Identify',marks:3,q:'Identify the percentile that should be accommodated for (i) the height of a high shelf, (ii) cinema seat width and (iii) force to open a lid.',
 pts:['(i) <b>Smallest user</b> (5th percentile) [1]','(ii) <b>Largest user</b> (95th percentile) [1]','(iii) <b>Weakest user</b> (5th percentile force) [1]'],
 award:'Award [1] each.',kw:['5th','95th','weakest'],acc:'',tip:'Think about who is most limited.'},
{ref:'1.2.3',cmd:'Explain',marks:3,q:'Explain why designers may use a wider range of percentiles for a machine guard.',
 pts:['A machine guard is <b>safety-critical</b> [1]','Failure could cause <b>serious injury</b> [1]','So it must protect nearly everybody, for example the 1st to 99th percentile, not just 90% of people [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['safety-critical','injury','1st','99th'],acc:'',tip:'Safety is never compromised.'},
{ref:'1.2.3',cmd:'Outline',marks:4,q:'Outline two products where a design for extremes strategy has been used.',
 pts:['<b>Dropped kerb</b> designed for wheelchair users [1]','…also used by prams and suitcases [1]','<b>Captions</b> designed for deaf users [1]','…also used in noisy places [1]'],
 award:'Award [1] for each product and [1] for its wider benefit, up to [4 max].',kw:['dropped kerb','captions','wheelchair','noisy'],acc:'Any valid products.',tip:'Product and who else benefits.'},
{ref:'1.2.3',cmd:'Evaluate',marks:6,q:'Evaluate the use of design for extremes when designing a public ticket machine.',
 pts:['Design for the smallest reach, for example a seated user, so controls are <b>low enough</b> [1]','…while the tallest user can still see the screen and use it [1]','Large buttons, audio output and high contrast help users with <b>low vision or dexterity</b> and also tourists and children [1]','Limitation: one fixed height cannot suit everyone, so <b>adjustability</b> or a second machine may be needed [1]','Limitation: extra features add <b>cost and complexity</b> [1]','Judgement: design for extremes gives better access to more users and is justified for a public service [1]'],
 award:'Award [1] for each valid point. Reward a judgement.',kw:['reach','large buttons','audio','adjustability','cost','judgement'],acc:'Maximum [6].',tip:'Use extremes, benefits, limits, decision.'},
{ref:'1.2.2',cmd:'Explain',marks:3,q:'Explain why a designer should not rely on default assumptions when designing a website.',
 pts:['Defaults such as <b>sighted, able-bodied, young users</b> exclude others [1]','Poor contrast or missing alt text stops <b>screen reader</b> or low vision users [1]','Inclusive research with real users is needed to find barriers [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['sighted','contrast','screen reader','research'],acc:'',tip:'Name the excluded users.'}
],

practice:[
{id:'cs1',title:'Case study 1: A door handle for a public library',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A library is replacing its heavy door handles. A designer measures the maximum push or pull force that different users can apply with one hand (Figure 1). The old handle needs 35 N to open the door. A new lever handle design needs only 20 N. The library is used by children, older adults and people with arthritis. Data is illustrative.</p>`,
 fig:Fig.bars([['Adult 50th percentile',70],['Child (8 years)',45],['Older adult',38],['Arthritis',30]],{title:'Maximum force one hand can apply (N)',unit:' N',lw:160,max:80,hl:[3]}),
 cap:'Figure 1: Maximum hand force by user group.',
 table:`<table class="t"><tr><th colspan="3">Table 1: Handle options</th></tr><tr><th>Handle</th><th>Force to open</th><th>Operation</th></tr><tr><td>Old round knob</td><td>35 N</td><td>Grip and twist</td></tr><tr><td>New lever</td><td>20 N</td><td>Press with hand, wrist or elbow</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'1.2.3',q:'Identify the user group in Figure 1 that cannot open the door with the old handle.',award:'Award [1] each.',pts:['<b>Users with arthritis</b> [1]','They can apply only 30 N, below the 35 N needed [1]'],acc:'',kw:['arthritis','30 N'],tip:'Compare force with 35 N.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'1.2.3',q:'Apply Figure 1 to calculate the percentage margin by which the weakest group exceeds the force needed to open the new lever handle.',award:'Award [1] for each step.',pts:['Margin = 30 − 20 = 10 N [1]','10 ÷ 20 [1]','= <b>50%</b> above the force needed [1]'],acc:'Accept “1.5 times”.',kw:['10 N','50%'],tip:'Margin ÷ required force.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.2.3',q:'Explain why the designer chose the weakest user group as the design limit for the force.',award:'Award [1] for each valid point up to [3 max].',pts:['If the weakest group can operate the handle, <b>stronger users can too</b> [1]','This is the principle of design for extremes [1]','It avoids the need for a separate special handle and reduces stigma [1]'],acc:'',kw:['weakest','stronger','extremes','stigma'],tip:'Use the idea of extremes.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.2.1',q:'Describe two further features that would improve the door for users with sensory or cognitive impairments.',award:'Award [1] for each feature up to [3 max].',pts:['High-contrast handle against the door, or a <b>tactile strip</b> [1]','Clear, simple <b>push/pull signs with pictograms</b> [1]','Automatic door or audible signal for visually impaired users [1]'],acc:'Any valid features.',kw:['contrast','tactile','pictograms','audible'],tip:'Think about sight and understanding.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'1.2.1',q:'Evaluate the lever handle as an inclusive design solution for the library.',award:'Award [1] for each valid point up to [5 max]. Reward a judgement.',pts:['Low force means <b>all groups</b> in Figure 1 can open it [1]','Can be used with an elbow or one hand, helping people carrying books [1]','Mainstream design, so <b>no stigma</b> [1]','Limitation: it may not help users with <b>sensory or cognitive</b> needs without signs [1]','Judgement: a good solution for physical needs, which should be combined with other features [1]'],acc:'',kw:['all groups','elbow','stigma','sensory','judgement'],tip:'Strengths and gaps.'}
 ]},

{id:'cs2',title:'Case study 2: Doorway and counter height',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A school is designing a new entrance door and a reception counter. Adult stature is assumed to be normally distributed with a mean of 1750 mm and a standard deviation of 75 mm (Figure 2). The counter must be usable from a wheelchair. The seated eye height of wheelchair users ranges from 1000 to 1200 mm. Data is illustrative.</p>`,
 fig:curve,
 cap:'Figure 2: Adult stature. Dots mark the 2.5th, 50th and 97.5th percentile.',
 table:`<table class="t"><tr><th colspan="3">Table 2: Percentile heights</th></tr><tr><th>Percentile</th><th>Stature (mm)</th><th>Use</th></tr><tr><td>2.5th</td><td>1603</td><td>Reach to controls</td></tr><tr><td>50th</td><td>1750</td><td>Average</td></tr><tr><td>97.5th</td><td>1897</td><td>Clearance</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'1.2.2',q:'State the stature of the 50th percentile adult.',award:'Award [1].',pts:['<b>1750 mm</b> [1]'],acc:'',kw:['1750'],tip:''},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.2.3',q:'Apply Table 2 to explain which percentile should be used to set the door height, and state a suitable door height clearance.',award:'Award [1] each.',pts:['The <b>97.5th percentile</b> (largest user) [1]','At least 1897 mm; a height of <b>2000 mm</b> or more would add a margin [1]'],acc:'Accept 1900 mm or above.',kw:['97.5th','1897','2000'],tip:'Clearance uses the largest user.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.2.2',q:'Explain why setting the door height at the 50th percentile (1750 mm) would be a poor decision.',award:'Award [1] for each valid point up to [3 max].',pts:['About <b>half of the adults</b> are taller than 1750 mm [1]','They would have to duck or could hit their head [1]','The designer should use an extreme value rather than the average [1]'],acc:'',kw:['half','taller','duck','extreme'],tip:'Say who is excluded.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.2.1',q:'Describe two features of the reception counter that would make it inclusive for wheelchair users and people of different heights.',award:'Award [1] for each feature up to [3 max].',pts:['A <b>lower section</b> of the counter at a suitable height with knee space [1]','A <b>variable height or two-level counter</b> [1]','A hearing loop, large-print signs or clear lighting for sensory needs [1]'],acc:'',kw:['lower section','knee space','two-level','hearing loop'],tip:'Reach, height, space.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'1.2.3',q:'Evaluate the use of the method of extremes to set the heights of the door and the counter.',award:'Award [1] for each valid point up to [5 max]. Reward a judgement.',pts:['Using 97.5th percentile for the door ensures <b>nearly everybody</b> passes without ducking [1]','Using the smallest user reach for the counter and lowest controls <b>helps all users</b> [1]','It reduces the need for separate designs [1]','Limitation: one height for the counter cannot suit both standing and seated users, so <b>two levels</b> are needed [1]','Judgement: the method works well when each dimension is assessed separately and safety is not compromised [1]'],acc:'',kw:['97.5th','smallest','reduces','two levels','judgement'],tip:'Use percentiles for each.'}
 ]},

{id:'cs3',title:'Case study 3: A smart TV remote',paper:'Paper 2 style · SL + HL',
 scenario:`<p>A company redesigns a smart TV remote. The old remote has 45 small buttons, grey text on a dark case and no voice control. The new remote has 12 large buttons with tactile markings, high-contrast labels, a backlight and a voice search button. A user trial compares the number of users who completed five tasks without help (Figure 3). Data is illustrative.</p>`,
 fig:Fig.bars([['Older adults (old)',9],['Older adults (new)',17],['Low vision (old)',5],['Low vision (new)',16],['Whole sample (old)',60],['Whole sample (new)',84]],{title:'Users out of 100 in each group who completed all tasks',unit:'',lw:170,max:100,hl:[1,3,5]}),
 cap:'Figure 3: Task completion before and after redesign.',
 table:`<table class="t"><tr><th colspan="3">Table 3: Redesign features</th></tr><tr><th>Feature</th><th>Impairment helped</th><th>Also useful to</th></tr><tr><td>Large tactile buttons</td><td>Low vision, tremor</td><td>Watching in the dark</td></tr><tr><td>High-contrast labels</td><td>Low vision</td><td>Dim rooms</td></tr><tr><td>Voice search</td><td>Limited dexterity</td><td>Anyone typing titles</td></tr><tr><td>Fewer buttons</td><td>Cognitive load</td><td>Everyone</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:2,ref:'1.2.3',q:'Apply Figure 3 to calculate the percentage point increase in task completion for low vision users.',award:'Award [1] each.',pts:['16 − 5 [1]','= <b>11 percentage points</b> (more than three times as many users) [1]'],acc:'Accept “11” or “220% increase”.',kw:['16','5','11'],tip:'Subtract.'},
 {l:'(b)',cmd:'Apply',marks:2,ref:'1.2.3',q:'Apply Figure 3 to calculate the percentage increase in completion for the whole sample.',award:'Award [1] each.',pts:['(84 − 60) ÷ 60 [1]','= <b>40%</b> [1]'],acc:'',kw:['24','40%'],tip:'Change ÷ original.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'1.2.3',q:'Explain how Table 3 shows that designing for extremes benefits the general population.',award:'Award [1] for each valid point up to [3 max].',pts:['Features for <b>low vision</b> also help in a dim room [1]','Voice search designed for <b>limited dexterity</b> helps anyone [1]','Fewer buttons reduce cognitive load for <b>all users</b>, shown by the whole sample rising from 60 to 84 [1]'],acc:'',kw:['low vision','dim room','voice','all users'],tip:'Use the table and the data.'},
 {l:'(d)',cmd:'Describe',marks:3,ref:'1.2.1',q:'Describe how the redesign addresses physical, sensory and cognitive needs.',award:'Award [1] each.',pts:['Physical: <b>large buttons and voice search</b> [1]','Sensory: <b>high contrast and tactile markings</b> [1]','Cognitive: <b>fewer buttons</b> and simple layout [1]'],acc:'',kw:['large buttons','high contrast','fewer buttons'],tip:'One feature per group.'},
 {l:'(e)',cmd:'Evaluate',marks:6,ref:'1.2.2',q:'Evaluate the new remote as an inclusive design, considering its limitations.',award:'Award [1] for each valid point. Reward a judgement.',pts:['Task completion rose for all groups, so the design benefits <b>many users</b> [1]','Only 16 or 17 out of 100 in the target groups completed all tasks, so <b>many are still excluded</b> [1]','Fewer buttons may restrict functions for expert users [1]','Voice search may fail for users with <b>speech difficulties</b> or in noisy rooms [1]','Extra features such as a backlight raise <b>cost and battery use</b> [1]','Judgement: a strong improvement, but further testing and options (for example a screen reader mode) are needed [1]'],acc:'Maximum [6].',kw:['all groups','excluded','speech','cost','judgement'],tip:'Use the data and name remaining gaps.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · SL + HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'1.2.1',q:'State one example of a sensory impairment.',award:'Award [1].',pts:['Low vision, blindness, colour blindness or hearing loss [1]'],acc:'Any one.',kw:['vision','hearing'],tip:''},
 {l:'2',cmd:'Identify',marks:1,ref:'1.2.2',q:'Identify which percentile represents the average person.',award:'Award [1].',pts:['<b>50th</b> percentile [1]'],acc:'',kw:['50th'],tip:''},
 {l:'3',cmd:'Outline',marks:2,ref:'1.2.1',q:'Outline what is meant by inclusive design.',award:'Award [1] each.',pts:['Designing products for the <b>widest possible range of users</b> [1]','…regardless of age or ability [1]'],acc:'',kw:['widest','age or ability'],tip:''},
 {l:'4',cmd:'Explain',marks:2,ref:'1.2.2',q:'Explain why designing a seat for the average person is not inclusive.',award:'Award [1] each.',pts:['About <b>half the users</b> are larger or smaller than average [1]','…so they would not fit comfortably [1]'],acc:'',kw:['half','larger or smaller'],tip:''},
 {l:'5',cmd:'Identify',marks:2,ref:'1.2.3',q:'Identify the user to accommodate for (i) the reach to a control and (ii) clearance in a doorway.',award:'Award [1] each.',pts:['(i) <b>Smallest</b> user [1]','(ii) <b>Largest</b> user [1]'],acc:'',kw:['smallest','largest'],tip:''},
 {l:'6',cmd:'Describe',marks:2,ref:'1.2.3',q:'Describe one product where a design for extremes strategy has been used.',award:'Award [1] each.',pts:['A named product such as <b>easy-grip tools</b> or dropped kerbs [1]','…designed for an extreme user group and used by everyone [1]'],acc:'',kw:['easy-grip','kerb'],tip:''},
 {l:'7',cmd:'Explain',marks:2,ref:'1.2.2',q:'Explain one reason why inclusive design may not be possible.',award:'Award [1] each.',pts:['Needs of different groups can <b>conflict</b> [1]','…for example small buttons suit dexterous users but not users with tremor [1]'],acc:'Any valid reason.',kw:['conflict','cost'],tip:''},
 {l:'8',cmd:'Explain',marks:2,ref:'1.2.3',q:'Explain why a machine guard may use the 1st to 99th percentile range.',award:'Award [1] each.',pts:['It is <b>safety-critical</b> [1]','…so it must protect nearly all users, not 90% [1]'],acc:'',kw:['safety-critical','nearly all'],tip:''}
 ]},

paper:[]
};
})();
