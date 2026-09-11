import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Privacy Policy — Unitspeak";
const description =
  "How Unitspeak handles data: no accounts, no conversion history stored, and conversions calculated in your browser.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <nav className="pt-3 pb-2 text-[11px] text-mute">
        <Link to="/" className="underline-offset-2 hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">Privacy</span>
      </nav>

      <h1 className="font-display text-[22px] leading-tight font-semibold tracking-tight">
        Privacy Policy
      </h1>

      <div className="mt-4 space-y-3 border-t border-line pt-4 text-[12.5px] leading-relaxed">
        <p>
          Unitspeak is built to need as little of your data as possible. There are no
          accounts, no sign-in and no profile.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">
          What we do not collect
        </h2>
        <p>
          The numbers you type are converted in your browser. They are not sent to a
          server, saved, or tied to you in any way. We do not sell or share personal
          data, because we do not gather it.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Server logs</h2>
        <p>
          Like any website, our hosting provider records basic technical request data such
          as the page requested, a timestamp, browser type and IP address. This is used to
          keep the site online and secure, and is kept only for a short period.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">
          Cookies and third parties
        </h2>
        <p>
          Unitspeak sets no advertising or tracking cookies. Web fonts are loaded from
          Google Fonts, so your browser makes a request to Google when a page loads. If
          measurement or advertising is added later, this page will be updated first.
        </p>
        <h2 className="pt-2 text-[12px] tracking-[0.12em] uppercase">Contact</h2>
        <p>
          Privacy questions or requests go to{" "}
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
