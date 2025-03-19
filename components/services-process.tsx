"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, MessageSquare, Settings, CheckCircle, Users, Zap } from "lucide-react"

export default function ServicesProcess() {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Consultation Initiale",
      description:
        "Nous commençons par comprendre vos besoins spécifiques et vos objectifs pour vous proposer les solutions les plus adaptées.",
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: "Analyse et Planification",
      description:
        "Notre équipe analyse votre projet en détail et élabore un plan d'action précis avec un calendrier et un budget.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Mobilisation des Ressources",
      description:
        "Nous mobilisons les experts et les ressources nécessaires pour mener à bien votre projet dans les meilleures conditions.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Exécution",
      description:
        "Nous mettons en œuvre le plan d'action avec rigueur et professionnalisme, en respectant les normes et les délais.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Contrôle Qualité",
      description:
        "Nous effectuons des contrôles réguliers pour garantir la qualité de notre travail et apporter les ajustements nécessaires.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Livraison et Suivi",
      description:
        "Nous livrons le projet finalisé et assurons un suivi pour garantir votre satisfaction à long terme.",
    },
  ]

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Processus de Travail</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Une méthodologie éprouvée pour garantir la réussite de vos projets, quel que soit le secteur d'activité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">{step.icon}</div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

