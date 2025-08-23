import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import GetQuoteModal from './GetQuoteModal';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slides = [
    {
      title: "Next-Generation Drone Technology",
      subtitle: "Advanced autonomous flight systems for professional applications",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "Explore Products"
    },
    {
      title: "Precision Engineering Meets Innovation",
      subtitle: "Cutting-edge electronics and drone technology solutions",
      image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "Learn More"
    },
    {
      title: "Transforming Industries Worldwide",
      subtitle: "Reliable drone solutions for commercial and industrial use",
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "Get Started"
    }
  ];

  useEffect(() => {
    // Preload first image immediately
    const firstImg = new Image();
    firstImg.onload = () => setImagesLoaded(true);
    firstImg.src = slides[0].image;
    
    // Preload other images after first one loads
    slides.slice(1).forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, imagesLoaded]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <section className="relative h-[35rem] overflow-hidden bg-gray-900" role="banner" aria-label="Hero carousel">
      {/* Skeleton loader while images load */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 animate-pulse">
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-end pb-16">
              <div className="max-w-3xl">
                <div className="h-16 bg-white/20 rounded mb-6 animate-pulse"></div>
                <div className="h-8 bg-white/10 rounded mb-8 w-2/3 animate-pulse"></div>
                <div className="h-12 bg-white/10 rounded w-48 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide && imagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            width="800"
            height="600"
            className="w-full h-full object-cover"
            fetchPriority={index === 0 ? "high" : "low"}
            style={{ contentVisibility: index === currentSlide ? 'visible' : 'hidden' }}
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-end pb-16">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Watch product demonstration video"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Only show when images are loaded */}
      {imagesLoaded && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Slide Indicators - Only show when images are loaded */}
      {imagesLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3" role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1} of ${slides.length}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              } focus:outline-none focus:ring-2 focus:ring-white/70`}
            />
          ))}
        </div>
      )}
    </section>
    
    <GetQuoteModal 
      isOpen={isQuoteModalOpen} 
      onClose={() => setIsQuoteModalOpen(false)} 
    />
    </>
  );
};

export default HeroSection;