"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function RestaurantCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil4-aLfbiEHBEU1vC7FyGS5CwoyfzbYGDs.jpg"
          alt="Baobab au coucher du soleil sur le fleuve"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-jungle-green/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
          Vous souhaitez sejourner a l&apos;hotel ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#chambres"
            className="px-8 py-4 bg-white text-jungle-green rounded-full font-semibold hover:bg-light-base transition-colors"
          >
            Voir nos chambres
          </Link>
          <Link
            href="/#reservation"
            className="px-8 py-4 bg-golden-amber text-white rounded-full font-semibold hover:bg-golden-amber/90 transition-colors"
          >
            Reserver un sejour
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
