import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Share2, Search, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Google AI Studio",
      description: "Write as you like with our advanced AI-powered content generation services.",
      features: ["Generative AI Copywriting", "Custom Brand Voice", "Automated Content Creation"],
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Social Strategy",
      description: "Content plans to showcase repairs, tips, and customer success.",
      features: ["Content calendar (FB, Insta, YT)", "Post templates", "Analytics review"],
      icon: <Share2 className="h-6 w-6" />,
      leader: {
        name: "Swagat S",
        role: "Founder & CEO"
      }
    },
    {
      title: "SEO Optimization",
      description: "Local SEO for laptop service websites to drive calls and walk-ins.",
      features: ["Keyword-rich service pages", "Meta titles & descriptions", "Google Business Profile setup"],
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Workflow Automation",
      description: "Simple AI and automation flows for leads, reminders, and follow-ups.",
      features: ["Auto enquiry-to-WhatsApp", "Appointment reminders", "CRM pipeline setup"],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Growth & Automation Services" 
          subtitle="Beyond repairs, Laptop Gurus helps your laptop business or tech brand grow with smart content, strategy, and automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-surface hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-primary to-cyan-600 p-3 rounded-xl text-white shadow-lg">
                  {service.icon}
                </div>
                {/* Decorative Number */}
                <span className="text-4xl font-bold text-white/5 font-mono">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-textMuted mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-textMain/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.leader && (
                 <div className="mt-auto pt-5 border-t border-white/10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                        {/* Placeholder for leader image or initials */}
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-white font-bold text-sm">
                          {service.leader.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-tight">{service.leader.name}</p>
                      <p className="text-primary text-xs font-medium uppercase tracking-wider">{service.leader.role}</p>
                    </div>
                 </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;