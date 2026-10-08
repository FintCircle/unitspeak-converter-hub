import type { Unit } from "./length";

export type { Unit };

export const weightUnits: Unit[] = [
  { id: "kilogram", name: "kilogram", symbol: "kg", factor: 1 },
  { id: "gram", name: "gram", symbol: "g", factor: 0.001 },
  { id: "milligram", name: "milligram", symbol: "mg", factor: 1.0e-6 },
  { id: "ton-metric", name: "ton (metric)", symbol: "t", factor: 1000 },
  { id: "pound", name: "pound", symbol: "lbs", factor: 0.45359237 },
  { id: "ounce", name: "ounce", symbol: "oz", factor: 0.0283495231 },
  { id: "carat", name: "carat", symbol: "car, ct", factor: 0.0002 },
  { id: "ton-short", name: "ton (short)", symbol: "ton (US)", factor: 907.18474 },
  { id: "ton-long", name: "ton (long)", symbol: "ton (UK)", factor: 1016.0469088 },
  { id: "atomic-mass-unit", name: "Atomic mass unit", symbol: "u", factor: 1.6605402e-27 },
  { id: "exagram", name: "exagram", symbol: "Eg", factor: 1.0e15 },
  { id: "petagram", name: "petagram", symbol: "Pg", factor: 1000000000000 },
  { id: "teragram", name: "teragram", symbol: "Tg", factor: 1000000000 },
  { id: "gigagram", name: "gigagram", symbol: "Gg", factor: 1000000 },
  { id: "megagram", name: "megagram", symbol: "Mg", factor: 1000 },
  { id: "hectogram", name: "hectogram", symbol: "hg", factor: 0.1 },
  { id: "dekagram", name: "dekagram", symbol: "dag", factor: 0.01 },
  { id: "decigram", name: "decigram", symbol: "dg", factor: 0.0001 },
  { id: "centigram", name: "centigram", symbol: "cg", factor: 1.0e-5 },
  { id: "microgram", name: "microgram", symbol: "µg", factor: 1.0e-9 },
  { id: "nanogram", name: "nanogram", symbol: "ng", factor: 1.0e-12 },
  { id: "picogram", name: "picogram", symbol: "pg", factor: 1.0e-15 },
  { id: "femtogram", name: "femtogram", symbol: "fg", factor: 1.0e-18 },
  { id: "attogram", name: "attogram", symbol: "ag", factor: 1.0e-21 },
  { id: "dalton", name: "dalton", factor: 1.6605300000013e-27 },
  {
    id: "kilogram-force-sq-sec-per-meter",
    name: "kilogram-force square second/meter",
    factor: 9.80665,
  },
  { id: "kilopound", name: "kilopound", symbol: "kip", factor: 453.59237 },
  { id: "kip", name: "kip", factor: 453.59237 },
  { id: "slug", name: "slug", factor: 14.5939029372 },
  {
    id: "pound-force-sq-sec-per-foot",
    name: "pound-force square second/foot",
    factor: 14.5939029372,
  },
  { id: "pound-troy-or-apothecary", name: "pound (troy or apothecary)", factor: 0.3732417216 },
  { id: "poundal", name: "poundal", symbol: "pdl", factor: 0.0140867196 },
  { id: "ton-assay-us", name: "ton (assay) (US)", symbol: "AT (US)", factor: 0.02916667 },
  { id: "ton-assay-uk", name: "ton (assay) (UK)", symbol: "AT (UK)", factor: 0.0326666667 },
  { id: "kiloton-metric", name: "kiloton (metric)", symbol: "kt", factor: 1000000 },
  { id: "quintal-metric", name: "quintal (metric)", symbol: "cwt", factor: 100 },
  { id: "hundredweight-us", name: "hundredweight (US)", factor: 45.359237 },
  { id: "hundredweight-uk", name: "hundredweight (UK)", factor: 50.80234544 },
  { id: "quarter-us", name: "quarter (US)", symbol: "qr (US)", factor: 11.33980925 },
  { id: "quarter-uk", name: "quarter (UK)", symbol: "qr (UK)", factor: 12.70058636 },
  { id: "stone-us", name: "stone (US)", factor: 5.669904625 },
  { id: "stone-uk", name: "stone (UK)", factor: 6.35029318 },
  { id: "tonne", name: "tonne", symbol: "t", factor: 1000 },
  { id: "pennyweight", name: "pennyweight", symbol: "pwt", factor: 0.0015551738 },
  { id: "scruple-apothecary", name: "scruple (apothecary)", symbol: "s.ap", factor: 0.0012959782 },
  { id: "grain", name: "grain", symbol: "gr", factor: 6.47989e-5 },
  { id: "gamma", name: "gamma", factor: 1.0e-9 },
  { id: "talent-biblical-hebrew", name: "talent (Biblical Hebrew)", factor: 34.2 },
  { id: "mina-biblical-hebrew", name: "mina (Biblical Hebrew)", factor: 0.57 },
  { id: "shekel-biblical-hebrew", name: "shekel (Biblical Hebrew)", factor: 0.0114 },
  { id: "bekan-biblical-hebrew", name: "bekan (Biblical Hebrew)", factor: 0.0057 },
  { id: "gerah-biblical-hebrew", name: "gerah (Biblical Hebrew)", factor: 0.00057 },
  { id: "talent-biblical-greek", name: "talent (Biblical Greek)", factor: 20.4 },
  { id: "mina-biblical-greek", name: "mina (Biblical Greek)", factor: 0.34 },
  { id: "tetradrachma-biblical-greek", name: "tetradrachma (Biblical Greek)", factor: 0.0136 },
  { id: "didrachma-biblical-greek", name: "didrachma (Biblical Greek)", factor: 0.0068 },
  { id: "drachma-biblical-greek", name: "drachma (Biblical Greek)", factor: 0.0034 },
  { id: "denarius-biblical-roman", name: "denarius (Biblical Roman)", factor: 0.00385 },
  { id: "assarion-biblical-roman", name: "assarion (Biblical Roman)", factor: 0.000240625 },
  { id: "quadrans-biblical-roman", name: "quadrans (Biblical Roman)", factor: 6.01563e-5 },
  { id: "lepton-biblical-roman", name: "lepton (Biblical Roman)", factor: 3.00781e-5 },
  { id: "planck-mass", name: "Planck mass", factor: 2.17671e-8 },
  { id: "electron-mass-rest", name: "Electron mass (rest)", factor: 9.1093897e-31 },
  { id: "muon-mass", name: "Muon mass", factor: 1.8835327e-28 },
  { id: "proton-mass", name: "Proton mass", factor: 1.6726231e-27 },
  { id: "neutron-mass", name: "Neutron mass", factor: 1.6749286e-27 },
  { id: "deuteron-mass", name: "Deuteron mass", factor: 3.343586e-27 },
  { id: "earth-mass", name: "Earth's mass", factor: 5.9760000000002e24 },
  { id: "sun-mass", name: "Sun's mass", factor: 2.0e30 },
];

