"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import ContentSection from "@/components/Common/ContentSection";
import {
    Building2, Users, Target, Award, Lightbulb, Shield,
    CheckCircle, Globe, Zap, Heart, Sparkles, Code,
    Smartphone, Cpu, Palette, Cloud, Settings, Link2,
    ArrowRight, MapPin, Briefcase, Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
// Image import removed — team section no longer uses photos

// Core values data
const coreValues = [
    { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with new technologies and methodologies." },
    { icon: Award, title: "Quality", description: "Excellence in code, UX, and customer service." },
    { icon: Users, title: "Collaboration", description: "Open communication and shared success." },
    { icon: Heart, title: "Impact", description: "Creating positive outcomes for clients and users." }
];

// Services data
const services = [
    {
        category: "Web Development",
        icon: Code,
        items: ["Web Applications", "CRM & Automation", "E-commerce", "Enterprise Software"]
    },
    {
        category: "Mobile Apps",
        icon: Smartphone,
        items: ["iOS Development", "Android Development", "Hybrid Apps", "API Integration"]
    },
    {
        category: "Blockchain & Web3",
        icon: Cpu,
        items: ["Smart Contracts", "NFT Marketplaces", "DeFi Solutions", "Crypto Wallets"]
    },
    {
        category: "UI/UX Design",
        icon: Palette,
        items: ["Interface Design", "UX Strategy", "Prototyping", "Design Systems"]
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        items: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless Solutions"]
    }
];

// Technology stack
const technologies = [
    "React.js", "Next.js", "Node.js", "Laravel", "Solidity", "Web3",
    "MySQL", "MongoDB", "AWS", "Docker", "Kubernetes"
];

// Development process - Professional
const developmentProcess = [
    {
        step: "01",
        title: "Discovery",
        description: "Deep-dive into your business goals, target users, and technical requirements.",
        icon: Target
    },
    {
        step: "02",
        title: "Strategy",
        description: "Architecture planning, tech stack selection, and roadmap creation.",
        icon: Briefcase
    },
    {
        step: "03",
        title: "Design",
        description: "UI/UX prototyping, wireframes, and interactive mockups.",
        icon: Palette
    },
    {
        step: "04",
        title: "Development",
        description: "Agile sprints with continuous integration and progress updates.",
        icon: Code
    },
    {
        step: "05",
        title: "Launch",
        description: "Testing, deployment, and ongoing maintenance support.",
        icon: Zap
    }
];

// Why choose us points
const whyChooseUs = [
    "Trusted software company in India",
    "Web, Mobile & Blockchain expertise",
    "Scalable & secure solutions",
    "Transparent communication",
    "Startup & enterprise friendly"
];

// Mission points
const missionPoints = [
    "Enterprise-grade software solutions",
    "Scalable and secure digital products",
    "Blockchain and Web3 adoption",
    "Long-term partnerships",
    "Continuous innovation"
];

// Director data
const director = {
    name: "Deepoo Gupta",
    role: "Founder & Director",
    linkedin: "https://www.linkedin.com/in/justdeepoo/",
    experience: [
        "12+ years in software development",
        "6+ years in blockchain & decentralized systems",
        "NFT, DeFi & token platform expertise",
        "Cloud-native architecture specialist"
    ]
};

// Team Roles Data — Private: No names, no images, just designations
const teamRoles = [
    {
        designation: "Frontend Engineer",
        icon: Code,
        tagline: "Crafting pixel-perfect interfaces",
        experience: "4+ Years Experience",
        skills: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
        designation: "Backend Architect",
        icon: Cpu,
        tagline: "Designing scalable server systems",
        experience: "6+ Years Experience",
        skills: ["Node.js", "Laravel", "PostgreSQL", "Redis"]
    },
    {
        designation: "UI/UX Designer",
        icon: Palette,
        tagline: "Shaping intuitive user experiences",
        experience: "5+ Years Experience",
        skills: ["Figma", "Prototyping", "Design Systems", "Motion"]
    },
    {
        designation: "Mobile App Developer",
        icon: Smartphone,
        tagline: "Building native & cross-platform apps",
        experience: "5+ Years Experience",
        skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
        designation: "Blockchain Engineer",
        icon: Link2,
        tagline: "Building decentralized solutions",
        experience: "6+ Years Experience",
        skills: ["Solidity", "Web3", "Smart Contracts", "DeFi"]
    },
    {
        designation: "DevOps Engineer",
        icon: Cloud,
        tagline: "Automating deployment pipelines",
        experience: "4+ Years Experience",
        skills: ["AWS", "Docker", "CI/CD", "Kubernetes"]
    }
];

// Floating animation variants
const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
    }
};

