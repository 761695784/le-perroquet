"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type MenuCategory = 
  | "petit-dejeuner"
  | "entrees"
  | "poissons"
  | "viandes"
  | "accompagnements"
  | "desserts"
  | "boissons"

interface MenuItem {
  name: string
  description: string
  priceFCFA: number
  priceEUR: string
  badge?: "signature" | "maison" | "specialite" | "coup-de-coeur" | "traditionnel" | "incontournable" | "plat-national" | "vegetarien"
  image?: string
}

const categories: { id: MenuCategory; label: string }[] = [
  { id: "petit-dejeuner", label: "Petit Dejeuner" },
  { id: "entrees", label: "Entrees" },
  { id: "poissons", label: "Poissons & Fruits de mer" },
  { id: "viandes", label: "Viandes & Grillades" },
  { id: "accompagnements", label: "Accompagnements" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
]

const menuItems: Record<MenuCategory, MenuItem[]> = {
"petit-dejeuner": [
  {
    name: "Petit Déjeuner Continental",
    description: "Pain frais croustillant, beurre et confiture maison, jus de bissap ou de gingembre, café ou thé",
    priceFCFA: 2000,
    priceEUR: "3",
    image: "/images/petit-dejeuner-continental.png",
  },
  {
    name: "Petit Déjeuner Casamançais",
    description: "Sombi crémeux au lait de coco et vanille, pain beurré, café Touba parfumé — le réveil authentique de Ziguinchor",
    priceFCFA: 2500,
    priceEUR: "4",
    badge: "specialite",
    image: "/images/petit-dej-casamancais.png",
  },
  {
    name: "Œufs au Choix",
    description: "Omelette épicée aux oignons et piments doux, ou œufs au plat, servis avec pain grillé et café Touba",
    priceFCFA: 1500,
    priceEUR: "2",
    image: "/images/petit-dej-oeuf-au-choix.png",
  },
  {
    name: "Sombi Guerté",
    description: "Bouillie traditionnelle de riz à l'arachide, mijotée au lait et parfumée à la vanille — le petit déjeuner de l'âme sénégalaise",
    priceFCFA: 1500,
    priceEUR: "2",
    badge: "maison",
    image: "/images/sombi-guerté.png",
  },
],
  entrees: [
    {
      name: "Pastels Casamancais",
      description: "Beignets croustillants farcis au poisson, servis avec sauce tomate pimentee",
      priceFCFA: 2500,
      priceEUR: "4",
      badge: "specialite",
      image: "/images/pastel.jpeg",
    },
    {
      name: "Fatayas Maison",
      description: "Chaussons dores au poisson epice, recette traditionnelle",
      priceFCFA: 2000,
      priceEUR: "3",
      badge: "maison",
      image: "/images/fataya.jpg",
    },
    {
      name: "Salade Senegalaise",
      description: "Tomates, oignons, poivrons, avocat, vinaigrette citronnee au piment doux",
      priceFCFA: 3000,
      priceEUR: "4,50",
      image: "/images/salade-de-fruit.webp",
    },
    {
      name: "Assiette Casamance",
      description: "Pastels, fatayas, manioc frit, patate douce, salade locale",
      priceFCFA: 4500,
      priceEUR: "7",
      badge: "coup-de-coeur",
      image: "/images/salade-de-fruit-frais.jpg",
    },
    {
      name: "Crevettes Sautees a l'Ail",
      description: "Crevettes fraiches du fleuve, beurre d'ail, persil, pain grille",
      priceFCFA: 5500,
      priceEUR: "8",
      badge: "signature",
      image: "/images/Crevettes-Grillees.jpg",
    },
  ],
  poissons: [
    {
      name: "Thieboudienne",
      description: "Le plat national du Senegal, riz rouge au poisson braise, legumes, sauce tomate",
      priceFCFA: 4000,
      priceEUR: "6",
      badge: "plat-national",
      image: "/images/Thieboudieune-rouge.jfif",
    },
    {
      name: "Yassa Poisson",
      description: "Daurade ou capitaine marine, sauce oignons-citron-olive, riz parfume",
      priceFCFA: 5000,
      priceEUR: "7,50",
      badge: "specialite",
      image: "/images/yassa-poisson.jpg",
    },
    {
      name: "Crevettes Grillees du Fleuve",
      description: "Grosses crevettes fraiches grillees, beurre citronne, legumes sautes, riz blanc",
      priceFCFA: 7500,
      priceEUR: "11",
      badge: "signature",
      image: "/images/Crevettes-Grillees.jpg",
    },
    {
      name: "Capitaine Braise Casamancais",
      description: "Filet de capitaine braise aux epices locales, sauce palmiste, riz ou attieke",
      priceFCFA: 6000,
      priceEUR: "9",
      badge: "specialite",
      image: "/images/Capitaine-Braise-Casamancais.jfif",
    },
    {
      name: "Brochettes de Crevettes & Poisson",
      description: "Brochettes mixtes crevettes-merou, sauce creme fraiche citronnee, manioc frit",
      priceFCFA: 7000,
      priceEUR: "10,50",
      image: "/images/Brochettes-de-Crevettes.webp",
    },
    {
      name: "Thieb Dieun Blanc",
      description: "Riz blanc au poisson frais, legumes mijotes, bouillon parfume",
      priceFCFA: 3500,
      priceEUR: "5",
      image: "/images/Thieb-Dieun-Blanc.jfif",
    },
  ],
  viandes: [
    {
      name: "Yassa Poulet",
      description: "Poulet frit en sauce oignons-citron-olive, servi avec riz parfume",
      priceFCFA: 4500,
      priceEUR: "7",
      badge: "incontournable",
      image: "/images/Yassa-poulet.jpg",
    },
    {
      name: "Mafe Boeuf",
      description: "Boeuf mijote en sauce arachide onctueuse, riz blanc ou fonio",
      priceFCFA: 5000,
      priceEUR: "7,50",
      image: "/images/poulet-mafe-senegalais-sauce-arachide.jpg",
    },
    {
      name: "Poulet Roti Local",
      description: "Poulet fermier roti aux herbes et epices de Casamance, frites maison",
      priceFCFA: 5500,
      priceEUR: "8",
      image: "/images/poulet-roti.jpg",
    },
    {
      name: "Dibi Casamancais",
      description: "Mouton ou agneau grille sur braise, oignons caramelises, pain, moutarde locale",
      priceFCFA: 5500,
      priceEUR: "8",
      badge: "specialite",
      image: "/images/dibi-casamancais.jpg",
    },
    {
      name: "Brochettes de Boeuf",
      description: "Brochettes marinees aux epices, grillees au feu de bois, frites maison",
      priceFCFA: 4000,
      priceEUR: "6",
      image: "/images/Brochettes-de-Boeuf.webp",
    },
  ],
  accompagnements: [
    { name: "Riz blanc parfume", description: "Riz basmati parfume", priceFCFA: 500, priceEUR: "0,75" },
    { name: "Frites maison", description: "Pommes de terre fraiches", priceFCFA: 1000, priceEUR: "1,50" },
    { name: "Attieke", description: "Semoule de manioc", priceFCFA: 800, priceEUR: "1,20" },
    { name: "Manioc frit", description: "Manioc dore et croustillant", priceFCFA: 800, priceEUR: "1,20" },
    { name: "Salade verte", description: "Laitue, tomates, concombre", priceFCFA: 1000, priceEUR: "1,50" },
    { name: "Aloko", description: "Banane plantain frite", priceFCFA: 1000, priceEUR: "1,50" },
  ],
  desserts: [
    {
      name: "Douceur de Casamance",
      description: "Creme de coco, mangue fraiche, caramel de palme, dessert signature maison",
      priceFCFA: 2000,
      priceEUR: "3",
      badge: "signature",
      image: "/images/douceur-casamance.jpg",
    },
    {
      name: "Banane Flambee",
      description: "Banane plantain flambee au rhum, glace vanille, caramel",
      priceFCFA: 2000,
      priceEUR: "3",
      badge: "coup-de-coeur",
      image: "/images/banane-flambée.webp",
    },
    {
      name: "Salade de Fruits Frais",
      description: "Mangue, papaye, ananas, pasteque et fruits tropicaux de saison",
      priceFCFA: 1500,
      priceEUR: "2,50",
      image: "/images/salade-de-fruit-frais.jpg",
    },
    {
      name: "Thiakry",
      description: "Semoule de mil fermentee au lait caille sucre, parfumee a la vanille",
      priceFCFA: 1500,
      priceEUR: "2,50",
      badge: "traditionnel",
      image: "/images/thiakry.jpg",
    },
    {
      name: "Glace Artisanale",
      description: "2 boules au choix : vanille, chocolat, coco, mangue",
      priceFCFA: 1000,
      priceEUR: "1,50",
      image: "/images/glacier-artisanale.jpeg",
    },
  ],
  boissons: [
    { name: "Bissap", description: "Jus d'hibiscus maison", priceFCFA: 500, priceEUR: "0,75", badge: "maison" },
    { name: "Jus de Gingembre", description: "Gingembre frais presse", priceFCFA: 500, priceEUR: "0,75", badge: "maison" },
    { name: "Bouye", description: "Jus de baobab onctueux", priceFCFA: 500, priceEUR: "0,75", badge: "maison" },
    { name: "Eau minerale", description: "Bouteille 50cl", priceFCFA: 300, priceEUR: "0,50" },
    { name: "Sodas", description: "Coca, Fanta, Sprite", priceFCFA: 500, priceEUR: "0,75" },
    { name: "Cafe / The / Cafe Touba", description: "Boissons chaudes", priceFCFA: 500, priceEUR: "0,75" },
    { name: "Bieres locales", description: "Flag, Gazelle, Julbrew", priceFCFA: 1000, priceEUR: "1,50" },
    { name: "Bieres importees", description: "Selection premium", priceFCFA: 1500, priceEUR: "2,50" },
    { name: "Vins", description: "Rouge, blanc, rose (au verre)", priceFCFA: 2500, priceEUR: "4" },
    { name: "Cocktails maison", description: "Creations du barman", priceFCFA: 2500, priceEUR: "4" },
  ],
}

const badgeStyles: Record<string, string> = {
  signature: "bg-golden-amber text-white",
  maison: "bg-jungle-green text-white",
  specialite: "bg-jungle-green/80 text-white",
  "coup-de-coeur": "bg-red-500 text-white",
  traditionnel: "bg-sand-ivory text-jungle-green",
  incontournable: "bg-golden-amber/80 text-white",
  "plat-national": "bg-jungle-green text-white",
  vegetarien: "bg-green-500 text-white",
}

const badgeLabels: Record<string, string> = {
  signature: "Signature",
  maison: "Maison",
  specialite: "Specialite Casamance",
  "coup-de-coeur": "Coup de coeur",
  traditionnel: "Traditionnel",
  incontournable: "Incontournable",
  "plat-national": "Plat national",
  vegetarien: "Vegetarien",
}

export function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("petit-dejeuner")

  return (
    <section id="notre-carte" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-green mb-4">
            Notre Carte
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Des saveurs authentiques, une cuisine genereuse
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-jungle-green text-white"
                    : "bg-light-base text-jungle-green hover:bg-sand-ivory"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === "accompagnements" || activeCategory === "boissons" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-light-base rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-jungle-green">{item.name}</h3>
                        {item.badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${badgeStyles[item.badge]}`}>
                            {badgeLabels[item.badge]}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-foreground/60">{item.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-golden-amber">{item.priceFCFA.toLocaleString()} FCFA</p>
                      <p className="text-xs text-foreground/50">≈ {item.priceEUR}€</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-light-base rounded-2xl overflow-hidden group"
                  >
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {item.badge && (
                          <span className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full ${badgeStyles[item.badge]}`}>
                            {badgeLabels[item.badge]}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-serif text-xl text-jungle-green mb-2">{item.name}</h3>
                      <p className="text-sm text-foreground/60 italic mb-4">{item.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-golden-amber">
                          {item.priceFCFA.toLocaleString()} FCFA
                        </span>
                        <span className="text-sm text-foreground/50">≈ {item.priceEUR}€</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
