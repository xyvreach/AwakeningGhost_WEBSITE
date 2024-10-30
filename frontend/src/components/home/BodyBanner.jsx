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
  const slideInterval = useRef(null);

  const totalSlides = slides.length;

  // Automatically cycle through images
  useEffect(() => {
    if (autoCycle) {
      startSlideTimer();
    }
    return () => stopSlideTimer();
  }, [currentImageIndex, autoCycle]);

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

  // Calculate the style for each slide
  const getSlideStyle = (index) => {
    let offset = index - currentImageIndex;
    if (offset < -1) {
      offset += totalSlides;
    } else if (offset > 1) {
      offset -= totalSlides;
    }

    if (Math.abs(offset) > 1) {
      return {
        display: 'none',
      };
    }

    const transformValue = `translateX(${offset * 100}%)`;
    const opacityValue = offset === 0 ? 1 : 0;

    return {
      transform: transformValue,
      opacity: opacityValue,
      transition: `transform ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`,
    };
  };

  return (
    <div className="relative w-full h-[100vh] sm:h-[100vh] bg-black overflow-hidden group">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div key={index} className="absolute inset-0" style={getSlideStyle(index)}>
          <img
            src={slide.image}
            alt={slide.alt || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Black Shadow Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
          {/* Overlay Text */}
          {slide.caption && (
            <div className="absolute inset-0 flex flex-col justify-end items-start p-8 z-10">
              <h2 className="text-white text-4xl font-semibold">{slide.caption}</h2>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none z-20 hover:text-gray-300"
        onClick={goToPreviousImage}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none z-20 hover:text-gray-300"
        onClick={goToNextImage}
        aria-label="Next Slide"
      >
        <FaArrowRight size={30} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-300'
            } focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyBanner;
