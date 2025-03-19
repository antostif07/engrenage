"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  position: string
  image: string
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[]
}

export default function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Découvrez les témoignages de nos clients satisfaits.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-xl">
            <CardContent className="p-8 sm:p-10">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl sm:text-2xl italic mb-8">"{testimonials[currentIndex].quote}"</p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/10 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

