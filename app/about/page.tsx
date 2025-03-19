import AboutHero from "@/components/about-hero"
import AboutMission from "@/components/about-mission"
import AboutValues from "@/components/about-values"
import AboutTeam from "@/components/about-team"
import AboutHistory from "@/components/about-history"
import CTA from "@/components/cta"
import type { Metadata } from "next"
import PageTitle from "@/components/page-title";

export const metadata: Metadata = {
  title: "À Propos | Engrenage Corporation",
  description:
    "Découvrez l'histoire, la mission et les valeurs de Engrenage Corporation, votre partenaire multisectoriel en construction, génie civil, immobilier et assurance.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16 -mb-20">
        <PageTitle title={'A Propos'} backgroundImage={'/bg-2.jpg'} />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutHistory />
      {/*<AboutTeam />*/}
      <CTA />
    </main>
  )
}

