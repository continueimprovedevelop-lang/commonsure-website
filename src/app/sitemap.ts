import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/five-year-certainty",
    "/savings",
    "/about",
    "/resources",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
