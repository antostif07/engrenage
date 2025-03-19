"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building,
  Factory,
  FileCheck,
  Handshake,
  HardHat,
  Lightbulb,
  Package,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react"

const services = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Construction",
    description:
      "Réalisation de projets de construction de qualité, respectant les normes et les délais, pour des structures durables et fonctionnelles.",
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "Fournitures et Services",
    description:
      "Approvisionnement en matériaux et équipements de qualité, avec un service client exceptionnel pour répondre à tous vos besoins.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Consulting",
    description:
      "Conseils stratégiques et opérationnels pour optimiser vos projets et maximiser votre retour sur investissement.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Facilitation",
    description:
      "Accompagnement dans vos démarches administratives et opérationnelles pour fluidifier vos processus et accélérer vos projets.",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Commerce général",
    description:
      "Distribution et commercialisation de produits variés pour répondre aux besoins diversifiés de notre clientèle.",
  },
  // {
  //   icon: <HardHat className="h-10 w-10 text-primary" />,
  //   title: "Génie civil",
  //   description:
  //     "Conception et réalisation d'infrastructures et d'ouvrages d'art avec une expertise technique de pointe.",
  // },
  // {
  //   icon: <FileCheck className="h-10 w-10 text-primary" />,
  //   title: "Douane",
  //   description:
  //     "Services de dédouanement et conseil en réglementation douanière pour faciliter vos importations et exportations.",
  // },
  // {
  //   icon: <Shield className="h-10 w-10 text-primary" />,
  //   title: "Assurance",
  //   description:
  //     "Solutions d'assurance personnalisées pour protéger vos biens, vos activités et vos collaborateurs contre les risques.",
  // },
  // {
  //   icon: <Building className="h-10 w-10 text-primary" />,
  //   title: "Production et Promotion immobilière",
  //   description:
  //     "Développement de projets immobiliers innovants, de la conception à la commercialisation, pour créer de la valeur durable.",
  // },
  // {
  //   icon: <Factory className="h-10 w-10 text-primary" />,
  //   title: "Industrialisation",
  //   description:
  //     "Mise en place de processus industriels efficaces et modernes pour optimiser votre production et votre compétitivité.",
  // },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
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
            Une expertise diversifiée pour répondre à tous vos besoins professionnels dans des secteurs clés de
            l'économie.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

