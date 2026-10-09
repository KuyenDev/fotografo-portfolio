export type GalleryCategory =
  | 'ALL WORK'
  | 'PORTRAITS'
  | 'EDITORIAL'
  | 'FASHION'
  | 'ARCHITECTURE'
  | 'EVENTS';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  year: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square' | 'wide';
  imageUrl: string;
  alt: string;
  description: string;
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
  location: string;
}

export interface ProjectDetailItem {
  url: string;
  caption: string;
  aspect: 'horizontal' | 'vertical' | 'wide' | 'square';
  meta?: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  location: string;
  heroImage: string;
  statement: string;
  conceptQuote: string;
  approach: string;
  details: { label: string; value: string }[];
  gallery: ProjectDetailItem[];
  nextProjectSlug: string;
  nextProjectTitle: string;
}

export interface ServiceProcessStep {
  step: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  process: ServiceProcessStep[];
  fictitiousPriceRange: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
  label: string;
}
