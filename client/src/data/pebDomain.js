// Realistic PEB & Heavy Steel domain data modeled after production industrial fabrication plants

export const MOCK_BOQ_ITEMS = [
  {
    boq_id: 1647,
    part_mark: "MCL-1",
    description: "MEZZANINE MAIN COLUMN",
    grid: "GRID A-1 to A-6",
    steel_grade: "IS 2062 E350BR",
    quantity: 14,
    length_mm: 5240,
    unit_weight_kg: 442.8,
    total_weight_kg: 6199.2,
    stage: "SAW Welding",
    stage_id: 3,
    welder_code: "W-04 (AWS D1.1 Cert)",
    paint_spec: "Epoxy Zinc Phosphate 75µm + PU Smoke Grey",
    revision: "R2 (Approved)"
  },
  {
    boq_id: 1648,
    part_mark: "RAF-01",
    description: "PRIMARY PORTAL RAFTER (TAPERED)",
    grid: "GRID B-1 to B-8",
    steel_grade: "IS 2062 E350BR",
    quantity: 18,
    length_mm: 12600,
    unit_weight_kg: 1140.5,
    total_weight_kg: 20529.0,
    stage: "Straightening",
    stage_id: 4,
    welder_code: "W-02 (SAW Auto Bay 2)",
    paint_spec: "Epoxy Zinc Phosphate 75µm + PU Smoke Grey",
    revision: "R2 (Approved)"
  },
  {
    boq_id: 1649,
    part_mark: "CRG-01",
    description: "20T EOT CRANE RUNWAY GIRDER",
    grid: "BAY 1 CRANE LINE",
    steel_grade: "IS 2062 E350C (Ultrasonic Tested)",
    quantity: 8,
    length_mm: 9000,
    unit_weight_kg: 890.0,
    total_weight_kg: 7120.0,
    stage: "Shot Blasting Sa 2.5",
    stage_id: 6,
    welder_code: "W-01 (Heavy Fab)",
    paint_spec: "High Build Epoxy Primer 100µm + Traffic Yellow",
    revision: "R1 (Approved)"
  },
  {
    boq_id: 1650,
    part_mark: "BR-03",
    description: "CROSS WALL BRACING PIPE SECTION",
    grid: "END GABLE WALL",
    steel_grade: "IS 1161 YST 310",
    quantity: 24,
    length_mm: 6800,
    unit_weight_kg: 184.2,
    total_weight_kg: 4420.8,
    stage: "Dispatch Yard",
    stage_id: 8,
    welder_code: "W-06",
    paint_spec: "Red Oxide Primer 40µm",
    revision: "R0"
  },
  {
    boq_id: 1651,
    part_mark: "Z-PURLIN-200",
    description: "PRE-PUNCHED COLD FORMED Z-PURLIN",
    grid: "ROOF FRAMING",
    steel_grade: "Galvanized 550 MPa 2.0mm",
    quantity: 120,
    length_mm: 7500,
    unit_weight_kg: 42.6,
    total_weight_kg: 5112.0,
    stage: "Ready for Dispatch",
    stage_id: 8,
    welder_code: "Roll-Line 1",
    paint_spec: "Hot-Dip Galvanized Z275",
    revision: "R0"
  },
  {
    boq_id: 1652,
    part_mark: "CANOPY-C1",
    description: "CANTILEVER CANOPY BEAM",
    grid: "SIDE ELEVATION NORTH",
    steel_grade: "IS 2062 E250",
    quantity: 10,
    length_mm: 3600,
    unit_weight_kg: 210.0,
    total_weight_kg: 2100.0,
    stage: "Fit-up & Tack",
    stage_id: 2,
    welder_code: "W-03 (Fit-up Bay)",
    paint_spec: "Epoxy Primer 75µm",
    revision: "R1"
  }
];

