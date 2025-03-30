'use client';
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import AnimatedBackground from './AnimatedBackground';

// Dynamically import the 3D model component to prevent SSR issues
const Model3D = dynamic(() => import('./Model3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-[300px] flex items-center justify-center text-primary text-xl">Loading 3D Model...</div>
});

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Senior Software Engineer', 'Senior Frontend Developer', 'Computer Enthusiast'];
  
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Full text has been typed, wait and then start fading
        setTimeout(() => {
          setIsDeleting(true);
        }, 700);
      } else if (isDeleting && text === '') {
        // Text has been deleted, move to next phrase
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % phrases.length);
      } else if (isDeleting) {
        // Deleting text - actually just reset completely
        setText('');
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % phrases.length);
      } else {
        // Typing text
        setText(currentPhrase.substring(0, text.length + 1));
      }
    }, isDeleting ? 1000 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, phrases]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Premium Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center py-20 md:py-40">
          <div className="animate-fade-in w-full max-w-[800px]">
            <div className="w-fit">
              <p className="text-[20px] md:text-[60px] font-poppins font-extrabold">
                Hi, I'm <span className="text-primary mx-2">Waleed</span>
                <span className="animate-wave text-yellow-400 text-[30px] md:text-[50px]">👋</span>
              </p>
              
              <div className="mt-2 md:mt-4 text-[18px] md:text-[32px] font-medium animate-fade-in-delay font-poppins">
                <span className="text-white/80 mr-2">I'm a</span>
                <span className={`text-primary ${isDeleting ? 'opacity-0' : 'opacity-100'}`} style={{ transition: 'opacity 1s' }}>
                  {text}
                </span>
                <span className={`w-[2px] h-[1.2em] bg-primary inline-block ml-1 animate-pulse ${isDeleting ? 'opacity-0' : 'opacity-100'}`}></span>
              </div>
              
              <p className="mt-4 text-[20px] md:text-[32px] font-semibold font-poppins animate-fade-in-delay-2">
                Turning ideas into scalable digital experiences..
              </p>
            </div>
          </div>

          {/* 3D Model */}
          <div className="w-full hidden md:block">
            <ErrorBoundary fallback={
              <div className="text-primary text-xl">
                Failed to load 3D model. Please refresh the page.
              </div>
            }>
              <Model3D />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Error Boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error) {
    console.error("Error in component:", error);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    
    return this.props.children;
  }
}

export default Hero; 