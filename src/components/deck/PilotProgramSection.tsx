"use client";

import { motion } from "framer-motion";
import { pilotProgram } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import BackgroundVideo from "./BackgroundVideo";

export default function PilotProgramSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 sm:py-28">
      <div className="absolute inset-0">
        <BackgroundVideo src="/videos/mountain-lake.mp4" />
        <div className="absolute inset-0 bg-forest-dark/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading eyebrow="Where we start" title={pilotProgram.headline} light />

        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
          {pilotProgram.points.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-lg border border-cream/15 bg-cream/5 p-4 text-sm text-cream/90 backdrop-blur-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-[10px] font-bold text-forest-dark">
                ✓
              </span>
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
