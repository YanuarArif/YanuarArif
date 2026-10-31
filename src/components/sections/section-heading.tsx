import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  description?: string
  className?: string
  id?: string
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
          {index}
        </span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2
        id={id}
        className="text-3xl leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-[2.65rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
