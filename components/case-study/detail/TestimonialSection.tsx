"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface StatCard {
    value: string;
    label: string;
}

interface TestimonialSectionProps {
    quote: string;
    authorName: string;
    authorRole: string;
    authorImage?: string;
    stats?: StatCard[];
}

export default function TestimonialSection({
    quote,
    authorName,
    authorRole,
    authorImage = "/About-Us/person1.png",
    stats = [
        { value: "98%", label: "Customer Satisfaction" },
        { value: "24/7", label: "Real-time Monitoring" },
        { value: "ROI", label: "15x Return on Investment" }
    ]
}: TestimonialSectionProps) {
    return (
        <section className="w-full py-6 sm:py-7 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Main Content Container */}
                <div className="flex flex-col items-center">

                    {/* Author Image - Circular */}
                    <motion.div
                        className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] lg:w-[96px] lg:h-[96px] rounded-full overflow-hidden mb-4 sm:mb-6 will-change-transform"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <Image
                            src={authorImage}
                            alt={authorName}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Quote Text */}
                    <motion.p
                        className={`${inter.className} text-[14px] sm:text-[18px] lg:text-[24px] text-[#111827] font-medium text-center leading-[1.5] sm:leading-[1.6] max-w-[95%] sm:max-w-[883px] mb-4 sm:mb-6`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
                    >
                        "{quote}"
                    </motion.p>

                    {/* Author Name */}
                    <motion.h4
                        className={`${inter.className} text-[14px] sm:text-[16px] lg:text-[18px] font-bold text-[#111827] text-center mb-0.5 sm:mb-1`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
                    >
                        {authorName}
                    </motion.h4>

                    {/* Author Role */}
                    <motion.p
                        className={`${inter.className} text-[12px] sm:text-[14px] lg:text-[16px] text-[#4B5563] text-center mb-6 sm:mb-8`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                    >
                        {authorRole}
                    </motion.p>

                    {/* Stats Cards */}
                    <motion.div
                        className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 w-full max-w-[896px]"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    >
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-[#E5E7EB] rounded-[8px] sm:rounded-[12px] py-3 sm:py-5 lg:py-6 px-2 sm:px-4 lg:px-6 flex flex-col items-center justify-center min-h-[70px] sm:min-h-[100px] lg:min-h-[112px]"
                            >
                                <span className={`${inter.className} text-[16px] sm:text-[24px] lg:text-[30px] font-bold text-[#3C8ECB] text-center leading-tight sm:leading-[36px] mb-1`}>
                                    {stat.value}
                                </span>
                                <span className={`${inter.className} text-[10px] sm:text-[12px] lg:text-[14px] text-[#4B5563] text-center leading-tight`}>
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
