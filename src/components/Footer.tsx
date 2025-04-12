
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-eco-green-dark text-white pt-16 pb-8">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-eco-green-dark">
                  <path d="M12 2c.9 0 1.8.4 2.5 1l6.7 6.8a8.2 8.2 0 0 1 0 11.3 8.1 8.1 0 0 1-7.5 2.1l4.8-4.8v-3a4 4 0 1 0-8 0v3l4.8 4.8a8.1 8.1 0 0 1-7.5-2.1 8.2 8.2 0 0 1 0-11.3L12.6 3c.7-.7 1.5-1 2.4-1z"/>
                </svg>
              </div>
              <span className="font-poppins font-semibold text-lg">Sustainable Futures</span>
            </div>
            
            <p className="text-white/80 text-sm">
              Creating eco-friendly essentials for a greener tomorrow. Join our mission to redefine sustainable living.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#product" className="text-white/70 hover:text-white transition-colors text-sm">Our Products</a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Sustainability Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Return Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Sustainability Report</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-white/70 mt-0.5" />
                <a href="mailto:hello@sustainablefutures.com" className="text-white/70 hover:text-white transition-colors text-sm">hello@sustainablefutures.com</a>
              </li>
              <li className="text-white/70 text-sm">
                123 Eco Street<br />
                Green City, Earth 54321
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sustainable Futures. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="flex items-center text-white/60 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Made with sustainable web practices
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
