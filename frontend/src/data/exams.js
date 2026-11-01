const OFFICIAL = {
  jeeMain: { label: 'NTA – JEE (Main)', url: 'https://jeemain.nta.nic.in/' },
  jeeAdvanced: { label: 'JEE (Advanced)', url: 'https://jeeadv.ac.in/' },
  neet: { label: 'NTA – NEET (UG)', url: 'https://neet.nta.nic.in/' },
  cuet: { label: 'NTA – CUET (UG)', url: 'https://cuet.nta.nic.in/' },
  clat: { label: 'Consortium of NLUs – CLAT', url: 'https://consortiumofnlus.ac.in/' },
  upsc: { label: 'UPSC – official examinations', url: 'https://upsc.gov.in/' },
  ssc: { label: 'Staff Selection Commission', url: 'https://ssc.gov.in/' },
  ibps: { label: 'IBPS – official information', url: 'https://www.ibps.in/' },
  ctet: { label: 'CBSE – CTET', url: 'https://ctet.nic.in/' },
  ugcNet: { label: 'NTA – UGC NET', url: 'https://ugcnet.nta.ac.in/' },
  nata: { label: 'NATA – official information', url: 'https://www.nata.in/' },
  uceed: { label: 'UCEED – IIT Bombay', url: 'https://www.uceed.iitb.ac.in/' },
  nift: { label: 'NIFT – admissions', url: 'https://www.nift.ac.in/admissions' },
  nid: { label: 'NID – admissions', url: 'https://www.nid.edu/' },
  icai: { label: 'ICAI – official information', url: 'https://www.icai.org/' },
  icsi: { label: 'ICSI – official information', url: 'https://www.icsi.edu/' },
  afcat: { label: 'AFCAT – official information', url: 'https://afcat.cdac.in/' },
  apEapcet: {
    label: 'AP EAPCET – official portal',
    url: 'https://cets.apsche.ap.gov.in/EAPCET/Eapcet/EAPCET_HomePage',
  },
  tgEapcet: { label: 'TG EAPCET – official portal', url: 'https://eapcet.tgche.ac.in/' },
  viteee: { label: 'VIT – admissions', url: 'https://vit.ac.in/' },
  cat: { label: 'CAT – official information', url: 'https://iimcat.ac.in/' },
  ailet: { label: 'NLU Delhi – official admissions', url: 'https://nludelhi.ac.in/' },
  met: { label: 'Manipal – official admissions', url: 'https://manipal.edu/mit.html' },
}

const VERIFY =
  'This is a directory entry, not an official notification. Confirm current eligibility, dates, fees, stages, and reservation rules on the official website.'

