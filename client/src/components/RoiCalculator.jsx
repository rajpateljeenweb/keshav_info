import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  ArrowRight
} from 'lucide-react';

export default function RoiCalculator({ onOpenConsultation }) {
  const [monthlyTonnage, setMonthlyTonnage] = useState(650);
  const [steelPrice, setSteelPrice] = useState(58000);
  const [activeProjects, setActiveProjects] = useState(6);
  const [currentSystem, setCurrentSystem] = useState('excel');
  const [results, setResults] = useState(null);

  useEffect(() => {
    const scrapPct = currentSystem === 'excel' ? 0.038 : currentSystem === 'generic_erp' ? 0.022 : 0.032;
    const contractorPct = 0.015;
    const craneDays = activeProjects * 2.5;

    const annualTurnover = monthlyTonnage * 12 * steelPrice;
    const scrapSavings = annualTurnover * scrapPct;
    const contractorSavings = annualTurnover * contractorPct;
    const craneSavings = craneDays * 35000;
    const totalSavings = Math.round(scrapSavings + contractorSavings + craneSavings);
    const paybackWeeks = Math.max(2.5, Math.round((350000 / (totalSavings / 52)) * 10) / 10);
    const metricTonsSaved = Math.round(monthlyTonnage * 12 * scrapPct);

    setResults({
      annualTurnover,
      scrapSavings: Math.round(scrapSavings),
      contractorSavings: Math.round(contractorSavings),
      craneSavings: Math.round(craneSavings),
      totalSavings,
      paybackWeeks,
      metricTonsSaved
    });

    fetch('/api/calculate-roi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        monthlyTonnage,
        steelPricePerMT: steelPrice,
        activeProjects,
        currentTracking: currentSystem
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.totalEstimatedAnnualSavingsINR) {
        setResults({
          annualTurnover: data.annualSteelTurnoverINR,
          scrapSavings: data.scrapSavingsINR,
          contractorSavings: data.contractorBillingRecoveryINR,
          craneSavings: data.siteDetentionSavedINR,
          totalSavings: data.totalEstimatedAnnualSavingsINR,
          paybackWeeks: data.projectedPaybackWeeks,
          metricTonsSaved: data.metricTonsSavedYearly
        });
      }
    })
    .catch(() => {});
  }, [monthlyTonnage, steelPrice, activeProjects, currentSystem]);

  const formatINR = (val) => {
    if (!val) return '₹ 0';
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section 
      id="roi-calculator"
      style={{
        padding: '80px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div className="badge-tech" style={{ marginBottom: '12px' }}>
            <span>FINANCIAL BENCHMARK TOOL</span>
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
            Calculate Your Plant's Cashflow Retention
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Adjust your monthly structural steel tonnage and tracking methods to quantify recoverable working capital.
          </p>
        </div>

        {/* Crisp Grid */}
        <div 
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '26px',
            alignItems: 'stretch'
          }}
        >
          {/* Controls Side */}
          <div 
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <h3 className="heading-font" style={{ color: '#0F172A', fontSize: '1.15rem', fontWeight: 700 }}>
              Operational Parameters
            </h3>

            {/* Slider 1 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
                  Monthly Fabrication Tonnage
                </label>
                <span className="mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#2563EB' }}>
                  {monthlyTonnage} MT / mo
                </span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2500" 
                step="50"
                value={monthlyTonnage} 
                onChange={(e) => setMonthlyTonnage(Number(e.target.value))} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>
                <span>100 MT</span>
                <span>1,200 MT</span>
                <span>2,500 MT</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
                  Average Steel Base Price
                </label>
                <span className="mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#2563EB' }}>
                  ₹ {steelPrice.toLocaleString('en-IN')} / MT
                </span>
              </div>
              <input 
                type="range" 
                min="48000" 
                max="85000" 
                step="1000"
                value={steelPrice} 
                onChange={(e) => setSteelPrice(Number(e.target.value))} 
              />
            </div>

            {/* Slider 3 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
                  Active Sites in Progress
                </label>
                <span className="mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#2563EB' }}>
                  {activeProjects} Projects
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="25" 
                step="1"
                value={activeProjects} 
                onChange={(e) => setActiveProjects(Number(e.target.value))} 
              />
            </div>

            {/* Current Method */}
            <div>
              <label style={{ fontSize: '0.86rem', color: '#475569', display: 'block', marginBottom: '10px', fontWeight: 500 }}>
                Current Shop-Floor Method
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'excel', label: 'Excel / Sheets' },
                  { id: 'generic_erp', label: 'Tally / SAP' },
                  { id: 'manual', label: 'Manual Ledgers' }
                ].map((sys) => (
                  <button
                    key={sys.id}
                    onClick={() => setCurrentSystem(sys.id)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: currentSystem === sys.id ? '1px solid #1D4ED8' : '1px solid #CBD5E1',
                      backgroundColor: currentSystem === sys.id ? '#2563EB' : '#FFFFFF',
                      color: currentSystem === sys.id ? '#FFFFFF' : '#334155',
                      fontSize: '0.8rem',
                      fontWeight: currentSystem === sys.id ? 700 : 500,
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: currentSystem === sys.id ? '0 2px 8px rgba(37,99,235,0.25)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {sys.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Side */}
          {results && (
            <div 
              style={{
                backgroundColor: '#EFF6FF',
                borderRadius: '14px',
                border: '1px solid #BFDBFE',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#1E40AF', fontWeight: 700 }}>
                    PROJECTED ANNUAL CASH RECOVERY
                  </span>
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#047857', padding: '3px 8px', borderRadius: '4px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                    PAYBACK: ~{results.paybackWeeks} WEEKS
                  </span>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
                    Total Estimated Annual Cashflow Retention
                  </div>
                  <div 
                    className="heading-font"
                    style={{
                      fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                      fontWeight: 800,
                      color: '#1D4ED8',
                      lineHeight: 1.1,
                      marginTop: '6px'
                    }}
                  >
                    {formatINR(results.totalSavings)}
                    <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}> / year</span>
                  </div>
                  <div className="mono" style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600, marginTop: '6px' }}>
                    ~{results.metricTonsSaved} Metric Tonnes of prime steel scrap saved yearly
                  </div>
                </div>

                {/* Minimal Breakdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 14px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.86rem'
                    }}
                  >
                    <span style={{ color: '#334155', fontWeight: 500 }}>Plate & Coil Scrap Salvage</span>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 700 }}>{formatINR(results.scrapSavings)}</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 14px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.86rem'
                    }}
                  >
                    <span style={{ color: '#334155', fontWeight: 500 }}>Contractor Duplicate Billing Recovery</span>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 700 }}>{formatINR(results.contractorSavings)}</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 14px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.86rem'
                    }}
                  >
                    <span style={{ color: '#334155', fontWeight: 500 }}>Crane & Trailer Idling Avoided</span>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 700 }}>{formatINR(results.craneSavings)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ width: '100%', padding: '13px', fontSize: '0.94rem', fontWeight: 700 }}
              >
                Discuss Plant ROI Implementation &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
