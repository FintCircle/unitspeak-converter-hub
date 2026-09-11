import {
  formatResult,
  lengthUnitById,
  unitPlural,
  unitShort,
  unitTitle,
  type Unit,
} from "./length";

export type UnitArticle = {
  heading: string;
  paragraphs: string[];
};

/** Hand-written notes for the units people actually search for. */
const notes: Record<string, string[]> = {
  meter: [
    "The meter is the base unit of length in the metric system, which almost every country in the world uses. It started out in the 1790s as one ten-millionth of the distance from the North Pole to the equator. Today it has a much sharper definition: a meter is how far light travels through empty space in 1/299,792,458 of a second.",
    "A meter is a handy size for everyday things. A doorway is about two meters tall, a long step is close to one meter, and a school hallway might be thirty meters long. Because the metric system works in tens, bigger and smaller units are just the meter with a prefix: a kilometer is 1,000 meters and a centimeter is one hundredth of a meter.",
  ],
  kilometer: [
    "A kilometer is 1,000 meters. The prefix \"kilo\" always means one thousand, so the math never changes. Most of the world measures road distances and running races in kilometers, which is why road signs outside the United States and the United Kingdom count down in km.",
    "It takes an average walker about 12 minutes to cover a kilometer, and a car on an open highway crosses one in well under a minute. A 5K race is five kilometers, and a marathon is a little over 42 kilometers.",
  ],
  centimeter: [
    "A centimeter is one hundredth of a meter, so 100 centimeters make one meter. It is the unit most rulers show, and it is the standard way to give a person's height or a package's size in metric countries.",
    "For a quick mental picture: your little finger is roughly one centimeter wide, and a new pencil is about 19 centimeters long. Centimeters sit close to inches in size, which is why the cm-to-inch conversion is one of the most searched of all.",
  ],
  millimeter: [
    "A millimeter is one thousandth of a meter, and ten millimeters make one centimeter. It is the unit engineers, machinists, and builders reach for when a fraction of a centimeter would be too rough.",
    "A credit card is about 0.8 mm thick and a standard pencil lead is 0.7 mm across. Rainfall, screw sizes, plywood thickness, and phone dimensions are all usually given in millimeters.",
  ],
  micrometer: [
    "A micrometer, also called a micron, is one millionth of a meter. That is a thousand times smaller than a millimeter, far below what your eye can pick out on its own.",
    "Micrometers describe things seen through a microscope: a human hair is roughly 70 micrometers thick, a red blood cell is about 8, and the dust particles an air filter traps are measured in single microns.",
  ],
  nanometer: [
    "A nanometer is one billionth of a meter. Put another way, a million nanometers fit inside one millimeter.",
    "This is the scale of molecules and light itself. Visible light has wavelengths from about 380 nanometers (violet) to 700 nanometers (red), and the tiny switches inside a computer chip are just a few nanometers wide.",
  ],
  mile: [
    "A mile is 1,609.344 meters, or 5,280 feet. The unit goes back to the Roman \"mille passus,\" a thousand paces of a marching soldier, though the modern mile is a bit longer than the Roman one.",
    "The United States and the United Kingdom still post road speeds and distances in miles. A brisk walk covers a mile in about 15 minutes, and a mile is four laps of a standard running track plus a short extra stretch.",
  ],
  yard: [
    "A yard is exactly 0.9144 meters, or three feet. It was once described as the distance from a king's nose to the tip of his outstretched thumb, but since 1959 it has been defined against the meter instead.",
    "Yards show up in fabric shops, in landscaping deliveries, and above all in American football, where the field is 100 yards between the goal lines. A yard is a little shorter than a meter, so a 100-yard dash is slightly shorter than a 100-meter one.",
  ],
  foot: [
    "A foot is exactly 0.3048 meters, made up of 12 inches. As the name suggests, it grew out of the length of a human foot, and versions of it were used across Europe long before it was standardized.",
    "In the United States, people give their height in feet and inches, ceilings are measured in feet, and aircraft altitudes worldwide are reported in feet. Twelve inches to a foot and three feet to a yard are the two conversions worth memorizing.",
  ],
  inch: [
    "An inch is exactly 25.4 millimeters, and 12 inches make a foot. The word comes from the Latin \"uncia,\" meaning a twelfth part.",
    "Inches measure screen sizes, pipe widths, rainfall in the United States, and lumber. They are usually split into halves, quarters, eighths, and sixteenths rather than decimals, which is why a tape measure looks so crowded near each inch mark.",
  ],
  "nautical-mile-international": [
    "A nautical mile is 1,852 meters, a bit longer than a land mile. It was chosen because it matches one minute of latitude on the Earth's surface, which makes chart work far easier for sailors and pilots.",
    "Ship and aircraft speeds are given in knots, and one knot is one nautical mile per hour. Because the unit is tied to the shape of the planet, it stays useful anywhere on the globe.",
  ],
  "light-year": [
    "A light year is a distance, not a time: it is how far light travels in one year, about 9.46 trillion kilometers. Light covers roughly 300,000 kilometers every second, and a year gives it a very long run.",
    "Astronomers use light years because space is so empty. The nearest star beyond the Sun, Proxima Centauri, is about 4.2 light years away, and our galaxy is roughly 100,000 light years across. Seeing a star ten light years away means seeing light that left it ten years ago.",
  ],
  parsec: [
    "A parsec is about 3.26 light years, or roughly 30.9 trillion kilometers. The name is short for \"parallax second,\" because it comes from a measuring trick: a star one parsec away appears to shift by one arcsecond as the Earth moves across its orbit.",
    "Professional astronomers usually prefer parsecs to light years, and they scale it up for bigger jobs — kiloparsecs for distances inside a galaxy and megaparsecs for the gaps between galaxies.",
  ],
  "astronomical-unit": [
    "One astronomical unit is the average distance from the Earth to the Sun, close to 149.6 million kilometers. Sunlight takes about eight minutes and twenty seconds to cross it.",
    "The unit makes the solar system easy to picture. Mars orbits at about 1.5 AU, Jupiter at roughly 5.2 AU, and Neptune at about 30 AU. Beyond the planets, astronomers switch to light years and parsecs.",
  ],
  angstrom: [
    "An angstrom is one ten-billionth of a meter, or one tenth of a nanometer. It is named after the Swedish physicist Anders Jonas Ångström, who studied light and the colors given off by gases.",
    "Atoms are a few angstroms across, so chemists and crystallographers use the unit to describe the spacing of atoms in a molecule or a crystal.",
  ],
  furlong: [
    "A furlong is 220 yards, or one eighth of a mile. The name means \"furrow long\" — the length a team of oxen was expected to plow before stopping for a rest.",
    "It survives mainly in horse racing, where race lengths are still announced in furlongs, and in old land records where fields were laid out in furlongs and acres.",
  ],
  fathom: [
    "A fathom is six feet, about 1.83 meters. It is roughly the span of a grown person's outstretched arms, which is how sailors measured rope by pulling it hand over hand.",
    "Sea charts long gave water depth in fathoms, and the word still shows up in phrases about deep water and hard-to-grasp ideas.",
  ],
  rod: [
    "A rod is 16.5 feet, or 5.5 yards. It is an old surveying unit, and four rods make one chain.",
    "Rods were used to lay out fields and town lots in Britain and early America, which is why some property lines and old deeds still describe distances in rods.",
  ],
  hand: [
    "A hand is exactly four inches, about 10.16 centimeters. It began as the rough width of a person's palm.",
    "The unit is still standard for measuring horses, taken from the ground to the top of the shoulder. A pony is under 14.2 hands, and a tall riding horse might be 17 hands.",
  ],
  point: [
    "A point is a typography unit equal to 1/72 of an inch, about 0.353 millimeters. When you set text at 12 point, you are describing the height of the space the letters are designed to sit in.",
    "Twelve points make one pica, and printers, designers, and word processors all count type size in points.",
  ],
  pica: [
    "A pica is 12 points, or 1/6 of an inch — about 4.23 millimeters. Print layouts have been measured in picas for centuries.",
    "Newspaper columns, page margins, and the space between blocks of text are traditionally set in picas, while the type inside them is sized in points.",
  ],
  mil: [
    "A mil, sometimes called a thou, is one thousandth of an inch: 0.0254 millimeters. Do not confuse it with a millimeter, which is about 39 times larger.",
    "Machinists, printers, and plastics manufacturers use mils for tolerances, wire coatings, and sheet thickness. A trash bag might be 2 mils thick and a sheet of paper about 4 mils.",
  ],
  "planck-length": [
    "The Planck length is about 1.6 × 10⁻³⁵ meters, the smallest length that has any clear meaning in physics. It comes from combining the constants behind gravity, quantum mechanics, and the speed of light.",
    "No instrument can measure anything close to it. Physicists use the Planck length as a theoretical limit when they talk about how space itself might behave at the tiniest scale.",
  ],
};

