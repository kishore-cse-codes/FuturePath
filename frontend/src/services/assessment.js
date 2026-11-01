import {
  CAREERS,
  CAREER_CATEGORIES,
  CAREER_MAP,
  getRelatedCareers,
} from '../data/careers'
import { COLLEGES } from '../data/colleges'
import { EXAM_MAP, getExamsForCareer } from '../data/exams'
import { DETAILED_ROADMAP_MAP, getRoadmapPath } from '../data/roadmaps'
import { getStreamByCode, STREAMS } from '../data/streams'

const CATEGORY_CHALLENGES = {
  technology:
    'Technology roles need continuous learning and, for many routes, comfort with logical problem solving and some mathematics. Hiring expectations vary by role and employer.',
  health:
    'Clinical routes are academically demanding and competitive, and many require several years of study plus supervised training or registration.',
  government:
    'Civil-service selection is highly competitive and depends on the current notification, eligibility rules, and multiple selection stages.',
  safety:
    'Recruitment standards, physical requirements, and selection processes vary by service and can change between recruitment cycles.',
  engineering:
    'Engineering study usually requires a strong mathematics and science foundation. The branch you choose affects the work you can do later.',
  business:
    'Business and finance roles vary widely. Some professional qualifications have demanding examination sequences, and early roles may involve repetitive or high-pressure work.',
  law:
    'Law requires heavy reading, careful argument, and attention to detail. Entrance routes and professional requirements should be checked with the relevant authority.',
  education:
    'Teaching and education roles often require a recognised qualification, and subject or level requirements differ. Classroom work also requires patience and communication.',
  creative:
    'Creative fields are portfolio-driven and can be competitive. Income and job security vary, so practical experience and a backup plan matter.',
  aviation:
    'Aviation and hospitality routes can involve significant training costs, medical or physical standards, and shift work. Licensing rules depend on the role.',
  science:
    'Science careers often need postgraduate study or research experience. Laboratory, field, or project work can take time before leading to a settled role.',
  community:
    'Community and social-sector work can involve emotional demands, project-based funding, and roles that require strong communication and boundaries.',
}

const FALLBACK_CAREER_IDS = [
  'software-engineer',
  'doctor',
  'chartered-accountant',
  'teacher',
  'data-scientist',
  'cybersecurity-analyst',
  'graphic-designer',
  'psychologist',
]

const CATEGORY_STREAM_CODES = {
  technology: ['MPC'],
  engineering: ['MPC'],
  health: ['BiPC'],
  science: ['MPC', 'BiPC'],
  business: ['MEC'],
  law: ['CEC'],
  government: ['CEC'],
  community: ['CEC'],
  education: ['CEC'],
  creative: ['CEC'],
  safety: [],
  aviation: [],
}

const EDUCATION_OPTIONS = [
  {
    id: 'class-9-10',
    label: 'Class 9 or 10',
    description: 'Still building school foundations and choosing subjects.',
    stage: 'school',
  },
  {
    id: 'class-11-12-mpc',
    label: 'Class 11–12 · MPC',
    description: 'Mathematics, Physics, and Chemistry.',
    stage: 'intermediate',
    streamCode: 'MPC',
  },
  {
    id: 'class-11-12-bipc',
    label: 'Class 11–12 · BiPC',
    description: 'Biology, Physics, and Chemistry.',
    stage: 'intermediate',
    streamCode: 'BiPC',
  },
  {
    id: 'class-11-12-mec',
    label: 'Class 11–12 · MEC / Commerce',
    description: 'Mathematics, Economics, and Commerce.',
    stage: 'intermediate',
    streamCode: 'MEC',
  },
  {
    id: 'class-11-12-cec',
    label: 'Class 11–12 · CEC / Humanities',
    description: 'Civics, Economics, and Commerce or a humanities combination.',
    stage: 'intermediate',
    streamCode: 'CEC',
  },
  {
    id: 'class-11-12-other',
    label: 'Class 11–12 · other or undecided',
    description: 'Another subject combination or still deciding.',
    stage: 'intermediate',
  },
  {
    id: 'class-12-complete',
    label: 'Completed Class 12 / gap year',
    description: 'Exploring degrees, entrance exams, or a next step.',
    stage: 'after-school',
  },
  {
    id: 'undergraduate',
    label: 'In college or completed a degree',
    description: 'Looking at specialisations, internships, or postgraduate routes.',
    stage: 'higher-education',
  },
  {
    id: 'other',
    label: 'Other / prefer not to say',
    description: 'You can add context later in the chat.',
    stage: 'unknown',
  },
]

