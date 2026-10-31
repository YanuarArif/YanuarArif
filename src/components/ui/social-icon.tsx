import { Mail } from 'lucide-react'

import { GitHubIcon, LinkedInIcon } from '@/components/ui/brand-icons'
import { cn } from '@/lib/utils'
import type { SocialPlatform } from '@/types'

interface SocialIconProps {
  platform: SocialPlatform
  className?: string
}

export function SocialIcon({ platform, className }: SocialIconProps) {
  const classes = cn('size-4', className)

  switch (platform) {
    case 'github':
      return <GitHubIcon className={classes} />
    case 'linkedin':
      return <LinkedInIcon className={classes} />
    case 'email':
      return <Mail className={classes} aria-hidden="true" />
  }
}
