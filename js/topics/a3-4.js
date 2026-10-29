window.TOPICS=window.TOPICS||{};
(function(){
const ln=(a,b,c,d,x)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--ink)" stroke-width="2.2" ${x||''}/>`;
const tx=(x,y,s,a)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}">${s}</text>`;
const rect=(x,y,w,h,f)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f||'var(--card)'}" stroke="var(--ink)" stroke-width="2.2"/>`;
const circ=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f||'none'}" stroke="var(--ink)" stroke-width="2.2"/>`;
/* symbol sheet */
const sym=(()=>{
 let b='';
 const cell=(cx,cy,draw,label)=>{b+=`<g>${draw}${tx(cx,cy+46,label)}</g>`};
 cell(65,40,ln(15,40,40,40)+rect(40,30,50,20)+ln(90,40,115,40),'Fixed resistor');
 cell(195,40,ln(145,40,170,40)+rect(170,30,50,20)+ln(220,40,245,40)+ln(165,58,225,22)+`<path d="M225 22 l-9 3 m9 -3 l-3 9" stroke="var(--ink)" stroke-width="2" fill="none"/>`,'Variable resistor');
 cell(325,40,ln(275,40,312,40)+ln(312,22,312,58)+ln(326,22,326,58)+ln(326,40,375,40),'Capacitor');
 cell(455,40,ln(405,40,430,40)+circ(433,40,3,'var(--ink)')+ln(433,40,462,22)+circ(472,40,3,'var(--ink)')+ln(475,40,505,40),'Switch');
 cell(65,130,ln(15,130,45,130)+`<path d="M45 114 L45 146 L72 130Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>`+ln(72,114,72,146)+ln(72,130,110,130),'Diode');
 cell(195,130,ln(145,130,175,130)+`<path d="M175 114 L175 146 L202 130Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>`+ln(202,114,202,146)+ln(202,130,240,130)+`<path d="M200 108 l14 -12 m-6 0 l6 -1 l-1 7 M212 114 l14 -12 m-6 0 l6 -1 l-1 7" stroke="var(--bad)" stroke-width="2" fill="none"/>`,'LED');
 cell(325,130,circ(325,130,22)+ln(275,130,303,130)+ln(303,118,303,142)+ln(303,124,332,108)+ln(303,136,332,152)+ln(332,108,332,92)+ln(332,152,332,168),'Transistor (NPN)');
 cell(455,130,`<path d="M420 105 L420 155 L475 130Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"/>`+ln(395,117,420,117)+ln(395,143,420,143)+ln(475,130,505,130)+tx(408,114,'+')+tx(408,148,'−'),'Op-amp');
 cell(65,222,rect(30,210,70,24)+ln(10,222,30,222)+ln(100,222,120,222)+ln(35,210,95,234),'Relay coil');
 cell(195,222,circ(195,222,18)+tx(195,227,'M')+ln(160,222,177,222)+ln(213,222,230,222),'Motor');
 cell(325,222,circ(325,222,18)+tx(325,227,'~')+ln(290,222,307,222)+ln(343,222,360,222),'Buzzer / speaker');
 cell(455,222,circ(455,222,18)+ln(443,210,467,234)+ln(443,234,467,210)+ln(420,222,437,222)+ln(473,222,490,222),'Lamp');
 return `<svg viewBox="0 0 520 290" role="img" aria-label="Circuit symbols for common components">${b}</svg>`;
})();
/* LDR voltage divider with LED output (illustrative) */
const divider=(()=>{
 let b='';
 b+=ln(80,40,80,60)+ln(80,60,80,70);
 /* battery left */
 b+=ln(80,40,80,95)+ln(65,95,95,95)+ln(72,106,88,106)+ln(80,106,80,200);
 b+=tx(40,102,'9 V');
 /* top wire */
 b+=ln(80,40,280,40);
 /* R1 */
 b+=ln(280,40,280,60)+rect(266,60,28,60)+ln(280,120,280,140);
 b+=tx(320,95,'R1 = 10 kΩ','start');
 /* junction */
 b+=circ(280,140,4,'var(--ink)')+ln(280,140,400,140)+tx(405,144,'Vout','start');
 /* LDR */
 b+=ln(280,140,280,155)+rect(266,155,28,45)+circ(280,177,26)+ln(280,200,280,215);
 b+=tx(320,185,'LDR','start')+tx(320,200,'(2 kΩ in light)','start');
 /* bottom wire */
 b+=ln(80,215,280,215)+ln(80,200,80,215);
 b+=tx(180,235,'0 V');
 return `<svg viewBox="0 0 520 250" role="img" aria-label="A voltage divider made of a 10 kilohm resistor and a light dependent resistor with the output between them">${b}</svg>`;
})();

