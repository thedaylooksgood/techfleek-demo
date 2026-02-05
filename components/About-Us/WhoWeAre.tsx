'use client';

// EnhancedWhoWeAre.tsx - More customizable version
import React from 'react';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface EnhancedWhoWeAreProps {
    backgroundColor?: string;
    textColor?: string;
    sectionLabelGradient?: string;
    dotColor?: string;

    imageSrc?: string;
    imageAlt?: string;

    sectionLabel?: string;
    mainHeadline?: string;
    subHeadline?: string;
    description?: string;
    buttonText?: string;

    showPattern?: boolean;
    patternIntensity?: number;
}

const EnhancedWhoWeAre: React.FC<EnhancedWhoWeAreProps> = ({
    backgroundColor = '#ffffff',
    textColor = '#000000',
    sectionLabelGradient = 'linear-gradient(to right, #3C8ECB, #0055DF)',
    dotColor = '#CBD5E1',

    imageSrc = '/About-Us/who-we-are.svg',
    imageAlt = 'Who We Are',

    sectionLabel = 'WHO WE ARE',
    mainHeadline = 'We\'re on a Mission to Change Your View of Building Modern Digital Solutions.',
    subHeadline = 'TechFleek is a values-driven software and website development company dedicated to empowering businesses with modern digital solutions.',
    description = 'We\'re more than just developers, with 10+ years of experience, helped dozens of entrepreneurs to solve below listed challenges & delivered successful products. It\'s not just about building a product—it\'s about seamlessly integrating your go-to-market strategy from the start.',

    showPattern = true,
    patternIntensity = 0.1,
}) => {
    return (
        <div
            className={`w-full relative flex items-center justify-center overflow-hidden py-10 md:pt-5 lg:pt-6 md:pb-30 lg:pb-25`}
            style={{ backgroundColor }}
        >
            {/* Pattern Background */}
            {showPattern && (
                <div className="absolute top-0 bottom-0 left-0 w-full h-full pointer-events-none -z-10">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 1.5px)`,
                            backgroundSize: '24px 24px',
                            opacity: patternIntensity,
                            maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
                        }}
                    />
                </div>
            )}

            {/* Main Container */}
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
                <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-0">

                    {/* Image Section */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center lg:justify-center relative mb-8 lg:mb-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
                            {/* 10+ Years Badge */}
                            <motion.div
                                className="absolute z-20 flex flex-col items-center justify-center text-white text-center rounded-full shadow-2xl"
                                style={{
                                    bottom: '25px',
                                    right: '0px',
                                    width: '90px',
                                    height: '90px',
                                    background: 'linear-gradient(135deg, #3C8ECB 0%, #0A2540 100%)',
                                    boxShadow: '0 8px 32px rgba(60, 142, 203, 0.3)',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className={`${redHat.className} font-bold leading-none text-2xl`}>10+</span>
                                <span className={`${inter.className} font-medium mt-0.5 text-[9px] uppercase tracking-wide leading-tight`}>Years of<br />Experience</span>
                            </motion.div>

                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto object-contain drop-shadow-md transform transition-transform duration-500 hover:scale-[1.01]"
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col items-start text-left"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {/* Section Label */}
                        <h3
                            className={`${redHat.className} font-bold text-xs md:text-sm tracking-[0.2em] mb-3`}
                            style={{
                                background: sectionLabelGradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {sectionLabel}
                        </h3>

                        {/* Main Headline */}
                        <h2
                            className={`${redHat.className} font-bold leading-[1.15] mb-3 text-[22px] md:text-[26px] lg:text-[32px]`}
                            style={{ color: textColor }}
                        >
                            {mainHeadline}
                        </h2>

                        {/* Sub Headline */}
                        <h4
                            className={`${inter.className} font-semibold leading-relaxed mb-3 text-[15px] md:text-[16px] lg:text-[18px] opacity-85`}
                            style={{ color: textColor }}
                        >
                            {subHeadline}
                        </h4>

                        {/* Description */}
                        <p
                            className={`${inter.className} font-normal leading-relaxed text-[13px] md:text-[14px] lg:text-[15px] text-gray-600 mb-0 opacity-80 max-w-lg`}
                        >
                            {description}
                        </p>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EnhancedWhoWeAre;