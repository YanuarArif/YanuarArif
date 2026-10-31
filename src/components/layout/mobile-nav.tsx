import { ArrowUpRight, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SocialIcon } from '@/components/ui/social-icon'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { profile } from '@/data/profile'
import { navItems } from '@/lib/navigation'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  activeLabel?: string
}

export function MobileNav({ activeLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </DialogTrigger>

      <DialogContent
        className="dialog-content top-0 right-0 left-auto h-dvh w-[min(23rem,calc(100vw-1.5rem))] max-w-none translate-x-0 translate-y-0 gap-0 rounded-none border-y-0 border-r-0 border-l bg-background p-0"
        aria-describedby="mobile-nav-description"
      >
        <DialogTitle className="sr-only">Site navigation</DialogTitle>
        <DialogDescription id="mobile-nav-description" className="sr-only">
          Navigate to sections of the portfolio or open the blog.
        </DialogDescription>

        <div className="flex h-full flex-col overflow-y-auto px-6 pt-20 pb-8">
          <div className="mb-7 flex items-center gap-2.5">
            <span
              className="grid size-8 place-items-center rounded-[0.6rem] bg-foreground font-mono text-[0.6875rem] font-semibold text-background"
              aria-hidden="true"
            >
              {profile.initials}
            </span>
            <span className="text-sm font-semibold">{profile.name}</span>
          </div>

          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item, index) => {
              const isActive = activeLabel === item.label
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group flex items-center justify-between border-b border-border/70 py-3.5 transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-medium tracking-[-0.015em]">{item.label}</span>
                  </span>
                  <ArrowUpRight
                    className={cn(
                      'size-4 transition-transform duration-200',
                      isActive
                        ? 'text-primary'
                        : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                    )}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto pt-10">
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="text-sm font-medium">{profile.availability.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {profile.availability.detail}
              </p>
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Start a conversation
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {profile.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target={social.platform === 'email' ? undefined : '_blank'}
                    rel={social.platform === 'email' ? undefined : 'noreferrer'}
                    aria-label={social.label}
                    className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>

            <p className="mt-4 flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
              <span
                className={cn(
                  'size-1.5 rounded-full',
                  profile.availability.available ? 'bg-primary' : 'bg-muted-foreground',
                )}
                aria-hidden="true"
              />
              {profile.location}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
