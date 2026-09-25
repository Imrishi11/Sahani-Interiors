import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Paintbrush, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info & MSME (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="horizontal" />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Sahani Interiors is a premier house painting and interior design practice. We specialize in precision mechanized painting, Italian stuccos, scientific waterproofing, custom luxury sofas, master carpentry, and mirror-finish marble polishing.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block leading-tight">Ministry of MSME, Govt. of India</span>
                <span className="font-mono font-bold text-white tracking-wider">UDYAM-MH-18-0320878</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 6-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-display">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="text-[#009FE3] hover:text-white font-semibold transition-colors flex items-center gap-1">
                  <Paintbrush className="w-3 h-3" />
                  <span>Master House Painting</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-[#009FE3] transition-colors">PU Polish (Polyurethane)</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-[#009FE3] transition-colors">Hand Polish & Spirit Polish</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-[#009FE3] transition-colors">Surface Lamination & Edging</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-[#009FE3] transition-colors">Decco (Duco) Spray Paint</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Wall Textures & Italian Stucco</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Luxury Sofas & Upholstery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Bespoke Furniture & Hydraulic Beds</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Architectural Flooring & Marble Polish</a>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact (Col 8-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase font-display">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  704, C-Wing, Shri Krishna Heights, Royal Garden Complex, Virar West - 401303, Maharashtra
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <a href="tel:8956216889" className="text-white font-mono font-semibold hover:text-[#009FE3] text-sm">
                      89562 16889
                    </a>
                  </div>
                  <span className="text-[11px] text-slate-500 block">Direct Line · Mon - Sun: 8:30 AM to 9:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="mailto:sahaniinteriors98@gmail.com"
                    className="text-white hover:text-[#009FE3] font-medium transition-colors break-all"
                  >
                    sahaniinteriors98@gmail.com
                  </a>
                  <span className="text-[11px] text-slate-500 block">Direct email for drawings, plans & quotations</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quotation"
                  className="text-xs text-[#009FE3] hover:underline font-semibold"
                >
                  Go to Custom Quotation Form →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Sahani Interiors. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>UDYAM-MH-18-0320878</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Your Thoughts, Our Creation</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
