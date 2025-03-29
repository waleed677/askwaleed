import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Coming Soon | Waleed - Senior Frontend Developer',
  description: 'Personal portfolio website of Waleed, a Senior Frontend Developer. Stay tuned for an amazing showcase of projects and skills.',
};

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 z-0 bg-background"></div>
      
      {/* Content Container - Absolute Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full max-w-3xl px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in flex justify-center">
          <Image 
            src="/images/logo.svg"
            alt="Waleed Logo" 
            width={450} 
            height={100}
            priority
          />
        </div>
        
        <p 
          className="text-[80px] font-bold text-primary animate-fade-in mb-10 font-koulen leading-none"
        >
          Coming Soon
        </p>
        
        <div className="flex justify-center items-center space-x-3 animate-fade-in-delay-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}