import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Layers3,
  MonitorPlay,
  UserRound,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { NotFoundContent } from '@/components/layout/not-found-content'
import { CaseStudy } from '@/components/projects/case-study'
import { Badge } from '@/components/ui/badge'
import { GitHubIcon } from '@/components/ui/brand-icons'
import { Button } from '@/components/ui/button'
import { TechIcon } from '@/components/ui/tech-icon'
import { getAdjacentProjects, getProjectBySlug } from '@/data/projects'
import { useLocale, useUICopy } from '@/hooks/use-locale'
import { useSEO } from '@/hooks/use-seo'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const copy = useUICopy()
  const project = slug ? getProjectBySlug(slug, locale) : undefined
  const adjacent = slug ? getAdjacentProjects(slug, locale) : { previous: undefined, next: undefined }

  useSEO({
    title: project
      ? `${project.name} — ${copy.projectDetail.caseStudy}`
      : copy.projectDetail.notFound,
    description: project?.description ?? copy.projectDetail.notFoundDescription,
    path: project ? `/projects/${project.slug}` : '/404',
    type: 'article',
    image: project?.thumbnail ?? '/og-image.png',
    noIndex: !project,
  })

  if (!project) {
    return <NotFoundContent />
  }

  const facts = [
    { label: copy.projectDetail.role, value: project.role, icon: UserRound },
    { label: copy.projectDetail.timeline, value: project.duration, icon: Clock3 },
    { label: copy.projectDetail.year, value: project.year, icon: CalendarDays },
    { label: copy.projectDetail.category, value: project.category, icon: Layers3 },
  ]

  return (
    <article className="pt-16">
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 grid-backdrop [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
          aria-hidden="true"
        />
        <div className="container-page relative py-10 md:py-14">
          <nav aria-label={copy.meta.breadcrumb}>
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.06em] text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {copy.projectDetail.home}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3" />
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="rounded-sm transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {copy.projectDetail.projects}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3" />
              </li>
              <li aria-current="page" className="text-foreground/80">
                {project.name}
              </li>
            </ol>
          </nav>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            <Badge variant="outline">{project.year}</Badge>
            <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
              {copy.projectDetail.caseStudy}
            </span>
          </div>

          <h1 className="mt-4 text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.05em]">
            {project.name}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>

          {project.links.demo || project.links.repository ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.links.demo ? (
                <Button asChild>
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    <MonitorPlay aria-hidden="true" />
                    {copy.projectDetail.liveDemo}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
              {project.links.repository ? (
                <Button asChild variant="secondary">
                  <a href={project.links.repository} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                    {copy.projectDetail.repository}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}

          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
            {facts.map((fact) => {
              const Icon = fact.icon

              return (
                <div key={fact.label}>
                  <dt className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    <Icon className="size-3" aria-hidden="true" />
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium leading-relaxed">{fact.value}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </header>

      <div className="container-page pt-8 md:pt-10">
        <figure className="overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_30px_80px_-55px_rgb(0_0_0/0.5)]">
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            width={1200}
            height={750}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="aspect-[16/10] w-full object-cover"
          />
        </figure>
      </div>

      <div className="container-page grid gap-12 py-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-16">
        <div className="min-w-0">
          <CaseStudy project={project} />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                {copy.projectDetail.atAGlance}
              </h2>
              <dl className="mt-4 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[0.6875rem] text-muted-foreground">
                    {copy.projectDetail.role}
                  </dt>
                  <dd className="max-w-[9rem] text-right text-[0.6875rem] font-medium leading-relaxed">
                    {project.role}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-border/70 pt-3">
                  <dt className="text-[0.6875rem] text-muted-foreground">
                    {copy.projectDetail.duration}
                  </dt>
                  <dd className="text-right text-[0.6875rem] font-medium">{project.duration}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-t border-border/70 pt-3">
                  <dt className="text-[0.6875rem] text-muted-foreground">
                    {copy.projectDetail.year}
                  </dt>
                  <dd className="text-right text-[0.6875rem] font-medium">{project.year}</dd>
                </div>
              </dl>

              <div className="mt-5 border-t border-border/70 pt-4">
                <h3 className="font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {copy.projectDetail.technologies}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/30 px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
                    >
                      <TechIcon name={tech} className="size-2.5" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {project.links.demo || project.links.repository ? (
                <div className="mt-5 grid gap-2 border-t border-border/70 pt-4">
                  {project.links.demo ? (
                    <Button asChild variant="secondary" size="sm">
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        <MonitorPlay aria-hidden="true" />
                        {copy.projectDetail.liveDemo}
                        <ArrowUpRight className="ml-auto" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : null}
                  {project.links.repository ? (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.links.repository} target="_blank" rel="noreferrer">
                        <GitHubIcon />
                        {copy.projectDetail.repository}
                        <ArrowUpRight className="ml-auto" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>

            {adjacent.next ? (
              <Link
                to={`/projects/${adjacent.next.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <img
                  src={adjacent.next.thumbnail}
                  alt=""
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/8] w-full border-b border-border object-cover"
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                      {copy.projectDetail.nextCaseStudy}
                    </p>
                    <p className="mt-1 text-sm font-semibold group-hover:text-primary">
                      {adjacent.next.name}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ) : null}

            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 px-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3" aria-hidden="true" />
              {copy.projectDetail.allProjects}
            </Link>
          </div>
        </aside>
      </div>

      <nav
        aria-label={copy.projectDetail.projectNavigation}
        className="border-t border-border bg-muted/30"
      >
        <div className="container-page grid sm:grid-cols-2">
          {adjacent.previous ? (
            <Link
              to={`/projects/${adjacent.previous.slug}`}
              className="group flex flex-col gap-1.5 border-b border-border py-7 pr-6 sm:border-r sm:border-b-0"
            >
              <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                <ArrowLeft
                  className="size-3 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                {copy.projectDetail.previousProject}
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-primary">
                {adjacent.previous.name}
              </span>
              <span className="text-xs text-muted-foreground">{adjacent.previous.category}</span>
            </Link>
          ) : (
            <div />
          )}

          {adjacent.next ? (
            <Link
              to={`/projects/${adjacent.next.slug}`}
              className="group flex flex-col gap-1.5 py-7 sm:items-end sm:pl-6 sm:text-right"
            >
              <span className="flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
                {copy.projectDetail.nextProject}
                <ArrowRight
                  className="size-3 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-primary">
                {adjacent.next.name}
              </span>
              <span className="text-xs text-muted-foreground">{adjacent.next.category}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  )
}
