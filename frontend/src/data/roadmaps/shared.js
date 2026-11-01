export const SOURCES = {
  upsc: {
    label: 'UPSC – official examination information',
    url: 'https://upsc.gov.in/',
  },
  neet: {
    label: 'NTA – NEET (UG)',
    url: 'https://neet.nta.nic.in/',
  },
  jeeMain: {
    label: 'NTA – JEE (Main)',
    url: 'https://jeemain.nta.nic.in/',
  },
  nmc: {
    label: 'National Medical Commission',
    url: 'https://www.nmc.org.in/',
  },
  dentalCouncil: {
    label: 'Dental Council of India',
    url: 'https://dciindia.gov.in/',
  },
  pharmacyCouncil: {
    label: 'Pharmacy Council of India',
    url: 'https://www.pci.nic.in/',
  },
  nursingCouncil: {
    label: 'Indian Nursing Council',
    url: 'https://www.indiannursingcouncil.org/',
  },
  rehabilitationCouncil: {
    label: 'Rehabilitation Council of India',
    url: 'https://rehabcouncil.nic.in/',
  },
  icai: {
    label: 'ICAI – Institute of Chartered Accountants of India',
    url: 'https://www.icai.org/',
  },
  icsi: {
    label: 'ICSI – Institute of Company Secretaries of India',
    url: 'https://www.icsi.edu/',
  },
  barCouncil: {
    label: 'Bar Council of India',
    url: 'https://www.barcouncilofindia.org/',
  },
  councilOfArchitecture: {
    label: 'Council of Architecture',
    url: 'https://www.coa.gov.in/',
  },
  nata: {
    label: 'NATA – National Aptitude Test in Architecture',
    url: 'https://www.nata.in/',
  },
  ncte: {
    label: 'National Council for Teacher Education',
    url: 'https://ncte.gov.in/',
  },
  ctet: {
    label: 'CBSE – Central Teacher Eligibility Test',
    url: 'https://ctet.nic.in/',
  },
  ugcNet: {
    label: 'UGC NET – official information',
    url: 'https://ugcnet.nta.ac.in/',
  },
  csirNet: {
    label: 'CSIR NET – official information',
    url: 'https://csirnet.nta.ac.in/',
  },
  dgca: {
    label: 'Directorate General of Civil Aviation',
    url: 'https://www.dgca.gov.in/',
  },
  indianArmy: {
    label: 'Indian Army – official recruitment',
    url: 'https://joinindianarmy.nic.in/',
  },
  indianNavy: {
    label: 'Indian Navy – official recruitment',
    url: 'https://www.joinindiannavy.gov.in/',
  },
  indianAirForce: {
    label: 'Indian Air Force – official recruitment',
    url: 'https://indianairforce.nic.in/',
  },
  afcat: {
    label: 'AFCAT – Air Force Common Admission Test',
    url: 'https://afcat.cdac.in/',
  },
  cfa: {
    label: 'CFA Institute – CFA Program',
    url: 'https://www.cfainstitute.org/programs/cfa',
  },
  nid: {
    label: 'National Institute of Design – admissions',
    url: 'https://www.nid.edu/admissions',
  },
  nift: {
    label: 'National Institute of Fashion Technology – admissions',
    url: 'https://www.nift.ac.in/admissions',
  },
  uceed: {
    label: 'UCEED – undergraduate design admissions',
    url: 'https://www.uceed.iitb.ac.in/',
  },
  aicte: {
    label: 'All India Council for Technical Education',
    url: 'https://www.aicte-india.org/',
  },
}

export const stage = (title, description, duration, focus = []) => ({
  title,
  description,
  duration,
  focus,
})

export const exam = (name, note, source) => ({
  name,
  note,
  source,
})

export function roadmap({
  id,
  title,
  categoryId,
  intro,
  duration,
  stages,
  subjects = [],
  exams = [],
  qualifications = [],
  skills = [],
  practical = [],
  licensing = [],
  entryRoutes = [],
  alternatives = [],
  sources = [],
  note = '',
}) {
  if (!id || !title || !intro || !duration || !stages?.length) {
    throw new Error(`Incomplete roadmap data for "${id || title || 'unknown'}"`)
  }

  return {
    id,
    title,
    categoryId,
    intro,
    duration,
    stages,
    subjects,
    exams,
    qualifications,
    skills,
    practical,
    licensing,
    entryRoutes,
    alternatives,
    sources,
    note,
  }
}
