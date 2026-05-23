import { SparkleIcon, SendIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { SubscribeModal } from "@/polymet/components/subscribe-modal"

const methodTags = [
  { label: "Experiments", color: "pink" as const },
  { label: "Playfulness", color: "yellow" as const },
  { label: "Working in the open", color: "teal" as const },
  { label: "Rigour", color: "purple" as const },
  { label: "Evidence", color: "pink" as const },
]

const tagPalette: Record<
  "pink" | "teal" | "purple" | "yellow",
  string
> = {
  pink:   "border-pink-500/50 bg-pink-500/10 text-pink-200",
  teal:   "border-teal-400/50 bg-teal-400/10 text-teal-200",
  purple: "border-purple-400/50 bg-purple-500/10 text-purple-200",
  yellow: "border-yellow-400/50 bg-yellow-400/10 text-yellow-200",
}

export function HeroSection() {
  return (
    <SectionWrapper id="overview" className="min-h-[90vh]">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex flex-col justify-center min-h-[90vh] py-20">
        {/* Official Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-teal-500/50 bg-teal-500/10 rounded w-fit">
          <SparkleIcon className="w-4 h-4 text-teal-400" />
          <span className="text-teal-300 font-mono text-sm tracking-wide">
            Official Research Prototype
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none break-words">
          <span className="text-white">SPARKLE</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600">
            BUREAUCRACY
          </span>
        </h1>

        {/* Mission Statement with blinking cursor */}
        <p className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          Sparkle Bureaucracy is a network of people using AI to explore
          optimistic organisational and service futures. The outputs aren't
          meant to be applied as-is — they illustrate the power of the
          technology and the new possibilities it brings. Starting with a lab
          of experiments — coming soon.
          <span className="inline-block w-[2px] h-5 bg-teal-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
        </p>

        {/* Info Boxes */}
        <div className="space-y-3 max-w-2xl">
          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex gap-6">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-0.5">
                Mission
              </span>
              <span className="text-white font-mono text-sm leading-relaxed">
                Network prototyping optimistic organisational futures for the
                age of AI
              </span>
            </div>
          </div>

          {/* Playful Method row — sparkle pill tags */}
          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-1.5">
                Method
              </span>
              <div className="flex flex-wrap gap-2 items-center">
                {methodTags.map((tag, i) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${tagPalette[tag.color]} font-mono text-[11px] uppercase tracking-widest transition-transform hover:scale-105 hover:-rotate-1`}
                    style={{
                      animation: `tag-bob 4s ease-in-out ${i * 0.3}s infinite`,
                    }}
                  >
                    <SparkleIcon className="w-3 h-3 opacity-90" />
                    {tag.label}
                    <SparkleIcon className="w-3 h-3 opacity-90" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex gap-6">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-0.5">
                Status
              </span>
              <span className="font-mono text-sm">
                <span className="text-green-400">Active</span>
                <span className="text-white/50"> · </span>
                <span className="text-white">Cohort 25/26</span>
                <span className="text-white/50"> · </span>
                <span className="text-white">Newspeak House</span>
              </span>
            </div>
          </div>
        </div>

        {/* Subscribe CTA — opens the large modal */}
        <div className="mt-10 max-w-2xl">
          <SubscribeModal
            trigger={
              <Button
                type="button"
                className="group h-16 px-8 w-full sm:w-auto bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 hover:from-pink-500 hover:via-pink-400 hover:to-purple-500 text-white font-black uppercase tracking-[0.3em] text-base rounded-none border border-pink-300/40 shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:shadow-[0_0_50px_rgba(236,72,153,0.55)] transition-all"
              >
                <SparkleIcon className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Subscribe
                <SendIcon className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            }
          />
          <p className="mt-3 font-mono text-[10px] text-white/40 uppercase tracking-widest">
            Click to receive irregular dispatches from the lab.
          </p>
        </div>

        {/* Form reference */}
        <p className="mt-10 font-mono text-xs text-white/20 tracking-widest">
          DEPT. OF CELESTIAL INGRESS · FORM SB-001 · STARDATE 26141.3 · REV. ✦✦
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes tag-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </SectionWrapper>
  )
}
