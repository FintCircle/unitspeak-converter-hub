import { createFileRoute, Link } from "@tanstack/react-router";
import { UnitConverter } from "@/components/UnitConverter";
import {
  angleShort,
  angleUnitById,
  angleUnits,
  anglePairLabel,
  popularAngleConversions,
} from "@/data/angle";
import { formatFactor, pairSlug, unitLabel } from "@/data/length";

export const Route = createFileRoute("/common-converters/angle-converter/")({
  head: () => ({
    meta: [
      { title: "Angle Converter — Degrees, Radians, Grads, Mils | Unitspeak" },
      {
        name: "description",
        content:
          "Convert angles between degrees, radians, grads, gons, arcminutes, arcseconds, mils, revolutions, quadrants, right angles and sextants with exact factors.",
      },
      {
        property: "og:title",
        content: "Angle Converter — Degrees, Radians, Grads, Mils | Unitspeak",
      },
      {
        property: "og:description",
        content:
          "Instant angle conversion with exact factors, popular conversions and a complete table of angle units.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/common-converters/angle-converter" }],
  }),
  component: AngleConverterPage,
});

function AngleConverterPage() {
  const degree = angleUnitById.get("degree")!;

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
        <span className="text-ink">Angle Converter</span>
      </nav>

      <UnitConverter
        title="Angle Converter"
        units={angleUnits}
        initialAmount="1"
        initialFrom="radian"
        initialTo="degree"
      />

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Popular angle unit conversions
        </h2>
        <div className="grid grid-cols-2 gap-x-3 border-t border-line">
          {popularAngleConversions.map(([f, t]) => (
            <Link
              key={`${f}-${t}`}
              to="/common-converters/angle-converter/$pair"
              params={{ pair: pairSlug(f, t) }}
              className="border-b border-line py-2 text-[12px] text-ink underline-offset-2 hover:underline"
            >
              {anglePairLabel(f, t)}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Complete list of angle units for conversion
        </h2>
        <ul className="border-t border-line">
          {angleUnits.map((unit) => (
            <li key={unit.id} className="border-b border-line py-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[12px] break-words">
                  {unit.id === "degree"
                    ? unitLabel(unit)
                    : `1 ${unitLabel(unit)} = ${formatFactor(unit.factor)} degree [°]`}
                </span>
              </div>
              {unit.id !== "degree" && (
                <div className="mt-0.5 flex flex-wrap gap-x-3 text-[11px] text-ox">
                  <Link
                    to="/common-converters/angle-converter/$pair"
                    params={{ pair: pairSlug(unit.id, "degree") }}
                    className="underline-offset-2 hover:underline"
                  >
                    {unit.name} to degree
                  </Link>
                  <Link
                    to="/common-converters/angle-converter/$pair"
                    params={{ pair: pairSlug("degree", unit.id) }}
                    className="underline-offset-2 hover:underline"
                  >
                    degree to {unit.name}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] leading-relaxed text-mute">
          All factors are expressed against the {unitLabel(degree)}, one 360th of a full
          turn. The SI unit of angle is the radian ({angleShort(angleUnitById.get("radian")!)}
          ), equal to about 57.3 degrees.
        </p>
      </section>
    </main>
  );
}
