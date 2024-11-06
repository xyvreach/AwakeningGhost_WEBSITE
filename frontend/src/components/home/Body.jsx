import React from 'react';
import BodyBanner from './BodyBanner';
import InstagramGrid from './InstagramGrid';

// Import images for slides
import slideshowImage1 from '../../images/slideshow_image1.png';
import slideshowImage2 from '../../images/slideshow_image2.png';
import slideshowImage3 from '../../images/slideshow_image3.png';
import slideshowImage4 from '../../images/AG_Homies.jpg';
import slideshowImage5 from '../../images/AG_Homies2.jpg';
import backgroundImage from '../../images/background_image5.jpg';
import UpcomingShow from './UpcomingShow';
import Booking from './Booking';

// Slides array with updated captions for rockstar appeal
const slides = [
  {
    image: slideshowImage4,
    alt: 'First Slide',
    caption: 'Booking Information',
  },
  {
    image: slideshowImage5,
    alt: 'Second Slide',
    caption: 'Booking Information',
  },
];

// Example data for upcoming shows
const shows = [
  {
    date: 'December 13, 2024',
    location: 'Los Angeles, California, United States',
    venue: 'YouTube Theater',
    additionalInfo: 'AWMH Helping Hands Concert & Auction',
    actions: ['More Info'],
    imageUrl: '/images/los-angeles.jpg', // Example image URL
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
          <Booking />

          {/* Upcoming Shows Section */}
          <UpcomingShow shows={shows} />



          {/* Instagram Grid Component */}
          <InstagramGrid />


        </div>
      </div>
    </div>
  );
};

export default Body;
