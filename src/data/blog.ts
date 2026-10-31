import { blogPostsEn } from '@/data/blog.en'
import { blogPostsId } from '@/data/blog.id'
import type { BlogPost, Localized } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  BLOG CONTENT
 *  Articles are plain typed blocks, not fetched from a CMS.
 *  English lives in `blog.en.ts`, Indonesian in `blog.id.ts`.
 *  Cover images live in `src/assets/images/blog` and are re-exported
 *  from `src/data/media.ts`.
 * ─────────────────────────────────────────────────────────────
 */
export const blogPostsContent: Localized<BlogPost[]> = {
  en: blogPostsEn,
  id: blogPostsId,
}
