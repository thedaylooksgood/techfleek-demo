'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Outfit } from 'next/font/google';
import Link from 'next/link';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface ServiceDetailCTAProps {
    title?: string;
    description?: string;
}

export default function ServiceDetailCTA({
    title = "Let's Build Your Next Software Experience",
    description = "Ready to transform your ideas into powerful software solutions? Let's discuss your project and create something amazing together.",
}: ServiceDetailCTAProps) {
    return (
        <div className={`flex justify-center w-full bg-gray-900 ${outfit.className}`}>
            <div
                className="relative w-full max-w-[1440px] min-h-[280px] md:h-[350px] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-10 md:py-0"
                style={{ background: 'linear-gradient(164.07deg, #000000 2.76%, #3C8ECB 90.37%)' }}
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

                {/* Content */}
                <motion.div
                    className="relative z-10 flex flex-col items-center text-center px-4 will-change-transform"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <h2 className="text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-normal mb-3 md:mb-5 max-w-[850px]">
                        {title}
                    </h2>

                    <p className="text-[#E5E7EB] text-[13px] sm:text-[15px] md:text-[17px] leading-[1.5] font-normal mb-5 md:mb-7 max-w-[580px]">
                        {description}
                    </p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                    >
                        <Link href="/enquiry" className="w-full sm:w-auto">
                            <button
                                className="w-full sm:w-[180px] md:w-[192px] h-[46px] md:h-[50px] flex items-center justify-center bg-[#3C8ECB] text-white rounded-full transition-transform hover:scale-105 active:scale-95 text-[14px] md:text-[15px] font-normal"
                                style={{ boxShadow: '0px 2px 19.9px rgba(255, 255, 255, 0.52)' }}
                            >
                                Start Your Project
                            </button>
                        </Link>

                        <Link href="/enquiry" className="w-full sm:w-auto">
                            <button
                                className="w-full sm:w-[160px] md:w-[177px] h-[46px] md:h-[50px] flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-[14px] md:text-[15px] font-normal"
                            >
                                Schedule a Call
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
