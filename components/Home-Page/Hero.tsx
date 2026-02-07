"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Smartphone,
    Layers,
    TrendingUp,
    Layout,
    Zap,
    CheckCircle,
    User,
    Cloud,
    Brain,
    Code2,
    ShieldCheck,
    Database,
    Terminal
} from "lucide-react";

// --- MAIN HERO COMPONENT ---

export default function Hero() {

    return (
        <section className="relative w-full h-[100dvh] bg-[#F8F9FB] flex items-center justify-center font-sans overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

                {/* --- LEFT COLUMN: CONTENT --- */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 pt-16 lg:pt-0">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3C8ECB] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3C8ECB]"></span>
                        </span>
                        <span className="text-[#3C8ECB] font-bold tracking-widest uppercase text-[10px] sm:text-xs select-none">
                            Real Results
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.1] mb-6"
                    >
                        Think, Build, Scale with{' '}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB] animate-text-shimmer bg-[length:200%_auto]">
                            TechFleek
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg font-medium mb-8"
                    >
                        Next-Gen Digital Transformation utilizing SOTA Technologies.
                        We craft secure, scalable, and stunning solutions that drive real business growth.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link href="/contact">
                            <button className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer-slide" />
                                Start Your Project
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Trust/Social Proof Small */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-10 flex items-center gap-4 text-xs font-medium text-slate-400 hidden lg:flex"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                                    <User size={14} className="text-slate-400" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px]">
                                +50
                            </div>
                        </div>
                        <p>Trusted by innovative founders</p>
                    </motion.div>
                </div>

                {/* --- RIGHT COLUMN: INTERACTIVE DIAGRAM --- */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center relative pointer-events-none lg:pointer-events-auto">
                    <NetworkDiagram />
                </div>

            </div>
        </section>
    );
}

// --- NETWORK DIAGRAM COMPONENT ---

