import { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Portfolio Design | Waleed',
  description: 'Design preview for Waleed portfolio website',
};

export default function DesignPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/bg.jpg)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background opacity-80"></div>
      </div>
      
      <Navigation />
      <main className="pt-32 relative z-10">
        {/* Content will be added with components */}
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-koulen text-primary">Portfolio Design</h1>
          <p className="mt-4">Content will be added here section by section.</p>
        </div>
      </main>
    </div>
  );
} 