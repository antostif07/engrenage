"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">À Propos de Engrenage Corporation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Engrenage corporation Sarl, C'est une société des services, ingénieries, bureau de conseil, bureau d'études et d'exécution dans les domaines de Génie civil, Construction, Techniques spéciales, la maintenance et la fourniture.

            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">6+</span>
                <span className="text-gray-600 dark:text-gray-400">Années d'Expérience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">10</span>
                <span className="text-gray-600 dark:text-gray-400">Secteurs d'Activité</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">6+</span>
                <span className="text-gray-600 dark:text-gray-400">Projets Réalisés</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logo-engrenage.png"
                alt="Siège de NEXCORP"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-lg bg-primary/10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-lg bg-blue-600/10 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

