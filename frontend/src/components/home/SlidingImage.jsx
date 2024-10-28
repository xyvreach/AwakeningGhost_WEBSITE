import React, { useEffect, useRef, useState } from 'react';

const SlidingImage = ({ src, alt, delay, width = '100%', height = 'auto', direction = 'right', endPosition = 'center' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.02 } // Trigger when 2% of the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-full'; // Slides in from the left
      case 'right':
        return '-translate-x-full'; // Slides in from the right
      case 'up':
        return 'translate-y-full'; // Slides in from the bottom
      case 'down':
        return '-translate-y-full'; // Slides in from the top
      default:
        return '-translate-x-full'; // Default to sliding in from the right
    }
  };

  const getEndPositionClass = () => {
    switch (endPosition) {
      case 'left':
        return 'flex justify-start'; // Align to the left
      case 'right':
        return 'flex justify-end'; // Align to the right
      case 'center':
        return 'flex justify-center'; // Center the image
      default:
        return 'flex justify-start'; // Default to center
    }
  };

  return (
    <div
      ref={imageRef}
      className={`transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-x-0 translate-y-0' : getInitialTransform()
      } ${getEndPositionClass()}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <img src={src} alt={alt} style={{ width, height }} />
    </div>
  );
};

export default SlidingImage;
