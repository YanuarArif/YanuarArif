import { ArrowUp } from 'lucide-react'

import { useUICopy } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

interface BackToTopProps {
  className?: string
}

export function BackToTop({ className }: BackToTopProps) {
  const copy = useUICopy()

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:border-foreground/25 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
        className,
      )}
    >
      {copy.footer.backToTop}
      <ArrowUp
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  )
}