export const ASSESSMENT_QUESTIONS = [
  {
    id: 'subjects',
    title: 'Which subjects do you enjoy?',
    description: 'Pick any that genuinely interest you. You do not need to be the best in class at them.',
    type: 'multi',
    optional: true,
    options: [
      {
        id: 'mathematics',
        label: 'Mathematics',
        keywords: ['mathematics', 'maths', 'numbers', 'statistics'],
        categoryIds: ['engineering', 'technology', 'science', 'business'],
      },
      {
        id: 'physics',
        label: 'Physics',
        keywords: ['physics', 'mechanics', 'electronics'],
        categoryIds: ['engineering', 'science', 'technology'],
      },
      {
        id: 'chemistry',
        label: 'Chemistry',
        keywords: ['chemistry', 'laboratory', 'materials'],
        categoryIds: ['health', 'science'],
      },
      {
        id: 'biology',
        label: 'Biology',
        keywords: ['biology', 'life sciences', 'health'],
        categoryIds: ['health', 'science'],
      },
      {
        id: 'computer-science',
        label: 'Computer science / coding',
        keywords: ['computer', 'coding', 'programming', 'software'],
        categoryIds: ['technology', 'engineering', 'creative'],
      },
      {
        id: 'economics',
        label: 'Economics / business studies',
        keywords: ['economics', 'business', 'finance', 'commerce'],
        categoryIds: ['business', 'law', 'government'],
      },
      {
        id: 'civics-history',
        label: 'History, civics, or political science',
        keywords: ['civics', 'history', 'politics', 'society'],
        categoryIds: ['law', 'government', 'community', 'education'],
      },
      {
        id: 'languages',
        label: 'Languages or literature',
        keywords: ['language', 'literature', 'writing', 'communication'],
        categoryIds: ['creative', 'law', 'education', 'community'],
      },
      {
        id: 'art-design',
        label: 'Art, design, or music',
        keywords: ['art', 'design', 'music', 'visual'],
        categoryIds: ['creative'],
      },
      {
        id: 'commerce',
        label: 'Commerce / accountancy',
        keywords: ['commerce', 'accounting', 'finance', 'business'],
        categoryIds: ['business'],
      },
      {
        id: 'physical-education',
        label: 'Physical education / sports',
        keywords: ['sports', 'fitness', 'physical'],
        categoryIds: ['safety', 'health', 'aviation'],
      },
    ],
  },
  {
    id: 'activities',
    title: 'Which activities interest you most?',
    description: 'Think about what you would willingly spend an afternoon doing or learning.',
    type: 'multi',
    optional: true,
    options: [
      {
        id: 'building',
        label: 'Building or repairing things',
        keywords: ['build', 'repair', 'hands-on', 'machines'],
        categoryIds: ['engineering', 'technology'],
      },
      {
        id: 'computers',
        label: 'Working with computers',
        keywords: ['computer', 'technology', 'software', 'coding'],
        categoryIds: ['technology'],
      },
      {
        id: 'making',
        label: 'Drawing, designing, or making videos',
        keywords: ['design', 'creative', 'visual', 'media'],
        categoryIds: ['creative', 'technology'],
      },
      {
        id: 'writing-debate',
        label: 'Reading, writing, or debating',
        keywords: ['writing', 'reading', 'debate', 'communication'],
        categoryIds: ['law', 'education', 'creative', 'government'],
      },
      {
        id: 'helping',
        label: 'Helping or caring for people',
        keywords: ['helping', 'care', 'empathy', 'health'],
        categoryIds: ['health', 'education', 'community'],
      },
      {
        id: 'leading',
        label: 'Leading a team or organising events',
        keywords: ['leadership', 'organising', 'management', 'business'],
        categoryIds: ['business', 'government', 'aviation'],
      },
      {
        id: 'experiments',
        label: 'Doing science experiments',
        keywords: ['science', 'experiment', 'research', 'laboratory'],
        categoryIds: ['science', 'health'],
      },
      {
        id: 'outdoors',
        label: 'Being outdoors or working with nature',
        keywords: ['outdoors', 'nature', 'environment', 'field'],
        categoryIds: ['science', 'aviation', 'safety'],
      },
      {
        id: 'business',
        label: 'Selling, negotiating, or running a small business',
        keywords: ['business', 'selling', 'entrepreneur', 'finance'],
        categoryIds: ['business'],
      },
      {
        id: 'public-service',
        label: 'Public service, fitness, or discipline',
        keywords: ['public service', 'fitness', 'discipline', 'safety'],
        categoryIds: ['safety', 'government'],
      },
    ],
  },
  {
    id: 'strengths',
    title: 'Which skills do you feel confident about?',
    description: 'Choose the ones that feel like strengths, not the ones you think you should have.',
    type: 'multi',
    optional: true,
    options: [
      {
        id: 'logic',
        label: 'Solving puzzles and logical problems',
        keywords: ['logic', 'problem solving', 'analysis'],
        categoryIds: ['technology', 'engineering', 'science'],
      },
      {
        id: 'numbers',
        label: 'Working with numbers and data',
        keywords: ['numbers', 'statistics', 'data', 'mathematics'],
        categoryIds: ['business', 'technology', 'science'],
      },
      {
        id: 'communication',
        label: 'Writing, speaking, or explaining ideas',
        keywords: ['communication', 'writing', 'speaking'],
        categoryIds: ['law', 'creative', 'education', 'community'],
      },
      {
        id: 'creativity',
        label: 'Coming up with creative ideas',
        keywords: ['creativity', 'design', 'ideas'],
        categoryIds: ['creative'],
      },
      {
        id: 'empathy',
        label: 'Listening and understanding people',
        keywords: ['empathy', 'care', 'people', 'communication'],
        categoryIds: ['health', 'education', 'community'],
      },
      {
        id: 'hands-on',
        label: 'Practical, hands-on work',
        keywords: ['hands-on', 'practical', 'building'],
        categoryIds: ['engineering', 'aviation', 'safety'],
      },
      {
        id: 'organisation',
        label: 'Organising details and planning',
        keywords: ['organisation', 'planning', 'management', 'attention to detail'],
        categoryIds: ['business', 'law', 'government'],
      },
      {
        id: 'leadership',
        label: 'Leading and making decisions',
        keywords: ['leadership', 'decision making', 'management'],
        categoryIds: ['business', 'government', 'safety'],
      },
      {
        id: 'fitness',
        label: 'Physical fitness and teamwork',
        keywords: ['fitness', 'teamwork', 'discipline'],
        categoryIds: ['safety', 'aviation'],
      },
      {
        id: 'technology',
        label: 'Learning new technology quickly',
        keywords: ['technology', 'learning', 'digital'],
        categoryIds: ['technology'],
      },
    ],
  },
  {
    id: 'education',
    title: 'What is your current education stage?',
    description: 'This helps the counsellor suggest routes that match your next realistic step.',
    type: 'single',
    optional: true,
    options: EDUCATION_OPTIONS,
  },
  {
    id: 'workStyle',
    title: 'What kind of work appeals to you?',
    description: 'Choose the environment or style you would most like to try. It is fine to be unsure.',
    type: 'single',
    optional: true,
    options: [
      {
        id: 'technical',
        label: 'Technical and systems-focused',
        description: 'Building, fixing, or understanding how things work.',
        categoryWeights: { technology: 5, engineering: 4 },
      },
      {
        id: 'creative',
        label: 'Creative and visual',
        description: 'Designing, making, writing, or communicating.',
        categoryWeights: { creative: 5 },
      },
      {
        id: 'analytical',
        label: 'Analytical and research-focused',
        description: 'Investigating evidence, data, and complex questions.',
        categoryWeights: { science: 4, business: 3, technology: 2, law: 2 },
      },
      {
        id: 'healthcare',
        label: 'Healthcare and caregiving',
        description: 'Supporting people’s health and wellbeing.',
        categoryWeights: { health: 5 },
      },
      {
        id: 'business',
        label: 'Business and enterprise',
        description: 'Organising money, people, products, or services.',
        categoryWeights: { business: 5, aviation: 1 },
      },
      {
        id: 'public-service',
        label: 'Public service and governance',
        description: 'Working on public issues, rules, and community needs.',
        categoryWeights: { government: 4, law: 3, safety: 3, community: 2 },
      },
      {
        id: 'people',
        label: 'People-oriented and educational',
        description: 'Teaching, advising, serving, or working with groups.',
        categoryWeights: { education: 4, community: 3, health: 2, aviation: 1 },
      },
      {
        id: 'outdoors',
        label: 'Hands-on or outdoors',
        description: 'Practical work in changing environments.',
        categoryWeights: { engineering: 3, aviation: 3, science: 2, safety: 2 },
      },
    ],
  },
  {
    id: 'priorities',
    title: 'What matters most to you in a career?',
    description: 'Choose up to three priorities. These are personal preferences, not guarantees.',
    type: 'multi',
    max: 3,
    optional: true,
    options: [
      {
        id: 'stability',
        label: 'Stable income and security',
        categoryWeights: { business: 2, government: 2, safety: 2, engineering: 1 },
      },
      {
        id: 'helping',
        label: 'Helping other people',
        categoryWeights: { health: 3, education: 2, community: 2 },
      },
      {
        id: 'creativity',
        label: 'Creative freedom',
        categoryWeights: { creative: 3 },
      },
      {
        id: 'independence',
        label: 'Independence or entrepreneurship',
        categoryWeights: { business: 3, creative: 2 },
      },
      {
        id: 'service',
        label: 'Public service and social impact',
        categoryWeights: { government: 3, community: 3, law: 2 },
      },
      {
        id: 'recognition',
        label: 'Recognition and responsibility',
        categoryWeights: { law: 2, government: 2, health: 2, business: 1 },
      },
      {
        id: 'balance',
        label: 'Work-life balance',
        categoryWeights: { education: 2, government: 2, science: 1 },
      },
      {
        id: 'learning',
        label: 'Continuous learning',
        categoryWeights: { technology: 2, science: 2 },
      },
      {
        id: 'variety',
        label: 'Variety and travel',
        categoryWeights: { aviation: 3, business: 2, creative: 1 },
      },
    ],
  },
  {
    id: 'constraints',
    title: 'Any practical constraints the counsellor should consider?',
    description:
      'Optional. You might mention subject requirements, travel, training cost, or the need to start earning soon. Do not share sensitive personal information.',
    type: 'text',
    optional: true,
    placeholder: 'For example: I need a route that keeps costs manageable, or I cannot move to another city.',
    maxLength: 500,
  },
]

