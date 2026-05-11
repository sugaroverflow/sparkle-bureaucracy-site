import { BrowserRouter } from "react-router-dom"
import { NewsletterSection } from "@/polymet/components/newsletter-section"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"

export default function NewsletterSectionRender() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0a0e27] min-h-screen">
        <SparkleDecoration />
        <div className="relative z-10">
          <NewsletterSection />
        </div>
      </div>
    </BrowserRouter>
  )
}
