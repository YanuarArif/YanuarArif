import { BookOpen, Clock3, Sprout } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { learningJourneyContent } from '@/data/education'
import { formatPeriodDate } from '@/data/experience'
import { useLocale, useLocalized, useUICopy } from '@/hooks/use-locale'
import { cn, formatDuration, getDurationMonths, interpolate } from '@/lib/utils'

/**
 * The Learning Journey stands on its own: self-directed study is neither
 * employment nor a formal qualification, so it gets its own section instead of
 * being folded into the timeline or the education card.
 */
export function Learning() {
  const { locale } = useLocale()
  const topics = useLocalized(learningJourneyContent)
  const copy = useUICopy()

  return (
    <section
      id="learning"
      aria-labelledby="learning-title"
      className="section-anchor border-t border-border py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="learning-title"
            index="06"
            label={copy.learning.label}
            title={copy.learning.title}
            description={copy.learning.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {topics.map((topic, index) => {
            const Icon = topic.ongoing ? Sprout : BookOpen
            const start = formatPeriodDate(topic.start, locale) || topic.start
            const end = topic.end
              ? formatPeriodDate(topic.end, locale)
              : copy.work.present
            // An ongoing topic keeps counting, so its duration is derived here
            // instead of being frozen in the data file.
            const duration = topic.ongoing
              ? formatDuration(
                  getDurationMonths(topic.start, null),
                  copy.work.durationUnits,
                )
              : (topic.duration?.[locale] ?? '')

            return (
              <Reveal key={topic.id} delay={index * 0.06}>
                <article
                  className={cn(
                    'group flex h-full flex-col rounded-2xl border bg-card p-5 sm:p-6',
                    'transition-[border-color,box-shadow] duration-300 ease-out',
                    'hover:border-foreground/20 hover:shadow-[0_18px_40px_-32px_rgb(0_0_0/0.45)]',
                    'motion-reduce:transition-none',
                    topic.ongoing ? 'border-primary/25' : 'border-border',
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        'grid size-9 shrink-0 place-items-center rounded-xl',
                        topic.ongoing
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-foreground',
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="size-4" />
                    </span>

                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.5rem] tracking-[0.06em] uppercase',
                        topic.ongoing
                          ? 'bg-accent text-accent-foreground'
                          : 'border border-border text-muted-foreground',
                      )}
                    >
                      {topic.ongoing ? (
                        <span
                          className="size-1.5 rounded-full bg-primary animate-pulse-soft motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                      ) : null}
                      {topic.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold tracking-[-0.015em]">
                    {topic.topic}
                  </h3>

                  <p className="mt-1.5 font-mono text-[0.625rem] tracking-[0.08em] text-muted-foreground uppercase">
                    {topic.ongoing
                      ? interpolate(copy.learning.startedAt, { period: start })
                      : interpolate(copy.learning.studiedDuring, {
                          period: `${start} — ${end}`,
                        })}
                  </p>

                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>

                  <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.06em] text-muted-foreground uppercase">
                    <Clock3 className="size-3 shrink-0" aria-hidden="true" />
                    {duration}
                  </p>

                  <div className="mt-auto pt-5">
                    <p className="font-mono text-[0.5rem] tracking-[0.1em] text-muted-foreground/70 uppercase">
                      {copy.learning.focusAreas}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {topic.focus.map((focus) => (
                        <li
                          key={focus}
                          className="rounded-full border border-border px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
                        >
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-6 flex items-start gap-2 text-[0.6875rem] leading-relaxed text-muted-foreground/80">
            <BookOpen className="mt-px size-3 shrink-0" aria-hidden="true" />
            {copy.learning.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}