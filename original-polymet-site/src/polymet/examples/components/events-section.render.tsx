import { BrowserRouter } from "react-router-dom"
import { EventsSection } from "@/polymet/components/events-section"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"

export default function EventsSectionRender() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0a0e27] min-h-screen">
        <SparkleDecoration />
        <div className="relative z-10">
          <EventsSection />
        </div>
      </div>
    </BrowserRouter>
  )
}
