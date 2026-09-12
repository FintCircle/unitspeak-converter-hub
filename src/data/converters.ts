export type ConverterEntry = {
  name: string;
  /** Set when the converter page is live. */
  href?: string;
};

export type ConverterCategory = {
  name: string;
  slug: string;
  converters: ConverterEntry[];
};

/** Categories in the order shown on the homepage; converters alphabetical. */
export const categories: ConverterCategory[] = [
  {
    name: "Common Converters",
    slug: "common-converters",
    converters: [
      { name: "Angle Converter", href: "/common-converters/angle-converter" },
      { name: "Area Converter" },
      { name: "Case Converter" },
      { name: "Currency Converter" },
      { name: "Data Storage Converter" },
      { name: "Energy Converter" },
      { name: "Force Converter" },
      { name: "Fuel Consumption Converter" },
      { name: "Length Converter", href: "/common-converters/length-converter" },
      { name: "Numbers Converter" },
      { name: "Power Converter" },
      { name: "Pressure Converter" },
      { name: "Speed Converter" },
      { name: "Temperature Converter" },
      { name: "Time Converter" },
      { name: "Volume Converter" },
      { name: "Weight and Mass Converter" },
    ],
  },
  {
    name: "Engineering Converters",
    slug: "engineering-converters",
    converters: [
      { name: "Acceleration Converter" },
      { name: "Acceleration - Angular Converter" },
      { name: "Density Converter" },
      { name: "Moment of Force Converter" },
      { name: "Moment of Inertia Converter" },
      { name: "Specific Volume Converter" },
      { name: "Torque Converter" },
      { name: "Velocity - Angular Converter" },
    ],
  },
  {
    name: "Heat Converters",
    slug: "heat-converters",
    converters: [
      { name: "Fuel Efficiency - Mass Converter" },
      { name: "Fuel Efficiency - Volume Converter" },
      { name: "Heat Density Converter" },
      { name: "Heat Flux Density Converter" },
      { name: "Heat Transfer Coefficient Converter" },
      { name: "Specific Heat Capacity Converter" },
      { name: "Temperature Interval Converter" },
      { name: "Thermal Conductivity Converter" },
      { name: "Thermal Expansion Converter" },
      { name: "Thermal Resistance Converter" },
    ],
  },
  {
    name: "Fluids Converters",
    slug: "fluids-converters",
    converters: [
      { name: "Concentration - Molar Converter" },
      { name: "Concentration - Solution Converter" },
      { name: "Flow Converter" },
      { name: "Flow - Mass Converter" },
      { name: "Flow - Molar Converter" },
      { name: "Mass Flux Density Converter" },
      { name: "Permeability Converter" },
      { name: "Surface Tension Converter" },
      { name: "Viscosity - Dynamic Converter" },
      { name: "Viscosity - Kinematic Converter" },
    ],
  },
  {
    name: "Light Converters",
    slug: "light-converters",
    converters: [
      { name: "Digital Image Resolution Converter" },
      { name: "Frequency Wavelength Converter" },
      { name: "Illumination Converter" },
      { name: "Luminance Converter" },
      { name: "Luminous Intensity Converter" },
    ],
  },
  {
    name: "Electricity Converters",
    slug: "electricity-converters",
    converters: [
      { name: "Charge Converter" },
      { name: "Current Converter" },
      { name: "Electric Conductance Converter" },
      { name: "Electric Conductivity Converter" },
      { name: "Electric Field Strength Converter" },
      { name: "Electric Potential Converter" },
      { name: "Electric Resistance Converter" },
      { name: "Electric Resistivity Converter" },
      { name: "Electrostatic Capacitance Converter" },
      { name: "Inductance Converter" },
      { name: "Linear Charge Density Converter" },
      { name: "Linear Current Density Converter" },
      { name: "Surface Charge Density Converter" },
      { name: "Surface Current Density Converter" },
      { name: "Volume Charge Density Converter" },
    ],
  },
  {
    name: "Magnetism Converters",
    slug: "magnetism-converters",
    converters: [
      { name: "Magnetic Field Strength Converter" },
      { name: "Magnetic Flux Converter" },
      { name: "Magnetic Flux Density Converter" },
      { name: "Magnetomotive Force Converter" },
    ],
  },
  {
    name: "Radiology Converters",
    slug: "radiology-converters",
    converters: [
      { name: "Radiation Converter" },
      { name: "Radiation-Absorbed Dose Converter" },
      { name: "Radiation-Activity Converter" },
      { name: "Radiation-Exposure Converter" },
    ],
  },
  {
    name: "Other Converters",
    slug: "other-converters",
    converters: [
      { name: "Data Transfer Converter" },
      { name: "Prefixes Converter" },
      { name: "Sound Converter" },
      { name: "Typography Converter" },
      { name: "Volume - Lumber Converter" },
    ],
  },
];

export const totalConverterCount = categories.reduce(
  (n, c) => n + c.converters.length,
  0,
);
