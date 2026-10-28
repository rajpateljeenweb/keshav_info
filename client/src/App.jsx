import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Views
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Workstation from './pages/Workstation';
import WhyGenericFailsPage from './pages/WhyGenericFailsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import RoiCalculatorPage from './pages/RoiCalculatorPage';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenConsultation={handleOpenConsultation} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/solutions" element={<Solutions onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/workstation" element={<Workstation onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/why-generic-fails" element={<WhyGenericFailsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/case-studies" element={<CaseStudiesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/roi-calculator" element={<RoiCalculatorPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer onOpenConsultation={handleOpenConsultation} />

        <ConsultationModal 
          isOpen={consultationOpen} 
          onClose={handleCloseConsultation} 
        />
      </div>
    </BrowserRouter>
  );
}
