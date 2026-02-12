'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Smartphone, Apple, Layers, Zap, Code, Shield, Check, Star, Users,
    Clock, Headphones, Rocket, Target, Award, CheckCircle2
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

// --- Data Definitions ---

const platforms = [
    {
        icon: Apple,
        title: 'iOS Development',
        description: 'Native iOS applications built with Swift and SwiftUI for the Apple ecosystem, ensuring top-tier performance and user experience.',
        features: ['Swift & SwiftUI', 'App Store Optimization', 'Apple Watch Integration']
    },
    {
        icon: Smartphone,
        title: 'Android Development',
        description: 'Robust and scalable Android applications using Kotlin and Jetpack Compose, designed for the diverse Android device landscape.',
        features: ['Kotlin & Java', 'Material Design 3', 'Google Play Publishing']
    },
    {
        icon: Layers,
        title: 'Cross-Platform',
        description: 'Efficient multi-platform solutions using React Native and Flutter to reach both iOS and Android users with a single codebase.',
        features: ['React Native', 'Flutter', 'Cost-Effective']
    }
];

const features = [
    { icon: Zap, title: 'Push Notifications', description: 'Engage users in real-time with targeted messages.' },
    { icon: Shield, title: 'Secure Authentication', description: 'Biometric login (FaceID/TouchID) and 2FA.' },
    { icon: Code, title: 'Offline Functionality', description: 'App continues to work seamlessly without internet.' },
    { icon: Clock, title: 'Fast Performance', description: 'Optimized rendering and low latency.' },
];

const processSteps = [
    {
        step: '01',
        icon: Users,
        title: 'Discovery',
        description: 'We define the app goals, target audience, and core features.'
    },
    {
        step: '02',
        icon: Layers,
        title: 'Design',
        description: 'We create intuitive wireframes and high-fidelity UI prototypes.'
    },
    {
        step: '03',
        icon: Code,
        title: 'Development',
        description: 'We build the app using agile sprints with regular demos.'
    },
    {
        step: '04',
        icon: Rocket,
        title: 'Launch',
        description: 'We handle app store submission and post-launch support.'
    }
];

const stats = [
    { value: '50+', label: 'Apps Delivered', icon: Smartphone },
    { value: '4.8', label: 'Avg App Rating', icon: Star },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '2M+', label: 'Active Users', icon: Users },
];

const techStack = [
    { name: 'React Native', icon: '/Home-Page/icons/react.png', color: '#61DAFB' },
    { name: 'Flutter', icon: '/Home-Page/icons/flutter.png', color: '#02569B' },
    { name: 'Swift', icon: '/Home-Page/icons/html.png', color: '#F05138' }, // Generic HTML icon used as placeholder, colored orange for Swift
    { name: 'Kotlin', icon: '/Home-Page/icons/css.png', color: '#7F52FF' }, // Generic CSS icon, colored purple for Kotlin
    { name: 'JavaScript', icon: '/Home-Page/icons/js.png', color: '#F7DF1E' },
    { name: 'Firebase', icon: '/Home-Page/icons/firebase.png', color: '#FFCA28' },
    { name: 'TypeScript', icon: '/Home-Page/icons/bootstrap.png', color: '#3178C6' },
    { name: 'GraphQL', icon: '/Home-Page/icons/react.png', color: '#E10098' },
];

const whyChooseUs = [
    "Expert Mobile Team",
    "Agile Methodology",
    "User-Centric Design",
    "24/7 Support",
    "Scalable Architecture",
    "Market-Ready Delivery"
];



export default function MobileAppDevelopmentPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Mobile App Development"
                subtitle="Mobile First"
                description="High-performance native and cross-platform mobile apps for iOS and Android."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Mobile App Development' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Transform Ideas into"
                titleHighlight="Mobile Experiences"
                description="In today's mobile-first world, having a powerful mobile presence is essential. We create apps with exceptional performance that keep users engaged."
                showActions={true}
                primaryActionText="Build Your App"
                secondaryActionText="View Case Studies"
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
                            src="/services/mobile-app-development-mobile-first.png"
                            alt="Mobile App Development"
                            width={600}
                            height={400}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            From startups to enterprises, we build mobile solutions that solve real problems. Whether you need a native iOS app or a cross-platform Flutter solution, we have the expertise to deliver.
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
                label="IMPACT"
                title="App Store"
                titleHighlight="Success"
                description="Our apps consistently achieve high ratings and user retention."
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

            {/* Detailed Services / Platforms */}
            <ContentSection
                label="CAPABILITIES"
                title="Choose Your"
                titleHighlight="Platform"
                description="We help you select the right technology stack for your business goals and budget."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platforms.map((service, index) => (
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

            {/* Features Section - Extra for Mobile */}
            <ContentSection
                label="FEATURES"
                title="Built for"
                titleHighlight="Performance"
                description="Every app we build is optimized for speed, security, and scalability on all devices."
                className="bg-gray-50/50"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
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
                title="Development"
                titleHighlight="Process"
                description="From concept to launch, we follow a rigorous process to ensure your app's success."
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

            {/* Tech Stack */}
            <TechStack />
            {/* Testimonials */}
            <TestimonialSlider
                title="Client"
                subtitle="Stories"
            />

            <ServicePagination currentServiceSlug="mobile-app-development" />
        </PageTemplate>
    );
}
