import type { About, Profile } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT YOUR PERSONAL DETAILS HERE.
 *  All copy below is fictional sample content.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  name: 'Avery Lindqvist',
  firstName: 'Avery',
  initials: 'AL',
  role: 'Full-Stack Developer',
  tagline: 'Fast, accessible products, built end to end.',
  intro:
    "I'm a full-stack developer who turns complex product ideas into fast, accessible interfaces — backed by APIs and data models that stay simple as they grow. I care about the details users feel and the architecture teams maintain.",
  location: 'Copenhagen, Denmark',
  locationShort: 'Copenhagen, DK',
  timezone: 'CET · UTC+1',
  email: 'hello@averylindqvist.dev',
  siteUrl: 'https://averylindqvist.dev',
  seoDescription:
    'Avery Lindqvist is a full-stack developer in Copenhagen building fast, accessible web products with React, TypeScript, and Node.js.',
  availability: {
    available: true,
    label: 'Available for new projects',
    detail: 'Freelance & full-time · remote-friendly',
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/averylindqvist',
      platform: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/averylindqvist',
      platform: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:hello@averylindqvist.dev',
      platform: 'email',
    },
  ],
}

/**
 * About section copy. Keep it specific and human — this is where a portfolio
 * stops sounding like a résumé and starts sounding like a person.
 */
export const about: About = {
  portrait: {
    src: new URL('../assets/images/portrait.svg', import.meta.url).href,
    alt: 'Abstract portrait illustration of Avery Lindqvist',
  },
  paragraphs: [
    "I've spent the last six years building web products across early-stage startups and small product studios. That usually means working close to the problem: a conversation with the person using the software, a rough wireframe, an API contract, and then the long stretch of making the whole thing feel effortless.",
    "My background started in frontend engineering, but the parts I enjoyed most were always one layer deeper — designing data models, shaping API boundaries, and removing the small bits of friction that make a product tiring to use. Today I work comfortably across React and TypeScript on the client, Node.js and PostgreSQL on the server, and the deployment pipeline in between.",
    'I like teams that value clear thinking over ceremony. I write things down, prefer boring solutions when they fit, and treat accessibility and performance as product requirements rather than cleanup tasks. Away from the editor you can usually find me on a long walk with a camera, reading about typography, or slowly making a very small mechanical keyboard project more complicated than it needs to be.',
  ],
  interests: [
    'Design systems and component architecture',
    'Accessible, keyboard-first interfaces',
    'Web performance and Core Web Vitals',
    'Product discovery and technical writing',
  ],
  goals: [
    'Join a product team where engineering quality is treated as a long-term investment.',
    'Lead the frontend architecture for a product used by thousands of people every day.',
    'Keep growing as a generalist while developing deeper expertise in distributed systems.',
    'Mentor earlier-career developers through code review and practical pairing.',
  ],
  learning: [
    {
      title: 'Rust for small tools',
      description:
        'Building a CLI for image processing to understand ownership and error handling beyond TypeScript.',
    },
    {
      title: 'PostgreSQL performance',
      description:
        'Working through query plans, indexes, and partitioning with realistic data sets.',
    },
    {
      title: 'Motion design',
      description:
        'Studying how timing and easing can make interfaces clearer without adding noise.',
    },
  ],
  highlights: [
    {
      title: 'Product-minded',
      description:
        'Comfortable moving from an ambiguous problem to a small, shippable slice — and iterating from real feedback.',
      icon: 'compass',
    },
    {
      title: 'Accessibility by default',
      description:
        'Semantic markup, keyboard paths, reduced motion, and contrast checks are part of the first implementation, not an audit.',
      icon: 'accessibility',
    },
    {
      title: 'End-to-end ownership',
      description:
        'From data model and API design to interface polish, tests, deployment, and the documentation that follows.',
      icon: 'layers',
    },
  ],
}
