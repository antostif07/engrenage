"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Message envoyé avec succès!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Envoyer un autre message</Button>
          </motion.div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Téléphone
              </label>
              <Input id="phone" placeholder="Votre numéro de téléphone" />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service concerné
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="fournitures">Fournitures et Services</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="facilitation">Facilitation</SelectItem>
                  <SelectItem value="commerce">Commerce général</SelectItem>
                  <SelectItem value="genie-civil">Génie civil</SelectItem>
                  <SelectItem value="douane">Douane</SelectItem>
                  <SelectItem value="assurance">Assurance</SelectItem>
                  <SelectItem value="immobilier">Production et Promotion immobilière</SelectItem>
                  <SelectItem value="industrialisation">Industrialisation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Décrivez votre projet ou votre demande..." rows={5} required />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                J'accepte que mes données soient traitées conformément à la politique de confidentialité
              </label>
            </div>

            <Button type="submit" className="w-full">
              Envoyer le Message
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  )
}

