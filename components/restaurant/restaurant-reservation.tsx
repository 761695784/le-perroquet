"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Heart, Phone, MessageCircle } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

const timeSlots = [
  "12h00", "12h30", "13h00", "19h00", "19h30", "20h00", "20h30", "21h00"
]

const occasions = [
  "Rien de particulier",
  "Anniversaire",
  "Romantique",
  "Repas d'affaires",
  "Autre"
]

export function RestaurantReservation() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [showCalendar, setShowCalendar] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "2",
    occasion: "Rien de particulier",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Reservation Restaurant Le Perroquet:\n- Nom: ${formData.name}\n- Date: ${selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) : ""}\n- Heure: ${formData.time}\n- Couverts: ${formData.guests}\n- Occasion: ${formData.occasion}\n- Message: ${formData.message}`
    window.open(`https://wa.me/221781165353?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="reserver-table" className="py-20 lg:py-32 bg-light-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-jungle-green mb-4">
            Reserver une Table
          </h2>
          <p className="text-foreground/60 text-lg">
            Un diner au bord du fleuve Casamance, reservez votre moment
          </p>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Nom & Prenom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-jungle-green mb-2">
                Telephone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all"
                placeholder="+221 XX XXX XX XX"
              />
            </div>

            {/* Date & Time Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Picker */}
              <div className="relative">
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Date souhaitee *
                </label>
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full px-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all text-left flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5 text-golden-amber" />
                  {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) : "Selectionnez une date"}
                </button>
                {showCalendar && (
                  <div className="absolute z-20 top-full mt-2 bg-white rounded-xl shadow-xl border border-sand-ivory p-4">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date)
                        setShowCalendar(false)
                      }}
                      locale={fr}
                      disabled={{ before: new Date() }}
                    />
                  </div>
                )}
              </div>

              {/* Time Select */}
              <div>
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Heure *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-golden-amber" />
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Selectionnez une heure</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Guests & Occasion Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Nombre de couverts *
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-golden-amber" />
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all appearance-none bg-white"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? "personne" : "personnes"}</option>
                    ))}
                    <option value="12+">12+ personnes</option>
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-sm font-medium text-jungle-green mb-2">
                  Occasion speciale
                </label>
                <div className="relative">
                  <Heart className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-golden-amber" />
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all appearance-none bg-white"
                  >
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-jungle-green mb-2">
                Message / Demande particuliere
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-sand-ivory focus:border-golden-amber focus:ring-2 focus:ring-golden-amber/20 outline-none transition-all resize-none"
                placeholder="Allergies, preferences, demandes speciales..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-golden-amber hover:bg-golden-amber/90 text-white py-4 rounded-full text-lg font-semibold transition-all hover:scale-[1.02]"
            >
              Confirmer ma reservation
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-sand-ivory flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a href="tel:+221781165353" className="flex items-center gap-2 text-jungle-green hover:text-golden-amber transition-colors">
              <Phone className="w-4 h-4" />
              +221 78 116 53 53
            </a>
            <a 
              href="https://wa.me/221781165353" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-jungle-green hover:text-golden-amber transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Reserver via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
