import {
  CAREER_CATEGORIES,
  CAREER_FIELDS,
  CATEGORY_MAP,
} from './careers/shared'
import { technologyCareers } from './careers/technology'
import { healthCareers } from './careers/health'
import { governmentCareers } from './careers/government'
import { safetyCareers } from './careers/safety'
import { engineeringCareers } from './careers/engineering'
import { businessCareers } from './careers/business'
import { lawCareers } from './careers/law'
import { educationCareers } from './careers/education'
import { creativeCareers } from './careers/creative'
import { aviationCareers } from './careers/aviation'
import { scienceCareers } from './careers/science'
import { communityCareers } from './careers/community'

export { CAREER_CATEGORIES, CAREER_FIELDS, CATEGORY_MAP }

const CAREER_GROUPS = [
  technologyCareers,
  healthCareers,
  governmentCareers,
  safetyCareers,
  engineeringCareers,
  businessCareers,
  lawCareers,
  educationCareers,
  creativeCareers,
  aviationCareers,
  scienceCareers,
  communityCareers,
]

export const CAREERS = CAREER_GROUPS.flat()

export const CAREER_MAP = new Map(CAREERS.map((item) => [item.id, item]))

export const CAROUSEL_IDS = [
  'software-engineer',
  'doctor',
  'ias-officer',
  'ips-officer',
  'cybersecurity-analyst',
  'data-scientist',
  'lawyer',
  'teacher',
  'pilot',
  'police-officer',
  'chartered-accountant',
  'mechanical-engineer',
  'civil-engineer',
  'ai-engineer',
  'cloud-engineer',
  'entrepreneur',
]

export const FEATURED_IDS = [
  'software-engineer',
  'doctor',
  'data-scientist',
  'chartered-accountant',
  'cybersecurity-analyst',
  'lawyer',
  'mechanical-engineer',
  'teacher',
]

export const POPULAR_SEARCHES = [
  'Software Engineer',
  'Doctor',
  'IAS Officer',
  'Data Scientist',
  'Chartered Accountant',
  'Pilot',
]

export const FEATURED_CAREERS = FEATURED_IDS.map((id) => CAREER_MAP.get(id)).filter(Boolean)

export const CAROUSEL_CAREERS = CAROUSEL_IDS.map((id) => CAREER_MAP.get(id)).filter(Boolean)

export const CAREER_COUNT = CAREERS.length

export const CATEGORY_COUNTS = CAREER_CATEGORIES.reduce((counts, category) => {
  counts[category.id] = CAREERS.filter((item) => item.categoryId === category.id).length
  return counts
}, {})

export const CATEGORIZED_CAREERS = CAREER_CATEGORIES.map((category) => ({
  ...category,
  careers: CAREERS.filter((item) => item.categoryId === category.id),
  count: CATEGORY_COUNTS[category.id] ?? 0,
}))

function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}+#.\s-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getCareerById(id) {
  return CAREER_MAP.get(id) ?? null
}

export function getCategoryById(id) {
  return CATEGORY_MAP[id] ?? null
}

export function getCareerPath(careerId) {
  return `/careers/${careerId}`
}

export function getRelatedCareers(career, limit = 3) {
  if (!career) return []

  const explicit = (career.relatedIds ?? [])
    .map((id) => CAREER_MAP.get(id))
    .filter((item) => item && item.id !== career.id)

  const unique = []
  const seen = new Set()

  for (const item of explicit) {
    if (!seen.has(item.id)) {
      seen.add(item.id)
      unique.push(item)
    }
  }

  if (unique.length < limit) {
    const sameCategory = CAREERS.filter(
      (item) => item.categoryId === career.categoryId && item.id !== career.id,
    )
    for (const item of sameCategory) {
      if (unique.length >= limit) break
      if (!seen.has(item.id)) {
        seen.add(item.id)
        unique.push(item)
      }
    }
  }

  return unique.slice(0, limit)
}

export function searchCareers(query, { categoryId = 'all', limit } = {}) {
  const normalizedQuery = normalize(query)
  const tokens = normalizedQuery ? normalizedQuery.split(' ') : []
  const categoryFilter = categoryId && categoryId !== 'all' ? categoryId : null

  const scored = []

  for (const career of CAREERS) {
    if (categoryFilter && career.categoryId !== categoryFilter) continue

    if (tokens.length === 0) {
      scored.push({ career, score: 0 })
      continue
    }

    const name = normalize(career.name)
    const category = normalize(`${career.category} ${career.categoryName}`)
    const keywords = normalize(career.keywords.join(' '))
    const description = normalize(`${career.description} ${career.overview}`)
    const haystack = `${name} ${category} ${keywords} ${description}`

    if (!tokens.every((token) => haystack.includes(token))) continue

    let score = 0
    for (const token of tokens) {
      if (name === token) score += 12
      else if (name.startsWith(token)) score += 9
      else if (name.includes(token)) score += 7
      else if (career.keywords.some((keyword) => normalize(keyword).startsWith(token))) score += 5
      else if (keywords.includes(token)) score += 4
      else if (category.includes(token)) score += 2
      else score += 1
    }

    scored.push({ career, score })
  }

  scored.sort((a, b) => b.score - a.score || a.career.name.localeCompare(b.career.name))
  const results = scored.map(({ career }) => career)

  return typeof limit === 'number' ? results.slice(0, limit) : results
}

export function getCategoryCareers(categoryId, { limit } = {}) {
  const results = CAREERS.filter((item) => item.categoryId === categoryId)
  return typeof limit === 'number' ? results.slice(0, limit) : results
}
