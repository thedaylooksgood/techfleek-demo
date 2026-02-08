"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

interface Challenge {
    title: string;
    description: string;
}

interface ChallengeSectionProps {
    challenges: Challenge[];
}

export default function ChallengeSection({ challenges }: ChallengeSectionProps) {
    return (
        <section className="w-full py-12 md:py-16 bg-slate-50 font-[family-name:var(--font-red-hat)]">
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
                        THE PROBLEM
                    </span>
                    <h2 className={homeStyles.title}>
                        Challenges <span className={homeStyles.gradientText}>Faced</span>
                    </h2>
                    <p className={homeStyles.description}>
                        Understanding the obstacles that needed to be overcome to deliver success.
                    </p>
                </motion.div>

                {/* Challenge Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {challenges.map((challenge, idx) => (
                        <motion.div
                            key={idx}
                            className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center mb-4 transition-colors">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-red-600 transition-colors">
                                {challenge.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-xs leading-relaxed">
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
