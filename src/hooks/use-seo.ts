import { useEffect } from 'react'

import { profileContent } from '@/data/profile'
import { useLocale, useLocalized } from '@/hooks/use-locale'
import type { Locale } from '@/types'

interface SeoOptions {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  publishedTime?: string
  noIndex?: boolean
}

const DEFAULT_IMAGE = '/og-image.png'

/** Open Graph locale codes for the languages the portfolio ships in. */
const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  id: 'id_ID',
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertCanonical(href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = href
}

function absoluteUrl(path: string, siteUrl: string): string {
  return new URL(path, siteUrl).toString()
}

/**
 * Lightweight route-level metadata management. It updates the document title,
 * description, canonical URL, Open Graph, and Twitter tags without pulling in
 * a rendering library.
 *
 * Everything is derived from the active locale, so switching languages
 * re-titles the page and re-labels the shared preview card in place.
 */
export function useSEO({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_IMAGE,
  publishedTime,
  noIndex = false,
}: SeoOptions): void {
  const profile = useLocalized(profileContent)
  const { locale } = useLocale()

  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} — ${profile.name}`
    const canonical = absoluteUrl(path, profile.siteUrl)
    const imageUrl = absoluteUrl(image, profile.siteUrl)
    const socialTitle = `${profile.name} — ${profile.role}`

    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', socialTitle)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', socialTitle)
    upsertMeta('property', 'og:locale', ogLocales[locale])
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    const publishedMeta = document.head.querySelector<HTMLMetaElement>(
      'meta[property="article:published_time"]',
    )

    if (type === 'article' && publishedTime) {
      if (publishedMeta) {
        publishedMeta.setAttribute('content', publishedTime)
      } else {
        upsertMeta('property', 'article:published_time', publishedTime)
      }
    } else if (publishedMeta) {
      publishedMeta.remove()
    }

    const alternateLocales: Locale[] = ['en', 'id']
    for (const alternate of alternateLocales) {
      const key = `og:locale:alternate:${alternate}`
      const existing = document.head.querySelector<HTMLMetaElement>(`meta[data-locale="${key}"]`)

      if (alternate === locale) {
        existing?.remove()
        continue
      }

      const element = existing ?? document.createElement('meta')
      element.setAttribute('property', 'og:locale:alternate')
      element.setAttribute('data-locale', key)
      element.setAttribute('content', ogLocales[alternate])
      if (!existing) document.head.appendChild(element)
    }

    upsertCanonical(canonical)
  }, [title, description, path, type, image, publishedTime, noIndex, profile, locale])
}
