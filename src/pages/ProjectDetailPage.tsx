import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Camera, Info } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Lightbox } from '../components/common/Lightbox';
import type { GalleryItem } from '../types';
import './ProjectDetailPage.css';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Scroll to top upon project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container project-not-found-wrap section-spacing">
        <h2>Proyecto no encontrado</h2>
        <p>La serie fotográfica solicitada no está disponible en la demostración.</p>
        <Link to="/portfolio" className="btn-editorial">
          <span>VOLVER AL PORTAFOLIO</span>
        </Link>
      </div>
    );
  }

  // Convert project gallery to GalleryItem format for Lightbox compatibility
  const projectGalleryItems: GalleryItem[] = project.gallery.map((img, idx) => ({
    id: `${project.id}-img-${idx}`,
    title: `${project.title} — Pieza ${idx + 1}`,
    category: 'EDITORIAL',
    year: project.year,
    aspectRatio: img.aspect === 'wide' ? 'wide' : img.aspect === 'vertical' ? 'vertical' : 'horizontal',
    imageUrl: img.url,
    alt: img.caption,
    description: img.caption,
    camera: project.details.find((d) => d.label === 'Cámara')?.value || 'Hasselblad / Leica',
    lens: project.details.find((d) => d.label === 'Óptica')?.value || 'Prime 50mm',
    aperture: img.meta?.split('·')[0]?.trim() || 'f/2.8',
    shutter: img.meta?.split('·')[1]?.trim() || '1/500s',
    iso: img.meta?.split('·')[2]?.trim() || 'ISO 100',
    location: project.location,
  }));

  const nextProject = projectsData.find((p) => p.slug === project.nextProjectSlug) || projectsData[0];

  return (
    <article className="project-detail-page">
      {/* Hero Banner */}
      <section className="project-hero">
        <div className="project-hero-media protected-media">
          <motion.img
            src={project.heroImage}
            alt={project.title}
            className="project-hero-img"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="project-hero-overlay" />
        </div>

        <div className="container project-hero-container">
          <div className="project-back-nav">
            <Link to="/portfolio" className="btn-back-portfolio">
              <ArrowLeft size={16} />
              <span>TODAS LAS SERIES</span>
            </Link>
            <span className="project-demo-pill">DEMOSTRACIÓN KUYÉNDEV</span>
          </div>

          <motion.div
            className="project-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <div className="project-hero-meta">
              <span className="project-hero-num">{project.number}</span>
              <span className="project-hero-cat">{project.category}</span>
              <span className="project-hero-year">{project.year}</span>
            </div>

            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-subtitle">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Conceptual & Technical Narrative */}
      <section className="project-narrative-section">
        <div className="container">
          <div className="project-narrative-grid">
            {/* Left: Statement & Approach */}
            <div className="narrative-left">
              <span className="editorial-tag">CONCEPTO ARTÍSTICO</span>
              <p className="narrative-statement">{project.statement}</p>

              <blockquote className="narrative-quote">
                {project.conceptQuote}
              </blockquote>

              <div className="narrative-approach-block">
                <h3 className="narrative-subheading">ENFOQUE Y TÉCNICA</h3>
                <p className="narrative-approach-text">{project.approach}</p>
              </div>
            </div>

            {/* Right: Technical Spec Sheet */}
            <div className="narrative-right">
              <div className="spec-sheet-card">
                <div className="spec-sheet-header">
                  <Camera size={16} className="text-accent" />
                  <span className="spec-sheet-title">FICHA DE PRODUCCIÓN (EJEMPLO)</span>
                </div>

                <dl className="spec-sheet-list">
                  <div className="spec-row">
                    <dt className="spec-term">CLIENTE / ENCARGO</dt>
                    <dd className="spec-def">{project.client}</dd>
                  </div>
                  <div className="spec-row">
                    <dt className="spec-term">UBICACIÓN</dt>
                    <dd className="spec-def">{project.location}</dd>
                  </div>
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="spec-row">
                      <dt className="spec-term">{detail.label.toUpperCase()}</dt>
                      <dd className="spec-def">{detail.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="spec-sheet-note">
                  <Info size={13} className="text-muted" />
                  <span>
                    Proyecto de demostración diseñado para exhibir la versatilidad de KuyénDev.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Photographic Gallery */}
      <section className="project-gallery-section">
        <div className="container">
          <div className="project-gallery-header">
            <span className="editorial-tag">SECUENCIA VISUAL</span>
            <h2 className="project-gallery-title">PIEZAS DE LA COLECCIÓN</h2>
          </div>

          <div className="project-gallery-composition">
            {project.gallery.map((item, index) => {
              const aspectClass = `aspect-${item.aspect}`;

              return (
                <motion.div
                  key={index}
                  className={`project-gallery-card ${aspectClass}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onClick={() => setSelectedImageIndex(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver fotografía ampliada: ${item.caption}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImageIndex(index);
                    }
                  }}
                >
                  <div className="project-gallery-media protected-media">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="project-gallery-img"
                      loading="lazy"
                    />
                    <div className="project-gallery-hover">
                      <span className="gallery-hover-zoom">AMPLIAR EN VISOR</span>
                    </div>
                  </div>

                  <div className="project-gallery-caption-row">
                    <span className="caption-text">{item.caption}</span>
                    {item.meta && <span className="caption-meta-tag">{item.meta}</span>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Project Teaser Row */}
      <section className="next-project-section">
        <div className="container">
          <div className="next-project-banner">
            <div className="next-project-info">
              <span className="editorial-tag">SIGUIENTE SERIE</span>
              <span className="next-project-number">{nextProject.number}</span>
              <h2 className="next-project-title">{nextProject.title}</h2>
              <p className="next-project-subtitle">{nextProject.subtitle}</p>

              <Link to={`/project/${nextProject.slug}`} className="btn-editorial next-btn">
                <span>VER SIGUIENTE PROYECTO</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="next-project-thumb protected-media">
              <img
                src={nextProject.heroImage}
                alt={nextProject.title}
                className="next-thumb-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Project Gallery */}
      <Lightbox
        items={projectGalleryItems}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
      />
    </article>
  );
};
