'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    BarChart3, TrendingUp, Search, MousePointer, Mail, Users,
    PieChart, Target, Zap, Clock, Award, CheckCircle2,
    Activity
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
        icon: Search,
        title: 'SEO',
        description: 'Optimize your website to rank higher in search results and attract organic traffic.',
        features: ['Technical Audit', 'Keyword Planning', 'Content Strategy']
    },
    {
        icon: MousePointer,
        title: 'PPC Advertising',
        description: 'Targeted ad campaigns on Google and Social Media to drive immediate leads and sales.',
        features: ['Google Ads', 'Social Ads', 'Retargeting']
    },
    {
        icon: BarChart3,
        title: 'Analytics & Reporting',
        description: 'Data-driven insights to measure performance and optimize your marketing ROI.',
        features: ['Google Analytics 4', 'Custom Dashboards', 'Conversion Tracking']
    },
    {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Automated email campaigns to nurture leads and engage your customer base.',
        features: ['Automation Flows', 'Newsletter Design', 'List Segmentation']
    }
];

const processSteps = [
    {
        step: '01',
        icon: Search,
        title: 'Audit',
        description: 'We analyze your current digital presence and identify growth opportunities.'
    },
    {
        step: '02',
        icon: Target,
        title: 'Strategy',
        description: 'We develop a tailored marketing plan aligned with your business KPIs.'
    },
    {
        step: '03',
        icon: Zap,
        title: 'Execution',
        description: 'We launch campaigns and implement optimizations across all channels.'
    },
    {
        step: '04',
        icon: TrendingUp,
        title: 'Scale',
        description: 'We monitor results and scale successful strategies for maximum impact.'
    }
];

const stats = [
    { value: '300%', label: 'Avg Traffic Increase', icon: TrendingUp },
    { value: '5x', label: 'ROI on Ad Spend', icon: PieChart },
    { value: '1M+', label: 'Leads Generated', icon: Users },
    { value: '50+', label: 'Active Campaigns', icon: Activity },
];

const whyChooseUs = [
    "Data-Driven Decisions",
    "Transparency & Reporting",
    "Certified Experts",
    "Omnichannel Approach",
    "Continuous Optimization",
    "Results-Oriented"
];

const tools = [
    { name: 'Google Ads', icon: '/Home-Page/icons/react.png', color: '#4285F4' },
    { name: 'Analytics', icon: '/Home-Page/icons/css.png', color: '#F9AB00' },
    { name: 'Semrush', icon: '/Home-Page/icons/html.png', color: '#FF642D' },
    { name: 'HubSpot', icon: '/Home-Page/icons/js.png', color: '#FF7A59' },
    { name: 'Mailchimp', icon: '/Home-Page/icons/bootstrap.png', color: '#FFE01B' },
    { name: 'Meta Ads', icon: '/Home-Page/icons/flutter.png', color: '#0668E1' },
    { name: 'Ahrefs', icon: '/Home-Page/icons/firebase.png', color: '#0066FF' },
    { name: 'Hotjar', icon: '/Home-Page/icons/react.png', color: '#FD385B' },
];



export default function DigitalGrowthPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Digital Growth"
                subtitle="Marketing Services"
                description="SEO, analytics, and conversion optimization to scale your business."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Digital Growth' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Data-Driven"
                titleHighlight="Marketing"
                description="We don't guess. We use data to drive decisions and deliver measurable results for your business."
                showActions={true}
                primaryActionText="Grow Your Traffic"
                secondaryActionText="See Results"
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
                            src="/services/digital-growth-marketing-services.png"
                            alt="Digital Growth"
                            width={600}
                            height={400}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            In a crowded digital landscape, visibility is key. Our comprehensive growth strategies encompass SEO, paid advertising, and content marketing to ensure your brand gets seen by the right people at the right time.
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

            {/* Impact Statistics */}
            <ContentSection
                label="RESULTS"
                title="Measurable"
                titleHighlight="Growth"
                description="We track every click and conversion to maximize your return on investment."
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

            {/* Detailed Services */}
            <ContentSection
                label="CAPABILITIES"
                title="Growth"
                titleHighlight="Channels"
                description="We leverage multiple channels to reach your audience."
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

            {/* Process Section */}
            <ContentSection
                label="METHODOLOGY"
                title="Growth"
                titleHighlight="Cycle"
                description="A continuous loop of testing, learning, and optimizing."
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

            {/* Tech Stack - Reused Component */}
            <TechStack />

            {/* Testimonials - Reused Component */}
            <TestimonialSlider
                title="Success"
                subtitle="Stories"
            />

            <ServicePagination currentServiceSlug="digital-growth" />
        </PageTemplate>
    );
}
