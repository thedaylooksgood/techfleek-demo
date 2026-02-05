'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function ServiceDescription() {
    return (
        <section className="w-full bg-white py-8 relative">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Header Section */}
                <div className="text-center mb-5 space-y-4">
                    <h3 className="font-bold tracking-widest uppercase text-[12px] md:text-[16px]"
                        style={{
                            fontFamily: 'var(--font-red-hat)',
                            background: 'linear-gradient(90deg, #3C8ECB 0%, #000000 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '0.1px'
                        }}>
                        WE DESIGN EXPERIENCES
                    </h3>
                    <h2 className="font-bold text-black text-[24px] md:text-[30px] leading-tight"
                        style={{
                            fontFamily: 'var(--font-red-hat)',
                        }}>
                        What is UI/UX Design?
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0 mt-3">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col z-10 space-y-8 items-center lg:items-start text-center lg:text-left">

                        {/* Toggle Buttons */}
                        <div className="relative flex items-center bg-transparent border border-[#3C8ECB] rounded-[40px] p-[6px]"
                            style={{ width: '376px', height: '69.33px' }}>

                            {/* Active Button */}
                            <button className="flex items-center justify-center bg-[#3C8ECB] text-white font-bold shadow-[0px_4px_18.7px_rgba(0,0,0,0.44)] rounded-[40px] transition-all hover:scale-105 active:scale-95 z-10"
                                style={{
                                    width: '152px', /* Matches CSS "width: 152px" for the colored button approximately, adjusting to look right */
                                    height: '56.27px',
                                    fontFamily: 'var(--font-outfit)',
                                    fontSize: '16px'
                                }}>
                                Interaction Design
                            </button>

                            {/* Inactive Button */}
                            <button className="flex items-center justify-center text-black bg-transparent hover:opacity-80 transition-all z-0 flex-1 h-full ml-[-10px]"
                                style={{
                                    fontFamily: 'var(--font-outfit)',
                                    fontSize: '16px'
                                }}>
                                Human-Centered Design
                            </button>
                        </div>

                        {/* Main Description */}
                        <p className="text-black text-[16px] leading-[26px] tracking-wide"
                            style={{
                                fontFamily: 'var(--font-red-hat)',
                                width: '100%',
                                maxWidth: '587px', // Exact width from CSS
                                textAlign: 'left'
                            }}>
                            We help ambitious businesses like yours improve conversions, reduce churn, and elevate customer satisfaction by crafting intuitive interfaces, optimizing user flows, and building products people love to use. Book a call to discuss your goals.
                        </p>

                        {/* Checklist Items */}
                        <div className="space-y-6 w-full max-w-[587px] pl-[36px]"> {/* Indented as requested ("pointer slightly towards right") */}
                            {/* Item 1 */}
                            <div className="flex items-start gap-4">
                                {/* Check Box */}
                                <div className="min-w-[24px] h-[24px] bg-[#3C8ECB] rounded-[4px] flex items-center justify-center mt-1 shrink-0">
                                    <Check className="text-white w-4 h-4" strokeWidth={3} />
                                </div>
                                <p className="text-black text-[14px] leading-[20px] text-left"
                                    style={{ fontFamily: 'var(--font-red-hat)', maxWidth: '524px' }}>
                                    We provide a revolutionary level of transparency into our design process—from stakeholder interviews and analytics audits to user research, wireframes.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4">
                                <div className="min-w-[24px] h-[24px] bg-[#3C8ECB] rounded-[4px] flex items-center justify-center mt-1 shrink-0">
                                    <Check className="text-white w-4 h-4" strokeWidth={3} />
                                </div>
                                <p className="text-black text-[14px] leading-[20px] text-left"
                                    style={{ fontFamily: 'var(--font-red-hat)', maxWidth: '524px' }}>
                                    Want to test our process before a larger engagement? Start with a UX audit, a rapid prototype, or a 2-week design sprint.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    {/* Positioned to touch the text column (gap-0) */}
                    <div className="relative w-full lg:w-[558px] h-[320px] lg:h-[318px] shrink-0 mt-8 lg:mt-0 lg:ml-[-1px]">
                        <div className="relative w-full h-full rounded-[0px_25px_25px_25px] overflow-hidden shadow-[0px_1px_19px_23px_rgba(219,234,254,0.36)]"
                            style={{ borderRadius: '0px 25px 25px 25px' }}>
                            <Image
                                src="/Services/services.png"
                                alt="UI/UX Design Process"
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
