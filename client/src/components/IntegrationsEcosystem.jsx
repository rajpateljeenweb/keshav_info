import React, { useRef, useState } from 'react';
import { 
  CheckCircle2, 
  Workflow, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play
} from 'lucide-react';

export default function IntegrationsEcosystem() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const integrations = [
    {
      name: "Tekla Structures",
      category: "3D BIM & Detailing",
      desc: "Direct .NC1 and .IFC model parser with automated R0-R4 revision delta diffing and shop-floor freeze signals.",
      badge: "CAD/CAM NATIVE",
      badgeColor: "#2563EB",
      protocol: "Native API / .NC1 Parser"
    },
    {
      name: "Metal Building Software (MBS)",
      category: "Structural Design & Estimation",
      desc: "Bi-directional import of MBS engineering design outputs, member loading, and cold-formed purlin schedules.",
      badge: "PEB ENGINE",
      badgeColor: "#0284C7",
      protocol: "Direct File Ingestion"
    },
    {
      name: "AutoCAD / DXF",
      category: "2D Engineering Drafts",
      desc: "Automated extraction of gusset plates, stiffener geometries, and connection hole pitches into CNC nest files.",
      badge: "DXF PARSER",
      badgeColor: "#D97706",
      protocol: "DXF Geometry Extractor"
    },
    {
      name: "Electronic Weighbridges",
      category: "Avery Weigh-Tronix / Essae / Rice Lake",
      desc: "Hardware RS232 serial & TCP/IP capture for tamper-proof gross, tare, and net weights with ANPR CCTV logging.",
      badge: "HARDWARE I/O",
      badgeColor: "#059669",
      protocol: "RS232 / TCP-IP Driver"
    },
    {
      name: "CNC Plasma & Laser Tables",
      category: "Hypertherm / Messer / ProArc",
      desc: "Post-processor export of optimized 2D nesting G-code directly to cutting tables with kerf allowance calculations.",
      badge: "CNC POST-PROC",
      badgeColor: "#7C3AED",
      protocol: "G-Code / CNC Controller"
    },
    {
      name: "SAP / Tally ERP / Busy",
      category: "Corporate Financial Accounting",
      desc: "Direct two-way financial ledger sync, automated GST E-Way Bill generation, and progressive RA billing vouchers.",
      badge: "FINANCIAL SYNC",
      badgeColor: "#E11D48",
      protocol: "REST API & XML Bridge"
    },
    {
      name: "STAAD.Pro / Bentley",
      category: "Structural Frame Engineering",
      desc: "Import member load vectors, portal frame axial forces, and base reaction schedules for anchor bolt engineering.",
      badge: "LOAD ANALYSIS",
      badgeColor: "#0891B2",
      protocol: "STD Model Parser"
    },
    {
      name: "NABL & Elcometer Gauges",
      category: "Ultrasonic UT & DFT Inspection",
      desc: "Direct digital capture of weld ultrasonic testing (UT) and dry film paint thickness logs, auto-linking to part marks.",
      badge: "QC COMPLIANCE",
      badgeColor: "#059669",
      protocol: "Bluetooth Gauge Sync"
    }
  ];

  // Duplicate list to achieve continuous infinite marquee loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
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

        {/* Controls & Status Bar */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span 
              className="status-pulse" 
              style={{ backgroundColor: isPaused ? '#D97706' : '#059669' }} 
            />
            <span 
              className="mono" 
              style={{ 
                fontSize: '0.74rem', 
                color: isPaused ? '#B45309' : '#047857', 
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              {isPaused ? 'SCROLL PAUSED' : 'AUTO-SCROLL ACTIVE &bull; HOVER TO PAUSE'}
            </span>
          </div>

          {/* Pause Toggle & Manual Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsPaused(!isPaused)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                color: '#334155',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? <Play size={12} fill="#334155" /> : <Pause size={12} fill="#334155" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            <button
              onClick={() => handleManualScroll('left')}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#334155',
                transition: 'all 0.15s ease'
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={() => handleManualScroll('right')}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#334155',
                transition: 'all 0.15s ease'
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed Marquee Container with Gradient Edge Masks */}
      <div 
        className="ecosystem-marquee-mask"
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          padding: '10px 0 20px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollContainerRef}
          className={`ecosystem-track ${isPaused ? 'track-paused' : ''}`}
          style={{
            display: 'flex',
            gap: '20px',
            width: 'max-content',
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          {duplicatedIntegrations.map((item, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                width: '340px',
                flexShrink: 0,
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontSize: '0.74rem', fontWeight: 600 }}>
                    <CheckCircle2 size={13} />
                    <span>Certified</span>
                  </div>
                </div>

                <h3 className="heading-font" style={{ fontSize: '1.14rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {item.name}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginBottom: '10px' }}>
                  {item.category}
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="mono" style={{ fontSize: '0.72rem', color: '#64748B' }}>
                  Protocol: {item.protocol}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700 }}>
                  Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Keyframes & Mask Styles */}
      <style>{`
        @keyframes ecosystem-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .ecosystem-track {
          animation: ecosystem-marquee 38s linear infinite;
          will-change: transform;
        }

        .ecosystem-track.track-paused {
          animation-play-state: paused !important;
        }

        .ecosystem-marquee-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
        }

        @media (max-width: 768px) {
          .ecosystem-track {
            animation-duration: 26s;
          }
        }
      `}</style>
    </section>
  );
}
