import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Maximize2, Camera, MapPin, SlidersHorizontal } from 'lucide-react';
import type { GalleryCategory } from '../../types';
import { galleryItems } from '../../data/gallery';
import { Lightbox } from '../common/Lightbox';
import './GalleryGrid.css';

const CATEGORIES: GalleryCategory[] = [
  'ALL WORK',
  'PORTRAITS',
  'EDITORIAL',
  'FASHION',
  'ARCHITECTURE',
  'EVENTS',
];

export const GalleryGrid: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('cat') as GalleryCategory) || 'ALL WORK';

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'ALL WORK'
  );

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Sync category with URL query param if present
  useEffect(() => {
    const cat = searchParams.get('cat') as GalleryCategory;
    if (cat && CATEGORIES.includes(cat) && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams, activeCategory]);

  const handleCategoryChange = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    if (cat === 'ALL WORK') {
      searchParams.delete('cat');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ cat }, { replace: true });
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL WORK') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'ALL WORK': galleryItems.length };
    galleryItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="gallery-section">
      {/* Category Filter Navigation Bar */}
      <div className="gallery-filter-bar">
        <div className="filter-scroll-container">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                className={`gallery-filter-btn ${isActive ? 'gallery-filter-btn--active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
                aria-pressed={isActive}
              >
                <span className="filter-btn-text">{cat}</span>
                <span className="filter-btn-count">{count}</span>

                {isActive && (
                  <motion.div
                    className="filter-active-pill"
                    layoutId="activeFilterIndicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="gallery-count-meta">
          <SlidersHorizontal size={13} className="text-accent" />
          <span>Mostrando {filteredItems.length} fotografías</span>
        </div>
      </div>

      {/* Masonry / Editorial Dynamic Grid */}
      <motion.div layout className="gallery-editorial-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const aspectClass = `aspect-${item.aspectRatio}`;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`gallery-card ${aspectClass}`}
                onClick={() => setSelectedPhotoIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPhotoIndex(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Abrir fotografía en visor: ${item.title}`}
              >
                <div className="gallery-card-inner protected-media">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="gallery-card-img"
                    loading="lazy"
                  />

                  {/* Hover Information Layer */}
                  <div className="gallery-card-hover-layer">
                    <div className="hover-top-row">
                      <span className="hover-cat-badge">{item.category}</span>
                      <span className="hover-year">{item.year}</span>
                    </div>

                    <div className="hover-center-action">
                      <div className="hover-zoom-circle">
                        <Maximize2 size={20} />
                      </div>
                    </div>

                    <div className="hover-bottom-meta">
                      <h3 className="hover-title">{item.title}</h3>
                      <div className="hover-sub-specs">
                        <div className="spec-cam">
                          <Camera size={12} className="text-accent" />
                          <span>{item.camera.split(' ')[0]} {item.lens.split(' ')[0]}</span>
                        </div>
                        <div className="spec-loc">
                          <MapPin size={12} className="text-muted" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Integrated Advanced Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />
    </div>
  );
};
