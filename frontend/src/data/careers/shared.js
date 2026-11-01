import {
  Briefcase,
  Code2,
  Cog,
  FlaskConical,
  GraduationCap,
  Landmark,
  Palette,
  Plane,
  Scale,
  Shield,
  Stethoscope,
  Users,
} from 'lucide-react'

export const CAREER_CATEGORIES = [
  {
    id: 'technology',
    label: 'Technology',
    name: 'Technology & Computing',
    color: '#b7aaff',
    icon: Code2,
    skills: ['Problem solving', 'Digital literacy', 'Continuous learning'],
    pathway:
      'Class 10 → Intermediate (MPC or another suitable stream) → Relevant degree, diploma, or structured training → Projects and internships → Technology role.',
    stages: ['Class 10', 'Intermediate', 'Degree or training', 'Technology career'],
  },
  {
    id: 'health',
    label: 'Medical & Health',
    name: 'Medical & Healthcare',
    color: '#7de3d2',
    icon: Stethoscope,
    skills: ['Care and empathy', 'Attention to detail', 'Science fundamentals'],
    pathway:
      'Class 10 → Intermediate (BiPC for most clinical routes) → Relevant health or science degree → Practical training or registration where required → Healthcare role.',
    stages: ['Class 10', 'Intermediate (BiPC)', 'Health degree', 'Healthcare role'],
  },
  {
    id: 'government',
    label: 'Government',
    name: 'Government & Civil Services',
    color: '#c2b5ff',
    icon: Landmark,
    skills: ['Analytical thinking', 'Public service', 'Communication'],
    pathway:
      'Class 10 → Intermediate → Relevant undergraduate degree → Service-specific competitive examination and selection → Government role.',
    stages: ['Class 10', 'Intermediate', 'Undergraduate degree', 'Competitive selection'],
  },
  {
    id: 'safety',
    label: 'Public Safety',
    name: 'Police, Defence & Public Safety',
    color: '#8fd3ff',
    icon: Shield,
    skills: ['Discipline', 'Situational awareness', 'Teamwork'],
    pathway:
      'Class 10 → Intermediate → Service-specific recruitment or entrance route → Training and required standards → Public safety role.',
    stages: ['Class 10', 'Intermediate', 'Recruitment', 'Training & service'],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    name: 'Engineering',
    color: '#9ec2ff',
    icon: Cog,
    skills: ['Applied mathematics', 'Design thinking', 'Technical problem solving'],
    pathway:
      'Class 10 → Intermediate (MPC) → Engineering entrance examination → B.Tech or B.E. → Projects and internships → Engineering role.',
    stages: ['Class 10', 'Intermediate (MPC)', 'B.Tech / B.E.', 'Engineering role'],
  },
  {
    id: 'business',
    label: 'Business & Finance',
    name: 'Commerce, Business & Finance',
    color: '#ffd18a',
    icon: Briefcase,
    skills: ['Financial literacy', 'Communication', 'Decision making'],
    pathway:
      'Class 10 → Intermediate (MEC, Commerce, or another suitable stream) → Relevant degree or professional qualification → Internships or practical experience → Business role.',
    stages: ['Class 10', 'Intermediate', 'Degree or qualification', 'Business career'],
  },
  {
    id: 'law',
    label: 'Law & Policy',
    name: 'Law & Public Policy',
    color: '#f3a8c7',
    icon: Scale,
    skills: ['Research', 'Argumentation', 'Attention to detail'],
    pathway:
      'Class 10 → Intermediate → Integrated law degree or relevant undergraduate study → Entrance and professional qualifications where required → Legal or policy role.',
    stages: ['Class 10', 'Intermediate', 'Law degree', 'Legal or policy role'],
  },
  {
    id: 'education',
    label: 'Education & Research',
    name: 'Education & Research',
    color: '#ffce8a',
    icon: GraduationCap,
    skills: ['Subject knowledge', 'Communication', 'Patience'],
    pathway:
      'Class 10 → Intermediate → Relevant bachelor’s degree → Teacher education or subject-specific qualification → Classroom, research, or education role.',
    stages: ['Class 10', 'Intermediate', 'Degree + training', 'Education role'],
  },
  {
    id: 'creative',
    label: 'Creative & Media',
    name: 'Creative & Media',
    color: '#f3b8a8',
    icon: Palette,
    skills: ['Creativity', 'Visual thinking', 'Portfolio building'],
    pathway:
      'Class 10 → Intermediate → Relevant degree, diploma, or portfolio-based training → Projects and practical experience → Creative role.',
    stages: ['Class 10', 'Intermediate', 'Degree or portfolio', 'Creative career'],
  },
  {
    id: 'aviation',
    label: 'Aviation & Hospitality',
    name: 'Aviation, Travel & Hospitality',
    color: '#9ecbff',
    icon: Plane,
    skills: ['Safety awareness', 'Customer focus', 'Coordination'],
    pathway:
      'Class 10 → Intermediate → Aviation, hospitality, or relevant degree/training → Licensing or practical experience where required → Industry role.',
    stages: ['Class 10', 'Intermediate', 'Training or degree', 'Industry role'],
  },
  {
    id: 'science',
    label: 'Science & Environment',
    name: 'Science, Environment & Agriculture',
    color: '#8fe0c8',
    icon: FlaskConical,
    skills: ['Scientific reasoning', 'Research', 'Data literacy'],
    pathway:
      'Class 10 → Intermediate with relevant science subjects → Bachelor’s degree in the field → Postgraduate study, research, or applied training → Science role.',
    stages: ['Class 10', 'Intermediate (Science)', 'Bachelor’s degree', 'Research or applied role'],
  },
  {
    id: 'community',
    label: 'Community & Other',
    name: 'Community & Other Career Paths',
    color: '#c9b8ff',
    icon: Users,
    skills: ['Communication', 'Empathy', 'Practical problem solving'],
    pathway:
      'Class 10 → Intermediate → Relevant degree, certification, or practical training → Experience and professional registration where required → Community role.',
    stages: ['Class 10', 'Intermediate', 'Relevant training', 'Community career'],
  },
]

export const CATEGORY_MAP = Object.fromEntries(
  CAREER_CATEGORIES.map((category) => [category.id, category]),
)

export const CAREER_FIELDS = [
  { id: 'all', label: 'All fields', color: '#b3a7ff' },
  ...CAREER_CATEGORIES.map(({ id, label, color }) => ({ id, label, color })),
]

export function career(
  id,
  name,
  categoryId,
  description,
  keywords,
  {
    icon,
    color,
    skills,
    pathway,
    stages,
    overview,
    dayToDay,
    relatedIds,
    carouselTitle,
  } = {},
) {
  const category = CATEGORY_MAP[categoryId]

  if (!category) {
    throw new Error(`Unknown career category "${categoryId}" for ${name}`)
  }

  return {
    id,
    name,
    carouselTitle,
    categoryId,
    category: category.label,
    categoryName: category.name,
    field: categoryId,
    fieldLabel: category.label,
    icon: icon ?? category.icon,
    color: color ?? category.color,
    description,
    blurb: description,
    overview: overview ?? description,
    keywords: [...new Set([name.toLowerCase(), ...keywords])],
    skills: skills ?? category.skills,
    pathway: pathway ?? category.pathway,
    stages: stages ?? category.stages,
    roadmapSteps: stages ?? category.stages,
    dayToDay: dayToDay ?? [],
    relatedIds: relatedIds ?? [],
  }
}
