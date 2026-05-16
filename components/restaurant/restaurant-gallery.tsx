"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiemboudienne-BMJO2IUVmV5qyD9ll8i2h7PViaIvJl.jpg",
    title: "Thieboudienne traditionnel",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/thiof-grille-au-feu-de-ClLZjzLSEjcGKeK4FCJ2EKKYUgxJGH.jpg",
    title: "Thiof grille au feu de bois",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grillades-aux-feu-de-FpcGjlaBjcGmjm9taTzQ5TXTOzWQBM.jpg",
    title: "Grillades aux feu de bois",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mafe-boeuf-bFvslMMKsIowN9QoCj6W1HZQuOjA5J.jpg",
    title: "Mafe boeuf",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paella-4gq7QX8Az4vssCQOQuMYeeWdJ04r3r.jpg",
    title: "Paella aux fruits de mer",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brochettes-de-lotte-AwZa5UZ14OKWiDYcbUPx7ClOl2UPdf.jpg",
    title: "Brochettes de lotte",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restau1-NPA2ixQEbjvSSWa9f3H4aQAtQJsDLD.jpg",
    title: "Terrasse du restaurant",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil3-yzF7elsrcydmMQJemkwb1TSUvs6CXz.jpg",
    title: "Terrasse face au fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve5-mQdhO1dNKwDJJgb27HBbZ6pmw5rfIL.jpg",
    title: "Vue du restaurant et chambres",
  },
]

export function RestaurantGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="py-20 lg:py-32 bg-light-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-green mb-4">
            En Images
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            La Casamance dans chaque assiette
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-base/0 group-hover:bg-dark-base/50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages.map((img) => ({ src: img.src, alt: img.title }))}
        />
      </div>
    </section>
  )
}
