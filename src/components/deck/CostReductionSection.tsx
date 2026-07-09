"use client";

import { motion } from "framer-motion";
import { costReductionLevers } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import { CostIcon } from "@/components/icons";

export default function CostReductionSection() {
  return (
    <section className="bg-forest px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="How it works" title="How We Reduce Costs" light />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costReductionLevers.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-lg border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              <CostIcon className="h-7 w-7 text-gold" />
              <p className="mt-3 font-semibold text-cream">{item.title}</p>
              <p className="mt-2 text-sm text-cream/75">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
