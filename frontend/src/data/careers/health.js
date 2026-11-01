import { career } from './shared'

export const healthCareers = [
  career(
    'doctor',
    'Doctor',
    'health',
    'Diagnose and treat health conditions while supporting patients through prevention, care, and recovery.',
    ['medicine', 'mbbs', 'patient care', 'clinical practice'],
    {
      overview:
        'Doctors assess symptoms, order or interpret investigations, make diagnoses, and plan treatment. The role combines scientific knowledge with communication, ethics, and continuous learning.',
      skills: ['Clinical reasoning', 'Patient communication', 'Ethics', 'Resilience'],
      stages: ['Class 10', 'Intermediate (BiPC)', 'Medical degree and required training', 'Doctor'],
      dayToDay: [
        'Review patient histories and examine symptoms',
        'Interpret investigations and plan care',
        'Explain treatment options and follow-up',
      ],
      relatedIds: ['nurse', 'pharmacist', 'public-health-specialist'],
    },
  ),
  career(
    'nurse',
    'Nurse',
    'health',
    'Provide direct patient care, monitor health, and coordinate support across care settings.',
    ['nursing', 'patient care', 'healthcare', 'clinical support'],
    {
      overview:
        'Nurses observe patients, administer care, educate families, and coordinate with medical teams. Their work is central to safe and compassionate healthcare.',
      skills: ['Patient care', 'Observation', 'Communication', 'Teamwork'],
      dayToDay: [
        'Assess and monitor patients',
        'Support treatment and recovery routines',
        'Coordinate with doctors and families',
      ],
      relatedIds: ['doctor', 'paramedic', 'hospital-administrator'],
    },
  ),
  career(
    'pharmacist',
    'Pharmacist',
    'health',
    'Prepare and dispense medicines while helping people use them safely and correctly.',
    ['pharmacy', 'medicines', 'dispensing', 'pharmacology'],
    {
      overview:
        'Pharmacists connect medicines with safe use. They review prescriptions, explain dosage and precautions, and support informed treatment decisions.',
      skills: ['Pharmacology', 'Accuracy', 'Patient counselling', 'Record keeping'],
      dayToDay: [
        'Review and dispense prescriptions',
        'Explain medicine use and precautions',
        'Track stock, records, and safety concerns',
      ],
      relatedIds: ['doctor', 'medical-lab-technologist', 'public-health-specialist'],
    },
  ),
  career(
    'physiotherapist',
    'Physiotherapist',
    'health',
    'Help people improve movement, manage pain, and recover physical function.',
    ['physiotherapy', 'rehabilitation', 'movement', 'therapy'],
    {
      overview:
        'Physiotherapists assess movement and design exercise-based plans for recovery, mobility, and pain management. Progress is often measured over repeated sessions.',
      skills: ['Movement assessment', 'Rehabilitation planning', 'Patient motivation', 'Observation'],
      dayToDay: [
        'Assess movement and physical limitations',
        'Guide therapeutic exercises',
        'Review progress and adjust care plans',
      ],
      relatedIds: ['occupational-therapist', 'doctor', 'dietitian'],
    },
  ),
  career(
    'dentist',
    'Dentist',
    'health',
    'Maintain oral health through examination, preventive advice, and dental treatment.',
    ['dental', 'oral health', 'dentistry', 'teeth'],
    {
      overview:
        'Dentists diagnose oral health conditions and provide preventive and restorative care. Precision, patient comfort, and infection control are essential.',
      skills: ['Clinical precision', 'Patient care', 'Infection control', 'Manual dexterity'],
      dayToDay: [
        'Examine teeth and oral health',
        'Provide preventive guidance and treatment',
        'Maintain careful clinical records',
      ],
      relatedIds: ['doctor', 'medical-lab-technologist', 'physiotherapist'],
    },
  ),
  career(
    'veterinarian',
    'Veterinarian',
    'health',
    'Protect animal health and welfare through diagnosis, treatment, and preventive care.',
    ['veterinary', 'animal care', 'animal health'],
    {
      overview:
        'Veterinarians care for animals across clinics, farms, shelters, and public health settings. They combine clinical skills with observation and animal handling.',
      skills: ['Animal handling', 'Clinical observation', 'Communication', 'Ethics'],
      dayToDay: [
        'Examine and assess animals',
        'Plan treatment and preventive care',
        'Advise owners or caretakers',
      ],
      relatedIds: ['doctor', 'wildlife-conservationist', 'agricultural-scientist'],
    },
  ),
  career(
    'medical-lab-technologist',
    'Medical Laboratory Technologist',
    'health',
    'Perform laboratory tests that support diagnosis, treatment, and health monitoring.',
    ['lab technician', 'diagnostics', 'pathology', 'laboratory'],
    {
      overview:
        'Medical laboratory technologists prepare samples and run diagnostic tests with accuracy. They maintain equipment, follow safety procedures, and record results carefully.',
      skills: ['Laboratory technique', 'Accuracy', 'Quality control', 'Safety'],
      dayToDay: [
        'Prepare and analyse samples',
        'Operate and maintain laboratory equipment',
        'Record results and flag quality issues',
      ],
      relatedIds: ['pharmacist', 'doctor', 'radiographer'],
    },
  ),
  career(
    'radiographer',
    'Radiographer',
    'health',
    'Use imaging equipment to produce images that support diagnosis and treatment.',
    ['x ray', 'mri', 'ct scan', 'medical imaging'],
    {
      overview:
        'Radiographers position patients and operate imaging equipment safely. They must balance image quality with radiation safety and patient comfort.',
      skills: ['Imaging equipment', 'Patient positioning', 'Radiation safety', 'Attention to detail'],
      dayToDay: [
        'Prepare patients for imaging procedures',
        'Operate imaging equipment safely',
        'Check image quality and maintain records',
      ],
      relatedIds: ['medical-lab-technologist', 'doctor', 'physiotherapist'],
    },
  ),
  career(
    'dietitian',
    'Dietitian',
    'health',
    'Translate nutrition science into practical food and lifestyle guidance for individuals and groups.',
    ['nutrition', 'diet', 'food science', 'wellness'],
    {
      overview:
        'Dietitians assess nutritional needs and create realistic plans for health, recovery, or performance. They adapt advice to medical, cultural, and personal circumstances.',
      skills: ['Nutrition science', 'Assessment', 'Counselling', 'Practical planning'],
      dayToDay: [
        'Assess dietary needs and health context',
        'Create and review nutrition plans',
        'Educate individuals or community groups',
      ],
      relatedIds: ['public-health-specialist', 'physiotherapist', 'food-technologist'],
    },
  ),
  career(
    'psychologist',
    'Psychologist',
    'health',
    'Study behaviour and mental processes and apply psychological principles to support wellbeing.',
    ['psychology', 'mental health', 'counselling', 'behaviour'],
    {
      overview:
        'Psychologists use structured assessment and evidence-informed approaches to understand behaviour and support people. The scope of practice depends on qualifications and local rules.',
      skills: ['Listening', 'Assessment', 'Ethics', 'Research literacy'],
      dayToDay: [
        'Conduct assessments and structured conversations',
        'Plan support using appropriate methods',
        'Maintain confidential records and boundaries',
      ],
      relatedIds: ['rehabilitation-counselor', 'career-counselor', 'doctor'],
    },
  ),
  career(
    'optometrist',
    'Optometrist',
    'health',
    'Examine vision, detect eye-related problems, and provide appropriate corrective care.',
    ['eye care', 'vision', 'optometry', 'optical'],
    {
      overview:
        'Optometrists assess visual function and eye health, prescribe corrective lenses where appropriate, and refer more complex conditions for specialist care.',
      skills: ['Vision assessment', 'Patient communication', 'Precision', 'Clinical observation'],
      dayToDay: [
        'Perform vision and eye health assessments',
        'Recommend corrective options',
        'Refer concerns that need specialist review',
      ],
      relatedIds: ['doctor', 'radiographer', 'physiotherapist'],
    },
  ),
  career(
    'occupational-therapist',
    'Occupational Therapist',
    'health',
    'Help people participate in daily activities after injury, illness, or developmental challenges.',
    ['occupational therapy', 'rehabilitation', 'daily living', 'therapy'],
    {
      overview:
        'Occupational therapists focus on practical participation in daily life. They adapt activities, environments, and routines to support independence.',
      skills: ['Activity analysis', 'Adaptation', 'Empathy', 'Collaboration'],
      dayToDay: [
        'Assess daily activity challenges',
        'Design adapted routines or environments',
        'Review progress with clients and families',
      ],
      relatedIds: ['physiotherapist', 'speech-language-pathologist', 'rehabilitation-counselor'],
    },
  ),
  career(
    'paramedic',
    'Paramedic',
    'health',
    'Provide urgent care and stabilisation in emergencies and during transport to hospital.',
    ['emergency care', 'ambulance', 'first response', 'critical care'],
    {
      overview:
        'Paramedics assess urgent situations and deliver time-sensitive care. They work under pressure, follow protocols, and communicate clearly with receiving teams.',
      skills: ['Emergency assessment', 'Calm decision making', 'Teamwork', 'Physical readiness'],
      dayToDay: [
        'Respond to emergency calls',
        'Assess and stabilise patients',
        'Hand over clear information at hospital',
      ],
      relatedIds: ['nurse', 'firefighter', 'doctor'],
    },
  ),
  career(
    'public-health-specialist',
    'Public Health Specialist',
    'health',
    'Plan and evaluate programmes that improve health across communities and populations.',
    ['public health', 'epidemiology', 'community health', 'health policy'],
    {
      overview:
        'Public health specialists study patterns of health and design prevention-focused responses. They work with data, communities, and institutions rather than only individual patients.',
      skills: ['Epidemiology', 'Data interpretation', 'Programme planning', 'Communication'],
      dayToDay: [
        'Review health data and community needs',
        'Plan or evaluate prevention programmes',
        'Coordinate with health and civic partners',
      ],
      relatedIds: ['community-health-worker', 'doctor', 'policy-analyst'],
    },
  ),
  career(
    'audiologist',
    'Audiologist',
    'health',
    'Assess hearing and balance and support people with hearing-related communication needs.',
    ['hearing', 'audiology', 'speech', 'ear care'],
    {
      overview:
        'Audiologists test hearing, interpret results, and recommend support such as assistive technology or rehabilitation. Clear communication with patients and families is central.',
      skills: ['Hearing assessment', 'Patient counselling', 'Technical precision', 'Record keeping'],
      dayToDay: [
        'Conduct hearing and balance assessments',
        'Explain results and support options',
        'Review progress and device fit',
      ],
      relatedIds: ['speech-language-pathologist', 'doctor', 'occupational-therapist'],
    },
  ),
  career(
    'speech-language-pathologist',
    'Speech-Language Pathologist',
    'health',
    'Support communication, speech, language, and swallowing needs across different ages.',
    ['speech therapy', 'language', 'communication', 'rehabilitation'],
    {
      overview:
        'Speech-language pathologists assess communication difficulties and plan therapy that fits each person’s needs. Work may take place in clinics, schools, hospitals, or homes.',
      skills: ['Assessment', 'Therapy planning', 'Patience', 'Family collaboration'],
      dayToDay: [
        'Assess speech, language, or swallowing needs',
        'Deliver structured therapy activities',
        'Guide families and track progress',
      ],
      relatedIds: ['audiologist', 'occupational-therapist', 'special-education-teacher'],
    },
  ),
  career(
    'hospital-administrator',
    'Hospital Administrator',
    'health',
    'Coordinate people, facilities, and processes so healthcare services run safely and efficiently.',
    ['health administration', 'hospital management', 'operations'],
    {
      overview:
        'Hospital administrators manage operational systems rather than direct clinical care. They balance patient needs, staff capacity, quality, compliance, and resources.',
      skills: ['Operations management', 'Communication', 'Planning', 'Quality awareness'],
      dayToDay: [
        'Coordinate departments and service capacity',
        'Review quality, staffing, and supply issues',
        'Plan improvements with clinical teams',
      ],
      relatedIds: ['public-health-specialist', 'nurse', 'operations-manager'],
    },
  ),
]
