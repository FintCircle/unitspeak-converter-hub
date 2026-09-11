import { createFileRoute } from "@tanstack/react-router";
import { lengthUnits, pairSlug } from "@/data/length";

const SITE = "https://www.unitspeak.com";

function urlEntry(path: string, priority: string): string {
  return `  <url>\n    <loc>${SITE}${path}</loc>\n    <priority>${priority}</priority>\n  </url>`;
}

function buildSitemap(): string {
  const entries: string[] = [
    urlEntry("/", "1.0"),
    urlEntry("/common-converters", "0.9"),
    urlEntry("/common-converters/length-converter", "0.9"),
    urlEntry("/about", "0.4"),
    urlEntry("/terms", "0.3"),
    urlEntry("/privacy", "0.3"),
  ];

  // Every length conversion-pair page that the unit tables link to.
  for (const from of lengthUnits) {
    for (const to of lengthUnits) {
      if (from.id === to.id) continue;
      entries.push(
        urlEntry(`/common-converters/length-converter/${pairSlug(from.id, to.id)}`, "0.6"),
      );
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
