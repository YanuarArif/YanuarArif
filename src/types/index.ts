/**
 * Shared content models. All portfolio copy lives in `src/data` and is typed
 * against these interfaces so missing or malformed content fails at build time.
 */

export type Theme = "light" | "dark";

/** Supported interface languages. `en` is the fallback when nothing is stored. */
export type Locale = "en" | "id";

/**
 * Any content that ships in both languages. Data modules export a
 * `Localized<T>` record, and components pick the active slice through
 * `useLocalized()` so a missing translation fails at build time.
 */
export type Localized<T> = Record<Locale, T>;

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  label: string;
  href: string;
  platform: SocialPlatform;
}

export interface Availability {
  available: boolean;
  label: string;
  detail: string;
}

export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  tagline: string;
  intro: string;
  location: string;
  locationShort: string;
  timezone: string;
  email: string;
  siteUrl: string;
  seoDescription: string;
  availability: Availability;
  socials: SocialLink[];
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: "layout" | "store" | "database" | "brain";
}

export interface LearningItem {
  title: string;
  description: string;
  /** Where the learning is at, e.g. "In progress". */
  status: string;
  /** Short topic tags, e.g. ["Python", "AI fundamentals"]. */
  topics?: string[];
}

export interface About {
  portrait: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
  interests: string[];
  goals: string[];
  highlights: AboutHighlight[];
}

