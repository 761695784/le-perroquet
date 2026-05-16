"use client"

import { motion } from "framer-motion"
import { Clock, Fish, Waves } from "lucide-react"

const stats = [
  { icon: Clock, label: "Ouvert 7j/7" },
  { icon: Fish, label: "Produits frais locaux" },
  { icon: Waves, label: "Vue sur le fleuve" },
]

export function RestaurantStory() {
  return (
    <section className="py-20 lg:py-32 bg-light-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-golden-amber text-sm tracking-[0.2em] uppercase mb-4 block">
              Notre histoire
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-jungle-green mb-8">
              Le Gout Authentique de la Casamance
            </h2>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Notre restaurant surplombe le fleuve Casamance, offrant un cadre enchanteur 
                ou la cuisine locale rencontre les saveurs internationales. Chaque plat est 
                prepare avec des produits frais issus de la region, pour vous faire vivre 
                une experience gastronomique authentique.
              </p>
              <p>
                Des crevettes pechees le matin meme, du poisson frais du fleuve, des legumes 
                du marche de Ziguinchor et notre cuisine raconte la Casamance dans chaque assiette.
              </p>
            </div>
          </motion.div>

          {/* Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiemboudienne-BMJO2IUVmV5qyD9ll8i2h7PViaIvJl.jpg"
                    alt="Thieboudienne traditionnel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thiof-grille-au-feu-de-ClLZjzLSEjcGKeK4FCJ2EKKYUgxJGH.jpg"
                    alt="Thiof grille au feu de bois"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-golden-amber rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-jungle-green/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-jungle-green" />
              </div>
              <span className="font-medium text-jungle-green">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
