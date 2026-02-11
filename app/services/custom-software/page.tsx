'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Code2, Database, Globe, Server, Laptop, Monitor, Terminal,
    ShieldCheck, Settings, Workflow, Users, CheckCircle2, Rocket,
    Puzzle, BarChart, Headphones
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard, TestimonialCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider, { Testimonial } from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

// --- Data Definitions ---

const solutions = [
    {
        icon: Laptop,
        title: 'SaaS Platforms',
        description: 'Multi-tenant, scalable software-as-a-service applications built to handle high user volumes.',
        features: ['Subscription Models', 'Tenant Isolation', 'Cloud-Native']
    },
    {
        icon: Workflow,
        title: 'Enterprise ERP',
        description: 'Integration-rich systems to manage complex business processes, from HR to supply chain.',
        features: ['Custom Workflows', 'Legacy Integration', 'Reporting']
    },
    {
        icon: Database,
        title: 'CRM Systems',
        description: 'Tailored Customer Relationship Management tools to optimize your sales and support pipelines.',
        features: ['Pipeline Management', 'Customer 360', 'Automation']
    },
    {
        icon: Globe,
        title: 'Web Portals',
        description: 'Secure, collaborative environments for employees, partners, and customers.',
        features: ['Role-Based Access', 'Dashboards', 'Secure File Sharing']
    }
];

const features = [
    { icon: Puzzle, title: 'Modular Architecture', description: 'Systems built to grow and change with your business.' },
    { icon: ShieldCheck, title: 'Enterprise Security', description: 'Bank-grade encryption and compliance adherence.' },
    { icon: Settings, title: 'API Integration', description: 'Seamlessly connect with third-party tools and services.' },
    { icon: BarChart, title: 'Real-time Analytics', description: 'Built-in dashboards for actionable business insights.' },
];

const processSteps = [
    {
        step: '01',
        icon: Users,
        title: 'Consultation',
        description: 'We dive deep into your workflow to understand pain points and objectives.'
    },
    {
        step: '02',
        icon: Terminal,
        title: 'Prototyping',
        description: 'We create interactive POCs to validate the solution before full-scale dev.'
    },
    {
        step: '03',
        icon: Code2,
        title: 'Development',
        description: 'We build your software using clean, maintainable code standards.'
    },
    {
        step: '04',
        icon: Headphones,
        title: 'Support',
        description: 'We provide training and ongoing maintenance to ensure long-term success.'
    }
];

const stats = [
    { value: '100+', label: 'Custom Solutions', icon: Laptop },
    { value: '30%', label: 'Efficiency Gain', icon: Rocket },
    { value: '0', label: 'Security Breaches', icon: ShieldCheck },
    { value: '95%', label: 'Client Retention', icon: Users },
];

const techStack = [
    { name: 'Node.js', icon: '/Home-Page/icons/react.png', color: '#339933' },
    { name: 'Python', icon: '/Home-Page/icons/python.png', color: '#3776AB' },
    { name: 'PostgreSQL', icon: '/Home-Page/icons/html.png', color: '#4169E1' }, // Placeholder
    { name: 'Redis', icon: '/Home-Page/icons/css.png', color: '#DC382D' }, // Placeholder
    { name: 'React', icon: '/Home-Page/icons/react.png', color: '#61DAFB' },
    { name: 'Docker', icon: '/Home-Page/icons/docker.png', color: '#2496ED' },
    { name: 'AWS', icon: '/Home-Page/icons/aws.png', color: '#FF9900' },
    { name: '.NET', icon: '/Home-Page/icons/js.png', color: '#512BD4' }, // Placeholder
];

const whyChooseUs = [
    "Tailored to Your Workflow",
    "Scalable Architecture",
    "Agile Development Process",
    "IP Protection",
    "Post-Launch Support",
    "Technology Agnostic"
];

const clientTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Alexander White',
        rating: 5,
        date: '30 Jan, 2024',
        userImage: '/About-Us/person1.png',
        text: "The diverse functionality of the custom CRM they built for us is amazing. It's completely transformed how our sales team operates."
    },
    {
        id: 2,
        name: 'Maria Garcia',
        rating: 4.8,
        date: '14 Feb, 2024',
        userImage: '/About-Us/person1.png',
        text: "We had a very specific inventory problem that off-the-shelf software couldn't solve. TechFleek built a custom solution that fit us perfectly."
    },
    {
        id: 3,
        name: 'Kevin O\'Connell',
        rating: 5,
        date: '28 Mar, 2024',
        userImage: '/About-Us/person1.png',
        text: "Reliable, professional, and code quality is top-notch. Our internal efficiency increased by 30% within the first month of launch."
    }
];

export default function CustomSoftwarePage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Custom Software"
                subtitle="Development"
                description="Tailored digital solutions designed to solve your unique business challenges and streamline operations."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Custom Software' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Software Built for"
                titleHighlight="Your Business"
                description="Off-the-shelf software rarely fits perfectly. We build custom applications that align 100% with your operational needs and strategic goals."
                showActions={true}
                primaryActionText="Discuss Your Solution"
                secondaryActionText="See Examples"
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
                            src="/services/custom-software-development.png"
                            alt="Custom Software Development"
                            width={600}
                            height={400}
                            className="max-w-[380px] max-h-[320px] w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(60,142,203,0.3)]"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We don't just write code; we engineer solutions. From enterprise resource planning to customer portals, our custom software is built to be robust, secure, and scalable.
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
                title="Efficiency"
                titleHighlight="Unlocked"
                description="Measuring the transformative power of custom tooling."
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

            {/* Detailed Services / Solutions */}
            <ContentSection
                label="SOLUTIONS"
                title="What We"
                titleHighlight="Build"
                description="From complex back-office systems to customer-facing innovations."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((service, index) => (
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

            {/* Features Section - Extra for Custom Software */}
            <ContentSection
                label="FEATURES"
                title="Enterprise"
                titleHighlight="Grade"
                description="Built with the highest standards of quality and security."
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
                title="Engineering"
                titleHighlight="Process"
                description="Rigorous engineering practices for reliable software deployment."
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
                title="Client"
                subtitle="Stories"
                data={clientTestimonials}
            />

            <ServicePagination currentServiceSlug="custom-software" />
        </PageTemplate>
    );
}
