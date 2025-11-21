import React from 'react';

export const ContactCard: React.FC = () => {
  const address = '123 Clean Street, Suite 100';
  const city = 'Sunshine City, FL 33000';
  const phone = '(555) 123-4567';
  const email = 'info@hydrocleanpro.com';
  const mapsQuery = encodeURIComponent(`${address}, ${city}`);

  return (
    <aside className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:left-auto md:translate-x-0 md:right-8 md:bottom-12 z-20 w-[92%] max-w-sm md:w-80">
      <div className="backdrop-blur-md bg-gradient-to-br from-white/6 to-white/3 border border-white/10 rounded-2xl p-4 shadow-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold">HydroClean Pro</h4>
            <p className="text-xs text-gray-200">Fast replies • Licensed & Insured</p>
          </div>

          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.09 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.33 1.3.63 1.9a1 1 0 0 1-.24 1.09L7.7 7.7a16 16 0 0 0 6 6l1.96-1.96a1 1 0 0 1 1.09-.24c.6.3 1.24.51 1.9.63a1 1 0 0 1 .75 1V21z"/></svg>
            </div>
            <span className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-accent-400 rounded-full animate-ping-slow opacity-80"></span>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-sm">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="block text-gray-100 hover:text-white transition-colors"
          >
            <span className="font-medium">{address}</span>
            <br />
            <span className="text-xs text-gray-300">{city}</span>
          </a>

          <a href="tel:+15551234567" className="block text-accent-200 font-medium hover:text-accent-100">
            {phone}
          </a>

          <a href={`mailto:${email}`} className="block text-gray-100 text-sm hover:underline">
            {email}
          </a>
        </div>

        <div className="mt-3 flex gap-2">
          <a
            href="tel:+15551234567"
            className="flex-1 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold py-2 rounded-lg text-center shadow"
          >
            Call Now
          </a>
          <a href="#contact" className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-2 rounded-lg text-center">
            Request Quote
          </a>
        </div>
      </div>
    </aside>
  );
};

// Note: `animate-ping-slow` is a small nicety. If your Tailwind config doesn't define it,
// you can either add `animate-ping` or define a custom slower ping animation in your config.
