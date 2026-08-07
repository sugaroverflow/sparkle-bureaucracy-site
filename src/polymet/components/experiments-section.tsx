import { useEffect, useState } from "react"
import { CheckIcon, SparkleIcon } from "lucide-react"
import { track } from "@vercel/analytics"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

interface Experiment {
  id: string
  slug: string
  title: string
  question: string
  color: "pink" | "teal" | "purple" | "yellow"
}

const experiments: Experiment[] = [
  {
    id: "01",
    slug: "public-voice-customs",
    title: "Public Voice Customs",
    question:
      "How should public consultations handle civic voice when submissions may be human, AI-assisted, duplicated, synthetic, coordinated, or genuinely urgent?",
    color: "teal",
  },
  {
    id: "02",
    slug: "mirror-commons",
    title: "Mirror Commons",
    question:
      "What does consentful synthetic representation look like when people manage their own evaluator agents?",
    color: "purple",
  },
  {
    id: "03",
    slug: "exception-window",
    title: "The Exception Window",
    question:
      "Can verification, eligibility, and queueing systems make rejection contestable — without hiding exclusion or increasing surveillance?",
    color: "pink",
  },
  {
    id: "04",
    slug: "sparkle-border-field-kit",
    title: "Sparkle Border Field Kit",
    question:
      "Can the border ritual become a portable grammar for turning access control, credentialing, and event entry into participatory ritual?",
    color: "yellow",
  },
]

const colorClasses = {
  pink: "border-l-pink-500 bg-pink-500/5",
  teal: "border-l-teal-400 bg-teal-400/5",
  purple: "border-l-purple-500 bg-purple-500/5",
  yellow: "border-l-yellow-500 bg-yellow-500/5",
}

const buttonTones = {
  pink: "border-pink-400/50 text-pink-200 hover:bg-pink-500/15",
  teal: "border-teal-400/50 text-teal-200 hover:bg-teal-400/15",
  purple: "border-purple-400/50 text-purple-200 hover:bg-purple-500/15",
  yellow: "border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/15",
}

const storageKey = (slug: string) => `sb-interest:${slug}`

export function ExperimentsSection() {
  const [filed, setFiled] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const state: Record<string, boolean> = {}
    for (const e of experiments) {
      try {
        state[e.slug] = window.localStorage.getItem(storageKey(e.slug)) !== null
      } catch {
        state[e.slug] = false
      }
    }
    setFiled(state)
  }, [])

  const expressInterest = (slug: string) => {
    if (filed[slug]) return
    try {
      window.localStorage.setItem(storageKey(slug), new Date().toISOString())
    } catch {
      // storage unavailable — still count the click
    }
    track("express-interest", { experiment: slug })
    setFiled((prev) => ({ ...prev, [slug]: true }))
  }

  return (
    <SectionWrapper id="experiments">
      <div className="py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-yellow-400/40 bg-yellow-400/10 rounded-full">
            <SparkleIcon className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span className="font-mono text-[10px] text-yellow-200 uppercase tracking-[0.3em]">
              Coming Soon
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            EXPERIMENTS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 via-pink-500 to-transparent rounded-full mb-5" />
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            These are the things we intend to run — come and run them with us.
            The questions are the interesting part; express interest and the
            ones with the most stamps go first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((e) => (
            <div
              key={e.slug}
              className={`border-l-4 ${colorClasses[e.color]} border border-white/15 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:scale-[1.01] flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-black text-white/10">{e.id}</span>
                <span className="text-yellow-400 font-mono text-xs uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                {e.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                {e.question}
              </p>
              <button
                type="button"
                onClick={() => expressInterest(e.slug)}
                disabled={!!filed[e.slug]}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border font-mono text-xs uppercase tracking-widest transition-all ${
                  filed[e.slug]
                    ? "border-green-400/50 bg-green-400/10 text-green-300 cursor-default"
                    : `${buttonTones[e.color]} bg-white/5 cursor-pointer`
                }`}
              >
                {filed[e.slug] ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5" />
                    Interest filed · stamped
                  </>
                ) : (
                  <>
                    <SparkleIcon className="w-3.5 h-3.5" />
                    Express interest · Form SB-EXP-{e.id}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 font-mono text-sm">
            Six more experiments are specified in the lab's files —
            <span className="text-teal-400"> subscribe to hear when the first one gets a date.</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
