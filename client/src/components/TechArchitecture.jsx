import React from 'react';
import { 
  WifiOff, 
  Zap, 
  Scale, 
  Database, 
  ShieldCheck, 
  Server
} from 'lucide-react';

export default function TechArchitecture() {
  const specs = [
    {
      icon: <WifiOff size={18} color="#9CA3AF" />,
      title: "Offline-First PWA Architecture",
      desc: "Dusty fabrication yards and remote building sites suffer from spotty 4G/Wi-Fi. Our mobile apps cache BOQs, cutting lists, and sequence plans locally via Service Workers and IndexedDB, syncing reliably when connectivity restores."
    },
    {
      icon: <Zap size={18} color="#9CA3AF" />,
      title: "Sub-Second Tekla Parsing in Node.js",
      desc: "High-performance streaming parsers capable of ingesting massive 3D Tekla .IFC and .NC1 structural files containing 15,000+ part marks in under 3.2 seconds, with zero server memory spikes."
    },
    {
      icon: <Scale size={18} color="#9CA3AF" />,
      title: "IoT Weighbridge & Crane Scale Hooks",
      desc: "Direct TCP/IP and Serial RS232 driver integration with Avery Weigh-Tronix, Essae, and Rice Lake electronic weighbridges to record gross and tare tonnage without manual human keying."
    },
    {
      icon: <Database size={18} color="#9CA3AF" />,
      title: "Immutable Heat Number Audit Trails",
      desc: "PostgreSQL relational schemas with strict cryptographic audit logs. Every kilogram of steel is traceable back to Mill Test Certificates (MTC) from JSW, Tata Steel, or AM/NS for structural liability protection."
    },
    {
      icon: <ShieldCheck size={18} color="#9CA3AF" />,
      title: "Enterprise Multi-Tenant & Role Access",
      desc: "Granular role-based security protecting sensitive steel buying rates and profit margins. Shop-floor fabricators see only technical drawings, while commercial directors access progressive billing."
    },
    {
      icon: <Server size={18} color="#9CA3AF" />,
      title: "Hybrid Cloud / On-Premise Resilience",
      desc: "Deploy on AWS/Azure cloud or locally on industrial on-premise servers situated right inside your fabrication plant for high security and zero internet latency."
    }
  ];

  return (
    <section 
      id="architecture"
      style={{
        padding: '80px 0',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 45px' }}>
          <div className="badge-tech" style={{ marginBottom: '12px' }}>
            <span>ENGINEERING RIGOR &bull; REACT &bull; NODE.JS</span>
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
            Built With Modern Web Standards
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Modern React and Node.js microservices engineered for lightning-fast UI responsiveness, 
            hardware weighbridge telemetry, and industrial reliability.
          </p>
        </div>

        {/* Clean Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {specs.map((item, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                {React.cloneElement(item.icon, { color: '#2563EB', size: 20 })}
              </div>

              <h3 className="heading-font" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
