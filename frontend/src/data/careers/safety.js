import { career } from './shared'

export const safetyCareers = [
  career(
    'police-officer',
    'Police Officer',
    'safety',
    'Protect public safety, respond to incidents, and support law enforcement within a police service.',
    ['police', 'law enforcement', 'public safety', 'patrol'],
    {
      overview:
        'Police officers respond to incidents, maintain public order, support investigations, and serve local communities. The role requires judgement, communication, and composure under pressure.',
      skills: ['Situational awareness', 'Communication', 'Integrity', 'Physical readiness'],
      stages: ['Class 10', 'Intermediate', 'Recruitment process', 'Police training and service'],
      dayToDay: [
        'Respond to complaints and incidents',
        'Record information and support investigations',
        'Coordinate with the public and other agencies',
      ],
      relatedIds: ['police-constable', 'ips-officer', 'cybercrime-investigator'],
    },
  ),
  career(
    'sub-inspector-of-police',
    'Sub-Inspector of Police',
    'safety',
    'Supervise policing teams, investigate offences, and manage station or field-level law enforcement duties.',
    ['sub inspector', 'si', 'state police', 'investigation', 'law enforcement'],
    {
      overview:
        'Sub-inspectors supervise constables and lead core policing work such as investigations, law-and-order duties, records, and public assistance. Recruitment is conducted by state governments or police boards and varies by state.',
      skills: ['Investigation', 'Team supervision', 'Law and procedure', 'Public communication'],
      stages: [
        'Class 10',
        'Intermediate and/or bachelor’s degree',
        'State police recruitment',
        'Training and service',
      ],
      dayToDay: [
        'Supervise station and field policing duties',
        'Investigate complaints and prepare records',
        'Coordinate law-and-order responses and public support',
      ],
      relatedIds: ['police-officer', 'police-constable', 'ips-officer'],
    },
  ),
  career(
    'police-constable',
    'Police Constable',
    'safety',
    'Carry out frontline policing duties under the direction of police supervisors.',
    ['constable', 'police recruitment', 'patrol', 'law enforcement'],
    {
      overview:
        'Police constables perform patrol, public assistance, traffic, and station duties. They are often the first point of contact between citizens and the police system.',
      skills: ['Observation', 'Public dealing', 'Discipline', 'Report writing'],
      dayToDay: [
        'Patrol assigned areas and respond to calls',
        'Assist investigations and public requests',
        'Prepare basic records and reports',
      ],
      relatedIds: ['police-officer', 'firefighter', 'border-security-force-officer'],
    },
  ),
  career(
    'firefighter',
    'Firefighter',
    'safety',
    'Respond to fires, accidents, and emergencies while protecting people and property.',
    ['fire service', 'rescue', 'emergency response', 'safety'],
    {
      overview:
        'Firefighters control fires and respond to rescue situations. The work requires physical fitness, teamwork, equipment skills, and calm decision making.',
      skills: ['Emergency response', 'Physical fitness', 'Teamwork', 'Equipment safety'],
      dayToDay: [
        'Respond to fire and rescue calls',
        'Inspect and maintain equipment',
        'Practise emergency procedures and prevention',
      ],
      relatedIds: ['paramedic', 'emergency-management-specialist', 'police-constable'],
    },
  ),
  career(
    'prison-officer',
    'Prison Officer',
    'safety',
    'Maintain safety, order, and rehabilitation processes within correctional facilities.',
    ['prison service', 'corrections', 'custody', 'security'],
    {
      overview:
        'Prison officers manage custody, security, and daily routines in correctional settings. They must apply rules consistently while supporting safety and rehabilitation.',
      skills: ['Security awareness', 'Conflict management', 'Record keeping', 'Fairness'],
      dayToDay: [
        'Supervise facility routines and security',
        'Record incidents and prisoner movements',
        'Coordinate with welfare and legal staff',
      ],
      relatedIds: ['police-officer', 'social-worker', 'rehabilitation-counselor'],
    },
  ),
  career(
    'border-security-force-officer',
    'Border Security Force Officer',
    'safety',
    'Protect national borders and support security operations as part of a border force.',
    ['bsf', 'border security', 'defence', 'national security'],
    {
      overview:
        'Border security officers lead or support operations that guard borders and respond to security challenges. Training, discipline, and coordination are central.',
      skills: ['Security operations', 'Leadership', 'Discipline', 'Coordination'],
      dayToDay: [
        'Plan and supervise border security duties',
        'Coordinate patrols and intelligence inputs',
        'Respond to operational and welfare issues',
      ],
      relatedIds: ['army-officer', 'central-reserve-police-officer', 'police-officer'],
    },
  ),
  career(
    'central-reserve-police-officer',
    'Central Reserve Police Officer',
    'safety',
    'Serve in central armed police operations, including internal security and emergency support.',
    ['crpf', 'central armed police', 'internal security'],
    {
      overview:
        'Central reserve police officers lead or support units deployed for internal security and public order. The role involves operational planning, discipline, and welfare responsibilities.',
      skills: ['Operational planning', 'Leadership', 'Discipline', 'Team management'],
      dayToDay: [
        'Supervise unit readiness and deployment',
        'Coordinate security operations',
        'Manage training, welfare, and reporting',
      ],
      relatedIds: ['border-security-force-officer', 'army-officer', 'police-officer'],
    },
  ),
  career(
    'army-officer',
    'Army Officer',
    'safety',
    'Lead soldiers and support national defence through command, planning, and training.',
    ['indian army', 'defence', 'military', 'officer'],
    {
      overview:
        'Army officers lead teams in training and operational settings. Their duties combine command, planning, administration, and responsibility for the people they lead.',
      skills: ['Leadership', 'Decision making', 'Physical fitness', 'Teamwork'],
      dayToDay: [
        'Lead training and operational tasks',
        'Plan unit activities and logistics',
        'Support the welfare and discipline of personnel',
      ],
      relatedIds: ['navy-officer', 'air-force-officer', 'border-security-force-officer'],
    },
  ),
  career(
    'navy-officer',
    'Navy Officer',
    'safety',
    'Serve at sea and ashore in roles supporting maritime defence and naval operations.',
    ['indian navy', 'maritime', 'defence', 'naval officer'],
    {
      overview:
        'Navy officers work in operational, technical, and administrative branches. Life at sea and in port requires discipline, teamwork, and specialist training.',
      skills: ['Maritime awareness', 'Leadership', 'Technical judgment', 'Teamwork'],
      dayToDay: [
        'Stand watches and support naval operations',
        'Maintain equipment and operational readiness',
        'Lead or train assigned teams',
      ],
      relatedIds: ['army-officer', 'air-force-officer', 'marine-engineer'],
    },
  ),
  career(
    'air-force-officer',
    'Air Force Officer',
    'safety',
    'Support air defence and aerospace operations as a commissioned officer.',
    ['indian air force', 'defence', 'aviation', 'officer'],
    {
      overview:
        'Air force officers serve in flying, technical, or ground branches. Their work demands precision, physical readiness, and close coordination.',
      skills: ['Technical judgment', 'Discipline', 'Situational awareness', 'Teamwork'],
      dayToDay: [
        'Support flying or technical operations',
        'Maintain readiness and safety standards',
        'Coordinate with ground and command teams',
      ],
      relatedIds: ['pilot', 'navy-officer', 'aircraft-maintenance-engineer'],
    },
  ),
  career(
    'intelligence-officer',
    'Intelligence Officer',
    'safety',
    'Collect, assess, and communicate information relevant to security and policy decisions.',
    ['intelligence', 'security analysis', 'research', 'national security'],
    {
      overview:
        'Intelligence officers analyse information from multiple sources and prepare assessments. The role requires research discipline, judgement, confidentiality, and clear writing.',
      skills: ['Research', 'Critical analysis', 'Confidentiality', 'Report writing'],
      dayToDay: [
        'Review and cross-check information sources',
        'Prepare analytical assessments',
        'Brief decision makers within strict procedures',
      ],
      relatedIds: ['cybersecurity-analyst', 'police-officer', 'policy-analyst'],
    },
  ),
  career(
    'cybercrime-investigator',
    'Cybercrime Investigator',
    'safety',
    'Investigate digital crimes by examining devices, accounts, networks, and online evidence.',
    ['digital forensics', 'cyber crime', 'investigation', 'electronic evidence'],
    {
      overview:
        'Cybercrime investigators combine policing knowledge with digital forensics. They preserve evidence, trace activity, and document findings for legal processes.',
      skills: ['Digital forensics', 'Evidence handling', 'Investigation', 'Report writing'],
      dayToDay: [
        'Examine digital devices and accounts',
        'Preserve evidence according to procedure',
        'Prepare technical findings for investigators or courts',
      ],
      relatedIds: ['cybersecurity-analyst', 'police-officer', 'forensic-scientist'],
    },
  ),
  career(
    'emergency-management-specialist',
    'Emergency Management Specialist',
    'safety',
    'Plan and coordinate responses to disasters, accidents, and large-scale emergencies.',
    ['disaster management', 'emergency planning', 'relief', 'coordination'],
    {
      overview:
        'Emergency management specialists prepare organisations and communities for crises. They coordinate resources, plans, training, and recovery activities.',
      skills: ['Contingency planning', 'Coordination', 'Communication', 'Resource management'],
      dayToDay: [
        'Review risk and emergency plans',
        'Coordinate training and response resources',
        'Support relief and recovery operations',
      ],
      relatedIds: ['firefighter', 'public-health-specialist', 'municipal-administrator'],
    },
  ),
]