export function createEmptyAnswers() {
  return Object.fromEntries(
    ASSESSMENT_QUESTIONS.map((question) => [
      question.id,
      question.type === 'multi' ? [] : '',
    ]),
  )
}

export function isAnswerPresent(question, value) {
  if (question.type === 'multi') return Array.isArray(value) && value.length > 0
  return typeof value === 'string' && value.trim().length > 0
}

function optionMap(question) {
  return new Map(question.options.map((option) => [option.id, option]))
}

export function getSelectedOptions(questionId, answers) {
  const question = ASSESSMENT_QUESTIONS.find((item) => item.id === questionId)
  if (!question) return []

  const value = answers[questionId]
  if (question.type === 'multi') {
    const map = optionMap(question)
    return (Array.isArray(value) ? value : []).map((id) => map.get(id)).filter(Boolean)
  }

  if (question.type === 'single') {
    const option = optionMap(question).get(value)
    return option ? [option] : []
  }

  return []
}

function addCategoryWeights(scores, weights, multiplier = 1) {
  for (const [categoryId, weight] of Object.entries(weights ?? {})) {
    scores[categoryId] = (scores[categoryId] ?? 0) + weight * multiplier
  }
}

export function buildAssessmentSignals(answers) {
  const categoryScores = Object.fromEntries(CAREER_CATEGORIES.map((category) => [category.id, 0]))
  const keywords = []
  const selectedLabels = {}

  for (const question of ASSESSMENT_QUESTIONS) {
    const options = getSelectedOptions(question.id, answers)
    selectedLabels[question.id] = options.map((option) => option.label)

    for (const option of options) {
      for (const categoryId of option.categoryIds ?? []) {
        categoryScores[categoryId] = (categoryScores[categoryId] ?? 0) + 2
      }
      addCategoryWeights(categoryScores, option.categoryWeights)
      if (option.keywords?.length) keywords.push(...option.keywords)
    }
  }

  const education = getSelectedOptions('education', answers)[0] ?? null
  const stream = education?.streamCode ? getStreamByCode(education.streamCode) : null

  if (stream) {
    for (const categoryId of stream.careerCategoryIds) {
      categoryScores[categoryId] = (categoryScores[categoryId] ?? 0) + 3
    }
    for (const careerId of stream.sampleCareerIds) {
      const career = CAREER_MAP.get(careerId)
      if (career) categoryScores[career.categoryId] = (categoryScores[career.categoryId] ?? 0) + 1
    }
  }

  return {
    categoryScores,
    keywords: [...new Set(keywords)],
    selectedLabels,
    education,
    stream,
  }
}

