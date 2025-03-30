'use client';
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !particlesContainerRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size (small)
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      return particle;
    };

    const resetParticle = (particle: HTMLElement) => {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      
      return { x: posX, y: posY };
    };

    const animateParticle = (particle: HTMLElement) => {
      // Initial position
      const pos = resetParticle(particle);
      
      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      // Animate with CSS transitions
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    };

    // Create initial particles
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particlesContainerRef.current.appendChild(particle);
      animateParticle(particle);
    }

    // Mouse interaction handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !particlesContainerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1
      };

      // Create mouse particle
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      
      const particle = document.createElement('div');
      particle.className = 'particle mouse-particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';
      
      particlesContainerRef.current.appendChild(particle);
      
      // Animate outward
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      // Apply parallax effect to orbs
      const orbs = containerRef.current.getElementsByClassName('orb');
      Array.from(orbs).forEach((orb, index) => {
        const strength = (index + 1) * 20;
        (orb as HTMLElement).style.transform = `translate(${mousePosition.current.x * strength}px, ${mousePosition.current.y * strength}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-50 noise-texture"></div>
      
      {/* Animated gradient orbs */}
      <div className="orb orb-primary"></div>
      <div className="orb orb-secondary"></div>
      <div className="orb orb-tertiary"></div>
      
      {/* Interactive particles container */}
      <div ref={particlesContainerRef} className="particles-container"></div>
    </div>
  );
};

export default AnimatedBackground; 