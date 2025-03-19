import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"
import ContactInfo from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Engrenage Corporation",
  description:
    "Contactez Engrenage Corporation pour tous vos projets de construction, génie civil, immobilier, assurance et plus. Notre équipe est à votre écoute.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <ContactHero />
      <div className="w-full py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      {/*<ContactMap />*/}
    </main>
  )
}

