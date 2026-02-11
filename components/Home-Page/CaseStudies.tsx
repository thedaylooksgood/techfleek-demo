'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Activity, Zap, Box, ArrowRight } from "lucide-react";
import { homeStyles } from './styles';

// --- DATA ---
const studyData = [
    {
        id: 1,
        title: "MergerDomo",
        category: "FinTech",
        subtitle: "Investment Hub",
        description: "AI deal-making platform.",
        image: "/Home-Page/case-studies/1.svg",
        icon: Activity,
    },
    {
        id: 2,
        title: "Ucom Ent.",
        category: "Media",
        subtitle: "Streaming Cloud",
        description: "Next-gen content engine.",
        image: "/Home-Page/case-studies/2.svg",
        icon: Zap,
    },
    {
        id: 3,
        title: "HealthVantage",
        category: "Health",
        subtitle: "Telemedicine",
        description: "Virtual care ecosystem.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        icon: Activity,
    },
    {
        id: 4,
        title: "EcoTrack",
        category: "Logistics",
        subtitle: "Smart Supply",
        description: "IoT sustainable tracking.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        icon: Box,
    },
];

export default function CaseStudies() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Silky Smooth Spring Physics
    const springAnim = {
        type: "spring" as const,
        stiffness: 200,
        damping: 25,
        mass: 1
    };

    return (
        <section className={`${homeStyles.section} border-t border-slate-100 py-16 lg:py-24 overflow-hidden`}>
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <div className={`${homeStyles.container} relative z-10`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div className={homeStyles.headerWrapper.replace('mb-8', 'mb-0').replace('pb-4', 'pb-0').replace('border-b', '')}>
                        <span className={homeStyles.label}>
                            Our Portfolio
                        </span>
                        <h2 className={homeStyles.title}>
                            Selected <span className={homeStyles.gradientText}>Work</span>
                        </h2>
                    </div>
                    <Link
                        href="/case-study"
                        className="inline-flex items-center gap-2 px-4 py-2 text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                        style={{ background: 'linear-gradient(135deg, #3C8ECB 0%, #2563EB 100%)' }}
                    >
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* --- SEAMLESS LAYOUT --- */}
                {/* Container: Light, Airy Base */}
                <div
                    className="w-full h-[400px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-blue-100 flex flex-col lg:flex-row bg-[#F0F7FF] group/container"
                    onMouseLeave={() => !isMobile && setActiveId(null)}
                >
                    {studyData.map((item, index) => {
                        const isActive = activeId === item.id;
                        const isAnyActive = activeId !== null;

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                transition={springAnim}
                                onMouseEnter={() => !isMobile && setActiveId(item.id)}
                                onClick={() => setActiveId(isActive ? null : item.id)} // Toggle on click
                                className={`
                                    relative h-full border-b lg:border-b-0 lg:border-r border-blue-100/50 last:border-0
                                    overflow-hidden cursor-pointer
                                `}
                                style={{
                                    flex: isActive ? 3.5 : isAnyActive ? 0.8 : 1,
                                    willChange: 'flex-grow'
                                }}
                            >
                                {/* --- IMAGE LAYER --- */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ willChange: "transform" }}
                                        className={`
                                            object-cover transition-all duration-500 ease-out
                                            ${isActive
                                                ? 'scale-105 opacity-100 blur-0'
                                                : 'scale-100 opacity-0' // Hidden when inactive
                                            }
                                        `}
                                    />

                                    {/* Active State Details */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                                    {/* --- ICE BLUE OVERLAY (INACTIVE STATE) --- */}
                                    {/* Richer "Not Bland" Blue */}
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                        <div className="absolute inset-0 bg-[#3C8ECB]/10" />
                                        {/* Gradient to give it depth, not just flat color */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#3C8ECB]/5 to-[#3C8ECB]/20" />
                                        <div className="absolute inset-0 backdrop-blur-[2px]" />
                                    </div>
                                </div>

                                {/* --- CONTENT LAYER --- */}
                                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between z-10 w-full">

                                    {/* Top: Index Number & Icon */}
                                    <div className="flex justify-between items-start">
                                        <span className={`
                                            text-4xl lg:text-5xl font-black tracking-tighter leading-none transition-colors duration-500
                                            ${isActive ? 'text-white/20' : 'text-[#3C8ECB]/30'}
                                        `}>
                                            0{index + 1}
                                        </span>

                                        <motion.div
                                            animate={{
                                                backgroundColor: isActive ? '#3C8ECB' : 'rgba(60, 142, 203, 0.15)',
                                                borderColor: isActive ? '#3C8ECB' : 'rgba(60, 142, 203, 0.2)',
                                                color: isActive ? '#fff' : '#3C8ECB'
                                            }}
                                            className="p-3 rounded-full backdrop-blur-md transition-colors border"
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </motion.div>
                                    </div>

                                    {/* Center: Vertical Title (Inactive) */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="rotate-0 lg:-rotate-90 origin-center whitespace-nowrap">
                                                <h3 className="text-xl lg:text-2xl font-bold text-[#3C8ECB] transition-colors tracking-widest uppercase truncate drop-shadow-sm opacity-90">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    )}

                                    {/* Bottom: Active Content */}
                                    <AnimatePresence mode="wait">
                                        {isActive ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                transition={{ delay: 0.2, duration: 0.4 }}
                                                className="flex flex-col gap-3"
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[#3C8ECB] font-bold text-xs tracking-wider uppercase bg-white/90 w-fit px-2 py-1 rounded backdrop-blur-md">
                                                        {item.category}
                                                    </span>
                                                    <h3 className="text-3xl lg:text-4xl font-white text-white font-bold leading-tight drop-shadow-lg">
                                                        {item.title}
                                                    </h3>
                                                </div>

                                                <p className="text-slate-200 text-sm leading-relaxed max-w-[320px] drop-shadow-md">
                                                    {item.description}
                                                </p>

                                                <div className="pt-2">
                                                    <Link href="/case-study" className="inline-flex items-center gap-3 group/link">
                                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover/link:scale-110">
                                                            <ArrowUpRight className="w-5 h-5 text-[#3C8ECB]" />
                                                        </div>
                                                        <span className="text-white font-bold text-xs group-hover/link:text-[#3C8ECB] transition-colors max-w-[100px] sm:max-w-none">
                                                            View Case Study
                                                        </span>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
