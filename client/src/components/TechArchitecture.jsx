import React, { useState } from 'react';
import { 
  WifiOff, 
  Zap, 
  Scale, 
  Database, 
  ShieldCheck, 
  Server,
  Layers,
  ArrowRight,
  Cpu,
  FileCode,
  HardDrive,
  Network,
  CheckCircle2,
  Clock,
  Terminal,
  X,
  Code2,
  Copy,
  Check,
  Activity,
  Workflow,
  Radio
} from 'lucide-react';

export default function TechArchitecture() {
  const [activeTier, setActiveTier] = useState('ALL');
  const [activeStepIndex, setActiveStepIndex] = useState(null);
  const [inspectingSpec, setInspectingSpec] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'topology'

  const tiers = [
    { id: 'ALL', label: 'All Architecture Modules' },
    { id: 'INGESTION', label: '1. CAD/CAM & BIM Ingestion' },
    { id: 'HARDWARE', label: '2. Hardware & IoT Telemetry' },
    { id: 'EDGE', label: '3. Offline-First Yard Edge' },
    { id: 'LEDGER', label: '4. Relational & MTC Ledger' }
  ];

  const benchmarks = [
    { value: '< 3.2s', label: 'Tekla Parsing Speed', detail: '15,000+ parts streamed into memory' },
    { value: '0.00 ms', label: 'Weighbridge Serial Lag', detail: 'Direct RS-232 & TCP hardware capture' },
    { value: '100%', label: 'Offline Yard Coverage', detail: 'IndexedDB BOQs with zero 4G reliance' },
    { value: 'SHA-256', label: 'Heat Number Audit', detail: 'Cryptographic mill certificate tracing' }
  ];

  const pipelineSteps = [
    { 
      step: '01', 
      title: '3D BIM Ingestion', 
      meta: 'Tekla .NC1 / MBS parser', 
      tier: 'INGESTION',
      detail: 'Node.js streaming parser extracts part marks and hole geometry in <3.2s'
    },
    { 
      step: '02', 
      title: 'Heat Allocation', 
      meta: 'MTC yield & chemistry', 
      tier: 'LEDGER',
      detail: 'Cryptographic SHA-256 binding between coil heat number and cut-pieces'
    },
    { 
      step: '03', 
      title: 'CNC Nesting Push', 
      meta: 'G-Code & cutting plan', 
      tier: 'INGESTION',
      detail: 'Kerf-optimized nest files spooled directly to plasma & saw controllers'
    },
    { 
      step: '04', 
      title: 'Weighbridge Link', 
      meta: 'Avery RS-232 gross/tare', 
      tier: 'HARDWARE',
      detail: 'Zero human tampering gross/tare capture from serial indicators'
    },
    { 
      step: '05', 
      title: 'Dispatch Gatepass', 
      meta: 'Cryptographic invoice', 
      tier: 'LEDGER',
      detail: 'Automated GST E-Way bills and erection trailer manifests'
    }
  ];

  const specs = [
    {
      id: 'tekla-streaming',
      tier: 'INGESTION',
      tierLabel: 'BIM Streaming',
      icon: <Zap size={20} color="#2563EB" />,
      accentColor: '#2563EB',
      title: 'Streaming Tekla .NC1 & .IFC AST Parsers',
      metric: 'Latency: < 3.2s',
      protocol: 'Node.js Streams • WebAssembly AST',
      desc: 'High-throughput Node.js streaming parser that deserializes massive 3D Tekla structural models into lightweight memory-mapped geometry trees. Ingests 15,000+ part marks, connection hole pitches, and bevel angles in seconds without memory overflow.',
      techSpecs: {
        supportedFormats: ['.NC1 (DSTV-NC standard)', '.IFC 2x3 / IFC4', 'MBS neutral files', '.DXF 2018+'],
        memoryFootprint: '< 85 MB transient RSS during 50MB model ingestion',
        deltaDiffing: 'Automatic R0-R4 revision comparison with shop-floor freeze signals',
        failureMode: 'Automated syntax fallback with pinpoint geometry line error reporting'
      },
      codeSnippet: `// Tekla Streaming Parser Worker
const parser = new DstvNc1StreamParser({
  partMarkIndexing: true,
  extractBevels: true,
  maxBatchSize: 2500
});
fs.createReadStream('FAB_PROJECT_PHASE_02.nc1')
  .pipe(parser)
  .on('part', (part) => inventory.allocateHeat(part));`
    },
    {
      id: 'weighbridge-iot',
      tier: 'HARDWARE',
      tierLabel: 'Edge Hardware I/O',
      icon: <Scale size={20} color="#059669" />,
      accentColor: '#059669',
      title: 'Serial RS-232 & TCP Weighbridge Drivers',
      metric: 'Sampling: 10 Hz Real-Time',
      protocol: 'Raw RS-232 • Modbus TCP • TCP/IP Socket',
      desc: 'Direct hardware connection with Avery Weigh-Tronix, Essae, and Rice Lake electronic weighbridge indicators. Captures unalterable gross and tare truck weights directly from serial ports to eliminate dispatch invoice tampering.',
      techSpecs: {
        indicatorsSupported: ['Avery Weigh-Tronix E1205', 'Essae 455 Series', 'Rice Lake 920i', 'Cardinal 205'],
        baudRates: '1200 to 115200 bps with configurable parity and stop bits',
        antiTamper: 'Serial string hash verified against CCTV snapshot timestamp',
        retryPolicy: 'Auto-reconnecting socket daemon with local SQLite backup buffer'
      },
      codeSnippet: `// Weighbridge Continuous Serial Poller
const port = new SerialPort({ path: '/dev/ttyUSB0', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\\r\\n' }));
parser.on('data', (rawWeight) => {
  const tare = parseIndicatorString(rawWeight);
  telemetry.commitGatepassWeight(vehicleNo, tare);
});`
    },
    {
      id: 'offline-pwa',
      tier: 'EDGE',
      tierLabel: 'Offline-First Fabric',
      icon: <WifiOff size={20} color="#D97706" />,
      accentColor: '#D97706',
      title: 'Offline-First Yard & Erection Site Engine',
      metric: 'Storage: Up to 4GB IndexedDB',
      protocol: 'Service Worker v3 • IndexedDB • Web Worker',
      desc: 'Dusty fabrication yards and remote building sites frequently lose cellular reception. Keshav Info runs an offline-first Progressive Web App architecture caching full structural BOQs, assembly mark checklists, and erection sequences on device.',
      techSpecs: {
        syncProtocol: 'Bidirectional conflict-free vector clocks over WebSocket/HTTPS',
        localCacheCapacity: 'IndexedDB partitions storing up to 45,000 part records per terminal',
        barcodeScanner: 'Hardware Zebra/Honeywell 2D imager integration via WebHID / Camera stream',
        offlineActions: 'Mark cutting completion, record bolt torque tests, update erection status'
      },
      codeSnippet: `// Local Offline Mutation Queue
async function recordYardAssembly(partMark, stationId) {
  const mutation = { partMark, stationId, timestamp: Date.now() };
  await localDb.mutations.add(mutation);
  if (navigator.onLine) {
    await syncEngine.flushToMasterNode();
  }
}`
    },
    {
      id: 'cryptographic-audit',
      tier: 'LEDGER',
      tierLabel: 'Compliance Ledger',
      icon: <Database size={20} color="#7C3AED" />,
      accentColor: '#7C3AED',
      title: 'Cryptographic Heat Number & MTC Traceability',
      metric: 'Audit Integrity: SHA-256',
      protocol: 'ACID PostgreSQL • Cryptographic Log Chain',
      desc: 'PostgreSQL relational schemas with append-only audit tables. Every single beam, column, rafter, and base plate retains an unbroken pedigree linking physical part marks back to Mill Test Certificates (MTCs) from JSW, Tata Steel, or AM/NS.',
      techSpecs: {
        databaseEngine: 'PostgreSQL 16 with Row-Level Security (RLS) & partitioned tables',
        traceabilityDepth: 'Raw Coil / Plate -> Nesting Scrap -> Part Mark -> Assembled Grid -> Dispatch',
        certificateIndexing: 'OCR-assisted chemical composition (C, Mn, S, P) and yield strength checks',
        regulatoryCompliance: 'IS 2062, ASTM A36, BS EN 10025 structural engineering audit standards'
      },
      codeSnippet: `// Append-Only Heat Audit Verification
SELECT part_mark, heat_number, mill_certificate_id,
       yield_strength_mpa, inspection_signature
FROM fabrication_pedigree_ledger
WHERE part_mark = 'COL-B4-GRID-02'
  AND cryptographic_signature_valid = TRUE;`
    },
    {
      id: 'rbac-security',
      tier: 'LEDGER',
      tierLabel: 'Access Governance',
      icon: <ShieldCheck size={20} color="#0284C7" />,
      accentColor: '#0284C7',
      title: 'Role-Based Access Control for Commercial Protection',
      metric: 'Security: Attribute-Based RBAC',
      protocol: 'JWT with Short-Lived Refresh • Scoped Policies',
      desc: 'Granular permissions isolate sensitive commercial steel purchase rates, project gross margins, and client contracts from floor operations. Shop-floor fabricators only see engineering dimensions, while plant directors view progressive billing.',
      techSpecs: {
        policyModel: 'Attribute-Based Access Control (ABAC) with plant-specific tenant isolation',
        roleHierarchy: 'Operator -> QA Inspector -> Shop Supervisor -> Plant GM -> Financial Controller',
        rateShielding: 'Automatic masking of raw steel price per kg across workshop fabrication views',
        sessionDefense: 'Hardware-bound session revocation and automated brute-force IP throttling'
      },
      codeSnippet: `// Scoped Resource Authorization
function authorizeDrawingAccess(user, drawingRecord) {
  if (user.role === 'FITTER_FABRICATOR') {
    return sanitizeCommercialData(drawingRecord, { maskRates: true });
  }
  return drawingRecord;
}`
    },
    {
      id: 'hybrid-cloud',
      tier: 'HARDWARE',
      tierLabel: 'Infrastructure Core',
      icon: <Server size={20} color="#475569" />,
      accentColor: '#475569',
      title: 'Hybrid Cloud & On-Premise Resilience',
      metric: 'Uptime SLA: 99.98%',
      protocol: 'Docker Compose • Kubernetes • Local Microservers',
      desc: 'Deploy on dedicated cloud infrastructure (AWS/Azure) or run local edge microservers directly inside your plant switch room. Ensures continuous manufacturing operations even during prolonged external optic fiber cuts.',
      techSpecs: {
        deploymentOptions: 'Self-hosted On-Premise Ubuntu Server or Cloud (AWS ap-south-1 Mumbai)',
        backupCadence: 'Hourly WAL-e snapshots with automated offsite backup replication',
        failoverLatency: '< 15 seconds local proxy takeover upon WAN disconnect',
        hardwareRequirements: 'Runs on standard quad-core industrial PC with 16GB RAM for plant edge'
      },
      codeSnippet: `// Edge Gateway Failover Switch
const gateway = new EdgeLocalProxy({
  primaryRemoteUrl: 'https://api.keshavinfo.com',
  localBufferNode: 'http://192.168.1.50:5055',
  healthCheckIntervalMs: 2500
});`
    }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handlePipelineStepClick = (index, tier) => {
    if (activeStepIndex === index) {
      setActiveStepIndex(null);
      setActiveTier('ALL');
    } else {
      setActiveStepIndex(index);
      setActiveTier(tier);
    }
  };

  const filteredSpecs = activeTier === 'ALL' 
    ? specs 
    : specs.filter(s => s.tier === activeTier);

  return (
    <section 
      id="architecture"
      style={{
        padding: '85px 0 95px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 38px' }}>
          <div className="badge-tech" style={{ marginBottom: '14px' }}>
            <span>TECHNICAL SPECIFICATIONS & INDUSTRIAL PROTOCOLS</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#0F172A',
              marginBottom: '14px',
              lineHeight: 1.2
            }}
          >
            Built for Shop-Floor Latency, Tekla Ingestion & Hardware I/O
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
            Modern React and Node.js microservices engineered specifically for pre-engineered steel buildings: 
            streaming 3D BIM models, unalterable serial weighbridge links, and zero-downtime offline yard terminals.
          </p>
        </div>

        {/* Industrial Benchmarks Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '38px',
            backgroundColor: '#F8FAFC',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {benchmarks.map((b, idx) => (
            <div 
              key={idx}
              style={{
                borderRight: idx < benchmarks.length - 1 ? '1px solid #E2E8F0' : 'none',
                paddingRight: '16px',
                paddingLeft: idx > 0 ? '8px' : '0'
              }}
            >
              <div 
                className="mono" 
                style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 800, 
                  color: '#2563EB', 
                  letterSpacing: '-0.03em',
                  marginBottom: '4px' 
                }}
              >
                {b.value}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>
                {b.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.4 }}>
                {b.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Shop-Floor Data Lifecycle Pipeline */}
        <div 
          style={{
            backgroundColor: '#F1F5F9',
            border: '1px solid #CBD5E1',
            borderRadius: '16px',
            padding: '22px 26px',
            marginBottom: '38px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={16} color="#2563EB" />
              <span className="mono" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.04em' }}>
                SHOP-FLOOR DATA LIFECYCLE PIPELINE (INTERACTIVE)
              </span>
            </div>
            <span style={{ fontSize: '0.76rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
              Click any step to filter architecture modules
            </span>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '12px'
            }}
          >
            {pipelineSteps.map((p, i) => {
              const isSelected = activeStepIndex === i;
              return (
                <div 
                  key={i}
                  onClick={() => handlePipelineStepClick(i, p.tier)}
                  style={{
                    backgroundColor: isSelected ? '#EFF6FF' : '#FFFFFF',
                    border: isSelected ? '1.5px solid #2563EB' : '1px solid #CBD5E1',
                    borderRadius: '10px',
                    padding: '14px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.15)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span 
                        className="mono" 
                        style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 800, 
                          color: isSelected ? '#FFFFFF' : '#2563EB', 
                          backgroundColor: isSelected ? '#2563EB' : '#EFF6FF', 
                          padding: '2px 6px', 
                          borderRadius: '4px' 
                        }}
                      >
                        {p.step}
                      </span>
                      <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A' }}>
                        {p.title}
                      </span>
                    </div>
                    {isSelected && <span className="status-pulse" style={{ backgroundColor: '#2563EB', width: '6px', height: '6px' }} />}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', marginBottom: '4px' }}>
                    {p.meta}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: isSelected ? '#2563EB' : '#94A3B8', lineHeight: 1.35 }}>
                    {p.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Switcher & Tier Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '32px'
          }}
        >
          {/* Tier Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tiers.map(tier => (
              <button
                key={tier.id}
                onClick={() => {
                  setActiveTier(tier.id);
                  setActiveStepIndex(null);
                }}
                style={{
                  padding: '7px 15px',
                  borderRadius: '8px',
                  border: activeTier === tier.id ? '1.5px solid #2563EB' : '1px solid #CBD5E1',
                  backgroundColor: activeTier === tier.id ? '#EFF6FF' : '#FFFFFF',
                  color: activeTier === tier.id ? '#2563EB' : '#475569',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.84rem',
                  fontWeight: activeTier === tier.id ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.16s ease'
                }}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* Mode Switcher: Cards vs Topology Diagram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setViewMode('cards')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: viewMode === 'cards' ? '1px solid #2563EB' : '1px solid #E2E8F0',
                backgroundColor: viewMode === 'cards' ? '#EFF6FF' : '#FFFFFF',
                color: viewMode === 'cards' ? '#2563EB' : '#64748B',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Modules View
            </button>
            <button
              onClick={() => setViewMode('topology')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: viewMode === 'topology' ? '1px solid #2563EB' : '1px solid #E2E8F0',
                backgroundColor: viewMode === 'topology' ? '#EFF6FF' : '#FFFFFF',
                color: viewMode === 'topology' ? '#2563EB' : '#64748B',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              System Topology Diagram
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive System Topology Diagram */}
        {viewMode === 'topology' ? (
          <div 
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #1E293B',
              boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.35)',
              color: '#FFFFFF',
              marginBottom: '30px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div>
                <span className="mono" style={{ fontSize: '0.76rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.04em' }}>
                  END-TO-END SHOP FLOOR DATA TOPOLOGY
                </span>
                <h3 className="heading-font" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginTop: '4px' }}>
                  Industrial Microservice & IoT Node Architecture
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-pulse" style={{ backgroundColor: '#10B981' }} />
                <span className="mono" style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: 700 }}>
                  ALL CLUSTERS NOMINAL
                </span>
              </div>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                position: 'relative'
              }}
            >
              {[
                {
                  node: 'INGESTION ENGINE',
                  title: 'Tekla / MBS Parser Node',
                  status: '< 3.2s Streaming AST',
                  color: '#38BDF8',
                  tags: ['.NC1', '.IFC', 'MBS', 'DXF'],
                  role: 'Deserializes geometry & part marks without memory spikes'
                },
                {
                  node: 'FACTORY CORE',
                  title: 'Edge IoT Controller',
                  status: '10Hz Serial RS-232',
                  color: '#34D399',
                  tags: ['Avery', 'Essae', 'Hypertherm', 'PLC'],
                  role: 'Captures gross tare tonnage & spools 2D plasma G-code'
                },
                {
                  node: 'YARD TERMINALS',
                  title: 'Offline PWA Mesh',
                  status: '100% Offline IndexedDB',
                  color: '#FBBF24',
                  tags: ['ServiceWorker', 'QR Zebra', 'IndexedDB'],
                  role: 'Floor fitters record cutting & assembly with zero 4G'
                },
                {
                  node: 'RELATIONAL LEDGER',
                  title: 'PostgreSQL MTC Ledger',
                  status: 'SHA-256 Cryptographic',
                  color: '#A78BFA',
                  tags: ['ACID', 'Tata MTC', 'JSW Heat', 'E-Way'],
                  role: 'Permanent audit trail from raw coil heat to client gatepass'
                }
              ].map((node, nIdx) => (
                <div 
                  key={nIdx}
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: '12px',
                    border: `1.5px solid ${node.color}40`,
                    padding: '22px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <div className="mono" style={{ fontSize: '0.68rem', color: node.color, fontWeight: 800, letterSpacing: '0.04em', marginBottom: '6px' }}>
                    {node.node}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                    {node.title}
                  </h4>
                  <div className="mono" style={{ fontSize: '0.74rem', color: '#94A3B8', marginBottom: '14px', backgroundColor: '#0F172A', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>
                    {node.status}
                  </div>
                  <p style={{ color: '#CBD5E1', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '14px' }}>
                    {node.role}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {node.tags.map((t, ti) => (
                      <span key={ti} className="mono" style={{ fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#334155', color: '#F1F5F9' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button 
                onClick={() => setViewMode('cards')}
                className="btn btn-primary"
                style={{ fontSize: '0.84rem', padding: '9px 22px' }}
              >
                Inspect Individual Microservice Modules & Code &rarr;
              </button>
            </div>
          </div>
        ) : (
          /* View Mode 2: Detailed Technical Architecture Cards Grid */
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '22px'
            }}
          >
            {filteredSpecs.map((spec) => (
              <div 
                key={spec.id}
                className="card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '26px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
                }}
              >
                {/* Top 3px Accent Line */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: spec.accentColor
                  }}
                />

                <div>
                  {/* Header with Icon & Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: `${spec.accentColor}12`,
                        border: `1px solid ${spec.accentColor}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {spec.icon}
                    </div>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span 
                        className="mono" 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '3px 8px', 
                          borderRadius: '6px', 
                          backgroundColor: '#F1F5F9', 
                          color: '#475569', 
                          fontWeight: 600,
                          border: '1px solid #E2E8F0'
                        }}
                      >
                        {spec.tierLabel}
                      </span>
                      <span 
                        className="mono" 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '3px 8px', 
                          borderRadius: '6px', 
                          backgroundColor: `${spec.accentColor}10`, 
                          color: spec.accentColor, 
                          fontWeight: 700,
                          border: `1px solid ${spec.accentColor}25`
                        }}
                      >
                        {spec.metric}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="heading-font" 
                    style={{ 
                      fontSize: '1.14rem', 
                      fontWeight: 700, 
                      color: '#0F172A', 
                      marginBottom: '8px',
                      lineHeight: 1.35
                    }}
                  >
                    {spec.title}
                  </h3>

                  {/* Protocol Pill */}
                  <div 
                    className="mono"
                    style={{ 
                      fontSize: '0.74rem', 
                      color: '#2563EB', 
                      marginBottom: '12px',
                      backgroundColor: '#EFF6FF',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      display: 'inline-block',
                      fontWeight: 600
                    }}
                  >
                    {spec.protocol}
                  </div>

                  {/* Description */}
                  <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {spec.desc}
                  </p>
                </div>

                {/* Action: Inspect Specs */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    onClick={() => setInspectingSpec(spec)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#2563EB',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>Inspect Parameters & Code</span>
                    <ArrowRight size={14} />
                  </button>

                  <span className="mono" style={{ fontSize: '0.7rem', color: '#94A3B8' }}>
                    Production Tested
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Technical Inspection Modal */}
      {inspectingSpec && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setInspectingSpec(null)}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #CBD5E1',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                padding: '24px',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: `${inspectingSpec.accentColor}12`,
                    border: `1px solid ${inspectingSpec.accentColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {inspectingSpec.icon}
                </div>
                <div>
                  <h3 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {inspectingSpec.title}
                  </h3>
                  <div className="mono" style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>
                    {inspectingSpec.protocol} &bull; {inspectingSpec.metric}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setInspectingSpec(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748B',
                  padding: '6px',
                  borderRadius: '6px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '24px' }}>
              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {inspectingSpec.desc}
              </p>

              {/* Technical Specifications Matrix */}
              <div style={{ marginBottom: '22px' }}>
                <div className="mono" style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px', letterSpacing: '0.04em' }}>
                  OPERATIONAL PARAMETERS & HARDWARE SPECIFICATIONS
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {Object.entries(inspectingSpec.techSpecs).map(([key, val], idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.84rem'
                      }}
                    >
                      <span style={{ color: '#64748B', textTransform: 'capitalize' }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="mono" style={{ color: '#0F172A', fontWeight: 600, textAlign: 'right', maxWidth: '60%' }}>
                        {Array.isArray(val) ? val.join(', ') : val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Code Snippet with Copy Button */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Code2 size={15} color="#2563EB" />
                    <span className="mono" style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.04em' }}>
                      PRODUCTION IMPLEMENTATION CODE
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyCode(inspectingSpec.codeSnippet)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: copiedCode ? '#ECFDF5' : '#F1F5F9',
                      border: copiedCode ? '1px solid #10B981' : '1px solid #CBD5E1',
                      color: copiedCode ? '#059669' : '#475569',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedCode ? <Check size={13} color="#059669" /> : <Copy size={13} />}
                    <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre 
                  style={{
                    backgroundColor: '#0F172A',
                    color: '#E2E8F0',
                    padding: '16px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    overflowX: 'auto',
                    lineHeight: 1.5,
                    border: '1px solid #1E293B',
                    margin: 0
                  }}
                >
                  <code>{inspectingSpec.codeSnippet}</code>
                </pre>
              </div>

              {/* Modal Footer */}
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => setInspectingSpec(null)}
                  className="btn btn-primary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Close Inspection
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
