import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Layers, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Workstation', path: '/workstation', badge: 'LIVE' },
    { name: 'System Breakdown', path: '/why-generic-fails' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'ROI Calculator', path: '/roi-calculator' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid rgba(226, 232, 240, 0.6)',
        padding: scrolled ? '12px 0' : '16px 0',
        boxShadow: scrolled ? '0 2px 10px rgba(15, 23, 42, 0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          <BrandLogo size={38} showText={true} subtitle="PEB SYSTEMS" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '22px' 
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="nav-link-pill"
              style={({ isActive }) => ({
                color: isActive ? '#2563EB' : '#334155',
                textDecoration: 'none',
                fontSize: '0.86rem',
                fontWeight: isActive ? 700 : 500,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 11px',
                borderRadius: '6px',
                backgroundColor: isActive ? '#EFF6FF' : 'transparent',
                border: isActive ? '1px solid #BFDBFE' : '1px solid transparent',
                transition: 'all 0.18s ease'
              })}
            >
              {link.name}
              {link.badge && (
                <span 
                  className="mono" 
                  style={{ 
                    fontSize: '0.62rem', 
                    padding: '1px 5px', 
                    borderRadius: '999px', 
                    backgroundColor: '#ECFDF5', 
                    color: '#059669', 
                    border: '1px solid #A7F3D0',
                    fontWeight: 700
                  }}
                >
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ 
              padding: '8px 18px', 
              fontSize: '0.86rem' 
            }}
          >
            Book Plant Demo
            <ChevronRight size={15} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#0F172A',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 20px rgba(15, 23, 42, 0.1)'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? '#2563EB' : '#0F172A',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              })}
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="badge-emerald" style={{ fontSize: '0.65rem' }}>{link.badge}</span>
              )}
            </NavLink>
          ))}
          <div style={{ paddingTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn btn-amber"
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              Book Plant Demo & Assessment
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-link-pill:hover {
          color: #2563EB !important;
          background-color: #F8FAFC !important;
        }
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1039px) {
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
