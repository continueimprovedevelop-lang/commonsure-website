import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { boardResources } from "@/content/copy";

export const metadata: Metadata = {
  title: "Board Resources",
  description: "The Two-Line Assessment Template, treasury literacy modules, and the Board Advisory Circle.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Board Resources"
        title="Tools for your board, whether or not you ever hire us."
        description="These are the resources every Colorado board and homeowner can use to make their own numbers legible."
      />

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-4xl gap-6">
          {boardResources.map((resource) => (
            <div
              key={resource.title}
              className="flex flex-col gap-4 rounded-lg border border-forest/15 bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-forest">{resource.title}</p>
                <p className="mt-2 text-sm text-charcoal/75">{resource.description}</p>
              </div>
              {resource.href ? (
                <a
                  href={resource.href}
                  download={resource.href.endsWith(".pdf")}
                  className="inline-flex flex-none items-center justify-center rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-dark"
                >
                  {resource.cta}
                </a>
              ) : (
                <span className="inline-flex flex-none items-center justify-center rounded-md border border-forest/20 px-5 py-2.5 text-sm font-medium text-charcoal/60">
                  {resource.cta}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
