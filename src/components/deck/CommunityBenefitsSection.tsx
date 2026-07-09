"use client";

import { motion } from "framer-motion";
import { communityBenefits, mentorshipCallout } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import BackgroundVideo from "./BackgroundVideo";
import { CommunityIcon } from "@/components/icons";

export default function CommunityBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-forest px-4 py-20 sm:px-6">
      <div className="absolute inset-0">
        <BackgroundVideo src="/videos/aerial-community.mp4" />
        <div className="absolute inset-0 bg-forest-dark/85" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow="The impact" title="Community benefits" light />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {communityBenefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm"
            >
              <p className="font-semibold text-cream">{item.title}</p>
              <p className="mt-2 text-sm text-cream/75">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-start gap-4 rounded-xl border border-gold/30 bg-gold/10 p-6"
        >
          <CommunityIcon className="h-8 w-8 flex-none text-gold" />
          <div>
            <p className="font-semibold text-gold">{mentorshipCallout.headline}</p>
            <p className="mt-2 text-sm text-cream/85">{mentorshipCallout.body}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
