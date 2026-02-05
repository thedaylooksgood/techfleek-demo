'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
    title: string;
    highlightedTitle: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    badgeText: string;
    imageSrc?: string;
    floatingBadge1?: { icon: string; label: string; value: string };
    floatingBadge2?: { icon: string; label: string; value: string };
}

export default function ServiceHero({
    title,
    highlightedTitle,
    subtitle,
    description,
    icon: Icon,
    badgeText,
    imageSrc = '/images/service-hero.jpg',
    floatingBadge1,
    floatingBadge2,
}: ServiceHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-[#3C8ECB]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3C8ECB]/20 border border-[#3C8ECB]/30 rounded-full">
                            <Icon className="w-4 h-4 text-[#3C8ECB]" />
                            <span className="text-[#60a5fa] text-sm font-semibold tracking-wide uppercase">
                                {badgeText}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            {title} <br />
                            <span className="bg-gradient-to-r from-[#3C8ECB] to-[#60a5fa] bg-clip-text text-transparent">
                                {highlightedTitle}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/enquiry"
                                className="bg-[#3C8ECB] hover:bg-[#2d7ab8] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
                            >
                                Start Your Project
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/case-study"
                                className="border border-gray-500 hover:border-white text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2"
                            >
                                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-[#1e293b]/50 backdrop-blur-sm p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-80 bg-gradient-to-br from-[#3C8ECB]/20 to-[#1e293b] rounded-xl flex items-center justify-center">
                                <Icon className="w-32 h-32 text-[#3C8ECB]/50" />
                            </div>
                        </div>

                        {/* Floating badge 1 */}
                        {floatingBadge1 && (
                            <div className="absolute -bottom-6 -left-6 bg-[#1e293b] border border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">{floatingBadge1.label}</p>
                                    <p className="text-white font-bold text-sm">{floatingBadge1.value}</p>
                                </div>
                            </div>
                        )}

                        {/* Floating badge 2 */}
                        {floatingBadge2 && (
                            <div className="absolute -top-6 -right-6 bg-[#1e293b] border border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">{floatingBadge2.label}</p>
                                    <p className="text-white font-bold text-sm">{floatingBadge2.value}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
