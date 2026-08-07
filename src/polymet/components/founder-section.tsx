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
          {/* Portrait — stretches to bio height on md+ */}
          <div className="flex-shrink-0 md:flex md:flex-col">
            <div className="relative w-64 md:w-80 aspect-[3/4] md:aspect-auto md:flex-1 overflow-hidden rounded-md border border-pink-400/50 shadow-[0_0_32px_rgba(236,72,153,0.18)]">
              <img
                src="/fatima-holding-star.webp"
                alt="Fatima Sarah Khalid holding a star"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Tilted stamp overlay */}
              <div className="absolute bottom-3 right-3 -rotate-[6deg] border-2 border-pink-400/80 bg-[#0a0e27]/85 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                <SparkleIcon className="w-3 h-3 text-pink-300" />
                <span className="font-mono text-[10px] text-pink-200 uppercase tracking-widest">
                  Approved
                </span>
                <SparkleIcon className="w-3 h-3 text-pink-300" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-md pointer-events-none" />
            </div>
            <p className="mt-3 font-mono text-[9px] text-white/30 uppercase tracking-widest text-center">
              File · Founder Dossier · 01 of 01
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
              <div className="space-y-4 text-white/70 text-base leading-relaxed max-w-xl [&_a]:text-pink-300 [&_a]:underline [&_a]:decoration-pink-400/40 [&_a]:underline-offset-2 [&_a:hover]:text-pink-200 [&_a:hover]:decoration-pink-300 [&_a]:transition-colors">
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
                  and Code for Canada’s{" "}
                  <a
                    href="https://www.cbc.ca/news/canada/ottawa/code-for-canada-tech-talent-temporary-new-policy-needed-to-attract-1.5222477"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    work with Transport Canada
                  </a>
                  . She has also been a long-time contributor to ecosystems
                  like{" "}
                  <a
                    href="https://www.drupal.org/u/sugaroverflow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Drupal
                  </a>
                  , local civic hack nights, and the Civic Tech Field Guide.
                  Her work has been recognized with awards including the{" "}
                  <a
                    href="https://www.cbc.ca/news/canada/london/fatima-khalid-echidna-women-technology-1.4574417"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rising Star Award
                  </a>
                  {" "}and{" "}
                  <a
                    href="https://devops.com/meet-the-devops-dozen%C2%B2-2023-honorees/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevRel Evangelist of the Year 2024
                  </a>
                  .
                </p>
                <p>
                  As a current fellowship candidate at the{" "}
                  <a
                    href="https://newspeak.house/fellowship"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    London College of Political Technology
                  </a>
                  , Fatima is building Sparkle Bureaucracy — a network of
                  people using AI to prototype more optimistic futures, run
                  as an experiment lab: a border regime at a birthday party,
                  an eighteen-agent evaluation jury, campaign tools built
                  with the communities that use them.
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
