"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users } from "lucide-react"

export default function AboutMission() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Mission et Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Guidés par l'excellence et l'innovation, nous nous engageons à fournir des solutions intégrées qui répondent
            aux besoins complexes de nos clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Notre Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fournir des solutions multisectorielles de haute qualité qui répondent aux besoins spécifiques de nos
              clients, en respectant les normes les plus strictes et en créant de la valeur durable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Notre Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Créé dans le but d'apporter des réponses justes et innovantes sur la base du Leadership dans le monde technique, Dans ce cadre, l'entreprise a développé, en République démocratique du Congo, une prestation de service spécifique et de qualités.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nos Engagements</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nous nous engageons à maintenir les plus hauts standards d'éthique, de qualité et de service client, tout
              en contribuant positivement au développement économique et social des communautés où nous opérons.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

