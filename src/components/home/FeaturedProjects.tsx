import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { SectionHeader } from '../common/SectionHeader';
import './FeaturedProjects.css';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured-section section-spacing">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="featured-header-row">
          <SectionHeader
            tag="SERIES EDITORIALES"
            number="01 / 05"
            title="OBRAS DESTACADAS"
            subtitle="Una selección curada de proyectos con ritmo visual alternado, desde el claroscuro íntimo hasta el dinamismo de alta costura."
          />
          <div className="featured-header-cta">
            <Link to="/portfolio" className="btn-outline">
              <span>VER TODAS LAS SERIES</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Dynamic Asymmetric Project Showcase */}
        <div className="featured-projects-list">
          {projectsData.map((project, index) => {
            // Apply varied editorial layout styles according to prompt 6.4
            const layoutType =
              index === 0
                ? 'split-hero'
                : index === 1
                ? 'portrait-offset'
                : index === 2
                ? 'wide-editorial'
                : index === 3
                ? 'reversed-split'
                : 'card-showcase';

            return (
              <motion.article
                key={project.id}
                className={`project-entry project-entry--${layoutType}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Media with hover zoom & protected media */}
                <Link
                  to={`/project/${project.slug}`}
                  className="project-media-wrap protected-media"
                  aria-label={`Ver serie: ${project.title}`}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-media-overlay">
                    <span className="overlay-view-badge">
                      <span>VER SERIE</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>

                {/* Information Block */}
                <div className="project-info-block">
                  <div className="project-info-meta">
                    <span className="project-meta-category">{project.category}</span>
                    <span className="project-meta-year">{project.year}</span>
                    <span className="project-meta-num">{project.number}</span>
                  </div>

                  <h3 className="project-info-title">
                    <Link to={`/project/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="project-info-subtitle">{project.subtitle}</p>
                  <p className="project-info-statement">{project.statement}</p>

                  <div className="project-action-link">
                    <Link to={`/project/${project.slug}`} className="btn-text">
                      <span>EXPLORAR PROYECTO</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
