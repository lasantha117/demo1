import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { AIQuoteAssistant } from './components/AIQuoteAssistant';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { TESTIMONIALS, Icons } from './constants';

// Simple Testimonials section integrated directly or separated if large. 
// For this file structure, I'll keep a small Testimonial block here for simplicity or create a file.
// Given the instructions "All required code should be implemented by a handful of files", I will implement the Testimonials display here within App or a small internal component.

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                   <Icons.Star key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <AIQuoteAssistant />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
