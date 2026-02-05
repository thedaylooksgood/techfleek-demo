'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700', '800'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface ValueCard {
  number: string;
  title: string;
  description: string;
  decorationType: 'corner-triangle' | 'bottom-bar' | 'right-panel';
}

const CoreValues: React.FC = () => {
  const values: ValueCard[] = [
    {
      number: '1',
      title: 'Radical Integrity',
      description: 'Our people truly care for our work and for each other.',
      decorationType: 'corner-triangle',
    },
    {
      number: '2',
      title: 'People First',
      description: 'We believe that a culture will build a thriving company.',
      decorationType: 'bottom-bar',
    },
    {
      number: '3',
      title: 'Process Perfection',
      description: "We're driven to becoming the best version of ourselves.",
      decorationType: 'right-panel',
    },
  ];

  // Ultra-lightweight animation variants - no spring physics
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="w-full relative z-30 px-4 md:px-8 pointer-events-none">
      {/* 
         Wrapper positioning:
         Desktop: Negative top margin to overlap 'Who We Are' by ~30%
         Mobile: Negative top margin calculate to position:
           - Card 1: inside Who We Are
           - Card 2: 50% split
           - Card 3: inside Why Choose Us
         Assuming Card Height ~160px + Gap 20px. 3 Cards ~520px height.
         We need the Middle Card (Card 2) center to be at the boundary (y=0 relative to flow).
         So we need to shift UP by (Card 1 H + Gap + Half Card 2 H).
         Roughly 160 + 20 + 80 = 260px UP.
         Let's try -mt-[260px] on mobile.
      */}
      <div className="max-w-[1100px] mx-auto -mt-[250px] lg:-mt-[50px] mb-[30px] lg:-mb-[100px]">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-5 lg:gap-6 justify-center items-stretch pointer-events-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-xl overflow-hidden shadow-2xl w-full lg:w-1/3 min-h-[140px] lg:min-h-[160px] p-5 flex flex-col justify-center group transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_15px_30px_rgba(60,142,203,0.25)]"
            >
              {/* Decorative Backgrounds - Scaled Down */}
              {value.decorationType === 'corner-triangle' && (
                <div className="absolute top-0 right-0 w-20 h-20 opacity-80 pointer-events-none transition-transform group-hover:scale-110 duration-500">
                  <img src="/About-Us/corner-triangle.svg" alt="" className="w-full h-full object-contain object-top-right" />
                </div>
              )}
              {value.decorationType === 'bottom-bar' && (
                <div className="absolute bottom-0 right-0 w-28 h-8 opacity-80 pointer-events-none transition-transform group-hover:translate-x-2 duration-500">
                  <img src="/About-Us/bottom-gradient.svg" alt="" className="w-full h-full object-contain object-bottom-right" />
                </div>
              )}
              {value.decorationType === 'right-panel' && (
                <div className="absolute top-0 right-0 w-24 h-20 opacity-80 pointer-events-none transition-transform group-hover:rotate-3 duration-500">
                  <img src="/About-Us/right-panel-gradient.svg" alt="" className="w-full h-full object-contain object-top-right" />
                </div>
              )}

              {/* Number Badge - Smaller */}
              <div className="absolute top-4 left-4 lg:top-5 lg:left-5 w-9 h-9 lg:w-11 lg:h-11 bg-[#3C8ECB] rounded-full flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110 duration-300">
                <span className={`${redHat.className} text-white font-extrabold text-base lg:text-lg`}>
                  {value.number}
                </span>
              </div>

              {/* Content - Adjusted Padding & Fonts */}
              <div className="pl-12 lg:pl-14 relative z-10">
                <h3 className={`${redHat.className} text-black font-bold text-[17px] lg:text-[19px] tracking-wide mb-1.5 group-hover:text-[#3C8ECB] transition-colors`}>
                  {value.title}
                </h3>
                <p className={`${inter.className} text-black font-medium text-[13px] lg:text-[15px] leading-relaxed`}>
                  {value.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CoreValues;