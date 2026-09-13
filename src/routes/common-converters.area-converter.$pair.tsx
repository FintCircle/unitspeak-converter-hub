import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeftRight } from "lucide-react";
import { SharePage } from "@/components/SharePage";
import { UnitConverter } from "@/components/UnitConverter";
import {
  areaShort,
  areaUnitById,
  areaUnits,
  convertArea,
  parseAreaPairSlug,
  popularAreaConversions,
} from "@/data/area";
import {
  formatResult,
  pairSlug,
  pairTableAmounts,
  unitPlural,
  unitTitle,
  type Unit,
} from "@/data/length";
import { areaArticle } from "@/data/areaArticles";

type PairData = {
  from: Unit;
  to: Unit;
  shortTitle: string;
  fullTitle: string;
  description: string;
  ratio: number;
  slug: string;
};

function buildPair(slug: string): PairData {
  const parsed = parseAreaPairSlug(slug);
  if (!parsed) throw notFound();
  const from = areaUnitById.get(parsed.from)!;
  const to = areaUnitById.get(parsed.to)!;
  const ratio = from.factor / to.factor;
  const shortTitle = `${areaShort(from)} to ${areaShort(to)}`;
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

export const Route = createFileRoute("/common-converters/area-converter/$pair")({
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
    const path = `/common-converters/area-converter/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.fullTitle} | Unitspeak` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.fullTitle },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary" },
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
          to="/common-converters/area-converter"
          className="text-ox underline-offset-2 hover:underline"
        >
          area converter
        </Link>
        .
      </p>
    </main>
  );
}

function PairPage() {
  const { pair: slug } = Route.useParams();
  const navigate = useNavigate();
  const pair = buildPair(slug);
  const { from, to, ratio } = pair;

  const related = popularAreaConversions
    .filter(([f, t]) => !(f === from.id && t === to.id))
    .filter(([f, t]) => f === from.id || t === to.id || f === to.id || t === from.id)
    .slice(0, 10);

  const allTargets = areaUnits
    .filter((u) => u.id !== from.id)
    .sort((a, b) => a.name.localeCompare(b.name));

  const article = areaArticle(from);

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
          to="/common-converters/area-converter"
          className="underline-offset-2 hover:underline"
        >
          Area
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">{pair.shortTitle}</span>
      </nav>

      <UnitConverter
        key={pair.slug}
        title={pair.shortTitle}
        units={areaUnits}
        initialAmount="1"
        initialFrom={from.id}
        initialTo={to.id}
        lockUnits
      />

      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label={`Swap to ${areaShort(to)} to ${areaShort(from)}`}
          title={`Swap to ${areaShort(to)} to ${areaShort(from)}`}
          onClick={() =>
            navigate({
              to: "/common-converters/area-converter/$pair",
              params: { pair: pairSlug(to.id, from.id) },
            })
          }
          className="inline-flex items-center gap-1.5 border border-line bg-panel px-2 py-1 text-[10px] tracking-[0.14em] text-mute uppercase hover:border-ox hover:text-ox"
        >
          <ArrowLeftRight size={12} />
          Swap
        </button>
        <SharePage title={pair.fullTitle} text={pair.description} />
      </div>

      <section className="mt-6">
        <h1 className="font-display text-[19px] leading-tight font-semibold tracking-tight">
          {pair.fullTitle}
        </h1>
        <p className="mt-2 text-[12px] leading-relaxed text-mute">{pair.description}</p>
        <div className="mt-3 border border-line bg-panel px-3 py-2 text-[12px]">
          <div className="text-[10px] tracking-[0.18em] text-mute uppercase">Formula</div>
          <div className="mt-1 break-words">
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
                {areaShort(from)}
              </th>
              <th className="border-b border-line py-1.5 text-right font-normal">
                {areaShort(to)}
              </th>
            </tr>
          </thead>
          <tbody>
            {pairTableAmounts.map((n) => (
              <tr key={n}>
                <td className="border-b border-line py-1.5 break-words">
                  {n} {areaShort(from)}
                </td>
                <td className="border-b border-line py-1.5 text-right break-all">
                  {formatResult(convertArea(n, from.id, to.id))} {areaShort(to)}
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
            to="/common-converters/area-converter/$pair"
            params={{ pair: pairSlug(to.id, from.id) }}
            className="border-b border-line py-2 text-[12px] text-ox underline-offset-2 hover:underline"
          >
            {areaShort(to)} to {areaShort(from)}
          </Link>
          {related.map(([f, t]) => (
            <Link
              key={`${f}-${t}`}
              to="/common-converters/area-converter/$pair"
              params={{ pair: pairSlug(f, t) }}
              className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
            >
              {areaShort(areaUnitById.get(f)!)} to {areaShort(areaUnitById.get(t)!)}
            </Link>
          ))}
        </div>
        <Link
          to="/common-converters/area-converter"
          className="mt-3 inline-block text-[11px] text-ox underline-offset-2 hover:underline"
        >
          All area units →
        </Link>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Convert {unitTitle(from)} to all area units
        </h2>
        <table className="w-full table-fixed border-t border-line text-[12px]">
          <thead>
            <tr className="text-[10px] tracking-[0.14em] text-mute uppercase">
              <th className="border-b border-line py-1.5 text-left font-normal">
                Conversion
              </th>
              <th className="border-b border-line py-1.5 text-right font-normal">
                1 {areaShort(from)} equals
              </th>
            </tr>
          </thead>
          <tbody>
            {allTargets.map((u) => (
              <tr key={u.id}>
                <td className="border-b border-line py-1.5 pr-2 break-words">
                  <Link
                    to="/common-converters/area-converter/$pair"
                    params={{ pair: pairSlug(from.id, u.id) }}
                    className="text-ox underline-offset-2 hover:underline"
                  >
                    {unitTitle(from)} to {u.name}
                  </Link>
                </td>
                <td className="border-b border-line py-1.5 text-right break-all">
                  {formatResult(convertArea(1, from.id, u.id))} {areaShort(u)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
