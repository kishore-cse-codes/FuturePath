import { career } from './shared'

export const educationCareers = [
  career(
    'teacher',
    'Teacher',
    'education',
    'Guide learners through subject knowledge, skills, and thoughtful classroom experiences.',
    ['teaching', 'school', 'classroom', 'educator'],
    {
      overview:
        'Teachers plan lessons, explain ideas, assess learning, and support students’ development. Effective teaching combines subject knowledge with communication and classroom judgement.',
      skills: ['Subject knowledge', 'Lesson planning', 'Communication', 'Patience'],
      stages: ['Class 10', 'Intermediate', 'Bachelor’s degree and teacher education', 'Teacher'],
      dayToDay: [
        'Plan and deliver lessons',
        'Support students and assess progress',
        'Coordinate with colleagues and families',
      ],
      relatedIds: ['special-education-teacher', 'school-principal', 'career-counselor'],
    },
  ),
  career(
    'professor',
    'Professor',
    'education',
    'Teach at higher-education level and contribute to research, scholarship, and academic life.',
    ['lecturer', 'higher education', 'academic', 'research'],
    {
      overview:
        'Professors teach, supervise students, and develop knowledge in their field. The balance of teaching, research, and service varies by institution.',
      skills: ['Advanced subject knowledge', 'Teaching', 'Research', 'Academic writing'],
      dayToDay: [
        'Prepare and deliver advanced courses',
        'Conduct and publish research',
        'Supervise students and contribute to academic work',
      ],
      relatedIds: ['academic-researcher', 'research-scientist', 'curriculum-designer'],
    },
  ),
  career(
    'school-principal',
    'School Principal',
    'education',
    'Lead a school’s academic direction, staff, student welfare, and operational systems.',
    ['school leadership', 'principal', 'education administration', 'management'],
    {
      overview:
        'School principals coordinate teaching quality, staff development, student wellbeing, and school operations. They work with teachers, families, and education authorities.',
      skills: ['Leadership', 'Academic oversight', 'Communication', 'Operations'],
      dayToDay: [
        'Guide teaching and learning priorities',
        'Support staff and address student welfare issues',
        'Coordinate school operations and external communication',
      ],
      relatedIds: ['education-administrator', 'teacher', 'curriculum-designer'],
    },
  ),
  career(
    'curriculum-designer',
    'Curriculum Designer',
    'education',
    'Design learning goals, materials, and sequences that help people learn effectively.',
    ['curriculum', 'lesson design', 'learning outcomes', 'education'],
    {
      overview:
        'Curriculum designers shape what is taught and how learning is organised. They align objectives, activities, assessment, and learner needs.',
      skills: ['Learning design', 'Subject expertise', 'Assessment', 'Research'],
      dayToDay: [
        'Define learning outcomes and content structure',
        'Review materials and assessment alignment',
        'Test and improve curriculum with educators',
      ],
      relatedIds: ['instructional-designer', 'teacher', 'education-consultant'],
    },
  ),
  career(
    'education-consultant',
    'Education Consultant',
    'education',
    'Advise schools, institutions, or families on learning programmes and education decisions.',
    ['education consulting', 'advisory', 'school improvement', 'learning'],
    {
      overview:
        'Education consultants diagnose learning or organisational needs and recommend practical approaches. They work across curriculum, teacher development, and strategy.',
      skills: ['Education expertise', 'Analysis', 'Facilitation', 'Communication'],
      dayToDay: [
        'Understand the client’s education challenge',
        'Review evidence and existing practices',
        'Present recommendations and support implementation',
      ],
      relatedIds: ['curriculum-designer', 'career-counselor', 'education-administrator'],
    },
  ),
  career(
    'special-education-teacher',
    'Special Education Teacher',
    'education',
    'Adapt teaching and support so learners with diverse needs can participate and progress.',
    ['special education', 'inclusive learning', 'learning support', 'disabilities'],
    {
      overview:
        'Special education teachers design accessible learning experiences and collaborate with families and specialists. Individual needs and strengths guide planning.',
      skills: ['Adapted instruction', 'Observation', 'Patience', 'Collaboration'],
      dayToDay: [
        'Assess learning needs and adapt materials',
        'Deliver individual or small-group support',
        'Coordinate with families and specialists',
      ],
      relatedIds: ['teacher', 'speech-language-pathologist', 'occupational-therapist'],
    },
  ),
  career(
    'early-childhood-educator',
    'Early Childhood Educator',
    'education',
    'Support young children’s development through play, routines, and early learning experiences.',
    ['preschool', 'kindergarten', 'early learning', 'child development'],
    {
      overview:
        'Early childhood educators create safe, stimulating environments for young learners. They observe development and work closely with families.',
      skills: ['Child development', 'Play-based learning', 'Care', 'Observation'],
      dayToDay: [
        'Plan age-appropriate activities and routines',
        'Observe development and social interactions',
        'Communicate with families and colleagues',
      ],
      relatedIds: ['teacher', 'special-education-teacher', 'career-counselor'],
    },
  ),
  career(
    'career-counselor',
    'Career Counselor',
    'education',
    'Help people understand their interests, options, and pathways so they can make informed education and career choices.',
    ['career guidance', 'counselling', 'student support', 'career planning'],
    {
      overview:
        'Career counselors combine listening, assessment, and current pathway information. They help clients explore options without imposing a single answer.',
      skills: ['Active listening', 'Career knowledge', 'Assessment', 'Ethics'],
      dayToDay: [
        'Explore interests, strengths, and constraints',
        'Explain education and career pathways',
        'Support action planning and follow-up',
      ],
      relatedIds: ['psychologist', 'teacher', 'education-consultant'],
    },
  ),
  career(
    'instructional-designer',
    'Instructional Designer',
    'education',
    'Design structured learning experiences for schools, workplaces, and digital platforms.',
    ['e learning', 'instructional design', 'training design', 'learning technology'],
    {
      overview:
        'Instructional designers analyse learning needs and build coherent experiences. They combine pedagogy, content, media, and assessment.',
      skills: ['Learning theory', 'Content design', 'Multimedia', 'Evaluation'],
      dayToDay: [
        'Analyse learners and learning goals',
        'Design activities, materials, and assessments',
        'Test and improve learning experiences',
      ],
      relatedIds: ['curriculum-designer', 'education-technologist', 'content-writer'],
    },
  ),
  career(
    'academic-researcher',
    'Academic Researcher',
    'education',
    'Investigate questions systematically and contribute evidence to a field of study.',
    ['research', 'academia', 'scholarship', 'publications'],
    {
      overview:
        'Academic researchers design studies, collect evidence, and communicate findings through papers, teaching, and collaboration. Research integrity is essential.',
      skills: ['Research methods', 'Critical analysis', 'Writing', 'Ethics'],
      dayToDay: [
        'Review existing knowledge and define questions',
        'Collect and analyse evidence',
        'Write and present research findings',
      ],
      relatedIds: ['professor', 'research-scientist', 'data-analyst'],
    },
  ),
  career(
    'education-administrator',
    'Education Administrator',
    'education',
    'Coordinate academic programmes, student services, records, and institutional operations.',
    ['school administration', 'education management', 'student services'],
    {
      overview:
        'Education administrators keep institutions running. They coordinate programmes, staff, schedules, records, and student support processes.',
      skills: ['Organisation', 'Communication', 'Planning', 'Policy awareness'],
      dayToDay: [
        'Coordinate programmes and schedules',
        'Support staff and student service processes',
        'Maintain records and institutional reporting',
      ],
      relatedIds: ['school-principal', 'education-consultant', 'operations-manager'],
    },
  ),
  career(
    'librarian',
    'Librarian',
    'education',
    'Organise information resources and help people find, evaluate, and use knowledge.',
    ['library science', 'information management', 'research support'],
    {
      overview:
        'Librarians manage collections and information services. They support research, literacy, and access to reliable knowledge in physical or digital settings.',
      skills: ['Information organisation', 'Research support', 'Digital literacy', 'Service'],
      dayToDay: [
        'Organise and maintain collections',
        'Help users find reliable information',
        'Coordinate reading, research, or digital resources',
      ],
      relatedIds: ['academic-researcher', 'teacher', 'content-writer'],
    },
  ),
  career(
    'examination-designer',
    'Examination Designer',
    'education',
    'Create fair assessments that measure intended knowledge and skills.',
    ['assessment', 'question design', 'testing', 'education'],
    {
      overview:
        'Examination designers align questions and tasks with learning outcomes. They consider validity, fairness, clarity, and accessibility.',
      skills: ['Assessment design', 'Subject knowledge', 'Fairness', 'Analysis'],
      dayToDay: [
        'Define assessment blueprints and outcomes',
        'Draft and review questions',
        'Analyse results and improve future assessments',
      ],
      relatedIds: ['curriculum-designer', 'education-administrator', 'instructional-designer'],
    },
  ),
  career(
    'education-technologist',
    'Education Technologist',
    'education',
    'Support teaching and learning through thoughtful use of digital tools and platforms.',
    ['edtech', 'learning platforms', 'digital learning', 'training technology'],
    {
      overview:
        'Education technologists connect learning needs with technology. They evaluate tools, support educators, and improve digital access and usability.',
      skills: ['Learning technology', 'Training', 'Problem solving', 'Accessibility'],
      dayToDay: [
        'Evaluate and support learning platforms',
        'Train educators on digital tools',
        'Troubleshoot access and usability issues',
      ],
      relatedIds: ['instructional-designer', 'it-support-specialist', 'curriculum-designer'],
    },
  ),
]
