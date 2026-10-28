import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer 
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '70px 0 32px',
        color: '#64748B'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <Link to="/" style={{ display: 'inline-flex', marginBottom: '14px', textDecoration: 'none' }}>
              <BrandLogo size={34} showText={true} subtitle="PEB SYSTEMS" />
            </Link>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: '#475569', marginBottom: '16px' }}>
              Specialized industrial software engineering lab. We produce custom ERPs, Tekla 3D model revision bridges, 
              raw coil slitting optimizers, and sequence dispatch systems for Pre-Engineered Building (PEB) manufacturers.
            </p>

            <div className="badge-tech badge-emerald" style={{ fontSize: '0.72rem' }}>
              18+ PLANT DEPLOYMENTS &bull; 185k+ MT
            </div>
          </div>

          {/* Software Systems */}
          <div>
            <h4 className="heading-font" style={{ color: '#0F172A', fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.02em' }}>
              SOFTWARE SUITE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li>
                <Link to="/solutions" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.18s' }}>
                  SteelCore™ PEB Enterprise ERP
                </Link>
              </li>
              <li>
                <Link to="/solutions" style={{ color: '#475569', textDecoration: 'none' }}>
                  TeklaBridge™ .NC1 & .IFC Sync
                </Link>
              </li>
              <li>
                <Link to="/solutions" style={{ color: '#475569', textDecoration: 'none' }}>
                  CoilTrack™ Slitting & Roll-Forming
                </Link>
              </li>
              <li>
                <Link to="/solutions" style={{ color: '#475569', textDecoration: 'none' }}>
                  ErectSync™ Mobile Field Companion
                </Link>
              </li>
              <li>
                <Link to="/solutions" style={{ color: '#475569', textDecoration: 'none' }}>
                  Dedicated EPC Client Portals
                </Link>
              </li>
              <li>
                <Link to="/workstation" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>
                  Interactive Workstation Sandbox &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Plant Tools & Benchmarks */}
          <div>
            <h4 className="heading-font" style={{ color: '#0F172A', fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.02em' }}>
              BENCHMARKS & COMPARISONS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li>
                <Link to="/why-generic-fails" style={{ color: '#475569', textDecoration: 'none' }}>
                  Why SAP / Tally Fails in PEB
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" style={{ color: '#475569', textDecoration: 'none' }}>
                  Tonnage Cashflow Calculator
                </Link>
              </li>
              <li>
                <Link to="/case-studies" style={{ color: '#475569', textDecoration: 'none' }}>
                  1,200 MT/Mo Heavy Plant Case Study
                </Link>
              </li>
              <li>
                <Link to="/case-studies" style={{ color: '#475569', textDecoration: 'none' }}>
                  Roll-Forming Purlin Plant Audit
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#475569', textDecoration: 'none' }}>
                  About Keshav Info & Engineering Ethos
                </Link>
              </li>
            </ul>
          </div>

          {/* Plant Consultation Contact */}
          <div>
            <h4 className="heading-font" style={{ color: '#0F172A', fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '0.02em' }}>
              TECHNICAL LAB CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#2563EB" />
                <span className="mono" style={{ color: '#2563EB', fontWeight: 600 }}>engineering@keshavinfo.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#059669" />
                <span className="mono" style={{ color: '#059669', fontWeight: 600 }}>+91 98250 88214</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Western Industrial Corridor (Surat &bull; Valsad &bull; Ahmedabad)</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <Link
                  to="/contact"
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.84rem', padding: '9px 14px' }}
                >
                  Schedule Walkthrough &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline" style={{ margin: '0 0 28px' }} />

        {/* Bottom Bar: Copyright & Standards */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.8rem',
            color: '#64748B'
          }}
        >
          <div>
            &copy; 2026 Keshav Info &bull; Keshav Information Systems. All rights reserved.
          </div>

          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span>IS 800:2007</span>
            <span>AISC 360</span>
            <span>MBMA</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
