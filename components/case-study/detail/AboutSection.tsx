"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { homeStyles } from '@/components/Home-Page/styles';

interface Stat {
    value: string;
    label: string;
}

interface AboutSectionProps {
    caseStudyNumber: string;
    companyName: string;
    description: string;
    stats: Stat[];
    imageSrc: string;
    badgeTitle: string;
    badgeSubtitle: string;
}

export default function AboutSection({
    caseStudyNumber,
    companyName,
    description,
    stats,
    imageSrc,
    badgeTitle,
    badgeSubtitle
}: AboutSectionProps) {
    return (
        <section className="w-full py-12 md:py-16 bg-white font-[family-name:var(--font-red-hat)]">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* LEFT COLUMN: Text & Stats */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className={homeStyles.headerWrapper}>
                            <span className={homeStyles.label}>
                                {caseStudyNumber}
                            </span>
                            <h2 className={homeStyles.title}>
                                About <span className={homeStyles.gradientText}>{companyName}</span>
                            </h2>
                            <p className={homeStyles.description}>
                                {description}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-[#3C8ECB]/10 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <span className="block font-black text-2xl md:text-3xl text-[#3C8ECB]">
                                        {stat.value}
                                    </span>
                                    <span className="text-slate-500 text-xs font-medium">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Image & Float Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={imageSrc}
                                alt={companyName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                        </div>

                        {/* Floating Badge Card */}
                        <motion.div
                            className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-3"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div className="w-10 h-10 bg-[#3C8ECB] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block font-bold text-slate-900 text-sm">{badgeTitle}</span>
                                <span className="text-slate-500 text-xs">{badgeSubtitle}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
