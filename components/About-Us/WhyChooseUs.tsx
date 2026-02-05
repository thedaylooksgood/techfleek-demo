'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';
import { CheckCircle2 } from 'lucide-react';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

const WhyChooseUs: React.FC = () => {
  const features = [
    'UI/UX Design & Research',
    'Frontend Development',
    'Backend & API Integration',
    'Performance Optimization',
    'Custom Software Solutions',
  ];

  return (
    <div className="w-full bg-black pt-25 pb-16 lg:pt-30 lg:pb-24 relative overflow-hidden flex justify-center transform-gpu">

      {/* Optimized Background Ambience - Reduced Blur Radius */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#3C8ECB] rounded-full blur-[100px] opacity-[0.08] translate-z-0"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1250px] relative z-10">

        {/* Optimized Glass Container - Reduced Blur from 3xl to xl */}
        <div className="relative bg-[#0A0A0A]/95 backdrop-blur-xl rounded-3xl p-6 md:p-10 lg:p-14 overflow-hidden shadow-2xl ring-1 ring-white/10 translate-z-0">

          {/* Static Border instead of gradient div for performance */}
          {/* <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div> */}

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left: Content */}
            <div className="w-full lg:w-[55%] text-left">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-[2px] bg-gradient-to-r from-[#3C8ECB] to-transparent"></div>
                  <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.25em] text-xs uppercase`}>
                    WHY CHOOSE US
                  </span>
                </div>

                <h2 className={`${redHat.className} text-white text-3xl md:text-4xl lg:text-[44px] font-black leading-[1.1] mb-6`}>
                  Your Trusted Partner for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-500">
                    Software, UI/UX, and Web
                  </span>
                </h2>

                <p className={`${inter.className} text-gray-300 text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-lg font-normal opacity-90 border-l-2 border-white/10 pl-4`}>
                  From intuitive UI/UX design to robust software solutions to seamless website development, our team of experts crafts digital experiences that combine creativity, technology, and performance.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {features.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.04, duration: 0.25, ease: "easeOut" }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 cursor-default hover:scale-[1.02] hover:bg-[rgba(60,142,203,0.15)]"
                    >
                      <CheckCircle2 size={16} className="text-[#3C8ECB] flex-shrink-0" strokeWidth={3} />
                      <span className={`${inter.className} text-[13px] md:text-[14px] font-semibold text-white tracking-wide`}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Image - Removed heavy drop-shadow filter */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[380px] md:max-w-[440px] will-change-transform"
              >
                {/* CSS Blur is cheaper than filter: drop-shadow */}
                <div className="absolute inset-0 bg-[#3C8ECB] opacity-20 blur-[60px] rounded-full transform translate-y-4"></div>

                <Image
                  src="/About-Us/why-choose-us-illustration.png"
                  alt="Why Choose Us Illustration"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto object-contain transform translate-z-0"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;