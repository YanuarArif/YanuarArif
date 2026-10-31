import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LocaleContext,
  SUPPORTED_LOCALES,
  type LocaleContextValue,
} from '@/hooks/use-locale'
import type { Locale } from '@/types'

function isLocale(value: string | null): value is Locale {
  return value !== null && SUPPORTED_LOCALES.includes(value as Locale)
}

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be unavailable in private browsing; fall back to the browser.
  }

  const languages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language]

  return languages.some((language) => language.toLowerCase().startsWith('id'))
    ? 'id'
    : DEFAULT_LOCALE
}

interface LocaleProviderProps {
  children: React.ReactNode
}

/**
 * Holds the active interface language, persists the choice, and keeps the
 * `<html lang>` attribute in sync so screen readers and search engines read
 * the document in the right language.
 */
export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      // Persisting the preference is best-effort.
    }
  }, [locale])

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'en' ? 'id' : 'en'))
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
