"use client"

import { motion } from "framer-motion"
import { Coffee, Sun, Moon } from "lucide-react"
import Link from "next/link"

const formulas = [
  {
    icon: Coffee,
    title: "Petit Dejeuner",
    description: "Petit dejeuner continental ou senegalais",
    price: "2 000 FCFA/pers",
    priceEUR: "≈ 3€",
    cta: "Inclure dans ma reservation",
    ctaLink: "/#reservation",
    highlighted: false,
  },
  {
    icon: Sun,
    title: "Demi-Pension",
    description: "Petit dejeuner + 1 repas (dejeuner ou diner)",
    price: "Sur demande",
    priceEUR: "Nous contacter",
    note: "Ideal pour les sejours de 3 nuits ou plus",
    cta: "Commander",
    ctaLink: "#reserver-table",
    highlighted: true,
  },
  {
    icon: Moon,
    title: "Pension Complete",
    description: "Petit dejeuner + dejeuner + diner",
    price: "Sur demande",
    priceEUR: "Nous contacter",
    cta: "Commander",
    ctaLink: "#reserver-table",
    highlighted: false,
  },
]

export function RestaurantFormulas() {
  return (
    <section className="py-20 lg:py-32 bg-jungle-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Nos Formules
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Simplifiez votre sejour avec nos formules tout compris
          </p>
        </motion.div>

        {/* Formula Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {formulas.map((formula, index) => (
            <motion.div
              key={formula.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 relative ${
                formula.highlighted ? "ring-4 ring-golden-amber" : ""
              }`}
            >
              {formula.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-golden-amber text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Recommande
                </div>
              )}
              
              <div className="w-14 h-14 rounded-full bg-jungle-green/10 flex items-center justify-center mb-6">
                <formula.icon className="w-7 h-7 text-jungle-green" />
              </div>
              
              <h3 className="font-serif text-2xl text-jungle-green mb-3">{formula.title}</h3>
              <p className="text-foreground/60 mb-6">{formula.description}</p>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-golden-amber">{formula.price}</p>
                <p className="text-sm text-foreground/50">{formula.priceEUR}</p>
              </div>
              
              {formula.note && (
                <p className="text-sm text-jungle-green/70 italic mb-6">{formula.note}</p>
              )}
              
              <Link
                href={formula.ctaLink}
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                  formula.highlighted
                    ? "bg-golden-amber text-white hover:bg-golden-amber/90"
                    : "bg-jungle-green/10 text-jungle-green hover:bg-jungle-green/20"
                }`}
              >
                {formula.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
