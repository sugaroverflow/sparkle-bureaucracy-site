import { SectionWrapper } from "@/polymet/components/section-wrapper";
import { SubscribeInline } from "@/polymet/components/subscribe-inline";

export function TwoQuestionsSection() {
  return (
    <SectionWrapper id="subscribe">
      <div className="pb-16 md:pb-20">
        <div className="relative max-w-2xl overflow-hidden border border-white/20 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-pink-500/80 via-teal-400/60 to-transparent" />

          <div className="p-7 sm:p-8">
            <div className="flex flex-col gap-7">
              <h2 className="leading-tight">
                <span className="block text-2xl font-black text-white md:text-3xl">
                  Get dispatches and updates from the lab.
                </span>
                <span className="mt-3 block font-mono text-sm font-normal uppercase tracking-[0.3em] text-teal-300 md:text-base">
                  Subscribe.
                </span>
              </h2>
              <SubscribeInline />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
