import { SparkleIcon, LockIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

type Tone = "pink" | "teal" | "purple" | "yellow"

interface Stamp {
  label: string
  hint: string
  tone: Tone
  rotate: string
}

const stamps: Stamp[] = [
  {
    label: "✦ First Dispatch ✦",
    hint: "Subscribed to the bulletin",
    tone: "pink",
    rotate: "-rotate-[3deg]",
  },
  {
    label: "✧ Showed Up ✧",
    hint: "Attended an experiment",
    tone: "teal",
    rotate: "rotate-[2deg]",
  },
  {
    label: "✦ Worked in the Open ✦",
    hint: "Contributed in public",
    tone: "purple",
    rotate: "-rotate-[1.5deg]",
  },
  {
    label: "✧ Cited Sources ✧",
    hint: "Brought the evidence",
    tone: "yellow",
    rotate: "rotate-[3deg]",
  },
  {
    label: "✦ Asked Better Questions ✦",
    hint: "Sharpened the prompt",
    tone: "teal",
    rotate: "rotate-[1deg]",
  },
  {
    label: "✧ Brought Levity ✧",
    hint: "Kept things sparkly",
    tone: "pink",
    rotate: "-rotate-[2deg]",
  },
]

const toneClasses: Record<Tone, { wrap: string; ring: string; text: string; glow: string }> = {
  pink: {
    wrap: "bg-gradient-to-br from-pink-500/20 via-pink-500/5 to-transparent",
    ring: "border-pink-400/50",
    text: "text-pink-200",
    glow: "shadow-[0_0_24px_rgba(236,72,153,0.15)]",
  },
  teal: {
    wrap: "bg-gradient-to-br from-teal-400/20 via-teal-400/5 to-transparent",
    ring: "border-teal-400/50",
    text: "text-teal-200",
    glow: "shadow-[0_0_24px_rgba(45,212,191,0.15)]",
  },
  purple: {
    wrap: "bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent",
    ring: "border-purple-400/50",
    text: "text-purple-200",
    glow: "shadow-[0_0_24px_rgba(168,85,247,0.15)]",
  },
  yellow: {
    wrap: "bg-gradient-to-br from-yellow-400/20 via-yellow-400/5 to-transparent",
    ring: "border-yellow-400/50",
    text: "text-yellow-200",
    glow: "shadow-[0_0_24px_rgba(234,179,8,0.15)]",
  },
}

export function StampsSection() {
  return (
    <SectionWrapper id="stamps">
      <div className="py-20">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-yellow-400/40 bg-yellow-400/10 rounded-full">
            <SparkleIcon className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span className="font-mono text-[10px] text-yellow-200 uppercase tracking-[0.3em]">
              Coming Soon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            COLLECT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-teal-400">
              THE STAMPS
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 via-pink-500 to-transparent rounded-full mb-5" />
          <p className="text-white/70 text-base leading-relaxed">
            Earn stamps by being part of the network — showing up to experiments,
            building in the open, sharpening the questions, and bringing levity
            to the lab. A small bureaucratic reward system. Pls subscribe to be
            notified when the registry opens.
          </p>
        </div>

        {/* Stamp grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
          {stamps.map((stamp) => {
            const tones = toneClasses[stamp.tone]
            return (
              <div
                key={stamp.label}
                className={`relative aspect-[4/3] overflow-hidden border ${tones.ring} ${tones.glow} rounded-md`}
              >
                <div className={`absolute inset-0 ${tones.wrap}`} />

                {/* Lock badge */}
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-sm border border-white/10 bg-[#0a0e27]/70 backdrop-blur-sm">
                  <LockIcon className="w-2.5 h-2.5 text-white/40" />
                  <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">
                    Locked
                  </span>
                </div>

                {/* Stamp body */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3">
                  <div
                    className={`${stamp.rotate} border-2 ${tones.ring} bg-[#0a0e27]/70 px-4 py-3 flex flex-col items-center gap-2 grayscale-[20%] opacity-90`}
                  >
                    <SparkleIcon className={`w-6 h-6 ${tones.text}`} />
                    <span className={`font-mono text-[11px] uppercase tracking-widest ${tones.text} text-center leading-tight`}>
                      {stamp.label}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 text-center leading-tight">
                      {stamp.hint}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-md pointer-events-none" />
              </div>
            )
          })}
        </div>

        <p className="mt-8 font-mono text-[10px] text-white/30 uppercase tracking-widest">
          Stamp Registry · Forthcoming · Eligibility: anyone who shows up
        </p>
      </div>
    </SectionWrapper>
  )
}
