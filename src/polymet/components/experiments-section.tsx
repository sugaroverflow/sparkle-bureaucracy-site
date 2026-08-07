import { useEffect, useState } from "react"
import { CheckIcon, SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"
import { trackEvent } from "@/lib/analytics"

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
    slug: "exception-window",
    title: "The Exception Window",
    question:
      "Can rejection be made contestable — visible appeals, decision receipts — without more surveillance?",
    color: "pink",
  },
  {
    id: "02",
    slug: "public-voice-customs",
    title: "Public Voice Customs",
    question:
      "How should consultations read civic voice when submissions may be human, AI-assisted, or synthetic?",
    color: "teal",
  },
  {
    id: "03",
    slug: "mirror-commons",
    title: "Mirror Commons",
    question:
      "What does consentful synthetic representation look like when you manage your own agent?",
    color: "purple",
  },
  {
    id: "04",
    slug: "sparkle-border-field-kit",
    title: "Sparkle Border Field Kit",
    question:
      "Can the border ritual become a portable kit for any event's front door?",
    color: "yellow",
  },
  {
    id: "05",
    slug: "value-court",
    title: "The Value Court",
    question:
      "Can a group make its values explicit before judging projects, grants, or proposals?",
    color: "teal",
  },
  {
    id: "06",
    slug: "liquid-mandate-assembly",
    title: "Liquid Mandate Assembly",
    question:
      "What does delegation feel like when it's tangible — paper ballots, stamps, revocation slips?",
    color: "pink",
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
    trackEvent("express-interest", { experiment: slug })
    setFiled((prev) => ({ ...prev, [slug]: true }))
  }

  return (
    <SectionWrapper id="experiments">
      <div className="py-16">
        <div className="mb-10">
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
            The things we intend to run — come and run them with us. Express
            interest and the ones with the most stamps go first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((e) => (
            <div
              key={e.slug}
              className={`border-l-4 ${colorClasses[e.color]} border border-white/15 backdrop-blur-sm p-4 rounded-lg transition-all duration-300 hover:scale-[1.01] flex flex-col`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl font-black text-white/10">{e.id}</span>
                <span className="text-yellow-400 font-mono text-[9px] uppercase tracking-wider pt-1">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">
                {e.title}
              </h3>
              <p className="text-white/60 text-[13px] leading-relaxed mb-4 flex-1">
                {e.question}
              </p>
              <button
                type="button"
                onClick={() => expressInterest(e.slug)}
                disabled={!!filed[e.slug]}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded border font-mono text-[10px] uppercase tracking-widest transition-all ${
                  filed[e.slug]
                    ? "border-green-400/50 bg-green-400/10 text-green-300 cursor-default"
                    : `${buttonTones[e.color]} bg-white/5 cursor-pointer`
                }`}
              >
                {filed[e.slug] ? (
                  <>
                    <CheckIcon className="w-3 h-3" />
                    Interest filed · stamped
                  </>
                ) : (
                  <>
                    <SparkleIcon className="w-3 h-3" />
                    Express interest
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/30 font-mono text-sm">
            Three more experiments are specified in the lab's files —
            <span className="text-teal-400"> subscribe to hear when the first one gets a date.</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
