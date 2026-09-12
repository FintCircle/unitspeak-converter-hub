import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/converters";

const category = categories.find((c) => c.slug === "common-converters")!;

export const Route = createFileRoute("/common-converters/")({
  head: () => ({
    meta: [
      { title: "Common Unit Converters — Length, Weight, Volume | Unitspeak" },
      {
        name: "description",
        content:
          "Everyday unit converters on Unitspeak: length, weight and mass, volume, temperature, area, pressure, energy, speed, time and more.",
      },
      {
        property: "og:title",
        content: "Common Unit Converters — Length, Weight, Volume | Unitspeak",
      },
      {
        property: "og:description",
        content:
          "The everyday measurement converters: length, weight, volume, temperature, area, pressure, energy, speed and time.",
      },
    ],
  }),
  component: CommonConverters,
});

function CommonConverters() {
  return (
    <main className="mx-auto max-w-md px-4 pb-16">
      <nav className="pt-3 pb-2 text-[11px] text-mute">
        <Link to="/" className="underline-offset-2 hover:underline">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink">Common Converters</span>
      </nav>

      <h1 className="text-[26px] leading-tight font-semibold">Common Converters</h1>
      <p className="mt-2 max-w-[44ch] text-[13px] text-steel">
        The measurements most people need day to day — distance, mass, capacity,
        temperature and the rest of the everyday quantities.
      </p>

      <ul className="mt-5 border-t border-line">
        {category.converters.map((converter) => (
          <li
            key={converter.name}
            className="flex items-baseline justify-between border-b border-line py-2"
          >
            {converter.href === "/common-converters/length-converter" ? (
              <Link
                to="/common-converters/length-converter"
                className="text-[12.5px] underline-offset-2 hover:underline"
              >
                {converter.name}
              </Link>
            ) : converter.href === "/common-converters/angle-converter" ? (
              <Link
                to="/common-converters/angle-converter"
                className="text-[12.5px] underline-offset-2 hover:underline"
              >
                {converter.name}
              </Link>
            ) : (
              <span className="text-[12.5px] text-mute">{converter.name}</span>
            )}

            <span className="shrink-0 text-[10px] tracking-[0.14em] text-mute uppercase">
              {converter.href ? "Live" : "Soon"}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
