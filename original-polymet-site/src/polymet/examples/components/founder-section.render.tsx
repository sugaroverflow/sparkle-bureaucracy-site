import { BrowserRouter } from "react-router-dom"
import { FounderSection } from "@/polymet/components/founder-section"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"

export default function FounderSectionRender() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0a0e27] min-h-screen">
        <SparkleDecoration />
        <div className="relative z-10">
          <FounderSection />
        </div>
      </div>
    </BrowserRouter>
  )
}
