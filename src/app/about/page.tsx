import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { homeValues, siteConfig } from "@/content/site";
import { missionThemes, longTermSuccessStatement } from "@/content/copy";

export const metadata: Metadata = {
  title: "About & Mission",
  description: "The Steward archetype, the H.O.M.E. values, and the mission behind Commonsure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Mission"
        title="A steward, not a salesperson."
        description="Commonsure protects something held in common on behalf of the people who depend on it — accounting, safeguarding, and handing things back in better condition than they were found."
      />

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-forest">Our mission</h2>
          <blockquote className="mt-4 border-l-4 border-gold pl-4 text-charcoal/85">
            {longTermSuccessStatement}
          </blockquote>
        </div>
      </section>

      <section className="bg-cream-deep px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-forest">Mission in practice</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {missionThemes.map((item) => (
              <div key={item.theme} className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-semibold text-forest">{item.theme}</p>
                <p className="mt-2 text-sm text-charcoal/75">{item.expression}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-forest">The H.O.M.E. values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeValues.map((value) => (
              <div key={value.letter} className="rounded-lg border border-forest/10 bg-white p-6 text-center">
                <span className="text-3xl font-bold text-gold">{value.letter}</span>
                <p className="mt-2 font-semibold text-forest">{value.word}</p>
                <p className="mt-2 text-sm text-charcoal/75">{value.commitment}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-forest">{siteConfig.brandPromise}</p>
        </div>
      </section>
    </>
  );
}
