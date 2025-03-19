import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Features from "@/components/features"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}

