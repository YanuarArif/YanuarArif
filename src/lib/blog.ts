import { blogPostsContent } from '@/data/blog'
import type { ArticleBlock, BlogPost, Locale } from '@/types'

export interface TableOfContentsItem {
  id: string
  title: string
  level: 2 | 3
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function getTableOfContents(content: ArticleBlock[]): TableOfContentsItem[] {
  return content.flatMap((block) =>
    block.type === 'heading'
      ? [{ id: slugifyHeading(block.text), title: block.text, level: block.level }]
      : [],
  )
}

export function getSortedPosts(locale: Locale): BlogPost[] {
  return [...blogPostsContent[locale]].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return blogPostsContent[locale].find((post) => post.slug === slug)
}

export function getLatestPosts(limit: number, locale: Locale): BlogPost[] {
  return getSortedPosts(locale).slice(0, limit)
}

export function getRelatedPosts(post: BlogPost, limit: number, locale: Locale): BlogPost[] {
  const others = getSortedPosts(locale).filter((item) => item.slug !== post.slug)
  const sameCategory = others.filter((item) => item.category === post.category)
  const remaining = others.filter((item) => item.category !== post.category)

  return [...sameCategory, ...remaining].slice(0, limit)
}

interface AdjacentPosts {
  previous: BlogPost | undefined
  next: BlogPost | undefined
}

export function getAdjacentPosts(slug: string, locale: Locale): AdjacentPosts {
  const posts = getSortedPosts(locale)
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: posts[index + 1],
    next: posts[index - 1],
  }
}
