'use client';

import { useState, useEffect } from 'react';

const screenshots = [
  { src: '/screenshots/IMG_0331.PNG', alt: 'Hjemskjerm' },
  { src: '/screenshots/IMG_0332.PNG', alt: 'Kartvisning' },
  { src: '/screenshots/IMG_0333.PNG', alt: 'Listevisning' },
  { src: '/screenshots/IMG_0334.PNG', alt: 'Informasjon' },
  { src: '/screenshots/IMG_0335.PNG', alt: 'Rieteller' },
];

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[280px]">
      {/* iPhone frame */}
      <div className="rounded-[3rem] border-[6px] border-gray-900 bg-gray-900 p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

        {/* Screen area */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-gray-900">
          {screenshots.map((shot, i) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? 'bg-rosa-500' : 'bg-gray-300'
            }`}
            aria-label={`Skjermbilde ${i + 1}`}
          />
        ))}
      </div>

      {/* Side button (power) */}
      <div className="absolute -right-[8px] top-28 h-12 w-[3px] rounded-r-sm bg-gray-800" />
      {/* Side buttons (volume) */}
      <div className="absolute -left-[8px] top-24 h-8 w-[3px] rounded-l-sm bg-gray-800" />
      <div className="absolute -left-[8px] top-36 h-8 w-[3px] rounded-l-sm bg-gray-800" />
    </div>
  );
}
