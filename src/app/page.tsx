import type { Metadata } from "next";
import DigitalBusinessCard from "@/components/DigitalBusinessCard";
import PlatformIntroSection from "@/components/deck/PlatformIntroSection";
import ChallengesSection from "@/components/deck/ChallengesSection";
import SolutionSection from "@/components/deck/SolutionSection";
import CertaintyProgramSection from "@/components/deck/CertaintyProgramSection";
import CostReductionSection from "@/components/deck/CostReductionSection";
import FinancialBenefitsSection from "@/components/deck/FinancialBenefitsSection";
import CommunityBenefitsSection from "@/components/deck/CommunityBenefitsSection";
import SustainabilitySection from "@/components/deck/SustainabilitySection";
import VendorEcosystemSection from "@/components/deck/VendorEcosystemSection";
import DifferentiationSection from "@/components/deck/DifferentiationSection";
import PilotProgramSection from "@/components/deck/PilotProgramSection";
import TimelineSection from "@/components/deck/TimelineSection";
import FaqSection from "@/components/deck/FaqSection";
import CtaSection from "@/components/deck/CtaSection";

export const metadata: Metadata = {
  title: "HOA Fee Certainty Colorado — Five-Year Certainty Program",
  description:
    "A certainty and treasury platform for HOA boards and homeowners. Lock your management fee for five years, optimize reserves, and fix governance in the first 90 days — delivered through state-licensed consortium partners.",
  keywords: [
    "HOA fee certainty Colorado",
    "HOA insurance going up what to do",
    "HOA reserve study explained",
  ],
};

export default function HomePage() {
  return (
    <>
      <DigitalBusinessCard />
      <PlatformIntroSection />
      <ChallengesSection />
      <SolutionSection />
      <CertaintyProgramSection />
      <CostReductionSection />
      <FinancialBenefitsSection />
      <CommunityBenefitsSection />
      <SustainabilitySection />
      <VendorEcosystemSection />
      <DifferentiationSection />
      <PilotProgramSection />
      <TimelineSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
