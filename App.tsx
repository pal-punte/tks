
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Worries from './components/Worries';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import InheritanceGuide from './components/InheritanceGuide';
import TaxReturnGuide from './components/TaxReturnGuide';
import Pricing from './components/Pricing';
import Flow from './components/Flow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AccountantChoiceGuide from './components/Guide';
import News from './components/News';
import TaxTopics from './components/TaxTopics';
import Recruitment from './components/Recruitment';
import OfficeInfo from './components/OfficeInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatButton from './components/AIChatButton';
import AIChat from './components/AIChat';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) {
        return;
      }

      event.preventDefault();
      const href = anchor.getAttribute('href');

      if (!href) return;
      
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Corresponds to h-20 in Header.tsx
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main>
        <Hero onChatOpen={() => setIsChatOpen(true)} />
        <Worries />
        <Features />
        <About />
        <Services />
        <InheritanceGuide />
        <TaxReturnGuide />
        <Pricing />
        <Flow />
        <Testimonials />
        <FAQ />
        <AccountantChoiceGuide />
        <News />
        <TaxTopics />
        <Recruitment />
        <OfficeInfo />
        <Contact />
      </main>
      <PrivacyPolicy />
      <Footer />
      <AIChatButton onClick={() => setIsChatOpen(true)} />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;