import { career } from './shared'

export const communityCareers = [
  career(
    'social-worker',
    'Social Worker',
    'community',
    'Support individuals, families, and communities through practical help, advocacy, and care.',
    ['social work', 'community support', 'welfare', 'counselling'],
    {
      overview:
        'Social workers help people navigate difficult circumstances. They assess needs, connect people with services, and advocate for dignity and safety within professional boundaries.',
      skills: ['Active listening', 'Assessment', 'Advocacy', 'Ethics'],
      dayToDay: [
        'Meet individuals or families and assess needs',
        'Coordinate support with services and networks',
        'Maintain records and follow safeguarding procedures',
      ],
      relatedIds: ['rehabilitation-counselor', 'community-health-worker', 'ngo-program-manager'],
    },
  ),
  career(
    'ngo-program-manager',
    'NGO Programme Manager',
    'community',
    'Plan and manage community programmes that deliver useful, accountable social impact.',
    ['ngo', 'programme management', 'development', 'social impact'],
    {
      overview:
        'NGO programme managers coordinate projects, teams, partners, budgets, and reporting. They balance community needs with organisational and funder requirements.',
      skills: ['Programme planning', 'Budget awareness', 'Coordination', 'Reporting'],
      dayToDay: [
        'Plan activities, timelines, and responsibilities',
        'Support field teams and community partners',
        'Review progress, risks, and reports',
      ],
      relatedIds: ['ngo-fundraiser', 'social-worker', 'rural-development-officer'],
    },
  ),
  career(
    'community-health-worker',
    'Community Health Worker',
    'community',
    'Connect communities with health information, preventive support, and appropriate services.',
    ['community health', 'public health', 'outreach', 'health education'],
    {
      overview:
        'Community health workers build trust and share practical health information. They support prevention, referrals, and follow-up within local communities.',
      skills: ['Community communication', 'Health awareness', 'Empathy', 'Referral coordination'],
      dayToDay: [
        'Visit households or community groups',
        'Share health information and preventive guidance',
        'Support referrals and follow-up',
      ],
      relatedIds: ['public-health-specialist', 'social-worker', 'nurse'],
    },
  ),
  career(
    'rehabilitation-counselor',
    'Rehabilitation Counselor',
    'community',
    'Support people with recovery, adjustment, and participation after health or life challenges.',
    ['rehabilitation', 'counselling', 'disability support', 'recovery'],
    {
      overview:
        'Rehabilitation counselors help people set practical goals and access support. They work with health, education, employment, and family systems.',
      skills: ['Counselling', 'Goal planning', 'Collaboration', 'Ethics'],
      dayToDay: [
        'Explore needs, strengths, and goals',
        'Coordinate support and reasonable adjustments',
        'Review progress and adapt plans',
      ],
      relatedIds: ['social-worker', 'psychologist', 'occupational-therapist'],
    },
  ),
  career(
    'sociologist',
    'Sociologist',
    'community',
    'Study social behaviour, institutions, and change using research and theory.',
    ['sociology', 'society', 'research', 'social change'],
    {
      overview:
        'Sociologists examine how groups and institutions shape behaviour and opportunity. They use research methods to explain social patterns and inform debate.',
      skills: ['Social theory', 'Research methods', 'Analysis', 'Writing'],
      dayToDay: [
        'Review literature and define research questions',
        'Collect or analyse social data',
        'Write findings and policy-relevant interpretations',
      ],
      relatedIds: ['anthropologist', 'policy-analyst', 'demographer'],
    },
  ),
  career(
    'anthropologist',
    'Anthropologist',
    'community',
    'Study human cultures, communities, and social practices through fieldwork and analysis.',
    ['anthropology', 'culture', 'fieldwork', 'ethnography'],
    {
      overview:
        'Anthropologists seek to understand how people live, make meaning, and organise their worlds. Fieldwork and ethical relationships are central to the discipline.',
      skills: ['Ethnographic research', 'Cultural sensitivity', 'Observation', 'Writing'],
      dayToDay: [
        'Conduct interviews and field observation',
        'Analyse cultural and social patterns',
        'Prepare ethical, detailed accounts of findings',
      ],
      relatedIds: ['sociologist', 'social-worker', 'community-relations-manager'],
    },
  ),
  career(
    'urban-planner',
    'Urban Planner',
    'community',
    'Plan land use, transport, housing, and public spaces so cities function better for people.',
    ['urban planning', 'cities', 'land use', 'transport'],
    {
      overview:
        'Urban planners bring evidence and public priorities together to guide how places grow and change. They coordinate with communities, engineers, and government.',
      skills: ['Spatial planning', 'Community engagement', 'Data analysis', 'Policy awareness'],
      dayToDay: [
        'Review land-use and development proposals',
        'Consult communities and stakeholders',
        'Prepare plans, reports, and recommendations',
      ],
      relatedIds: ['architect', 'municipal-administrator', 'civil-engineer'],
    },
  ),
  career(
    'rural-development-officer',
    'Rural Development Officer',
    'community',
    'Coordinate rural programmes, local institutions, and services to improve livelihoods and infrastructure.',
    ['rural development', 'village', 'livelihoods', 'community'],
    {
      overview:
        'Rural development officers support programme implementation in rural areas. They coordinate community participation, local institutions, and government schemes.',
      skills: ['Community mobilisation', 'Programme coordination', 'Local awareness', 'Reporting'],
      dayToDay: [
        'Meet community groups and local institutions',
        'Coordinate programme activities and resources',
        'Review progress and resolve local issues',
      ],
      relatedIds: ['ngo-program-manager', 'community-health-worker', 'state-civil-services-officer'],
    },
  ),
  career(
    'ngo-fundraiser',
    'NGO Fundraiser',
    'community',
    'Build relationships and funding support for social programmes through ethical communication.',
    ['fundraising', 'grants', 'donors', 'development'],
    {
      overview:
        'NGO fundraisers connect programmes with donors, grants, and supporters. They communicate impact honestly and respect funder and community relationships.',
      skills: ['Relationship building', 'Writing', 'Presentation', 'Ethical storytelling'],
      dayToDay: [
        'Prepare grant or donor communications',
        'Meet supporters and maintain records',
        'Coordinate reporting with programme teams',
      ],
      relatedIds: ['ngo-program-manager', 'csr-specialist', 'community-relations-manager'],
    },
  ),
  career(
    'volunteer-coordinator',
    'Volunteer Coordinator',
    'community',
    'Recruit, support, and organise volunteers so their time is useful and safe.',
    ['volunteering', 'coordination', 'community', 'engagement'],
    {
      overview:
        'Volunteer coordinators match people with suitable roles, provide orientation, and maintain safe, respectful participation.',
      skills: ['Coordination', 'People skills', 'Organisation', 'Safeguarding'],
      dayToDay: [
        'Recruit and orient volunteers',
        'Match people with roles and schedules',
        'Support volunteers and review activity',
      ],
      relatedIds: ['ngo-program-manager', 'social-worker', 'community-relations-manager'],
    },
  ),
  career(
    'csr-specialist',
    'CSR Specialist',
    'community',
    'Design and coordinate corporate social responsibility initiatives with communities and partners.',
    ['csr', 'corporate responsibility', 'social impact', 'community'],
    {
      overview:
        'CSR specialists connect business resources with social programmes. They plan initiatives, manage partners, and measure outcomes transparently.',
      skills: ['Programme design', 'Partnerships', 'Reporting', 'Community awareness'],
      dayToDay: [
        'Review social priorities and programme options',
        'Coordinate partners and implementation',
        'Track outcomes and prepare disclosures',
      ],
      relatedIds: ['ngo-program-manager', 'ngo-fundraiser', 'human-resources-manager'],
    },
  ),
  career(
    'social-entrepreneur',
    'Social Entrepreneur',
    'community',
    'Build a venture that addresses a social problem through a sustainable operating model.',
    ['social enterprise', 'impact', 'entrepreneurship', 'community'],
    {
      overview:
        'Social entrepreneurs combine enterprise practices with a social mission. They validate needs, build teams, and balance impact with financial sustainability.',
      skills: ['Opportunity spotting', 'Community understanding', 'Business modelling', 'Resilience'],
      dayToDay: [
        'Work with communities to understand needs',
        'Develop and test a sustainable model',
        'Manage people, partners, and performance',
      ],
      relatedIds: ['entrepreneur', 'ngo-program-manager', 'csr-specialist'],
    },
  ),
  career(
    'demographer',
    'Demographer',
    'community',
    'Study population patterns such as births, migration, ageing, and household change.',
    ['demography', 'population', 'statistics', 'research'],
    {
      overview:
        'Demographers analyse population data to explain change and support planning. They work with surveys, censuses, statistics, and policy questions.',
      skills: ['Statistics', 'Data analysis', 'Population studies', 'Writing'],
      dayToDay: [
        'Clean and analyse population data',
        'Interpret trends and projections',
        'Prepare reports for planning or research',
      ],
      relatedIds: ['data-analyst', 'sociologist', 'public-health-specialist'],
    },
  ),
  career(
    'community-relations-manager',
    'Community Relations Manager',
    'community',
    'Build constructive relationships between an organisation and the communities it affects.',
    ['community engagement', 'stakeholders', 'relations', 'outreach'],
    {
      overview:
        'Community relations managers listen to community concerns and coordinate constructive engagement. They help organisations understand local impact and communicate clearly.',
      skills: ['Stakeholder engagement', 'Communication', 'Conflict awareness', 'Planning'],
      dayToDay: [
        'Meet community groups and stakeholders',
        'Coordinate consultations and responses',
        'Track concerns and report emerging issues',
      ],
      relatedIds: ['public-relations-specialist', 'social-worker', 'csr-specialist'],
    },
  ),
]
