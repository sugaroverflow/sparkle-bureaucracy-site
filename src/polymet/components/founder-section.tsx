import { TwitterIcon, LinkedinIcon, GlobeIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/yourhandle",
    icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: LinkedinIcon,
  },
  {
    label: "Website",
    href: "https://yourwebsite.com",
    icon: GlobeIcon,
  },
]

export function FounderSection() {
  return (
    <SectionWrapper id="who">
      <div className="py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHO'S BEHIND THIS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-teal-400 to-transparent rounded-full" />
        </div>

        {/* Open editorial layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden relative">
              <img
                src="https://github.com/polymet-ai.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-teal-400/20 rounded-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1 leading-tight">
                Your Name
              </h3>
              <p className="text-pink-400 font-mono text-sm uppercase tracking-wider mb-6">
                Founder, Sparkle Bureaucracy
              </p>
              <div className="space-y-3 text-white/70 text-base leading-relaxed max-w-xl">
                <p>
                  A short paragraph about you — your background, what drives
                  you, and why you started Sparkle Bureaucracy. Keep it human
                  and honest.
                </p>
                <p>
                  A second line about your other work, affiliations, or
                  interests. Newspeak House, adjacent orgs, previous
                  projects — whatever feels relevant.
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 text-white/60 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/5 font-mono text-sm transition-all"
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
