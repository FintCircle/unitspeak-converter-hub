import type { Unit } from "./length";

export type { Unit };

/** Area units; factor is the value of 1 unit expressed in square meters. */
export const areaUnits: Unit[] = [
  { id: "square-meter", name: "square meter", symbol: "m²", factor: 1 },
  { id: "square-kilometer", name: "square kilometer", symbol: "km²", factor: 1000000 },
  { id: "square-centimeter", name: "square centimeter", symbol: "cm²", factor: 0.0001 },
  { id: "square-millimeter", name: "square millimeter", symbol: "mm²", factor: 1e-6 },
  { id: "square-micrometer", name: "square micrometer", symbol: "µm²", factor: 1e-12 },
  { id: "square-nanometer", name: "square nanometer", symbol: "nm²", factor: 1e-18 },
  { id: "square-hectometer", name: "square hectometer", symbol: "hm²", factor: 10000 },
  { id: "square-dekameter", name: "square dekameter", symbol: "dam²", factor: 100 },
  { id: "square-decimeter", name: "square decimeter", symbol: "dm²", factor: 0.01 },
  { id: "hectare", name: "hectare", symbol: "ha", factor: 10000 },
  { id: "are", name: "are", symbol: "a", factor: 100 },
  { id: "acre", name: "acre", symbol: "ac", factor: 4046.8564224 },
  { id: "acre-us-survey", name: "acre (US survey)", symbol: "ac", factor: 4046.8726098743 },
  { id: "square-mile", name: "square mile", symbol: "mi²", factor: 2589988.110336 },
  { id: "square-mile-us-survey", name: "square mile (US survey)", factor: 2589998.4703195 },
  { id: "square-yard", name: "square yard", symbol: "yd²", factor: 0.83612736 },
  { id: "square-foot", name: "square foot", symbol: "ft²", factor: 0.09290304 },
  { id: "square-foot-us-survey", name: "square foot (US survey)", factor: 0.0929034116 },
  { id: "square-inch", name: "square inch", symbol: "in²", factor: 0.00064516 },
  { id: "barn", name: "barn", symbol: "b", factor: 1e-28 },
  { id: "circular-inch", name: "circular inch", factor: 0.0005067075 },
  { id: "circular-mil", name: "circular mil", factor: 5.067074790975e-10 },
  { id: "township", name: "township", factor: 93239571.972096 },
  { id: "section", name: "section", factor: 2589988.110336 },
  { id: "rood", name: "rood", factor: 1011.7141056 },
  { id: "square-chain", name: "square chain", symbol: "ch²", factor: 404.68564224 },
  { id: "square-rod", name: "square rod", factor: 25.29285264 },
  { id: "square-rod-us-survey", name: "square rod (US survey)", factor: 25.2929538117 },
  { id: "square-perch", name: "square perch", factor: 25.29285264 },
  { id: "square-pole", name: "square pole", factor: 25.29285264 },
  { id: "square-mil", name: "square mil", symbol: "mil²", factor: 6.4516e-10 },
  { id: "homestead", name: "homestead", factor: 647497.027584 },
  { id: "sabin", name: "sabin", factor: 0.09290304 },
  { id: "arpent", name: "arpent", factor: 3418.8929236669 },
  { id: "cuerda", name: "cuerda", factor: 3930.395625 },
  { id: "plaza", name: "plaza", factor: 6400 },
  { id: "varas-castellanas-cuad", name: "varas castellanas cuad", factor: 0.698737 },
  { id: "varas-conuqueras-cuad", name: "varas conuqueras cuad", factor: 6.288633 },
  { id: "electron-cross-section", name: "Electron cross section", factor: 6.6524615999999e-29 },
];

export const areaUnitById = new Map(areaUnits.map((u) => [u.id, u]));

export function convertArea(amount: number, fromId: string, toId: string): number {
  const from = areaUnitById.get(fromId);
  const to = areaUnitById.get(toId);
  if (!from || !to) return NaN;
  return (amount * from.factor) / to.factor;
}

