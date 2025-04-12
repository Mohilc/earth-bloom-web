
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Product from '@/components/Product';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import StickyBuy from '@/components/StickyBuy';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Features />
      <Testimonials />
      <Footer />
      <StickyBuy />
    </div>
  );
};

export default Index;
