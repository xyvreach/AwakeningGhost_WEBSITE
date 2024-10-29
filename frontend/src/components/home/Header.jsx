import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import agLogoImage from '../../images/ag_logo_image2.jpg';
import bandNameImage from '../../images/bandName_transparent2.png';
import combinedLogo from '../../images/combined_awakening_ghost_logo.png'

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="relative group focus:outline-none transition-colors duration-300 text-white"
    {...props}
  >
    <span className="relative">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
    </span>
  </Link>
);

const SocialIcon = ({ href, label, IconComponent }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-primary transition-transform duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <IconComponent size={18} />
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
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
        isScrolled ? 'bg-black bg-opacity-50 shadow-lg' : 'bg-black bg-opacity-0'
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 relative flex items-center justify-between"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Left: Navigation Links */}
        <div className="flex items-center flex-1">
          <ul className="hidden lg:flex space-x-8 text-base font-semibold uppercase text-white">
            <li>
              <NavLink to="/band">Band</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/merch-items">Shop</NavLink>
            </li>
          </ul>
        </div>

        {/* Center: Logo Images */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <Link to="/" className="flex flex-col items-center">
          <img
              src={bandNameImage}
              alt="Awakening Ghost"
              className="h-8 w-auto md:h-10 transition-transform duration-300 transform hover:scale-110 mt-2"
            />
            <img
              src={agLogoImage}
              alt="Awakening Ghost Logo"
              className="h-8 w-auto md:h-10 transition-transform duration-300 transform hover:scale-110"
            />
            
          </Link>
        </div>

        {/* Right: Social Media Icons and Mobile Menu Button */}
        <div className="flex items-center flex-1 justify-end">
          {/* Social Media Icons (Desktop) */}
          <div className="hidden lg:flex space-x-4">
            <SocialIcon
              href="https://www.facebook.com/awakeningghost"
              label="Facebook"
              IconComponent={FaFacebookF}
            />
            <SocialIcon
              href="https://www.twitter.com/awakeningghost"
              label="Twitter"
              IconComponent={FaTwitter}
            />
            <SocialIcon
              href="https://www.instagram.com/awakeningghost"
              label="Instagram"
              IconComponent={FaInstagram}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-primary focus:outline-none ml-4"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white hover:text-primary focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes size={28} />
        </button>

        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl uppercase text-white">
          <NavLink to="/band" onClick={closeMenu}>
            Band
          </NavLink>
          <NavLink to="/news" onClick={closeMenu}>
            News
          </NavLink>
          <NavLink to="/merch-items" onClick={closeMenu}>
            Shop
          </NavLink>

          {/* Social Media Icons (Mobile) */}
          <div className="flex space-x-6 mt-8">
            <SocialIcon
              href="https://www.facebook.com/awakeningghost"
              label="Facebook"
              IconComponent={FaFacebookF}
            />
            <SocialIcon
              href="https://www.twitter.com/awakeningghost"
              label="Twitter"
              IconComponent={FaTwitter}
            />
            <SocialIcon
              href="https://www.instagram.com/awakeningghost"
              label="Instagram"
              IconComponent={FaInstagram}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
