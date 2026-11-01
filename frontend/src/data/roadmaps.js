import {
  CAREERS,
  getCareerById,
  getRelatedCareers,
} from './careers'
import { aviationRoadmaps } from './roadmaps/aviation'
import { businessRoadmaps } from './roadmaps/business'
import { creativeRoadmaps } from './roadmaps/creative'
import { engineeringRoadmaps } from './roadmaps/engineering'
import { governmentRoadmaps } from './roadmaps/government'
import { healthRoadmaps } from './roadmaps/health'
import { lawEducationRoadmaps } from './roadmaps/law-education'
import { safetyRoadmaps } from './roadmaps/safety'
import { technologyRoadmaps } from './roadmaps/technology'

export const DETAILED_ROADMAPS = [
  ...technologyRoadmaps,
  ...healthRoadmaps,
  ...governmentRoadmaps,
  ...safetyRoadmaps,
  ...engineeringRoadmaps,
  ...businessRoadmaps,
  ...lawEducationRoadmaps,
  ...creativeRoadmaps,
  ...aviationRoadmaps,
]

const roadmapIds = new Set()

DETAILED_ROADMAPS.forEach((item) => {
  if (roadmapIds.has(item.id)) {
    throw new Error(`Duplicate roadmap id "${item.id}"`)
  }
  if (!getCareerById(item.id)) {
    throw new Error(`Roadmap "${item.id}" does not match a career`)
  }
  roadmapIds.add(item.id)
})

export const DETAILED_ROADMAP_MAP = new Map(DETAILED_ROADMAPS.map((item) => [item.id, item]))
export const DETAILED_ROADMAP_COUNT = DETAILED_ROADMAPS.length

const CATEGORY_SUBJECTS = {
  technology: ['Mathematics', 'Computer Science', 'Logical reasoning', 'English'],
  health: ['Biology', 'Chemistry', 'Physics', 'Communication'],
  government: ['Any stream', 'History', 'Polity', 'Economics', 'Current affairs'],
  safety: ['Any stream', 'Physical fitness', 'Communication', 'Current affairs'],
  engineering: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
  business: ['Mathematics', 'Economics', 'Commerce', 'English'],
  law: ['Any stream', 'Civics', 'Economics', 'English', 'Logical reasoning'],
  education: ['Any stream', 'Subject of interest', 'Communication', 'Child development'],
  creative: ['Any stream', 'English', 'Visual or media studies', 'Portfolio work'],
  aviation: ['Mathematics or any stream (varies)', 'Physics', 'English', 'Geography'],
  science: ['Biology or Mathematics', 'Physics', 'Chemistry', 'English'],
  community: ['Any stream', 'Civics', 'Economics', 'Sociology', 'Communication'],
}

const CATEGORY_STREAM_NOTES = {
  technology:
    'MPC is a common route into computing and engineering degrees, but diplomas, BCA, B.Sc. computing, and portfolio-based routes also exist.',
  health:
    'BiPC is the usual school route for clinical programmes. Allied health and science courses can have different subject requirements.',
  government:
    'No single Intermediate stream is prescribed for most civil services. A bachelor’s degree and the current examination notification matter more.',
  safety:
    'Recruitment rules vary by service and entry. Some routes require specific school subjects or physical standards, so check the current notification.',
  engineering:
    'MPC is the standard school route for most engineering degrees. Diploma and lateral-entry routes may also be available.',
  business:
    'MEC or Commerce is common, but several business and finance routes accept students from other streams with the required subjects.',
  law: 'Most integrated law programmes accept students from any stream. CLAT and other law entrance routes have their own current eligibility rules.',
  education:
    'Teacher education usually follows a bachelor’s degree plus a recognised teacher-education qualification. Subject requirements vary by level.',
  creative:
    'Portfolio, design-entrance, and degree routes differ by field. Some programmes accept any stream, while others expect specific subjects or portfolios.',
  aviation:
    'Aviation and hospitality routes vary widely. Licensing, medical standards, and training requirements depend on the specific role.',
  science:
    'BiPC or MPC are common depending on the science field. Check the subject requirements of each degree programme.',
  community:
    'Community and social-sector roles often accept students from any stream, with relevant degrees, certifications, or practical experience.',
}