function scoreCareer(career, signals) {
  const categoryScore = Math.max(0, signals.categoryScores[career.categoryId] ?? 0)
  let score = categoryScore * 2.4

  const haystack = [
    career.name,
    career.description,
    career.overview,
    career.categoryName,
    career.keywords.join(' '),
    career.skills.join(' '),
  ]
    .join(' ')
    .toLowerCase()

  for (const keyword of signals.keywords) {
    if (haystack.includes(keyword.toLowerCase())) score += 2
  }

  if (signals.stream) {
    if (signals.stream.sampleCareerIds.includes(career.id)) score += 8
    if (signals.stream.careerCategoryIds.includes(career.categoryId)) score += 3
  }

  return score
}

function pickDiverse(careers, limit, perCategory = 2) {
  const picked = []
  const counts = new Map()

  for (const career of careers) {
    if (picked.length >= limit) break
    const count = counts.get(career.categoryId) ?? 0
    if (count >= perCategory) continue
    picked.push(career)
    counts.set(career.categoryId, count + 1)
  }

  if (picked.length < limit) {
    for (const career of careers) {
      if (picked.length >= limit) break
      if (!picked.some((item) => item.id === career.id)) picked.push(career)
    }
  }

  return picked
}

function categoryWhyLabels(career, signals) {
  const labels = []
  for (const question of ASSESSMENT_QUESTIONS) {
    for (const option of getSelectedOptions(question.id, answersFromSignals(signals))) {
      const matchesCategory = option.categoryIds?.includes(career.categoryId)
      const matchesWeight = option.categoryWeights?.[career.categoryId] > 0
      if ((matchesCategory || matchesWeight) && !labels.includes(option.label)) {
        labels.push(option.label)
      }
    }
  }
  return labels
}

