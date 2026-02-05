"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Outfit, Inter } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

const outfit = Outfit({ subsets: ['latin'], weight: ['500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

const caseStudies = [
    {
        id: 1,
        slug: "bollco",
        title: "Bollco",
        category: "AI & Automation",
        description: "AI-driven analytics dashboard that improved data insights by 60% for a leading industrial automation company.",
        image: "/CaseStudy/bollco.png",
    },
    {
        id: 2,
        slug: "dygo-diagnostics",
        title: "Dygo Diagnostics",
        category: "Fintech Solutions",
        description: "Next-gen fintech mobile app that increased user engagement by 200% for a financial health platform.",
        image: "/CaseStudy/dygo.png",
    },
    {
        id: 3,
        slug: "greysell",
        title: "GreySell",
        category: "SaaS Platform",
        description: "Real-time analytics platform processing 1M+ events per second for business intelligence.",
        image: "/CaseStudy/greysell.png",
    },
    {
        id: 4,
        slug: "mergerdomo",
        title: "MergerDomo",
        category: "UI/UX Design",
        description: "AI-powered custom wallpaper platform with intuitive design tools and AR preview.",
        image: "/CaseStudy/mergerdomo.png",
    },
    {
        id: 5,
        slug: "fotoart",
        title: "FOTOART Production",
        category: "Enterprise Systems",
        description: "Custom CRM system that streamlined operations and eliminated missed deadlines for creative agency.",
        image: "/CaseStudy/fotoart.png",
    },
    {
        id: 6,
        slug: "ucom-entertainment",
        title: "Ucom Entertainment",
        category: "Event Management",
        description: "Event management platform that increased revenue by 340% with data-driven insights.",
        image: "/CaseStudy/ucom.png",
    }
];

export default function CaseStudyGrid() {
    return (
        <section className="w-full bg-white pb-8 sm:pb-10 lg:pb-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/case-study/${study.slug}`}
                                className="block bg-white rounded-[16px] sm:rounded-[20px] p-4 transition-all duration-300 flex flex-col h-full group cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(60,142,203,0.4)] hover:-translate-y-1"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/10] mb-4 sm:mb-6 rounded-[10px] sm:rounded-[12px] overflow-hidden bg-gray-50">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Category */}
                                <span className={`${inter.className} text-[12px] sm:text-[14px] text-[#3C8ECB] font-medium mb-2`}>
                                    {study.category}
                                </span>

                                {/* Title */}
                                <h3 className={`${outfit.className} text-[20px] sm:text-[24px] text-[#111827] font-semibold mb-2`}>
                                    {study.title}
                                </h3>

                                {/* Description */}
                                <p className={`${inter.className} text-[14px] sm:text-[16px] text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow`}>
                                    {study.description}
                                </p>

                                {/* Read More Link */}
                                <div className="mt-auto flex items-center gap-2 text-[#111827] group-hover:text-[#3C8ECB] transition-colors duration-200">
                                    <span className={`${inter.className} text-[14px] sm:text-[16px] font-medium`}>
                                        Read More
                                    </span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="w-full flex justify-center mt-8 sm:mt-10 mb-4 sm:mb-5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Link
                        href="/case-study"
                        className={`${inter.className} bg-[#3C8ECB] text-white text-[14px] sm:text-[16px] font-semibold px-8 sm:px-10 py-3 rounded-[8px] hover:bg-[#327aae] active:scale-95 transition-all duration-200 shadow-sm`}
                    >
                        View All Case Studies
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
