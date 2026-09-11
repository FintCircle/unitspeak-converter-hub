import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Terms of Use — Unitspeak";
const description =
  "The terms for using Unitspeak: conversion results are provided for reference and convenience, without warranty for critical, legal or safety-related use.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <nav className="pt-3 pb-2 text-[11px] text-mute">
        <Link to="/" className="underline-offset-2 hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">Terms</span>
      </nav>

      <h1 className="font-display text-[22px] leading-tight font-semibold tracking-tight">
        Terms of Use
      </h1>

      <div className="mt-4 space-y-3 border-t border-line pt-4 text-[12.5px] leading-relaxed">
        <p>
          By using Unitspeak you accept these terms. If you do not agree with them, please
          do not use the site.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Use of the site</h2>
        <p>
          Unitspeak is free to use for personal, educational and commercial reference. You
          may quote or link to individual conversion pages. You may not scrape the site at
          a rate that degrades it for other people, or republish it wholesale as a
          competing copy.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Accuracy</h2>
        <p>
          Conversion factors are taken from published definitions and checked carefully,
          and results are rounded for display. Even so, the site is provided "as is",
          without warranty of any kind. Do not rely on it alone for engineering,
          medical, legal, financial or safety-critical work — verify against the relevant
          standard.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Liability</h2>
        <p>
          To the extent permitted by law, Unitspeak is not liable for any loss or damage
          arising from use of the site or reliance on its results.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Changes</h2>
        <p>
          These terms may be updated as the site grows. Questions go to{" "}
          <a
            href="mailto:fintcircle@gmail.com"
            className="text-ox underline-offset-2 hover:underline"
          >
            fintcircle@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
