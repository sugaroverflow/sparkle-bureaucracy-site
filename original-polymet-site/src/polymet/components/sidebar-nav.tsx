import { useEffect, useState } from "react"
import { SparkleIcon } from "lucide-react"

const sections = [
  { id: "overview",    number: "01", label: "Overview",    accent: "teal"   },
  { id: "dispatch",    number: "02", label: "Dispatch",    accent: "teal"   },
  { id: "experiments", number: "03", label: "Experiments", accent: "pink"   },
  { id: "who",         number: "04", label: "Who",         accent: "purple" },
] as const

const accentActive = {
  teal:   "text-teal-400",
  pink:   "text-pink-500",
  purple: "text-purple-400",
  yellow: "text-yellow-400",
}

const accentDot = {
  teal:   "bg-teal-400",
  pink:   "bg-pink-500",
  purple: "bg-purple-400",
  yellow: "bg-yellow-400",
}

export function SidebarNav() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-[160px] z-30 flex flex-col border-r border-white/10 bg-[#0a0e27]/95 backdrop-blur-md">
      {/* Logo mark */}
      <div className="flex items-center gap-2 px-5 h-[53px] border-b border-white/10 flex-shrink-0">
        <SparkleIcon className="w-4 h-4 text-pink-500" />
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest leading-none">
          SB
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 flex flex-col justify-start pt-8 gap-1 px-3">
        {sections.map(({ id, number, label, accent }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`group w-full text-left px-3 py-3 rounded transition-all duration-200 ${
                isActive ? "bg-white/5" : "hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Active indicator dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                    isActive ? accentDot[accent] : "bg-white/15"
                  }`}
                />
                <div>
                  <div
                    className={`font-mono text-[10px] transition-colors duration-200 ${
                      isActive ? accentActive[accent] : "text-white/30"
                    }`}
                  >
                    {number}
                  </div>
                  <div
                    className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/40 group-hover:text-white/60"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Bottom status */}
      <div className="px-5 pb-6 flex-shrink-0">
        <div className="h-px w-full bg-white/10 mb-4" />
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[10px] text-green-400 uppercase tracking-widest">
            Online
          </span>
        </div>
        <p className="font-mono text-[9px] text-white/20 mt-2 uppercase tracking-wider leading-relaxed">
          Cohort 25/26<br />Newspeak House
        </p>
      </div>
    </aside>
  )
}
