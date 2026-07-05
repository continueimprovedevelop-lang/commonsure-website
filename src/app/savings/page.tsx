import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SavingsTable from "@/components/SavingsTable";
import FeeLockTable from "@/components/FeeLockTable";
import DisclosureBlock from "@/components/DisclosureBlock";
import CtaButtons from "@/components/CtaButtons";
import { illustrativeDisclaimer } from "@/content/site";

export const metadata: Metadata = {
  title: "Savings & Transparency",
  description: "Illustrative savings by state under the Five-Year Certainty Program, with full disclosure.",
};

export default function SavingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Savings & Transparency"
        title="Five years of certainty, two lines of transparency."
        description="Every figure below is illustrative and paired with the same disclosure that appears on any board-facing material."
      />

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-forest">Annual savings per household</h2>
          <p className="mt-3 text-sm text-charcoal/75">
            Based on median home values and typical HOA dues in each market, assuming a ~300-home community
            under the Five-Year Certainty Program.
          </p>
          <div className="mt-6">
            <SavingsTable />
          </div>
          <div className="mt-4">
            <DisclosureBlock text={illustrativeDisclaimer} />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-forest">The five-year fee lock, on its own</h2>
          <p className="mt-3 text-sm text-charcoal/75">
            Typical management companies raise fees 4–5% per year. Locking your fee for five years avoids that
            escalation entirely — independent of any operating savings above.
          </p>
          <div className="mt-6">
            <FeeLockTable />
          </div>
          <div className="mt-4">
            <DisclosureBlock text={illustrativeDisclaimer} />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-forest">Baseline before marketing</h2>
          <p className="mt-3 text-charcoal/80">
            No savings figure is presented to a board without a documented 12-month operating baseline and a
            correction-sprint QA score of 85% or higher for that specific community.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
