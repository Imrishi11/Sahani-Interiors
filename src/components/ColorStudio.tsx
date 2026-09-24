import React, { useState } from 'react';
import { Palette, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ColorStudioProps {
  onOpenEnquiry: (colorName?: string) => void;
}

export const ColorStudio: React.FC<ColorStudioProps> = ({ onOpenEnquiry }) => {
  const palettes = [
    {
      id: 'regal-cyan',
      name: 'Sahani Signature Luxe',
      tagline: 'Bold, Prestigious & Fresh',
      accentColor: '#009FE3',
      secondaryColor: '#E5007D',
      wallColor: '#0c233c',
      trimColor: '#f8fafc',
      asianPaintsShade: 'Blue Danube (7379) & Pink Accent',
      bestFor: 'Modern Living Room & Entertainment Wall',
    },
    {
      id: 'emerald-gold',
      name: 'Imperial Emerald & Warm Brass',
      tagline: 'Opulent, Royal & Earthy',
      accentColor: '#064e3b',
      secondaryColor: '#d97706',
      wallColor: '#062e24',
      trimColor: '#fef3c7',
      asianPaintsShade: 'Tivoli Green (7632) & Gold Rush',
      bestFor: 'Master Bedroom & Dining Feature Wall',
    },
    {
      id: 'blush-slate',
      name: 'Nordic Blush & Architectural Slate',
      tagline: 'Warm, Minimalist & Serene',
      accentColor: '#db2777',
      secondaryColor: '#334155',
      wallColor: '#2b2230',
      trimColor: '#fdf2f8',
      asianPaintsShade: 'Velvet Pink (8087) & Grey Matter',
      bestFor: 'Kids Bedroom & Powder Room',
    },
    {
      id: 'coastal-calm',
      name: 'Vasai Coastal Breeze & Pearl',
      tagline: 'Airy, Expansive & Natural',
      accentColor: '#0284c7',
      secondaryColor: '#cbd5e1',
      wallColor: '#172554',
      trimColor: '#f0f9ff',
      asianPaintsShade: 'Morning Mist (7211) & Pearl White',
      bestFor: 'Compact 1BHK / 2BHK Living Rooms',
    },
    {
      id: 'terracotta-sand',
      name: 'Sunbaked Terracotta & Almond',
      tagline: 'Organic, Cozy & Inviting',
      accentColor: '#c2410c',
      secondaryColor: '#d4af37',
      wallColor: '#3d1d11',
      trimColor: '#fffbeb',
      asianPaintsShade: 'Fire Brick (0543) & Warm Ivory',
      bestFor: 'Balcony Sit-Out & Pooja Room',
    },
  ];

  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);

  return (
    <section id="color-studio" className="py-20 bg-[#0a0f1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-3">
            <Palette className="w-3.5 h-3.5 text-[#009FE3]" />
            <span>Interactive Color Consultation</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Asian Paints & Royale Palettes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Preview Curated Luxury Color Palettes
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Test trending wall color combinations matched with authentic Asian Paints Royale shade codes before our physical shade card consultation.
          </p>
        </div>

        {/* Color Preview Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Palette Selection Tabs (Col 1-5) */}
          <div className="lg:col-span-5 space-y-3">
            {palettes.map((p) => {
              const isSelected = selectedPalette.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPalette(p)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-[#009FE3] shadow-lg ring-1 ring-[#009FE3]/40'
                      : 'bg-[#0f172a]/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">{p.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{p.tagline}</p>
                    </div>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: p.accentColor }}
                      />
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: p.secondaryColor }}
                      />
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: p.trimColor }}
                      />
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Shade Code: <strong className="text-slate-300">{p.asianPaintsShade}</strong></span>
                    {isSelected && (
                      <span className="text-[#009FE3] font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Selected
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Room Visualizer Simulation (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold text-[#009FE3] uppercase tracking-wider">Live Simulation</span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedPalette.name}
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {selectedPalette.bestFor}
                </div>
              </div>

              {/* Architectural Room Mockup Container */}
              <div
                className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden transition-colors duration-500 border border-slate-700/80 p-6 flex flex-col justify-between"
                style={{ backgroundColor: selectedPalette.wallColor }}
              >
                {/* Ceiling with Cove Light effect */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

                {/* Accent feature wall strip */}
                <div
                  className="absolute top-0 right-8 bottom-0 w-24 sm:w-32 opacity-90 transition-all duration-500 shadow-2xl"
                  style={{ backgroundColor: selectedPalette.accentColor }}
                />

                {/* Decorative Furniture Outline */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs max-w-[200px]">
                    <span className="text-[10px] text-slate-300 block">Recommended Finish:</span>
                    <span className="font-bold text-amber-300">Asian Paints Royale Luxury Sheen</span>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full border-2 border-white shadow-xl flex items-center justify-center font-bold text-xs"
                    style={{ backgroundColor: selectedPalette.secondaryColor, color: '#ffffff' }}
                  >
                    ★
                  </div>
                </div>

                {/* Living Room Modern Sofa / Floor Graphic Silhouette */}
                <div className="relative z-10 flex items-end justify-between">
                  <div className="bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs text-slate-200">
                    <span className="text-slate-400 block text-[10px]">Shade Formula:</span>
                    <span className="font-mono text-white font-semibold">{selectedPalette.asianPaintsShade}</span>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(`Color Palette: ${selectedPalette.name}`)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#E5007D] hover:opacity-90 shadow-md cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Sample This Shade</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Free on-site shade book inspection available in Virar & Vasai.</span>
                <span className="text-slate-300 font-medium">100% Genuine Branded Tinting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
