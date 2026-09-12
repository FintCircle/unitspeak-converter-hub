import type { Unit } from "./length";

export type { Unit };

/** Angle units; factor is the value of 1 unit expressed in degrees. */
export const angleUnits: Unit[] = [
  { id: "degree", name: "degree", symbol: "°", factor: 1 },
  { id: "radian", name: "radian", symbol: "rad", factor: 57.2957795131 },
  { id: "grad", name: "grad", symbol: "^g", factor: 0.9 },
  { id: "minute", name: "minute", symbol: "'", factor: 0.0166666667 },
  { id: "second", name: "second", symbol: '"', factor: 0.0002777778 },
  { id: "gon", name: "gon", factor: 0.9 },
  { id: "sign", name: "sign", factor: 30 },
  { id: "mil", name: "mil", factor: 0.05625 },
  { id: "revolution", name: "revolution", symbol: "r", factor: 360 },
  { id: "circle", name: "circle", factor: 360 },
  { id: "turn", name: "turn", factor: 360 },
  { id: "quadrant", name: "quadrant", factor: 90 },
  { id: "right-angle", name: "right angle", factor: 90 },
  { id: "sextant", name: "sextant", factor: 60 },
];

export const angleUnitById = new Map(angleUnits.map((u) => [u.id, u]));

export function convertAngle(amount: number, fromId: string, toId: string): number {
  const from = angleUnitById.get(fromId);
  const to = angleUnitById.get(toId);
  if (!from || !to) return NaN;
  return (amount * from.factor) / to.factor;
}

export const popularAngleConversions: Array<[from: string, to: string]> = [
  ["radian", "degree"],
  ["degree", "radian"],
  ["grad", "degree"],
  ["degree", "grad"],
  ["minute", "degree"],
  ["degree", "minute"],
  ["second", "degree"],
  ["degree", "second"],
  ["gon", "degree"],
  ["degree", "gon"],
  ["sign", "degree"],
  ["degree", "sign"],
  ["mil", "degree"],
  ["degree", "mil"],
  ["revolution", "degree"],
  ["degree", "revolution"],
  ["circle", "degree"],
  ["degree", "circle"],
  ["turn", "degree"],
  ["degree", "turn"],
  ["quadrant", "degree"],
  ["degree", "quadrant"],
  ["right-angle", "degree"],
  ["degree", "right-angle"],
  ["sextant", "degree"],
  ["degree", "sextant"],
];

/** Symbol/word aliases so short paths like "rad-to-deg" resolve too. */
const angleAliases = (() => {
  const map = new Map<string, string>();
  for (const u of angleUnits) map.set(u.id, u.id);
  const extra: Record<string, string> = {
    deg: "degree",
    degrees: "degree",
    rad: "radian",
    radians: "radian",
    gradian: "grad",
    gradians: "grad",
    arcminute: "minute",
    arcmin: "minute",
    arcsecond: "second",
    arcsec: "second",
    rev: "revolution",
    r: "revolution",
    "right-angles": "right-angle",
  };
  for (const [alias, id] of Object.entries(extra)) {
    if (!map.has(alias)) map.set(alias, id);
  }
  return map;
})();

export function parseAnglePairSlug(slug: string): { from: string; to: string } | null {
  const parts = slug.toLowerCase().split("-to-");
  for (let i = 1; i < parts.length; i++) {
    const from = angleAliases.get(parts.slice(0, i).join("-to-"));
    const to = angleAliases.get(parts.slice(i).join("-to-"));
    if (from && to && from !== to) return { from, to };
  }
  return null;
}

/** Compact label for tables; punctuation symbols read badly on their own. */
export function angleShort(unit: Unit): string {
  if (unit.id === "minute") return "arcmin";
  if (unit.id === "second") return "arcsec";
  if (unit.id === "grad") return "grad";
  return unit.symbol ? unit.symbol.split(",")[0]!.trim() : unit.name;
}

/** Plain pair label, e.g. "rad to °". */
export function anglePairLabel(fromId: string, toId: string): string {
  const from = angleUnitById.get(fromId);
  const to = angleUnitById.get(toId);
  if (!from || !to) return "";
  return `${angleShort(from)} to ${angleShort(to)}`;
}
