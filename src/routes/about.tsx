import { createFileRoute, Link } from "@tanstack/react-router";

const title = "About Unitspeak — Exact Unit Conversion Reference";
const description =
  "Unitspeak is a free unit conversion reference built on exact, published conversion factors, with a page for every unit pair and a plain-English explanation of each unit.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${title} | Unitspeak` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <nav className="pt-3 pb-2 text-[11px] text-mute">
        <Link to="/" className="underline-offset-2 hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">About</span>
      </nav>

      <h1 className="font-display text-[22px] leading-tight font-semibold tracking-tight">
        About Unitspeak
      </h1>

      <div className="mt-4 space-y-3 border-t border-line pt-4 text-[12.5px] leading-relaxed">
        <p>
          Unitspeak is a unit conversion reference. It converts between metric, imperial,
          scientific and historic units using exact, published conversion factors — the
          same values used in standards documents, not rounded shortcuts.
        </p>
        <p>
          Every conversion has its own page with the factor, the formula, a table of
          common values and a short explanation of where the unit comes from and who
          still uses it. Pages load as ordinary web pages, so any conversion can be
          bookmarked or shared as a link.
        </p>
        <p>
          The site is built converter by converter. Length is live; engineering, heat,
          fluid, light, electricity, magnetism and radiology converters follow in later
          batches.
        </p>
        <p>
          Found a wrong factor, a missing unit or a broken page? Email{" "}
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
