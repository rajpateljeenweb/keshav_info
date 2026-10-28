import React from 'react';
import CaseStudies from '../components/CaseStudies';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  FileText,
  Boxes,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage({ onOpenConsultation }) {
  const auditPoints = [
    {
      metric: "185,400+ MT",
      label: "Heavy Structural Steel Tracked",
      desc: "Processed across 18 high-capacity fabrication plants in western and central industrial corridors."
    },
    {
      metric: "3.8% - 4.2%",
      label: "Average Plate Scrap Salvage",
      desc: "Direct reduction in raw plate and HR coil remnant loss via automated multi-order 2D nesting."
    },
    {
      metric: "68% Faster",
      label: "Trailer Dispatch & Gate Pass Speed",
      desc: "Instant GST e-way bill generation with sequence load verification, eliminating gate detention queues."
    },
    {
      metric: "Zero Duplicate",
      label: "Contractor Piece-Rate Claims",
      desc: "Fabrication contractor payables mathematically tied to barcoded ultrasonic NABL signoffs."
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 65px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="badge-tech badge-emerald" style={{ marginBottom: '14px' }}>
            <span>PROVEN INDUSTRIAL TRANSFORMATIONS</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Quantified Client Deployments & Plant Audits
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore how heavy structural steel plants, purlin roll-formers, and turnkey infrastructure builders 
            modernized their shop-floor operations, eliminated scrap leakages, and accelerated cashflow.
          </p>
        </div>
      </section>

      {/* Global Audited Stats Grid */}
      <section style={{ padding: '45px 0', backgroundColor: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
            {auditPoints.map((pt, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '26px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="heading-font" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
                  {pt.metric}
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0F172A', marginTop: '10px', marginBottom: '6px' }}>
                  {pt.label}
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.5, margin: 0 }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Deep Case Studies */}
      <div>
        <CaseStudies onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h3 className="heading-font" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Ready for Similar Quantified Results in Your Facility?
          </h3>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Schedule an on-site or virtual operational review with our industrial systems team.
          </p>
          <button 
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
          >
            Request Plant Assessment Walkthrough &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
