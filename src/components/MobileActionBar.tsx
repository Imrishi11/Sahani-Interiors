import React from 'react';
import { Phone, ArrowRight, Paintbrush } from 'lucide-react';

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#080c15]/95 backdrop-blur-lg border-t border-slate-800 p-2.5 shadow-2xl flex items-center gap-2">
      {/* Call Button */}
      <a
        href="tel:8956216889"
        className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold"
      >
        <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
        <span>Call 89562 16889</span>
      </a>

      {/* Direct link to custom quotation section */}
      <a
        href="#quotation"
        className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#009FE3] to-[#0284c7] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-md"
      >
        <span>Custom Quotation</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
