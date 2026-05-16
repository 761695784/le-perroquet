"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Un séjour inoubliable ! L'accueil chaleureux, la vue sur le fleuve, et la cuisine délicieuse. Nous reviendrons certainement.",
    author: "Marie-Claire D.",
    nationality: "France",
    date: "Décembre 2024",
    rating: 5,
  },
  {
    id: 2,
    text: "L'hôtel est magnifique, très propre avec un personnel aux petits soins. Le restaurant propose des plats locaux savoureux. Parfait pour découvrir la Casamance.",
    author: "Jean-Pierre M.",
    nationality: "Belgique",
    date: "Novembre 2024",
    rating: 5,
  },
  {
    id: 3,
    text: "Cadre exceptionnel au bord du fleuve. Les chambres sont confortables et climatisées. Un vrai havre de paix loin de l'agitation.",
    author: "Fatou S.",
    nationality: "Sénégal",
    date: "Octobre 2024",
    rating: 5,
  },
  {
    id: 4,
    text: "Excellent rapport qualité-prix. L'emplacement est idéal pour explorer Ziguinchor et ses environs. Je recommande vivement !",
    author: "Thomas K.",
    nationality: "Allemagne",
    date: "Septembre 2024",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-light-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
            Témoignages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-4">
            Ce que disent nos voyageurs
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-golden-amber fill-golden-amber"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-jungle-green/20 mb-3" />

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-dark-base">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.nationality} · {testimonial.date}
                </p>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
