import React from 'react';
import backgroundImage from '../../images/background_image.jpg'; // Update the path to your image
import backgroundImage2 from '../../images/background_image2.png'; // Update the path to your image
import backgroundImage3 from '../../images/background_image3.png'; // Update the path to your image
import slideshow_image1 from '../../images/slideshow_image1.png';
import slideshow_image2 from '../../images/slideshow_image2.png';
import slideshow_image3 from '../../images/slideshow_image3.png';
import BodyBanner from './BodyBanner'; // Import the new BodyBanner component
import SlidingImage from './SlidingImage';
import InstagramGrid from './InstagramGrid';

const Body = () => {
  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage: `url(${backgroundImage3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Replace the static content with BodyBanner 
      <BodyBanner />
      */}
      <InstagramGrid />
      
      
      
    </div>
  );
}

export default Body;
