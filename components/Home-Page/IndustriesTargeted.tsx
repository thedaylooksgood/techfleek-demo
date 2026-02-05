'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

// All industries with unique colors
const industries = [
    {
        id: 1,
        title: 'Healthcare & Medical',
        description: 'HIPAA-compliant telemedicine, patient management, and health monitoring solutions.',
        color: '#3b82f6',
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        id: 2,
        title: 'E-Commerce & Retail',
        description: 'Multi-vendor marketplaces, D2C platforms with seamless checkout and inventory.',
        color: '#f97316',
        gradient: 'from-orange-500 to-amber-400',
    },
    {
        id: 3,
        title: 'FinTech & Banking',
        description: 'Secure payment gateways, digital banking apps with PCI-DSS compliance.',
        color: '#10b981',
        gradient: 'from-emerald-500 to-teal-400',
    },
    {
        id: 4,
        title: 'Real Estate & Property',
        description: 'Listing portals, virtual tours, and rental management systems.',
        color: '#8b5cf6',
        gradient: 'from-violet-500 to-purple-400',
    },
    {
        id: 5,
        title: 'Education & E-Learning',
        description: 'LMS platforms, virtual classrooms with progress tracking and certifications.',
        color: '#ec4899',
        gradient: 'from-pink-500 to-rose-400',
    },
    {
        id: 6,
        title: 'Logistics & Supply Chain',
        description: 'Fleet management, warehouse automation, and real-time tracking solutions.',
        color: '#f59e0b',
        gradient: 'from-amber-500 to-yellow-400',
    },
    {
        id: 7,
        title: 'SaaS & Cloud',
        description: 'Cloud-native software with multi-tenancy, subscriptions, and enterprise security.',
        color: '#06b6d4',
        gradient: 'from-cyan-500 to-sky-400',
    },
    {
        id: 8,
        title: 'Travel & Hospitality',
        description: 'Booking platforms, hotel management, and travel experience applications.',
        color: '#6366f1',
        gradient: 'from-indigo-500 to-blue-400',
    },
];

