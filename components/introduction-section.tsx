"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BedDouble, UtensilsCrossed, Clock } from "lucide-react"

export function IntroductionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: BedDouble, value: "17", label: "Chambres" },
    { icon: UtensilsCrossed, value: "1", label: "Restaurant" },
    { icon: Clock, value: "7j/7", label: "Réception" },
  ]

  return (
    <section id="introduction" ref={ref} className="py-24 md:py-32 bg-light-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
              Bienvenue
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-8 text-balance">
              Un havre de paix au cœur de la Casamance
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Niché sur les rives du fleuve Casamance, Le Perroquet est bien plus qu&apos;un hôtel. 
                C&apos;est une invitation à découvrir l&apos;authenticité sénégalaise, où chaque instant 
                devient un souvenir précieux.
              </p>
              <p>
                À quelques pas du centre de Ziguinchor, notre établissement vous accueille dans un 
                écrin de verdure tropicale. Laissez-vous bercer par le murmure du fleuve et 
                l&apos;hospitalité légendaire de la Casamance.
              </p>
            </div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 pl-6 border-l-4 border-golden-amber"
            >
              <p className="font-serif text-2xl text-golden-amber italic">
                &ldquo;Un havre de paix à quelques pas du centre de Ziguinchor&rdquo;
              </p>
            </motion.blockquote>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-jungle-green/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-jungle-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-dark-base">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin6-bAZZvtNdkebg4V0cKsqEF983NMrsIq.jpg"
                    alt="Jardin tropical de l'hotel Le Perroquet"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil2-vXZXbVfGiVL61MQVrh2YkUjdIMJ7Q3.jpg"
                    alt="Cour interieure de l'hotel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve1-h2oORT2or6nYB8uYFvvuuXQfMIMjgV.jpg"
                    alt="Vue sur le fleuve Casamance"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-golden-amber/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
