import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import agLogoImage from '../../images/ag_logo_image2.jpg';
import agNameLogoImage from '../../images/bandName_transparent2.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black bg-opacity-45 shadow-lg' : 'bg-transparent'
      } backdrop-blur-lg backdrop-filter`}
      style={{
        backdropFilter: isScrolled ? 'blur(5px)' : 'blur(0px)',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
      }}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 relative flex items-center justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-white">
          <Link to="/band" className="hover:text-red-600 transition-colors">
            Band
          </Link>
          <Link to="/news" className="hover:text-red-600 transition-colors">
            News
          </Link>
          <Link to="/merch-items" className="hover:text-red-600 transition-colors">
            Shop
          </Link>
        </div>

        {/* Centered Logo with Fade Effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center relative">
            <img
              src={agNameLogoImage}
              alt="Awakening Ghost Logo Large"
              className={`transition-opacity duration-500 ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              } absolute`}
              style={{ transform: 'scale(3.0)', transitionProperty: 'opacity' }}
            />
            <img
              src={agLogoImage}
              alt="Awakening Ghost Logo Small"
              className={`h-14 w-auto transition-opacity duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionProperty: 'opacity' }}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <FaBars size={28} />
          </button>
        </div>

        {/* Desktop Social Media Icons (Right Aligned) */}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          <a
            href="https://www.facebook.com/awakening.ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.twitter.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.youtube.com/awakeningghost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black h-screen bg-opacity-95 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-red-600 focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes size={32} />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center justify-center w-full h-full space-y-10 text-2xl uppercase text-white px-6">
          <Link
            to="/band"
            onClick={toggleMenu}
            className="hover:text-red-600 transition-colors"
          >
            Band
          </Link>
          <Link
            to="/news"
            onClick={toggleMenu}
            className="hover:text-red-600 transition-colors"
          >
            News
          </Link>
          <Link
            to="/merch-items"
            onClick={toggleMenu}
            className="hover:text-red-600 transition-colors"
          >
            Shop
          </Link>

          {/* Social Media Icons (Mobile) */}
          <div className="flex space-x-8 mt-12">
            <a
              href="https://www.facebook.com/awakening.ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://www.instagram.com/awakeningghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.twitter.com/awakeningghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.tiktok.com/@awakeningghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-transform transform hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok size={28} />
            </a>
            <a
              href="https://www.youtube.com/awakeningghost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-transform transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
