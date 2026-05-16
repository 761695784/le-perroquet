"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, UtensilsCrossed, Fish, Phone } from "lucide-react"
import Link from "next/link"

const dishes = [
  {
    icon: Coffee,
    title: "Petit Déjeuner",
    description: "Café, thé, jus frais, pain, œufs, fruits tropicaux",
    price: "2 000 FCFA",
  },
  {
    icon: UtensilsCrossed,
    title: "Plat du Jour",
    description: "Cuisine locale et internationale, saveurs authentiques",
    price: "2 500 FCFA",
  },
  {
    icon: Fish,
    title: "À la Carte",
    description: "Crevettes, poissons frais, spécialités de la Casamance",
    price: "Sur commande",
  },
]

export function RestaurantSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="restaurant"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-jungle-green/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
              Gastronomie
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 text-balance">
              Le Goût de la Casamance
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Une table au bord du fleuve. Notre restaurant vous invite à découvrir 
              les saveurs authentiques de la cuisine sénégalaise et internationale, 
              dans un cadre enchanteur face au fleuve Casamance.
            </p>

            {/* Pension Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white font-medium mb-2">Formules pension disponibles</p>
              <p className="text-white/70 text-sm mb-4">
                Demi-pension et pension complète sur demande
              </p>
              <a
                href="tel:+221339912329"
                className="inline-flex items-center gap-2 text-golden-amber hover:text-golden-amber/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Nous contacter</span>
              </a>
            </div>
          </motion.div>

          {/* Dish Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-golden-amber/20 flex items-center justify-center flex-shrink-0">
                    <dish.icon className="w-6 h-6 text-golden-amber" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg">{dish.title}</h3>
                      <span className="text-golden-amber font-semibold">{dish.price}</span>
                    </div>
                    <p className="text-white/70">{dish.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/restaurant#notre-carte"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full text-center font-semibold transition-colors border border-white/20"
              >
                Voir le menu complet
              </Link>
              <Link
                href="/restaurant#reserver-table"
                className="bg-golden-amber hover:bg-golden-amber/90 text-white px-6 py-3 rounded-full text-center font-semibold transition-colors"
              >
                Réserver une table
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
