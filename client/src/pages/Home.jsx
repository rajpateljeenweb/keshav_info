import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ErpSimulator from '../components/ErpSimulator';
import EnquiryToErectionLifecycle from '../components/EnquiryToErectionLifecycle';
import IntegrationsEcosystem from '../components/IntegrationsEcosystem';
import { 
  Building2, 
  Layers, 
  Disc, 
  HardHat, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2,
  TrendingUp,
  ShieldCheck,
  Compass,
  Smartphone,
  Globe,
  Calculator,
  ChevronRight
} from 'lucide-react';

export default function Home({ onOpenConsultation }) {
  const industries = [
    {
      title: "Pre-Engineered Building (PEB) Plants",
      icon: <Building2 size={22} color="#2563EB" />,
      tag: "PRIMARY NICHE",
      desc: "Plants fabricating custom portal frames, tapered columns, rafters, mezzanine girders, crane runways, and cold-formed purlins.",
      stats: "12 Plants Powered &bull; 110,000+ MT"
    },
    {
      title: "Heavy Structural Steel Fabricators",
      icon: <Layers size={22} color="#D97706" />,
      tag: "HEAVY FABRICATION",
      desc: "Facilities welding heavy built-up plate girders, box columns, trusses, and industrial crane infrastructure requiring strict WPS & NABL testing.",
      stats: "4 Heavy Yards &bull; 48,000+ MT"
    },
    {
      title: "Coil Service Centers & Profiling Lines",
      icon: <Disc size={22} color="#059669" />,
      tag: "COIL & ROLL-FORM",
      desc: "High-speed purlin roll-forming (C/Z sections) and trapezoidal sheet profiling with mother coil slitting scrap optimization.",
      stats: "6 Slitting Lines &bull; 2.9% Avg Scrap"
    },
    {
      title: "Turnkey EPC Infrastructure Contractors",
      icon: <HardHat size={22} color="#7C3AED" />,
      tag: "SITE ERECTION",
      desc: "EPC enterprises requiring ground-reality alignment between factory trailer dispatch sequencing and on-site foundation bolt readiness.",
      stats: "350+ Buildings Erected On-Time"
    }
  ];

  const solutionsPreview = [
    {
      name: "SteelCore™ PEB ERP",
      desc: "Complete shop-floor operating system linking Tekla BOQs to 8 physical fabrication stages, contractor piece-rate payables, and progressive GST billing.",
      tag: "CORE ERP",
      color: "#2563EB",
      icon: <Layers size={20} color="#2563EB" />
    },
    {
      name: "TeklaBridge™ 3D BIM Sync",
      desc: "Ingests .NC1 and .IFC models. Performs automated delta-diffing when clients revise drawings (R0 to R4), automatically locking CNC cutting tables.",
      tag: "CAD / CAM",
      color: "#D97706",
      icon: <Compass size={20} color="#D97706" />
    },
    {
      name: "CoilTrack™ Slitting Suite",
      desc: "Electronic weighbridge integration and 2D slitting pattern optimization for high-tensile coils. Reduces purlin edge trim scrap below 3%.",
      tag: "SLITTING",
      color: "#059669",
      icon: <Disc size={20} color="#059669" />
    },
    {
      name: "ErectSync™ Mobile Field PWA",
      desc: "Offline-capable progressive web app for site engineers. Scans trailer QR codes, verifies foundation anchor bolt readiness, and logs daily DPR.",
      tag: "MOBILE PWA",
      color: "#7C3AED",
      icon: <Smartphone size={20} color="#7C3AED" />
    },
    {
      name: "Dedicated EPC Client Portals",
      desc: "Branded client progress portals where institutional developers and EPC contractors inspect 3D erection progress and download NABL test certificates.",
      tag: "CLIENT EXPERIENCE",
      color: "#E11D48",
      icon: <Globe size={20} color="#E11D48" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        onOpenConsultation={onOpenConsultation}
        onExploreSimulator={() => {
          const el = document.getElementById('workstation-preview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 1. Who We Serve: Industry Categories */}
      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px' }}>
            <div className="badge-tech badge-amber" style={{ marginBottom: '10px' }}>
              <span>PURPOSE-BUILT INDUSTRY CATEGORIES</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Dedicated Software for Heavy Metal Enterprises
            </h2>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
              We do not build generic software. Every module is tailored specifically for heavy structural steel fabricators, coil service centers, and turnkey EPC builders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="card card-cobalt"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {ind.icon}
                    </div>
                    <span className="mono" style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', color: '#475569', fontWeight: 600 }}>
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    {ind.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {ind.desc}
                  </p>
                </div>

                <div className="mono" style={{ fontSize: '0.76rem', color: '#2563EB', fontWeight: 600, borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  {ind.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Enquiry to Erection Lifecycle Pipeline */}
      <EnquiryToErectionLifecycle onOpenConsultation={onOpenConsultation} />

      {/* 2. Solutions Preview Section */}
      <section style={{ padding: '70px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <div className="badge-tech" style={{ marginBottom: '10px' }}>
                <span>MODULAR INDUSTRIAL ARCHITECTURE</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Our 5 Specialized Software Solutions
              </h2>
            </div>

            <Link to="/solutions" className="btn btn-secondary" style={{ fontSize: '0.88rem', fontWeight: 600 }}>
              Explore Detailed Specs &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {solutionsPreview.map((sol, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-card)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {sol.icon}
                    </div>
                    <span className="mono" style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', color: sol.color, fontWeight: 700 }}>
                      {sol.tag}
                    </span>
                  </div>

                  <h3 className="heading-font" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                    {sol.name}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }}>
                  <Link to="/solutions" style={{ color: '#2563EB', fontSize: '0.84rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Inspect Architecture Specs <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Workstation Preview */}
      <section id="workstation-preview" style={{ padding: '70px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <div className="badge-tech badge-amber" style={{ marginBottom: '10px' }}>
              <span>HANDS-ON SIMULATION</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Experience the SteelCore™ Workstation Live
            </h2>
            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Test real Tekla part marks, shop-floor 8-stage gating, raw coil slitting yields, and sequence dispatch manifests.
            </p>
          </div>

          {/* Embedded Simulator */}
          <ErpSimulator />

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link 
              to="/workstation"
              className="btn btn-secondary"
              style={{ padding: '12px 26px', fontSize: '0.92rem', gap: '8px', fontWeight: 600 }}
            >
              <Maximize2 size={16} color="#2563EB" />
              Open Dedicated Fullscreen Sandbox Page &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Certified Third-Party Ecosystem & Machine Integrations */}
      <IntegrationsEcosystem />

      {/* 4. Why Generic ERPs Break Down (Summary) */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="badge-tech badge-amber" style={{ marginBottom: '10px' }}>
                <span>THE STRUCTURAL STEEL REALITY</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Operational Differences: Dedicated PEB Systems vs General Accounting Tools
              </h2>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '22px' }}>
                Standard enterprise packages assume discrete retail inventory and uniform assemblies. Structural steel plants require geometry-aware remnant tagging, CAD revision diffing, and sequenced dispatch loading:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Plate remnants are treated as lost scrap instead of reusable geometry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Tekla drawing revisions (R0 to R4) cause costly beam cutting mismatches</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#059669', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Contractors bill duplicate piece-rate claims on handwritten logs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#1E293B' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>Trailers ship out of sequence, idling site mobile cranes at ₹35,000/day</span>
                </div>
              </div>

              <Link to="/why-generic-fails" className="btn btn-primary" style={{ fontSize: '0.92rem', padding: '12px 22px', fontWeight: 600 }}>
                Read Full Technical Breakdown &rarr;
              </Link>
            </div>

            {/* Visual Contrast Card */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '30px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>FIELD METRICS COMPARISON</span>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.68rem' }}>AUDITED</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>PLATE SCRAP RECOVERY</div>
                  <div className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#2563EB', marginTop: '2px' }}>
                    3.8% to 4.2% Saved
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px' }}>
                    Direct ₹1.2 Cr - ₹2.4 Cr raw steel salvage per plant
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>PIECE-RATE CONTRACTOR LEAKAGE</div>
                  <div className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
                    Zero Duplicate Invoices
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px' }}>
                    Locked mathematically to digital NABL ultrasonic test signoffs
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>DISPATCH GATE PASS SPEED</div>
                  <div className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#D97706', marginTop: '2px' }}>
                    90 Seconds (was 45 min)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px' }}>
                    Instant GST e-Way Bill with verified sequence loading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tonnage ROI Teaser Banner */}
      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div 
            style={{
              backgroundColor: '#EFF6FF',
              borderRadius: '16px',
              border: '1px solid #BFDBFE',
              padding: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div className="badge-tech badge-emerald" style={{ marginBottom: '10px' }}>
                <span>FINANCIAL BENCHMARK TOOL</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E3A8A', marginBottom: '8px' }}>
                Calculate Your Plant's Bottom-Line Working Capital Retention
              </h3>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                Input your monthly fabrication tonnage and current shop-floor tracking methods to see estimated annual savings on scrap, contractor billing, and crane detention.
              </p>
            </div>

            <Link to="/roi-calculator" className="btn btn-primary" style={{ padding: '13px 26px', fontSize: '0.94rem', fontWeight: 700 }}>
              Launch Full ROI Calculator &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Case Studies Preview */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <div className="badge-tech" style={{ marginBottom: '10px' }}>
                <span>PROVEN INDUSTRIAL DEPLOYMENTS</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Audited Plant Results Across India
              </h2>
            </div>

            <Link to="/case-studies" className="btn btn-secondary" style={{ fontSize: '0.88rem', fontWeight: 600 }}>
              View All Case Studies &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
            {[
              {
                title: "1,200 MT/Mo Heavy Structural Steel Plant",
                loc: "Western Industrial Corridor, Gujarat",
                res: "₹1.42 Cr Saved Annually",
                detail: "3.6% reduction in plate scrap loss and zero duplicate contractor claims across 4 heavy welding bays."
              },
              {
                title: "850 MT/Mo High-Tensile Purlin Center",
                loc: "Central Industrial Manufacturing Zone",
                res: "90s Gate Pass Dispatch",
                detail: "100% electronic weighbridge integration and real-time mill heat number traceability for JSW/Tata coils."
              },
              {
                title: "45-Acre Logistics Park EPC Contractor",
                loc: "Industrial Warehousing Hub",
                res: "4-Day Milestone Billing",
                detail: "Deployed dedicated 3D EPC client portal, reducing milestone verification cycle from 26 days to 4 days."
              }
            ].map((c, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                  {c.loc}
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  {c.title}
                </h3>
                <div className="mono" style={{ fontSize: '0.95rem', color: '#059669', fontWeight: 800, marginBottom: '8px' }}>
                  {c.res}
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="badge-tech badge-emerald" style={{ marginBottom: '12px' }}>
            <span>TAILORED INDUSTRIAL IMPLEMENTATION</span>
          </div>
          <h2 className="heading-font" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Ready to Streamline Your Fabrication Bays?
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Schedule a confidential 45-minute technical review with our industrial solutions architects. 
            We analyze your drawing revision workflows, scrap rates, and shop stages.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              Book Plant Assessment Walkthrough &rarr;
            </button>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '13px 26px', fontSize: '0.96rem', fontWeight: 600 }}>
              Contact Labs & Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
