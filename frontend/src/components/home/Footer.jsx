import React from 'react';
import bandName_image from '../../images/bandName_image.jpg'; // Update the path to your image

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img
            src={bandName_image}
            alt="Awakening Ghost Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Footer Information Section */}
        <div className="text-center md:text-left">
          <p className="text-lg uppercase tracking-wider text-red-600">
            Awakening Ghost
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Awakening Ghost. All Rights Reserved.
          </p>
          <p className="mt-2">
            <a
              href="mailto:awakeningghostband1@gmail.com"
              className="hover:text-red-600 transition-colors"
            >
              Book Us: awakeningghostband1@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://www.facebook.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
