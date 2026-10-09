import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import './ManifestoSection.css';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="manifesto-section" aria-label="Manifiesto del estudio">
      {/* Background cinematic imagery with controlled grain & overlay */}
      <div className="manifesto-bg-wrap protected-media">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&q=80"
          alt="Atmósfera fotográfica de horizonte y luz sutil"
          className="manifesto-bg-img"
        />
        <div className="manifesto-overlay" />
      </div>

      <div className="container manifesto-container">
        <motion.div
          className="manifesto-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="manifesto-badge">
            <Camera size={14} className="text-accent" />
            <span>EL MANIFIESTO NOIR</span>
          </div>

          <h2 className="manifesto-headline">
            EVERY FRAME
            <br />
            <span className="manifesto-italic">HAS A STORY.</span>
          </h2>

          <div className="manifesto-sub-block">
            <p className="manifesto-lead">
              El tiempo no se detiene; se consagra. Cada disparo es una decisión ética:
              qué iluminar, qué dejar en la penumbra y qué verdad preservar contra el olvido.
            </p>
            <div className="manifesto-stats-row">
              <div className="manifesto-stat">
                <span className="m-stat-val">1/8000s</span>
                <span className="m-stat-lbl">Instante Preciso</span>
              </div>
              <div className="manifesto-stat-divider" />
              <div className="manifesto-stat">
                <span className="m-stat-val">100 MP</span>
                <span className="m-stat-lbl">Resolución Sin Concesiones</span>
              </div>
              <div className="manifesto-stat-divider" />
              <div className="manifesto-stat">
                <span className="m-stat-val">100%</span>
                <span className="m-stat-lbl">Artesanía Visual</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
