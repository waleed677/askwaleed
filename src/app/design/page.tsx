import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default function DesignPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>
    </main>
  );
} 