export const weightUnitById = new Map(weightUnits.map((u) => [u.id, u]));

export function convertWeight(amount: number, fromId: string, toId: string): number {
  const from = weightUnitById.get(fromId);
  const to = weightUnitById.get(toId);
  if (!from || !to) return NaN;
  return (amount * from.factor) / to.factor;
}

export function weightUnitLabel(unit: Unit): string {
  return unit.symbol ? `${unit.name} [${unit.symbol}]` : unit.name;
}

export function weightShort(unit: Unit): string {
  return unit.symbol ? unit.symbol.split(",")[0]!.trim() : unit.name;
}

export function weightPairLabel(fromId: string, toId: string): string {
  const from = weightUnitById.get(fromId);
  const to = weightUnitById.get(toId);
  if (!from || !to) return "";
  return `${weightShort(from)} to ${weightShort(to)}`;
}

export function formatWeightFactor(value: number): string {
  if (value !== 0 && (Math.abs(value) < 1e-4 || Math.abs(value) >= 1e13)) {
    const [mantissa, exponent] = value.toExponential().split("e");
    const m = mantissa!.includes(".") ? mantissa! : `${mantissa}.0`;
    return `${m}E${exponent}`;
  }
  return String(value);
}

export function weightPairSlug(fromId: string, toId: string): string {
  return `${fromId}-to-${toId}`;
}

const weightAliases = (() => {
  const map = new Map<string, string>();
  for (const u of weightUnits) map.set(u.id, u.id);
  const extra: Record<string, string> = {
    kg: "kilogram",
    kilograms: "kilogram",
    g: "gram",
    grams: "gram",
    mg: "milligram",
    milligrams: "milligram",
    lbs: "pound",
    lb: "pound",
    pounds: "pound",
    oz: "ounce",
    ounces: "ounce",
    t: "tonne",
    ton: "ton-short",
    tons: "ton-short",
    carat: "carat",
    carats: "carat",
    ct: "carat",
    ug: "microgram",
    ng: "nanogram",
    pg: "picogram",
    fg: "femtogram",
    ag: "attogram",
    dalton: "dalton",
    daltons: "dalton",
    grain: "grain",
    grains: "grain",
    stone: "stone-uk",
  };
  for (const [alias, id] of Object.entries(extra)) {
    if (!map.has(alias)) map.set(alias, id);
  }
  return map;
})();

export function parseWeightPairSlug(slug: string): { from: string; to: string } | null {
  const lower = slug.toLowerCase();
  const parts = lower.split("-to-");
  for (let i = 1; i < parts.length; i++) {
    const fromRaw = parts.slice(0, i).join("-to-");
    const toRaw = parts.slice(i).join("-to-");
    const from = weightAliases.get(fromRaw);
    const to = weightAliases.get(toRaw);
    if (from && to && from !== to) return { from, to };
  }
  return null;
}

export function weightTitle(unit: Unit): string {
  return unit.name.charAt(0).toUpperCase() + unit.name.slice(1);
}

export function weightPlural(unit: Unit): string {
  const irregular: Record<string, string> = {
    pound: "pounds",
    ounce: "ounces",
  };
  if (irregular[unit.id]) return irregular[unit.id]!;
  if (/(s|x|z|ch|sh)$/i.test(unit.name)) return unit.name;
  if (/[a-z]$/.test(unit.name)) return `${unit.name}s`;
  return unit.name;
}

export const popularWeightConversions: Array<[from: string, to: string]> = [
  ["kg", "lbs"],
  ["lbs", "kg"],
  ["g", "oz"],
  ["oz", "g"],
  ["g", "kg"],
  ["kg", "g"],
  ["mg", "g"],
  ["g", "mg"],
  ["pound", "ounce"],
  ["ounce", "pound"],
  ["kilogram", "ton-metric"],
  ["ton-metric", "kilogram"],
  ["pound", "ton-short"],
  ["ton-short", "pound"],
  ["carat", "gram"],
  ["gram", "carat"],
  ["stone-uk", "kg"],
  ["kg", "stone-uk"],
];

export const weightPairTableAmounts = [1, 2, 3, 5, 10, 20, 50, 100, 250, 500, 1000];