export type SkillLevel = "Advanced" | "Proficient" | "Working knowledge";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export type SkillGroupIcon =
  | "layout"
  | "server"
  | "database"
  | "infrastructure"
  | "workflow"
  | "mobile";

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: SkillGroupIcon;
  skills: Skill[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectStackGroup {
  label: string;
  items: string[];
}

export interface ProjectProcessStep {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  stack: ProjectStackGroup[];
  process: ProjectProcessStep[];
  challenges: ProjectChallenge[];
  results: string[];
  lessons: string[];
  screenshots: ProjectScreenshot[];
}

export interface ProjectLinks {
  demo: string;
  repository: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
  featured: boolean;
  tech: string[];
  features: ProjectFeature[];
  links: ProjectLinks;
  caseStudy: ProjectCaseStudy;
}

/**
 * What a timeline entry represents. Drives the icon, the type chip, and the
 * card treatment, so a break never reads like a job.
 */
export type ExperienceKind = "role" | "break";

/**
 * Employment arrangement. `parallel` is for two roles that genuinely ran at
 * the same time; the dates are never adjusted to hide the overlap.
 */
export type EmploymentType =
  | "full-time"
  | "part-time"
  | "freelance"
  | "self-employed"
  | "parallel";

/**
 * How precise a date is. `year` is used when only the year is confirmed, so the
 * UI shows "2023" instead of inventing a month.
 */
export type DatePrecision = "month" | "year";

/**
 * One entry on the career timeline: a job, or a deliberate break between jobs.
 *
 * Field per language rather than per locale record, because the label, summary,
 * and duration are prose. `organisation` and `role` are optional on purpose:
 * some early jobs had no public title, and a missing value must stay missing
 * instead of being invented.
 */
export interface WorkExperience {
  id: string;
  kind: ExperienceKind;
  /** Company, shop, or team. Omitted for a break. */
  organisation?: string;
  /** Job title. Omitted when no title can be stated honestly. */
  role?: string;
  /** City (and country) or work arrangement, when it is known. */
  location?: string;
  /** Employment arrangement, omitted for a career break. */
  type?: EmploymentType;
  /**
   * `YYYY-MM`, or `YYYY` when `precision` is `"year"`. Sortable either way.
   */
  start: string;
  /**
   * Keys use the same shape as `start`. `null` means the entry is still
   * running, so its duration is computed at render time instead of stored.
   */
  end: string | null;
  /** Defaults to `"month"` when omitted. */
  precision?: DatePrecision;
  /** Short chip label for the entry, e.g. "Career break". */
  labels: Localized<string>;
  /**
   * Stored duration for completed entries. Left empty for a year-precision or
   * ongoing entry, whose duration is derived from its dates instead.
   */
  duration?: Localized<string>;
  summary: string;
}

export interface Education {
  id: string;
  /** Qualification level, e.g. "Vocational High School (SMK)". */
  level: string;
  /** Programme or major, e.g. "Computer and Network Engineering (TKJ)". */
  program: string;
  /** School name. Left undefined when it is unknown — never guessed. */
  institution?: string;
  location: string;
  /** Graduation year, when it is known. */
  year?: string;
  /** Short status note, e.g. "Vocational education". */
  note: string;
  summary: string;
  /** Subjects from the curriculum, shown as tags. Not certifications. */
  subjects: string[];
}

/**
 * One entry in the Learning Journey. Self-directed study, never employment and
 * never a formal qualification, so it has no employer and no credential.
 */
export interface LearningTopic {
  id: string;
  /** Technology or topic that was studied. */
  topic: string;
  description: string;
  /** `YYYY-MM`. Only the month the study actually started with. */
  start: string;
  /** `YYYY-MM`, or `null` while the topic is still in progress. */
  end: string | null;
  /**
   * Duration for a completed block. An ongoing block omits it and has the
   * figure computed at render time, so it keeps counting up on its own.
   */
  duration?: Localized<string>;
  /** Status label, e.g. "Currently learning". */
  status: string;
  /** True while the topic is still in progress. */
  ongoing?: boolean;
  /** Concepts covered, shown as tags. No proficiency levels. */
  focus: string[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  featured?: boolean;
  content: ArticleBlock[];
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
    language: string;
    switchLanguage: string;
    breadcrumb: string;
    closeDialog: string;
    skipToContent: string;
    loadingPage: string;
    loadingPageContent: string;
    opensInNewTab: string;
    themeToLight: string;
    themeToDark: string;
  };
  nav: {
    primary: string;
    footer: string;
    mobile: string;
    siteNavigation: string;
    openMenu: string;
    mobileDescription: string;
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    learning: string;
    blog: string;
    contact: string;
    openToWork: string;
    currentlyBooked: string;
    startConversation: string;
  };
  hero: {
    viewProjects: string;
    contactMe: string;
    coreTechnologies: string;
    currentlyExploring: string;
    exploringTopic: string;
    focusValue: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    basedIn: string;
    focus: string;
    focusValue: string;
    status: string;
    currentlyLearning: string;
    interestsTitle: string;
    goalsTitle: string;
    workWithMe: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    levels: Record<SkillLevel, string>;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    caseStudy: string;
    caseStudies: string;
    liveDemo: string;
    repository: string;
    code: string;
    viewDetails: string;
    viewCaseStudy: string;
    technologiesUsed: string;
    curious: string;
    startConversation: string;
  };
  work: {
    label: string;
    title: string;
    description: string;
    overview: string;
    /** Label for the total span metric, e.g. "Experience". */
    experienceSummary: string;
    /** Label for the number of employment entries, e.g. "Roles". */
    rolesCount: string;
    /** `{years}` is interpolated with the rounded total. */
    years: string;
    present: string;
    period: string;
    duration: string;
    location: string;
    currentRole: string;
    /** Heading used for a break entry, which has no employer name. */
    breakLabel: string;
    employmentTypes: Record<EmploymentType, string>;
    education: string;
    /** Placeholder shown when a school name has not been added yet. */
    institutionNotSpecified: string;
    subjects: string;
    certifications: string;
    certificationsEmpty: string;
    certificationsEmptyHint: string;
    learning: string;
    /** Locale-aware wording for the dynamically computed durations. */
    durationUnits: {
      /** Template with `{years}` and `{months}`, e.g. "{years} yr {months} mo". */
      both: string;
      /** Template with `{years}`. */
      years: string;
      /** Template with `{months}`. */
      months: string;
      /** Prefix used when only the start year is known, e.g. "{years}+ yr". */
      approximateYears: string;
    };
  };
  learning: {
    label: string;
    title: string;
    description: string;
    /** Shown above the completed self-directed block. */
    selfDirected: string;
    /** Shown above the ongoing block. */
    ongoing: string;
    /** `{period}` is interpolated, e.g. "Studied during {period}". */
    studiedDuring: string;
    /** `{period}` is interpolated for an ongoing topic, e.g. "Started {period}". */
    startedAt: string;
    /** Honest framing: learning is not employment or a qualification. */
    note: string;
    /** Label for the focus-area tags. */
    focusAreas: string;
  };
  blog: {
    label: string;
    title: string;
    description: string;
    allArticles: string;
    notesFromWork: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    articles: string;
    noNewsletter: string;
    featured: string;
    moreArticles: string;
    readMore: string;
    minRead: string;
    journal: string;
    seoDescription: string;
  };
  blogDetail: {
    minRead: string;
    writtenIn: string;
    previousArticle: string;
    nextArticle: string;
    backToJournal: string;
    onThisPage: string;
    keepReading: string;
    relatedArticles: string;
    articleNavigation: string;
    tableOfContents: string;
    allArticles: string;
    notFound: string;
    notFoundDescription: string;
  };
  projectDetail: {
    caseStudy: string;
    liveDemo: string;
    repository: string;
    role: string;
    timeline: string;
    year: string;
    category: string;
    atAGlance: string;
    duration: string;
    technologies: string;
    nextCaseStudy: string;
    allProjects: string;
    previousProject: string;
    nextProject: string;
    projectNavigation: string;
    home: string;
    projects: string;
    notFound: string;
    notFoundDescription: string;
  };
  caseStudy: {
    overview: string;
    problemStatement: string;
    proposedSolution: string;
    mainFeatures: string;
    technologyStack: string;
    developmentProcess: string;
    technicalChallenges: string;
    results: string;
    lessonsLearned: string;
    screenshots: string;
    problem: string;
    decision: string;
    primaryView: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    location: string;
    remoteFriendly: string;
    sendMessage: string;
    allFieldsRequired: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    privacy: string;
    send: string;
    sending: string;
    messageSent: string;
    messageSentBody: string;
    sendAnother: string;
    placeholderTitle: string;
    placeholderBefore: string;
    placeholderAfter: string;
    placeholderEnd: string;
    errorBefore: string;
    errorStrong: string;
    errorAfter: string;
    errorEnd: string;
    unconfiguredBefore: string;
    unconfiguredStrong: string;
    unconfiguredAfter: string;
    unconfiguredEnd: string;
    errors: Record<keyof ContactValues, string>;
  };
  notFound: {
    error: string;
    title: string;
    description: string;
    backHome: string;
    browseProjects: string;
    logComment: string;
    seoTitle: string;
    seoDescription: string;
  };
  footer: {
    explore: string;
    connect: string;
    tagline: string;
    rights: string;
    builtWith: string;
    backToTop: string;
  };
}

export interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
