import { ArrowRight, ArrowUpRight, MonitorPlay } from 'lucide-react'
import { Link } from 'react-router-dom'

import { GitHubIcon } from '@/components/ui/brand-icons'
import { TechIcon } from '@/components/ui/tech-icon'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_24px_60px_-38px_rgb(0_0_0/0.45)]">
      <div className="relative overflow-hidden border-b border-border bg-muted">
        <Link
          to={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="block"
        >
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            width={1200}
            height={750}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        </Link>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.1em] text-white/90 uppercase backdrop-blur-sm">
          Case study
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em]">
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-sm transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {project.name}
            <span className="sr-only"> — view case study</span>
          </Link>
        </h3>
        <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature.title}
              className="flex items-start gap-2 text-[0.6875rem] leading-relaxed text-muted-foreground"
            >
              <span className="mt-[0.4rem] size-1 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
              {feature.title}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
            >
              <TechIcon name={tech} className="size-2.5" />
              {tech}
            </span>
          ))}
          {project.tech.length > 5 ? (
            <span className="inline-flex items-center rounded-full border border-border px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <div className="flex items-center gap-1">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[0.6875rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <MonitorPlay className="size-3.5" aria-hidden="true" />
              Live demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={project.links.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[0.6875rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <GitHubIcon className="size-3.5" />
              Code
              <ArrowUpRight className="size-2.5 opacity-60" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            View details
            <ArrowRight
              className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
