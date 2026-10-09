import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteConfig } from '../config/site';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Editorial Page Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            <motion.div
              className="about-hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="editorial-tag">IDENTIDAD & ENFOQUE</span>
              <h1 className="about-hero-title">
                SOBRE EL ESTUDIO <br />
                <span className="font-italic text-accent">NOIR FRAME</span>
              </h1>
              <p className="about-hero-lead">
                Un atelier visual dedicado a la fotografía de autor, la dirección de arte editorial y
                la documentación de la belleza escultórica sin artificios.
              </p>
            </motion.div>

            <motion.div
              className="about-hero-media protected-media"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85"
                alt="Espacio de trabajo y atelier fotográfico"
                className="about-hero-img"
              />
              <div className="about-hero-badge">
                <Camera size={13} className="text-accent" />
                <span>ATELIER CENTRAL · SANTIAGO</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Philosophy Section */}
      <section className="about-philosophy-section section-spacing">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-intro">
              <SectionHeader
                tag="MANIFIESTO"
                number="01"
                title="FILOSOFÍA CREATIVA"
                subtitle="Nuestra práctica parte del principio de que la fotografía no debe competir con el flujo frenético de las redes: debe ser un monumento a la quietud."
              />
            </div>

            <div className="philosophy-columns">
              <div className="philosophy-col-card">
                <h3 className="philo-card-title">01 — Claroscuro Escultórico</h3>
                <p className="philo-card-desc">
                  La sombra no es la falta de información; es el elemento que otorga volumen, drama y
                  misterio a los rostros y a las formas arquitectónicas. Esculpimos con luz puntual.
                </p>
              </div>

              <div className="philosophy-col-card">
                <h3 className="philo-card-title">02 — La Honestidad de la Piel</h3>
                <p className="philo-card-desc">
                  Rechazamos el retoque digital invasivo que homogeniza facciones. Preservamos la
                  textura genuina, el poro, la asimetría y el carácter biográfico de cada sujeto.
                </p>
              </div>

              <div className="philosophy-col-card">
                <h3 className="philo-card-title">03 — Rigor Compositivo Suizo</h3>
                <p className="philo-card-desc">
                  Cada encuadre responde a una cuadrícula mental implacable. El espacio negativo, las
                  líneas de fuga y la proporción áurea guían la mirada del observador hacia lo esencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Working Process */}
      <section className="about-process-section section-spacing">
        <div className="container">
          <SectionHeader
            tag="METODOLOGÍA"
            number="02"
            title="NUESTRO PROCESO DE TRABAJO"
            subtitle="Una ruta metódica y transparente desde la primera conversación hasta la entrega de los archivos finales."
          />

          <div className="process-timeline">
            {[
              {
                step: '01',
                title: 'Inmersión & Moodboard',
                description:
                  'Diálogo inicial para comprender la visión, referencias visuales, vestuario y locaciones. Creamos una guía conceptual precisa antes de encender una sola luz.',
              },
              {
                step: '02',
                title: 'Escenografía & Diseño Lumínico',
                description:
                  'Calibración milimétrica de luces continuas, reflectores pasivos y ópticas seleccionadas según la atmósfera emocional deseada.',
              },
              {
                step: '03',
                title: 'La Sesión Guiada',
                description:
                  'Dirección empática y relajada en set. Monitoreo tethering en directo para garantizar que el cliente supervise la composición en tiempo real.',
              },
              {
                step: '04',
                title: 'Curaduría & Gradación Tonal',
                description:
                  'Selección minuciosa de las piezas maestras. Revelado tonal en 16-bit con perfiles de color cinemáticos y copias maestras en alta resolución.',
              },
            ].map((p, idx) => (
              <motion.div
                key={p.step}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="timeline-step-badge">{p.step}</div>
                <h3 className="timeline-step-title">{p.title}</h3>
                <p className="timeline-step-desc">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Equipment */}
      <section className="about-craft-section section-spacing">
        <div className="container">
          <div className="craft-grid">
            <div className="craft-content">
              <span className="editorial-tag">OFICIO & TECNOLOGÍA</span>
              <h2 className="craft-title">EL EQUIPO COMO EXTENSIÓN DE LA MIRADA</h2>
              <p className="craft-desc">
                Trabajamos con sistemas de medio formato digital (Hasselblad y Fujifilm GFX) y
                ópticas de focal fija Leica y Sony G Master. Esta combinación nos otorga una latitud
                de exposición superior, transiciones de foco ultra sedosas y gradaciones tonales sin
                rupturas.
              </p>

              <ul className="craft-specs-list">
                <li>
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Sensores de medio formato de hasta 100 Megapíxeles</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Lentes prime luminosos (f/1.2 y f/1.4) de resolución óptica máxima</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Generadores de luz continua y flash de alta velocidad (HSS)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>Monitores calibrados por espectrofotómetro en espacio Adobe RGB</span>
                </li>
              </ul>
            </div>

            <div className="craft-media protected-media">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
                alt="Cámara fotográfica profesional y óptica clásica"
                className="craft-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Showcase Disclaimer Card (Prompt req 10 & 2) */}
      <section className="about-demo-banner section-spacing-bottom">
        <div className="container">
          <div className="demo-declaration-card">
            <div className="demo-declaration-header">
              <ShieldCheck size={20} className="text-accent" />
              <h3>AVISO DE DEMOSTRACIÓN DE DISEÑO WEB</h3>
            </div>
            <p className="demo-declaration-body">
              <strong>NOIR FRAME</strong> es un concepto de marca ficticio desarrollado por{' '}
              <a href={siteConfig.demoNotice.agencyUrl} target="_blank" rel="noopener noreferrer">
                KuyénDev
              </a>{' '}
              como parte de su catálogo de soluciones web prémium. Todos los proyectos,
              fotografías, testimonios técnicos y coordenadas son ejemplos diseñados para ilustrar
              cómo puede estructurarse un portafolio fotográfico de clase mundial.
            </p>
            <div className="demo-declaration-actions">
              <Link to="/portfolio" className="btn-editorial">
                <span>EXPLORAR EL PORTAFOLIO</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>SIMULAR CONTACTO</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
