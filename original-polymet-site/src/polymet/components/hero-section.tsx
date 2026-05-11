import { SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

export function HeroSection() {
  return (
    <SectionWrapper id="overview" number="01" label="Overview" accent="teal" className="min-h-[90vh]">
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
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
          <span className="text-white">SPARKLE</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600">
            BUREAUCRACY
          </span>
        </h1>

        {/* Mission Statement with blinking cursor */}
        <p className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          Sparkle Bureaucracy is a network of people prototyping optimistic
          organisational futures for the age of AI. Starting with an experiment
          lab.
          <span className="inline-block w-[2px] h-5 bg-teal-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
        </p>

        {/* Info Boxes */}
        <div className="space-y-3 max-w-2xl">
          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex gap-6">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-0.5">
                Nature
              </span>
              <span className="text-white font-mono text-sm leading-relaxed">
                Network prototyping optimistic organisational futures for the
                age of AI
              </span>
            </div>
          </div>

          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex gap-6">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-0.5">
                Method
              </span>
              <span className="text-white font-mono text-sm leading-relaxed">
                Experiments · rigour · openness · no prescribed outcome
              </span>
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

        {/* Form reference */}
        <p className="mt-10 font-mono text-xs text-white/20 tracking-widest">
          Form SB-001 · Nov 2025 · v1.1
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </SectionWrapper>
  )
}
