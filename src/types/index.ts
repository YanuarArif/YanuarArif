/**
 * Shared content models. All portfolio copy lives in `src/data` and is typed
 * against these interfaces so missing or malformed content fails at build time.
 */

export type Theme = 'light' | 'dark'

export type SocialPlatform = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  label: string
  href: string
  platform: SocialPlatform
}

export interface Availability {
  available: boolean
  label: string
  detail: string
}

export interface Profile {
  name: string
  firstName: string
  initials: string
  role: string
  tagline: string
  intro: string
  location: string
  locationShort: string
  timezone: string
  email: string
  siteUrl: string
  seoDescription: string
  availability: Availability
  socials: SocialLink[]
}

export interface AboutHighlight {
  title: string
  description: string
  icon: 'compass' | 'accessibility' | 'layers'
}

export interface LearningItem {
  title: string
  description: string
}

export interface About {
  portrait: {
    src: string
    alt: string
  }
  paragraphs: string[]
  interests: string[]
  goals: string[]
  learning: LearningItem[]
  highlights: AboutHighlight[]
}

export type SkillLevel = 'Advanced' | 'Proficient' | 'Working knowledge'

export interface Skill {
  name: string
  level: SkillLevel
}

export type SkillGroupIcon =
  | 'layout'
  | 'server'
  | 'database'
  | 'infrastructure'
  | 'workflow'
  | 'mobile'

export interface SkillGroup {
  id: string
  title: string
  description: string
  icon: SkillGroupIcon
  skills: Skill[]
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
  caption: string
}

export interface ProjectStackGroup {
  label: string
  items: string[]
}

export interface ProjectProcessStep {
  title: string
  description: string
}

export interface ProjectChallenge {
  title: string
  problem: string
  solution: string
}

export interface ProjectCaseStudy {
  overview: string
  problem: string
  solution: string
  stack: ProjectStackGroup[]
  process: ProjectProcessStep[]
  challenges: ProjectChallenge[]
  results: string[]
  lessons: string[]
  screenshots: ProjectScreenshot[]
}

export interface ProjectLinks {
  demo: string
  repository: string
}

export interface Project {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  year: string
  role: string
  duration: string
  thumbnail: string
  thumbnailAlt: string
  featured: boolean
  tech: string[]
  features: ProjectFeature[]
  links: ProjectLinks
  caseStudy: ProjectCaseStudy
}

export type TimelineKind =
  | 'work'
  | 'freelance'
  | 'education'
  | 'certification'
  | 'development'

export interface TimelineEntry {
  id: string
  kind: TimelineKind
  title: string
  organisation: string
  location?: string
  start: string
  end: string
  summary: string
  highlights?: string[]
  tags?: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  start: string
  end: string
  summary: string
  coursework: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  summary: string
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'code'; language: string; code: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; title?: string; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  updatedAt?: string
  cover: string
  coverAlt: string
  tags: string[]
  featured?: boolean
  content: ArticleBlock[]
}
