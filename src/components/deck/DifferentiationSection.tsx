"use client";

import { motion } from "framer-motion";
import { differentiationRows } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import TwoLineComparison from "@/components/TwoLineComparison";

export default function DifferentiationSection() {
  return (
    <section className="bg-cream-deep px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Why Commonsure" title="Why Commonsure Is Different" />

        <div className="mt-12 overflow-hidden rounded-xl border border-forest/10 shadow-sm">
          <div className="grid grid-cols-2 bg-forest text-cream">
            <p className="px-5 py-3 text-sm font-semibold uppercase tracking-wide">Traditional</p>
            <p className="px-5 py-3 text-sm font-semibold uppercase tracking-wide text-gold">Commonsure</p>
          </div>
          {differentiationRows.map((row, i) => (
            <motion.div
              key={row.traditional}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "#F4F7F2" }}
              className={`grid grid-cols-2 ${i % 2 === 1 ? "bg-cream-deep" : "bg-white"}`}
            >
              <p className="px-5 py-4 text-sm text-charcoal/70 line-through decoration-charcoal/30">{row.traditional}</p>
              <p className="px-5 py-4 text-sm font-semibold text-forest">{row.commonsure}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-sm text-charcoal/75">
            Every report separates what&rsquo;s locked from what isn&rsquo;t — never a total-bill promise.
          </p>
          <div className="mt-6">
            <TwoLineComparison />
          </div>
        </div>
      </div>
    </section>
  );
}
