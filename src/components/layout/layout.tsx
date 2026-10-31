import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { useUICopy } from '@/hooks/use-locale'

export function Layout() {
  const copy = useUICopy()

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none"
      >
        {copy.meta.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
