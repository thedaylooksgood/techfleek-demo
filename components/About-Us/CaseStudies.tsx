"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Outfit,
    Red_Hat_Display,
    Roboto_Flex,
    Roboto,
    Poppins,
    Inter
} from "next/font/google";

// --- Font Loading (consistent with other components) ---
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600"] });
const redHat = Red_Hat_Display({ subsets: ["latin"], weight: ["700"] });
const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

// --- DATA ---
const studyData = [
    {
        id: 1,
        tabLabel: "Case Study no.1",
        title: "MergerDomo",
        subtitle: "Case Study no.1",
        description: "Custom Wallpaper Platform With AI-Powerd",
        image: "/Home-Page/case-studies/1.svg",
    },
    {
        id: 2,
        tabLabel: "Case Study no.2",
        title: "Ucom Entertainment",
        subtitle: "Case Study no.2",
        description: "Custom Wallpaper Platform With AI-Powered integration for immersive entertainment experiences.",
        image: "/Home-Page/case-studies/2.svg",
    },
    {
        id: 3,
        tabLabel: "Case Study no.3",
        title: "HealthVantage",
        subtitle: "Case Study no.3",
        description: "A telemedicine dashboard connecting patients with doctors in real-time.",
        image: "/Home-Page/case-studies/3.svg",
    },
    {
        id: 4,
        tabLabel: "Case Study no.4",
        title: "EcoTrack",
        subtitle: "Case Study no.4",
        description: "Supply chain management system with AI-driven optimization.",
        image: "/Home-Page/case-studies/4.svg",
    },
];

// Folder Icon Component with gradient
const FolderIcon = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <svg className={className} style={style} viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M35 12.25H21L17.5 8.75H7C5.075 8.75 3.5 10.325 3.5 12.25V31.75C3.5 33.675 5.075 35.25 7 35.25H35C36.925 35.25 38.5 33.675 38.5 31.75V15.75C38.5 13.825 36.925 12.25 35 12.25Z"
            fill="url(#folderGradient)"
        />
        <defs>
            <linearGradient id="folderGradient" x1="21" y1="8.75" x2="21" y2="35.25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3C8ECB" />
                <stop offset="0.7885" stopColor="#29618B" />
                <stop offset="0.9615" stopColor="#193B55" />
                <stop offset="1" stopColor="#000000" />
            </linearGradient>
        </defs>
    </svg>
);

