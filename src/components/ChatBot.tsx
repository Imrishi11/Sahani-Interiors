import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Phone } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  timestamp: string;
}

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose?: () => void;
  onOpenEnquiry: (service?: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onToggle, onClose, onOpenEnquiry }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Welcome to Sahani Interiors. I am Your Assistant. How can we help create your dream space today?',
      options: [
        'House Painting Services',
        'Luxury Sofas & Upholstery',
        'Bespoke Furniture & Beds',
        'Flooring & Marble Polishing',
        'Italian Wall Textures',
        'Scientific Waterproofing',
      ],
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [leadCaptured, setLeadCaptured] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateBotReply = (userText: string): { reply: string; options?: string[] } => {
    const text = userText.toLowerCase();

    // Check for phone number
    const phoneMatch = userText.match(/\b[6-9]\d{9}\b/);
    if (phoneMatch) {
      setUserPhone(phoneMatch[0]);
      setLeadCaptured(true);
      return {
        reply: `Thank you! I have registered your contact number (+91-${phoneMatch[0]}). Our project supervisor will call you shortly to discuss your home painting or interior requirements. Please feel free to share your property address below!`,
        options: ['House Painting Services', 'PU Polish & Finishes', 'Call 8956216889'],
      };
    }

    if (text.includes('pu') || text.includes('pu polish') || text.includes('polyurethane')) {
      return {
        reply: `We specialize in Italian PU (Polyurethane) Polish for doors, wooden veneers, and fine cabinetry! Available in 100% mirror High-Gloss and deep Satin Matte finishes. It provides non-yellowing UV resistance, heat shielding, and superior scratch protection.`,
        options: ['High-Gloss PU', 'Matte PU Polish', 'Request PU Quote'],
      };
    }

    if (text.includes('hand polish') || text.includes('french polish') || text.includes('spirit polish') || text.includes('teak polish')) {
      return {
        reply: `Our Hand Polish is executed by traditional master artisans using genuine French spirit and dewaxed shellac rubbing. It brings out the authentic deep amber grain of natural Burma teak and rosewood, topped with an optional protective melamine sealer.`,
        options: ['Teak Wood Hand Polish', 'French Spirit Polish', 'Call 8956216889'],
      };
    }

    if (text.includes('lamination') || text.includes('laminate') || text.includes('laminating')) {
      return {
        reply: `We provide precision architectural surface lamination using 1.0mm to 1.5mm high-pressure decorative sheets (Merino, Century, Greenlam) with bubble-free cold-press bonding and factory machine PVC edge-banding against moisture ingress.`,
        options: ['Matte & Fluted Laminates', 'Acrylic Lamination', 'Book Site Measurement'],
      };
    }

    if (text.includes('decco') || text.includes('deco') || text.includes('duco')) {
      return {
        reply: `Our Decco (Duco) Spray Paint delivers an automotive-grade, porcelain-smooth lacquer finish with zero brushmarks or roller orange-peel. Ideal for interior flush doors, MDF CNC jali partitions, French wall moldings, and vanity cabinetry.`,
        options: ['White Satin Decco', 'High-Gloss Duco Finish', 'Request Decco Quote'],
      };
    }

    if (text.includes('paint') || text.includes('colour') || text.includes('color') || text.includes('stucco') || text.includes('texture')) {
      return {
        reply: `House painting is our signature discipline! We deliver mechanized precision sanding with high-suction vacuum extractors, full plastic masking of your furniture and floors, laser moisture verification, and smooth coats of Asian Paints Royale or Berger Silk. We also provide PU Polish, Hand Polish, Lamination, Decco, and Italian Venetian stucco.`,
        options: ['Asian Paints Royale Finishes', 'PU Polish & Decco', 'Italian Stucco Textures', 'Book Site Visit'],
      };
    }

    if (text.includes('sofa') || text.includes('upholstery') || text.includes('couch') || text.includes('recliner')) {
      return {
        reply: `Our SOFA section crafts handcrafted luxury seating tailored to your living room dimensions! We use solid treated teak/pinewood frames, 40+ high-resilience ergonomic foam, and imported Italian anti-stain velvet or genuine Nappa leather. We also do complete master re-upholstery.`,
        options: ['Curated Velvet Swatches', 'L-Shape Sectionals', 'Recliner Mechanisms'],
      };
    }

    if (text.includes('furniture') || text.includes('wardrobe') || text.includes('bed') || text.includes('woodwork') || text.includes('dining')) {
      return {
        reply: `Our bespoke FURNITURE section specializes in master architectural carpentry: custom hydraulic storage beds with upholstered headboards, floor-to-ceiling sliding wardrobes with fluted glass & sensor LEDs, floating TV entertainment consoles, and dining tables. We use 100% termite-proof IS:710 Marine Ply and Hafele/Blum hardware.`,
        options: ['Hydraulic Beds', 'Sliding Wardrobes', 'Floating TV Units'],
      };
    }

    if (text.includes('flooring') || text.includes('marble') || text.includes('polish') || text.includes('tile') || text.includes('spc')) {
      return {
        reply: `Our FLOORING section offers 7-stage Italian diamond disc crystallization polishing for mirror-finish marble restoration, along with 100% waterproof click-lock SPC luxury wooden planks and large-format vitrified tiles with epoxy grouting.`,
        options: ['Marble Diamond Polish', 'SPC Waterproof Wood', 'Large Porcelain Slabs'],
      };
    }

    if (text.includes('kitchen') || text.includes('modular')) {
      return {
        reply: `Sahani Interiors crafts ergonomic turnkey modular kitchens! We use boiling waterproof BWP IS:710 Marine Ply, factory-pressed acrylic/PU shutters, Hafele/Blum soft-close tandem boxes, and quartz counters.`,
        options: ['Acrylic Shutters', 'Pantry Organizers', 'Quartz Counters'],
      };
    }

    if (text.includes('waterproof') || text.includes('damp') || text.includes('leak') || text.includes('seepage')) {
      return {
        reply: `We provide scientific moisture diagnosis using non-destructive electronic moisture meters to pinpoint hidden pipeline leaks, followed by efflorescence neutralization and crystalline damp-block barrier polymers.`,
        options: ['Moisture Meter Audit', 'Terrace Waterproofing', 'Anti-Damp Treatment'],
      };
    }

    if (text.includes('email') || text.includes('mail')) {
      return {
        reply: `You can email our design & estimation team directly at: sahaniinteriors98@gmail.com. We respond within hours with initial consultations, material catalogs, and estimates.`,
        options: ['Call 8956216889', 'Custom Quotation Form'],
      };
    }

    if (text.includes('whatsapp')) {
      return {
        reply: `You can directly message Rishi Sahani and the senior interior team on WhatsApp at +91 8956216889 for immediate quotes, catalog photos, and scheduling.`,
        options: ['Call 8956216889', 'Our Studio Address'],
      };
    }

    if (text.includes('quote') || text.includes('quotation') || text.includes('cost') || text.includes('price')) {
      return {
        reply: `Every home is unique! To receive an itemized, custom quotation, please head over to our Custom Quotation section below, or share your phone and address right here in chat.`,
        options: ['House Painting Services', 'PU Polish & Finishes', 'Call 8956216889'],
      };
    }

    if (text.includes('address') || text.includes('office') || text.includes('location')) {
      return {
        reply: `Our headquarters is at: 704, C-Wing, Shri Krishna Heights, Royal Garden Complex, Virar West - 401303, Maharashtra. MSME Reg. No: UDYAM-MH-18-0320878.\nDirect Contact: 8956216889 | Email: sahaniinteriors98@gmail.com`,
        options: ['Call 8956216889', 'House Painting Services'],
      };
    }

    return {
      reply: `I can assist with our house painting, PU Polish, Hand Polish, Lamination, Decco finish, Italian textures, custom sofas, bespoke woodwork, and marble polishing. What service would you like to explore?`,
      options: ['House Painting & Polishing', 'PU & Decco Finishes', 'Luxury Sofas', 'Bespoke Furniture'],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    if (messageText.includes('Call 8956216889') || messageText === 'Call 8956216889') {
      window.location.href = 'tel:8956216889';
      return;
    }

    if (messageText === 'Book Site Visit' || messageText === 'Book Free Measurement') {
      onOpenEnquiry('Free Measurement & Site Inspection');
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotReply(messageText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.reply,
        options: response.options,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      onToggle();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 p-3 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-[#009FE3] to-[#E5007D] text-white shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer group"
        aria-label="Open Your Assistant"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">Your Assistant</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-[#080c15] p-3.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#009FE3] to-[#E5007D] flex items-center justify-center text-white shadow-md">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-bold text-white font-display">Your Assistant</h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[10px] text-slate-400 font-mono">MSME: UDYAM-MH-18-0320878</p>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close Assistant"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#080c15]/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-[#009FE3] to-[#0284c7] text-white rounded-br-xs'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-xs'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
            </div>

            {/* Quick Action Options */}
            {msg.options && msg.options.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(opt)}
                    className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#009FE3] hover:text-[#009FE3] text-slate-300 transition-colors cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs w-20">
            <span className="w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-2.5 bg-[#080c15] border-t border-slate-800 flex items-center gap-1.5"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about painting, shades, sofas, woodwork..."
          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#009FE3]"
        />
        <button
          type="submit"
          className="p-2 bg-gradient-to-r from-[#009FE3] to-[#E5007D] text-white rounded-lg hover:opacity-95 cursor-pointer shadow-md"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
