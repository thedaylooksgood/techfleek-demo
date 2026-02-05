"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

interface CaseStudyCTAProps {
    prevStudy?: { slug: string; name: string };
    nextStudy?: { slug: string; name: string };
}

export default function CaseStudyCTA({ prevStudy, nextStudy }: CaseStudyCTAProps) {
    return (
        <section className="w-full py-7 bg-white border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5 sm:mb-6">
                    {prevStudy ? (
                        <Link
                            href={`/case-study/${prevStudy.slug}`}
                            className="group flex items-center gap-2 text-[#4B5563] hover:text-[#3C8ECB] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className={`${inter.className} text-[14px] sm:text-[15px]`}>
                                Previous: {prevStudy.name}
                            </span>
                        </Link>
                    ) : <div />}

                    {nextStudy ? (
                        <Link
                            href={`/case-study/${nextStudy.slug}`}
                            className="group flex items-center gap-2 text-[#4B5563] hover:text-[#3C8ECB] transition-colors"
                        >
                            <span className={`${inter.className} text-[14px] sm:text-[15px]`}>
                                Next: {nextStudy.name}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : <div />}
                </div>

                {/* CTA Card */}
                <motion.div
                    className="bg-gradient-to-r from-[#000000] to-[#3C8ECB] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center will-change-transform"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <h3 className={`${inter.className} text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-white mb-3`}>
                        Ready to Transform Your Business?
                    </h3>
                    <p className={`${inter.className} text-[13px] sm:text-[14px] lg:text-[16px] text-gray-200 mb-4 sm:mb-5 max-w-xl mx-auto`}>
                        Let's discuss how we can help you achieve similar results for your company.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <Link
                            href="/enquiry"
                            className={`${inter.className} inline-flex items-center justify-center px-6 py-3 bg-white text-[#111827] rounded-full text-[14px] sm:text-[15px] font-semibold hover:bg-gray-100 transition-colors`}
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/case-study"
                            className={`${inter.className} inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full text-[14px] sm:text-[15px] font-semibold hover:bg-white/10 transition-colors`}
                        >
                            View All Case Studies
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
