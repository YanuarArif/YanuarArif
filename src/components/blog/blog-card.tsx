import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { profileContent } from '@/data/profile'
import { useLocale, useLocalized, useUICopy } from '@/hooks/use-locale'
import { cn, formatDate, getReadingTime } from '@/lib/utils'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const profile = useLocalized(profileContent)
  const { locale } = useLocale()
  const copy = useUICopy()
  const readingTime = getReadingTime(post.content)

  return (
    <article
      className={cn(
        'group h-full overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:border-foreground/20 hover:shadow-[0_24px_55px_-40px_rgb(0_0_0/0.45)]',
        !featured && 'hover:-translate-y-1',
      )}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={cn(
          'flex h-full flex-col focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
          featured && 'md:grid md:grid-cols-[1.08fr_1fr]',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden border-b border-border bg-muted',
            featured && 'md:border-r md:border-b-0',
          )}
        >
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
            className={cn(
              'w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]',
              featured ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[16/9]',
            )}
          />
          <span className="absolute top-3 right-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.09em] text-white/90 uppercase backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className={cn('flex flex-1 flex-col p-5', featured && 'md:justify-center md:p-8')}>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, locale)}</time>
            <span className="size-0.5 rounded-full bg-border" aria-hidden="true" />
            <span>
              {readingTime} {copy.blog.minRead}
            </span>
          </div>

          <h3
            className={cn(
              'mt-3 font-semibold tracking-[-0.02em] transition-colors group-hover:text-primary',
              featured ? 'text-2xl leading-tight sm:text-[1.75rem]' : 'text-lg leading-snug',
            )}
          >
            {post.title}
          </h3>

          <p
            className={cn(
              'mt-2.5 text-[0.8125rem] leading-relaxed text-muted-foreground',
              featured ? 'max-w-lg text-sm' : 'line-clamp-3',
            )}
          >
            {post.excerpt}
          </p>

          <div
            className={cn(
              'mt-auto flex items-center justify-between gap-4 border-t border-border/70 pt-4',
              featured ? 'mt-6' : 'mt-5',
            )}
          >
            <span className="flex items-center gap-2">
              <span
                className="grid size-6 place-items-center rounded-full bg-foreground font-mono text-[0.5rem] font-semibold text-background"
                aria-hidden="true"
              >
                {profile.initials}
              </span>
              <span className="text-[0.6875rem] text-muted-foreground">{profile.name}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold text-foreground">
              {copy.blog.readMore}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
