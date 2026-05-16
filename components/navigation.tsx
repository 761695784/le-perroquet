"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/#chambres", label: "Chambres" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#casamance", label: "Casamance" },
  { href: "/#reservation", label: "Réservation" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-jungle-green shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path
                    d="M20 5 C25 5, 30 10, 30 18 C30 26, 25 32, 20 35 C15 32, 10 26, 10 18 C10 10, 15 5, 20 5"
                    fill="none"
                    stroke={isScrolled ? "#C8963E" : "#C8963E"}
                    strokeWidth="1.5"
                  />
                  <circle cx="17" cy="15" r="2" fill={isScrolled ? "#C8963E" : "#C8963E"} />
                  <path
                    d="M15 20 Q20 25, 25 20"
                    fill="none"
                    stroke={isScrolled ? "#C8963E" : "#C8963E"}
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className={`font-serif text-xl font-semibold transition-colors ${
                isScrolled ? "text-white" : "text-white"
              }`}>
                Le Perroquet
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-golden-amber ${
                    isScrolled ? "text-white/90" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+221339912329"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled ? "text-white/80" : "text-white/80"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+221 33 991 23 29</span>
              </a>
              <Link
                href="/#reservation"
                className="bg-golden-amber hover:bg-golden-amber/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-jungle-green lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <span className="font-serif text-2xl text-white font-semibold">
                  Le Perroquet
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-serif text-white hover:text-golden-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <Link
                  href="/#reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-golden-amber text-white text-center py-4 rounded-full text-lg font-semibold"
                >
                  Réserver maintenant
                </Link>
                <a
                  href="tel:+221339912329"
                  className="flex items-center justify-center gap-2 text-white/80 mt-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>+221 33 991 23 29</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
