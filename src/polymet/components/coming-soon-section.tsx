import { useEffect, useState } from "react";
import { CalendarIcon, CheckIcon, SparkleIcon } from "lucide-react";
import { SectionWrapper } from "@/polymet/components/section-wrapper";
import { trackEvent } from "@/lib/analytics";

interface UpcomingItem {
  id: string;
  slug: string;
  title: string;
  date?: string;
  body: string;
  color: "pink" | "teal" | "purple" | "yellow";
}

const upcomingItems: UpcomingItem[] = [
  {
    id: "01",
    slug: "agents-for-good-hackathon",
    title: "Agents for Good Hackathon",
    date: "October 2026",
    body: "Bring the civic problem you keep getting stuck on, or join someone else's. We'll give teams suggested topics and challenges, then build AI agents that prototype a different future. Afterwards, the projects can come back for a public demo night, along with anything else people want to show.",
    color: "pink",
  },
  {
    id: "02",
    slug: "liquid-mandate-assembly",
    title: "Experiment: Liquid Mandate Assembly",
    body: "We'll take one small, real community decision and let people vote directly or hand their mandate to someone else. You can revoke that mandate, and a paper ballot can confirm or override the digital record. Afterwards we'll publish the concentration chart, audit note, and dispute log so everyone can see where the legitimacy held and where it got wobbly.",
    color: "teal",
  },
  {
    id: "03",
    slug: "digital-twins-agent-representation",
    title: "Experiment: Digital Twins Agent Representation",
    body: "Project Mirror produced a lot of excitement and rage at the same time. For this next version, everyone gets to decide what their agent can say, rank, or do on their behalf, with red lines, an expiry date, and a way to revoke it. I want to find out whether a digital twin feels different when you are the one holding its passport.",
    color: "purple",
  },
  {
    id: "04",
    slug: "hear-from-ai-experts",
    title: "Hear from AI Experts",
    date: "November 2026",
    body: "New things come out; people who understand them can teach the rest of us. Each session will focus on one part of AI, with one expert and an audience who might actually use it. We'll look at what changed, what it means for civic work, and what is probably hype.",
    color: "yellow",
  },
];

const colorClasses = {
  pink: "border-l-pink-500 bg-pink-500/5",
  teal: "border-l-teal-400 bg-teal-400/5",
  purple: "border-l-purple-500 bg-purple-500/5",
  yellow: "border-l-yellow-500 bg-yellow-500/5",
};

const buttonTones = {
  pink: "border-pink-400/50 text-pink-200 hover:bg-pink-500/15",
  teal: "border-teal-400/50 text-teal-200 hover:bg-teal-400/15",
  purple: "border-purple-400/50 text-purple-200 hover:bg-purple-500/15",
  yellow: "border-yellow-400/50 text-yellow-200 hover:bg-yellow-400/15",
};

const storageKey = (slug: string) => `sb-interest:${slug}`;

export function ComingSoonSection() {
  const [filed, setFiled] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const state: Record<string, boolean> = {};
    for (const item of upcomingItems) {
      try {
        state[item.slug] =
          window.localStorage.getItem(storageKey(item.slug)) !== null;
      } catch {
        state[item.slug] = false;
      }
    }
    setFiled(state);
  }, []);

  const expressInterest = (slug: string) => {
    if (filed[slug]) return;
    try {
      window.localStorage.setItem(storageKey(slug), new Date().toISOString());
    } catch {
      // Storage may be unavailable; the analytics event can still be counted.
    }
    trackEvent("express-interest", { item: slug });
    setFiled((previous) => ({ ...previous, [slug]: true }));
  };

  return (
    <SectionWrapper id="coming-soon">
      <div className="py-16">
        <div className="mb-10">
          <p className="font-mono text-[10px] text-yellow-300 uppercase tracking-[0.3em] mb-5">
            The next filings
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            COMING{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
              SOON
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 via-pink-500 to-transparent rounded-full mb-5" />
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            These are the four things I want to run next. If one sounds like
            your kind of thing, express interest. It will help me work out what
            to put on first, how much room we need, and who needs to be there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl">
          {upcomingItems.map((item) => (
            <article
              key={item.slug}
              className={`border-l-4 ${colorClasses[item.color]} border border-white/15 backdrop-blur-sm p-5 rounded-lg flex flex-col`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-4xl font-black text-white/10">
                  {item.id}
                </span>
                {item.date ? (
                  <span className="inline-flex items-center gap-1.5 border border-yellow-400/35 bg-yellow-400/10 px-2 py-1 font-mono text-[9px] text-yellow-200 uppercase tracking-widest">
                    <CalendarIcon className="w-3 h-3" />
                    {item.date}
                  </span>
                ) : (
                  <span className="font-mono text-[9px] text-white/35 uppercase tracking-widest pt-1">
                    Date forming
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                {item.body}
              </p>
              <button
                type="button"
                onClick={() => expressInterest(item.slug)}
                disabled={!!filed[item.slug]}
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded border font-mono text-[10px] uppercase tracking-widest transition-all active:scale-[0.98] ${
                  filed[item.slug]
                    ? "border-green-400/50 bg-green-400/10 text-green-300 cursor-default"
                    : `${buttonTones[item.color]} bg-white/5 cursor-pointer`
                }`}
              >
                {filed[item.slug] ? (
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
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
