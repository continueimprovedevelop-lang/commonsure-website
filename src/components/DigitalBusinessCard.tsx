"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, founder, cardBenefits } from "@/content/site";
import {
  MailIcon,
  PhoneIcon,
  CostIcon,
  ReserveIcon,
  CertaintyIcon,
  CommunityIcon,
  SustainIcon,
  ChevronDownIcon,
} from "@/components/icons";

const benefitIcons = [CostIcon, ReserveIcon, CertaintyIcon, CommunityIcon, SustainIcon];

export default function DigitalBusinessCard() {
  return (
    <section className="relative overflow-hidden bg-cream-deep px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-2xl shadow-forest/10"
        >
          <div className="flex flex-col items-center gap-2 border-b border-gold/30 px-6 py-8 text-center sm:px-10">
            <Image
              src="/images/commonsure-logo.png"
              alt="Commonsure Community Solutions"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              priority
            />
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs">
              {siteConfig.brandPromise}
            </p>
          </div>

          <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl font-bold text-forest sm:text-4xl"
              >
                {founder.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold"
              >
                {founder.title}
              </motion.p>

              <div className="mt-7 space-y-3">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="group flex items-center gap-3 rounded-lg border border-forest/10 px-4 py-3 text-sm text-charcoal transition hover:border-forest/30 hover:bg-forest/5"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-forest text-cream">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium group-hover:text-forest">{siteConfig.contactEmail}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contactPhoneHref}`}
                  className="group flex items-center gap-3 rounded-lg border border-forest/10 px-4 py-3 text-sm text-charcoal transition hover:border-forest/30 hover:bg-forest/5"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-forest text-cream">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium group-hover:text-forest">{siteConfig.contactPhone}</span>
                </a>
              </div>

              <p className="mt-6 text-sm text-charcoal/70">{siteConfig.categoryLine}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto w-full max-w-xs"
            >
              <div className="overflow-hidden rounded-2xl border-4 border-forest/10 shadow-lg">
                <Image
                  src="/images/zulma-fuller.png"
                  alt="Zulma Fuller, Founder and Principal of Commonsure Community Solutions"
                  width={480}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 rounded-xl bg-forest px-5 py-4 text-center text-cream">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">Free Consultation</p>
                <p className="mt-1 text-sm text-cream/90">
                  Let&rsquo;s discuss how we can create financial certainty for your community.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-forest/10 sm:grid-cols-5">
            {cardBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center gap-2 bg-forest px-3 py-6 text-center text-cream"
                >
                  <Icon className="h-6 w-6 text-gold" />
                  <p className="text-xs font-semibold leading-tight">{benefit.title}</p>
                  <p className="text-[11px] leading-tight text-cream/70">{benefit.sub}</p>
                </div>
              );
            })}
          </div>

          <a
            href={`tel:${siteConfig.contactPhoneHref}`}
            className="flex flex-col items-center justify-center gap-2 bg-gold px-6 py-6 text-center transition hover:bg-gold-light sm:flex-row sm:justify-between sm:gap-6 sm:px-10"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-forest-dark">
              Schedule your free 30-minute HOA cost savings consultation today
            </p>
            <span className="text-lg font-bold text-forest-dark">{siteConfig.contactPhone}</span>
          </a>
        </motion.div>

        <motion.a
          href="#platform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-wide text-forest/60"
        >
          Explore the platform
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