const pulseVariants = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
};

export default function AboutUsPage() {
    return (
        <PageTemplate>
            {/* Hero Section - Clean "About Us" */}
            <PageHero
                title="About"
                subtitle="Us"
                description="Building secure, scalable, and future-ready digital solutions for businesses worldwide."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" }
                ]}
                className="mb-0"
            />

            {/* Leadership Section - FIRST to introduce the founder */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-12 md:py-16 overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#3C8ECB]/10 to-purple-400/5 rounded-full blur-3xl"
                />
                <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                    className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 rounded-full blur-3xl"
                />

                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Director Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl"
                        >
                            {/* Gradient orbs */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3C8ECB]/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        variants={floatVariants}
                                        animate="animate"
                                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3C8ECB] to-indigo-500 flex items-center justify-center shadow-lg overflow-hidden"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/small-logo.png"
                                            alt={director.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{director.name}</h3>
                                        <p className="text-[#3C8ECB] font-semibold">{director.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {director.experience.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2 text-white/80 text-sm"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                            <span>{exp}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <a
                                    href={director.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold hover:bg-white/20 transition-colors"
                                >
                                    <Globe className="w-4 h-4" />
                                    Connect on LinkedIn
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Company Intro */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-3">
                                MEET OUR FOUNDER
                            </span>
                            <h2 className="font-black text-slate-900 text-2xl md:text-3xl lg:text-[36px] leading-[1.1] mb-4">
                                Leadership with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-indigo-500">Vision</span>
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                Techfleek Technologies is led by an experienced technology professional with over a decade in software development and deep specialization in blockchain and decentralized systems. This leadership ensures every project is built with technical depth, strategic clarity, and scalability.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Founded in 2024, we are a professional software development company delivering high-quality web, mobile, and blockchain solutions for startups, enterprises, and growing businesses worldwide.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Team Section — Private: Designation-Only Cards */}
            <div className="w-full bg-slate-50 relative font-[family-name:var(--font-red-hat)] py-16 md:py-20 overflow-hidden">
                {/* Animated background orbs */}
                <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#3C8ECB]/8 to-blue-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#3C8ECB]/8 to-blue-400/5 rounded-full blur-3xl"
                />

                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="mb-12 text-center">
                        <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                            OUR TEAM
                        </span>
                        <h2 className="font-black text-slate-900 text-2xl md:text-3xl lg:text-[36px] leading-[1.1] mb-3">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-indigo-500">Experts</span> Behind the Code
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                            A dedicated team of specialists driving innovation across every layer of the stack.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {teamRoles.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                {/* Top gradient accent bar — unified blue */}
                                <div className="h-1 w-full bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]" />

                                {/* Hover glow background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3C8ECB]/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 p-6 md:p-7">
                                    {/* Icon + Designation */}
                                    <div className="flex items-center gap-4 mb-3">
                                        <motion.div
                                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3C8ECB] to-[#2563EB] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                            whileHover={{ rotate: [0, -8, 8, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <role.icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-slate-800 transition-colors">
                                                {role.designation}
                                            </h3>
                                            <p className="text-slate-400 text-xs mt-0.5 font-medium">
                                                {role.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Experience badge */}
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3C8ECB]/10 mb-4">
                                        <Briefcase className="w-3.5 h-3.5 text-[#3C8ECB]" />
                                        <span className="text-[11px] font-bold text-[#3C8ECB] tracking-wide">
                                            {role.experience}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-4" />

                                    {/* Skills pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {role.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 text-[11px] font-semibold rounded-full bg-slate-50 text-slate-600 border border-slate-100 group-hover:border-[#3C8ECB]/20 group-hover:bg-white transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision & Mission - Compact */}
            <div className="w-full bg-slate-50 relative font-[family-name:var(--font-red-hat)] py-12 md:py-16 overflow-hidden">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg relative overflow-hidden group"
                        >
                            <motion.div
                                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#3C8ECB]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
                            />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Target className="w-6 h-6 text-[#3C8ECB]" />
                                    <span className="text-[#3C8ECB] font-bold tracking-widest uppercase text-xs">VISION</span>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    To become a globally trusted software development and blockchain services company delivering innovative, reliable, and scalable technology solutions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3C8ECB]/20 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Sparkles className="w-6 h-6 text-[#3C8ECB]" />
                                    <span className="text-[#3C8ECB] font-bold tracking-widest uppercase text-xs">MISSION</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {missionPoints.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2 text-white/80 text-sm">
                                            <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Location with Map */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Location Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-3">
                                HEADQUARTERS
                            </span>
                            <h2 className="font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1] mb-4">
                                Where We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-indigo-500">Based</span>
                            </h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#3C8ECB] mt-0.5 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Office Address</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            O-1106, Officer City-1,<br />
                                            Raj Nagar Extension,<br />
                                            Uttar Pradesh – 201017, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-[#3C8ECB]" />
                                    <span className="text-slate-600 text-sm font-medium">Serving Clients Globally</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-[#3C8ECB]" />
                                    <span className="text-slate-600 text-sm font-medium">Remote-First Workplace</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
                                    <Calendar className="w-4 h-4 text-[#3C8ECB]" />
                                    <span className="text-slate-600">Founded 2024</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
                                    <Users className="w-4 h-4 text-[#3C8ECB]" />
                                    <span className="text-slate-600">2–10 Employees</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg border border-slate-100"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4376799380196!2d77.4295!3d28.7095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574f8b13e6f%3A0x1234567890abcdef!2sRaj%20Nagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Techfleek Office Location"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Core Values - Compact */}
            <div className="w-full bg-slate-50 relative font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="mb-8">
                        <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                            OUR VALUES
                        </span>
                        <h2 className="font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1]">
                            What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-indigo-500">Us</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                            >
                                <motion.div
                                    variants={floatVariants}
                                    animate="animate"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3C8ECB]/10 to-blue-50 flex items-center justify-center mb-3"
                                >
                                    <value.icon className="w-6 h-6 text-[#3C8ECB]" />
                                </motion.div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{value.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services - Compact */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="mb-8">
                        <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                            SERVICES
                        </span>
                        <h2 className="font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1]">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-indigo-500">Offer</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-[#3C8ECB]/30 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3C8ECB] to-indigo-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{service.category}</h3>
                                <ul className="space-y-1">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-slate-500 text-xs flex items-center gap-1.5">
                                            <span className="w-1 h-1 rounded-full bg-[#3C8ECB]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack - Minimal */}
            <div className="w-full bg-slate-50 relative font-[family-name:var(--font-red-hat)] py-10 md:py-12">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mr-4">Tech Stack:</span>
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-100 hover:border-[#3C8ECB]/30 hover:text-[#3C8ECB] transition-colors cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process - Clean Professional Design */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-xs mb-2">
                            OUR PROCESS
                        </span>
                        <h2 className="font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1]">
                            How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#3C8ECB]">Great Products</span>
                        </h2>
                    </div>

                    {/* Process Steps - Horizontal Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                        {developmentProcess.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="group relative bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-100 hover:border-[#3C8ECB]/30 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Step Number & Icon */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#3C8ECB]/10 group-hover:bg-[#3C8ECB] flex items-center justify-center transition-colors duration-300">
                                        <process.icon className="w-5 h-5 text-[#3C8ECB] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-200 group-hover:text-[#3C8ECB]/20 transition-colors">
                                        {process.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-slate-900 text-base mb-1.5">{process.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{process.description}</p>

                                {/* Connector Arrow - Desktop */}
                                {index < developmentProcess.length - 1 && (
                                    <div className="hidden md:flex absolute right-0 translate-x-[calc(50%+8px)] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center z-10 group-hover:border-[#3C8ECB]/50 transition-colors">
                                        <ArrowRight size={12} className="text-slate-400 group-hover:text-[#3C8ECB] transition-colors" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </PageTemplate>
    );
}
