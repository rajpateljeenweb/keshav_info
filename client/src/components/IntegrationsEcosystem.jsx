import React from 'react';
import { 
  Cpu, 
  Layers, 
  Compass, 
  Scale, 
  Database, 
  Cloud, 
  Share2, 
  ShieldCheck,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export default function IntegrationsEcosystem() {
  const integrations = [
    {
      name: "Tekla Structures",
      category: "3D BIM & Detailing",
      desc: "Direct .NC1 and .IFC model parser with automated R0-R4 revision delta diffing and shop-floor freeze signals.",
      badge: "CAD/CAM NATIVE",
      badgeColor: "#2563EB"
    },
    {
      name: "Metal Building Software (MBS)",
      category: "Structural Design & Estimation",
      desc: "Bi-directional import of MBS engineering design outputs, member loading, and cold-formed purlin schedules.",
      badge: "PEB ENGINE",
      badgeColor: "#0284C7"
    },
    {
      name: "AutoCAD / DXF",
      category: "2D Engineering Drafts",
      desc: "Automated extraction of gusset plates, stiffener geometries, and connection hole pitches into CNC nest files.",
      badge: "DXF PARSER",
      badgeColor: "#D97706"
    },
    {
      name: "Electronic Weighbridges",
      category: "Avery Weigh-Tronix / Essae / Rice Lake",
      desc: "Hardware RS232 serial & TCP/IP capture for tamper-proof gross, tare, and net weights with ANPR CCTV logging.",
      badge: "HARDWARE I/O",
      badgeColor: "#059669"
    },
    {
      name: "CNC Plasma & Laser Tables",
      category: "Hypertherm / Messer / ProArc",
      desc: "Post-processor export of optimized 2D nesting G-code directly to cutting tables with kerf allowance calculations.",
      badge: "CNC POST-PROC",
      badgeColor: "#7C3AED"
    },
    {
      name: "SAP / Tally ERP / Busy",
      category: "Corporate Financial Accounting",
      desc: "Direct two-way financial ledger sync, automated GST E-Way Bill generation, and progressive RA billing vouchers.",
      badge: "FINANCIAL SYNC",
      badgeColor: "#E11D48"
    }
  ];

  return (
    <section 
      style={{
        padding: '75px 0',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
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

        {/* Integration Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
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
                      border: `1px solid #E2E8F0`,
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
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginBottom: '12px' }}>
                  {item.category}
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="mono" style={{ fontSize: '0.72rem', color: '#64748B' }}>Protocol: Native API / Serial</span>
                <span style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700 }}>Active Driver &bull; Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
