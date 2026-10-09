import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Camera, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/site';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Editorial Row */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <span className="footer-brand-name">{siteConfig.brand.name}</span>
            <span className="footer-brand-sub">{siteConfig.brand.sub}</span>
            <p className="footer-tagline">{siteConfig.brand.tagline}</p>
          </div>

          <button
            type="button"
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
          >
            <span>SUBIR</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="editorial-divider" />

        {/* Middle Columns */}
        <div className="footer-middle">
          {/* Col 1: Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">NAVEGACIÓN</h4>
            <ul className="footer-links-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Socials */}
          <div className="footer-col">
            <h4 className="footer-col-title">REDES FICTICIAS</h4>
            <ul className="footer-links-list">
              {siteConfig.socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Coordinates */}
          <div className="footer-col">
            <h4 className="footer-col-title">ESTUDIO (EJEMPLO)</h4>
            <p className="footer-contact-text">{siteConfig.brand.location}</p>
            <p className="footer-contact-text">{siteConfig.contactDemo.email}</p>
            <p className="footer-contact-text text-muted">{siteConfig.contactDemo.phone}</p>
          </div>

          {/* Col 4: KuyénDev Showcase Info */}
          <div className="footer-col footer-col-showcase">
            <div className="showcase-card">
              <div className="showcase-header">
                <Sparkles size={16} className="text-accent" />
                <span className="showcase-badge-title">KUYÉNDEV SHOWCASE</span>
              </div>
              <p className="showcase-text">
                {siteConfig.demoNotice.fullDisclaimer}
              </p>
              <a
                href={siteConfig.demoNotice.agencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-agency-link"
              >
                <span>Conocer catálogo KuyénDev</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            <Camera size={14} className="text-accent" />
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.brand.name}. Demostración de diseño web por{' '}
              <a href={siteConfig.demoNotice.agencyUrl} target="_blank" rel="noopener noreferrer">
                KuyénDev
              </a>.
            </span>
          </div>

          <div className="footer-bottom-tech">
            <span>React · Vite · TypeScript · Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
