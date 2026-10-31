import {
  BadgeCheck,
  BriefcaseBusiness,
  GitBranch,
  GraduationCap,
  Laptop,
  MapPin,
} from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { certificationsContent, educationContent } from '@/data/education'
import { experienceContent, experienceKindLabelsContent } from '@/data/experience'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import type { TimelineKind } from '@/types'

const kindIcons = {
  work: BriefcaseBusiness,
  freelance: Laptop,
  development: GitBranch,
  education: GraduationCap,
  certification: BadgeCheck,
} satisfies Record<TimelineKind, typeof BriefcaseBusiness>

export function Experience() {
  const experience = useLocalized(experienceContent)
  const experienceKindLabels = useLocalized(experienceKindLabelsContent)
  const education = useLocalized(educationContent)
  const certifications = useLocalized(certificationsContent)
  const copy = useUICopy()

  const sortedExperience = [...experience].sort(
    (a, b) => Number.parseInt(b.start, 10) - Number.parseInt(a.start, 10),
  )

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
            label={copy.experience.label}
            title={copy.experience.title}
            description={copy.experience.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-16">
          <ol className="relative border-l border-border">
            {sortedExperience.map((entry, index) => {
              const Icon = kindIcons[entry.kind]

              return (
                <Reveal key={entry.id} delay={index * 0.04}>
                  <li className="relative pb-10 pl-7 last:pb-0 sm:pl-9">
                    <span
                      className="absolute top-0.5 -left-[13px] grid size-[26px] place-items-center rounded-full border border-border bg-background text-muted-foreground"
                      aria-hidden="true"
                    >
                      <Icon className="size-3" />
                    </span>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                        {entry.start} — {entry.end}
                      </span>
                      <span className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.04em] text-muted-foreground">
                        {experienceKindLabels[entry.kind]}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-base font-semibold tracking-[-0.015em]">
                      {entry.title}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/80">{entry.organisation}</span>
                      {entry.location ? (
                        <>
                          <span className="size-0.5 rounded-full bg-border" aria-hidden="true" />
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3" aria-hidden="true" />
                            {entry.location}
                          </span>
                        </>
                      ) : null}
                    </p>

                    <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                      {entry.summary}
                    </p>

                    {entry.highlights?.length ? (
                      <ul className="mt-3 space-y-1.5">
                        {entry.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                          >
                            <span
                              className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-primary/70"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {entry.tags?.length ? (
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-card px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground ring-1 ring-border/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </li>
                </Reveal>
              )
            })}
          </ol>

          <div className="space-y-4">
            {education.map((item) => (
              <Reveal key={item.id} delay={0.06}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-lg bg-accent text-accent-foreground">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                      {copy.experience.education}
                    </span>
                    <span className="ml-auto font-mono text-[0.5625rem] text-muted-foreground">
                      {item.start} — {item.end}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.institution} · {item.location}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-full border border-border px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-muted text-foreground">
                    <BadgeCheck className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.experience.certifications}
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-border/70">
                  {certifications.map((certification) => (
                    <li key={certification.id} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs font-medium">{certification.title}</p>
                        <span className="font-mono text-[0.5625rem] text-muted-foreground">
                          {certification.year}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.6875rem] text-muted-foreground">
                        {certification.issuer}
                      </p>
                      <p className="mt-1.5 text-[0.6875rem] leading-relaxed text-muted-foreground/80">
                        {certification.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}
