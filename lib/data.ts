export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string[];
  compatible: string[];
  image: string;
}

export const categories = [
  "All",
  "Rollers",
  "Gears & Pinions",
  "Rubber Products",
  "Gaskets & Profiles",
  "Sockets & Wheels",
  "Complete Machines",
];

export const products: Product[] = [
  {
    id: "nipping-roller-standard",
    name: "Nipping Rollers — Standard",
    category: "Rollers",
    description:
      "High-precision nipping rollers engineered for consistent paper tension and smooth web feed in high-speed offset printing presses.",
    details: [
      "Hardness: 40–80 Shore A (customisable)",
      "Core material: Steel / Aluminium",
      "Surface: Smooth or knurled finish",
      "Operating speed: Up to 80,000 CPH",
    ],
    compatible: ["Komori", "Orient", "Newsline", "Goss"],
    image: "roller",
  },
  {
    id: "nipping-roller-heavy",
    name: "Nipping Rollers — Heavy Duty",
    category: "Rollers",
    description:
      "Reinforced nipping rollers built for continuous high-load environments in large-format and commercial newspaper printing lines.",
    details: [
      "Hardness: 60–90 Shore A",
      "Enhanced bonding for high-speed use",
      "Anti-static rubber compound",
      "Temperature resistant: up to 80°C",
    ],
    compatible: ["Goss", "Fast", "Komori"],
    image: "roller",
  },
  {
    id: "spur-gear-komori",
    name: "Spur Gears — Komori Series",
    category: "Gears & Pinions",
    description:
      "Precision-cut spur gears machined to exact OEM tolerances for Komori web offset printing presses. Drop-in replacement with zero adjustment.",
    details: [
      "Material: EN36 / EN24 alloy steel",
      "Heat-treated and case-hardened",
      "DIN quality grade 6–8",
      "Custom module and tooth count available",
    ],
    compatible: ["Komori"],
    image: "gear",
  },
  {
    id: "spur-gear-orient",
    name: "Spur Gears — Orient / Newsline",
    category: "Gears & Pinions",
    description:
      "Drop-in compatible gears for Orient and Newsline press models, machined to match original specifications for noise-free operation.",
    details: [
      "Material: EN36 alloy steel",
      "Ground tooth profile for precision",
      "Available in full gear sets",
      "Helical variants on request",
    ],
    compatible: ["Orient", "Newsline"],
    image: "gear",
  },
  {
    id: "pinion-gear-goss",
    name: "Pinions — Goss / Fast Series",
    category: "Gears & Pinions",
    description:
      "High-strength pinion gears for Goss and Fast web offset presses. Manufactured with tight tolerance grinding for extended service life.",
    details: [
      "Material: Alloy steel, case-hardened",
      "Tooth accuracy: DIN 6",
      "Bore machined to OEM shaft diameter",
      "Paired sets available for balanced wear",
    ],
    compatible: ["Goss", "Fast"],
    image: "gear",
  },
  {
    id: "form-roller-rubber",
    name: "Form Roller Rubber Covers",
    category: "Rubber Products",
    description:
      "Extruded and moulded rubber covers for form rollers, providing optimal ink transfer consistency across all press speeds.",
    details: [
      "Hardness: 25–35 Shore A",
      "Ink-resistant compound",
      "Solvent-resistant formulation",
      "Available: EPDM, NBR, Polyurethane",
    ],
    compatible: ["Komori", "Orient", "Newsline", "Goss", "Fast"],
    image: "rubber",
  },
  {
    id: "extruded-rubber-profile",
    name: "Custom Extruded Rubber Profiles",
    category: "Rubber Products",
    description:
      "Made-to-order extruded rubber profiles for sealing, dampening, and guiding applications in web offset and other printing machinery.",
    details: [
      "Any cross-section profile on request",
      "Shore hardness: 30–90 A",
      "Compounds: EPDM, NBR, SBR, Silicone",
      "Minimum order: 50 metres",
    ],
    compatible: ["All press models"],
    image: "rubber",
  },
  {
    id: "gasket-set-komori",
    name: "Gasket Sets — Komori",
    category: "Gaskets & Profiles",
    description:
      "Complete gasket kits for Komori press maintenance overhauls. Precision die-cut from premium compressed fibre and rubber sheets.",
    details: [
      "Material: Compressed fibre / NBR rubber",
      "Oil and solvent resistant",
      "Temperature range: -20°C to +150°C",
      "Supplied as full press kit",
    ],
    compatible: ["Komori"],
    image: "gasket",
  },
  {
    id: "gasket-set-orient",
    name: "Gasket Sets — Orient / Newsline",
    category: "Gaskets & Profiles",
    description:
      "Precision-cut gasket sets compatible with Orient and Newsline press families. All critical sealing points covered in a single kit.",
    details: [
      "Full overhaul kit available",
      "Individual gaskets sold separately",
      "Chemical-resistant materials",
      "Custom thickness on request",
    ],
    compatible: ["Orient", "Newsline"],
    image: "gasket",
  },
  {
    id: "worm-wheel",
    name: "Worm Wheels",
    category: "Sockets & Wheels",
    description:
      "Precision-machined worm wheels for accurate angular transmission in press folding and delivery units. Available in bronze and cast iron.",
    details: [
      "Material: Phosphor bronze / Cast iron",
      "Lead angle: custom on request",
      "Paired with worm shaft sets",
      "CNC machined for tight tolerances",
    ],
    compatible: ["Komori", "Goss", "Orient"],
    image: "wheel",
  },
  {
    id: "industrial-socket",
    name: "Industrial Sockets",
    category: "Sockets & Wheels",
    description:
      "Heavy-duty industrial sockets for press drive assemblies. Manufactured from high-tensile steel with precision bores.",
    details: [
      "Material: EN24 / EN36 steel",
      "Keyway and spline variants",
      "Case-hardened finish",
      "Custom bore and OD available",
    ],
    compatible: ["All press models"],
    image: "socket",
  },
  {
    id: "complete-press-recon",
    name: "Reconditioned Web Offset Press",
    category: "Complete Machines",
    description:
      "Fully reconditioned web offset printing presses, overhauled in-house with all critical wear parts replaced. Ready for immediate production.",
    details: [
      "All rollers, gears, and blankets replaced",
      "Electrical systems checked and upgraded",
      "Trial run before dispatch",
      "12-month post-installation support",
    ],
    compatible: ["Orient", "Newsline", "Fast"],
    image: "machine",
  },
];

