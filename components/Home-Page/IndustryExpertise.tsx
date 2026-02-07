'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageCircleQuestion, Rocket, Clock, Code2, Headphones } from 'lucide-react';
import { homeStyles } from './styles';

// FAQ/Expertise data with icons
const expertiseItems = [
    {
        number: '01',
        title: 'How do you approach new projects?',
        description: 'We start with a deep-dive discovery session to understand your business goals, target audience, and technical requirements. Our team crafts a custom roadmap that aligns with your vision and delivers measurable results within your timeline and budget.',
        icon: Rocket,
        color: '#43baffff'
    },
    {
        number: '02',
        title: 'What industries do you specialize in?',
        description: 'Our expertise spans across E-Commerce, CRM Systems, SaaS Platforms, Healthcare, FinTech, Real Estate, and Rental Management. We bring domain-specific knowledge that accelerates development and ensures industry best practices.',
        icon: MessageCircleQuestion,
        color: '#43d1fcff'
    },
    {
        number: '03',
        title: 'How soon can you start a project?',
        description: 'It depends on several factors such as our current capacity, particular product\'s needs, or your responsiveness. Our experience shows that we can kick off the project within 1 or 2 weeks from receiving an inquiry. Having 250+ team members on board allows us to form and scale the team quickly while ensuring a short lead time.',
        icon: Clock,
        color: '#43baffff'
    },
    {
        number: '04',
        title: 'What technologies do you work with?',
        description: 'We work with modern tech stacks including React, Next.js, Node.js, Python, Flutter, and cloud platforms like AWS and Azure. Our team stays updated with the latest technologies to deliver cutting-edge solutions.',
        icon: Code2,
        color: '#43baffff'
    },
    {
        number: '05',
        title: 'Do you provide ongoing support?',
        description: 'Absolutely. We offer comprehensive maintenance packages including bug fixes, performance optimization, security updates, and feature enhancements. Our support team ensures your product remains robust and up-to-date.',
        icon: Headphones,
        color: '#43baffff'
    },
];

