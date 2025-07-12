import { Hero } from "@/components/hero"
import { FeaturedFlavors } from "@/components/featured-flavors"
import { WhyCreamChills } from "@/components/why-cream-chills"
import { CustomerLove } from "@/components/customer-love"
import { SeasonalSpecials } from "@/components/seasonal-specials"
import { LocationsSection } from "@/components/locations-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedFlavors />
        <WhyCreamChills />
        <CustomerLove />
        <SeasonalSpecials />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  )
}
