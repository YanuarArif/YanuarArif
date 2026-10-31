import { ChevronRight, PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BlogCard } from '@/components/blog/blog-card'
import { Reveal } from '@/components/ui/reveal'
import { profileContent } from '@/data/profile'
import { useLocale, useLocalized, useUICopy } from '@/hooks/use-locale'
import { useSEO } from '@/hooks/use-seo'
import { getSortedPosts } from '@/lib/blog'
import { interpolate } from '@/lib/utils'

export default function BlogPage() {
  const { locale } = useLocale()
  const copy = useUICopy()
  const profile = useLocalized(profileContent)
  const posts = getSortedPosts(locale)
  const [featured, ...rest] = posts

  useSEO({
    title: copy.blog.journal,
    description: copy.blog.seoDescription,
    path: '/blog',
  })

  return (
    <div className="pt-16">
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 grid-backdrop [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
          aria-hidden="true"
        />
        <div className="container-page relative py-12 md:py-16">
          <nav aria-label={copy.meta.breadcrumb}>
            <ol className="flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.06em] text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {copy.nav.home}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3" />
              </li>
              <li aria-current="page" className="text-foreground/80">
                {copy.blog.journal}
              </li>
            </ol>
          </nav>

          <div className="mt-7 flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-accent text-accent-foreground">
              <PenLine className="size-4" aria-hidden="true" />
            </span>
            <span className="eyebrow">{copy.blog.notesFromWork}</span>
          </div>

          <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.05em]">
            {copy.blog.headingLine1}
            <br />
            {copy.blog.headingLine2}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {interpolate(copy.blog.intro, { name: profile.name })}
          </p>

          <div className="mt-7 flex items-center gap-3 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
            <span>
              {posts.length} {copy.blog.articles}
            </span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span>{copy.blog.noNewsletter}</span>
          </div>
        </div>
      </header>

      <div className="container-page py-12 md:py-16">
        {featured ? (
          <Reveal>
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-[0.5625rem] tracking-[0.12em] text-primary uppercase">
                {copy.blog.featured}
              </span>
              <span className="h-px w-10 bg-border" aria-hidden="true" />
            </div>
            <BlogCard post={featured} featured />
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <>
            <div className="mt-12 mb-5 flex items-center gap-2">
              <span className="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                {copy.blog.moreArticles}
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.04}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
