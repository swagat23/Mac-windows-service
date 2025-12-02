import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-textMain selection:bg-primary selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default App;
