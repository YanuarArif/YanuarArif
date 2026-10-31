import type { TimelineEntry } from '@/types'

/**
 * Fictional sample history — replace with your own roles.
 * `kind` controls the icon and label used by the timeline.
 */
export const experience: TimelineEntry[] = [
  {
    id: 'northlight',
    kind: 'work',
    title: 'Senior Full-Stack Developer',
    organisation: 'Northlight Studio',
    location: 'Copenhagen · Hybrid',
    start: '2023',
    end: 'Present',
    summary:
      'Product studio building web applications for early-stage teams. I lead frontend architecture while staying close to API design and delivery.',
    highlights: [
      'Led the rebuild of a client analytics product from a legacy dashboard to a route-split React application.',
      'Introduced a shared design system and typed API client used across four client projects.',
      'Reduced CI feedback time by splitting test suites and caching dependency installs.',
      'Mentored two mid-level developers through structured code review and pairing sessions.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Design systems'],
  },
  {
    id: 'cobalt',
    kind: 'work',
    title: 'Full-Stack Developer',
    organisation: 'Cobalt Systems',
    location: 'Berlin · Remote',
    start: '2020',
    end: '2023',
    summary:
      'B2B analytics platform for operations teams. I worked across the React client, Node services, and the reporting data model.',
    highlights: [
      'Designed a permissions model and API used by every workspace role.',
      'Built a filterable reporting interface that kept complex query state in the URL.',
      'Improved page performance by reducing client bundle size and deferring heavy chart modules.',
      'Added integration tests around the most error-prone billing and export flows.',
    ],
    tags: ['React', 'TypeScript', 'REST APIs', 'Prisma', 'PostgreSQL'],
  },
  {
    id: 'freelance',
    kind: 'freelance',
    title: 'Freelance Web Developer',
    organisation: 'Independent',
    location: 'Remote',
    start: '2019',
    end: '2020',
    summary:
      'Designed and built focused websites and small commerce experiences for independent studios and local businesses.',
    highlights: [
      'Delivered responsive marketing sites and lightweight storefronts end to end.',
      'Established a repeatable handoff process for content editing and analytics setup.',
      'Learned to scope work around outcomes rather than feature lists.',
    ],
    tags: ['JavaScript', 'CSS', 'Accessibility', 'CMS'],
  },
  {
    id: 'open-source',
    kind: 'development',
    title: 'Open-source & technical writing',
    organisation: 'Independent practice',
    location: 'Remote',
    start: '2022',
    end: 'Present',
    summary:
      'A deliberate practice for learning in public: small utilities, careful code reviews, and notes on interface engineering.',
    highlights: [
      'Maintain a small TypeScript utility for typed form validation.',
      'Write practical articles about React architecture, accessibility, and developer experience.',
      'Contribute occasional documentation and accessibility fixes to projects I use.',
    ],
    tags: ['Open source', 'Writing', 'TypeScript', 'Accessibility'],
  },
]

export const experienceKindLabels = {
  work: 'Full-time',
  freelance: 'Freelance',
  education: 'Education',
  certification: 'Certification',
  development: 'Personal development',
} as const
