'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Palette, Layers, PenTool, Eye, Brush, Layout, Type,
    Image as ImageIcon, Monitor, CheckCircle2, Award, Users, Rocket,
    TrendingUp
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard, TestimonialCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

const services = [
    {
        icon: Palette,
        title: 'Visual Identity',
        description: 'Logo design, color palettes, and typography that represent your brand essence.',
        features: ['Logo Design', 'Color Psychology', 'Typography Systems']
    },
    {
        icon: Layout,
        title: 'Brand Guidelines',
        description: 'Comprehensive style guides ensuring consistency across all touchpoints.',
        features: ['Usage Rules', 'Voice & Tone', 'Asset Libraries']
    },
    {
        icon: Layers,
        title: 'Marketing Collateral',
        description: 'Business cards, brochures, and digital assets that communicate your value.',
        features: ['Print Materials', 'Social Media Kits', 'Email Templates']
    },
    {
        icon: Monitor,
        title: 'Digital Branding',
        description: 'Translating your brand identity into compelling web and mobile experiences.',
        features: ['Website Design', 'App UI', 'Digital Campaigns']
    }
];

const processSteps = [
    {
        step: '01',
        icon: Eye,
        title: 'Discovery',
        description: 'We dive deep into your business values, target audience, and market positioning.'
    },
    {
        step: '02',
        icon: PenTool,
        title: 'Concept',
        description: 'We explore creative directions and sketch initial ideas to capture your vision.'
    },
    {
        step: '03',
        icon: Brush,
        title: 'Refinement',
        description: 'We polish the chosen concept, perfecting every curve and color.'
    },
    {
        step: '04',
        icon: CheckCircle2,
        title: 'Delivery',
        description: 'We provide all final assets and a detailed guide on how to use them.'
    }
];

const stats = [
    { value: '200+', label: 'Brands Built', icon: Award },
    { value: '40%', label: 'Avg Brand Value Increase', icon: TrendingUp },
    { value: '15+', label: 'Design Awards', icon: Award },
    { value: '100%', label: 'Unique Designs', icon: Palette },
];

const whyChooseUs = [
    "Strategic Approach",
    "Timeless Design",
    "Consistent Application",
    "Full Asset Handoff",
    "Market Research Backed",
    "End-to-End Support"
];

const tools = [
    { name: 'Illustrator', icon: '/Home-Page/icons/react.png', color: '#FF9A00' },
    { name: 'Photoshop', icon: '/Home-Page/icons/css.png', color: '#31A8FF' },
    { name: 'InDesign', icon: '/Home-Page/icons/html.png', color: '#FF3366' },
    { name: 'Figma', icon: '/Home-Page/icons/js.png', color: '#F24E1E' },
    { name: 'Canva', icon: '/Home-Page/icons/bootstrap.png', color: '#00C4CC' },
    { name: 'Sketch', icon: '/Home-Page/icons/flutter.png', color: '#F7B500' },
    { name: 'CorelDRAW', icon: '/Home-Page/icons/firebase.png', color: '#00AC47' },
];



export default function BrandIdentityPage() {
    return (
        <PageTemplate>
            <PageHero
                title="Brand Identity"
                subtitle="Design Services"
                description="We create memorable visual systems and style guides that define your business."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Brand Identity' }
                ]}
            />

            <ContentSection
                label="OVERVIEW"
                title="Building Brands That"
                titleHighlight="Resonate"
                description="Your brand is more than just a logo. It's the story you tell and the feeling you evoke. We help you define and express your unique identity."
                showActions={true}
                primaryActionText="Start Branding"
                secondaryActionText="View Portfolio"
                secondaryActionHref="/case-study"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-center justify-center p-0"
                    >
                        {/* Glow Effect */}
                        <div className="absolute w-[80%] h-[80%] bg-[#3C8ECB]/20 blur-[100px] rounded-full -z-10 animate-pulse" />

                        <Image
                            src="/services/brand-identity.png"
                            alt="Brand Identity"
                            width={500}
                            height={500}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We believe in the power of design to transform businesses. Our strategic approach ensures your brand not only looks good but also aligns with your business goals and speaks to your audience.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whyChooseUs.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-green-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                label="IMPACT"
                title="Brand"
                titleHighlight="Value"
                description="Measuring the impact of strong identity design."
                className="bg-gray-50/50"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatsCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            icon={stat.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            <ContentSection
                label="CAPABILITIES"
                title="Our Branding"
                titleHighlight="Services"
                description="A full suite of services to build and maintain your brand."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <FeatureCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            <ContentSection
                label="METHODOLOGY"
                title="Creative"
                titleHighlight="Process"
                description="From blank canvas to brand guidelines."
                className="bg-slate-900 text-white"
                showGridBackground={false}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-600/20 rounded-xl">
                                    <step.icon className="text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-4xl font-black text-white/5">{step.step}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </ContentSection>

            {/* Tools - Reused Component */}
            <TechStack />

            {/* Testimonials - Reused Component */}
            <TestimonialSlider
                title="Client"
                subtitle="Love"
            />

            <ServicePagination currentServiceSlug="brand-identity" />
        </PageTemplate>
    );
}
