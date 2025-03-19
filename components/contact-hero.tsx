"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="w-full py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Notre équipe multisectorielle est à votre écoute pour répondre à toutes vos questions et vous accompagner
            dans vos projets.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">+243 89 13 44 237</div>
              <div className="text-white/80">Téléphone</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">engenragecorporation@gmail.com</div>
              <div className="text-white/80">Email</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">325, Avenue de l'Equateur, commune de la Gombe</div>
              <div className="text-white/80">Adresse</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

