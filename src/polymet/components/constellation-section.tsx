import { SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const inspirations = [
  {
    name: "Papers, Please",
    line: "Policy as a felt interface — every mundane stamp connected to a human consequence.",
  },
  {
    name: "Models All the Way Down",
    line: "An incomprehensible data supply chain made bodily comprehensible.",
  },
  {
    name: "New World Summit",
    line: "Redesign the room, the symbols, and who's authorised to speak — together.",
  },
  {
    name: "Project Re:form",
    line: "A benefits form turned into a respectful invitation, no theatrics required.",
  },
  {
    name: "JustFix",
    line: "You leave holding an artifact that changes how you can approach power.",
  },
  {
    name: "Haqdarshak",
    line: "AI behind a trusted neighbour, not instead of one.",
  },
  {
    name: "OpenCRVS",
    line: "Acknowledgement and status as emotional design — the institution shows it has seen you.",
  },
  {
    name: "Buurtzorg",
    line: "Organisational structure itself as affective design.",
  },
  {
    name: "vTaiwan",
    line: "Disagreement made navigable, with a visible institutional response at the end.",
  },
  {
    name: "Habermas Machine",
    line: "Synthesis that is iterative and contestable, never declared neutral.",
  },
]

const movements = [
  "Mexico's Glitter Revolution",
  "Portland's inflatable protesters",
  "LASTESIS",
  "Otpor!'s barrel",
  "Mothers of Plaza de Mayo",
  "ACT UP",
]

export function ConstellationSection() {
  return (
    <SectionWrapper id="inspired-by">
      <div className="py-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            INSPIRED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              BY
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-pink-500 to-transparent rounded-full mb-5" />
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            The constellation this network navigates by. If you recognise
            something here, you already know whether you belong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
          {inspirations.map((item) => (
            <div key={item.name} className="flex gap-3 items-start">
              <SparkleIcon className="w-3.5 h-3.5 text-pink-400/70 mt-1.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                <span className="text-white font-bold">{item.name}</span>
                <span className="text-white/50"> — {item.line}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Movements strip */}
        <div className="mt-10 max-w-4xl border border-white/15 bg-white/5 rounded p-5">
          <p className="font-mono text-[10px] text-yellow-300/80 uppercase tracking-[0.3em] mb-3">
            And the movements lane
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-2">
            {movements.join(" · ")}
          </p>
          <p className="text-white/40 text-sm leading-relaxed italic">
            Affective civic tactics: make power possible to feel, give people
            an inhabitable way to confront it, and leave behind a repertoire
            others can reuse.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
