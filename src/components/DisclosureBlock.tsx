export default function DisclosureBlock({ text }: { text: string }) {
  return (
    <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-charcoal/80">
      <span className="font-semibold text-forest">Note: </span>
      {text}
    </p>
  );
}
