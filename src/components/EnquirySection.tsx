import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Sparkles, MessageSquare, FileText } from 'lucide-react';
import { EnquiryFormData } from '../types';

interface EnquirySectionProps {
  prefilledService?: string;
  onSuccess?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ prefilledService = '', onSuccess }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    serviceType: prefilledService || 'Master House Painting & Finishes',
    propertyType: '2 BHK',
    timeline: 'Within 2 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync prefilledService if it changes from outside
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 500);
  };

  const generateWhatsappMessage = () => {
    return encodeURIComponent(
      `*QUOTATION REQUEST - SAHANI INTERIORS*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${formData.fullName || 'Homeowner'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🛠️ *Service Required:* ${formData.serviceType}\n` +
      `🏠 *Property Type:* ${formData.propertyType}\n` +
      `📍 *Client Address:* ${formData.address || 'Address provided on call'}\n` +
      `⏱️ *Preferred Timeline:* ${formData.timeline}\n` +
      `📝 *Notes/Requirements:* ${formData.message || 'Please share detailed quotation'}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Please provide quotation & schedule a visit.`
    );
  };

  const handleSendWhatsApp = () => {
    const url = `https://wa.me/918268727572?text=${generateWhatsappMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-20 bg-[#0a0f1d] relative scroll-mt-12">
      <span id="quotation" className="absolute -top-16 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Business Info & Trust (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#009FE3]" />
                <span>Instant Consultation</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300">Custom Architectural Quotation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Get Quotation & Schedule Consultation
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Connect directly with our master craftsmen and project leads. Share your requirements and address to receive an itemized quotation tailored to your home or commercial space.
              </p>
            </div>

            {/* Official Business & Registration Card */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Government of India MSME Registered</h4>
                  <p className="text-xs text-slate-400 font-mono">Reg. No: UDYAM-MH-18-0320878</p>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Headquarters & Design Studio:</strong>
                    <span>704, C-Wing, Shri Krishna Heights, Royal Garden Complex, Virar West - 401303, Maharashtra</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Direct Telephones:</strong>
                    <div className="flex items-center gap-3">
                      <a href="tel:8268727572" className="text-[#009FE3] font-semibold hover:underline font-mono">
                        8268727572
                      </a>
                      <span className="text-slate-600">|</span>
                      <a href="tel:9324332784" className="text-[#009FE3] font-semibold hover:underline font-mono">
                        9324332784
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#009FE3] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Operating Hours:</strong>
                    <span>Monday to Sunday: 8:30 AM – 9:00 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/918268727572?text=${encodeURIComponent('Hello Sahani Interiors! I would like to request an instant quotation for my home.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Quotation Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#009FE3]/10 rounded-full blur-3xl pointer-events-none" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white font-display">Get Your Custom Quotation</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[#009FE3]">
                        Fast Response
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Enter your details and site address below. You can submit directly or send via WhatsApp for immediate response.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-[#E5007D]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rishi Sahani"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3] focus:ring-1 focus:ring-[#009FE3]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Mobile Number <span className="text-[#E5007D]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-semibold text-slate-400">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder="82687 27572"
                          className="w-full pl-12 pr-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3] focus:ring-1 focus:ring-[#009FE3]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Required Service <span className="text-[#E5007D]">*</span>
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                      >
                        <option value="Master House Painting & Finishes">Master House Painting & Finishes</option>
                        <option value="Artisan Wall Textures & Italian Stucco">Artisan Wall Textures & Italian Stucco</option>
                        <option value="Scientific Waterproofing & Seepage Defense">Scientific Waterproofing & Seepage Defense</option>
                        <option value="Exterior Weatherproof Painting">Exterior Weatherproof Painting</option>
                        <option value="Luxury Sofas & Custom Upholstery">Luxury Sofas & Custom Upholstery</option>
                        <option value="Bespoke Furniture & Custom Woodcraft">Bespoke Furniture & Custom Woodcraft</option>
                        <option value="Architectural Flooring & Marble Polishing">Architectural Flooring & Marble Polishing</option>
                        <option value="Turnkey Modular Kitchens">Turnkey Modular Kitchens</option>
                        <option value="Complete Turnkey Home Interior Package">Complete Turnkey Home Interior Package</option>
                      </select>
                    </div>

                    {/* Property Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Property Configuration
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                      >
                        <option value="1 RK / Studio">1 RK / Studio</option>
                        <option value="1 BHK Flat">1 BHK Flat</option>
                        <option value="2 BHK Flat">2 BHK Flat</option>
                        <option value="3 BHK Flat">3 BHK Flat</option>
                        <option value="4+ BHK / Penthouse / Duplex">4+ BHK / Penthouse / Duplex</option>
                        <option value="Independent Bungalow / Villa">Independent Bungalow / Villa</option>
                        <option value="Commercial Showroom / Office">Commercial Showroom / Office</option>
                        <option value="Single Room / Custom Piece">Single Room / Custom Piece</option>
                      </select>
                    </div>
                  </div>

                  {/* Client Address Input (Replaces dropdown - client enters full address) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Property / Site Address <span className="text-[#E5007D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Flat 502, Wing B, Orchid Heights, Near Station..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3] focus:ring-1 focus:ring-[#009FE3]"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Enter your exact building, flat number, street, or landmark so our team can plan the site inspection.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Start Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#009FE3]"
                      >
                        <option value="Immediately (Within 3 Days)">Immediately (Within 3 Days)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Planning Stage / Getting Quotes">Planning Stage / Getting Quotes</option>
                      </select>
                    </div>

                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                      />
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Specific Requirements, Dimensions or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need 6-seater L-shape sofa in emerald velvet, master bedroom hydraulic bed with fluted wall panel, and Italian marble crystallization polishing..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
                    />
                  </div>

                  {/* Dual Action Buttons: WhatsApp & Submit */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary Button 1: Send Message on WhatsApp */}
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                      <span>Send Message on WhatsApp</span>
                    </button>

                    {/* Primary Button 2: Submit Quotation Request */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#009FE3] via-[#0284c7] to-[#E5007D] hover:opacity-95 shadow-lg shadow-[#009FE3]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting...' : 'Submit Quotation Request'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    Zero obligation. Your address and phone are kept strictly private and used solely to calculate and deliver your quotation.
                  </p>
                </form>
              ) : (
                <div className="py-10 text-center space-y-5 animate-in fade-in-50">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Quotation Reference #SI-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      Quotation Request Received!
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName || 'Valued Client'}</strong>. Our project supervisor has received your request for <strong className="text-white">{formData.serviceType}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Contact Mobile:</span>
                      <span className="font-mono text-white">+91-{formData.phone}</span>
                    </div>
                    {formData.address && (
                      <div className="flex justify-between text-slate-400">
                        <span>Site Address:</span>
                        <span className="text-white text-right max-w-[200px] truncate">{formData.address}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-400">
                      <span>Consultation & Measurement:</span>
                      <span className="font-bold text-emerald-400">Completely Free</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Expected Callback:</span>
                      <span className="text-white">Within 15 minutes</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Details on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 cursor-pointer"
                    >
                      Submit Another Quotation
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
