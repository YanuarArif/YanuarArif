import { ArrowDownRight, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { SocialIcon } from '@/components/ui/social-icon'
import { TechIcon } from '@/components/ui/tech-icon'
import { profileContent } from '@/data/profile'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

const heroStack = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']

export function Hero() {
  const profile = useLocalized(profileContent)
  const copy = useUICopy()

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="section-anchor relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24"
    >
      <div
        className="absolute inset-0 grid-backdrop [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/[0.055] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 py-1.5 pr-3.5 pl-2 text-xs shadow-[0_1px_2px_rgb(0_0_0/0.03)]">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-pulse-soft rounded-full bg-primary" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="font-medium text-foreground">{profile.availability.label}</span>
                <span className="text-border" aria-hidden="true">
                  /
                </span>
                <span className="hidden text-muted-foreground sm:inline">
                  {profile.availability.detail}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase">
                <span>{profile.role}</span>
                <span className="size-1 rounded-full bg-border" aria-hidden="true" />
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" aria-hidden="true" />
                  {profile.location}
                </span>
              </p>
              <h1
                id="hero-title"
                className="mt-4 max-w-[12ch] text-[clamp(2.75rem,7.2vw,4.75rem)] leading-[0.96] font-semibold tracking-[-0.05em]"
              >
                {profile.name}
                <span className="text-primary">.</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl leading-snug font-medium tracking-[-0.02em] text-balance sm:text-2xl">
                {profile.tagline}
              </p>
              <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/#projects">
                    {copy.hero.viewProjects}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/#contact">
                    {copy.hero.contactMe}
                    <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-1">
                  {profile.socials
                    .filter((social) => social.platform !== 'email')
                    .map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <SocialIcon platform={social.platform} className="size-3.5" />
                        {social.label}
                      </a>
                    ))}
                </div>
                <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
                <span className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {profile.timezone}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} distance={24} className="relative">
            <div
              className="absolute -inset-5 rounded-[2rem] bg-primary/[0.055] blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-card shadow-[0_28px_70px_-36px_rgb(0_0_0/0.45)]">
              <div className="flex items-center justify-between border-b border-border bg-muted/45 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                  </span>
                  <span className="ml-2 font-mono text-[0.625rem] text-muted-foreground">
                    profile.ts
                  </span>
                </div>
                <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground/70 uppercase">
                  ~/portfolio
                </span>
              </div>

              <div className="overflow-x-auto p-5 sm:p-6">
                <pre className="font-mono text-[0.7rem] leading-[1.9] sm:text-xs">
                  <code>
                    <span className="text-muted-foreground/60">1 </span>
                    <span className="text-primary">const</span>{' '}
                    <span className="text-foreground">developer</span>{' '}
                    <span className="text-muted-foreground">=</span>{' '}
                    <span className="text-muted-foreground">{'{'}</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">2 </span>
                    {'  '}
                    <span className="text-foreground">name</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">
                      {`'${profile.name}'`}
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">3 </span>
                    {'  '}
                    <span className="text-foreground">role</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">
                      {`'${profile.role}'`}
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">4 </span>
                    {'  '}
                    <span className="text-foreground">based</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">
                      {`'${profile.locationShort}'`}
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">5 </span>
                    {'  '}
                    <span className="text-foreground">stack</span>
                    <span className="text-muted-foreground">: [</span>
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">'React'</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">'TS'</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">'Node'</span>
                    <span className="text-muted-foreground">],</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">6 </span>
                    {'  '}
                    <span className="text-foreground">focus</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-[#a25a35] dark:text-[#e8a77e]">
                      {`'${copy.hero.focusValue}'`}
                    </span>
                    <span className="text-muted-foreground">,</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">7 </span>
                    {'  '}
                    <span className="text-foreground">available</span>
                    <span className="text-muted-foreground">:</span>{' '}
                    <span className="text-primary">{String(profile.availability.available)}</span>
                    <span className="text-muted-foreground">,</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">8 </span>
                    <span className="text-muted-foreground">{'}'}</span>{' '}
                    <span className="text-primary">as const</span>
                    {'\n'}
                    <span className="text-muted-foreground/60">9 </span>
                    {'\n'}
                    <span className="text-muted-foreground/60">10</span>{' '}
                    <span className="text-primary">export type</span>{' '}
                    <span className="text-foreground">Developer</span>{' '}
                    <span className="text-muted-foreground">=</span>{' '}
                    <span className="text-primary">typeof</span>{' '}
                    <span className="text-foreground">developer</span>
                  </code>
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/25 px-5 py-4">
                <div
                  className="flex items-center gap-1.5"
                  aria-label={copy.hero.coreTechnologies}
                >
                  {heroStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-1 font-mono text-[0.5625rem] text-muted-foreground"
                      title={tech}
                    >
                      <TechIcon name={tech} className="size-3" />
                      <span className="hidden sm:inline">{tech}</span>
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground/70 uppercase">
                  TypeScript · strict
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 hidden items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[0_16px_40px_-24px_rgb(0_0_0/0.5)] sm:flex">
              <span
                className={cn(
                  'grid size-7 place-items-center rounded-lg',
                  'bg-accent text-accent-foreground',
                )}
                aria-hidden="true"
              >
                <ArrowDownRight className="size-3.5" />
              </span>
              <span className="leading-tight">
                <span className="block font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase">
                  {copy.hero.currentlyExploring}
                </span>
                <span className="mt-0.5 block text-xs font-medium">{copy.hero.exploringTopic}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
