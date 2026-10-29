window.TOPICS=window.TOPICS||{};
(function(){
const ln=(a,b,c,d,x)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="var(--ink)" stroke-width="2.2" ${x||''}/>`;
const tx=(x,y,s,a)=>`<text x="${x}" y="${y}" text-anchor="${a||'middle'}">${s}</text>`;
const st='fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"';
/* flowchart symbol sheet */
const symsheet=(()=>{
 let b=`<defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
 b+=`<rect x="10" y="16" width="110" height="38" rx="19" ${st}/>`+tx(65,40,'Start / End');
 b+=`<rect x="135" y="16" width="100" height="38" ${st}/>`+tx(185,40,'Process');
 b+=`<path d="M250 54 L272 16 L372 16 L350 54Z" ${st}/>`+tx(311,40,'Input / Output');
 b+=`<path d="M385 35 L440 8 L495 35 L440 62Z" ${st}/>`+tx(440,39,'Decision');
 b+=ln(65,90,165,90,'marker-end="url(#fa)"')+tx(115,116,'Flow line (arrow)');
 return `<svg viewBox="0 0 520 140" role="img" aria-label="Flow diagram symbols">${b}</svg>`;
})();
/* flow chart for a programmable night light */
const nightflow=(()=>{
 let b=`<defs><marker id="fb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--blue)"/></marker></defs>`;
 const ar=(a,c,d,e)=>`<line x1="${a}" y1="${c}" x2="${d}" y2="${e}" stroke="var(--blue)" stroke-width="2" marker-end="url(#fb)"/>`;
 b+=`<rect x="190" y="8" width="100" height="30" rx="15" ${st}/>`+tx(240,28,'Start');
 b+=ar(240,38,240,52);
 b+=`<path d="M180 76 L240 52 L300 76 L240 100Z" ${st}/>`+tx(240,80,'Dark?');
 b+=ar(240,100,240,122)+tx(252,116,'Yes','start');
 b+=`<rect x="190" y="122" width="100" height="30" ${st}/>`+tx(240,142,'LED on');
 b+=ar(240,152,240,170);
 b+=`<path d="M300 76 L420 76 L420 170" fill="none" stroke="var(--blue)" stroke-width="2"/>`+tx(335,70,'No');
 b+=`<rect x="190" y="170" width="100" height="30" ${st}/>`+tx(240,190,'Wait 1 s');
 b+=`<rect x="370" y="170" width="100" height="30" ${st}/>`+tx(420,190,'LED off');
 b+=`<line x1="370" y1="185" x2="290" y2="185" stroke="var(--blue)" stroke-width="2" marker-end="url(#fb)"/>`;
 b+=`<path d="M190 185 L120 185 L120 76 L180 76" fill="none" stroke="var(--blue)" stroke-width="2" marker-end="url(#fb)"/>`;
 return `<svg viewBox="0 0 520 215" role="img" aria-label="Flow diagram of a programmable night light: read the light, if low turn the LED on, otherwise off, wait and repeat">${b}</svg>`;
})();

