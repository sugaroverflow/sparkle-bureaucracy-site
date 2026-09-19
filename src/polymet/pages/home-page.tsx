import { HeroSection } from "@/polymet/components/hero-section";
import { WhySection } from "@/polymet/components/why-section";
import { TwoQuestionsSection } from "@/polymet/components/two-questions-section";
import { ConstellationSection } from "@/polymet/components/constellation-section";
import { ProjectsSection } from "@/polymet/components/projects-section";
import { ComingSoonSection } from "@/polymet/components/coming-soon-section";
import { FounderSection } from "@/polymet/components/founder-section";
import { StampsSection } from "@/polymet/components/stamps-section";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <TwoQuestionsSection />
      <WhySection />
      <ConstellationSection />
      <ProjectsSection />
      <ComingSoonSection />
      <FounderSection />
      <StampsSection />
    </div>
  );
}
