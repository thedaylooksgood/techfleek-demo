"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import ContentSection from '@/components/Common/ContentSection';
import GeneralResumeModal from './GeneralResumeModal';

export default function JobCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ContentSection
                label="JOIN OUR TEAM"
                title="Didn't find the right role?"
                titleHighlight="We'd still love to hear from you."
                description="Send us your resume and we'll reach out when a suitable role opens up. Great talent is always welcome at TechFleek."
                showGridBackground={true}
            >
                {/* Custom Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-8 w-full sm:w-auto">
                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3C8ECB] text-white rounded-full font-bold text-sm shadow-lg shadow-[#3C8ECB]/30 hover:shadow-[#3C8ECB]/50 transition-shadow cursor-pointer"
                    >
                        <Send className="w-4 h-4" />
                        Send Your Resume
                    </motion.button>

                    <Link
                        href="/enquiry"
                        scroll={true}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-[#3C8ECB] rounded-full font-bold text-sm border-2 border-[#3C8ECB] hover:bg-[#3C8ECB]/5 transition-colors cursor-pointer"
                        >
                            <PhoneCall className="w-4 h-4" />
                            Get a Call Back
                        </motion.button>
                    </Link>

                    <a
                        href="https://wa.me/918802172570?text=Hi%20TechFleek!%20I%27m%20interested%20in%20job%20opportunities."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500 text-white rounded-full font-bold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 cursor-pointer"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Us
                        </motion.button>
                    </a>
                </div>
            </ContentSection>

            <GeneralResumeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
