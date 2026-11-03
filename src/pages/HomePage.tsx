import { About } from '@/components/sections/about'
import { BlogPreview } from '@/components/sections/blog-preview'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Learning } from '@/components/sections/learning'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { profileContent } from '@/data/profile'
import { useLocalized } from '@/hooks/use-locale'
import { useSEO } from '@/hooks/use-seo'

export default function HomePage() {
  const profile = useLocalized(profileContent)

  useSEO({
    title: `${profile.name} — ${profile.role}`,
    description: profile.seoDescription,
    path: '/',
  })

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Learning />
      <BlogPreview />
      <Contact />
    </>
  )
}
