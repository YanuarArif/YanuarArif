import { projectsEn } from '@/data/projects.en'
import { projectsId } from '@/data/projects.id'
import type { Localized, Locale, Project } from '@/types'

/**
 * Project case studies in both languages. Add or edit a project in
 * `projects.en.ts` and `projects.id.ts` — the helpers below keep the
 * lookup, ordering, and featured logic language-agnostic.
 */
export const projectsContent: Localized<Project[]> = {
  en: projectsEn,
  id: projectsId,
}

export function getProjects(locale: Locale): Project[] {
  return projectsContent[locale]
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return projectsContent[locale].filter((project) => project.featured)
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  return projectsContent[locale].find((project) => project.slug === slug)
}

interface AdjacentProjects {
  previous: Project | undefined
  next: Project | undefined
}

export function getAdjacentProjects(slug: string, locale: Locale): AdjacentProjects {
  const list = projectsContent[locale]
  const index = list.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: list[(index - 1 + list.length) % list.length],
    next: list[(index + 1) % list.length],
  }
}
