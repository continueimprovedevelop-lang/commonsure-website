"use client";

import { motion } from "framer-motion";
import { momentumSteps } from "@/content/savings";

export default function MomentumTimeline() {
  return (
    <ol className="relative space-y-10 border-l-2 border-forest/20 pl-8">
      {momentumSteps.map((step, index) => (
        <motion.li
          key={step.episode}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-forest text-xs font-semibold text-cream">
            {index + 1}
          </span>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{step.episode}</p>
          <h3 className="mt-1 text-xl font-semibold text-forest">{step.title}</h3>
          <p className="mt-2 text-sm text-charcoal/80">{step.action}</p>
          <p className="mt-2 text-sm text-charcoal/60">
            <span className="font-medium text-forest/80">Why it&rsquo;s low-friction: </span>
            {step.whyLowFriction}
          </p>
          <p className="mt-1 text-sm text-charcoal/60">
            <span className="font-medium text-forest/80">What it leads to: </span>
            {step.leadsTo}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
