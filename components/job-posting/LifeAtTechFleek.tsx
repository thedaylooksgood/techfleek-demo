"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

const lifeItems = [
    {
        title: "Collaborative Teams",
        description: "Working together to solve complex challenges",
        image: "/job-posting/collaborative.png"
    },
    {
        title: "Continuous Learning",
        description: "Growing skills through workshops and mentorship",
        image: "/job-posting/continuous.png"
    },
    {
        title: "Work-Life Harmony",
        description: "Flexibility to work where you're most productive",
        image: "/job-posting/work.png"
    },
    {
        title: "Celebrating Success",
        description: "Recognizing achievements and milestones together",
        image: "/job-posting/celebrate.png"
    },
    {
        title: "Innovation Spaces",
        description: "Inspiring environments that fuel creativity",
        image: "/job-posting/innovation.png"
    },
    {
        title: "Team Building",
        description: "Building strong relationships beyond work",
        image: "/job-posting/team.png"
    }
];

export default function LifeAtTechFleek() {
    return (
        <section
            className="w-full relative flex flex-col items-center bg-white py-7 sm:py-7 lg:py-7"
        >
            {/* Header Group */}
            <motion.div
                className="flex flex-col items-center mt-[0px] mb-[20px] text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Gradient Subheading */}
                <span
                    className={`${inter.className} font-bold text-[24px] leading-[26px] mb-1`}
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
                <h2
                    className={`${inter.className} font-bold text-[30px] leading-[35px] text-black mb-2`}
                >
                    Life at TechFleek
                </h2>

                {/* Description */}
                <p
                    className={`${inter.className} font-normal text-[20px] leading-[28px] text-[#4B5563] max-w-[700px]`}
                >
                    Get a glimpse into our vibrant culture, collaborative environment, and the amazing people that make TechFleek special.
                </p>
            </motion.div>

            {/* Grid Container */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] z-10"
                style={{ width: 'min(100%, 1232px)', padding: '0 20px' }}
            >
                {lifeItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative rounded-[12px] overflow-hidden shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] group cursor-pointer transition-transform hover:-translate-y-1 duration-300 will-change-transform"
                        style={{
                            height: '256px',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />

                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
                            }}
                        />

                        {/* Text Content */}
                        <div className="absolute left-[16px] bottom-[16px] z-20">
                            <h3
                                className={`${inter.className} font-semibold text-[18px] leading-[28px] text-white`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`${inter.className} font-normal text-[14px] leading-[20px] text-white opacity-90`}
                            >
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
