import { HeroSection } from "@/polymet/components/hero-section"
import { EventsSection } from "@/polymet/components/events-section"
import { FounderSection } from "@/polymet/components/founder-section"
import { NewsletterSection } from "@/polymet/components/newsletter-section"

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <NewsletterSection />
      <EventsSection />
      <FounderSection />
    </div>
  )
}
