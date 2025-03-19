"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function AboutTeam() {
  const team = [
    {
      name: "Jean Dupont",
      position: "Directeur Général",
      bio: "Plus de 20 ans d'expérience dans le secteur de la construction et du génie civil.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Marie Martin",
      position: "Directrice des Opérations",
      bio: "Experte en gestion de projets complexes et en optimisation des processus opérationnels.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Thomas Bernard",
      position: "Directeur Financier",
      bio: "Spécialiste en finance d'entreprise avec une solide expérience dans le secteur immobilier.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sophie Leclerc",
      position: "Directrice Commerciale",
      bio: "Passionnée par le développement commercial et l'établissement de partenariats stratégiques.",
      image: "/placeholder.svg?height=400&width=400",
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
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Équipe de Direction</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Des professionnels expérimentés et passionnés qui guident notre entreprise vers l'excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

