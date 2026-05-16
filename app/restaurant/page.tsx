"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { RestaurantHero } from "@/components/restaurant/restaurant-hero"
import { RestaurantStory } from "@/components/restaurant/restaurant-story"
import { RestaurantMenu } from "@/components/restaurant/restaurant-menu"
import { RestaurantGallery } from "@/components/restaurant/restaurant-gallery"
import { RestaurantFormulas } from "@/components/restaurant/restaurant-formulas"
import { RestaurantReservation } from "@/components/restaurant/restaurant-reservation"
import { RestaurantCTA } from "@/components/restaurant/restaurant-cta"

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-light-base">
      <Navigation />
      <RestaurantHero />
      <RestaurantStory />
      <RestaurantMenu />
      <RestaurantGallery />
      <RestaurantFormulas />
      <RestaurantReservation />
      <RestaurantCTA />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
