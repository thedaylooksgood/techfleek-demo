'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
    highlights?: string[];
}

interface ServiceCapabilitiesProps {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDescription?: string;
    features: Feature[];
    highlightIndex?: number; // Which card to highlight (0-indexed)
}

export default function ServiceCapabilities({
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    features,
    highlightIndex = 1,
}: ServiceCapabilitiesProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#3C8ECB] font-semibold tracking-wider uppercase text-sm mb-2">
                        {sectionSubtitle}
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {sectionTitle}
                    </h2>
                    {sectionDescription && (
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {sectionDescription}
                        </p>
                    )}
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isHighlighted = index === highlightIndex;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                                className={`group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden ${isHighlighted
                                        ? 'bg-[#0f172a] text-white shadow-2xl transform md:-translate-y-4'
                                        : 'bg-white border border-gray-100 shadow-lg hover:border-[#3C8ECB]/50 hover:shadow-xl'
                                    }`}
                            >
                                {/* Background decoration */}
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 transition ${isHighlighted ? 'bg-[#3C8ECB]/20' : 'bg-[#3C8ECB]/5 group-hover:bg-[#3C8ECB]/10'
                                    }`} />

                                {/* Icon */}
                                <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isHighlighted
                                        ? 'bg-white/10'
                                        : 'bg-blue-50'
                                    }`}>
                                    <Icon className={`w-7 h-7 ${isHighlighted ? 'text-white' : 'text-[#3C8ECB]'}`} />
                                </div>

                                {/* Content */}
                                <h3 className={`relative z-10 text-xl font-bold mb-3 ${isHighlighted ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`relative z-10 text-sm leading-relaxed mb-6 ${isHighlighted ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {feature.description}
                                </p>

                                {/* Highlights list */}
                                {feature.highlights && (
                                    <ul className="relative z-10 space-y-2 mb-6">
                                        {feature.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-center gap-2 text-sm">
                                                <span className={`w-1.5 h-1.5 rounded-full ${isHighlighted ? 'bg-[#60a5fa]' : 'bg-[#3C8ECB]'
                                                    }`} />
                                                <span className={isHighlighted ? 'text-gray-300' : 'text-gray-500'}>
                                                    {highlight}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Learn more link */}
                                <a
                                    href="#"
                                    className={`relative z-10 inline-flex items-center gap-1 text-sm font-semibold transition-all ${isHighlighted
                                            ? 'text-[#60a5fa] hover:text-white'
                                            : 'text-[#3C8ECB] hover:underline group-hover:gap-2'
                                        }`}
                                >
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
