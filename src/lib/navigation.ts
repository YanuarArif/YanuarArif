export interface NavItem {
  label: string
  href: string
  sectionId?: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Skills', href: '/#skills', sectionId: 'skills' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
]

export const homeSectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'blog',
  'contact',
] as const
