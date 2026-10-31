import type { Certification, Education } from '@/types'

/** Fictional sample education. Replace with your own qualifications. */
export const education: Education[] = [
  {
    id: 'baltic-institute',
    degree: 'B.Sc. Computer Science',
    institution: 'Baltic Institute of Technology',
    location: 'Copenhagen, Denmark',
    start: '2015',
    end: '2018',
    summary:
      'A practical computer science degree with an emphasis on software engineering, databases, and human–computer interaction. My final project explored keyboard accessibility in data-heavy interfaces.',
    coursework: [
      'Algorithms & data structures',
      'Database systems',
      'Human–computer interaction',
      'Distributed systems',
      'Software engineering practice',
    ],
  },
]

/**
 * Fictional sample certifications. Replace these with real credentials —
 * or remove them if you do not want a certification block on the page.
 */
export const certifications: Certification[] = [
  {
    id: 'cloud-architecture',
    title: 'Applied Cloud Architecture',
    issuer: 'Nordic Cloud Academy',
    year: '2023',
    summary:
      'Hands-on course covering containerized deployments, infrastructure as code, and observability fundamentals.',
  },
  {
    id: 'accessible-interfaces',
    title: 'Accessible Interface Design',
    issuer: 'Open Accessibility Guild',
    year: '2022',
    summary:
      'Practical accessibility program focused on semantic structure, keyboard interaction, and assistive-technology testing.',
  },
]
