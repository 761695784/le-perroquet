import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { RoomsSection } from "@/components/rooms-section"
import { RestaurantSection } from "@/components/restaurant-section"
import { GallerySection } from "@/components/gallery-section"
import { CasamanceSection } from "@/components/casamance-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReservationSection } from "@/components/reservation-section"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <RoomsSection />
      <RestaurantSection />
      <GallerySection />
      <CasamanceSection />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
