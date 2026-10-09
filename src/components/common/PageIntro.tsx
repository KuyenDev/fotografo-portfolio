import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/site';
import './PageIntro.css';

export const PageIntro: React.FC = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user has already seen intro this session or requested reduced motion
    const hasSeen = sessionStorage.getItem('noir_intro_seen');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasSeen && !prefersReduced) {
      setShouldShow(true);
      sessionStorage.setItem('noir_intro_seen', 'true');

      const timer = setTimeout(() => {
        setIsFinished(true);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, []);

  if (!shouldShow || isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="page-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="page-intro-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="page-intro-brand"
            >
              <span className="page-intro-title">{siteConfig.brand.name}</span>
              <span className="page-intro-sub">{siteConfig.brand.sub}</span>
            </motion.div>

            <div className="page-intro-line-wrap">
              <motion.div
                className="page-intro-line"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              className="page-intro-demo-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              SHOWCASE DESIGN · KUYÉNDEV
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
