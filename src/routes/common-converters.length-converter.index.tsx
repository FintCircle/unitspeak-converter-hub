import { createFileRoute, Link } from "@tanstack/react-router";
import { UnitConverter } from "@/components/UnitConverter";
import {
  formatFactor,
  lengthUnitById,
  lengthUnits,
  pairLabel,
  popularLengthConversions,
  unitLabel,
} from "@/data/length";

type LengthSearch = { from?: string; to?: string; amount?: string };

export const Route = createFileRoute("/common-converters/length-converter/")({
  validateSearch: (search: Record<string, unknown>): LengthSearch => {
    const raw = search as Partial<Record<keyof LengthSearch, unknown>>;
    const out: LengthSearch = {};
    const from = raw["from"] === undefined ? undefined : String(raw["from"]);
    const to = raw["to"] === undefined ? undefined : String(raw["to"]);
    const amount = raw["amount"] === undefined ? undefined : String(raw["amount"]);
    if (from && lengthUnitById.has(from)) out.from = from;
    if (to && lengthUnitById.has(to)) out.to = to;
    if (amount && /^-?\d*\.?\d+$/.test(amount)) out.amount = amount;
    return out;
  },

  head: () => ({
    meta: [
      { title: "Length Converter — Convert Meters, Feet, Inches, Miles | Unitspeak" },
      {
        name: "description",
        content:
          "Convert length and distance between 90+ units: meters, kilometers, centimeters, inches, feet, yards, miles, nautical miles, light years and more.",
      },
      {
        property: "og:title",
        content: "Length Converter — Convert Meters, Feet, Inches, Miles | Unitspeak",
      },
      {
        property: "og:description",
        content:
          "Instant length conversion with exact factors, popular conversions and a complete table of length units.",
      },
    ],
  }),
  component: LengthConverterPage,
});

function LengthConverterPage() {
  const search = Route.useSearch();
  const from = search.from ?? "meter";
  const to = search.to ?? "foot";
  const amount = search.amount ?? "1";
  const meter = lengthUnitById.get("meter")!;


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
        <span className="text-ink">Length Converter</span>
      </nav>

      <UnitConverter
        key={`${from}-${to}-${amount}`}
        title="Length Converter"
        units={lengthUnits}
        initialAmount={amount}
        initialFrom={from}
        initialTo={to}
      />

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Popular length unit conversions
        </h2>
        <div className="grid grid-cols-2 gap-x-3 border-t border-line">
          {popularLengthConversions.map(([f, t]) => (
            <Link
              key={`${f}-${t}`}
              to="/common-converters/length-converter"
              search={{ from: f, to: t, amount: "1" }}
              className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
            >
              {pairLabel(f, t)}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Complete list of length units for conversion
        </h2>
        <ul className="border-t border-line">
          {lengthUnits.map((unit) => (
            <li key={unit.id} className="border-b border-line py-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[12px]">
                  {unit.id === "meter"
                    ? unitLabel(unit)
                    : `1 ${unitLabel(unit)} = ${formatFactor(unit.factor)} meter [m]`}
                </span>
              </div>
              {unit.id !== "meter" && (
                <div className="mt-0.5 flex flex-wrap gap-x-3 text-[11px] text-ox">
                  <Link
                    to="/common-converters/length-converter"
                    search={{ from: unit.id, to: "meter", amount: "1" }}
                    className="underline-offset-2 hover:underline"
                  >
                    {unit.name} to meter
                  </Link>
                  <Link
                    to="/common-converters/length-converter"
                    search={{ from: "meter", to: unit.id, amount: "1" }}
                    className="underline-offset-2 hover:underline"
                  >
                    meter to {unit.name}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] leading-relaxed text-mute">
          All factors are expressed against the SI base unit of length, the{" "}
          {unitLabel(meter)}, defined as the distance light travels in vacuum in
          1/299,792,458 of a second.
        </p>
      </section>
    </main>
  );
}
