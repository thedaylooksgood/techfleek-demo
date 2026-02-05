'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    sectionTitle?: string;
    sectionSubtitle?: string;
    steps: ProcessStep[];
}

export default function ServiceProcess({
    sectionTitle = "How We Work",
    sectionSubtitle = "Our Process",
    steps
}: ServiceProcessProps) {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <p className={`${redHat.className} text-[#3C8ECB] text-sm md:text-base font-bold uppercase tracking-widest mb-2`}>
                        {sectionSubtitle}
                    </p>
                    <h2 className={`${redHat.className} text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold`}>
                        {sectionTitle}
                    </h2>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            {/* Step Number */}
                            <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#3C8ECB] to-[#0A2540] mb-5">
                                <span className={`${redHat.className} text-white text-2xl md:text-3xl font-bold`}>
                                    {step.number}
                                </span>
                            </div>

                            {/* Connector Line (hidden on mobile and last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#3C8ECB]/30 to-transparent" />
                            )}

                            {/* Title */}
                            <h3 className={`${redHat.className} text-gray-900 text-lg md:text-xl font-bold mb-3`}>
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className={`${inter.className} text-gray-600 text-sm md:text-base leading-relaxed max-w-[280px] mx-auto`}>
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
