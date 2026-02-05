"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';
import { CheckCircle2 } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });

interface SolutionStep {
    title: string;
    description: string;
}

interface SolutionSectionProps {
    steps: SolutionStep[];
}

export default function SolutionSection({ steps }: SolutionSectionProps) {
    return (
        <section className="w-full py-7 bg-white">
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
                        Our Approach
                    </span>
                    <h2 className={`${inter.className} text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#111827] leading-[1.2]`}>
                        The Solution
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Hidden on mobile */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3C8ECB] via-[#3C8ECB] to-transparent transform -translate-x-1/2" />

                    {/* Steps */}
                    <div className="space-y-6 lg:space-y-0">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } will-change-transform`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                {/* Content Card */}
                                <div className={`w-full lg:w-[45%] bg-[#F9FAFB] rounded-xl p-5 sm:p-6 border border-gray-100 ${idx % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                                    }`}>
                                    <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                        <div className="w-8 h-8 bg-[#3C8ECB] rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <h3 className={`${inter.className} text-[16px] sm:text-[18px] font-semibold text-[#111827]`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className={`${inter.className} text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed`}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Icon - Only on desktop */}
                                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-2 border-[#3C8ECB] rounded-full items-center justify-center z-10">
                                    <CheckCircle2 className="w-5 h-5 text-[#3C8ECB]" />
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden lg:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