export const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "500+", label: "Products in Catalogue" },
  { value: "50+", label: "Press Models Supported" },
  { value: "ISO", label: "9001:2008 Certified" },
];

export const brands = ["Komori", "Orient", "Newsline", "Fast", "Goss"];

export interface MachinePlatform {
  brand: string;
  origin: string;
  models: string[];
  description: string;
  partsSupplied: string[];
}

export interface RefurbishedMachine {
  id: string;
  name: string;
  brand: string;
  year: string;
  condition: "Good" | "Very Good" | "Excellent";
  cutoff: string;
  speed: string;
  description: string;
  specs: string[];
}

export const machinePlatforms: MachinePlatform[] = [
  {
    brand: "Komori",
    origin: "Japan",
    models: ["System 25", "System 40", "Lithrone 26", "Lithrone 40"],
    description:
      "One of the most widely used Japanese web offset presses in Indian newspaper printing. AB Presstech supplies a comprehensive range of rollers, gears, gaskets, and rubber products for all Komori web models.",
    partsSupplied: [
      "Nipping Rollers",
      "Spur Gears & Pinions",
      "Gasket Sets",
      "Worm Wheels",
      "Industrial Sockets",
    ],
  },
  {
    brand: "Orient",
    origin: "India",
    models: ["Orient 430", "Orient 508", "Orient 630", "Orient 720"],
    description:
      "A dominant Indian-made web offset press widely used across regional newspaper publishers. AB Presstech has deep expertise in Orient press parts, with many components available from stock.",
    partsSupplied: [
      "Nipping Rollers",
      "Spur Gears",
      "Gasket Kits",
      "Extruded Rubber Profiles",
      "Form Roller Covers",
    ],
  },
  {
    brand: "Newsline",
    origin: "India",
    models: ["Newsline 430", "Newsline 508", "Newsline Compact"],
    description:
      "Popular among mid-sized Indian newspaper printers, Newsline presses share many compatible components with Orient. AB Presstech supplies matched spare parts across the full Newsline range.",
    partsSupplied: [
      "Nipping Rollers",
      "Spur Gears",
      "Rubber Profiles",
      "Gasket Sets",
    ],
  },
  {
    brand: "Goss",
    origin: "USA",
    models: ["Goss Community", "Goss Urbanite", "Goss SSC", "Goss Colorliner"],
    description:
      "American-made Goss presses are found in many large commercial and newspaper printing facilities across India. AB Presstech manufactures precision replacement parts to OEM Goss tolerances.",
    partsSupplied: [
      "Heavy Duty Nipping Rollers",
      "Pinion Gears",
      "Worm Wheels",
      "Industrial Sockets",
    ],
  },
  {
    brand: "Fast",
    origin: "India",
    models: ["Fast 430", "Fast 508", "Fast Maxline"],
    description:
      "Fast presses are a cost-effective choice for Indian regional publishers. AB Presstech supplies a full range of wear parts and rubber components to keep Fast presses running at peak performance.",
    partsSupplied: [
      "Nipping Rollers",
      "Pinion Gears",
      "Form Roller Covers",
      "Gaskets",
      "Extruded Profiles",
    ],
  },
];

