import type { Localized } from '@/types'

export interface NavItem {
  label: string
  href: string
  sectionId?: string
}

/**
 * Navigation labels per language. `href` and `sectionId` are shared so the
 * scroll-spy and routing logic stay language-agnostic.
 */
export const navItemsContent: Localized<NavItem[]> = {
  en: [
    { label: 'Home', href: '/', sectionId: 'home' },
    { label: 'About', href: '/#about', sectionId: 'about' },
    { label: 'Skills', href: '/#skills', sectionId: 'skills' },
    { label: 'Projects', href: '/#projects', sectionId: 'projects' },
    { label: 'Experience', href: '/#experience', sectionId: 'experience' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ],
  id: [
    { label: 'Beranda', href: '/', sectionId: 'home' },
    { label: 'Tentang', href: '/#about', sectionId: 'about' },
    { label: 'Keahlian', href: '/#skills', sectionId: 'skills' },
    { label: 'Proyek', href: '/#projects', sectionId: 'projects' },
    { label: 'Pengalaman', href: '/#experience', sectionId: 'experience' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/#contact', sectionId: 'contact' },
  ],
}

export const homeSectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'blog',
  'contact',
] as const
