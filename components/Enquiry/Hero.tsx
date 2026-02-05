'use client';

import React, { useEffect, useState, useRef, RefObject, ReactNode } from 'react';
import { MdAccessTimeFilled, MdSecurity } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa6';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

function useOnScreen(ref: RefObject<HTMLElement | null>, threshold = 0.1) {
    const [isIntersecting, setIntersecting] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold });
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [ref, threshold]);
    return isIntersecting;
}

export interface HeroFeature {
    icon: ReactNode;
    text: string;
}

interface HeroSectionProps {
    setIsHeaderVisible?: (isVisible: boolean) => void;
    visibilityThreshold?: number;
    title?: string;
    description?: string;
    features?: HeroFeature[];
    backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    setIsHeaderVisible = () => { },
    visibilityThreshold = 0.1,
    title = "Get in Touch",
    description = "Whether you have a project in mind, a question, or just want to say hello, we're here to help bring your vision to life.",
    backgroundImageUrl = "/Enquiry/background.png",
    features = [
        { icon: <MdAccessTimeFilled className="w-full h-full" />, text: "24h Response Time" },
        { icon: <MdSecurity className="w-full h-full" />, text: "Secure & Confidential" },
        { icon: <FaHandshake className="w-full h-full" />, text: "Free Consultation" },
    ],
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isHeroVisible = useOnScreen(sectionRef, visibilityThreshold);

    useEffect(() => { setIsHeaderVisible(isHeroVisible); }, [isHeroVisible, setIsHeaderVisible]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-[74px] lg:pt-[98px] pb-6"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }} />

            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-1"
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: 1,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-[900px]">
                {/* Breadcrumb */}
                <div className={`flex items-center justify-center mb-2 gap-1 ${inter.className}`}>
                    <span className="font-medium tracking-wide text-white/80 text-[12px] sm:text-[13px]">Home</span>
                    <span className="text-white/50 mx-1 text-[12px]">/</span>
                    <span className="font-medium tracking-wide text-white/80 text-[12px] sm:text-[13px]">Enquiry</span>
                </div>

                {/* Title */}
                <h1 className={`${redHat.className} font-bold leading-[1.2] mb-2 text-white drop-shadow-lg text-[28px] sm:text-[32px] md:text-[36px]`}>
                    {title}
                </h1>

                {/* Description */}
                <p className={`${inter.className} max-w-[700px] leading-[1.5] font-normal text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] mb-3`}>
                    {description}
                </p>

                {/* Features */}
                <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${inter.className}`}>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="text-cyan-300 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5">
                                {feature.icon}
                            </div>
                            <span className="font-medium tracking-wide text-white/90 text-[12px] sm:text-[13px]">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;