import { SparkleIcon } from "lucide-react";
import { SectionWrapper } from "@/polymet/components/section-wrapper";

const methodTags = [
  { label: "Experiments", color: "pink" as const },
  { label: "Playfulness", color: "yellow" as const },
  { label: "Working in the open", color: "teal" as const },
  { label: "Rigour", color: "purple" as const },
  { label: "Evidence", color: "pink" as const },
];

const tagPalette: Record<"pink" | "teal" | "purple" | "yellow", string> = {
  pink: "border-pink-500/50 bg-pink-500/10 text-pink-200",
  teal: "border-teal-400/50 bg-teal-400/10 text-teal-200",
  purple: "border-purple-400/50 bg-purple-500/10 text-purple-200",
  yellow: "border-yellow-400/50 bg-yellow-400/10 text-yellow-200",
};

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
        <h1 className="text-[2.55rem] min-[430px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none break-words">
          <span className="text-white">SPARKLE</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600">
            BUREAUCRACY
          </span>
        </h1>

        {/* Mission Statement with blinking cursor */}
        <p className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          Sparkle Bureaucracy is a network of people using AI to prototype more
          optimistic futures.
          <span className="inline-block w-[2px] h-5 bg-teal-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
        </p>

        {/* Info Boxes */}
        <div className="space-y-3 max-w-2xl">
          <div className="border border-white/20 bg-white/5 p-4 rounded">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest min-w-[80px] pt-0.5">
                Mission
              </span>
              <p className="m-0 text-white/85 text-sm leading-relaxed">
                Sparkle Bureaucracy is a network for the people building civic
                tech, tech for good, open source, and govtech — and for anyone
                who wants to understand what AI can do for their work before
                someone sells it to them as a black box. It runs as an
                experiment lab: rituals, games, and working prototypes that let
                you feel how a system works instead of being told.
              </p>
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
                <span className="text-green-400">Graduated!</span>
                <span className="text-white/50"> · </span>
                <span className="text-white">Cohort 25/26</span>
                <span className="text-white/50"> · </span>
                <span className="text-white">Newspeak House</span>
              </span>
            </div>
          </div>
        </div>

        {/* The two entry questions */}
        <div className="mt-10 max-w-2xl border-t border-white/20 pt-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            The whole thing reduces to two questions
          </p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-8">
            <p className="text-xl font-black leading-tight text-white md:text-2xl">
              What can <span className="text-pink-400">I</span> use AI for?
            </p>
            <p className="text-xl font-black leading-tight text-white md:text-2xl">
              What can AI do <span className="text-teal-300">for me</span>?
            </p>
          </div>
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
  );
}
