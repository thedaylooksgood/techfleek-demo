"use client";

import React, { useState } from 'react';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500'] });
const inter = Inter({ subsets: ['latin'], weight: ['500'] });

const filters = [
    "All Projects",
    "AI & Automation",
    "SaaS Platforms",
    "Fintech Solutions",
    "UI/UX Design",
    "Enterprise Systems"
];

export default function FilterSection() {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    return (
        <section className="w-full py-7 flex flex-col items-center bg-white">
            {/* Title Section */}
            <div className="text-center mb-3 w-full px-4">
                <h2 className={`${outfit.className} text-[36px] font-normal leading-[40px] mb-4 flex items-center justify-center text-center`}
                    style={{
                        background: 'linear-gradient(90deg, #0B1426 0%, #3C8ECB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Case Studies
                </h2>
                <p className={`${outfit.className} text-[#4B5563] text-[20px] font-normal leading-[28px] text-center`}>
                    Explore our recent software projects and see how we've helped companies transform their digital presence
                </p>
            </div>

            {/* Filter Bar Container */}
            <div className="relative w-full max-w-[1440px] flex justify-center px-4">
                {/* The visual border container */}
                <div
                    className="relative flex items-center p-1 overflow-x-auto max-w-[95vw] [&::-webkit-scrollbar]:hidden"
                    style={{
                        border: '1px solid #3C8ECB',
                        borderRadius: '31px',
                        height: '61px',
                        boxSizing: 'border-box',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <div className="flex items-center gap-[16px] whitespace-nowrap px-1">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`
                                    box-border rounded-full border transition-all duration-300 flex items-center justify-center
                                    ${inter.className} text-[16px] font-medium leading-[19px] text-center
                                    ${activeFilter === filter
                                        ? 'bg-[#3C8ECB] border-[#3C8ECB] text-white'
                                        : 'bg-transparent border-[#3C8ECB] text-[#3C8ECB] hover:bg-[#3C8ECB]/10'}
                                `}
                                style={{
                                    height: '48px',
                                    paddingLeft: '24px', // Approximate padding to match widths
                                    paddingRight: '24px',
                                    // Custom widths from CSS can be approximated or purely content based. 
                                    // Given content varies, flex-basis or padding is safer.
                                    // If strict pixel widths are needed:
                                    // minWidth: filter === "All Projects" ? '134px' : ...
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
