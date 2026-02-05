"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });

export default function FeaturedCaseStudy() {
    return (
        <section className="w-full bg-black relative py-12 lg:py-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Main Content Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

                    {/* Left Card */}
                    <div
                        className="bg-[rgba(255,255,255,0.9)] backdrop-blur-sm border border-[rgba(228,233,255,0.5)] rounded-[24px] p-8 md:p-12 relative overflow-hidden"
                        style={{
                            // box-sizing border-box handled by tailwind
                        }}
                    >
                        {/* Featured Project Label */}
                        <div className={`${inter.className} text-[#3C8ECB] text-[16px] font-semibold mb-6 uppercase tracking-wide`}>
                            Featured Project
                        </div>

                        {/* Heading */}
                        <h2 className={`${spaceGrotesk.className} text-[32px] md:text-[40px] leading-[1.1] text-black mb-2`}>
                            Ucom Entertainment
                        </h2>
                        <h3 className={`${spaceGrotesk.className} text-[28px] md:text-[36px] leading-[1.2] text-[#111827] mb-8`}>
                            Event Management
                        </h3>

                        {/* Description */}
                        <div className={`${inter.className} text-[#4B5563] text-[18px] leading-[28px] mb-10 space-y-1`}>
                            <p>Empowering 10,000+ users through AI-driven automation.</p>
                            <p>Our conversational AI platform reduced response times by</p>
                            <p>85% and increased customer satisfaction by 40%.</p>
                        </div>

                        {/* Stats Row within Left Card */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {/* Stat 1 */}
                            <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] p-4 min-w-[110px]">
                                <div className={`${inter.className} text-[#2563EB] text-[24px] font-bold`}>10K+</div>
                                <div className={`${inter.className} text-[#4B5563] text-[14px]`}>Active Users</div>
                            </div>
                            {/* Stat 2 */}
                            <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] p-4 min-w-[110px]">
                                <div className={`${inter.className} text-[#7C3AED] text-[24px] font-bold`}>85%</div>
                                <div className={`${inter.className} text-[#4B5563] text-[14px]`}>Faster Response</div>
                            </div>
                            {/* Stat 3 */}
                            <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] p-4 min-w-[110px]">
                                <div className={`${inter.className} text-[#16A34A] text-[24px] font-bold`}>40%</div>
                                <div className={`${inter.className} text-[#4B5563] text-[14px]`}>Higher Satisfaction</div>
                            </div>
                        </div>

                        {/* Explore Link */}
                        <Link href="/case-study/ucom-entertainment" className={`flex items-center gap-2 text-[#3C8ECB] ${inter.className} text-[16px] font-semibold group hover:opacity-80 transition-opacity`}>
                            Explore Full Case Study
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                        {/* Circle Gradient Background Element */}
                        <div
                            className="absolute right-0 bottom-0 w-24 h-24 rounded-full -z-0"
                            style={{
                                background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
                                opacity: 0.6,
                                filter: 'blur(20px)',
                                transform: 'translate(20%, 20%)'
                            }}
                        />

                        {/* Main Image */}
                        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_rgba(0,0,0,0.25)]">
                            <Image
                                src="/CaseStudy/ucom.png"
                                alt="Ucom Entertainment Project"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
