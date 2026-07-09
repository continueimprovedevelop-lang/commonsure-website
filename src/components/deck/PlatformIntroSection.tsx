"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import BackgroundGif from "./BackgroundGif";

const bullets = [
  "Certainty & treasury platform for community associations — not a management company",
  "Lock management fees for five years",
  "Optimize reserves and pool insurance at portfolio scale",
  "Delivered through state-licensed consortium partners",
];

export default function PlatformIntroSection() {
  return (
    <section id="platform" className="relative overflow-hidden bg-forest">
      <div className="absolute inset-0 z-0">
        <BackgroundGif src="/gifs/office-collaboration.gif" />
      </div>
      <div className="absolute inset-0 z-[1] bg-forest-dark/85" />

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[70vh] sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[min(85vw,28rem)]"
        >
          <Image
            src="/images/commonsure-logo.png"
            alt="Commonsure Community Solutions"
            width={448}
            height={448}
            priority
            className="mx-auto h-auto w-full object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-lg font-semibold text-cream sm:text-2xl"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 text-sm text-gold sm:text-base"
        >
          {siteConfig.categoryLine}
        </motion.p>

        <ul className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
          {bullets.map((bullet, i) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-lg border border-cream/15 bg-cream/5 p-4 text-sm text-cream/90 backdrop-blur-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold text-[10px] font-bold text-forest-dark">
                ✓
              </span>
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
