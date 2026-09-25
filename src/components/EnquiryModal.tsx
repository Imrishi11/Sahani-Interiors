import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    serviceType: initialService || 'Master House Painting & Finishes',
    propertyType: '2 BHK',
    timeline: 'Within 2 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `*QUOTATION REQUEST - SAHANI INTERIORS*\n` +
      `👤 *Customer Name:* ${formData.fullName || 'Homeowner'}\n` +
      `📞 *Phone:* ${formData.phone || 'Provided'}\n` +
      `🛠️ *Service:* ${formData.serviceType}\n` +
      `🏠 *Property:* ${formData.propertyType}\n` +
      `📍 *Address:* ${formData.address || 'To be shared'}\n` +
      `📝 *Notes:* ${formData.message || 'Please provide quotation'}`
    );
    return `https://wa.me/918956216889?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-20">
      <div className="relative w-full max-w-xl bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#080c15]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#009FE3]/15 text-[#009FE3] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Request Custom Quotation
              </h3>
              <p className="text-[11px] text-slate-400">
                Sahani Interiors · MSME: UDYAM-MH-18-0320878
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Customer Name <span className="text-[#E5007D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rishi Sahani"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Mobile Number <span className="text-[#E5007D]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    placeholder="89562 16889"
                    className="w-full pl-12 pr-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                  >
                    <option value="Master House Painting & Finishes">House Painting</option>
                    <option value="PU Polish (Polyurethane Luxury Finish)">PU Polish (High Gloss/Matte)</option>
                    <option value="Hand Polish & Spirit Polish">Hand Polish (French Polish)</option>
                    <option value="Architectural Surface Lamination">Surface Lamination</option>
                    <option value="Decco (Duco) Spray Paint & Lacquer">Decco (Duco) Spray Finish</option>
                    <option value="Artisan Wall Textures & Italian Stucco">Wall Textures & Stucco</option>
                    <option value="Scientific Waterproofing & Seepage Defense">Scientific Waterproofing</option>
                    <option value="Exterior Weatherproof Painting">Exterior Painting</option>
                    <option value="Luxury Sofas & Custom Upholstery">Luxury Sofas</option>
                    <option value="Bespoke Furniture & Custom Woodcraft">Bespoke Furniture</option>
                    <option value="Architectural Flooring & Marble Polishing">Flooring & Marble Polish</option>
                    <option value="Turnkey Modular Kitchens">Modular Kitchen</option>
                    <option value="Complete Turnkey Home Interior Package">Turnkey Interior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                  >
                    <option value="1 RK">1 RK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Client Enters Address Directly */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Site / Home Address <span className="text-[#E5007D]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. Flat 304, Green Palms, Main Road..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specific requirements, design ideas or dimensions..."
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                />
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#009FE3] to-[#E5007D] hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting...' : 'Request Quotation'}</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation · Free consultation & measurement</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-display">Quotation Request Submitted!</h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                Thank you! Our project lead will call <strong className="text-white font-mono">+91-{formData.phone}</strong> shortly to discuss your custom quotation.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
