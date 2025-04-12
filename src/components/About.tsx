
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-eco-beige">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Sustainable nature conservation" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decoration elements */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 w-12 h-24 bg-eco-green rounded-r-lg opacity-70"></div>
            <div className="absolute bottom-0 right-0 transform translate-y-6 translate-x-6 w-32 h-32 bg-eco-sky rounded-tl-lg opacity-20"></div>
          </div>
          
          {/* Right column - Text content */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
              Our Mission
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pioneering Sustainability for a Better Tomorrow
            </h2>
            
            <p className="text-muted-foreground mb-8">
              At Sustainable Futures, we believe that small, everyday choices can have a profound impact on our planet. Founded in 2020, we've been on a mission to revolutionize how people interact with everyday products while minimizing environmental impact.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-eco-green mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Eco-Conscious Materials</h3>
                  <p className="text-muted-foreground text-sm">Our products are made from sustainable, biodegradable materials sourced responsibly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-eco-green mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Carbon-Neutral Operations</h3>
                  <p className="text-muted-foreground text-sm">We offset 100% of our carbon emissions through verified conservation projects.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-eco-green mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">Community Impact</h3>
                  <p className="text-muted-foreground text-sm">For every product sold, we plant a tree and support ocean cleanup initiatives.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-eco-green">15k+</div>
                <div className="text-sm text-muted-foreground">Ocean Plastic Removed</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-eco-green">8,500</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              
              <div className="text-center p-4 sm:col-span-1 col-span-2 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-eco-green">100%</div>
                <div className="text-sm text-muted-foreground">Carbon Offset</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
