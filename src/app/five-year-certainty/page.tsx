import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TwoLineComparison from "@/components/TwoLineComparison";
import DisclosureBlock from "@/components/DisclosureBlock";
import CtaButtons from "@/components/CtaButtons";
import { reserveTiers, twoLineDisclosure } from "@/content/copy";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "The Five-Year Certainty Program",
  description:
    "Lock your management fee for five years, optimize reserves, and fix governance in the first 90 days.",
};

export default function FiveYearCertaintyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Five-Year Certainty Program"
        title="A locked fee. A clear ledger. A plan your board can defend."
        description={siteConfig.proofLine}
      />

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-forest">The fee lock, in plain terms</h2>
          <p className="mt-3 text-charcoal/80">
            Commonsure locks your management fee and defined service bundle for a fixed five-year term, with
            transparent pass-through true-ups limited to taxes, insurance, and regulated utilities.
          </p>
          <div className="mt-8">
            <TwoLineComparison />
          </div>
          <div className="mt-4">
            <DisclosureBlock text={twoLineDisclosure} />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-forest">Reserve optimization, in plain terms</h2>
          <p className="mt-3 text-charcoal/80">
            Reserve architecture is designed by treasury advisors and executed by state-licensed partners.
            Commonsure never holds community reserve funds on its own balance sheet.
          </p>
          <div className="mt-8 space-y-6">
            {reserveTiers.map((tier) => (
              <div key={tier.name} className="rounded-lg border border-forest/15 bg-white p-6">
                <p className="font-semibold text-forest">{tier.name}</p>
                <p className="mt-2 text-sm text-charcoal/75">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold text-forest">See what it means for your community</h2>
          <p className="mt-3 text-charcoal/80">{siteConfig.proofLine}</p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
