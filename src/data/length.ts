export type Unit = {
  /** URL-safe identifier used in search params. */
  id: string;
  name: string;
  symbol?: string;
  /** Value of 1 unit expressed in meters. */
  factor: number;
};

export const lengthUnits: Unit[] = [
  { id: "meter", name: "meter", symbol: "m", factor: 1 },
  { id: "kilometer", name: "kilometer", symbol: "km", factor: 1000 },
  { id: "decimeter", name: "decimeter", symbol: "dm", factor: 0.1 },
  { id: "centimeter", name: "centimeter", symbol: "cm", factor: 0.01 },
  { id: "millimeter", name: "millimeter", symbol: "mm", factor: 0.001 },
  { id: "micrometer", name: "micrometer", symbol: "µm", factor: 1.0e-6 },
  { id: "nanometer", name: "nanometer", symbol: "nm", factor: 1.0e-9 },
  { id: "mile", name: "mile", symbol: "mi, mi(Int)", factor: 1609.344 },
  { id: "yard", name: "yard", symbol: "yd", factor: 0.9144 },
  { id: "foot", name: "foot", symbol: "ft", factor: 0.3048 },
  { id: "inch", name: "inch", symbol: "in", factor: 0.0254 },
  { id: "light-year", name: "light year", symbol: "ly", factor: 9.46073047258e15 },
  { id: "exameter", name: "exameter", symbol: "Em", factor: 1.0e18 },
  { id: "petameter", name: "petameter", symbol: "Pm", factor: 1.0e15 },
  { id: "terameter", name: "terameter", symbol: "Tm", factor: 1.0e12 },
  { id: "gigameter", name: "gigameter", symbol: "Gm", factor: 1.0e9 },
  { id: "megameter", name: "megameter", symbol: "Mm", factor: 1.0e6 },
  { id: "hectometer", name: "hectometer", symbol: "hm", factor: 100 },
  { id: "dekameter", name: "dekameter", symbol: "dam", factor: 10 },
  { id: "micron", name: "micron", symbol: "µ", factor: 1.0e-6 },
  { id: "picometer", name: "picometer", symbol: "pm", factor: 1.0e-12 },
  { id: "femtometer", name: "femtometer", symbol: "fm", factor: 1.0e-15 },
  { id: "attometer", name: "attometer", symbol: "am", factor: 1.0e-18 },
  { id: "megaparsec", name: "megaparsec", symbol: "Mpc", factor: 3.08567758128e22 },
  { id: "kiloparsec", name: "kiloparsec", symbol: "kpc", factor: 3.08567758128e19 },
  { id: "parsec", name: "parsec", symbol: "pc", factor: 3.08567758128e16 },
  {
    id: "astronomical-unit",
    name: "astronomical unit",
    symbol: "AU, UA",
    factor: 149597870691,
  },
  { id: "league", name: "league", symbol: "lea", factor: 4828.032 },
  { id: "nautical-league-uk", name: "nautical league (UK)", factor: 5559.552 },
  { id: "nautical-league-int", name: "nautical league (int.)", factor: 5556 },
  {
    id: "league-statute",
    name: "league (statute)",
    symbol: "st.league",
    factor: 4828.0416560833,
  },
  {
    id: "nautical-mile-uk",
    name: "nautical mile (UK)",
    symbol: "NM (UK)",
    factor: 1853.184,
  },
  {
    id: "nautical-mile-international",
    name: "nautical mile (international)",
    factor: 1852,
  },
  {
    id: "mile-statute",
    name: "mile (statute)",
    symbol: "mi, mi (US)",
    factor: 1609.3472186944,
  },
  {
    id: "mile-us-survey",
    name: "mile (US survey)",
    symbol: "mi",
    factor: 1609.3472186944,
  },
  { id: "mile-roman", name: "mile (Roman)", factor: 1479.804 },
  { id: "kiloyard", name: "kiloyard", symbol: "kyd", factor: 914.4 },
  { id: "furlong", name: "furlong", symbol: "fur", factor: 201.168 },
  {
    id: "furlong-us-survey",
    name: "furlong (US survey)",
    symbol: "fur",
    factor: 201.1684023368,
  },
  { id: "chain", name: "chain", symbol: "ch", factor: 20.1168 },
  {
    id: "chain-us-survey",
    name: "chain (US survey)",
    symbol: "ch",
    factor: 20.1168402337,
  },
  { id: "rope", name: "rope", factor: 6.096 },
  { id: "rod", name: "rod", symbol: "rd", factor: 5.0292 },
  { id: "rod-us-survey", name: "rod (US survey)", symbol: "rd", factor: 5.0292100584 },
  { id: "perch", name: "perch", factor: 5.0292 },
  { id: "pole", name: "pole", factor: 5.0292 },
  { id: "fathom", name: "fathom", symbol: "fath", factor: 1.8288 },
  {
    id: "fathom-us-survey",
    name: "fathom (US survey)",
    symbol: "fath",
    factor: 1.8288036576,
  },
  { id: "ell", name: "ell", factor: 1.143 },
  {
    id: "foot-us-survey",
    name: "foot (US survey)",
    symbol: "ft",
    factor: 0.3048006096,
  },
  { id: "link", name: "link", symbol: "li", factor: 0.201168 },
  {
    id: "link-us-survey",
    name: "link (US survey)",
    symbol: "li",
    factor: 0.2011684023,
  },
  { id: "cubit-uk", name: "cubit (UK)", factor: 0.4572 },
  { id: "hand", name: "hand", factor: 0.1016 },
  { id: "span-cloth", name: "span (cloth)", factor: 0.2286 },
  { id: "finger-cloth", name: "finger (cloth)", factor: 0.1143 },
  { id: "nail-cloth", name: "nail (cloth)", factor: 0.05715 },
  {
    id: "inch-us-survey",
    name: "inch (US survey)",
    symbol: "in",
    factor: 0.0254000508,
  },
  { id: "barleycorn", name: "barleycorn", factor: 0.0084666667 },
  { id: "mil", name: "mil", symbol: "mil, thou", factor: 2.54e-5 },
  { id: "microinch", name: "microinch", factor: 2.54e-8 },
  { id: "angstrom", name: "angstrom", symbol: "A", factor: 1.0e-10 },
  {
    id: "au-of-length",
    name: "a.u. of length",
    symbol: "a.u., b",
    factor: 5.2917724900001e-11,
  },
  { id: "x-unit", name: "X-unit", symbol: "X", factor: 1.00208e-13 },
  { id: "fermi", name: "fermi", symbol: "F, f", factor: 1.0e-15 },
  { id: "arpent", name: "arpent", factor: 58.5216 },
  { id: "pica", name: "pica", factor: 0.0042333333 },
  { id: "point", name: "point", factor: 0.0003527778 },
  { id: "twip", name: "twip", factor: 1.76389e-5 },
  { id: "aln", name: "aln", factor: 0.5937777778 },
  { id: "famn", name: "famn", factor: 1.7813333333 },
  { id: "caliber", name: "caliber", symbol: "cl", factor: 0.000254 },
  { id: "centiinch", name: "centiinch", symbol: "cin", factor: 0.000254 },
  { id: "ken", name: "ken", factor: 2.11836 },
  { id: "russian-archin", name: "Russian archin", factor: 0.7112 },
  { id: "roman-actus", name: "Roman actus", factor: 35.47872 },
  { id: "vara-de-tarea", name: "vara de tarea", factor: 2.505456 },
  { id: "vara-conuquera", name: "vara conuquera", factor: 2.505456 },
  { id: "vara-castellana", name: "vara castellana", factor: 0.835152 },
  { id: "cubit-greek", name: "cubit (Greek)", factor: 0.462788 },
  { id: "long-reed", name: "long reed", factor: 3.2004 },
  { id: "reed", name: "reed", factor: 2.7432 },
  { id: "long-cubit", name: "long cubit", factor: 0.5334 },
  { id: "handbreadth", name: "handbreadth", factor: 0.0762 },
  { id: "fingerbreadth", name: "fingerbreadth", factor: 0.01905 },
  { id: "planck-length", name: "Planck length", factor: 1.61605e-35 },
  {
    id: "electron-radius",
    name: "Electron radius (classical)",
    factor: 2.81794092e-15,
  },
  {
    id: "bohr-radius",
    name: "Bohr radius",
    symbol: "b, a.u.",
    factor: 5.2917724900001e-11,
  },
  { id: "earth-equatorial-radius", name: "Earth's equatorial radius", factor: 6378160 },
  { id: "earth-polar-radius", name: "Earth's polar radius", factor: 6356776.9999999 },
  {
    id: "earth-distance-from-sun",
    name: "Earth's distance from sun",
    factor: 149600000000,
  },
  { id: "sun-radius", name: "Sun's radius", factor: 696000000 },
];

