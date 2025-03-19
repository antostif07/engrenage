"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-between h-full"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>

        <div className="space-y-6 mb-10">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Notre Adresse</h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Avenue des Affaires
                <br />
                325, Avenue de l'Equateur, commune de la Gombe
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                engenragecorporation@gmail.com
                {/*<br />*/}
                {/*support@nexcorp.com*/}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
              <p className="text-gray-600 dark:text-gray-400">
                +243 89 13 44 237
                <br />
                +243 99 74 11 970
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Heures d'Ouverture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lundi - Vendredi: 9h00 - 18h00
                <br />
                Samedi: 10h00 - 15h00
                <br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary/10 transition-colors">
              <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary/10 transition-colors">
              <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary/10 transition-colors">
              <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary/10 transition-colors">
              <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-primary/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Besoin d'une réponse rapide?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Notre service client est disponible par téléphone du lundi au vendredi de 9h à 18h.
        </p>
        <div className="text-xl font-bold text-primary">+243 89 13 44 237</div>
      </div>
    </motion.div>
  )
}

