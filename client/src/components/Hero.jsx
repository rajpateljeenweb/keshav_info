import React from 'react';
import { 
  Play, 
  Terminal, 
  CheckCircle2, 
  Factory,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenConsultation, onExploreSimulator }) {
  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0'
      }}
      className="tech-grid-bg"
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Asymmetric 2-Column Hero Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '48px'
          }}
        >
          {/* Left Column: Direct, Concrete Engineering Copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <div className="badge-tech">
                <Factory size={13} color="#2563EB" />
                <span>KESHAV INFO &bull; STRUCTURAL STEEL LAB</span>
              </div>
            </div>

            <h1 
              className="heading-font"
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '18px',
                color: '#0F172A'
              }}
            >
              Enterprise Operating Systems for PEB & Heavy Steel Plants
            </h1>

            <p 
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#334155',
                marginBottom: '28px',
                fontWeight: 400
              }}
            >
              Tekla 3D model revision bridges, shop-floor SAW welding trackers, coil slitting yield optimizers, 
              and erection-sequence trailer dispatch. Built for structural steel plants processing 300 to 3,000 MT per month.
            </p>

            {/* Action CTAs */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              <button 
                onClick={onExploreSimulator}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.94rem' }}
              >
                <Play size={15} fill="#FFFFFF" />
                Launch Live Workstation
              </button>

              <button 
                onClick={onOpenConsultation}
                className="btn btn-secondary"
                style={{ padding: '12px 22px', fontSize: '0.94rem' }}
              >
                Schedule Plant Walkthrough
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Live Operational Metrics Pill Strip */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: '#475569',
                paddingTop: '16px',
                borderTop: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="status-pulse" style={{ backgroundColor: '#059669' }} />
                <span>18 Plants Operating</span>
              </div>
              <div>&bull;</div>
              <div>185,400+ MT Tracked</div>
              <div>&bull;</div>
              <div>IS 800:2007 Verified</div>
            </div>
          </div>

          {/* Right Column: Live Interactive Telemetry Card */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #CBD5E1',
              overflow: 'hidden',
              boxShadow: '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)'
            }}
          >
            {/* Console Header */}
            <div 
              style={{
                padding: '12px 18px',
                backgroundColor: '#F8FAFC',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600, marginLeft: '6px' }}>
                  steelcore-os://plant-node-01/telemetry
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="status-pulse" style={{ backgroundColor: '#059669' }} />
                <span className="mono" style={{ fontSize: '0.72rem', color: '#047857', fontWeight: 700 }}>
                  LIVE SHOP TELEMETRY
                </span>
              </div>
            </div>

            {/* Console Body */}
            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Job Info */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>PROJECT IN EXECUTION</div>
                  <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.94rem', marginBottom: '4px' }}>
                    JOB S-147: Industrial Bay (Valsad, Guj.)
                  </div>
                  <div style={{ color: '#2563EB', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px' }}>
                    Tekla Model: <span style={{ color: '#D97706' }}>Rev R2.nc1 (842 Part Marks Synced)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#475569' }}>
                    <span>Tonnage: <strong style={{ color: '#0F172A' }}>480.5 MT</strong></span>
                    <span>Fabricated: <strong style={{ color: '#059669' }}>71.2%</strong></span>
                  </div>
                </div>

                {/* Stage Gate */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>ACTIVE STAGE GATE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D97706', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
                    <span className="status-pulse" style={{ backgroundColor: '#D97706' }} />
                    SAW Beam Welder Bay 02 &bull; MCL-01..14
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: 1.5, margin: 0 }}>
                    WPS-PEB-01 Qualified &bull; 100% Ultrasonic Testing (UT) &bull; Verified Piece-Rate Payables
                  </p>
                </div>

                {/* Dispatch Status */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>ERECTION DISPATCH SEQUENCE</div>
                  <div style={{ color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', marginBottom: '4px' }}>
                    <CheckCircle2 size={15} /> Trailer 04 Loaded (GJ-15)
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: 1.5, margin: 0 }}>
                    Payload: 26.85 MT &bull; Base Stubs & Columns sequenced first for site mobile cranes.
                  </p>
                </div>
              </div>

              {/* Terminal Log */}
              <div 
                style={{
                  marginTop: '14px',
                  padding: '9px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  color: '#334155',
                  fontSize: '0.74rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Terminal size={14} color="#2563EB" />
                <span>Mother Coil JSW-98421 (24.62 MT) de-coiled &bull; Slit Yield: 96.88% &bull; Tag REM-24B-01 archived</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Cards with Top Accents */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '32px'
          }}
        >
          <div className="card border-top-cobalt" style={{ padding: '20px' }}>
            <div className="heading-font" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
              185,400+ <span style={{ fontSize: '0.95rem', color: '#64748B' }}>MT</span>
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Heavy Steel Tracked
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
              Across 18 high-capacity plants
            </div>
          </div>

          <div className="card border-top-amber" style={{ padding: '20px' }}>
            <div className="heading-font" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>
              3.8% - 4.2%
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Scrap Loss Reduction
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
              Plate & HR coil nesting recovery
            </div>
          </div>

          <div className="card border-top-emerald" style={{ padding: '20px' }}>
            <div className="heading-font" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>
              68% Faster
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Dispatch Turnaround
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
              90-second gate pass generation
            </div>
          </div>

          <div className="card border-top-cyan" style={{ padding: '20px' }}>
            <div className="heading-font" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0284C7', lineHeight: 1 }}>
              100% Heat #
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Mill MTC Traceability
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>
              Coil inward to site erection
            </div>
          </div>
        </div>

        {/* Standards Verification Strip */}
        <div style={{ textAlign: 'center' }}>
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              color: '#475569',
              fontWeight: 600
            }}
          >
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>IS 800:2007 Compliant</span>
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>MBMA Standards</span>
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>AISC 360 Structural Code</span>
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>Tekla .NC1 / .IFC Certified</span>
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>ISO 8501-1 Sa 2.5 Blasting</span>
            <span className="badge-tech" style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', color: '#334155' }}>Mill MTC Pedigree</span>
          </div>
        </div>
      </div>
    </section>
  );
}
