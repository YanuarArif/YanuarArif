import type { Certification, Education, Localized } from '@/types'

/** Fictional sample education. Replace with your own qualifications. */
export const educationContent: Localized<Education[]> = {
  en: [
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
  ],
  id: [
    {
      id: 'baltic-institute',
      degree: 'S1 Ilmu Komputer',
      institution: 'Baltic Institute of Technology',
      location: 'Kopenhagen, Denmark',
      start: '2015',
      end: '2018',
      summary:
        'Gelar ilmu komputer yang praktis dengan penekanan pada rekayasa perangkat lunak, basis data, dan interaksi manusia–komputer. Proyek akhir saya meneliti aksesibilitas keyboard pada antarmuka yang padat data.',
      coursework: [
        'Algoritma & struktur data',
        'Sistem basis data',
        'Interaksi manusia–komputer',
        'Sistem terdistribusi',
        'Praktik rekayasa perangkat lunak',
      ],
    },
  ],
}

/**
 * Fictional sample certifications. Replace these with real credentials —
 * or remove them if you do not want a certification block on the page.
 */
export const certificationsContent: Localized<Certification[]> = {
  en: [
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
  ],
  id: [
    {
      id: 'cloud-architecture',
      title: 'Arsitektur Cloud Terapan',
      issuer: 'Nordic Cloud Academy',
      year: '2023',
      summary:
        'Kursus praktik yang mencakup deployment tercontainerisasi, infrastructure as code, dan dasar-dasar observabilitas.',
    },
    {
      id: 'accessible-interfaces',
      title: 'Desain Antarmuka Aksesibel',
      issuer: 'Open Accessibility Guild',
      year: '2022',
      summary:
        'Program aksesibilitas praktis yang berfokus pada struktur semantik, interaksi keyboard, dan pengujian dengan teknologi bantu.',
    },
  ],
}
