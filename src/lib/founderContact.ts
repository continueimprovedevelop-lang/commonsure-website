import { founder, siteConfig } from "@/content/site";

/** Escape special characters per vCard 3.0. */
function escapeVCard(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

/** Build a vCard 3.0 string for the founder (importable on iOS, Android, Outlook). */
export function buildFounderVCard(): string {
  const [firstName, ...rest] = founder.name.split(" ");
  const lastName = rest.join(" ") || firstName;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCard(founder.name)}`,
    `N:${escapeVCard(lastName)};${escapeVCard(firstName)};;;`,
    `TITLE:${escapeVCard(founder.title)}`,
    `ORG:${escapeVCard(siteConfig.name)}`,
    `EMAIL;TYPE=INTERNET:${siteConfig.contactEmail}`,
    `TEL;TYPE=CELL,VOICE:${siteConfig.contactPhoneHref}`,
    `URL:${siteConfig.url}`,
    `NOTE:${escapeVCard(siteConfig.categoryLine)}`,
    "END:VCARD",
  ];

  return `${lines.join("\r\n")}\r\n`;
}

/** Trigger a download of the founder vCard for saving to a phone or address book. */
export function downloadFounderContact(): void {
  const vcard = buildFounderVCard();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "zulma-fuller.vcf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