export const refurbishedMachines: RefurbishedMachine[] = [
  {
    id: "orient-508-2018",
    name: "Orient 508 Web Offset Press",
    brand: "Orient",
    year: "2018",
    condition: "Very Good",
    cutoff: "508 mm",
    speed: "40,000 CPH",
    description:
      "Fully reconditioned 4-unit Orient 508 press. All rollers, blankets, and gears replaced. Electrical systems upgraded. Trial run completed — ready for immediate dispatch.",
    specs: [
      "4 printing units",
      "508 mm cutoff",
      "40,000 CPH max speed",
      "Auto plate loading",
      "All wear parts replaced",
      "12-month post-installation support",
    ],
  },
  {
    id: "newsline-430-2019",
    name: "Newsline 430 Compact Press",
    brand: "Newsline",
    year: "2019",
    condition: "Excellent",
    cutoff: "430 mm",
    speed: "35,000 CPH",
    description:
      "2-unit Newsline 430 in excellent working condition. Ideal for small to mid-sized regional newspaper publishers. Complete with folder and delivery unit. Overhauled in our facility.",
    specs: [
      "2 printing units",
      "430 mm cutoff",
      "35,000 CPH max speed",
      "Folder included",
      "New rubber rollers fitted",
      "3-month on-site warranty",
    ],
  },
  {
    id: "fast-508-2017",
    name: "Fast 508 Web Offset Press",
    brand: "Fast",
    year: "2017",
    condition: "Good",
    cutoff: "508 mm",
    speed: "38,000 CPH",
    description:
      "4-unit Fast 508 press, reconditioned and tested. Key mechanical components replaced. Suitable for buyers looking for an affordable entry into high-volume newspaper printing.",
    specs: [
      "4 printing units",
      "508 mm cutoff",
      "38,000 CPH max speed",
      "Gears and pinions replaced",
      "New blankets fitted",
      "Available for inspection at our facility",
    ],
  },
];

export const certifications = [
  {
    title: "ISO 9001:2008 Certified",
    desc: "Our quality management system is internationally certified, ensuring consistent manufacturing standards across every product batch.",
  },
  {
    title: "In-House Quality Lab",
    desc: "Every product batch is tested in our dedicated QC lab for dimensional accuracy, hardness, tensile strength, and surface finish before dispatch.",
  },
  {
    title: "OEM-Matched Tolerances",
    desc: "All parts are manufactured to exact OEM dimensional specifications — no adjustment required on installation.",
  },
  {
    title: "Material Traceability",
    desc: "Raw material certificates accompany every order. Full traceability from source alloy to finished part.",
  },
];
