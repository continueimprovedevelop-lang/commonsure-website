export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-cream-deep px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold text-forest sm:text-4xl">{title}</h1>
        {description && <p className="mt-4 text-base text-charcoal/80 sm:text-lg">{description}</p>}
      </div>
    </section>
  );
}
