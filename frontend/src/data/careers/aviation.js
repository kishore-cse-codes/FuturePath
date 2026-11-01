import { career } from './shared'

export const aviationCareers = [
  career(
    'pilot',
    'Pilot',
    'aviation',
    'Operate aircraft safely while managing navigation, communication, procedures, and passenger safety.',
    ['aviation', 'commercial pilot', 'flying', 'aircraft'],
    {
      overview:
        'Pilots prepare flights, operate aircraft, and respond to changing conditions. Training, licensing, medical standards, and recurrent checks are part of the profession.',
      skills: ['Situational awareness', 'Navigation', 'Communication', 'Calm decision making'],
      stages: ['Class 10', 'Intermediate (Physics and Mathematics usually required)', 'Flight training and licensing', 'Pilot'],
      dayToDay: [
        'Review weather, route, and aircraft status',
        'Complete pre-flight checks and operate the flight',
        'Coordinate with crew and air traffic control',
      ],
      relatedIds: ['aircraft-maintenance-engineer', 'air-traffic-controller', 'air-force-officer'],
    },
  ),
  career(
    'aircraft-maintenance-engineer',
    'Aircraft Maintenance Engineer',
    'aviation',
    'Inspect, maintain, and certify aircraft systems so flights can operate safely.',
    ['aircraft maintenance', 'ame', 'aviation engineering', 'safety'],
    {
      overview:
        'Aircraft maintenance engineers inspect and repair aircraft and associated systems. They follow detailed procedures, record work, and apply safety and airworthiness standards.',
      skills: ['Aircraft systems', 'Technical inspection', 'Procedure discipline', 'Safety'],
      dayToDay: [
        'Inspect aircraft and identify defects',
        'Perform or supervise maintenance tasks',
        'Record work and certify airworthiness within scope',
      ],
      relatedIds: ['pilot', 'aviation-safety-officer', 'aerospace-engineer'],
    },
  ),
  career(
    'air-traffic-controller',
    'Air Traffic Controller',
    'aviation',
    'Coordinate aircraft movements safely and efficiently in the air and on the ground.',
    ['atc', 'air traffic', 'aviation safety', 'control tower'],
    {
      overview:
        'Air traffic controllers direct aircraft using radar, communication, and clear procedures. The role demands concentration, spatial awareness, and calm communication.',
      skills: ['Spatial awareness', 'Clear communication', 'Concentration', 'Procedure discipline'],
      dayToDay: [
        'Monitor airspace and aircraft movements',
        'Issue clear instructions to pilots',
        'Coordinate with adjacent control positions',
      ],
      relatedIds: ['pilot', 'flight-dispatcher', 'aviation-safety-officer'],
    },
  ),
  career(
    'cabin-crew',
    'Cabin Crew',
    'aviation',
    'Support passenger safety, comfort, and service aboard flights.',
    ['flight attendant', 'cabin crew', 'airline service', 'safety'],
    {
      overview:
        'Cabin crew combine safety duties with passenger service. They prepare the cabin, deliver safety instructions, and respond to emergencies or passenger needs.',
      skills: ['Safety procedures', 'Customer service', 'Communication', 'Teamwork'],
      dayToDay: [
        'Complete pre-flight safety checks',
        'Assist passengers and deliver service',
        'Follow emergency and safety procedures',
      ],
      relatedIds: ['pilot', 'travel-agent', 'hotel-manager'],
    },
  ),
  career(
    'flight-dispatcher',
    'Flight Dispatcher',
    'aviation',
    'Plan and monitor flights, coordinating operational information with pilots and ground teams.',
    ['flight operations', 'dispatch', 'aviation', 'flight planning'],
    {
      overview:
        'Flight dispatchers prepare operational flight plans and monitor conditions. They share weather, route, fuel, and operational information with flight crews.',
      skills: ['Flight planning', 'Operational awareness', 'Communication', 'Procedure discipline'],
      dayToDay: [
        'Prepare flight plans and operational briefings',
        'Monitor weather and flight progress',
        'Coordinate changes with crews and operations',
      ],
      relatedIds: ['air-traffic-controller', 'airline-operations-manager', 'pilot'],
    },
  ),
  career(
    'airport-manager',
    'Airport Manager',
    'aviation',
    'Coordinate airport operations, facilities, services, and safety across multiple stakeholders.',
    ['airport operations', 'facilities', 'aviation management'],
    {
      overview:
        'Airport managers keep complex facilities operating safely. They coordinate terminals, airside activities, service providers, emergencies, and passenger experience.',
      skills: ['Operations management', 'Safety coordination', 'Communication', 'Planning'],
      dayToDay: [
        'Review operational and passenger issues',
        'Coordinate service providers and facilities',
        'Prepare for disruptions and emergencies',
      ],
      relatedIds: ['airline-operations-manager', 'aviation-safety-officer', 'operations-manager'],
    },
  ),
  career(
    'aviation-safety-officer',
    'Aviation Safety Officer',
    'aviation',
    'Develop and monitor safety systems, investigations, and compliance in aviation operations.',
    ['aviation safety', 'risk', 'compliance', 'investigation'],
    {
      overview:
        'Aviation safety officers assess operational risks and strengthen safety systems. They support reporting, investigation, training, and regulatory compliance.',
      skills: ['Safety management', 'Investigation', 'Risk assessment', 'Documentation'],
      dayToDay: [
        'Review safety reports and risk indicators',
        'Support incident investigations',
        'Coordinate safety training and compliance',
      ],
      relatedIds: ['aircraft-maintenance-engineer', 'air-traffic-controller', 'emergency-management-specialist'],
    },
  ),
  career(
    'travel-agent',
    'Travel Agent',
    'aviation',
    'Help travellers plan transport, stays, itineraries, and bookings that fit their needs.',
    ['travel planning', 'bookings', 'tourism', 'customer service'],
    {
      overview:
        'Travel agents connect customers with travel options and solve practical planning problems. They compare choices, manage bookings, and respond to changes.',
      skills: ['Travel knowledge', 'Customer service', 'Organisation', 'Problem solving'],
      dayToDay: [
        'Understand travel needs and budgets',
        'Compare and book arrangements',
        'Handle changes and customer questions',
      ],
      relatedIds: ['tour-manager', 'tourism-officer', 'cabin-crew'],
    },
  ),
  career(
    'tour-manager',
    'Tour Manager',
    'aviation',
    'Plan and lead group travel so itineraries, logistics, and participant needs are managed well.',
    ['tour operations', 'group travel', 'itinerary', 'travel management'],
    {
      overview:
        'Tour managers coordinate travel programmes on the ground. They manage schedules, suppliers, unexpected changes, and group communication.',
      skills: ['Logistics', 'Group management', 'Communication', 'Adaptability'],
      dayToDay: [
        'Review itineraries and supplier arrangements',
        'Guide groups through schedules and changes',
        'Resolve logistics or participant issues',
      ],
      relatedIds: ['travel-agent', 'event-manager', 'tourism-officer'],
    },
  ),
  career(
    'tourism-officer',
    'Tourism Officer',
    'aviation',
    'Support tourism development, visitor services, and destination promotion.',
    ['tourism', 'destination management', 'visitor services', 'development'],
    {
      overview:
        'Tourism officers work with destinations, service providers, and communities. They plan promotion, improve visitor experience, and consider sustainable tourism.',
      skills: ['Tourism planning', 'Communication', 'Partnerships', 'Sustainability awareness'],
      dayToDay: [
        'Review destination needs and visitor feedback',
        'Coordinate promotion and service improvements',
        'Work with local providers and authorities',
      ],
      relatedIds: ['travel-agent', 'tour-manager', 'event-manager'],
    },
  ),
  career(
    'hotel-manager',
    'Hotel Manager',
    'aviation',
    'Lead hotel operations, guest experience, teams, and commercial performance.',
    ['hospitality', 'hotel management', 'guest services', 'operations'],
    {
      overview:
        'Hotel managers coordinate rooms, food and beverage, staff, facilities, and guest service. They balance hospitality quality with financial and operational targets.',
      skills: ['Hospitality operations', 'Leadership', 'Customer service', 'Commercial awareness'],
      dayToDay: [
        'Review occupancy, service, and operational issues',
        'Lead department teams and guest recovery',
        'Manage budgets, standards, and facilities',
      ],
      relatedIds: ['chef', 'event-manager', 'operations-manager'],
    },
  ),
  career(
    'chef',
    'Chef',
    'aviation',
    'Create and deliver food in professional kitchens with attention to quality, safety, and teamwork.',
    ['culinary arts', 'cooking', 'kitchen', 'food service'],
    {
      overview:
        'Chefs plan menus, prepare food, and lead kitchen teams. The work combines creativity with hygiene, timing, cost, and high-pressure coordination.',
      skills: ['Culinary technique', 'Food safety', 'Time management', 'Teamwork'],
      dayToDay: [
        'Prepare ingredients and dishes',
        'Coordinate kitchen timing and quality',
        'Maintain hygiene and stock standards',
      ],
      relatedIds: ['hotel-manager', 'food-technologist', 'event-manager'],
    },
  ),
  career(
    'event-manager',
    'Event Manager',
    'aviation',
    'Plan and deliver events by coordinating venues, suppliers, schedules, and guest experience.',
    ['event planning', 'conferences', 'hospitality', 'logistics'],
    {
      overview:
        'Event managers turn a brief into a workable programme. They coordinate budgets, suppliers, venues, people, and contingencies before and during the event.',
      skills: ['Planning', 'Vendor coordination', 'Budget awareness', 'Calm problem solving'],
      dayToDay: [
        'Plan schedules, venues, and supplier needs',
        'Coordinate teams before the event',
        'Manage live operations and unexpected issues',
      ],
      relatedIds: ['hotel-manager', 'tour-manager', 'project-manager'],
    },
  ),
  career(
    'airline-operations-manager',
    'Airline Operations Manager',
    'aviation',
    'Coordinate airline schedules, resources, and disruptions across operational teams.',
    ['airline operations', 'flight operations', 'aviation management'],
    {
      overview:
        'Airline operations managers keep flights and supporting resources moving. They coordinate crews, aircraft, airports, and recovery plans during disruptions.',
      skills: ['Operational planning', 'Coordination', 'Decision making', 'Communication'],
      dayToDay: [
        'Review schedules and resource constraints',
        'Coordinate responses to delays or disruptions',
        'Communicate operational decisions across teams',
      ],
      relatedIds: ['flight-dispatcher', 'airport-manager', 'operations-manager'],
    },
  ),
]
