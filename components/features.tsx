"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Globe, Shield, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Excellence Technique",
      description:
        "Notre expertise technique dans la construction et le génie civil garantit des réalisations de haute qualité.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Solutions Intégrées",
      description:
        "Notre présence dans de multiples secteurs nous permet d'offrir des solutions complètes et cohérentes.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Fiabilité",
      description: "Nos clients peuvent compter sur notre engagement à respecter les délais et les budgets convenus.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Réseau International",
      description: "Notre réseau de partenaires nous permet d'intervenir efficacement sur des projets internationaux.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Réactivité",
      description: "Notre organisation multisectorielle nous permet de répondre rapidement à tous types de demandes.",
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pourquoi Choisir Notre Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Notre approche multisectorielle nous permet d'offrir des solutions complètes et intégrées, de la
              construction à l'assurance, en passant par le conseil et la facilitation.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8"
            >
              <a href="/about" className="inline-flex items-center text-primary hover:underline font-medium">
                En savoir plus sur notre approche
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwbWVuJTIwYmxhY2t8ZW58MHx8MHx8fDI%3D"
                alt="Notre expertise"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary/5 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-600/10 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

