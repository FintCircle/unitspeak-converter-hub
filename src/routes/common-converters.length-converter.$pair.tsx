import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeftRight } from "lucide-react";
import { SharePage } from "@/components/SharePage";
import { UnitConverter } from "@/components/UnitConverter";
import {
  convertLength,
  formatResult,
  lengthUnitById,
  lengthUnits,
  pairSlug,
  pairTableAmounts,
  parsePairSlug,
  popularLengthConversions,
  unitPlural,
  unitShort,
  unitTitle,
  type Unit,
} from "@/data/length";
import { unitArticle } from "@/data/unitArticles";

type PairData = {
  from: Unit;
  to: Unit;
  /** Short heading form, e.g. "cm to in". */
  shortTitle: string;
  /** Full descriptive title used in <title> and og:title. */
  fullTitle: string;
  description: string;
  ratio: number;
  slug: string;
};

function buildPair(slug: string): PairData {
  const parsed = parsePairSlug(slug);
  if (!parsed) throw notFound();
  const from = lengthUnitById.get(parsed.from)!;
  const to = lengthUnitById.get(parsed.to)!;
  const ratio = from.factor / to.factor;
  const shortTitle = `${unitShort(from)} to ${unitShort(to)}`;
  const fullTitle = `Convert ${unitTitle(from)} to ${unitTitle(to)} (${shortTitle})`;
  return {
    from,
    to,
    shortTitle,
    fullTitle,
    ratio,
    slug: pairSlug(from.id, to.id),
    description: `1 ${from.name} = ${formatResult(ratio)} ${unitPlural(to)}. Convert ${unitPlural(from)} to ${unitPlural(to)} instantly, with the exact factor, the formula and a reference table of common values.`,
  };
}

export const Route = createFileRoute("/common-converters/length-converter/$pair")({
  loader: ({ params }) => {
    const pair = buildPair(params.pair);
    return {
      shortTitle: pair.shortTitle,
      fullTitle: pair.fullTitle,
      description: pair.description,
      slug: pair.slug,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Conversion not found | Unitspeak" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/common-converters/length-converter/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.fullTitle} | Unitspeak` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.fullTitle },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { name: "twitter:title", content: loaderData.shortTitle },
        { name: "twitter:description", content: loaderData.description },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  notFoundComponent: PairNotFound,
  component: PairPage,
});

function PairNotFound() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <h1 className="font-display text-xl font-semibold">Conversion not available</h1>
      <p className="mt-2 text-[12px] text-mute">
        That unit pair doesn't exist. Pick two units on the{" "}
        <Link
          to="/common-converters/length-converter"
          className="text-ox underline-offset-2 hover:underline"
        >
          length converter
        </Link>
        .
      </p>
    </main>
  );
}

function PairPage() {
  const { pair: slug } = Route.useParams();
  const pair = buildPair(slug);
  const { from, to, ratio } = pair;

  const related = popularLengthConversions
    .filter(([f, t]) => !(f === from.id && t === to.id))
    .filter(([f, t]) => f === from.id || t === to.id || f === to.id || t === from.id)
    .slice(0, 10);

  const allTargets = lengthUnits
    .filter((u) => u.id !== from.id)
    .sort((a, b) => a.name.localeCompare(b.name));

  const article = unitArticle(from);


  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <nav className="pt-3 pb-2 text-[11px] text-mute">
        <Link to="/" className="underline-offset-2 hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <Link to="/common-converters" className="underline-offset-2 hover:underline">
          Common Converters
        </Link>
        <span className="mx-1.5">/</span>
        <Link
          to="/common-converters/length-converter"
          className="underline-offset-2 hover:underline"
        >
          Length
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">{pair.shortTitle}</span>
      </nav>

      <UnitConverter
        key={pair.slug}
        title={pair.shortTitle}
        units={lengthUnits}
        initialAmount="1"
        initialFrom={from.id}
        initialTo={to.id}
        lockUnits
      />

      <div className="mt-2 flex justify-end">
        <SharePage title={pair.fullTitle} text={pair.description} />
      </div>


      <section className="mt-6">
        <h1 className="font-display text-[19px] leading-tight font-semibold tracking-tight">
          {pair.fullTitle}
        </h1>
        <p className="mt-2 text-[12px] leading-relaxed text-mute">{pair.description}</p>
        <div className="mt-3 border border-line bg-panel px-3 py-2 text-[12px]">
          <div className="text-[10px] tracking-[0.18em] text-mute uppercase">Formula</div>
          <div className="mt-1">
            {unitPlural(to)} = {unitPlural(from)} × {formatResult(ratio)}
          </div>
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          {pair.shortTitle} conversion table
        </h2>
        <table className="w-full table-fixed border-t border-line text-[12px]">
          <thead>
            <tr className="text-[10px] tracking-[0.14em] text-mute uppercase">
              <th className="border-b border-line py-1.5 text-left font-normal">
                {unitShort(from)}
              </th>
              <th className="border-b border-line py-1.5 text-right font-normal">
                {unitShort(to)}
              </th>
            </tr>
          </thead>
          <tbody>
            {pairTableAmounts.map((n) => (
              <tr key={n}>
                <td className="border-b border-line py-1.5 break-words">
                  {n} {unitShort(from)}
                </td>
                <td className="border-b border-line py-1.5 text-right break-all">
                  {formatResult(convertLength(n, from.id, to.id))} {unitShort(to)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">{article.heading}</h2>
        <div className="space-y-3 border-t border-line pt-3 text-[12.5px] leading-relaxed text-ink">
          {article.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Related conversions
        </h2>
        <div className="grid grid-cols-2 gap-x-3 border-t border-line">
          <Link
            to="/common-converters/length-converter/$pair"
            params={{ pair: pairSlug(to.id, from.id) }}
            className="border-b border-line py-2 text-[12px] text-ox underline-offset-2 hover:underline"
          >
            {unitShort(to)} to {unitShort(from)}
          </Link>
          {related.map(([f, t]) => (
            <Link
              key={`${f}-${t}`}
              to="/common-converters/length-converter/$pair"
              params={{ pair: pairSlug(f, t) }}
              className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
            >
              {unitShort(lengthUnitById.get(f)!)} to {unitShort(lengthUnitById.get(t)!)}
            </Link>
          ))}
        </div>
        <Link
          to="/common-converters/length-converter"
          className="mt-3 inline-block text-[11px] text-ox underline-offset-2 hover:underline"
        >
          All length units →
        </Link>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Convert {unitTitle(from)} to all length units
        </h2>
        <table className="w-full table-fixed border-t border-line text-[12px]">
          <thead>
            <tr className="text-[10px] tracking-[0.14em] text-mute uppercase">
              <th className="border-b border-line py-1.5 text-left font-normal">
                Conversion
              </th>
              <th className="border-b border-line py-1.5 text-right font-normal">
                1 {unitShort(from)} equals
              </th>
            </tr>
          </thead>
          <tbody>
            {allTargets.map((u) => (
              <tr key={u.id}>
                <td className="border-b border-line py-1.5 pr-2 break-words">
                  <Link
                    to="/common-converters/length-converter/$pair"
                    params={{ pair: pairSlug(from.id, u.id) }}
                    className="text-ox underline-offset-2 hover:underline"
                  >
                    {unitTitle(from)} to {u.name}
                  </Link>
                </td>
                <td className="border-b border-line py-1.5 text-right break-all">
                  {formatResult(convertLength(1, from.id, u.id))} {unitShort(u)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