export const lengthUnitById = new Map(lengthUnits.map((u) => [u.id, u]));

export function unitLabel(unit: Unit): string {
  return unit.symbol ? `${unit.name} [${unit.symbol}]` : unit.name;
}

/** Short label used in compact result lines. */
export function unitShort(unit: Unit): string {
  return unit.symbol ? unit.symbol.split(",")[0]!.trim() : unit.name;
}

export const popularLengthConversions: Array<[from: string, to: string]> = [
  ["centimeter", "inch"],
  ["inch", "centimeter"],
  ["millimeter", "inch"],
  ["inch", "millimeter"],
  ["meter", "foot"],
  ["foot", "meter"],
  ["kilometer", "mile"],
  ["mile", "kilometer"],
  ["centimeter", "foot"],
  ["foot", "centimeter"],
  ["inch", "foot"],
  ["foot", "inch"],
  ["meter", "yard"],
  ["yard", "meter"],
  ["millimeter", "centimeter"],
  ["centimeter", "millimeter"],
  ["centimeter", "meter"],
  ["meter", "centimeter"],
  ["centimeter", "kilometer"],
  ["kilometer", "centimeter"],
  ["millimeter", "foot"],
  ["foot", "millimeter"],
  ["meter", "mile"],
  ["mile", "meter"],
  ["foot", "mile"],
  ["mile", "foot"],
  ["yard", "foot"],
  ["foot", "yard"],
  ["inch", "meter"],
  ["meter", "inch"],
  ["millimeter", "meter"],
  ["meter", "millimeter"],
  ["kilometer", "meter"],
  ["meter", "kilometer"],
  ["inch", "yard"],
  ["yard", "inch"],
  ["yard", "mile"],
  ["mile", "yard"],
];

