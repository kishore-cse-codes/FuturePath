import { career } from './shared'

export const creativeCareers = [
  career(
    'graphic-designer',
    'Graphic Designer',
    'creative',
    'Create visual communication for brands, campaigns, publications, and digital products.',
    ['graphic design', 'visual design', 'branding', 'layout'],
    {
      overview:
        'Graphic designers combine type, image, colour, and layout to communicate ideas. They balance creativity with audience needs, production constraints, and clear messaging.',
      skills: ['Visual composition', 'Typography', 'Design software', 'Communication'],
      dayToDay: [
        'Understand a communication brief',
        'Develop and revise visual concepts',
        'Prepare files for digital or print production',
      ],
      relatedIds: ['illustrator', 'art-director', 'product-designer'],
    },
  ),
  career(
    'product-designer',
    'Product Designer',
    'creative',
    'Shape digital products so they are useful, usable, and coherent for the people who rely on them.',
    ['ui ux', 'user experience', 'interaction design', 'product design'],
    {
      overview:
        'Product designers research user needs and design flows, interfaces, and systems. They work closely with product and engineering teams from problem framing to delivery.',
      skills: ['User research', 'Interaction design', 'Prototyping', 'Visual design'],
      dayToDay: [
        'Research user needs and pain points',
        'Design flows, interfaces, and prototypes',
        'Test designs and refine with engineering teams',
      ],
      relatedIds: ['ui-ux-researcher', 'graphic-designer', 'product-manager'],
    },
  ),
  career(
    'ui-ux-researcher',
    'UX Researcher',
    'creative',
    'Study how people use products and turn evidence into design and product decisions.',
    ['user research', 'usability', 'interviews', 'testing'],
    {
      overview:
        'UX researchers plan studies, observe users, and communicate insights. Their work reduces assumptions and helps teams design around real needs.',
      skills: ['Research methods', 'Interviewing', 'Synthesis', 'Communication'],
      dayToDay: [
        'Plan interviews or usability studies',
        'Observe and analyse user behaviour',
        'Present actionable insights to product teams',
      ],
      relatedIds: ['product-designer', 'data-analyst', 'product-manager'],
    },
  ),
  career(
    'animator',
    'Animator',
    'creative',
    'Bring characters, objects, and ideas to life through movement and visual storytelling.',
    ['animation', 'motion', '3d', '2d animation'],
    {
      overview:
        'Animators create sequences that communicate emotion, action, or information. They combine drawing or digital tools with timing and observation.',
      skills: ['Animation principles', 'Timing', 'Digital tools', 'Observation'],
      dayToDay: [
        'Plan animation sequences from a brief',
        'Create and refine keyframes and motion',
        'Collaborate with directors and sound teams',
      ],
      relatedIds: ['illustrator', 'game-designer', 'video-editor'],
    },
  ),
  career(
    'illustrator',
    'Illustrator',
    'creative',
    'Create original images for stories, publications, products, and visual communication.',
    ['illustration', 'drawing', 'digital art', 'visual storytelling'],
    {
      overview:
        'Illustrators develop visual ideas that fit a purpose and audience. They build a portfolio, interpret briefs, and refine work through feedback.',
      skills: ['Drawing', 'Visual storytelling', 'Style development', 'Client communication'],
      dayToDay: [
        'Interpret a brief and develop concepts',
        'Create illustrations and revise artwork',
        'Prepare final files for the intended medium',
      ],
      relatedIds: ['graphic-designer', 'animator', 'fine-artist'],
    },
  ),
  career(
    'fashion-designer',
    'Fashion Designer',
    'creative',
    'Design clothing and accessories that combine aesthetics, materials, and wearability.',
    ['fashion', 'apparel', 'textiles', 'clothing design'],
    {
      overview:
        'Fashion designers move from inspiration and sketches to materials, samples, and collections. They balance creativity with cost, fit, production, and market needs.',
      skills: ['Design sketching', 'Material knowledge', 'Trend awareness', 'Production thinking'],
      dayToDay: [
        'Research concepts and develop designs',
        'Review materials, samples, and fit',
        'Coordinate with production and merchandising',
      ],
      relatedIds: ['textile-designer', 'graphic-designer', 'art-director'],
    },
  ),
  career(
    'textile-designer',
    'Textile Designer',
    'creative',
    'Develop patterns, surfaces, and fabric designs for apparel, interiors, and products.',
    ['textile design', 'patterns', 'fabrics', 'surface design'],
    {
      overview:
        'Textile designers combine visual design with knowledge of fibres, printing, weaving, and production. Their work appears across fashion and interiors.',
      skills: ['Pattern design', 'Material awareness', 'Colour sense', 'Production knowledge'],
      dayToDay: [
        'Develop patterns and colour stories',
        'Test designs on appropriate materials',
        'Coordinate production feasibility',
      ],
      relatedIds: ['fashion-designer', 'interior-designer', 'graphic-designer'],
    },
  ),
  career(
    'interior-designer',
    'Interior Designer',
    'creative',
    'Plan indoor spaces that are functional, safe, and visually appropriate for their users.',
    ['interior design', 'spaces', 'furniture', 'layout'],
    {
      overview:
        'Interior designers combine spatial planning, materials, lighting, and user needs. They coordinate drawings and specifications with clients and contractors.',
      skills: ['Spatial planning', 'Materials', 'Visual communication', 'Client coordination'],
      dayToDay: [
        'Understand space requirements and constraints',
        'Develop layouts, materials, and visual concepts',
        'Coordinate with contractors and suppliers',
      ],
      relatedIds: ['architect', 'textile-designer', 'graphic-designer'],
    },
  ),
  career(
    'architect',
    'Architect',
    'creative',
    'Design buildings and spaces that respond to people, context, safety, and function.',
    ['architecture', 'buildings', 'design', 'planning'],
    {
      overview:
        'Architects develop building designs and coordinate technical documentation. They balance aesthetics, usability, regulations, cost, and construction realities.',
      skills: ['Architectural design', 'Drawing', 'Building awareness', 'Coordination'],
      dayToDay: [
        'Develop concepts and spatial layouts',
        'Prepare drawings and design documentation',
        'Coordinate with engineers, clients, and contractors',
      ],
      relatedIds: ['interior-designer', 'civil-engineer', 'urban-planner'],
    },
  ),
  career(
    'photographer',
    'Photographer',
    'creative',
    'Create images for storytelling, documentation, products, people, or editorial use.',
    ['photography', 'camera', 'visual storytelling', 'editing'],
    {
      overview:
        'Photographers plan and capture images with attention to light, composition, subject, and purpose. They also select, edit, and deliver final work.',
      skills: ['Camera craft', 'Lighting', 'Composition', 'Editing'],
      dayToDay: [
        'Plan shoots and prepare equipment',
        'Direct or observe subjects and capture images',
        'Select and edit final photographs',
      ],
      relatedIds: ['filmmaker', 'video-editor', 'journalist'],
    },
  ),
  career(
    'filmmaker',
    'Filmmaker',
    'creative',
    'Turn stories or ideas into films through direction, production, and collaboration.',
    ['film', 'direction', 'production', 'cinema'],
    {
      overview:
        'Filmmakers guide creative and practical production. Depending on the role, work can include writing, directing, scheduling, and coordinating cast and crew.',
      skills: ['Storytelling', 'Visual planning', 'Collaboration', 'Production awareness'],
      dayToDay: [
        'Develop the story and visual approach',
        'Plan scenes, people, and production needs',
        'Guide editing and final delivery',
      ],
      relatedIds: ['video-editor', 'photographer', 'sound-designer'],
    },
  ),
  career(
    'video-editor',
    'Video Editor',
    'creative',
    'Assemble footage, sound, and graphics into clear and engaging finished videos.',
    ['editing', 'post production', 'video', 'storytelling'],
    {
      overview:
        'Video editors shape pacing, structure, and meaning in post-production. They organise footage, make cuts, and integrate sound and visual elements.',
      skills: ['Editing software', 'Story structure', 'Pacing', 'Technical organisation'],
      dayToDay: [
        'Review and organise footage',
        'Build rough and fine cuts',
        'Integrate sound, graphics, and revisions',
      ],
      relatedIds: ['filmmaker', 'animator', 'sound-designer'],
    },
  ),
  career(
    'content-writer',
    'Content Writer',
    'creative',
    'Write clear, useful content for websites, publications, brands, and learning materials.',
    ['writing', 'copywriting', 'content', 'editing'],
    {
      overview:
        'Content writers research topics and shape information for a specific audience. They balance clarity, accuracy, tone, and purpose.',
      skills: ['Writing', 'Research', 'Editing', 'Audience awareness'],
      dayToDay: [
        'Research topics and understand the audience',
        'Draft and revise content',
        'Check accuracy, structure, and style',
      ],
      relatedIds: ['journalist', 'advertising-copywriter', 'instructional-designer'],
    },
  ),
  career(
    'journalist',
    'Journalist',
    'creative',
    'Report news and public-interest stories through careful research, interviewing, and verification.',
    ['news', 'reporting', 'editorial', 'media'],
    {
      overview:
        'Journalists gather information, verify facts, and communicate stories to the public. Accuracy, fairness, and source protection are central to responsible reporting.',
      skills: ['Reporting', 'Interviewing', 'Verification', 'Writing'],
      dayToDay: [
        'Track developments and story leads',
        'Interview sources and verify facts',
        'Write or produce reports to deadline',
      ],
      relatedIds: ['content-writer', 'photographer', 'public-relations-specialist'],
    },
  ),
  career(
    'advertising-copywriter',
    'Advertising Copywriter',
    'creative',
    'Write persuasive, memorable words for campaigns, brands, and commercial communication.',
    ['copywriting', 'advertising', 'campaigns', 'brand voice'],
    {
      overview:
        'Advertising copywriters translate strategy into concise language. They generate ideas, adapt tone, and collaborate with designers and strategists.',
      skills: ['Persuasive writing', 'Idea generation', 'Brand awareness', 'Collaboration'],
      dayToDay: [
        'Interpret campaign strategy and audience',
        'Develop concepts and copy options',
        'Refine language with creative and brand teams',
      ],
      relatedIds: ['content-writer', 'art-director', 'marketing-manager'],
    },
  ),
  career(
    'game-designer',
    'Game Designer',
    'creative',
    'Design game rules, systems, levels, and player experiences.',
    ['game design', 'level design', 'gameplay', 'player experience'],
    {
      overview:
        'Game designers define how games work and feel. They prototype mechanics, tune difficulty, and collaborate with artists, engineers, and writers.',
      skills: ['Game systems', 'Prototyping', 'Player psychology', 'Playtesting'],
      dayToDay: [
        'Design and document game mechanics',
        'Build or test prototypes',
        'Review playtests and tune the experience',
      ],
      relatedIds: ['game-developer', 'animator', 'product-designer'],
    },
  ),
  career(
    'art-director',
    'Art Director',
    'creative',
    'Guide the visual direction of campaigns, publications, films, or digital products.',
    ['art direction', 'creative direction', 'visual strategy', 'design leadership'],
    {
      overview:
        'Art directors set and maintain a coherent visual vision. They lead creative teams, review work, and connect visual choices with the brief.',
      skills: ['Visual judgement', 'Creative leadership', 'Brief interpretation', 'Collaboration'],
      dayToDay: [
        'Define visual direction from the brief',
        'Guide designers, photographers, or production teams',
        'Review work for consistency and quality',
      ],
      relatedIds: ['graphic-designer', 'filmmaker', 'advertising-copywriter'],
    },
  ),
  career(
    'sound-designer',
    'Sound Designer',
    'creative',
    'Create and shape audio for films, games, installations, and other media.',
    ['sound design', 'audio', 'mixing', 'sound effects'],
    {
      overview:
        'Sound designers build atmosphere and meaning through effects, ambience, and audio treatment. They work with technical tools and close creative collaboration.',
      skills: ['Audio editing', 'Acoustics', 'Creative listening', 'Technical problem solving'],
      dayToDay: [
        'Plan sound elements for a production',
        'Record, create, and edit audio',
        'Mix and refine sound with the creative team',
      ],
      relatedIds: ['music-producer', 'video-editor', 'filmmaker'],
    },
  ),
  career(
    'music-producer',
    'Music Producer',
    'creative',
    'Shape recorded music through composition, arrangement, recording, and production.',
    ['music production', 'audio engineering', 'composition', 'studio'],
    {
      overview:
        'Music producers guide recordings from idea to finished track. They coordinate performance, arrangement, sound, and technical production.',
      skills: ['Music theory', 'Audio production', 'Arrangement', 'Collaboration'],
      dayToDay: [
        'Develop song ideas and arrangements',
        'Record and edit performances',
        'Mix tracks and coordinate final delivery',
      ],
      relatedIds: ['sound-designer', 'filmmaker', 'fine-artist'],
    },
  ),
  career(
    'fine-artist',
    'Fine Artist',
    'creative',
    'Create original artwork for exhibitions, commissions, collections, or public spaces.',
    ['fine art', 'painting', 'sculpture', 'art practice'],
    {
      overview:
        'Fine artists develop a body of work and a sustainable practice. They create, exhibit, apply for opportunities, and communicate the ideas behind their work.',
      skills: ['Artistic practice', 'Concept development', 'Exhibition awareness', 'Self-management'],
      dayToDay: [
        'Develop ideas and create artwork',
        'Document and present work',
        'Prepare exhibitions, commissions, or applications',
      ],
      relatedIds: ['illustrator', 'photographer', 'art-director'],
    },
  ),
]
