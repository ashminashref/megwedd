import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
        { name: 'Home', href: '/' },

    { name: 'About us', href: '/about' },
    { name: 'Work', href: '/works' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
  ];

  // The Variety Highlighter: Orange Cinematic Underline
  const CinematicHighlighter = () => (
    <div className="absolute -bottom-1 left-0 w-full h-px">
  
    
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section (No changes) */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-white text-lg">megWedd</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
                {/* Logic to show highlighter on active route */}
                {location.pathname === link.href && <CinematicHighlighter />}
              </NavLink>
            ))}
          </div>

          {/* CTA Button (No changes) */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-all">
              Book a call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 px-4 pb-6 space-y-1 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-4 text-base font-medium rounded-lg ${
                    isActive ? "text-orange-500 bg-orange-500/5" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button className="w-full mt-4 bg-white text-black px-6 py-3 rounded-full font-bold text-center">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Appbar;