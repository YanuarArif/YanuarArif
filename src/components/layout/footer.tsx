import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { BackToTop } from '@/components/layout/back-to-top'
import { Logo } from '@/components/layout/logo'
import { SocialIcon } from '@/components/ui/social-icon'
import { profileContent } from '@/data/profile'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import { navItemsContent } from '@/lib/navigation'
import { interpolate } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()
  const profile = useLocalized(profileContent)
  const navItems = useLocalized(navItemsContent)
  const copy = useUICopy()

  return (
    <footer className="border-t border-border bg-muted/35">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12">
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {profile.tagline} {interpolate(copy.footer.tagline, { location: profile.location })}
            </p>
            <p className="mt-4 flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
              <MapPin className="size-3" aria-hidden="true" />
              {profile.timezone}
            </p>
          </div>

          <nav aria-label={copy.nav.footer}>
            <h2 className="eyebrow">{copy.footer.explore}</h2>
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
            <h2 className="eyebrow">{copy.footer.connect}</h2>
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
              {interpolate(copy.footer.rights, { year, name: profile.name })}
            </p>
            <p className="text-[0.6875rem] text-muted-foreground/70">{copy.footer.builtWith}</p>
          </div>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
