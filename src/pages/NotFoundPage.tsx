import { NotFoundContent } from '@/components/layout/not-found-content'
import { useSEO } from '@/hooks/use-seo'

export default function NotFoundPage() {
  useSEO({
    title: 'Page not found',
    description: 'The page you are looking for does not exist on this portfolio.',
    path: '/404',
    noIndex: true,
  })

  return <NotFoundContent />
}
