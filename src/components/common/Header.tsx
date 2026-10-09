import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import './Header.css';

interface HeaderProps {
  onOpenMobileNav: () => void;
  isMobileNavOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav, isMobileNavOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="header-brand" aria-label="NOIR FRAME Inicio">
          <span className="brand-title">{siteConfig.brand.name}</span>
          <span className="brand-sub">{siteConfig.brand.sub}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Trigger */}
        <div className="header-actions">
          <Link to="/contact" className="btn-header-cta" title="Experiencia demostrativa de contacto">
            <span>CONSULTAR</span>
            <span className="cta-demo-pill">DEMO</span>
            <ArrowUpRight size={14} className="cta-icon" />
          </Link>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={onOpenMobileNav}
            aria-label={isMobileNavOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={isMobileNavOpen}
          >
            {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
