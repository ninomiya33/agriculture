'use client';

import Link from 'next/link';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AISupport from './components/AISupport';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeatureGrid />
      <AISupport />
      <CTA />
      <Footer />
    </div>
  );
}