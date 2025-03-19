"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 w-full bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Prêt à Concrétiser Votre Prochain Projet?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            De la construction à l'assurance, en passant par le conseil et la facilitation, notre expertise
            multisectorielle est à votre service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Demander un Devis</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link href="/services">Explorer nos Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

