import { career } from './shared'

export const businessCareers = [
  career(
    'chartered-accountant',
    'Chartered Accountant',
    'business',
    'Apply accounting, audit, taxation, and financial expertise to organisations and clients.',
    ['ca', 'accounting', 'audit', 'taxation', 'finance'],
    {
      overview:
        'Chartered accountants help organisations report financial information accurately and make sound financial decisions. Their work can span audit, tax, advisory, and compliance.',
      skills: ['Accounting', 'Financial analysis', 'Ethics', 'Attention to detail'],
      stages: ['Class 10', 'Intermediate (Commerce preferred)', 'Chartered accountancy qualification route', 'Chartered Accountant'],
      dayToDay: [
        'Review financial records and statements',
        'Apply tax and reporting requirements',
        'Explain financial findings to clients or teams',
      ],
      relatedIds: ['cost-accountant', 'financial-analyst', 'company-secretary'],
    },
  ),
  career(
    'company-secretary',
    'Company Secretary',
    'business',
    'Support corporate governance, compliance, and statutory responsibilities for organisations.',
    ['cs', 'corporate governance', 'compliance', 'company law'],
    {
      overview:
        'Company secretaries help organisations meet legal and governance obligations. They maintain records, advise boards, and coordinate statutory filings.',
      skills: ['Corporate law', 'Compliance', 'Documentation', 'Communication'],
      dayToDay: [
        'Track governance and filing requirements',
        'Prepare board and compliance records',
        'Advise on procedural questions',
      ],
      relatedIds: ['chartered-accountant', 'compliance-officer', 'corporate-lawyer'],
    },
  ),
  career(
    'cost-accountant',
    'Cost Accountant',
    'business',
    'Analyse costs, performance, and resource use to support pricing and management decisions.',
    ['cost accounting', 'management accounting', 'costing', 'finance'],
    {
      overview:
        'Cost accountants study how resources are used and how costs behave. They prepare information for pricing, budgeting, efficiency, and performance decisions.',
      skills: ['Cost analysis', 'Budgeting', 'Data interpretation', 'Business understanding'],
      dayToDay: [
        'Analyse product or service costs',
        'Prepare budgets and variance reports',
        'Support efficiency and pricing decisions',
      ],
      relatedIds: ['chartered-accountant', 'financial-analyst', 'operations-manager'],
    },
  ),
  career(
    'financial-analyst',
    'Financial Analyst',
    'business',
    'Study financial data and market information to support investment and business decisions.',
    ['finance', 'valuation', 'investment analysis', 'financial modelling'],
    {
      overview:
        'Financial analysts evaluate financial performance, risks, and opportunities. They build models, interpret trends, and communicate recommendations clearly.',
      skills: ['Financial modelling', 'Analysis', 'Spreadsheets', 'Communication'],
      dayToDay: [
        'Build and update financial models',
        'Analyse performance and market information',
        'Prepare recommendations for decision makers',
      ],
      relatedIds: ['investment-banker', 'chartered-accountant', 'risk-manager'],
    },
  ),
  career(
    'investment-banker',
    'Investment Banker',
    'business',
    'Advise organisations on capital raising, mergers, acquisitions, and financial transactions.',
    ['investment banking', 'mergers', 'capital markets', 'finance'],
    {
      overview:
        'Investment bankers support complex financial transactions. The work involves analysis, presentations, due diligence, and intense coordination with clients and specialists.',
      skills: ['Financial analysis', 'Valuation', 'Communication', 'Project coordination'],
      dayToDay: [
        'Prepare financial analysis and presentations',
        'Support due diligence and transaction documents',
        'Coordinate with clients and specialist teams',
      ],
      relatedIds: ['financial-analyst', 'chartered-accountant', 'risk-manager'],
    },
  ),
  career(
    'actuary',
    'Actuary',
    'business',
    'Use mathematics and statistics to assess financial risk, especially in insurance and pensions.',
    ['actuarial science', 'risk', 'insurance', 'statistics'],
    {
      overview:
        'Actuaries model uncertain future events and their financial consequences. They combine mathematics, statistics, economics, and business knowledge.',
      skills: ['Mathematics', 'Statistics', 'Risk modelling', 'Communication'],
      dayToDay: [
        'Build and validate risk models',
        'Analyse assumptions and financial outcomes',
        'Explain risk findings to business teams',
      ],
      relatedIds: ['risk-manager', 'insurance-underwriter', 'data-scientist'],
    },
  ),
  career(
    'banker',
    'Banker',
    'business',
    'Support banking services, customer relationships, credit, and financial operations.',
    ['banking', 'credit', 'customer service', 'finance'],
    {
      overview:
        'Bankers work across retail, commercial, or operations roles. They connect customers and businesses with financial services while managing risk and compliance.',
      skills: ['Financial literacy', 'Customer service', 'Risk awareness', 'Communication'],
      dayToDay: [
        'Support customer or business banking needs',
        'Review account and credit information',
        'Apply compliance and service procedures',
      ],
      relatedIds: ['financial-analyst', 'insurance-underwriter', 'operations-manager'],
    },
  ),
  career(
    'business-analyst',
    'Business Analyst',
    'business',
    'Study business needs and translate them into practical requirements and process improvements.',
    ['requirements', 'process improvement', 'business analysis', 'stakeholders'],
    {
      overview:
        'Business analysts connect business problems with solutions. They gather requirements, map processes, and help teams agree on what should change.',
      skills: ['Requirement gathering', 'Process mapping', 'Communication', 'Analysis'],
      dayToDay: [
        'Interview stakeholders and document needs',
        'Map current processes and pain points',
        'Support solution design and validation',
      ],
      relatedIds: ['product-manager', 'data-analyst', 'project-manager'],
    },
  ),
  career(
    'marketing-manager',
    'Marketing Manager',
    'business',
    'Plan marketing strategies that connect products or services with the right audiences.',
    ['marketing', 'campaigns', 'branding', 'customers'],
    {
      overview:
        'Marketing managers combine audience research, messaging, channels, and measurement. They guide campaigns and coordinate teams or agencies.',
      skills: ['Marketing strategy', 'Customer understanding', 'Communication', 'Measurement'],
      dayToDay: [
        'Plan campaigns and audience messaging',
        'Coordinate content, channels, and budgets',
        'Review performance and adjust plans',
      ],
      relatedIds: ['market-research-analyst', 'public-relations-specialist', 'product-manager'],
    },
  ),
  career(
    'human-resources-manager',
    'Human Resources Manager',
    'business',
    'Support people and organisational performance through hiring, development, and workplace practices.',
    ['hr', 'people management', 'recruitment', 'workplace'],
    {
      overview:
        'Human resources managers design and coordinate people processes. They work on hiring, employee relations, performance, learning, and policy.',
      skills: ['People management', 'Communication', 'Employment awareness', 'Judgement'],
      dayToDay: [
        'Support hiring and onboarding needs',
        'Advise on people and workplace issues',
        'Coordinate learning and performance processes',
      ],
      relatedIds: ['recruiter', 'operations-manager', 'career-counselor'],
    },
  ),
  career(
    'entrepreneur',
    'Entrepreneur',
    'business',
    'Build and grow a venture by identifying a need, creating a solution, and managing risk.',
    ['startup', 'business owner', 'innovation', 'venture'],
    {
      overview:
        'Entrepreneurs turn ideas into organisations. They validate problems, assemble resources, serve customers, and adapt as the business learns.',
      skills: ['Opportunity spotting', 'Resilience', 'Financial awareness', 'Leadership'],
      stages: ['Class 10', 'Intermediate', 'Relevant skills or degree', 'Venture building'],
      dayToDay: [
        'Talk to customers and test assumptions',
        'Manage product, people, and money priorities',
        'Review performance and adapt the plan',
      ],
      relatedIds: ['product-manager', 'marketing-manager', 'business-analyst'],
    },
  ),
  career(
    'operations-manager',
    'Operations Manager',
    'business',
    'Coordinate people, processes, and resources so an organisation delivers reliably.',
    ['operations', 'process management', 'efficiency', 'management'],
    {
      overview:
        'Operations managers improve day-to-day delivery. They balance quality, cost, people, schedules, and customer expectations.',
      skills: ['Process management', 'Planning', 'Leadership', 'Problem solving'],
      dayToDay: [
        'Review operational performance and constraints',
        'Coordinate teams and resources',
        'Resolve delivery and quality issues',
      ],
      relatedIds: ['supply-chain-manager', 'project-manager', 'industrial-engineer'],
    },
  ),
  career(
    'supply-chain-manager',
    'Supply Chain Manager',
    'business',
    'Coordinate sourcing, inventory, logistics, and delivery across a supply network.',
    ['logistics', 'procurement', 'inventory', 'supply chain'],
    {
      overview:
        'Supply chain managers keep goods and information moving. They balance demand, suppliers, inventory, transport, cost, and disruption risk.',
      skills: ['Logistics', 'Planning', 'Supplier coordination', 'Data awareness'],
      dayToDay: [
        'Review demand, stock, and delivery plans',
        'Coordinate suppliers and transport partners',
        'Resolve delays and supply risks',
      ],
      relatedIds: ['operations-manager', 'industrial-engineer', 'e-commerce-manager'],
    },
  ),
  career(
    'product-manager',
    'Product Manager',
    'business',
    'Guide a product from user need through planning, delivery, and improvement.',
    ['product management', 'roadmap', 'users', 'strategy'],
    {
      overview:
        'Product managers connect user needs, business goals, and technical delivery. They prioritise problems, define outcomes, and coordinate across teams.',
      skills: ['Customer discovery', 'Prioritisation', 'Communication', 'Product thinking'],
      dayToDay: [
        'Research user needs and product opportunities',
        'Define priorities and success measures',
        'Coordinate design, engineering, and business teams',
      ],
      relatedIds: ['business-analyst', 'product-designer', 'marketing-manager'],
    },
  ),
  career(
    'sales-manager',
    'Sales Manager',
    'business',
    'Lead sales teams and build customer relationships that support sustainable revenue.',
    ['sales', 'business development', 'customers', 'revenue'],
    {
      overview:
        'Sales managers guide sales activity and customer relationships. They set targets, support teams, and connect customer feedback with the wider business.',
      skills: ['Negotiation', 'Customer understanding', 'Team leadership', 'Planning'],
      dayToDay: [
        'Review pipeline and sales performance',
        'Coach team members and support key accounts',
        'Coordinate offers and customer follow-up',
      ],
      relatedIds: ['marketing-manager', 'business-analyst', 'e-commerce-manager'],
    },
  ),
  career(
    'risk-manager',
    'Risk Manager',
    'business',
    'Identify, assess, and help manage risks that could affect an organisation.',
    ['risk management', 'compliance', 'controls', 'governance'],
    {
      overview:
        'Risk managers examine financial, operational, legal, and strategic risks. They build controls, monitor indicators, and support informed risk decisions.',
      skills: ['Risk assessment', 'Analysis', 'Communication', 'Governance awareness'],
      dayToDay: [
        'Identify and assess organisational risks',
        'Review controls and risk indicators',
        'Report concerns and mitigation options',
      ],
      relatedIds: ['actuary', 'compliance-officer', 'financial-analyst'],
    },
  ),
  career(
    'economist',
    'Economist',
    'business',
    'Study economic data and behaviour to explain trends and evaluate policy or business choices.',
    ['economics', 'policy', 'data', 'research'],
    {
      overview:
        'Economists use theory, data, and research to understand how resources, incentives, and policies affect outcomes. They communicate evidence to decision makers.',
      skills: ['Economic reasoning', 'Data analysis', 'Research', 'Writing'],
      dayToDay: [
        'Analyse economic data and trends',
        'Build or evaluate models and policy options',
        'Prepare clear written findings',
      ],
      relatedIds: ['indian-economic-service-officer', 'policy-analyst', 'data-analyst'],
    },
  ),
  career(
    'insurance-underwriter',
    'Insurance Underwriter',
    'business',
    'Assess risk and decide insurance terms based on evidence, policy, and judgement.',
    ['insurance', 'underwriting', 'risk', 'finance'],
    {
      overview:
        'Insurance underwriters evaluate applications and exposures. They balance risk, pricing, policy rules, and fairness while documenting decisions.',
      skills: ['Risk assessment', 'Judgement', 'Financial literacy', 'Documentation'],
      dayToDay: [
        'Review applications and risk information',
        'Apply policy and pricing guidelines',
        'Document decisions and explain exceptions',
      ],
      relatedIds: ['actuary', 'risk-manager', 'banker'],
    },
  ),
  career(
    'e-commerce-manager',
    'E-commerce Manager',
    'business',
    'Manage online stores, product listings, digital customer experience, and sales performance.',
    ['online business', 'ecommerce', 'digital sales', 'marketplace'],
    {
      overview:
        'E-commerce managers coordinate online catalogues, promotions, fulfilment coordination, and customer experience. They use data to improve conversion and service.',
      skills: ['Digital commerce', 'Analytics', 'Merchandising', 'Coordination'],
      dayToDay: [
        'Review listings, pricing, and promotions',
        'Track sales and customer behaviour',
        'Coordinate with marketing, logistics, and support',
      ],
      relatedIds: ['marketing-manager', 'supply-chain-manager', 'product-manager'],
    },
  ),
  career(
    'market-research-analyst',
    'Market Research Analyst',
    'business',
    'Study customers, markets, and competitors to inform business and product decisions.',
    ['market research', 'surveys', 'consumer insights', 'analysis'],
    {
      overview:
        'Market research analysts design studies, interpret customer evidence, and turn findings into useful recommendations. They combine data with careful listening.',
      skills: ['Research methods', 'Data interpretation', 'Survey design', 'Communication'],
      dayToDay: [
        'Design surveys or research plans',
        'Analyse customer and market data',
        'Present insights and implications',
      ],
      relatedIds: ['data-analyst', 'marketing-manager', 'product-manager'],
    },
  ),
  career(
    'public-relations-specialist',
    'Public Relations Specialist',
    'business',
    'Manage communication between an organisation and its publics, media, and stakeholders.',
    ['pr', 'media relations', 'reputation', 'communication'],
    {
      overview:
        'Public relations specialists build and protect reputation through clear communication. They prepare messages, coordinate media, and respond to public issues.',
      skills: ['Writing', 'Media awareness', 'Relationship building', 'Judgement'],
      dayToDay: [
        'Draft announcements and communication material',
        'Coordinate with media and stakeholders',
        'Monitor public sentiment and issues',
      ],
      relatedIds: ['journalist', 'marketing-manager', 'government-communications-officer'],
    },
  ),
  career(
    'project-manager',
    'Project Manager',
    'business',
    'Plan and coordinate projects so that scope, time, cost, quality, and people stay aligned.',
    ['project management', 'planning', 'delivery', 'coordination'],
    {
      overview:
        'Project managers create plans, track progress, manage risks, and keep teams aligned. They work across many industries and project types.',
      skills: ['Planning', 'Coordination', 'Risk management', 'Communication'],
      dayToDay: [
        'Maintain plans, schedules, and dependencies',
        'Coordinate teams and resolve blockers',
        'Report progress, risks, and decisions',
      ],
      relatedIds: ['operations-manager', 'business-analyst', 'construction-engineer'],
    },
  ),
  career(
    'recruiter',
    'Recruiter',
    'business',
    'Connect organisations with suitable candidates and support a fair hiring process.',
    ['recruitment', 'talent acquisition', 'hiring', 'people'],
    {
      overview:
        'Recruiters understand role requirements, find potential candidates, and coordinate selection. Good recruiters combine people skills with process discipline.',
      skills: ['Interviewing', 'Communication', 'Assessment', 'Organisation'],
      dayToDay: [
        'Clarify hiring needs with managers',
        'Source and screen candidates',
        'Coordinate interviews and offers',
      ],
      relatedIds: ['human-resources-manager', 'career-counselor', 'business-analyst'],
    },
  ),
]
