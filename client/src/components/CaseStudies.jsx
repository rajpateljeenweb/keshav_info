import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight
} from 'lucide-react';

export default function CaseStudies({ onOpenConsultation }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "1,200 MT/Mo Heavy Structural Steel & PEB Fabrication Facility",
      location: "Western Industrial Corridor, Gujarat",
      scale: "32-Acre Yard &bull; 4 Heavy SAW Welding Bays &bull; 1,200 MT/Mo",
      challenge: "The facility was struggling with frequent Tekla drawing revisions (R0 to R3) that failed to reach plasma cutting tables in time, resulting in scrapped plates. Sub-contractor piece-rate welding claims recorded in paper notebooks caused 2% duplicate billing. Dispatches were loaded randomly, causing site cranes to sit idle.",
      solution: "Implemented Keshav Info SteelCore™ ERP with TeklaBridge™ automated 3D model parsing, 8-stage physical barcoded shop-floor gating, and sequence-wise trailer load optimization.",
      metrics: [
        { label: "Plate Scrap Saved", value: "3.6%", note: "Direct ₹1.42 Cr annual raw steel recovery" },
        { label: "Turnaround Time", value: "-22 Days", note: "From BOQ release to final site erection" },
        { label: "Site Crane Idling", value: "0 Hours", note: "Base columns always arrived first" },
        { label: "Contractor Leakage", value: "0 Duplicate", note: "Payables locked to ultrasonic NABL signoffs" }
      ],
      quote: "Keshav Info understands our shop floor at a level generic software companies never could. They understand plate nesting, submerged arc welding, Tekla revision diffs, and erection sequencing from direct plant experience."
    },
    {
      title: "850 MT/Mo High-Tensile Purlin & Coil Roll-Forming Center",
      location: "Central Industrial Manufacturing Zone, India",
      scale: "18-Acre High-Speed Slitting & Purlin Profiling Facility",
      challenge: "Manual weighbridge data entry created daily reconciliation gaps between incoming JSW/Tata coils and slit purlin output. Reconstructing Mill Test Certificates (MTC) for audits required digging through paper filing cabinets.",
      solution: "Deployed Keshav Info CoilTrack™ with live electronic weighbridge integration, multi-job slitting scrap optimizer, and automated 1-click Dispatch Gate Pass with QR code verification.",
      metrics: [
        { label: "Slitting Scrap Rate", value: "2.92%", note: "Down from 4.8% on standard profiles" },
        { label: "Gate Pass Speed", value: "90s", note: "Down from 45 minutes of manual paperwork" },
        { label: "Mill Heat Traceability", value: "100%", note: "Audit-ready with instant NABL cert retrieval" },
        { label: "Coil Reconciliation", value: "Real-time", note: "Zero inventory discrepancies at month end" }
      ],
      quote: "Our truck queues used to back up outside the gate for hours while clerks typed e-way bills. Now, our trailers clear security in under two minutes with complete heat number pedigree."
    },
    {
      title: "Turnkey EPC Industrial Infrastructure & Warehousing Contractor",
      location: "Industrial Logistics Hub, India",
      scale: "45-Acre Logistics Park &bull; 6 Multi-Bay Warehouses",
      challenge: "The developer's client was withholding 15% retention payments because structural milestone progress and non-destructive testing (NDT) reports were buried in email attachments and physical paper folders.",
      solution: "Deployed a dedicated Keshav Info EPC Client Portal featuring an interactive 3D structural model viewer, real-time dispatched vs erected tonnage tracking, and digital NABL inspection sign-offs.",
      metrics: [
        { label: "Milestone Billing Cycle", value: "4 Days", note: "Reduced from 26 days of manual verification" },
        { label: "Retention Release", value: "100%", note: "Instant access to all certified QA documents" },
        { label: "Client Satisfaction", value: "5 / 5", note: "Praised by institutional investors & consultants" },
        { label: "Site DPR Accuracy", value: "Real-time", note: "Geotagged erection photos synced via mobile PWA" }
      ],
      quote: "Having a dedicated client portal engineered by Keshav Info won us the ₹68 Crore Phase 2 contract. Our enterprise clients were blown away by the live transparency."
    }
  ];

  return (
    <section 
      id="case-studies"
      style={{
        padding: '80px 0',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div className="badge-tech" style={{ marginBottom: '12px' }}>
            <span>PROVEN INDUSTRIAL DEPLOYMENTS</span>
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
            PEB Plant Deployments & Results
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Real metrics from structural steel fabricators and coil processors who modernized their operations.
          </p>
        </div>

        {/* Clean Case Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '30px'
          }}
        >
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.86rem',
                fontWeight: activeCase === idx ? 700 : 500,
                transition: 'all 0.18s ease',
                backgroundColor: activeCase === idx ? '#2563EB' : '#FFFFFF',
                color: activeCase === idx ? '#FFFFFF' : '#475569',
                border: activeCase === idx ? '1px solid #1D4ED8' : '1px solid #CBD5E1',
                boxShadow: activeCase === idx ? '0 4px 12px rgba(37, 99, 235, 0.25)' : '0 1px 3px rgba(15, 23, 42, 0.04)'
              }}
            >
              Case 0{idx + 1}: {c.title.split(' ')[0]} {c.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        {(() => {
          const item = cases[activeCase];
          return (
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                maxWidth: '980px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '24px' }}>
                <div>
                  <h3 className="heading-font" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.82rem', color: '#64748B' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={15} color="#2563EB" /> {item.location}
                    </span>
                    <span className="mono" style={{ color: '#475569', fontWeight: 500 }}>
                      {item.scale}
                    </span>
                  </div>
                </div>

                <span className="mono" style={{ fontSize: '0.74rem', color: '#059669', padding: '4px 10px', borderRadius: '9999px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                  AUDITED
                </span>
              </div>

              {/* Challenge vs Solution */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '26px' }}>
                <div style={{ backgroundColor: '#FEF2F2', padding: '18px', borderRadius: '10px', border: '1px solid #FEE2E2' }}>
                  <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.04em', marginBottom: '8px' }}>
                    THE BOTTLENECKS
                  </div>
                  <p style={{ color: '#991B1B', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                    {item.challenge}
                  </p>
                </div>

                <div style={{ backgroundColor: '#EFF6FF', padding: '18px', borderRadius: '10px', border: '1px solid #DBEAFE' }}>
                  <div style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.04em', marginBottom: '8px' }}>
                    KESHAV INFO DEPLOYMENT
                  </div>
                  <p style={{ color: '#1E3A8A', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '14px',
                  marginBottom: '26px'
                }}
              >
                {item.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#F8FAFC',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div className="heading-font" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#0F172A', marginTop: '6px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '3px' }}>
                      {m.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div 
                style={{
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div style={{ fontStyle: 'italic', color: '#334155', fontSize: '0.88rem', maxWidth: '680px', lineHeight: 1.6 }}>
                  &ldquo;{item.quote}&rdquo;
                  <div style={{ fontStyle: 'normal', fontWeight: 600, color: '#64748B', fontSize: '0.78rem', marginTop: '6px' }}>
                    &mdash; Operations Director, Turnkey PEB Facility
                  </div>
                </div>

                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '10px 18px', fontSize: '0.86rem', fontWeight: 600 }}
                >
                  Discuss Deployment &rarr;
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
