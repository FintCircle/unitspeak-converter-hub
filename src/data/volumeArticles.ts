import { formatVolumeFactor, volumeShort, volumeTitle, type Unit } from "./volume";
import type { UnitArticle } from "./unitArticles";

const notes: Record<string, string[]> = {
  "cubic-meter": [
    "A cubic meter is the volume of a cube measuring one meter on every side. It is the SI unit of volume and contains 1,000 liters.",
    "A household refrigerator is roughly one cubic meter inside, making it a useful scale for water tanks, rooms, freight and large quantities of materials.",
  ],
  liter: [
    "A liter is a metric unit of volume equal to one cubic decimeter, or 1,000 cubic centimeters. It is one thousandth of a cubic meter.",
    "Liters are used for drinks, cooking, fuel and household liquids. A standard water bottle often holds one liter, and one liter of water has a mass of about one kilogram.",
  ],
  milliliter: [
    "A milliliter is one thousandth of a liter, or one cubic centimeter. It is a small metric unit used when a liter would be too large.",
    "Medicine doses, recipes, cosmetics and small amounts of liquid are commonly measured in milliliters. Five milliliters is approximately one teaspoon.",
  ],
  "gallon-us": [
    "The US gallon is a customary unit of liquid volume equal to 3.785411784 liters. It is divided into four quarts, eight pints or 128 US fluid ounces.",
    "US gallons are used for fuel, paint, water and other liquids. A large milk jug is commonly sold as a gallon, while vehicle fuel tanks often hold several gallons.",
  ],
  "fluid-ounce-us": [
    "A US fluid ounce is a customary unit of liquid volume equal to about 29.5735 milliliters. It is different from the ounce used to measure mass.",
    "Recipes, medicines, drinks and packaged liquids in the United States often use fluid ounces, abbreviated fl oz.",
  ],
  "cubic-foot": [
    "A cubic foot is the volume of a cube one foot long, one foot wide and one foot high. It equals about 28.3168 liters.",
    "Cubic feet are common in the United States for room capacity, appliances, shipping, natural gas and the volume of building materials.",
  ],
  "cubic-inch": [
    "A cubic inch is the volume of a cube measuring one inch on each side. It equals about 16.3871 cubic centimeters.",
    "It is used for small objects and, in the United States, for engine displacement and mechanical specifications.",
  ],
};

export function volumeArticle(unit: Unit): UnitArticle {
  const name = unit.name.toLowerCase();
  const paragraphs = notes[unit.id] ?? [
    `The ${name} is a unit of volume. One ${name} equals ${formatVolumeFactor(unit.factor)} cubic meters, and that factor is the basis for every conversion on this page.`,
    `${volumeTitle(unit)} measurements describe how much space a liquid, gas or solid occupies. The formula and conversion table below keep the arithmetic visible.`,
  ];
  const short = volumeShort(unit);
  const closing = `The ${name} is commonly written as "${short}". Its exact relationship to the cubic meter is ${formatVolumeFactor(unit.factor)}, which is what every result on this page uses.`;
  return { heading: `What is a ${name}?`, paragraphs: short !== unit.name ? [...paragraphs, closing] : paragraphs };
}

