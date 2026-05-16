"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { DayPicker } from "react-day-picker"
import { fr } from "date-fns/locale"
import { format } from "date-fns"
import { Calendar, Lock, Phone, Mail, MessageCircle, Users, BedDouble, Check } from "lucide-react"
import "react-day-picker/dist/style.css"

const roomTypes = [
  {
    id: "fleuve",
    title: "Vue Fleuve",
    price: "20 000 FCFA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleuve4-nQV45RVlZFB62BLFne5DRrgav0uJCM.jpg",
  },
  {
    id: "jardin",
    title: "Vue Jardin",
    price: "18 000 FCFA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jardin4-8QLS39gLcpO5bkKMmTPeswhFnZhdVY.jpg",
  },
]

export function ReservationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rooms: "1",
    guests: "2",
    roomType: "fleuve",
    message: "",
  })
  
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>()
  const [departureDate, setDepartureDate] = useState<Date | undefined>()
  const [showArrivalPicker, setShowArrivalPicker] = useState(false)
  const [showDeparturePicker, setShowDeparturePicker] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const today = new Date()

  return (
    <section id="reservation" ref={ref} className="py-24 md:py-32 bg-jungle-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-golden-amber uppercase tracking-[0.2em] text-sm mb-4">
            Réservation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-base mb-4">
            Réservez votre séjour
          </h2>
          <p className="text-muted-foreground text-lg">
            Seulement 17 chambres disponibles , Réservez votre havre de paix
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-jungle-green/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-jungle-green" />
                </div>
                <h3 className="font-serif text-2xl text-dark-base mb-4">
                  Demande envoyée avec succès !
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nous avons bien reçu votre demande de réservation. Notre équipe vous 
                  contactera dans les 24 heures pour confirmer votre séjour.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-golden-amber hover:underline"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Prénom & Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  {/* Arrival Date */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Date d&apos;arrivée *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowArrivalPicker(!showArrivalPicker)
                        setShowDeparturePicker(false)
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all text-left flex items-center gap-3"
                    >
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className={arrivalDate ? "text-dark-base" : "text-muted-foreground"}>
                        {arrivalDate ? format(arrivalDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner"}
                      </span>
                    </button>
                    {showArrivalPicker && (
                      <div className="absolute z-20 mt-2 bg-white rounded-xl shadow-lg p-4 border border-border">
                        <DayPicker
                          mode="single"
                          selected={arrivalDate}
                          onSelect={(date) => {
                            setArrivalDate(date)
                            setShowArrivalPicker(false)
                          }}
                          disabled={{ before: today }}
                          locale={fr}
                        />
                      </div>
                    )}
                  </div>

                  {/* Departure Date */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Date de départ *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowDeparturePicker(!showDeparturePicker)
                        setShowArrivalPicker(false)
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all text-left flex items-center gap-3"
                    >
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className={departureDate ? "text-dark-base" : "text-muted-foreground"}>
                        {departureDate ? format(departureDate, "dd MMMM yyyy", { locale: fr }) : "Sélectionner"}
                      </span>
                    </button>
                    {showDeparturePicker && (
                      <div className="absolute z-20 mt-2 bg-white rounded-xl shadow-lg p-4 border border-border">
                        <DayPicker
                          mode="single"
                          selected={departureDate}
                          onSelect={(date) => {
                            setDepartureDate(date)
                            setShowDeparturePicker(false)
                          }}
                          disabled={{ before: arrivalDate || today }}
                          locale={fr}
                        />
                      </div>
                    )}
                  </div>

                  {/* Number of Rooms */}
                  <div>
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Nombre de chambres
                    </label>
                    <div className="relative">
                      <BedDouble className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select 
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all appearance-none bg-white"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n} chambre{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-sm font-medium text-dark-base mb-2">
                      Nombre de personnes
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all appearance-none bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} personne{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Room Type */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-dark-base mb-3">
                    Type de chambre
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {roomTypes.map((room) => (
                      <label
                        key={room.id}
                        className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.roomType === room.id
                            ? "border-golden-amber bg-golden-amber/5"
                            : "border-border hover:border-golden-amber/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="roomType"
                          value={room.id}
                          checked={formData.roomType === room.id}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="sr-only"
                        />
                        <img
                          src={room.image}
                          alt={room.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-dark-base">{room.title}</p>
                          <p className="text-sm text-muted-foreground">{room.price}/nuit</p>
                        </div>
                        {formData.roomType === room.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-golden-amber flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-dark-base mb-2">
                    Message / Remarques
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all resize-none"
                    placeholder="Demandes spéciales, heure d'arrivée prévue, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-golden-amber hover:bg-golden-amber/90 disabled:bg-golden-amber/50 text-white py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande de réservation
                      <span>→</span>
                    </>
                  )}
                </button>

                {/* Trust Signals */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Reponse sous 24h
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +221 78 116 53 53
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    hotel.le.perroquet@gmail.com
                  </span>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hotel Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accueil1-0LwHGkKynLxfudVswJvC7Uf6veyyAd.jpg"
                alt="Hotel Le Perroquet"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* USPs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-dark-base mb-4">Pourquoi nous choisir</h3>
              <ul className="space-y-3">
                {[
                  "Vue imprenable sur le fleuve Casamance",
                  "17 chambres climatisées et confortables",
                  "Restaurant avec cuisine locale et internationale",
                  "Emplacement idéal à Ziguinchor",
                  "Accueil chaleureux 7j/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-jungle-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/221781165353"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-full font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Reserver via WhatsApp
            </a>

            {/* Price Reminder */}
            <div className="bg-golden-amber/10 rounded-2xl p-6">
              <p className="text-sm text-golden-amber font-medium mb-2">À partir de</p>
              <p className="text-3xl font-bold text-dark-base">
                18 000 <span className="text-lg font-normal">FCFA/nuit</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">≈ 27€ par nuit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