export const popularAreaConversions: Array<[from: string, to: string]> = [
  ["square-kilometer", "square-meter"],
  ["square-meter", "square-kilometer"],
  ["square-centimeter", "square-meter"],
  ["square-meter", "square-centimeter"],
  ["square-millimeter", "square-meter"],
  ["square-meter", "square-millimeter"],
  ["square-micrometer", "square-meter"],
  ["square-meter", "square-micrometer"],
  ["hectare", "square-meter"],
  ["square-meter", "hectare"],
  ["acre", "square-meter"],
  ["square-meter", "acre"],
  ["square-mile", "square-meter"],
  ["square-meter", "square-mile"],
  ["square-yard", "square-meter"],
  ["square-meter", "square-yard"],
  ["square-foot", "square-meter"],
  ["square-meter", "square-foot"],
  ["square-inch", "square-meter"],
  ["square-meter", "square-inch"],
  ["square-hectometer", "square-meter"],
  ["square-meter", "square-hectometer"],
  ["square-dekameter", "square-meter"],
  ["square-meter", "square-dekameter"],
  ["square-decimeter", "square-meter"],
  ["square-meter", "square-decimeter"],
  ["square-nanometer", "square-meter"],
  ["square-meter", "square-nanometer"],
  ["are", "square-meter"],
  ["square-meter", "are"],
  ["barn", "square-meter"],
  ["square-meter", "barn"],
  ["square-mile-us-survey", "square-meter"],
  ["square-meter", "square-mile-us-survey"],
  ["square-foot-us-survey", "square-meter"],
  ["square-meter", "square-foot-us-survey"],
  ["circular-inch", "square-meter"],
  ["square-meter", "circular-inch"],
  ["township", "square-meter"],
  ["square-meter", "township"],
  ["section", "square-meter"],
  ["square-meter", "section"],
  ["acre-us-survey", "square-meter"],
  ["square-meter", "acre-us-survey"],
  ["rood", "square-meter"],
  ["square-meter", "rood"],
  ["square-chain", "square-meter"],
  ["square-meter", "square-chain"],
  ["square-rod", "square-meter"],
  ["square-meter", "square-rod"],
  ["square-rod-us-survey", "square-meter"],
  ["square-meter", "square-rod-us-survey"],
  ["square-perch", "square-meter"],
  ["square-meter", "square-perch"],
  ["square-pole", "square-meter"],
  ["square-meter", "square-pole"],
  ["square-mil", "square-meter"],
  ["square-meter", "square-mil"],
  ["circular-mil", "square-meter"],
  ["square-meter", "circular-mil"],
  ["homestead", "square-meter"],
  ["square-meter", "homestead"],
  ["sabin", "square-meter"],
  ["square-meter", "sabin"],
  ["arpent", "square-meter"],
  ["square-meter", "arpent"],
  ["cuerda", "square-meter"],
  ["square-meter", "cuerda"],
  ["plaza", "square-meter"],
  ["square-meter", "plaza"],
  ["varas-castellanas-cuad", "square-meter"],
  ["square-meter", "varas-castellanas-cuad"],
  ["varas-conuqueras-cuad", "square-meter"],
  ["square-meter", "varas-conuqueras-cuad"],
  ["electron-cross-section", "square-meter"],
  ["square-meter", "electron-cross-section"],
];

/** Symbol/word aliases so short paths like "m2-to-ft2" resolve too. */
const areaAliases = (() => {
  const map = new Map<string, string>();
  for (const u of areaUnits) map.set(u.id, u.id);
  const extra: Record<string, string> = {
    m2: "square-meter",
    sqm: "square-meter",
    km2: "square-kilometer",
    cm2: "square-centimeter",
    mm2: "square-millimeter",
    um2: "square-micrometer",
    nm2: "square-nanometer",
    hm2: "square-hectometer",
    dam2: "square-dekameter",
    dm2: "square-decimeter",
    ha: "hectare",
    hectares: "hectare",
    a: "are",
    ac: "acre",
    acres: "acre",
    mi2: "square-mile",
    yd2: "square-yard",
    ft2: "square-foot",
    sqft: "square-foot",
    in2: "square-inch",
    ch2: "square-chain",
    b: "barn",
  };
  for (const [alias, id] of Object.entries(extra)) {
    if (!map.has(alias)) map.set(alias, id);
  }
  return map;
})();

export function parseAreaPairSlug(slug: string): { from: string; to: string } | null {
  const parts = slug.toLowerCase().split("-to-");
  for (let i = 1; i < parts.length; i++) {
    const from = areaAliases.get(parts.slice(0, i).join("-to-"));
    const to = areaAliases.get(parts.slice(i).join("-to-"));
    if (from && to && from !== to) return { from, to };
  }
  return null;
}

/** Compact label for tables and short titles, e.g. "m²". */
export function areaShort(unit: Unit): string {
  return unit.symbol ? unit.symbol.split(",")[0]!.trim() : unit.name;
}

/** Plain pair label, e.g. "m² to ft²". */
export function areaPairLabel(fromId: string, toId: string): string {
  const from = areaUnitById.get(fromId);
  const to = areaUnitById.get(toId);
  if (!from || !to) return "";
  return `${areaShort(from)} to ${areaShort(to)}`;
}
