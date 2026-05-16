"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

const quickLinks = [
  { href: "/#chambres", label: "Chambres" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#casamance", label: "Casamance" },
  { href: "/#reservation", label: "Réservation" },
  { href: "/#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-jungle-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M20 5 C25 5, 30 10, 30 18 C30 26, 25 32, 20 35 C15 32, 10 26, 10 18 C10 10, 15 5, 20 5" fill="none" stroke="#C8963E" strokeWidth="1.5" />
                  <circle cx="17" cy="15" r="2" fill="#C8963E" />
                  <path d="M15 20 Q20 25, 25 20" fill="none" stroke="#C8963E" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold">Le Perroquet</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Un hôtel boutique au bord du fleuve Casamance. Intimité, nature et authenticité africaine.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/Le.Perroquet.Ziguinchor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-golden-amber flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/997217077/le-perroquet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-golden-amber flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation rapide</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-golden-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Infos pratiques</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden-amber flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Rue du Commerce, Quartier Escale<br />Ziguinchor, Casamance, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden-amber flex-shrink-0" />
                <a href="tel:+221781165353" className="text-white/70 hover:text-golden-amber transition-colors">+221 78 116 53 53</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golden-amber flex-shrink-0" />
                <a href="mailto:hotel.le.perroquet@gmail.com" className="text-white/70 hover:text-golden-amber transition-colors">hotel.le.perroquet@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-golden-amber flex-shrink-0" />
                <span className="text-white/70">Réception ouverte 7j/7</span>
              </li>
            </ul>
          </div>

          {/* Mini Map */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nous trouver</h3>
            <div className="rounded-xl overflow-hidden h-40 mb-4">
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
            <a
              href="https://maps.google.com/?q=Hotel+Le+Perroquet+Ziguinchor+Senegal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-golden-amber hover:text-golden-amber/80 transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              Obtenir l&apos;itinéraire
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white/60">
            © 2026 Hôtel Le Perroquet — Ziguinchor, Casamance, Sénégal |{" "}
            <a
              href="https://majeliconnect.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden-amber font-extrabold hover:text-golden-amber/80 transition-colors"
            >
              Made by Majeli Connect
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
