"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Services de {title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Demander un Devis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">Voir nos Réalisations</Link>
              </Button>
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
                src={image || "/placeholder.svg"}
                alt={`Services de ${title}`}
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

