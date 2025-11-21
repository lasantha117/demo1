import React from 'react';
import { ServiceType, ServiceItem, Testimonial } from './types';

// Simple SVG Icons
export const Icons = {
  PressureWasher: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  House: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'pressure-washing',
    title: ServiceType.PRESSURE_WASHING,
    description: "High-pressure cleaning for durable surfaces like concrete driveways, sidewalks, and stone patios. Removes tough oil stains and grime.",
    icon: <Icons.PressureWasher />,
    // Use user-provided image in public/images
    image: `${import.meta.env.BASE_URL}images/Pressure-Washing.webp`
  },
  {
    id: 'soft-washing',
    title: ServiceType.SOFT_WASHING,
    description: "Low-pressure chemical cleaning for delicate surfaces like house siding, stucco, and painted wood to prevent damage.",
    icon: <Icons.House />,
    image: `${import.meta.env.BASE_URL}images/soft-washing.jpg`
  },
  {
    id: 'roof-cleaning',
    title: ServiceType.ROOF_CLEANING,
    description: "Remove black streaks, moss, and lichen from your roof shingles, extending their lifespan and improving curb appeal.",
    icon: <Icons.Shield />,
    image: `${import.meta.env.BASE_URL}images/roof-cleaning.jpg`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    text: 'HydroClean Pro completely transformed our driveway. It looks brand new! The team was professional and on time.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Property Manager',
    text: 'We use HydroClean for all our managed properties. Reliable, insured, and the results speak for themselves.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Dao',
    role: 'Business Owner',
    text: 'Excellent service on our storefront sidewalks. Removed years of gum and grime. Highly recommended.',
    rating: 5
  }
];
