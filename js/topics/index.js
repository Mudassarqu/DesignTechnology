/* Topic list for the landing page. Set ready:true when a topic's data file exists. */
window.THEMES={A:'Theme A: Design in theory',B:'Theme B: Design in practice',C:'Theme C: Design in context'};
window.TOPIC_LIST=[
 {id:'a1-1',t:'A',code:'A1.1',title:'Ergonomics',lv:'SL + HL',blurb:'Anthropometrics, percentiles, adjustability, physiology and psychology.'},
 {id:'a2-1',t:'A',code:'A2.1',title:'User-centred research methods',lv:'SL + HL',blurb:'Empathy, UCD stages, field research, interviews, surveys, focus groups.'},
 {id:'a2-2',t:'A',code:'A2.2',title:'Prototyping techniques',lv:'SL + HL',blurb:'Sketching, models, mock-ups, rapid prototyping and testing.'},
 {id:'a3-1',t:'A',code:'A3.1',title:'Material classification and properties',lv:'SL + HL',blurb:'Material groups, physical and mechanical properties, selection language.'},
 {id:'a3-2',t:'A',code:'A3.2',title:'Introduction to structural systems',lv:'HL',blurb:'Forces, loads, stress, strain, beams and frameworks.'},
 {id:'a3-3',t:'A',code:'A3.3',title:'Introduction to mechanical systems',lv:'HL',blurb:'Levers, gears, pulleys, cams, linkages and mechanical advantage.'},
 {id:'a3-4',t:'A',code:'A3.4',title:'Introduction to electronic systems',lv:'HL',blurb:'Input, process, output, components, circuits and microcontrollers.'},
 {id:'a4-1',t:'A',code:'A4.1',title:'Manufacturing techniques',lv:'HL',blurb:'Processes for each material group: shaping, forming, joining, finishing.'},
 {id:'b1-1',t:'B',code:'B1.1',title:'User-centred design',lv:'SL + HL',blurb:'UCD in practice, personas, scenarios, usability and iteration.'},
 {id:'b2-1',t:'B',code:'B2.1',title:'The design process',lv:'SL + HL',blurb:'Design models, problem analysis, specification, ideation and evaluation.'},
 {id:'b2-2',t:'B',code:'B2.2',title:'Modelling and prototyping',lv:'SL + HL',blurb:'Choosing and using models and prototypes to develop a design.'},
 {id:'b3-1',t:'B',code:'B3.1',title:'Material selection',lv:'SL + HL',blurb:'Choosing materials against requirements, properties and impact.'},
 {id:'b3-2',t:'B',code:'B3.2',title:'Structural systems: application and selection',lv:'HL',blurb:'Applying structural ideas and selecting forms for a design.'},
 {id:'b3-3',t:'B',code:'B3.3',title:'Mechanical systems: application and selection',lv:'HL',blurb:'Selecting and applying mechanisms to meet a need.'},
 {id:'b3-4',t:'B',code:'B3.4',title:'Electronic systems: application and selection',lv:'HL',blurb:'Selecting components and circuits, programming and testing.'},
 {id:'b4-1',t:'B',code:'B4.1',title:'Production systems',lv:'HL',blurb:'One-off, batch, mass and continuous production, automation and lean ideas.'},
 {id:'c1-1',t:'C',code:'C1.1',title:'Responsibility of the designer',lv:'SL + HL',blurb:'Ethics, standards, law, safety and the designer’s duties.'},
 {id:'c1-2',t:'C',code:'C1.2',title:'Inclusive design',lv:'SL + HL',blurb:'Designing for the widest range of users and abilities.'},
 {id:'c1-3',t:'C',code:'C1.3',title:'Beyond usability',lv:'HL',blurb:'Emotion, pleasure, desirability and user experience.'},
 {id:'c2-1',t:'C',code:'C2.1',title:'Design for sustainability',lv:'SL + HL',blurb:'Environmental, social and economic sustainability in design.'},
 {id:'c2-2',t:'C',code:'C2.2',title:'Design for a circular economy',lv:'SL + HL',blurb:'Reduce, reuse, repair, remanufacture and recycle.'},
 {id:'c3-1',t:'C',code:'C3.1',title:'Product analysis and evaluation',lv:'SL + HL',blurb:'Analysing and evaluating existing products against criteria.'},
 {id:'c3-2',t:'C',code:'C3.2',title:'Life-cycle analysis',lv:'HL',blurb:'Stages, inputs, outputs and impacts across a product’s life.'},
 {id:'c4-1',t:'C',code:'C4.1',title:'Design for manufacture strategies',lv:'HL',blurb:'DFM, DFA and strategies that make products easier to make.'}
];
/* Slide decks: copy each file into the resources/ folder using exactly this name. */
window.PPTX={
 'a1-1':'A1.1_Ergonomics.pptx','a2-1':'A2.1_User-Centred_Research_Methods.pptx','a2-2':'A2_2_Prototyping_Techniques.pptx',
 'a3-1':'A3.1_Material_Classification_and_Properties.pptx','a3-2':'A3_2_HL__Introduction_to_Structural_Systems.pptx',
 'a3-3':'A3_3_HL__Introduction_to_Mechanical_Systems.pptx','a4-1':'A4_1_HL__Manufacturing_Techniques.pptx',
 'b1-1':'B1_1_User-Centred_Design_1.pptx','b2-1':'B2_1_The_Design_Process_1.pptx','b2-2':'B2_2_Modelling_and_Prototyping_1.pptx',
 'b3-3':'B3.3HL_Mechanical_Systems_Application_and_Selection.pptx','c1-1':'C1.1_Responsibility_of_the_Designer.pptx',
 'c1-2':'C1.2_Inclusive_Design.pptx','c1-3':'C1.3HL_Beyond_Usability.pptx','c2-1':'C2.1_Design_for_Sustainability.pptx',
 'c2-2':'C2.2_Design_for_a_Circular_Economy.pptx','c3-1':'C3.1_Product_Analysis_and_Evaluation.pptx','c4-1':'C4.1HL_Design_for_Manufacture_Strategies.pptx'
};
/* Topics whose data file is published. Add an id here when its file exists in js/topics/. */
window.READY=['a1-1','a2-1','a2-2','a3-1','a3-2','a3-3','a3-4','a4-1','b1-1','b2-1','b2-2','b3-1','b3-2','b3-3','b3-4','b4-1','c1-1','c1-2','c1-3','c2-1','c2-2','c3-1','c3-2','c4-1'];
