import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaApple,
  FaMusic,
  FaSoundcloud,
  FaTwitch,
  FaDiscord,
  FaYoutube,
} from 'react-icons/fa';
import bandName_image from '../../images/bandName_image.jpg'; // Update the path to your image
import AG_Video from './AG_Video';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col items-center space-y-10">
        <AG_Video/>

        {/* Logo Section */}
        <div>
          <img
            src={bandName_image}
            alt="Awakening Ghost Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-wrap justify-center space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/awakening.ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.tiktok.com/@awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors transform hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Subscribe to Newsletter Button */}
        <div>
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Booking Information
          </button>
        </div>

        {/* Footer Information Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Awakening Ghost. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
