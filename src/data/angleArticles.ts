import { formatResult, unitPlural, unitTitle } from "./length";
import { angleShort, angleUnitById, type Unit } from "./angle";
import type { UnitArticle } from "./unitArticles";

/** Plain-language notes about each angle unit, written for a general reader. */
const notes: Record<string, string[]> = {
  degree: [
    "A degree is the everyday way to measure an angle. A full turn is split into 360 equal degrees, so a quarter turn is 90 degrees and a half turn is 180 degrees. The number 360 comes from ancient Babylonian astronomers, who counted in sixties and liked that 360 divides evenly so many ways.",
    "You meet degrees whenever direction or turning matters: a compass bearing, the slope of a roof, the angle of a camera lens, or the corner of a triangle. Each degree can be split further into 60 minutes, and each minute into 60 seconds, which is how map coordinates get their fine detail.",
  ],
  radian: [
    "A radian is the angle you get when the curved edge of a circle is exactly as long as the circle's radius. That makes it the natural unit for anything involving circles, and it is the unit the International System of Units uses for angles.",
    "One radian is about 57.3 degrees, and a full turn is 2π radians — roughly 6.28. Because radians link an angle directly to arc length, they keep formulas in mathematics, physics, and programming simple. Most calculators and code libraries expect angles in radians unless you tell them otherwise.",
  ],
  grad: [
    "A grad, also called a gradian or a gon, divides a right angle into 100 equal parts instead of 90. That makes a full turn 400 grads and a quarter turn a tidy 100.",
    "The unit came out of the same push for decimal measurement that gave us the metric system. It never caught on widely, but surveyors in parts of Europe still use it because percentages of a right angle are easy to work with in the field.",
  ],
  minute: [
    "A minute of arc is one sixtieth of a degree. It is written with a single prime mark, as in 30', and is often called an arcminute so it is not confused with a minute of time.",
    "Minutes matter wherever small angles carry real distance. One minute of latitude on the Earth's surface is one nautical mile, and sharp human eyesight can just about separate two points one arcminute apart.",
  ],
  second: [
    "A second of arc is one sixtieth of a minute, which makes it one 3,600th of a degree. It is written with a double prime, as in 15\", and is usually called an arcsecond.",
    "This is the scale astronomers work at. Star positions, the apparent size of planets, and the tiny wobble used to measure distance to nearby stars are all quoted in arcseconds. Latitude and longitude are given in degrees, minutes, and seconds for the same reason: it pins a place down to a few tens of meters.",
  ],
  gon: [
    "A gon is the modern name for the gradian: one hundredth of a right angle, so 400 gons make a full turn. Gon and grad are two names for exactly the same size of angle.",
    "Surveying instruments in several European countries are still marked in gons, because a right angle reading of 100 makes mental arithmetic on slopes and bearings straightforward.",
  ],
  sign: [
    "A sign is 30 degrees, one twelfth of a full circle. The name comes from astrology and early astronomy, where the band of sky the Sun appears to travel through is divided into twelve signs of the zodiac.",
    "The Sun moves through roughly one sign each month, which is how the unit ended up tied to the calendar. Today it appears mainly in historical and astrological calculations rather than in engineering work.",
  ],
  mil: [
    "The mil used here is an artillery and military unit of angle. In this system a full circle is divided into 6,400 mils, which makes one mil 0.05625 degrees.",
    "Mils are handy for aiming because at long range one mil covers about one meter of width for every thousand meters of distance. Gunners and riflescope users can turn an observed width straight into a range estimate with simple multiplication. Note that other trades use \"mil\" for a thousandth of an inch, which is a length, not an angle.",
  ],
  revolution: [
    "A revolution is one complete turn, equal to 360 degrees or 2π radians. It is the unit you count in when something spins.",
    "Engine and motor speeds are given in revolutions per minute, or RPM, and machinery gearing is worked out in whole and part revolutions. Converting revolutions to degrees is just multiplying by 360.",
  ],
  circle: [
    "One circle, as a unit of angle, means a complete trip around the center: 360 degrees. It is the same size as a revolution or a turn, just named differently.",
    "Treating a whole circle as the unit is useful when you care about fractions of a rotation — a half circle, a third of a circle — rather than a count of degrees.",
  ],
  turn: [
    "A turn is one full rotation, 360 degrees. Some mathematicians prefer it because fractions of a turn are easy to picture: a quarter turn, a half turn, three quarters of a turn.",
    "The turn is also the basis of the constant τ (tau), which equals 2π and represents one full turn in radians. In everyday language, a skater's double turn or a screw's three and a half turns use the unit in exactly this sense.",
  ],
  quadrant: [
    "A quadrant is a quarter of a circle, so 90 degrees — the same as a right angle. Four quadrants make a full turn.",
    "The word is used constantly in coordinate geometry, where the x and y axes cut the plane into four quadrants. It also names the old navigation instrument that measured angles up to a quarter circle.",
  ],
  "right-angle": [
    "A right angle is exactly 90 degrees, the corner you see where two perpendicular lines meet. It is marked with a small square rather than an arc in drawings.",
    "Right angles are the backbone of building and making: walls meet floors at right angles, sheets of material are cut square, and a triangle with a right angle in it obeys the Pythagorean theorem. One right angle is a quarter turn, or 100 gons.",
  ],
  sextant: [
    "A sextant, as a unit of angle, is one sixth of a circle: 60 degrees. Six of them make a full turn, and it is also the angle inside each corner of an equilateral triangle.",
    "The name is shared with the navigation instrument used to measure the height of the Sun or a star above the horizon, which was built to cover about a sixth of a circle.",
  ],
};

/** Informational article about the angle unit being converted from. */
export function angleArticle(unit: Unit): UnitArticle {
  const paragraphs = notes[unit.id] ?? [
    `The ${unit.name} is a unit of angle. One ${unit.name} equals ${formatResult(unit.factor)} degrees, and that single factor is behind every figure on this page.`,
    `${unitTitle(unit)} conversions are easiest to trust when the arithmetic is visible, so the formula and a table of common values are laid out below.`,
  ];
  const short = angleShort(unit);
  const closing = `In writing, the ${unit.name} is usually shortened to "${short}". One ${unit.name} is ${formatResult(unit.factor)} ${unitPlural(angleUnitById.get("degree")!)}, and that ratio is what every number on this page is built from.`;
  return {
    heading: `What is a ${unit.name}?`,
    paragraphs: short !== unit.name ? [...paragraphs, closing] : paragraphs,
  };
}
