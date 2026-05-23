import { ReactNode } from "react"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative flex gap-0 scroll-mt-20 md:scroll-mt-6 ${className}`}
    >
      {/* Thin left accent border — visual rhythm only */}
      <div
        className={`hidden md:block flex-shrink-0 w-[3px] border-r-0 bg-gradient-to-b from-transparent via-white/10 to-transparent`}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0 px-5 sm:pl-8 sm:pr-6 md:pr-12 lg:pl-14 lg:pr-16">
        {children}
      </div>
    </section>
  )
}
