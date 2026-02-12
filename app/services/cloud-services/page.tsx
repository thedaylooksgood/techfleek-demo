'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Cloud, CloudCog, Shield, Server, Zap, Check, Lock, Users,
    Rocket, Award, Target, Headphones, Activity, DollarSign, CheckCircle2,
    Search, Layout, Settings
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard, TestimonialCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

// --- Data Definitions ---

const services = [
    {
        icon: Cloud,
        title: 'Cloud Migration',
        description: 'Seamlessly transition your legacy systems to the cloud with zero-downtime strategies and data integrity.',
        features: ['Legacy to Cloud', 'Database Migration', 'Hybrid Setup']
    },
    {
        icon: CloudCog,
        title: 'Cloud-Native Development',
        description: 'Build scalable, resilient applications using microservices, containers, and serverless computing.',
        features: ['Microservices', 'Docker & Kubernetes', 'Serverless Functions']
    },
    {
        icon: Shield,
        title: 'Managed Services',
        description: 'Comprehensive management including 24/7 monitoring, security compliance, cost optimization, and automated backups.',
        features: ['24/7 Monitoring', 'Auto Backups', 'Cost Control']
    },
    {
        icon: Zap,
        title: 'Auto-Scaling',
        description: 'Infrastructure that automatically adjusts to demand, ensuring high availability and performance during peak traffic.',
        features: ['Load Balancing', 'CDN Integration', 'High Availability']
    }
];

const benefits = [
    { icon: DollarSign, title: 'Cost Reduction', description: 'Pay-as-you-go pricing models reduce upfront infrastructure costs.' },
    { icon: Rocket, title: 'Scalability', description: 'Instantly scale resources up or down to meet changing business demands.' },
    { icon: Lock, title: 'Enterprise Security', description: 'Enhanced data protection with enterprise-grade compliance standards.' },
    { icon: Activity, title: 'High Availability', description: 'Multi-region deployment ensures your services are always online.' },
];

const processSteps = [
    {
        step: '01',
        icon: Search,
        title: 'Assessment',
        description: 'We analyze your current infrastructure and determine cloud readiness.'
    },
    {
        step: '02',
        icon: Layout,
        title: 'Architecture',
        description: 'We design a scalable, secure cloud architecture tailored to your needs.'
    },
    {
        step: '03',
        icon: Rocket,
        title: 'Migration',
        description: 'We execute a zero-downtime migration plan with strict data integrity.'
    },
    {
        step: '04',
        icon: Settings,
        title: 'Optimization',
        description: 'Continuous monitoring and tuning for cost savings and performance.'
    }
];

const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: Activity },
    { value: '40%', label: 'Avg Cost Reduction', icon: DollarSign },
    { value: '2x', label: 'Faster Deployment', icon: Rocket },
    { value: '24/7', label: 'Support Coverage', icon: Headphones },
];

const techStack = [
    { name: 'AWS', icon: '/Home-Page/icons/react.png', color: '#FF9900' },
    { name: 'Azure', icon: '/Home-Page/icons/bootstrap.png', color: '#0078D4' },
    { name: 'GCP', icon: '/Home-Page/icons/html.png', color: '#4285F4' },
    { name: 'Docker', icon: '/Home-Page/icons/css.png', color: '#2496ED' },
    { name: 'Kubernetes', icon: '/Home-Page/icons/js.png', color: '#326CE5' },
    { name: 'Terraform', icon: '/Home-Page/icons/firebase.png', color: '#7B42BC' },
    { name: 'Jenkins', icon: '/Home-Page/icons/flutter.png', color: '#D24939' },
    { name: 'Ansible', icon: '/Home-Page/icons/react.png', color: '#EE0000' },
];

const whyChooseUs = [
    "Certified Cloud Architects",
    "Proven Migration Frameworks",
    "Cost Optimization Focus",
    "Security-First Approach",
    "Vendor-Agnostic Advice",
    "24/7 Monitoring & Support"
];



export default function CloudServicesPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Cloud Services"
                subtitle="Cloud Solutions"
                description="Future-proof your infrastructure with comprehensive cloud migration, management, and native development."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Cloud Services' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Scale Higher with"
                titleHighlight="Cloud Intelligence"
                description="The cloud isn't just hosting – it's transforming how your business operates. We help organizations harness the full potential of cloud computing for agility and innovation."
                showActions={true}
                primaryActionText="Start Migration"
                secondaryActionText="Learn More"
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
                            src="/services/cloud-services.png"
                            alt="Cloud Services"
                            width={600}
                            height={400}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Whether you need to migrate legacy applications or build cloud-native solutions from scratch, our certified experts ensure a smooth transition and optimal performance.
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
                label="PERFORMANCE"
                title="Reliability at"
                titleHighlight="Scale"
                description="We ensure your infrastructure is robust, secure, and cost-effective."
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
                title="Comprehensive"
                titleHighlight="Cloud Solutions"
                description="End-to-end cloud services to support your digital transformation journey."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

            {/* Benefits Section */}
            <ContentSection
                label="BENEFITS"
                title="Why Move to"
                titleHighlight="The Cloud?"
                description="Unlock new opportunities for growth and efficiency."
                className="bg-gray-50/50"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Process Section */}
            <ContentSection
                label="METHODOLOGY"
                title="Migration"
                titleHighlight="Process"
                description="A strategic approach to moving your business to the cloud with minimal disruption."
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

            <TechStack />

            {/* Testimonials - Reused Component */}
            <TestimonialSlider
                title="Client"
                subtitle="Success"
            />

            <ServicePagination currentServiceSlug="cloud-services" />
        </PageTemplate>
    );
}
