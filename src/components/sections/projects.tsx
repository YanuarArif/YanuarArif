import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectCard } from '@/components/projects/project-card'
import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { getFeaturedProjects } from '@/data/projects'
import { useLocale, useUICopy } from '@/hooks/use-locale'

export function Projects() {
  const { locale } = useLocale()
  const copy = useUICopy()
  const featuredProjects = getFeaturedProjects(locale)

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-anchor border-t border-border py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="projects-title"
              index="04"
              label={copy.projects.label}
              title={copy.projects.title}
              description={copy.projects.description}
            />
            <p className="shrink-0 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase md:pb-1">
              {String(featuredProjects.length).padStart(2, '0')} {copy.projects.caseStudies}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-muted/30 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
            <p className="text-sm text-muted-foreground">{copy.projects.curious}</p>
            <Link
              to="/#contact"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {copy.projects.startConversation}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
