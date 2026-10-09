import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import './HomeCTA.css';

export const HomeCTA: React.FC = () => {
  return (
    <section className="home-cta-section section-spacing">
      <div className="container">
        <div className="home-cta-box">
          <div className="home-cta-glow" />

          <motion.div
            className="home-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="home-cta-badge">
              <Calendar size={13} className="text-accent" />
              <span>TEMPORADA 2025 / 2026</span>
              <span className="demo-tag-micro">DEMOSTRACIÓN</span>
            </div>

            <h2 className="home-cta-title">
              ¿Listo para inmortalizar su próxima <em className="text-accent font-italic">visión</em>?
            </h2>

            <p className="home-cta-desc">
              Experimente el flujo interactivo de reserva y consulta técnica.
              Diseñado con validación completa y aviso claro de simulación para clientes de KuyénDev.
            </p>

            <div className="home-cta-actions">
              <Link to="/contact" className="btn-editorial home-cta-primary">
                <span>INICIAR SIMULACIÓN DE RESERVA</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                <span>CONOCER SERVICIOS DISPONIBLES</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
