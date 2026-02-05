"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });

interface Metric {
    value: string;
    label: string;
    icon: 'trending' | 'users' | 'clock' | 'award';
    color: string;
}

interface OutcomeSectionProps {
    metrics: Metric[];
    summary: string;
}

const iconMap = {
    trending: TrendingUp,
    users: Users,
    clock: Clock,
    award: Award,
};

export default function OutcomeSection({ metrics, summary }: OutcomeSectionProps) {
    return (
        <section className="w-full py-7 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    className="text-center mb-5 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className={`${redHat.className} text-[14px] sm:text-[16px] font-bold text-[#3C8ECB] mb-2 block tracking-wide uppercase`}>
                        Results & Impact
                    </span>
                    <h2 className={`${inter.className} text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.2]`}>
                        The Outcome
                    </h2>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    {metrics.map((metric, idx) => {
                        const IconComponent = iconMap[metric.icon];
                        return (
                            <motion.div
                                key={idx}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 text-center will-change-transform"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: `${metric.color}20` }}
                                >
                                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: metric.color }} />
                                </div>

                                {/* Value */}
                                <div className={`${inter.className} text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-1`} style={{ color: metric.color }}>
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div className={`${inter.className} text-[12px] sm:text-[14px] text-gray-400`}>
                                    {metric.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Summary */}
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <p className={`${inter.className} text-[14px] sm:text-[16px] lg:text-[18px] text-gray-300 leading-relaxed`}>
                        {summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
