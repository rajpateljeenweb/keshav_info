import React, { useState } from 'react';
import EnquiryToErectionLifecycle from '../components/EnquiryToErectionLifecycle';
import IntegrationsEcosystem from '../components/IntegrationsEcosystem';
import { 
  Layers, 
  Compass, 
  Disc, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Boxes,
  FileText,
  BarChart3,
  QrCode
} from 'lucide-react';

export default function Solutions({ onOpenConsultation }) {
  const [selectedProduct, setSelectedProduct] = useState('steelcore');

  const products = [
    {
      id: 'steelcore',
      name: 'SteelCore™ Enterprise PEB ERP',
      headline: 'The Complete Shop-Floor & Commercial Operating System for Heavy Steel Fabricators',
      badge: 'ENTERPRISE ERP',
      badgeColor: '#2563EB',
      icon: <Layers size={28} color="#2563EB" />,
      description: 'SteelCore™ replaces disconnected Excel sheets, Tally, and generic enterprise systems with a single unified operating platform designed from the ground up for Pre-Engineered Building plants. From Tekla BOQ ingestion to physical bay stage gating, contractor piece-rate billing, and sequence dispatch.',
      capabilities: [
        {
          title: 'Tekla & CAD Multi-Level BOQ Ingestion',
          desc: 'Directly parses structural part marks (Columns MCL-1, Rafters RAF-1, Crane Girders CRG-1, Purlins Z-200) with grade, length, unit weight, and paint specification.'
        },
        {
          title: '8-Stage Physical Shop-Floor Gate Control',
          desc: 'Enforces strict physical stage gates: CNC Cutting -> Fit-up -> SAW Welding -> Straightening -> Drilling -> Sa 2.5 Shot Blast -> Painting -> Dispatch Yard.'
        },
        {
          title: 'NABL Quality & Ultrasonic UT Check-sheets',
          desc: 'Prevents beam movement to the next bay until digital weld test records (WPS / PQR), ultrasonic testing, and dry film thickness (DFT) paint logs are approved.'
        },
        {
          title: 'Piece-Rate Contractor Duplicate Prevention',
          desc: 'Calculates labor payouts by exact part-mark weight (e.g. ₹4.80/kg). Automatically blocks duplicate billing claims across multiple fortnights.'
        },
        {
          title: 'Progressive Milestone & Retention Billing',
          desc: 'Tracks commercial dispatch milestones, client mobilization advance, bank guarantee expirations, and retention releases with automated GST invoicing.'
        }
      ],
      specs: [
        'Deployment: Hybrid Cloud (AWS) or Industrial On-Premise',
        'Hardware Hooks: Electronic Weighbridges, Barcode / 2D QR Scanners',
        'Compliance: IS 800:2007, AISC 360, MBMA, AWS D1.1',
        'User Roles: Plant GM, Shop Supervisor, QA Inspector, Store In-charge, Accounts'
      ]
    },
    {
      id: 'teklabridge',
      name: 'TeklaBridge™ 3D BIM & NC1 Delta Sync',
      headline: 'Automated 3D Detailing Model Ingestion & Drawing Revision Control',
      badge: 'CAD / CAM BRIDGE',
      badgeColor: '#F59E0B',
      icon: <Compass size={28} color="#F59E0B" />,
      description: 'TeklaBridge™ bridges the dangerous gap between the engineering detailing office and the physical cutting floor. Ingests 3D structural models (.NC1, .IFC, .DSTV) and performs automated delta-diffing when clients issue drawing revisions (R0 to R4), instantly halting plasma cutting on modified marks.',
      capabilities: [
        {
          title: 'Direct .NC1, .IFC & .DSTV Ingestion',
          desc: 'Ingests complex 3D BIM models containing 15,000+ structural members in seconds, extracting part marks, gusset stiffeners, cleat angles, and hole pitch matrices.'
        },
        {
          title: 'Automated Revision Delta-Diffing Engine',
          desc: 'Compares revision R2 against R1. Instantly highlights modified flange thicknesses, rafter tapers, or hole pitches, preventing scrapped beams on shop tables.'
        },
        {
          title: 'Automated Cut-Lists & Plate Nesting Exports',
          desc: 'Generates optimized cut-lists grouped by plate thickness (10mm, 16mm, 25mm, 40mm) and steel grade (IS 2062 E350BR, E250) for CNC plasma and oxy-fuel tables.'
        },
        {
          title: 'Digital Drawing Vault on Rugged Tablet',
          desc: 'Shop supervisors view version-controlled PDF fabrication drawings directly on shop-floor tablets, ensuring obsolete drawings are never used.'
        }
      ],
      specs: [
        'Supported Formats: Tekla Structures .NC1, .IFC 2x3/4, DSTV, DXF',
        'Processing Speed: 15,000+ parts parsed in under 3.2 seconds',
        'Revision Tracking: Infinite revision history with delta audit logs',
        'Integration: Direct export to CNC nesting software (FastCAM, ProNest)'
      ]
    },
    {
      id: 'coiltrack',
      name: 'CoilTrack™ Slitting & Roll-Forming Suite',
      headline: 'High-Tensile Raw Coil Traceability & Purlin Slitting Optimization',
      badge: 'INVENTORY & SLITTING',
      badgeColor: '#10B981',
      icon: <Disc size={28} color="#10B981" />,
      description: 'CoilTrack™ is purpose-built for coil service centers, purlin roll-formers (C/Z sections), and trapezoidal roofing profile lines. Connects directly to electronic weighbridges, tracks mother coils by mill heat number, and optimizes 2D slitting patterns to reduce scrap loss to under 3%.',
      capabilities: [
        {
          title: 'Mother Coil Inward & Weighbridge Integration',
          desc: 'Captures gross and tare weights from electronic weighbridges via RS232/TCP API. Stores manufacturer heat numbers and Mill Test Certificates (JSW, Tata, AM/NS).'
        },
        {
          title: 'Multi-Job Slitting Pattern Yield Optimizer',
          desc: 'Solves the 2D cutting stock problem across multiple client orders concurrently, minimizing edge trim waste and calculating exact prime yield percentages.'
        },
        {
          title: 'Remnant Slit Coil & Off-cut Tracking',
          desc: 'Tags leftover mother coil rolls and plate off-cuts with unique QR identifiers, making them instantly searchable for future small-tonnage purlin orders.'
        },
        {
          title: 'Purlin Pre-Punching & Profiling Generator',
          desc: 'Generates automated hole punching and cut-to-length instructions for cold roll-forming machines based on Tekla roof framing layouts.'
        }
      ],
      specs: [
        'Coil Types: CR-GI, HRPO, Galvalume (AZ150), Prepainted (PPGI)',
        'Steel Grades: 250 MPa, 350 MPa, 550 MPa High-Tensile',
        'Weighbridge Protocols: Avery Weigh-Tronix, Essae, Rice Lake, Toledo',
        'Average Scrap Yield: Reduced from 4.8% down to 2.92%'
      ]
    },
    {
      id: 'erectsync',
      name: 'ErectSync™ Offline Field Companion',
      headline: 'Offline-First Progressive Web App for Site Engineers & Erection Crews',
      badge: 'MOBILE FIELD PWA',
      badgeColor: '#7C3AED',
      icon: <Smartphone size={28} color="#7C3AED" />,
      description: 'ErectSync™ brings real-time shop-floor transparency to remote, dusty construction sites. Built as an offline-first PWA, site engineers scan trailer QR codes upon arrival, verify foundation anchor-bolt alignment, and file geotagged Daily Progress Reports (DPR).',
      capabilities: [
        {
          title: 'Offline-First IndexedDB Architecture',
          desc: 'Operates reliably in remote industrial corridors without mobile internet. Automatically synchronizes site logs when 4G or Wi-Fi reconnects.'
        },
        {
          title: 'Sequence Loading QR Verification',
          desc: 'Scans delivered structural parts at the site gate. Immediately alerts the project manager if a trailer arrived out of sequence before foundation clearance.'
        },
        {
          title: 'Foundation Anchor Bolt Sign-Off Matrix',
          desc: 'Digital pre-erection checklist verifying bolt pitch, center-to-center diagonal tolerances, and grout pad readiness before heavy columns are staged.'
        },
        {
          title: 'Daily Progress Reports (DPR) with Geotagged Photos',
          desc: 'Logs erected columns, rafters, purlins, crane hours, weather downtime, and contractor crew counts into standardized daily executive PDF reports.'
        }
      ],
      specs: [
        'Platform: Progressive Web App (PWA) on iOS, Android, and Windows Tablet',
        'Offline Cache: Full project BOQ stored locally via Service Worker',
        'Scanning: High-speed camera QR code reader (rugged 2D industrial tags)',
        'Sync Protocol: Background WebSocket delta synchronization'
      ]
    },
    {
      id: 'epc-portal',
      name: 'Dedicated Enterprise Web & EPC Portals',
      headline: 'Custom Branded Progress & QA Transparency Portals for Infrastructure Developers',
      badge: 'CLIENT EXPERIENCE',
      badgeColor: '#F43F5E',
      icon: <Globe size={28} color="#F43F5E" />,
      description: 'Strengthen client trust on large infrastructure tenders. We engineer dedicated client portals where institutional developers, EPC contractors (such as L&T and Tata Projects), and structural consultants view 3D erection progress and download certified NABL test reports.',
      capabilities: [
        {
          title: 'Interactive 3D Structural Progress Viewer',
          desc: 'Web-based 3D digital twin of the building. Parts are color-coded in real-time: Fabricated (Yellow), Dispatched (Blue), Erected on Site (Green).'
        },
        {
          title: '1-Click NABL & MTC Quality Vault',
          desc: 'Clients download non-destructive ultrasonic testing reports, welder qualification logs, and raw steel mill certificates directly, eliminating payment withholding.'
        },
        {
          title: 'Live Trailer Dispatch & Sequence Tracking',
          desc: 'Dispatched trailer manifests with GPS location, driver contact, and estimated site arrival time so client cranes are ready on the ground.'
        },
        {
          title: 'Digital Milestone Approvals & Audit Trail',
          desc: 'Formal client sign-offs on structural completion stages with immutable timestamps, accelerating retention money release by up to 22 days.'
        }
      ],
      specs: [
        'Security: Encrypted multi-tenant access with strict client data segregation',
        '3D Engine: Lightweight WebGL structural viewer (runs on any mobile browser)',
        'Document Engine: Instant PDF generation with verified digital signatures',
        'Branding: Fully white-labeled with your plant logo and domain'
      ]
    }
  ];

  const current = products.find(p => p.id === selectedProduct) || products[0];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 65px', borderBottom: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <span>COMPLETE INDUSTRIAL OPERATING SUITE</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Software Engineered For Pre-Engineered Buildings
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore our specialized software products below. Deploy individually to solve specific shop-floor bottlenecks 
            or unify your entire enterprise under the SteelCore™ platform.
          </p>
        </div>
      </section>

      {/* Product Selector Navigation Bar */}
      <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: '70px', zIndex: 40, boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)' }}>
        <div className="container" style={{ display: 'flex', overflowX: 'auto', gap: '10px', padding: '12px 24px' }}>
          {products.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                border: selectedProduct === p.id ? '1px solid #1D4ED8' : '1px solid #CBD5E1',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                backgroundColor: selectedProduct === p.id ? '#2563EB' : '#F8FAFC',
                color: selectedProduct === p.id ? '#FFFFFF' : '#475569',
                boxShadow: selectedProduct === p.id ? '0 3px 10px rgba(37, 99, 235, 0.25)' : 'none'
              }}
            >
              {React.cloneElement(p.icon, { color: selectedProduct === p.id ? '#FFFFFF' : '#2563EB', size: 18 })}
              {p.name.split('™')[0]}™
            </button>
          ))}
        </div>
      </div>

      {/* Main Selected Product Deep-Dive */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {/* Product Overview Header Card */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '38px',
                marginBottom: '40px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <span className="mono" style={{ fontSize: '0.78rem', padding: '4px 10px', borderRadius: '4px', backgroundColor: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE', fontWeight: 600 }}>
                  {current.badge}
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>
                  INDUSTRIAL SPECIFICATION &bull; V4.2
                </span>
              </div>

              <h2 className="heading-font" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                {current.name}
              </h2>
              <div style={{ fontSize: '1.1rem', color: '#D97706', fontWeight: 700, marginBottom: '20px' }}>
                {current.headline}
              </div>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px', maxWidth: '920px' }}>
                {current.description}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '12px 26px', fontSize: '0.95rem', fontWeight: 600 }}
                >
                  Schedule Technical Walkthrough
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Core Capabilities Grid */}
            <div style={{ marginBottom: '40px' }}>
              <h3 className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>
                Core Engineering Capabilities
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                {current.capabilities.map((cap, idx) => (
                  <div 
                    key={idx}
                    className="card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '24px',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <CheckCircle2 size={18} color="#059669" />
                      <h4 className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0F172A' }}>
                        {cap.title}
                      </h4>
                    </div>
                    <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Block */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                padding: '30px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h4 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 700, color: '#0F172A', marginBottom: '18px' }}>
                Technical Specifications & System Compatibility
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {current.specs.map((spec, sIdx) => {
                  const [label, val] = spec.split(': ');
                  return (
                    <div key={sIdx} style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div className="mono" style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>
                        {label.toUpperCase()}
                      </div>
                      <div style={{ color: '#0F172A', fontSize: '0.9rem', fontWeight: 600 }}>
                        {val}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Enquiry to Erection Lifecycle Pipeline */}
      <EnquiryToErectionLifecycle onOpenConsultation={onOpenConsultation} />

      {/* Interoperable Industrial Ecosystem */}
      <IntegrationsEcosystem />

      {/* Bottom CTA Banner */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h3 className="heading-font" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Ready to Modernize Your Heavy Fabrication Facility?
          </h3>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute architectural walkthrough with our industrial software engineers. 
            We review your current Tekla cut-lists, slitting scrap percentages, and bay routing.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              Book Plant Assessment Walkthrough &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
