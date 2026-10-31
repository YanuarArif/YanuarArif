import {
  Container,
  Database,
  LayoutDashboard,
  ServerCog,
  Smartphone,
  Wrench,
} from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { TechIcon } from '@/components/ui/tech-icon'
import { skillGroupsContent } from '@/data/skills'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'
import type { SkillGroupIcon, SkillLevel } from '@/types'

const groupIcons = {
  layout: LayoutDashboard,
  server: ServerCog,
  database: Database,
  infrastructure: Container,
  workflow: Wrench,
  mobile: Smartphone,
} satisfies Record<SkillGroupIcon, typeof LayoutDashboard>

const levelStyles: Record<SkillLevel, string> = {
  Advanced: 'bg-accent text-accent-foreground',
  Proficient: 'bg-muted text-muted-foreground',
  'Working knowledge': 'bg-transparent text-muted-foreground/80',
}

export function Skills() {
  const skillGroups = useLocalized(skillGroupsContent)
  const copy = useUICopy()

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-anchor border-t border-border bg-muted/25 py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="skills-title"
              index="03"
              label={copy.skills.label}
              title={copy.skills.title}
              description={copy.skills.description}
            />
            <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 md:pb-1">
              {(['Advanced', 'Proficient', 'Working knowledge'] as const).map((level) => (
                <span key={level} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      'size-1.5 rounded-full',
                      level === 'Advanced'
                        ? 'bg-primary'
                        : level === 'Proficient'
                          ? 'bg-muted-foreground/60'
                          : 'bg-border',
                    )}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[0.5625rem] tracking-[0.08em] text-muted-foreground uppercase">
                    {copy.skills.levels[level]}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.icon]

            return (
              <Reveal key={group.id} delay={index * 0.035}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-[border-color,box-shadow] duration-300 hover:border-foreground/20 hover:shadow-[0_18px_40px_-32px_rgb(0_0_0/0.4)]">
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-muted text-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[-0.01em]">{group.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 divide-y divide-border/70 border-t border-border/70">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 py-[0.55rem]"
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted/80 text-muted-foreground">
                            <TechIcon name={skill.name} className="size-3.5" />
                          </span>
                          <span className="truncate text-xs font-medium">{skill.name}</span>
                        </span>
                        <span
                          className={cn(
                            'shrink-0 rounded-full px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.02em]',
                            levelStyles[skill.level],
                          )}
                        >
                          {copy.skills.levels[skill.level]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
