import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Camera } from 'lucide-react';
import { siteConfig } from '../../config/site';
import './MobileNav.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
        >
          <div className="mobile-nav-backdrop" onClick={onClose} />

          <motion.div
            className="mobile-nav-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar */}
            <div className="mobile-nav-top">
              <div className="mobile-nav-brand">
                <span className="brand-title">{siteConfig.brand.name}</span>
                <span className="brand-sub">{siteConfig.brand.sub}</span>
              </div>
              <button
                type="button"
                className="mobile-nav-close"
                onClick={onClose}
                aria-label="Cerrar navegación"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="mobile-nav-links">
              <ul>
                {siteConfig.navigation.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `mobile-link ${isActive ? 'mobile-link--active' : ''}`
                      }
                      onClick={onClose}
                    >
                      <span className="mobile-link-num">0{index + 1}</span>
                      <span className="mobile-link-text">{item.name}</span>
                      <span className="mobile-link-label">{item.label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom info & Demo notice */}
            <div className="mobile-nav-footer">
              <Link to="/contact" className="btn-editorial mobile-cta-btn" onClick={onClose}>
                <span>CONSULTAR DISPONIBILIDAD</span>
                <ArrowUpRight size={16} />
              </Link>

              <div className="mobile-demo-badge">
                <Camera size={14} className="text-accent" />
                <p>
                  <strong>{siteConfig.demoNotice.badgeText}</strong>
                  <br />
                  <span>Marca, proyectos y datos ficticios.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
