import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const Portfolio: React.FC = () => {
  // In a real app, these would be pairs of aligned images.
  // Here we use Picsum. To simulate "dirty", the slider component applies a filter to the 'before' prop if we used the same image.
  // However, to make it look better, let's try to find somewhat generic texture matches or just use the visual effect in the slider.
  // Note: BeforeAfterSlider logic in this demo will take 'beforeImage' and show it on left.
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-bold tracking-wider uppercase text-sm">Real Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">See the Difference</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Slide to reveal the transformation we bring to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Comparison 1: Driveway */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Driveway Restoration</h3>
            <BeforeAfterSlider
              beforeImage={`${import.meta.env.BASE_URL}images/Pressure-Washing.webp`}
              afterImage={`${import.meta.env.BASE_URL}images/Driveway-Restoration.jpg`}
              alt="Driveway"
            />
            <p className="text-sm text-gray-500 italic">Drag the slider to clean the surface.</p>
          </div>

          {/* Comparison 2: Siding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Vinyl Siding Soft Wash</h3>
            <BeforeAfterSlider
              beforeImage={`${import.meta.env.BASE_URL}images/soft-washing.jpg`}
              afterImage={`${import.meta.env.BASE_URL}images/Vinyl-Siding-Soft-Wash.jpg`}
              alt="Siding"
            />
             <p className="text-sm text-gray-500 italic">Safely removing algae and mold.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <a href="#contact" className="inline-block bg-primary-900 text-white font-bold py-3 px-8 rounded-md hover:bg-primary-800 transition-colors">
                 View Full Gallery
             </a>
        </div>
      </div>
    </section>
  );
};
