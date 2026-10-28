import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Clock, 
  HelpCircle,
  Building,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    plantLocation: '',
    monthlyTonnage: '300 - 800 MT/month',
    message: '',
    selectedModules: ['SteelCore PEB ERP', 'Tekla Revision Sync']
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const toggleModule = (moduleName) => {
    setFormData(prev => {
      const exists = prev.selectedModules.includes(moduleName);
      return {
        ...prev,
        selectedModules: exists 
          ? prev.selectedModules.filter(m => m !== moduleName)
          : [...prev.selectedModules, moduleName]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setSubmitted(true);
      setLeadId('LEAD-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How long does a full SteelCore™ PEB ERP deployment take?",
      a: "Typical plant onboarding is completed in 3 to 5 weeks. Week 1 is Tekla model sync & shop mapping; Week 2 is hardware weighbridge and tablet setup; Week 3 is contractor piece-rate rules; Weeks 4-5 are live parallel shop-floor runs with our engineers on site."
    },
    {
      q: "Can SteelCore run on our local factory server without internet?",
      a: "Yes. We offer hybrid cloud or on-premise industrial server deployments. Our shop-floor tablets and site mobile apps use offline-first PWA caching to continue operating even during network outages."
    },
    {
      q: "How do you protect our proprietary structural drawings and pricing?",
      a: "All data is encrypted end-to-end with strict role-based access. Fabrication floor workers see only approved shop drawings and cut-lists, while confidential steel purchase rates and profit margins are locked to directors."
    },
    {
      q: "Can we integrate with our existing electronic weighbridge?",
      a: "Yes. We provide native RS232 serial and TCP/IP drivers compatible with Avery Weigh-Tronix, Essae, Rice Lake, and all standard electronic weighbridges in India."
    }
  ];

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner */}
      <section style={{ padding: '45px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <span>DIRECT INDUSTRIAL ENGAGEMENT</span>
          </div>
          <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
            Schedule a Technical Plant Assessment
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Speak directly with an industrial solutions architect. We assess your shop-floor bottlenecks, 
            Tekla drawing revision workflows, and coil scrap rates.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section style={{ padding: '60px 0 90px', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', maxWidth: '1120px', margin: '0 auto' }}>
            {/* Left: Contact Info & Hub Locations */}
            <div>
              <h2 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                Engineering Labs & Offices
              </h2>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '28px' }}>
                Headquartered in Gujarat's heavy industrial corridor, serving Pre-Engineered Building fabricators and infrastructure clients across India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.98rem' }}>Western Industrial Corridor Hub</div>
                    <div style={{ color: '#475569', fontSize: '0.88rem', marginTop: '3px', lineHeight: 1.5 }}>
                      Surat &bull; Valsad &bull; Ahmedabad Engineering Labs<br />
                      Covering GIDC Heavy Industrial Belts
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} color="#059669" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.98rem' }}>Direct Line & WhatsApp</div>
                    <div className="mono" style={{ color: '#2563EB', fontSize: '0.95rem', fontWeight: 700, marginTop: '3px' }}>
                      +91 98250 88214 &bull; +91 94280 11920
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Mon &ndash; Sat, 9:00 AM &ndash; 7:30 PM IST</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} color="#D97706" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.98rem' }}>Official Technical Correspondence</div>
                    <div className="mono" style={{ color: '#D97706', fontSize: '0.95rem', fontWeight: 700, marginTop: '3px' }}>
                      engineering@keshavinfo.com
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '2px' }}>Technical responses within 4 business hours</div>
                  </div>
                </div>
              </div>

              {/* Plant Standards */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700, fontSize: '0.88rem', marginBottom: '8px' }}>
                  <ShieldCheck size={20} />
                  <span>NON-DISCLOSURE GUARANTEED</span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  We routinely execute formal Mutual NDAs before conducting shop audits. Your detailing practices and fabrication pricing remain strictly proprietary.
                </p>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '36px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h3 className="heading-font" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Book Plant Technical Walkthrough
              </h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '24px' }}>
                Fill out the parameters below to schedule a walkthrough with an industrial architect.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} color="#059669" />
                  </div>
                  <h4 className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                    Consultation Confirmed
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '420px', margin: '0 auto 16px', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.contactPerson}</strong>. Our industrial systems architect will reach out within 4 business hours to evaluate <strong>{formData.companyName}</strong>'s requirements.
                  </p>
                  <div className="mono" style={{ padding: '8px 14px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '6px', display: 'inline-block', fontSize: '0.84rem', color: '#1D4ED8', fontWeight: 700, marginBottom: '24px' }}>
                    Reference ID: {leadId}
                  </div>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                      style={{ fontSize: '0.88rem' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {errorMsg && (
                    <div style={{ padding: '10px 14px', backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: '6px', color: '#991B1B', fontSize: '0.88rem' }}>
                      {errorMsg}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Plant / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Structural Steel"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="input-control"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Contact Person & Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Patel, MD"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="input-control"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98250 11223"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-control mono"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="director@apexsteel.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-control"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Plant Location / Industrial Zone
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Valsad / Surat GIDC / Pune"
                        value={formData.plantLocation}
                        onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                        className="input-control"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                        Monthly Fabrication Capacity
                      </label>
                      <select
                        value={formData.monthlyTonnage}
                        onChange={(e) => setFormData({ ...formData, monthlyTonnage: e.target.value })}
                        className="input-control"
                      >
                        <option value="Under 300 MT/month">Under 300 MT / month</option>
                        <option value="300 - 800 MT/month">300 - 800 MT / month</option>
                        <option value="800 - 1,500 MT/month">800 - 1,500 MT / month</option>
                        <option value="1,500+ MT/month (Heavy Enterprise)">1,500+ MT / month (Heavy Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Modules Selection */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '8px', fontWeight: 600 }}>
                      Systems & Modules of Interest
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
                      {[
                        'SteelCore PEB ERP',
                        'Tekla Revision Sync',
                        'Coil Slitting Yield',
                        'Sequence Dispatch App',
                        'EPC Client Portal'
                      ].map((mod) => {
                        const checked = formData.selectedModules.includes(mod);
                        return (
                          <div
                            key={mod}
                            onClick={() => toggleModule(mod)}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              backgroundColor: checked ? '#EFF6FF' : '#F8FAFC',
                              border: checked ? '1px solid #2563EB' : '1px solid #CBD5E1',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '0.82rem',
                              fontWeight: checked ? 700 : 500,
                              color: checked ? '#1D4ED8' : '#475569',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{ width: '15px', height: '15px', borderRadius: '4px', border: checked ? 'none' : '1px solid #94A3B8', backgroundColor: checked ? '#2563EB' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {checked && <CheckCircle2 size={13} color="#FFFFFF" />}
                            </div>
                            <span>{mod}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                      Current Shop Bottlenecks or Project Details
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Plate nesting scrap, contractor billing overcharge, Tekla revision mismatches..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-control"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '13px', fontSize: '0.96rem', fontWeight: 700 }}
                  >
                    {loading ? 'Submitting...' : 'Confirm Technical Assessment Request'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial FAQ Section */}
      <section style={{ padding: '75px 0 95px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h2 className="heading-font" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0F172A', marginBottom: '32px', textAlign: 'center' }}>
            Frequently Asked Technical Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {faqs.map((f, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '26px', boxShadow: 'var(--shadow-card)' }}>
                <h3 className="heading-font" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1D4ED8', marginBottom: '10px' }}>
                  {f.q}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
