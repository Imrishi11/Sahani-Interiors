import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, ThumbsUp, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Rohan Deshmukh',
      locality: 'Royal Garden Complex, Virar West',
      property: '3 BHK Complete Repaint & False Ceiling',
      rating: 5,
      date: 'February 2026',
      content:
        'Finding reliable professionals who respect your home is tough. Sahani Interiors completely masked our Italian marble floors and all furniture with plastic sheets. Their mechanized sanding left our home spotlessly clean. The Asian Paints Royale cyan accent wall came out gorgeous!',
      tag: 'Verified Homeowner',
    },
    {
      name: 'Priyanka & Amit Shah',
      locality: 'Evershine City, Vasai East',
      property: '2 BHK Fresh Painting, Custom Sofa & Modular Kitchen',
      rating: 5,
      date: 'January 2026',
      content:
        'We compared quotations with multiple top interior contractors. Sahani Interiors was by far the most transparent. The custom emerald velvet L-shape sofa and kitchen acrylic cabinets fit like a glove, and the supervisor shared daily photo updates on WhatsApp. Delivered on time in 6 days.',
      tag: 'Turnkey Renovation',
    },
    {
      name: 'Kavita Sundaram',
      locality: 'Yashwant Nagar, Virar West',
      property: 'Moisture Barrier Treatment & Living Room Stucco',
      rating: 5,
      date: 'December 2025',
      content:
        'We had severe dampness and peeling paint on our balcony-facing wall due to monsoon rains. Their team used moisture meters, injected waterproofing polymers, and crafted a breathtaking Italian Venetian stucco wall. Not a trace of dampness now!',
      tag: 'Waterproofing Specialist',
    },
    {
      name: 'Suresh Patil',
      locality: 'Ambadi Road, Vasai West',
      property: 'Hydraulic Master Bed, Wardrobe & Marble Polish',
      rating: 5,
      date: 'March 2026',
      content:
        'Outstanding craftsmanship on our master bedroom hydraulic bed and floor-to-ceiling sliding wardrobe. The Italian marble diamond polishing gave our 12-year-old floor a crystal mirror reflection. Highly recommended across the region.',
      tag: 'Bespoke Woodwork & Flooring',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>4.9 / 5 Client Rating</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Over 450+ Spaces Transformed</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Trusted by Homeowners & Architects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Read authentic experiences from homeowners in Royal Garden Complex, Evershine City, and across residential communities.
          </p>
        </div>

        {/* Quantified Performance Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-[#009FE3] font-mono tabular-nums">450+</div>
            <div className="text-xs text-slate-400 mt-1">Homes Completed</div>
          </div>
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums">100%</div>
            <div className="text-xs text-slate-400 mt-1">Clean Mechanized Sanding</div>
          </div>
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">32-Point</div>
            <div className="text-xs text-slate-400 mt-1">Master Quality Audit</div>
          </div>
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 text-center">
            <div className="text-3xl font-extrabold text-[#E5007D] font-mono tabular-nums">0%</div>
            <div className="text-xs text-slate-400 mt-1">Hidden Surcharges</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#009FE3]" />
                    <span>{rev.locality}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-[#009FE3] font-medium">
                    {rev.property}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {rev.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
