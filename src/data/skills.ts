import type { SkillGroup } from '@/types'

/**
 * Skill groups are intentionally categorical — no invented percentage bars.
 * Levels are honest, qualitative labels that are easy to change.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Interfaces that feel quick, predictable, and considerate of every input method.',
    icon: 'layout',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'React Router', level: 'Proficient' },
      { name: 'HTML & CSS', level: 'Advanced' },
      { name: 'Motion', level: 'Proficient' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Straightforward services with clear boundaries and contracts that are easy to trust.',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Hono', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'Zod', level: 'Proficient' },
      { name: 'Prisma', level: 'Proficient' },
      { name: 'GraphQL', level: 'Working knowledge' },
      { name: 'Bun', level: 'Proficient' },
      { name: 'WebSockets', level: 'Working knowledge' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Data models and queries designed for the questions the product actually asks.',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Redis', level: 'Proficient' },
      { name: 'SQLite', level: 'Proficient' },
      { name: 'Drizzle ORM', level: 'Proficient' },
      { name: 'Supabase', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Database design', level: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description: 'Pipelines and environments that make shipping small changes uneventful.',
    icon: 'infrastructure',
    skills: [
      { name: 'Docker', level: 'Proficient' },
      { name: 'GitHub Actions', level: 'Proficient' },
      { name: 'Cloudflare', level: 'Proficient' },
      { name: 'Vercel', level: 'Proficient' },
      { name: 'Nginx', level: 'Working knowledge' },
      { name: 'Terraform', level: 'Working knowledge' },
      { name: 'Linux', level: 'Working knowledge' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'The everyday setup: sharp feedback loops, readable diffs, and tests that earn their keep.',
    icon: 'workflow',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'GitHub', level: 'Advanced' },
      { name: 'Vitest', level: 'Proficient' },
      { name: 'Figma', level: 'Proficient' },
      { name: 'ESLint', level: 'Proficient' },
      { name: 'Storybook', level: 'Working knowledge' },
      { name: 'Playwright', level: 'Working knowledge' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Enough cross-platform experience to take a product from responsive web to native shells.',
    icon: 'mobile',
    skills: [
      { name: 'React Native', level: 'Working knowledge' },
      { name: 'Expo', level: 'Working knowledge' },
      { name: 'React Navigation', level: 'Working knowledge' },
      { name: 'AsyncStorage', level: 'Working knowledge' },
      { name: 'Push notifications', level: 'Working knowledge' },
      { name: 'EAS Build', level: 'Working knowledge' },
    ],
  },
]
