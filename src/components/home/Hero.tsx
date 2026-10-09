import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react';
import { siteConfig } from '../../config/site';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('intro-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" aria-label="Hero principal">
      {/* Background Cinematic Photo with subtle ambient zoom */}
      <div className="hero-backdrop-wrap">
        <motion.div
          className="hero-backdrop protected-media"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1920&q=85"
            alt="Fotografía editorial protagonista de iluminación de alto contraste"
            className="hero-backdrop-img"
          />
        </motion.div>
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-container">
        {/* Top Tag & Discipline Badge */}
        <motion.div
          className="hero-meta-top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-badge">
            <Camera size={13} className="text-accent" />
            <span>ESTUDIO EDITORIAL & FINE ART</span>
          </div>
          <span className="hero-meta-year">TEMPORADA 2025 / 2026</span>
        </motion.div>

        {/* Central Monumental Typography */}
        <div className="hero-title-wrap">
          <motion.div
            className="hero-title-line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-headline">
              <span className="hero-word">BEYOND</span>
              <span className="hero-word-italic">THE FRAME</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            {siteConfig.brand.tagline}. Una aproximación rigurosa a la luz, el volumen y la autenticidad humana.
          </motion.p>
        </div>

        {/* Bottom Bar: Action buttons and Scroll indicator */}
        <motion.div
          className="hero-bottom-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          <div className="hero-cta-group">
            <Link to="/portfolio" className="btn-editorial">
              <span>EXPLORAR OBRAS</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline">
              <span>FILOSOFÍA DEL ESTUDIO</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="stat-number">05</span>
              <span className="stat-label">DISCIPLINAS</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat-item">
              <span className="stat-number">24+</span>
              <span className="stat-label">OBRAS MAESTRAS</span>
            </div>
          </div>

          <button
            type="button"
            className="hero-scroll-btn"
            onClick={scrollToNext}
            aria-label="Desplazarse hacia la introducción"
          >
            <span className="scroll-btn-text">DESCUBRIR</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={15} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
