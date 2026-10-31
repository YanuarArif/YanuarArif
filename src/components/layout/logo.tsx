import { Link } from 'react-router-dom'

import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showName?: boolean
  size?: 'default' | 'lg'
}

export function Logo({ className, showName = true, size = 'default' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${profile.name} — home`}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
        className,
      )}
    >
      <span
        className={cn(
          'relative grid place-items-center rounded-[0.6rem] bg-foreground font-mono font-semibold text-background transition-transform duration-200 group-hover:-translate-y-0.5',
          size === 'lg' ? 'size-10 text-sm' : 'size-8 text-[0.6875rem]',
        )}
        aria-hidden="true"
      >
        {profile.initials}
        <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-primary" />
      </span>
      {showName ? (
        <span className="flex flex-col leading-none">
          <span className={cn('font-semibold tracking-[-0.015em]', size === 'lg' ? 'text-base' : 'text-sm')}>
            {profile.name}
          </span>
          <span className="mt-1 font-mono text-[0.5625rem] tracking-[0.12em] text-muted-foreground uppercase">
            {profile.role}
          </span>
        </span>
      ) : null}
    </Link>
  )
}
