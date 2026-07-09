"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundGif from "./BackgroundGif";

export type PartnerSlide = {
  category: string;
  description: string;
  src: string;
};

const INTERVAL_MS = 4000;

export default function PartnerGifCarousel({ slides }: { slides: PartnerSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const active = slides[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-forest/10 shadow-lg">
      <div className="aspect-[16/9] sm:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <BackgroundGif src={active.src} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl font-semibold sm:text-2xl">{active.category}</p>
            <p className="mt-2 max-w-2xl text-sm text-cream/85 sm:text-base">{active.description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.category}
              type="button"
              aria-label={`Show ${slide.category}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
