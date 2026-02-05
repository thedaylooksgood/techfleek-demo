'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Statistics: React.FC = () => {
  return (
    <div
      className="w-full bg-black flex justify-center relative z-20 -mt-8 md:-mt-12 lg:-mt-16 mb-0 pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 px-4"
    >
      <div
        className="relative w-full max-w-[1100px] min-h-[120px] md:min-h-[140px] lg:min-h-[160px] py-4 md:py-6"
      >
        {/* Background Layers */}
        <div
          className="absolute inset-0 rounded-tl-2xl rounded-br-2xl md:rounded-tl-3xl md:rounded-br-3xl overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0px 10px 40px rgba(209, 213, 219, 0.36)'
          }}
        >
          {/* Layer 1: Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#3C8ECB] to-[#000000]"
          />

          {/* Layer 2: Image Normal */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
            style={{
              backgroundImage: 'url(/About-Us/stats-background.png)',
            }}
          />

          {/* Layer 3: Image Flipped */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay rotate-180"
            style={{
              backgroundImage: 'url(/About-Us/stats-background.png)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 space-y-3 md:space-y-4">
          <h2
            className="text-white font-bold leading-tight text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px]"
            style={{
              fontFamily: 'var(--font-red-hat)',
            }}
          >
            Your Product, Effortlessly Usable From Insight to<br className="hidden md:block" />Interface in Weeks
          </h2>

          <Link
            href="/CaseStudy"
            className="group flex items-center gap-2 bg-[#3C8ECB] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full transition-transform hover:scale-105 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
            style={{
              fontFamily: 'var(--font-outfit)',
            }}
          >
            See More Projects
            <div className="bg-black rounded-full p-0.5 md:p-1 transition-transform group-hover:translate-x-1">
              <ArrowRight size={12} className="text-white w-2.5 h-2.5 md:w-3 md:h-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Statistics;