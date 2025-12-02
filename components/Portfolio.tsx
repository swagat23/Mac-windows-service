import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PortfolioItem, PortfolioCategory } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<PortfolioCategory>('All');

  const categories: PortfolioCategory[] = ['All', 'Mac', 'Windows', 'Business Support'];

  const items: PortfolioItem[] = [
    {
      id: 1,
      title: "MacBook Pro Logic Board",
      category: "Mac",
      description: "Complete chip-level repair for a water-damaged M1 MacBook Pro. Restored full functionality.",
      highlight: "Saved client ₹40k vs Apple replacement"
    },
    {
      id: 2,
      title: "Dell XPS Thermal Optimization",
      category: "Windows",
      description: "Deep cleaning, thermal paste replacement, and fan curve optimization.",
      highlight: "Temp reduced by 15°C under load"
    },
    {
      id: 3,
      title: "Office Data Recovery",
      category: "Business Support",
      description: "Emergency data recovery for an architecture firm's NAS drive.",
      highlight: "100% data recovered in 24 hrs"
    },
    {
      id: 4,
      title: "iMac 5K SSD Upgrade",
      category: "Mac",
      description: "Replaced failing mechanical HDD with 2TB NVMe SSD.",
      highlight: "Boot time: 2m → 25s"
    },
    {
      id: 5,
      title: "Gaming Laptop Hinge Repair",
      category: "Windows",
      description: "Fabrication and reinforcement of broken chassis hinges on MSI Raider.",
      highlight: "Stronger than factory build"
    },
    {
      id: 6,
      title: "Startup IT Setup",
      category: "Business Support",
      description: "Procurement, setup, and security config for a 10-person design agency.",
      highlight: "Zero downtime deployment"
    }
  ];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Laptop & Mac Service Portfolio" 
          subtitle="Real results from our workbench."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                  : 'bg-surface border border-white/10 text-textMuted hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-background border border-white/5 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
                      item.category === 'Mac' ? 'bg-white/10 text-white' : 
                      item.category === 'Windows' ? 'bg-blue-900/30 text-blue-300' :
                      'bg-purple-900/30 text-purple-300'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-textMuted text-sm mb-4">{item.description}</p>
                  
                  {item.highlight && (
                    <div className="bg-secondary/10 border border-secondary/20 rounded p-3">
                      <p className="text-xs font-semibold text-secondary flex items-center">
                        <span className="mr-2">⚡</span> {item.highlight}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;