import { useUICopy } from '@/hooks/use-locale'

export function RouteFallback() {
  const copy = useUICopy()

  return (
    <div
      className="container-page pt-32 pb-24"
      role="status"
      aria-live="polite"
      aria-label={copy.meta.loadingPage}
    >
      <div className="h-3 w-24 animate-pulse rounded-full bg-muted" />
      <div className="mt-6 h-10 w-2/3 max-w-xl animate-pulse rounded-lg bg-muted" />
      <div className="mt-4 h-4 w-full max-w-md animate-pulse rounded bg-muted" />
      <div className="mt-10 aspect-[16/8] w-full animate-pulse rounded-2xl bg-muted" />
      <span className="sr-only">{copy.meta.loadingPageContent}</span>
    </div>
  )
}
