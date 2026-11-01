import { SOURCES, exam, roadmap, stage } from './shared'

export const healthRoadmaps = [
  roadmap({
    id: 'doctor',
    title: 'Doctor',
    categoryId: 'health',
    intro:
      'Doctors diagnose health conditions, provide treatment, and support prevention and rehabilitation. The medical route is regulated and includes supervised clinical training before independent practice.',
    duration: 'Typically about 5.5 years for MBBS including internship after Class 12; postgraduate specialisation usually takes additional years.',
    stages: [
      stage(
        'Build science and communication foundations',
        'Focus on biology, chemistry, physics, and mathematics at school. Communication, ethics, and careful observation matter alongside marks.',
        'Class 10',
        ['Science', 'Mathematics', 'Communication'],
      ),
      stage(
        'Study Biology, Physics, and Chemistry',
        'BiPC in Class 11–12 is the standard school route for medical admission. Check the current subject requirements before choosing your stream.',
        '2 years',
        ['BiPC', 'Biology', 'Chemistry'],
      ),
      stage(
        'Qualify for and complete MBBS',
        'Clear NEET (UG) for admission to recognised MBBS programmes, then complete the academic and clinical curriculum. Admission and college recognition rules can change.',
        'NEET plus about 4.5 academic years',
        ['NEET (UG)', 'MBBS', 'Clinical subjects'],
      ),
      stage(
        'Complete internship and register',
        'Finish the compulsory rotating internship and apply for registration with the applicable medical council. Confirm current registration requirements with the NMC and state council.',
        'Typically 12 months',
        ['Internship', 'Registration', 'Clinical responsibility'],
      ),
      stage(
        'Practise, specialise, or enter public health',
        'Work in a regulated clinical setting while considering postgraduate specialisation, research, public health, or hospital leadership. Each route has its own selection process.',
        'After registration',
        ['Practice', 'Postgraduate study', 'Specialisation'],
      ),
    ],
    subjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Ethics'],
    exams: [
      exam('NEET (UG)', 'National entrance test for MBBS and several other health programmes; eligibility and counselling rules must be checked each year.', SOURCES.neet),
    ],
    qualifications: [
      'Class 12 with Biology, Physics, and Chemistry, subject to current NMC and admission requirements.',
      'MBBS from a recognised institution.',
      'Completion of internship and registration with the applicable medical council.',
    ],
    skills: ['Clinical reasoning', 'Communication', 'Empathy', 'Ethics', 'Teamwork under pressure'],
    practical: [
      'Supervised clinical rotations and internship are central, not optional extras.',
      'Learn to take histories, explain uncertainty, and document decisions accurately.',
      'Check recognition status of institutions and current licensing rules before applying.',
    ],
    licensing: [
      'Registration with the National Medical Commission or the applicable state medical council is required to practise modern medicine.',
    ],
    entryRoutes: [
      'NEET (UG) followed by MBBS at a recognised institution.',
      'Postgraduate medical entrance and specialisation after MBBS and registration.',
      'Public health or research routes after medical qualification.',
    ],
    alternatives: ['Dentist', 'Nurse', 'Physiotherapist', 'Pharmacist', 'Biomedical Scientist'],
    sources: [SOURCES.neet, SOURCES.nmc],
    note: 'This is a high-stakes regulated pathway. Verify current eligibility, institution recognition, counselling rules, and registration requirements directly with official bodies.',
  }),
  roadmap({
    id: 'dentist',
    title: 'Dentist',
    categoryId: 'health',
    intro:
      'Dentists diagnose and treat problems affecting teeth, gums, and the mouth. Their work combines clinical care, prevention, precision, and patient communication.',
    duration: 'Typically about 5 years for BDS including internship after Class 12, followed by registration.',
    stages: [
      stage(
        'Build science foundations',
        'Study Biology, Chemistry, and Physics in school and develop careful hand skills and communication.',
        'Class 10',
        ['Science', 'Biology', 'Manual dexterity'],
      ),
      stage(
        'Complete Class 11–12 with BiPC',
        'Biology, Physics, and Chemistry are normally required for dental admission. Check current subject rules before choosing subjects.',
        '2 years',
        ['BiPC', 'Biology', 'Chemistry'],
      ),
      stage(
        'Qualify for and complete BDS',
        'Clear NEET (UG) for admission to a recognised Bachelor of Dental Surgery programme, then complete the academic and clinical curriculum.',
        'NEET plus about 4 years',
        ['NEET (UG)', 'BDS', 'Clinical training'],
      ),
      stage(
        'Complete internship and registration',
        'Finish the compulsory internship and register with the applicable dental council or commission. Confirm the current regulatory body and process.',
        'Typically 12 months',
        ['Internship', 'Registration', 'Clinical practice'],
      ),
      stage(
        'Practise or specialise',
        'Work in a clinic, hospital, or community setting. Postgraduate dental programmes can lead to orthodontics, oral surgery, and other specialties.',
        'After registration',
        ['Practice', 'Postgraduate study', 'Specialisation'],
      ),
    ],
    subjects: ['Biology', 'Chemistry', 'Physics', 'Materials science'],
    exams: [
      exam('NEET (UG)', 'Entrance route for BDS and other health programmes; verify current eligibility and counselling rules.', SOURCES.neet),
    ],
    qualifications: [
      'Class 12 with Biology, Physics, and Chemistry subject to current rules.',
      'BDS from a recognised institution.',
      'Internship and registration with the applicable dental authority.',
    ],
    skills: ['Clinical precision', 'Patient communication', 'Infection control', 'Diagnosis', 'Manual dexterity'],
    practical: [
      'Complete supervised clinical work and internship requirements.',
      'Practise infection control and accurate record keeping.',
      'Learn how to explain prevention and treatment options clearly.',
    ],
    licensing: ['Registration with the applicable dental council or commission is required to practise.'],
    entryRoutes: [
      'NEET (UG) followed by BDS at a recognised institution.',
      'Postgraduate dental study after BDS for specialisation.',
      'Community dentistry, hospital, or clinical practice routes.',
    ],
    alternatives: ['Doctor', 'Dental Hygienist', 'Pharmacist', 'Physiotherapist'],
    sources: [SOURCES.neet, SOURCES.dentalCouncil],
  }),
  roadmap({
    id: 'pharmacist',
    title: 'Pharmacist',
    categoryId: 'health',
    intro:
      'Pharmacists prepare, dispense, and review medicines, advise on their safe use, and help prevent medication errors. The role combines scientific knowledge with careful procedure and communication.',
    duration: 'D.Pharm is commonly 2 years; B.Pharm is commonly 4 years, with practical training and registration requirements.',
    stages: [
      stage(
        'Build chemistry and biology foundations',
        'Study science subjects and pay attention to measurement, accuracy, and patient safety.',
        'Class 10',
        ['Science', 'Chemistry', 'Mathematics'],
      ),
      stage(
        'Complete Class 11–12 science',
        'BiPC or MPC can lead to pharmacy programmes depending on the institution and course. Check current eligibility for D.Pharm and B.Pharm.',
        '2 years',
        ['BiPC or MPC', 'Chemistry', 'Biology or Mathematics'],
      ),
      stage(
        'Complete a pharmacy programme',
        'D.Pharm is a shorter route; B.Pharm offers broader scientific and career depth. Admission may use state entrance tests, university rules, or other criteria.',
        '2 years for D.Pharm; about 4 years for B.Pharm',
        ['D.Pharm or B.Pharm', 'Pharmacology', 'Pharmaceutics'],
      ),
      stage(
        'Complete practical training and registration',
        'Fulfil the practical training required by the programme and register with the Pharmacy Council of India or the applicable state council.',
        'As required by the programme',
        ['Practical training', 'Registration', 'Pharmacy law'],
      ),
      stage(
        'Enter pharmacy practice or industry',
        'Work in community or hospital pharmacy, regulatory affairs, quality control, clinical research, or pharmaceutical manufacturing. Some roles require further study.',
        'After registration or graduation',
        ['Community pharmacy', 'Hospital', 'Industry'],
      ),
    ],
    subjects: ['Chemistry', 'Biology', 'Physics', 'Mathematics', 'Pharmacology'],
    exams: [
      exam('State or university pharmacy admissions', 'Admission routes differ by state and institution; check whether a particular entrance test applies.'),
    ],
    qualifications: [
      'D.Pharm or B.Pharm from a recognised institution, depending on the role.',
      'Practical training and registration where required.',
      'Postgraduate study may be needed for advanced research or specialist roles.',
    ],
    skills: ['Pharmacology', 'Attention to detail', 'Patient counselling', 'Record keeping', 'Ethics'],
    practical: [
      'Practise dispensing calculations and prescription review under supervision.',
      'Learn to communicate side effects, interactions, and adherence clearly.',
      'Understand the limits of your role and when to refer a patient to a doctor.',
    ],
    licensing: ['Registration with the Pharmacy Council of India or the applicable state pharmacy council is required for pharmacy practice.'],
    entryRoutes: [
      'D.Pharm followed by registration for community or hospital pharmacy.',
      'B.Pharm for broader industry, research, and postgraduate options.',
      'Pharmacy graduate routes into regulatory affairs or quality assurance.',
    ],
    alternatives: ['Doctor', 'Nurse', 'Biomedical Scientist', 'Clinical Research Associate'],
    sources: [SOURCES.pharmacyCouncil],
  }),
  roadmap({
    id: 'nurse',
    title: 'Nurse',
    categoryId: 'health',
    intro:
      'Nurses provide direct patient care, monitor health, support treatment, and coordinate with healthcare teams. They combine clinical skill, observation, empathy, and clear communication.',
    duration: 'B.Sc. Nursing is commonly 4 years; GNM is commonly 3 years, with registration after the recognised programme.',
    stages: [
      stage(
        'Build science and care foundations',
        'Study biology, chemistry, and communication. Develop the habit of careful observation and respectful patient interaction.',
        'Class 10',
        ['Science', 'Communication', 'Empathy'],
      ),
      stage(
        'Complete Class 11–12 with science',
        'BiPC is common for nursing programmes. Admission rules differ by course, state, and institution; some routes use entrance tests.',
        '2 years',
        ['BiPC', 'Biology', 'Chemistry'],
      ),
      stage(
        'Complete a recognised nursing programme',
        'B.Sc. Nursing, GNM, and ANM are different routes with different scope and duration. Choose a recognised programme and check current admission requirements.',
        '2–4 years depending on course',
        ['B.Sc. Nursing or GNM', 'Clinical practice', 'Anatomy'],
      ),
      stage(
        'Complete supervised clinical training',
        'Clinical placements are part of the programme. Learn patient monitoring, infection control, medication safety, documentation, and team handover.',
        'Within the programme',
        ['Clinical rotations', 'Patient safety', 'Documentation'],
      ),
      stage(
        'Register and enter practice',
        'Register with the applicable nursing council and work in a hospital, community, or specialist setting. Further study can lead to teaching, administration, or advanced practice.',
        'After programme completion',
        ['Registration', 'Hospital or community', 'Advanced study'],
      ),
    ],
    subjects: ['Biology', 'Chemistry', 'Psychology', 'Nutrition', 'Public health'],
    exams: [
      exam('Nursing entrance tests or state admissions', 'Requirements vary by course and state; some programmes use NEET or institutional entrance tests.'),
    ],
    qualifications: [
      'B.Sc. Nursing, GNM, or ANM from a recognised institution, depending on the role.',
      'Supervised clinical training as required by the programme.',
      'Registration with the applicable nursing council.',
    ],
    skills: ['Patient care', 'Clinical observation', 'Infection control', 'Communication', 'Teamwork'],
    practical: [
      'Complete clinical rotations with direct supervision.',
      'Practise medication safety, handover, and incident reporting.',
      'Learn how to support patients and families during difficult decisions.',
    ],
    licensing: ['Registration with the Indian Nursing Council or the applicable state nursing council is required for practice.'],
    entryRoutes: [
      'B.Sc. Nursing followed by registration and hospital or community roles.',
      'GNM or ANM route with the scope defined by the qualification and council rules.',
      'Postgraduate nursing for teaching, administration, or advanced practice.',
    ],
    alternatives: ['Doctor', 'Physiotherapist', 'Public Health Specialist', 'Paramedic'],
    sources: [SOURCES.nursingCouncil, SOURCES.neet],
  }),
  roadmap({
    id: 'physiotherapist',
    title: 'Physiotherapist',
    categoryId: 'health',
    intro:
      'Physiotherapists help people recover movement, manage pain, and improve physical function after injury, illness, or disability. Their work combines assessment, exercise, manual therapy, and patient education.',
    duration: 'BPT is commonly about 4.5 years including internship after Class 12.',
    stages: [
      stage(
        'Build biology and movement foundations',
        'Study science and develop an interest in anatomy, movement, exercise, and rehabilitation. Communication and patience are important.',
        'Class 10',
        ['Science', 'Anatomy basics', 'Communication'],
      ),
      stage(
        'Complete Class 11–12 with science',
        'BiPC is common for physiotherapy programmes. Check current subject and admission requirements for each course.',
        '2 years',
        ['BiPC', 'Biology', 'Physics'],
      ),
      stage(
        'Complete a recognised physiotherapy degree',
        'BPT includes anatomy, physiology, biomechanics, exercise therapy, and supervised clinical practice. Admission may use state or institutional entrance processes.',
        'About 4 years',
        ['BPT', 'Biomechanics', 'Exercise therapy'],
      ),
      stage(
        'Complete clinical internship',
        'Practise assessment and treatment under supervision in orthopaedics, neurology, cardiopulmonary, and community settings. Learn safe progression and clear patient education.',
        'Typically 6 months',
        ['Internship', 'Assessment', 'Rehabilitation'],
      ),
      stage(
        'Register and enter practice',
        'Register with the applicable state council where required and work in hospitals, clinics, sports settings, or community rehabilitation. Postgraduate study can deepen a specialty.',
        'After internship',
        ['Practice', 'Specialisation', 'Community care'],
      ),
    ],
    subjects: ['Biology', 'Physics', 'Anatomy', 'Physiology', 'Biomechanics'],
    exams: [
      exam('State or university physiotherapy admissions', 'Admission processes vary; some states use common entrance tests while others use institutional criteria.'),
    ],
    qualifications: [
      'BPT from a recognised institution, including the required clinical internship.',
      'State council registration where required by the practising jurisdiction.',
      'Postgraduate study for advanced clinical or research roles.',
    ],
    skills: ['Assessment', 'Anatomy and biomechanics', 'Exercise prescription', 'Patient education', 'Empathy'],
    practical: [
      'Complete supervised clinical placements across different conditions.',
      'Practise safe exercise progression and outcome measurement.',
      'Learn when to refer patients for medical review.',
    ],
    licensing: ['Registration requirements vary by state; check the applicable council and jurisdiction before practising.'],
    entryRoutes: [
      'BPT followed by clinical practice and registration where required.',
      'Postgraduate physiotherapy for specialist practice.',
      'Sports science or rehabilitation roles with additional clinical qualification.',
    ],
    alternatives: ['Doctor', 'Nurse', 'Occupational Therapist', 'Sports Scientist'],
    sources: [SOURCES.rehabilitationCouncil],
  }),
  roadmap({
    id: 'psychologist',
    title: 'Psychologist',
    categoryId: 'health',
    intro:
      'Psychologists study behaviour, emotion, and mental processes and apply that knowledge in counselling, assessment, research, or organisational settings. Clinical practice is regulated separately from general psychology study.',
    duration: 'A bachelor’s degree commonly takes 3–4 years; professional practice or specialisation usually requires postgraduate study and supervised training.',
    stages: [
      stage(
        'Build observation and communication skills',
        'Study psychology, biology, and social science where available. Learn to listen carefully, respect confidentiality, and separate observation from assumption.',
        'Class 10 onward',
        ['Psychology', 'Communication', 'Ethics'],
      ),
      stage(
        'Complete a relevant bachelor’s degree',
        'Psychology is the most direct base, but related social science or health degrees can sometimes lead to postgraduate psychology study. Check programme prerequisites.',
        '3–4 years',
        ['BA or BSc Psychology', 'Research methods', 'Statistics'],
      ),
      stage(
        'Choose a postgraduate and applied pathway',
        'Counselling, clinical, educational, organisational, and research pathways differ. Clinical psychology practice requires an approved qualification and supervised training.',
        '2 years or more',
        ['MA or MSc', 'Specialisation', 'Supervision'],
      ),
      stage(
        'Complete supervised practice or research training',
        'Develop competence under qualified supervision. For clinical roles, verify the current Rehabilitation Council of India recognition and licensing requirements.',
        'Varies by pathway',
        ['Supervision', 'Assessment', 'Professional ethics'],
      ),
      stage(
        'Enter practice, research, or organisations',
        'Work within your competence and legal scope. Roles can include counselling, psychological assessment, research, human resources, education, or community mental health.',
        'After required qualification',
        ['Practice', 'Research', 'Specialisation'],
      ),
    ],
    subjects: ['Psychology', 'Biology', 'Statistics', 'Sociology', 'Research methods'],
    exams: [
      exam('University postgraduate admissions', 'Psychology master’s and professional programmes use different entrance and interview processes.'),
      exam('UGC NET', 'Relevant for some research, lectureship, or doctoral routes; check current eligibility.', SOURCES.ugcNet),
    ],
    qualifications: [
      'Bachelor’s degree in psychology or a related field, depending on the postgraduate programme.',
      'Postgraduate qualification for most professional psychology roles.',
      'Approved clinical qualification and supervised training for clinical psychologist practice.',
    ],
    skills: ['Active listening', 'Assessment', 'Research literacy', 'Ethics', 'Boundary management'],
    practical: [
      'Complete supervised training before offering psychological services independently.',
      'Study confidentiality, informed consent, and referral obligations.',
      'Use validated tools and avoid making diagnoses outside your competence.',
    ],
    licensing: ['Clinical psychology practice is regulated. Verify current Rehabilitation Council of India requirements and the scope of your qualification.'],
    entryRoutes: [
      'BA/BSc Psychology followed by a master’s in a chosen specialty.',
      'Approved clinical psychology qualification and supervised practice.',
      'Research route through M.Phil., PhD, or other approved training depending on the role.',
    ],
    alternatives: ['Counselling Psychologist', 'School Counsellor', 'Social Worker', 'Human Resources Specialist'],
    sources: [SOURCES.rehabilitationCouncil, SOURCES.ugcNet],
    note: '“Psychologist”, “counsellor”, and “therapist” are not interchangeable titles in regulation or practice. Check the qualification required for the specific role.',
  }),
]
