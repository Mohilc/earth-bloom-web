
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-eco-green flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
              <path d="M12 2c.9 0 1.8.4 2.5 1l6.7 6.8a8.2 8.2 0 0 1 0 11.3 8.1 8.1 0 0 1-7.5 2.1l4.8-4.8v-3a4 4 0 1 0-8 0v3l4.8 4.8a8.1 8.1 0 0 1-7.5-2.1 8.2 8.2 0 0 1 0-11.3L12.6 3c.7-.7 1.5-1 2.4-1z"/>
            </svg>
          </div>
          <span className="font-poppins font-semibold text-lg text-eco-green">Sustainable Futures</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-eco-green transition-colors">About</a>
          <a href="#product" className="text-foreground hover:text-eco-green transition-colors">Product</a>
          <a href="#features" className="text-foreground hover:text-eco-green transition-colors">Features</a>
          <a href="#testimonials" className="text-foreground hover:text-eco-green transition-colors">Testimonials</a>
          <Button className="bg-eco-green hover:bg-eco-green-dark text-white">Pre-order Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#about" 
            className="text-lg font-medium text-foreground hover:text-eco-green transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#product" 
            className="text-lg font-medium text-foreground hover:text-eco-green transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </a>
          <a 
            href="#features" 
            className="text-lg font-medium text-foreground hover:text-eco-green transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium text-foreground hover:text-eco-green transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="bg-eco-green hover:bg-eco-green-dark text-white w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pre-order Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
