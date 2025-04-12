
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Wind, Droplets, Package, ShieldCheck } from 'lucide-react';

const featureItems = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Eco-Friendly Materials",
    description: "Made from 100% biodegradable plant-based materials."
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Zero Waste Packaging",
    description: "Plastic-free packaging that composts within 90 days."
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Carbon Neutral",
    description: "Every purchase offsets carbon through verified projects."
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Water Conservation",
    description: "Production uses 70% less water than conventional methods."
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: "Compact Design",
    description: "Thoughtfully designed to reduce shipping emissions."
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Certified Sustainable",
    description: "Verified by leading environmental certification bodies."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-eco-green/5">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
            Features & Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose EcoEssentials™?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our products aren't just better for the planet—they're designed to enhance your everyday life with thoughtful features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-eco-green/10 text-eco-green flex items-center justify-center mb-5 group-hover:bg-eco-green group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-eco-green text-white rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Join Our Sustainability Movement
              </h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for exclusive sustainable living tips, early access to new products, and special offers.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-white text-eco-green font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-white/60 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="absolute inset-8 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M15 3C13.1773 3 11.3535 3.34398 9.66585 4.00866C8.11868 4.62178 6.73465 5.51 5.57552 6.57552C1.74972 10.4013 1.19257 16.0499 4.24153 20.4548C4.43722 20.7386 4.88561 20.8153 5.16937 20.6196C5.45313 20.4239 5.52977 19.9755 5.33408 19.6918C2.67545 15.8372 3.14435 10.882 6.52721 7.49919C7.53376 6.49264 8.74998 5.72871 10.1075 5.1912C11.5952 4.60851 13.2078 4.32007 14.8149 4.35282C16.4221 4.38556 17.9982 4.73767 19.4082 5.3787C20.9308 6.07631 22.224 7.09282 23.134 8.3H17C16.5858 8.3 16.25 8.63579 16.25 9.05C16.25 9.46421 16.5858 9.8 17 9.8H21.3599C21.2585 10.1909 21.1058 10.5682 20.9035 10.9218C20.7012 11.2755 20.4512 11.595 20.1609 11.8699C19.9044 12.1138 19.8941 12.5198 20.1381 12.7763C20.3821 13.0329 20.7881 13.0432 21.0446 12.7992C21.4422 12.4216 21.785 11.9887 22.0648 11.513H22.55C22.9642 11.513 23.3 11.1772 23.3 10.763C23.3 9.07808 22.8184 7.49856 21.9555 6.15022C20.8937 4.5136 19.351 3.25789 17.5221 2.42126C16.7039 2.0723 15.8545 1.82636 15 1.68797V3Z" fill="currentColor"/>
                    <path d="M3.7 15.875C4.11421 15.875 4.45 15.5392 4.45 15.125C4.45 14.7108 4.11421 14.375 3.7 14.375C3.28579 14.375 2.95 14.7108 2.95 15.125C2.95 15.5392 3.28579 15.875 3.7 15.875Z" fill="currentColor"/>
                    <path d="M7 15.875C7.41421 15.875 7.75 15.5392 7.75 15.125C7.75 14.7108 7.41421 14.375 7 14.375C6.58579 14.375 6.25 14.7108 6.25 15.125C6.25 15.5392 6.58579 15.875 7 15.875Z" fill="currentColor"/>
                    <path d="M10.3 15.875C10.7142 15.875 11.05 15.5392 11.05 15.125C11.05 14.7108 10.7142 14.375 10.3 14.375C9.88579 14.375 9.55 14.7108 9.55 15.125C9.55 15.5392 9.88579 15.875 10.3 15.875Z" fill="currentColor"/>
                    <path d="M3.7 12.575C4.11421 12.575 4.45 12.2392 4.45 11.825C4.45 11.4108 4.11421 11.075 3.7 11.075C3.28579 11.075 2.95 11.4108 2.95 11.825C2.95 12.2392 3.28579 12.575 3.7 12.575Z" fill="currentColor"/>
                    <path d="M7 12.575C7.41421 12.575 7.75 12.2392 7.75 11.825C7.75 11.4108 7.41421 11.075 7 11.075C6.58579 11.075 6.25 11.4108 6.25 11.825C6.25 12.2392 6.58579 12.575 7 12.575Z" fill="currentColor"/>
                    <path d="M7 9.275C7.41421 9.275 7.75 8.93921 7.75 8.525C7.75 8.11079 7.41421 7.775 7 7.775C6.58579 7.775 6.25 8.11079 6.25 8.525C6.25 8.93921 6.58579 9.275 7 9.275Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
