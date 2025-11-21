export enum ServiceType {
  PRESSURE_WASHING = 'Pressure Washing',
  SOFT_WASHING = 'Soft Washing',
  ROOF_CLEANING = 'Roof Cleaning',
  GUTTER_CLEANING = 'Gutter Cleaning',
  COMMERCIAL = 'Commercial Services',
  DECK_PATIO = 'Deck & Patio Restoration'
}

import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface QuoteRequest {
  surfaceType: string;
  squareFootage: number;
  details?: string;
}

export interface AIQuoteResponse {
  estimatedPriceRange: string;
  estimatedTime: string;
  recommendation: string;
  disclaimer: string;
}
