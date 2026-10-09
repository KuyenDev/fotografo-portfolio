import React, { useState } from 'react';
import { Sparkles, X, ArrowUpRight, Info } from 'lucide-react';
import { siteConfig } from '../../config/site';
import './DemoBadge.css';

export const DemoBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside className="demo-badge-wrap" aria-label="Aviso de demostración KuyénDev">
      {!isOpen ? (
        <button
          type="button"
          className="demo-badge-trigger"
          onClick={() => setIsOpen(true)}
          title="Ver detalles de la demostración"
          aria-expanded={isOpen}
        >
          <Sparkles size={13} className="text-accent" />
          <span className="demo-badge-text">{siteConfig.demoNotice.badgeText}</span>
          <Info size={12} className="text-muted" />
        </button>
      ) : (
        <div className="demo-badge-card">
          <div className="demo-badge-card-header">
            <div className="card-header-left">
              <Sparkles size={14} className="text-accent" />
              <span className="card-title">SHOWCASE KUYÉNDEV</span>
            </div>
            <button
              type="button"
              className="card-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Minimizar aviso"
            >
              <X size={14} />
            </button>
          </div>

          <p className="card-desc">
            {siteConfig.demoNotice.fullDisclaimer}
          </p>

          <div className="card-actions">
            <a
              href={siteConfig.demoNotice.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <span>Explorar KuyénDev</span>
              <ArrowUpRight size={13} />
            </a>
            <button
              type="button"
              className="card-dismiss-btn"
              onClick={() => setIsDismissed(true)}
            >
              Ocultar
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
