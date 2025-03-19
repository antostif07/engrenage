"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  const advantages = [
    "Expertise multisectorielle de la construction à l'assurance",
    "Équipe de professionnels qualifiés dans chaque domaine",
    "Solutions intégrées pour tous vos projets",
    "Respect rigoureux des normes et des délais",
    "Engagement sur la qualité et les résultats",
    "Accompagnement personnalisé de bout en bout",
  ]

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logo-engrenage.png"
                alt="Notre équipe"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-lg bg-primary/10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-lg bg-blue-600/10 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">À Propos de Notre Entreprise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Notre corporation multidisciplinaire réunit des experts dans divers domaines pour offrir des solutions
              complètes dans la construction, le génie civil, l'immobilier, l'assurance et bien d'autres secteurs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Notre mission est d'accompagner les entreprises et les particuliers dans leurs projets, de la conception à
              la réalisation, en leur fournissant des services de haute qualité adaptés à leurs besoins spécifiques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{advantage}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {/*<div className="flex flex-col">*/}
              {/*  <span className="text-4xl font-bold text-primary">250+</span>*/}
              {/*  <span className="text-gray-600 dark:text-gray-400">Clients Satisfaits</span>*/}
              {/*</div>*/}
              {/*<div className="flex flex-col">*/}
              {/*  <span className="text-4xl font-bold text-primary">500+</span>*/}
              {/*  <span className="text-gray-600 dark:text-gray-400">Projets Réalisés</span>*/}
              {/*</div>*/}
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">6+</span>
                <span className="text-gray-600 dark:text-gray-400">Années d'Expérience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

