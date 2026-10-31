import {
  Accessibility,
  ArrowUpRight,
  BookOpen,
  Compass,
  Layers,
  Plus,
  Sparkles,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { aboutContent, profileContent } from '@/data/profile'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'
import type { AboutHighlight } from '@/types'

const highlightIcons = {
  compass: Compass,
  accessibility: Accessibility,
  layers: Layers,
} satisfies Record<AboutHighlight['icon'], typeof Compass>

export function About() {
  const about = useLocalized(aboutContent)
  const profile = useLocalized(profileContent)
  const copy = useUICopy()

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-anchor border-t border-border py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="about-title"
            index="02"
            label={copy.about.label}
            title={copy.about.title}
            description={copy.about.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-[1.5rem] border border-border/70"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-muted">
                <img
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  width={900}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/11] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <dl className="space-y-3.5">
                <div className="flex items-start justify-between gap-6">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.basedIn}
                  </dt>
                  <dd className="text-right text-xs font-medium">{profile.location}</dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-border/70 pt-3.5">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.focus}
                  </dt>
                  <dd className="text-right text-xs font-medium">{copy.about.focusValue}</dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-border/70 pt-3.5">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.status}
                  </dt>
                  <dd className="flex items-center gap-1.5 text-right text-xs font-medium">
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {profile.availability.label}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <div className="space-y-4 text-[0.9375rem] leading-[1.8] text-muted-foreground sm:text-base">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((highlight, index) => {
                  const Icon = highlightIcons[highlight.icon]

                  return (
                    <div
                      key={highlight.title}
                      className={cn(
                        'rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20',
                        index === 2 && 'sm:col-span-2',
                      )}
                    >
                      <div className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold">{highlight.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-semibold">{copy.about.currentlyLearning}</h3>
                </div>
                <ul className="mt-4 divide-y divide-border/70">
                  {about.learning.map((item, index) => (
                    <li key={item.title} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                      <span className="mt-0.5 font-mono text-[0.625rem] text-muted-foreground/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-xs font-medium">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-12">
          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              {copy.about.interestsTitle}
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {about.interests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                >
                  <Plus className="mt-0.5 size-3 shrink-0 text-primary" aria-hidden="true" />
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Target className="size-4 text-primary" aria-hidden="true" />
              {copy.about.goalsTitle}
            </h3>
            <ol className="mt-4 space-y-3">
              {about.goals.map((goal, index) => (
                <li key={goal} className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-mono text-[0.625rem] text-primary/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {goal}
                </li>
              ))}
            </ol>
            <Link
              to="/#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {copy.about.workWithMe}
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
