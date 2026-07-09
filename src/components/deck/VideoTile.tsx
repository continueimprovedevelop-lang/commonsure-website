"use client";

import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";

export default function VideoTile({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-forest/10 shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <BackgroundVideo src={src} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs text-cream/80">{description}</p>
      </div>
    </motion.div>
  );
}
