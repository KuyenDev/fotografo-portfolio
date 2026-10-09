import React from 'react';
import { Hero } from '../components/home/Hero';
import { ArtisticIntro } from '../components/home/ArtisticIntro';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { SpecialtiesGrid } from '../components/home/SpecialtiesGrid';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { HomeCTA } from '../components/home/HomeCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <ArtisticIntro />
      <FeaturedProjects />
      <SpecialtiesGrid />
      <ManifestoSection />
      <HomeCTA />
    </div>
  );
};
