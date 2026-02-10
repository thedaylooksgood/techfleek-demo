"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Scale } from 'lucide-react';
import ContentSection from '@/components/Common/ContentSection';

// Feature data
const features = [
    {
        icon: Rocket,
        title: "Innovation First",
        description: "Work with cutting-edge technologies and contribute to groundbreaking solutions that push industry boundaries."
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Accelerate your career with mentorship programs, skill development workshops, and leadership opportunities."
    },
    {
        icon: Globe,
        title: "Global Flexibility",
        description: "Enjoy remote work options, flexible schedules, and the freedom to work from anywhere in the world."
    },
    {
        icon: Scale,
        title: "Work-Life Balance",
        description: "Maintain a healthy balance with generous PTO, wellness programs, and a culture that values your well-being."
    }
];

export default function WhyChooseUs() {
    return (
        <ContentSection
            label="WHY JOIN US"
            title="Why Choose"
            titleHighlight="TechFleek?"
            description="We're more than just a workplace. We're a community of passionate professionals dedicated to excellence and growth."
            showGridBackground={true}
        >
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#3C8ECB]/30 transition-all duration-300 h-full"
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-[#3C8ECB]/10 group-hover:bg-[#3C8ECB] flex items-center justify-center mb-4 transition-colors duration-300">
                            <feature.icon className="w-6 h-6 text-[#3C8ECB] group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-slate-900 text-base mb-2">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </ContentSection>
    );
}
