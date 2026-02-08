"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

interface SolutionStep {
    title: string;
    description: string;
}

interface SolutionSectionProps {
    steps: SolutionStep[];
}

export default function SolutionSection({ steps }: SolutionSectionProps) {
    return (
        <section className="w-full py-12 md:py-16 bg-white font-[family-name:var(--font-red-hat)]">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div
                    className={homeStyles.headerWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className={homeStyles.label}>
                        OUR APPROACH
                    </span>
                    <h2 className={homeStyles.title}>
                        The <span className={homeStyles.gradientText}>Solution</span>
                    </h2>
                    <p className={homeStyles.description}>
                        A strategic approach tailored to overcome each challenge effectively.
                    </p>
                </motion.div>

                {/* Solution Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="group bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Step Number Background */}
                            <div className="absolute -top-4 -right-4 text-8xl font-black text-[#3C8ECB]/5 select-none">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            <div className="relative flex items-start gap-4">
                                {/* Step Number */}
                                <div className="w-10 h-10 bg-[#3C8ECB] group-hover:bg-[#3C8ECB]/90 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0 transition-colors">
                                    {idx + 1}
                                </div>

                                <div className="flex-1">
                                    {/* Title */}
                                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#3C8ECB] transition-colors">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Check Icon */}
                                <CheckCircle2 className="w-5 h-5 text-[#3C8ECB] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
