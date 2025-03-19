"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Award, Clock, Shield, Zap, Heart } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
          "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails et un engagement envers la qualité.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Intégrité",
      description:
          "Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations d'affaires et nos pratiques professionnelles.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
          "Nous recherchons constamment de nouvelles approches et solutions pour répondre aux défis complexes de nos clients.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fiabilité",
      description:
          "Nous respectons nos engagements, nos délais et nos budgets, pour établir des relations de confiance durables.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Responsabilité",
      description:
          "Nous assumons la responsabilité de nos actions et de nos résultats, en plaçant la satisfaction client au cœur de nos priorités.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Engagement Social",
      description: "Nous nous engageons à contribuer positivement au développement des communautés où nous opérons.",
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

  const backgroundImage = "/bg-2.jpg" // Replace with your image path
  const sectionRef = useRef(null) // useRef for the entire section

  // Framer Motion Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) // Adjust '20%' for the parallax effect strength

  return (
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" ref={sectionRef}>
        {/* Parallax Background */}
        <motion.div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: `center ${backgroundY.get()}`,
              opacity: 0.2, // Adjust opacity as needed
              pointerEvents: "none",
            }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Nos valeurs fondamentales guident nos actions et définissent notre culture d'entreprise.
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}