function answersFromSignals(signals) {
  return signals.answers ?? {}
}

function examLink(exam) {
  return {
    id: exam.id,
    name: exam.name,
    level: exam.level,
    purpose: exam.purpose,
    href: `/exams-colleges?tab=exams&q=${encodeURIComponent(exam.name)}`,
  }
}

function collegeLink(college) {
  return {
    id: college.id,
    name: college.shortName,
    location: college.location,
    courses: college.courses,
    href: `/exams-colleges?tab=colleges&q=${encodeURIComponent(college.name)}`,
  }
}

function careerExams(career, stream) {
  const exams = getExamsForCareer(career.id)
  const fallbackCodes = stream?.examIds ?? CATEGORY_STREAM_CODES[career.categoryId] ?? []
  const fallback = fallbackCodes.map((id) => EXAM_MAP.get(id)).filter(Boolean)

  const combined = [...exams, ...fallback]
  const seen = new Set()
  return combined
    .filter((exam) => {
      if (seen.has(exam.id)) return false
      seen.add(exam.id)
      return true
    })
    .slice(0, 4)
    .map(examLink)
}

function careerColleges(career, stream) {
  const direct = COLLEGES.filter((college) => college.relatedCareerIds.includes(career.id))
  const related = direct.length
    ? direct
    : COLLEGES.filter((college) => {
        if (!college.careerCategoryIds.includes(career.categoryId)) return false
        if (!stream) return true
        return college.streamCodes.includes(stream.code)
      })

  return related.slice(0, 3).map(collegeLink)
}

