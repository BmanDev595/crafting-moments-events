'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; //

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
            
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
              <Image
              src="/images/logo/logo.png"
              alt="Maru Events Logo"
              width={48}
              height={48}
              className="object-contain"
              />
          </div>
          <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Maru Events</span>
              <span className="text-xs text-gray-500">Your Wish Is Our Command</span>
          </div>
        </Link>

          {/* Desktop Navigation - UPDATED: Furniture Hire → Gallery */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-150"
            >
              Home
            </Link>

            <Link 
              href="/services" 
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-150"
            >
              Services
            </Link>

            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-150"
            >
              Gallery
            </Link>

            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-150"
            >
              FAQ
            </Link>

            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - UPDATED: Furniture Hire → Gallery */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link 
                href="/services"
                className="text-gray-700 hover:text-purple-600 font-medium py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}