
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

const StickyBuy = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling down 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] py-3 transform transition-transform duration-300 z-40",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:block">
          <h3 className="font-medium text-foreground">EcoEssentials™</h3>
          <p className="text-sm text-muted-foreground">Starting at $29.99</p>
        </div>
        
        <Button 
          className="bg-eco-green hover:bg-eco-green-dark text-white rounded-full px-6 sm:px-8 py-6 text-sm sm:text-base flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
        >
          <ShoppingCart size={18} className="hidden sm:inline" />
          Pre-order Now
        </Button>
      </div>
    </div>
  );
};

export default StickyBuy;
