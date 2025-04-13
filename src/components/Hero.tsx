
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, TreeDeciduous, Sprout } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-leaf-pattern overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-green-dark slide-up">
              Redefining Sustainable Living
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl slide-up-delay-1">
              Eco-friendly essentials for a greener tomorrow. Join our movement to create a sustainable future for generations to come.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 slide-up-delay-2">
              <Button 
                className="bg-eco-green hover:bg-eco-green-dark text-white px-8 py-6 text-lg rounded-full flex items-center gap-2 shadow-lg"
              >
                Pre-order Now
                <ArrowRight size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-eco-green text-eco-green hover:bg-eco-green/10 px-8 py-6 text-lg rounded-full"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 slide-up-delay-3">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-eco-green">100%</span>
                <span className="text-sm text-muted-foreground">Eco-friendly</span>
              </div>
              
              <div className="h-12 w-px bg-border"></div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-eco-green">5,000+</span>
                <span className="text-sm text-muted-foreground">Trees Planted</span>
              </div>
              
              <div className="h-12 w-px bg-border"></div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-eco-green">Zero</span>
                <span className="text-sm text-muted-foreground">Carbon Footprint</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Image with animated leaves */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Sustainable product" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-10 -left-10 animate-leaf-sway">
              <Leaf className="h-20 w-20 text-eco-green/30" />
            </div>
            
            <div className="absolute -bottom-5 right-10 animate-leaf-sway animation-delay-1000">
              <Sprout className="h-16 w-16 text-eco-green/30" />
            </div>
            
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 animate-leaf-sway animation-delay-500">
              <TreeDeciduous className="h-24 w-24 text-eco-green/20" />
            </div>
            
            {/* Circular background accents */}
            <div className="absolute -top-8 right-32 w-24 h-24 rounded-full bg-eco-beige opacity-40"></div>
            <div className="absolute bottom-16 -left-8 w-16 h-16 rounded-full bg-eco-sky opacity-20"></div>
          </div>
          
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-eco-sky opacity-10 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-eco-green opacity-10 animate-pulse animation-delay-700"></div>
    </section>
  );
};

export default Hero;