window.TOPICS['a3-4']={
id:'a3-4',code:'A3.4',title:'Introduction to electronic systems',level:'HL',hours:6,
guiding:'How are electronics present in everyday products?',
pptx:null,

notes:[
{id:'s341',ref:'3.4.1',title:'Electronic systems: input, process, output and feedback',
 must:'Describe an electronic system in terms of input, process, output and feedback.',
 html:`
<p>An <b>electronic system</b> senses something, decides what to do and then acts.</p>
<div class="cols"><div class="box"><h4>Input</h4><p>Detects a change in the environment or a user action: switch, sensor.</p></div>
<div class="box"><h4>Process</h4><p>Decides what to do: transistor circuit, op-amp, microcontroller.</p></div>
<div class="box"><h4>Output</h4><p>Does something: LED, buzzer, motor, display.</p></div></div>
<div class="box" style="margin-top:14px"><h4>Feedback</h4><p>Information about the output is sent <b>back to the input or process</b> so the system can correct itself. A system with feedback is a <b>closed-loop</b> system.</p></div>
<div class="ex"><b class="l">Example: central heating.</b> Input: temperature sensor and the temperature the user sets. Process: controller compares them. Output: boiler switches on or off. Feedback: the room temperature sensor measures the result.</div>
<div class="tip"><b>Exam tip.</b> Always name the component for each block in the product you are describing, and say what the feedback measures.</div>`},

{id:'s342',ref:'3.4.2',title:'Responsible electronics',
 must:'Identify electronic products that are safe, energy-efficient and use minimal energy.',
 html:`
<p>Electronics are everywhere in homes, industry and society. Designers must consider <b>safety, energy use and end of life</b>.</p>
<ul class="tight"><li><b>Safe</b>: low voltage, insulated casing, fuses and circuit breakers, no overheating, safe batteries, compliance marks (CE, UL).</li><li><b>Energy efficient</b>: LED lighting instead of filament bulbs; sleep modes; efficient power supplies; sensors that switch devices off (motion-activated lights).</li><li><b>Minimal energy</b>: low-power microcontrollers, e-ink displays, timers and thermostats that avoid heating when not needed.</li><li><b>Society</b>: smart meters, health monitors, assistive technologies, but also e-waste, rare materials and privacy.</li></ul>
<div class="ex"><b class="l">Examples.</b> A smart thermostat saves heating energy using feedback. A motion-activated security light uses a PIR sensor and a low-power LED. A phone charger with a standby cut-off reduces wasted energy.</div>
<div class="tip"><b>Exam tip.</b> Use words like “low standby power”, “automatic shut-off” and “insulated”, and name the product.</div>`},

{id:'s343',ref:'3.4.3–3.4.4',title:'Analogue systems and SI units',
 must:'Distinguish between analogue and digital systems. Describe analogue systems in terms of voltage, current, resistance, frequency and power using SI units and multipliers.',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Analogue</th><th>Digital</th></tr>
<tr><td>Signal</td><td>Continuously varying (for example a sine wave)</td><td>Discrete values: on/off, 1/0</td></tr>
<tr><td>Examples</td><td>Microphone signal, thermistor voltage, vinyl record</td><td>Computers, microcontrollers, digital watches</td></tr>
<tr><td>Strengths</td><td>Smooth, natural representation, simple circuits</td><td>Resistant to noise, easy to store and copy, programmable</td></tr>
<tr><td>Weaknesses</td><td>Noise and distortion add up, hard to store</td><td>Needs conversion (ADC/DAC), sampling loses detail</td></tr></table></div>
<h3>Quantities and SI units</h3>
<div class="tw"><table class="t"><tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Relationship</th></tr>
<tr><td>Voltage</td><td>V</td><td>volt (V)</td><td>Push that makes current flow</td></tr>
<tr><td>Current</td><td>I</td><td>ampere (A)</td><td>Flow of charge</td></tr>
<tr><td>Resistance</td><td>R</td><td>ohm (Ω)</td><td>V = I × R (Ohm’s law)</td></tr>
<tr><td>Power</td><td>P</td><td>watt (W)</td><td>P = V × I</td></tr>
<tr><td>Frequency</td><td>f</td><td>hertz (Hz)</td><td>Cycles per second; f = 1 ÷ T</td></tr>
<tr><td>Time</td><td>t</td><td>second (s)</td><td></td></tr></table></div>
<h3>SI multipliers</h3>
<div class="tw"><table class="t"><tr><th>p</th><th>n</th><th>μ</th><th>m</th><th>k</th><th>M</th><th>G</th><th>T</th></tr><tr><td>pico 10⁻¹²</td><td>nano 10⁻⁹</td><td>micro 10⁻⁶</td><td>milli 10⁻³</td><td>kilo 10³</td><td>mega 10⁶</td><td>giga 10⁹</td><td>tera 10¹²</td></tr></table></div>
<div class="ex"><b class="l">Worked examples.</b> 470 kΩ = 470 000 Ω. 20 mA = 0.020 A. 2.4 GHz = 2 400 000 000 Hz. A 12 V supply and a 240 Ω resistor give I = 12 ÷ 240 = <b>0.05 A (50 mA)</b>, P = 12 × 0.05 = <b>0.6 W</b>.</div>
<h3>Series and parallel</h3>
<ul class="tight"><li>Series: R<sub>total</sub> = R1 + R2 (same current).</li><li>Parallel: 1/R<sub>total</sub> = 1/R1 + 1/R2 (same voltage).</li></ul>
<div class="tip"><b>Exam tip.</b> Convert prefixes before substituting into a formula, and write the unit.</div>`},

{id:'s344',ref:'3.4.5',title:'Digital systems and logic gates',
 must:'Describe digital systems using discrete values such as binary digits and on/off signals. Define logic gates.',
 html:`
<p>A <b>digital system</b> stores, processes and communicates information as <b>discrete values</b>: binary digits (0 and 1), where 1 is high (on) and 0 is low (off). Digital signals tolerate noise because a receiver only needs to decide high or low.</p>
<p>A <b>logic gate</b> is an electronic component that takes one or more binary inputs and gives a binary output according to a rule.</p>
<div class="tw"><table class="t"><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>NOT A</th><th>NAND</th><th>NOR</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table></div>
<ul class="tight"><li><b>AND</b>: output on only if <b>both</b> inputs are on (a press that needs two hands).</li><li><b>OR</b>: output on if <b>either</b> input is on (a car interior light).</li><li><b>NOT</b>: output is the <b>opposite</b> of the input.</li></ul>
<div class="ex"><b class="l">Worked example.</b> A burglar alarm sounds if the system is <b>armed (A)</b> AND a door is <b>open (B)</b>. Output = A AND B. It sounds only when A = 1 and B = 1.</div>
<div class="tip"><b>Exam tip.</b> Draw the full truth table and read off the condition.</div>`},

{id:'s345',ref:'3.4.6',title:'Passive and active components',
 must:'Explain the purpose of passive components, including fixed and variable resistors, capacitors, switches and relays, and active components such as diodes and transistors.',
 html:`
<div class="key"><b>Passive</b> components do not amplify or control current by themselves. <b>Active</b> components can control or amplify current and need a power supply.</div>
<div class="tw"><table class="t"><tr><th>Component</th><th>Purpose</th><th>Example</th></tr>
<tr><td><b>Fixed resistor</b></td><td>Limits current and sets voltage levels</td><td>Protects an LED from too much current</td></tr>
<tr><td><b>Variable resistor</b> (potentiometer, preset)</td><td>Resistance can be changed to adjust a level</td><td>Volume control, dimmer</td></tr>
<tr><td><b>Capacitor</b></td><td>Stores charge; smooths voltage; sets timing with a resistor</td><td>Timer circuits, power supply smoothing, camera flash</td></tr>
<tr><td><b>Switch</b></td><td>Opens or closes a circuit to turn it on or off</td><td>Push button, toggle, reed switch</td></tr>
<tr><td><b>Relay</b></td><td>A switch operated by an electromagnet, so a small current controls a large load; isolates circuits</td><td>Switching a mains heater from a microcontroller</td></tr>
<tr><td><b>Diode</b> (active)</td><td>Lets current flow in <b>one direction only</b>; protects from reverse polarity and back-EMF</td><td>Across a relay coil or motor; in a rectifier</td></tr>
<tr><td><b>Transistor</b> (active)</td><td>Works as an <b>electronic switch</b> or amplifier: a small base current controls a larger collector current</td><td>Switching a buzzer or motor from a sensor circuit</td></tr></table></div>
<div class="ex"><b class="l">LED resistor calculation.</b> 9 V supply, LED forward voltage 2 V, safe current 20 mA. R = (9 − 2) ÷ 0.020 = <b>350 Ω</b>. Use the next higher standard value, 390 Ω.</div>
<div class="tip"><b>Exam tip.</b> A transistor needs a resistor at its base; a diode protects against the voltage spike from a coil.</div>`},

{id:'s346',ref:'3.4.7',title:'Input devices and sensors',
 must:'Explain the purpose of basic analogue and digital input components, including switches and sensors (light, temperature, humidity, sound).',
 html:`
<div class="tw"><table class="t"><tr><th>Input</th><th>Detects</th><th>Notes</th></tr>
<tr><td><b>Switch / push button</b></td><td>User action</td><td>Digital: on or off</td></tr>
<tr><td><b>LDR (light-dependent resistor)</b></td><td>Light level</td><td>Resistance falls as light increases. Analogue.</td></tr>
<tr><td><b>Thermistor</b></td><td>Temperature</td><td>NTC thermistor resistance falls as temperature rises. Analogue.</td></tr>
<tr><td><b>Humidity sensor</b></td><td>Moisture in the air</td><td>Resistance or capacitance changes with humidity. Used in climate control.</td></tr>
<tr><td><b>Microphone</b></td><td>Sound</td><td>Converts sound pressure to a small varying voltage. Analogue.</td></tr>
<tr><td><b>PIR sensor</b></td><td>Movement of warm bodies</td><td>Digital output: motion detected or not.</td></tr></table></div>
<p>Analogue sensors are often placed in a <b>voltage divider</b> so the change in resistance becomes a change in voltage:</p>
<div class="key"><b>V<sub>out</sub> = V<sub>in</sub> × R2 ÷ (R1 + R2)</b></div>
${divider}
<div class="ex"><b class="l">Worked example.</b> With R1 = 10 kΩ and the LDR at 2 kΩ in bright light, V<sub>out</sub> = 9 × 2 ÷ (10 + 2) = <b>1.5 V</b>. In the dark, the LDR rises to 100 kΩ so V<sub>out</sub> = 9 × 100 ÷ 110 = <b>8.2 V</b>, which can switch on a transistor and a light.</div>
<div class="tip"><b>Exam tip.</b> Name the physical change, the electrical change, and what the process stage does with it.</div>`},

{id:'s347',ref:'3.4.8–3.4.9',title:'Processing: analogue signal conditioning and microcontrollers',
 must:'Compare and differentiate basic analogue and digital process components, including signal conditioning (analogue) and program control (digital). Describe the use of a microcontroller (PIC).',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Analogue processing</th><th>Digital processing</th></tr>
<tr><td>Method</td><td><b>Signal conditioning</b>: amplifying, filtering, comparing or smoothing a continuous signal</td><td><b>Program control</b>: a microcontroller runs software to make decisions</td></tr>
<tr><td>Components</td><td>Transistors, op-amps, resistors, capacitors, comparators</td><td>Microcontroller or PIC, logic gates, memory</td></tr>
<tr><td>Flexibility</td><td>Fixed by the hardware; changing the function means changing the circuit</td><td>Change the program to change the behaviour</td></tr>
<tr><td>Example</td><td>An amplifier boosting a microphone signal</td><td>A thermostat that follows a timetable</td></tr></table></div>
<h3>Microcontroller (PIC)</h3>
<p>A <b>microcontroller</b> is a <b>programmable integrated circuit (PIC)</b>: a small computer on a chip with a processor, memory and input/output pins. Software is loaded to carry out a range of tasks, such as reading sensors, making decisions and driving outputs. Many everyday devices use microcontrollers: washing machines, remote controls, smart watches, microwave ovens.</p>
<ul class="tight"><li><b>Advantages</b>: flexible, can be updated, small, cheap, replaces many components.</li><li><b>Limits</b>: needs programming skill; analogue sensors need an ADC; software faults.</li></ul>
<h3>Op-amp (3.4.12)</h3>
<p>An <b>operational amplifier</b> is a high-gain voltage amplifier with <b>two inputs (inverting and non-inverting)</b> and a single output. It amplifies the <b>difference</b> between the inputs. It is used to amplify weak sensor signals (for example in IoT home appliances) or as a <b>comparator</b> that switches an output when one input rises above another.</p>
<div class="tip"><b>Exam tip.</b> Differentiate analogue and digital processing by <b>how the decision is made</b>: hardware signal conditioning compared with software program control.</div>`},

{id:'s348',ref:'3.4.10',title:'Output devices',
 must:'Outline basic analogue and digital electronic output components.',
 html:`
<div class="tw"><table class="t"><tr><th>Output</th><th>Type of output</th><th>Example use</th></tr>
<tr><td>Motor</td><td>Movement (rotary)</td><td>Fans, washing machines, robots</td></tr>
<tr><td>Haptic device</td><td>Vibration or touch feedback</td><td>Phone vibration, game controllers</td></tr>
<tr><td>Buzzer</td><td>Simple sound (tone)</td><td>Alarms, timers</td></tr>
<tr><td>Speaker / headphones</td><td>Sound (analogue waveform)</td><td>Music, voice</td></tr>
<tr><td>Light / lamp</td><td>Light</td><td>Torches, indicators</td></tr>
<tr><td>LED</td><td>Light (low power, efficient)</td><td>Indicators, lighting</td></tr>
<tr><td>LCD</td><td>Text or images on a display</td><td>Calculators, appliances</td></tr>
<tr><td>Relay</td><td>Switches a larger load</td><td>Heater control</td></tr>
<tr><td>Printer / plotter</td><td>Hard copy output</td><td>Documents, drawings</td></tr>
<tr><td>Braille display</td><td>Raised dots for blind users</td><td>Assistive technology</td></tr></table></div>
<ul class="tight"><li>Outputs may need a <b>transistor or relay</b> because a processor output pin supplies very little current.</li><li>A <b>flywheel diode</b> across a motor or relay coil protects the circuit.</li></ul>
<div class="tip"><b>Exam tip.</b> Choose an output to suit the user: a visually impaired user may need audio, haptic or braille output.</div>`},

{id:'s349',ref:'3.4.11',title:'Open- and closed-loop systems',
 must:'Compare open- and closed-loop electronic systems, identify where each is used, and explain the purpose of feedback in a closed-loop system.',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Open loop</th><th>Closed loop</th></tr>
<tr><td>Feedback</td><td>None; output does not affect the input</td><td>Output is measured and fed back to the controller</td></tr>
<tr><td>Accuracy</td><td>Cannot correct errors or disturbances</td><td>Self-correcting; keeps the target value</td></tr>
<tr><td>Cost and complexity</td><td>Simple and cheap</td><td>Needs a sensor and a comparison, so costlier</td></tr>
<tr><td>Examples</td><td>Toaster with a timer, basic fan, hand dryer</td><td>Thermostat, cruise control, automatic iron, smart thermostat</td></tr></table></div>
<div class="ex"><b class="l">Closed loop: thermostat.</b> Set point 21 °C. The sensor measures 18 °C. The controller compares them (error 3 °C) and switches the heater on. When the room reaches 21 °C, the heater switches off. The sensor continues to report the temperature (feedback).</div>
<div class="tip"><b>Exam tip.</b> “Purpose of feedback” = to <b>compare the actual output with the desired value and correct any difference</b> automatically.</div>`},

{id:'s3410',ref:'3.4.13–3.4.14',title:'Embedded systems and circuit diagrams',
 must:'Define an embedded system. Identify circuit symbols for resistors, capacitors, switches, relays, diodes, transistors, op-amps and input and output devices.',
 html:`
<p>An <b>embedded system</b> is a <b>microcontroller-based system built into a product</b> to perform a specific task. It adds <b>functionality, efficiency and automation</b>. Examples: a smart washing machine, a car’s engine controller, a heart-rate monitor. Embedded systems in IoT products can also communicate with other digital systems (Wi-Fi, Bluetooth).</p>
<h3>Circuit diagram symbols</h3>
${sym}
<p class="cap">Symbols for common components (UK/IEC style, simplified).</p>
<div class="tip"><b>Exam tip.</b> A circuit diagram uses standard symbols and straight lines, with component values written beside each symbol. Learn the symbols for the transistor, diode, op-amp, relay and LDR.</div>`}
],

cards:[
['Electronic system','A system with an input, a process and an output, possibly with feedback.'],
['Input device','A component that detects a change or user action, such as a switch or sensor.'],
['Process','The part of a system that decides what to do with the input.'],
['Output device','A component that responds, such as an LED, buzzer or motor.'],
['Feedback','Information about the output sent back to the input or process.'],
['Closed-loop system','A system that uses feedback to correct its output.'],
['Open-loop system','A system with no feedback.'],
['Analogue signal','A signal that varies continuously, such as a sine wave.'],
['Digital signal','A signal with discrete values, such as 0 and 1.'],
['Voltage','The push that makes current flow; unit volt (V).'],
['Current','The flow of electric charge; unit ampere (A).'],
['Resistance','Opposition to current; unit ohm (Ω).'],
['Ohm’s law','V = I × R.'],
['Power (electrical)','P = V × I; unit watt (W).'],
['Frequency','Number of cycles per second; unit hertz (Hz).'],
['kilo, mega, giga','10³, 10⁶ and 10⁹.'],
['milli, micro, nano','10⁻³, 10⁻⁶ and 10⁻⁹.'],
['Bit','A binary digit, 0 or 1.'],
['Logic gate','A component that outputs a binary value based on binary inputs.'],
['AND gate','Output is 1 only if both inputs are 1.'],
['OR gate','Output is 1 if either input is 1.'],
['NOT gate','Output is the opposite of the input.'],
['Passive component','A component that does not amplify or control current by itself.'],
['Active component','A component that can control or amplify current and needs power.'],
['Fixed resistor','Limits current to a set value.'],
['Variable resistor','A resistor whose resistance can be changed.'],
['Capacitor','Stores electric charge; used for timing and smoothing.'],
['Relay','An electromagnetic switch that lets a small current control a large load.'],
['Diode','Allows current in one direction only.'],
['Transistor','An electronic switch or amplifier.'],
['LDR','A resistor whose resistance falls as light increases.'],
['Thermistor','A resistor whose resistance changes with temperature.'],
['Voltage divider','Two resistors in series that give a fraction of the supply voltage.'],
['Signal conditioning','Processing an analogue signal, such as amplifying or filtering it.'],
['Microcontroller (PIC)','A programmable integrated circuit with processor, memory and I/O on one chip.'],
['Op-amp','A high-gain voltage amplifier with two inputs and one output.'],
['Comparator','A circuit that switches its output when one input exceeds another.'],
['Embedded system','A microcontroller-based system built into a product for a specific task.'],
['Haptic device','An output that gives touch or vibration feedback.'],
['Internet of Things','Everyday devices connected to the internet to share data.']
],

mcq:[
{ref:'3.4.1',q:'Which part of an electronic system detects a change in the environment?',o:['Input','Process','Output','Feedback'],a:0,why:'Sensors and switches are inputs.',live:true},
{ref:'3.4.1',q:'Feedback is…',o:['Information about the output sent back to the system','The power supply','A type of switch','The input signal only'],a:0,why:'It allows the system to correct itself.'},
{ref:'3.4.2',q:'Which is an energy-saving feature?',o:['Automatic standby cut-off','Always-on lamp','Larger filament bulb','Open wiring'],a:0,why:'It avoids wasted power.',live:true},
{ref:'3.4.3',q:'Which signal is digital?',o:['On/off pulses','Sine wave','Smoothly varying voltage from a microphone','Thermistor voltage'],a:0,why:'Digital signals have discrete values.',live:true},
{ref:'3.4.4',q:'The unit of resistance is the…',o:['Ohm','Watt','Hertz','Ampere'],a:0,why:'Symbol Ω.'},
{ref:'3.4.4',q:'4.7 kΩ in ohms is…',o:['4700 Ω','47 Ω','470 Ω','4 700 000 Ω'],a:0,why:'k = 1000.',live:true},
{ref:'3.4.4',q:'A 6 V supply across a 120 Ω resistor gives a current of…',o:['0.05 A','20 A','0.5 A','720 A'],a:0,why:'I = V ÷ R = 6 ÷ 120 = 0.05 A.',live:true},
{ref:'3.4.4',q:'A device uses 12 V and 0.5 A. Its power is…',o:['6 W','24 W','0.04 W','12.5 W'],a:0,why:'P = V × I.'},
{ref:'3.4.4',q:'Two 100 Ω resistors in series give…',o:['200 Ω','50 Ω','100 Ω','10 000 Ω'],a:0,why:'Series resistances add.'},
{ref:'3.4.4',q:'Two 100 Ω resistors in parallel give…',o:['50 Ω','200 Ω','100 Ω','25 Ω'],a:0,why:'1/R = 1/100 + 1/100 = 2/100.',live:true},
{ref:'3.4.5',q:'An AND gate gives output 1 when…',o:['Both inputs are 1','Either input is 1','Both inputs are 0','The input is 0'],a:0,why:'AND needs both.',live:true},
{ref:'3.4.5',q:'A NOT gate with input 1 gives…',o:['0','1','Both','Undefined'],a:0,why:'It inverts.'},
{ref:'3.4.5',q:'For an OR gate, input A = 0 and B = 1. Output is…',o:['1','0','Undefined','2'],a:0,why:'Either input being 1 gives 1.'},
{ref:'3.4.6',q:'Which component allows current in one direction only?',o:['Diode','Capacitor','Variable resistor','Relay'],a:0,why:'A diode is a one-way valve for current.',live:true},
{ref:'3.4.6',q:'A relay is used to…',o:['Let a small current switch a large load','Store charge','Rectify AC','Measure light'],a:0,why:'It is an electromagnetic switch.'},
{ref:'3.4.6',q:'The component that can act as an electronic switch is a…',o:['Transistor','Resistor','Capacitor','Fuse'],a:0,why:'A small base current controls a larger collector current.',live:true},
{ref:'3.4.6',q:'A capacitor in a timer circuit…',o:['Charges over time','Blocks all current always','Makes light','Is a diode'],a:0,why:'Charging time sets the delay.'},
{ref:'3.4.7',q:'The resistance of an LDR…',o:['Decreases as light increases','Increases as light increases','Is constant','Is zero'],a:0,why:'More light means lower resistance.',live:true},
{ref:'3.4.7',q:'Which sensor is best to detect movement of a person?',o:['PIR','LDR','Thermistor','Microphone only'],a:0,why:'PIR senses infrared from moving warm bodies.'},
{ref:'3.4.7',q:'A voltage divider has R1 = 6 kΩ, R2 = 3 kΩ and Vin = 9 V. Vout across R2 is…',o:['3 V','6 V','9 V','1 V'],a:0,why:'9 × 3 ÷ 9 = 3 V.',live:true},
{ref:'3.4.8',q:'Program control is an example of…',o:['Digital processing','Analogue conditioning','An output','A sensor'],a:0,why:'Software decides what happens.'},
{ref:'3.4.8',q:'Amplifying a microphone signal is…',o:['Signal conditioning','Program control','Feedback','Embedded'],a:0,why:'It changes an analogue signal in hardware.',live:true},
{ref:'3.4.9',q:'A PIC is a…',o:['Programmable integrated circuit','Light sensor','Power supply','Type of motor'],a:0,why:'A microcontroller.'},
{ref:'3.4.10',q:'Which output provides touch feedback?',o:['Haptic device','Speaker','LCD','Lamp'],a:0,why:'It vibrates.',live:true},
{ref:'3.4.10',q:'A relay output may be used because…',o:['A microcontroller pin supplies little current','It is cheaper than all','It makes light','It stores data'],a:0,why:'A relay lets the pin control a bigger load.'},
{ref:'3.4.11',q:'A toaster with a simple timer is…',o:['Open-loop','Closed-loop','Analogue only','A microcontroller'],a:0,why:'No feedback on how toasted the bread is.',live:true},
{ref:'3.4.11',q:'A thermostat is…',o:['Closed-loop','Open-loop','Passive only','Digital only'],a:0,why:'It measures temperature and responds.'},
{ref:'3.4.12',q:'An op-amp amplifies…',o:['The difference between two inputs','The power supply','The resistance','The frequency'],a:0,why:'It has differential inputs.',live:true},
{ref:'3.4.13',q:'An embedded system is…',o:['A microcontroller-based system built into a product','A cable','A type of circuit board only','An internet website'],a:0,why:'It performs a dedicated task.'},
{ref:'3.4.14',q:'The symbol with a triangle and a bar represents a…',o:['Diode','Resistor','Capacitor','Switch'],a:0,why:'A diode symbol.',live:true}
],

fib:[
{ref:'3.4.1',t:'An electronic system has an [[input]], a [[process]] and an [[output]], and may have [[feedback]].'},
{ref:'3.4.3',t:'An [[analogue]] signal varies continuously, whereas a [[digital]] signal has discrete values such as 0 and 1.'},
{ref:'3.4.4',t:'Ohm’s law states that voltage equals current multiplied by [[resistance]].'},
{ref:'3.4.4',t:'Electrical power in watts is voltage multiplied by [[current]].'},
{ref:'3.4.4',t:'The prefix [[milli|m]] means 10⁻³ and the prefix [[kilo|k]] means 10³.'},
{ref:'3.4.5',t:'A logic [[gate]] gives a binary output based on its binary inputs.'},
{ref:'3.4.5',t:'An [[AND]] gate gives an output of 1 only when both inputs are 1.'},
{ref:'3.4.6',t:'A [[diode]] allows current to flow in one direction only.'},
{ref:'3.4.6',t:'A [[transistor]] can be used as an electronic switch.'},
{ref:'3.4.6',t:'A [[relay]] uses an electromagnet to switch a larger load.'},
{ref:'3.4.7',t:'The resistance of an [[LDR|light-dependent resistor]] falls as light increases.'},
{ref:'3.4.9',t:'A [[microcontroller|PIC]] is a programmable integrated circuit.'},
{ref:'3.4.11',t:'A [[closed]]-loop system uses feedback, whereas an open-loop system does not.'},
{ref:'3.4.12',t:'An [[op-amp|operational amplifier]] amplifies the difference between its two inputs.'},
{ref:'3.4.13',t:'An [[embedded]] system is a microcontroller-based system built into a product.'}
],

theory:[
{ref:'3.4.1',cmd:'Describe',marks:4,q:'Describe the input, process, output and feedback of an automatic night light.',
 pts:['<b>Input</b>: a light-dependent resistor (LDR) detects the light level [1]','<b>Process</b>: a transistor or comparator circuit switches when the light falls below a set level [1]','<b>Output</b>: an LED lights up [1]','Feedback: in a closed-loop version, the LDR also senses the LED’s light, but in this simple circuit there is <b>no feedback</b> (open loop) [1]'],
 award:'Award [1] for each valid point up to [4 max]. Accept a closed-loop version with a correct explanation.',kw:['input','LDR','process','transistor','output','LED','feedback'],acc:'',tip:'Name a component for each block.'},
{ref:'3.4.2',cmd:'Explain',marks:3,q:'Explain two ways in which a designer could make a battery-powered electronic product use minimal energy.',
 pts:['Use a <b>low-power microcontroller</b> with a sleep mode [1]','Use <b>LEDs</b> instead of filament bulbs, or an e-ink display that only uses power when changing [1]','Use <b>sensors or timers</b> to switch the device off when not needed [1]'],
 award:'Award [1] for each valid way, explained, up to [3 max].',kw:['sleep mode','LED','timer','sensor','low-power'],acc:'',tip:'Method and effect.'},
{ref:'3.4.3',cmd:'Outline',marks:3,q:'Outline the difference between analogue and digital signals, with an example of each.',
 pts:['An <b>analogue</b> signal varies <b>continuously</b> [1]','Example: the voltage from a microphone [1]','A <b>digital</b> signal has <b>discrete values</b> such as 1 and 0, and an example is the output of a switch [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['continuous','discrete','binary','example'],acc:'',tip:'Define both, with examples.'},
{ref:'3.4.4',cmd:'Apply',marks:4,q:'An LED needs 20 mA and has a forward voltage of 2.0 V. It is powered from a 9 V battery. Apply the data to calculate the minimum series resistor and the power dissipated in the resistor.',
 pts:['Voltage across the resistor = 9 − 2 = <b>7 V</b> [1]','R = V ÷ I = 7 ÷ 0.020 = <b>350 Ω</b> [1]','P = V × I = 7 × 0.020 [1]','= <b>0.14 W</b> [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['7 V','350 Ω','0.14 W'],acc:'Accept “use a 390 Ω resistor” as an additional comment.',tip:'Convert mA to A first.'},
{ref:'3.4.5',cmd:'Construct',marks:3,q:'A machine guard allows a press to start only when the guard is closed (G = 1) AND the start button is pressed (S = 1). Construct a truth table for the output.',
 pts:['Four rows covering all input combinations: 00, 01, 10, 11 [1]','Output 0 for the first three rows [1]','Output 1 only when G = 1 and S = 1 [1]'],
 award:'Award [1] for each valid point.',kw:['truth table','AND','1','0'],acc:'',tip:'Write all four combinations.'},
{ref:'3.4.6',cmd:'Explain',marks:4,q:'Explain why a relay and a diode are used when a microcontroller controls a mains-powered heater.',
 pts:['The microcontroller pin supplies only a <b>small current</b> [1]','A <b>relay</b> lets this small current switch the large load and isolates the mains [1]','The relay <b>coil produces a voltage spike</b> when switched off [1]','A <b>diode</b> across the coil protects the transistor or microcontroller from the spike [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['small current','relay','isolates','voltage spike','diode'],acc:'',tip:'Say what each component protects.'},
{ref:'3.4.7',cmd:'Apply',marks:3,q:'A voltage divider has a 9 V supply, R1 = 10 kΩ and an LDR as R2. Apply the voltage divider formula to find Vout when the LDR is 2 kΩ and when it is 100 kΩ.',
 pts:['V<sub>out</sub> = V<sub>in</sub> × R2 ÷ (R1 + R2) [1]','2 kΩ: 9 × 2 ÷ 12 = <b>1.5 V</b> [1]','100 kΩ: 9 × 100 ÷ 110 = <b>8.2 V</b> [1]'],
 award:'Award [1] per step.',kw:['1.5 V','8.2 V'],acc:'Accept 8.18 V.',tip:'Convert nothing: the same unit on both resistors is fine.'},
{ref:'3.4.8',cmd:'Explain',marks:4,q:'Explain the difference between signal conditioning and program control as processing methods.',
 pts:['<b>Signal conditioning</b> changes an analogue signal in hardware, by amplifying, filtering or comparing it [1]','Example: an op-amp amplifying a sensor signal [1]','<b>Program control</b> uses a microcontroller running software to make decisions [1]','The behaviour can be changed by <b>reprogramming</b> without changing the circuit [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['amplifying','analogue','microcontroller','software','reprogramming'],acc:'',tip:'Contrast hardware and software.'},
{ref:'3.4.9',cmd:'Describe',marks:3,q:'Describe how a microcontroller could be used in a smart plant-watering system.',
 pts:['A <b>soil moisture sensor</b> is connected to an input pin [1]','The program <b>compares the reading with a set value</b> [1]','If the soil is dry, the program switches on a <b>pump</b> through a transistor or relay [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['sensor','program','compares','pump','relay'],acc:'',tip:'Input, program, output.'},
{ref:'3.4.11',cmd:'Explain',marks:4,q:'Explain why a thermostat is a closed-loop system and why feedback is important.',
 pts:['A <b>temperature sensor measures</b> the output (room temperature) [1]','This is <b>fed back</b> to the controller and compared with the set value [1]','The heater switches on or off to <b>correct the error</b> [1]','Without feedback (open loop) the room could overheat or be too cold because disturbances are not corrected [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['sensor','fed back','compared','correct','open loop'],acc:'',tip:'Measure, compare, correct.'},
{ref:'3.4.12',cmd:'Describe',marks:3,q:'Describe the role of an op-amp in a sensor circuit for an IoT home appliance.',
 pts:['Sensors produce a <b>weak signal</b> [1]','The op-amp has <b>high gain</b> and amplifies the signal [1]','So that it can be read by a microcontroller or ADC accurately [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['weak','amplifies','high gain','ADC'],acc:'Accept comparator role.',tip:'Weak signal in, strong signal out.'},
{ref:'3.4.13',cmd:'Evaluate',marks:6,q:'Evaluate the use of embedded systems in a washing machine.',
 pts:['Strength: <b>automation</b> through programmes saves user time [1]','Strength: sensors for load and water level save <b>water and energy</b> [1]','Strength: functions can be changed by updating software, and diagnostics make repair easier [1]','Limitation: <b>more components and complexity</b> make it harder to repair [1]','Limitation: the electronics cause <b>e-waste</b> and may fail before the mechanical parts [1]','Judgement: the efficiency gains justify embedded control if the design allows repair and recycling [1]'],
 award:'Award [1] for each valid point. A maximum of [3] for strengths or limitations alone. Reward a judgement.',kw:['automation','energy','water','repair','e-waste','judgement'],acc:'Maximum [6].',tip:'Weigh benefits against complexity.'}
],

practice:[
{id:'cs1',title:'Case study 1: A smart greenhouse controller',paper:'Paper 2 style · HL',
 scenario:`<p>A school builds a greenhouse controller. A thermistor measures the air temperature and a soil moisture sensor measures dryness. A microcontroller compares the readings with set values. If the temperature is above 28 °C, a motor opens a window. If the soil is dry, a pump is switched on through a relay. A diode protects the relay coil. The controller measures the temperature again to check that the window has cooled the greenhouse. Data is illustrative.</p>`,
 fig:Fig.flow(['Sensors: thermistor, moisture','Controller (program)','Outputs: motor, pump via relay','Greenhouse conditions change'],{per:4,bw:104,bh:62,hl:[1],loop:'Feedback: sensors measure the result',title:'Greenhouse system with feedback'}),
 cap:'Figure 1: System diagram with feedback.',
 table:`<table class="t"><tr><th colspan="2">Table 1: Data</th></tr><tr><td>Motor supply</td><td>12 V, 0.5 A</td></tr><tr><td>Set temperature to open window</td><td>28 °C</td></tr><tr><td>Microcontroller output pin current</td><td>20 mA maximum</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Identify',marks:2,ref:'3.4.1',q:'Identify one input and one output of the system.',award:'Award [1] each.',pts:['Input: thermistor or soil moisture sensor [1]','Output: motor or pump [1]'],acc:'',kw:['thermistor','motor'],tip:'One of each.'},
 {l:'(b)',cmd:'Explain',marks:3,ref:'3.4.11',q:'Explain why this is a closed-loop system.',award:'Award [1] for each valid point up to [3 max].',pts:['The thermistor <b>measures the result</b> of the window opening [1]','This reading is <b>fed back</b> to the microcontroller [1]','The program compares it and closes the window when the target is reached [1]'],acc:'',kw:['measures','fed back','compares'],tip:'Measure, feed back, compare.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'3.4.4',q:'Apply the data to calculate the power of the motor.',award:'Award [1] each.',pts:['P = V × I = 12 × 0.5 [1]','= <b>6 W</b> [1]'],acc:'',kw:['6 W'],tip:'P = V × I.'},
 {l:'(d)',cmd:'Explain',marks:4,ref:'3.4.6',q:'Explain why the motor and pump are not connected directly to the microcontroller pins and what protects the circuit.',award:'Award [1] for each valid point up to [4 max].',pts:['The motor needs <b>0.5 A</b>, but the pin can supply only 20 mA [1]','A <b>transistor or relay</b> lets the small signal switch the larger current [1]','Coils and motors create a <b>voltage spike</b> when switched off [1]','A <b>diode</b> across the coil absorbs the spike [1]'],acc:'',kw:['20 mA','relay','transistor','spike','diode'],tip:'Compare the currents.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.4.9',q:'Evaluate the use of a microcontroller rather than an analogue transistor circuit for this controller.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['Microcontroller: can handle <b>several sensors and outputs</b> with one chip [1]','The program can be <b>changed</b> to suit different plants without rebuilding [1]','It can log data or connect to the internet [1]','But it needs <b>programming skill</b> and software testing, and costs more than one transistor circuit [1]','Decision: a microcontroller is best because the greenhouse has multiple conditions and needs flexibility [1]'],acc:'',kw:['several sensors','program','flexible','cost','decision'],tip:'Weigh flexibility against complexity.'}
 ]},

{id:'cs2',title:'Case study 2: An automatic night light',paper:'Paper 2 style · HL',
 scenario:`<p>A student designs an automatic night light for a child’s bedroom. A voltage divider contains a 10 kΩ resistor and a light-dependent resistor (LDR). The output voltage drives a transistor which switches an LED. The supply is 9 V. The LED needs 20 mA and has a forward voltage of 2 V.</p>`,
 fig:divider,
 cap:'Figure 2: Voltage divider with the LDR (the output goes to the transistor base).',
 table:`<table class="t"><tr><th colspan="2">Table 2: LDR resistance</th></tr><tr><td>Bright room</td><td>2 kΩ</td></tr><tr><td>Dim room</td><td>20 kΩ</td></tr><tr><td>Dark room</td><td>100 kΩ</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.4.7',q:'State what happens to the resistance of the LDR as the room gets darker.',award:'Award [1].',pts:['It <b>increases</b> [1]'],acc:'',kw:['increases'],tip:'LDR resistance rises in the dark.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.4.7',q:'Apply the voltage divider formula to calculate Vout in a bright room and in a dark room.',award:'Award [1] for the formula, [1] for each answer.',pts:['Vout = Vin × R2 ÷ (R1 + R2) [1]','Bright: 9 × 2 ÷ 12 = <b>1.5 V</b> [1]','Dark: 9 × 100 ÷ 110 = <b>8.2 V</b> [1]'],acc:'',kw:['1.5 V','8.2 V'],tip:'R2 is the LDR.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.4.6',q:'Explain how the circuit switches the LED on in the dark.',award:'Award [1] for each valid point up to [3 max].',pts:['In the dark Vout <b>rises</b> above about 0.7 V [1]','This turns on the <b>transistor</b>, which acts as a switch [1]','Current then flows through the LED and its resistor [1]'],acc:'',kw:['rises','transistor','switch','LED'],tip:'Follow the signal.'},
 {l:'(d)',cmd:'Apply',marks:3,ref:'3.4.6',q:'Apply the data to calculate the LED series resistor and say which standard value (330, 390 or 470 Ω) should be chosen.',award:'Award [1] each.',pts:['R = (9 − 2) ÷ 0.020 [1]','= <b>350 Ω</b> [1]','Choose <b>390 Ω</b> (the next standard value above 350 Ω, so the current stays under 20 mA) [1]'],acc:'',kw:['350 Ω','390 Ω'],tip:'Round up.'},
 {l:'(e)',cmd:'Evaluate',marks:4,ref:'3.4.2',q:'Evaluate the choice of an LED rather than a filament lamp for the night light.',award:'Award [1] for each valid point up to [4 max].',pts:['LEDs are <b>energy efficient</b> and use little battery power [1]','They stay <b>cool</b>, so safer in a child’s room [1]','They last longer, so there is less waste [1]','But the light is directional and the circuit needs a series resistor; the initial cost is slightly higher [1]'],acc:'',kw:['efficient','cool','last longer','resistor'],tip:'Safety and energy.'}
 ]},

{id:'cs3',title:'Case study 3: A machine safety interlock',paper:'Paper 2 style · HL',
 scenario:`<p>A school workshop has a paper guillotine with an electronic safety interlock. The cutting blade motor is only allowed to run when the guard is closed (G = 1) AND the operator presses the start button (S = 1). An emergency stop (E = 1 when pressed) must always switch the motor off. The motor output M is 1 when the motor runs.</p>`,
 fig:Fig.boxes([{x:20,y:20,w:110,h:36,t:'Guard G'},{x:20,y:80,w:110,h:36,t:'Start S'},{x:20,y:140,w:110,h:36,t:'Emergency stop E'},{x:200,y:48,w:100,h:44,t:'AND',hl:1},{x:200,y:130,w:100,h:44,t:'NOT E'},{x:340,y:90,w:90,h:44,t:'AND',hl:1},{x:460,y:90,w:50,h:44,t:'M'}],[[0,3],[1,3],[2,4],[3,5],[4,5],[5,6]],{h:196,label:'Logic for the guillotine safety interlock'}),
 cap:'Figure 3: Logic for the interlock.',
 table:'',
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.4.5',q:'State what is meant by a logic gate.',award:'Award [1].',pts:['A component that gives a <b>binary output</b> based on one or more binary inputs [1]'],acc:'',kw:['binary','inputs','output'],tip:'Define in one line.'},
 {l:'(b)',cmd:'Construct',marks:3,ref:'3.4.5',q:'Construct a truth table for M with the inputs G, S and E.',award:'Award [1] for eight rows, [1] for M = 1 only when G = 1, S = 1, E = 0, [1] for all others 0.',pts:['Eight input combinations listed [1]','M = <b>1 only for G = 1, S = 1, E = 0</b> [1]','All other rows have M = 0 [1]'],acc:'',kw:['G=1','S=1','E=0','M=1'],tip:'List all 8 combinations.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.4.11',q:'Explain why the emergency stop is wired so that pressing it removes power, even if the logic fails.',award:'Award [1] for each valid point up to [3 max].',pts:['Safety systems must be <b>fail-safe</b> [1]','A hardwired stop does not depend on software or a logic gate that might fail [1]','So the machine stops quickly, preventing injury [1]'],acc:'',kw:['fail-safe','hardwired','injury'],tip:'Safety first.'},
 {l:'(d)',cmd:'Describe',marks:2,ref:'3.4.10',q:'Describe a suitable output that tells the operator that the guard is open.',award:'Award [1] each.',pts:['A <b>red LED or buzzer</b> switches on when G = 0 [1]','This warns the operator before the blade can start [1]'],acc:'',kw:['LED','buzzer','G = 0'],tip:'Give the output and when it activates.'},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.4.13',q:'Evaluate the use of a microcontroller instead of logic gates for this interlock.',award:'Award [1] for each valid point up to [5 max]. Reward a decision.',pts:['Microcontroller: easy to <b>add more conditions</b> and warnings [1]','It can <b>log faults</b> and be updated [1]','But software could <b>crash or be mis-programmed</b>, which is a safety risk [1]','Logic gates are <b>simple, predictable and easy to prove safe</b> [1]','Decision: use hardware gates for the safety-critical stop and a microcontroller for non-critical features [1]'],acc:'',kw:['conditions','log','software','predictable','decision'],tip:'Weigh flexibility against reliability.'}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.4.4',q:'State the SI unit of frequency.',award:'Award [1].',pts:['<b>Hertz (Hz)</b> [1]'],acc:'',kw:['hertz'],tip:'Cycles per second.'},
 {l:'2',cmd:'Apply',marks:2,ref:'3.4.4',q:'A 12 V supply drives 30 mA through a resistor. Apply the data to calculate the resistance.',award:'Award [1] each.',pts:['R = V ÷ I = 12 ÷ 0.030 [1]','= <b>400 Ω</b> [1]'],acc:'',kw:['400 Ω'],tip:'30 mA = 0.030 A.'},
 {l:'3',cmd:'Identify',marks:1,ref:'3.4.7',q:'Identify a sensor that could detect room temperature.',award:'Award [1].',pts:['<b>Thermistor</b> [1]'],acc:'',kw:['thermistor'],tip:''},
 {l:'4',cmd:'Outline',marks:2,ref:'3.4.11',q:'Outline what is meant by an open-loop system.',award:'Award [1] each.',pts:['A system with <b>no feedback</b> [1]','The output does not affect the input; example a toaster timer [1]'],acc:'',kw:['no feedback'],tip:''},
 {l:'5',cmd:'Describe',marks:2,ref:'3.4.6',q:'Describe the function of a diode in a circuit.',award:'Award [1] each.',pts:['Allows current in <b>one direction only</b> [1]','Protects components from reverse voltage or spikes [1]'],acc:'',kw:['one direction','protects'],tip:''},
 {l:'6',cmd:'Apply',marks:2,ref:'3.4.5',q:'Apply the AND rule: A = 1, B = 0. State the output of A AND B and of A OR B.',award:'Award [1] each.',pts:['AND = <b>0</b> [1]','OR = <b>1</b> [1]'],acc:'',kw:['0','1'],tip:''},
 {l:'7',cmd:'Outline',marks:2,ref:'3.4.13',q:'Outline what is meant by an embedded system.',award:'Award [1] each.',pts:['A <b>microcontroller-based</b> system built into a product [1]','It performs a <b>specific task</b> such as automation [1]'],acc:'',kw:['microcontroller','specific task'],tip:''},
 {l:'8',cmd:'Explain',marks:2,ref:'3.4.12',q:'Explain why an op-amp may be used with a microphone.',award:'Award [1] each.',pts:['The microphone gives a very <b>weak signal</b> [1]','The op-amp has high gain and <b>amplifies</b> it [1]'],acc:'',kw:['weak','amplifies'],tip:''}
 ]},

paper:[]
};
})();
