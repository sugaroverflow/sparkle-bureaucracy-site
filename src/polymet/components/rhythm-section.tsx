import { CalendarIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const cadence = [
  {
    title: "Hackathon → demo night",
    body: "The anchor cycle: an agents-for-good hackathon to prototype a different future, then a night to show what got built.",
    tone: "text-pink-300",
  },
  {
    title: "Two socials a year",
    body: "Built as experiences, not receptions — the games are the point, not the garnish.",
    tone: "text-teal-300",
  },
  {
    title: "Hear from experts",
    body: "A domain at a time, when new things ship — people who can translate what just changed.",
    tone: "text-purple-300",
  },
  {
    title: "Problem discovery",
    body: "Gatherings that bring in people with problems, not technologists. Cross-pollination, coffee chats — the network's intake ritual.",
    tone: "text-yellow-300",
  },
]

export function RhythmSection() {
  return (
    <SectionWrapper id="rhythm">
      <div className="py-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            HOW THIS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
              RUNS
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 via-pink-500 to-transparent rounded-full mb-5" />
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            The rhythm the network is building — dates land in the bulletin
            first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {cadence.map((c) => (
            <div
              key={c.title}
              className="border border-white/15 bg-white/5 rounded-lg p-5 flex gap-4 items-start"
            >
              <CalendarIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.tone}`} />
              <div>
                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                  <h3 className="text-white font-bold">{c.title}</h3>
                  <span className="font-mono text-[9px] text-yellow-400 uppercase tracking-widest border border-yellow-400/40 rounded-sm px-1.5 py-0.5">
                    Forthcoming
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
