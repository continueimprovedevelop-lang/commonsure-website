import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MomentumTimeline from "@/components/MomentumTimeline";
import CtaButtons from "@/components/CtaButtons";

export const metadata: Metadata = {
  title: "How It Works",
  description: "The five-step path from a free download to a five-year Certainty Letter.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A defined, five-step process — not an open-ended relationship."
        description="Each step is scoped, priced, and time-boxed, so saying yes to the next one always feels like a natural continuation of something your board already started."
      />
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <MomentumTimeline />
          <div className="mt-12 text-center">
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
