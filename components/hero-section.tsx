"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil1-0LwHGkKynLxfudVswJvC7Uf6veyyAd.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-dark-base/40 to-dark-base/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-golden-amber tracking-[0.3em] font-extrabold text-xs sm:text-sm uppercase mb-6"
        >
          Ziguinchor · Sénégal
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium mb-6 text-balance"
        >
          L&apos;Âme de la Casamance
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-pretty"
        >
          Un hôtel boutique au bord du fleuve Ziguinchor, offrant intimité, nature et authenticité africaine
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#introduction"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all border border-white/20"
          >
            Découvrir l&apos;hôtel
          </Link>
          <Link
            href="#reservation"
            className="bg-golden-amber hover:bg-golden-amber/90 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-105 flex items-center gap-2"
          >
            Réserver maintenant
            <span>→</span>
          </Link>
        </motion.div>
      </div>



    
    </section>
  )
}
