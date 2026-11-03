import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BlogCard } from '@/components/blog/blog-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { useLocale, useUICopy } from '@/hooks/use-locale'
import { getLatestPosts } from '@/lib/blog'

export function BlogPreview() {
  const { locale } = useLocale()
  const copy = useUICopy()
  const posts = getLatestPosts(3, locale)

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="section-anchor border-t border-border py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="blog-title"
              index="07"
              label={copy.blog.label}
              title={copy.blog.title}
              description={copy.blog.description}
            />
            <Link
              to="/blog"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:pb-1"
            >
              {copy.blog.allArticles}
              <ArrowRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
