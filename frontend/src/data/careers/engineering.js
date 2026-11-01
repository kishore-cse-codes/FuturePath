import { career } from './shared'

export const engineeringCareers = [
  career(
    'mechanical-engineer',
    'Mechanical Engineer',
    'engineering',
    'Design, analyse, and improve machines, mechanical systems, and manufactured products.',
    ['machines', 'manufacturing', 'cad', 'thermal systems'],
    {
      overview:
        'Mechanical engineers work on products and systems that involve motion, heat, materials, and manufacturing. They move between design, testing, and production challenges.',
      skills: ['Mechanical design', 'CAD', 'Material awareness', 'Testing'],
      stages: ['Class 10', 'Intermediate (MPC)', 'B.Tech / B.E. Mechanical', 'Mechanical Engineer'],
      dayToDay: [
        'Create and review mechanical designs',
        'Test prototypes and analyse failures',
        'Coordinate with production and suppliers',
      ],
      relatedIds: ['automobile-engineer', 'industrial-engineer', 'robotics-engineer'],
    },
  ),
  career(
    'civil-engineer',
    'Civil Engineer',
    'engineering',
    'Plan and deliver infrastructure such as buildings, roads, bridges, and water systems.',
    ['construction', 'infrastructure', 'structures', 'site engineering'],
    {
      overview:
        'Civil engineers design and supervise built infrastructure. They consider safety, materials, cost, environmental impact, and coordination across construction teams.',
      skills: ['Structural analysis', 'Construction planning', 'Safety', 'Project coordination'],
      stages: ['Class 10', 'Intermediate (MPC)', 'B.Tech / B.E. Civil', 'Civil Engineer'],
      dayToDay: [
        'Review drawings and structural requirements',
        'Coordinate site work and quality checks',
        'Resolve design and construction issues',
      ],
      relatedIds: ['structural-engineer', 'construction-engineer', 'urban-planner'],
    },
  ),
  career(
    'electrical-engineer',
    'Electrical Engineer',
    'engineering',
    'Design and maintain electrical systems that generate, distribute, and use power safely.',
    ['power systems', 'electrical machines', 'wiring', 'energy'],
    {
      overview:
        'Electrical engineers work on generation, transmission, motors, controls, and electrical safety. Their designs must be reliable and follow strict safety standards.',
      skills: ['Circuit analysis', 'Power systems', 'Safety standards', 'Testing'],
      dayToDay: [
        'Design or review electrical systems',
        'Test equipment and diagnose faults',
        'Coordinate installation and safety checks',
      ],
      relatedIds: ['electronics-engineer', 'instrumentation-engineer', 'automobile-engineer'],
    },
  ),
  career(
    'electronics-engineer',
    'Electronics Engineer',
    'engineering',
    'Design electronic circuits, devices, and systems for communication, control, and computing.',
    ['circuits', 'embedded systems', 'semiconductors', 'electronics'],
    {
      overview:
        'Electronics engineers work with components, signals, and embedded systems. They prototype circuits, test performance, and prepare designs for manufacturing.',
      skills: ['Circuit design', 'Embedded systems', 'Signal analysis', 'Prototyping'],
      dayToDay: [
        'Design and simulate electronic circuits',
        'Test prototypes and debug hardware',
        'Coordinate manufacturing and quality requirements',
      ],
      relatedIds: ['instrumentation-engineer', 'robotics-engineer', 'electrical-engineer'],
    },
  ),
  career(
    'aerospace-engineer',
    'Aerospace Engineer',
    'engineering',
    'Design and analyse aircraft, spacecraft, and systems that operate in demanding conditions.',
    ['aeronautics', 'space', 'flight systems', 'aerodynamics'],
    {
      overview:
        'Aerospace engineers work on flight vehicles and related systems. Safety, simulation, materials, and rigorous testing are central to the work.',
      skills: ['Aerodynamics', 'Simulation', 'Systems thinking', 'Safety analysis'],
      dayToDay: [
        'Model and analyse flight systems',
        'Review designs against safety requirements',
        'Support tests and manufacturing coordination',
      ],
      relatedIds: ['mechanical-engineer', 'aircraft-maintenance-engineer', 'pilot'],
    },
  ),
  career(
    'automobile-engineer',
    'Automobile Engineer',
    'engineering',
    'Design, test, and improve vehicles, engines, safety systems, and mobility technology.',
    ['vehicles', 'automotive', 'engines', 'ev technology'],
    {
      overview:
        'Automobile engineers work across vehicle design, performance, safety, and manufacturing. The field is increasingly connected with electronics and electric mobility.',
      skills: ['Vehicle systems', 'Testing', 'CAD', 'Problem solving'],
      dayToDay: [
        'Design or evaluate vehicle components',
        'Run performance and safety tests',
        'Work with manufacturing and suppliers',
      ],
      relatedIds: ['mechanical-engineer', 'electrical-engineer', 'robotics-engineer'],
    },
  ),
  career(
    'chemical-engineer',
    'Chemical Engineer',
    'engineering',
    'Design industrial processes that transform materials safely and efficiently at scale.',
    ['process engineering', 'chemicals', 'manufacturing', 'plant operations'],
    {
      overview:
        'Chemical engineers scale laboratory chemistry into safe industrial production. They balance yield, energy, safety, environmental impact, and cost.',
      skills: ['Process design', 'Safety analysis', 'Mass and energy balance', 'Plant awareness'],
      dayToDay: [
        'Model and optimise process flows',
        'Review safety and environmental controls',
        'Support plant operations and troubleshooting',
      ],
      relatedIds: ['petroleum-engineer', 'environmental-engineer', 'food-technologist'],
    },
  ),
  career(
    'industrial-engineer',
    'Industrial Engineer',
    'engineering',
    'Improve systems, workflows, and resource use in organisations and production environments.',
    ['operations research', 'productivity', 'systems', 'process improvement'],
    {
      overview:
        'Industrial engineers study how people, materials, information, and equipment work together. They redesign processes to reduce waste and improve quality.',
      skills: ['Process analysis', 'Data literacy', 'Operations planning', 'Improvement methods'],
      dayToDay: [
        'Map workflows and identify bottlenecks',
        'Measure performance and test improvements',
        'Coordinate changes with operational teams',
      ],
      relatedIds: ['operations-manager', 'supply-chain-manager', 'mechanical-engineer'],
    },
  ),
  career(
    'instrumentation-engineer',
    'Instrumentation Engineer',
    'engineering',
    'Design and maintain sensors, controls, and measurement systems used in industry.',
    ['sensors', 'control systems', 'automation', 'measurement'],
    {
      overview:
        'Instrumentation engineers ensure that processes can be measured and controlled accurately. Their work supports safety, quality, and automation.',
      skills: ['Measurement systems', 'Control systems', 'Calibration', 'Troubleshooting'],
      dayToDay: [
        'Specify and maintain sensors and controls',
        'Calibrate instruments and diagnose faults',
        'Support automation and safety systems',
      ],
      relatedIds: ['electronics-engineer', 'robotics-engineer', 'electrical-engineer'],
    },
  ),
  career(
    'marine-engineer',
    'Marine Engineer',
    'engineering',
    'Operate and maintain mechanical and electrical systems aboard ships and marine facilities.',
    ['ships', 'marine systems', 'engine room', 'maritime engineering'],
    {
      overview:
        'Marine engineers keep vessel machinery and support systems running safely. Work may involve time at sea and close coordination with deck and technical teams.',
      skills: ['Marine machinery', 'Maintenance', 'Safety', 'Teamwork'],
      dayToDay: [
        'Monitor and maintain engine-room systems',
        'Plan maintenance and safety checks',
        'Troubleshoot equipment at sea or in port',
      ],
      relatedIds: ['navy-officer', 'mechanical-engineer', 'electrical-engineer'],
    },
  ),
  career(
    'mining-engineer',
    'Mining Engineer',
    'engineering',
    'Plan and supervise mineral extraction with attention to safety, efficiency, and environmental impact.',
    ['mining', 'minerals', 'extraction', 'mine planning'],
    {
      overview:
        'Mining engineers design mining operations and coordinate extraction. They work with geology, equipment, safety systems, and environmental responsibilities.',
      skills: ['Mine planning', 'Safety management', 'Geotechnical awareness', 'Operations'],
      dayToDay: [
        'Plan extraction sequences and equipment use',
        'Review safety and ground-control measures',
        'Coordinate production and environmental checks',
      ],
      relatedIds: ['geologist', 'civil-engineer', 'environmental-engineer'],
    },
  ),
  career(
    'petroleum-engineer',
    'Petroleum Engineer',
    'engineering',
    'Work on oil and gas exploration, extraction, production, and related subsurface systems.',
    ['oil and gas', 'reservoir', 'drilling', 'energy'],
    {
      overview:
        'Petroleum engineers apply engineering and earth-science knowledge to energy extraction. Safety, environmental management, and resource efficiency are important.',
      skills: ['Reservoir analysis', 'Drilling awareness', 'Safety', 'Data interpretation'],
      dayToDay: [
        'Review reservoir and production data',
        'Plan or support drilling and extraction work',
        'Assess safety and environmental controls',
      ],
      relatedIds: ['chemical-engineer', 'geologist', 'environmental-engineer'],
    },
  ),
  career(
    'robotics-engineer',
    'Robotics Engineer',
    'engineering',
    'Build robots and automated systems that sense, decide, and act in the physical world.',
    ['robotics', 'automation', 'mechatronics', 'control'],
    {
      overview:
        'Robotics engineers combine mechanical systems, electronics, and software. They prototype machines, integrate sensors, and test behaviour in real conditions.',
      skills: ['Mechatronics', 'Programming', 'Control systems', 'Prototyping'],
      dayToDay: [
        'Integrate sensors, actuators, and software',
        'Test robot behaviour and safety',
        'Improve reliability and performance',
      ],
      relatedIds: ['mechanical-engineer', 'electronics-engineer', 'ai-engineer'],
    },
  ),
  career(
    'biomedical-engineer',
    'Biomedical Engineer',
    'engineering',
    'Apply engineering principles to medical devices, diagnostics, and healthcare technology.',
    ['medical devices', 'biomedical', 'health technology', 'prosthetics'],
    {
      overview:
        'Biomedical engineers design and support technology used in health care. They must understand both engineering constraints and clinical safety.',
      skills: ['Medical device design', 'Biology fundamentals', 'Safety standards', 'Testing'],
      dayToDay: [
        'Design or evaluate medical equipment',
        'Test safety and performance',
        'Coordinate with clinicians and technicians',
      ],
      relatedIds: ['doctor', 'electronics-engineer', 'mechanical-engineer'],
    },
  ),
  career(
    'environmental-engineer',
    'Environmental Engineer',
    'engineering',
    'Develop systems for pollution control, water management, waste treatment, and environmental protection.',
    ['environment', 'water treatment', 'waste management', 'sustainability'],
    {
      overview:
        'Environmental engineers use engineering to reduce environmental harm. Their work can involve water, air, waste, remediation, and regulatory compliance.',
      skills: ['Environmental systems', 'Sampling and analysis', 'Regulation', 'Design'],
      dayToDay: [
        'Assess environmental impacts and treatment needs',
        'Design or monitor control systems',
        'Check compliance and report results',
      ],
      relatedIds: ['environmental-scientist', 'civil-engineer', 'public-health-specialist'],
    },
  ),
  career(
    'agricultural-engineer',
    'Agricultural Engineer',
    'engineering',
    'Improve farming through machinery, irrigation, storage, and sustainable agricultural systems.',
    ['agriculture', 'irrigation', 'farm machinery', 'rural engineering'],
    {
      overview:
        'Agricultural engineers solve practical problems in food production and rural infrastructure. They work with equipment, water, soil, and post-harvest systems.',
      skills: ['Agricultural systems', 'Machinery', 'Water management', 'Practical design'],
      dayToDay: [
        'Evaluate farm equipment or irrigation needs',
        'Design or test improvements',
        'Support adoption with farmers and partners',
      ],
      relatedIds: ['agricultural-scientist', 'civil-engineer', 'food-technologist'],
    },
  ),
  career(
    'metallurgical-engineer',
    'Metallurgical Engineer',
    'engineering',
    'Study and improve metals and materials for manufacturing, construction, and advanced products.',
    ['metals', 'materials science', 'alloys', 'manufacturing'],
    {
      overview:
        'Metallurgical engineers select, process, and test materials. They connect material properties with performance, safety, and manufacturing requirements.',
      skills: ['Materials science', 'Testing', 'Process control', 'Quality analysis'],
      dayToDay: [
        'Test material properties and failures',
        'Improve processing and quality controls',
        'Advise design and production teams',
      ],
      relatedIds: ['mechanical-engineer', 'chemical-engineer', 'mining-engineer'],
    },
  ),
  career(
    'construction-engineer',
    'Construction Engineer',
    'engineering',
    'Coordinate construction methods, schedules, quality, and safety on built projects.',
    ['construction management', 'site planning', 'quality', 'safety'],
    {
      overview:
        'Construction engineers turn designs into buildable plans. They coordinate site teams, methods, materials, schedules, and safety requirements.',
      skills: ['Construction methods', 'Project coordination', 'Safety', 'Quality control'],
      dayToDay: [
        'Review construction plans and sequencing',
        'Coordinate contractors and site teams',
        'Check quality, progress, and safety',
      ],
      relatedIds: ['civil-engineer', 'structural-engineer', 'project-manager'],
    },
  ),
  career(
    'structural-engineer',
    'Structural Engineer',
    'engineering',
    'Analyse and design structures that safely carry loads and resist environmental forces.',
    ['structures', 'load analysis', 'bridges', 'buildings'],
    {
      overview:
        'Structural engineers ensure that buildings and infrastructure can safely withstand expected forces. They use analysis, materials knowledge, and codes.',
      skills: ['Structural analysis', 'Design codes', 'Materials', 'Safety judgment'],
      dayToDay: [
        'Model loads and structural behaviour',
        'Prepare or review structural designs',
        'Resolve site and safety questions',
      ],
      relatedIds: ['civil-engineer', 'construction-engineer', 'geotechnical-engineer'],
    },
  ),
  career(
    'geotechnical-engineer',
    'Geotechnical Engineer',
    'engineering',
    'Study soil and rock behaviour to support safe foundations, tunnels, and earth structures.',
    ['soil mechanics', 'foundations', 'ground engineering', 'geology'],
    {
      overview:
        'Geotechnical engineers investigate ground conditions and design foundations or earthworks. Their assessments reduce risk from settlement, slope failure, and instability.',
      skills: ['Soil mechanics', 'Site investigation', 'Risk assessment', 'Design'],
      dayToDay: [
        'Review soil and rock investigation data',
        'Design foundations or earth structures',
        'Assess ground risks during construction',
      ],
      relatedIds: ['civil-engineer', 'geologist', 'structural-engineer'],
    },
  ),
]
