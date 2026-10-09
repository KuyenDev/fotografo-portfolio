import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Mail, MapPin, Phone, ShieldAlert, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';
import { SectionHeader } from '../components/common/SectionHeader';
import './ContactPage.css';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  estimatedDate: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Portrait Photography',
  'Fashion Editorial',
  'Brand Campaigns',
  'Architectural Photography',
  'Event Photography',
  'Product Photography',
  'Consulta General',
];

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: PROJECT_TYPES.includes(preselectedService) ? preselectedService : PROJECT_TYPES[0],
    estimatedDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && PROJECT_TYPES.includes(preselectedService)) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Por favor ingrese su nombre o entidad.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'El nombre debe contener al menos 2 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es obligatorio para la simulación.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Ingrese un formato de correo electrónico válido (ejemplo@dominio.com).';
    }

    if (!formData.projectType) {
      errs.projectType = 'Seleccione una tipología de proyecto.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Por favor detalle brevemente la visión de su proyecto.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'El mensaje debe tener al menos 8 caracteres explicativos.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network processing without external transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: PROJECT_TYPES[0],
      estimatedDate: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <section className="contact-header-section">
          <SectionHeader
            tag="RESERVAS & PREGUNTAS"
            number="CONTACTO"
            title="INICIAR UNA CONVERSACIÓN"
            subtitle="Planifiquemos su próxima producción fotográfica. Complete el formulario demostrativo para evaluar la experiencia de usuario."
          />
        </section>

        {/* Explicit Demo Notice Banner (Prompt 12) */}
        <div className="contact-simulation-banner">
          <ShieldAlert size={20} className="text-accent" />
          <div className="simulation-banner-text">
            <strong>Experiencia de Demostración Interactiva</strong>
            <p>
              Este formulario es una simulación visual y funcional para el catálogo de KuyénDev.
              Los datos ingresados se validan únicamente en su navegador, <strong>no se envían correos</strong>,
              ni se guardan en base de datos alguna.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Form Column */}
          <div className="contact-form-col">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  className="contact-luxury-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <span>NOMBRE / ENTIDAD *</span>
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Constanza Valenzuela"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <span>CORREO ELECTRÓNICO *</span>
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                  </div>

                  {/* Project Type */}
                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      <span>DISCIPLINA O SERVICIO REQUERIDO *</span>
                      {errors.projectType && (
                        <span className="field-error-msg">{errors.projectType}</span>
                      )}
                    </label>
                    <div className="select-wrap">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="form-select"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Estimated Date */}
                  <div className="form-group">
                    <label htmlFor="estimatedDate" className="form-label">
                      <span>FECHA ESTIMADA DE RODAJE (OPCIONAL)</span>
                    </label>
                    <input
                      type="date"
                      id="estimatedDate"
                      name="estimatedDate"
                      value={formData.estimatedDate}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedDate: e.target.value })
                      }
                      className="form-input form-date-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <span>DETALLES DEL PROYECTO O VISIÓN *</span>
                      {errors.message && (
                        <span className="field-error-msg">{errors.message}</span>
                      )}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa el objetivo de la sesión, locaciones previstas, número de tomas o referencias estéticas..."
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-editorial form-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? 'PROCESANDO SIMULACIÓN...' : 'ENVIAR CONSULTA (SIMULACIÓN)'}
                    </span>
                    <ArrowUpRight size={16} />
                  </button>
                </motion.form>
              ) : (
                /* Success Feedback Message (Prompt 12 requirement) */
                <motion.div
                  key="success"
                  className="contact-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={36} className="text-accent" />
                  </div>

                  <h3 className="success-title">Demostración completada</h3>
                  <p className="success-statement">
                    En un sitio real, esta solicitud podría enviarse al fotógrafo mediante API,
                    notificación por correo o CRM.
                  </p>

                  <div className="success-summary-box">
                    <span className="summary-box-title">RESUMEN DE LA SIMULACIÓN:</span>
                    <p>
                      <strong>Remitente:</strong> {formData.name} ({formData.email})
                    </p>
                    <p>
                      <strong>Servicio:</strong> {formData.projectType}
                    </p>
                    {formData.estimatedDate && (
                      <p>
                        <strong>Fecha estimada:</strong> {formData.estimatedDate}
                      </p>
                    )}
                    <p>
                      <strong>Mensaje:</strong> “{formData.message}”
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn-editorial"
                    onClick={handleReset}
                  >
                    <span>REALIZAR OTRA PRUEBA</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Atelier Contact Info */}
          <div className="contact-info-col">
            <div className="studio-info-card">
              <h3 className="studio-card-title">COORDENADAS DEL ESTUDIO</h3>
              <p className="studio-card-lead">
                Atelier privado disponible para producciones editoriales y sesiones con reserva previa.
              </p>

              <div className="studio-items-list">
                <div className="studio-info-item">
                  <MapPin size={18} className="text-accent" />
                  <div>
                    <span className="item-label">UBICACIÓN</span>
                    <span className="item-val">{siteConfig.contactDemo.studioAddress}</span>
                  </div>
                </div>

                <div className="studio-info-item">
                  <Mail size={18} className="text-accent" />
                  <div>
                    <span className="item-label">CORREO DE CONTACTO</span>
                    <span className="item-val">{siteConfig.contactDemo.email}</span>
                  </div>
                </div>

                <div className="studio-info-item">
                  <Phone size={18} className="text-accent" />
                  <div>
                    <span className="item-label">LÍNEA DIRECTA</span>
                    <span className="item-val">{siteConfig.contactDemo.phone}</span>
                  </div>
                </div>
              </div>

              <div className="studio-hours-box">
                <span className="hours-title">HORARIO DE ATELIER:</span>
                <p>Lunes a Viernes — 09:00 a 19:30 hrs</p>
                <p>Sábados — Producciones programadas en locación</p>
              </div>

              <div className="studio-kuyen-note">
                <Sparkles size={14} className="text-accent" />
                <p>
                  Plantilla diseñada y desarrollada por <strong>KuyénDev</strong>. Totalmente
                  personalizable para fotógrafos independientes o productoras visuales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
