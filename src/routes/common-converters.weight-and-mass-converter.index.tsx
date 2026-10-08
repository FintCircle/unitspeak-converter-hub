import { createFileRoute, Link } from "@tanstack/react-router";
import { UnitConverter } from "@/components/UnitConverter";
import {
  formatWeightFactor,
  popularWeightConversions,
  weightPairLabel,
  weightPairSlug,
  weightUnitById,
  weightUnitLabel,
  weightUnits,
} from "@/data/weight";

type WeightSearch = { from?: string; to?: string; amount?: string };

export const Route = createFileRoute("/common-converters/weight-and-mass-converter/")({
  validateSearch: (search: Record<string, unknown>): WeightSearch => {
    const raw = search as Partial<Record<keyof WeightSearch, unknown>>;
    const out: WeightSearch = {};
    const from = raw["from"] === undefined ? undefined : String(raw["from"]);
    const to = raw["to"] === undefined ? undefined : String(raw["to"]);
    const amount = raw["amount"] === undefined ? undefined : String(raw["amount"]);
    if (from && weightUnitById.has(from)) out.from = from;
    if (to && weightUnitById.has(to)) out.to = to;
    if (amount && /^-?\d*\.?\d+$/.test(amount)) out.amount = amount;
    return out;
  },

  head: () => ({
    meta: [
      {
        title: "Weight and Mass Converter — Convert Kilograms, Pounds, Ounces, Grams | Unitspeak",
      },
      {
        name: "description",
        content:
          "Convert weight and mass between kilograms, grams, milligrams, pounds, ounces, tons, carats, atomic mass units and more with exact factors.",
      },
      {
        property: "og:title",
        content: "Weight and Mass Converter — Convert Kilograms, Pounds, Ounces, Grams | Unitspeak",
      },
      {
        property: "og:description",
        content:
          "Instant weight and mass unit conversion with exact factors and a complete list of weight and mass units.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/common-converters/weight-and-mass-converter",
      },
    ],
  }),
  component: WeightConverterPage,
});

function WeightConverterPage() {
  const search = Route.useSearch();
  const from = search.from ?? "kilogram";
  const to = search.to ?? "pound";
  const amount = search.amount ?? "1";
  const kilogram = weightUnitById.get("kilogram")!;

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
        <span className="text-ink">Weight and Mass Converter</span>
      </nav>

      <UnitConverter
        key={`${from}-${to}-${amount}`}
        title="Weight and Mass Converter"
        units={weightUnits}
        initialAmount={amount}
        initialFrom={from}
        initialTo={to}
      />

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Popular weight and mass unit conversions
        </h2>
        <div className="grid grid-cols-2 gap-x-3 border-t border-line">
          {popularWeightConversions.map(([f, t]) => {
            const fromUnit =
              weightUnitById.get(f) ??
              weightUnitById.get(
                f === "kg"
                  ? "kilogram"
                  : f === "lbs"
                    ? "pound"
                    : f === "g"
                      ? "gram"
                      : f === "oz"
                        ? "ounce"
                        : f === "mg"
                          ? "milligram"
                          : f,
              );
            const toUnit =
              weightUnitById.get(t) ??
              weightUnitById.get(
                t === "kg"
                  ? "kilogram"
                  : t === "lbs"
                    ? "pound"
                    : t === "g"
                      ? "gram"
                      : t === "oz"
                        ? "ounce"
                        : t === "mg"
                          ? "milligram"
                          : t,
              );
            if (!fromUnit || !toUnit) return null;
            return (
              <Link
                key={`${f}-${t}`}
                to="/common-converters/weight-and-mass-converter/$pair"
                params={{ pair: weightPairSlug(fromUnit.id, toUnit.id) }}
                className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
              >
                {weightPairLabel(fromUnit.id, toUnit.id)}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Complete list of weight and mass units for conversion
        </h2>
        <ul className="border-t border-line">
          {weightUnits.map((unit) => (
            <li key={unit.id} className="border-b border-line py-2">
              <span className="text-[12px] break-words">
                {unit.id === "kilogram"
                  ? weightUnitLabel(unit)
                  : `1 ${weightUnitLabel(unit)} = ${formatWeightFactor(unit.factor)} kilogram [kg]`}
              </span>
              {unit.id !== "kilogram" && (
                <div className="mt-0.5 flex flex-wrap gap-x-3 text-[11px] text-ox">
                  <Link
                    to="/common-converters/weight-and-mass-converter/$pair"
                    params={{ pair: weightPairSlug(unit.id, "kilogram") }}
                    className="underline-offset-2 hover:underline"
                  >
                    {unit.name} to kilogram
                  </Link>
                  <Link
                    to="/common-converters/weight-and-mass-converter/$pair"
                    params={{ pair: weightPairSlug("kilogram", unit.id) }}
                    className="underline-offset-2 hover:underline"
                  >
                    kilogram to {unit.name}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] leading-relaxed text-mute">
          All factors are expressed against the {weightUnitLabel(kilogram)}, the SI base unit of
          mass.
        </p>
      </section>
    </main>
  );
}