function buildRecommendation(career, signals, kind) {
  const labels = categoryWhyLabels(career, signals)
  const reason =
    labels.length > 0
      ? `Your interest in ${labels.slice(0, 3).join(', ').toLowerCase()} connects with the ${career.categoryName.toLowerCase()} focus of this role. ${career.description}`
      : `This is a common starting point connected to your selections. ${career.description}`

  const exams = careerExams(career, signals.stream)
  const colleges = careerColleges(career, signals.stream)
  const alternatives = getRelatedCareers(career, 2)
  const nextSteps = [
    `Open the ${career.name} roadmap to see the full stage-by-stage route.`,
    career.skills.length
      ? `Build one foundation skill first: ${career.skills.slice(0, 2).join(' and ')}.`
      : 'Identify one foundation skill and practise it through a small project.',
    exams.length
      ? `Check the current eligibility and dates for ${exams[0].name} on its official website before relying on this route.`
      : 'Check the current course or recruitment requirements with the relevant official authority.',
    alternatives.length
      ? `Compare it with ${alternatives.map((item) => item.name).join(' and ')} before deciding.`
      : 'Compare it with one or two related options before deciding.',
  ]

  return {
    kind,
    career,
    reason,
    challenges: CATEGORY_CHALLENGES[career.categoryId] ?? 'Requirements and working conditions vary. Check current details before deciding.',
    skills: career.skills,
    pathway: career.pathway,
    exams,
    colleges,
    nextSteps,
    href: `/careers/${career.id}`,
    roadmapHref: getRoadmapPath(career.id),
    hasDetailedRoadmap: DETAILED_ROADMAP_MAP.has(career.id),
  }
}

function nextStepPlan(stage, matches) {
  const first = matches[0]?.career?.name ?? 'your strongest option'
  const plans = {
    school: [
      'Use Class 9–10 to build strong foundations in the subjects you enjoy most.',
      `Explore two or three options such as ${first} through the FuturePath career profiles and roadmaps.`,
      'Check which Class 11–12 stream keeps the relevant degree and entrance routes open.',
      'Discuss subject choices with a teacher or guardian before finalising them.',
    ],
    intermediate: [
      `Shortlist two careers, starting with ${first}, and open their full roadmaps.`,
      'Check the subjects and eligibility conditions for the degrees and entrance exams you are considering.',
      'Talk to one person studying or working in a field you like.',
      'Build one relevant skill through a small project, club, or supervised activity.',
    ],
    'after-school': [
      `Compare two or three courses connected to ${first} and note their current eligibility rules.`,
      'List the entrance exams or admission routes involved and verify deadlines only on official websites.',
      'Check whether any route allows a diploma, alternative degree, or later entry so you are not relying on one exam.',
      'Talk to a teacher, guardian, or qualified counsellor before committing to a costly course.',
    ],
    'higher-education': [
      `Use projects, internships, or electives to test your interest in ${first}.`,
      'Look at specialisations and postgraduate routes only after checking current requirements.',
      'Build evidence of your skills through supervised work, projects, or volunteering.',
      'Discuss the cost and timing of further study with your family or a qualified adviser.',
    ],
    unknown: [
      `Start with the ${first} profile and roadmap, then note which parts feel interesting or unrealistic.`,
      'Use the AI Counsellor to narrow down two or three options based on your situation.',
      'Check current eligibility requirements on official websites before choosing a course or exam.',
      'Discuss important decisions with a trusted teacher, guardian, or qualified counsellor.',
    ],
  }

  return plans[stage] ?? plans.unknown
}

