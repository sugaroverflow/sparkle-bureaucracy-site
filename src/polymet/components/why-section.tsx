import { SectionWrapper } from "@/polymet/components/section-wrapper";

const problemStatement = [
  "Public systems are failing the people who rely on them most.",
  "AI offers a real opportunity to fix this.",
  "We as technologists need to make sure people working at the grassroots are not left behind.",
  "We can use AI to prototype and imagine a different future.",
];

export function WhySection() {
  return (
    <SectionWrapper id="why">
      <div className="py-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHY THIS,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
              WHY NOW
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 via-pink-500 to-transparent rounded-full" />
        </div>

        {/* Problem statement — filed as an official memo */}
        <div className="max-w-3xl border border-white/20 bg-white/5 rounded p-6">
          <p className="font-mono text-[10px] text-teal-400 uppercase tracking-[0.3em] mb-4">
            Problem statement · Memo SB-31/07
          </p>
          <ol className="space-y-3">
            {problemStatement.map((line, i) => (
              <li key={line} className="flex gap-4 items-start">
                <span className="font-mono text-xs text-white/40 pt-1 min-w-[24px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-white/90 text-base leading-relaxed">
                  {line}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}
