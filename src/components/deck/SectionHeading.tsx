"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  const words = title.split(" ");

  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2
        className={`mt-3 flex flex-wrap justify-center gap-x-2 text-3xl font-bold sm:text-4xl ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${light ? "text-cream/80" : "text-charcoal/75"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
