
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            
            {/* Decorative floating leaves */}
            <div className="absolute -top-10 -left-10 animate-leaf-sway">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-eco-green/30">
                <path d="M15 2C13.1773 2 11.3535 2.34398 9.66585 3.00866C8.11868 3.62178 6.73465 4.51 5.57552 5.57552C1.74972 9.40132 1.19257 15.0499 4.24153 19.4548C4.43722 19.7386 4.88561 19.8153 5.16937 19.6196C5.45313 19.4239 5.52977 18.9755 5.33408 18.6918C2.67545 14.8372 3.14435 9.88205 6.52721 6.49919C7.53376 5.49264 8.74998 4.72871 10.1075 4.1912C11.5952 3.60851 13.2078 3.32007 14.8149 3.35282C16.4221 3.38556 17.9982 3.73767 19.4082 4.3787C20.9308 5.07631 22.224 6.09282 23.134 7.3H17C16.5858 7.3 16.25 7.63579 16.25 8.05C16.25 8.46421 16.5858 8.8 17 8.8H21.3599C21.2585 9.1909 21.1058 9.56823 20.9035 9.92184C20.7012 10.2755 20.4512 10.595 20.1609 10.8699C19.9044 11.1138 19.8941 11.5198 20.1381 11.7763C20.3821 12.0329 20.7881 12.0432 21.0446 11.7992C21.4422 11.4216 21.785 10.9887 22.0648 10.513H22.55C22.9642 10.513 23.3 10.1772 23.3 9.76297C23.3 8.07808 22.8184 6.49856 21.9555 5.15022C20.8937 3.5136 19.351 2.25789 17.5221 1.42126C16.7039 1.0723 15.8545 0.826355 15 0.687973V2Z" fill="currentColor"/>
                <path d="M22.8 14.35C22.8 15.7993 22.4308 17.1224 21.7664 18.2203C21.0769 19.3589 20.0902 20.2577 18.9351 20.8219C17.6406 21.4477 16.1856 21.6986 14.6304 21.5022C13.2385 21.3278 11.8442 20.7632 10.646 19.864C10.3593 19.6444 9.91572 19.6953 9.69613 19.982C9.47654 20.2687 9.52744 20.7123 9.81414 20.9319C11.1913 21.9582 12.7903 22.6112 14.3948 22.8116C16.1599 23.0325 17.858 22.745 19.3797 22.0237C20.742 21.3811 21.8989 20.3499 22.7093 19.0417C23.565 17.6571 24 16.0699 24 14.35C24 13.9358 23.6642 13.6 23.25 13.6H17.7C17.2858 13.6 16.95 13.9358 16.95 14.35C16.95 14.7642 17.2858 15.1 17.7 15.1H22.5171C22.2443 16.0853 21.7583 16.9235 21.0822 17.5995C20.3913 18.2905 19.5115 18.7734 18.5528 19.0022C17.5481 19.2431 16.4599 19.1783 15.4482 18.8093C14.4482 18.4447 13.549 17.803 12.834 16.9579C12.6267 16.7055 12.2243 16.6607 11.9719 16.868C11.7195 17.0754 11.6747 17.4778 11.882 17.7302C12.7239 18.7313 13.7857 19.5079 14.9752 19.9586C16.1922 20.4192 17.5114 20.5 18.7274 20.2132C19.8734 19.9459 20.9287 19.3771 21.7625 18.5433C22.5066 17.7992 23.0447 16.8814 23.3431 15.85H23.55C23.9642 15.85 24.3 15.5142 24.3 15.1C24.3 14.6858 23.9642 14.35 23.55 14.35H22.8Z" fill="currentColor"/>
                <path d="M11.05 15.125C11.05 15.5392 10.7142 15.875 10.3 15.875C9.88579 15.875 9.55 15.5392 9.55 15.125C9.55 14.7108 9.88579 14.375 10.3 14.375C10.7142 14.375 11.05 14.7108 11.05 15.125Z" fill="currentColor"/>
                <path d="M7.75 15.125C7.75 15.5392 7.41421 15.875 7 15.875C6.58579 15.875 6.25 15.5392 6.25 15.125C6.25 14.7108 6.58579 14.375 7 14.375C7.41421 14.375 7.75 14.7108 7.75 15.125Z" fill="currentColor"/>
                <path d="M4.45 15.125C4.45 15.5392 4.11421 15.875 3.7 15.875C3.28579 15.875 2.95 15.5392 2.95 15.125C2.95 14.7108 3.28579 14.375 3.7 14.375C4.11421 14.375 4.45 14.7108 4.45 15.125Z" fill="currentColor"/>
                <path d="M7.75 11.825C7.75 12.2392 7.41421 12.575 7 12.575C6.58579 12.575 6.25 12.2392 6.25 11.825C6.25 11.4108 6.58579 11.075 7 11.075C7.41421 11.075 7.75 11.4108 7.75 11.825Z" fill="currentColor"/>
                <path d="M4.45 11.825C4.45 12.2392 4.11421 12.575 3.7 12.575C3.28579 12.575 2.95 12.2392 2.95 11.825C2.95 11.4108 3.28579 11.075 3.7 11.075C4.11421 11.075 4.45 11.4108 4.45 11.825Z" fill="currentColor"/>
                <path d="M7.75 8.525C7.75 8.93921 7.41421 9.275 7 9.275C6.58579 9.275 6.25 8.93921 6.25 8.525C6.25 8.11079 6.58579 7.775 7 7.775C7.41421 7.775 7.75 8.11079 7.75 8.525Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-5 right-10 animate-leaf-sway animation-delay-1000">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-eco-green/30">
                <path d="M15 2C13.1773 2 11.3535 2.34398 9.66585 3.00866C8.11868 3.62178 6.73465 4.51 5.57552 5.57552C1.74972 9.40132 1.19257 15.0499 4.24153 19.4548C4.43722 19.7386 4.88561 19.8153 5.16937 19.6196C5.45313 19.4239 5.52977 18.9755 5.33408 18.6918C2.67545 14.8372 3.14435 9.88205 6.52721 6.49919C7.53376 5.49264 8.74998 4.72871 10.1075 4.1912C11.5952 3.60851 13.2078 3.32007 14.8149 3.35282C16.4221 3.38556 17.9982 3.73767 19.4082 4.3787C20.9308 5.07631 22.224 6.09282 23.134 7.3H17C16.5858 7.3 16.25 7.63579 16.25 8.05C16.25 8.46421 16.5858 8.8 17 8.8H21.3599C21.2585 9.1909 21.1058 9.56823 20.9035 9.92184C20.7012 10.2755 20.4512 10.595 20.1609 10.8699C19.9044 11.1138 19.8941 11.5198 20.1381 11.7763C20.3821 12.0329 20.7881 12.0432 21.0446 11.7992C21.4422 11.4216 21.785 10.9887 22.0648 10.513H22.55C22.9642 10.513 23.3 10.1772 23.3 9.76297C23.3 8.07808 22.8184 6.49856 21.9555 5.15022C20.8937 3.5136 19.351 2.25789 17.5221 1.42126C16.7039 1.0723 15.8545 0.826355 15 0.687973V2Z" fill="currentColor"/>
                <path d="M22.8 14.35C22.8 15.7993 22.4308 17.1224 21.7664 18.2203C21.0769 19.3589 20.0902 20.2577 18.9351 20.8219C17.6406 21.4477 16.1856 21.6986 14.6304 21.5022C13.2385 21.3278 11.8442 20.7632 10.646 19.864C10.3593 19.6444 9.91572 19.6953 9.69613 19.982C9.47654 20.2687 9.52744 20.7123 9.81414 20.9319C11.1913 21.9582 12.7903 22.6112 14.3948 22.8116C16.1599 23.0325 17.858 22.745 19.3797 22.0237C20.742 21.3811 21.8989 20.3499 22.7093 19.0417C23.565 17.6571 24 16.0699 24 14.35C24 13.9358 23.6642 13.6 23.25 13.6H17.7C17.2858 13.6 16.95 13.9358 16.95 14.35C16.95 14.7642 17.2858 15.1 17.7 15.1H22.5171C22.2443 16.0853 21.7583 16.9235 21.0822 17.5995C20.3913 18.2905 19.5115 18.7734 18.5528 19.0022C17.5481 19.2431 16.4599 19.1783 15.4482 18.8093C14.4482 18.4447 13.549 17.803 12.834 16.9579C12.6267 16.7055 12.2243 16.6607 11.9719 16.868C11.7195 17.0754 11.6747 17.4778 11.882 17.7302C12.7239 18.7313 13.7857 19.5079 14.9752 19.9586C16.1922 20.4192 17.5114 20.5 18.7274 20.2132C19.8734 19.9459 20.9287 19.3771 21.7625 18.5433C22.5066 17.7992 23.0447 16.8814 23.3431 15.85H23.55C23.9642 15.85 24.3 15.5142 24.3 15.1C24.3 14.6858 23.9642 14.35 23.55 14.35H22.8Z" fill="currentColor"/>
                <path d="M11.05 15.125C11.05 15.5392 10.7142 15.875 10.3 15.875C9.88579 15.875 9.55 15.5392 9.55 15.125C9.55 14.7108 9.88579 14.375 10.3 14.375C10.7142 14.375 11.05 14.7108 11.05 15.125Z" fill="currentColor"/>
                <path d="M7.75 15.125C7.75 15.5392 7.41421 15.875 7 15.875C6.58579 15.875 6.25 15.5392 6.25 15.125C6.25 14.7108 6.58579 14.375 7 14.375C7.41421 14.375 7.75 14.7108 7.75 15.125Z" fill="currentColor"/>
                <path d="M4.45 15.125C4.45 15.5392 4.11421 15.875 3.7 15.875C3.28579 15.875 2.95 15.5392 2.95 15.125C2.95 14.7108 3.28579 14.375 3.7 14.375C4.11421 14.375 4.45 14.7108 4.45 15.125Z" fill="currentColor"/>
                <path d="M7.75 11.825C7.75 12.2392 7.41421 12.575 7 12.575C6.58579 12.575 6.25 12.2392 6.25 11.825C6.25 11.4108 6.58579 11.075 7 11.075C7.41421 11.075 7.75 11.4108 7.75 11.825Z" fill="currentColor"/>
                <path d="M4.45 11.825C4.45 12.2392 4.11421 12.575 3.7 12.575C3.28579 12.575 2.95 12.2392 2.95 11.825C2.95 11.4108 3.28579 11.075 3.7 11.075C4.11421 11.075 4.45 11.4108 4.45 11.825Z" fill="currentColor"/>
                <path d="M7.75 8.525C7.75 8.93921 7.41421 9.275 7 9.275C6.58579 9.275 6.25 8.93921 6.25 8.525C6.25 8.11079 6.58579 7.775 7 7.775C7.41421 7.775 7.75 8.11079 7.75 8.525Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