export default function IndustriesTargeted() {
    const fontRedHat = "font-[family-name:var(--font-red-hat)]";
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // Animation variants matching AboutUs
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { y: -30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Typography matching AboutUs
    const labelSize = isMobile ? '10px' : 'clamp(11px, 1vw, 13px)';
    const headlineSize = isMobile ? '26px' : isTablet ? '32px' : 'clamp(32px, 4vw, 48px)';
    const subtitleSize = isMobile ? '13px' : isTablet ? '14px' : 'clamp(13px, 1.2vw, 16px)';
    const cardTitleSize = isMobile ? '14px' : isTablet ? '15px' : 'clamp(14px, 1.3vw, 18px)';
    const cardDescSize = isMobile ? '11px' : isTablet ? '12px' : 'clamp(11px, 1vw, 14px)';

    return (
        <section
            ref={sectionRef}
            className={`w-full bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden relative ${fontRedHat}`}
            style={{
                padding: isMobile ? '50px 16px' : isTablet ? '70px 24px' : 'clamp(80px, 10vh, 120px) 32px'
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating shapes */}
                <motion.div
                    className="absolute top-32 right-20 w-4 h-4 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                    animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-48 right-40 w-3 h-3 rounded"
                    style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)' }}
                    animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-5 h-5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                    animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                    transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                className="w-full mx-auto relative z-10"
                style={{ maxWidth: '1250px' }}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Two Column Header - matching AboutUs */}
                <div className={`flex ${isMobile ? 'flex-col gap-6' : 'flex-row justify-between items-start'} mb-10 lg:mb-14`}>
                    {/* Left - Headline */}
                    <motion.div
                        className={isMobile ? 'w-full' : 'w-[48%]'}
                        variants={headerVariants}
                    >
                        {/* Label with shimmer */}
                        <motion.span
                            className="inline-flex items-center gap-2 text-gray-400 font-medium tracking-wider uppercase"
                            style={{ fontSize: labelSize, marginBottom: '8px' }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            Industries We Serve
                        </motion.span>

                        {/* Main Headline with gradient */}
                        <h2
                            className="font-bold"
                            style={{
                                fontSize: headlineSize,
                                lineHeight: '1.1',
                                marginTop: '8px',
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            What you'll get<br />from hiring us
                        </h2>
                    </motion.div>

                    {/* Right - Description + CTA */}
                    <motion.div
                        className={isMobile ? 'w-full' : 'w-[45%]'}
                        variants={headerVariants}
                    >
                        <p
                            className="text-gray-500"
                            style={{ fontSize: subtitleSize, lineHeight: '1.6', marginBottom: '20px' }}
                        >
                            We immerse ourselves in our customer's business, understand their objectives, and take a holistic approach on every project. Therefore, we have been working with most of our clients for years.
                        </p>

                        {/* CTA Buttons matching AboutUs */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <motion.button
                                className="font-semibold text-white rounded-full relative overflow-hidden group"
                                style={{
                                    padding: isMobile ? '10px 20px' : 'clamp(10px, 1.2vh, 14px) clamp(20px, 2.5vw, 32px)',
                                    fontSize: isMobile ? '12px' : 'clamp(12px, 1vw, 15px)',
                                    background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)',
                                    boxShadow: '0 4px 20px rgba(26, 26, 46, 0.3)'
                                }}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(26, 26, 46, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Become a Client
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.button>

                            <motion.button
                                className="font-semibold text-gray-700 rounded-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300"
                                style={{
                                    padding: isMobile ? '10px 20px' : 'clamp(10px, 1.2vh, 14px) clamp(20px, 2.5vw, 32px)',
                                    fontSize: isMobile ? '12px' : 'clamp(12px, 1vw, 15px)'
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Industry Cards Grid */}
                <motion.div
                    className="grid gap-4 lg:gap-5"
                    style={{
                        gridTemplateColumns: isMobile
                            ? 'repeat(1, 1fr)'
                            : isTablet
                                ? 'repeat(2, 1fr)'
                                : 'repeat(4, 1fr)'
                    }}
                >
                    {industries.map((industry, index) => {
                        const isHovered = hoveredCard === index;

                        return (
                            <motion.div
                                key={industry.id}
                                className="relative cursor-pointer overflow-hidden group"
                                style={{
                                    borderRadius: isMobile ? '16px' : '20px',
                                    background: isHovered ? industry.color : 'white',
                                    padding: isMobile ? '18px' : isTablet ? '22px' : 'clamp(20px, 2vw, 28px)',
                                    minHeight: isMobile ? '140px' : '160px',
                                    border: isHovered ? 'none' : '1px solid rgba(229, 231, 235, 0.8)',
                                    boxShadow: isHovered
                                        ? `0 25px 50px ${industry.color}50`
                                        : '0 4px 20px rgba(0, 0, 0, 0.04)',
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                }}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Gradient overlay on hover (white cards) */}
                                {!isHovered && (
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${industry.color}08 0%, ${industry.color}15 100%)`
                                        }}
                                    />
                                )}

                                {/* Decorative flower shape on hover */}
                                <motion.div
                                    className="absolute pointer-events-none"
                                    style={{
                                        right: '-35px',
                                        bottom: '-35px',
                                        width: '150px',
                                        height: '150px',
                                        opacity: isHovered ? 0.35 : 0,
                                        transition: 'opacity 0.4s ease'
                                    }}
                                    animate={isHovered ? {
                                        rotate: [0, 10, 0],
                                        scale: [0.9, 1, 0.9]
                                    } : {}}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="30" r="25" fill="white" />
                                        <circle cx="30" cy="55" r="25" fill="white" />
                                        <circle cx="70" cy="55" r="25" fill="white" />
                                        <circle cx="50" cy="70" r="25" fill="white" />
                                        <circle cx="50" cy="50" r="20" fill="white" />
                                    </svg>
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    {/* Number badge */}
                                    <motion.span
                                        className="font-bold mb-1"
                                        style={{
                                            fontSize: isMobile ? '11px' : 'clamp(11px, 1vw, 13px)',
                                            color: isHovered ? 'rgba(255,255,255,0.7)' : industry.color,
                                            transition: 'color 0.3s ease'
                                        }}
                                    >
                                        0{index + 1}
                                    </motion.span>

                                    {/* Title */}
                                    <h3
                                        className="font-bold mb-2 transition-colors duration-300"
                                        style={{
                                            fontSize: cardTitleSize,
                                            color: isHovered ? 'white' : '#1a1a2e',
                                            lineHeight: '1.25'
                                        }}
                                    >
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="transition-colors duration-300"
                                        style={{
                                            fontSize: cardDescSize,
                                            color: isHovered ? 'rgba(255,255,255,0.9)' : '#6b7280',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        {industry.description}
                                    </p>

                                    {/* Arrow indicator on hover */}
                                    <motion.div
                                        className="mt-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            x: isHovered ? 0 : -10
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight
                                            className="w-5 h-5"
                                            style={{ color: 'white' }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
