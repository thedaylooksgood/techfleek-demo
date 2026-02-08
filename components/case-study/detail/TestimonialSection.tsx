"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

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
        { value: "15x", label: "Return on Investment" }
    ]
}: TestimonialSectionProps) {
    return (
        <section className="w-full py-12 md:py-16 bg-slate-50 font-[family-name:var(--font-red-hat)]">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Quote Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#3C8ECB]/10 rounded-full flex items-center justify-center">
                                <Quote className="w-6 h-6 text-[#3C8ECB]" />
                            </div>

                            {/* Quote Text */}
                            <blockquote className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-6 pt-6">
                                "{quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                    <Image
                                        src={authorImage}
                                        alt={authorName}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{authorName}</h4>
                                    <p className="text-slate-500 text-xs">{authorRole}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        className="grid grid-cols-3 gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-xl p-4 text-center border border-slate-100 hover:shadow-md transition-shadow"
                                whileHover={{ y: -4 }}
                            >
                                <span className="block font-black text-2xl md:text-3xl text-[#3C8ECB] mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-slate-500 text-[10px] md:text-xs">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
