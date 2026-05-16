"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve1-FOFPTgw6V7fcvaAB2VfKFv90yYktX1.jpg",
    alt: "Vue du fleuve depuis l'hotel",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve2-pirmA8q3ke2iOlur1UYVHyfZMElszv.jpg",
    alt: "Pirogues sur le fleuve Casamance",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve5-mQdhO1dNKwDJJgb27HBbZ6pmw5rfIL.jpg",
    alt: "Vue aerienne hotel et restaurant",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil3-yzF7elsrcydmMQJemkwb1TSUvs6CXz.jpg",
    alt: "Terrasse face aux pirogues",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil4-aLfbiEHBEU1vC7FyGS5CwoyfzbYGDs.jpg",
    alt: "Baobab au coucher du soleil",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin6-bAZZvtNdkebg4V0cKsqEF983NMrsIq.jpg",
    alt: "Jardin tropical",
    category: "jardin",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restau1-NPA2ixQEbjvSSWa9f3H4aQAtQJsDLD.jpg",
    alt: "Restaurant de l'hotel",
    category: "restaurant",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin2-gFmm8agqPeOE2Jjif8qHyr9RiRa1GD.jpg",
    alt: "Chambre vue jardin",
    category: "chambres",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin4-8QLS39gLcpO5bkKMmTPeswhFnZhdVY.jpg",
    alt: "Chambre confortable",
    category: "chambres",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil1-0LwHGkKynLxfudVswJvC7Uf6veyyAd.jpg",
    alt: "Vue de l'hotel depuis le fleuve",
    category: "fleuve",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin5-Kv8zITAt52sMfQ1THTgIOcR8ezZIc3.jpg",
    alt: "Exterieur des chambres jardin",
    category: "jardin",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiemboudienne-BMJO2IUVmV5qyD9ll8i2h7PViaIvJl.jpg",
    alt: "Thieboudienne traditionnel",
    category: "restaurant",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grillades-aux-feu-de-FpcGjlaBjcGmjm9taTzQ5TXTOzWQBM.jpg",
    alt: "Grillades au feu de bois",
    category: "restaurant",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil2-vXZXbVfGiVL61MQVrh2YkUjdIMJ7Q3.jpg",
    alt: "Cour interieure et jardin",
    category: "jardin",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin1-jTaD7xCWDlsKICQAHoceFWL9bLvLFh.jpg",
    alt: "Batiment principal et jardin",
    category: "jardin",
  },
]

const filters = [
  { id: "tout", label: "Tout" },
  { id: "chambres", label: "Chambres" },
  { id: "restaurant", label: "Restaurant" },
  { id: "fleuve", label: "Fleuve" },
  { id: "jardin", label: "Jardin" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("tout")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages =
    activeFilter === "tout"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galerie" ref={ref} className="py-24 md:py-32 bg-light-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
            Galerie
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-4">
            Le Perroquet en Images
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre univers à travers ces instants capturés
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-jungle-green text-white"
                  : "bg-white text-dark-base hover:bg-jungle-green/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-base/0 group-hover:bg-dark-base/40 transition-colors duration-300 flex items-end">
                  <span className="text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  )
}
