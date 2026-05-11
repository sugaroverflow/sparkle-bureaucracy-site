import { BrowserRouter } from "react-router-dom"
import { HeroSection } from "@/polymet/components/hero-section"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"

export default function HeroSectionRender() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0a0e27] min-h-screen">
        <SparkleDecoration />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
    </BrowserRouter>
  )
}
