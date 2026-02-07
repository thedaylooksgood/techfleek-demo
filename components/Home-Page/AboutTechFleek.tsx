'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { homeStyles } from './styles';

const AboutTechFleek = () => {
    const fontRedHat = "font-[family-name:var(--font-red-hat)]";
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

    // Premium animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { y: -30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 }
        }
    };

    const floatAnimation = {
        y: [0, -8, 0]
    };

    const floatTransition = {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
    };

    const pulseAnimation = {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    // Feature card component with hover effects
    const FeatureCard = ({
        number,
        Icon,
        title,
        description,
        delay
    }: {
        number: string;
        Icon: any;
        title: string;
        description: string;
        delay: number;
    }) => (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group"
            style={{
                padding: isMobile ? '16px' : isTablet ? '18px' : 'clamp(18px, 2vw, 28px)',
                border: '1px solid rgba(229, 231, 235, 0.8)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            {/* Gradient overlay on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)'
                }}
            />

            <div className="relative flex items-start gap-3 lg:gap-4">
                {/* Icon with animated background */}
                <motion.div
                    className="flex items-center justify-center rounded-xl lg:rounded-2xl relative overflow-hidden"
                    style={{
                        width: isMobile ? '40px' : isTablet ? '44px' : 'clamp(44px, 4vw, 56px)',
                        height: isMobile ? '40px' : isTablet ? '44px' : 'clamp(44px, 4vw, 56px)',
                        minWidth: isMobile ? '40px' : isTablet ? '44px' : 'clamp(44px, 4vw, 56px)',
                        background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)'
                    }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon
                        className="text-indigo-600 relative z-10"
                        style={{
                            width: isMobile ? '20px' : isTablet ? '22px' : 'clamp(22px, 2vw, 28px)',
                            height: isMobile ? '20px' : isTablet ? '22px' : 'clamp(22px, 2vw, 28px)'
                        }}
                    />
                </motion.div>

                <div className="flex-1">
                    {/* Number badge */}
                    <span
                        className="font-bold bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent"
                        style={{ fontSize: isMobile ? '11px' : 'clamp(11px, 1vw, 13px)' }}
                    >
                        {number}
                    </span>

                    {/* Title with gradient on hover */}
                    <h3
                        className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300"
                        style={{
                            fontSize: isMobile ? '14px' : isTablet ? '15px' : 'clamp(14px, 1.3vw, 18px)',
                            lineHeight: '1.3',
                            marginTop: '2px'
                        }}
                    >
                        {title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                        style={{
                            fontSize: isMobile ? '11px' : isTablet ? '12px' : 'clamp(11px, 1vw, 14px)',
                            lineHeight: '1.5',
                            marginTop: isMobile ? '4px' : '6px'
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section
            className={homeStyles.section}
            style={{
                paddingTop: '60px',
                paddingBottom: '60px'
            }}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <motion.div
                className={`${homeStyles.container} h-full flex flex-col items-center justify-center`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >

                {/* Header Section with Actions */}
                <div className={`${homeStyles.headerWrapper} lg:flex-row lg:items-end lg:justify-between`}>
                    <div className="flex flex-col gap-2 flex-1">
                        <span className={homeStyles.label}>
                            About Us
                        </span>
                        <h2 className={homeStyles.title}>
                            Globally Recruitment and <span className={homeStyles.gradientText}>Solutions.</span>
                        </h2>
                        <p className={homeStyles.description}>
                            At the intersection of cutting-edge technology and deep industry knowledge,
                            we revolutionize the way companies and candidates connect.
                        </p>
                    </div>

                    {/* CTA Buttons - Moved here */}
                    <motion.div
                        className="flex items-center gap-3 shrink-0"
                        style={{
                            marginTop: isMobile ? '16px' : '0',
                            paddingBottom: isMobile ? '0' : '4px' // align with text baseline roughly or just padding
                        }}
                    >
                        <Link href="/enquiry">
                            <motion.button
                                className="font-semibold text-white rounded-full relative overflow-hidden group"
                                style={{
                                    padding: isMobile ? '12px 24px' : 'clamp(12px, 1.2vh, 16px) clamp(24px, 2.5vw, 36px)',
                                    fontSize: isMobile ? '13px' : 'clamp(13px, 1vw, 15px)',
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    boxShadow: '0 12px 35px rgba(59, 130, 246, 0.45)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Quotes
                                    <motion.span
                                        className="inline-block"
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.button>
                        </Link>
                        <Link href="/contact">
                            <motion.button
                                className="font-semibold text-blue-600 rounded-full border-2 border-blue-200 bg-white/90 backdrop-blur-sm hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                                style={{
                                    padding: isMobile ? '12px 24px' : 'clamp(12px, 1.2vh, 16px) clamp(24px, 2.5vw, 36px)',
                                    fontSize: isMobile ? '13px' : 'clamp(13px, 1vw, 15px)'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <span className="flex items-center gap-2">
                                    Connect Us
                                    <motion.span
                                        className="inline-block"
                                        whileHover={{ rotate: 45 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        ↗
                                    </motion.span>
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Main Grid with Cards and Center Image */}
            <div
                className={`${homeStyles.container} flex-1 flex items-center justify-center`}
                style={{
                    maxHeight: isMobile ? 'none' : isTablet ? '400px' : 'clamp(380px, 50vh, 520px)',
                    minHeight: isMobile ? 'auto' : '300px'
                }}
            >
                <div
                    className="relative w-full h-full grid gap-4 lg:gap-5 items-center"
                    style={{
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1.1fr 1fr'
                    }}
                >

                    {/* Left Column - Cards 1 & 3 */}
                    <div
                        className="flex flex-col h-full justify-center"
                        style={{ gap: isMobile ? '12px' : isTablet ? '14px' : 'clamp(14px, 2vh, 24px)' }}
                    >
                        <FeatureCard
                            number="01"
                            Icon={Building2}
                            title="Corporate Programs"
                            description="With TechFleek, hiring becomes effortless. Embrace the future of recruitment today."
                            delay={0.1}
                        />
                        <FeatureCard
                            number="03"
                            Icon={GraduationCap}
                            title="Leadership Training"
                            description="Empowering Tomorrow's Leaders Today. With TechFleek, delve into training modules."
                            delay={0.3}
                        />
                    </div>

                    {/* Center Column - People Image (Hidden on mobile & tablet) */}
                    <motion.div
                        className="hidden lg:flex items-center justify-center h-full"
                        variants={imageVariants}
                    >
                        <motion.div
                            className="relative w-full h-full flex items-end justify-center"
                            animate={floatAnimation}
                            transition={floatTransition}
                        >
                            <img
                                src="/home-page/about-techfleek-illustration.svg"
                                alt="Professional Team"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                style={{ maxHeight: '100%' }}
                            />
                            {/* Glow effect under image */}
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-2xl opacity-30"
                                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Cards 2 & 4 */}
                    <div
                        className="flex flex-col h-full justify-center"
                        style={{ gap: isMobile ? '12px' : isTablet ? '14px' : 'clamp(14px, 2vh, 24px)' }}
                    >
                        <FeatureCard
                            number="02"
                            Icon={Users}
                            title="Recruitment Solutions"
                            description="Finding the perfect fit for every role, with TechFleek's expert recruitment solutions."
                            delay={0.15}
                        />
                        <FeatureCard
                            number="04"
                            Icon={TrendingUp}
                            title="Improving Resource"
                            description="Optimizing Assets for Peak Productivity. TechFleek transforms resources, enhancing efficiency."
                            delay={0.35}
                        />
                    </div>

                </div>
            </div>


        </section >
    );
};

export default AboutTechFleek;