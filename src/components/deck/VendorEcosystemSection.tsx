"use client";

import { motion } from "framer-motion";
import { vendorCategories, vendorPartnerSlides } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import PartnerGifCarousel from "./PartnerGifCarousel";

export default function VendorEcosystemSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The network"
          title="Vendor Partnership Ecosystem"
          description="Portfolio-scale negotiation — pricing no single community gets alone."
        />

        <div className="mt-12">
          <PartnerGifCarousel slides={vendorPartnerSlides} />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {vendorCategories.map((category, i) => (
            <motion.span
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -2, backgroundColor: "#2E4636", color: "#FAFBFA" }}
              className="cursor-default rounded-full border border-forest/20 px-5 py-2 text-sm font-medium text-forest transition-colors"
            >
              {category}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
