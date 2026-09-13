import { createFileRoute, Link } from "@tanstack/react-router";
import { UnitConverter } from "@/components/UnitConverter";
import {
  areaShort,
  areaUnitById,
  areaUnits,
  areaPairLabel,
  popularAreaConversions,
} from "@/data/area";
import { formatFactor, pairSlug, unitLabel } from "@/data/length";

export const Route = createFileRoute("/common-converters/area-converter/")({
  head: () => ({
    meta: [
      { title: "Area Converter — Square Meters, Acres, Hectares | Unitspeak" },
      {
        name: "description",
        content:
          "Convert area between square meters, square kilometers, hectares, acres, square feet, square yards, square miles and many more units with exact factors.",
      },
      {
        property: "og:title",
        content: "Area Converter — Square Meters, Acres, Hectares | Unitspeak",
      },
      {
        property: "og:description",
        content:
          "Instant area conversion with exact factors, popular conversions and a complete table of area units.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/common-converters/area-converter" }],
  }),
  component: AreaConverterPage,
});

function AreaConverterPage() {
  const base = areaUnitById.get("square-meter")!;

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
        <span className="text-ink">Area Converter</span>
      </nav>

      <UnitConverter
        title="Area Converter"
        units={areaUnits}
        initialAmount="1"
        initialFrom="acre"
        initialTo="square-meter"
      />

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Popular area unit conversions
        </h2>
        <div className="grid grid-cols-2 gap-x-3 border-t border-line">
          {popularAreaConversions.map(([f, t]) => (
            <Link
              key={`${f}-${t}`}
              to="/common-converters/area-converter/$pair"
              params={{ pair: pairSlug(f, t) }}
              className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
            >
              {areaPairLabel(f, t)}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Complete list of area units for conversion
        </h2>
        <ul className="border-t border-line">
          {areaUnits.map((unit) => (
            <li key={unit.id} className="border-b border-line py-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[12px] break-words">
                  {unit.id === "square-meter"
                    ? unitLabel(unit)
                    : `1 ${unitLabel(unit)} = ${formatFactor(unit.factor)} square meter [m²]`}
                </span>
              </div>
              {unit.id !== "square-meter" && (
                <div className="mt-0.5 flex flex-wrap gap-x-3 text-[11px] text-ox">
                  <Link
                    to="/common-converters/area-converter/$pair"
                    params={{ pair: pairSlug(unit.id, "square-meter") }}
                    className="underline-offset-2 hover:underline"
                  >
                    {unit.name} to square meter
                  </Link>
                  <Link
                    to="/common-converters/area-converter/$pair"
                    params={{ pair: pairSlug("square-meter", unit.id) }}
                    className="underline-offset-2 hover:underline"
                  >
                    square meter to {unit.name}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] leading-relaxed text-mute">
          All factors are expressed against the {unitLabel(base)}, the SI derived unit of
          area — the area of a square one meter on each side. Land units like the hectare
          ({areaShort(areaUnitById.get("hectare")!)}) and acre ({areaShort(areaUnitById.get("acre")!)}
          ) are built on top of it.
        </p>
      </section>
    </main>
  );
}
