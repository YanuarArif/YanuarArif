import { useMemo } from 'react'
import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Coffee,
  GraduationCap,
  MapPin,
  ServerCog,
} from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { educationContent } from '@/data/education'
import {
  formatPeriodDate,
  periodSortKey,
  sortNewestFirst,
  workExperienceContent,
} from '@/data/experience'
import { useLocale, useLocalized, useUICopy } from '@/hooks/use-locale'
import {
  cn,
  formatDuration,
  getDurationMonths,
  interpolate,
} from '@/lib/utils'
import type { WorkExperience } from '@/types'

/**
 * The card's main heading. A break has no employer, so it is titled with its
 * own label instead of rendering an empty heading.
 */
function entryTitle(entry: WorkExperience, breakLabel: string): string {
  if (entry.kind === 'break') {
    return breakLabel
  }

  return entry.organisation ?? entry.role ?? ''
}

export function Experience() {
  const { locale } = useLocale()
  const timeline = useLocalized(workExperienceContent)
  const education = useLocalized(educationContent)
  const copy = useUICopy()

  /**
   * Newest first, with an ongoing role pinned to the top. Completed entries
   * use their stored duration; the current one is computed from its start year
   * so it keeps counting up without a data edit. Because the freelance start
   * month is unconfirmed, that figure is shown as a lower bound ("3+ yr").
   */
  const entries = useMemo(
    () =>
      sortNewestFirst(timeline).map((entry) => ({
        ...entry,
        ongoing: entry.end === null,
        durationLabel: entry.end
          ? (entry.duration?.[locale] ?? '')
          : formatDuration(
              getDurationMonths(entry.start, null),
              copy.work.durationUnits,
              entry.precision === 'year',
            ),
      })),
    [timeline, locale, copy.work.durationUnits],
  )

  const totalMonths = useMemo(() => {
    const periods = timeline.map((entry) => periodSortKey(entry.start))
    const earliest = periods.length > 0 ? Math.min(...periods) : 0
    const earliestYear = Math.floor(earliest / 100)

    return earliestYear > 0 ? getDurationMonths(String(earliestYear), null) : 0
  }, [timeline])

  const totalYears = Math.max(1, Math.floor(totalMonths / 12))
  const employmentCount = entries.filter((entry) => entry.kind === 'role').length

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-anchor border-t border-border bg-muted/25 py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="experience-title"
            index="05"
            label={copy.work.label}
            title={copy.work.title}
            description={copy.work.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-16">
          {/*
           * The spine is a separate element rather than a border on the list:
           * a border would run past the last dot and trail into whitespace.
           */}
          <div className="relative">
            <span
              className="absolute inset-y-3 left-3 w-px bg-border lg:left-10"
              aria-hidden="true"
            />

            <ol className="flex flex-col gap-3 sm:gap-4">
              {entries.map((entry, index) => {
                const isBreak = entry.kind === 'break'
                const isCurrent = entry.end === null
                const subtitle =
                  entry.organisation && entry.role ? entry.role : undefined
                const periodStart =
                  formatPeriodDate(entry.start, locale) || entry.start
                const periodEnd = entry.end
                  ? formatPeriodDate(entry.end, locale)
                  : copy.work.present

                return (
                  <Reveal
                    as="li"
                    key={entry.id}
                    delay={Math.min(index, 5) * 0.035}
                    className="relative pl-7 sm:pl-8 lg:pl-20"
                  >
                    <span
                      className={cn(
                        'absolute top-6 left-3 grid size-6 -translate-x-1/2 place-items-center rounded-full border bg-background lg:left-10',
                        isCurrent
                          ? 'border-primary/60 text-primary'
                          : 'border-border text-muted-foreground',
                      )}
                      aria-hidden="true"
                    >
                      {isCurrent ? (
                        <span className="relative grid size-2 place-items-center">
                          <span className="absolute inline-flex size-2 rounded-full bg-primary/60 animate-pulse-soft motion-reduce:animate-none" />
                          <span className="relative size-1.5 rounded-full bg-primary" />
                        </span>
                      ) : isBreak ? (
                        <Coffee className="size-3" />
                      ) : (
                        <BriefcaseBusiness className="size-3" />
                      )}
                    </span>

                    <article
                      className={cn(
                        'group h-full overflow-hidden rounded-2xl border bg-card p-5',
                        'transition-[border-color,box-shadow] duration-300 ease-out',
                        'hover:border-foreground/20 hover:shadow-[0_18px_40px_-32px_rgb(0_0_0/0.45)]',
                        'motion-reduce:transition-none',
                        isBreak
                          ? 'border-dashed border-border bg-muted/30 hover:border-foreground/25 hover:bg-muted/40'
                          : 'border-border',
                        isCurrent && 'border-primary/30 bg-primary/[0.025]',
                      )}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3
                              className={cn(
                                'text-base font-semibold tracking-[-0.015em]',
                                isBreak && 'text-foreground/85',
                              )}
                            >
                              {entryTitle(entry, entry.labels[locale])}
                            </h3>

                            {isBreak ? (
                              <span className="max-w-full rounded-full border border-border/80 px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.04em] text-muted-foreground/80 uppercase">
                                {copy.work.breakLabel}
                              </span>
                            ) : (
                              <span className="max-w-full rounded-full border border-border bg-muted/60 px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.04em] text-muted-foreground uppercase">
                                {entry.labels[locale]}
                              </span>
                            )}
                          </div>

                          {subtitle ? (
                            <p className="mt-1 text-sm text-foreground/85">
                              {subtitle}
                              {entry.type ? (
                                <span className="text-xs text-muted-foreground">
                                  {' · '}
                                  {copy.work.employmentTypes[entry.type]}
                                </span>
                              ) : null}
                            </p>
                          ) : null}

                          {isCurrent ? (
                            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.04em] text-accent-foreground uppercase">
                              <span
                                className="size-1.5 rounded-full bg-primary animate-pulse-soft motion-reduce:animate-none"
                                aria-hidden="true"
                              />
                              {copy.work.currentRole}
                            </p>
                          ) : null}
                        </div>

                        <span className="inline-flex max-w-full items-center gap-1.5 self-start font-mono text-[0.625rem] tracking-[0.06em] text-muted-foreground uppercase sm:shrink-0 sm:pt-0.5">
                          <Clock3 className="size-3 shrink-0" aria-hidden="true" />
                          {entry.durationLabel}
                        </span>
                      </div>

                      <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-3.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <dt className="sr-only">{copy.work.period}</dt>
                          <dd className="font-mono text-[0.6875rem] tracking-[0.02em] text-foreground/75">
                            <time dateTime={entry.start}>
                              {periodStart} — {periodEnd}
                            </time>
                          </dd>
                        </div>

                        {entry.location ? (
                          <div className="flex min-w-0 items-center gap-1.5">
                            <dt className="sr-only">{copy.work.location}</dt>
                            <MapPin className="size-3 shrink-0" aria-hidden="true" />
                            <dd className="truncate">{entry.location}</dd>
                          </div>
                        ) : null}
                      </dl>

                      <p
                        className={cn(
                          'mt-3.5 text-[0.8125rem] leading-relaxed',
                          isBreak
                            ? 'text-muted-foreground/90'
                            : 'text-muted-foreground',
                        )}
                      >
                        {entry.summary}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </ol>
          </div>

          <div className="space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <ServerCog className="size-4 text-primary" aria-hidden="true" />
                  <span className="eyebrow">{copy.work.overview}</span>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-4">
                  <div className="border-t border-border pt-3">
                    <dt className="font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
                      {copy.work.experienceSummary}
                    </dt>
                    <dd className="mt-1 font-mono text-lg leading-none font-medium tabular-nums">
                      {interpolate(copy.work.years, { years: totalYears })}
                    </dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <dt className="font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
                      {copy.work.rolesCount}
                    </dt>
                    <dd className="mt-1 font-mono text-lg leading-none font-medium tabular-nums">
                      {String(employmentCount).padStart(2, '0')}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {education.map((item) => (
              <Reveal key={item.id} delay={0.06}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                      {copy.work.education}
                    </span>
                    <span className="ml-auto shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[0.5rem] tracking-[0.04em] text-muted-foreground uppercase">
                      {item.note}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">{item.level}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.program}
                  </p>
                  <p className="mt-0.5 text-[0.6875rem] text-muted-foreground/80">
                    {item.institution ? (
                      <>
                        {item.institution} · {item.location}
                      </>
                    ) : (
                      <>
                        <span className="italic">{copy.work.institutionNotSpecified}</span>
                        {' · '}
                        {item.location}
                      </>
                    )}
                    {item.year ? <> · {item.year}</> : null}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="rounded-full border border-border px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
                      >
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground">
                    <BadgeCheck className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.work.certifications}
                  </span>
                </div>

                {/*
                 * Deliberate empty state. No invented credentials: when a real
                 * certification is issued, render it here instead.
                 */}
                <div className="mt-4 rounded-xl border border-dashed border-border bg-muted/25 px-4 py-5">
                  <p className="text-xs leading-relaxed text-foreground/80">
                    {copy.work.certificationsEmpty}
                  </p>
                  <p className="mt-2 text-[0.6875rem] leading-relaxed text-muted-foreground/80">
                    {copy.work.certificationsEmptyHint}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}