"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function RestaurantHero() {
  // 🎛️ RÉGLE L'OPACITÉ ICI — entre 0 (transparent) et 1 (noir total)
  const overlayOpacity = 0.55

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil3-yzF7elsrcydmMQJemkwb1TSUvs6CXz.jpg"
          alt="Terrasse du restaurant face au fleuve"
          className="w-full h-full object-cover"
        />

        {/* Couche noire uniforme — modifie overlayOpacity ci-dessus */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Dégradé additionnel bas → haut pour le texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-golden-amber font-extrabold text-sm tracking-[0.3em] uppercase mb-6"
        >
          Gastronomie · Ziguinchor
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-white mb-6"
        >
          Une Table Face au Fleuve
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Cuisine senegalaise et internationale au bord du fleuve Casamance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="#reserver-table"
            className="inline-flex items-center gap-2 bg-golden-amber hover:bg-golden-amber/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Reserver une table
            <ChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

     
    </section>
  )
}
