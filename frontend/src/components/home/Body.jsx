import React from 'react';
import BodyBanner from './BodyBanner';
import InstagramGrid from './InstagramGrid';

// Import images for slides
import slideshowImage1 from '../../images/slideshow_image1.png';
import slideshowImage2 from '../../images/slideshow_image2.png';
import slideshowImage3 from '../../images/slideshow_image3.png';
import backgroundImage from '../../images/background_image5.jpg';
import backgroundImage5 from '../../images/background_image.jpg';
import SlidingImage from './SlidingImage';
import UpcomingShow from './UpcomingShow';

// Slides array with updated captions for rockstar appeal
const slides = [
  {
    image: slideshowImage1,
    alt: 'First Slide',
    caption: ' ',
  },
  {
    image: slideshowImage2,
    alt: 'Second Slide',
    caption: ' ',
  },
  {
    image: slideshowImage3,
    alt: 'Third Slide',
    caption: ' ',
  },
  {
    image: backgroundImage,
    alt: 'Fourth Slide',
    caption: ' ',
  },
];

const Body = () => {
  return (
    <div className="bg-black text-white">
      {/* Full-Height BodyBanner Component */}
      <BodyBanner
        slides={slides}
        className="h-screen"
        autoCycle={true}
        cycleInterval={5000}
        pauseOnHover={true}
        transitionDuration={1000}
      />

      {/* Content Section with Overlay */}
      <div
        className="relative"
        style={{
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Additional Content */}
          <UpcomingShow />
          <InstagramGrid />
        </div>
      </div>
    </div>
  );
};

export default Body;
