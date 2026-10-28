# Keshav Info — Multi-Page Enterprise Software Platform for PEB & Heavy Steel Enterprises

A multi-page website and interactive product platform for **Keshav Info**, showcasing dedicated operating systems, ERPs, Tekla 3D model revision bridges, shop-floor SAW welding trackers, coil slitting yield optimizers, and trailer sequence dispatch software for Pre-Engineered Building (PEB) and heavy structural steel manufacturers.

---

## 🌐 Live Application URLs

- **Frontend Application**: [http://localhost:5175/](http://localhost:5175/)
- **Backend API**: [http://localhost:5055/](http://localhost:5055/)

---

## 📄 Dedicated Multi-Page Architecture

1. **Home (`/`)**:
   - High-impact editorial hero with live plant telemetry.
   - Dedicated industry category breakdown (PEB Manufacturers, Heavy Steel Fabricators, Coil Service Centers, EPC Turnkey Contractors).
   - Embedded interactive simulator preview with direct link to fullscreen workstation.
   - High-level comparison summary, ROI calculation teaser, and client case study highlights.

2. **Solutions (`/solutions`)**:
   - Deep architectural breakdown of the 5 core industrial software products:
     - **SteelCore™ Enterprise PEB ERP**: Complete shop-floor & commercial operating system.
     - **TeklaBridge™ 3D BIM & NC1 Delta Sync**: Direct CAD model ingestion with drawing revision delta-diffing (R0 to R4).
     - **CoilTrack™ Slitting & Roll-Forming Suite**: High-tensile mother coil weighbridge hooks, 2D slitting yield optimization, and purlin pre-punching.
     - **ErectSync™ Offline Mobile Field Companion**: Dust-proof offline PWA for site engineers with trailer QR verification and DPR logging.
     - **Dedicated Enterprise Web & EPC Portals**: Custom client portals with interactive 3D WebGL structural models and NABL test certificate vault.

3. **Live Workstation Sandbox (`/workstation`)**:
   - Dedicated fullscreen interactive ERP workstation.
   - Search, filter, and inspect Tekla part marks (`MCL-1`, `RAF-01`, `CRG-01`, `Z-PURLIN`).
   - Advance beams through the 8-stage physical shop-floor pipeline (*Cutting, Fit-up, SAW Welding, Straightening, Drilling, Blast Sa 2.5, Painting, Dispatch*).
   - Live mother coil inward and slitting pattern scrap reduction diagram.
   - 40ft trailer sequence loading with printable GST e-Way Bill gate pass generator.

4. **Why Generic ERPs Fail (`/why-generic-fails`)**:
   - Technical manifesto detailing the 6 critical breakdown points of generic systems (SAP, Tally, Zoho) in structural steel:
     - Plate remnants and irregular geometric scrap vs static SKUs.
     - Tekla drawing revision chaos and drawing mismatches on cutting tables.
     - Piece-rate contractor duplicate billing leakages.
     - Sequence-wise dispatch vs site foundation ground readiness.
     - Mother coil weighbridge reconciliation.
     - Mill Heat Number and NABL ultrasonic inspection trails.

5. **Case Studies & Plant Audits (`/case-studies`)**:
   - Audited before/after metrics from heavy fabrication deployments:
     - 1,200 MT/Mo Heavy Structural Steel Facility (Western Industrial Corridor) — ₹1.42 Cr scrap saved.
     - 850 MT/Mo High-Tensile Purlin Center — 90-second gate pass dispatches.
     - 45-Acre Logistics Park EPC Turnkey Builder — 4-day milestone billing cycles.

6. **Tonnage & Cashflow ROI Calculator (`/roi-calculator`)**:
   - Interactive financial simulation sandbox with sliders for monthly tonnage and steel price.
   - Computes annual plate/coil scrap salvage, piece-rate contractor duplicate billing recovery, and crane detention avoidance with projected payback horizon.

7. **About Keshav Info (`/about`)**:
   - Origin story: founded inside heavy fabrication bays to solve real shop-floor friction.
   - Engineering principles: deep domain grounding, zero generic AI buzzwords, offline-first reliability, and strict client NDA confidentiality.
   - Supported engineering standards: IS 800:2007, AISC 360, MBMA, AWS D1.1, ISO 8501-1 (Sa 2.5), NABL testing.

8. **Contact & Technical Assessment (`/contact`)**:
   - Direct enterprise walkthrough booking form with module selector.
   - Engineering hub locations (Surat, Valsad, Ahmedabad, Pan-India).
   - Phone, email, direct WhatsApp, and technical FAQ.

---

## 🚀 Quick Run Guide

```bash
# Starts both Express backend (port 5055) and Vite React client (port 5175)
npm run dev
```

### Build Production Bundle
```bash
npm run build:client
```
