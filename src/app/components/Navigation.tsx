'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50">
      <nav className="max-w-[90%] mx-auto rounded-[10px] border border-[#262626] bg-background backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-15">
            {/* Logo */}
            <Link href="/" className="text-2xl font-koulen text-primary">
            <Image 
              src="/images/logo.svg"
              alt="Waleed Logo" 
              width={250} 
              height={100}
              priority
            />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-medium hover:text-[#01bf69] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Hire Me Button */}
              <Link
                href="#contact"
                className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              >
                <span>Hire Me</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 7l10 10m0-10v10h-10" 
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="block">
                  <Link
                    href={item.href}
                    className="block py-2 text-white font-medium hover:text-[#01bf69] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              {/* Mobile Hire Me Button */}
              <div className="block">
                <Link
                  href="#contact"
                  className="block bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Hire Me</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 7l10 10m0-10v10h-10" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation; 