import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BackToTop } from '@/components/layout/back-to-top'
import { Logo } from '@/components/layout/logo'
import { SocialIcon } from '@/components/ui/social-icon'
import { profile } from '@/data/profile'
import { navItems } from '@/lib/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/35">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {profile.tagline} Based in {profile.location}, working with teams anywhere.
            </p>
            <p className="mt-4 flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
              <MapPin className="size-3" aria-hidden="true" />
              {profile.timezone}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Connect</h2>
            <ul className="mt-4 space-y-2.5">
              {profile.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target={social.platform === 'email' ? undefined : '_blank'}
                    rel={social.platform === 'email' ? undefined : 'noreferrer'}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <SocialIcon
                      platform={social.platform}
                      className="size-3.5 text-muted-foreground/70 transition-colors group-hover:text-foreground"
                    />
                    {social.label}
                    <ArrowUpRight
                      className="size-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              © {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-[0.6875rem] text-muted-foreground/70">
              Built with React, TypeScript, Tailwind CSS, and Vite.
            </p>
          </div>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
