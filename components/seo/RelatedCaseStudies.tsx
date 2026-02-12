'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// =============================================================================
// RELATED CASE STUDIES COMPONENT
// =============================================================================
// Dynamically suggests related case studies at the bottom of service pages.
// Pass the current case study slug to exclude it from suggestions.
// =============================================================================

const allCaseStudies = [
    {
        slug: 'greysell',
        title: 'Greysell Advertising',
        description: 'Transformed a traditional retailer into a digital-first e-commerce powerhouse.',
        image: '/case-study/Creative agency.png',
        category: 'Advertising',
    },
    {
        slug: 'dygo-diagnostics',
        title: 'Dygo Diagnostics',
        description: 'Built a HIPAA-compliant telemedicine platform serving 50,000+ patients monthly.',
        image: '/case-study/healthcare.png',
        category: 'Healthcare',
    },
    {
        slug: 'mergerdomo',
        title: 'MergerDomo',
        description: 'Developed a secure investment platform handling multi-million dollar transactions.',
        image: '/case-study/FinTech Innovation.png',
        category: 'FinTech',
    },
    {
        slug: 'bollco',
        title: 'Bollco',
        description: 'AI-driven analytics platform achieving 60% better data insights.',
        image: '/case-study/Edtech.png',
        category: 'AI & Automation',
    },
    {
        slug: 'ucom-entertainment',
        title: 'Ucom Entertainment',
        description: 'Built a streaming platform with real-time features serving millions.',
        image: '/case-study/entertainment Hub.png',
        category: 'Entertainment',
    },
    {
        slug: 'fotoart',
        title: 'Fotoart Production',
        description: 'Designed a stunning portfolio platform showcasing visual artistry.',
        image: '/case-study/Custom Software Development.png',
        category: 'Production',
    },
];

interface RelatedCaseStudiesProps {
    /** Slug of the current case study to exclude */
    currentSlug?: string;
    /** Max number of case studies to show (default: 3) */
    maxItems?: number;
    /** Section title */
    title?: string;
}

export default function RelatedCaseStudies({
    currentSlug,
    maxItems = 3,
    title = 'More Success Stories',
}: RelatedCaseStudiesProps) {
    const filteredStudies = allCaseStudies
        .filter((s) => s.slug !== currentSlug)
        .slice(0, maxItems);

    return (
        <section className="w-full bg-white font-[family-name:var(--font-red-hat)] py-12 md:py-16">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                        CASE STUDIES
                    </span>
                    <h2 className="font-black text-slate-900 text-2xl md:text-3xl leading-[1.1]">
                        {title}
                    </h2>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredStudies.map((study, index) => (
                        <Link key={study.slug} href={`/case-study/${study.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4 }}
                                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                            >
                                {/* Image */}
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#3C8ECB] transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                                        {study.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#3C8ECB] text-sm font-semibold">
                                        View Case Study
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
