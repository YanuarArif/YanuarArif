import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/layout/layout'
import { RouteFallback } from '@/components/layout/route-fallback'
import { ScrollManager } from '@/components/layout/scroll-manager'
import { LocaleProvider } from '@/components/locale-provider'
import { ThemeProvider } from '@/components/theme-provider'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'

const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'))

function Suspended({ children }: { children: ReactNode }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>
}

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="projects/:slug"
                element={
                  <Suspended>
                    <ProjectDetailPage />
                  </Suspended>
                }
              />
              <Route
                path="blog"
                element={
                  <Suspended>
                    <BlogPage />
                  </Suspended>
                }
              />
              <Route
                path="blog/:slug"
                element={
                  <Suspended>
                    <BlogDetailPage />
                  </Suspended>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  )
}
