import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ArticleBlock, Locale } from '@/types'

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
