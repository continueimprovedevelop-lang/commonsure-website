"use client";

import { motion } from "framer-motion";
import { implementationPhases } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import BackgroundGif from "./BackgroundGif";

export default function TimelineSection() {
  return (
    <section id="timeline" className="bg-cream px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="The rollout" title="Implementation Timeline" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-forest/10 shadow-lg">
            <div className="aspect-square lg:aspect-[4/5]">
              <BackgroundGif src="/gifs/calendar-planning.gif" />
            </div>
          </div>

          <div className="relative space-y-10 pl-8">
            <div className="absolute bottom-0 left-2.5 top-0 w-0.5 bg-gold" />
            {implementationPhases.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-0.5 h-3 w-3 rounded-full border-2 border-gold bg-cream" />
                <p className="font-semibold text-forest">{item.phase}</p>
                <p className="mt-1 text-sm text-charcoal/75">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
