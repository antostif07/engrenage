"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-2.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-600/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              Solutions Multisectorielles pour Entreprises
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Excellence dans la Construction et les Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl opacity-90 mb-8 max-w-lg"
            >
              De la construction à l'assurance, en passant par le génie civil et la promotion immobilière, notre
              expertise multisectorielle répond à tous vos besoins professionnels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Démarrer un Projet</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                <Link href="/services">Découvrir nos Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <Image
              src="/bg-3.jpg"
              alt="Hero Illustration"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="flex space-x-16 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm">
          <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo 1" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo 2" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo 3" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client Logo 4" width={120} height={40} />
        </div>
      </motion.div> */}
    </div>
  )
}

