import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import './SpecialtiesGrid.css';

interface SpecialtyItem {
  id: string;
  categoryParam: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  lensType: string;
}

const specialties: SpecialtyItem[] = [
  {
    id: 'spec-1',
    categoryParam: 'PORTRAITS',
    number: '01',
    title: 'Retratos de Autor',
    tagline: 'Profundidad psicológica e iluminación escultórica',
    description: 'Estudios de rostro y cuerpo donde la mirada revela la historia interior sin máscaras.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    lensType: '85mm f/1.4 Prime',
  },
  {
    id: 'spec-2',
    categoryParam: 'FASHION',
    number: '02',
    title: 'Moda & Movimiento',
    tagline: 'Textiles en suspensión y corte contemporáneo',
    description: 'Tomas coreografiadas donde el viento y el movimiento dialogan con la alta costura.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    lensType: '50mm f/1.2 Speed',
  },
  {
    id: 'spec-3',
    categoryParam: 'ARCHITECTURE',
    number: '03',
    title: 'Arquitectura & Espacio',
    tagline: 'Rigor brutalista y simetría lineal pura',
    description: 'Captura de volúmenes monumentales, claroscuros de hormigón y reflexiones geométricas.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    lensType: '30mm Tilt-Shift',
  },
  {
    id: 'spec-4',
    categoryParam: 'EDITORIAL',
    number: '04',
    title: 'Editorial de Arte',
    tagline: 'Narrativas conceptuales para publicaciones',
    description: 'Ensayos visuales concebidos con dirección de arte integral para portadas e impresos.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    lensType: 'Medio Formato 80mm',
  },
  {
    id: 'spec-5',
    categoryParam: 'EVENTS',
    number: '05',
    title: 'Eventos & Galas',
    tagline: 'Fotoperiodismo de autor en luz natural',
    description: 'Registro documental íntimo y discreto de celebraciones y momentos trascendentes.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    lensType: '35mm & 50mm Ambient',
  },
  {
    id: 'spec-6',
    categoryParam: 'EDITORIAL',
    number: '06',
    title: 'Producto & Detalle',
    tagline: 'Objetos esculpidos con micro-iluminación',
    description: 'Bodegones de lujo para alta joyería, perfumería y diseño de autor con precisión artesanal.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    lensType: '90mm Macro 1:1',
  },
];

export const SpecialtiesGrid: React.FC = () => {
  const [activeSpecialty, setActiveSpecialty] = useState<string>(specialties[0].id);

  return (
    <section className="specialties-section section-spacing">
      <div className="container">
        <SectionHeader
          tag="DISCIPLINAS"
          number="02 / 05"
          title="ESPECIALIDADES DEL ESTUDIO"
          subtitle="Cada género fotográfico exige un dominio óptico, lumínico y conceptual singular."
        />

        <div className="specialties-grid">
          {specialties.map((item, idx) => {
            const isHovered = activeSpecialty === item.id;
            return (
              <motion.div
                key={item.id}
                className={`specialty-card ${isHovered ? 'specialty-card--active' : ''}`}
                onMouseEnter={() => setActiveSpecialty(item.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="specialty-card-bg protected-media">
                  <img src={item.image} alt={item.title} className="specialty-card-img" />
                  <div className="specialty-card-mask" />
                </div>

                <div className="specialty-card-content">
                  <div className="specialty-top">
                    <span className="specialty-num">{item.number}</span>
                    <span className="specialty-lens">{item.lensType}</span>
                  </div>

                  <div className="specialty-bottom">
                    <h3 className="specialty-title">{item.title}</h3>
                    <p className="specialty-tagline">{item.tagline}</p>
                    <p className="specialty-desc">{item.description}</p>

                    <Link
                      to={`/portfolio?cat=${item.categoryParam}`}
                      className="specialty-link"
                    >
                      <span>EXPLORAR CATEGORÍA</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
