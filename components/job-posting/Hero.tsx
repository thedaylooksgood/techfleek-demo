"use client";

import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-white px-4 pt-[25px] lg:pt-[30px] pb-6">
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
                    <span className="font-medium tracking-wide text-white/80 text-[12px] sm:text-[13px]">Careers</span>
                </div>

                {/* Title */}
                <h1 className={`${inter.className} font-bold text-white mb-2 text-[28px] sm:text-[32px] md:text-[36px] leading-[1.2] max-w-[800px] drop-shadow-lg`}>
                    Build Your Future with <span className="text-[#3C8ECB]">TechFleek</span>
                </h1>

                {/* Subtitle */}
                <p className={`${inter.className} text-gray-200 font-normal mb-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] max-w-[700px]`}>
                    Join our team of innovators shaping the future of software & digital solutions. Create impactful products that transform businesses worldwide.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                    <a
                        href="#open-positions"
                        className={`${inter.className} w-full sm:w-auto px-6 py-2.5 bg-[#3C8ECB] text-white font-medium text-[14px] sm:text-[15px] rounded-xl transition-transform hover:scale-105 shadow-lg active:scale-95`}
                    >
                        Explore Open Roles
                    </a>
                    <Link
                        href="/about-us"
                        className={`${inter.className} w-full sm:w-auto px-6 py-2.5 bg-transparent text-[#3C8ECB] font-medium text-[14px] sm:text-[15px] rounded-xl border-2 border-[#3C8ECB] transition-all hover:bg-[#3C8ECB] hover:text-white active:scale-95`}
                    >
                        Learn About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
