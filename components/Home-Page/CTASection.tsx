'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Outfit } from 'next/font/google';
import Link from 'next/link';
import { homeStyles } from './styles';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const CTASection = () => {
    return (
        <div className={`flex justify-center w-full bg-white`}>
            {/* Main Container */}
            <div
                className={`${homeStyles.container} min-h-[300px] md:h-[384px] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-12 md:py-0 rounded-2xl md:rounded-3xl lg:rounded-[32px] my-10 md:my-16 lg:my-20`}
                style={{
                    background: 'linear-gradient(164.07deg, #000000 2.76%, #3C8ECB 90.37%)',
                    boxShadow: '0 20px 50px rgba(60, 142, 203, 0.25)'
                }}
            >
                {/* Decorative Circle - Top Right */}
                <motion.div
                    className="absolute w-[80px] h-[80px] md:w-[128px] md:h-[128px] rounded-full bg-white/10 hidden sm:block"
                    style={{ right: '40px', top: '30px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Decorative Circle - Bottom Left */}
                <motion.div
                    className="absolute w-[60px] h-[60px] md:w-[96px] md:h-[96px] rounded-full bg-[#EDEDED]/15 hidden sm:block"
                    style={{ left: '40px', bottom: '40px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                />

                {/* --- Content Wrapper (Centered) --- */}
                <motion.div
                    className="relative z-10 flex flex-col items-center text-center px-4 will-change-transform"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >

                    {/* Heading */}
                    <h2 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-black mb-4 md:mb-6 max-w-[905px] font-[family-name:var(--font-red-hat)]">
                        Let's Build Your Next Software Experience
                    </h2>

                    {/* Subtext */}
                    <p className="text-[#E5E7EB] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] font-medium mb-6 md:mb-9 max-w-[617px] font-[family-name:var(--font-red-hat)]">
                        Ready to transform your ideas into powerful software solutions? Let's discuss your project and create something amazing together.
                    </p>

                    {/* Buttons Container */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                    >

                        {/* Primary Button: Start Your Project */}
                        <Link href="/enquiry" className="w-full sm:w-auto">
                            <button
                                className="w-full sm:w-[180px] md:w-[192px] h-[48px] md:h-[52px] flex items-center justify-center bg-[#3C8ECB] text-white rounded-full transition-transform hover:scale-105 active:scale-95 text-[14px] md:text-[16px] font-normal"
                                style={{ boxShadow: '0px 2px 19.9px rgba(255, 255, 255, 0.52)' }}
                            >
                                Start Your Project
                            </button>
                        </Link>

                        {/* Secondary Button: Schedule a Call */}
                        <Link href="/enquiry" className="w-full sm:w-auto">
                            <button
                                className="w-full sm:w-[160px] md:w-[177px] h-[48px] md:h-[52px] flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-[14px] md:text-[16px] font-normal"
                            >
                                Schedule a Call
                            </button>
                        </Link>

                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default CTASection;
