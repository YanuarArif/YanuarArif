import { Code2 } from 'lucide-react'

import { getTechIcon } from '@/lib/tech-icons'
import { cn } from '@/lib/utils'

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className }: TechIconProps) {
  const icon = getTechIcon(name)

  if (!icon) {
    return <Code2 className={cn('size-3.5', className)} aria-hidden="true" />
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('size-3.5', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  )
}
