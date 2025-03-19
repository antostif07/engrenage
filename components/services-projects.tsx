"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesProjects() {
  const projects = [
    {
      title: "Complexe Résidentiel Moderne",
      category: "Construction & Promotion Immobilière",
      description:
        "Un ensemble résidentiel de 120 appartements alliant confort, modernité et respect de l'environnement.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Pont Autoroutier",
      category: "Génie Civil",
      description:
        "Conception et réalisation d'un pont autoroutier de 500 mètres, un ouvrage d'art alliant esthétique et fonctionnalité.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Centre Commercial",
      category: "Construction & Commerce",
      description: "Un centre commercial de 25 000 m² comprenant 80 boutiques, restaurants et espaces de loisirs.",
      image: "/placeholder.svg?height=400&width=600",
    },
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Projets Phares</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Découvrez quelques-unes de nos réalisations emblématiques qui témoignent de notre expertise
            multisectorielle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <Button variant="outline" className="group">
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button>
            Voir tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

