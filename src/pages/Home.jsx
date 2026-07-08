import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </>
  )
}
