"use client";

import { motion } from "framer-motion";

const lockedItems = ["Management fee", "Locked for five years", "Known, defensible number"];
const passThroughItems = ["Taxes", "Insurance", "Regulated utilities"];

export default function TwoLineComparison() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-forest/20 bg-forest text-cream p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">Line 1 — Locked</p>
        <p className="mt-2 text-lg font-semibold">What&rsquo;s locked for five years</p>
        <ul className="mt-4 space-y-2 text-sm text-cream/90">
          {lockedItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-lg border border-gold/40 bg-gold/10 p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-forest/70">Line 2 — Pass-through</p>
        <p className="mt-2 text-lg font-semibold text-charcoal">Reported separately, every cycle</p>
        <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
          {passThroughItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
