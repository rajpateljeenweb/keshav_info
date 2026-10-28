import React from 'react';
import { 
  CheckCircle2, 
  X, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function WhyGenericFails({ onOpenConsultation }) {
  const comparisons = [
    {
      title: "Plate Remnants & Nesting Scrap",
      genericApproach: "Generic ERPs (SAP, Tally, Zoho) treat steel plates as static SKUs. When a 25mm plate is cut into cleats, the irregular 1.4 MT leftover is written off as scrap or lost in the yard.",
      keshavApproach: "Keshav Info registers every plate off-cut remnant with a 2D QR tag, geometric dimensions, and Mill Heat Number. Our algorithm reserves it for upcoming bracket jobs, recovering 3.8% raw steel.",
      impact: "₹1.2 Cr - ₹2.4 Cr Scrap Recovery"
    },
    {
      title: "Tekla Model Revisions (R0 to R4)",
      genericApproach: "When client structural consultants revise drawings, engineers manually re-type thousands of part marks into spreadsheets. Outdated drawings reach the shop floor, resulting in scrapped beams.",
      keshavApproach: "Direct Tekla Structures .IFC and .NC1 model synchronization with automated delta-diffing. If a rafter taper changes, CNC plasma tables are automatically locked with visual revision warnings.",
      impact: "Zero Mismatched Part-Mark Rework"
    },
    {
      title: "Piece-Rate Contractor Duplicate Billing",
      genericApproach: "Plant supervisors approve contractor invoices on handwritten daily logbooks. Sub-contractors routinely bill twice for the same column fit-up or welding across different fortnights.",
      keshavApproach: "Piece-rate fabrication contractor payables are tied directly to barcoded NABL ultrasonic and visual QA inspection gates. Duplicate claims on the same part mark are mathematically impossible.",
      impact: "1.5% Labor Leakage Plugged"
    },
    {
      title: "Sequence-Wise Dispatch vs Site Ground Reality",
      genericApproach: "Generic logistics modules ship whatever is completed first. Roof purlins and sag rods arrive on site weeks before base columns and anchor bolts are ready.",
      keshavApproach: "Our sequence loading engine verifies foundation ground readiness before clearing trailers for dispatch. Base columns and anchor bolts are dispatched first, preventing crane detention penalties.",
      impact: "Zero Mobile Crane Detention Penalties"
    }
  ];

  return (
    <section 
      id="why-generic-fails"
      style={{
        padding: '70px 0',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '12px' }}>
            <span>THE STRUCTURAL STEEL REALITY</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '10px'
            }}
          >
            Structural Steel Bottlenecks Unhandled by Standard Enterprise Software
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Structural steel fabrication involves non-standard geometries, volatile raw material weights, 
            and sequenced erection loading that generic accounting packages cannot coordinate.
          </p>
        </div>

        {/* Minimal Comparison Matrix */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '1020px', margin: '0 auto 40px' }}>
          {comparisons.map((item, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '26px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 className="heading-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>
                  {idx + 1}. {item.title}
                </h3>
                <span className="mono" style={{ fontSize: '0.75rem', color: '#059669', padding: '3px 9px', borderRadius: '4px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                  {item.impact}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '16px' }}>
                {/* Generic ERP Flaw */}
                <div 
                  style={{
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '8px',
                    padding: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#DC2626', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                    <X size={15} />
                    <span>GENERIC ERP (SAP / TALLY / ZOHO)</span>
                  </div>
                  <p style={{ color: '#7F1D1D', fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>
                    {item.genericApproach}
                  </p>
                </div>

                {/* Keshav Info Engineering */}
                <div 
                  style={{
                    backgroundColor: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    borderRadius: '8px',
                    padding: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1D4ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                    <CheckCircle2 size={15} color="#2563EB" />
                    <span>KESHAV INFO STEELCORE™</span>
                  </div>
                  <p style={{ color: '#1E3A8A', fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>
                    {item.keshavApproach}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Banner */}
        <div 
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            padding: '26px 32px',
            borderRadius: '12px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <h4 style={{ color: '#0F172A', fontSize: '1.1rem', fontWeight: 800, marginBottom: '4px' }}>
              Want to see how your current plant workflow compares?
            </h4>
            <p style={{ color: '#475569', fontSize: '0.88rem', margin: 0 }}>
              Our industrial systems architects conduct a confidential 45-minute technical audit of your shop floor.
            </p>
          </div>

          <button 
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            Schedule Technical Audit &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
