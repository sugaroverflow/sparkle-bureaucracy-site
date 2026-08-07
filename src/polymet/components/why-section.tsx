import { SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const problemStatement = [
  "The state is failing in many countries.",
  "AI offers an opportunity to fix this.",
  "We as technologists need to make sure people working at the grassroots are not left behind.",
  "We can use AI to prototype and imagine a different future.",
]

const registers = [
  {
    label: "The method",
    title: "The playful thing",
    body: "Games, rituals, and working prototypes that let people feel how a system works instead of being told — a border regime at a birthday, an evaluation run as public theatre.",
    tone: "pink" as const,
  },
  {
    label: "The moment",
    title: "The upskilling gap",
    body: "Civic and political groups have an AI gap, especially around agents — and it's closing on someone else's terms. While the window is open, this network is here to hold it.",
    tone: "teal" as const,
  },
  {
    label: "The horizon",
    title: "Govtech",
    body: "Digital access to good civic services is load-bearing for democracy. The long-term mission doesn't move: bureaucracy can sparkle.",
    tone: "purple" as const,
  },
]

const registerTones = {
  pink: "border-l-pink-500 bg-pink-500/5",
  teal: "border-l-teal-400 bg-teal-400/5",
  purple: "border-l-purple-500 bg-purple-500/5",
}

const registerLabelTones = {
  pink: "text-pink-300",
  teal: "text-teal-300",
  purple: "text-purple-300",
}

export function WhySection() {
  return (
    <SectionWrapper id="why">
      <div className="py-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHY THIS,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
              WHY NOW
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 via-pink-500 to-transparent rounded-full" />
        </div>

        {/* Problem statement — filed as an official memo */}
        <div className="max-w-2xl border border-white/20 bg-white/5 rounded p-6 mb-10">
          <p className="font-mono text-[10px] text-teal-400 uppercase tracking-[0.3em] mb-4">
            Problem statement · Memo SB-31/07
          </p>
          <ol className="space-y-3">
            {problemStatement.map((line, i) => (
              <li key={line} className="flex gap-4 items-start">
                <span className="font-mono text-xs text-white/40 pt-1 min-w-[24px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/90 text-base leading-relaxed">
                  {line}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Three registers */}
        <p className="text-white/60 text-sm mb-5 max-w-2xl">
          There are three things going on here, on purpose. They don't need
          collapsing into one:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          {registers.map((r) => (
            <div
              key={r.label}
              className={`border-l-4 ${registerTones[r.tone]} border border-white/15 rounded-lg p-5`}
            >
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-2 ${registerLabelTones[r.tone]}`}
              >
                <SparkleIcon className="w-3 h-3 inline mr-1.5 -mt-0.5" />
                {r.label}
              </p>
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
