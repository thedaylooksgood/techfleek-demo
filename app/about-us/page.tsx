"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import ContentSection from "@/components/Common/ContentSection";
import { FeatureCard, StatsCard, TestimonialCard } from "@/components/Common/Cards";
import { Building2, Users, GraduationCap, TrendingUp, Target, Award, Lightbulb, Shield, CheckCircle, Globe, Clock, Zap, Heart, Sparkles } from "lucide-react";

// Core values data
const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We embrace new technologies and methodologies, constantly pushing the boundaries of what's possible in digital design and development."
    },
    {
        icon: Award,
        title: "Quality",
        description: "We believe in delivering excellence in everything we do, from code quality to user experience and customer service."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We work closely with our clients and each other, fostering an environment of open communication and shared success."
    },
    {
        icon: Heart,
        title: "Impact",
        description: "We measure our success by the positive impact we create for our clients and their users."
    }
];

// Director data
const director = {
    name: "Justdeepoo",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/justdeepoo/",
    bio: "Leading TechFleek with a vision for innovation and excellence in digital transformation."
};

export default function AboutUsPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="About"
                subtitle="Us"
                description="Founded with a vision to transform digital experiences, we are a team of passionate designers, developers, and creative thinkers dedicated to crafting exceptional digital solutions that make a difference."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" }
                ]}
                className="mb-0" // Reduce margin below hero
            />

            {/* Our Story Section - No Image, Reduced Padding */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-12 md:py-16">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    {/* Header */}
                    <div className="w-full mb-6 border-b border-slate-100 pb-4 flex flex-col gap-2 text-left">
                        <span className="inline-block text-[#3C8ECB] font-bold tracking-widest uppercase text-[10px] sm:text-xs shrink-0 select-none">
                            OUR STORY
                        </span>
                        <h2 className="font-black text-slate-900 text-2xl md:text-2xl lg:text-[30px] leading-[1.1]">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3C8ECB] to-[#2563EB]">Future</span>
                        </h2>
                    </div>

                    {/* Content - Text Only */}
                    <div className="prose text-slate-500 leading-relaxed text-left max-w-3xl">
                        <p className="mb-4">
                            Founded with a vision to transform digital experiences, we are a team of passionate designers, developers, and creative thinkers dedicated to crafting exceptional digital solutions that make a difference.
                        </p>
                        <p>
                            Since our inception, we've been at the forefront of digital innovation, helping businesses and organizations achieve their goals through cutting-edge technology and thoughtful design.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Mission Section - Reduced Padding, Left Aligned */}
            <div className="w-full bg-white relative font-[family-name:var(--font-red-hat)] py-8 md:py-12">
                <div className="w-full max-w-[1250px] mx-auto relative z-10 px-4 sm:px-6 md:px-8">
                    <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-10 text-left text-white relative overflow-hidden shadow-xl">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[100px]" />
                            <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] rounded-full bg-purple-500 blur-[100px]" />
                        </div>

                        <div className="relative z-10 max-w-4xl mr-auto">
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="w-6 h-6 text-[#3C8ECB]" />
                                <span className="text-[#3C8ECB] font-bold tracking-widest uppercase text-xs">OUR MISSION</span>
                            </div>

                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                "We strive to create meaningful digital experiences that empower businesses and delight users."
                            </h3>
                            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-2xl">
                                Our mission is to bridge the gap between complex technology and human-centered design, delivering solutions that drive real value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Core Values Section - Reduced Padding */}
            <ContentSection
                label="OUR VALUES"
                title="What We"
                titleHighlight="Stand For"
                className="py-12 md:py-16" // Reduced padding
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {coreValues.map((value, index) => (
                        <FeatureCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Director Section */}
            <ContentSection
                label="LEADERSHIP"
                title="Meet the"
                titleHighlight="Director"
                className="py-12 md:py-16"
            >
                <div className="max-w-md mr-auto">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="bg-slate-50 p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3C8ECB] to-[#2563EB] flex items-center justify-center text-white text-2xl font-bold">
                                    {director.name.charAt(0)}
                                </div>
                                <a
                                    href={director.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                                    title="View LinkedIn Profile"
                                >
                                    <Globe className="w-5 h-5" />
                                </a>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{director.name}</h3>
                                <p className="text-[#3C8ECB] font-medium text-sm">{director.role}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                {director.bio}
                            </p>
                            <a
                                href={director.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-[#3C8ECB] transition-colors"
                            >
                                View full profile on LinkedIn
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>

        </PageTemplate>
    );
}
