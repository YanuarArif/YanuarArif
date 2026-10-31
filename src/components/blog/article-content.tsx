import { Info } from 'lucide-react'
import type { ReactNode } from 'react'

import { slugifyHeading } from '@/lib/blog'
import { cn } from '@/lib/utils'
import type { ArticleBlock } from '@/types'

/** Renders inline `code` spans without pulling in a Markdown renderer. */
function renderInlineText(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.82em] text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      )
    }

    return part
  })
}

interface ArticleContentProps {
  content: ArticleBlock[]
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-[0.9375rem] leading-[1.85] text-foreground/80 sm:text-base sm:leading-[1.85]">
          {renderInlineText(block.text)}
        </p>
      )

    case 'heading': {
      const id = slugifyHeading(block.text)

      if (block.level === 2) {
        return (
          <h2
            id={id}
            className="scroll-mt-24 pt-4 text-[1.4rem] font-semibold tracking-[-0.03em] text-foreground sm:pt-6 sm:text-[1.65rem]"
          >
            {block.text}
          </h2>
        )
      }

      return (
        <h3
          id={id}
          className="scroll-mt-24 pt-2 text-lg font-semibold tracking-[-0.02em] text-foreground"
        >
          {block.text}
        </h3>
      )
    }

    case 'list':
      if (block.ordered) {
        return (
          <ol className="space-y-2.5">
            {block.items.map((item, index) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9375rem] leading-[1.8] text-foreground/80"
              >
                <span className="mt-0.5 font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{renderInlineText(item)}</span>
              </li>
            ))}
          </ol>
        )
      }

      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[0.9375rem] leading-[1.8] text-foreground/80"
            >
              <span
                className="mt-[0.65rem] size-1 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>{renderInlineText(item)}</span>
            </li>
          ))}
        </ul>
      )

    case 'code':
      return (
        <figure className="overflow-hidden rounded-xl border border-border bg-[#0d1518]">
          <figcaption className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[0.5625rem] tracking-[0.12em] text-white/45 uppercase">
            <span>{block.language}</span>
            <span className="flex gap-1" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
            </span>
          </figcaption>
          <pre className="article-code overflow-x-auto p-4 font-mono text-[0.75rem] leading-[1.8] text-[#dbe9e4] sm:p-5 sm:text-[0.8125rem]">
            <code>{block.code}</code>
          </pre>
        </figure>
      )

    case 'quote':
      return (
        <blockquote className="border-l-2 border-primary py-1 pl-5">            <p className="text-lg leading-relaxed font-medium tracking-[-0.015em] text-foreground italic">
            {renderInlineText(block.text)}
          </p>
          {block.cite ? (
            <cite className="mt-2 block font-mono text-[0.625rem] tracking-[0.08em] text-muted-foreground not-italic uppercase">
              {block.cite}
            </cite>
          ) : null}
        </blockquote>
      )

    case 'callout':
      return (
        <aside className="flex gap-3 rounded-xl border border-border bg-accent/45 p-4 sm:p-5">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <div>
            {block.title ? (
              <p className="text-sm font-semibold text-foreground">{block.title}</p>
            ) : null}
            <p
              className={cn(
                'text-[0.8125rem] leading-relaxed text-foreground/75',
                block.title && 'mt-1',
              )}
            >
              {renderInlineText(block.text)}
            </p>
          </div>
        </aside>
      )
  }
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => (
        <ArticleBlockView key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  )
}
