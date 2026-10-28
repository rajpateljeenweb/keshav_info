import React, { useState } from 'react';
import { 
  MOCK_BOQ_ITEMS, 
  FABRICATION_STAGES, 
  SAMPLE_COILS, 
  TRAILER_LOAD_SAMPLE 
} from '../data/pebDomain';
import { 
  Layers, 
  Cpu, 
  Truck, 
  Disc, 
  Search, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  Download,
  ArrowRight
} from 'lucide-react';

export default function ErpSimulator() {
  const [activeTab, setActiveTab] = useState('boq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStageFilter, setSelectedStageFilter] = useState('ALL');
  const [selectedBoqItem, setSelectedBoqItem] = useState(MOCK_BOQ_ITEMS[0]);
  const [activeStageIndex, setActiveStageIndex] = useState(2);
  const [selectedCoil, setSelectedCoil] = useState(SAMPLE_COILS[0]);
  const [gatePassGenerated, setGatePassGenerated] = useState(false);
  const [itemsList, setItemsList] = useState(MOCK_BOQ_ITEMS);

  const filteredBoqItems = itemsList.filter(item => {
    const matchesSearch = item.part_mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.grid.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStageFilter === 'ALL' || item.stage_id === Number(selectedStageFilter);
    return matchesSearch && matchesStage;
  });

  const handleAdvanceStage = (itemId) => {
    setItemsList(prev => prev.map(item => {
      if (item.boq_id === itemId && item.stage_id < 8) {
        const nextStage = FABRICATION_STAGES.find(s => s.id === item.stage_id + 1);
        return {
          ...item,
          stage_id: item.stage_id + 1,
          stage: nextStage ? nextStage.name : item.stage
        };
      }
      return item;
    }));
  };

  return (
    <section 
      id="simulator"
      style={{
        padding: '70px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
          <div className="badge-tech" style={{ marginBottom: '12px' }}>
            <span>LIVE INTERACTIVE WORKSTATION</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '10px'
            }}
          >
            SteelCore™ Industrial Operating Workstation
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Click through real factory workflows below to see how our software orchestrates Tekla part marks, 
            shop-floor stage inspections, coil slitting yields, and sequence dispatches.
          </p>
        </div>

        {/* Crisp Workstation Container */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #CBD5E1',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)'
          }}
        >
          {/* Segmented Control Header */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F8FAFC',
              borderBottom: '1px solid #E2E8F0',
              padding: '10px 16px',
              gap: '12px'
            }}
          >
            {/* Segmented Tabs */}
            <div 
              style={{
                display: 'inline-flex',
                background: '#E2E8F0',
                borderRadius: '8px',
                padding: '4px',
                gap: '3px',
                flexWrap: 'wrap'
              }}
            >
              {[
                { id: 'boq', label: '1. Tekla BOQ & Grids', icon: <Layers size={15} /> },
                { id: 'stages', label: '2. Shop-Floor 8-Stage Tracker', icon: <Cpu size={15} /> },
                { id: 'coil', label: '3. Raw Coil & Slit Yield', icon: <Disc size={15} /> },
                { id: 'dispatch', label: '4. Sequence Dispatch', icon: <Truck size={15} /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.84rem',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    transition: 'all 0.15s ease',
                    backgroundColor: activeTab === tab.id ? '#FFFFFF' : 'transparent',
                    color: activeTab === tab.id ? '#2563EB' : '#475569',
                    boxShadow: activeTab === tab.id ? '0 1px 4px rgba(15, 23, 42, 0.1)' : 'none'
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: '#ECFDF5', borderRadius: '999px', border: '1px solid #A7F3D0' }}>
              <span className="status-pulse" style={{ backgroundColor: '#10B981' }} />
              <span className="mono" style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 600 }}>
                KESHAV INFO &bull; CONNECTED
              </span>
            </div>
          </div>

          {/* Tab 1: Tekla BOQ */}
          {activeTab === 'boq' && (
            <div style={{ padding: '24px' }}>
              {/* Search and Filters */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1', minWidth: '260px' }}>
                  <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                    <Search size={15} color="#64748B" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      placeholder="Filter Part Mark (e.g. MCL-1, RAF)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-control mono"
                      style={{ paddingLeft: '34px', fontSize: '0.84rem' }}
                    />
                  </div>

                  <select
                    value={selectedStageFilter}
                    onChange={(e) => setSelectedStageFilter(e.target.value)}
                    className="input-control mono"
                    style={{ width: 'auto', minWidth: '180px', fontSize: '0.84rem' }}
                  >
                    <option value="ALL">All Stages</option>
                    {FABRICATION_STAGES.map(s => (
                      <option key={s.id} value={s.id}>{s.id}. {s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mono" style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 500 }}>
                  Showing <strong style={{ color: '#0F172A' }}>{filteredBoqItems.length}</strong> of {itemsList.length} Tekla Parts
                </div>
              </div>

              {/* Clean Bright Table */}
              <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F8FAFC', color: '#475569', borderBottom: '1px solid #E2E8F0', fontWeight: 700 }}>
                      <th style={{ padding: '12px 16px' }} className="mono">PART MARK</th>
                      <th style={{ padding: '12px 16px' }}>DESCRIPTION / GRID</th>
                      <th style={{ padding: '12px 16px' }} className="mono">GRADE / LENGTH</th>
                      <th style={{ padding: '12px 16px' }} className="mono">QTY</th>
                      <th style={{ padding: '12px 16px' }} className="mono">TOTAL WT</th>
                      <th style={{ padding: '12px 16px' }}>STAGE GATE</th>
                      <th style={{ padding: '12px 16px' }} className="mono">REV</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBoqItems.map((item) => (
                      <tr 
                        key={item.boq_id}
                        className="table-row-hover"
                        style={{
                          borderBottom: '1px solid #F1F5F9',
                          backgroundColor: '#FFFFFF',
                          cursor: 'pointer'
                        }}
                      >
                        <td style={{ padding: '12px 16px' }} className="mono">
                          <span style={{ color: '#2563EB', fontWeight: 700 }}>{item.part_mark}</span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ color: '#0F172A', fontWeight: 600 }}>{item.description}</div>
                          <div style={{ color: '#64748B', fontSize: '0.75rem' }}>{item.grid}</div>
                        </td>
                        <td style={{ padding: '12px 16px' }} className="mono">
                          <div style={{ color: '#334155' }}>{item.steel_grade}</div>
                          <div style={{ color: '#64748B', fontSize: '0.75rem' }}>{item.length_mm} mm</div>
                        </td>
                        <td style={{ padding: '12px 16px' }} className="mono">
                          <span style={{ fontWeight: 600, color: '#0F172A' }}>{item.quantity}</span>
                        </td>
                        <td style={{ padding: '12px 16px' }} className="mono">
                          <span style={{ color: '#D97706', fontWeight: 700 }}>
                            {item.total_weight_kg.toLocaleString()} kg
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <span 
                            className="mono"
                            style={{
                              padding: '3px 8px',
                              borderRadius: '4px',
                              fontSize: '0.74rem',
                              fontWeight: 600,
                              backgroundColor: item.stage_id === 8 ? '#ECFDF5' : '#EFF6FF',
                              color: item.stage_id === 8 ? '#047857' : '#1D4ED8',
                              border: `1px solid ${item.stage_id === 8 ? '#A7F3D0' : '#BFDBFE'}`
                            }}
                          >
                            {item.stage_id}. {item.stage}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px' }} className="mono">
                          <span style={{ color: item.revision.includes('R2') ? '#059669' : '#D97706', fontWeight: 600 }}>
                            {item.revision}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                          <button
                            onClick={() => handleAdvanceStage(item.boq_id)}
                            disabled={item.stage_id >= 8}
                            className="btn btn-secondary"
                            style={{
                              padding: '5px 10px',
                              fontSize: '0.75rem',
                              opacity: item.stage_id >= 8 ? 0.4 : 1
                            }}
                          >
                            Advance &rarr;
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Clean Note */}
              <div 
                style={{
                  marginTop: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  color: '#475569',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: '12px 16px',
                  background: '#F8FAFC',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#059669" />
                  <span><strong>Tekla Delta-Diffing Engine:</strong> Automatically pauses CNC plasma tables when revision R2/R3 is issued.</span>
                </div>
                <span className="mono" style={{ fontSize: '0.72rem', color: '#2563EB', fontWeight: 600 }}>
                  NC1 &bull; IFC &bull; DSTV COMPLIANT
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: 8-Stage Tracker */}
          {activeTab === 'stages' && (
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#0F172A', marginBottom: '4px', fontSize: '1.1rem', fontWeight: 700 }}>
                  Physical Fabrication Stage Flow with NABL Inspection Gates
                </h4>
                <p style={{ color: '#475569', fontSize: '0.86rem' }}>
                  Click each production stage below to inspect piece-rate contractor locking, welder qualifications, and NABL ultrasonic check-sheets.
                </p>
              </div>

              {/* Stage Stepper */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                  gap: '8px',
                  marginBottom: '24px'
                }}
              >
                {FABRICATION_STAGES.map((stage, idx) => {
                  const isSelected = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setActiveStageIndex(idx)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: isSelected ? '#EFF6FF' : '#F8FAFC',
                        border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                        transition: 'all 0.15s ease',
                        textAlign: 'center'
                      }}
                    >
                      <div className="mono" style={{ fontSize: '0.68rem', color: isSelected ? '#2563EB' : '#64748B', fontWeight: 700 }}>
                        STAGE 0{stage.id}
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: isSelected ? '#1D4ED8' : '#0F172A', marginTop: '3px' }}>
                        {stage.code}
                      </div>
                      <div className="mono" style={{ fontSize: '0.68rem', color: '#64748B', marginTop: '2px' }}>
                        {stage.dept}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Stage Detail */}
              {(() => {
                const curStage = FABRICATION_STAGES[activeStageIndex];
                return (
                  <div 
                    style={{
                      padding: '24px',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '24px'
                    }}
                  >
                    <div>
                      <div className="mono" style={{ fontSize: '0.74rem', color: '#2563EB', fontWeight: 700, marginBottom: '6px' }}>
                        INSPECTING STAGE 0{curStage.id}
                      </div>
                      <h3 style={{ color: '#0F172A', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                        {curStage.name}
                      </h3>
                      <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '16px' }}>
                        Every beam entering this stage is tracked via 2D QR codes attached during cutting. 
                        Contractor payouts are locked until NABL quality signs off.
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
                          <span style={{ color: '#64748B' }}>Code & Standard:</span>
                          <span className="mono" style={{ color: '#B45309', fontWeight: 600 }}>{curStage.standard}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
                          <span style={{ color: '#64748B' }}>Authorized Dept:</span>
                          <span style={{ color: '#0F172A', fontWeight: 600 }}>{curStage.dept}</span>
                        </div>
                      </div>
                    </div>

                    {/* QA Checklist */}
                    <div style={{ backgroundColor: '#FFFFFF', padding: '18px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <span className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700 }}>STAGE QA CHECKLIST</span>
                        <span className="badge-emerald" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>PASS &bull; 100%</span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B' }}>
                          <CheckCircle2 size={15} color="#059669" />
                          <span>Dimensional Check vs Tekla Rev 2 (Diagonal &plusmn; 2mm)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B' }}>
                          <CheckCircle2 size={15} color="#059669" />
                          <span>WPS & Welder Certificate (AWS D1.1 ID: W-04)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B' }}>
                          <CheckCircle2 size={15} color="#059669" />
                          <span>Mill Heat Number Match (JSW Plate HT-7721-B)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B' }}>
                          <CheckCircle2 size={15} color="#059669" />
                          <span>Piece-Rate Contractor auto-calculated: &#8377; 4.80/kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Tab 3: Raw Coil & Slit Yield */}
          {activeTab === 'coil' && (
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
                {/* Left: Mother Coil Selection */}
                <div>
                  <h4 style={{ color: '#0F172A', marginBottom: '6px', fontSize: '1.1rem', fontWeight: 700 }}>
                    Mother Coil Inward & Heat Traceability
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.84rem', marginBottom: '16px' }}>
                    Select a raw coil to inspect automated slitting calculations and remnant tracking.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {SAMPLE_COILS.map((coil) => (
                      <div
                        key={coil.coil_id}
                        onClick={() => setSelectedCoil(coil)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          backgroundColor: selectedCoil.coil_id === coil.coil_id ? '#EFF6FF' : '#F8FAFC',
                          border: selectedCoil.coil_id === coil.coil_id ? '2px solid #2563EB' : '1px solid #E2E8F0',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <span className="mono" style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.86rem' }}>
                            {coil.coil_id}
                          </span>
                          <span className="mono" style={{ color: '#0F172A', fontSize: '0.84rem', fontWeight: 700 }}>
                            {coil.gross_weight_mt} MT
                          </span>
                        </div>
                        <div style={{ fontSize: '0.84rem', color: '#0F172A', fontWeight: 600 }}>
                          {coil.mill}
                        </div>
                        <div className="mono" style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>
                          Heat #{coil.heat_number} &bull; {coil.thickness_mm}mm ({coil.grade})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Slitting Analytics */}
                <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="mono" style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 700 }}>SLITTING YIELD RECONCILIATION</span>
                    <span className="badge-emerald" style={{ fontSize: '0.7rem' }}>
                      SCRAP SAVINGS: {(4.2 - selectedCoil.scrap_rate_pct).toFixed(2)}%
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '18px' }}>
                    <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>GROSS INWARD</div>
                      <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                        {selectedCoil.gross_weight_mt} MT
                      </div>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.72rem', color: '#64748B' }}>NET PRIME OUTPUT</div>
                      <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669' }}>
                        {selectedCoil.slit_output_mt} MT
                      </div>
                    </div>
                  </div>

                  {/* Visual Bar */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '6px', fontWeight: 600 }}>
                      WIDTH UTILIZATION (1,250mm):
                    </div>
                    <div style={{ height: '22px', display: 'flex', borderRadius: '4px', overflow: 'hidden', border: '1px solid #CBD5E1' }}>
                      <div style={{ width: '30%', backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', color: '#FFF', fontWeight: 700 }}>320mm</div>
                      <div style={{ width: '30%', backgroundColor: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', color: '#FFF', fontWeight: 700 }}>320mm</div>
                      <div style={{ width: '30%', backgroundColor: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', color: '#000', fontWeight: 700 }}>320mm</div>
                      <div style={{ width: '7%', backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.58rem', color: '#000', fontWeight: 700 }}>140mm</div>
                      <div style={{ width: '3%', backgroundColor: '#EF4444' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>
                      <span>&bull; Prime: 97.08%</span>
                      <span style={{ color: '#DC2626' }}>&bull; Edge Trim: 2.92% (Lowest)</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    Our 2D nesting algorithm calculates optimal slitting combinations across multiple client projects concurrently, saving up to 4.2% on raw coil scrap.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Sequence Dispatch */}
          {activeTab === 'dispatch' && (
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
                {/* Left: Trailer Loading */}
                <div>
                  <div className="mono" style={{ fontSize: '0.72rem', color: '#2563EB', fontWeight: 700, marginBottom: '4px' }}>
                    TRAILER MANIFEST &bull; SEQUENCE 01
                  </div>
                  <h4 style={{ color: '#0F172A', fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>
                    {TRAILER_LOAD_SAMPLE.trailerNumber}
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.84rem', marginBottom: '16px' }}>
                    Destination: <strong>{TRAILER_LOAD_SAMPLE.destinationProject}</strong>
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {TRAILER_LOAD_SAMPLE.itemsLoaded.map((item, idx) => (
                      <div 
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '8px 12px',
                          backgroundColor: '#F8FAFC',
                          borderRadius: '6px',
                          border: '1px solid #E2E8F0',
                          fontSize: '0.82rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={14} color="#059669" />
                          <span className="mono" style={{ color: '#2563EB', fontWeight: 700 }}>{item.part}</span>
                          <span style={{ color: '#475569' }}>({item.desc})</span>
                        </div>
                        <div className="mono" style={{ color: '#0F172A', fontWeight: 600 }}>
                          {item.qty} pcs
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Gate Pass Preview */}
                <div style={{ backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="mono" style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 700 }}>
                        OUTWARD SECURITY GATE PASS
                      </span>
                      <span className="badge-emerald" style={{ fontSize: '0.68rem' }}>
                        GST E-WAY READY
                      </span>
                    </div>

                    <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px', color: '#000000', marginBottom: '14px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>KESHAV INFO DISPATCH ENGINE</div>
                      <div className="mono" style={{ fontSize: '0.74rem', marginTop: '3px', color: '#4B5563' }}>
                        e-Way Bill: {TRAILER_LOAD_SAMPLE.ewayBillNumber}
                      </div>
                      <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
                        <QrCode size={64} color="#000" />
                      </div>
                      <div className="mono" style={{ fontSize: '0.7rem', color: '#64748B' }}>
                        Scan on site with ErectSync™ Mobile App
                      </div>
                    </div>

                    <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.5 }}>
                      Base columns and anchor bolts are loaded first. Dispatches are strictly matched to foundation ground readiness.
                    </p>
                  </div>

                  <button
                    onClick={() => setGatePassGenerated(!gatePassGenerated)}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '14px', fontSize: '0.86rem', padding: '10px 16px' }}
                  >
                    <Download size={15} />
                    {gatePassGenerated ? 'Gate Pass Downloaded' : 'Generate Outward Gate Pass'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
