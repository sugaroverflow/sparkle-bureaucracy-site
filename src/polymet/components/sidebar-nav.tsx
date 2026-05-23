import { SparkleIcon } from "lucide-react"

export function SidebarNav() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-[160px] z-30 hidden md:flex flex-col border-r border-white/10 bg-[#0a0e27]/95 backdrop-blur-md">
      {/* Logo mark */}
      <div className="flex items-center gap-2 px-5 h-[53px] border-b border-white/10 flex-shrink-0">
        <SparkleIcon className="w-4 h-4 text-pink-500" />
        <span className="font-mono text-xs text-white/60 uppercase tracking-widest leading-none">
          SB
        </span>
      </div>

      {/* Filing slip — quiet bureaucratic filler */}
      <div className="flex-1 flex flex-col items-start gap-3 px-5 pt-10">
        <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest leading-relaxed">
          File No.
          <br />
          <span className="text-white/60">SB / 2026 / 001</span>
        </div>
        <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest leading-relaxed">
          Filed under:
          <br />
          <span className="text-white/60">Optimistic Futures</span>
        </div>
      </div>

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
