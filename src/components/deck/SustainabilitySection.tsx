"use client";

import { sustainabilityInitiatives } from "@/content/copy";
import SectionHeading from "./SectionHeading";
import GifTile from "./GifTile";

const gifMap: Record<string, string> = {
  "Water conservation": "/gifs/garden-sprinkler.gif",
  "Native landscaping": "/gifs/planting-seeds.gif",
  "Efficient irrigation": "/gifs/irrigation.gif",
  "Recycling initiatives": "/gifs/recycling.gif",
};

export default function SustainabilitySection() {
  return (
    <section className="bg-cream-deep px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The environment" title="Environmental Sustainability" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityInitiatives.map((item) => (
            <GifTile
              key={item.title}
              src={gifMap[item.title]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
