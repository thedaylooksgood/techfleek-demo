"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { homeStyles } from '@/components/Home-Page/styles';

interface CaseStudyCTAProps {
    prevStudy?: { slug: string; name: string };
    nextStudy?: { slug: string; name: string };
}

export default function CaseStudyCTA({ prevStudy, nextStudy }: CaseStudyCTAProps) {
    return (
        <section className="w-full py-12 md:py-16 bg-white font-[family-name:var(--font-red-hat)] border-t border-slate-100">
            <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Navigation */}
                <div className="flex justify-between items-center gap-4 mb-8">
                    {prevStudy ? (
                        <Link
                            href={`/case-study/${prevStudy.slug}`}
                            className="group flex items-center gap-2 text-slate-500 hover:text-[#3C8ECB] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs md:text-sm font-medium">
                                Previous: <span className="font-bold">{prevStudy.name}</span>
                            </span>
                        </Link>
                    ) : <div />}

                    {nextStudy ? (
                        <Link
                            href={`/case-study/${nextStudy.slug}`}
                            className="group flex items-center gap-2 text-slate-500 hover:text-[#3C8ECB] transition-colors"
                        >
                            <span className="text-xs md:text-sm font-medium">
                                Next: <span className="font-bold">{nextStudy.name}</span>
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : <div />}
                </div>

                {/* CTA Card */}
                <motion.div
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={`${homeStyles.label} !text-[#3C8ECB] mb-2 block`}>
                        READY TO START?
                    </span>
                    <h3 className={`${homeStyles.title} !text-white mb-3`}>
                        Transform Your <span className={homeStyles.gradientText}>Business</span>
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
                        Let's discuss how we can help you achieve similar results for your company.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <Link href="/enquiry">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3C8ECB] hover:bg-[#3C8ECB]/90 text-white rounded-full font-bold text-sm transition-colors"
                            >
                                Start Your Project
                                <ArrowRight size={16} />
                            </motion.button>
                        </Link>
                        <Link href="/case-study">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-bold text-sm transition-colors"
                            >
                                View All Case Studies
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
