import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { whatYouGet, momentumSteps } from "@/content/savings";
import { whyCostsRise } from "@/content/copy";
import TwoLineComparison from "@/components/TwoLineComparison";
import DisclosureBlock from "@/components/DisclosureBlock";
import SavingsTable from "@/components/SavingsTable";
import CtaButtons from "@/components/CtaButtons";
import { illustrativeDisclaimer } from "@/content/site";

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
      <section className="bg-cream-deep px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">
            {siteConfig.categoryLine}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-forest sm:text-5xl">Your commons, made sure.</h1>
          <p className="mt-5 text-base text-charcoal/80 sm:text-lg">{siteConfig.tagline}.</p>
          <p className="mt-2 text-sm font-medium text-forest/80">{siteConfig.proofLine}</p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-forest sm:text-3xl">
            Why HOA costs keep rising
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyCostsRise.map((item) => (
              <div key={item.title} className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-semibold text-forest">{item.title}</p>
                <p className="mt-2 text-sm text-charcoal/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-forest sm:text-3xl">
            What your community gets
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatYouGet.map((item) => (
              <div key={item.title} className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-semibold text-forest">{item.title}</p>
                <p className="mt-2 text-sm text-charcoal/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-forest sm:text-3xl">
            A locked line. A clear ledger.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-charcoal/75">
            Every report separates what&rsquo;s locked from what isn&rsquo;t — never a total-bill promise.
          </p>
          <div className="mt-8">
            <TwoLineComparison />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-forest sm:text-3xl">
            Savings & transparency, by state
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-charcoal/75">
            Illustrative annual savings per household under the Five-Year Certainty Program.
          </p>
          <div className="mt-8">
            <SavingsTable />
          </div>
          <div className="mt-4">
            <DisclosureBlock text={illustrativeDisclaimer} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/savings" className="text-sm font-semibold text-forest hover:underline">
              See the full savings and transparency breakdown →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-forest sm:text-3xl">How it works</h2>
          <ol className="mt-8 space-y-4">
            {momentumSteps.map((step, index) => (
              <li key={step.episode} className="flex gap-4 rounded-lg border border-forest/10 bg-white p-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-forest text-sm font-semibold text-cream">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-forest">{step.title}</p>
                  <p className="mt-1 text-sm text-charcoal/75">{step.action}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 text-center">
            <Link href="/how-it-works" className="text-sm font-semibold text-forest hover:underline">
              See the full walkthrough →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest px-4 py-16 text-center text-cream sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Start with the free tool, not a pitch.</h2>
          <p className="mt-3 text-cream/85">
            Download the Two-Line Assessment Template and see where your community&rsquo;s costs already stand.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/downloads/two-line-assessment-template.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 text-sm font-semibold text-forest transition hover:bg-white"
            >
              Download the Two-Line Template
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Book a free reserve-study reading
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
