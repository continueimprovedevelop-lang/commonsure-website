"use client";

import { motion } from "framer-motion";
import { whyCostsRise } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import BackgroundGif from "./BackgroundGif";

export default function ChallengesSection() {
  return (
    <section id="challenges" className="bg-cream px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The problem" title="HOA costs keep rising" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-forest/10 shadow-lg"
          >
            <div className="aspect-video">
              <BackgroundGif src="/gifs/desk-calculator.gif" />
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyCostsRise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-forest">{item.title}</p>
                <p className="mt-2 text-sm text-charcoal/75">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
