import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-1 max-w-sm text-sm text-cream/80">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-2 text-sm text-cream/80 sm:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-cream/80">
            <p>Questions? Write to us:</p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-white hover:underline">
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-cream/10 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.proofLine}
        </p>
      </div>
    </footer>
  );
}