export const EXAMS = [
  {
    id: 'jee-main',
    name: 'JEE (Main)',
    short: 'JEE',
    category: 'Engineering',
    level: 'After Class 12',
    purpose:
      'National engineering entrance test used for admission to NITs, IIITs, and participating institutions, and as a qualifying route to JEE (Advanced).',
    eligibility:
      'Generally requires Class 12 or an equivalent qualification with the required science and mathematics subjects. Subject and percentage rules must be checked for the current year.',
    stages: ['Application', 'Computer-based test', 'Result and rank', 'Counselling through participating authorities'],
    streamCodes: ['MPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'electrical-engineer',
      'aerospace-engineer',
      'architect',
    ],
    official: OFFICIAL.jeeMain,
    note: VERIFY,
  },
  {
    id: 'jee-advanced',
    name: 'JEE (Advanced)',
    short: 'ADV',
    category: 'Engineering',
    level: 'After Class 12',
    purpose:
      'Advanced engineering entrance test for admission to undergraduate programmes at the Indian Institutes of Technology.',
    eligibility:
      'Usually requires qualifying JEE (Main) and meeting the current Class 12 subject and performance conditions. Check the official information brochure each year.',
    stages: ['JEE (Main) qualification', 'Application', 'Computer-based test', 'Rank and JoSAA counselling'],
    streamCodes: ['MPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'electrical-engineer',
      'aerospace-engineer',
      'chemical-engineer',
    ],
    official: OFFICIAL.jeeAdvanced,
    note: VERIFY,
  },
  {
    id: 'neet-ug',
    name: 'NEET (UG)',
    short: 'NEET',
    category: 'Medical',
    level: 'After Class 12',
    purpose:
      'National entrance test used for MBBS, BDS, and several allied health programmes at participating institutions.',
    eligibility:
      'Generally requires Class 12 with Biology, Physics, and Chemistry. Category, age, subject, and qualifying rules are specified in the current official information bulletin.',
    stages: ['Application', 'Pen-and-paper test', 'Result and scorecard', 'Counselling and seat allocation'],
    streamCodes: ['BiPC'],
    relatedCareerIds: [
      'doctor',
      'dentist',
      'nurse',
      'pharmacist',
      'physiotherapist',
      'veterinarian',
      'radiographer',
      'medical-lab-technologist',
    ],
    official: OFFICIAL.neet,
    note: VERIFY,
  },
  {
    id: 'cuet-ug',
    name: 'CUET (UG)',
    short: 'CUET',
    category: 'University',
    level: 'After Class 12',
    purpose:
      'Common entrance test used for undergraduate admissions at participating central, state, deemed, and private universities.',
    eligibility:
      'Generally open to Class 12 students or equivalent, but participating universities set their own subject combinations and programme-specific requirements.',
    stages: ['Application', 'Computer-based test', 'Result', 'University counselling and admission'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: [
      'economist',
      'psychologist',
      'journalist',
      'social-worker',
      'teacher',
      'research-scientist',
    ],
    official: OFFICIAL.cuet,
    note: VERIFY,
  },
  {
    id: 'clat',
    name: 'CLAT',
    short: 'CLAT',
    category: 'Law',
    level: 'After Class 12',
    purpose:
      'Common entrance test for admission to integrated undergraduate law programmes at participating National Law Universities.',
    eligibility:
      'Generally requires Class 12 or equivalent. Age, subject, and qualifying conditions are set by the Consortium and participating universities for the current admission cycle.',
    stages: ['Application', 'Common entrance test', 'Result and rank', 'Counselling and seat allotment'],
    streamCodes: ['CEC', 'MEC', 'MPC', 'BiPC'],
    relatedCareerIds: [
      'lawyer',
      'corporate-lawyer',
      'criminal-lawyer',
      'civil-litigation-lawyer',
      'judicial-officer',
    ],
    official: OFFICIAL.clat,
    note: VERIFY,
  },
  {
    id: 'upsc-cse',
    name: 'UPSC Civil Services Examination',
    short: 'CSE',
    category: 'Civil Services',
    level: 'After graduation',
    purpose:
      'Selection examination for the Indian Administrative Service, Indian Police Service, Indian Foreign Service, and other Group A and Group B civil services.',
    eligibility:
      'Generally requires a bachelor’s degree from a recognised university. Age, attempts, nationality, and reservation conditions are specified in the current UPSC notification.',
    stages: ['Preliminary examination', 'Main examination', 'Personality test / interview', 'Service allocation and training'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: [
      'ias-officer',
      'ips-officer',
      'ifs-officer',
      'irs-officer',
      'iaas-officer',
    ],
    official: OFFICIAL.upsc,
    note: VERIFY,
  },
  {
    id: 'ssc-cgl',
    name: 'SSC Combined Graduate Level Examination',
    short: 'CGL',
    category: 'Civil Services',
    level: 'After graduation',
    purpose:
      'Recruitment examination for various Group B and Group C posts in central government departments and organisations.',
    eligibility:
      'Generally requires a bachelor’s degree, with post-specific age and qualification conditions. Check the current SSC notice for each post.',
    stages: ['Application', 'Tiered computer-based examinations', 'Skill or descriptive test where applicable', 'Document verification'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: [
      'government-communications-officer',
      'public-enterprise-manager',
      'election-administrator',
      'municipal-administrator',
    ],
    official: OFFICIAL.ssc,
    note: VERIFY,
  },
  {
    id: 'ibps-po',
    name: 'IBPS Probationary Officer',
    short: 'IBPS',
    category: 'Banking',
    level: 'After graduation',
    purpose:
      'Recruitment examination for Probationary Officer and management-level roles in participating public sector banks.',
    eligibility:
      'Generally requires a bachelor’s degree. Age, computer literacy, and category conditions are specified in the current IBPS notification.',
    stages: ['Preliminary examination', 'Main examination', 'Interview', 'Provisional allotment'],
    streamCodes: ['MEC', 'CEC', 'MPC', 'BiPC'],
    relatedCareerIds: ['banker', 'financial-analyst', 'insurance-underwriter'],
    official: OFFICIAL.ibps,
    note: VERIFY,
  },
  {
    id: 'ctet',
    name: 'Central Teacher Eligibility Test',
    short: 'CTET',
    category: 'Teaching',
    level: 'After graduation',
    purpose:
      'Eligibility test for teachers seeking appointment in schools affiliated with the Central Board of Secondary Education and participating schools.',
    eligibility:
      'Requires the academic and teacher-education qualifications specified for Paper I or Paper II. State-level TETs may have separate rules.',
    stages: ['Application', 'Paper I and/or Paper II', 'Result and eligibility certificate', 'Recruitment by participating schools'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: [
      'teacher',
      'government-school-teacher',
      'early-childhood-educator',
      'special-education-teacher',
    ],
    official: OFFICIAL.ctet,
    note: VERIFY,
  },
  {
    id: 'ugc-net',
    name: 'UGC NET',
    short: 'NET',
    category: 'Research',
    level: 'Postgraduate',
    purpose:
      'Test used for eligibility for assistant professor roles and for Junior Research Fellowship in eligible subjects.',
    eligibility:
      'Generally requires a master’s degree in the relevant subject, with qualifying conditions specified in the current notification. Some categories receive age relaxations for JRF.',
    stages: ['Application', 'Paper I and Paper II', 'Result', 'Eligibility certificate or fellowship award'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['professor', 'academic-researcher', 'librarian'],
    official: OFFICIAL.ugcNet,
    note: VERIFY,
  },
  {
    id: 'nata',
    name: 'NATA',
    short: 'NATA',
    category: 'Design',
    level: 'After Class 12',
    purpose:
      'Aptitude test used for admission to the five-year Bachelor of Architecture programme at participating institutions.',
    eligibility:
      'Generally requires Class 12 with mathematics and the qualifying conditions set by the Council of Architecture. Check current admission rules before applying.',
    stages: ['Application', 'Aptitude test', 'Result', 'Institution-level admission and counselling'],
    streamCodes: ['MPC'],
    relatedCareerIds: ['architect', 'urban-planner'],
    official: OFFICIAL.nata,
    note: VERIFY,
  },
  {
    id: 'uceed',
    name: 'UCEED',
    short: 'UCEED',
    category: 'Design',
    level: 'After Class 12',
    purpose:
      'Undergraduate design entrance test for Bachelor of Design programmes at IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, and participating institutes.',
    eligibility:
      'Generally open to Class 12 students or equivalent in any stream, subject to the current information brochure and institute-specific conditions.',
    stages: ['Application', 'Aptitude and design test', 'Result and rank', 'Counselling and admission'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['product-designer', 'ui-ux-designer', 'graphic-designer', 'architect'],
    official: OFFICIAL.uceed,
    note: VERIFY,
  },
  {
    id: 'nift-entrance',
    name: 'NIFT Entrance Examination',
    short: 'NIFT',
    category: 'Design',
    level: 'After Class 12',
    purpose:
      'Entrance route for NIFT undergraduate design, fashion technology, and management programmes across its campuses.',
    eligibility:
      'Generally open to Class 12 students or equivalent, with programme-specific subject and age conditions. Check the current NIFT admissions brochure.',
    stages: ['Application', 'Creative ability test / general ability test', 'Situation test or interview where applicable', 'Counselling and campus allotment'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['fashion-designer', 'textile-designer', 'graphic-designer'],
    official: OFFICIAL.nift,
    note: VERIFY,
  },
  {
    id: 'nid-dat',
    name: 'NID Design Aptitude Test',
    short: 'NID',
    category: 'Design',
    level: 'After Class 12',
    purpose:
      'Entrance test for Bachelor of Design programmes at the National Institute of Design and participating campuses.',
    eligibility:
      'Generally open to Class 12 students or equivalent. Programme-specific conditions and the current admission schedule are published by NID.',
    stages: ['Application', 'Design aptitude test', 'Studio test / interview where applicable', 'Result and admission'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['product-designer', 'graphic-designer', 'ui-ux-designer', 'animator'],
    official: OFFICIAL.nid,
    note: VERIFY,
  },
  {
    id: 'ca-foundation',
    name: 'CA Foundation',
    short: 'CA',
    category: 'Commerce',
    level: 'After Class 12',
    purpose:
      'Entry-level examination in the Chartered Accountancy route administered by the Institute of Chartered Accountants of India.',
    eligibility:
      'Generally available after Class 12 through the foundation route, with registration and qualifying conditions set by ICAI. Graduates may have a different entry route.',
    stages: ['Registration', 'Foundation examination', 'Intermediate course and examinations', 'Articleship and final examination'],
    streamCodes: ['MEC', 'CEC'],
    relatedCareerIds: ['chartered-accountant', 'cost-accountant', 'financial-analyst', 'risk-manager'],
    official: OFFICIAL.icai,
    note: VERIFY,
  },
  {
    id: 'cs-executive',
    name: 'CS Executive Entrance Test / CS Executive',
    short: 'CS',
    category: 'Commerce',
    level: 'After Class 12',
    purpose:
      'Entry route for the Company Secretary qualification administered by the Institute of Company Secretaries of India.',
    eligibility:
      'The entry stage depends on the candidate’s current qualification and ICSI’s rules. Check the current registration and exemption conditions before applying.',
    stages: ['Registration', 'Entrance or executive stage', 'Professional stage', 'Training and membership'],
    streamCodes: ['MEC', 'CEC'],
    relatedCareerIds: ['company-secretary', 'compliance-officer', 'legal-advisor'],
    official: OFFICIAL.icsi,
    note: VERIFY,
  },
  {
    id: 'afcat',
    name: 'AFCAT',
    short: 'AFCAT',
    category: 'Defence',
    level: 'After graduation',
    purpose:
      'Selection test for certain officer entries in the Indian Air Force, including flying and ground duty branches.',
    eligibility:
      'Generally requires a bachelor’s degree with the subject and percentage conditions specified for the branch. Age and medical standards apply.',
    stages: ['Application', 'Written test', 'Air Force Selection Board', 'Medical examination and merit list'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['air-force-officer', 'pilot'],
    official: OFFICIAL.afcat,
    note: VERIFY,
  },
  {
    id: 'nda',
    name: 'National Defence Academy Examination',
    short: 'NDA',
    category: 'Defence',
    level: 'After Class 12',
    purpose:
      'Entry examination for the National Defence Academy and Naval Academy, leading to officer training in the armed forces.',
    eligibility:
      'Generally open to unmarried candidates in the specified age range who have completed or are completing Class 12. Subject requirements differ by wing.',
    stages: ['UPSC written examination', 'Services Selection Board', 'Medical examination', 'Merit list and training'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: ['army-officer', 'navy-officer', 'air-force-officer'],
    official: OFFICIAL.upsc,
    note: VERIFY,
  },
  {
    id: 'ap-eapcet',
    name: 'AP EAPCET',
    short: 'AP',
    category: 'State Entrance',
    level: 'After Class 12',
    purpose:
      'State-level entrance test for engineering, agriculture, and pharmacy admissions in Andhra Pradesh.',
    eligibility:
      'Stream and subject requirements depend on the programme. MPC is typical for engineering, while BiPC is relevant for agriculture and pharmacy routes. Check the current notification.',
    stages: ['Application', 'Computer-based test', 'Result and rank', 'State counselling'],
    streamCodes: ['MPC', 'BiPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'pharmacist',
      'agricultural-scientist',
    ],
    official: OFFICIAL.apEapcet,
    note: VERIFY,
  },
  {
    id: 'tg-eapcet',
    name: 'TG EAPCET',
    short: 'TG',
    category: 'State Entrance',
    level: 'After Class 12',
    purpose:
      'State-level entrance test for engineering, agriculture, and pharmacy admissions in Telangana.',
    eligibility:
      'Stream and subject requirements depend on the programme. Check the current TGCHE notification and counselling rules for the intended course.',
    stages: ['Application', 'Computer-based test', 'Result and rank', 'State counselling'],
    streamCodes: ['MPC', 'BiPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'pharmacist',
      'agricultural-scientist',
    ],
    official: OFFICIAL.tgEapcet,
    note: VERIFY,
  },
  {
    id: 'viteee',
    name: 'VITEEE',
    short: 'VIT',
    category: 'Engineering',
    level: 'After Class 12',
    purpose:
      'Entrance test used by Vellore Institute of Technology for admission to its undergraduate engineering programmes.',
    eligibility:
      'Generally requires Class 12 with the specified science and mathematics subjects. Check the current VIT admissions page for programme-specific requirements.',
    stages: ['Application', 'Computer-based test', 'Result and rank', 'Counselling and admission'],
    streamCodes: ['MPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'electrical-engineer',
    ],
    official: OFFICIAL.viteee,
    note: VERIFY,
  },
  {
    id: 'ailet',
    name: 'All India Law Entrance Test (AILET)',
    short: 'AILET',
    category: 'Law',
    level: 'After Class 12',
    purpose:
      'Entrance test conducted by National Law University Delhi for admission to its integrated undergraduate law programme.',
    eligibility:
      'Generally requires Class 12 or equivalent. Subject, age, and qualifying conditions are published by NLU Delhi for the current admission cycle.',
    stages: ['Application', 'AILET examination', 'Result and merit list', 'Counselling and admission'],
    streamCodes: ['CEC', 'MEC', 'MPC', 'BiPC'],
    relatedCareerIds: [
      'lawyer',
      'criminal-lawyer',
      'public-prosecutor',
      'legal-researcher',
    ],
    official: OFFICIAL.ailet,
    note: VERIFY,
  },
  {
    id: 'met',
    name: 'Manipal Entrance Test (MET)',
    short: 'MET',
    category: 'Engineering',
    level: 'After Class 12',
    purpose:
      'Entrance test used by Manipal Academy of Higher Education for admission to participating undergraduate programmes, including engineering at MIT Manipal.',
    eligibility:
      'Generally requires Class 12 with the subjects specified for the chosen programme. Check the current Manipal admissions page for accepted qualifications and routes.',
    stages: ['Application', 'Entrance test', 'Result and rank', 'Counselling and admission'],
    streamCodes: ['MPC'],
    relatedCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'robotics-engineer',
      'data-scientist',
    ],
    official: OFFICIAL.met,
    note: VERIFY,
  },
  {
    id: 'cat',
    name: 'Common Admission Test (CAT)',
    short: 'CAT',
    category: 'Management',
    level: 'After graduation',
    purpose:
      'Entrance test used for admission to postgraduate management programmes at the Indian Institutes of Management and other participating institutions.',
    eligibility:
      'Generally requires a bachelor’s degree with the minimum marks specified by the participating institution. Work experience is not universally mandatory.',
    stages: ['Application', 'Computer-based test', 'Shortlisting', 'Written ability test / interview'],
    streamCodes: ['MPC', 'BiPC', 'MEC', 'CEC'],
    relatedCareerIds: [
      'business-analyst',
      'financial-analyst',
      'marketing-manager',
      'operations-manager',
      'product-manager',
    ],
    official: OFFICIAL.cat,
    note: VERIFY,
  },
]

export const EXAM_MAP = new Map(EXAMS.map((exam) => [exam.id, exam]))

export const EXAM_CATEGORIES = [...new Set(EXAMS.map((exam) => exam.category))].sort()

export const EXAM_LEVELS = [...new Set(EXAMS.map((exam) => exam.level))]

export function getExamById(id) {
  return EXAM_MAP.get(id) ?? null
}

export function getExamsForStream(streamCode) {
  const code = String(streamCode ?? '').toUpperCase()
  if (!code) return EXAMS
  return EXAMS.filter((exam) =>
    exam.streamCodes.some((item) => item.toUpperCase() === code),
  )
}

export function getExamsForCareer(careerId) {
  return EXAMS.filter((exam) => exam.relatedCareerIds.includes(careerId))
}
