import React from 'react';
import { 
  Layers, 
  Disc, 
  Smartphone, 
  Globe, 
  Check, 
  ArrowRight,
  Compass
} from 'lucide-react';

export default function ProductModules({ onOpenConsultation }) {
  const modules = [
    {
      id: "steelcore-erp",
      title: "SteelCore™ Enterprise PEB ERP",
      subtitle: "Unified Operating System for Heavy Steel Plants",
      icon: <Layers size={20} color="#2563EB" />,
      tag: "FLAGSHIP",
      description: "Replaces disconnected spreadsheets with a real-time operating system covering Tekla import, shop-floor bays, piece-rate contractors, NABL quality, and GST progressive billing.",
      features: [
        "Multi-level BOQ grid breakdown (MCL, RAF, CRG, Purlins)",
        "8-Stage physical shop-floor tracking with contractor locking",
        "Ultrasonic (UT) & DFT paint check-sheets with NABL sign-offs",
        "Progressive milestone billing with retention tracking"
      ]
    },
    {
      id: "teklabridge",
      title: "TeklaBridge™ 3D Revision Engine",
      subtitle: "Automated .NC1, .IFC & .DSTV Sync",
      icon: <Compass size={20} color="#2563EB" />,
      tag: "CAD INTEGRATION",
      description: "Direct link between engineering detailing software and the shop floor. Ingests Tekla Structures 3D models and detects drawing revisions (R0 to R4) before metal is cut.",
      features: [
        "Direct .NC1, .IFC, and DSTV CAD model parser",
        "Automated delta-diffing flagging revised part marks on shop tables",
        "Automatic generation of cut-lists, hole pitch matrices, and weld specs",
        "Shop-floor drawing archive with version-controlled engineering drawings on tablet"
      ]
    },
    {
      id: "coiltrack",
      title: "CoilTrack™ Slitting & Roll-Forming",
      subtitle: "High-Tensile Raw Coil Traceability",
      icon: <Disc size={20} color="#2563EB" />,
      tag: "SLITTING & PURLINS",
      description: "Purpose-built for coil service centers and purlin roll-formers. Tracks mother coils by weight, thickness, mill heat number, and optimizes slitting yield to under 3% scrap.",
      features: [
        "Electronic weighbridge API integration (Inward Gross & Tare)",
        "Mill Test Certificate (MTC) archiving from JSW, Tata & AM/NS",
        "Multi-job slitting pattern optimization with remnant coil tagging",
        "Purlin pre-punching hole layout generator for roll-form lines"
      ]
    },
    {
      id: "erectsync",
      title: "ErectSync™ Mobile Field Companion",
      subtitle: "Offline-First Field App for Site Erection",
      icon: <Smartphone size={20} color="#2563EB" />,
      tag: "FIELD PWA",
      description: "Dust-proof, offline-capable progressive web application for site erection crews. Verifies anchor bolt readiness, scans arrived trailer QR codes, and records Daily Progress Reports (DPR).",
      features: [
        "Offline-first PWA caching for remote construction sites without internet",
        "Instant QR verification of unloaded beams against sequence loading plan",
        "Foundation anchor-bolt clearance checklist prior to column staging",
        "Crane hour logging and daily erection tonnage DPR export"
      ]
    },
    {
      id: "epc-portal",
      title: "Dedicated EPC Client Portals",
      subtitle: "Client Facing Progress & QA Portals",
      icon: <Globe size={20} color="#2563EB" />,
      tag: "CLIENT PORTAL",
      description: "Custom branded web applications for infrastructure developers and EPC contractors (L&T, Tata Projects) to monitor project milestones, view 3D erection progress, and approve NDT certificates.",
      features: [
        "Live 3D interactive structural progress viewer",
        "Instant 1-click download of NABL certified Mill Test Certificates",
        "Dispatched vs Pending tonnage charts with trailer live tracking",
        "Digital drawing approval workflows with audit timestamps"
      ]
    }
  ];

  return (
    <section 
      id="solutions"
      style={{
        padding: '80px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
          <div className="badge-tech" style={{ marginBottom: '12px' }}>
            <span>MODULAR INDUSTRIAL ARCHITECTURE</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '12px'
            }}
          >
            Software Engineered For Heavy Metal Workflows
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Deploy individual modules or our complete unified enterprise operating system.
          </p>
        </div>

        {/* Modules Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          {modules.map((mod) => (
            <div 
              key={mod.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '26px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: '#EFF6FF',
                      border: '1px solid #BFDBFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {mod.icon}
                  </div>
                  <span className="mono" style={{ fontSize: '0.72rem', color: '#1E40AF', padding: '3px 8px', borderRadius: '4px', background: '#EFF6FF', border: '1px solid #BFDBFE', fontWeight: 600 }}>
                    {mod.tag}
                  </span>
                </div>

                <h3 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                  {mod.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#2563EB', fontWeight: 600, marginBottom: '12px' }}>
                  {mod.subtitle}
                </div>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                  {mod.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                  {mod.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                      <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.88rem', padding: '10px 16px', fontWeight: 600 }}
              >
                Request Module Demo &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
