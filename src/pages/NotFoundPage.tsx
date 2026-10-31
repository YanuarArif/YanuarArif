import { NotFoundContent } from '@/components/layout/not-found-content'
import { useUICopy } from '@/hooks/use-locale'
import { useSEO } from '@/hooks/use-seo'

export default function NotFoundPage() {
  const copy = useUICopy()

  useSEO({
    title: copy.notFound.seoTitle,
    description: copy.notFound.seoDescription,
    path: '/404',
    noIndex: true,
  })

  return <NotFoundContent />
}
