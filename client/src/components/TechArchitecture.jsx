import React, { useState, useEffect } from 'react';
import { 
  WifiOff, 
  Zap, 
  Scale, 
  Database, 
  ShieldCheck, 
  Server,
  ArrowRight,
  Terminal,
  X,
  Code2,
  Copy,
  Check,
  Activity,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export default function TechArchitecture() {
  const [activeTier, setActiveTier] = useState('ALL');
  const [activeStepIndex, setActiveStepIndex] = useState(null);
  const [inspectingSpec, setInspectingSpec] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [packetIndex, setPacketIndex] = useState(0);

  const livePackets = [
    { source: 'TEKLA_STREAM', text: 'Ingested 1,240 Part Marks from REV_R3.nc1 in 1.84s (0 syntax errors)', color: '#2563EB' },
    { source: 'RS232_SERIAL', text: 'Weighbridge COM1: Inward Gross 42.15 MT locked • Essae 455 Indicator', color: '#059669' },
    { source: 'PWA_OFFLINE', text: 'Yard Bay 07: 18 Column marks torqued & signed offline via IndexedDB', color: '#D97706' },
    { source: 'MTC_LEDGER', text: 'Cryptographic SHA-256 seal bound: Tata Steel Heat #TH-8821 to Mark #RAF-04', color: '#7C3AED' },
    { source: 'CNC_SPOOL', text: 'G-Code Nesting spool sent to Hypertherm Bay 02: Kerf 1.8mm, Yield 97.2%', color: '#0284C7' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPacketIndex((prev) => (prev + 1) % livePackets.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [livePackets.length]);

  const tiers = [
    { id: 'ALL', label: 'All Modules (6)' },
    { id: 'INGESTION', label: 'CAD & 3D BIM Ingestion' },
    { id: 'HARDWARE', label: 'Hardware & IoT Drivers' },
    { id: 'EDGE', label: 'Offline Yard Terminal' },
    { id: 'LEDGER', label: 'Relational & MTC Ledger' }
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
      detail: 'Node.js streaming parser deserializes geometry & part marks in <3.2s'
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

  const toggleExpandCard = (id) => {
    setExpandedCardId(prev => prev === id ? null : id);
  };

  const filteredSpecs = activeTier === 'ALL' 
    ? specs 
    : specs.filter(s => s.tier === activeTier);

  return (
    <section 
      id="architecture"
      style={{
        padding: '90px 0 100px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Minimalist Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div className="badge-tech badge-cyan" style={{ marginBottom: '14px' }}>
            <Activity size={12} color="#0284C7" />
            <span>ENTERPRISE ARCHITECTURE &bull; BUILT FOR STEEL FABRICATION</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#0F172A',
              marginBottom: '14px',
              lineHeight: 1.18
            }}
          >
            Engineering Rigor Behind Every Tonnage Metric
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
            Minimal, zero-bloat architecture engineered specifically for heavy structural steel: 
            streaming 3D Tekla models, direct RS-232 weighbridge hooks, and offline-first mobile apps.
          </p>
        </div>

        {/* Minimalist Industrial Benchmarks Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
            backgroundColor: '#F8FAFC',
            padding: '24px 28px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0'
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
                  fontSize: '1.85rem', 
                  fontWeight: 800, 
                  color: '#2563EB', 
                  letterSpacing: '-0.035em',
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

        {/* Minimalist Live Edge Telemetry Bar */}
        <div 
          style={{
            backgroundColor: '#0F172A',
            borderRadius: '12px',
            padding: '12px 20px',
            marginBottom: '36px',
            border: '1px solid #1E293B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            flexWrap: 'wrap',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span className="status-pulse" style={{ backgroundColor: '#10B981', width: '8px', height: '8px' }} />
            <span className="mono" style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700 }}>
              LIVE EDGE TELEMETRY:
            </span>
            <span 
              className="mono" 
              style={{ 
                fontSize: '0.72rem', 
                backgroundColor: `${livePackets[packetIndex].color}25`, 
                color: livePackets[packetIndex].color, 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontWeight: 700 
              }}
            >
              [{livePackets[packetIndex].source}]
            </span>
            <span className="mono" style={{ fontSize: '0.76rem', color: '#F8FAFC', fontWeight: 500 }}>
              {livePackets[packetIndex].text}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="mono" style={{ fontSize: '0.7rem', color: '#64748B' }}>
              Cycle 10Hz &bull; TLS 1.3
            </span>
          </div>
        </div>

        {/* Interactive Shop-Floor Data Lifecycle Pipeline */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '22px 24px',
            marginBottom: '38px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={15} color="#2563EB" />
              <span className="mono" style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.04em' }}>
                SHOP-FLOOR DATA LIFECYCLE (ENQUIRY TO ERECTION)
              </span>
            </div>
            <span style={{ fontSize: '0.76rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
              Click any stage to filter architecture modules
            </span>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
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
                    boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.14)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
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

        {/* Minimalist Tier Filter Pills */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px'
          }}
        >
          {tiers.map(tier => (
            <button
              key={tier.id}
              onClick={() => {
                setActiveTier(tier.id);
                setActiveStepIndex(null);
              }}
              style={{
                padding: '7px 16px',
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

        {/* Detailed Technical Architecture Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px'
          }}
        >
          {filteredSpecs.map((spec) => {
            const isExpanded = expandedCardId === spec.id;
            return (
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
                  transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease'
                }}
              >
                {/* Top 3px Colored Accent Border Bar */}
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
                  <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {spec.desc}
                  </p>

                  {/* Inline Quick Spec Drawer (Toggleable) */}
                  {isExpanded && (
                    <div 
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        padding: '12px 14px',
                        marginBottom: '16px',
                        fontSize: '0.78rem'
                      }}
                    >
                      <div className="mono" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                        HARDWARE PARAMETERS:
                      </div>
                      {Object.entries(spec.techSpecs).slice(0, 2).map(([k, v], i) => (
                        <div key={i} style={{ marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#64748B' }}>{k.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="mono" style={{ color: '#0F172A', fontWeight: 600 }}>
                            {Array.isArray(v) ? v.join(', ') : v}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions Bar */}
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

                  <button
                    onClick={() => toggleExpandCard(spec.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      color: '#475569',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{isExpanded ? 'Hide Specs' : 'Quick Specs'}</span>
                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

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
