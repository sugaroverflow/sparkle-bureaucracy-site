import { CodeIcon, ExternalLinkIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

interface Project {
  id: string
  title: string
  what: string
  proved: string
  href?: string
  repo?: string
  color: "pink" | "teal" | "purple" | "yellow"
}

const projects: Project[] = [
  {
    id: "01",
    title: "Sparkle Border Authority",
    what: "A full border-crossing ritual run live at a party — identity checks, screening, printed visas, checkpoints, admin overrides, live stats.",
    proved:
      "You can keep the entire bureaucratic skeleton, change only the intent, and the whole experience transforms. People didn't tolerate it; they co-created the fiction.",
    href: "https://sparkle-border-authority.vercel.app/",
    repo: "https://github.com/sugaroverflow/sparkle-border-authority",
    color: "pink",
  },
  {
    id: "02",
    title: "Project Mirror + the awards pipeline",
    what: "Eighteen synthetic evaluator constitutions inferred from a cohort's public records, 321 political-technology projects ranked, every algorithm version published openly.",
    proved:
      "Evaluation can be openly political and still stable — and it raised the consent question the lab still carries: the inference is not consent.",
    href: "https://2025.newspeak.house/awards",
    color: "purple",
  },
  {
    id: "03",
    title: "Campaign Factory",
    what: "Give it a UK civic problem and a place; it researches the decision route, maps power, and drafts strategy — showing its work as it goes. Built with Campaign Lab.",
    proved:
      "“Five months of research” in a session, said one campaigner. 16 of 19 in the conference room voted it useful.",
    href: "https://campaign-factory.vercel.app",
    repo: "https://github.com/CampaignLab/campaign-factory",
    color: "teal",
  },
  {
    id: "04",
    title: "Conference Pulse",
    what: "The live companion for the AI & Campaigning Conference: schedule, anonymous per-panel comments, votes, a big-screen room view.",
    proved:
      "A conference can measure itself in the room, in the open — the audience's verdicts above came from this very tool.",
    href: "https://campaign-lab-conference-pulse.vercel.app/",
    repo: "https://github.com/CampaignLab/conference-pulse",
    color: "yellow",
  },
  {
    id: "05",
    title: "Topic",
    what: "Collaborative forum software: propose topics, vote with hearts, share availability, shape a schedule together.",
    proved:
      "Participatory scheduling is infrastructure — finished like a product, not a prototype.",
    href: "https://topic.forum",
    repo: "https://github.com/sugaroverflow/timetable",
    color: "pink",
  },
]

const colorClasses = {
  pink: "border-l-pink-500 bg-pink-500/5",
  teal: "border-l-teal-400 bg-teal-400/5",
  purple: "border-l-purple-500 bg-purple-500/5",
  yellow: "border-l-yellow-500 bg-yellow-500/5",
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="py-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHAT THIS HAS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-400">
              PRODUCED
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-teal-400 to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`border-l-4 ${colorClasses[p.color]} border border-white/15 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:scale-[1.01]`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-black text-white/10">{p.id}</span>
                <div className="flex items-center gap-4">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-teal-300 uppercase tracking-wider hover:text-teal-200 transition-colors"
                    >
                      Live <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-white/50 uppercase tracking-wider hover:text-white/80 transition-colors"
                    >
                      Code <CodeIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{p.what}</p>
              <p className="text-sm leading-relaxed">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest mr-2">
                  Proved
                </span>
                <span className="text-white/80">{p.proved}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Inclusion rubric — bureaucratic small print, on purpose */}
        <p className="mt-8 font-mono text-[10px] text-white/30 uppercase tracking-widest leading-relaxed max-w-3xl">
          Inclusion rubric, per regulation SB-31/07: emerging technology ·
          bureaucratic ritual or process · designed affect · was it sparkly ·
          boost for under-resourced civic contexts. Appeals returned with
          glitter.
        </p>
      </div>
    </SectionWrapper>
  )
}