export const ROADMAP_CHOICES = CAREERS.map((career) => {
  const detailed = DETAILED_ROADMAP_MAP.get(career.id)

  return {
    id: career.id,
    title: detailed?.title ?? career.name,
    categoryId: career.categoryId,
    category: career.category,
    categoryName: career.categoryName,
    color: career.color,
    intro: detailed?.intro ?? career.overview,
    duration: detailed?.duration ?? 'Varies by qualification and institution',
    stageCount: detailed?.stages.length ?? career.stages.length,
    isDetailed: Boolean(detailed),
  }
})

export const ROADMAP_COUNT = ROADMAP_CHOICES.length

export function getRoadmapPath(careerId) {
  return `/roadmaps/${careerId}`
}

function overviewStage(career, title, index, total) {
  const skills = career.skills.length ? career.skills : ['Foundational skills']
  const focus = skills
    .slice(index % skills.length, (index % skills.length) + 2)
    .concat(skills.slice(0, 1))
    .filter((item, itemIndex, list) => list.indexOf(item) === itemIndex)
    .slice(0, 3)

  if (index === 0) {
    return {
      title,
      description: `Build the school foundations that support ${career.name}. ${career.description}`,
      duration: 'School years',
      focus,
    }
  }

  if (index === total - 1) {
    return {
      title,
      description: `Move into the role and keep developing. Typical work can include: ${career.dayToDay
        .slice(0, 2)
        .join('; ')
        .toLowerCase()}.`,
      duration: 'After qualification or selection',
      focus,
    }
  }

  return {
    title,
    description: `This is a common milestone on the route to ${career.name}. Focus on ${skills[
      index % skills.length
    ].toLowerCase()} and check current course, examination, or recruitment requirements.`,
    duration: 'Varies',
    focus,
  }
}

function buildOverviewRoadmap(career) {
  const stages = career.stages.map((title, index, list) =>
    overviewStage(career, title, index, list.length),
  )

  return {
    id: career.id,
    title: career.name,
    categoryId: career.categoryId,
    intro: career.overview,
    duration: 'Varies by qualification, institution, and current rules',
    stages,
    subjects: CATEGORY_SUBJECTS[career.categoryId] ?? [],
    exams: [],
    qualifications: [career.pathway],
    skills: career.skills,
    practical: career.dayToDay.map(
      (item) => `Look for supervised, project, or volunteering experience related to: ${item.toLowerCase()}.`,
    ),
    licensing: [],
    entryRoutes: [career.pathway],
    alternatives: getRelatedCareers(career, 4).map((item) => item.name),
    sources: [],
    streamNote: CATEGORY_STREAM_NOTES[career.categoryId] ?? '',
    note: 'This is a concise overview route assembled from the career profile. It covers the main stages, skills, and practical areas for this career, but not institution-specific or year-specific requirements. Verify current details with official sources.',
  }
}

export function getRoadmap(careerId) {
  const career = getCareerById(careerId)
  if (!career) return null

  const detailed = DETAILED_ROADMAP_MAP.get(careerId)
  const roadmapData = detailed ?? buildOverviewRoadmap(career)

  return {
    ...roadmapData,
    career,
    category: career.category,
    categoryName: career.categoryName,
    color: career.color,
    related: getRelatedCareers(career, 4),
    isDetailed: Boolean(detailed),
    detailLevel: detailed ? 'detailed' : 'overview',
  }
}

export function hasDetailedRoadmap(careerId) {
  return DETAILED_ROADMAP_MAP.has(careerId)
}
