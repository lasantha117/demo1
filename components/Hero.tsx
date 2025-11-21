import React from 'react';
import { ContactCard } from './ContactCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero.webp`}
          alt="Clean house exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          Restore Your Home's <br />
          <span className="text-accent-400">True Shine</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
          Professional pressure washing, soft washing, and exterior maintenance.
          Trusted by hundreds of homeowners for spotless results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ai-quote"
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Instant Estimate
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
          >
            Our Services
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-200 opacity-90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            100% Satisfaction Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Eco-Friendly Solutions
          </div>
        </div>
      </div>

      {/* Creative contact card (floating) */}
      <ContactCard />
    </section>
  );
};
