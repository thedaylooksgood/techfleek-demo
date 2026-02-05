"use client";

import React from 'react';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-white px-4 pt-[74px] lg:pt-[98px] pb-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }} />

            {/* Background Image */}
            <div className="absolute inset-0 z-1 mix-blend-screen pointer-events-none">
                <img src="/Ecommerce/background.png" alt="Background Pattern" className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[900px] mx-auto text-center flex flex-col items-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center mb-2 gap-1">
                    <span className="font-medium tracking-wide text-white/80 text-[12px] sm:text-[13px]">Home</span>
                    <span className="text-white/50 mx-1 text-[12px]">/</span>
                    <span className="font-medium tracking-wide text-white/80 text-[12px] sm:text-[13px]">Case Studies</span>
                </div>

                {/* Title */}
                <h1 className={`${redHat.className} text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[1.2] mb-2 drop-shadow-lg`}>
                    Our Case Studies
                </h1>

                {/* Subtitle */}
                <p className={`${inter.className} text-[14px] sm:text-[15px] md:text-[16px] text-gray-200 max-w-[700px] leading-[1.5] font-normal`}>
                    Real-world transformations powered by TechFleek's innovation
                </p>
            </div>
        </section>
    );
}