/** Family used to write a sensible article when there is no hand-written note. */
function family(unit: Unit): string {
  const n = unit.name.toLowerCase();
  if (/parsec|light year|astronomical|planck|radius|distance from sun/.test(n))
    return "astronomical";
  if (/^(exa|peta|tera|giga|mega|kilo|hecto|deka|deci|centi|milli|micro|nano|pico|femto|atto)/.test(n))
    return "metric";
  if (/survey/.test(n)) return "survey";
  if (/roman|greek|russian|vara|reed|cubit|aln|famn|ken|archin|actus|ell|span|nail|finger|barleycorn|handbreadth/.test(n))
    return "historic";
  if (/point|pica|twip/.test(n)) return "typographic";
  if (/fermi|x-unit|a\.u\.|bohr|electron|angstrom|micron/.test(n)) return "scientific";
  if (/league|nautical|mile|furlong|chain|link|rod|perch|pole|fathom|rope|caliber|mil|inch|foot|yard/.test(n))
    return "imperial";
  return "other";
}

function generic(unit: Unit): string[] {
  const meters = formatResult(unit.factor);
  const name = unitTitle(unit);
  const plural = unitPlural(unit);
  const size = `One ${unit.name} equals ${meters} meters, so every conversion on this page starts from that single number.`;

  switch (family(unit)) {
    case "metric":
      return [
        `The ${unit.name} is a metric unit of length. ${size} Metric units are built from the meter with a prefix, so moving between them only ever means shifting the decimal point.`,
        `Because the whole system works in powers of ten, you can convert ${plural} to any other metric unit without memorizing odd numbers. The table further down does the arithmetic for the values people look up most.`,
      ];
    case "imperial":
      return [
        `The ${unit.name} belongs to the imperial and US customary family of length units, the system built on inches, feet, yards, and miles. ${size}`,
        `These units grew out of everyday measuring — paces, ropes, plow lengths, and body parts — so they do not line up in tens the way metric units do. That is exactly why a conversion table is useful, and you will find one for ${plural} below.`,
      ];
    case "survey":
      return [
        `The ${unit.name} is a US survey unit. ${size} Survey units come from a slightly older definition of the foot that the United States kept for land measurement, so they are a tiny fraction larger than the modern versions.`,
        `The difference is far too small to notice in a room, but across miles of property boundary it matters, which is why surveyors and deed records keep the two apart.`,
      ];
    case "astronomical":
      return [
        `The ${unit.name} is used for distances in space, where ordinary units run out of room. ${size}`,
        `Written as an everyday number it looks unwieldy, so astronomers work in scientific notation and in whichever unit keeps the numbers small for the job at hand. Converting ${plural} into meters or kilometers shows just how much space there is between objects in the sky.`,
      ];
    case "scientific":
      return [
        `The ${unit.name} is a scientific unit for very small distances. ${size}`,
        `Units this size describe atoms, particles, and wavelengths of light rather than anything you can hold. Physicists and chemists pick whichever one keeps their measurements close to a simple whole number.`,
      ];
    case "typographic":
      return [
        `The ${unit.name} is a typography unit, used to size type and lay out pages. ${size}`,
        `Print measurements stayed with their own units long after the rest of the world moved on, so design software still counts in them. Converting to millimeters or inches is the usual step before something gets printed or cut.`,
      ];
    case "historic":
      return [
        `The ${unit.name} is a traditional unit of length, one of many that were in use before the metric system spread. ${size}`,
        `Units like this were often based on the human body or on farm work, and their exact size varied from town to town until modern values were fixed. They turn up today in old documents, translations, and historical research, where converting ${plural} into meters makes the numbers readable again.`,
      ];
    default:
      return [
        `The ${unit.name} is a unit of length. ${size} That factor is all you need: multiply by it to reach meters, divide by it to come back.`,
        `${name} conversions are easiest to trust when you can see the arithmetic, so the formula and a table of common values are laid out on this page.`,
      ];
  }
}

/** Informational article about the unit being converted from. */
export function unitArticle(unit: Unit): UnitArticle {
  const paragraphs = notes[unit.id] ?? generic(unit);
  const symbol = unitShort(unit);
  const closing = `In writing, the ${unit.name} is usually shortened to "${symbol}". One ${unit.name} is ${formatResult(unit.factor)} meters, and that ratio is what every figure on this page is built from.`;
  return {
    heading: `What is a ${unit.name}?`,
    paragraphs: symbol !== unit.name ? [...paragraphs, closing] : paragraphs,
  };
}

export { lengthUnitById };
