'use client';
import React from 'react';

const SimpleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/vimeo/703646277/152713.mp4?width=1280&hash=de2ebe1e6e14cef0ea3b9a1c65e21c2c1e5d1a87" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(53, 53, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(53, 53, 53, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 1
      }}></div>
    </div>
  );
};

export default SimpleBackground; 