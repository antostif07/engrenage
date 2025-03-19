import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceProjects from "@/components/service-projects"
import ServiceTestimonials from "@/components/service-testimonials"
import ServiceCTA from "@/components/service-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services de Construction | NEXCORP",
  description:
    "Découvrez nos services de construction de qualité, de la conception à la réalisation de vos projets résidentiels, commerciaux et industriels.",
}

// Données spécifiques au service de construction
const serviceData = {
  title: "Construction",
  description: "Des solutions de construction innovantes et durables pour tous vos projets",
  heroImage: "/placeholder.svg?height=600&width=800",
  features: [
    {
      title: "Construction Résidentielle",
      description:
        "Maisons individuelles, immeubles collectifs et résidences de standing adaptés à vos besoins et à votre budget.",
      icon: "Home",
    },
    {
      title: "Construction Commerciale",
      description: "Bureaux, commerces, hôtels et restaurants conçus pour optimiser votre activité professionnelle.",
      icon: "Building",
    },
    {
      title: "Construction Industrielle",
      description:
        "Usines, entrepôts et bâtiments techniques répondant aux exigences spécifiques de votre secteur d'activité.",
      icon: "Factory",
    },
    {
      title: "Rénovation",
      description:
        "Réhabilitation, extension et modernisation de bâtiments existants pour leur donner une nouvelle vie.",
      icon: "Hammer",
    },
    {
      title: "Gestion de Projet",
      description: "Coordination complète de votre projet, du premier coup de crayon à la livraison finale.",
      icon: "ClipboardList",
    },
    {
      title: "Contrôle Qualité",
      description:
        "Suivi rigoureux des normes et des standards pour garantir la qualité et la durabilité de vos constructions.",
      icon: "CheckSquare",
    },
  ],
  process: [
    {
      title: "Consultation et Conception",
      description: "Nous commençons par comprendre vos besoins et vos objectifs pour concevoir un projet sur mesure.",
    },
    {
      title: "Planification et Budgétisation",
      description: "Nous élaborons un plan détaillé et un budget précis pour votre projet.",
    },
    {
      title: "Obtention des Permis",
      description:
        "Nous nous occupons de toutes les démarches administratives et de l'obtention des autorisations nécessaires.",
    },
    {
      title: "Construction",
      description: "Notre équipe qualifiée réalise les travaux selon les plans et les spécifications convenus.",
    },
    {
      title: "Contrôle Qualité",
      description: "Nous effectuons des contrôles réguliers pour garantir la qualité et la conformité des travaux.",
    },
    {
      title: "Livraison et Garantie",
      description: "Nous livrons votre projet finalisé et assurons un suivi post-livraison.",
    },
  ],
  projects: [
    {
      title: "Résidence Les Jardins",
      description: "Ensemble résidentiel de 80 appartements avec espaces verts et équipements collectifs.",
      image: "/placeholder.svg?height=400&width=600",
      location: "Paris, France",
    },
    {
      title: "Centre Commercial Horizon",
      description: "Centre commercial de 15 000 m² comprenant 40 boutiques et restaurants.",
      image: "/placeholder.svg?height=400&width=600",
      location: "Lyon, France",
    },
    {
      title: "Usine Technopole",
      description: "Complexe industriel de 8 000 m² avec bureaux intégrés et espaces logistiques.",
      image: "/placeholder.svg?height=400&width=600",
      location: "Marseille, France",
    },
  ],
  testimonials: [
    {
      quote:
        "NEXCORP a réalisé notre siège social avec un professionnalisme exemplaire. Le résultat dépasse nos attentes en termes de qualité et d'esthétique.",
      author: "Jean Dupont",
      position: "Directeur Général, Entreprise XYZ",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Nous avons confié à NEXCORP la construction de notre résidence de 50 appartements. Le projet a été livré dans les délais et le budget, avec une qualité irréprochable.",
      author: "Marie Martin",
      position: "Présidente, Groupe Immobilier ABC",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

export default function ConstructionServicePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <ServiceHero title={serviceData.title} description={serviceData.description} image={serviceData.heroImage} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess steps={serviceData.process} />
      <ServiceProjects projects={serviceData.projects} />
      <ServiceTestimonials testimonials={serviceData.testimonials} />
      <ServiceCTA service={serviceData.title} />
    </main>
  )
}

