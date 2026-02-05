'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
  fontSize?: string;
}

const Statistics: React.FC = () => {
  const stats: Stat[] = [
    { label: 'ACTIVE CLIENTS', value: '8+', fontSize: '45px' },
    { label: 'PROJECTS DONE', value: '100+', fontSize: '45px' },
    { label: 'TEAM ADVISORS', value: '10+', fontSize: '45px' },
    { label: 'GLORIOUS YEARS', value: '10+', fontSize: '45px' },
  ];

  return (
    <div className="w-full flex justify-center relative z-20 px-4 -mt-8 sm:-mt-10 lg:-mt-14 -mb-10 sm:-mb-12 lg:-mb-16">
      <div className="relative w-full max-w-[1200px] min-h-[140px] sm:min-h-[150px] lg:min-h-[180px]">
        {/* Background Layers */}
        <div
          className="absolute inset-0 rounded-tl-[24px] lg:rounded-tl-[48px] rounded-br-[24px] lg:rounded-br-[48px] overflow-hidden"
          style={{
            boxShadow: '0px 4px 100px 40px rgba(209, 213, 219, 0.36)'
          }}
        >
          {/* Layer 1: Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)'
            }}
          />

          {/* Layer 2: Image Normal */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/About-Us/stats-background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
              opacity: 0.5
            }}
          />

          {/* Layer 3: Image Flipped */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/About-Us/stats-background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'rotate(180deg)',
              mixBlendMode: 'overlay',
              opacity: 0.5
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 grid grid-cols-2 lg:grid-cols-4 h-full items-center py-4 sm:py-5 lg:py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center py-2 sm:py-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
            >
              <span
                className="font-bold uppercase text-[10px] sm:text-[11px] lg:text-[14px] mb-1 sm:mb-2 lg:mb-2 tracking-wider"
                style={{
                  fontFamily: 'var(--font-red-hat)',
                  color: '#E5E7EB',
                }}
              >
                {stat.label}
              </span>
              <span
                className="font-bold text-[24px] sm:text-[30px] lg:text-[40px]"
                style={{
                  fontFamily: 'var(--font-red-hat)',
                  background: 'linear-gradient(90deg, #E5E7EB 0%, #3C8ECB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;