// Animated floating shape component
const FloatingShape = ({
    className,
    delay = 0,
    duration = 4,
    style
}: {
    className?: string;
    delay?: number;
    duration?: number;
    style?: React.CSSProperties;
}) => (
    <motion.div
        className={className}
        style={style}
        animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

export default function IndustryExpertise() {
    const fontRedHat = "font-[family-name:var(--font-red-hat)]";
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const leftOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // Typography
    const labelSize = isMobile ? '10px' : 'clamp(11px, 1vw, 13px)';
    const headlineSize = isMobile ? '26px' : isTablet ? '32px' : 'clamp(32px, 4vw, 48px)';
    const contentSize = isMobile ? '11px' : isTablet ? '12px' : 'clamp(11px, 1vw, 14px)';

    const StickyLeftContent = () => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ opacity: isMobile ? 1 : leftOpacity }}
        >
            {/* Label */}
            <motion.div
                className="inline-flex items-center gap-2 mb-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                </motion.div>
                <span
                    className="text-gray-400 font-medium tracking-wider uppercase"
                    style={{ fontSize: labelSize }}
                >
                    Frequently Asked
                </span>
            </motion.div>

            {/* Main Headline */}
            <h2
                className={homeStyles.title}
                style={{
                    marginBottom: isMobile ? '12px' : 'clamp(12px, 2vh, 20px)'
                }}
            >
                <span
                    style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Outsourcing is
                </span>
                <br />
                <span className="inline-flex items-center gap-2 my-1">
                    <motion.div
                        animate={{ rotate: [0, 5, 0], y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowUpRight
                            className="text-blue-300"
                            style={{
                                width: isMobile ? '22px' : '30px',
                                height: isMobile ? '22px' : '30px'
                            }}
                        />
                    </motion.div>
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #43baffff 0%, #43baffff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        a big leap
                    </span>
                </span>
                <span
                    style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    {' '}for your
                </span>
                <br />
                <span
                    style={{
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    development projects
                </span>
            </h2>

            {/* Animated dot */}
            <motion.div
                className="w-2 h-2 rounded-full bg-blue-300 mb-4"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Subtext */}
            <p
                className={homeStyles.description}
            >
                On your path to greater velocity and flexibility, we've got you covered every step of the way.
            </p>

            {/* Animated decorative elements */}
            <div className="mt-8 relative h-20 hidden lg:block">
                {/* Floating badges */}
                <motion.div
                    className="absolute left-0 top-0 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                        background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                        color: '#6366f1',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)'
                    }}
                    animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    🚀 Fast Delivery
                </motion.div>

                <motion.div
                    className="absolute left-24 top-8 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                        background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
                        color: '#d97706',
                        boxShadow: '0 4px 12px rgba(245, 158, 11, 0.15)'
                    }}
                    animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
                    transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    ⭐ 5-Star Reviews
                </motion.div>

                <motion.div
                    className="absolute left-4 top-14 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                        background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
                        color: '#059669',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)'
                    }}
                    animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                    transition={{ duration: 3.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                    💯 Quality First
                </motion.div>
            </div>
        </motion.div>
    );

    return (
        <section
            ref={sectionRef}
            className={`${homeStyles.section.replace('overflow-hidden', '')} overflow-x-clip`}
            style={{
                paddingTop: '60px',
                paddingBottom: '60px'
            }}
        >
            {/* Animated background elements */}
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <div
                className={homeStyles.container}
            >
                {/* Two Column Layout */}
                <div className={`flex ${isMobile ? 'flex-col gap-10' : 'flex-row'}`}>

                    {/* LEFT COLUMN - Sticky */}
                    {!isMobile && (
                        <div
                            className="w-[42%] pr-16"
                            style={{
                                position: 'sticky',
                                top: '100px',
                                height: 'max-content',
                                alignSelf: 'start'
                            }}
                        >
                            <StickyLeftContent />
                        </div>
                    )}

                    {isMobile && (
                        <div className="w-full">
                            <StickyLeftContent />
                        </div>
                    )}

                    {/* RIGHT COLUMN - Cards with animated icons */}
                    <div className={isMobile ? 'w-full' : 'w-[58%]'}>
                        <div className="flex flex-col gap-4">
                            {expertiseItems.map((item, index) => {
                                const isActive = activeIndex === index;
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.number}
                                        className="cursor-pointer group"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                    >
                                        <motion.div
                                            className="rounded-2xl lg:rounded-3xl overflow-hidden relative bg-white"
                                            style={{
                                                border: isActive
                                                    ? `1px solid ${item.color}40`
                                                    : '1px solid rgba(229, 231, 235, 0.8)',
                                                padding: isMobile ? '16px' : isTablet ? '18px' : 'clamp(18px, 2vw, 28px)',
                                                boxShadow: isActive
                                                    ? `0 20px 40px ${item.color}20`
                                                    : '0 4px 20px rgba(0, 0, 0, 0.04)',
                                                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                            }}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.02
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Gradient overlay */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl"
                                                style={{
                                                    background: `linear-gradient(135deg, ${item.color}05 0%, ${item.color}08 100%)`
                                                }}
                                            />

                                            {/* Left accent bar */}
                                            <motion.div
                                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl lg:rounded-l-3xl"
                                                style={{ background: item.color }}
                                                initial={{ scaleY: 0, opacity: 0 }}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    scaleY: isActive ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />

                                            <div className="relative flex items-start gap-3 lg:gap-4">
                                                {/* Animated Icon */}
                                                <motion.div
                                                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                                                    style={{
                                                        width: isMobile ? '40px' : isTablet ? '44px' : 'clamp(44px, 4vw, 56px)',
                                                        height: isMobile ? '40px' : isTablet ? '44px' : 'clamp(44px, 4vw, 56px)',
                                                        background: isActive
                                                            ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)`
                                                            : '#f9fafb'
                                                    }}
                                                    animate={{
                                                        scale: isActive ? [1, 1.1, 1] : 1,
                                                        rotate: isActive ? [0, 5, -5, 0] : 0
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <motion.div
                                                        animate={isActive ? {
                                                            y: [0, -2, 0],
                                                            scale: [1, 1.1, 1]
                                                        } : {}}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: isActive ? Infinity : 0,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <Icon
                                                            style={{
                                                                width: isMobile ? '20px' : '24px',
                                                                height: isMobile ? '20px' : '24px',
                                                                color: isActive ? item.color : '#9ca3af'
                                                            }}
                                                        />
                                                    </motion.div>
                                                </motion.div>

                                                <div className="flex-1">
                                                    {/* Title */}
                                                    <h3
                                                        className="font-bold transition-colors duration-300"
                                                        style={{
                                                            fontSize: isMobile ? '14px' : isTablet ? '15px' : 'clamp(14px, 1.3vw, 18px)',
                                                            lineHeight: '1.3',
                                                            color: isActive ? '#1a1a2e' : '#374151'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <motion.div
                                                        initial={false}
                                                        animate={{
                                                            height: isActive ? 'auto' : 0,
                                                            opacity: isActive ? 1 : 0,
                                                            marginTop: isActive ? '6px' : 0
                                                        }}
                                                        transition={{
                                                            height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                                                            opacity: { duration: 0.25, delay: isActive ? 0.1 : 0 }
                                                        }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <p
                                                            className="text-gray-500"
                                                            style={{
                                                                fontSize: contentSize,
                                                                lineHeight: '1.5'
                                                            }}
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}