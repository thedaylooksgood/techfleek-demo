'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Brain, Palette, Cloud, Settings, Megaphone, Brush } from 'lucide-react';

// =============================================================================
// RELATED SERVICES COMPONENT
// =============================================================================
// Dynamically suggests related services at the bottom of blog/insight posts.
// Pass the current page's service slug to exclude it from suggestions.
// =============================================================================

const allServices = [
    {
        slug: 'web-development',
        title: 'Web Development',
        description: 'Scalable, high-performance websites and web applications.',
        icon: Code2,
        color: '#3C8ECB',
    },
    {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        icon: Smartphone,
        color: '#10B981',
    },
    {
        slug: 'ai-integration',
        title: 'AI Integration',
        description: 'Intelligent chatbots, ML models, and AI-powered automation.',
        icon: Brain,
        color: '#8B5CF6',
    },
    {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces and user experience design.',
        icon: Palette,
        color: '#F59E0B',
    },
    {
        slug: 'cloud-services',
        title: 'Cloud Services',
        description: 'AWS, Azure, Docker, and scalable cloud infrastructure.',
        icon: Cloud,
        color: '#06B6D4',
    },
    {
        slug: 'custom-software',
        title: 'Custom Software',
        description: 'Tailored enterprise solutions: CRM, ERP, and more.',
        icon: Settings,
        color: '#EF4444',
    },
    {
        slug: 'digital-growth',
        title: 'Digital Growth',
        description: 'SEO, social media marketing, and performance campaigns.',
        icon: Megaphone,
        color: '#EC4899',
    },
    {
        slug: 'brand-identity',
        title: 'Brand Identity',
        description: 'Logo design, visual identity, and brand strategy.',
        icon: Brush,
        color: '#6366F1',
    },
];

interface RelatedServicesProps {
    /** Slug of the current service to exclude from suggestions */
    currentSlug?: string;
    /** Max number of services to show (default: 3) */
    maxItems?: number;
    /** Section title */
    title?: string;
}

export default function RelatedServices({
    currentSlug,
    maxItems = 3,
    title = 'Explore Related Services',
}: RelatedServicesProps) {
    const filteredServices = allServices
        .filter((s) => s.slug !== currentSlug)
        .slice(0, maxItems);

    return (
        <section className="w-full bg-slate-50 font-[family-name:var(--font-red-hat)] py-12 md:py-16">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                        SERVICES
                    </span>
                    <h2 className="font-black text-slate-900 text-2xl md:text-3xl leading-[1.1]">
                        {title}
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredServices.map((service, index) => (
                        <Link key={service.slug} href={`/services/${service.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4 }}
                                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${service.color}15` }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: service.color }} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#3C8ECB] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-[#3C8ECB] text-sm font-semibold">
                                    Learn More
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
