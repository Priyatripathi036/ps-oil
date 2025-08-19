import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/oil1.jpg',
    '/assets/oil2.jpg',
    '/assets/IMG.jpg',
    '/assets/oil1.jpg',
    '/assets/oil2.jpg',
    '/assets/IMG_5095.jpg',
    '/assets/IMG_5096.jpg',
    '/assets/IMG_5097.jpg',
    '/assets/IMG_5098.jpg',
    '/assets/IMG_5099.jpg',
    '/assets/IMG_5100.jpg',
    '/assets/IMG_5101.jpg',
    '/assets/IMG_5102.jpg',
    '/assets/IMG_5103.jpg',
    '/assets/IMG_5104.jpg',
    '/assets/IMG_5107.jpg',
    '/assets/IMG_5108.jpg',
    '/assets/IMG_5109.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slower, professional pace
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`PS Oil Refinery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-gray-900/60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Refining Excellence,<br /> Delivering Trust
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light mb-8">
          Premium edible oils powered by world-class refineries and 25+ years of proven expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#about">
  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold px-6 py-3 rounded-lg">
    Explore Our Refineries
    <ArrowRight className="ml-2 w-4 h-4" />
  </Button>
</a>

<a href="#contact">
  <Button size="lg" variant="outline" className="border border-yellow-500/70 text-yellow-400 hover:bg-yellow-500 hover:text-white font-semibold px-6 py-3 rounded-lg">
    Download Company Profile
  </Button>
</a>

        </div>
      </div>
    </section>
  );
}
