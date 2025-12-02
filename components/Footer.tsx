import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1120] border-t border-primary/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-50" />
                 <span className="font-serif font-black text-2xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 relative z-10 drop-shadow-sm">
                  V
                </span>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white">
                Laptop<span className="text-primary">Gurus</span>
              </span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed max-w-xs mb-6">
              35+ years of trusted Mac and Windows laptop service in Chennai. We bring precision, honesty, and speed to every repair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-textMuted text-sm">23 Pari Nagar Gandhi Street,<br />Chennai. TN 600 083</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <a href="tel:+919445234369" className="text-textMuted text-sm hover:text-white transition-colors">9445 234 369</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <a href="mailto:laptopgurus@zohomail.in" className="text-textMuted text-sm hover:text-white transition-colors">laptopgurus@zohomail.in</a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-8">
             <div>
                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                      <ScrollLink 
                        to={item.toLowerCase()} 
                        smooth={true} 
                        duration={500} 
                        className="text-textMuted text-sm hover:text-primary cursor-pointer transition-colors"
                      >
                        {item}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold mb-6">Working Hours</h4>
                <ul className="space-y-2 text-sm text-textMuted">
                  <li className="flex justify-between w-32"><span>Mon - Sat:</span> <span className="text-white">10 AM - 8 PM</span></li>
                  <li className="flex justify-between w-32"><span>Sunday:</span> <span className="text-red-400">Closed</span></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-textMuted">
          <p>&copy; {new Date().getFullYear()} Laptop Gurus. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Crafted with AI & human expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;