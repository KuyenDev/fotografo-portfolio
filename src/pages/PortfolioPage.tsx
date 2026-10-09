import React, { useEffect } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GalleryGrid } from '../components/portfolio/GalleryGrid';
import { Shield } from 'lucide-react';
import './PortfolioPage.css';

export const PortfolioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page">
      <div className="container">
        {/* Editorial Heading */}
        <div className="portfolio-header-wrap">
          <SectionHeader
            tag="GALERÍA COMPLETA"
            number="PORTAFOLIO"
            title="ARCHIVO DE OBRAS"
            subtitle="Explora nuestra colección fotográfica por disciplina. Haz clic en cualquier imagen para abrir el visor inmersivo de alta resolución con metadatos técnicos de captura."
          />

          <div className="portfolio-guide-pill">
            <Shield size={14} className="text-accent" />
            <span>Haz clic para abrir visor · Usa flechas ◄ ► y Esc para navegar</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
    </div>
  );
};
