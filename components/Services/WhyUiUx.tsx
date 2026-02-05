'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';
import { CheckCircle2 } from 'lucide-react';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

const WhyUiUx: React.FC = () => {
    const expertiseAreas = [
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
        'Journey Mapping',
        'Information Architecture',
    ];

    return (
        <div className="w-full bg-black pt-3 md:pt-5 pb-17 md:pb-17 relative flex justify-center transform-gpu">

            {/* Optimized Background Ambience */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#3C8ECB] rounded-full blur-[100px] opacity-[0.08] translate-z-0"></div>
            </div>

            <div className="w-full mx-auto px-4 md:px-6 lg:px-2 max-w-[1200px] relative z-10">

                {/* Glass Container - Matching rounded corners on all sides */}
                <div
                    className="relative bg-[#0A0A0A]/90 backdrop-blur-xl p-6 md:p-8 lg:p-10 shadow-2xl ring-1 ring-white/10"
                    style={{ borderRadius: '20px' }}
                >

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* Left: Image */}
                        <div className="w-full lg:w-[40%] flex justify-center order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative w-full max-w-[400px] will-change-transform"
                            >
                                {/* Glow behind image */}
                                <div className="absolute inset-0 bg-[#3C8ECB] opacity-15 blur-[50px] rounded-full"></div>

                                <Image
                                    src="/Services/why-ui-ux.png"
                                    alt="UI/UX Design Process Illustration"
                                    width={600}
                                    height={600}
                                    className="relative z-10 w-full h-auto object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full lg:w-[60%] text-left order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="will-change-transform"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-[2px] bg-gradient-to-r from-[#3C8ECB] to-transparent"></div>
                                    <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.2em] text-[11px] uppercase`}>
                                        WHY UI/UX DESIGN
                                    </span>
                                </div>

                                <h2 className={`${redHat.className} text-white text-2xl md:text-3xl lg:text-[36px] font-black leading-[1.15] mb-4`}>
                                    Work with a Dedicated <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-500">
                                        Designing Company
                                    </span>
                                </h2>

                                <p className={`${inter.className} text-gray-300 text-[14px] md:text-[15px] leading-relaxed mb-5 max-w-md font-normal opacity-90 border-l-2 border-white/10 pl-4`}>
                                    From user research and UX audits to interaction design, design systems, and developer handoff, our UI/UX team is true experts in their field.
                                </p>

                                {/* Expertise Areas */}
                                <div className="flex flex-wrap gap-2.5">
                                    {expertiseAreas.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(60, 142, 203, 0.15)" }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors duration-200 cursor-default"
                                        >
                                            <CheckCircle2 size={16} className="text-[#3C8ECB] flex-shrink-0" strokeWidth={3} />
                                            <span className={`${inter.className} text-[13px] md:text-[14px] font-semibold text-white tracking-wide`}>
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyUiUx;
