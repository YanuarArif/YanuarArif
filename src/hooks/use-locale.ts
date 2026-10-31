import { createContext, useContext } from 'react'

import { uiCopy } from '@/data/ui'
import type { Localized, Locale, UICopy } from '@/types'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export const LOCALE_STORAGE_KEY = 'yanuar-portfolio-locale'

export const DEFAULT_LOCALE: Locale = 'en'

export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'id'] as const

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }

  return context
}

/**
 * Picks the active language slice out of a localized data record.
 * Components stay declarative: `const profile = useLocalized(profileContent)`.
 */
export function useLocalized<T>(content: Localized<T>): T {
  const { locale } = useLocale()

  return content[locale]
}

/** Interface strings for the active language. */
export function useUICopy(): UICopy {
  return useLocalized(uiCopy)
}
