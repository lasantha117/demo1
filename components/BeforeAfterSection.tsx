import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section id="before-after" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">Before & After</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real results from our recent jobs — slide to compare the dirty vs cleaned surfaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Driveway Restoration</h3>
            <p className="text-sm text-gray-600 mb-4">Removing deep stains and restoring concrete to like-new condition.</p>
            <BeforeAfterSlider
              beforeImage={`${import.meta.env.BASE_URL}images/Pressure-Washing.webp`}
              afterImage={`${import.meta.env.BASE_URL}images/Driveway-Restoration.jpg`}
              alt={'driveway restoration'}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vinyl Siding Soft Wash</h3>
            <p className="text-sm text-gray-600 mb-4">Gentle soft wash process that safely removes algae and grime from siding.</p>
            <BeforeAfterSlider
              beforeImage={`${import.meta.env.BASE_URL}images/soft-washing.jpg`}
              afterImage={`${import.meta.env.BASE_URL}images/Vinyl-Siding-Soft-Wash.jpg`}
              alt={'vinyl siding soft wash'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
