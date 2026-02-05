import React from 'react';
import { Outfit } from 'next/font/google';
import Link from 'next/link';

// Initialize the font
const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400'], // The design specified font-weight: 400
    display: 'swap',
});

const CTASection = () => {
    return (
        <div
            className={`w-full ${outfit.className}`}
            style={{
                background: 'linear-gradient(164.07deg, #000000 2.76%, #3C8ECB 90.37%)'
            }}
        >
            {/* Main Container - Centered content */}
            <div
                className="relative w-full max-w-[1440px] mx-auto min-h-[300px] sm:min-h-[340px] lg:min-h-[384px] overflow-hidden flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4"
            >
                {/* Decorative circles - hidden on mobile */}
                <div
                    className="absolute w-[80px] sm:w-[100px] lg:w-[128px] h-[80px] sm:h-[100px] lg:h-[128px] rounded-full bg-white/10 hidden sm:block"
                    style={{
                        right: '40px',
                        top: '30px',
                    }}
                />

                <div
                    className="absolute w-[60px] sm:w-[80px] lg:w-[96px] h-[60px] sm:h-[80px] lg:h-[96px] rounded-full bg-[#EDEDED]/15 hidden sm:block"
                    style={{
                        left: '40px',
                        bottom: '40px'
                    }}
                />

                {/* --- Content Wrapper (Centered) --- */}
                <div className="relative z-10 flex flex-col items-center text-center">

                    {/* Heading */}
                    <h2 className="text-white text-[24px] sm:text-[36px] lg:text-[48px] leading-[1.1] font-normal mb-4 sm:mb-6 max-w-[905px]">
                        Let's Build Your Next Software Experience
                    </h2>

                    {/* Subtext */}
                    <p className="text-[#E5E7EB] text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.5] font-normal mb-6 sm:mb-8 max-w-[617px]">
                        Ready to transform your ideas into powerful software solutions? Let's discuss your project and create something amazing together.
                    </p>

                    {/* Buttons Container */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

                        {/* Primary Button: Start Your Project */}
                        <Link href="/enquiry">
                            <button
                                className="flex items-center justify-center bg-[#3C8ECB] text-white rounded-full transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[180px] h-[48px] sm:h-[52px] px-6"
                                style={{
                                    boxShadow: '0px 2px 19.9px rgba(255, 255, 255, 0.52)'
                                }}
                            >
                                <span className="text-[14px] sm:text-[16px] leading-[20px] font-normal">
                                    Start Your Project
                                </span>
                            </button>
                        </Link>

                        {/* Secondary Button: Schedule a Call */}
                        <Link href="/enquiry">
                            <button
                                className="flex items-center justify-center border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto min-w-[160px] h-[48px] sm:h-[52px] px-6"
                            >
                                <span className="text-[14px] sm:text-[16px] leading-[20px] font-normal">
                                    Schedule a Call
                                </span>
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CTASection;
