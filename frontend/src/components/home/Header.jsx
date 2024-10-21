import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ag_logo_image from '../../images/ag_logo_image.jpg';
import bandName from '../../images/bandName_image.jpg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 shadow-md border-b-4 border-red-600">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Band Name Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img
                src={ag_logo_image}
                alt="Awakening Ghost Logo"
                className="h-12 w-auto md:h-16 transition-transform duration-300 hover:scale-110"
              />
              <img
                src={bandName}
                alt="Awakening Ghost Name"
                className="h-12 w-auto md:h-16 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-bold uppercase">
          <li>
            <Link to="/tour" className="relative hover:text-red-600 transition-colors">
              Tour
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/news" className="relative hover:text-red-600 transition-colors">
              News
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/band" className="relative hover:text-red-600 transition-colors">
              Band
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/music" className="relative hover:text-red-600 transition-colors">
              Music
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/media" className="relative hover:text-red-600 transition-colors">
              Media
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/merch-items" className="relative hover:text-red-600 transition-colors">
              Shop
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-red-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none text-white hover:text-red-600"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black text-lg space-y-4 py-6 px-4 md:hidden">
            <li><Link to="/tour" className="block hover:text-red-600">Tour</Link></li>
            <li><Link to="/news" className="block hover:text-red-600">News</Link></li>
            <li><Link to="/band" className="block hover:text-red-600">Band</Link></li>
            <li><Link to="/music" className="block hover:text-red-600">Music</Link></li>
            <li><Link to="/media" className="block hover:text-red-600">Media</Link></li>
            <li><Link to="/merch-items" className="block hover:text-red-600">Shop</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
