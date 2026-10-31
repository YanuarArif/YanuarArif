import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { ArticleContent } from '@/components/blog/article-content'
import { BlogCard } from '@/components/blog/blog-card'
import { NotFoundContent } from '@/components/layout/not-found-content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SocialIcon } from '@/components/ui/social-icon'
import { profile } from '@/data/profile'
import { useSEO } from '@/hooks/use-seo'
import { getAdjacentPosts, getPostBySlug, getRelatedPosts, getTableOfContents } from '@/lib/blog'
import { formatDate, getReadingTime } from '@/lib/utils'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useSEO({
    title: post?.title ?? 'Article not found',
    description: post?.excerpt ?? 'This article could not be found.',
    path: post ? `/blog/${post.slug}` : '/404',
    type: 'article',
    image: post?.cover ?? '/og-image.png',
    publishedTime: post?.publishedAt,
    noIndex: !post,
  })

  if (!post) {
    return <NotFoundContent />
  }

  const readingTime = getReadingTime(post.content)
  const tableOfContents = getTableOfContents(post.content)
  const relatedPosts = getRelatedPosts(post, 2)
  const adjacent = getAdjacentPosts(post.slug)

  return (
    <div className="pt-16">
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 grid-backdrop [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
          aria-hidden="true"
        />
        <div className="container-page relative py-10 md:py-14">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ArrowLeft
              className="size-3 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Journal
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <Badge variant="accent">{post.category}</Badge>
            <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
              <CalendarDays className="size-3" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            <span className="size-0.5 rounded-full bg-border" aria-hidden="true" />
            <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
              <Clock3 className="size-3" aria-hidden="true" />
              {readingTime} min read
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-[clamp(2.15rem,5.4vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-balance">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span
              className="grid size-9 place-items-center rounded-full bg-foreground font-mono text-[0.625rem] font-semibold text-background"
              aria-hidden="true"
            >
              {profile.initials}
            </span>
            <div>
              <p className="text-xs font-medium">{profile.name}</p>
              <p className="mt-0.5 text-[0.6875rem] text-muted-foreground">{profile.role}</p>
            </div>
            <span className="h-5 w-px bg-border" aria-hidden="true" />
            <p className="font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
              Written in {profile.locationShort}
            </p>
          </div>
        </div>
      </header>

      <div className="container-page pt-8 md:pt-10">
        <figure className="overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_30px_80px_-55px_rgb(0_0_0/0.5)]">
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="aspect-[16/8] w-full object-cover"
          />
        </figure>
      </div>

      <div className="container-page grid gap-12 py-12 md:py-16 xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-16">
        <article className="mx-auto w-full max-w-3xl min-w-0">
          <ArticleContent content={post.content} />

          <div className="mt-10 flex flex-wrap gap-1.5 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/30 px-2.5 py-1 font-mono text-[0.5625rem] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-start">
            <span
              className="grid size-12 shrink-0 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background"
              aria-hidden="true"
            >
              {profile.initials}
            </span>
            <div>
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{profile.intro}</p>
              <div className="mt-3 flex items-center gap-1">
                {profile.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target={social.platform === 'email' ? undefined : '_blank'}
                    rel={social.platform === 'email' ? undefined : 'noreferrer'}
                    aria-label={social.label}
                    className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <SocialIcon platform={social.platform} className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav
            aria-label="Article navigation"
            className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
          >
            {adjacent.previous ? (
              <Link
                to={`/blog/${adjacent.previous.slug}`}
                className="group rounded-xl border border-border p-4 transition-colors hover:border-foreground/20"
              >
                <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                  <ArrowLeft
                    className="size-3 transition-transform group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                  Previous article
                </span>
                <span className="mt-2 block text-xs font-medium leading-snug transition-colors group-hover:text-primary">
                  {adjacent.previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {adjacent.next ? (
              <Link
                to={`/blog/${adjacent.next.slug}`}
                className="group rounded-xl border border-border p-4 text-left transition-colors hover:border-foreground/20 sm:text-right"
              >
                <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase sm:justify-end">
                  Next article
                  <ArrowRight
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-2 block text-xs font-medium leading-snug transition-colors group-hover:text-primary">
                  {adjacent.next.title}
                </span>
              </Link>
            ) : null}
          </nav>

          <div className="mt-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog">
                <ArrowLeft aria-hidden="true" />
                Back to the journal
              </Link>
            </Button>
          </div>
        </article>

        {tableOfContents.length > 0 ? (
          <aside className="hidden xl:block">
            <div className="sticky top-24 border-l border-border pl-5">
              <p className="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                On this page
              </p>
              <nav aria-label="Table of contents" className="mt-3">
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id} className={item.level === 3 ? 'pl-3' : undefined}>
                      <a
                        href={`#${item.id}`}
                        className="block text-[0.6875rem] leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        ) : null}
      </div>

      {relatedPosts.length > 0 ? (
        <section
          aria-labelledby="related-title"
          className="border-t border-border bg-muted/30 py-14 md:py-16"
        >
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2 id="related-title" className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  Related articles
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                All articles
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
