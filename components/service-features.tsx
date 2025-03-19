"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Building,
  Factory,
  Hammer,
  ClipboardList,
  CheckSquare,
  Lightbulb,
  Shield,
  Clock,
  Users,
  Zap,
  Settings,
} from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
  icon: string
}

interface ServiceFeaturesProps {
  features: ServiceFeature[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  // Mapping des noms d'icônes aux composants Lucide
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="h-10 w-10 text-primary" />,
    Building: <Building className="h-10 w-10 text-primary" />,
    Factory: <Factory className="h-10 w-10 text-primary" />,
    Hammer: <Hammer className="h-10 w-10 text-primary" />,
    ClipboardList: <ClipboardList className="h-10 w-10 text-primary" />,
    CheckSquare: <CheckSquare className="h-10 w-10 text-primary" />,
    Lightbulb: <Lightbulb className="h-10 w-10 text-primary" />,
    Shield: <Shield className="h-10 w-10 text-primary" />,
    Clock: <Clock className="h-10 w-10 text-primary" />,
    Users: <Users className="h-10 w-10 text-primary" />,
    Zap: <Zap className="h-10 w-10 text-primary" />,
    Settings: <Settings className="h-10 w-10 text-primary" />,
  }

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
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Découvrez notre gamme complète de services pour répondre à tous vos besoins.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {iconMap[feature.icon] || <Lightbulb className="h-10 w-10 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

