
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const productImages = [
  {
    url: "https://images.unsplash.com/photo-1590080876009-7f6b8cbdff3b?auto=format&fit=crop&w=1200&q=80",
    alt: "Sustainable bamboo product",
  },
  {
  url: "https://images.unsplash.com/photo-1586864387784-a0c6f8916c78?auto=format&fit=crop&w=1200&q=80",
  alt: "Eco-friendly packaging",
},
  {
    url: "https://images.unsplash.com/photo-1580910051073-3b7b3cf6ab2f?auto=format&fit=crop&w=1200&q=80",
    alt: "Product in use",
  },
];


const Product = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
            Our Product
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Introducing EcoEssentials™
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our flagship product line designed to replace everyday plastic items with beautiful, sustainable alternatives that last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column - Image carousel */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Carousel controls */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-foreground hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft size={20} />
              </button>
              
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-foreground hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Right column - Product details */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Future of Sustainable Living
            </h3>
            
            <p className="text-muted-foreground mb-6">
              EcoEssentials™ is our revolutionary product line that combines elegance with environmental responsibility. Made from biodegradable materials, each product is designed to last while leaving minimal impact on our planet.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eco-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Biodegradable</h4>
                  <p className="text-muted-foreground text-sm">100% compostable materials</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eco-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Customizable</h4>
                  <p className="text-muted-foreground text-sm">Personalize to your needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eco-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Ethically Made</h4>
                  <p className="text-muted-foreground text-sm">Fair labor practices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eco-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Long-lasting</h4>
                  <p className="text-muted-foreground text-sm">Durable for daily use</p>
                </div>
              </div>
            </div>
            
            <div className="bg-eco-green/5 p-6 rounded-xl mb-8">
              <div className="flex flex-wrap justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <div className="text-2xl font-bold text-foreground">$29.99</div>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">256 reviews</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <svg className="h-5 w-5 text-eco-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free carbon-neutral shipping</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <svg className="h-5 w-5 text-eco-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>30-day satisfaction guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-eco-green hover:bg-eco-green-dark text-white px-8 py-6 text-base rounded-full flex items-center gap-2"
              >
                Pre-order Now
                <ArrowRight size={16} />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-eco-green text-eco-green hover:bg-eco-green/10 px-8 py-6 text-base rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
