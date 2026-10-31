import { blogPosts, sortedBlogPosts } from '@/data/blog'
import type { ArticleBlock, BlogPost } from '@/types'

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

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getLatestPosts(limit = 3): BlogPost[] {
  return sortedBlogPosts.slice(0, limit)
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const others = sortedBlogPosts.filter((item) => item.slug !== post.slug)
  const sameCategory = others.filter((item) => item.category === post.category)
  const remaining = others.filter((item) => item.category !== post.category)

  return [...sameCategory, ...remaining].slice(0, limit)
}

export function getAdjacentPosts(slug: string): {
  previous: BlogPost | undefined
  next: BlogPost | undefined
} {
  const index = sortedBlogPosts.findIndex((post) => post.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: sortedBlogPosts[index + 1],
    next: sortedBlogPosts[index - 1],
  }
}
