import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import { SectionHeader } from '../components/common/SectionHeader';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const [expandedProcess, setExpandedProcess] = useState<Record<string, boolean>>({});

  const toggleProcess = (serviceId: string) => {
    setExpandedProcess((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-hero-section">
        <div className="container">
          <SectionHeader
            tag="SERVICIOS EDITORIALES"
            number="01 / 06"
            title="EXPERIENCIAS FOTOGRÁFICAS DE AUTOR"
            subtitle="Producciones a medida diseñadas para marcas, editoriales y particulares que buscan imágenes con trascendencia estética."
          />

          <div className="services-demo-alert">
            <AlertCircle size={16} className="text-accent" />
            <span>
              <strong>Aviso de demostración:</strong> Los paquetes, entregables y valores expuestos a
              continuación son simulaciones ilustrativas creadas para el catálogo de KuyénDev.
            </span>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-collection">
            {servicesData.map((service, index) => {
              const isProcessOpen = expandedProcess[service.id] || false;

              return (
                <motion.article
                  key={service.id}
                  className="service-detail-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  <div className="service-card-grid">
                    {/* Visual Media Column */}
                    <div className="service-media-col protected-media">
                      <div className="service-img-wrap">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="service-img"
                          loading="lazy"
                        />
                        <span className="service-number-pill">{service.number}</span>
                      </div>
                    </div>

                    {/* Information Column */}
                    <div className="service-info-col">
                      <div className="service-header-meta">
                        <span className="service-fictitious-price">
                          {service.fictitiousPriceRange}
                        </span>
                      </div>

                      <h2 className="service-title">{service.title}</h2>
                      <p className="service-tagline">{service.tagline}</p>
                      <p className="service-desc">{service.description}</p>

                      {/* Deliverables */}
                      <div className="service-deliverables-block">
                        <h3 className="deliverables-heading">ENTREGABLES INCLUIDOS:</h3>
                        <ul className="deliverables-list">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx}>
                              <Check size={14} className="text-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process Toggle */}
                      <div className="service-process-wrapper">
                        <button
                          type="button"
                          className="service-process-toggle-btn"
                          onClick={() => toggleProcess(service.id)}
                          aria-expanded={isProcessOpen}
                        >
                          <span>Ver las 4 etapas del proceso</span>
                          {isProcessOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        {isProcessOpen && (
                          <motion.div
                            className="service-process-steps-list"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {service.process.map((step) => (
                              <div key={step.step} className="step-mini-card">
                                <span className="step-num">{step.step}</span>
                                <div>
                                  <h4 className="step-name">{step.name}</h4>
                                  <p className="step-desc">{step.description}</p>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Booking Simulation Action */}
                      <div className="service-actions-row">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="btn-editorial"
                        >
                          <span>SIMULAR CONSULTA DE ESTE SERVICIO</span>
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
