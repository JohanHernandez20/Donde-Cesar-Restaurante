import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  )
}
