import { SectionWrapper } from "@/polymet/components/section-wrapper";
import { SubscribeInline } from "@/polymet/components/subscribe-inline";

export function TwoQuestionsSection() {
  return (
    <SectionWrapper id="two-questions">
      <div className="py-16 md:py-20">
        <div
          id="subscribe"
          className="relative scroll-mt-24 overflow-hidden border border-white/20 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-500/80 via-teal-400/60 to-transparent" />

          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-7">
                The whole thing reduces to two questions
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-[1.08] text-white">
                What can <span className="text-pink-400">I</span> use AI for?
                <span className="block mt-3">
                  What can AI do <span className="text-teal-300">for me</span>?
                </span>
              </h2>
              <p className="mt-7 max-w-lg text-white/60 text-base leading-relaxed">
                If either question is yours, you're who this network is for.
              </p>
            </div>

            <div className="border-t border-white/15 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="font-mono text-[10px] text-teal-300 uppercase tracking-[0.3em] mb-5">
                Dispatches from the lab
              </p>
              <h3 className="text-2xl font-black leading-tight text-white mb-3">
                Follow the work as it happens.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Get irregular notes on new prototypes, experiments, and what the
                network is learning.
              </p>
              <SubscribeInline />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
