import { career } from './shared'

export const technologyCareers = [
  career(
    'software-engineer',
    'Software Engineer',
    'technology',
    'Design, build, and maintain software that solves practical problems for people and organisations.',
    ['software development', 'coding', 'applications', 'programming'],
    {
      overview:
        'Software engineers turn requirements into working software. They combine programming, problem solving, testing, and collaboration to build applications that are reliable and useful.',
      skills: ['Programming', 'Problem solving', 'System design', 'Testing'],
      stages: ['Class 10', 'Intermediate (MPC)', 'B.Tech / B.E. or equivalent', 'Software Engineer'],
      dayToDay: [
        'Discuss requirements with teammates and stakeholders',
        'Write, review, and test code',
        'Investigate bugs and improve system reliability',
      ],
      relatedIds: ['full-stack-developer', 'backend-developer', 'qa-engineer'],
    },
  ),
  career(
    'full-stack-developer',
    'Full Stack Developer',
    'technology',
    'Work across user interfaces, server logic, and databases to deliver complete web applications.',
    ['web development', 'frontend', 'backend', 'full stack'],
    {
      overview:
        'Full stack developers connect the visible parts of an application with the services and data behind it. They are comfortable moving between interface work and server-side logic.',
      skills: ['JavaScript', 'API design', 'Databases', 'Debugging'],
      dayToDay: [
        'Build responsive user interfaces',
        'Create and connect application programming interfaces',
        'Test end-to-end behaviour and resolve issues',
      ],
      relatedIds: ['frontend-developer', 'backend-developer', 'software-engineer'],
    },
  ),
  career(
    'frontend-developer',
    'Frontend Developer',
    'technology',
    'Create accessible, responsive interfaces that make digital products clear and pleasant to use.',
    ['web design', 'html', 'css', 'javascript', 'react'],
    {
      overview:
        'Frontend developers translate visual designs into interactive web experiences. They pay close attention to accessibility, performance, and how interfaces behave on different screens.',
      skills: ['HTML and CSS', 'JavaScript', 'Accessibility', 'UI implementation'],
      dayToDay: [
        'Implement screens from design specifications',
        'Test layouts across devices and browsers',
        'Improve loading speed and interaction quality',
      ],
      relatedIds: ['full-stack-developer', 'product-designer', 'software-engineer'],
    },
  ),
  career(
    'ui-ux-designer',
    'UI/UX Designer',
    'technology',
    'Research user needs and design clear, accessible digital experiences from structure to interface.',
    ['ui design', 'ux design', 'user research', 'interaction design', 'prototyping'],
    {
      overview:
        'UI/UX designers study how people use products, shape information and workflows, and create interfaces that are useful, accessible, and visually coherent. They work closely with users, developers, and product teams.',
      skills: ['User research', 'Interaction design', 'Visual design', 'Prototyping'],
      stages: ['Class 10', 'Intermediate', 'Design or related degree, diploma, or portfolio route', 'UI/UX Designer'],
      dayToDay: [
        'Interview users and review product behaviour',
        'Create wireframes, flows, and interactive prototypes',
        'Test designs and refine them with engineering teams',
      ],
      relatedIds: ['product-designer', 'frontend-developer', 'graphic-designer'],
    },
  ),
  career(
    'backend-developer',
    'Backend Developer',
    'technology',
    'Build the server-side systems, interfaces, and data flows that power applications.',
    ['server development', 'apis', 'databases', 'java', 'python'],
    {
      overview:
        'Backend developers focus on application logic, data storage, security, and integrations. Their work makes it possible for many users and services to interact reliably.',
      skills: ['API development', 'Database design', 'Security awareness', 'Debugging'],
      dayToDay: [
        'Design and maintain server-side services',
        'Optimise database queries and background jobs',
        'Monitor failures and improve reliability',
      ],
      relatedIds: ['software-engineer', 'database-administrator', 'devops-engineer'],
    },
  ),
  career(
    'mobile-app-developer',
    'Mobile App Developer',
    'technology',
    'Design and develop applications for smartphones and tablets across mobile platforms.',
    ['android', 'ios', 'flutter', 'react native', 'apps'],
    {
      overview:
        'Mobile developers build apps that work within the constraints of phones and tablets, including limited battery, variable connectivity, and small screens.',
      skills: ['Mobile frameworks', 'UI development', 'Testing', 'Performance awareness'],
      dayToDay: [
        'Develop and test mobile screens and features',
        'Work with device storage, notifications, and APIs',
        'Release updates and investigate crashes',
      ],
      relatedIds: ['frontend-developer', 'full-stack-developer', 'qa-engineer'],
    },
  ),
  career(
    'data-scientist',
    'Data Scientist',
    'technology',
    'Use data, statistics, and machine learning to uncover patterns and support better decisions.',
    ['analytics', 'statistics', 'machine learning', 'python', 'data'],
    {
      overview:
        'Data scientists combine statistical reasoning, programming, and domain knowledge. They prepare data, test hypotheses, and communicate findings in ways that teams can act on.',
      skills: ['Statistics', 'Python', 'Machine learning', 'Data storytelling'],
      stages: ['Class 10', 'Intermediate (MPC)', 'Degree in statistics, computing, or a related field', 'Data Scientist'],
      dayToDay: [
        'Clean and explore data sets',
        'Build and evaluate analytical models',
        'Present findings and recommended actions',
      ],
      relatedIds: ['data-analyst', 'machine-learning-engineer', 'ai-engineer'],
    },
  ),
  career(
    'ai-engineer',
    'AI Engineer',
    'technology',
    'Build products and systems that apply artificial intelligence models safely and effectively.',
    ['artificial intelligence', 'generative ai', 'machine learning', 'python'],
    {
      overview:
        'AI engineers integrate models into real applications. They evaluate outputs, manage data pipelines, and consider reliability, privacy, cost, and responsible use.',
      skills: ['Python', 'Machine learning', 'Model evaluation', 'Model deployment'],
      stages: ['Class 10', 'Intermediate (MPC)', 'Degree in computing or a related field', 'AI Engineer'],
      dayToDay: [
        'Prepare data and evaluate model behaviour',
        'Connect models to application features',
        'Test safety, quality, latency, and cost',
      ],
      relatedIds: ['machine-learning-engineer', 'data-scientist', 'software-engineer'],
    },
  ),
  career(
    'machine-learning-engineer',
    'Machine Learning Engineer',
    'technology',
    'Develop and deploy machine learning systems that improve with data and operate at scale.',
    ['ml', 'models', 'data pipelines', 'deep learning'],
    {
      overview:
        'Machine learning engineers focus on making models useful in production. They build training pipelines, measure performance, and monitor systems after deployment.',
      skills: ['Machine learning', 'Software engineering', 'Data pipelines', 'Monitoring'],
      dayToDay: [
        'Build data and training pipelines',
        'Tune and evaluate models',
        'Deploy models and monitor their behaviour',
      ],
      relatedIds: ['ai-engineer', 'data-scientist', 'site-reliability-engineer'],
    },
  ),
  career(
    'cloud-engineer',
    'Cloud Engineer',
    'technology',
    'Plan, implement, and maintain cloud infrastructure and services for applications and teams.',
    ['aws', 'azure', 'cloud computing', 'infrastructure'],
    {
      overview:
        'Cloud engineers design environments that are scalable, secure, and cost-aware. They work with virtual networks, storage, identity, and managed services.',
      skills: ['Cloud platforms', 'Networking', 'Automation', 'Security fundamentals'],
      stages: ['Class 10', 'Intermediate (MPC)', 'Degree, diploma, or cloud certification route', 'Cloud Engineer'],
      dayToDay: [
        'Configure cloud services and permissions',
        'Automate infrastructure with code',
        'Monitor usage, cost, and availability',
      ],
      relatedIds: ['devops-engineer', 'site-reliability-engineer', 'cybersecurity-analyst'],
    },
  ),
  career(
    'devops-engineer',
    'DevOps Engineer',
    'technology',
    'Connect development and operations through automation, reliable delivery, and observability.',
    ['ci cd', 'automation', 'deployment', 'linux'],
    {
      overview:
        'DevOps engineers improve how software moves from code to production. They build deployment pipelines and reduce friction between development and operations teams.',
      skills: ['Linux', 'Automation', 'CI/CD', 'System monitoring'],
      dayToDay: [
        'Maintain build and deployment pipelines',
        'Automate repetitive operational tasks',
        'Investigate delivery and runtime problems',
      ],
      relatedIds: ['cloud-engineer', 'site-reliability-engineer', 'backend-developer'],
    },
  ),
  career(
    'cybersecurity-analyst',
    'Cybersecurity Analyst',
    'technology',
    'Monitor systems, investigate threats, and strengthen defences against digital attacks.',
    ['security', 'soc', 'threat detection', 'network security'],
    {
      overview:
        'Cybersecurity analysts protect systems and data by watching for suspicious activity, assessing vulnerabilities, and helping teams respond to incidents.',
      skills: ['Network security', 'Threat analysis', 'Incident response', 'Risk awareness'],
      stages: ['Class 10', 'Intermediate (MPC or relevant stream)', 'Degree or security certification route', 'Cybersecurity Analyst'],
      dayToDay: [
        'Review security alerts and logs',
        'Assess vulnerabilities and unusual access',
        'Document incidents and support remediation',
      ],
      relatedIds: ['soc-analyst', 'cybercrime-investigator', 'cloud-engineer'],
    },
  ),
  career(
    'soc-analyst',
    'SOC Analyst',
    'technology',
    'Work in a security operations centre to detect, triage, and escalate cyber incidents.',
    ['security operations', 'monitoring', 'siem', 'incident response'],
    {
      overview:
        'SOC analysts are often the first responders to security alerts. They separate routine noise from genuine threats and document what happened.',
      skills: ['Security monitoring', 'Log analysis', 'Communication', 'Incident triage'],
      dayToDay: [
        'Monitor dashboards and incoming alerts',
        'Investigate suspicious patterns',
        'Escalate confirmed incidents with clear records',
      ],
      relatedIds: ['cybersecurity-analyst', 'cybercrime-investigator', 'network-engineer'],
    },
  ),
  career(
    'data-analyst',
    'Data Analyst',
    'technology',
    'Interpret data and build clear reports that help teams understand performance and make decisions.',
    ['analytics', 'sql', 'dashboards', 'excel', 'business intelligence'],
    {
      overview:
        'Data analysts collect, clean, and interpret information. They use queries, spreadsheets, and dashboards to answer practical questions.',
      skills: ['SQL', 'Spreadsheets', 'Data visualisation', 'Business understanding'],
      dayToDay: [
        'Gather and validate data',
        'Create reports and dashboards',
        'Explain trends and anomalies to stakeholders',
      ],
      relatedIds: ['data-scientist', 'business-analyst', 'market-research-analyst'],
    },
  ),
  career(
    'database-administrator',
    'Database Administrator',
    'technology',
    'Manage databases so that critical information stays available, secure, and recoverable.',
    ['dba', 'sql', 'database', 'backup', 'security'],
    {
      overview:
        'Database administrators maintain the structure, performance, access, and backups of data systems. They plan changes carefully because data loss can be costly.',
      skills: ['Database systems', 'Backup planning', 'Performance tuning', 'Access control'],
      dayToDay: [
        'Monitor database health and capacity',
        'Manage backups and recovery checks',
        'Tune queries and control access',
      ],
      relatedIds: ['backend-developer', 'cloud-engineer', 'cybersecurity-analyst'],
    },
  ),
  career(
    'qa-engineer',
    'QA Engineer',
    'technology',
    'Test software to find defects and help teams release reliable, usable products.',
    ['quality assurance', 'testing', 'automation', 'bug tracking'],
    {
      overview:
        'QA engineers examine software from the perspective of users and risk. They create test cases, check behaviour, and report defects clearly.',
      skills: ['Test design', 'Attention to detail', 'Automation basics', 'Clear reporting'],
      dayToDay: [
        'Write and run test cases',
        'Reproduce and document defects',
        'Verify fixes and release readiness',
      ],
      relatedIds: ['software-engineer', 'frontend-developer', 'devops-engineer'],
    },
  ),
  career(
    'it-support-specialist',
    'IT Support Specialist',
    'technology',
    'Help people use technology by diagnosing devices, software, accounts, and network problems.',
    ['helpdesk', 'technical support', 'troubleshooting', 'systems'],
    {
      overview:
        'IT support specialists are practical problem solvers. They listen to users, identify faults, and either resolve issues or route them to the right team.',
      skills: ['Troubleshooting', 'Customer service', 'Operating systems', 'Documentation'],
      dayToDay: [
        'Respond to support requests',
        'Diagnose hardware, software, and access issues',
        'Document recurring problems and fixes',
      ],
      relatedIds: ['network-engineer', 'database-administrator', 'soc-analyst'],
    },
  ),
  career(
    'network-engineer',
    'Network Engineer',
    'technology',
    'Design and maintain the networks that connect devices, services, and people.',
    ['networking', 'routing', 'switching', 'connectivity'],
    {
      overview:
        'Network engineers keep communication systems dependable. They plan network capacity, configure equipment, and investigate connectivity faults.',
      skills: ['Networking', 'Routing and switching', 'Troubleshooting', 'Security awareness'],
      dayToDay: [
        'Configure and monitor network equipment',
        'Diagnose connectivity and performance issues',
        'Plan secure network changes',
      ],
      relatedIds: ['cloud-engineer', 'it-support-specialist', 'soc-analyst'],
    },
  ),
  career(
    'game-developer',
    'Game Developer',
    'technology',
    'Turn game ideas into interactive experiences through programming, systems, and testing.',
    ['gaming', 'unity', 'unreal', 'game programming'],
    {
      overview:
        'Game developers build gameplay systems, physics, interfaces, and tools. The work combines technical craft with close collaboration across art and design.',
      skills: ['Programming', 'Game engines', 'Mathematics', 'Collaboration'],
      dayToDay: [
        'Implement gameplay features and controls',
        'Test performance and fix bugs',
        'Collaborate with designers and artists',
      ],
      relatedIds: ['game-designer', 'animator', 'software-engineer'],
    },
  ),
  career(
    'blockchain-developer',
    'Blockchain Developer',
    'technology',
    'Build distributed applications and systems that use blockchain protocols and smart contracts.',
    ['web3', 'smart contracts', 'distributed systems'],
    {
      overview:
        'Blockchain developers write and test smart contracts and applications that interact with distributed networks. Security and careful testing are central to the work.',
      skills: ['Programming', 'Smart contracts', 'Security testing', 'Distributed systems'],
      dayToDay: [
        'Develop and test smart contracts',
        'Review security assumptions',
        'Integrate applications with blockchain networks',
      ],
      relatedIds: ['software-engineer', 'cybersecurity-analyst', 'backend-developer'],
    },
  ),
  career(
    'site-reliability-engineer',
    'Site Reliability Engineer',
    'technology',
    'Keep large systems reliable by combining software engineering with operational practices.',
    ['sre', 'reliability', 'monitoring', 'automation'],
    {
      overview:
        'Site reliability engineers build tools and processes that make systems dependable. They measure availability, respond to incidents, and reduce repeated failures.',
      skills: ['Systems engineering', 'Monitoring', 'Automation', 'Incident analysis'],
      dayToDay: [
        'Define and monitor service reliability targets',
        'Automate recovery and operational tasks',
        'Lead reviews after major incidents',
      ],
      relatedIds: ['devops-engineer', 'cloud-engineer', 'backend-developer'],
    },
  ),
  career(
    'solutions-architect',
    'Solutions Architect',
    'technology',
    'Design technical solutions that fit an organisation’s needs, constraints, and long-term goals.',
    ['architecture', 'system design', 'technical strategy'],
    {
      overview:
        'Solutions architects translate business needs into coherent technical designs. They balance performance, security, cost, and maintainability while guiding delivery teams.',
      skills: ['System design', 'Communication', 'Cloud architecture', 'Trade-off analysis'],
      dayToDay: [
        'Clarify requirements with stakeholders',
        'Prepare architecture options and recommendations',
        'Review implementation risks with engineering teams',
      ],
      relatedIds: ['cloud-engineer', 'software-engineer', 'product-manager'],
    },
  ),
]
