import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileNav } from './components/common/MobileNav';
import { PageIntro } from './components/common/PageIntro';
import { CustomCursor } from './components/common/CustomCursor';
import { VisualProtectionToast } from './components/common/VisualProtectionToast';
import { DemoBadge } from './components/common/DemoBadge';

import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import './App.css';

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* Cinematic opening splash on first load */}
      <PageIntro />

      {/* Luxury dot & ring mouse cursor for fine pointer devices */}
      <CustomCursor />

      {/* Lightweight image drag and right-click protection notification */}
      <VisualProtectionToast />

      {/* Main Layout Container */}
      <div className="app-shell">
        <Header
          isMobileNavOpen={isMobileNavOpen}
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
        />

        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
        />

        <main id="main-content" className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />

        {/* KuyénDev Showcase Floater */}
        <DemoBadge />
      </div>
    </Router>
  );
};

export default App;
