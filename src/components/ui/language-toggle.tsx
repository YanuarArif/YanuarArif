import { useLocale, useUICopy } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'
import type { Locale } from '@/types'

const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
}

const localeShortNames: Record<Locale, string> = {
  en: 'EN',
  id: 'ID',
}

interface LanguageToggleProps {
  className?: string
}

/**
 * Two-state language switch. Kept as real buttons (not a select) so the
 * choice is one tap away on mobile and announces its state with
 * `aria-pressed`.
 */
export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale()
  const copy = useUICopy()

  return (
    <div
      role="group"
      aria-label={copy.meta.switchLanguage}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border bg-card/70 p-0.5',
        className,
      )}
    >
      {(Object.keys(localeNames) as Locale[]).map((value) => {
        const active = value === locale

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={active}
            aria-label={localeNames[value]}
            lang={value}
            title={localeNames[value]}
            className={cn(
              'rounded-full px-2 py-1 font-mono text-[0.5625rem] font-semibold tracking-[0.08em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              active
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {localeShortNames[value]}
          </button>
        )
      })}
    </div>
  )
}
