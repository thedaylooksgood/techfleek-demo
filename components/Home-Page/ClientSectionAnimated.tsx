'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// All 8 client logos (7 PNG + 1 SVG)
const clientLogos = [
    { src: '/home-page/clients/2.png', name: 'Greysell' },
    { src: '/home-page/clients/3.png', name: 'MergerDomo' },
    { src: '/home-page/clients/4.png', name: 'Wingman' },
    { src: '/home-page/clients/5.png', name: 'Skybound' },
    { src: '/home-page/clients/8.png', name: 'DYGO' },
    { src: '/home-page/clients/div.png', name: 'Bolko' },
    { src: '/home-page/clients/logo-white.png', name: 'Hoblix' },
    { src: '/home-page/clients/Rectangle 4239.svg', name: 'Partner' },
];

export default function ClientSectionAnimated() {
    const fontRedHat = "font-[family-name:var(--font-red-hat)]";
    const sectionRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

    // Scroll progress for infinite loop effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform for row movement - creates loop effect
    const row1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // CONSISTENT Typography - Only 3 sizes from AboutUs
    // Label: small uppercase text
    const labelSize = isMobile ? '10px' : 'clamp(11px, 1vw, 13px)';
    // Heading: main title
    const headingSize = isMobile ? '26px' : isTablet ? '32px' : 'clamp(32px, 4vw, 48px)';
    // Content: body text and descriptions
    const contentSize = isMobile ? '13px' : isTablet ? '14px' : 'clamp(13px, 1.2vw, 16px)';

    // Split into 4 logos per row (4x2 grid visible)
    const row1 = clientLogos.slice(0, 4);
    const row2 = clientLogos.slice(4, 8);

    const LogoCard = ({ logo, index, rowOffset = 0 }: { logo: typeof clientLogos[0], index: number, rowOffset?: number }) => {
        const globalIndex = rowOffset + index;
        const isHovered = hoveredLogo === globalIndex;
        const isSvg = logo.src.endsWith('.svg');

        // Card sizes
        const cardWidth = isMobile ? 85 : isTablet ? 115 : 145;
        const cardHeight = isMobile ? 58 : isTablet ? 68 : 78;
        const logoWidth = isMobile ? 60 : isTablet ? 80 : 100;
        const logoHeight = isMobile ? 38 : isTablet ? 45 : 52;

        return (
            <div
                className="relative flex items-center justify-center cursor-pointer"
                style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    background: isHovered
                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                        : 'white',
                    borderRadius: '16px',
                    border: isHovered
                        ? '1.5px solid rgba(99, 102, 241, 0.35)'
                        : '1px solid rgba(229, 231, 235, 0.7)',
                    boxShadow: isHovered
                        ? '0 12px 35px rgba(99, 102, 241, 0.18)'
                        : '0 3px 12px rgba(0, 0, 0, 0.04)',
                    transform: isHovered ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
                    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'transform, box-shadow, background, border'
                }}
                onMouseEnter={() => setHoveredLogo(globalIndex)}
                onMouseLeave={() => setHoveredLogo(null)}
            >
                {isSvg ? (
                    <img
                        src={logo.src}
                        alt={logo.name}
                        style={{
                            width: `${logoWidth}px`,
                            height: 'auto',
                            maxHeight: `${logoHeight}px`,
                            objectFit: 'contain',
                            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                            opacity: isHovered ? 1 : 0.5,
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                            transition: 'all 0.35s ease'
                        }}
                    />
                ) : (
                    <div
                        style={{
                            position: 'relative',
                            width: `${logoWidth}px`,
                            height: `${logoHeight}px`,
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                            transition: 'transform 0.35s ease'
                        }}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            fill
                            sizes={`${logoWidth}px`}
                            className="object-contain"
                            style={{
                                filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                                opacity: isHovered ? 1 : 0.5,
                                transition: 'filter 0.35s ease, opacity 0.35s ease'
                            }}
                        />
                    </div>
                )}

                {/* Tooltip */}
                <div
                    className="absolute -bottom-7 left-1/2 px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
                        color: 'white',
                        fontSize: '11px',
                        fontWeight: '500',
                        boxShadow: '0 4px 14px rgba(26, 26, 46, 0.35)',
                        opacity: isHovered ? 1 : 0,
                        transform: `translateX(-50%) translateY(${isHovered ? '0' : '-4px'})`,
                        transition: 'all 0.25s ease'
                    }}
                >
                    {logo.name}
                    <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                        style={{ background: '#1a1a2e' }}
                    />
                </div>
            </div>
        );
    };

    return (
        <section
            ref={sectionRef}
            className={`w-full bg-gradient-to-b from-gray-50/40 via-white to-gray-50/30 relative overflow-hidden ${fontRedHat}`}
            style={{
                padding: isMobile ? '50px 16px' : isTablet ? '65px 24px' : 'clamp(75px, 9vh, 110px) 32px'
            }}
        >
            {/* Grid background pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(229, 231, 235, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(229, 231, 235, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-20 right-16 w-72 h-72 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
                        opacity: 0.6
                    }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                className="w-full mx-auto relative z-10"
                style={{ maxWidth: '1200px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Two Column Layout */}
                <div className={`flex ${isMobile ? 'flex-col gap-10' : 'flex-row items-center justify-between gap-12'}`}>

                    {/* Left Column - Text Content */}
                    <div className={isMobile ? 'w-full text-center' : 'w-[38%]'}>
                        {/* Label */}
                        <motion.div
                            className="inline-flex items-center gap-2 mb-3"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span
                                className="text-gray-400 font-medium tracking-wider uppercase"
                                style={{ fontSize: labelSize }}
                            >
                                Our Clients
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h2
                            className="font-bold"
                            style={{
                                fontSize: headingSize,
                                lineHeight: '1.1',
                                marginBottom: isMobile ? '16px' : '20px'
                            }}
                        >
                            <span style={{
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                We are{' '}
                            </span>
                            <span style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                trusted
                            </span>
                        </h2>

                        {/* Content text */}
                        <p
                            className="text-gray-500"
                            style={{
                                fontSize: contentSize,
                                lineHeight: '1.65',
                                maxWidth: isMobile ? '100%' : '380px',
                                marginBottom: '24px'
                            }}
                        >
                            TechFleek is the preferred development partner for many, from startups and SMEs across the globe to Fortune 500 companies.
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            className="font-semibold text-white rounded-full flex items-center gap-2 overflow-hidden group relative"
                            style={{
                                padding: isMobile ? '12px 24px' : 'clamp(12px, 1.4vh, 16px) clamp(24px, 3vw, 34px)',
                                fontSize: contentSize,
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
                                boxShadow: '0 6px 25px rgba(26, 26, 46, 0.3)',
                                margin: isMobile ? '0 auto' : '0'
                            }}
                            whileHover={{
                                scale: 1.04,
                                boxShadow: '0 10px 35px rgba(26, 26, 46, 0.4)'
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="relative z-10">Become a Client</span>
                            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>

                    {/* Right Column - Logo Grid with Infinite Loop */}
                    <div className={isMobile ? 'w-full' : 'w-[58%]'}>
                        {/* Visible container - taller to show all logos initially */}
                        <div
                            className="relative overflow-hidden"
                            style={{
                                height: isMobile ? '165px' : isTablet ? '185px' : '210px',
                                maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
                            }}
                        >
                            {/* Scrolling rows container */}
                            <motion.div
                                className="flex flex-col gap-5"
                                style={{
                                    y: row1Y,
                                    paddingTop: '8px'
                                }}
                            >
                                {/* Row 1 */}
                                <div className="flex items-center justify-center gap-3 lg:gap-5">
                                    {row1.map((logo, index) => (
                                        <LogoCard key={`r1-${index}`} logo={logo} index={index} rowOffset={0} />
                                    ))}
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-center gap-3 lg:gap-5">
                                    {row2.map((logo, index) => (
                                        <LogoCard key={`r2-${index}`} logo={logo} index={index} rowOffset={4} />
                                    ))}
                                </div>

                                {/* Row 1 repeated (loop effect) */}
                                <div className="flex items-center justify-center gap-3 lg:gap-5">
                                    {row1.map((logo, index) => (
                                        <LogoCard key={`r1-loop-${index}`} logo={logo} index={index} rowOffset={8} />
                                    ))}
                                </div>

                                {/* Row 2 repeated (loop effect) */}
                                <div className="flex items-center justify-center gap-3 lg:gap-5">
                                    {row2.map((logo, index) => (
                                        <LogoCard key={`r2-loop-${index}`} logo={logo} index={index} rowOffset={12} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}