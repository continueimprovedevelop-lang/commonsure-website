import Link from "next/link";

export default function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href="/downloads/two-line-assessment-template.pdf"
        download
        className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-dark"
      >
        Download the Two-Line Template
      </a>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md border border-forest px-6 py-3 text-sm font-semibold text-forest transition hover:bg-forest/5"
      >
        Book a free reserve-study reading
      </Link>
    </div>
  );
}
