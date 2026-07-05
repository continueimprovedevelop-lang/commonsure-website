"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [community, setCommunity] = useState("");
  const [state, setState] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Reserve-study reading request — ${community || "Community"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Community name: ${community}`,
      `State: ${state}`,
      "",
      "I'd like to book a free reserve-study reading session.",
    ].join("\n");

    const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>

      <div>
        <label htmlFor="community" className="block text-sm font-medium text-charcoal">
          Community name
        </label>
        <input
          id="community"
          required
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>

      <div>
        <label htmlFor="state" className="block text-sm font-medium text-charcoal">
          State
        </label>
        <input
          id="state"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-dark"
      >
        Send to Commonsure
      </button>
      <p className="text-center text-xs text-charcoal/60">
        This opens your email app addressed to {siteConfig.contactEmail}. Submitting starts a reserve-study
        reading session — not a sales call.
      </p>
    </form>
  );
}
