"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

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
        <section className="w-full py-12 md:py-16 bg-slate-900 font-[family-name:var(--font-red-hat)]">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className={`${homeStyles.label} !text-[#3C8ECB]`}>
                        RESULTS & IMPACT
                    </span>
                    <h2 className={`${homeStyles.title} !text-white`}>
                        The <span className={homeStyles.gradientText}>Outcome</span>
                    </h2>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {metrics.map((metric, idx) => {
                        const IconComponent = iconMap[metric.icon];
                        return (
                            <motion.div
                                key={idx}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                                    style={{ backgroundColor: `${metric.color}20` }}
                                >
                                    <IconComponent className="w-6 h-6" style={{ color: metric.color }} />
                                </div>

                                {/* Value */}
                                <span className="block font-black text-3xl md:text-4xl mb-1" style={{ color: metric.color }}>
                                    {metric.value}
                                </span>

                                {/* Label */}
                                <span className="text-slate-400 text-xs font-medium">
                                    {metric.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Summary */}
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