window.TOPICS['b3-4']={
id:'b3-4',code:'B3.4',title:'Electronic systems: application and selection',level:'HL',hours:10,
guiding:'How can electronic systems be incorporated into product design?',
pptx:null,

notes:[
{id:'s341',ref:'3.4.1',title:'Analysing electronic products',
 must:'Analyse simple electronic products and circuits to identify the main component parts that enable them to perform a specific function.',
 html:`
<p>To analyse an electronic product, break it down into the <b>input, process and output</b> blocks and name the component that does each job. Then ask what the <b>power supply</b> is and what <b>feedback</b> (if any) exists.</p>
<div class="tw"><table class="t"><tr><th>Product</th><th>Input</th><th>Process</th><th>Output</th></tr>
<tr><td>Digital kitchen timer</td><td>Buttons</td><td>Microcontroller with a clock</td><td>LCD display, buzzer</td></tr>
<tr><td>Automatic hand dryer</td><td>Infrared proximity sensor</td><td>Comparator or microcontroller</td><td>Heater and fan via relay</td></tr>
<tr><td>Smoke alarm</td><td>Smoke or optical sensor</td><td>Op-amp comparator</td><td>Buzzer, LED</td></tr>
<tr><td>Fitness band</td><td>Accelerometer, heart-rate sensor</td><td>Microcontroller</td><td>Display, haptic motor, Bluetooth</td></tr></table></div>
<div class="ex"><b class="l">Method.</b> 1) Identify the function. 2) List the inputs. 3) Identify the processing component. 4) List the outputs and what drives them (transistor or relay). 5) Note protection parts (diode, fuse) and the power source.</div>
<div class="tip"><b>Exam tip.</b> Name the component and its purpose, for example “the transistor acts as a switch so that the small sensor signal can drive the buzzer”.</div>`},

{id:'s342',ref:'3.4.2',title:'Measuring apparatus: multimeter and oscilloscope',
 must:'Describe how to use multimeters on voltage, current and resistance ranges, and oscilloscopes to observe waveforms.',
 html:`
<div class="tw"><table class="t"><tr><th>Measurement</th><th>How to connect</th><th>Notes</th></tr>
<tr><td><b>Voltage (V)</b></td><td>Meter in <b>parallel</b> across the component</td><td>Select V (DC or AC) range; start on a high range and reduce</td></tr>
<tr><td><b>Current (A)</b></td><td>Meter in <b>series</b>: break the circuit and connect the meter in the gap</td><td>Use the current socket and range; never connect across a supply (it acts like a short circuit)</td></tr>
<tr><td><b>Resistance (Ω)</b></td><td>Across the component with the <b>power off</b> and the component isolated</td><td>Other components in parallel give a wrong reading</td></tr></table></div>
<h3>Oscilloscope</h3>
<p>An <b>oscilloscope</b> shows how a voltage changes with <b>time</b> as a waveform. The vertical axis is voltage (volts per division), the horizontal axis is time (time per division).</p>
<ul class="tight"><li><b>Amplitude</b> (peak voltage) = divisions up × volts/div.</li><li><b>Period T</b> = divisions for one cycle × time/div. <b>Frequency f = 1 ÷ T</b>.</li><li>Used to check sensor signals, PWM outputs, audio signals and faults.</li></ul>
<div class="ex"><b class="l">Worked example.</b> One cycle spans 4 divisions at 5 ms/div. T = 4 × 5 = 20 ms = 0.020 s. f = 1 ÷ 0.020 = <b>50 Hz</b>. If the peak is 3 divisions high at 2 V/div, the amplitude is <b>6 V</b>.</div>
<div class="tip"><b>Exam tip.</b> Voltmeter parallel, ammeter series. A multimeter on resistance needs the power off.</div>`},

{id:'s343',ref:'3.4.3',title:'Ohm’s law and power',
 must:'Calculate power, voltage, current and resistance considering V = IR and P = VI by rearranging and substituting.',
 html:`
<div class="key"><b>V = I × R</b> &nbsp; <b>I = V ÷ R</b> &nbsp; <b>R = V ÷ I</b><br><b>P = V × I</b> &nbsp; (also P = I²R and P = V²÷R)</div>
<div class="tw"><table class="t"><tr><th>Quantity</th><th>Unit</th><th>Prefixes</th></tr><tr><td>Voltage V</td><td>volt (V)</td><td>mV, kV</td></tr><tr><td>Current I</td><td>ampere (A)</td><td>mA, μA</td></tr><tr><td>Resistance R</td><td>ohm (Ω)</td><td>kΩ, MΩ</td></tr><tr><td>Power P</td><td>watt (W)</td><td>mW, kW</td></tr></table></div>
<div class="ex"><b class="l">Worked example 1.</b> A 9 V battery drives current through 450 Ω. I = 9 ÷ 450 = <b>0.020 A (20 mA)</b>. P = 9 × 0.020 = <b>0.18 W</b>.</div>
<div class="ex"><b class="l">Worked example 2.</b> A heater is rated 230 V, 2 kW. I = P ÷ V = 2000 ÷ 230 = <b>8.7 A</b>. R = V ÷ I = 230 ÷ 8.7 = <b>26.5 Ω</b>. A 13 A fuse is suitable; a 5 A fuse is not.</div>
<div class="ex"><b class="l">Worked example 3.</b> A buzzer takes 25 mA at 5 V. P = 5 × 0.025 = <b>0.125 W</b>. A resistor in series with a 6 V supply must drop 1 V at 25 mA: R = 1 ÷ 0.025 = <b>40 Ω</b>.</div>
<div class="tip"><b>Exam tip.</b> Convert mA to A and kΩ to Ω first. Write the formula, substitute and give the unit.</div>`},

{id:'s344',ref:'3.4.4',title:'Resistors and capacitors in series and parallel',
 must:'Calculate resistance and capacitance in series and parallel in a circuit.',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Series</th><th>Parallel</th></tr>
<tr><td><b>Resistors</b></td><td>R<sub>T</sub> = R1 + R2 + …<br>Same current; voltages add</td><td>1/R<sub>T</sub> = 1/R1 + 1/R2 + …<br>Same voltage; currents add; R<sub>T</sub> is less than the smallest</td></tr>
<tr><td><b>Capacitors</b></td><td>1/C<sub>T</sub> = 1/C1 + 1/C2 + …<br>Total is <b>less</b> than the smallest</td><td>C<sub>T</sub> = C1 + C2 + …<br>Capacitance <b>adds</b></td></tr></table></div>
<div class="key">Capacitors behave in the <b>opposite</b> way to resistors. For two equal parts in parallel (resistors) the total is half; for two equal capacitors in series the total is half.</div>
<div class="ex"><b class="l">Resistors.</b> 220 Ω and 330 Ω in series: 550 Ω. In parallel: 1 ÷ (1/220 + 1/330) = (220 × 330) ÷ 550 = <b>132 Ω</b>.</div>
<div class="ex"><b class="l">Capacitors.</b> 10 μF and 40 μF in parallel: <b>50 μF</b>. In series: (10 × 40) ÷ 50 = <b>8 μF</b>.</div>
<div class="ex"><b class="l">Mixed.</b> 330 Ω in series with two 220 Ω in parallel (110 Ω): R<sub>T</sub> = 330 + 110 = <b>440 Ω</b>.</div>
<h3>Why use them?</h3>
<ul class="tight"><li>Series resistors can give an unusual value or share voltage (voltage divider).</li><li>Parallel resistors lower the resistance and share current and power.</li><li>Parallel capacitors increase storage and smoothing. Series capacitors share a high voltage.</li></ul>
<div class="tip"><b>Exam tip.</b> Check the answer: parallel resistors must come out smaller than the smallest one.</div>`},

{id:'s345',ref:'3.4.5',title:'Flow diagrams for programmable systems',
 must:'Construct flow diagrams (using appropriate symbols) to model a programmable system that controls an electronic device.',
 html:`
${symsheet}
<p>A <b>flow diagram</b> shows the steps in a program. Each step is a symbol joined by arrows. Use a <b>decision</b> diamond with two exits labelled Yes and No, and a <b>loop</b> back to repeat.</p>
${nightflow}
<p class="cap">Programmable night light: read the sensor, test, switch the LED, wait and repeat.</p>
<ul class="tight"><li>Begin with <b>Start</b>; end with <b>End</b> (or an endless loop for a control system).</li><li>Describe each step in words clearly (for example “Read light sensor”).</li><li>Show <b>inputs and outputs</b> with the parallelogram.</li><li>Every decision needs <b>two labelled exits</b>.</li></ul>
<div class="tip"><b>Exam tip.</b> Use the correct symbol for each step and add a loop for a system that must keep monitoring.</div>`},

{id:'s346',ref:'3.4.6',title:'Circuit and system diagrams',
 must:'Construct diagrams for simple circuits that use resistors, capacitors, switches, relays, diodes, transistors, op-amps, integrated circuits and input and output devices.',
 html:`
<p>A <b>system diagram</b> (block diagram) shows the blocks and the order of signals. A <b>circuit diagram</b> shows the exact components using standard symbols, and how they connect.</p>
<h3>Common sub-circuits</h3>
<div class="tw"><table class="t"><tr><th>Circuit</th><th>Components</th><th>Purpose</th></tr>
<tr><td>LED with series resistor</td><td>Supply, resistor, LED</td><td>R = (V<sub>s</sub> − V<sub>f</sub>) ÷ I</td></tr>
<tr><td>Voltage divider</td><td>Two resistors (one may be an LDR or thermistor)</td><td>V<sub>out</sub> = V<sub>in</sub> × R2 ÷ (R1 + R2)</td></tr>
<tr><td>Transistor switch</td><td>NPN transistor, base resistor, load, flywheel diode</td><td>A small signal switches a larger load</td></tr>
<tr><td>Relay driver</td><td>Transistor, relay coil, diode across the coil</td><td>Switches a mains device from a low-voltage circuit</td></tr>
<tr><td>Timer</td><td>Resistor and capacitor (RC), IC such as a 555</td><td>Time delay t ≈ R × C</td></tr>
<tr><td>Comparator</td><td>Op-amp with a reference voltage</td><td>Switches the output when the input crosses a level</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> RC time constant for 100 kΩ and 47 μF: τ = R × C = 100 000 × 0.000047 = <b>4.7 s</b>.</div>
<div class="tip"><b>Exam tip.</b> Label every component with its value and always add a diode across a relay coil.</div>`},

{id:'s347',ref:'3.4.7',title:'Sensors for digital systems',
 must:'Determine the use of sensors to collect and input information, including accelerometer, ultrasonic, photoresistor, voltage (moisture), hygrometer, pressure, microphone and infrared sensors.',
 html:`
<div class="tw"><table class="t"><tr><th>Sensor</th><th>Measures</th><th>How it works</th><th>Use</th></tr>
<tr><td><b>Accelerometer</b></td><td>Motion, tilt, acceleration</td><td>Tiny mass or structure that shifts with movement</td><td>Phone rotation, step counter, airbag</td></tr>
<tr><td><b>Ultrasonic</b></td><td>Distance or proximity</td><td>Emits a sound pulse and times the echo: d = (v × t) ÷ 2</td><td>Parking sensors, robot obstacle avoidance</td></tr>
<tr><td><b>Photoresistor (LDR)</b></td><td>Light level</td><td>Resistance falls as light increases</td><td>Night lights, streetlights</td></tr>
<tr><td><b>Voltage (moisture) sensor</b></td><td>Soil moisture</td><td>Wet soil conducts better, so voltage changes</td><td>Plant watering systems</td></tr>
<tr><td><b>Hygrometer</b></td><td>Humidity and air temperature</td><td>Humidity-sensitive element and thermistor</td><td>Weather stations, climate control</td></tr>
<tr><td><b>Pressure (barometric)</b></td><td>Air pressure</td><td>Flexing diaphragm gives a voltage</td><td>Altitude and weather forecasts</td></tr>
<tr><td><b>Microphone</b></td><td>Sound</td><td>Sound pressure converted to a small voltage</td><td>Voice assistants, clap switches</td></tr>
<tr><td><b>Infrared</b></td><td>Radiation or heat</td><td>Detects IR radiation (PIR for warm moving bodies; IR beam for proximity)</td><td>Security lights, remote controls, thermometers</td></tr></table></div>
<div class="ex"><b class="l">Worked example.</b> An ultrasonic sensor receives an echo after 5.8 ms. Distance = 343 × 0.0058 ÷ 2 = <b>0.99 m</b>. The division by two is because the sound travels there and back.</div>
<div class="tip"><b>Exam tip.</b> Choose the sensor for the quantity being measured and state whether its output is analogue or digital.</div>`},

{id:'s348',ref:'3.4.8',title:'Microcontrollers and control circuits',
 must:'Create simple circuits that use microcontrollers (PIC) with appropriate software to carry out a predetermined task.',
 html:`
<p>A <b>microcontroller</b> is a programmable chip with a CPU, memory and input/output pins. The circuit has: a <b>power supply</b> (regulated), <b>inputs</b> (sensors, switches) connected to input pins, <b>outputs</b> connected through <b>transistors or relays</b> (pins give only about 20 mA), and a <b>program</b> stored in memory.</p>
<div class="tw"><table class="t"><tr><th>Step</th><th>What you do</th></tr>
<tr><td>1</td><td>State the task and draw a flow diagram.</td></tr>
<tr><td>2</td><td>Choose inputs and outputs and connect them to named pins.</td></tr>
<tr><td>3</td><td>Write the program (pseudo-code or the language of the board).</td></tr>
<tr><td>4</td><td>Upload, test with a multimeter, and debug.</td></tr></table></div>
<div class="ex"><b class="l">Pseudo-code: night light.</b><br>LOOP<br>&nbsp;&nbsp;READ light FROM pin A0<br>&nbsp;&nbsp;IF light &lt; 300 THEN LED = ON ELSE LED = OFF<br>&nbsp;&nbsp;WAIT 1 second<br>END LOOP</div>
<ul class="tight"><li>Analogue sensors connect to an <b>analogue-to-digital converter (ADC)</b> pin; a 10-bit ADC gives values 0 to 1023.</li><li><b>Pull-down or pull-up resistors</b> stop a switch input from floating.</li><li><b>PWM</b> (pulse width modulation) varies the average power to a motor or LED.</li></ul>
<div class="tip"><b>Exam tip.</b> Mention how the output pin is protected or boosted (transistor, relay, diode).</div>`},

{id:'s349',ref:'3.4.9',title:'Binary, Boolean algebra and logic circuits',
 must:'Describe digital systems in terms of the binary number system, Boolean algebra, logic gates AND, OR and NOT, combinational and sequential logic circuits, and construct truth tables.',
 html:`
<h3>Binary</h3>
<p>Digital systems use <b>base 2</b>: each place value is double the one on its right (…16, 8, 4, 2, 1).</p>
<div class="ex"><b class="l">Worked example.</b> 1011₂ = 8 + 0 + 2 + 1 = <b>11</b>. Decimal 25 = 16 + 8 + 1 = <b>11001₂</b>. An 8-bit value can show 2⁸ = <b>256</b> values (0 to 255).</div>
<h3>Boolean algebra</h3>
<div class="tw"><table class="t"><tr><th>Operation</th><th>Notation</th><th>Gate</th></tr><tr><td>AND</td><td>Q = A · B</td><td>1 only if both inputs are 1</td></tr><tr><td>OR</td><td>Q = A + B</td><td>1 if either input is 1</td></tr><tr><td>NOT</td><td>Q = Ā</td><td>Inverts the input</td></tr></table></div>
<div class="tw"><table class="t"><tr><th>A</th><th>B</th><th>A·B</th><th>A+B</th><th>Ā</th><th>(A·B) + Ā</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr></table></div>
<h3>Combinational and sequential logic</h3>
<ul class="tight"><li><b>Combinational</b>: the output depends only on the <b>present inputs</b> (gates, adders, multiplexers).</li><li><b>Sequential</b>: the output depends on the inputs <b>and the past state</b>; it has memory (flip-flops, latches, counters, registers).</li></ul>
<div class="ex"><b class="l">Example.</b> A lift door interlock: Q = (door closed) AND (button pressed) is combinational. A push-on, push-off switch uses a flip-flop, which remembers its state, so it is sequential.</div>
<div class="tip"><b>Exam tip.</b> For n inputs a truth table has 2<sup>n</sup> rows. List them in binary order.</div>`},

{id:'s3410',ref:'3.4.10',title:'Output devices',
 must:'Determine appropriate output devices to communicate information or physically control an environment: motors (servos, pumps), LCD, buzzer and relay.',
 html:`
<div class="tw"><table class="t"><tr><th>Output</th><th>Function</th><th>Driving it</th><th>Example</th></tr>
<tr><td><b>DC motor</b></td><td>Continuous rotation</td><td>Transistor and flywheel diode; PWM for speed</td><td>Fan, wheels</td></tr>
<tr><td><b>Servo motor</b></td><td>Moves to a set angle and holds it</td><td>Control pulse width (about 1 to 2 ms)</td><td>Robot arm, flaps, steering</td></tr>
<tr><td><b>Pump</b></td><td>Moves liquid</td><td>Transistor or relay</td><td>Plant watering</td></tr>
<tr><td><b>LCD display</b></td><td>Text and graphics; backlight gives light</td><td>Data pins or serial bus</td><td>Appliance display</td></tr>
<tr><td><b>Buzzer</b></td><td>Sound</td><td>Transistor or direct pin (small); frequency sets the tone</td><td>Alarms</td></tr>
<tr><td><b>Relay</b></td><td>Mechanical switching of a large or mains load; isolates circuits</td><td>Transistor and diode across coil</td><td>Heater, lamp</td></tr></table></div>
<div class="key"><b>Choosing:</b> to <b>communicate</b> information → LCD, buzzer, LEDs. To <b>physically control</b> the environment → motor, servo, pump, relay.</div>
<div class="tip"><b>Exam tip.</b> A servo for position control, a DC motor for continuous rotation, a relay for mains loads.</div>`},

{id:'s3411',ref:'3.4.11',title:'Communication protocols: Wi-Fi, Bluetooth and 5G',
 must:'Compare the protocols embedded systems use to communicate with other systems (Wi-Fi vs Bluetooth vs 5G).',
 html:`
<div class="tw"><table class="t"><tr><th></th><th>Bluetooth</th><th>Wi-Fi</th><th>5G</th></tr>
<tr><td>Typical range</td><td>Short: about 10 m (BLE up to tens of metres)</td><td>Medium: tens of metres indoors from a router</td><td>Wide area: kilometres from a cell tower</td></tr>
<tr><td>Data rate</td><td>Low (about 1 to 2 Mbps; BLE less)</td><td>High (hundreds of Mbps up to Gbps)</td><td>Very high (up to Gbps) with <b>very low latency</b></td></tr>
<tr><td>Power use</td><td>Very low (BLE suits coin cells)</td><td>Moderate to high</td><td>Higher; needs a modem and SIM</td></tr>
<tr><td>Set-up and cost</td><td>Simple pairing, no subscription</td><td>Needs a router and network password</td><td>Needs a mobile subscription and coverage</td></tr>
<tr><td>Typical use</td><td>Headphones, fitness bands, wireless keyboards</td><td>Smart TVs, home appliances, cameras</td><td>Connected cars, remote machinery, mobile devices in the field</td></tr></table></div>
<p>Values are approximate and vary with version. Choose the protocol that suits <b>range, data needs, power budget and cost</b>. Many products use several, for example a fitness band that uses Bluetooth to the phone, and the phone uses Wi-Fi or 5G to the cloud.</p>
<div class="tip"><b>Exam tip.</b> Compare on at least range, speed and power use, then choose for the named product.</div>`}
],

cards:[
['Multimeter','An instrument that measures voltage, current and resistance.'],
['Ammeter connection','Current is measured with the meter in series with the circuit.'],
['Voltmeter connection','Voltage is measured with the meter in parallel across a component.'],
['Oscilloscope','An instrument that displays voltage against time as a waveform.'],
['Amplitude','The peak value of a waveform.'],
['Period','The time for one complete cycle of a waveform.'],
['Frequency','Cycles per second: f = 1 ÷ T, measured in hertz.'],
['Ohm’s law','V = I × R.'],
['Electrical power','P = V × I, in watts.'],
['Series resistors','R total = R1 + R2 + …'],
['Parallel resistors','1/R total = 1/R1 + 1/R2 + …'],
['Series capacitors','1/C total = 1/C1 + 1/C2 + …'],
['Parallel capacitors','C total = C1 + C2 + …'],
['RC time constant','τ = R × C, which sets timing delays.'],
['Flow diagram','A diagram that models the steps of a program using standard symbols.'],
['Decision symbol','A diamond with two exits (Yes and No).'],
['System diagram','A block diagram showing the order of inputs, processes and outputs.'],
['Circuit diagram','A diagram showing components and connections with standard symbols.'],
['Voltage divider','Two resistors in series giving a fraction of the supply.'],
['Accelerometer','A sensor that detects motion, tilt or acceleration.'],
['Ultrasonic sensor','Measures distance by timing an echo.'],
['Photoresistor','Resistance falls as light increases.'],
['Hygrometer','Measures humidity.'],
['Barometric pressure sensor','Measures air pressure.'],
['Infrared sensor','Detects infrared radiation or heat.'],
['Microcontroller','A programmable chip with CPU, memory and I/O pins.'],
['ADC','Analogue-to-digital converter that changes a voltage into a number.'],
['PWM','Pulse width modulation: varies average power with the width of pulses.'],
['Binary','The base-2 number system using 0 and 1.'],
['Boolean algebra','Algebra of true/false (1/0) values using AND, OR and NOT.'],
['Truth table','A table showing the output for every input combination.'],
['Combinational logic','Output depends only on present inputs.'],
['Sequential logic','Output depends on present inputs and past state.'],
['Flip-flop','A sequential circuit that stores one bit.'],
['Servo motor','A motor that moves to and holds a set angle.'],
['Relay','An electromagnetic switch for large or mains loads.'],
['Bluetooth','Short-range, low-power wireless communication.'],
['Wi-Fi','Medium-range, high-speed wireless networking through a router.'],
['5G','Wide-area, high-speed, low-latency mobile network.']
],

mcq:[
{ref:'3.4.2',q:'To measure the voltage across a resistor, connect the multimeter…',o:['In parallel','In series','With power off only','To the battery only'],a:0,why:'Voltmeters go in parallel.',live:true},
{ref:'3.4.2',q:'To measure current, connect the multimeter…',o:['In series','In parallel across the supply','Across the component','After removing the battery'],a:0,why:'The current must flow through the meter.',live:true},
{ref:'3.4.2',q:'Resistance should be measured with the circuit…',o:['Powered off','Powered on','At full load','Connected to a PC'],a:0,why:'A live circuit gives a wrong reading and may damage the meter.'},
{ref:'3.4.2',q:'An oscilloscope shows…',o:['Voltage against time','Current against resistance','Power against area','Frequency against mass'],a:0,why:'It displays waveforms.',live:true},
{ref:'3.4.2',q:'One cycle takes 5 ms. The frequency is…',o:['200 Hz','5 Hz','50 Hz','0.2 Hz'],a:0,why:'f = 1 ÷ 0.005 = 200 Hz.'},
{ref:'3.4.3',q:'A 12 V supply and 240 Ω give a current of…',o:['0.05 A','2.9 A','20 A','0.5 A'],a:0,why:'I = 12 ÷ 240 = 0.05 A.',live:true},
{ref:'3.4.3',q:'A device uses 6 V at 0.5 A. The power is…',o:['3 W','12 W','0.083 W','6.5 W'],a:0,why:'P = V × I.'},
{ref:'3.4.3',q:'A 2 kW heater runs on 250 V. The current is…',o:['8 A','500 A','0.125 A','2 A'],a:0,why:'I = 2000 ÷ 250 = 8 A.',live:true},
{ref:'3.4.3',q:'A resistor has 5 V across it and 25 mA flowing. Its resistance is…',o:['200 Ω','0.005 Ω','125 Ω','20 Ω'],a:0,why:'5 ÷ 0.025 = 200 Ω.'},
{ref:'3.4.4',q:'Two 100 Ω resistors in series give…',o:['200 Ω','50 Ω','100 Ω','10 000 Ω'],a:0,why:'Series resistances add.'},
{ref:'3.4.4',q:'Two 100 Ω resistors in parallel give…',o:['50 Ω','200 Ω','100 Ω','25 Ω'],a:0,why:'Equal parallel resistors halve the total.',live:true},
{ref:'3.4.4',q:'Capacitors of 10 μF and 30 μF in parallel give…',o:['40 μF','7.5 μF','300 μF','20 μF'],a:0,why:'Parallel capacitances add.',live:true},
{ref:'3.4.4',q:'Capacitors of 10 μF and 30 μF in series give…',o:['7.5 μF','40 μF','20 μF','300 μF'],a:0,why:'(10 × 30) ÷ 40 = 7.5 μF.'},
{ref:'3.4.5',q:'In a flow diagram, a diamond represents a…',o:['Decision','Process','Start','Input'],a:0,why:'It has Yes and No exits.',live:true},
{ref:'3.4.5',q:'A rounded rectangle (terminator) shows…',o:['Start or end','A decision','A calculation','A loop only'],a:0,why:'Start and End use terminators.'},
{ref:'3.4.6',q:'A diode is placed across a relay coil to…',o:['Absorb the voltage spike','Increase current','Store charge','Measure voltage'],a:0,why:'Switching off the coil produces a high-voltage spike.',live:true},
{ref:'3.4.6',q:'RC time constant for 10 kΩ and 100 μF is…',o:['1 s','10 s','0.1 s','1000 s'],a:0,why:'10 000 × 0.0001 = 1 s.'},
{ref:'3.4.7',q:'Which sensor measures distance using an echo?',o:['Ultrasonic','Photoresistor','Hygrometer','Accelerometer'],a:0,why:'Time of flight of sound.',live:true},
{ref:'3.4.7',q:'An accelerometer detects…',o:['Motion or tilt','Humidity','Sound','Light'],a:0,why:'Used for step counters and screen rotation.'},
{ref:'3.4.7',q:'An echo returns after 10 ms (speed of sound 340 m/s). The distance is…',o:['1.7 m','3.4 m','0.85 m','34 m'],a:0,why:'340 × 0.010 ÷ 2 = 1.7 m.',live:true},
{ref:'3.4.8',q:'Why is a transistor added to a microcontroller output pin driving a motor?',o:['The pin supplies too little current','The motor is digital','To measure speed','To store the program'],a:0,why:'Pins supply only about 20 mA.'},
{ref:'3.4.8',q:'A 10-bit ADC gives values from 0 to…',o:['1023','1024','255','512'],a:0,why:'2¹⁰ − 1 = 1023.'},
{ref:'3.4.9',q:'Binary 1010 in decimal is…',o:['10','12','8','5'],a:0,why:'8 + 2 = 10.',live:true},
{ref:'3.4.9',q:'A truth table with 3 inputs has how many rows?',o:['8','6','3','9'],a:0,why:'2³ = 8.'},
{ref:'3.4.9',q:'A circuit with memory, such as a flip-flop, is…',o:['Sequential','Combinational','Analogue only','Passive'],a:0,why:'Output depends on the past state.',live:true},
{ref:'3.4.10',q:'Which output holds a set angle?',o:['Servo motor','Buzzer','LCD','Fixed resistor'],a:0,why:'Servos are position controlled.',live:true},
{ref:'3.4.10',q:'A relay is chosen to…',o:['Switch a mains load from a low-voltage circuit','Show text','Make a tone','Sense light'],a:0,why:'It isolates and switches large loads.'},
{ref:'3.4.11',q:'Which is best for a coin-cell fitness band connecting to a phone?',o:['Bluetooth (low energy)','5G','Wired Ethernet','Satellite'],a:0,why:'Low power and short range.',live:true},
{ref:'3.4.11',q:'Which has the widest range?',o:['5G','Bluetooth','Infrared remote','NFC'],a:0,why:'Cellular network coverage is kilometres.'}
],

fib:[
{ref:'3.4.2',t:'A voltmeter is connected in [[parallel]] and an ammeter in [[series]].'},
{ref:'3.4.2',t:'Frequency equals one divided by the [[period]].'},
{ref:'3.4.3',t:'Voltage equals current multiplied by [[resistance]], and power equals voltage multiplied by [[current]].'},
{ref:'3.4.4',t:'Resistors in series are [[added|summed]]; capacitors in [[parallel]] are added.'},
{ref:'3.4.4',t:'The total of two capacitors in series is [[less]] than the smaller one.'},
{ref:'3.4.5',t:'A [[decision]] in a flow diagram is shown by a diamond with Yes and No exits.'},
{ref:'3.4.6',t:'The RC time constant is resistance multiplied by [[capacitance]].'},
{ref:'3.4.7',t:'An [[ultrasonic]] sensor measures distance from the time of an echo.'},
{ref:'3.4.7',t:'An [[accelerometer]] senses motion or tilt.'},
{ref:'3.4.8',t:'A [[microcontroller]] is a programmable integrated circuit.'},
{ref:'3.4.8',t:'An [[ADC|analogue-to-digital converter]] converts a voltage into a number.'},
{ref:'3.4.9',t:'A [[combinational]] circuit’s output depends only on its present inputs.'},
{ref:'3.4.9',t:'The binary number 101 equals [[5]] in decimal.'},
{ref:'3.4.10',t:'A [[servo]] motor moves to a set angle and holds it.'},
{ref:'3.4.11',t:'[[Bluetooth]] is a short-range, low-power wireless protocol.'}
],

theory:[
{ref:'3.4.1',cmd:'Describe',marks:4,q:'Describe the inputs, process and outputs of an automatic hand dryer.',
 pts:['<b>Input</b>: an infrared proximity sensor detects hands [1]','<b>Process</b>: a comparator or microcontroller decides when the sensor signal passes a set value [1]','<b>Output</b>: a heater element and fan, switched by a <b>relay</b> or transistor [1]','A timer switches the dryer off after the hands are removed [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['infrared','sensor','relay','fan','timer'],acc:'',tip:'Name the component for each stage.'},
{ref:'3.4.2',cmd:'Describe',marks:4,q:'Describe how to measure the current through and the voltage across a resistor using a multimeter.',
 pts:['<b>Current</b>: break the circuit and connect the meter in <b>series</b> [1]','Use the current range and socket, starting on the highest range [1]','<b>Voltage</b>: connect the meter in <b>parallel</b> across the resistor [1]','Select the voltage range (DC), and read the display [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['series','parallel','range','break the circuit'],acc:'',tip:'Series for current, parallel for voltage.'},
{ref:'3.4.2',cmd:'Apply',marks:3,q:'An oscilloscope shows a waveform with one cycle across 5 divisions (time base 2 ms/div) and a peak 3 divisions high (1.5 V/div). Apply the settings to calculate the frequency and the amplitude.',
 pts:['Period = 5 × 2 ms = <b>10 ms</b> [1]','Frequency = 1 ÷ 0.010 = <b>100 Hz</b> [1]','Amplitude = 3 × 1.5 = <b>4.5 V</b> [1]'],
 award:'Award [1] per step.',kw:['10 ms','100 Hz','4.5 V'],acc:'',tip:'Divisions multiplied by the setting.'},
{ref:'3.4.3',cmd:'Apply',marks:4,q:'A 12 V supply drives a 480 Ω resistor. Apply V = IR and P = VI to calculate the current and the power, and say whether a 0.25 W resistor is suitable.',
 pts:['I = V ÷ R = 12 ÷ 480 = <b>0.025 A (25 mA)</b> [1]','P = V × I = 12 × 0.025 [1]','= <b>0.3 W</b> [1]','0.25 W is <b>not suitable</b>; use 0.5 W or more [1]'],
 award:'Award [1] per step. Follow-through applies.',kw:['25 mA','0.3 W','not suitable'],acc:'',tip:'Compare the power with the rating.'},
{ref:'3.4.4',cmd:'Apply',marks:4,q:'Resistors of 100 Ω and 150 Ω are connected in parallel and this pair is connected in series with a 40 Ω resistor. Apply the formulae to calculate the total resistance.',
 pts:['Parallel: (100 × 150) ÷ (100 + 150) [1]','= <b>60 Ω</b> [1]','Series: 60 + 40 [1]','= <b>100 Ω</b> [1]'],
 award:'Award [1] per step.',kw:['60 Ω','100 Ω'],acc:'Accept 1/R method.',tip:'Reduce the parallel part first.'},
{ref:'3.4.4',cmd:'Explain',marks:3,q:'Explain why capacitors in parallel give a larger total capacitance but resistors in parallel give a smaller total resistance.',
 pts:['Parallel capacitors act as <b>one bigger plate area</b>, so more charge can be stored and values add [1]','Parallel resistors give <b>more paths</b> for the current [1]','So the total resistance is lower than the smallest resistor [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['plate area','more paths','lower'],acc:'',tip:'Say why in each case.'},
{ref:'3.4.5',cmd:'Construct',marks:5,q:'Construct a flow diagram for a system that turns on a fan when the temperature rises above 28 °C and turns it off otherwise, repeating continuously.',
 pts:['Start terminator [1]','Input: read temperature sensor [1]','Decision: Is temperature &gt; 28 °C? with Yes and No exits [1]','Yes: fan on; No: fan off [1]','Loop back to the input step [1]'],
 award:'Award [1] for each element.',kw:['start','read','decision','fan on','loop'],acc:'Correct symbols are required.',tip:'Always add the loop.'},
{ref:'3.4.7',cmd:'Apply',marks:3,q:'An ultrasonic sensor measures an echo time of 8.0 ms (speed of sound 340 m/s). Apply the data to calculate the distance to the object.',
 pts:['Distance = speed × time ÷ 2 [1]','= 340 × 0.008 ÷ 2 [1]','= <b>1.36 m</b> [1]'],
 award:'Award [1] per step.',kw:['÷ 2','1.36 m'],acc:'',tip:'Divide by two for the return trip.'},
{ref:'3.4.7',cmd:'Explain',marks:4,q:'Explain which sensors you would use for an automatic plant-watering system and why.',
 pts:['A <b>moisture (voltage) sensor</b> in the soil, as wet soil conducts better [1]','This tells the controller whether the soil is dry [1]','A <b>hygrometer or temperature sensor</b> could adjust watering for the weather [1]','An LDR can stop watering at midday sun to reduce evaporation [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['moisture','hygrometer','dry','LDR'],acc:'',tip:'Sensor, reason, benefit.'},
{ref:'3.4.8',cmd:'Describe',marks:4,q:'Describe how a microcontroller circuit could control a heater safely.',
 pts:['A <b>temperature sensor</b> connects to an analogue input (via the ADC) [1]','The program compares the reading with a set value [1]','The output pin drives a <b>transistor</b> which switches a <b>relay</b> [1]','A <b>diode</b> across the relay coil protects the circuit; the relay isolates the mains [1]'],
 award:'Award [1] for each valid point up to [4 max].',kw:['sensor','ADC','transistor','relay','diode'],acc:'',tip:'Input, program, driver, protection.'},
{ref:'3.4.9',cmd:'Construct',marks:4,q:'Construct a truth table for Q = (A AND B) OR (NOT C).',
 pts:['Eight rows for A, B, C [1]','Column for A AND B [1]','Column for NOT C [1]','Q correct for all rows (Q = 1 when C = 0, or when A = B = 1) [1]'],
 award:'Award [1] per element.',kw:['8 rows','AND','NOT','OR'],acc:'',tip:'List 000 to 111.'},
{ref:'3.4.9',cmd:'Explain',marks:3,q:'Explain the difference between combinational and sequential logic circuits, with an example of each.',
 pts:['<b>Combinational</b> output depends only on the present inputs, for example a gate or adder [1]','<b>Sequential</b> output depends on inputs and past state (it has memory), for example a flip-flop or counter [1]','Sequential circuits need a clock or feedback to store state [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['present inputs','memory','flip-flop','feedback'],acc:'',tip:'Memory is the key difference.'},
{ref:'3.4.10',cmd:'Justify',marks:3,q:'Justify the use of a servo motor rather than a DC motor for the flap of a smart pet feeder.',
 pts:['The flap must move to a <b>set angle</b> and stop (open and closed) [1]','A servo <b>holds position</b> and takes a control pulse, so no extra sensors are needed [1]','A DC motor turns continuously and would need limit switches and gearing [1]'],
 award:'Award [1] for each valid point up to [3 max].',kw:['set angle','holds','limit switches'],acc:'',tip:'Position control.'},
{ref:'3.4.11',cmd:'Evaluate',marks:6,q:'Evaluate Bluetooth, Wi-Fi and 5G for connecting a battery-powered smart door lock to the owner.',
 pts:['<b>Bluetooth</b>: very low power and simple pairing, but short range so only works near the door [1]','<b>Wi-Fi</b>: gives remote access through the home router and good speed, but uses more power [1]','<b>5G</b>: works anywhere without a router, but needs a subscription and uses most power [1]','The lock sends small amounts of data, so high data rate is not needed [1]','Battery life is the key constraint, so low power matters [1]','Judgement: Bluetooth for local unlocking, with a Wi-Fi hub for remote access [1]'],
 award:'Award [1] for each valid point. Reward a judgement.',kw:['low power','range','router','subscription','judgement'],acc:'Maximum [6].',tip:'Compare against the product’s needs.'}
],

practice:[
{id:'cs1',title:'Case study 1: An ultrasonic parking sensor',paper:'Paper 2 style · HL',
 scenario:`<p>A company designs a parking sensor for a garage wall. An ultrasonic sensor measures the distance to the car. A microcontroller runs the program in Figure 1. A buzzer beeps faster as the car gets closer, and a red LED lights when the car is within 0.30 m. Data is illustrative. Speed of sound is 340 m/s.</p>`,
 fig:Fig.flow(['Read echo time','Calculate distance','Under 0.30 m?','LED on, fast beep','LED off, slow beep'],{per:5,bw:84,bh:58,hl:[2],loop:'Repeat every 0.1 s',title:'Program steps'}),
 cap:'Figure 1: Program steps for the parking sensor.',
 table:`<table class="t"><tr><th colspan="2">Table 1: Echo readings</th></tr><tr><th>Echo time</th><th>Car position</th></tr><tr><td>10.0 ms</td><td>A</td></tr><tr><td>3.5 ms</td><td>B</td></tr><tr><td>1.5 ms</td><td>C</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'State',marks:1,ref:'3.4.7',q:'State why an ultrasonic sensor is suitable for this product.',award:'Award [1].',pts:['It measures <b>distance</b> using an echo, which suits detecting the car [1]'],acc:'',kw:['distance','echo'],tip:''},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.4.7',q:'Apply Table 1 to calculate the distance for position B and state whether the LED is on.',award:'Award [1] each.',pts:['d = v × t ÷ 2 = 340 × 0.0035 ÷ 2 [1]','= <b>0.595 m</b> (about 0.6 m) [1]','Greater than 0.30 m so the LED is <b>off</b> [1]'],acc:'',kw:['0.595','off'],tip:'Divide by 2.'},
 {l:'(c)',cmd:'Apply',marks:2,ref:'3.4.7',q:'Apply the data to calculate the echo time at which the LED turns on.',award:'Award [1] each.',pts:['t = 2d ÷ v = 2 × 0.30 ÷ 340 [1]','= <b>1.76 ms</b> (about 1.8 ms) [1]'],acc:'Position C (1.5 ms) is inside the limit.',kw:['1.76','ms'],tip:'Rearrange the formula.'},
 {l:'(d)',cmd:'Explain',marks:3,ref:'3.4.10',q:'Explain how the buzzer could be driven by the microcontroller.',award:'Award [1] each, up to [3].',pts:['A small buzzer may be driven directly by the pin, or through a <b>transistor</b> if it needs more current [1]','The program sets the <b>frequency</b> for the tone [1]','The <b>delay between beeps</b> is shortened as the distance falls [1]'],acc:'',kw:['transistor','frequency','delay'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.4.11',q:'The company considers adding Bluetooth so the car’s owner can see the distance on a phone. Evaluate this idea.',award:'Award [1] each up to [5 max].',pts:['Bluetooth is <b>low power</b> and easy to pair [1]','The range of about 10 m suits a garage [1]','The data is a small number, so low data rate is fine [1]','But it adds cost, complexity and a need for a phone app [1]','Judgement: worthwhile as an optional feature if the sensor is mains powered [1]'],acc:'',kw:['low power','range','cost','judgement'],tip:''}
 ]},

{id:'cs2',title:'Case study 2: Testing a sensor circuit',paper:'Paper 2 style · HL',
 scenario:`<p>A student builds a temperature alarm circuit powered by 12 V. The circuit contains a 330 Ω resistor R1 in series with two 220 Ω resistors R2 and R3 in parallel. A multimeter is used to check the circuit. An oscilloscope is connected to the buzzer drive, showing one cycle across 4 divisions at 0.5 ms/div.</p>`,
 fig:Fig.boxes([{x:10,y:70,w:80,h:44,t:'12 V battery'},{x:130,y:70,w:80,h:44,t:'R1 330 Ω',hl:1},{x:290,y:20,w:100,h:44,t:'R2 220 Ω'},{x:290,y:120,w:100,h:44,t:'R3 220 Ω'},{x:430,y:70,w:80,h:44,t:'Return to battery'}],[[0,1],[1,2],[1,3],[2,4],[3,4]],{h:180,label:'R1 in series with R2 and R3 in parallel'}),
 cap:'Figure 2: Resistor arrangement (block view).',
 table:`<table class="t"><tr><th colspan="2">Table 2: Measurements</th></tr><tr><td>Voltage across R1</td><td>9.0 V</td></tr><tr><td>Current through R1</td><td>?</td></tr><tr><td>Oscilloscope</td><td>4 divisions per cycle, 0.5 ms/div</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Apply',marks:3,ref:'3.4.4',q:'Apply the resistor formulae to calculate the total resistance of the circuit.',award:'Award [1] each.',pts:['R2 and R3 in parallel: (220 × 220) ÷ 440 = <b>110 Ω</b> [1]','Total = 330 + 110 [1]','= <b>440 Ω</b> [1]'],acc:'',kw:['110 Ω','440 Ω'],tip:'Parallel first.'},
 {l:'(b)',cmd:'Apply',marks:3,ref:'3.4.3',q:'Apply V = IR and P = VI to calculate the total current and power from the battery.',award:'Award [1] each.',pts:['I = 12 ÷ 440 = <b>0.0273 A (27 mA)</b> [1]','P = 12 × 0.0273 [1]','= <b>0.33 W</b> [1]'],acc:'Accept 0.327 W.',kw:['27 mA','0.33 W'],tip:''},
 {l:'(c)',cmd:'Apply',marks:2,ref:'3.4.3',q:'Apply the data to check the 9.0 V measured across R1.',award:'Award [1] each.',pts:['V = I × R = 0.0273 × 330 [1]','= <b>9.0 V</b>, which agrees with the meter [1]'],acc:'',kw:['9.0 V'],tip:''},
 {l:'(d)',cmd:'Apply',marks:2,ref:'3.4.2',q:'Apply the oscilloscope settings to calculate the frequency of the signal.',award:'Award [1] each.',pts:['T = 4 × 0.5 ms = <b>2 ms</b> [1]','f = 1 ÷ 0.002 = <b>500 Hz</b> [1]'],acc:'',kw:['2 ms','500 Hz'],tip:''},
 {l:'(e)',cmd:'Describe',marks:4,ref:'3.4.2',q:'Describe how the student should connect the multimeter to measure the current through R1 and the voltage across R2.',award:'Award [1] each.',pts:['Current: break the circuit next to R1 and connect the meter in <b>series</b> [1]','Select the current range and socket [1]','Voltage: connect across R2 in <b>parallel</b> [1]','Select the DC voltage range [1]'],acc:'',kw:['series','parallel','range'],tip:''}
 ]},

{id:'cs3',title:'Case study 3: A smart door lock',paper:'Paper 2 style · HL',
 scenario:`<p>A smart door lock opens when a registered phone is close (A = 1) AND the user has entered the correct PIN (B = 1), or when a fingerprint is recognised (C = 1). A servo moves the bolt. The lock runs on four AA batteries. The designer compares communication options in Table 3. Data is illustrative.</p>`,
 fig:Fig.bars([['Bluetooth LE',1],['Wi-Fi',300],['5G',1000]],{title:'Typical data rate (Mbps, illustrative)',unit:' Mbps',lw:110,max:1100,hl:[0]}),
 cap:'Figure 3: Typical peak data rates.',
 table:`<table class="t"><tr><th colspan="4">Table 3: Protocol comparison</th></tr><tr><th></th><th>Bluetooth LE</th><th>Wi-Fi</th><th>5G</th></tr><tr><td>Range</td><td>10 m</td><td>30 m from router</td><td>Kilometres</td></tr><tr><td>Power</td><td>Very low</td><td>Medium</td><td>High</td></tr><tr><td>Extra cost</td><td>None</td><td>Router needed</td><td>Subscription</td></tr></table>`,
 parts:[
 {l:'(a)',cmd:'Construct',marks:3,ref:'3.4.9',q:'Construct the Boolean expression for the lock output Q and state when Q = 1.',award:'Award [1] each.',pts:['Q = (A · B) + C [1]','Q = 1 when A and B are both 1 [1]','…or when C = 1 [1]'],acc:'',kw:['A AND B','OR C'],tip:''},
 {l:'(b)',cmd:'Construct',marks:3,ref:'3.4.9',q:'Construct the truth table for Q.',award:'Award [1] each.',pts:['Eight combinations of A, B, C [1]','Q = 1 for rows with C = 1 (4 rows) [1]','Q = 1 for A = 1, B = 1, C = 0 [1] (5 rows with Q = 1 in total)'],acc:'',kw:['8 rows','5'],tip:'List 000 to 111.'},
 {l:'(c)',cmd:'Explain',marks:3,ref:'3.4.10',q:'Explain why a servo motor is used for the bolt.',award:'Award [1] each.',pts:['A servo moves to a <b>set angle</b> [1]','It <b>holds</b> the bolt in the locked or unlocked position [1]','Controlled by a simple pulse from the microcontroller [1]'],acc:'',kw:['set angle','holds','pulse'],tip:''},
 {l:'(d)',cmd:'Justify',marks:4,ref:'3.4.11',q:'Justify the choice of Bluetooth LE for unlocking at the door, using Table 3 and Figure 3.',award:'Award [1] each.',pts:['Very low power suits batteries [1]','Range of 10 m is enough for a person near the door [1]','The lock only needs a few bytes, so 1 Mbps is enough [1]','No router or subscription needed, so lower cost [1]'],acc:'',kw:['low power','10 m','1 Mbps','no router'],tip:''},
 {l:'(e)',cmd:'Evaluate',marks:5,ref:'3.4.11',q:'Evaluate adding Wi-Fi to let the owner unlock remotely.',award:'Award [1] each up to [5 max].',pts:['Allows <b>remote access and alerts</b> to guests or deliveries [1]','Uses more battery power, so batteries may need changing more often [1]','An internet connection creates a <b>security risk</b> from hacking [1]','Needs router in range and firmware updates [1]','Judgement: use a separate hub so the lock itself stays low power [1]'],acc:'',kw:['remote','battery','security','hub','judgement'],tip:''}
 ]}
],

short:{title:'Short-answer set',paper:'Paper 1 style · HL',intro:'<p>Quick questions of the kind that appear in the short-answer section.</p>',
 parts:[
 {l:'1',cmd:'State',marks:1,ref:'3.4.3',q:'State the formula linking power, voltage and current.',award:'Award [1].',pts:['<b>P = V × I</b> [1]'],acc:'',kw:['P = V × I'],tip:''},
 {l:'2',cmd:'Apply',marks:2,ref:'3.4.4',q:'Apply the formula to find the total capacitance of 20 μF and 30 μF in series.',award:'Award [1] each.',pts:['(20 × 30) ÷ 50 [1]','= <b>12 μF</b> [1]'],acc:'',kw:['12 μF'],tip:''},
 {l:'3',cmd:'Identify',marks:1,ref:'3.4.7',q:'Identify a sensor suitable for measuring humidity.',award:'Award [1].',pts:['<b>Hygrometer</b> [1]'],acc:'',kw:['hygrometer'],tip:''},
 {l:'4',cmd:'Outline',marks:2,ref:'3.4.8',q:'Outline why an analogue sensor needs an ADC when connected to a microcontroller.',award:'Award [1] each.',pts:['The sensor gives a <b>continuously varying voltage</b> [1]','The microcontroller works with <b>digital numbers</b>, so the ADC converts it [1]'],acc:'',kw:['voltage','digital'],tip:''},
 {l:'5',cmd:'Apply',marks:2,ref:'3.4.9',q:'Apply binary to convert 1101 into decimal.',award:'Award [1] each.',pts:['8 + 4 + 0 + 1 [1]','= <b>13</b> [1]'],acc:'',kw:['13'],tip:''},
 {l:'6',cmd:'Describe',marks:2,ref:'3.4.5',q:'Describe the purpose of a decision symbol in a flow diagram.',award:'Award [1] each.',pts:['It shows a <b>test or question</b> [1]','With <b>two exits</b> (Yes and No) leading to different actions [1]'],acc:'',kw:['test','two exits'],tip:''},
 {l:'7',cmd:'Outline',marks:2,ref:'3.4.10',q:'Outline one reason for using a relay as an output device.',award:'Award [1] each.',pts:['A small current from the circuit can switch a <b>larger or mains load</b> [1]','The circuits are <b>isolated</b> for safety [1]'],acc:'',kw:['mains','isolated'],tip:''},
 {l:'8',cmd:'Outline',marks:2,ref:'3.4.11',q:'Outline one advantage of Wi-Fi over Bluetooth for a home security camera.',award:'Award [1] each.',pts:['Higher <b>data rate</b> to stream video [1]','Longer range to reach the router from around the house [1]'],acc:'',kw:['data rate','range'],tip:''}
 ]},


paper:[]
};
})();
