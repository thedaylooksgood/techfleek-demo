'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Calendar, Mail, Phone, Github, Linkedin, ArrowUp, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { homeStyles } from './Home-Page/styles';

export default function Footer() {
    const [year, setYear] = useState(2025);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const fontRedHat = "font-[family-name:var(--font-red-hat)]"; // Match About section font

    return (
        <footer ref={containerRef} className={`relative bg-white text-slate-800 pt-16 pb-8 overflow-hidden border-t border-slate-100 ${fontRedHat}`}>

            {/* BACKGROUND PATTERN - Compact & Subtle */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#3C8ECB 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }}>
            </div>

            {/* PARALLAX TEXT - Scaled Down */}
            <motion.div
                style={{ y }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 text-[12vw] font-black tracking-tighter text-[#3C8ECB]/[0.02] select-none pointer-events-none whitespace-nowrap z-0"
            >
                TECHFLEEK
            </motion.div>

            <div className={`${homeStyles.container} relative z-10`}>

                {/* 1. TOP SECTION: CTA & BRAND - COMPACT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 items-start">

                    {/* LEFT: BRAND INTRO (Col 4) */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link href="/" scroll={true} onClick={() => window.scrollTo(0, 0)} className="inline-block mb-4">
                            <img src="/logo.svg" alt="TechFleek" className="h-8 w-auto" />
                        </Link>

                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-4 shadow-sm">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3C8ECB] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3C8ECB]"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Next Gen Agency</span>
                        </div>

                        <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-sm font-medium">
                            We craft digital experiences that blend <span className="text-[#3C8ECB] font-bold">technical excellence</span> with <span className="text-[#3C8ECB] font-bold">beautiful design</span>.
                        </p>

                        <div className="flex gap-2.5">
                            {[Linkedin, Github, Instagram, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#3C8ECB] hover:text-white transition-all duration-300 border border-slate-100 shadow-sm hover:-translate-y-0.5">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE: STATS (Col 4) - COMPACT GRID */}
                    <div className="lg:col-span-4">
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { num: '2k+', label: 'Happy Clients' },
                                { num: '98%', label: 'Retention Rate' },
                                { num: '5yr', label: 'Market Leader' },
                                { num: '50+', label: 'Team Experts' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white border border-slate-100 p-3 rounded-xl hover:border-[#3C8ECB]/30 hover:shadow-sm transition-all duration-300 group">
                                    <span className="block text-xl font-bold text-slate-800 mb-0.5 group-hover:text-[#3C8ECB] transition-colors">{stat.num}</span>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: CTA (Col 4) - TIGHTER */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
                        <h2 className="text-[2.5rem] lg:text-[3.2rem] font-black leading-[0.95] tracking-tight text-slate-900 mb-6">
                            Let&apos;s build the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]">future</span> together.
                        </h2>

                        <Link href="/enquiry" scroll={true} onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-2 pl-5 pr-4 py-2.5 bg-[#3C8ECB] text-white rounded-full text-sm font-bold shadow-lg shadow-[#3C8ECB]/20 hover:shadow-[#3C8ECB]/40 hover:-translate-y-0.5 transition-all duration-300">
                            Book Consultation
                            <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                                <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* 2. LINKS SECTION - COMPACT LISTS */}
                <div className="border-t border-slate-100 pt-8 pb-8 mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-sm">
                        <FooterColumn title="Explore" links={[
                            { name: 'Home', href: '/' },
                            { name: 'About Us', href: '/about-us' },
                            { name: 'Services', href: '/services' },
                            { name: 'Careers', href: '/careers' }
                        ]} />

                        <FooterColumn title="Services" links={[
                            { name: 'Web Development', href: '/services/web-development' },
                            { name: 'App Development', href: '/services/mobile-app-development' },
                            { name: 'UI/UX Design', href: '/services/ui-ux-design' },
                            { name: 'Cloud Solutions', href: '/services/cloud-services' }
                        ]} />

                        <FooterColumn title="Resources" links={[
                            { name: 'Case Studies', href: '/case-study' },
                            { name: 'Blog', href: '#' },
                            { name: 'Terms of Service', href: '#' },
                            { name: 'Privacy Policy', href: '#' }
                        ]} />

                        <div className="col-span-1">
                            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Contact</h4>
                            <ul className="space-y-2.5">
                                <li>
                                    <a href="mailto:hello@techfleek.com" className="flex items-center gap-2 group text-slate-500 hover:text-[#3C8ECB] transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[#3C8ECB] group-hover:bg-[#3C8ECB] group-hover:text-white transition-all">
                                            <Mail className="w-3 h-3" />
                                        </div>
                                        <span className="font-medium">hello@techfleek.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+918802172570" className="flex items-center gap-2 group text-slate-500 hover:text-[#3C8ECB] transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[#3C8ECB] group-hover:bg-[#3C8ECB] group-hover:text-white transition-all">
                                            <Phone className="w-3 h-3" />
                                        </div>
                                        <span className="font-medium">+91 88021 72570</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BAR - MINIMAL */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium border-t border-slate-100 pt-6">
                    <p>&copy; {year} TechFleek Technologies. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Operational
                        </span>
                        <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-[#3C8ECB] transition-colors">
                            Back to Top <ArrowUp className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Compact Link Component
function FooterColumn({ title, links }: { title: string, links: any[] }) {
    return (
        <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">{title}</h4>
            <ul className="space-y-2">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link href={link.href} scroll={true} onClick={() => window.scrollTo(0, 0)} className="text-slate-500 hover:text-[#3C8ECB] transition-colors text-[13px] font-medium flex items-center gap-1 hover:translate-x-1 duration-200">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}