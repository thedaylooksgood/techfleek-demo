"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });

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
        <section className="w-full py-6 sm:py-7 bg-white flex justify-center overflow-visible">
            <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 relative grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-10 items-start mx-auto">

                {/* LEFT COLUMN: Text & Stats */}
                <motion.div
                    className="flex flex-col will-change-transform"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Header */}
                    <div className="mb-4 sm:mb-5 lg:mb-6">
                        <span className={`${redHat.className} text-[14px] sm:text-[16px] lg:text-[20px] font-bold bg-gradient-to-r from-[#3C8ECB] to-[#000000] bg-clip-text text-transparent mb-2 block tracking-wide`}>
                            {caseStudyNumber}
                        </span>
                        <h2 className={`${inter.className} text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-[#111827] mb-4 lg:mb-6 leading-[1.2]`}>
                            About {companyName}
                        </h2>
                        <p className={`${inter.className} text-[14px] sm:text-[16px] lg:text-[18px] text-[#4B5563] leading-relaxed`}>
                            {description}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-3">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="w-full h-[80px] sm:h-[88px] lg:h-[92px] bg-[#DBEAFE] rounded-lg flex flex-col items-center justify-center will-change-transform"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.3, delay: idx * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <span className={`${inter.className} text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#3C8ECB]`}>
                                    {stat.value}
                                </span>
                                <span className={`${inter.className} text-[11px] sm:text-[12px] lg:text-[14px] text-[#525252] mt-1`}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Image & Float Card */}
                <motion.div
                    className="relative w-full flex justify-center lg:block mt-4 sm:mt-6 lg:mt-10 will-change-transform"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="relative w-full max-w-[584px] aspect-[584/384]">
                        {/* Main Image */}
                        <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={imageSrc}
                                alt={companyName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlapping Card */}
                        <motion.div
                            className="absolute bottom-[-20px] right-[-10px] sm:bottom-[-24px] sm:right-0 lg:bottom-auto lg:right-auto lg:left-[52%] lg:top-[82%] bg-white rounded-xl flex items-center p-3 sm:p-4 gap-3 sm:gap-4 z-20 w-[70%] sm:w-[60%] lg:w-[300px] min-h-[72px] sm:min-h-[80px] lg:min-h-[96px] will-change-transform"
                            style={{
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            {/* Icon Box */}
                            <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#6366F1] rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-[18px] sm:h-[16px]" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.75 2.25H14.25V1.5C14.25 1.10218 14.092 0.720644 13.8107 0.43934C13.5294 0.158035 13.1478 0 12.75 0H5.25C4.85218 0 4.47064 0.158035 4.18934 0.43934C3.90804 0.720644 3.75 1.10218 3.75 1.5V2.25H2.25C1.65326 2.25 1.08097 2.48705 0.65901 2.90901C0.237053 3.33097 0 3.90326 0 4.5V6C0 7.502 1.012 8.761 2.396 9.124C2.793 11.238 4.474 12.915 6.6 13.337V15.25H5.25C5.05109 15.25 4.86032 15.329 4.71967 15.4697C4.57902 15.6103 4.5 15.8011 4.5 16H13.5C13.5 15.8011 13.421 15.6103 13.2803 15.4697C13.1397 15.329 12.9489 15.25 12.75 15.25H11.4V13.337C13.526 12.915 15.207 11.238 15.604 9.124C16.988 8.761 18 7.502 18 6V4.5C18 3.90326 17.7629 3.33097 17.341 2.90901C16.919 2.48705 16.3467 2.25 15.75 2.25Z" fill="white" />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center">
                                <span className={`${inter.className} text-[13px] sm:text-[14px] lg:text-[16px] font-bold text-[#111827] leading-[1.2]`}>
                                    {badgeTitle}
                                </span>
                                <span className={`${inter.className} text-[11px] sm:text-[12px] lg:text-[14px] font-normal text-[#4B5563] leading-[1.2] mt-0.5`}>
                                    {badgeSubtitle}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
