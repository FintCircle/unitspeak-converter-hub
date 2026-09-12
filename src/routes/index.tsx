import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, totalConverterCount } from "@/data/converters";
import { UnitSearch } from "@/components/UnitSearch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unitspeak — Unit Converters for Every Measurement System" },
      {
        name: "description",
        content:
          "Free unit converters for length, weight, volume, temperature, pressure, energy and 80+ more quantities, with exact factors and full unit tables.",
      },
      {
        property: "og:title",
        content: "Unitspeak — Unit Converters for Every Measurement System",
      },
      {
        property: "og:description",
        content:
          "Convert between metric, imperial, SI and historic units with exact factors and complete reference tables.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <UnitSearch />

      <section className="mt-5">
        <h1 className="max-w-[16ch] text-[26px] leading-tight font-semibold text-balance">
          Measure, exactly.
        </h1>
        <p className="mt-2 max-w-[44ch] text-[13px] text-pretty text-steel">
          A reference for converting between thousands of units across the SI, metric,
          imperial and historic systems — precise figures, no fluff.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          Unit converters — full versions
        </h2>
        <p className="mb-4 text-[11px] text-mute">
          {totalConverterCount} converters, grouped by field. Length and angle are live;
          the rest arrive in the next batches.
        </p>

        {categories.map((category) => (
          <div key={category.slug} className="mt-5">
            <h3 className="border-b border-line pb-1 text-[11px] tracking-[0.18em] text-ox uppercase">
              {category.name}
            </h3>
            <div className="columns-2 gap-4 pt-1">
              {category.converters.map((converter) =>
                converter.href === "/common-converters/length-converter" ? (
                  <Link
                    key={converter.name}
                    to="/common-converters/length-converter"
                    className="block py-1.5 text-[12px] break-inside-avoid text-ink underline-offset-2 hover:underline"
                  >
                    {converter.name}
                  </Link>
                ) : converter.href === "/common-converters/angle-converter" ? (
                  <Link
                    key={converter.name}
                    to="/common-converters/angle-converter"
                    className="block py-1.5 text-[12px] break-inside-avoid text-ink underline-offset-2 hover:underline"
                  >
                    {converter.name}
                  </Link>
                ) : (
                  <span
                    key={converter.name}
                    className="block py-1.5 text-[12px] break-inside-avoid text-mute"
                  >
                    {converter.name}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}

      </section>

      <section className="mt-8 border-t border-line pt-4">
        <h2 className="mb-2 text-[12px] tracking-[0.12em] uppercase">
          How units and measurement systems work
        </h2>
        <div className="space-y-3 text-[12.5px] leading-relaxed text-steel">
          <p>
            A unit is a fixed quantity — set by tradition, trade practice or law — that
            other quantities are measured against. Saying a beam is 4 meters long means it
            is four times the length agreed on as one meter, so the number only carries
            meaning once the unit is named.
          </p>
          <p>
            Measurement grew up locally. Egyptian cubits, Roman paces, Chinese chi,
            English feet and Spanish varas were all tied to bodies, farm work or royal
            decrees, which is why a mile in one place differed from a mile a few hundred
            kilometres away. The metric system, created in revolutionary France in the
            1790s, was the first attempt at a coherent decimal alternative built on
            natural constants rather than custom.
          </p>
          <p>
            Today the global standard is the International System of Units (SI), the
            modern form of the metric system. It rests on seven base units — metre,
            kilogram, second, ampere, kelvin, mole and candela — each now defined through
            fixed physical constants such as the speed of light, so a measurement can be
            reproduced in any laboratory without a reference artefact.
          </p>
          <p>
            SI is intended for worldwide use but adoption is uneven. United States
            customary units still dominate everyday American life, the UK mixes metric
            with miles and pints, aviation measures altitude in feet, shipping uses
            nautical miles and knots, and astronomers work in light years and parsecs.
            Engineering and trade routinely require moving between these systems.
          </p>
          <p>
            Unitspeak exists to make that movement quick and dependable: convert between
            units within and across systems, see the exact factor behind every result, and
            read how each family of units relates to the SI base it is derived from.
          </p>
        </div>
      </section>
    </main>
  );
}
