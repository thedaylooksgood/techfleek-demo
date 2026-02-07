'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { homeStyles } from './styles';

// All 8 client logos with brand colors
const clientLogos = [
    { src: '/home-page/clients/2.png', name: 'Greysell', color: '#f97316' }, // Orange
    { src: '/home-page/clients/3.png', name: 'MergerDomo', color: '#3b82f6' }, // Blue
    { src: '/home-page/clients/4.png', name: 'Wingman', color: '#14b8a6' }, // Teal
    { src: '/home-page/clients/5.png', name: 'Skybound', color: '#0ea5e9' }, // Sky Blue
    { src: '/home-page/clients/8.png', name: 'DYGO', color: '#8b5cf6' }, // Purple
    { src: '/home-page/clients/div.png', name: 'Bolko', color: '#ef4444' }, // Red
    { src: '/home-page/clients/logo-white.png', name: 'Hoblix', color: '#6366f1' }, // Indigo
    { src: '/home-page/clients/Rectangle 4239.svg', name: 'Partner', color: '#6b7280' }, // Gray
];

export default function ClientSectionAnimated() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    // Removed hoveredLogo state to prevent re-renders

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // Typography sizes to match AboutUs/Design System
    const contentSize = isMobile ? '13px' : isTablet ? '14px' : 'clamp(13px, 1.2vw, 16px)';

    // Split logos into two rows
    const row1Logos = clientLogos.slice(0, 4);
    const row2Logos = clientLogos.slice(4, 8);

    // Card dimensions - Scaled up for better presence
    const cardWidth = isMobile ? 150 : isTablet ? 190 : 230;
    const cardHeight = isMobile ? 85 : isTablet ? 110 : 130;
    const gap = isMobile ? 16 : 24;

    const LogoCard = ({ logo }: { logo: typeof clientLogos[0] }) => {
        const isSvg = logo.src.endsWith('.svg');
        // Logos scaled up to fill the card almost entirely
        const logoWidth = isMobile ? 120 : isTablet ? 160 : 200;
        const logoHeight = isMobile ? 70 : isTablet ? 90 : 110;

        return (
            <motion.div
                className="relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden backdrop-blur-md"
                style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    borderRadius: '20px',
                    border: '1px solid rgba(229, 231, 235, 0.4)',
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.6) 0%, rgba(240, 246, 255, 0.4) 100%)',
                }}
                whileHover={{
                    scale: 1.08,
                    y: -5,
                    zIndex: 10,
                    borderColor: `${logo.color}50`,
                    boxShadow: `0 20px 40px ${logo.color}25, 0 10px 20px ${logo.color}15`,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(230, 230, 255, 0.9) 100%)',
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
            >
                {/* Subtle internal glow effect on hover */}
                <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{ background: `linear-gradient(to top right, ${logo.color}05, ${logo.color}10)` }}
                    whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                />

                {isSvg ? (
                    <motion.img
                        src={logo.src}
                        alt={logo.name}
                        style={{
                            width: `${logoWidth}px`,
                            height: 'auto',
                            maxHeight: `${logoHeight}px`,
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))',
                        }}
                        whileHover={{ scale: 1.1, filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))' }}
                    />
                ) : (
                    <div
                        style={{
                            position: 'relative',
                            width: `${logoWidth}px`,
                            height: `${logoHeight}px`,
                        }}
                    >
                        <motion.div
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative'
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                sizes={`${logoWidth}px`}
                                className="object-contain"
                                style={{
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))',
                                }}
                            />
                        </motion.div>
                    </div>
                )}
            </motion.div>
        );
    };

    const MarqueeRow = ({ logos, direction = 'left', speed = 20 }: { logos: typeof clientLogos, direction?: 'left' | 'right', speed?: number }) => {
        // Duplicate logos enough times to ensure smooth looping
        const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

        return (
            <div
                className="flex w-full overflow-hidden py-14 -my-8"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
            >
                <motion.div
                    className="flex gap-4 lg:gap-6"
                    style={{
                        paddingLeft: direction === 'right' ? 0 : '0px',
                    }}
                    animate={{
                        x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogos.map((logo, idx) => (
                        <LogoCard key={`${logo.name}-${idx}`} logo={logo} />
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <section
            className={homeStyles.section}
            style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <motion.div
                className={homeStyles.container}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={`flex ${isMobile ? 'flex-col gap-8' : 'flex-row items-center justify-between gap-12'}`}>

                    {/* Left Side: Text */}
                    <div className={isMobile ? 'w-full text-center' : 'w-[40%] flex-shrink-0'}>
                        <div className={homeStyles.headerWrapper}>
                            <span className={homeStyles.label}>
                                Our Clients
                            </span>
                            <h2 className={homeStyles.title}>
                                We are <span className={homeStyles.gradientText}>trusted</span>
                            </h2>
                        </div>

                        <p
                            className={homeStyles.description}
                            style={{
                                maxWidth: isMobile ? '100%' : '400px',
                                marginBottom: '24px'
                            }}
                        >
                            TechFleek is the preferred development partner for many, from startups and SMEs across the globe to Fortune 500 companies.
                        </p>

                        <motion.button
                            className="font-semibold text-white rounded-full flex items-center gap-2 overflow-hidden group relative"
                            style={{
                                padding: isMobile ? '12px 24px' : 'clamp(12px, 1.4vh, 16px) clamp(24px, 3vw, 34px)',
                                fontSize: contentSize,
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
                                boxShadow: '0 6px 25px rgba(26, 26, 46, 0.3)',
                                margin: isMobile ? '0 auto' : '0'
                            }}
                            whileHover={{ scale: 1.04, boxShadow: '0 10px 35px rgba(26, 26, 46, 0.4)' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="relative z-10">Become a Client</span>
                            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>

                    {/* Right Side: Marquee Rows */}
                    <div className={`${isMobile ? 'w-full' : 'w-[55%]'} flex flex-col gap-2`}>
                        <MarqueeRow logos={row1Logos} direction="left" speed={25} />
                        <MarqueeRow logos={row2Logos} direction="right" speed={25} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
