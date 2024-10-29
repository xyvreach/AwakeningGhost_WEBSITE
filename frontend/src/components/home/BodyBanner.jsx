import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BodyBanner = ({
  slides,
  autoCycle = true,
  cycleInterval = 3000,
  pauseOnHover = true,
  transitionDuration = 1000, // in milliseconds
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);

  const totalSlides = slides.length;

  // Automatically cycle through images
  useEffect(() => {
    if (autoCycle && !isPaused) {
      startSlideTimer();
    }
    return () => stopSlideTimer();
  }, [currentImageIndex, isPaused, autoCycle]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      goToNextImage();
    }, cycleInterval);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  // Navigate to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative h-96 w-full bg-black overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-${transitionDuration} ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          {slide.caption && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-10">
              <h2 className="text-white text-3xl font-bold">{slide.caption}</h2>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-20"
        onClick={goToPreviousImage}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-20"
        onClick={goToNextImage}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
            } focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyBanner;
