"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nous Trouver</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Rendez-nous visite à notre siège social ou dans l'une de nos agences régionales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <div className="aspect-video w-full">
            {/* Remplacer par une vraie carte Google Maps ou autre service de cartographie */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Carte interactive - Intégrez ici Google Maps ou un autre service de cartographie
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">Siège Social - Paris</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">123 Avenue des Affaires</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">75008 Paris, France</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">+33 1 23 45 67 89</p>
            <p className="text-gray-600 dark:text-gray-400">paris@nexcorp.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">Agence - Lyon</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">45 Rue de la République</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">69002 Lyon, France</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">+33 4 56 78 90 12</p>
            <p className="text-gray-600 dark:text-gray-400">lyon@nexcorp.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-3">Agence - Marseille</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">78 Boulevard du Littoral</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">13007 Marseille, France</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">+33 4 91 23 45 67</p>
            <p className="text-gray-600 dark:text-gray-400">marseille@nexcorp.com</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

