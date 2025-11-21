import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Base Image (After - Clean) */}
      <img
        src={afterImage}
        alt={`Clean ${alt}`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Overlay Image (Before - Dirty) - Clipped */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* We apply a filter to the 'before' image to make it look dirtier for the demo if the source image is the same,
            but ideally we pass distinct images. For this demo, we assume distinct images or apply a filter if they are placeholders.
            Since we are using picsum, we'll actually use a CSS filter on the "Before" layer to simulate grime on a generic image if needed,
            but here we assume the passed props are distinct.
         */}
        <img
          src={beforeImage}
          alt={`Dirty ${alt}`}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
        {/* Dark overlay for "Before" label contrast */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-2 py-1 text-xs font-bold rounded uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* "After" Label */}
      <div className="absolute top-4 right-4 bg-accent-500 text-white px-2 py-1 text-xs font-bold rounded uppercase tracking-wider">
        After
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
