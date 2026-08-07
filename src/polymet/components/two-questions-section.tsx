import { SectionWrapper } from "@/polymet/components/section-wrapper"
import { SubscribeInline } from "@/polymet/components/subscribe-inline"

export function TwoQuestionsSection() {
  return (
    <SectionWrapper id="two-questions">
      <div className="py-20 text-center max-w-3xl mx-auto">
        <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-8">
          The whole thing reduces to two questions
        </p>
        <p className="text-3xl md:text-5xl font-black leading-tight text-white mb-4">
          What can{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300">
            I
          </span>{" "}
          use AI for?
        </p>
        <p className="text-3xl md:text-5xl font-black leading-tight text-white mb-8">
          What can AI do{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
            for me
          </span>
          ?
        </p>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          If either question is yours, you're who this network is for.
        </p>

        <div id="subscribe" className="max-w-xl mx-auto scroll-mt-24">
          <SubscribeInline />
        </div>
      </div>
    </SectionWrapper>
  )
}