// Arrow Forward Icon
const ArrowIcon = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.5 5L15.5 12L8.5 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function CaseStudies() {
    const [activeId, setActiveId] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const activeContent = studyData.find((s) => s.id === activeId) || studyData[0];

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ============ MOBILE RENDER ============
    if (isMobile) {
        return (
            <section className="relative w-full bg-black min-h-[600px] py-8 px-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-2 mb-6">
                    <p
                        className={`${redHat.className} font-bold bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent`}
                        style={{
                            fontSize: '14px',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Our Portfolio
                    </p>
                    <h2
                        className={`${outfit.className} font-semibold text-white`}
                        style={{ fontSize: '24px', lineHeight: '1.1' }}
                    >
                        Case <span className="text-[#3C8ECB]">Studies</span>
                    </h2>
                </div>

                {/* AMBIENT GLOW */}
                <div
                    className="absolute pointer-events-none z-0"
                    style={{
                        width: '300px',
                        height: '300px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(ellipse at center, rgba(60, 142, 203, 0.4) 0%, rgba(60, 142, 203, 0.15) 40%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />

                {/* Content Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeContent.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* Image */}
                        <div
                            className="relative w-full max-w-[320px] aspect-[559/353] rounded-[12px] overflow-hidden mb-6"
                        >
                            <Image
                                src={activeContent.image}
                                alt={activeContent.title}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full max-w-[320px] text-center">
                            <span className={`${robotoFlex.className} font-medium text-[14px] leading-[20px] text-[#3C8ECB] block`}>
                                {activeContent.subtitle}
                            </span>
                            <h3 className={`${robotoFlex.className} font-semibold text-[22px] leading-[28px] text-white mt-2`}>
                                {activeContent.title}
                            </h3>
                            <p className={`${inter.className} font-normal text-[14px] leading-[20px] text-white/90 mt-3`}>
                                {activeContent.description}
                            </p>

                            {/* See Case Study Button - SMALLER */}
                            <Link
                                href="/case-study"
                                className="mt-5 mx-auto inline-flex items-center justify-center w-[140px] h-[36px] rounded-[10px] transition-all duration-300"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.001)',
                                    border: '1px solid transparent',
                                    backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, #4ade80, #3b82f6, #a855f7)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box',
                                }}
                            >
                                <span className={`${roboto.className} font-normal text-[13px] leading-[18px] text-white`}>
                                    See case Study
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Navigation Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {studyData.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveId(item.id)}
                                className="transition-all duration-300"
                                style={{
                                    width: isActive ? '24px' : '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background: isActive ? '#3C8ECB' : 'rgba(255, 255, 255, 0.4)',
                                }}
                            />
                        );
                    })}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-8">
                    <Link
                        href="/case-study"
                        className="inline-flex items-center justify-center w-[150px] h-[40px] bg-[#3C8ECB] rounded-[6px] hover:bg-[#29618B] transition-colors duration-300"
                    >
                        <span className={`${poppins.className} font-semibold text-[14px] text-center text-white`}>
                            Load More
                        </span>
                    </Link>
                </div>
            </section>
        );
    }

    // ============ DESKTOP/TABLET RENDER ============
    return (
        <section
            className="relative w-full bg-black py-6 md:py-8 lg:py-0"
            style={{ minHeight: 'clamp(550px, 90vh, 700px)' }}
        >
            {/* Header Section - CENTERED - CONSISTENT WITH OTHER COMPONENTS */}
            <div className="flex flex-col items-center text-center gap-1 pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-4 mb-4 sm:mb-6 lg:mb-8">
                {/* Section Label */}
                <p
                    className={`${redHat.className} font-bold bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent`}
                    style={{
                        fontSize: 'clamp(14px, 1.4vw, 20px)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Our Portfolio
                </p>

                {/* Main Heading */}
                <h2
                    className={`${outfit.className} font-semibold text-white`}
                    style={{
                        fontSize: 'clamp(24px, 2.5vw, 36px)',
                        lineHeight: '1.1'
                    }}
                >
                    Case <span className="text-[#3C8ECB]">Studies</span>
                </h2>
            </div>

            {/* AMBIENT BACKGROUND GLOW */}
            <div
                className="absolute pointer-events-none z-0"
                style={{
                    width: 'clamp(400px, 65vw, 900px)',
                    height: 'clamp(300px, 50vh, 600px)',
                    left: '50%',
                    top: '55%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(ellipse at center, rgba(60, 142, 203, 0.45) 0%, rgba(60, 142, 203, 0.25) 25%, rgba(60, 142, 203, 0.1) 50%, rgba(60, 142, 203, 0.02) 70%, transparent 85%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* Main Content Area */}
            <div className="relative w-full mt-2 sm:mt-4 lg:mt-[30px] z-10">

                {/* Three Column Flex Layout - Compact spacing */}
                <div
                    className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-0"
                    style={{ padding: '0 clamp(12px, 2vw, 40px)' }}
                >

                    {/* LEFT: Navigation Tabs - Pushed closer to image */}
                    <div
                        className="flex flex-row md:flex-col order-2 lg:order-1 z-30 overflow-x-auto md:overflow-visible pb-2 md:pb-0 flex-shrink-0"
                        style={{
                            gap: 'clamp(8px, 1.2vh, 12px)',
                            paddingTop: 'clamp(12px, 3vh, 23px)',
                            marginRight: 'clamp(-40px, -6vw, -80px)'
                        }}
                    >
                        {studyData.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <motion.button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`group flex items-center transition-all duration-300 text-left relative flex-shrink-0 cursor-pointer ${isActive ? "z-50" : "opacity-70 hover:opacity-100"}`}
                                    whileTap={{ scale: 0.98 }}
                                    animate={{ x: isActive ? 40 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {isActive ? (
                                        <div
                                            className="flex items-center"
                                            style={{
                                                gap: 'clamp(6px, 0.8vw, 12px)',
                                                paddingLeft: 'clamp(10px, 1.4vw, 19px)',
                                                paddingRight: 'clamp(6px, 0.9vw, 12px)',
                                                paddingTop: 'clamp(6px, 0.9vh, 9px)',
                                                paddingBottom: 'clamp(6px, 0.9vh, 9px)',
                                                borderRadius: 'clamp(18px, 2vw, 29px)',
                                                minWidth: 'clamp(180px, 26vw, 361px)',
                                                height: 'clamp(40px, 8vh, 62px)',
                                                background: 'rgba(217, 217, 217, 0.25)',
                                                boxShadow: '1px 0px 10.9px rgba(0, 0, 0, 0.16)',
                                            }}
                                        >
                                            <FolderIcon
                                                className="flex-shrink-0"
                                                style={{ width: 'clamp(24px, 3vw, 42px)', height: 'clamp(26px, 3.2vw, 44px)' }}
                                            />
                                            <span
                                                className={`${robotoFlex.className} font-bold text-white whitespace-nowrap flex-grow`}
                                                style={{ fontSize: 'clamp(16px, 2.3vw, 32px)', lineHeight: 'clamp(24px, 3vw, 41px)' }}
                                            >
                                                {item.tabLabel}
                                            </span>
                                            <ArrowIcon style={{ width: 'clamp(18px, 2.3vw, 32px)', height: 'clamp(18px, 2.3vw, 32px)' }} />
                                        </div>
                                    ) : (
                                        <div
                                            className="flex items-center"
                                            style={{ gap: 'clamp(6px, 0.8vw, 12px)', paddingLeft: 'clamp(10px, 1.4vw, 19px)', paddingTop: 'clamp(1px, 0.3vh, 2px)', paddingBottom: 'clamp(1px, 0.3vh, 2px)' }}
                                        >
                                            <FolderIcon
                                                className="flex-shrink-0"
                                                style={{ width: 'clamp(24px, 3vw, 42px)', height: 'clamp(26px, 3.2vw, 44px)' }}
                                            />
                                            <span
                                                className={`${robotoFlex.className} font-medium text-white whitespace-nowrap`}
                                                style={{ fontSize: 'clamp(14px, 1.7vw, 24px)', lineHeight: 'clamp(24px, 3vw, 41px)' }}
                                            >
                                                {item.tabLabel}
                                            </span>
                                        </div>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* CENTER + RIGHT: Image and Text together */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row items-center lg:items-start order-1 lg:order-2"
                        >
                            {/* Image Container */}
                            <div
                                className="relative flex-shrink-0"
                                style={{
                                    width: 'clamp(280px, 43vw, 587px)',
                                    height: 'clamp(170px, 25vw, 342px)',
                                    transform: 'translate(clamp(-50px, -7.3vw, -100px), clamp(-7px, -1vw, -14px))',
                                    borderRadius: 'clamp(10px, 1.4vw, 19px)',
                                }}
                            >
                                <div
                                    className="relative w-full h-full overflow-hidden"
                                    style={{ borderRadius: 'clamp(10px, 1.4vw, 19px)' }}
                                >
                                    <Image
                                        src={activeContent.image}
                                        alt={activeContent.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>

                            {/* RIGHT: Text Content - Gap is responsive -100px */}
                            <div
                                className="w-full flex flex-col items-start z-20"
                                style={{
                                    maxWidth: 'clamp(250px, 28vw, 380px)',
                                    marginLeft: 'clamp(-50px, -7.3vw, -100px)',
                                    paddingTop: 'clamp(8px, 1.5vh, 17px)'
                                }}
                            >
                                {/* Subtitle */}
                                <span
                                    className={`${robotoFlex.className} font-medium text-[#3C8ECB]`}
                                    style={{ fontSize: 'clamp(12px, 1.4vw, 20px)', lineHeight: 'clamp(20px, 3vw, 41px)' }}
                                >
                                    {activeContent.subtitle}
                                </span>

                                {/* Title */}
                                <h3
                                    className={`${robotoFlex.className} font-semibold text-white`}
                                    style={{
                                        fontSize: 'clamp(18px, 2.3vw, 32px)',
                                        lineHeight: 'clamp(24px, 3vw, 41px)',
                                        marginTop: 'clamp(2px, 0.4vh, 12px)'
                                    }}
                                >
                                    {activeContent.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`${inter.className} font-normal text-white`}
                                    style={{
                                        fontSize: 'clamp(12px, 1.6vw, 22px)',
                                        lineHeight: 'clamp(16px, 1.8vw, 24px)',
                                        marginTop: 'clamp(6px, 1vh, 16px)',
                                        maxWidth: 'clamp(220px, 26vw, 351px)'
                                    }}
                                >
                                    {activeContent.description}
                                </p>

                                {/* See Case Study Button - SMALLER */}
                                <Link
                                    href="/case-study"
                                    className="inline-flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                    style={{
                                        marginTop: 'clamp(12px, 2.5vh, 28px)',
                                        width: 'clamp(120px, 12vw, 160px)',
                                        height: 'clamp(32px, 5vh, 44px)',
                                        borderRadius: 'clamp(8px, 1vw, 12px)',
                                        background: 'rgba(0, 0, 0, 0.001)',
                                        border: '1px solid transparent',
                                        backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, #4ade80, #3b82f6, #a855f7)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'padding-box, border-box',
                                    }}
                                >
                                    <span
                                        className={`${roboto.className} font-normal text-white whitespace-nowrap`}
                                        style={{ fontSize: 'clamp(11px, 1.2vw, 16px)', lineHeight: 'clamp(16px, 1.8vw, 24px)' }}
                                    >
                                        See case Study
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Load More Button */}
            <div
                className="flex justify-center relative z-10"
                style={{ marginTop: 'clamp(20px, 4vh, 48px)' }}
            >
                <Link
                    href="/case-study"
                    className="inline-flex items-center justify-center bg-[#3C8ECB] hover:bg-[#29618B] transition-colors duration-300"
                    style={{
                        width: 'clamp(140px, 13vw, 182px)',
                        height: 'clamp(38px, 6vh, 48px)',
                        borderRadius: 'clamp(5px, 0.6vw, 8px)'
                    }}
                >
                    <span
                        className={`${poppins.className} font-semibold text-center text-white`}
                        style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', lineHeight: 'clamp(18px, 1.8vw, 24px)' }}
                    >
                        Load More
                    </span>
                </Link>
            </div>
        </section>
    );
}
