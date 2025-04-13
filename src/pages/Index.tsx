
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Product from '@/components/Product';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import StickyBuy from '@/components/StickyBuy';
import ImageGallery from '@/components/ImageGallery';

const sustainabilityImages = [
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Sustainable nature conservation",
    caption: "Our conservation partners work to protect natural habitats"
  },
  {
    url: "https://images.unsplash.com/photo-1483197863022-daeac89c5eae?auto=format&fit=crop&w=1200&q=80",
    alt: "Sustainable energy",
    caption: "Renewable energy powers all of our production facilities"
  },
  {
    url: "https://images.unsplash.com/photo-1519355615733-18220b8b8eff?auto=format&fit=crop&w=1200&q=80",
    alt: "Zero waste initiative",
    caption: "Our zero-waste packaging reduces environmental impact"
  },
  {
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    alt: "Eco-friendly materials",
    caption: "All materials sourced from sustainable, renewable resources"
  },
  {
    url: "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?auto=format&fit=crop&w=1200&q=80",
    alt: "Community impact",
    caption: "Working with local communities for sustainable economic growth"
  },
  {
    url: "https://images.unsplash.com/photo-1564419429742-c6d342cebf01?auto=format&fit=crop&w=1200&q=80",
    alt: "Plant a tree program",
    caption: "One purchase = One tree planted in deforested areas"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Product />
      
      {/* Image Gallery Section */}
      <section className="section-padding bg-eco-beige/50">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
              Sustainability in Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Environmental Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Through strategic partnerships and sustainable practices, we're creating meaningful change for our planet.
            </p>
          </div>
          
          <ImageGallery 
            images={sustainabilityImages} 
            columns={3} 
            aspectRatio={3/2} 
            className="mt-8"
          />
        </div>
      </section>
      
      <Features />
      <Testimonials />
      <Footer />
      <StickyBuy />
    </div>
  );
};

export default Index;
