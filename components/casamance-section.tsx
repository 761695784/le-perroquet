"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TreePine, Ship, Music, Palmtree, MapPin } from "lucide-react"

const experiences = [
  {
    icon: TreePine,
    title: "Forêts sacrées",
    description: "Explorez les mystérieuses forêts sacrées de la Casamance, témoins de traditions ancestrales diola.",
    image: "/foret_casamance.jpg",
  },
  {
    icon: Ship,
    title: "Pirogue sur le fleuve",
    description: "Naviguez au fil de l'eau et découvrez les bolongs, ces bras du fleuve bordés de mangroves.",
    image: "/pirogue_sur_fleuve.jpg",
  },
  {
    icon: Music,
    title: "Culture Diola",
    description: "Immergez-vous dans la culture locale : musique, danses traditionnelles et artisanat.",
    image: "/culture_diola.jpeg",
  },
  {
    icon: Palmtree,
    title: "Plages de Cap Skirring",
    description: "À une heure de route, découvrez les plus belles plages du Sénégal.",
    image: "/plage_cap.jpg",
  },
]

export function CasamanceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="casamance" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
            La Destination
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-4">
            Explorez la Casamance
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L&apos;une des régions les plus authentiques et préservées du Sénégal
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/90 via-dark-base/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-golden-amber/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-golden-amber/40 transition-colors">
                  <exp.icon className="w-6 h-6 text-golden-amber" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{exp.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map & Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-jungle-green/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-jungle-green/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-jungle-green" />
                </div>
                <h3 className="font-serif text-2xl text-dark-base">Notre Emplacement</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L&apos;Hôtel Le Perroquet est idéalement situé au cœur de Ziguinchor, 
                capitale de la Casamance. À quelques pas du centre-ville et du port, 
                notre établissement est le point de départ parfait pour explorer cette 
                région exceptionnelle du Sénégal.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-dark-base">
                  <span className="w-2 h-2 rounded-full bg-golden-amber" />
                  Rue du Commerce, Quartier Escale
                </p>
                <p className="flex items-center gap-2 text-dark-base">
                  <span className="w-2 h-2 rounded-full bg-golden-amber" />
                  Ziguinchor, Casamance, Sénégal
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.776182565994!2d-16.2841234!3d12.5557436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1a7d8c72b6c0d%3A0x8d2e0a64d3f3c4a4!2sZiguinchor%2C%20Senegal!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Ziguinchor"
              />
            </div>
          </div>
          
          {/* Callout */}
          <div className="mt-8 pt-8 border-t border-jungle-green/10 text-center">
            <p className="text-jungle-green font-medium text-lg">
              L&apos;Hôtel Le Perroquet est votre base idéale pour explorer la région
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
