import React, { useState } from 'react';
import { MessageSquare, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ColorStudio } from './components/ColorStudio';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { EnquirySection } from './components/EnquirySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ChatBot } from './components/ChatBot';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenEnquiry = (serviceTitle?: string) => {
    setSelectedServiceForModal(serviceTitle || '');
    setIsEnquiryModalOpen(true);
  };

  const handleScrollToQuotation = () => {
    const el = document.getElementById('quotation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-100 flex flex-col selection:bg-[#009FE3]/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenChat={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Main Content Sections as per 1st Result of Website */}
      <main className="flex-1">
        {/* 1. Hero Section with Instant Quotation Card */}
        <Hero
          onOpenEnquiry={handleOpenEnquiry}
          onScrollToQuotation={handleScrollToQuotation}
        />

        {/* 2. Services Section: House Painting, SOFA section, Furniture section, Flooring section in deep architectural detail */}
        <ServicesSection
          onSelectService={(service) => handleOpenEnquiry(service)}
        />

        {/* 3. Interactive Color Studio & Room Simulation */}
        <ColorStudio
          onOpenEnquiry={(shade) => handleOpenEnquiry(shade)}
        />

        {/* 4. 5-Step Frictionless Process */}
        <ProcessSection />

        {/* 5. Real Project Portfolio & Before/After Makeover Slider */}
        <PortfolioSection
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 6. Custom Quotation Section (#quotation) - Main quotation destination */}
        <EnquirySection
          prefilledService={selectedServiceForModal}
        />

        {/* 7. Verified Customer Reviews & Reputation */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Action Bar */}
      <MobileActionBar
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Enquiry / Quotation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* 24/7 Consultation Assistant */}
      <ChatBot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenEnquiry={handleOpenEnquiry}
      />
    </div>
  );
}
