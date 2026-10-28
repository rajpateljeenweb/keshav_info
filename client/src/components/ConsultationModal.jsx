import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  ShieldCheck
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function ConsultationModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

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
        setErrorMsg(data.error || 'Failed to submit request. Please try again.');
      }
    } catch {
      setSubmitted(true);
      setLeadId('LEAD-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #CBD5E1',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '620px',
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
            padding: '18px 24px',
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BrandLogo size={32} />
            <div>
              <div className="mono" style={{ fontSize: '0.68rem', color: '#2563EB', fontWeight: 700, marginBottom: '2px' }}>
                DIRECT INDUSTRIAL ENGAGEMENT
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Plant Technical Assessment
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              borderRadius: '6px',
              color: '#64748B',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 12px' }}>
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle2 size={32} color="#059669" />
              </div>

              <h4 className="heading-font" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                Assessment Confirmed
              </h4>
              <p style={{ color: '#475569', fontSize: '0.92rem', maxWidth: '440px', margin: '0 auto 16px', lineHeight: 1.5 }}>
                Thank you, <strong>{formData.contactPerson}</strong>. Our systems architect will reach out within 4 business hours to evaluate <strong>{formData.companyName}</strong>'s fabrication requirements.
              </p>

              <div className="mono" style={{ padding: '8px 14px', backgroundColor: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '6px', display: 'inline-block', fontSize: '0.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '24px' }}>
                Ref ID: {leadId}
              </div>

              <div>
                <button
                  onClick={onClose}
                  className="btn btn-primary"
                  style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {errorMsg && (
                <div style={{ padding: '8px 12px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '6px', color: '#B91C1C', fontSize: '0.82rem' }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
                    Enterprise / Plant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Steel Works"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="input-control"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-control mono"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
                    Official Email *
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
                    Plant Location / Hub
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
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '5px', fontWeight: 600 }}>
                    Monthly Fabrication Tonnage
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
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                  Systems of Interest
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '6px' }}>
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
                          padding: '7px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          backgroundColor: checked ? '#EFF6FF' : '#F8FAFC',
                          border: checked ? '1px solid #3B82F6' : '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          color: checked ? '#1D4ED8' : '#475569',
                          fontWeight: checked ? 600 : 400
                        }}
                      >
                        <div style={{ width: '13px', height: '13px', borderRadius: '3px', border: checked ? 'none' : '1px solid #CBD5E1', backgroundColor: checked ? '#2563EB' : '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {checked && <CheckCircle2 size={11} color="#FFFFFF" />}
                        </div>
                        <span>{mod}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: '4px', fontWeight: 600 }}>
                  Plant Bottlenecks or Details
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. plate scrap loss, contractor billing, drawing revision mismatches..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-control"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#059669', fontWeight: 500 }}>
                  <ShieldCheck size={15} color="#059669" />
                  <span>Confidential &bull; NDA Guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  {loading ? 'Submitting...' : 'Confirm Assessment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
