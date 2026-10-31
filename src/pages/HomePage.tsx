import { About } from '@/components/sections/about'
import { BlogPreview } from '@/components/sections/blog-preview'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { profile } from '@/data/profile'
import { useSEO } from '@/hooks/use-seo'

export default function HomePage() {
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
      <BlogPreview />
      <Contact />
    </>
  )
}
