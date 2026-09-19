import { SectionWrapper } from "@/polymet/components/section-wrapper";
import { SubscribeInline } from "@/polymet/components/subscribe-inline";

export function TwoQuestionsSection() {
  return (
    <SectionWrapper id="subscribe">
      <div className="pb-16 md:pb-20">
        <div className="relative max-w-5xl overflow-hidden border border-white/20 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-500/80 via-teal-400/60 to-transparent" />

          <div className="p-7 sm:p-9 lg:p-10">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-teal-300">
              Subscribe to stay connected!
            </p>
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(26rem,1.15fr)] lg:gap-10">
              <div>
                <h2 className="mb-3 text-2xl font-black leading-tight text-white md:text-3xl">
                  Follow the work as it happens.
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-white/55">
                  Get irregular notes on new prototypes, experiments, and what
                  the network is learning.
                </p>
              </div>
              <div>
                <SubscribeInline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
