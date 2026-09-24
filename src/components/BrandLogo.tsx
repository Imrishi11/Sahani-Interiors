import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
          {/* Authentic Stylized Paint Roller & Can Icon */}
          <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cyan Roller */}
            <rect x="24" y="16" width="52" height="15" rx="4" fill="#009FE3" />
            <path d="M50 31V45H28V52" stroke="#009FE3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Cyan Brush */}
            <path d="M22 55H34V76C34 78 32 80 30 80H26C24 80 22 78 22 76V55Z" fill="#009FE3" />
            <rect x="24" y="80" width="8" height="14" rx="2" fill="#0077aa" />

            {/* Magenta Paint Can with Drips */}
            <rect x="44" y="44" width="38" height="42" rx="6" fill="#E5007D" />
            <path d="M44 44H82V56C82 56 78 64 74 64C70 64 68 56 64 56C60 56 58 66 54 66C50 66 48 58 44 58V44Z" fill="#ffffff" opacity="0.9" />
            <ellipse cx="63" cy="44" rx="19" ry="5" fill="#f43f94" />
            <path d="M82 52C87 52 90 56 90 64C90 72 87 76 82 76" stroke="#E5007D" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-black tracking-tight text-lg leading-tight text-[#009FE3]">
            SAHANI <span className="text-white">INTERIORS</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.18em] text-[#E5007D] uppercase">
            Your Thoughts, Our Creation
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {/* High-fidelity Vector recreation of the authentic Sahani Interiors logo */}
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 280 120"
          className="h-12 w-auto object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paint Roller Frame & Roller */}
          <g>
            {/* Cyan Roller Head */}
            <rect x="75" y="8" width="130" height="26" rx="6" fill="#009FE3" />
            {/* Metal arm of roller */}
            <path
              d="M75 21H50V56H115V72"
              stroke="#009FE3"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cyan Paint Brush */}
            <path
              d="M85 70H125C125 70 125 94 125 104C125 107 122 109 119 109H91C88 109 85 107 85 104V70Z"
              fill="#009FE3"
            />
            <path d="M92 90V105M105 88V105M118 90V105" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="98" y="109" width="14" height="25" rx="3" fill="#0077aa" />

            {/* Magenta Paint Bucket / Can */}
            <g transform="translate(130, 38)">
              {/* Can body */}
              <rect x="0" y="8" width="92" height="74" rx="8" fill="#E5007D" />
              {/* Rim */}
              <ellipse cx="46" cy="8" rx="46" ry="9" fill="#ff2d97" />
              {/* White dripping paint */}
              <path
                d="M0 12C12 12 16 32 26 32C36 32 40 18 50 18C60 18 64 36 74 36C84 36 88 20 92 20V8H0V12Z"
                fill="#ffffff"
              />
              {/* Drip teardrops */}
              <circle cx="26" cy="38" r="3" fill="#ffffff" />
              <circle cx="74" cy="42" r="3" fill="#ffffff" />
              {/* Handle */}
              <path
                d="M92 20C104 20 110 32 110 46C110 60 102 68 92 68"
                stroke="#E5007D"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="92" cy="22" r="4" fill="#ffffff" />
            </g>
          </g>
        </svg>

        <div className="flex flex-col">
          <div className="font-display font-black text-xl md:text-2xl tracking-[0.08em] text-[#009FE3] leading-none uppercase">
            SAHANI <span className="text-white">INTERIORS</span>
          </div>
          <div className="text-[10px] md:text-[11px] font-extrabold tracking-[0.22em] text-[#E5007D] uppercase mt-1">
            YOUR THOUGHTS, OUR CREATION
          </div>
        </div>
      </div>
    </div>
  );
};
