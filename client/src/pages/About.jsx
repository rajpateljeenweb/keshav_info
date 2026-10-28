import React from 'react';
import TechArchitecture from '../components/TechArchitecture';
import { 
  Layers, 
  ShieldCheck, 
  Factory, 
  MapPin, 
  CheckCircle2, 
  HeartHandshake, 
  ArrowRight,
  Cpu,
  HardHat
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ onOpenConsultation }) {
  const values = [
    {
      title: "Deep Domain Grounding",
      desc: "We don't build generic software for e-commerce or dentists. Every engineer on our team understands Tekla .NC1 part marks, plate nesting kerf allowances, Submerged Arc Welding (SAW), and foundation bolt tolerances."
    },
    {
      title: "Zero Fluff Engineering",
      desc: "Real industrial software requires mathematical precision, immutable database audit trails, and hardware integration with weighbridges and CNC plasma tables rather than abstract claims."
    },
    {
      title: "Dust-Proof & Offline-First",
      desc: "We design software for noisy fabrication bays and remote building sites with intermittent 4G. Our offline-first PWA caching guarantees zero work stoppages."
    },
    {
      title: "Confidentiality & Non-Disclosure",
      desc: "Our clients include premier infrastructure leaders and high-tonnage PEB manufacturers. We maintain strict non-disclosure policies, never leaking client proprietary designs or commercial margins."
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 65px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <span>ABOUT KESHAV INFO</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Software Engineering for the Heavy Metal Backbone of Infrastructure
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Keshav Info is a dedicated industrial systems and enterprise software engineering lab 
            producing operational systems for Pre-Engineered Building (PEB) manufacturers, heavy structural steel plants, 
            and coil processing facilities.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <div className="badge-tech" style={{ marginBottom: '12px' }}>
                  <span>OUR ORIGIN & PHILOSOPHY</span>
                </div>
                <h2 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                  Born Inside the Fabrication Bay, Not a Generic Tech Incubator
                </h2>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  We didn't start Keshav Info to build another generic accounting tool or trendy mobile app. 
                  We spent countless hours walking fabrication bays, watching cranes haul 20-tonne girders, 
                  and observing the intense frustration of shop managers when drawing revisions were lost in messy WhatsApp chats.
                </p>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                  We realized that generic ERPs like SAP and Tally completely broke down on shop floors because they treated structural steel like static retail inventory. 
                  We set out to engineer dedicated software that speaks the authentic language of structural steel: 
                  part marks, mill heat numbers, weld test records, and sequence-wise erection loading.
                </p>
              </div>

              {/* Stat card */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '34px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                  <Factory size={26} color="#2563EB" />
                  <span className="mono" style={{ fontSize: '0.85rem', color: '#1D4ED8', fontWeight: 700 }}>
                    KESHAV INFO LAB METRICS
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <div className="heading-font" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
                      185,400+ MT
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '4px', fontWeight: 500 }}>
                      Fabricated Steel Tracked Across Client Facilities
                    </div>
                  </div>

                  <div>
                    <div className="heading-font" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>
                      18 Plants
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '4px', fontWeight: 500 }}>
                      Active Commercial Deployments Across India
                    </div>
                  </div>

                  <div>
                    <div className="heading-font" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>
                      100% Traceability
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '4px', fontWeight: 500 }}>
                      Mill Heat Numbers From Coil Inward to Site Erection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Values */}
      <section style={{ padding: '75px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 45px' }}>
            <h2 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              Our Engineering Principles
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem' }}>
              How we approach software development for heavy manufacturing environments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px', maxWidth: '1080px', margin: '0 auto' }}>
            {values.map((v, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '26px', boxShadow: 'var(--shadow-card)' }}>
                <h3 className="heading-font" style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  {v.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <TechArchitecture />

      {/* Contact Banner */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h3 className="heading-font" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Meet With Our Industrial Solutions Team
          </h3>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
            We welcome plant directors, general managers, and structural engineers to visit our software labs or book an on-site operational review.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              Book Plant Assessment Walkthrough &rarr;
            </button>
            <Link 
              to="/contact"
              className="btn btn-secondary"
              style={{ padding: '13px 26px', fontSize: '0.96rem', fontWeight: 600 }}
            >
              Office Locations & Phone Numbers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
