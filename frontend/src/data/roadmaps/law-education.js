import { SOURCES, exam, roadmap, stage } from './shared'

export const lawEducationRoadmaps = [
  roadmap({
    id: 'lawyer',
    title: 'Lawyer',
    categoryId: 'law',
    intro:
      'Lawyers advise clients, research legal questions, draft documents, negotiate, and represent parties in courts or other forums. Practice requires a recognised law degree and enrolment with a State Bar Council.',
    duration: 'A five-year integrated law degree after Class 12, or a three-year LLB after a bachelor’s degree, followed by enrolment and early practice.',
    stages: [
      stage(
        'Build reading, writing, and argument foundations',
        'Develop close reading, clear writing, reasoning, and awareness of public affairs. Debate, mock trials, and legal literacy activities can test your interest.',
        'School years',
        ['English', 'Reasoning', 'Civics'],
      ),
      stage(
        'Choose an integrated or graduate law route',
        'After Class 12, a five-year integrated BA LLB or similar programme is common. Graduates can consider a three-year LLB. The programme must meet Bar Council of India requirements.',
        '5 years, or 3 years after graduation',
        ['CLAT or other law entrance', 'BA LLB or LLB', 'Legal method'],
      ),
      stage(
        'Build practical legal skills',
        'Use moot courts, internships with advocates or firms, legal aid, drafting exercises, and research to develop professional judgement. Learn how facts, law, and evidence connect.',
        'During the degree',
        ['Internships', 'Mooting', 'Drafting'],
      ),
      stage(
        'Complete enrolment requirements',
        'Graduates must meet the Bar Council of India’s enrolment requirements. The All India Bar Examination and certificate of practice rules should be checked in the current official notifications.',
        'After graduation',
        ['State Bar Council enrolment', 'AIBE where required', 'Certificate of practice'],
      ),
      stage(
        'Begin practice and build a specialty',
        'Junior advocates often learn through chambers, court appearances, research, and drafting. Practice can develop in litigation, corporate law, taxation, criminal law, or policy.',
        'Long-term professional development',
        ['Chambers or firm', 'Court practice', 'Specialisation'],
      ),
    ],
    subjects: ['English', 'Legal reasoning', 'History', 'Political science', 'Economics'],
    exams: [
      exam('CLAT and other law entrance tests', 'Used by participating national law universities and other institutions; separate tests may apply elsewhere.'),
      exam('All India Bar Examination', 'Qualifying examination linked to Bar Council enrolment; confirm current rules and exemptions.', SOURCES.barCouncil),
    ],
    qualifications: [
      'A recognised integrated law degree after Class 12 or a three-year LLB after a bachelor’s degree.',
      'The law programme should meet Bar Council of India requirements.',
      'Enrolment with a State Bar Council and any current Bar examination or certificate requirements.',
    ],
    skills: ['Legal research', 'Writing', 'Oral advocacy', 'Fact analysis', 'Professional ethics'],
    practical: [
      'Intern with advocates, legal aid clinics, or law firms during study.',
      'Practise drafting pleadings, contracts, and research notes under supervision.',
      'Observe court procedure and learn how to maintain client confidentiality.',
    ],
    licensing: ['Enrolment with a State Bar Council is required to practise law. The Bar Council of India sets education and enrolment requirements, including the AIBE where applicable.'],
    entryRoutes: [
      'Five-year integrated law degree after Class 12.',
      'Three-year LLB after a bachelor’s degree.',
      'Litigation, law firm, corporate, government, or legal aid practice after enrolment.',
    ],
    alternatives: ['Company Secretary', 'Judicial Services Officer', 'Legal Counsel', 'Policy Analyst'],
    sources: [SOURCES.barCouncil],
    note: 'Enrolment and Bar examination rules can change. Confirm the current requirements with the Bar Council of India and your State Bar Council.',
  }),
  roadmap({
    id: 'teacher',
    title: 'Teacher',
    categoryId: 'education',
    intro:
      'Teachers plan learning experiences, explain subject matter, assess progress, and support students’ development. Requirements differ by school level, subject, and whether the school is government or private.',
    duration: 'A bachelor’s degree plus teacher education commonly takes 4–5 years after Class 12; higher education teaching requires further study.',
    stages: [
      stage(
        'Build subject knowledge and communication',
        'Develop strength in the subjects you might teach and practise explaining ideas to different audiences. Tutoring or volunteering can help you test the fit.',
        'School years',
        ['Subject knowledge', 'Communication', 'Patience'],
      ),
      stage(
        'Complete Class 11–12 and a relevant degree',
        'Choose a degree that supports the subject and level you want to teach. Primary and secondary teaching have different subject and qualification expectations.',
        '3–4 years after Class 12',
        ['Relevant bachelor’s degree', 'Subject depth'],
      ),
      stage(
        'Complete teacher education',
        'D.El.Ed. is commonly associated with primary teaching; B.Ed. is commonly required for secondary teaching. Check that the programme is recognised for the schools or recruitment route you are targeting.',
        '2 years, depending on route',
        ['D.El.Ed. or B.Ed.', 'Pedagogy', 'Teaching practice'],
      ),
      stage(
        'Build classroom evidence',
        'Complete supervised teaching practice and reflect on lesson planning, assessment, classroom management, and inclusive teaching. Keep a portfolio of your work.',
        'During teacher education',
        ['Lesson plans', 'Assessment', 'Reflection'],
      ),
      stage(
        'Enter a school and continue developing',
        'Private schools set their own recruitment criteria; government schools add eligibility tests and recruitment examinations. Progress can lead to subject leadership, administration, or specialist teaching with further qualifications.',
        'After qualification',
        ['Classroom role', 'Eligibility tests', 'Professional development'],
      ),
    ],
    subjects: ['Subject specialisation', 'Pedagogy', 'Child development', 'Language', 'Assessment'],
    exams: [
      exam('CTET or State TET', 'Eligibility tests for many government school roles; requirements vary by state and level.', SOURCES.ctet),
      exam('State teacher recruitment examination', 'Recruitment processes differ by state and school type.'),
    ],
    qualifications: [
      'A relevant bachelor’s degree and teacher education qualification for the level.',
      'CTET or state TET where required, particularly for government schools.',
      'Subject and language requirements specified by the employer or recruitment authority.',
    ],
    skills: ['Lesson planning', 'Classroom communication', 'Assessment', 'Inclusive teaching', 'Reflection'],
    practical: [
      'Complete supervised teaching practice and seek structured feedback.',
      'Build lesson plans that include clear learning goals and assessment.',
      'Check recognition of the teacher education programme before enrolling.',
    ],
    licensing: ['Teacher registration or eligibility requirements vary by school type and jurisdiction. Government recruitment usually adds TET and a selection process.'],
    entryRoutes: [
      'B.Ed. or D.El.Ed. followed by school recruitment.',
      'Subject degree plus teacher education for secondary teaching.',
      'Private school experience followed by eligibility tests for government routes.',
    ],
    alternatives: ['Government School Teacher', 'Special Education Teacher', 'Curriculum Designer', 'Education Administrator'],
    sources: [SOURCES.ncte, SOURCES.ctet],
    note: 'Private and government schools do not use identical hiring rules. Check the exact level and employer before choosing a qualification.',
  }),
  roadmap({
    id: 'professor',
    title: 'Professor',
    categoryId: 'education',
    intro:
      'Professors teach at colleges and universities, develop courses, supervise research, and contribute to their discipline. The role usually requires advanced subject knowledge and research or teaching experience.',
    duration: 'A bachelor’s and master’s degree, often followed by a PhD and eligibility tests; the full route commonly takes many years.',
    stages: [
      stage(
        'Build deep subject interest',
        'Choose a discipline you are willing to study deeply. Develop reading, writing, and questioning habits beyond exam preparation.',
        'School years',
        ['Subject curiosity', 'Reading', 'Writing'],
      ),
      stage(
        'Complete bachelor’s and master’s degrees',
        'A strong master’s degree in the subject is normally the minimum base for college teaching. Some fields require professional or technical qualifications alongside the academic route.',
        '5–6 years after Class 12, commonly',
        ['Bachelor’s degree', 'Master’s degree', 'Research methods'],
      ),
      stage(
        'Qualify through research and eligibility routes',
        'UGC NET, CSIR NET, or equivalent tests are relevant for many teaching and research positions. A PhD is increasingly expected for university careers and is normally required for advanced research roles.',
        'Several years',
        ['NET or equivalent', 'PhD', 'Publications'],
      ),
      stage(
        'Build teaching and research evidence',
        'Teach, assist with courses, present at seminars, and publish peer-reviewed work where possible. Supervision, ethics, and grant experience become important for senior roles.',
        'During doctoral and early-career work',
        ['Teaching experience', 'Research outputs', 'Conferences'],
      ),
      stage(
        'Enter academia and progress',
        'Start as an assistant professor or postdoctoral researcher where applicable. Promotion depends on teaching, research, service, and institutional criteria.',
        'Long-term academic career',
        ['Assistant professor', 'Research', 'Academic leadership'],
      ),
    ],
    subjects: ['Discipline specialisation', 'Research methods', 'Academic writing', 'Teaching'],
    exams: [
      exam('UGC NET', 'Relevant for many humanities and social-science teaching and research roles; check current eligibility.', SOURCES.ugcNet),
      exam('CSIR NET', 'Relevant for specified science subjects and research opportunities.', SOURCES.csirNet),
    ],
    qualifications: [
      'A master’s degree in the relevant subject is commonly the minimum for college teaching.',
      'A PhD is increasingly expected and is normally required for university research careers.',
      'NET or equivalent eligibility where required by the institution or funding route.',
    ],
    skills: ['Subject expertise', 'Academic writing', 'Teaching', 'Research design', 'Supervision'],
    practical: [
      'Participate in teaching, seminars, and research projects during postgraduate study.',
      'Learn research ethics, citation practice, and peer review.',
      'Check current UGC and institutional requirements rather than relying on older eligibility rules.',
    ],
    licensing: ['No single practising licence; higher-education eligibility is set by UGC, CSIR, and individual institutions.'],
    entryRoutes: [
      'Master’s degree, NET, and PhD route into college or university teaching.',
      'Research scientist or postdoctoral route in a funded project.',
      'Professional or industry expertise combined with teaching and research qualifications where accepted.',
    ],
    alternatives: ['Research Scientist', 'Teacher', 'Policy Analyst', 'Science Communicator'],
    sources: [SOURCES.ugcNet, SOURCES.csirNet],
  }),
  roadmap({
    id: 'research-scientist',
    title: 'Research Scientist',
    categoryId: 'science',
    intro:
      'Research scientists design experiments, analyse evidence, and contribute to new knowledge or practical technologies. They work in universities, national laboratories, industry, healthcare, agriculture, and environmental organisations.',
    duration: 'A science bachelor’s and master’s degree, usually followed by a PhD; the full route commonly takes many years.',
    stages: [
      stage(
        'Build scientific curiosity and fundamentals',
        'Develop mathematics, physics, chemistry, biology, or another science base depending on your interest. Learn to ask testable questions and record observations carefully.',
        'Class 10 onward',
        ['Science', 'Mathematics', 'Observation'],
      ),
      stage(
        'Complete a relevant bachelor’s degree',
        'Choose a science or applied-science programme with laboratory and research exposure. Keep your mathematics and communication skills active.',
        '3–4 years',
        ['BSc or BS', 'Laboratory work', 'Statistics'],
      ),
      stage(
        'Complete a master’s degree and research training',
        'A master’s degree deepens subject knowledge and introduces research methods. A dissertation or project is important evidence of independent work.',
        '2 years, commonly',
        ['MSc or equivalent', 'Research project', 'Scientific writing'],
      ),
      stage(
        'Complete a PhD and build research outputs',
        'Doctoral study develops original research under supervision. Publications, presentations, and collaboration matter for research careers; funding and eligibility routes differ by field.',
        'Several years',
        ['PhD', 'Publications', 'Research ethics'],
      ),
      stage(
        'Enter a research role and specialise',
        'Work in a university, national lab, industry R&D, hospital, agriculture, or environmental organisation. Postdoctoral experience may be expected in some fields.',
        'After doctoral study',
        ['Postdoc or scientist role', 'Funding', 'Specialisation'],
      ),
    ],
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Statistics'],
    exams: [
      exam('CSIR NET', 'Relevant for specified science subjects, research fellowships, and some academic roles.', SOURCES.csirNet),
      exam('UGC NET', 'Relevant to some university teaching and research routes.', SOURCES.ugcNet),
      exam('GATE or institutional tests', 'Some postgraduate or funded research routes use GATE or their own selection tests.'),
    ],
    qualifications: [
      'A bachelor’s and master’s degree in a relevant science or applied-science field.',
      'A PhD for most independent research scientist roles.',
      'Research publications, projects, and references appropriate to the field.',
    ],
    skills: ['Research design', 'Laboratory or field methods', 'Statistics', 'Scientific writing', 'Ethics'],
    practical: [
      'Join a research project and learn proper record keeping and safety.',
      'Present your work and respond to critical feedback.',
      'Study funding, ethics, and publication norms in your field.',
    ],
    licensing: ['No general research licence. Clinical, environmental, radiation, or animal-research work may require specific approvals and training.'],
    entryRoutes: [
      'PhD followed by postdoctoral or scientist positions.',
      'Industry research and development after a master’s or PhD.',
      'Government or national laboratory recruitment through scientific service examinations.',
    ],
    alternatives: ['Professor', 'Data Scientist', 'Environmental Scientist', 'Science Communicator'],
    sources: [SOURCES.csirNet, SOURCES.ugcNet],
  }),
]
