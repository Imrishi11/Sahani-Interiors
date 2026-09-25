import React from 'react';
import { Star, ShieldCheck, MapPin, Quote, ThumbsUp, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Rohan Deshmukh',
      locality: 'Santacruz',
      property: '3 BHK Painting & Italian Stucco Wall',
      rating: 5,
      content:
        'Finding reliable painters in Santacruz who respect high-end furnished apartments is tough. Sahani Interiors completely masked our floors and furniture with thick plastic sheets. Mechanized vacuum sanding kept the apartment dust-free, and the Asian Paints Royale velvet finish came out flawless!',
      tag: 'Verified Homeowner',
    },
    {
      name: 'Priyanka & Amit Shah',
      locality: 'Powai',
      property: 'Luxury PU Polish & Custom L-Shape Velvet Sofa',
      rating: 5,
      content:
        'We compared quotations with multiple interior firms across Powai. Sahani Interiors was by far the most transparent. The Italian PU polish on our main teak entrance door has a breathtaking mirror reflection, and the bespoke velvet couch fits our living room to perfection.',
      tag: 'Turnkey Renovation',
    },
    {
      name: 'Mohsin Qureshi',
      locality: 'Kurla',
      property: 'Full Apartment Painting & Decco Spray Moldings',
      rating: 5,
      content:
        'Remarkable speed and quality for our flat in Kurla near BKC. The white satin Decco finish on our internal doors and French moldings looks like an architectural luxury showroom. Daily photo progress on WhatsApp gave us peace of mind.',
      tag: 'Interior Finish',
    },
    {
      name: 'Vikram Singhania',
      locality: 'Malad',
      property: 'Moisture Barrier Waterproofing & Royale Aspira',
      rating: 5,
      content:
        'We had severe dampness and peeling paint on our balcony-facing wall due to heavy monsoon rains in Malad. Their team used electronic moisture meters, injected damp-barrier polymers, and finished with Royale Aspira. Not a single trace of dampness now!',
      tag: 'Waterproofing Specialist',
    },
    {
      name: 'Harshwardhan Jhaveri',
      locality: 'Mumbadevi',
      property: 'Heritage Teak Hand Polish & Spirit Polish',
      rating: 5,
      content:
        'Our ancestral home in Mumbadevi required traditional French spirit polishing for intricate Burma teak woodwork and mandir. Sahani Interiors master polishers preserved the natural amber grain and gave it a royal luster with protective melamine sealing.',
      tag: 'Heritage Wood Craft',
    },
    {
      name: 'Sunita & Suresh Patil',
      locality: 'Dadar',
      property: 'Hydraulic Storage Bed & Marble Diamond Polish',
      rating: 5,
      content:
        'Outstanding craftsmanship on our master bedroom hydraulic bed in Dadar. Their 7-stage Klindex diamond abrasive polishing gave our 12-year-old Italian marble floor an optical mirror reflection. Transparent billing and true professionals.',
      tag: 'Bespoke Woodwork & Flooring',
    },
    {
      name: 'Natasha Fernandez',
      locality: 'Bandra',
      property: 'Bespoke Fluted Wardrobe & Custom Seating',
      rating: 5,
      content:
        'Top-shelf luxury standards in Bandra! German Hafele soft-close hardware on floor-to-ceiling sliding wardrobes with tinted fluted glass and warm sensor LEDs. Their custom-made bouclé armchair is our favorite piece in the home.',
      tag: 'Luxury Residence',
    },
    {
      name: 'Deepak Malhotra',
      locality: 'Andheri',
      property: 'Turnkey 3 BHK Painting, PU Polish & Lamination',
      rating: 5,
      content:
        'Supervised by thorough professionals for our flat in Andheri West. The 1.5mm anti-scratch matte lamination on our modular wardrobes and high-gloss PU polish on the TV unit are pristine. No mess, on-time handover.',
      tag: 'Turnkey Interior',
    },
    {
      name: 'Ananya Merchant',
      locality: 'Prabhadevi',
      property: 'Artisan Italian Venetian Stucco & Texture Accent',
      rating: 5,
      content:
        'The handcrafted Italian Venetian lime plaster accent wall in our Prabhadevi living room catches the coastal evening light gorgeously. The artisans were punctual, respectful, and delivered exactly what was promised in the 3D visualizer.',
      tag: 'Designer Statement',
    },
    {
      name: 'Cyrus Mistry',
      locality: 'Churhgate',
      property: 'Heritage Apartment Painting & Wood Finishes',
      rating: 5,
      content:
        'Outstanding attention to detail and punctuality for our apartment in Churhgate (Churchgate). Zero plaster dust, daily milestone tracking, and transparent MSME credentials. The royal finish exceeded our expectations.',
      tag: 'Heritage Homeowner',
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
            Read authentic reviews from homeowners across Santacruz, Powai, Kurla, Malad, Mumbadevi, Dadar, Bandra, Andheri, Prabhadevi, and Churchgate.
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
                  <div className="text-[10px] text-emerald-400/90 mt-0.5 flex items-center justify-end gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Project</span>
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
