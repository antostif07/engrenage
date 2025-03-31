"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90" : "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                NEXCORP
              </span> */}
              <div className="w-24 h-24 pt-4">
              <Logo />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Accueil
            </Link>

            <Link
              href="/services"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
                href="/furnitures"
                className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Fournitures
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              À Propos
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button>Demander un Devis</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                  href="/furnitures"
                  className="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={toggleMenu}
              >
                Fournitures
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={toggleMenu}
              >
                À Propos
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button className="w-full mt-4">Demander un Devis</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

