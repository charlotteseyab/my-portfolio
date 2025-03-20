import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-4">
      {/* Hexagon Pattern Background */}
      {/* <div className="absolute inset-0 bg-[#1E293B]">
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" width="100%" height="100%">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M25 0L50 14.4v28.8L25 43.4L0 43.4V14.4z" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div> */}

      {/* Main Content */}
      <div className="relative">
        {/* Animated Line */}
        <div className="max-w-xl mx-auto px-4 mb-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A55C] to-transparent relative">
            <div className="absolute top-0 left-0 w-1/2 h-full">
              <div className="w-full h-full bg-gradient-to-r from-transparent to-[#C6A55C] animate-[glow_2s_ease-in-out_infinite]" />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <div className="w-full h-full bg-gradient-to-l from-transparent to-[#C6A55C] animate-[glow_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            {/* Monogram */}
            <div className="mb-6 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center border border-gray-800">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] bg-clip-text text-transparent">
                  CS
                </span>
              </div>
            </div>

            {/* Copyright Text */}
            <div className="relative">
              <div className="flex items-center justify-center space-x-3 text-sm">
                <span className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-[#C6A55C]/20 to-[#E5D4A1]/20 blur-sm rounded-full" />
                  <span className="relative text-[#C6A55C]">© {currentYear}</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C6A55C]/50" />
                <span className="font-medium text-white">Charlotte M Seyab</span>
                <span className="w-1 h-1 rounded-full bg-[#C6A55C]/50" />
                <span className="text-gray-400">All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Add these keyframes to your global CSS or Tailwind config
const styles = {
  "@keyframes glow": {
    "0%, 100%": { opacity: 0.5 },
    "50%": { opacity: 1 }
  }
};

export default Footer;