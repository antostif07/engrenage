"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutHistory() {
  // const milestones = [
  //   {
  //     year: "2008",
  //     title: "Fondation",
  {/*    description: "Création de l'entreprise avec une vision claire : devenir un acteur multisectoriel de référence.",*/}
  {/*  },*/}
  {/*  {*/}
  {/*    year: "2010",*/}
  {/*    title: "Expansion",*/}
  {/*    description: "Diversification des activités vers le génie civil et la promotion immobilière.",*/}
  {/*  },*/}
  {/*  {*/}
  {/*    year: "2013",*/}
  {/*    title: "Internationalisation",*/}
  {/*    description: "Premiers projets internationaux et développement d'un réseau de partenaires stratégiques.",*/}
  //   },
  //   {
  //     year: "2015",
  {/*    title: "Innovation",*/}
  {/*    description:*/}
  {/*      "Intégration de nouvelles technologies et méthodes pour améliorer l'efficacité et la qualité de nos services.",*/}
  {/*  },*/}
  {/*  {*/}
  //     year: "2018",
  //     title: "Certification",
  {/*    description:*/}
  {/*      "Obtention de certifications internationales attestant de notre engagement envers la qualité et la durabilité.",*/}
  //   },
  //   {
  //     year: "2023",
  //     title: "Aujourd'hui",
  //     description:
  //       "Une entreprise multisectorielle reconnue, avec plus de 500 projets réalisés et une présence dans 10 secteurs d'activité.",
  //   },
  // ]

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Le 12 avril 2000, le chant du coq donne le départ de l'ENGRENAGE CORPORATION SARL, avec comme principales activités le gros œuvre en bâtiment, les travaux neufs ou réhabilitation de bâtiments, le génie civil pour les clients du secteur privé et/ou public.

            ENGRENAGE CORPORATION SARL s'appuie sur son professionnalisme et une réelle culture industrielle pour vous proposer la solution la mieux adaptée à vos besoins.

            L'entreprise cumule plus de 7 années d'expérience en informelle. Autant d'années à approfondir les qualifications et le savoir-faire du personnel à s'adapter aux évolutions des demandes des divers clients et à maintenir meilleur niveau de qualité. Notre qualité s'exprimant non seulement lors de la réception de l'ouvrage réalisé mais

            l'ENGRENAGE au meilleur niveau de l'ouvrage réalisé mais

            Également au travers de la méthode utilisée, de la maîtrise technique proposée et de la productivité, tout au long du chantier.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

          {/*<div className="space-y-12">*/}
          {/*  {milestones.map((milestone, index) => (*/}
          {/*    <motion.div*/}
          {/*      key={index}*/}
          {/*      initial={{ opacity: 0, y: 20 }}*/}
          {/*      whileInView={{ opacity: 1, y: 0 }}*/}
          {/*      viewport={{ once: true }}*/}
          {/*      transition={{ delay: index * 0.1, duration: 0.5 }}*/}
          {/*      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}*/}
          {/*    >*/}
          {/*      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>*/}
          {/*        <Card className="border-none shadow-lg">*/}
          {/*          <CardContent className="p-6">*/}
          {/*            <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>*/}
          {/*            <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>*/}
          {/*            <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>*/}
          {/*          </CardContent>*/}
          {/*        </Card>*/}
          {/*      </div>*/}

          {/*      <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white relative z-10 my-4 md:my-0">*/}
          {/*        <span className="text-xs font-bold">{index + 1}</span>*/}
          {/*      </div>*/}

          {/*      <div className="w-full md:w-1/2"></div>*/}
          {/*    </motion.div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )
}