export const FABRICATION_STAGES = [
  { id: 1, name: "CNC Plasma / Flame Cutting", code: "CUT", dept: "Raw Prep", standard: "IS 800:2007 Tol.", color: "#3B82F6" },
  { id: 2, name: "Fit-up & Cleat Tack Welding", code: "FIT", dept: "Assembling", standard: "WPS-PEB-01", color: "#60A5FA" },
  { id: 3, name: "Submerged Arc Welding (SAW)", code: "SAW", dept: "Heavy Bay", standard: "AWS D1.1 / NABL", color: "#F59E0B" },
  { id: 4, name: "Hydraulic Flange Straightening", code: "STR", dept: "Finishing", standard: "Tolerance ±2mm", color: "#10B981" },
  { id: 5, name: "High-Speed Radial Drilling", code: "DRL", dept: "Punch/Drill", standard: "IS 1367 Grade 8.8/10.9", color: "#06B6D4" },
  { id: 6, name: "Automatic Shot Blasting (Sa 2.5)", code: "BLT", dept: "Surface Prep", standard: "ISO 8501-1 Sa 2.5", color: "#8B5CF6" },
  { id: 7, name: "Airless Epoxy & PU Painting", code: "PNT", dept: "Coatings", standard: "DFT 120µm NDT Check", color: "#EC4899" },
  { id: 8, name: "Barcode Tagging & Staged Yard Dispatch", code: "DSP", dept: "Logistics", standard: "Sequence Loaded", color: "#10B981" }
];

export const SAMPLE_COILS = [
  {
    coil_id: "COIL-JSW-98421",
    mill: "JSW Steel Ltd (Dolvi Works)",
    heat_number: "HT-7721-B",
    thickness_mm: 2.5,
    width_mm: 1250,
    grade: "CR-GI 550 MPa Z275",
    gross_weight_mt: 24.62,
    slit_output_mt: 23.85,
    scrap_rate_pct: 3.12,
    status: "PROCESSED_TO_PURLINS"
  },
  {
    coil_id: "COIL-TATA-44102",
    mill: "Tata Steel Kalinganagar",
    heat_number: "T-990214",
    thickness_mm: 12.0,
    width_mm: 2000,
    grade: "HR Plate Coil E350BR",
    gross_weight_mt: 28.40,
    slit_output_mt: 27.50,
    scrap_rate_pct: 3.16,
    status: "IN_PRODUCTION_BEAMS"
  },
  {
    coil_id: "COIL-AMNS-11928",
    mill: "ArcelorMittal Nippon Steel (Hazira)",
    heat_number: "AM-83210",
    thickness_mm: 6.0,
    width_mm: 1500,
    grade: "IS 2062 E250A",
    gross_weight_mt: 19.80,
    slit_output_mt: 19.22,
    scrap_rate_pct: 2.92,
    status: "RESERVED_FOR_S147"
  }
];

export const TRAILER_LOAD_SAMPLE = {
  trailerNumber: "GJ-15-AT-4482 (40ft Multi-Axle Flatbed)",
  driverName: "Ramsingh Gurjar",
  driverPhone: "+91 98251 77210",
  grossTareWeight: "14.20 MT",
  maxNetCapacity: "28.50 MT",
  plannedPayloadWeight: "26.85 MT",
  destinationProject: "Industrial Engineering Hub - Phase 2 (Valsad Site)",
  erectionSequenceGroup: "STAGE-1 (Anchor Bolts, Base Stubs & Columns A1-A6)",
  itemsLoaded: [
    { part: "MCL-1", desc: "Mezzanine Main Column", qty: 10, totalKg: 4428 },
    { part: "ANCHOR-M36", desc: "Foundation Anchor Bolt Sets Gr 8.8", qty: 48, totalKg: 1920 },
    { part: "BASE-PL-40", desc: "Base Gusset Plates 40mm Thick", qty: 10, totalKg: 2840 },
    { part: "TIE-BM-01", desc: "Ground Tie Beams", qty: 8, totalKg: 8940 },
    { part: "SAG-ROD-M16", desc: "High Tensile Sag Rods", qty: 60, totalKg: 720 },
    { part: "RAF-01 (Part)", desc: "Bottom Flange Rafter Segment", qty: 6, totalKg: 6842 }
  ],
  dispatchGatePassStatus: "READY_FOR_SECURITY_SEAL",
  ewayBillNumber: "3810 9924 8102 (Valid 48 hrs)"
};
