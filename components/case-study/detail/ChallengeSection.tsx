"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';
import { AlertTriangle } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });

interface Challenge {
    title: string;
    description: string;
}

interface ChallengeSectionProps {
    challenges: Challenge[];
}

export default function ChallengeSection({ challenges }: ChallengeSectionProps) {
    return (
        <section className="w-full py-7 bg-[#F9FAFB]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    className="text-center mb-5 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className={`${redHat.className} text-[14px] sm:text-[16px] font-bold bg-gradient-to-r from-[#3C8ECB] to-[#000000] bg-clip-text text-transparent mb-2 block tracking-wide uppercase`}>
                        The Problem
                    </span>
                    <h2 className={`${inter.className} text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#111827] leading-[1.2]`}>
                        Challenges Faced
                    </h2>
                </motion.div>

                {/* Challenge Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {challenges.map((challenge, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 will-change-transform"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                            </div>

                            {/* Title */}
                            <h3 className={`${inter.className} text-[16px] sm:text-[18px] font-semibold text-[#111827] mb-2`}>
                                {challenge.title}
                            </h3>

                            {/* Description */}
                            <p className={`${inter.className} text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed`}>
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
