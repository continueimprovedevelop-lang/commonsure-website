"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = ["Discovery", "Assessment", "Vendor Optimization", "Reserve Strategy", "Cost Stability"];

export default function CertaintyProgramSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="The product"
          title="Five-Year Certainty Program"
          description="Your board gets a five-year fee schedule locked on day one."
        />

        <div className="relative mt-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex flex-1 flex-col items-center text-center"
            >
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                  style={{ originX: 0 }}
                  className="absolute left-1/2 top-6 hidden h-0.5 w-full bg-gold/50 sm:block"
                />
              )}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-lg font-semibold text-cream shadow-md"
              >
                {i + 1}
              </motion.span>
              <p className="mt-3 text-sm font-semibold text-forest">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
