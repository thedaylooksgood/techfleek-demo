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
    description: string;
    breadcrumbs?: BreadcrumbItem[];
    showCTA?: boolean;
    ctaPrimaryText?: string;
    ctaPrimaryHref?: string;
    ctaSecondaryText?: string;
    ctaSecondaryHref?: string;
    className?: string;
}

export default function PageHero({
    title,
    subtitle,
    description,
    breadcrumbs = [{ label: 'Home', href: '/' }],
    showCTA = false,
    ctaPrimaryText = 'Get Started',
    ctaPrimaryHref = '/enquiry',
    ctaSecondaryText = 'Learn More',
    ctaSecondaryHref = '/about-us',
    className = '',
}: PageHeroProps) {
    return (
        <section className={`relative w-full min-h-[40vh] max-h-[500px] bg-[#F8F9FB] flex items-center justify-center font-sans overflow-hidden py-16 pt-28 lg:pt-32 ${className}`}>

            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    ...homeStyles.gridBackgroundStyle,
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 50%, transparent 100%)',
                }}
            />

            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 60% at 50% 30%, rgba(60, 142, 203, 0.05), transparent)',
                }}
            />

            <div className="relative z-10 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">

                {/* Breadcrumbs */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center gap-2"
                    aria-label="Breadcrumb"
                >
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {crumb.href ? (
                                <Link
                                    href={crumb.href}
                                    className="text-slate-500 hover:text-[#3C8ECB] transition-colors text-xs sm:text-sm font-medium"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-[#3C8ECB] font-semibold text-xs sm:text-sm">
                                    {crumb.label}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <ChevronRight size={14} className="text-slate-300" />
                            )}
                        </React.Fragment>
                    ))}
                </motion.nav>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-2"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3C8ECB] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3C8ECB]"></span>
                    </span>
                    <span className={homeStyles.label}>
                        TechFleek
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.1] mb-5"
                >
                    {title}
                    {subtitle && (
                        <>
                            {' '}
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB] animate-text-shimmer bg-[length:200%_auto]">
                                {subtitle}
                            </span>
                        </>
                    )}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl font-medium mb-8"
                >
                    {description}
                </motion.p>

                {/* CTA Buttons */}
                {showCTA && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href={ctaPrimaryHref}>
                            <button className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer-slide" />
                                {ctaPrimaryText}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                        <Link href={ctaSecondaryHref}>
                            <button className="font-semibold text-slate-600 hover:text-[#3C8ECB] transition-colors flex items-center gap-2">
                                {ctaSecondaryText}
                                <ArrowRight size={16} />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
