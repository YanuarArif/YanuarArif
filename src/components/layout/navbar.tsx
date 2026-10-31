import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from '@/components/layout/logo'
import { MobileNav } from '@/components/layout/mobile-nav'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { profileContent } from '@/data/profile'
import { useLocalized, useUICopy } from '@/hooks/use-locale'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { homeSectionIds, navItemsContent, type NavItem } from '@/lib/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { pathname, hash } = useLocation()
  const activeSection = useScrollSpy(homeSectionIds)
  const profile = useLocalized(profileContent)
  const navItems = useLocalized(navItemsContent)
  const copy = useUICopy()

  const isHome = pathname === '/'

  const isActive = (item: NavItem): boolean => {
    if (item.href === '/blog') {
      return (
        pathname === '/blog' ||
        pathname.startsWith('/blog/') ||
        (isHome && activeSection === 'blog')
      )
    }

    if (pathname.startsWith('/projects/')) {
      return item.sectionId === 'projects'
    }

    if (!isHome) return false

    return activeSection === item.sectionId
  }

  const currentLabel = navItems.find((item) => isActive(item))?.label

  const handleSamePageHash = useCallback(
    (href: string) => {
      if (!isHome || !href.includes('#')) return

      const id = href.split('#')[1]
      if (!id || hash !== `#${id}`) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document.getElementById(id)?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    },
    [hash, isHome],
  )

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-background/[0.82] backdrop-blur-xl supports-[backdrop-filter]:bg-background/[0.72]">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label={copy.nav.primary} className="hidden lg:flex lg:items-center lg:gap-0.5">
          {navItems.map((item) => {
            const active = isActive(item)
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => handleSamePageHash(item.href)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-3 py-2 text-[0.8125rem] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                  active
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary transition-opacity',
                    active ? 'opacity-100' : 'opacity-0',
                  )}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/#contact"
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:border-foreground/20 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none xl:inline-flex"
          >
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-pulse-soft rounded-full bg-primary" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {profile.availability.available ? copy.nav.openToWork : copy.nav.currentlyBooked}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <MobileNav activeLabel={currentLabel} />
        </div>
      </div>
    </header>
  )
}
