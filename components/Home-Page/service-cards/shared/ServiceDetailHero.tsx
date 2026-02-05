'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';
import { LucideIcon } from 'lucide-react';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

interface ServiceDetailHeroProps {
    tag: string;
    category: string;
    title: string;
    subtitle: string;
    icon?: LucideIcon;
}

export default function ServiceDetailHero({ tag, category, title, subtitle, icon: Icon }: ServiceDetailHeroProps) {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-white px-4 pt-[74px] lg:pt-[98px] pb-8 sm:pb-10 lg:pb-12">
            {/* Background Gradient */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }}
            />

            {/* Background Pattern */}
            <div className="absolute inset-0 z-1 mix-blend-screen pointer-events-none opacity-30">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-[900px] mx-auto text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Tag with Icon */}
                <div className={`${inter.className} inline-flex items-center gap-2 px-4 py-1.5 mb-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-[12px] sm:text-[13px] font-medium tracking-wide uppercase`}>
                    {Icon && <Icon className="w-4 h-4 text-cyan-300" />}
                    <span className="text-cyan-300 font-semibold">{tag}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <span>{category}</span>
                </div>

                {/* Title */}
                <h1 className={`${redHat.className} text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold leading-[1.2] mb-3 drop-shadow-lg max-w-[800px]`}>
                    {title}
                </h1>

                {/* Subtitle */}
                <p className={`${inter.className} text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-200 max-w-[700px] leading-[1.5] font-normal`}>
                    {subtitle}
                </p>
            </motion.div>
        </section>
    );
}
