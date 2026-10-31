import { Moon, Sun } from 'lucide-react'

import { useUICopy } from '@/hooks/use-locale'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const copy = useUICopy()
  const isDark = theme === 'dark'
  const label = isDark ? copy.meta.themeToLight : copy.meta.themeToDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        'relative inline-flex size-10 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
        className,
      )}
    >
      <Sun
        className={cn(
          'absolute size-[1.15rem] transition-all duration-300',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          'absolute size-[1.15rem] transition-all duration-300',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
        )}
        aria-hidden="true"
      />
    </button>
  )
}
