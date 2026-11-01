export const STREAMS = [
  {
    code: 'MPC',
    fullName: 'Mathematics, Physics, Chemistry',
    shortName: 'Maths & physical sciences',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    skills: ['Quantitative reasoning', 'Problem solving', 'Technical curiosity'],
    studyOptions: [
      'B.Tech / B.E.',
      'B.Sc. in mathematics, physics, or computing',
      'B.Arch (with NATA or JEE Main Paper 2 where applicable)',
      'B.Des (through design entrance routes)',
      'Diploma or integrated technical programmes',
    ],
    examIds: ['jee-main', 'jee-advanced', 'ap-eapcet', 'tg-eapcet', 'nata', 'uceed'],
    careerCategoryIds: ['engineering', 'technology', 'science'],
    sampleCareerIds: [
      'software-engineer',
      'mechanical-engineer',
      'civil-engineer',
      'architect',
      'data-scientist',
      'research-scientist',
    ],
    direction: 'Engineering, technology & physical sciences',
    description:
      'For students drawn to mathematics, physical sciences, and technical problem-solving.',
    suitedFor:
      'Students who enjoy working with numbers, models, systems, and tangible technical problems.',
    color: '#b7aaff',
    note: 'Many commerce, defence, and design routes also accept MPC students. Stream rules vary by board and state.',
  },
  {
    code: 'BiPC',
    fullName: 'Biology, Physics, Chemistry',
    shortName: 'Life sciences',
    subjects: ['Biology', 'Physics', 'Chemistry'],
    skills: ['Observation', 'Scientific reasoning', 'Care and communication'],
    studyOptions: [
      'MBBS / BDS',
      'B.Sc. Nursing',
      'B.Pharm',
      'BPT / BOT and allied health programmes',
      'B.Sc. in life sciences, agriculture, or environmental science',
    ],
    examIds: ['neet-ug', 'ap-eapcet', 'tg-eapcet', 'cuet-ug'],
    careerCategoryIds: ['health', 'science'],
    sampleCareerIds: [
      'doctor',
      'nurse',
      'pharmacist',
      'physiotherapist',
      'veterinarian',
      'biotechnologist',
    ],
    direction: 'Health, life sciences & applied biology',
    description:
      'For students curious about life sciences, health, and living systems.',
    suitedFor:
      'Students who are comfortable with biological detail, laboratory work, and caring for people or living systems.',
    color: '#7de3d2',
    note: 'Several allied health and science degrees have their own subject requirements. Check each programme before choosing subjects.',
  },
  {
    code: 'MEC',
    fullName: 'Mathematics, Economics, Commerce',
    shortName: 'Business & finance',
    subjects: ['Mathematics', 'Economics', 'Commerce'],
    skills: ['Numerical analysis', 'Commercial awareness', 'Structured reasoning'],
    studyOptions: [
      'B.Com / B.Com (Hons)',
      'BBA / BMS',
      'B.A. or B.Sc. Economics',
      'Chartered Accountancy or Company Secretary routes',
      'B.Sc. Statistics or actuarial science',
    ],
    examIds: ['cuet-ug', 'ca-foundation', 'cs-executive', 'ibps-po'],
    careerCategoryIds: ['business'],
    sampleCareerIds: [
      'chartered-accountant',
      'business-analyst',
      'financial-analyst',
      'company-secretary',
      'entrepreneur',
      'economist',
    ],
    direction: 'Business, finance & analytics',
    description:
      'For students interested in business, finance, and analytical thinking.',
    suitedFor:
      'Students who like numbers, markets, organisations, and decisions with measurable outcomes.',
    color: '#ffd18a',
    note: 'Professional qualifications such as CA and CS have their own registration and examination sequences; they are not degree substitutes for every role.',
  },
  {
    code: 'CEC',
    fullName: 'Civics, Economics, Commerce',
    shortName: 'Law, policy & society',
    subjects: ['Civics', 'Economics', 'Commerce'],
    skills: ['Reading and argument', 'Social awareness', 'Communication'],
    studyOptions: [
      'Integrated B.A. LL.B. / B.B.A. LL.B.',
      'B.A. in political science, economics, or sociology',
      'B.Com / BBA',
      'Journalism, media, or public policy programmes',
      'Teacher education after a bachelor’s degree',
    ],
    examIds: ['clat', 'cuet-ug', 'ssc-cgl', 'upsc-cse'],
    careerCategoryIds: ['law', 'government', 'community', 'education', 'creative'],
    sampleCareerIds: [
      'lawyer',
      'ias-officer',
      'policy-analyst',
      'social-worker',
      'journalist',
      'teacher',
    ],
    direction: 'Law, governance, media & community',
    description:
      'For students interested in society, law, governance, and communication.',
    suitedFor:
      'Students who enjoy reading, debate, public issues, writing, and working with people.',
    color: '#f3a8c7',
    note: 'Civil services and many postgraduate routes require a bachelor’s degree first. CEC is one useful starting point, not a restriction.',
  },
]

export const STREAM_MAP = new Map(
  STREAMS.map((stream) => [stream.code.toUpperCase(), stream]),
)

export const STREAM_CODES = STREAMS.map((stream) => stream.code)

export function getStreamByCode(code) {
  return STREAM_MAP.get(String(code ?? '').toUpperCase()) ?? null
}
