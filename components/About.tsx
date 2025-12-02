import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Wrench, MessageSquare, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  const features = [
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Deep Diagnostic Expertise",
      desc: "We don't just guess. We use advanced diagnostic tools and a systematic workflow to pinpoint the exact issue."
    },
    {
      icon: <Wrench className="h-8 w-8 text-secondary" />,
      title: "Genuine Parts Only",
      desc: "Clear warranty and service reports. We strictly use high-quality, genuine components for longevity."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Customer-Centric",
      desc: "Simple explanations, regular status updates, and absolutely no technical jargon. You'll know exactly what's happening."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary" />,
      title: "Business-Ready Support",
      desc: "Tailored support for freelancers, small businesses, and creators who can't afford downtime."
    }
  ];

  const stats = [
    {
      value: "35+",
      label: "Years of Service",
      desc: "Over three decades of Mac repair expertise"
    },
    {
      value: "90K+",
      label: "Macs Repaired",
      desc: "Thousands of satisfied customers"
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      desc: "Consistently high customer approval"
    },
    {
      value: "80 Days",
      label: "Warranty",
      desc: "All repairs fully guaranteed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Laptop Gurus?" 
          subtitle="We combine 35 years of traditional repair expertise with modern customer service standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface border border-white/5 p-8 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="bg-background/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 border-t border-white/5 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <h4 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.value}
              </h4>
              <p className="text-white font-bold text-lg mb-2">{stat.label}</p>
              <p className="text-textMuted text-sm max-w-[200px] mx-auto leading-tight">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;