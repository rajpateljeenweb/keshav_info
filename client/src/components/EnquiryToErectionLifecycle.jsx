import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Compass, 
  Scale, 
  Scissors, 
  Cpu, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnquiryToErectionLifecycle({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'enquiry',
      stepNum: '01',
      shortTitle: 'Enquiry & Estimation',
      title: 'Structural Enquiry & Rapid Cost Estimation',
      subtitle: 'From Client RFQ to Accurate Tonnage BOQ in Under 4 Hours',
      icon: <FileSpreadsheet size={20} />,
      color: '#2563EB',
      badge: 'STAGE 1: SALES & ESTIMATION',
      description: 'Generic ERPs require weeks of manual spreadsheet work to price complex PEB portal frames. Keshav Info ingests preliminary architectural sketches, imports MBS or Excel takeoffs, calculates exact tonnage breakdown by section type (built-up, hot-rolled, cold-formed purlins, sheeting), and factors current steel market prices with live freight formulas.',
      capabilities: [
        'Multi-section tonnage estimation: Built-up plates, HR sections, cold-formed Z/C purlins',
        'Dynamic steel rate fluctuation buffers (Tata / JSW base rate + freight index)',
        'Automated client quotation generation with revision tracking (Q0 to Q5)',
        'Built-in commercial margin and crane freight cost calculations'
      ],
      bottleneckSolved: {
        before: 'Manual Excel takeoffs taking 3-5 days with 6-8% estimation errors and outdated steel rates.',
        after: 'Automated 4-hour quote turnaround with 99.4% tonnage accuracy and live coil pricing.'
      },
      telemetrySnippet: 'QUOTE #EST-2026-88 &bull; 840 MT Industrial Portal Frame &bull; Margin: 14.8% &bull; Approved'
    },
    {
      id: 'design',
      stepNum: '02',
      shortTitle: 'Tekla 3D & Detailing',
      title: 'Tekla Structures .NC1 & 3D BIM Sync',
      subtitle: 'Automated Delta-Diffing Between Client Drawing Revisions (R0 -> R4)',
      icon: <Compass size={20} />,
      color: '#0284C7',
      badge: 'STAGE 2: ENGINEERING & DETAILING',
      description: 'When engineering consultants issue drawing revisions mid-fabrication, traditional plants suffer massive scrap when outdated cut-lists remain on the shop floor. Keshav Info integrates directly with Tekla Structures via .NC1 and .IFC model parser, automatically highlighting changed part marks and instantly locking plasma tables.',
      capabilities: [
        'Direct Tekla .NC1 and .IFC import without manual data entry',
        'Automated 3D model revision diffing: detects altered hole pitches, flange thicknesses, or lengths',
        'Automatic freeze signal sent to CNC cutting bays for revised part marks',
        'Instant multi-level BOM explosion down to gusset plates, stiffeners, and splice plates'
      ],
      bottleneckSolved: {
        before: 'Consultant changes drawing; old columns get welded and scrapped, wasting ₹4.5 Lakhs per bay.',
        after: 'Instant digital lock on revised parts; cutting operators receive live red alerts on tablet.'
      },
      telemetrySnippet: 'TEKLA REV 03 INGESTED &bull; 1,248 Part Marks Synced &bull; 42 Marks Auto-Frozen on Shop Floor'
    },
    {
      id: 'inward',
      stepNum: '03',
      shortTitle: 'Weighbridge & Inward',
      title: 'Electronic Weighbridge & Mill MTC Pedigree',
      subtitle: 'Gross-to-Tare Automated Capture & 100% Heat Number Traceability',
      icon: <Scale size={20} />,
      color: '#D97706',
      badge: 'STAGE 3: RAW MATERIAL INWARD',
      description: 'Raw steel represents 65-72% of plant costs. Keshav Info connects directly to electronic weighbridges via RS232 serial and IP cameras, recording gross, tare, and net weights without human tampering. Every incoming coil and heavy plate is tied to its certified Tata/JSW Mill Test Certificate (MTC) and assigned a unique weather-proof QR code.',
      capabilities: [
        'Direct hardware drivers for Avery Weigh-Tronix, Essae, and Rice Lake electronic bridges',
        'ANPR truck license plate capture + weighbridge CCTV snapshot archive',
        'Mill Test Certificate (MTC) verification against IS 2062 Grade E250 / E350 BR standards',
        'Digital QR coil tag generation with chemical composition and mill heat number'
      ],
      bottleneckSolved: {
        before: 'Paper weighbridge slips and manual registers allowing 1.5% - 2.0% steel weight pilferage.',
        after: 'Direct serial port data lock; weighbridge operator cannot manipulate weights or heat numbers.'
      },
      telemetrySnippet: 'WEIGHBRIDGE INWARD #WB-4910 &bull; Mother Coil JSW-9821 (28.45 MT) &bull; Heat: HT-8812-C Verified'
    },
    {
      id: 'nesting',
      stepNum: '04',
      shortTitle: '2D Nesting & Slitting',
      title: 'Plate Nesting & Raw Coil Slit Yield Optimizer',
      subtitle: 'Slit Yields Above 97% & Permanent QR Remnant Reservation',
      icon: <Scissors size={20} />,
      color: '#059669',
      badge: 'STAGE 4: CUTTING & SLITTING OPTIMIZER',
      description: 'Generic software treats non-standard cut plate remnants as floor scrap. Keshav Info runs multi-order 2D cutting stock algorithms for CNC plasma cutting and HR coil slitting lines. Non-standard L-shaped remnants are photographed, dimensionally tagged in the database, and reserved for upcoming base stiffeners.',
      capabilities: [
        '2D geometric cutting stock optimization across simultaneous client projects',
        'Coil slitting pattern calculator for purlins (C/Z sections) reducing edge trim scrap',
        'Remnant QR tagging: irregular plate pieces saved with exact dimensions in digital rack',
        'Kerf allowance and CNC lead-in/lead-out optimization for Hypertherm plasma tables'
      ],
      bottleneckSolved: {
        before: 'Fabricators discard 1.2 MT plate remnants as floor scrap, losing ₹85,000 per mother plate.',
        after: 'Remnant tagged in digital yard; algorithm automatically nests brackets into saved offcuts.'
      },
      telemetrySnippet: 'NESTING JOB #NST-104 &bull; 12mm Plate Yield: 96.8% &bull; Remnant REM-12-88 Archived (1.14 MT)'
    },
    {
      id: 'shopfloor',
      stepNum: '05',
      shortTitle: 'Shop Bay Control',
      title: '8-Stage Physical Bay Control & Barcode Gating',
      subtitle: 'From CNC Cutting Table to Fit-Up, SAW Welding & Sa 2.5 Shot Blast',
      icon: <Cpu size={20} />,
      color: '#2563EB',
      badge: 'STAGE 5: SHOP-FLOOR FABRICATION',
      description: 'Fabrication bays move thousands of tonnes per month. Keshav Info enforces strict physical barcode stage gates on rugged shop tablets: 1. CNC Cutting &rarr; 2. Tacking & Fit-up &rarr; 3. Submerged Arc Welding (SAW) &rarr; 4. Web Straightening &rarr; 5. Drilling & Cleats &rarr; 6. Sa 2.5 Shot Blasting &rarr; 7. Primer/Paint &rarr; 8. Dispatch Staging.',
      capabilities: [
        'Bay supervisor tablet interface with high-contrast glove-friendly buttons',
        'Real-time machine tracking: SAW gantry welders, shearing lines, and radial drills',
        'Sub-assembly fit-up checks against Tekla 3D dimensional tolerances (&plusmn;2mm)',
        'Live Bay OEE and bottleneck heat-map displayed on plant overhead monitors'
      ],
      bottleneckSolved: {
        before: 'Unfinished beams bypass welding or blasting; discovered only during final loading.',
        after: 'Barcoded gate pass required to transfer beams between bays; zero uninspected members pass.'
      },
      telemetrySnippet: 'BAY 02 SAW WELDER &bull; Beam MCL-01 Completed &bull; Weld Flux: AWS F7A2-EM12K &bull; Passed to Bay 03'
    },
    {
      id: 'qc',
      stepNum: '06',
      shortTitle: 'NABL QC & Testing',
      title: 'NABL Quality Compliance & Metallurgical Records',
      subtitle: 'Digital Ultrasonic UT, MPI, DFT Paint Logs & Contractor Payables Lock',
      icon: <ShieldCheck size={20} />,
      color: '#7C3AED',
      badge: 'STAGE 6: QUALITY ASSURANCE & AUDIT',
      description: 'Major EPC developers (L&T, Tata Projects) withhold up to 15% retention money until every beam has an audited quality dossier. Keshav Info replaces paper inspection sheets with digital NABL check-sheets. Welder piece-rate payments are cryptographically locked until the quality inspector signs off ultrasonic weld testing.',
      capabilities: [
        '100% Ultrasonic Testing (UT) and Magnetic Particle Inspection (MPI) digital records',
        'Dry Film Thickness (DFT) paint log capture with Elcometer gauge integration',
        'Welder Performance Qualification (WPQR) & Welding Procedure Specification (WPS) logs',
        'Single-click generation of 200+ page client compliance dossiers for retention release'
      ],
      bottleneckSolved: {
        before: 'Contractors paid on fabricated tonnage before ultrasonic tests, leading to defective welds.',
        after: 'Payables locked in software; contractor cannot claim ₹/kg until QC digitally signs off UT.'
      },
      telemetrySnippet: 'QC SIGN-OFF #UT-8902 &bull; 100% Joint Penetration Approved &bull; Welder W-04 Certified'
    },
    {
      id: 'dispatch',
      stepNum: '07',
      shortTitle: 'Sequence Dispatch',
      title: 'Sequence-Wise Trailer Loading & 90-Sec Gate Pass',
      subtitle: 'Foundations & Columns First &bull; Zero Site Crane Detention Delays',
      icon: <Truck size={20} />,
      color: '#059669',
      badge: 'STAGE 7: LOGISTICS & SEQUENCE DISPATCH',
      description: 'Sending rafters and roof sheeting to a site before base columns and anchor bolts halts site cranes and triggers massive detention claims (₹35,000/day). Keshav Info forces trailers to load strictly in site erection sequence, auto-verifying axle load limits, weighbridge gross re-checks, and instant GST E-Way Bill generation in 90 seconds.',
      capabilities: [
        'Erection-sequence trailer packing optimizer (Foundation &rarr; Columns &rarr; Rafters &rarr; Purlins)',
        'Axle load distribution calculator preventing RTO highway overloading penalties',
        'Direct GST E-Way Bill and tax invoice generation in under 90 seconds',
        'Barcoded shipping packing lists attached to trailer manifests for site security'
      ],
      bottleneckSolved: {
        before: 'Site crane sits idle because trailer arrived with rafters instead of base columns.',
        after: 'Software prevents gate pass generation unless trailer payload matches foundation sequence.'
      },
      telemetrySnippet: 'DISPATCH TRAILER #GJ-15-X-9902 &bull; Payload: 26.85 MT &bull; Sequence Validated &bull; E-Way Bill Active'
    },
    {
      id: 'erection',
      stepNum: '08',
      shortTitle: 'Site Erection PWA',
      title: 'Offline Field Mobile PWA & Progressive RA Billing',
      subtitle: 'Trailer Inward Scanning, Anchor Bolt Verification & Erector Payables',
      icon: <HardHat size={20} />,
      color: '#D97706',
      badge: 'STAGE 8: SITE ERECTION & BILLING',
      description: 'ErectSync™ brings complete visibility to remote, dusty construction yards. Site engineers scan trailer QR codes upon arrival, inspect foundation anchor bolt center-to-center pitch, verify torque wrench settings, and file geotagged daily progress reports (DPR). Tonnage erected links directly to client progressive RA billing.',
      capabilities: [
        'Offline-first IndexedDB architecture functioning without 4G internet connection',
        'Trailer receiving QR scanner matching dispatched manifests against physical bolts',
        'Foundation anchor bolt diagonal check-sheet (&plusmn;2mm IS 800 tolerance)',
        'Progressive RA billing calculator linking erected tonnage to milestone cash inflows'
      ],
      bottleneckSolved: {
        before: 'Site delays blamed on factory dispatch; weeks of WhatsApp dispute over missing parts.',
        after: 'Scan-verified site delivery; real-time 3D erection progress visible to plant directors.'
      },
      telemetrySnippet: 'SITE S-147 &bull; 14 Columns Erected Today (42.8 MT) &bull; RA Bill #04 Milestone Triggered'
    }
  ];

  const current = steps[activeStep];

  return (
    <section 
      style={{
        padding: '85px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 40px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '12px' }}>
            <Sparkles size={13} color="#D97706" />
            <span>COMPLETE INDUSTRIAL WORKFLOW &bull; ENQUIRY TO ERECTION</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '14px'
            }}
          >
            How Heavy PEB Plants Run On <span style={{ color: '#2563EB' }}>Keshav Info</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Explore the 8 interconnected stages of our specialized operating system. 
            Click any stage below to inspect shop-floor controls, automated formulas, and bottlenecks eliminated.
          </p>
        </div>

        {/* Horizontal Step Pipeline Bar */}
        <div 
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '8px',
            paddingBottom: '14px',
            marginBottom: '32px',
            borderBottom: '2px solid #F1F5F9',
            scrollbarWidth: 'thin'
          }}
        >
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: isActive ? `1.5px solid ${st.color}` : '1px solid #E2E8F0',
                  backgroundColor: isActive ? '#EFF6FF' : '#FFFFFF',
                  color: isActive ? st.color : '#475569',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 800 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.18s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none'
                }}
              >
                <span 
                  className="mono" 
                  style={{ 
                    fontSize: '0.72rem', 
                    padding: '2px 6px', 
                    borderRadius: '4px', 
                    backgroundColor: isActive ? st.color : '#F1F5F9',
                    color: isActive ? '#FFFFFF' : '#64748B',
                    fontWeight: 700 
                  }}
                >
                  {st.stepNum}
                </span>
                <span>{st.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div 
          className="card"
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #CBD5E1',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)'
          }}
        >
          {/* Top Stage Bar */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '20px',
              marginBottom: '26px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: `1.5px solid ${current.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: current.color,
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)'
                }}
              >
                {current.icon}
              </div>
              <div>
                <span className="mono" style={{ fontSize: '0.74rem', color: current.color, fontWeight: 700, letterSpacing: '0.04em' }}>
                  {current.badge}
                </span>
                <h3 className="heading-font" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  {current.title}
                </h3>
              </div>
            </div>

            <span className="badge-tech" style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', fontSize: '0.78rem' }}>
              {current.subtitle}
            </span>
          </div>

          {/* Main Content Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              marginBottom: '28px'
            }}
          >
            {/* Left: Overview & Key Capabilities */}
            <div>
              <p style={{ color: '#334155', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '22px' }}>
                {current.description}
              </p>

              <h4 className="heading-font" style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Engineered Capabilities & Algorithms:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {current.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#1E293B' }}>
                    <CheckCircle2 size={17} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Bottleneck Solved + Live Telemetry Banner */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Bottleneck Card */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '22px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <AlertCircle size={18} color="#D97706" />
                  <span className="heading-font" style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                    Ground-Reality Shop Bottleneck Eliminated
                  </span>
                </div>

                <div style={{ marginBottom: '14px', padding: '12px', borderRadius: '8px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: '#DC2626', fontWeight: 700, marginBottom: '4px' }}>
                    BEFORE (EXCEL / GENERIC ERP / TALLY):
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#991B1B', margin: 0, lineHeight: 1.5 }}>
                    {current.bottleneckSolved.before}
                  </p>
                </div>

                <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: '#047857', fontWeight: 700, marginBottom: '4px' }}>
                    AFTER (KESHAV INFO INDUSTRIAL OS):
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#065F46', margin: 0, lineHeight: 1.5 }}>
                    {current.bottleneckSolved.after}
                  </p>
                </div>
              </div>

              {/* Real-time Telemetry Status Snippet */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span className="status-pulse" style={{ backgroundColor: current.color }} />
                <span className="mono" style={{ fontSize: '0.78rem', color: '#334155', fontWeight: 600 }}>
                  {current.telemetrySnippet}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions Bar */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              borderTop: '1px solid #E2E8F0',
              paddingTop: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '0.84rem' }}>
              <Clock size={15} color="#2563EB" />
              <span>Full onboarding takes 3-5 weeks with guaranteed shop-floor parallel runs.</span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link 
                to="/workstation" 
                className="btn btn-secondary" 
                style={{ padding: '9px 18px', fontSize: '0.86rem', fontWeight: 600 }}
              >
                Test in Live Workstation &rarr;
              </Link>
              <button 
                onClick={onOpenConsultation}
                className="btn btn-primary" 
                style={{ padding: '9px 20px', fontSize: '0.86rem', fontWeight: 700 }}
              >
                Request Plant Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
