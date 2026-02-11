'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Palette, Users, Lightbulb, TrendingUp, PenTool, Eye, MousePointer,
    Layers, Target, Award, Rocket, Headphones, Sparkles, Figma,
    MonitorSmartphone, FileCheck, CheckCircle2
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider, { Testimonial } from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

// --- Data Definitions ---

const services = [
    {
        icon: Users,
        title: 'User Research',
        description: 'Deep understanding through interviews, surveys, and behavioral analysis to inform design decisions.',
        features: ['User Interviews', 'Surveys & Analytics', 'Persona Development']
    },
    {
        icon: PenTool,
        title: 'Wireframing',
        description: 'Structural layouts establishing information architecture and flows before visual design begins.',
        features: ['Sketches & Flows', 'Information Architecture', 'Rapid Iteration']
    },
    {
        icon: Palette,
        title: 'Visual Design',
        description: 'Beautiful, brand-aligned interfaces with cohesive design systems that elevate your digital presence.',
        features: ['UI Design', 'Design Systems', 'Brand Identity']
    },
    {
        icon: Layers,
        title: 'Prototyping',
        description: 'Interactive prototypes for usability testing and stakeholder feedback loops.',
        features: ['Figma Prototypes', 'Interactive Demos', 'Usability Testing']
    },
    {
        icon: MonitorSmartphone,
        title: 'Responsive Design',
        description: 'Ensuring your experience works flawlessly across all device sizes and breakpoints.',
        features: ['Mobile First', 'Adaptive Layouts', 'Cross-Platform']
    },
    {
        icon: Eye,
        title: 'Usability Testing',
        description: 'Validating designs with real users to ensure intuitive navigation and task completion.',
        features: ['A/B Testing', 'Heatmaps', 'Accessibility Audits']
    }
];

const processSteps = [
    {
        step: '01',
        icon: Users,
        title: 'Discovery',
        description: 'We conduct stakeholder interviews and user research to define personas and project goals.'
    },
    {
        step: '02',
        icon: PenTool,
        title: 'Wireframes',
        description: 'We create structural layouts and user flows to establish the information architecture.'
    },
    {
        step: '03',
        icon: Palette,
        title: 'Visual Design',
        description: 'We apply your brand identity to create stunning, high-fidelity mockups and prototypes.'
    },
    {
        step: '04',
        icon: FileCheck,
        title: 'Handoff',
        description: 'We deliver comprehensive design systems and specifications for flawless development.'
    }
];

const stats = [
    { value: '200+', label: 'Projects Designed', icon: Palette },
    { value: '98%', label: 'Client Satisfaction', icon: Users },
    { value: '40%', label: 'Avg Conversion Lift', icon: TrendingUp },
    { value: '15+', label: 'Design Awards', icon: Award },
];

const tools = [
    { name: 'Figma', icon: '/Home-Page/icons/react.png', color: '#F24E1E' },
    { name: 'Adobe XD', icon: '/Home-Page/icons/css.png', color: '#FF61F6' },
    { name: 'Sketch', icon: '/Home-Page/icons/html.png', color: '#F7B500' },
    { name: 'Framer', icon: '/Home-Page/icons/js.png', color: '#0055FF' },
    { name: 'Photoshop', icon: '/Home-Page/icons/bootstrap.png', color: '#31A8FF' },
    { name: 'Illustrator', icon: '/Home-Page/icons/flutter.png', color: '#FF9A00' },
    { name: 'InVision', icon: '/Home-Page/icons/firebase.png', color: '#FF3366' },
    { name: 'Principle', icon: '/Home-Page/icons/react.png', color: '#8A56AC' },
];

const principles = [
    "User-Centric Approach",
    "Consistency Across Platforms",
    "Accessibility Compliance",
    "Business Impact Focus",
    "Data-Driven Decisions",
    "Emotional Design"
];

const deliverables = [
    { icon: Figma, title: 'Design Files', description: 'Organized Figma/Sketch files ready for handoff.' },
    { icon: Layers, title: 'Design System', description: 'Reusable component library for consistency.' },
    { icon: MonitorSmartphone, title: 'Responsive', description: 'Designs adapted for all device breakpoints.' },
    { icon: FileCheck, title: 'Dev Specs', description: 'Detailed measurements and implementation notes.' },
    { icon: Sparkles, title: 'Animations', description: 'Micro-interaction guidelines and assets.' },
    { icon: Users, title: 'Usability Report', description: 'Findings and recommendations from testing.' },
];

const clientTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Lisa Thompson',
        rating: 5,
        date: '12 Jan, 2024',
        userImage: '/About-Us/person1.png',
        text: "TechFleek's design team completely reimagined our UX. User engagement increased by 60% and app store ratings went from 3.2 to 4.8 stars!"
    },
    {
        id: 2,
        name: 'Mark Davis',
        rating: 4.8,
        date: '05 Feb, 2024',
        userImage: '/About-Us/person1.png',
        text: "The attention to detail in the UI design was phenomenal. They successfully translated our complex requirements into a clean, intuitive interface."
    },
    {
        id: 3,
        name: 'Sarah Jenkins',
        rating: 4.9,
        date: '20 Mar, 2024',
        userImage: '/About-Us/person1.png',
        text: "Working with them was a breeze. The design system they built has saved our dev team hundreds of hours in implementation time."
    }
];

export default function UIUXDesignPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="UI/UX Design"
                subtitle="Design Excellence"
                description="We blend aesthetics with functionality to create user-centric interfaces that drive engagement and achieve business goals."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'UI/UX Design' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Design That"
                titleHighlight="Solves Problems"
                description="Great design isn't just aesthetics – it's solving complex challenges through empathy-driven thinking. We create interfaces that feel intuitive and guide users toward their goals."
                showActions={true}
                primaryActionText="Start a Project"
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
                            src="/services/ui-ux.png"
                            alt="UI/UX Design Team"
                            width={600}
                            height={400}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We interpret your vision into a digital reality. Our design philosophy is rooted in understanding the user's needs and aligning them with your business objectives to create meaningful experiences.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {principles.map((item, idx) => (
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
                title="Results That"
                titleHighlight="Matter"
                description="We measure our success by the impact we create for our clients."
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
                title="Our Design"
                titleHighlight="Services"
                description="Comprehensive design solutions covering every aspect of the user experience."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                title="Our Design"
                titleHighlight="Process"
                description="A structured approach to ensure consistency, quality, and user satisfaction."
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

            {/* Tools - Replaced with reusable component */}
            <TechStack />

            {/* Deliverables Section - Extra for UI/UX */}
            <ContentSection
                label="DELIVERABLES"
                title="What You"
                titleHighlight="Receive"
                description="Tangible assets and documentation you can expect at the end of the project."
                className="bg-gray-50/50"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverables.map((item, index) => (
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

            {/* Testimonials - Replaced with reusable component */}
            <TestimonialSlider
                title="Client"
                subtitle="Feedback"
                data={clientTestimonials}
            />

            <ServicePagination currentServiceSlug="ui-ux-design" />
        </PageTemplate>
    );
}
