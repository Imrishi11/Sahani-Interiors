import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, Paintbrush } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenEnquiry: (service?: string) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Color Studio', href: '#color-studio' },
    { label: '5-Step Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Enquiry & Quote', href: '#enquiry' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080c15]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#080c15]/90 via-[#080c15]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Title */}
            <a href="#" className="flex items-center gap-2 group transition-opacity hover:opacity-95">
              <BrandLogo variant="compact" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#009FE3] hover:after:w-full after:transition-all after:duration-200 ${
                    link.label.includes('Enquiry') || link.label === 'Get Quotation'
                      ? 'text-[#009FE3] font-semibold'
                      : 'hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct Phone Contact */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:8268727572"
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 rounded-lg hover:border-[#009FE3] transition-all font-mono shadow-sm"
                title="Call Sahani Interiors Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                <span className="tracking-wide">82687 27572</span>
              </a>
            </div>

            {/* Mobile Menu & Quick Chat Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenChat}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
                aria-label="Open Your Assistant"
                title="Your Assistant"
              >
                <Sparkles className="w-4 h-4 text-[#009FE3]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {(link.label.includes('Enquiry') || link.label === 'Get Quotation') && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#009FE3]/20 text-[#009FE3]">
                      Enquiry
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="tel:8268727572"
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                <span className="font-mono">82687 27572</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="text-xs text-[#009FE3] font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Assistant</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
