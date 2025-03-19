"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  Factory,
  FileCheck,
  HardHat,
  Handshake,
  Lightbulb,
  Package,
  Shield,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"

export default function ServicesDetail() {
  const services = [
    {
      id: "construction",
      icon: <HardHat className="h-6 w-6" />,
      title: "Construction",
      description:
        "Notre expertise en construction couvre tous types de projets, des bâtiments résidentiels aux infrastructures commerciales et industrielles.",
      features: [
        "Construction de bâtiments résidentiels et commerciaux",
        "Rénovation et réhabilitation",
        "Construction d'infrastructures",
        "Gestion de projets de construction",
        "Contrôle qualité et supervision",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "fournitures",
      icon: <Package className="h-6 w-6" />,
      title: "Fournitures et Services",
      description:
        "Nous fournissons une large gamme de matériaux, d'équipements et de services pour répondre à tous vos besoins professionnels.",
      features: [
        "Fourniture de matériaux de construction",
        "Équipements industriels et techniques",
        "Mobilier professionnel",
        "Services de maintenance",
        "Solutions logistiques",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "consulting",
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Consulting",
      description:
        "Nos services de conseil vous accompagnent dans l'optimisation de vos projets et la prise de décisions stratégiques.",
      features: [
        "Études de faisabilité",
        "Conseil en stratégie d'entreprise",
        "Optimisation des processus",
        "Gestion des risques",
        "Accompagnement au changement",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "facilitation",
      icon: <Handshake className="h-6 w-6" />,
      title: "Facilitation",
      description:
        "Nous facilitons vos démarches administratives et opérationnelles pour vous permettre de vous concentrer sur votre cœur de métier.",
      features: [
        "Accompagnement administratif",
        "Facilitation des procédures réglementaires",
        "Mise en relation avec des partenaires clés",
        "Coordination interservices",
        "Suivi et reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "commerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Commerce général",
      description:
        "Notre activité de commerce général vous propose une large gamme de produits pour répondre à vos besoins diversifiés.",
      features: [
        "Distribution de produits industriels",
        "Fournitures générales pour entreprises",
        "Import-export",
        "Gestion de la chaîne d'approvisionnement",
        "Solutions d'achat groupé",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "genie-civil",
      icon: <HardHat className="h-6 w-6" />,
      title: "Génie civil",
      description:
        "Notre expertise en génie civil nous permet de concevoir et réaliser des infrastructures durables et fonctionnelles.",
      features: [
        "Conception et réalisation d'ouvrages d'art",
        "Travaux routiers et autoroutiers",
        "Aménagements hydrauliques",
        "Infrastructures urbaines",
        "Études techniques et structurelles",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "douane",
      icon: <FileCheck className="h-6 w-6" />,
      title: "Douane",
      description:
        "Nos services douaniers facilitent vos opérations d'import-export et assurent la conformité réglementaire de vos transactions internationales.",
      features: [
        "Dédouanement de marchandises",
        "Conseil en réglementation douanière",
        "Optimisation fiscale et douanière",
        "Gestion des litiges douaniers",
        "Veille réglementaire",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "assurance",
      icon: <Shield className="h-6 w-6" />,
      title: "Assurance",
      description:
        "Nos solutions d'assurance protègent vos biens, vos activités et vos collaborateurs contre les risques professionnels.",
      features: [
        "Assurance construction et travaux",
        "Assurance responsabilité civile professionnelle",
        "Assurance dommages aux biens",
        "Assurance transport et logistique",
        "Gestion des sinistres",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "immobilier",
      icon: <Building className="h-6 w-6" />,
      title: "Production et Promotion immobilière",
      description:
        "Notre activité immobilière développe des projets innovants et durables, de la conception à la commercialisation.",
      features: [
        "Développement de projets immobiliers",
        "Construction résidentielle et commerciale",
        "Réhabilitation d'immeubles",
        "Gestion de patrimoine immobilier",
        "Commercialisation et marketing immobilier",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "industrialisation",
      icon: <Factory className="h-6 w-6" />,
      title: "Industrialisation",
      description:
        "Nos solutions d'industrialisation optimisent vos processus de production et renforcent votre compétitivité.",
      features: [
        "Conception et mise en place de lignes de production",
        "Automatisation industrielle",
        "Optimisation des processus de fabrication",
        "Maintenance industrielle",
        "Formation technique",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Secteurs d'Activité</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explorez notre gamme complète de services dans 10 secteurs d'activité complémentaires.
          </p>
        </motion.div>

        <Tabs defaultValue="construction" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2 m-1">
                {service.icon}
                <span className="hidden sm:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-2"
                      >
                        <div className="bg-primary/10 p-1 rounded-full mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-1/2 rounded-lg bg-primary/5 -z-10"></div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

