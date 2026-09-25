import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Paintbrush,
  Layers,
  Palette,
  Droplets,
  MessageSquare,
  MapPin,
  Clock,
  Gem
} from 'lucide-react';
import heroImg from '../assets/images/hero_luxury_interior_1790217423130.jpg';

interface HeroProps {
  onOpenEnquiry: (service?: string) => void;
  onScrollToQuotation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onScrollToQuotation }) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickService, setQuickService] = useState('Master House Painting & Finishes');
  const [quickAddress, setQuickAddress] = useState('');
  const [submittedQuick, setSubmittedQuick] = useState(false);

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickName.trim() && quickPhone.length >= 10 && quickAddress.trim()) {
      setSubmittedQuick(true);
    }
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sahani Interiors! I would like an itemized quotation.\n` +
      `• Customer Name: ${quickName || 'Homeowner'}\n` +
      `• Mobile: ${quickPhone || 'Not provided'}\n` +
      `• Service: ${quickService}\n` +
      `• Property Address: ${quickAddress || 'Mumbai'}\n` +
      `Please contact me to schedule a measurement visit.`
    );
    window.open(`https://wa.me/918956216889?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#080c15]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury living room painting and interior craftsmanship by Sahani Interiors"
          className="w-full h-full object-cover object-center filter brightness-45 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c15] via-[#080c15]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c15] via-[#080c15]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Kicker with Verified MSME Registration */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">#1 Premier House Painting & Luxury Interiors</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-mono">MSME UDYAM-MH-18-0320878</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1] text-balance">
              Master Architectural{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FE3] via-[#38bdf8] to-[#E5007D]">
                House Painting
              </span>{' '}
              & Luxury Interiors
            </h1>

            {/* Tagline & Concrete Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <span className="font-semibold uppercase tracking-wider text-xs block text-[#009FE3] mb-1">
                Your Thoughts, Our Creation · Painting & Fine Woodwork
              </span>
              Experience mechanized precision surface preparation, laser wall moisture testing, and smooth coats of Asian Paints Royale & Italian Stucco. Complemented by bespoke luxury sofas, master carpentry, and marble polishing.
            </p>

            {/* Key Painting & Quality Highlights - Balanced without repetitive "dust free" */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Mechanized Vacuum Sanding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Asian Paints Royale & Berger Silk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Italian Stucco & Accent Walls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Digital Moisture Wall Check</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Complete Floor & Furniture Masking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#009FE3] shrink-0" />
                <span className="font-medium">Dedicated Project Supervisor</span>
              </div>
            </div>

            {/* Hero Exploratory Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#services"
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all flex items-center gap-2"
              >
                <Paintbrush className="w-4 h-4 text-[#009FE3]" />
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#color-studio"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-all flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#E5007D]" />
                <span>Interactive Color Studio</span>
              </a>
            </div>
          </div>

          {/* Instant Quotation Section (Col 8-12) */}
          <div className="lg:col-span-5" id="instant-quotation">
            <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#009FE3]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#009FE3] uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>Instant Quotation</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mt-0.5">
                    Quick Service Quote & Site Visit
                  </h3>
                  <p className="text-xs text-slate-400">Share your address & details for swift coordination</p>
                </div>
              </div>

              {!submittedQuick ? (
                <form onSubmit={handleQuickLead} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Customer Name <span className="text-[#E5007D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      placeholder="e.g. Rishi Sahani"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3] focus:ring-1 focus:ring-[#009FE3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Mobile Number <span className="text-[#E5007D]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-semibold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="89562 16889"
                        className="w-full pl-12 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3] focus:ring-1 focus:ring-[#009FE3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                    >
                      <option value="Master House Painting & Finishes">Master House Painting & Finishes</option>
                      <option value="PU Polish (Polyurethane Luxury Finish)">PU Polish (Polyurethane Luxury Finish)</option>
                      <option value="Hand Polish & French Spirit Polish">Hand Polish & French Spirit Polish</option>
                      <option value="Architectural Surface Lamination">Architectural Surface Lamination</option>
                      <option value="Decco (Duco) Spray Paint & Lacquer">Decco (Duco) Spray Paint & Lacquer</option>
                      <option value="Luxury Sofas & Custom Upholstery">Luxury Sofas & Custom Upholstery</option>
                      <option value="Bespoke Furniture & Custom Woodcraft">Bespoke Furniture & Custom Woodcraft</option>
                      <option value="Architectural Flooring & Marble Polishing">Architectural Flooring & Marble Polishing</option>
                      <option value="Artisan Wall Textures & Italian Stucco">Artisan Wall Textures & Italian Stucco</option>
                      <option value="Scientific Waterproofing & Seepage Defense">Scientific Waterproofing & Seepage Defense</option>
                      <option value="Turnkey Modular Kitchens">Turnkey Modular Kitchens</option>
                    </select>
                  </div>

                  {/* Client Address Input */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Property / Site Address <span className="text-[#E5007D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={quickAddress}
                      onChange={(e) => setQuickAddress(e.target.value)}
                      placeholder="e.g. Flat 402, Royal Palms, Link Road..."
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>

                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleQuickWhatsApp}
                      className="w-full py-2.5 px-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Us</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#009FE3] to-[#E5007D] hover:opacity-95 shadow-md transition-all cursor-pointer"
                    >
                      Request Quotation
                    </button>
                  </div>

                  <div className="pt-1 text-[11px] text-center text-slate-400 space-y-0.5">
                    <p>
                      Direct helpline: <a href="tel:8956216889" className="text-[#009FE3] hover:underline font-semibold font-mono">89562 16889</a>
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Email: <a href="mailto:sahaniinteriors98@gmail.com" className="text-slate-400 hover:text-[#009FE3] underline">sahaniinteriors98@gmail.com</a>
                    </p>
                  </div>
                </form>
              ) : (
                <div className="mt-5 py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">Quotation Request Received!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{quickName}</strong>. Our project team will call <span className="font-mono text-white">+91-{quickPhone}</span> shortly to coordinate your consultation.
                  </p>
                  <div className="flex justify-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleQuickWhatsApp}
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
