/**
 * Shared content models. All portfolio copy lives in `src/data` and is typed
 * against these interfaces so missing or malformed content fails at build time.
 */

export type Theme = 'light' | 'dark'

/** Supported interface languages. `en` is the fallback when nothing is stored. */
export type Locale = 'en' | 'id'

/**
 * Any content that ships in both languages. Data modules export a
 * `Localized<T>` record, and components pick the active slice through
 * `useLocalized()` so a missing translation fails at build time.
 */
export type Localized<T> = Record<Locale, T>

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

/**
 * Interface copy that is not part of a content model: labels, buttons,
 * aria-labels, form states, and the empty/loading strings. Keeping it in one
 * typed object means both languages are forced to stay in sync.
 *
 * Strings may contain `{placeholders}` that the components interpolate.
 */
export interface UICopy {
  meta: {
    language: string
    switchLanguage: string
    breadcrumb: string
    closeDialog: string
    skipToContent: string
    loadingPage: string
    loadingPageContent: string
    opensInNewTab: string
    themeToLight: string
    themeToDark: string
  }
  nav: {
    primary: string
    footer: string
    mobile: string
    siteNavigation: string
    openMenu: string
    mobileDescription: string
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    blog: string
    contact: string
    openToWork: string
    currentlyBooked: string
    startConversation: string
  }
  hero: {
    viewProjects: string
    contactMe: string
    coreTechnologies: string
    currentlyExploring: string
    exploringTopic: string
    focusValue: string
  }
  about: {
    label: string
    title: string
    description: string
    basedIn: string
    focus: string
    focusValue: string
    status: string
    currentlyLearning: string
    interestsTitle: string
    goalsTitle: string
    workWithMe: string
  }
  skills: {
    label: string
    title: string
    description: string
    levels: Record<SkillLevel, string>
  }
  projects: {
    label: string
    title: string
    description: string
    caseStudy: string
    caseStudies: string
    liveDemo: string
    repository: string
    code: string
    viewDetails: string
    viewCaseStudy: string
    technologiesUsed: string
    curious: string
    startConversation: string
  }
  experience: {
    label: string
    title: string
    description: string
    education: string
    certifications: string
  }
  blog: {
    label: string
    title: string
    description: string
    allArticles: string
    notesFromWork: string
    headingLine1: string
    headingLine2: string
    intro: string
    articles: string
    noNewsletter: string
    featured: string
    moreArticles: string
    readMore: string
    minRead: string
    journal: string
    seoDescription: string
  }
  blogDetail: {
    minRead: string
    writtenIn: string
    previousArticle: string
    nextArticle: string
    backToJournal: string
    onThisPage: string
    keepReading: string
    relatedArticles: string
    articleNavigation: string
    tableOfContents: string
    allArticles: string
    notFound: string
    notFoundDescription: string
  }
  projectDetail: {
    caseStudy: string
    liveDemo: string
    repository: string
    role: string
    timeline: string
    year: string
    category: string
    atAGlance: string
    duration: string
    technologies: string
    nextCaseStudy: string
    allProjects: string
    previousProject: string
    nextProject: string
    projectNavigation: string
    home: string
    projects: string
    notFound: string
    notFoundDescription: string
  }
  caseStudy: {
    overview: string
    problemStatement: string
    proposedSolution: string
    mainFeatures: string
    technologyStack: string
    developmentProcess: string
    technicalChallenges: string
    results: string
    lessonsLearned: string
    screenshots: string
    problem: string
    decision: string
    primaryView: string
  }
  contact: {
    label: string
    title: string
    description: string
    email: string
    location: string
    remoteFriendly: string
    sendMessage: string
    allFieldsRequired: string
    name: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    privacy: string
    send: string
    sending: string
    messageSent: string
    messageSentBody: string
    sendAnother: string
    placeholderTitle: string
    placeholderBefore: string
    placeholderAfter: string
    placeholderEnd: string
    errorBefore: string
    errorStrong: string
    errorAfter: string
    errorEnd: string
    unconfiguredBefore: string
    unconfiguredStrong: string
    unconfiguredAfter: string
    unconfiguredEnd: string
    errors: Record<keyof ContactValues, string>
  }
  notFound: {
    error: string
    title: string
    description: string
    backHome: string
    browseProjects: string
    logComment: string
    seoTitle: string
    seoDescription: string
  }
  footer: {
    explore: string
    connect: string
    tagline: string
    rights: string
    builtWith: string
    backToTop: string
  }
}

export interface ContactValues {
  name: string
  email: string
  subject: string
  message: string
}
