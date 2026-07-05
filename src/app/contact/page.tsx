import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Commonsure Community Solutions to book a free reserve-study reading.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start with your own numbers."
        description="Tell us a bit about your community. The next step is a reserve-study reading session — not a sales call."
      />
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-lg rounded-lg border border-forest/15 bg-white p-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
