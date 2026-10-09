import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './VisualProtectionToast.css';

export const VisualProtectionToast: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('.protected-media') ||
          target.closest('.gallery-card') ||
          target.closest('.lightbox-image-wrapper') ||
          target.closest('.project-gallery-item'))
      ) {
        e.preventDefault();
        setToastMessage('Fotografía protegida · Muestra editorial KuyénDev (Demo)');
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'IMG' ||
          target.closest('.protected-media') ||
          target.closest('.gallery-card'))
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          className="visual-protection-toast"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          role="status"
          aria-live="polite"
        >
          <Shield size={14} className="text-accent" />
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
