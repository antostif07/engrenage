"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Link } from "lucide-react"
import Image from "next/image"

interface Partner {
  name: string
  description: string
  website: string
  logo: string | null // logo can be a string URL or null
}

const partners: Partner[] = [
  {
    name: "Adi Construct",
    description:
        "Un leader dans le secteur de la construction, partenaire clé pour nos projets d'infrastructure.",
    website: "https://example.com/alpha",
    logo: null,
  },
  {
    name: "Société Kin Prestige - SKP",
    description:
        "Spécialistes en logistique et dédouanement, assurant l'efficacité de nos opérations à l'international.",
    website: "https://example.com/beta",
    logo: null,
  },
  {
    name: "2x Engenering",
    description:
        "Fournisseur de solutions d'assurance complètes, garantissant la sécurité de nos activités.",
    website: "https://example.com/gamma",
    logo: null,
  },
  {
    name: "Groupe Prima Vera",
    description:
        "Experts en promotion immobilière, transformant des visions en réalité avec une qualité exceptionnelle.",
    website: "https://example.com/delta",
    logo: null,
  },
]

const backgroundImage = "/bg-1.jpg" // Replace with your image path

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const containerRef = useRef<HTMLElement>(null) // useRef for the entire section.  Explicitly typed as HTMLElement.
  const [hasLogo, setHasLogo] = useState(false);

  // Framer Motion Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Adjust these offsets as needed
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) // Adjust '30%' for the parallax effect strength

  useEffect(() => {
    // Check if the current partner has a logo and update state
    if (partners[currentIndex].logo) {
      setHasLogo(true);
    } else {
      setHasLogo(false);
    }
  }, [currentIndex]);

  // Function to handle next partner, taking into account grid layout
  const nextPartner = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= partners.length ? 0 : newIndex
    })
  }

  // Function to handle previous partner, taking into account grid layout
  const prevPartner = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return newIndex < 0 ? partners.length - 1 : newIndex
    })
  }

  const getPartnersForDisplay = (): Partner[] => {  // Explicit return type
    // For xs/sm: display only one partner
    if (typeof window !== 'undefined' && window.innerWidth < 768) { // Check if window is defined for SSR safety
      return [partners[currentIndex % partners.length]]
    }

    // For larger screens: display two partners
    const partner1 = partners[currentIndex % partners.length]
    const partner2 = partners[(currentIndex + 1) % partners.length]
    return [partner1, partner2]
  }

  const displayedPartners = getPartnersForDisplay()


  return (
      <section className="py-20 w-full bg-gray-50 dark:bg-gray-900 relative overflow-hidden" ref={containerRef}>
        {/* Parallax Background */}
        <motion.div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: `center ${backgroundY.get()}`, // Dynamic background position
              opacity: 0.3, // Adjust opacity as needed
              pointerEvents: "none", // Make sure it doesn't block clicks
            }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Added relative and z-index */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Nos Partenaires Clés
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Découvrez les entreprises avec lesquelles nous collaborons pour offrir des solutions complètes et de haute qualité.
            </p>
          </motion.div>

          {/* Grid container for the cards */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {displayedPartners.map((partner, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 shadow-xl">
                  <CardContent className="p-8 sm:p-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                      {partner.logo ? (
                          <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                              <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-cover"
                              />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{partner.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{partner.description}</p>
                          </div>
                      ) : (
                          <div className="flex flex-col items-center">
                            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{partner.name}</h4>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{partner.description}</p>
                          </div>
                      )}

                      <Link
                          href={partner.website}
                          target="_blank"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                      >
                        Visiter le site web
                        <Link className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
                onClick={prevPartner}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 transition-colors"
                aria-label="Partenaire précédent"
            >
              <ChevronLeft className="h-6 w-6"
              />
            </button>
            <button
                onClick={nextPartner}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 transition-colors"
                aria-label="Partenaire suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
  )
}