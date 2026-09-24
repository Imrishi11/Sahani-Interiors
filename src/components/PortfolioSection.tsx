import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Layers, Eye, ChevronRight, ArrowRight, Paintbrush } from 'lucide-react';
import livingImg from '../assets/images/portfolio_living_room_1790217438083.jpg';
import kitchenImg from '../assets/images/portfolio_modular_kitchen_1790217449147.jpg';
import textureImg from '../assets/images/portfolio_wall_textures_1790217459868.jpg';
import exteriorImg from '../assets/images/portfolio_exterior_villa_1790217472301.jpg';
import heroImg from '../assets/images/hero_luxury_interior_1790217423130.jpg';
import sofaImg from '../assets/images/luxury_sofa_upholstery_1790218914307.jpg';
import furnitureImg from '../assets/images/bespoke_custom_furniture_1790218927692.jpg';
import flooringImg from '../assets/images/luxury_flooring_marble_1790218940171.jpg';

interface PortfolioSectionProps {
  onOpenEnquiry: (projectTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenEnquiry }) => {
  const [filter, setFilter] = useState<'all' | 'painting' | 'sofa_furniture' | 'flooring' | 'kitchen'>('all');
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 5), 95));
  };

  const projects = [
    {
      id: 'proj-1',
      title: 'Luxury Living Room Painting & Cove Ceiling',
      category: 'painting',
      location: 'Royal Garden Complex, Virar West',
      scope: '3 BHK Painting + False Ceiling + Feature Wall',
      duration: '7 Days',
      image: heroImg,
      summary:
        'Precision mechanized painting with Asian Paints Royale Aspira in Royal Cyan and Champagne Gold, custom cove lighting, and scratch-resistant Italian stucco.',
      materials: 'Asian Paints Royale, Gyproc False Ceiling, PU Polish',
    },
    {
      id: 'proj-3',
      title: 'Artisan Venetian Metallic Feature Wall',
      category: 'painting',
      location: 'Bolinj, Virar West',
      scope: 'Living Room Master Accent Wall',
      duration: '2 Days',
      image: textureImg,
      summary:
        'Handcrafted Italian Venetian stucco with metallic gold leaf veining, illuminated by directional warm spotlights creating deep visual dimension.',
      materials: 'Royale Play Metallic, Italian Plaster, Wax Sealer',
    },
    {
      id: 'proj-ext',
      title: 'Exterior Weatherproof Villa Facade',
      category: 'painting',
      location: 'Chulna Road, Vasai West',
      scope: 'Full Exterior Elastomeric Weatherproof Coating',
      duration: '12 Days',
      image: exteriorImg,
      summary:
        'Power washing, crack bridging with fiber-reinforced sealant, and two coats of Asian Paints Apex Ultima Protek for total monsoon defense.',
      materials: 'Apex Ultima Protek, Fiber Crack Filler, Silicone Primer',
    },
    {
      id: 'proj-sofa',
      title: 'Emerald Velvet Custom L-Shape Sectional',
      category: 'sofa_furniture',
      location: 'Royal Garden Complex, Virar West',
      scope: 'Custom Handcrafted Sofa & High-Resilience 40+ Foam',
      duration: '6 Days',
      image: sofaImg,
      summary:
        'Solid treated pinewood frame, Italian anti-stain velvet upholstery with champagne accents, tailored French piping, and modular lounge chaise.',
      materials: 'Solid Teak Frame, Italian Velvet, 40+ HR Cushioning',
    },
    {
      id: 'proj-furniture',
      title: 'Bespoke Master Suite Bed & Fluted Wardrobe',
      category: 'sofa_furniture',
      location: 'Ambadi Road, Vasai West',
      scope: 'Hydraulic Storage Bed & Floor-to-Ceiling Sliding Wardrobe',
      duration: '10 Days',
      image: furnitureImg,
      summary:
        'IS:710 Marine Ply structure with warm LED sensor profiles, tinted glass shutters, upholstered headboard, and hidden gas-lift storage.',
      materials: 'BWP Marine Ply, Hafele Soft-Close, Tinted Toughened Glass',
    },
    {
      id: 'proj-flooring',
      title: 'Italian Statuario Marble Diamond Crystallization',
      category: 'flooring',
      location: 'Yashwant Nagar, Virar West',
      scope: '7-Stage Klindex Diamond Polishing & Mirror Sealant',
      duration: '4 Days',
      image: flooringImg,
      summary:
        'Complete lippage removal, diamond disc honing from 50 to 3000 grit, and Italian crystallization yielding deep optical mirror reflections.',
      materials: 'Klindex Diamond Discs, Italian Fluorosilicate Crystal Seal',
    },
    {
      id: 'proj-2',
      title: 'Modern Minimalist Acrylic Kitchen',
      category: 'kitchen',
      location: 'Evershine City, Vasai East',
      scope: 'Modular Kitchen & Quartz Breakfast Counter',
      duration: '14 Days',
      image: kitchenImg,
      summary:
        'Marine ply IS:710 waterproof cabinetry with seamless matte slate grey acrylic shutters, Hafele tandem boxes, and under-cabinet warm sensor lighting.',
      materials: 'BWP Marine Ply, Hafele Hardware, Kalinga Quartz',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#0a0f1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-3">
            <Paintbrush className="w-3.5 h-3.5 text-[#009FE3]" />
            <span className="font-semibold text-white">Master Portfolio</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">Real Homes Delivered</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-balance">
            Real Homes, Handcrafted Distinction
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore our master painting transformations, Venetian stuccos, custom sofas, bespoke bedroom woodwork, and mirror-polished marble floors.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#009FE3] text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setFilter('painting')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'painting'
                ? 'bg-[#009FE3] text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            House Painting & Walls
          </button>
          <button
            onClick={() => setFilter('sofa_furniture')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'sofa_furniture'
                ? 'bg-[#009FE3] text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Sofas & Custom Furniture
          </button>
          <button
            onClick={() => setFilter('flooring')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'flooring'
                ? 'bg-[#009FE3] text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Marble & Flooring
          </button>
          <button
            onClick={() => setFilter('kitchen')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filter === 'kitchen'
                ? 'bg-[#009FE3] text-white shadow-md'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Modular Kitchens
          </button>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-white bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/80 backdrop-blur-sm">
                    {proj.duration} Handover
                  </span>
                  <span className="text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/80 backdrop-blur-sm">
                    {proj.location}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#009FE3] transition-colors font-display">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#009FE3] font-medium">
                    {proj.scope}
                  </p>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[10px] text-slate-500 truncate max-w-[190px]">
                    <span className="text-slate-400 font-medium">Materials:</span> {proj.materials}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    Delivered
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Visual Slider */}
        <div className="mt-16 bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009FE3] block mb-1 font-mono">
              Interactive Transformation Slider
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              See the Flawless Makeover Difference
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Drag the slider to see how our precision surface preparation, primer coats, and Royale velvet finish transform worn surfaces into architectural elegance.
            </p>
          </div>

          <div
            className="relative w-full max-w-4xl mx-auto h-[320px] sm:h-[440px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700 shadow-2xl"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image */}
            <img
              src={livingImg}
              alt="After makeover by Sahani Interiors"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white shadow-md">
              AFTER: Velvet Royale & Custom Woodwork
            </div>

            {/* Before Image */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={textureImg}
                alt="Before makeover"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-75"
                style={{ width: '100%', minWidth: '896px' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-slate-200 border border-slate-700 shadow-md">
                BEFORE: Rough Surface
              </div>
            </div>

            {/* Divider Handle Line */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xs shadow-2xl border-2 border-[#009FE3]">
                ↔
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
