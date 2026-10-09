import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ArtisticIntro.css';

export const ArtisticIntro: React.FC = () => {
  return (
    <section id="intro-section" className="artistic-intro-section section-spacing">
      <div className="container">
        <div className="artistic-intro-grid">
          {/* Left Column: Asymmetrical Typography & Philosophy */}
          <motion.div
            className="intro-text-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-tag">FILOSOFÍA VISUAL</span>
            <span className="intro-manifesto-sub">DISCIPLINA, SILENCIO Y PRECISIÓN</span>

            <h2 className="intro-title">
              No fotografiamos lo que se ve a simple vista. Registramos cómo se{' '}
              <em className="text-accent font-italic">siente</em> el instante.
            </h2>

            <div className="intro-body-text">
              <p>
                Cada imagen producida en <strong>NOIR FRAME</strong> nace de una rigurosa
                concepción de la luz. Rechazamos la saturación efímera y los algoritmos
                repetitivos: creemos en la composición pausada, el respeto por las sombras
                naturales y la pureza del claroscuro.
              </p>
              <p>
                Trabajamos en la intersección entre el retrato editorial, la arquitectura y la alta
                costura, concibiendo cada proyecto como un ensayo visual duradero.
              </p>
            </div>

            <div className="intro-action-row">
              <Link to="/about" className="btn-text">
                <span>CONOCER EL ENFOQUE DEL ESTUDIO</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Offset Editorial Photographic Art with Frame Motif */}
          <motion.div
            className="intro-photo-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="intro-photo-card protected-media">
              <div className="intro-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85"
                  alt="Estudio fotográfico profesional en atmósfera de baja iluminación"
                  className="intro-image"
                />
              </div>

              <div className="intro-photo-caption">
                <span className="caption-tag">ATELIER SANTIAGO</span>
                <span className="caption-meta">Medio Formato & Luz Continua</span>
              </div>
            </div>

            {/* Overlapping Floating Quote Card */}
            <motion.div
              className="intro-quote-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="quote-phrase">
                “La verdadera maestría técnica reside en saber qué dejar deliberadamente en la oscuridad.”
              </p>
              <span className="quote-author">— Dirección Creativa Noir Frame</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
