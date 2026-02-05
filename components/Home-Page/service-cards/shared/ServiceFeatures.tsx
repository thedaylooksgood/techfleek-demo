'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ServiceFeaturesProps {
    sectionTitle?: string;
    sectionSubtitle?: string;
    features: Feature[];
}

export default function ServiceFeatures({
    sectionTitle = "What We Offer",
    sectionSubtitle = "Our Expertise",
    features
}: ServiceFeaturesProps) {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
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

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#3C8ECB]/20 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3C8ECB] to-[#0A2540] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <FeatureIcon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className={`${redHat.className} text-gray-900 text-lg md:text-xl font-bold mb-3`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className={`${inter.className} text-gray-600 text-sm md:text-base leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