function NetworkDiagram() {
    return (
        <div className="relative w-full h-full max-w-[600px] max-h-[600px] perspective-[2000px] flex items-center justify-center origin-center">

            {/* Iso Container */}
            <motion.div
                className="relative w-full h-full"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(20deg) rotateY(-20deg) rotateZ(5deg)" // Isometric Tilt matching the reference
                }}
            >
                {/* --- ORBITAL RINGS --- */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/30 border-dashed z-0"
                    style={{ width: '380px', height: '380px', transformStyle: "preserve-3d" }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 border-dotted z-0"
                    style={{ width: '550px', height: '550px', transformStyle: "preserve-3d" }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                />

                {/* --- CONNECTIONS (SVG) --- */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-slate-300 overflow-visible" style={{ transform: "translateZ(-50px)" }}>
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#3C8ECB" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>

                    <DataLine x1="50%" y1="50%" x2="80%" y2="25%" delay={0} duration={3} />
                    <DataLine x1="50%" y1="50%" x2="80%" y2="75%" delay={1} duration={4} />
                    <DataLine x1="50%" y1="50%" x2="20%" y2="70%" delay={0.5} duration={3.5} />
                    <DataLine x1="50%" y1="50%" x2="25%" y2="30%" delay={1.5} duration={3} />
                    {/* New Connections */}
                    <DataLine x1="50%" y1="50%" x2="50%" y2="15%" delay={2} duration={4} />
                    <DataLine x1="50%" y1="50%" x2="50%" y2="85%" delay={2.5} duration={3.5} />
                </svg>

                {/* --- CENTRAL HUB --- */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Ripple Effect (Flat on floor) */}
                    <div className="absolute inset-0 rounded-3xl bg-[#3C8ECB]/20 animate-ping-slow" style={{ transform: "translateZ(-20px)" }} />

                    {/* Core Box (Floating) */}
                    <motion.div
                        animate={{ z: [0, 20, 0] }} // Float in Z instead of Y for 3D effect
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-32 h-32 bg-white rounded-3xl shadow-[0_20px_50px_rgba(60,142,203,0.3)] flex items-center justify-center p-2.5 z-20"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-[#3C8ECB] to-[#2563EB] rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group border border-white/20">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-150%] transition-transform duration-1000 group-hover:translate-x-[150%]" />
                            <Zap className="text-white w-12 h-12 relative z-10 drop-shadow-lg" fill="currentColor" />
                        </div>

                        {/* Billboard Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-3 -right-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/20"
                            style={{ transform: "rotateX(-20deg) rotateY(20deg) rotateZ(-5deg)" }} // Counter-rotate to face user
                        >
                            CORE
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* --- NODES (With Billboard Text) --- */}

                {/* 1. Top Right: WEB */}
                <FloatingNode top="20%" left="75%" delay={0.2} icon={<Layout className="text-blue-500" />} label="Web Platforms" sub="Scalable Next.js" />

                {/* 2. Bottom Right: MOBILE */}
                <FloatingNode top="70%" left="65%" delay={0.4} icon={<Smartphone className="text-purple-500" />} label="Mobile Apps" sub="iOS & Android" />

                {/* 3. Bottom Left: UI/UX */}
                <FloatingNode top="65%" left="20%" delay={0.6} icon={<Layers className="text-pink-500" />} label="UI/UX Design" sub="Premium Aesthetics" />

                {/* 4. Top Left: STRATEGY */}
                <FloatingNode top="25%" left="15%" delay={0.8} icon={<TrendingUp className="text-emerald-500" />} label="Growth Strategy" sub="Data Driven" />

                {/* 5. Top Center: CLOUD */}
                <FloatingNode top="10%" left="45%" delay={1.0} icon={<Cloud className="text-sky-500" />} label="Cloud Infra" sub="AWS & Azure" />

                {/* 6. Bottom Center: AI */}
                <FloatingNode top="80%" left="45%" delay={1.2} icon={<Brain className="text-violet-500" />} label="AI Solutions" sub="ML & GenAI" />

                {/* Extra: Floating Tech Icons */}
                <FloatingTechIcon top="45%" left="12%" color="bg-orange-50 text-orange-500" icon={<Code2 size={20} />} delay={1.5} />
                <FloatingTechIcon top="15%" left="55%" color="bg-cyan-50 text-cyan-500" icon={<ShieldCheck size={20} />} delay={2.5} />
                <FloatingTechIcon top="85%" left="55%" color="bg-rose-50 text-rose-500" icon={<Database size={20} />} delay={0.5} />
                <FloatingTechIcon top="35%" left="85%" color="bg-purple-50 text-purple-500" icon={<Terminal size={20} />} delay={2.0} />

            </motion.div>
        </div>
    );
}

// --- HELPER COMPONENTS ---

function DataLine({ x1, y1, x2, y2, delay, duration }: { x1: string, y1: string, x2: string, y2: string, delay: number, duration: number }) {
    return (
        <>
            {/* Base Line */}
            <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" stroke="#e2e8f0" strokeDasharray="6 6" />

            {/* Animated Packet */}
            <MovingParticle start={{ x: x1, y: y1 }} end={{ x: x2, y: y2 }} delay={delay} />
        </>
    )
}

function MovingParticle({ start, end, delay }: { start: { x: string, y: string }, end: { x: string, y: string }, delay: number }) {
    return (
        <motion.circle
            r="3"
            fill="#a855f7"
            initial={{ cx: start.x, cy: start.y, opacity: 0 }}
            animate={{
                cx: [start.x, end.x],
                cy: [start.y, end.y],
                opacity: [0, 1, 0, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
                times: [0, 0.9, 1, 1]
            }}
        />
    )
}

function FloatingNode({ top, left, delay, icon, label, sub }: any) {
    return (
        <motion.div
            className="absolute z-20"
            style={{ top, left, transformStyle: "preserve-3d" }} // Keep 3D context
            initial={{ opacity: 0, scale: 0.8, z: 0 }}
            animate={{ opacity: 1, scale: 1, z: 20 }}
            transition={{ duration: 0.6, delay }}
        >
            <motion.div
                animate={{ z: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
                className="relative group min-w-[180px]"
                // Counter-rotate the card so text is readable
                style={{ transform: "rotateX(-20deg) rotateY(20deg) rotateZ(-5deg)" }}
            >
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 flex items-center gap-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    {/* Shine */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-slate-800">{label}</span>
                        <span className="text-[10px] text-slate-500 font-medium">{sub}</span>
                    </div>

                    <CheckCircle size={14} className="absolute top-2 right-2 text-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </motion.div>
        </motion.div>
    )
}

function FloatingTechIcon({ top, left, color, icon, delay }: any) {
    return (
        <motion.div
            className="absolute z-10"
            style={{ top, left, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, z: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <div
                className={`w-12 h-12 rounded-full border border-white/60 backdrop-blur-md shadow-lg ${color} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                style={{ transform: "rotateX(-20deg) rotateY(20deg) rotateZ(-5deg)" }}
            >
                {icon}
            </div>
        </motion.div>
    )
}