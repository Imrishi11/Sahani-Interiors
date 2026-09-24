import React from 'react';
import { Ruler, FileSpreadsheet, ShieldAlert, Sparkles, Award, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Free Laser Measurement & Damp Scan',
      desc: 'Our senior supervisor visits with digital laser distance meters to measure exact paintable wall area. We run a non-invasive moisture meter test to detect hidden pipe leaks or coastal dampness.',
      highlight: 'Zero Guesstimates · Accurate to 1mm',
      icon: Ruler,
    },
    {
      num: '02',
      title: 'Itemized Digital Quote & Shade Preview',
      desc: 'Receive an honest, transparent bill of quantities detailing exact paint liters, primer coats, and labor rates. Explore physical Asian Paints shade cards or 3D digital palette preview.',
      highlight: 'Zero Hidden Charges · Clear Milestones',
      icon: FileSpreadsheet,
    },
    {
      num: '03',
      title: 'Furniture Masking & Floor Protection',
      desc: 'Before touching a brush, our crew masks all electrical fixtures, switchboards, window glass, and doors. Heavy gauge plastic tarps protect all furniture, beds, and expensive flooring.',
      highlight: '100% Spill & Scratch Protection',
      icon: ShieldAlert,
    },
    {
      num: '04',
      title: 'Mechanized Precision Sanding & Painting',
      desc: 'We utilize industrial high-suction sanding machines that extract plaster residues directly into vacuum bags, keeping your home clean and breathable. Applied with precision rollers for a uniform velvet sheen.',
      highlight: 'Clean Indoor Air · Mirror Smooth Walls',
      icon: Sparkles,
    },
    {
      num: '05',
      title: '32-Point Quality Audit, Deep Clean & Handover',
      desc: 'A comprehensive 32-point supervisor inspection checks for uniform coverage, clean edges, and zero roller marks. We scrub any stray drops, restore your furniture, and issue your official Completion Certificate.',
      highlight: '32-Point Master Inspection & Clean Handover',
      icon: Award,
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Sahani Standard</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Inspired by Industry Leaders</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Our 5-Step Frictionless Painting Process
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            How we eliminate painting stress: mechanized precision, complete protective masking, laser accuracy, and dedicated project supervision from day one.
          </p>
        </div>

        {/* Process Cards in Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#0f172a] border border-slate-800 hover:border-[#009FE3]/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-slate-600 group-hover:text-[#009FE3] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#009FE3]/40 flex items-center justify-center text-[#009FE3] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#009FE3] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner Bar */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Government Registered Enterprise: UDYAM-MH-18-0320878</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to experience clean, seamless painting and interior transformations?
            </h4>
            <p className="text-xs text-slate-400">
              Free moisture scan and laser measurement for homes in Virar West, Vasai East, and Mumbai suburbs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8268727572"
              className="px-5 py-2.5 rounded-lg bg-[#009FE3] hover:bg-[#0284c7] text-white text-xs font-bold shadow-lg transition-all"
            >
              Call 82687 27572
            </a>
            <a
              href="tel:9324332784"
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              Call 93243 32784
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
