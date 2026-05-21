import { TwitterIcon, LinkedinIcon, AtSignIcon, SparkleIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://x.com/sugaroverflow",
    icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sugaroverflow/",
    icon: LinkedinIcon,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/sugaroverflow.com",
    icon: AtSignIcon,
  },
]

type Tone = "pink" | "teal" | "purple" | "yellow"

interface PhotoCell {
  src: string | null
  alt: string
  tone: Tone
  stampTop: string
  stampBottom: string
  rotate: string
}

// Each cell defaults to a Sparkle-Bureaucracy stamp.
// Drop a real photo path (e.g. "/founder/01.jpg" in /public) into `src` to swap it in.
const photos: PhotoCell[] = [
  {
    src: null,
    alt: "Fatima Sarah Khalid portrait",
    tone: "pink",
    stampTop: "✦ Approved ✦",
    stampBottom: "By Order of Her Sparkliness",
    rotate: "-rotate-[3deg]",
  },
  {
    src: null,
    alt: "Fatima at a workshop",
    tone: "teal",
    stampTop: "✧ Cert. of Whimsy ✧",
    stampBottom: "Dept. of Celestial Sparkles",
    rotate: "rotate-[2deg]",
  },
  {
    src: null,
    alt: "Fatima speaking at an event",
    tone: "purple",
    stampTop: "✦ Filed in Perpetuity ✦",
    stampBottom: "Bureau of Optimistic Futures",
    rotate: "-rotate-[1.5deg]",
  },
  {
    src: null,
    alt: "Fatima with the civic-tech community",
    tone: "yellow",
    stampTop: "✧ Audit: Sparkle OK ✧",
    stampBottom: "Stardate 26142 · Rev. ✦✦",
    rotate: "rotate-[3deg]",
  },
]

const toneClasses: Record<Tone, { wrap: string; ring: string; text: string; glow: string }> = {
  pink: {
    wrap: "bg-gradient-to-br from-pink-500/20 via-pink-500/5 to-transparent",
    ring: "border-pink-400/50",
    text: "text-pink-200",
    glow: "shadow-[0_0_24px_rgba(236,72,153,0.15)]",
  },
  teal: {
    wrap: "bg-gradient-to-br from-teal-400/20 via-teal-400/5 to-transparent",
    ring: "border-teal-400/50",
    text: "text-teal-200",
    glow: "shadow-[0_0_24px_rgba(45,212,191,0.15)]",
  },
  purple: {
    wrap: "bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent",
    ring: "border-purple-400/50",
    text: "text-purple-200",
    glow: "shadow-[0_0_24px_rgba(168,85,247,0.15)]",
  },
  yellow: {
    wrap: "bg-gradient-to-br from-yellow-400/20 via-yellow-400/5 to-transparent",
    ring: "border-yellow-400/50",
    text: "text-yellow-200",
    glow: "shadow-[0_0_24px_rgba(234,179,8,0.15)]",
  },
}

export function FounderSection() {
  return (
    <SectionWrapper id="who">
      <div className="py-16">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-pink-500/50 bg-pink-500/10 rounded-full">
            <SparkleIcon className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="font-mono text-[10px] text-pink-300 uppercase tracking-[0.3em]">
              ✦ Eternal · Unelected · Adorable ✦
            </span>
            <SparkleIcon
              className="w-3.5 h-3.5 text-pink-400 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            MALEVOLENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-teal-400">
              DICTATOR
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-teal-400 to-transparent rounded-full" />
          <p className="mt-4 font-mono text-xs text-yellow-300/80 italic max-w-xl">
            “Rules with an iron sparkle. Pls subscribe.”
          </p>
        </div>

        {/* Open editorial layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
          {/* 2×2 photo + stamp grid */}
          <div className="flex-shrink-0 md:flex md:flex-col">
            <div className="grid grid-cols-2 gap-2 w-64 md:w-80 md:flex-1 md:grid-rows-2">
              {photos.map((cell, i) => {
                const tones = toneClasses[cell.tone]
                return (
                  <div
                    key={i}
                    className={`relative aspect-square md:aspect-auto md:h-full md:min-h-0 overflow-hidden border ${tones.ring} ${tones.glow} rounded-md`}
                  >
                    {cell.src ? (
                      <img
                        src={cell.src}
                        alt={cell.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${tones.wrap} flex flex-col items-center justify-center px-2`}>
                        <div className={`${cell.rotate} border-2 ${tones.ring} bg-[#0a0e27]/70 px-3 py-2 flex flex-col items-center gap-1.5`}>
                          <SparkleIcon className={`w-5 h-5 ${tones.text}`} />
                          <span className={`font-mono text-[9px] uppercase tracking-widest ${tones.text} text-center leading-tight`}>
                            {cell.stampTop}
                          </span>
                          <span className="font-mono text-[8px] uppercase tracking-widest text-white/40 text-center leading-tight">
                            {cell.stampBottom}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-md pointer-events-none" />
                  </div>
                )
              })}
            </div>
            <p className="mt-3 font-mono text-[9px] text-white/30 uppercase tracking-widest text-center">
              File · Founder Dossier · 04 of 04
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1 leading-tight">
                Fatima Sarah Khalid
              </h3>
              <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-2">
                Her Sparkliness · Supreme Coordinator of Optimistic Futures
              </p>
              <p className="text-white/40 font-mono text-[11px] uppercase tracking-widest mb-6">
                Term: forever (no take-backs) · Appeals: returned with glitter
              </p>
              <div className="space-y-4 text-white/70 text-base leading-relaxed max-w-xl">
                <p>
                  Fatima is a Senior Developer Advocate at GitLab working
                  across AI, DevSecOps, and developer tooling. She helps
                  developers understand and apply emerging technologies
                  through live demos, technical storytelling, and hands-on
                  workshops.
                </p>
                <p>
                  With a background spanning open source, civic tech, and
                  developer communities, Fatima has worked with public-sector
                  teams across North America, including the City of Boston’s
                  Digital Team, Microsoft’s civic-tech fellowship in New York,
                  and Code for Canada’s work with Transport Canada. She has
                  also been a long-time contributor to ecosystems like Drupal,
                  local civic hack nights, and the Civic Tech Field Guide.
                  Her work has been recognized with awards including DevRel
                  Evangelist of the Year 2024.
                </p>
                <p>
                  As a current fellowship candidate at the London College of
                  Political Technology, Fatima is building Sparkle
                  Bureaucracy—a research project exploring how multi-agent AI
                  systems might reshape organizations, coordination, and
                  public institutions. Her work uses AI to imagine optimistic
                  organizational futures and illustrate the new possibilities
                  emerging technologies could create for work, governance,
                  and society.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 text-white/60 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5 font-mono text-sm transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16" />
      </div>
    </SectionWrapper>
  )
}
