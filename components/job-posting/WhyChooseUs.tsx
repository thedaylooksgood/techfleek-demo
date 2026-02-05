"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { Rocket, TrendingUp, Globe, Scale } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

// Feature data based on CSS content
const features = [
    {
        icon: <Rocket size={24} color="#3C8ECB" />,
        title: "Innovation First",
        description: "Work with cutting-edge technologies and contribute to groundbreaking solutions that push industry boundaries."
    },
    {
        icon: <TrendingUp size={24} color="#3C8ECB" />,
        title: "Career Growth",
        description: "Accelerate your career with mentorship programs, skill development workshops, and leadership opportunities."
    },
    {
        icon: <Globe size={24} color="#3C8ECB" />,
        title: "Global Flexibility",
        description: "Enjoy remote work options, flexible schedules, and the freedom to work from anywhere in the world."
    },
    {
        icon: <Scale size={30} color="#3C8ECB" />,
        title: "Work-Life Balance",
        description: "Maintain a healthy balance with generous PTO, wellness programs, and a culture that values your well-being."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="w-full relative flex flex-col items-center bg-[#F5F5F5] py-7 sm:py-7 lg:py-7 px-4">
            {/* Header Content Group */}
            <motion.div
                className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Gradient Subheading */}
                <span
                    className={`${inter.className} font-bold text-[14px] sm:text-[18px] lg:text-[24px] leading-[1.2] mb-2`}
                    style={{
                        background: 'linear-gradient(90deg, #3C8ECB 0%, #000000 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    See What We Offer
                </span>

                {/* Main Heading */}
                <h2 className={`${inter.className} font-bold text-[18px] sm:text-[24px] lg:text-[30px] leading-[1.1] text-black mb-3 sm:mb-2`}>
                    Why Choose TechFleek?
                </h2>

                {/* Description Paragraph */}
                <p className={`${inter.className} font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.5] text-[#4B5563] max-w-[650px]`}>
                    We're more than just a workplace. We're a community of passionate professionals dedicated to excellence and growth.
                </p>
            </motion.div>

            {/* Cards Container - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[1300px] w-full">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-[12px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 min-h-[220px] sm:min-h-[280px] lg:min-h-[326px] will-change-transform"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                    >
                        {/* Icon Box */}
                        <div
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[8px] flex items-center justify-center mb-4 sm:mb-6"
                            style={{ background: 'rgba(152, 200, 90, 0.36)' }}
                        >
                            {index === 3 ? <Scale size={24} color="#3C8ECB" /> : feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className={`${inter.className} font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] text-black mb-2 sm:mb-3`}>
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className={`${inter.className} font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#4B5563]`}>
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
