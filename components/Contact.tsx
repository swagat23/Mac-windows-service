import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { CheckCircle, Phone, Clock, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: 'MacBook',
    issueCategory: 'Not Powering On',
    contactMethod: 'Call',
    message: '',
    isUrgent: false
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, isUrgent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/movolpbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          deviceType: 'MacBook',
          issueCategory: 'Not Powering On',
          contactMethod: 'Call',
          message: '',
          isUrgent: false
        });
      } else {
        setStatus('idle');
        alert("There was an issue submitting your request. Please try again or contact us via phone.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('idle');
      alert("There was an issue submitting your request. Please try again or contact us via phone.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Book Your Service" 
          subtitle="Expert diagnostics are just a form fill away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">How it works</h3>
            <p className="text-textMuted mb-8 text-lg">
              Share your laptop issue, and a Laptop Gurus technician will respond with a clear plan and estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-lg border border-white/5 mr-4">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Quick Review</h4>
                  <p className="text-textMuted text-sm">Technician reviews request within 2 working hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-lg border border-white/5 mr-4">
                  <CheckCircle className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Clear Estimate</h4>
                  <p className="text-textMuted text-sm">You'll receive a transparent quote and time frame.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-lg border border-white/5 mr-4">
                  <Truck className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Secure Logistics</h4>
                  <p className="text-textMuted text-sm">We arrange secure pickup or you can visit our center.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-surface/50 rounded-xl border border-white/5">
              <p className="text-sm text-textMuted mb-2">Need immediate assistance?</p>
              <a href="tel:+919445234369" className="flex items-center text-white font-bold text-lg hover:text-primary transition-colors">
                <Phone className="mr-2 h-5 w-5" /> 9445 234 369
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-white/10 p-8 rounded-2xl shadow-xl"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-textMuted">Our technician will contact you shortly via {formData.contactMethod}.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary hover:text-white text-sm font-medium"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-textMuted mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+91..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="deviceType" className="block text-sm font-medium text-textMuted mb-2">Device Type</label>
                    <select
                      id="deviceType"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="MacBook">MacBook (Air/Pro)</option>
                      <option value="Windows Laptop">Windows Laptop</option>
                      <option value="Desktop">Desktop PC / iMac</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="issueCategory" className="block text-sm font-medium text-textMuted mb-2">Issue Category</label>
                    <select
                      id="issueCategory"
                      name="issueCategory"
                      value={formData.issueCategory}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="Not Powering On">Not Powering On</option>
                      <option value="Slow Performance">Slow Performance</option>
                      <option value="Screen Issue">Screen / Display Issue</option>
                      <option value="Keyboard/Trackpad">Keyboard/Trackpad</option>
                      <option value="Data/Backup">Data Recovery / Backup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-textMuted mb-2">Preferred Contact Method</label>
                   <div className="flex gap-4">
                     {['Call', 'WhatsApp', 'Email'].map((method) => (
                       <label key={method} className="flex items-center cursor-pointer">
                         <input 
                            type="radio" 
                            name="contactMethod" 
                            value={method} 
                            checked={formData.contactMethod === method}
                            onChange={handleChange}
                            className="form-radio text-primary focus:ring-primary bg-background border-white/20"
                         />
                         <span className="ml-2 text-textMain text-sm">{method}</span>
                       </label>
                     ))}
                   </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Describe the issue</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="E.g., Laptop makes noise and heats up quickly..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isUrgent"
                    name="isUrgent"
                    checked={formData.isUrgent}
                    onChange={handleCheckbox}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-background"
                  />
                  <label htmlFor="isUrgent" className="ml-2 block text-sm text-red-400 font-medium">
                    I need urgent same-day diagnosis
                  </label>
                </div>

                <Button variant="primary" type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Submit & Get Estimate'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;