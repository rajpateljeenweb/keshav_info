import React from 'react';
import WhyGenericFails from '../components/WhyGenericFails';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  TrendingDown, 
  Layers, 
  Coins, 
  Clock, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyGenericFailsPage({ onOpenConsultation }) {
  const deepReasons = [
    {
      num: "01",
      title: "Plate Remnants & Geometric Scrap vs Static SKUs",
      costOfFailure: "₹1.2 Cr - ₹2.4 Cr Lost Annually",
      desc: "In generic ERPs (SAP, Tally, Zoho), materials are treated as discrete inventory items (like bolts or boxes). But heavy steel plates (e.g. 2500x12000x25mm) are cut into irregular gussets and stiffeners, leaving non-standard L-shaped remnants. Generic software forces plants to write off this 1.2 MT remnant as floor scrap. Keshav Info tags every remnant with a CNC QR ID, tracks its dimensional geometry, and reserves it for upcoming bracket jobs."
    },
    {
      num: "02",
      title: "Tekla Model Revision Chaos (R0 -> R4)",
      costOfFailure: "40 - 80 Man-Hours Lost Per Revision",
      desc: "When architectural consultants alter a portal span or hole pitch mid-fabrication, generic systems have no CAD bridge. Engineers must manually cross-reference 2,000+ part marks in Excel. Inevitably, outdated drawings reach cutting tables, resulting in scrapped fabricated beams that cannot be salvaged. Keshav Info performs automated 3D delta-diffing between .NC1 models, instantly freezing plasma tables for revised marks."
    },
    {
      num: "03",
      title: "Piece-Rate Contractor Duplicate Billing",
      costOfFailure: "1.5% to 2.2% Direct Labor Overcharge",
      desc: "Heavy fabrication labor is contracted by tonnage (e.g. ₹4.80/kg for tacking, ₹6.50/kg for SAW welding). In manual ledgers, contractors frequently bill twice for the same column or rafter across different fortnights. Keshav Info locks contractor payables directly to digital NABL ultrasonic test signoffs. Once a part mark is paid for a stage, the system permanently prevents duplicate claims."
    },
    {
      num: "04",
      title: "Sequence-Wise Erection Loading vs Site Reality",
      costOfFailure: "₹35,000 - ₹50,000/day Crane Detention",
      desc: "Generic logistics modules dispatch whatever is finished and painted first. If roof rafters and sag rods arrive on a remote jobsite weeks before foundation anchor bolts and base columns are installed, the developer's 80-tonne mobile crane sits idle at immense daily detention costs. Keshav Info forces trailers to load in foundation sequence order."
    },
    {
      num: "05",
      title: "Mother Coil Weighbridge & Slitting Scrap Discrepancies",
      costOfFailure: "1.2% - 2.0% Unaccounted Steel Variance",
      desc: "Generic accounting software records coils by book quantity. It cannot account for the gross-to-tare electronic weighbridge readings, edge trim scrap %, and multi-job nesting optimization required by purlin and roll-forming plants. Keshav Info automates the 2D cutting stock calculation, driving slitting yields above 97%."
    },
    {
      num: "06",
      title: "Mill Heat Number & NABL Ultrasonic Inspection Pedigree",
      costOfFailure: "Structural Liability & Delayed Retention Payouts",
      desc: "Institutional developers (L&T, Tata Projects) withhold final 15% retention money until every structural member has an audited Mill Test Certificate (MTC) from Tata/JSW. Generic ERPs cannot associate a fabricated beam back to the mother plate's heat number. Keshav Info maintains an immutable digital pedigree from coil inward to site erection."
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 65px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <span>THE STRUCTURAL STEEL REALITY</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Technical Audit: PEB Fabrication Requirements vs Standard Enterprise ERPs
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Structural steel manufacturing requires geometry-aware remnant tracking, direct CAD revision diffing, 
            and sequenced erection logistics that standard commercial accounting software cannot coordinate.
          </p>
        </div>
      </section>

      {/* Embedded Comparison Matrix */}
      <div>
        <WhyGenericFails onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Deep Technical Analysis Grid */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <h2 className="heading-font" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '32px', textAlign: 'center' }}>
              The 6 Critical Breakdown Points of Generic Software on Shop Floors
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '50px' }}>
              {deepReasons.map((item, idx) => (
                <div 
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span className="mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563EB' }}>
                        {item.num}
                      </span>
                      <span className="badge-tech badge-amber" style={{ fontSize: '0.72rem' }}>
                        {item.costOfFailure}
                      </span>
                    </div>

                    <h3 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div 
              style={{
                backgroundColor: '#EFF6FF',
                borderRadius: '16px',
                border: '1px solid #BFDBFE',
                padding: '38px',
                textAlign: 'center',
                maxWidth: '820px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E3A8A', marginBottom: '10px' }}>
                Benchmark Your Shop-Floor Operation
              </h3>
              <p style={{ color: '#334155', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Let our industrial systems engineers evaluate your current ERP or Excel setup during a confidential 45-minute technical review.
              </p>
              <button 
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
              >
                Schedule Confidential Plant Audit &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
