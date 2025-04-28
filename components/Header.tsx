import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-deriv-darkblue">Deriv</span>
          <span className="text-primary font-medium ml-1">Partners</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/partners" className="text-gray-700 hover:text-primary transition-colors">
            Partners
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="#" className="btn bg-primary text-white hover:bg-primary-dark">
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg z-40">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/partners" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="#" 
                className="btn bg-primary text-white hover:bg-primary-dark w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 