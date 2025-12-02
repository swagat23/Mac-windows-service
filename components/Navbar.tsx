import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: NavLink[] = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <ScrollLink to="hero" smooth={true} duration={500} className="relative flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-50" />
                <span className="font-serif font-black text-2xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 relative z-10 drop-shadow-sm">
                  V
                </span>
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">
                Laptop<span className="text-primary">Gurus</span>
              </span>
              
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-textMain text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/10 shadow-xl whitespace-nowrap z-50 transform translate-y-[-10px] group-hover:translate-y-0">
                Laptop Gurus
                {/* Tooltip Arrow */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-l border-t border-white/10 transform rotate-45"></div>
              </div>
            </ScrollLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-textMuted hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button variant="primary" className="py-2 px-4 text-sm">Book a Service</Button>
              </ScrollLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-textMuted hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out">
          <div className="px-4 pt-4 pb-3 space-y-4 sm:px-3 flex flex-col items-center justify-start h-full mt-10">
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-textMain hover:text-primary block px-3 py-4 rounded-md text-xl font-medium"
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-4">
              <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">Book a Service</Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;