import { ExternalLinkIcon, SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const inspirations = [
  {
    name: "Papers, Please",
    href: "https://papersplea.se/",
    line: "Policy as a felt interface — every mundane stamp connected to a human consequence.",
  },
  {
    name: "vTaiwan",
    href: "https://vtaiwan.tw/",
    line: "Disagreement made navigable, with a visible institutional response at the end.",
  },
  {
    name: "Project Re:form",
    href: "https://www.civilla.org/",
    line: "A benefits form turned into a respectful invitation, no theatrics required.",
  },
  {
    name: "JustFix",
    href: "https://www.justfix.org/",
    line: "You leave holding an artifact that changes how you can approach power.",
  },
  {
    name: "Habermas Machine",
    href: "https://www.technologyreview.com/2024/10/17/1105810/ai-could-help-people-find-common-ground-during-deliberations/",
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

        <div className="space-y-5 max-w-3xl">
          {inspirations.map((item) => (
            <div key={item.name} className="flex gap-3 items-start">
              <SparkleIcon className="w-3.5 h-3.5 text-pink-400/70 mt-1.5 flex-shrink-0" />
              <p className="text-base leading-relaxed">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold underline decoration-pink-400/40 underline-offset-4 hover:text-pink-200 hover:decoration-pink-300 transition-colors"
                >
                  {item.name}
                  <ExternalLinkIcon className="w-3 h-3 inline ml-1.5 -mt-0.5 opacity-60" />
                </a>
                <span className="text-white/50"> — {item.line}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Movements — their own box, deliberately separate */}
        <div className="mt-10 max-w-3xl border border-yellow-400/25 bg-yellow-400/5 rounded p-6">
          <p className="font-mono text-[10px] text-yellow-300/90 uppercase tracking-[0.3em] mb-4">
            Separately filed: the movements lane
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {movements.map((m) => (
              <span
                key={m}
                className="px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-100/90 font-mono text-[11px] uppercase tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>
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
