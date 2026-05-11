import { BrowserRouter } from "react-router-dom"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

export default function SectionWrapperRender() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0e27] min-h-screen py-12">
        <SectionWrapper number="01" label="Overview" accent="teal">
          <div className="py-8">
            <h2 className="text-4xl font-black text-white mb-4">SECTION TITLE</h2>
            <p className="text-white/60 max-w-xl">
              This is how the section wrapper looks — a narrow left column with
              the section number and a rotated label, separated by a faint
              accent-coloured border.
            </p>
          </div>
        </SectionWrapper>
        <SectionWrapper number="02" label="Dispatch" accent="pink" className="mt-4">
          <div className="py-8">
            <h2 className="text-4xl font-black text-white mb-4">ANOTHER SECTION</h2>
            <p className="text-white/60 max-w-xl">Pink accent variant.</p>
          </div>
        </SectionWrapper>
      </div>
    </BrowserRouter>
  )
}
