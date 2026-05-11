import { BrowserRouter } from "react-router-dom"
import { SparkleDecoration } from "@/polymet/components/sparkle-decoration"

export default function SparkleDecorationRender() {
  return (
    <BrowserRouter>
      <div className="relative h-screen bg-[#0a0e27]">
        <SparkleDecoration />
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-white text-2xl font-mono">Sparkle Decoration Background</p>
        </div>
      </div>
    </BrowserRouter>
  )
}
