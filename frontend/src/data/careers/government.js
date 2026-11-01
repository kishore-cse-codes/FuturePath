import { career } from './shared'

export const governmentCareers = [
  career(
    'ias-officer',
    'IAS Officer',
    'government',
    'Serve in the Indian Administrative Service, coordinating administration and public programmes.',
    ['upsc', 'civil services', 'administration', 'collector'],
    {
      overview:
        'IAS officers work in district administration and government departments. Their responsibilities can include public service delivery, law and order coordination, development programmes, and policy implementation.',
      skills: ['Public administration', 'Decision making', 'Communication', 'Leadership'],
      stages: ['Class 10', 'Intermediate', 'Undergraduate degree', 'UPSC Civil Services Examination'],
      dayToDay: [
        'Review public programmes and administrative issues',
        'Coordinate across departments and field teams',
        'Respond to citizens, emergencies, and service delivery gaps',
      ],
      relatedIds: ['ips-officer', 'state-civil-services-officer', 'municipal-administrator'],
    },
  ),
  career(
    'ips-officer',
    'IPS Officer',
    'government',
    'Serve in the Indian Police Service, leading policing and public safety responsibilities.',
    ['upsc', 'civil services', 'police leadership', 'public safety'],
    {
      overview:
        'IPS officers hold leadership roles in police organisations. Their work involves public safety, law and order, investigations, and coordination with other agencies.',
      skills: ['Leadership', 'Law and order coordination', 'Crisis response', 'Integrity'],
      stages: ['Class 10', 'Intermediate', 'Undergraduate degree', 'UPSC Civil Services Examination'],
      dayToDay: [
        'Review public safety and policing priorities',
        'Coordinate operations and investigations',
        'Engage with communities and government partners',
      ],
      relatedIds: ['police-officer', 'ias-officer', 'intelligence-officer'],
    },
  ),
  career(
    'ifs-officer',
    'IFS Officer',
    'government',
    'Represent India abroad through the Indian Foreign Service and diplomatic work.',
    ['foreign service', 'diplomacy', 'upsc', 'international relations'],
    {
      overview:
        'Indian Foreign Service officers work in embassies, consulates, and the Ministry of External Affairs. Their work covers diplomacy, consular services, negotiations, and international cooperation.',
      skills: ['Diplomacy', 'International awareness', 'Communication', 'Negotiation'],
      dayToDay: [
        'Prepare briefs on international developments',
        'Support diplomatic engagements and consular services',
        'Coordinate with partners and Indian stakeholders',
      ],
      relatedIds: ['ias-officer', 'policy-analyst', 'international-relations-analyst'],
    },
  ),
  career(
    'irs-officer',
    'Indian Revenue Service Officer',
    'government',
    'Administer taxation and revenue functions within the Indian Revenue Service.',
    ['irs', 'taxation', 'revenue', 'upsc'],
    {
      overview:
        'Indian Revenue Service officers work in tax administration and related areas. Their duties involve assessment, compliance, investigation, and public-facing administration.',
      skills: ['Analytical reasoning', 'Law and procedure', 'Integrity', 'Communication'],
      dayToDay: [
        'Review cases and compliance information',
        'Apply relevant rules and procedures',
        'Coordinate with taxpayers and internal teams',
      ],
      relatedIds: ['iaas-officer', 'chartered-accountant', 'ias-officer'],
    },
  ),
  career(
    'iaas-officer',
    'Indian Audit and Accounts Service Officer',
    'government',
    'Support public financial accountability through audit and accounts responsibilities.',
    ['iaas', 'audit', 'public finance', 'accounts'],
    {
      overview:
        'Indian Audit and Accounts Service officers work on public audit and financial governance. The role calls for careful examination of records and clear reporting.',
      skills: ['Audit', 'Public finance', 'Attention to detail', 'Reporting'],
      dayToDay: [
        'Examine financial records and controls',
        'Prepare audit observations and reports',
        'Coordinate with audited organisations',
      ],
      relatedIds: ['irs-officer', 'chartered-accountant', 'public-enterprise-manager'],
    },
  ),
  career(
    'indian-forest-service-officer',
    'Indian Forest Service Officer',
    'government',
    'Lead forest administration, conservation, and natural resource management responsibilities.',
    ['forest service', 'conservation', 'environment', 'upsc'],
    {
      overview:
        'Indian Forest Service officers manage forest and wildlife administration. Their work balances conservation, community needs, regulation, and sustainable resource use.',
      skills: ['Conservation knowledge', 'Field coordination', 'Regulation', 'Community engagement'],
      dayToDay: [
        'Review forest and wildlife management priorities',
        'Coordinate field staff and conservation programmes',
        'Handle regulatory and community issues',
      ],
      relatedIds: ['environmental-scientist', 'wildlife-conservationist', 'state-civil-services-officer'],
    },
  ),
  career(
    'indian-economic-service-officer',
    'Indian Economic Service Officer',
    'government',
    'Apply economic analysis to government policy, planning, and public programmes.',
    ['economics', 'public policy', 'upsc', 'economic service'],
    {
      overview:
        'Indian Economic Service officers provide economic analysis within government. They work on policy questions, data, evaluations, and planning across departments.',
      skills: ['Economics', 'Data analysis', 'Policy reasoning', 'Written communication'],
      dayToDay: [
        'Analyse economic data and policy options',
        'Prepare notes and evidence for decisions',
        'Review programme outcomes and trends',
      ],
      relatedIds: ['economist', 'policy-analyst', 'ias-officer'],
    },
  ),
  career(
    'state-civil-services-officer',
    'State Civil Services Officer',
    'government',
    'Serve in state administration through state public service selection processes.',
    ['state psc', 'civil services', 'administration', 'government'],
    {
      overview:
        'State civil services officers work within state government structures. Roles can include revenue administration, development programmes, and departmental coordination.',
      skills: ['Administration', 'Local awareness', 'Communication', 'Problem solving'],
      dayToDay: [
        'Implement state programmes at field level',
        'Resolve service delivery and coordination issues',
        'Prepare reports for senior administration',
      ],
      relatedIds: ['ias-officer', 'municipal-administrator', 'rural-development-officer'],
    },
  ),
  career(
    'government-school-teacher',
    'Government School Teacher',
    'government',
    'Teach in a government school through the qualifications and recruitment process required by the relevant authority.',
    ['government teacher', 'school teacher', 'tet', 'ctet', 'teaching'],
    {
      overview:
        'Government school teachers plan and deliver lessons, assess learning, and support students in public schools. Qualifications and recruitment rules vary by level and state, and usually include teacher education and an eligibility test where required.',
      skills: ['Subject knowledge', 'Classroom communication', 'Assessment', 'Child development'],
      stages: [
        'Class 10',
        'Intermediate',
        'Bachelor’s degree with teacher education',
        'Teacher eligibility and recruitment',
        'Government school teacher',
      ],
      dayToDay: [
        'Plan and teach lessons for assigned classes',
        'Assess learning and provide feedback',
        'Support students, families, and school activities',
      ],
      relatedIds: ['teacher', 'special-education-teacher', 'education-administrator'],
    },
  ),
  career(
    'government-engineer',
    'Government Engineer',
    'government',
    'Apply engineering expertise in public infrastructure, utilities, or technical government departments.',
    ['public works', 'government engineering', 'psu', 'engineering services'],
    {
      overview:
        'Government engineers plan, build, operate, and maintain public infrastructure and technical services. Entry can be through central or state engineering services, public sector undertakings, or department-specific recruitment.',
      skills: ['Engineering fundamentals', 'Public project delivery', 'Safety and standards', 'Coordination'],
      stages: [
        'Class 10',
        'Intermediate (MPC)',
        'Engineering degree or diploma',
        'Engineering services or department recruitment',
        'Government engineer',
      ],
      dayToDay: [
        'Review designs, estimates, and technical specifications',
        'Supervise works, contracts, and quality standards',
        'Coordinate with teams, contractors, and public stakeholders',
      ],
      relatedIds: ['civil-engineer', 'mechanical-engineer', 'state-civil-services-officer'],
    },
  ),
  career(
    'municipal-administrator',
    'Municipal Administrator',
    'government',
    'Coordinate urban services, infrastructure, and local governance in a city or municipality.',
    ['urban administration', 'municipal', 'local government', 'city services'],
    {
      overview:
        'Municipal administrators support local government operations. They coordinate services such as sanitation, roads, permits, and public facilities with many stakeholders.',
      skills: ['Local governance', 'Operations coordination', 'Public communication', 'Planning'],
      dayToDay: [
        'Review civic services and infrastructure issues',
        'Coordinate departments and contractors',
        'Respond to public concerns and service gaps',
      ],
      relatedIds: ['urban-planner', 'state-civil-services-officer', 'public-enterprise-manager'],
    },
  ),
  career(
    'election-administrator',
    'Election Administrator',
    'government',
    'Support the planning and conduct of elections and electoral processes.',
    ['election commission', 'electoral process', 'public administration'],
    {
      overview:
        'Election administrators help prepare and run electoral operations. The work demands accuracy, neutrality, logistics planning, and strict adherence to procedure.',
      skills: ['Procedure and accuracy', 'Logistics', 'Neutrality', 'Coordination'],
      dayToDay: [
        'Prepare electoral records and materials',
        'Coordinate polling and training arrangements',
        'Resolve procedural and logistical issues',
      ],
      relatedIds: ['state-civil-services-officer', 'municipal-administrator', 'ias-officer'],
    },
  ),
  career(
    'government-communications-officer',
    'Government Communications Officer',
    'government',
    'Explain public programmes and government information clearly to citizens and media.',
    ['public communication', 'government media', 'information service'],
    {
      overview:
        'Government communications officers prepare public information, coordinate announcements, and help ensure messages are accurate and accessible.',
      skills: ['Writing', 'Public communication', 'Accuracy', 'Media awareness'],
      dayToDay: [
        'Draft public information and campaign material',
        'Coordinate announcements with departments',
        'Monitor public questions and misinformation',
      ],
      relatedIds: ['journalist', 'policy-analyst', 'public-relations-specialist'],
    },
  ),
  career(
    'public-enterprise-manager',
    'Public Enterprise Manager',
    'government',
    'Manage operations and performance in government-owned companies and public institutions.',
    ['public sector', 'psu', 'management', 'government business'],
    {
      overview:
        'Public enterprise managers balance commercial performance with public objectives. They work across operations, finance, people, and service delivery.',
      skills: ['Management', 'Public accountability', 'Finance literacy', 'Planning'],
      dayToDay: [
        'Review operational and financial performance',
        'Coordinate teams and public service targets',
        'Plan improvements and report to stakeholders',
      ],
      relatedIds: ['operations-manager', 'municipal-administrator', 'iaas-officer'],
    },
  ),
]
