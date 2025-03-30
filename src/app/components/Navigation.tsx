'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="fixed top-0 md:top-6 left-0 right-0 z-50">
      <nav className={`md:max-w-[90%] mx-auto rounded-[10px] border border-[#262626] ${isMenuOpen ? 'h-screen w-full bg-[#262626]' : 'backdrop-blur-sm'} overflow-hidden`}>
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex justify-between items-center h-15">
            {/* Logo */}
            <Link href="/">
            <div className="relative w-[180px] md:w-[220px]">
              <Image 
                src="/images/logo.svg"
                alt="Waleed Logo" 
                width={220} 
                height={100}
                className="w-full h-auto"
                priority
              />
            </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-white font-medium hover:text-[#01bf69] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Hire Me Button */}
              <Link
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                style={{ backgroundColor: "#01bf69" }}
                className="text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center font-medium"
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
            <div className="md:hidden py-2 space-y-1 h-[calc(100vh-60px)] flex flex-col justify-center bg-[#262626]">
              {navItems.map((item) => (
                <div key={item.name} className="block text-center">
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block py-4 text-white text-xl font-medium hover:text-[#01bf69] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              
              {/* Mobile Hire Me Button */}
              <div className="block text-center mt-4">
                <Link
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  style={{ backgroundColor: "#01bf69" }}
                  className="text-white text-xl px-10 py-3 rounded-md transition-colors duration-300 flex items-center justify-center mx-auto"
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
      {/* Full screen overlay when menu is open on mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#262626] z-[-1] md:hidden"></div>
      )}
    </div>
  );
};

export default Navigation; 