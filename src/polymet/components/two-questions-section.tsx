import { SectionWrapper } from "@/polymet/components/section-wrapper";
import { SubscribeInline } from "@/polymet/components/subscribe-inline";

export function TwoQuestionsSection() {
  return (
    <SectionWrapper id="subscribe">
      <div className="pb-16 md:pb-20">
        <div className="relative max-w-5xl overflow-hidden border border-white/20 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-500/80 via-teal-400/60 to-transparent" />

          <div className="p-7 sm:p-9 lg:p-10">
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(26rem,1.15fr)] lg:gap-10">
              <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
                Get dispatches from the lab. Subscribe.
              </h2>
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
