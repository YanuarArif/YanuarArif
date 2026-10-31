import { Check, Lightbulb, Target, Wrench } from 'lucide-react'
import type { ReactNode } from 'react'

import { useUICopy } from '@/hooks/use-locale'
import { interpolate } from '@/lib/utils'
import type { Project } from '@/types'

interface CaseSectionProps {
  index: string
  title: string
  children: ReactNode
}

function CaseSection({ index, title, children }: CaseSectionProps) {
  return (
    <section className="grid gap-4 border-t border-border pt-9 md:grid-cols-[11rem_1fr] md:gap-10 md:pt-10">
      <div className="flex items-baseline gap-3 md:flex-col md:gap-1.5">
        <span className="font-mono text-[0.625rem] tracking-[0.12em] text-primary">{index}</span>
        <h2 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">{title}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const { caseStudy } = project
  const copy = useUICopy()

  return (
    <div className="space-y-9">
      <CaseSection index="01" title={copy.caseStudy.overview}>
        <p className="text-[0.9375rem] leading-[1.85] text-foreground/80">{caseStudy.overview}</p>
      </CaseSection>

      <CaseSection index="02" title={copy.caseStudy.problemStatement}>
        <p className="text-sm leading-[1.85] text-muted-foreground">{caseStudy.problem}</p>
      </CaseSection>

      <CaseSection index="03" title={copy.caseStudy.proposedSolution}>
        <p className="text-sm leading-[1.85] text-muted-foreground">{caseStudy.solution}</p>
      </CaseSection>

      <CaseSection index="04" title={copy.caseStudy.mainFeatures}>
        <div className="grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                <h3 className="text-xs font-semibold leading-snug">{feature.title}</h3>
              </div>
              <p className="mt-2 pl-6 text-[0.75rem] leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection index="05" title={copy.caseStudy.technologyStack}>
        <div className="space-y-3">
          {caseStudy.stack.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 rounded-xl border border-border bg-muted/30 p-4 sm:grid-cols-[10rem_1fr] sm:items-center"
            >
              <p className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[0.625rem] text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection index="06" title={copy.caseStudy.developmentProcess}>
        <ol className="space-y-5">
          {caseStudy.process.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-[0.5625rem] text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xs font-semibold">{step.title}</h3>
                <p className="mt-1 text-[0.8125rem] leading-[1.75] text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection index="07" title={copy.caseStudy.technicalChallenges}>
        <div className="space-y-3">
          {caseStudy.challenges.map((challenge) => (
            <div key={challenge.title} className="rounded-xl border border-border bg-card p-4">
              <h3 className="flex items-center gap-2 text-xs font-semibold">
                <Target className="size-3.5 text-primary" aria-hidden="true" />
                {challenge.title}
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.caseStudy.problem}
                  </p>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-muted-foreground">
                    {challenge.problem}
                  </p>
                </div>
                <div className="rounded-lg bg-accent/40 p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.1em] text-accent-foreground uppercase">
                    <Wrench className="size-2.5" aria-hidden="true" />
                    {copy.caseStudy.decision}
                  </p>
                  <p className="mt-1.5 text-[0.75rem] leading-relaxed text-foreground/75">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection index="08" title={copy.caseStudy.results}>
        <ul className="space-y-2.5">
          {caseStudy.results.map((result) => (
            <li key={result} className="flex gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
              {result}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index="09" title={copy.caseStudy.lessonsLearned}>
        <ul className="space-y-3">
          {caseStudy.lessons.map((lesson) => (
            <li key={lesson} className="flex gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
              <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-[#a25a35] dark:text-[#e8a77e]" aria-hidden="true" />
              {lesson}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection index="10" title={copy.caseStudy.screenshots}>
        <div className="space-y-4">
          <figure className="overflow-hidden rounded-xl border border-border bg-muted">
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
            <figcaption className="border-t border-border bg-card px-4 py-3 text-[0.6875rem] leading-relaxed text-muted-foreground">
              {interpolate(copy.caseStudy.primaryView, {
                name: project.name,
                category: project.category.toLowerCase(),
              })}
            </figcaption>
          </figure>

          {caseStudy.screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="overflow-hidden rounded-xl border border-border bg-muted"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-4 py-3 text-[0.6875rem] leading-relaxed text-muted-foreground">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>
    </div>
  )
}
