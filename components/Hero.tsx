import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import Button from './Button';
import { ShieldCheck, Cpu, Clock, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Chennai’s Trusted Laptop Service Experts
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Precision Laptop Care Backed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">35+ Years</span> of Expertise.
            </h1>
            <p className="text-lg text-textMuted mb-8 leading-relaxed max-w-xl">
              Laptop Gurus keeps your Mac and Windows laptops running fast, secure, and ready for work—diagnosed with advanced tools and repaired by senior technicians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button variant="primary" className="w-full sm:w-auto">Book a Service Now</Button>
              </ScrollLink>
              <a href="https://wa.me/919445234369" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto flex gap-2 items-center justify-center">
                  <MessageCircle size={18} />
                  WhatsApp Technician
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
               <div className="flex items-center gap-3">
                 <ShieldCheck className="text-secondary h-6 w-6 flex-shrink-0" />
                 <span className="text-sm font-medium text-textMain">35+ Years Exp.</span>
               </div>
               <div className="flex items-center gap-3">
                 <Cpu className="text-secondary h-6 w-6 flex-shrink-0" />
                 <span className="text-sm font-medium text-textMain">Mac & Windows</span>
               </div>
               <div className="flex items-center gap-3">
                 <Clock className="text-secondary h-6 w-6 flex-shrink-0" />
                 <span className="text-sm font-medium text-textMain">Same-Day Diagnosis</span>
               </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface/50 p-4 backdrop-blur-sm">
               {/* Decorative Gradient/Image Placeholder */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
               <img 
                 src="https://picsum.photos/600/500?grayscale" 
                 alt="Laptop Repair Technician" 
                 className="rounded-xl relative z-10 w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               
               {/* Floating Badge */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-surface border border-white/10 p-4 rounded-lg shadow-xl z-20"
               >
                 <div className="flex items-center gap-3">
                   <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-sm font-bold text-white">Technicians Online</span>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;