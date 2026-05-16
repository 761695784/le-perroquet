"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BedDouble, Snowflake, ShowerHead, Bug, Tv, Wifi, RefreshCw, Shirt, Briefcase, Car } from "lucide-react"
import Link from "next/link"

const rooms = [
  {
    id: 1,
    title: "Chambre Vue Fleuve",
    badge: "Vue Fleuve",
    description: "S'endormir au son du fleuve, se reveiller dans la lumiere de la Casamance. Nos chambres avec vue sur le fleuve offrent une experience unique au coeur de la nature.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve4-nQV45RVlZFB62BLFne5DRrgav0uJCM.jpg",
    priceFCFA: "20 000",
    priceEUR: "30",
    features: [
      { icon: BedDouble, label: "Double/Simple" },
      { icon: Snowflake, label: "Climatisee" },
      { icon: ShowerHead, label: "Salle de douche" },
      { icon: Bug, label: "Moustiquaire" },
      { icon: Tv, label: "TV" },
    ],
  },
  {
    id: 2,
    title: "Chambre Vue Jardin",
    badge: "Vue Jardin",
    description: "Un cocon de verdure pour un sejour paisible. Nos chambres cote jardin vous plongent dans la luxuriance tropicale de la Casamance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin2-gFmm8agqPeOE2Jjif8qHyr9RiRa1GD.jpg",
    priceFCFA: "18 000",
    priceEUR: "27",
    features: [
      { icon: BedDouble, label: "Double/Simple" },
      { icon: Snowflake, label: "Climatisee" },
      { icon: ShowerHead, label: "Salle de douche" },
      { icon: Bug, label: "Moustiquaire" },
      { icon: Tv, label: "TV" },
    ],
  },
]

const amenities = [
  { icon: Wifi, label: "WiFi gratuit" },
  { icon: RefreshCw, label: "Change" },
  { icon: Shirt, label: "Blanchisserie" },
  { icon: Briefcase, label: "Bagagerie" },
  { icon: Car, label: "Parking" },
]

export function RoomsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="chambres" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
            Hébergement
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-4">
            Nos Chambres
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confort tropical, vue imprenable
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-light-base rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-jungle-green text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    {room.badge}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href="#reservation"
                    className="bg-golden-amber text-white px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Réserver cette chambre
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl text-dark-base mb-3">
                  {room.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {room.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feature.icon className="w-4 h-4 text-jungle-green" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">À partir de</p>
                    <p className="text-2xl font-semibold text-dark-base">
                      {room.priceFCFA} <span className="text-base font-normal">FCFA</span>
                    </p>
                    <p className="text-sm text-muted-foreground">≈ {room.priceEUR}€ / nuit</p>
                  </div>
                  <Link
                    href="#reservation"
                    className="bg-jungle-green hover:bg-jungle-green/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                  >
                    Réserver →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-jungle-green/5 rounded-2xl p-8"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-center gap-3 text-dark-base"
              >
                <div className="w-10 h-10 rounded-full bg-jungle-green/10 flex items-center justify-center">
                  <amenity.icon className="w-5 h-5 text-jungle-green" />
                </div>
                <span className="font-medium">{amenity.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
