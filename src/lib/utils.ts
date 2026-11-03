import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ArticleBlock, Locale, UICopy } from '@/types'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/** Replaces `{placeholder}` tokens in a localized string. */
export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  )
}

/**
 * Whole months between two date keys, or between a start key and today when
 * `end` is `null`. Keys are `YYYY-MM`, or plain `YYYY` for a year-only entry,
 * in which case the month falls back to the start of the year.
 *
 * `now` can be passed in for deterministic tests.
 */
export function getDurationMonths(
  start: string,
  end: string | null,
  now: Date = new Date(),
): number {
  const [startYear, startMonth] = start.split('-').map(Number)
  const startMonthValue = startMonth ?? 1

  const endYear = end ? Number(end.split('-')[0]) : now.getFullYear()
  const endMonth = end
    ? Number(end.split('-')[1] ?? 1)
    : now.getMonth() + 1

  return Math.max(
    0,
    (endYear - (startYear ?? 0)) * 12 + (endMonth - startMonthValue),
  )
}

/**
 * Turns a month count into readable copy ("2 years, 3 months"). It reads its
 * templates from the active locale, so the same helper can format any entry.
 *
 * `approximate` is used when only the start year is confirmed: the result is
 * then a lower bound ("3+ yr") rather than a precise figure.
 */
export function formatDuration(
  months: number,
  units: UICopy['work']['durationUnits'],
  approximate = false,
): string {
  const years = Math.floor(months / 12)
  const rest = months % 12

  if (approximate) {
    return interpolate(units.approximateYears, { years: Math.max(years, 1) })
  }

  if (years > 0 && rest > 0) {
    return interpolate(units.both, { years, months: rest })
  }

  if (years > 0) {
    return interpolate(units.years, { years })
  }

  return interpolate(units.months, { months: Math.max(months, 1) })
}

const dateFormatters: Record<Locale, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }),
  id: new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }),
}

export function formatDate(isoDate: string, locale: Locale = 'en'): string {
  return dateFormatters[locale].format(new Date(`${isoDate}T00:00:00Z`))
}

function blockToPlainText(block: ArticleBlock): string {
  switch (block.type) {
    case 'paragraph':
    case 'heading':
    case 'callout':
      return block.text
    case 'list':
      return block.items.join(' ')
    case 'quote':
      return block.text
    case 'code':
      return block.code
  }
}

export function getReadingTime(content: ArticleBlock[]): number {
  const words = content
    .map(blockToPlainText)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.round(words / 215))
}