/** Plain-English pair label, e.g. "cm to inches". */
export function pairLabel(fromId: string, toId: string): string {
  const from = lengthUnitById.get(fromId);
  const to = lengthUnitById.get(toId);
  if (!from || !to) return "";
  return `${unitShort(from)} to ${unitShort(to)}`;
}

/** Formats a factor the way engineering reference tables do. */
export function formatFactor(value: number): string {
  if (value !== 0 && (Math.abs(value) < 1e-4 || Math.abs(value) >= 1e13)) {
    const [mantissa, exponent] = value.toExponential().split("e");
    const m = mantissa!.includes(".") ? mantissa! : `${mantissa}.0`;
    return `${m}E${exponent}`;
  }
  return String(value);
}


export function convertLength(amount: number, fromId: string, toId: string): number {
  const from = lengthUnitById.get(fromId);
  const to = lengthUnitById.get(toId);
  if (!from || !to) return NaN;
  return (amount * from.factor) / to.factor;
}

/** Result display: keeps precision without a wall of digits. */
export function formatResult(value: number): string {
  if (!isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e12 || abs < 1e-6) return value.toExponential(6);
  const rounded = Number(value.toPrecision(10));
  return String(rounded);
}

/** Canonical URL slug for a unit inside a conversion-pair path. */
export function unitSlug(unit: Unit): string {
  return unit.id;
}

/** Canonical conversion-pair slug, e.g. "kilometer-to-meter". */
export function pairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

/** Symbol aliases so short paths like "km-to-m" resolve too. */
const unitAliases = (() => {
  const map = new Map<string, string>();
  for (const u of lengthUnits) map.set(u.id, u.id);
  for (const u of lengthUnits) {
    if (!u.symbol) continue;
    for (const raw of u.symbol.split(",")) {
      const alias = raw
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      if (alias && !map.has(alias)) map.set(alias, u.id);
    }
  }
  return map;
})();

/** Parses a pair slug into unit ids, or null when it doesn't resolve. */
export function parsePairSlug(slug: string): { from: string; to: string } | null {
  const lower = slug.toLowerCase();
  const parts = lower.split("-to-");
  for (let i = 1; i < parts.length; i++) {
    const fromRaw = parts.slice(0, i).join("-to-");
    const toRaw = parts.slice(i).join("-to-");
    const from = unitAliases.get(fromRaw);
    const to = unitAliases.get(toRaw);
    if (from && to && from !== to) return { from, to };
  }
  return null;
}

/** Title-cased unit name for headings, e.g. "Kilometer". */
export function unitTitle(unit: Unit): string {
  return unit.name.charAt(0).toUpperCase() + unit.name.slice(1);
}

/** Plural-ish unit name for prose, e.g. "inches", "feet". */
export function unitPlural(unit: Unit): string {
  const irregular: Record<string, string> = {
    foot: "feet",
    inch: "inches",
    "inch-us-survey": "inches (US survey)",
    "foot-us-survey": "feet (US survey)",
  };
  if (irregular[unit.id]) return irregular[unit.id]!;
  if (/[a-z]$/.test(unit.name)) return `${unit.name}s`;
  return unit.name;
}

/** Common amounts used in the pair-page reference table. */
export const pairTableAmounts = [1, 2, 3, 5, 10, 20, 50, 100, 250, 500, 1000];
