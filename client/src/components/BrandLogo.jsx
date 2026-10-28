import React from 'react';

export default function BrandLogo({ size = 36, showText = false, subtitle = "PEB SYSTEMS" }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* Brand Icon Mark */}
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: `${Math.round(size * 0.26)}px`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.28)',
          overflow: 'hidden'
        }}
      >
        <svg 
          viewBox="0 0 64 64" 
          width="100%" 
          height="100%" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="keshavLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="keshavLogoSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="keshavLogoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Gradient Base */}
          <rect width="64" height="64" rx="16" fill="url(#keshavLogoBg)"/>
          <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>

          {/* Steel Vertical Column */}
          <rect x="13.5" y="13.5" width="9" height="37" rx="3" fill="url(#keshavLogoSteel)" />

          {/* Upper Structural Rafter Beam */}
          <path d="M28.5 27 L43.2 14.8 C44.4 13.8 46.2 14.6 46.2 16.2 L46.2 22.4 C46.2 23.4 45.6 24.3 44.8 24.9 L34.5 32.5 L28.5 27 Z" fill="url(#keshavLogoSteel)"/>

          {/* Lower Structural Brace Beam */}
          <path d="M29.5 35 L44.8 47.8 C45.8 48.6 46.2 49.8 46.2 51 L46.2 51.5 C46.2 52.9 44.6 53.8 43.4 52.8 L26.8 39.5 L29.5 35 Z" fill="url(#keshavLogoSteel)"/>

          {/* Core Golden Telemetry Pin (Structural Node) */}
          <circle cx="28.5" cy="33" r="4.5" fill="url(#keshavLogoGold)" stroke="#1E40AF" strokeWidth="1.8"/>
          <circle cx="28.5" cy="33" r="1.6" fill="#FFFFFF"/>
        </svg>
      </div>

      {/* Optional Typography Lockup */}
      {showText && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span 
              className="heading-font" 
              style={{ 
                fontWeight: 800, 
                fontSize: `${Math.max(1.05, size * 0.033)}rem`, 
                letterSpacing: '-0.025em',
                color: '#0F172A',
                lineHeight: 1.15
              }}
            >
              KESHAV <span style={{ color: '#2563EB' }}>INFO</span>
            </span>
            {subtitle && (
              <span 
                className="mono"
                style={{
                  fontSize: '0.62rem',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  background: '#FEF3C7',
                  color: '#B45309',
                  border: '1px solid #FDE68A',
                  fontWeight: 700,
                  letterSpacing: '0.04em'
                }}
              >
                {subtitle}
              </span>
            )}
          </div>
          <p style={{ fontSize: '0.68rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
            Structural Steel Operating System
          </p>
        </div>
      )}
    </div>
  );
}
