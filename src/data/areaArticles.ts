import { formatResult, unitPlural, unitTitle } from "./length";
import { areaShort, areaUnitById, type Unit } from "./area";
import type { UnitArticle } from "./unitArticles";

/** Plain-language notes about each area unit, written for a general reader. */
const notes: Record<string, string[]> = {
  "square-meter": [
    "A square meter is the area of a square whose sides are each one meter long — about the size of a small bath towel laid flat. It is the standard metric unit of area and the one every other unit on this page is measured against.",
    "Rooms, apartments, house plots and office space are quoted in square meters in most of the world. A typical parking space is about 12 square meters, and a tennis court is around 261.",
  ],
  "square-kilometer": [
    "A square kilometer is a square one kilometer on each side: one million square meters. It is the unit used for cities, forests, lakes and countries.",
    "For a feel of scale, Central Park in New York covers about 3.4 square kilometers, and a small town might spread over ten or twenty. One square kilometer is exactly 100 hectares.",
  ],
  "square-centimeter": [
    "A square centimeter is a square one centimeter on each side — roughly the face of a small button or a fingernail. Ten thousand of them fit into one square meter.",
    "It shows up in medicine for measuring skin areas and wounds, in electronics for chip sizes, and anywhere small surfaces need a precise figure.",
  ],
  "square-millimeter": [
    "A square millimeter is a tiny square one millimeter on each side; a million of them make one square meter. It is about the size of a pinhead.",
    "Engineers and machinists use it for wire cross-sections, small components and tolerances, and biologists use it under the microscope.",
  ],
  hectare: [
    "A hectare is 10,000 square meters — a square 100 meters on each side. The name comes from \"hecto\" for one hundred and \"are\", an older metric unit of 100 square meters.",
    "It is the world's standard unit for land: farms, vineyards, forests and parks are measured in hectares almost everywhere outside the United States. One hectare is about 2.47 acres.",
  ],
  acre: [
    "An acre is the traditional English and American unit of land area, equal to 4,046.8564224 square meters. It was originally the amount of land a pair of oxen could plow in one day.",
    "Land, farms and building lots in the United States and UK are still sold by the acre. A football field, including the end zones, is about 1.3 acres, and 640 acres make a square mile.",
  ],
  "square-mile": [
    "A square mile is a square one mile on each side, about 2.59 square kilometers. It is the everyday unit for city and county areas in the United States and UK.",
    "Manhattan covers roughly 59 square kilometers, or about 23 square miles. In American surveying, a square mile of land is called a section.",
  ],
  "square-yard": [
    "A square yard is a square one yard — three feet — on each side, which works out to 0.83612736 square meters.",
    "It survives mainly in the United States for carpeting, fabric and landscaping materials, which are often priced per square yard.",
  ],
  "square-foot": [
    "A square foot is a square one foot on each side: 0.09290304 square meters, or 144 square inches.",
    "It is the standard unit of American real estate. Homes, apartments and offices in the US are advertised by their floor area in square feet, and a comfortable two-bedroom apartment might be around 900 of them.",
  ],
  "square-inch": [
    "A square inch is a square one inch on each side, just 0.00064516 square meters — about the size of a large postage stamp.",
    "It is used for small surfaces in engineering and printing, and in the US for pressure figures like pounds per square inch.",
  ],
  are: [
    "An are is 100 square meters, a square ten meters on each side. It was one of the original metric units of land, introduced in France in the 1790s.",
    "The are itself is rarely used today, but it lives on inside the hectare, which is literally one hundred ares.",
  ],
  barn: [
    "A barn is an almost absurdly small unit of area: 10⁻²⁸ square meters. Physicists invented it during the Second World War to measure the cross-section of atomic nuclei.",
    "The name is a joke — a nucleus that is easy to hit is \"as big as a barn door\". It is still the everyday unit in nuclear and particle physics.",
  ],
  township: [
    "A township is a unit from the American Public Land Survey: a square six miles on each side, covering 36 square miles — about 93.2 square kilometers.",
    "Each township was divided into 36 sections of one square mile each, and this grid still shapes farm boundaries and road layouts across the Midwest and West.",
  ],
  section: [
    "A section is one square mile of land — 640 acres, or about 2.59 square kilometers — in the American Public Land Survey system.",
    "Thirty-six sections make a township. Rural land in much of the United States is still bought, sold and described in sections, half-sections and quarter-sections.",
  ],
  rood: [
    "A rood is an old English land unit equal to a quarter of an acre, or 1,011.7141056 square meters.",
    "It appears in historical deeds and records. An acre was traditionally four roods, and a rood was forty square perches.",
  ],
  "square-chain": [
    "A square chain is the area of a square one surveyor's chain — 66 feet — on each side: 404.68564224 square meters.",
    "The chain was the surveyor's basic measuring tool, and its square fits neatly into the old land system: ten square chains make exactly one acre.",
  ],
  "circular-inch": [
    "A circular inch is the area of a circle one inch in diameter — about 0.0005067 square meters, slightly less than a square inch.",
    "Measuring round things by their diameter keeps the math simple, so the unit turns up in older engineering tables for pipes, rods and cables.",
  ],
  "circular-mil": [
    "A circular mil is the area of a circle one mil — one thousandth of an inch — in diameter: about 5.067 × 10⁻¹⁰ square meters.",
    "Electricians use it constantly because wire sizes in North America are quoted in circular mils, and the resistance of a wire follows directly from that figure.",
  ],
  homestead: [
    "A homestead is 160 acres — a quarter of a square mile, about 647,497 square meters — the standard grant of land under the American Homestead Act of 1862.",
    "Settlers who farmed and improved a homestead for five years could own it outright, which is how much of the American West was settled.",
  ],
  "electron-cross-section": [
    "The electron cross section is a physics unit describing how strongly an electron scatters radiation, about 6.652 × 10⁻²⁹ square meters.",
    "It is not a physical patch of surface but an effective target area calculated from quantum theory, and it appears throughout X-ray and gamma-ray physics.",
  ],
};

/** Informational article about the area unit being converted from. */
export function areaArticle(unit: Unit): UnitArticle {
  const paragraphs = notes[unit.id] ?? [
    `The ${unit.name.toLowerCase()} is a unit of area. One ${unit.name.toLowerCase()} equals ${formatResult(unit.factor)} square meters, and that single factor is behind every figure on this page.`,
    `${unitTitle(unit)} conversions are easiest to trust when the arithmetic is visible, so the formula and a table of common values are laid out below.`,
  ];
  const short = areaShort(unit);
  const closing = `In writing, the ${unit.name.toLowerCase()} is usually shortened to "${short}". One ${unit.name.toLowerCase()} is ${formatResult(unit.factor)} ${unitPlural(areaUnitById.get("square-meter")!)}, and that ratio is what every number on this page is built from.`;
  return {
    heading: `What is a ${unit.name.toLowerCase()}?`,
    paragraphs: short !== unit.name ? [...paragraphs, closing] : paragraphs,
  };
}
