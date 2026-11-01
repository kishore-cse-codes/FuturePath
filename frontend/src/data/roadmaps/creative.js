import { SOURCES, exam, roadmap, stage } from './shared'

export const creativeRoadmaps = [
  roadmap({
    id: 'graphic-designer',
    title: 'Graphic Designer',
    categoryId: 'creative',
    intro:
      'Graphic designers create visual communication for brands, publications, products, campaigns, and digital media. They combine typography, layout, imagery, and message clarity.',
    duration: 'A design degree or diploma commonly takes 3–4 years after Class 12, but portfolio-based entry is also possible.',
    stages: [
      stage(
        'Build visual observation and basic craft',
        'Notice typography, colour, hierarchy, and composition in everyday design. Start sketching, making simple layouts, and asking why a design works.',
        'School years',
        ['Observation', 'Sketching', 'Visual composition'],
      ),
      stage(
        'Complete Class 11–12',
        'Any stream can lead to design study, though art, design, or media subjects may help. Keep a sketchbook and begin documenting your creative process.',
        '2 years',
        ['Art or design subjects', 'English', 'Portfolio habits'],
      ),
      stage(
        'Study design or build structured training',
        'A degree or diploma in communication design, graphic design, visual arts, or a related field offers critique and studio practice. Some designers build equivalent skills through structured courses and mentored work.',
        '3–4 years, or portfolio route',
        ['Design foundations', 'Typography', 'Software'],
      ),
      stage(
        'Build a focused portfolio',
        'Create work for real or realistic briefs, showing research, iterations, and final outcomes. Include a few strong projects rather than many unrelated pieces.',
        'During study',
        ['Portfolio', 'Case studies', 'Client briefs'],
      ),
      stage(
        'Enter a studio, agency, or in-house team',
        'Junior designers often work on production and defined assets before leading projects. Growth can lead to brand identity, art direction, motion, or design leadership.',
        'After preparation',
        ['Studio or in-house', 'Specialisation', 'Art direction'],
      ),
    ],
    subjects: ['Art', 'Visual communication', 'Typography', 'Media studies', 'English'],
    exams: [
      exam('NID DAT', 'Admission route for National Institute of Design programmes; check current programme and eligibility.', SOURCES.nid),
      exam('NIFT entrance examination', 'Relevant to design programmes at NIFT; not required for all graphic design routes.', SOURCES.nift),
      exam('UCEED', 'Used for undergraduate design admission at participating institutions.', SOURCES.uceed),
    ],
    qualifications: [
      'Degrees or diplomas in graphic design, communication design, visual arts, or a related field are common.',
      'A strong portfolio can support entry through adjacent study or structured self-learning.',
      'No statutory licence is required for most graphic design work.',
    ],
    skills: ['Typography', 'Layout', 'Colour', 'Design software', 'Visual storytelling'],
    practical: [
      'Complete real briefs with constraints, feedback, and revisions.',
      'Document your process, not only polished final images.',
      'Learn basic print production and accessible digital design.',
    ],
    licensing: ['No professional licence is generally required.'],
    entryRoutes: [
      'Design degree or diploma followed by junior studio work.',
      'Adjacent degree plus a focused portfolio and freelance experience.',
      'Production or marketing role moving into design with demonstrated craft.',
    ],
    alternatives: ['UI/UX Designer', 'Animator', 'Art Director', 'Illustrator'],
    sources: [SOURCES.nid, SOURCES.nift, SOURCES.uceed],
  }),
  roadmap({
    id: 'animator',
    title: 'Animator',
    categoryId: 'creative',
    intro:
      'Animators bring characters, objects, and ideas to life through movement. They work in film, television, games, advertising, education, and interactive media.',
    duration: 'A degree or diploma commonly takes 3–4 years after Class 12; portfolio-based and specialist training routes also exist.',
    stages: [
      stage(
        'Build drawing, observation, and timing skills',
        'Practise gesture drawing, storytelling, and observation of movement. Simple flipbooks or frame-by-frame exercises teach timing and spacing.',
        'School years',
        ['Drawing', 'Observation', 'Storytelling'],
      ),
      stage(
        'Complete Class 11–12',
        'Any stream can lead to animation study. Art, design, media, or computer subjects may help, but a portfolio of consistent practice matters more than one subject choice.',
        '2 years',
        ['Art or media', 'English', 'Portfolio practice'],
      ),
      stage(
        'Study animation or build specialist training',
        'Programmes in animation, multimedia, game art, or visual effects offer structured practice. Check whether the course teaches fundamentals, critique, and current production workflows.',
        '3–4 years, or specialist diploma',
        ['Animation principles', '3D or 2D tools', 'Storyboarding'],
      ),
      stage(
        'Create a reel that shows range and process',
        'Build a short demo reel with your strongest animation. Include body mechanics, acting, timing, and a clear explanation of your contribution to team projects.',
        'During study',
        ['Demo reel', 'Team projects', 'Feedback'],
      ),
      stage(
        'Enter a studio or production pipeline',
        'Junior animators often specialise in 2D, 3D, rigging, lighting, or motion. Studio work is collaborative and deadline-driven; growth comes from reliable craft and specialisation.',
        'After preparation',
        ['Studio pipeline', 'Specialisation', 'Production experience'],
      ),
    ],
    subjects: ['Art', 'Design', 'Media studies', 'Computer graphics', 'Storytelling'],
    exams: [
      exam('Design or film institute admissions', 'Animation programmes use portfolios, entrance tests, or interviews depending on the institution.'),
    ],
    qualifications: [
      'Degrees or diplomas in animation, multimedia, game art, visual effects, or a related field are common.',
      'A strong demo reel can matter more than the qualification title for many entry roles.',
      'No statutory licence is required for most animation work.',
    ],
    skills: ['Animation principles', 'Drawing or 3D craft', 'Storyboarding', 'Timing', 'Collaboration'],
    practical: [
      'Animate short exercises that isolate timing, weight, and acting.',
      'Complete at least one collaborative project and explain your role.',
      'Keep learning the production tools used by the studios you target.',
    ],
    licensing: ['No professional licence is generally required.'],
    entryRoutes: [
      'Animation degree or diploma followed by junior studio work.',
      'Specialist short course plus a strong demo reel.',
      'Adjacent art, game, or media role with animation upskilling.',
    ],
    alternatives: ['Graphic Designer', 'Game Developer', 'Video Editor', 'Visual Effects Artist'],
    sources: [SOURCES.nid, SOURCES.nift],
  }),
  roadmap({
    id: 'video-editor',
    title: 'Video Editor',
    categoryId: 'creative',
    intro:
      'Video editors assemble footage, sound, and graphics into coherent stories. They work in film, television, advertising, online media, education, and corporate communication.',
    duration: 'A media or film degree commonly takes 3–4 years after Class 12, but portfolio-based entry is also possible.',
    stages: [
      stage(
        'Build storytelling and technical curiosity',
        'Watch films and online video critically, noting pacing, sound, and structure. Start editing short clips with available tools and learn to organise files.',
        'School years',
        ['Storytelling', 'Observation', 'Basic software'],
      ),
      stage(
        'Complete Class 11–12',
        'Any stream can lead to media work. English, art, media, or computer subjects may help, but consistent editing practice is the main evidence.',
        '2 years',
        ['English', 'Media or art', 'Project practice'],
      ),
      stage(
        'Study film, media, or a structured editing route',
        'A degree or diploma in film, media production, communication, or animation provides critique and production experience. Formal study is useful but not the only route.',
        '3–4 years, or portfolio route',
        ['Editing software', 'Sound basics', 'Production workflow'],
      ),
      stage(
        'Build a reel and real project experience',
        'Edit short narratives, documentaries, interviews, or promotional pieces. Show how you handle pacing, continuity, sound, graphics, and revisions.',
        'During study',
        ['Showreel', 'Client work', 'Feedback'],
      ),
      stage(
        'Enter a production or media team',
        'Junior editors often start with assembly, social cuts, or assistant work. Growth can lead to narrative film, documentary, sports, advertising, or post-production supervision.',
        'After preparation',
        ['Production house', 'Freelance or in-house', 'Specialisation'],
      ),
    ],
    subjects: ['Media studies', 'Film', 'English', 'Art', 'Computer applications'],
    exams: [
      exam('Film or media institute admissions', 'Institutions use portfolios, written tests, or interviews; requirements vary.'),
    ],
    qualifications: [
      'Degrees or diplomas in film, media production, communication, or a related field are common.',
      'A strong showreel and evidence of completed projects can support entry without a specific degree.',
      'No statutory licence is required for most editing work.',
    ],
    skills: ['Editing software', 'Story structure', 'Sound awareness', 'File management', 'Deadline discipline'],
    practical: [
      'Edit complete pieces rather than only short highlights.',
      'Learn basic sound mixing, colour, and graphics workflows.',
      'Keep project files and backups organised for client revisions.',
    ],
    licensing: ['No professional licence is generally required.'],
    entryRoutes: [
      'Film or media degree followed by assistant editor work.',
      'Freelance or online media portfolio leading to production roles.',
      'Adjacent animation, camera, or content role with editing upskilling.',
    ],
    alternatives: ['Animator', 'Filmmaker', 'Content Creator', 'Sound Designer'],
    sources: [],
  }),
  roadmap({
    id: 'photographer',
    title: 'Photographer',
    categoryId: 'creative',
    intro:
      'Photographers create images for news, portraits, products, events, advertising, science, or personal expression. Technical control, visual judgement, and client communication all matter.',
    duration: 'Highly variable. Formal study may take 1–4 years, but portfolio quality and professional experience are central.',
    stages: [
      stage(
        'Learn to see and handle a camera',
        'Study light, composition, exposure, and basic editing. Practise consistently with a camera you can access, including a phone where appropriate.',
        'School years',
        ['Composition', 'Light', 'Basic editing'],
      ),
      stage(
        'Complete school and consider formal study',
        'Any stream can lead to photography. A degree or diploma in photography, visual arts, media, or communication can provide structure and critique, but is not mandatory.',
        'Class 12 onward',
        ['Visual arts or media', 'Portfolio practice', 'Business basics'],
      ),
      stage(
        'Build a coherent body of work',
        'Choose subjects or genres you can photograph repeatedly. Edit a focused portfolio that shows technical control, point of view, and consistency rather than unrelated snapshots.',
        'Months to years',
        ['Portfolio', 'Series', 'Editing'],
      ),
      stage(
        'Gain professional and client experience',
        'Assist established photographers, take assignments, and learn pricing, contracts, permissions, backups, and delivery. News and documentary work may require separate editorial judgement.',
        'During early career',
        ['Assisting', 'Client work', 'Rights and releases'],
      ),
      stage(
        'Specialise and build a sustainable practice',
        'Develop a niche such as editorial, product, portrait, architecture, sports, or documentary. Income may combine assignments, licensing, teaching, and personal projects.',
        'Ongoing',
        ['Specialisation', 'Marketing', 'Licensing'],
      ),
    ],
    subjects: ['Art', 'Media studies', 'English', 'Business', 'Visual communication'],
    exams: [
      exam('No single mandatory entrance examination', 'Formal photography programmes use portfolios, interviews, or institutional admissions where applicable.'),
    ],
    qualifications: [
      'No specific degree or licence is required for most photography work.',
      'Formal study in photography, visual arts, or media can help but is not mandatory.',
      'Portfolio, professional conduct, and practical business skills are central.',
    ],
    skills: ['Exposure and lighting', 'Composition', 'Editing', 'Client communication', 'Rights awareness'],
    practical: [
      'Build a focused portfolio with a clear point of view.',
      'Learn contracts, model releases, invoicing, and backup workflows.',
      'Assist or second-shoot before taking on high-stakes assignments alone.',
    ],
    licensing: ['No general professional licence. Drone, event, or location work may require permits or specific approvals.'],
    entryRoutes: [
      'Formal photography or visual arts study followed by assisting.',
      'Self-directed portfolio and client work, supported by business skills.',
      'Adjacent media, design, or lab role moving into photography.',
    ],
    alternatives: ['Video Editor', 'Graphic Designer', 'Photojournalist', 'Content Creator'],
    sources: [],
  }),
  roadmap({
    id: 'architect',
    title: 'Architect',
    categoryId: 'creative',
    intro:
      'Architects design buildings and spaces that respond to people, safety, climate, budget, and regulation. The profession combines design, technical knowledge, and coordination across disciplines.',
    duration: 'A five-year B.Arch after Class 12 is the common route, followed by internship and registration with the Council of Architecture.',
    stages: [
      stage(
        'Build drawing, mathematics, and spatial awareness',
        'Practise sketching, model making, mathematics, and observation of buildings and public spaces. Develop curiosity about how structures and environments are used.',
        'Class 10 onward',
        ['Mathematics', 'Drawing', 'Spatial thinking'],
      ),
      stage(
        'Complete Class 11–12',
        'Mathematics is commonly required for B.Arch admission. Check current subject and eligibility rules for the institutions you target.',
        '2 years',
        ['Mathematics', 'Physics', 'Art or design'],
      ),
      stage(
        'Qualify for and complete B.Arch',
        'Admission commonly uses NATA or JEE (Main) Paper 2, depending on the institution. B.Arch is normally a five-year programme with design studios and technical coursework.',
        '5 years',
        ['NATA or JEE Paper 2', 'Design studio', 'Building technology'],
      ),
      stage(
        'Complete practical training and registration',
        'Complete the internship or practical training required by the Council of Architecture and apply for registration. Confirm current registration and examination requirements.',
        'As prescribed',
        ['Internship', 'Registration', 'Professional conduct'],
      ),
      stage(
        'Practise and develop a design focus',
        'Work in an architecture firm, public agency, or independent practice. Architects can specialise in housing, conservation, urban design, interiors, sustainability, or project leadership.',
        'Long-term professional development',
        ['Practice', 'Specialisation', 'Project leadership'],
      ),
    ],
    subjects: ['Mathematics', 'Physics', 'Art', 'Design', 'Building technology'],
    exams: [
      exam('NATA', 'National Aptitude Test in Architecture, used for B.Arch admission by participating institutions.', SOURCES.nata),
      exam('JEE (Main) Paper 2', 'Used for B.Arch admission at participating institutions; check current requirements.', SOURCES.jeeMain),
    ],
    qualifications: [
      'Class 12 with the subject requirements applicable to B.Arch admission.',
      'A five-year B.Arch from a recognised institution.',
      'Practical training and registration with the Council of Architecture.',
    ],
    skills: ['Design thinking', 'Drawing and modelling', 'Building technology', 'Regulations', 'Coordination'],
    practical: [
      'Use design studios to test ideas through drawings and physical models.',
      'Complete professional training under a registered architect.',
      'Study local building codes, accessibility, climate, and safety requirements.',
    ],
    licensing: ['Registration with the Council of Architecture is required to use the title “architect” and to provide architectural services in the regulated sense.'],
    entryRoutes: [
      'B.Arch through NATA or JEE Paper 2 followed by training and registration.',
      'Architectural practice after registration in a firm or independent setup.',
      'Specialisation through postgraduate study in urban design, conservation, or related fields.',
    ],
    alternatives: ['Civil Engineer', 'Urban Planner', 'Interior Designer', 'Landscape Architect'],
    sources: [SOURCES.coa, SOURCES.nata, SOURCES.jeeMain],
    note: 'The title and practice of architect are regulated. Verify B.Arch recognition, training, and registration rules with the Council of Architecture.',
  }),
]
