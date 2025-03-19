import ServicesHero from "@/components/services-hero"
import ServicesDetail from "@/components/services-detail"
import ServicesProcess from "@/components/services-process"
import ServicesProjects from "@/components/services-projects"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Services | Engrenage Corporation",
  description:
    "Découvrez notre gamme complète de services dans la construction, le génie civil, l'immobilier, l'assurance et bien plus encore.",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <ServicesHero />
      <ServicesDetail />
      <ServicesProcess />
      {/*<ServicesProjects />*/}
      <CTA />
    </main>
  )
}

