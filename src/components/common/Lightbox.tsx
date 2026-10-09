import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Info } from 'lucide-react';
import type { GalleryItem } from '../../types';
import './Lightbox.css';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [showMetadata, setShowMetadata] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Save active element to restore focus upon close
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Focus close button
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || !currentItem) return null;

  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(items.length).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Visualizador de fotografía: ${currentItem.title}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            <span className="counter-current">{formattedCurrent}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{formattedTotal}</span>
            <span className="lightbox-category-tag">{currentItem.category}</span>
          </div>

          <div className="lightbox-actions">
            <button
              type="button"
              className={`lightbox-meta-btn ${showMetadata ? 'active' : ''}`}
              onClick={() => setShowMetadata(!showMetadata)}
              aria-label="Ver ficha técnica"
              title="Ficha técnica de la fotografía"
            >
              <Info size={18} />
              <span className="meta-btn-text">EXIF</span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Cerrar visor (Escape)"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Central Display Area */}
        <div className="lightbox-stage">
          {/* Previous Button */}
          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev"
            onClick={handlePrev}
            aria-label="Fotografía anterior (Flecha izquierda)"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image Stage */}
          <div className="lightbox-image-container">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lightbox-image-wrapper protected-media"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={currentItem.imageUrl}
                alt={currentItem.alt}
                className="lightbox-main-image"
                draggable={false}
              />

              {/* Title & Caption Bar */}
              <div className="lightbox-caption-bar">
                <div className="caption-text-block">
                  <h3 className="caption-title">{currentItem.title}</h3>
                  <p className="caption-desc">{currentItem.description}</p>
                </div>
                <div className="caption-location">
                  <MapPin size={13} className="text-accent" />
                  <span>{currentItem.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="lightbox-nav-btn lightbox-next"
            onClick={handleNext}
            aria-label="Fotografía siguiente (Flecha derecha)"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* EXIF Metadata Drawer / Bar */}
        <AnimatePresence>
          {showMetadata && (
            <motion.div
              className="lightbox-exif-drawer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
            >
              <div className="exif-card">
                <div className="exif-header">
                  <Camera size={14} className="text-accent" />
                  <span className="exif-title">FICHA TÉCNICA (EJEMPLO EDITORIAL)</span>
                </div>
                <div className="exif-grid">
                  <div className="exif-item">
                    <span className="exif-label">CÁMARA</span>
                    <span className="exif-val">{currentItem.camera}</span>
                  </div>
                  <div className="exif-item">
                    <span className="exif-label">OBJETIVO</span>
                    <span className="exif-val">{currentItem.lens}</span>
                  </div>
                  <div className="exif-item">
                    <span className="exif-label">APERTURA</span>
                    <span className="exif-val">{currentItem.aperture}</span>
                  </div>
                  <div className="exif-item">
                    <span className="exif-label">VELOCIDAD</span>
                    <span className="exif-val">{currentItem.shutter}</span>
                  </div>
                  <div className="exif-item">
                    <span className="exif-label">SENSIBILIDAD</span>
                    <span className="exif-val">{currentItem.iso}</span>
                  </div>
                  <div className="exif-item">
                    <span className="exif-label">AÑO</span>
                    <span className="exif-val">{currentItem.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
