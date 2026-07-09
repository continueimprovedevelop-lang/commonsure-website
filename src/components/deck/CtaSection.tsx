"use client";

import { motion } from "framer-motion";
import { illustrativeDisclaimer, siteConfig } from "@/content/site";
import SectionHeading from "./SectionHeading";
import BackgroundVideo from "./BackgroundVideo";
import DisclosureBlock from "@/components/DisclosureBlock";
import ContactForm from "@/components/ContactForm";

export default function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-20 sm:py-28">
      <div className="absolute inset-0">
        <BackgroundVideo src="/videos/signing-document.mp4" />
        <div className="absolute inset-0 bg-forest-dark/85" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get started"
          title="Start with the free tool, not a pitch."
          description="Download the Two-Line Assessment Template and see where your community's costs already stand, or book your free 30-minute community assessment."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="/downloads/two-line-assessment-template.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 text-sm font-semibold text-forest transition hover:bg-white"
          >
            Download the Two-Line Template
          </a>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex items-center justify-center rounded-md border border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            Email {siteConfig.contactEmail}
          </a>
          <a
            href={`tel:${siteConfig.contactPhoneHref}`}
            className="inline-flex items-center justify-center rounded-md border border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            Call {siteConfig.contactPhone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-12 max-w-md rounded-2xl border border-cream/15 bg-cream/95 p-6 shadow-xl backdrop-blur-sm sm:p-8"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gold">
            Book a free reserve-study reading
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </motion.div>

        <div className="mt-8 rounded-md bg-cream/95 p-1">
          <DisclosureBlock text={illustrativeDisclaimer} />
        </div>
      </div>
    </section>
  );
}
