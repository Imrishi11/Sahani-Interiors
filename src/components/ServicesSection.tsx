import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  Armchair,
  Layers,
  Compass,
  Paintbrush,
  ShieldCheck,
  Droplets,
  Wind,
  CheckCircle2,
  Gem,
  Hammer,
  Maximize2
} from 'lucide-react';
import livingImg from '../assets/images/portfolio_living_room_1790217438083.jpg';
import kitchenImg from '../assets/images/portfolio_modular_kitchen_1790217449147.jpg';
import textureImg from '../assets/images/portfolio_wall_textures_1790217459868.jpg';
import exteriorImg from '../assets/images/portfolio_exterior_villa_1790217472301.jpg';
import sofaImg from '../assets/images/luxury_sofa_upholstery_1790218914307.jpg';
import furnitureImg from '../assets/images/bespoke_custom_furniture_1790218927692.jpg';
import flooringImg from '../assets/images/luxury_flooring_marble_1790218940171.jpg';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'painting' | 'sofa' | 'furniture' | 'flooring' | 'protection_kitchen'>('all');
  const [activeSpecPillar, setActiveSpecPillar] = useState<'painting' | 'sofa' | 'furniture' | 'flooring'>('painting');

  const services = [
    // 1. PRIMARY: Master House Painting
    {
      id: 'house-painting',
      category: 'painting',
      pillar: 'painting',
      title: 'Master House Painting & Finishes',
      badge: 'FLAGSHIP DISCIPLINE',
      highlightBadge: 'Asian Paints Royale & Berger Silk',
      image: livingImg,
      description:
        'Mechanized precision sanding with high-suction vacuum extractors, thorough wall priming, micro-fine acrylic putty leveling, and smooth coats of Asian Paints Royale or Berger Silk.',
      features: [
        'High-suction vacuum sanding extractors (clean indoor air, allergy safe)',
        'Complete heavy-duty plastic masking of all furniture, switches, and floors',
        'Laser distance wall measurement & digital non-invasive moisture scanning',
        'Silky velvet, matte, and luxury sheen emulsion application with zero roller marks',
        'Dedicated on-site supervisor for daily milestone inspections',
      ],
      specifications: [
        { label: 'Emulsion Grade', value: 'Asian Paints Royale Aspira / Berger Silk Luxury' },
        { label: 'Surface Prep', value: 'Mechanized vacuum sanding & dual acrylic putty' },
        { label: 'Moisture Audit', value: 'Non-invasive digital pinless moisture scan' },
        { label: 'Masking Standard', value: '100% floor, woodwork & switchboard taped' },
      ],
      idealFor: '1 BHK, 2 BHK, 3 BHK apartments, duplexes, bungalows & luxury villas',
    },
    // 2. SOFA SECTION: Detailed like painting
    {
      id: 'sofa-craft',
      category: 'sofa',
      pillar: 'sofa',
      title: 'Luxury Sofas & Custom Upholstery',
      badge: 'SOFA CRAFT SECTION',
      highlightBadge: 'Solid Teak Frame & 40+ HR Foam',
      image: sofaImg,
      description:
        'Custom-made L-shaped sectionals, Chesterfield couches, motorized recliner seating, and complete master re-upholstery tailored to your exact living room blueprint.',
      features: [
        'Solid treated CP teak and seasoned Malaysian pinewood structural frames (10-Yr Guarantee)',
        '40+ High Resilience (HR) virgin foam core topped with supersoft feather foam cushioning',
        'Anti-sag carbon steel sinuous springs and high-tensile elastic webbing suspension',
        'Imported liquid-repellent anti-stain velvet, heavyweight bouclé & genuine top-grain Nappa leather',
        'Master artisan tailored French double piping, deep diamond button-tufting & brass leg accents',
      ],
      specifications: [
        { label: 'Structural Frame', value: 'Solid Treated Teak & Pinewood (10-Yr Guarantee)' },
        { label: 'Ergonomic Cushioning', value: '40+ High Resilience (HR) Foam + Feather Wrap' },
        { label: 'Fabric Selection', value: 'Italian Anti-Stain Velvet, Bouclé & Nappa Leather' },
        { label: 'Suspension System', value: 'Anti-Sag Carbon Sinuous Springs + Webbing' },
      ],
      idealFor: 'Living rooms, lounge areas, home theaters, penthouses & master suites',
    },
    // 3. FURNITURE SECTION: Detailed like painting
    {
      id: 'bespoke-furniture',
      category: 'furniture',
      pillar: 'furniture',
      title: 'Bespoke Furniture & Master Carpentry',
      badge: 'FURNITURE SECTION',
      highlightBadge: '100% BWP Marine Ply IS:710',
      image: furnitureImg,
      description:
        'Architectural bedroom and living room woodwork: custom hydraulic storage beds with quilted acoustic headboards, floor-to-ceiling sliding wardrobes with fluted glass, and floating TV consoles.',
      features: [
        '100% boiling waterproof BWP IS:710 Marine Ply and Gurjan core with zero-void precision',
        'German Hafele, Blum & Hettich soft-close hinges, tandem boxes and gas-lift hydraulic struts',
        'Floor-to-ceiling sliding wardrobes with fluted tinted glass & concealed warm LED sensor profiles',
        'Floating TV entertainment consoles with acoustic fluted panelling & wire conduits',
        'Zero-bubble factory hydraulic cold-press bonding with 1mm scratch-resistant matte laminates & PU',
      ],
      specifications: [
        { label: 'Core Timber', value: '100% BWP Marine Ply (IS:710 Certified Core)' },
        { label: 'Fittings & Hardware', value: 'Hafele & Blum Soft-Close German Systems' },
        { label: 'Surface Finish', value: '1mm Anti-Scratch Laminates, Fluted Glass & PU' },
        { label: 'Warranty & Durability', value: '10-Year Termite, Borer & Delamination Warranty' },
      ],
      idealFor: 'Master bedrooms, living room entertainment walls & complete apartment fit-outs',
    },
    // 4. FLOORING SECTION: Detailed like painting
    {
      id: 'architectural-flooring',
      category: 'flooring',
      pillar: 'flooring',
      title: 'Architectural Flooring & Marble Polishing',
      badge: 'FLOORING SECTION',
      highlightBadge: '7-Stage Diamond Crystallization',
      image: flooringImg,
      description:
        'Italian marble restoration and 7-stage Klindex diamond abrasive polishing for mirror-reflection gloss, 100% waterproof SPC acoustic luxury wooden planks, and large-format porcelain slabs.',
      features: [
        'Italian Statuario & Botticino 7-stage diamond disc crystallization (50 to 3000 grit) for optical mirror gloss',
        '100% waterproof Stone Plastic Composite (SPC) click-lock planks with authentic oak/walnut grain embossing',
        'Integrated IXPE acoustic sound-dampening underlay for silent, comfortable walking feel',
        'Large-format 4x2, 6x4 & 8x4 jumbo porcelain slab installation with laser leveling clips',
        'Dual-component stain-proof, anti-fungal epoxy grouting with zero joint discoloration',
      ],
      specifications: [
        { label: 'Marble Polishing', value: '7-Stage Klindex Diamond Honing + Fluorosilicate Seal' },
        { label: 'SPC Wooden Planks', value: '5.5mm Rigid Stone Core + 0.5mm Commercial Wear Layer' },
        { label: 'Joint Technology', value: 'Dual-Component Stain-Proof Epoxy Grouting' },
        { label: 'Water & Termite Proof', value: '100% Waterproof & 100% Termite Resistant' },
      ],
      idealFor: 'Living halls, master bedrooms, dining rooms, entrance foyers & luxury renovations',
    },
    // 5. Wall Textures & Italian Stucco
    {
      id: 'textures',
      category: 'painting',
      pillar: 'painting',
      title: 'Artisan Wall Textures & Italian Stucco',
      badge: 'DESIGNER STATEMENT',
      highlightBadge: 'Handcrafted Lime Plaster',
      image: textureImg,
      description:
        'Authentic Italian Venetian stucco, rustic exposed concrete textures, metallic velvet, and Royale Play designer accent walls applied by specialized master artisans.',
      features: [
        'Hand-burnished Italian lime plaster & metallic gold/bronze leaf veining',
        'Seamless focal accent walls for living rooms, master beds & entrance foyers',
        'Washable, anti-microbial, and scratch-resistant protective wax sealer',
        'Custom color curation matched with your furniture upholstery and lighting scheme',
      ],
      specifications: [
        { label: 'Plaster Origin', value: 'Authentic Italian Lime & Marble Dust Plaster' },
        { label: 'Protective Finish', value: 'Carnauba & Synthetic Water-Repellent Wax' },
        { label: 'Washability', value: 'High Scrub Resistance (100% Washable)' },
        { label: 'Longevity', value: 'UV Stable & Anti-Microbial Formulations' },
      ],
      idealFor: 'Feature walls, entrance foyers, dining backdrops & luxury bed headboards',
    },
    // 6. Scientific Waterproofing & Seepage Defense
    {
      id: 'waterproofing',
      category: 'protection_kitchen',
      pillar: 'painting',
      title: 'Scientific Waterproofing & Seepage Defense',
      badge: 'STRUCTURAL PROTECTION',
      highlightBadge: 'Moisture Meter Diagnosis',
      image: exteriorImg,
      description:
        'Deep thermal and electronic moisture meter diagnosis, crack bridging, crystalline chemical injection, and multi-layer polymer membranes for enduring damp elimination.',
      features: [
        'Digital moisture scanning to isolate hidden pipeline leakages without breaking walls',
        'Efflorescence salt neutralizer & damp-barrier crystalline chemical injection',
        'Terrace, sunken bathroom & balcony elastomeric polymer waterproofing membranes',
        'Heavy monsoon water-repellent facade sealants engineered for coastal humidity',
      ],
      specifications: [
        { label: 'Diagnostic Tech', value: 'Non-Invasive Pinless Electronic Moisture Scanner' },
        { label: 'Barrier System', value: 'Crystalline Pore-Blocking Chemical Polymer' },
        { label: 'Membrane Type', value: 'Fiber-Reinforced High-Elastomeric Coating' },
        { label: 'Target Zones', value: 'Balconies, terraces, external walls & wet areas' },
      ],
      idealFor: 'Damp patches, peeling paint, coastal humidity, external wall seepage & terraces',
    },
    // 7. Exterior Weatherproof Painting
    {
      id: 'exterior-painting',
      category: 'protection_kitchen',
      pillar: 'painting',
      title: 'Exterior Weatherproof Painting',
      badge: 'MONSOON DEFENSE',
      highlightBadge: 'Elastomeric Anti-Crack',
      image: exteriorImg,
      description:
        'High-elasticity silicone elastomeric coatings engineered to bridge hairline cracks, resist black fungal and algal growth, and withstand heavy monsoon downpours and UV exposure.',
      features: [
        'High-pressure power washing to strip legacy soot, grime, and fungal spores',
        'Crack bridging with fiber-reinforced flexible polymer sealants',
        'Asian Paints Apex Ultima Protek / Berger Weathercoat exterior coating systems',
        'Full scaffolding safety compliance, safety harnesses, and supervisor tracking',
      ],
      specifications: [
        { label: 'Paint System', value: 'Asian Paints Apex Ultima Protek / Berger Weathercoat' },
        { label: 'Surface Preparation', value: 'Industrial High-Pressure Jet Power Wash' },
        { label: 'Crack Repair', value: 'Flexible Fiber-Reinforced Polymer Compound' },
        { label: 'Weather Rating', value: 'Heavy Monsoon Rain, Salt Air & UV Resistant' },
      ],
      idealFor: 'Bungalows, residential cooperative societies, villas & commercial buildings',
    },
    // 8. Modular Kitchen
    {
      id: 'modular-kitchen',
      category: 'protection_kitchen',
      pillar: 'furniture',
      title: 'Turnkey Modular Kitchens',
      badge: 'TURNKEY ARCHITECTURE',
      highlightBadge: 'Marine Ply & Quartz Counter',
      image: kitchenImg,
      description:
        'Ergonomic, modern modular kitchens crafted with boiling waterproof BWP marine ply, factory-pressed acrylic or PU shutters, Hafele soft-close drawers, and quartz counters.',
      features: [
        'Factory-finished seamless matte acrylic & PU lacquer shutters with zero edge-banding seams',
        'IS:710 BWP Marine Ply carcass with waterproof edge-sealing against kitchen steam and grease',
        'Heavy-duty Hafele/Blum tandem drawers, tall pantry units, and corner magic carousels',
        'Kalinga stone & nano-white quartz seamless stain-proof countertop fabrication',
      ],
      specifications: [
        { label: 'Carcass Ply', value: 'IS:710 Boiling Water Proof (BWP) Marine Ply' },
        { label: 'Shutter Finishes', value: 'Factory-Pressed Matte Acrylic & PU Lacquer' },
        { label: 'Hardware Systems', value: 'Hafele / Blum Soft-Close Tandem Drawers' },
        { label: 'Countertop', value: 'Stain-Resistant Kalinga Quartz & Nano-White Stone' },
      ],
      idealFor: 'New apartments, kitchen makeovers, duplexes & complete interior fit-outs',
    },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter((s) => s.category === activeTab);

  // Detailed Specifications for the 4 Main Pillars
  const craftsmanshipPillars = {
    painting: {
      title: 'Master House Painting & Finishes',
      subtitle: 'Mechanized Precision & Asian Paints Royale Standards',
      points: [
        { label: 'Surface Prep', detail: 'Mechanized suction sanding that captures fine plaster particles, followed by acrylic micro-putty.' },
        { label: 'Moisture Testing', detail: 'Non-invasive digital laser moisture audit of every wall before applying primer.' },
        { label: 'Paints Used', detail: 'Asian Paints Royale Aspira, Berger Silk Luxury, and Italian Venetian lime plaster.' },
        { label: 'Site Masking', detail: 'Full protective plastic tarps for Italian marble, vitrified tiles, furniture, and switchboards.' },
      ],
    },
    sofa: {
      title: 'SOFA Section: Luxury Seating & Upholstery',
      subtitle: 'Handcrafted Teak Frames & 40+ HR Ergonomic Foam',
      points: [
        { label: 'Solid Core Frame', detail: 'Kiln-treated seasoned Malaysian pinewood & CP teak timber with 10-year anti-sag guarantee.' },
        { label: 'Ergonomic Foam', detail: '40+ High Resilience (HR) virgin foam core topped with breathable supersoft feather wrap.' },
        { label: 'Imported Fabrics', detail: 'Liquid-repellent Italian velvets, textured bouclé, and top-grain genuine Nappa leathers.' },
        { label: 'Bespoke Configurations', detail: 'Modular L-shape sectionals, motorized recliners, Chesterfield button-tufting & chaise lounges.' },
      ],
    },
    furniture: {
      title: 'FURNITURE Section: Architectural Carpentry',
      subtitle: '100% BWP Marine Ply IS:710 & German Hardware',
      points: [
        { label: 'Core Structure', detail: '100% boiling waterproof BWP IS:710 Marine Ply and calibrated Gurjan core.' },
        { label: 'Hydraulic Beds', detail: 'Heavy-duty German gas struts, concealed storage compartments, and upholstered acoustic headboards.' },
        { label: 'Sliding Wardrobes', detail: 'Floor-to-ceiling tinted fluted glass shutters, sensor warm LED strip profiles, and Hafele dampers.' },
        { label: 'Entertainment Walls', detail: 'Floating TV credentials with acoustic CNC fluted louvers and concealed audio/cable conduits.' },
      ],
    },
    flooring: {
      title: 'FLOORING Section: Marble Polish & SPC Wood',
      subtitle: '7-Stage Diamond Crystallization & Waterproof Planks',
      points: [
        { label: 'Italian Marble Polish', detail: '7-stage Klindex diamond disc grinding (50 to 3000 grit) and fluorosilicate crystallization.' },
        { label: 'SPC Wooden Planks', detail: 'Stone Plastic Composite rigid core planks with 0.5mm wear layer; 100% waterproof & click-lock.' },
        { label: 'Acoustic Comfort', detail: 'Integrated IXPE acoustic underlay for silent footsteps and superior sound insulation.' },
        { label: 'Epoxy Grouting', detail: 'Dual-component stain-proof, anti-fungal epoxy grout with zero yellowing or joint shrinkage.' },
      ],
    },
  };

  return (
    <section id="services" className="py-20 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-3">
              <Paintbrush className="w-3.5 h-3.5 text-[#009FE3]" />
              <span className="font-semibold text-white">Comprehensive Interior Solutions</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Painting, Sofas, Furniture & Flooring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Our Signature Services & Craftsmanship
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              From mechanized house painting and Italian stuccos to custom-tailored sofas, master bedroom carpentry, and mirror-finish marble polishing — every service is executed with rigorous material standards.
            </p>
          </div>

          {/* Filter Tabs - Equal prominence across key disciplines */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({services.length})
            </button>
            <button
              onClick={() => setActiveTab('painting')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'painting'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Painting & Walls
            </button>
            <button
              onClick={() => setActiveTab('sofa')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'sofa'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SOFA Section
            </button>
            <button
              onClick={() => setActiveTab('furniture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'furniture'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Furniture Section
            </button>
            <button
              onClick={() => setActiveTab('flooring')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'flooring'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Flooring Section
            </button>
            <button
              onClick={() => setActiveTab('protection_kitchen')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'protection_kitchen'
                  ? 'bg-[#009FE3] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Waterproofing & Kitchen
            </button>
          </div>
        </div>

        {/* The Sahani Quality Standard Benchmark Banner */}
        <div className="mb-12 bg-gradient-to-r from-slate-900 via-[#0a1224] to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#009FE3]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The Sahani Quality Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Engineered for Durability, Craftsmanship & Clean Living
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether applying velvet Royale finishes, building hydraulic storage beds, crafting bespoke Italian velvet sectionals, or polishing marble, our team adheres to strict material benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:w-96 shrink-0 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Clean Sanding Tech</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Vacuum extractors absorb plaster particles directly at the surface.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-[#009FE3] font-bold flex items-center gap-1.5 mb-1">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Moisture Tested</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Digital probe scanning checks walls before painting begins.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-amber-400 font-bold flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Total Masking</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Floors, tiles, wardrobes, and electronics taped securely.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-[#E5007D] font-bold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Genuine Materials</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Factory-sealed paint cans, BWP IS:710 ply & 40+ HR foam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with Rich Architectural Details for ALL services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-bold shadow-md bg-slate-950/80 border border-slate-700/80 text-white backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-slate-950/80 px-2.5 py-0.5 rounded border border-slate-700/80 backdrop-blur-sm">
                    {service.highlightBadge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#009FE3] transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#009FE3] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* In-Depth Architectural Specification Table */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Technical Specifications
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      {service.specifications.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                          <span className="text-slate-400 text-[10px] block leading-tight">{spec.label}</span>
                          <span className="text-white font-medium text-[11px] mt-0.5 block leading-snug">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                    <span className="text-slate-500">Ideal for:</span> {service.idealFor}
                  </div>

                  <a
                    href="#quotation"
                    className="text-xs font-semibold text-[#009FE3] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Quotation Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Craftsmanship Pillar Deep Dive */}
        <div className="mt-16 bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#009FE3] block mb-1 font-semibold">
              Deep Craftsmanship Breakdown
            </span>
            <h3 className="text-2xl font-bold text-white font-display">
              Explore Our Core Disciplines in Detail
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select a service below to review the structural timber, cushioning, diamond grit stages, and paint emulsions we use.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveSpecPillar('painting')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecPillar === 'painting'
                  ? 'bg-[#009FE3] text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Paintbrush className="w-3.5 h-3.5" />
              <span>House Painting</span>
            </button>
            <button
              onClick={() => setActiveSpecPillar('sofa')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecPillar === 'sofa'
                  ? 'bg-[#009FE3] text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Armchair className="w-3.5 h-3.5" />
              <span>SOFA Section</span>
            </button>
            <button
              onClick={() => setActiveSpecPillar('furniture')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecPillar === 'furniture'
                  ? 'bg-[#009FE3] text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Hammer className="w-3.5 h-3.5" />
              <span>Furniture Section</span>
            </button>
            <button
              onClick={() => setActiveSpecPillar('flooring')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecPillar === 'flooring'
                  ? 'bg-[#009FE3] text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Gem className="w-3.5 h-3.5" />
              <span>Flooring Section</span>
            </button>
          </div>

          {/* Active Pillar Details Card */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
              <div>
                <h4 className="text-lg font-bold text-white font-display">
                  {craftsmanshipPillars[activeSpecPillar].title}
                </h4>
                <p className="text-xs text-[#009FE3] font-medium mt-0.5">
                  {craftsmanshipPillars[activeSpecPillar].subtitle}
                </p>
              </div>
              <a
                href="#quotation"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white self-start sm:self-auto transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {craftsmanshipPillars[activeSpecPillar].points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-1.5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                    {pt.label}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
