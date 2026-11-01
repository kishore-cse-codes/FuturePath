import { career } from './shared'

export const scienceCareers = [
  career(
    'research-scientist',
    'Research Scientist',
    'science',
    'Design experiments and investigate questions to create reliable scientific knowledge.',
    ['research', 'experiments', 'science', 'laboratory'],
    {
      overview:
        'Research scientists investigate questions through structured experiments and analysis. They document methods, interpret evidence, and communicate findings.',
      skills: ['Research methods', 'Critical thinking', 'Data analysis', 'Scientific writing'],
      dayToDay: [
        'Read literature and define research questions',
        'Design and run experiments',
        'Analyse results and prepare reports',
      ],
      relatedIds: ['academic-researcher', 'biotechnologist', 'chemist'],
    },
  ),
  career(
    'physicist',
    'Physicist',
    'science',
    'Study matter, energy, and the fundamental laws that describe the physical world.',
    ['physics', 'mechanics', 'quantum', 'research'],
    {
      overview:
        'Physicists use mathematics and experiment to understand physical systems. Their work can be theoretical, computational, experimental, or applied.',
      skills: ['Mathematics', 'Physical reasoning', 'Modelling', 'Experiment design'],
      dayToDay: [
        'Formulate and test physical models',
        'Analyse experimental or computational data',
        'Communicate results through papers or reports',
      ],
      relatedIds: ['astronomer', 'material-scientist', 'research-scientist'],
    },
  ),
  career(
    'chemist',
    'Chemist',
    'science',
    'Investigate substances, reactions, and materials through laboratory science.',
    ['chemistry', 'laboratory', 'materials', 'analysis'],
    {
      overview:
        'Chemists study composition, structure, and reactions. They work in research, quality, industry, and education with careful safety practices.',
      skills: ['Chemical analysis', 'Laboratory safety', 'Precision', 'Problem solving'],
      dayToDay: [
        'Prepare and analyse chemical samples',
        'Record and interpret experimental results',
        'Maintain safety and quality procedures',
      ],
      relatedIds: ['biochemist', 'chemical-engineer', 'material-scientist'],
    },
  ),
  career(
    'biologist',
    'Biologist',
    'science',
    'Study living organisms, ecosystems, and biological processes.',
    ['biology', 'life sciences', 'ecology', 'research'],
    {
      overview:
        'Biologists investigate how living systems work. Their work can range from molecular processes to ecosystems and conservation.',
      skills: ['Biological reasoning', 'Field or lab methods', 'Observation', 'Data analysis'],
      dayToDay: [
        'Design observations or experiments',
        'Collect and analyse biological data',
        'Document findings and practical implications',
      ],
      relatedIds: ['microbiologist', 'marine-biologist', 'wildlife-conservationist'],
    },
  ),
  career(
    'biotechnologist',
    'Biotechnologist',
    'science',
    'Apply biological systems and techniques to develop products, diagnostics, and processes.',
    ['biotech', 'genetics', 'biology', 'laboratory'],
    {
      overview:
        'Biotechnologists use living systems or biological tools for practical applications. Work may span research, health, agriculture, or industrial processes.',
      skills: ['Molecular methods', 'Laboratory practice', 'Data analysis', 'Safety'],
      dayToDay: [
        'Run biological experiments and assays',
        'Analyse and document results',
        'Coordinate quality and safety procedures',
      ],
      relatedIds: ['microbiologist', 'geneticist', 'biomedical-engineer'],
    },
  ),
  career(
    'microbiologist',
    'Microbiologist',
    'science',
    'Study microorganisms and their roles in health, food, industry, and the environment.',
    ['microbiology', 'microbes', 'lab', 'health'],
    {
      overview:
        'Microbiologists culture, observe, and analyse microorganisms. They follow strict safety and quality practices and interpret evidence carefully.',
      skills: ['Aseptic technique', 'Observation', 'Laboratory safety', 'Data recording'],
      dayToDay: [
        'Prepare and examine samples',
        'Run tests and monitor cultures',
        'Record and interpret findings',
      ],
      relatedIds: ['biotechnologist', 'medical-lab-technologist', 'food-technologist'],
    },
  ),
  career(
    'environmental-scientist',
    'Environmental Scientist',
    'science',
    'Study environmental systems and assess the effects of human activity.',
    ['environment', 'ecology', 'pollution', 'sustainability'],
    {
      overview:
        'Environmental scientists collect and interpret environmental data. Their work supports conservation, regulation, remediation, and planning.',
      skills: ['Field sampling', 'Data analysis', 'Environmental awareness', 'Reporting'],
      dayToDay: [
        'Plan and conduct environmental sampling',
        'Analyse trends and impacts',
        'Prepare evidence and recommendations',
      ],
      relatedIds: ['environmental-engineer', 'ecologist', 'geologist'],
    },
  ),
  career(
    'geologist',
    'Geologist',
    'science',
    'Study rocks, landforms, and earth processes to understand resources and natural hazards.',
    ['geology', 'earth science', 'minerals', 'fieldwork'],
    {
      overview:
        'Geologists investigate the structure and history of the Earth. They combine fieldwork, mapping, and laboratory analysis to support construction, resources, and hazard assessment.',
      skills: ['Field observation', 'Earth processes', 'Mapping', 'Data interpretation'],
      dayToDay: [
        'Collect and examine rock and soil samples',
        'Map geological conditions',
        'Interpret findings for engineering or resource decisions',
      ],
      relatedIds: ['geotechnical-engineer', 'mining-engineer', 'hydrologist'],
    },
  ),
  career(
    'astronomer',
    'Astronomer',
    'science',
    'Study celestial objects and the universe using observation, data, and physical theory.',
    ['astronomy', 'space', 'telescope', 'astrophysics'],
    {
      overview:
        'Astronomers observe and model objects beyond Earth. They use telescopes, instruments, computation, and physics to interpret cosmic phenomena.',
      skills: ['Physics', 'Data analysis', 'Instrumentation awareness', 'Scientific writing'],
      dayToDay: [
        'Plan observations or analyse survey data',
        'Develop and test physical interpretations',
        'Share findings with the scientific community',
      ],
      relatedIds: ['physicist', 'research-scientist', 'aerospace-engineer'],
    },
  ),
  career(
    'meteorologist',
    'Meteorologist',
    'science',
    'Study the atmosphere and interpret weather patterns for forecasting and safety.',
    ['weather', 'climate', 'forecasting', 'atmosphere'],
    {
      overview:
        'Meteorologists analyse atmospheric data and models. They communicate uncertainty and support weather-sensitive decisions.',
      skills: ['Atmospheric science', 'Data interpretation', 'Forecasting', 'Communication'],
      dayToDay: [
        'Review weather observations and model output',
        'Prepare forecasts or warnings',
        'Explain uncertainty and impacts to users',
      ],
      relatedIds: ['environmental-scientist', 'hydrologist', 'pilot'],
    },
  ),
  career(
    'agricultural-scientist',
    'Agricultural Scientist',
    'science',
    'Improve crop and farming systems through research, soil science, and practical trials.',
    ['agriculture', 'crops', 'soil', 'food production'],
    {
      overview:
        'Agricultural scientists study plants, soils, and farming practices. They test improvements that aim to be productive, resilient, and sustainable.',
      skills: ['Crop science', 'Field trials', 'Data collection', 'Practical problem solving'],
      dayToDay: [
        'Plan and monitor field trials',
        'Assess soil, crops, and treatment effects',
        'Share practical findings with farmers or teams',
      ],
      relatedIds: ['agricultural-engineer', 'food-technologist', 'environmental-scientist'],
    },
  ),
  career(
    'food-technologist',
    'Food Technologist',
    'science',
    'Apply food science to safety, preservation, quality, and product development.',
    ['food science', 'quality', 'food safety', 'processing'],
    {
      overview:
        'Food technologists improve how food is processed, stored, and checked. They balance safety, quality, shelf life, cost, and consumer expectations.',
      skills: ['Food science', 'Quality control', 'Hygiene', 'Product testing'],
      dayToDay: [
        'Test food products and processes',
        'Review safety and quality standards',
        'Support product improvement and production',
      ],
      relatedIds: ['microbiologist', 'dietitian', 'chemical-engineer'],
    },
  ),
  career(
    'forensic-scientist',
    'Forensic Scientist',
    'science',
    'Analyse physical evidence using scientific methods to support investigations and legal processes.',
    ['forensics', 'evidence', 'laboratory', 'investigation'],
    {
      overview:
        'Forensic scientists examine evidence with strict procedures and documentation. They explain results clearly while recognising the limits of scientific evidence.',
      skills: ['Laboratory analysis', 'Chain of custody', 'Accuracy', 'Report writing'],
      dayToDay: [
        'Receive and document evidence',
        'Perform validated scientific tests',
        'Prepare findings for investigators or courts',
      ],
      relatedIds: ['cybercrime-investigator', 'chemist', 'biologist'],
    },
  ),
  career(
    'marine-biologist',
    'Marine Biologist',
    'science',
    'Study ocean life and marine ecosystems through field research and data analysis.',
    ['marine biology', 'ocean', 'ecosystems', 'fieldwork'],
    {
      overview:
        'Marine biologists investigate organisms and ecosystems in oceans and coastal areas. Work may involve boats, diving, laboratories, and conservation partnerships.',
      skills: ['Marine ecology', 'Field research', 'Observation', 'Data analysis'],
      dayToDay: [
        'Conduct field surveys or observations',
        'Analyse ecological data',
        'Document findings and conservation implications',
      ],
      relatedIds: ['biologist', 'ecologist', 'wildlife-conservationist'],
    },
  ),
  career(
    'ecologist',
    'Ecologist',
    'science',
    'Study relationships between organisms and their environments to support conservation and planning.',
    ['ecology', 'ecosystems', 'conservation', 'environment'],
    {
      overview:
        'Ecologists examine how species, habitats, and environmental factors interact. Their evidence informs conservation, land use, and restoration decisions.',
      skills: ['Ecological methods', 'Field observation', 'Data analysis', 'Systems thinking'],
      dayToDay: [
        'Survey species and habitats',
        'Analyse ecological relationships and change',
        'Advise on conservation or land-use decisions',
      ],
      relatedIds: ['environmental-scientist', 'wildlife-conservationist', 'marine-biologist'],
    },
  ),
  career(
    'wildlife-conservationist',
    'Wildlife Conservationist',
    'science',
    'Protect wildlife populations and habitats through research, management, and community work.',
    ['wildlife', 'conservation', 'animals', 'habitats'],
    {
      overview:
        'Wildlife conservationists combine ecological knowledge with practical action. They monitor species, manage habitats, and work with communities and authorities.',
      skills: ['Wildlife knowledge', 'Fieldwork', 'Community engagement', 'Planning'],
      dayToDay: [
        'Monitor wildlife and habitat conditions',
        'Support conservation or restoration work',
        'Coordinate with communities and partners',
      ],
      relatedIds: ['ecologist', 'veterinarian', 'indian-forest-service-officer'],
    },
  ),
  career(
    'biochemist',
    'Biochemist',
    'science',
    'Study the chemical processes and molecules that make living systems work.',
    ['biochemistry', 'molecules', 'cells', 'laboratory'],
    {
      overview:
        'Biochemists investigate proteins, metabolism, and molecular interactions. They work in research, diagnostics, industry, and education.',
      skills: ['Molecular analysis', 'Laboratory technique', 'Data interpretation', 'Precision'],
      dayToDay: [
        'Design and perform molecular experiments',
        'Analyse samples and results',
        'Document methods and conclusions',
      ],
      relatedIds: ['chemist', 'biotechnologist', 'geneticist'],
    },
  ),
  career(
    'geneticist',
    'Geneticist',
    'science',
    'Study genes, inheritance, and genetic variation in living organisms.',
    ['genetics', 'genes', 'heredity', 'research'],
    {
      overview:
        'Geneticists investigate how genetic information is stored, transmitted, and expressed. Their work can support health, agriculture, and biological research.',
      skills: ['Genetics', 'Laboratory methods', 'Statistics', 'Ethics'],
      dayToDay: [
        'Analyse genetic samples and data',
        'Design experiments or studies',
        'Interpret findings with appropriate ethical care',
      ],
      relatedIds: ['biotechnologist', 'biochemist', 'medical-lab-technologist'],
    },
  ),
  career(
    'material-scientist',
    'Material Scientist',
    'science',
    'Study and develop materials with properties suited to specific engineering needs.',
    ['materials', 'nanotechnology', 'research', 'engineering science'],
    {
      overview:
        'Material scientists connect atomic and microscopic structure with real-world performance. They develop and test materials for energy, medicine, electronics, and construction.',
      skills: ['Materials analysis', 'Experiment design', 'Data interpretation', 'Collaboration'],
      dayToDay: [
        'Prepare and characterise material samples',
        'Relate structure to performance',
        'Work with engineers on application constraints',
      ],
      relatedIds: ['physicist', 'chemist', 'metallurgical-engineer'],
    },
  ),
  career(
    'hydrologist',
    'Hydrologist',
    'science',
    'Study water movement, availability, and quality across landscapes and communities.',
    ['water', 'hydrology', 'resources', 'environment'],
    {
      overview:
        'Hydrologists measure and model water systems. Their evidence supports water supply, flood planning, irrigation, and environmental protection.',
      skills: ['Hydrological measurement', 'Data analysis', 'Modelling', 'Fieldwork'],
      dayToDay: [
        'Collect water and rainfall data',
        'Model flow, storage, or flood behaviour',
        'Advise on water resource decisions',
      ],
      relatedIds: ['environmental-scientist', 'civil-engineer', 'meteorologist'],
    },
  ),
]
