'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import GeneralResumeModal from './GeneralResumeModal';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

const JobCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="w-full relative h-[372px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
                {/* Background Gradient */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(90deg, #000000 0%, #3C8ECB 100%)'
                    }}
                />

                {/* Decorative Overlay Pattern (Dot Grid - simulated with opacity) */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* Decorative Circle 1 (Right Top) */}
                <motion.div
                    className="absolute w-[128px] h-[128px] bg-white rounded-full opacity-20 z-10"
                    style={{ top: '40px', right: '40px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.2, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Decorative Circle 2 (Left Bottom) */}
                <motion.div
                    className="absolute w-[96px] h-[96px] bg-[#EDEDED] rounded-full opacity-20 z-10"
                    style={{ bottom: '40px', left: '40px' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.2, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                />

                {/* Content */}
                <motion.div
                    className="relative z-20 flex flex-col items-center max-w-[900px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Headline */}
                    <h2 className={`${inter.className} text-[32px] md:text-[36px] font-bold leading-[44px] mb-4`}>
                        <span style={{ color: '#3C8ECB' }}>Didn&apos;t find the right role?</span>
                        <span className="text-white"> We&apos;d still love to hear from you.</span>
                    </h2>

                    {/* Subtitle */}
                    <p className={`${inter.className} text-white font-normal text-[16px] md:text-[18px] leading-[28px] mb-8 max-w-[600px] opacity-90`}>
                        Send us your resume and we&apos;ll reach out when a suitable role opens up. Great talent is always welcome at TechFleek.
                    </p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className={`${inter.className} flex items-center justify-center text-white font-semibold text-[16px] rounded-full transition-all hover:scale-105 active:scale-95 hover:shadow-lg cursor-pointer`}
                            style={{
                                width: '192px',
                                height: '52px',
                                background: '#3C8ECB'
                            }}
                        >
                            Send your Resume
                        </button>

                        <Link
                            href="/enquiry"
                            className={`${inter.className} flex items-center justify-center text-white font-semibold text-[16px] rounded-full border-2 border-white transition-all hover:bg-white hover:text-[#3C8ECB] hover:scale-105 active:scale-95`}
                            style={{
                                width: '176px',
                                height: '52px'
                            }}
                        >
                            Schedule a Call
                        </Link>

                        {/* WhatsApp Button for Jobs */}
                        <a
                            href="https://wa.me/918802172570?text=Hi%20TechFleek!%20I%27m%20interested%20in%20job%20opportunities."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${inter.className} flex items-center justify-center gap-2 text-white font-semibold text-[16px] rounded-full border-2 border-white transition-all hover:bg-white hover:text-[#3C8ECB] hover:scale-105 active:scale-95`}
                            style={{
                                width: '176px',
                                height: '52px'
                            }}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* General Resume Modal */}
            <GeneralResumeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default JobCTA;
