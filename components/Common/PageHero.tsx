'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { homeStyles } from '../Home-Page/styles';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    className?: string;
    showCTA?: boolean;
    ctaPrimaryText?: string;
    ctaPrimaryHref?: string;
    ctaSecondaryText?: string;
    ctaSecondaryHref?: string;
}

// Floating animation
const floatAnimation = {
    animate: {
        y: [0, -8, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
};

const pulseAnimation = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
    }
};

export default function PageHero({
    title,
    subtitle,
    description,
    breadcrumbs = [{ label: 'Home', href: '/' }],
    className = '',
    showCTA = false,
    ctaPrimaryText,
    ctaPrimaryHref,
    ctaSecondaryText,
    ctaSecondaryHref,
}: PageHeroProps) {
    return (
        <section className={`relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] flex items-center justify-center font-sans overflow-hidden ${className}`}>

            {/* Vibrant gradient background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30" />

            {/* Prominent gradient orbs with animation - responsive sizes */}
            <motion.div
                variants={pulseAnimation}
                animate="animate"
                className="absolute -top-10 right-1/4 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-[#3C8ECB]/30 to-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
                variants={pulseAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute -bottom-20 left-1/4 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-tr from-indigo-500/25 to-purple-500/15 rounded-full blur-3xl"
            />
            <motion.div
                variants={floatAnimation}
                animate="animate"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-r from-[#3C8ECB]/15 via-indigo-400/10 to-purple-400/15 rounded-full blur-3xl"
            />

            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    ...homeStyles.gridBackgroundStyle,
                    maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 70%)',
                    opacity: 0.4,
                }}
            />

            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-[#3C8ECB] to-transparent opacity-80" />

            {/* Floating decorative elements - hidden on very small screens */}
            <motion.div
                variants={floatAnimation}
                animate="animate"
                className="hidden sm:block absolute top-16 left-[10%] md:left-[15%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-br from-[#3C8ECB] to-indigo-500 opacity-60"
            />
            <motion.div
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="hidden sm:block absolute bottom-16 right-[15%] md:right-[20%] w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50"
            />
            <motion.div
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="hidden md:block absolute top-24 right-[10%] w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-br from-blue-400 to-[#3C8ECB] opacity-40"
            />

            {/* Content - Perfectly Centered */}
            <div className="relative z-10 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">

                {/* Breadcrumbs - responsive sizing */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-2 sm:mb-3 md:mb-4 flex items-center gap-1 sm:gap-2 flex-wrap justify-center"
                    aria-label="Breadcrumb"
                >
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {crumb.href ? (
                                <Link
                                    href={crumb.href}
                                    className="text-slate-400 hover:text-[#3C8ECB] transition-colors text-[10px] sm:text-xs font-medium"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-[#3C8ECB] font-semibold text-[10px] sm:text-xs">
                                    {crumb.label}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <ChevronRight size={10} className="text-slate-300 sm:w-3 sm:h-3" />
                            )}
                        </React.Fragment>
                    ))}
                </motion.nav>

                {/* Title with responsive typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-black tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.1] mb-2 sm:mb-3 max-w-4xl"
                >
                    {title}
                    {subtitle && (
                        <>
                            {' '}
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] via-blue-500 to-indigo-600 animate-text-shimmer bg-[length:200%_auto]">
                                {subtitle}
                                {/* Underline decoration */}
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-[2px] sm:h-0.5 bg-gradient-to-r from-[#3C8ECB] to-indigo-500 origin-left"
                                />
                            </span>
                        </>
                    )}
                </motion.h1>

                {/* Description - responsive sizing and max-width */}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md font-medium px-2"
                    >
                        {description}
                    </motion.p>
                )}

                {/* CTA Buttons */}
                {showCTA && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-wrap items-center justify-center gap-3 mt-6 sm:mt-8"
                    >
                        {ctaPrimaryText && (
                            <Link href={ctaPrimaryHref || '#'}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#3C8ECB] hover:bg-[#3C8ECB]/90 text-white rounded-full font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-200 flex items-center gap-2"
                                >
                                    {ctaPrimaryText}
                                    <ArrowRight size={16} />
                                </motion.button>
                            </Link>
                        )}
                        {ctaSecondaryText && (
                            <Link href={ctaSecondaryHref || '#'}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm"
                                >
                                    {ctaSecondaryText}
                                </motion.button>
                            </Link>
                        )}
                    </motion.div>
                )}

            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