export function buildAssessmentReport(answers) {
  const signals = buildAssessmentSignals(answers)
  signals.answers = answers

  const ranked = CAREERS.map((career) => ({
    career,
    score: scoreCareer(career, signals),
  }))
    .sort((a, b) => b.score - a.score || a.career.name.localeCompare(b.career.name))
    .map((item) => item.career)

  const hasSignals = Object.values(signals.categoryScores).some((score) => score > 0)
  const fallback = FALLBACK_CAREER_IDS.map((id) => CAREER_MAP.get(id)).filter(Boolean)
  const pool = hasSignals ? ranked : [...fallback, ...ranked]

  const strongCareers = pickDiverse(pool, 4, 2)
  const remaining = pool.filter((career) => !strongCareers.some((item) => item.id === career.id))
  const exploreCareers = pickDiverse(remaining, 3, 1)

  const matches = strongCareers.map((career) => buildRecommendation(career, signals, 'strong'))
  const explore = exploreCareers.map((career) => buildRecommendation(career, signals, 'explore'))

  const all = [...matches, ...explore]
  const education = signals.education
  const stream = signals.stream

  const examMap = new Map()
  for (const recommendation of all) {
    for (const exam of recommendation.exams) examMap.set(exam.id, exam)
  }
  for (const examId of stream?.examIds ?? []) {
    const exam = EXAM_MAP.get(examId)
    if (exam) examMap.set(exam.id, examLink(exam))
  }

  const collegeMap = new Map()
  for (const recommendation of all) {
    for (const college of recommendation.colleges) collegeMap.set(college.id, college)
  }

  const courseOptions = []
  if (stream) courseOptions.push(...stream.studyOptions)
  for (const college of collegeMap.values()) courseOptions.push(...college.courses)

  const skills = []
  for (const recommendation of matches) {
    for (const skill of recommendation.skills) {
      if (!skills.includes(skill)) skills.push(skill)
    }
  }

  const summaryTags = [
    ...(signals.selectedLabels.subjects ?? []),
    signals.selectedLabels.workStyle?.[0],
    ...(signals.selectedLabels.priorities ?? []),
  ].filter(Boolean)

  const profile = {
    educationLevel: education?.label ?? '',
    educationStage: education?.stage ?? 'unknown',
    streamCode: stream?.code ?? '',
    subjects: signals.selectedLabels.subjects ?? [],
    activities: signals.selectedLabels.activities ?? [],
    strengths: signals.selectedLabels.strengths ?? [],
    workStyle: signals.selectedLabels.workStyle?.[0] ?? '',
    priorities: signals.selectedLabels.priorities ?? [],
    constraints:
      typeof answers.constraints === 'string' ? answers.constraints.trim().slice(0, 500) : '',
    categoryScores: signals.categoryScores,
    recommendedCareerIds: matches.map((item) => item.career.id),
    exploreCareerIds: explore.map((item) => item.career.id),
    recommendedCareers: matches.map((item) => item.career.name),
    exploreCareers: explore.map((item) => item.career.name),
    summaryTags: [...new Set(summaryTags)].slice(0, 8),
  }

  return {
    profile,
    matches,
    explore,
    skills: skills.slice(0, 8),
    pathways: [...new Set(matches.map((item) => item.pathway))].slice(0, 4),
    exams: [...examMap.values()].slice(0, 8),
    colleges: [...collegeMap.values()].slice(0, 6),
    courses: [...new Set(courseOptions)].slice(0, 8),
    nextSteps: nextStepPlan(profile.educationStage, matches),
    disclaimer:
      'This is a set of suggestions based on the preferences you selected and the FuturePath data. It is not a scientifically validated psychological assessment, a prediction of career success, or a guarantee of admission or employment.',
  }
}

export function buildReportChatPrompt(report) {
  const { profile, matches, explore } = report
  const details = [
    profile.educationLevel ? `Current stage: ${profile.educationLevel}.` : '',
    profile.subjects.length ? `Subjects I enjoy: ${profile.subjects.join(', ')}.` : '',
    profile.activities.length ? `Activities I like: ${profile.activities.join(', ')}.` : '',
    profile.strengths.length ? `Strengths: ${profile.strengths.join(', ')}.` : '',
    profile.workStyle ? `Preferred work style: ${profile.workStyle}.` : '',
    profile.priorities.length ? `Career priorities: ${profile.priorities.join(', ')}.` : '',
    profile.constraints ? `Constraints I shared: ${profile.constraints}.` : '',
    matches.length
      ? `My assessment starting points were: ${matches.map((item) => item.career.name).join(', ')}.`
      : '',
    explore.length
      ? `Other options were: ${explore.map((item) => item.career.name).join(', ')}.`
      : '',
  ]
    .filter(Boolean)
    .join('\n')

  return `I completed the FuturePath career assessment. Please help me make sense of the results and turn them into a practical next-step plan. Do not just repeat the report; ask me a focused question if something important is missing.\n\n${details}`
}

export const ASSESSMENT_STREAM_OPTIONS = STREAMS.map((stream) => stream.code)
