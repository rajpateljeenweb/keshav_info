import React, { useState } from 'react';
import ErpSimulator from '../components/ErpSimulator';
import { 
  Cpu, 
  Layers, 
  HelpCircle, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck,
  Plus,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Workstation({ onOpenConsultation }) {
  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Workstation Header */}
      <section style={{ padding: '35px 0 45px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Link to="/" style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
                  <ArrowLeft size={14} /> Back to Home
                </Link>
                <span style={{ color: '#CBD5E1' }}>/</span>
                <span className="mono" style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 600 }}>STEELCORE WORKSTATION SANDBOX</span>
              </div>
              <h1 className="heading-font" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Interactive ERP Sandbox & Workstation
              </h1>
            </div>

            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '11px 22px', fontSize: '0.9rem', fontWeight: 600 }}
            >
              Request Plant Assessment &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Simulator */}
      <div style={{ backgroundColor: '#F8FAFC' }}>
        <ErpSimulator />
      </div>

      {/* Guide & Instructions on How to Test the Workstation */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h3 className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '22px' }}>
              How This Workstation Mirrors Real PEB Plant Operations
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
              <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontWeight: 700, fontSize: '0.98rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} /> 1. Tekla Part Mark Sync
                </div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Search any part mark (e.g. <code>MCL-1</code>, <code>RAF-01</code>). Notice how weights, lengths, grades, and drawing revisions are tied to the exact structural grid.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D97706', fontWeight: 700, fontSize: '0.98rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} /> 2. Stage Progression Click
                </div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Click "Advance &rarr;" on any BOQ item. Watch it progress from Fit-up to Submerged Arc Welding (SAW), Straightening, and Shot Blasting.
                </p>
              </div>

              <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700, fontSize: '0.98rem', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} /> 3. Erection Sequencing
                </div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Explore Tab 4 to see how trailers are sequenced. Foundation anchor bolts and base columns are always cleared before roof rafters to prevent site crane idling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
