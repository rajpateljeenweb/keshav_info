import React from 'react';
import RoiCalculator from '../components/RoiCalculator';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoiCalculatorPage({ onOpenConsultation }) {
  const assumptions = [
    {
      title: "Plate & Coil Nesting Scrap (3.8% Recovery)",
      detail: "Based on empirical data across 18 heavy structural plants replacing manual plate nesting with Keshav Info's automated 2D remnant reservation algorithm."
    },
    {
      title: "Piece-Rate Contractor Overcharge (1.5% Recovery)",
      detail: "Eliminates duplicate claims, inflated weight calculations, and unverified stage billing by locking payables to digital ultrasonic NABL signoffs."
    },
    {
      title: "Crane & Trailer Detention Avoidance (₹35,000/day Saved)",
      detail: "Site cranes never sit idle waiting for missing anchor bolts or base stubs because dispatches strictly match erection ground sequence."
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="badge-tech badge-emerald" style={{ marginBottom: '14px' }}>
            <span>ENTERPRISE FINANCIAL MODELING</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Interactive PEB Tonnage & Cashflow Calculator
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Quantify how much capital is leaking from your fabrication bays into scrap bins, 
            contractor duplicate billing, and sequence delays.
          </p>
        </div>
      </section>

      {/* Embedded Calculator */}
      <div>
        <RoiCalculator onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Methodology & Assumptions */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <h3 className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '22px' }}>
              Calculation Methodology & Empirical Assumptions
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginBottom: '40px' }}>
              {assumptions.map((item, idx) => (
                <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.96rem', marginBottom: '10px' }}>
                    {item.title}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
              >
                Validate ROI Model for Your Specific Plant &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
