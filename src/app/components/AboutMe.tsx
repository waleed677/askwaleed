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
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-full" 
              style={{ 
                boxShadow: '0 0 22.5px 7.5px var(--primary)',
                transform: 'scale(1.05)'
              }}
            ></div>
            <div className="relative rounded-full overflow-hidden h-[300px] w-[300px]">
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
        <div className="w-full md:w-2/3">
          <div className="space-y-4 font-poppins text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 