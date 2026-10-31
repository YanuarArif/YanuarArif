import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useUICopy } from '@/hooks/use-locale'

export function NotFoundContent() {
  const { pathname } = useLocation()
  const copy = useUICopy()

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col items-center py-32 text-center md:py-40">
        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-primary uppercase">
          {copy.notFound.error}
        </p>
        <h1 className="mt-5 text-[clamp(4.5rem,14vw,8rem)] leading-none font-semibold tracking-[-0.07em]">
          404<span className="text-primary">.</span>
        </h1>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          {copy.notFound.title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {copy.notFound.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft aria-hidden="true" />
              {copy.notFound.backHome}
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/#projects">
              {copy.notFound.browseProjects}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 w-full max-w-md overflow-hidden rounded-xl border border-border bg-card text-left shadow-[0_18px_50px_-40px_rgb(0_0_0/0.4)]">
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
            </span>
            <span className="ml-1 font-mono text-[0.5625rem] text-muted-foreground">
              request.log
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[0.6875rem] leading-relaxed">
            <code>
              <span className="text-muted-foreground">GET</span> {pathname}
              {'\n'}
              <span className="text-[#b42318] dark:text-[#f97066]">404</span>{' '}
              <span className="text-muted-foreground">Not Found</span>
              {'\n\n'}
              <span className="text-muted-foreground/60">{copy.notFound.logComment}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
