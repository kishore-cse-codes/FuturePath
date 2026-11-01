import { career } from './shared'

export const lawCareers = [
  career(
    'lawyer',
    'Lawyer',
    'law',
    'Advise clients, research legal questions, and represent or support cases within the legal system.',
    ['advocate', 'legal practice', 'litigation', 'law'],
    {
      overview:
        'Lawyers interpret law and apply it to real disputes, transactions, and decisions. They research, draft, negotiate, and communicate arguments while maintaining professional ethics.',
      skills: ['Legal research', 'Argumentation', 'Drafting', 'Ethics'],
      stages: ['Class 10', 'Intermediate', 'Integrated law degree or relevant route', 'Lawyer'],
      dayToDay: [
        'Research statutes, precedents, and facts',
        'Draft documents and prepare arguments',
        'Meet clients and coordinate case work',
      ],
      relatedIds: ['civil-litigation-lawyer', 'corporate-lawyer', 'legal-advisor'],
    },
  ),
  career(
    'corporate-lawyer',
    'Corporate Lawyer',
    'law',
    'Advise businesses on transactions, contracts, governance, and regulatory obligations.',
    ['corporate law', 'contracts', 'mergers', 'company law'],
    {
      overview:
        'Corporate lawyers support commercial transactions and governance. They review contracts, assess legal risk, and coordinate with business and specialist teams.',
      skills: ['Contract drafting', 'Commercial awareness', 'Legal research', 'Negotiation'],
      dayToDay: [
        'Review and draft commercial agreements',
        'Identify legal risks and options',
        'Coordinate due diligence and compliance',
      ],
      relatedIds: ['company-secretary', 'legal-advisor', 'compliance-officer'],
    },
  ),
  career(
    'criminal-lawyer',
    'Criminal Lawyer',
    'law',
    'Represent clients in criminal proceedings and advise on rights, evidence, and procedure.',
    ['criminal law', 'defence', 'prosecution', 'court'],
    {
      overview:
        'Criminal lawyers work with cases involving alleged offences. They examine evidence, follow procedure, and present arguments while upholding professional duties.',
      skills: ['Evidence analysis', 'Court advocacy', 'Legal research', 'Composure'],
      dayToDay: [
        'Review case records and evidence',
        'Prepare legal arguments and filings',
        'Appear in court and advise clients',
      ],
      relatedIds: ['public-prosecutor', 'civil-litigation-lawyer', 'police-officer'],
    },
  ),
  career(
    'civil-litigation-lawyer',
    'Civil Litigation Lawyer',
    'law',
    'Handle disputes between people or organisations through negotiation, filings, and court proceedings.',
    ['civil law', 'litigation', 'disputes', 'court'],
    {
      overview:
        'Civil litigation lawyers manage disputes involving contracts, property, family, or other civil matters. They balance negotiation with procedural advocacy.',
      skills: ['Litigation procedure', 'Drafting', 'Negotiation', 'Case management'],
      dayToDay: [
        'Review facts and legal claims',
        'Draft pleadings and applications',
        'Attend hearings and negotiate settlements',
      ],
      relatedIds: ['lawyer', 'arbitrator', 'judicial-officer'],
    },
  ),
  career(
    'public-prosecutor',
    'Public Prosecutor',
    'law',
    'Present the state’s case in criminal proceedings and support the proper administration of justice.',
    ['prosecution', 'criminal justice', 'court', 'public law'],
    {
      overview:
        'Public prosecutors examine evidence and present cases on behalf of the state. The role requires fairness, preparation, and respect for procedural safeguards.',
      skills: ['Evidence analysis', 'Advocacy', 'Fairness', 'Legal research'],
      dayToDay: [
        'Review investigation material and charges',
        'Prepare and present court arguments',
        'Coordinate with investigators and witnesses',
      ],
      relatedIds: ['criminal-lawyer', 'judicial-officer', 'police-officer'],
    },
  ),
  career(
    'judicial-officer',
    'Judicial Officer',
    'law',
    'Adjudicate disputes and apply law fairly through judicial service.',
    ['judiciary', 'judge', 'court', 'adjudication'],
    {
      overview:
        'Judicial officers decide cases after hearing evidence and legal argument. The role demands independence, careful reasoning, and strong legal knowledge.',
      skills: ['Legal reasoning', 'Impartiality', 'Written judgment', 'Case management'],
      dayToDay: [
        'Hear arguments and examine case records',
        'Research applicable law',
        'Draft orders and judgments',
      ],
      relatedIds: ['civil-litigation-lawyer', 'public-prosecutor', 'legal-researcher'],
    },
  ),
  career(
    'legal-advisor',
    'Legal Advisor',
    'law',
    'Provide organisations with ongoing legal guidance, contract review, and risk advice.',
    ['in house counsel', 'legal advisory', 'contracts', 'risk'],
    {
      overview:
        'Legal advisors help organisations make decisions within the law. They review agreements, advise teams, and manage legal risk before disputes arise.',
      skills: ['Legal advisory', 'Contract review', 'Risk assessment', 'Communication'],
      dayToDay: [
        'Advise internal teams on legal questions',
        'Review policies and agreements',
        'Coordinate external counsel when needed',
      ],
      relatedIds: ['corporate-lawyer', 'compliance-officer', 'policy-analyst'],
    },
  ),
  career(
    'policy-analyst',
    'Policy Analyst',
    'law',
    'Research social problems and evaluate policy options using evidence and stakeholder input.',
    ['public policy', 'research', 'analysis', 'governance'],
    {
      overview:
        'Policy analysts study how rules and programmes affect people and organisations. They synthesise evidence, consult stakeholders, and present practical options.',
      skills: ['Policy research', 'Data interpretation', 'Writing', 'Stakeholder engagement'],
      dayToDay: [
        'Research policy problems and evidence',
        'Compare options and trade-offs',
        'Prepare briefs for decision makers',
      ],
      relatedIds: ['economist', 'legal-researcher', 'public-health-specialist'],
    },
  ),
  career(
    'compliance-officer',
    'Compliance Officer',
    'law',
    'Help an organisation follow laws, regulations, and internal standards.',
    ['compliance', 'regulation', 'governance', 'risk'],
    {
      overview:
        'Compliance officers interpret requirements and embed controls into organisational processes. They monitor adherence and respond to breaches or regulatory changes.',
      skills: ['Regulatory knowledge', 'Attention to detail', 'Communication', 'Risk awareness'],
      dayToDay: [
        'Track regulatory requirements and changes',
        'Review processes and compliance evidence',
        'Advise teams and support corrective action',
      ],
      relatedIds: ['legal-advisor', 'risk-manager', 'company-secretary'],
    },
  ),
  career(
    'patent-attorney',
    'Patent Attorney',
    'law',
    'Help inventors and organisations protect inventions through patent processes and intellectual property advice.',
    ['patents', 'intellectual property', 'ip law', 'innovation'],
    {
      overview:
        'Patent attorneys combine legal and technical knowledge. They assess inventions, draft applications, and advise on intellectual property strategy.',
      skills: ['Technical understanding', 'Legal drafting', 'Research', 'Attention to detail'],
      dayToDay: [
        'Review inventions and prior art',
        'Draft and prosecute patent applications',
        'Advise on intellectual property options',
      ],
      relatedIds: ['corporate-lawyer', 'legal-advisor', 'software-engineer'],
    },
  ),
  career(
    'human-rights-lawyer',
    'Human Rights Lawyer',
    'law',
    'Use legal action and advocacy to protect rights and support affected communities.',
    ['human rights', 'public interest law', 'advocacy', 'rights'],
    {
      overview:
        'Human rights lawyers work on cases and advocacy involving dignity, equality, and legal protection. The work often involves research, public interest litigation, and community collaboration.',
      skills: ['Rights law', 'Research', 'Advocacy', 'Empathy'],
      dayToDay: [
        'Investigate rights concerns and evidence',
        'Prepare legal petitions or representations',
        'Work with communities and advocacy organisations',
      ],
      relatedIds: ['public-prosecutor', 'social-worker', 'policy-analyst'],
    },
  ),
  career(
    'arbitrator',
    'Arbitrator',
    'law',
    'Resolve disputes outside court by hearing parties and issuing reasoned decisions.',
    ['arbitration', 'dispute resolution', 'mediation', 'commercial disputes'],
    {
      overview:
        'Arbitrators manage structured dispute resolution processes. They review evidence, apply agreed rules, and produce decisions that parties are expected to follow.',
      skills: ['Dispute resolution', 'Impartiality', 'Legal reasoning', 'Case management'],
      dayToDay: [
        'Review submissions and procedural issues',
        'Hear parties and manage proceedings',
        'Draft reasoned awards or decisions',
      ],
      relatedIds: ['civil-litigation-lawyer', 'corporate-lawyer', 'judicial-officer'],
    },
  ),
  career(
    'legal-researcher',
    'Legal Researcher',
    'law',
    'Find, organise, and analyse legal sources for lawyers, judges, institutions, or policy teams.',
    ['legal research', 'precedents', 'legal writing', 'law'],
    {
      overview:
        'Legal researchers make complex legal material usable. They trace authorities, compare interpretations, and prepare accurate summaries.',
      skills: ['Legal databases', 'Research', 'Writing', 'Accuracy'],
      dayToDay: [
        'Search statutes and case law',
        'Summarise legal positions and sources',
        'Prepare research notes for legal teams',
      ],
      relatedIds: ['lawyer', 'policy-analyst', 'judicial-officer'],
    },
  ),
  career(
    'international-relations-analyst',
    'International Relations Analyst',
    'law',
    'Study global politics, institutions, and relationships to inform strategy and policy.',
    ['international relations', 'foreign policy', 'diplomacy', 'geopolitics'],
    {
      overview:
        'International relations analysts research how countries and institutions interact. They assess developments and communicate their implications to decision makers.',
      skills: ['Research', 'Geopolitical awareness', 'Writing', 'Critical analysis'],
      dayToDay: [
        'Track international developments and sources',
        'Prepare analysis and briefings',
        'Assess implications for organisations or policy',
      ],
      relatedIds: ['ifs-officer', 'policy-analyst', 'economist'],
    },
  ),
]
