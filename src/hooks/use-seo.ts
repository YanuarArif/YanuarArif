import { useEffect } from 'react'

import { profile } from '@/data/profile'

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

function absoluteUrl(path: string): string {
  return new URL(path, profile.siteUrl).toString()
}

/**
 * Lightweight route-level metadata management. It updates the document title,
 * description, canonical URL, Open Graph, and Twitter tags without pulling in
 * a rendering library.
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
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} — ${profile.name}`
    const canonical = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', `${profile.name} — ${profile.role}`)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', `${profile.name} — ${profile.role}`)
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

    upsertCanonical(canonical)
  }, [title, description, path, type, image, publishedTime, noIndex])
}
