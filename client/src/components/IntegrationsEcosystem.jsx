import React, { useRef, useState } from 'react';
import { 
  CheckCircle2, 
  Workflow, 
  Terminal, 
  X, 
  Layers, 
  Scale, 
  Compass
} from 'lucide-react';

export default function IntegrationsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Row 1: Engineering, 3D CAD, Detailing & Load Analysis
  const row1Integrations = [
    {
      id: "tekla",
      name: "Tekla Structures",
      category: "3D BIM & Detailing",
      categoryKey: "CAD",
      desc: "Direct .NC1 and .IFC model parser with automated R0-R4 revision delta diffing and shop-floor freeze signals.",
      badge: "CAD/CAM NATIVE",
      badgeColor: "#2563EB",
      protocol: "Native API / .NC1 Parser",
      latency: "< 240ms",
      supportedFormats: [".NC1", ".IFC 2x3/4", ".DSTV", ".DXF"],
      telemetrySample: 'INGEST_MODEL [REV_03.nc1] -> 1,248 Part Marks Parsed -> 42 Marks Auto-Frozen on Shop Floor'
    },
    {
      id: "mbs",
      name: "Metal Building Software (MBS)",
      category: "Structural PEB Design",
      categoryKey: "CAD",
      desc: "Bi-directional import of MBS engineering design outputs, member loading, and cold-formed purlin schedules.",
      badge: "PEB ENGINE",
      badgeColor: "#0284C7",
      protocol: "Direct File Ingestion",
      latency: "Batch Sync",
      supportedFormats: [".MBS", ".OUT", ".DAT", "XML"],
      telemetrySample: 'MBS_IMPORT [JOB_S147] -> Tapered Rafter Loading Vectors -> Primary Bay Clearances Verified'
    },
    {
      id: "autocad",
      name: "AutoCAD / Advance Steel",
      category: "2D/3D Engineering Drafts",
      categoryKey: "CAD",
      desc: "Automated extraction of gusset plates, stiffener geometries, and connection hole pitches into CNC nest files.",
      badge: "DXF PARSER",
      badgeColor: "#D97706",
      protocol: "DXF Geometry Extractor",
      latency: "Real-time",
      supportedFormats: [".DXF", ".DWG", ".SAT"],
      telemetrySample: 'DXF_EXTRACT [PL-25-GUSSET] -> Kerf Offset: 1.8mm -> Hole Pitch (4x Dia 24mm) Sent to Drill Bay'
    },
    {
      id: "staad",
      name: "STAAD.Pro / Bentley",
      category: "Structural Frame Analysis",
      categoryKey: "CAD",
      desc: "Imports member load vectors, portal frame axial forces, and base reaction schedules for anchor bolt engineering.",
      badge: "LOAD ANALYSIS",
      badgeColor: "#0891B2",
      protocol: "STD Model Parser",
      latency: "On-demand",
      supportedFormats: [".STD", "Text Output", "OpenSTAAD"],
      telemetrySample: 'FRAME_ANALYSIS [AXIS-B] -> Max Uplift: 48.2 kN -> Anchor Bolt Embedment Depth Verified: 650mm'
    },
    {
      id: "revit",
      name: "Autodesk Revit Structure",
      category: "Architectural Coordination",
      categoryKey: "CAD",
      desc: "Bidirectional sync between architectural master models and steel fabrication cut-lists with clash detection.",
      badge: "BIM FEDERATION",
      badgeColor: "#7C3AED",
      protocol: "Revit DB Hook / IFC",
      latency: "Sub-second",
      supportedFormats: [".RVT", ".IFC 4", "COBie"],
      telemetrySample: 'BIM_CLASH_AUDIT -> Crane Runway Beam CRG-01 vs HVAC Duct Clearances: 340mm Clear &bull; Passed'
    },
    {
      id: "sds2",
      name: "SDS/2 Steel Detailing",
      category: "Automated Connection Design",
      categoryKey: "CAD",
      desc: "Direct import of standardized moment connections, shear tabs, and splice plate hole patterns directly into BOM.",
      badge: "CONNECTION DESIGN",
      badgeColor: "#059669",
      protocol: "Connection XML / KISS",
      latency: "Real-time",
      supportedFormats: [".SDS", ".KISS", "CNC DSTV"],
      telemetrySample: 'CONN_RESOLVE [SPLICE-04] -> Moment Plate 20mm with 12x Grade 8.8 M24 Bolts Auto-Populated'
    }
  ];

  // Row 2: Machinery, Electronic Weighbridges, CNC & Financial Ledgers
  const row2Integrations = [
    {
      id: "weighbridge",
      name: "Electronic Weighbridges",
      category: "Avery Weigh-Tronix / Essae / Rice Lake",
      categoryKey: "HARDWARE",
      desc: "Hardware RS232 serial & TCP/IP capture for tamper-proof gross, tare, and net weights with ANPR CCTV logging.",
      badge: "HARDWARE I/O",
      badgeColor: "#059669",
      protocol: "RS232 / TCP-IP Driver",
      latency: "< 50ms",
      supportedFormats: ["Continuous ASCII", "Modbus", "IP Stream"],
      telemetrySample: 'WEIGHBRIDGE_COM1 -> Inward Gross: 42.15 MT -> Tare: 14.22 MT -> Net Mother Coil: 27.93 MT Locked'
    },
    {
      id: "plasma",
      name: "CNC Plasma & Laser Tables",
      category: "Hypertherm / Messer / ProArc",
      categoryKey: "MACHINERY",
      desc: "Post-processor export of optimized 2D nesting G-code directly to cutting tables with kerf allowance calculations.",
      badge: "CNC POST-PROC",
      badgeColor: "#7C3AED",
      protocol: "G-Code / CNC Controller",
      latency: "Direct Spool",
      supportedFormats: [".CNC", ".TAP", ".NC", "EIA Standard"],
      telemetrySample: 'CNC_SPOOL_BAY01 -> 16mm Plate Nest Job #NST-88 -> Torch Height Auto-Z &bull; Scrap Yield: 97.4%'
    },
    {
      id: "sap",
      name: "SAP S/4HANA & Business One",
      category: "Corporate Financial Accounting",
      categoryKey: "FINANCE",
      desc: "Two-way ledger sync for steel procurement POs, progressive RA billing claims, and automatic GST E-Way Bill generation.",
      badge: "ENTERPRISE ERP",
      badgeColor: "#E11D48",
      protocol: "REST API & RFC Bridge",
      latency: "Sub-second",
      supportedFormats: ["JSON", "OData", "IDoc"],
      telemetrySample: 'SAP_SYNC_OUT -> RA Bill #04 Posted (₹48,22,100) -> E-Way Bill Generated in 82 Seconds'
    },
    {
      id: "tally",
      name: "Tally Prime & Busy ERP",
      category: "Commercial Invoicing & Tax",
      categoryKey: "FINANCE",
      desc: "Automatic sales voucher posting, scrap credit notes, and subcontractor piece-rate payable vouchers with zero re-keying.",
      badge: "FINANCIAL SYNC",
      badgeColor: "#D97706",
      protocol: "XML / TDL Server Hook",
      latency: "Immediate",
      supportedFormats: ["Tally XML", "JSON", "ODBC"],
      telemetrySample: 'TALLY_POST -> Contractor Sub-ledger #C-04 Approved: ₹1,24,800 (Piece-rate 26 MT welded)'
    },
    {
      id: "saw",
      name: "Submerged Arc Welders (SAW)",
      category: "Lincoln Electric / ESAB Gantry",
      categoryKey: "MACHINERY",
      desc: "Captures weld wire heat numbers, AWS flux batch codes, and travel speed logs for audited fabrication QA dossiers.",
      badge: "WELD AUTOMATION",
      badgeColor: "#2563EB",
      protocol: "PLC Modbus / Sensor Hub",
      latency: "100ms Telemetry",
      supportedFormats: ["Modbus TCP", "OPC-UA", "WPS Telemetry"],
      telemetrySample: 'SAW_GANTRY_02 -> Current: 650A &bull; Voltage: 32V &bull; Speed: 42 cm/min -> WPS Qualified Pass'
    },
    {
      id: "elcometer",
      name: "Elcometer & Ultrasonic Gauges",
      category: "NABL Inspection & Coating Gauges",
      categoryKey: "HARDWARE",
      desc: "Direct digital recording of ultrasonic weld test (UT) results and dry film paint thickness (DFT) logs onto part marks.",
      badge: "QC COMPLIANCE",
      badgeColor: "#0891B2",
      protocol: "Bluetooth Gauge Sync",
      latency: "Live Pairing",
      supportedFormats: ["BLE Telemetry", "ElcoMaster", "CSV NDT"],
      telemetrySample: 'DFT_PROBE_READ -> Bay 07 Paint DFT: 124 microns (Spec: 100-140) -> Digital NABL Pass Attached'
    }
  ];

  const allIntegrations = [...row1Integrations, ...row2Integrations];

  const filteredIntegrations = selectedCategory === 'ALL' 
    ? allIntegrations 
    : allIntegrations.filter(item => item.categoryKey === selectedCategory);

  const categories = [
    { key: 'ALL', label: 'All Certified Systems (12)' },
    { key: 'CAD', label: '3D CAD & Detailing (6)' },
    { key: 'MACHINERY', label: 'Machinery & CNC (2)' },
    { key: 'HARDWARE', label: 'Weighbridges & Hardware (2)' },
    { key: 'FINANCE', label: 'Financial Ledgers & ERP (2)' },
  ];

  // Duplicated arrays for continuous infinite marquee
  const track1Items = [...row1Integrations, ...row1Integrations];
  const track2Items = [...row2Integrations, ...row2Integrations];

  return (
    <section 
      style={{
        padding: '75px 0 85px',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 32px' }}>
          <div className="badge-tech badge-cyan" style={{ marginBottom: '10px' }}>
            <Workflow size={13} color="#0284C7" />
            <span>INTEROPERABLE INDUSTRIAL ECOSYSTEM</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '12px'
            }}
          >
            Direct Integration With Your Existing Tools & Machinery
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
            You do not need to replace your detailing software or factory weighbridges. 
            Keshav Info connects natively with your CAD systems, CNC tables, and financial ledgers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              style={{
                padding: '7px 15px',
                borderRadius: '8px',
                border: selectedCategory === cat.key ? '1px solid #2563EB' : '1px solid #CBD5E1',
                backgroundColor: selectedCategory === cat.key ? '#EFF6FF' : '#FFFFFF',
                color: selectedCategory === cat.key ? '#2563EB' : '#475569',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                fontWeight: selectedCategory === cat.key ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.16s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Rendering: If a specific filter is active, show focused grid; otherwise show Dual-Track Continuous Auto-Scroll */}
      {selectedCategory !== 'ALL' ? (
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
              padding: '10px 0'
            }}
          >
            {filteredIntegrations.map((item) => (
              <IntegrationCard 
                key={item.id} 
                item={item} 
                onSelect={() => setActiveModalItem(item)} 
              />
            ))}
          </div>
        </div>
      ) : (
        /* Dual-Track Multi-Card Auto-Scroll Marquee with Opposite Directions */
        <div 
          className="ecosystem-marquee-mask"
          style={{ width: '100%', position: 'relative' }}
        >
          {/* Track 1: CAD & Detailing (Scrolls Left) */}
          <div style={{ marginBottom: '20px' }}>
            <div
              className="ecosystem-track-left"
              style={{
                display: 'flex',
                gap: '20px',
                width: 'max-content',
                paddingLeft: '24px',
                paddingRight: '24px'
              }}
            >
              {track1Items.map((item, idx) => (
                <IntegrationCard 
                  key={`t1-${idx}`} 
                  item={item} 
                  onSelect={() => setActiveModalItem(item)} 
                />
              ))}
            </div>
          </div>

          {/* Track 2: Machinery, Weighbridges, CNC & Finance (Scrolls Right) */}
          <div>
            <div
              className="ecosystem-track-right"
              style={{
                display: 'flex',
                gap: '20px',
                width: 'max-content',
                paddingLeft: '24px',
                paddingRight: '24px'
              }}
            >
              {track2Items.map((item, idx) => (
                <IntegrationCard 
                  key={`t2-${idx}`} 
                  item={item} 
                  onSelect={() => setActiveModalItem(item)} 
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Technical Inspection Modal */}
      {activeModalItem && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #CBD5E1',
              width: '100%',
              maxWidth: '640px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                padding: '20px 24px',
                backgroundColor: '#F8FAFC',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span 
                  className="mono" 
                  style={{ 
                    fontSize: '0.72rem', 
                    color: activeModalItem.badgeColor, 
                    padding: '3px 8px', 
                    borderRadius: '4px', 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E2E8F0',
                    fontWeight: 700 
                  }}
                >
                  {activeModalItem.badge}
                </span>
                <h3 className="heading-font" style={{ fontSize: '1.28rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  {activeModalItem.name}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  color: '#64748B',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginBottom: '6px' }}>
                SYSTEM DOMAIN &amp; ROLE:
              </div>
              <div style={{ fontSize: '1rem', color: '#0F172A', fontWeight: 700, marginBottom: '14px' }}>
                {activeModalItem.category}
              </div>

              <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '22px' }}>
                {activeModalItem.desc}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '22px' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>COMMUNICATION PROTOCOL</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginTop: '4px' }}>
                    {activeModalItem.protocol}
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div className="mono" style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>SYNC LATENCY</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#059669', marginTop: '4px' }}>
                    {activeModalItem.latency}
                  </div>
                </div>
              </div>

              {/* Supported File Extensions / Formats */}
              <div style={{ marginBottom: '22px' }}>
                <div className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700, marginBottom: '8px' }}>
                  SUPPORTED FILE FORMATS &amp; I/O SPECIFICATIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeModalItem.supportedFormats.map((fmt, fIdx) => (
                    <span 
                      key={fIdx}
                      className="mono"
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#EFF6FF',
                        border: '1px solid #BFDBFE',
                        color: '#1D4ED8',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Live Telemetry Packet */}
              <div>
                <div className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700, marginBottom: '8px' }}>
                  LIVE INDUSTRIAL TELEMETRY PACKET:
                </div>
                <div 
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: '#1E293B',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Terminal size={15} color="#2563EB" style={{ flexShrink: 0 }} />
                  <span>{activeModalItem.telemetrySample}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div 
              style={{
                padding: '16px 24px',
                backgroundColor: '#F8FAFC',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px'
              }}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="btn btn-secondary"
                style={{ padding: '8px 18px', fontSize: '0.86rem' }}
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Marquee Keyframes & Multi-Track Styles */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translateX(calc(-50% - 10px));
          }
          100% {
            transform: translateX(0);
          }
        }

        .ecosystem-track-left {
          animation: marquee-scroll-left 42s linear infinite;
          will-change: transform;
        }

        .ecosystem-track-right {
          animation: marquee-scroll-right 44s linear infinite;
          will-change: transform;
        }
        .ecosystem-marquee-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
        }

        .integration-card-interactive {
          cursor: pointer;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .integration-card-interactive:hover {
          transform: translateY(-5px) scale(1.015);
          box-shadow: 0 18px 36px -4px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04) !important;
          border-color: #93C5FD !important;
        }

        @media (max-width: 768px) {
          .ecosystem-track-left {
            animation-duration: 26s;
          }
          .ecosystem-track-right {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}

// Reusable Multi-Card Component with Hover Effects & Direct Click Handler
function IntegrationCard({ item, onSelect }) {
  return (
    <div 
      onClick={onSelect}
      className="card integration-card-interactive"
      style={{
        width: '350px',
        flexShrink: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-card)',
        position: 'relative'
      }}
    >
      {/* Top 3px Colored Accent Border Bar */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: item.badgeColor,
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px'
        }}
      />

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span 
            className="mono" 
            style={{ 
              fontSize: '0.68rem', 
              color: item.badgeColor, 
              padding: '3px 8px', 
              borderRadius: '4px', 
              backgroundColor: '#F8FAFC', 
              border: '1px solid #E2E8F0',
              fontWeight: 700 
            }}
          >
            {item.badge}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#059669', fontSize: '0.74rem', fontWeight: 600 }}>
            <span className="status-pulse" style={{ backgroundColor: '#059669', width: '6px', height: '6px' }} />
            <span>Ready</span>
          </div>
        </div>

        <h3 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
          {item.name}
        </h3>
        <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginBottom: '10px' }}>
          {item.category}
        </div>
        <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
          {item.desc}
        </p>
      </div>

      <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="mono" style={{ fontSize: '0.72rem', color: '#64748B' }}>
            {item.protocol}
          </span>
          <span className="mono" style={{ fontSize: '0.72rem', color: '#2563EB', fontWeight: 700 }}>
            {item.latency}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
            Click to inspect protocol
          </span>
          <span style={{ fontSize: '0.76rem', color: '#2563EB', fontWeight: 600 }}>
            Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
