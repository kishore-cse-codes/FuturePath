import { SOURCES, exam, roadmap, stage } from './shared'

export const aviationRoadmaps = [
  roadmap({
    id: 'pilot',
    title: 'Pilot',
    categoryId: 'aviation',
    intro:
      'Pilots operate aircraft and are responsible for flight safety, navigation, communication, and decision making. Civil and military pilot routes have different selection, training, and licensing requirements.',
    duration: 'Civil training commonly takes 18 months to several years after Class 12, depending on flying hours, examinations, medical clearance, and training capacity.',
    stages: [
      stage(
        'Build physics, mathematics, and fitness',
        'Study physics and mathematics, develop spatial reasoning, and protect your health. Aviation medical standards are strict, so avoid untreated vision, hearing, or other health issues.',
        'Class 10 onward',
        ['Physics', 'Mathematics', 'Health and fitness'],
      ),
      stage(
        'Complete Class 11–12 and choose a route',
        'For many civil pilot routes, Class 12 with Physics and Mathematics is required. Military routes such as NDA have their own subject and physical requirements.',
        '2 years',
        ['PCM', 'English', 'Medical awareness'],
      ),
      stage(
        'Complete ground and flying training, or military selection',
        'Civil candidates train at an approved flying school and clear DGCA ground subjects, flying checks, and medical examinations. Military candidates go through NDA or graduate entry selection and service training.',
        'Months to years',
        ['Ground subjects', 'Flying training', 'Medical checks'],
      ),
      stage(
        'Obtain the applicable licence or commission',
        'Civil pilots progress through the licensing requirements set by DGCA, including medical and flying-hour requirements. Military pilots are commissioned after academy training and branch-specific instruction.',
        'After training',
        ['CPL or ATPL requirements', 'Instrument rating', 'Commission where applicable'],
      ),
      stage(
        'Build experience and type qualification',
        'Airline entry usually requires additional experience, type training, and simulator checks. Military pilots follow service postings and aircraft conversion. Requirements change, so verify them directly.',
        'Ongoing',
        ['Type rating', 'Airline or service', 'Recency and medicals'],
      ),
    ],
    subjects: ['Physics', 'Mathematics', 'English', 'Navigation', 'Meteorology'],
    exams: [
      exam('DGCA licensing examinations', 'Civil pilot licensing requires current DGCA ground examinations, flying experience, and medical standards.', SOURCES.dgca),
      exam('NDA or graduate defence entries', 'Military pilot routes use defence selection processes and have separate physical and medical standards.', SOURCES.upsc),
    ],
    qualifications: [
      'Class 12 with Physics and Mathematics for many civil and military flying routes.',
      'Current DGCA Class 1 medical and licensing requirements for civil pilots.',
      'Military selection, academy training, and service-specific standards for defence pilots.',
    ],
    skills: ['Situational awareness', 'Navigation', 'Communication', 'Decision making', 'Discipline'],
    practical: [
      'Complete a current aviation medical assessment before committing to expensive training.',
      'Verify that the flying school and instructors hold the required approvals.',
      'Plan for the real cost, duration, and uncertainty of hour-building and type training.',
    ],
    licensing: ['Civil pilots require DGCA-issued licences and medical certification. Military pilots operate under defence service qualifications and authorisations.'],
    entryRoutes: [
      'Civil flying school followed by DGCA licensing and hour building.',
      'NDA after Class 12 for eligible military flying branches.',
      'Graduate defence entry or other service-specific routes where available.',
    ],
    alternatives: ['Air Force Officer', 'Aircraft Maintenance Engineer', 'Air Traffic Controller', 'Aerospace Engineer'],
    sources: [SOURCES.dgca, SOURCES.indianAirForce, SOURCES.upsc],
    note: 'Pilot training is expensive and medically demanding. Check current DGCA rules, school approvals, and medical standards before paying for a programme.',
  }),
]
