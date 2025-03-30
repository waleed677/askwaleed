'use client';
import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 bg-background">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-[20px] font-poppins font-medium text-white/80">INTRODUCTION</h2>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-[60px] font-koulen font-bold text-primary">About Me</h2>
      </div>
      
      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/3 flex justify-center opacity-0 animate-slide-in-left">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-full" 
              style={{ 
                boxShadow: '0 0 22.5px 7.5px var(--primary)',
                transform: 'scale(1)'
              }}
            ></div>
            <div className="relative rounded-full overflow-hidden h-[250px] w-[250px]">
              <Image
                src="/images/me.jpg"
                alt="Waleed"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Text */}
        <div className="w-full md:w-2/3 opacity-0 animate-slide-in-right">
          <div className="space-y-8 font-poppins text-lg">
            <div className="flex items-start gap-4">
              <span className="text-2xl">👨‍💻</span>
              <p>
                I&apos;m a Senior Software Engineer with 7 years of experience, specializing in full-stack development and building high-performance web applications.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏦</span>
              <p>
                Currently working as a Senior Frontend Developer at UOB Bank, I design and develop scalable solutions that enhance user experiences and streamline enterprise operations.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🛠</span>
              <p>
                From crafting intuitive UI/UX with React and Vue to building robust backend systems with Node.js and databases, I bring a full-stack approach to software development.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🚀</span>
              <p>
                Passionate about system architecture, cloud technologies, and performance optimization, I thrive on solving complex challenges and delivering impactful solutions.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <p>
                Always learning, always innovating—because great software is built by those who embrace the full technology stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 