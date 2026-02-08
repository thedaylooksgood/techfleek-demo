"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

interface CaseStudyHeroProps {
    tag: string;
    category: string;
    title: string;
    subtitle: string;
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

export default function CaseStudyHero({ tag, category, title, subtitle }: CaseStudyHeroProps) {
    return (
        <section className="relative w-full min-h-[280px] md:min-h-[320px] flex items-center justify-center font-[family-name:var(--font-red-hat)] overflow-hidden pt-[90px] pb-8">
            {/* Vibrant gradient background - matching PageHero */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30" />

            {/* Prominent gradient orbs with animation */}
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

            {/* Floating decorative elements */}
            <motion.div
                variants={floatAnimation}
                animate="animate"
                className="hidden sm:block absolute top-20 left-[10%] md:left-[15%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-br from-[#3C8ECB] to-indigo-500 opacity-60"
            />
            <motion.div
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="hidden sm:block absolute bottom-16 right-[15%] md:right-[20%] w-2 h-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50"
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 text-left">
                {/* Breadcrumbs */}
                <motion.nav
                    className="flex items-center gap-1.5 text-xs text-slate-500 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link href="/" className="hover:text-[#3C8ECB] transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/case-study" className="hover:text-[#3C8ECB] transition-colors">Case Studies</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#3C8ECB] font-medium">{category}</span>
                </motion.nav>

                {/* Tag Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-[#3C8ECB]/10 backdrop-blur-sm text-[#3C8ECB] rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <span>{tag}</span>
                    <span className="w-1 h-1 bg-[#3C8ECB]/50 rounded-full" />
                    <span className="text-slate-600">{category}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className={`${homeStyles.title} !text-2xl md:!text-3xl lg:!text-4xl max-w-[800px] mb-3`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className={`${homeStyles.description} max-w-[700px]`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
