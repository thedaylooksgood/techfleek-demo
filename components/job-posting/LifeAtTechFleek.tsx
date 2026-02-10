"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContentSection from '@/components/Common/ContentSection';

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
        <ContentSection
            label="OUR CULTURE"
            title="Life at"
            titleHighlight="TechFleek"
            description="Get a glimpse into our vibrant culture, collaborative environment, and the amazing people that make TechFleek special."
            showGridBackground={false}
        >
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {lifeItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-[240px]"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />

                        {/* Gradient Overlay - Darkened for better readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-90 transition-opacity" />

                        {/* Text Content */}
                        <div className="absolute left-5 bottom-5 right-5 z-10 drop-shadow-md">
                            <h3 className="font-bold text-white text-lg mb-1 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-white/90 text-sm font-medium">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </ContentSection>
    );
}
