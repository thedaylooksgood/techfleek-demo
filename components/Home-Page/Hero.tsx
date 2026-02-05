"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Red_Hat_Display, Inter } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['700', '800', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// --- Smooth Easing Curve ---
const smoothEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Animation variants
    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: (delay: number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay, ease: smoothEase }
        })
    };

    const fadeInLeft = {
        hidden: { x: -60, opacity: 0 },
        visible: (delay: number) => ({
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, delay, ease: smoothEase }
        })
    };

    const fadeInRight = {
        hidden: { x: 60, opacity: 0 },
        visible: (delay: number) => ({
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, delay, ease: smoothEase }
        })
    };

    // Client avatars placeholder
    const clientAvatars = [1, 2, 3];

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                height: '100vh',
                width: '100%',
                minHeight: '600px'
            }}
        >

            {/* Video Background - Plays fully */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <source src="/home-page/landing-hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Main Content Container */}
            <div
                className="relative z-10 w-full h-full flex items-center"
                style={{
                    paddingLeft: isMobile ? '20px' : 'clamp(40px, 6vw, 100px)',
                    paddingRight: isMobile ? '20px' : 'clamp(40px, 6vw, 100px)',
                    paddingTop: isMobile ? '100px' : 'clamp(80px, 10vh, 150px)',
                    paddingBottom: isMobile ? '40px' : 'clamp(40px, 5vh, 80px)'
                }}
            >
                <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">

                    {/* Left Content - Positioned at left side */}
                    <div
                        className="flex flex-col items-start"
                        style={{
                            maxWidth: isMobile ? '100%' : 'clamp(400px, 50%, 700px)'
                        }}
                    >

                        {/* Badge */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            style={{ marginBottom: 'clamp(12px, 2vw, 24px)' }}
                        >
                            <div
                                className={`${inter.className} inline-flex items-center gap-2 rounded-full`}
                                style={{
                                    padding: 'clamp(8px, 1vw, 12px) clamp(12px, 1.5vw, 20px)',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)'
                                }}
                            >
                                <span
                                    className="rounded font-semibold"
                                    style={{
                                        padding: 'clamp(3px, 0.4vw, 6px) clamp(8px, 1vw, 14px)',
                                        fontSize: 'clamp(10px, 0.85vw, 13px)',
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: 'white'
                                    }}
                                >
                                    ✦ NEXT-GEN
                                </span>
                                <span
                                    className="text-white font-medium"
                                    style={{ fontSize: 'clamp(12px, 1vw, 15px)' }}
                                >
                                    AI-Powered Digital Agency
                                </span>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            variants={fadeInLeft}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                            className={`${redHat.className} font-black text-white`}
                            style={{
                                fontSize: 'clamp(32px, 4.5vw, 72px)',
                                lineHeight: '1.08',
                                letterSpacing: '-0.02em',
                                marginBottom: 'clamp(20px, 3vw, 40px)',
                                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                            }}
                        >
                            Smarter Digital.<br />
                            Stronger Brands.
                        </motion.h1>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.3}
                            className={`flex flex-wrap items-center ${inter.className}`}
                            style={{ gap: 'clamp(10px, 1.5vw, 16px)' }}
                        >
                            <Link href="/enquiry">
                                <button
                                    className="flex items-center gap-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{
                                        padding: 'clamp(12px, 1.3vw, 18px) clamp(20px, 2.5vw, 36px)',
                                        fontSize: 'clamp(13px, 1vw, 16px)',
                                        background: 'linear-gradient(135deg, #f97316, #ea580c)',
                                        boxShadow: '0 4px 25px rgba(249, 115, 22, 0.5)'
                                    }}
                                >
                                    <span>→</span>
                                    <span>Start Your Project</span>
                                </button>
                            </Link>
                            <Link href="/services">
                                <button
                                    className="flex items-center gap-2 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/20"
                                    style={{
                                        padding: 'clamp(12px, 1.3vw, 18px) clamp(20px, 2.5vw, 36px)',
                                        fontSize: 'clamp(13px, 1vw, 16px)',
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        border: '2px solid rgba(255, 255, 255, 0.6)',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    <span>→</span>
                                    <span>See Our Process</span>
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - Description & Stats */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="flex flex-col items-start lg:items-end"
                        style={{
                            maxWidth: isMobile ? '100%' : 'clamp(300px, 35%, 450px)',
                            marginTop: isMobile ? '32px' : '0'
                        }}
                    >
                        {/* Description Text */}
                        <p
                            className={`${inter.className} text-white text-left lg:text-right`}
                            style={{
                                fontSize: 'clamp(14px, 1.2vw, 18px)',
                                lineHeight: '1.7',
                                fontWeight: 400,
                                marginBottom: 'clamp(20px, 2.5vw, 36px)',
                                textShadow: '0 1px 10px rgba(0,0,0,0.3)'
                            }}
                        >
                            We're TechFleek — the AI-fueled digital agency that blends creativity, code, and strategy to make brands impossible to ignore.
                        </p>

                        {/* Client Avatars & Stats */}
                        <div
                            className="flex items-center"
                            style={{ gap: 'clamp(10px, 1.2vw, 18px)' }}
                        >
                            {/* Stacked Avatars */}
                            <div className="flex">
                                {clientAvatars.map((_, index) => (
                                    <div
                                        key={index}
                                        className="rounded-full border-2 border-white/40 overflow-hidden flex items-center justify-center text-white font-bold"
                                        style={{
                                            width: 'clamp(32px, 3vw, 48px)',
                                            height: 'clamp(32px, 3vw, 48px)',
                                            marginLeft: index === 0 ? '0' : 'clamp(-12px, -1.2vw, -16px)',
                                            background: `linear-gradient(135deg, hsl(${200 + index * 40}, 75%, 50%), hsl(${240 + index * 40}, 75%, 55%))`,
                                            zIndex: clientAvatars.length - index,
                                            fontSize: 'clamp(11px, 1vw, 15px)',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                ))}
                            </div>
                            {/* Stats Text */}
                            <p
                                className={`${inter.className} text-white font-medium`}
                                style={{
                                    fontSize: 'clamp(12px, 1vw, 15px)',
                                    textShadow: '0 1px 8px rgba(0,0,0,0.3)'
                                }}
                            >
                                2000+ Happy Clients
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Side floating buttons (Desktop only) */}
            {!isMobile && (
                <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
                    <Link href="/demos">
                        <div
                            className="flex flex-col items-center justify-center rounded-l-lg cursor-pointer transition-all hover:pr-2"
                            style={{
                                width: 'clamp(50px, 4vw, 60px)',
                                height: 'clamp(50px, 4vw, 60px)',
                                background: 'linear-gradient(135deg, #3b82f6, #2563eb)'
                            }}
                        >
                            <span style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}>💻</span>
                            <span className="text-white font-medium" style={{ fontSize: 'clamp(9px, 0.7vw, 11px)' }}>Demos</span>
                        </div>
                    </Link>
                    <Link href="/enquiry">
                        <div
                            className="flex flex-col items-center justify-center rounded-l-lg cursor-pointer transition-all hover:pr-2"
                            style={{
                                width: 'clamp(50px, 4vw, 60px)',
                                height: 'clamp(50px, 4vw, 60px)',
                                background: 'linear-gradient(135deg, #22c55e, #16a34a)'
                            }}
                        >
                            <span style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}>🛒</span>
                            <span className="text-white font-medium" style={{ fontSize: 'clamp(9px, 0.7vw, 11px)' }}>Buy Now</span>
                        </div>
                    </Link>
                </div>
            )}
        </section>
    );
}