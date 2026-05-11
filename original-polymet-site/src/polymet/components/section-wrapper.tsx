import { ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  number: string
  label: string
  children: ReactNode
  className?: string
  accent?: "teal" | "pink" | "purple" | "yellow"
}

const accentBorder = {
  teal: "border-teal-400/20",
  pink: "border-pink-500/20",
  purple: "border-purple-400/20",
  yellow: "border-yellow-400/20",
}

export function SectionWrapper({
  id,
  number,
  label,
  children,
  className = "",
  accent = "teal",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative flex gap-0 scroll-mt-0 ${className}`}
    >
      {/* Thin left accent border — visual rhythm only */}
      <div
        className={`hidden md:block flex-shrink-0 w-[3px] border-r-0 bg-gradient-to-b from-transparent via-white/10 to-transparent`}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0 pl-8 lg:pl-14 pr-6 md:pr-12 lg:pr-16">
        {children}
      </div>
    </section>
  )
}
