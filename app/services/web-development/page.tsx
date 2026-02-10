'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Globe, Code2, ShoppingCart, Zap, Server, Lock, Gauge, Search, Users,
    Layers, Layout, CheckCircle2, Rocket, Headphones
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
        icon: Code2,
        title: 'React & Next.js Applications',
        description: 'Blazing-fast, SEO-optimized web applications using the latest React ecosystem. We build scalable frontends with Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance.',
        features: ['SSR & SSG Architecture', 'Component-Based Design', 'Performance Optimization']
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        description: 'Secure, high-converting online stores tailored to your brand. We integrate robust payment gateways, inventory management systems, and seamless checkout experiences.',
        features: ['Secure Payment Gateways', 'Inventory Management', 'User-Friendly Checkout']
    },
    {
        icon: Zap,
        title: 'Progressive Web Apps (PWA)',
        description: 'Deliver app-like experiences directly in the browser. Our PWAs offer offline capabilities, push notifications, and fast loading times across all devices.',
        features: ['Offline Functionality', 'Push Notifications', 'Cross-Platform Compatibility']
    },
    {
        icon: Server,
        title: 'API Development & Integration',
        description: 'Robust RESTful and GraphQL APIs that power your applications. We ensure secure, scalable, and well-documented backend systems for seamless third-party integrations.',
        features: ['REST & GraphQL', 'OAuth & JWT Security', 'Third-Party Integrations']
    },
    {
        icon: Search,
        title: 'SEO & Performance Tuning',
        description: 'We optimize every line of code for search engines and loading speed. Achieve higher rankings and better user retention with our technical SEO expertise.',
        features: ['Core Web Vitals', 'Schema Markup', 'Speed Optimization']
    },
    {
        icon: Layout,
        title: 'CMS Development',
        description: 'Custom Content Management Systems or headless CMS implementations (Strapi, Sanity, Contentful) that give you full control over your content without breaking the design.',
        features: ['Headless CMS', 'Custom Dashboards', 'Role-Based Access']
    }
];

const processSteps = [
    {
        step: '01',
        icon: Users,
        title: 'Discovery & Strategy',
        description: 'We dive deep into your business goals, target audience, and requirements to create a comprehensive project roadmap and technical strategy.'
    },
    {
        step: '02',
        icon: Layout,
        title: 'UI/UX Design',
        description: 'Our designers create intuitive, visually stunning wireframes and prototypes that align with your brand identity and user needs.'
    },
    {
        step: '03',
        icon: Code2,
        title: 'Agile Development',
        description: 'We write clean, efficient, and maintainable code in iterative sprints, keeping you updated with regular demos and progress reports.'
    },
    {
        step: '04',
        icon: CheckCircle2,
        title: 'QA & Testing',
        description: 'Rigorous testing across devices and browsers ensures bug-free performance, security compliance, and a flawless user experience.'
    },
    {
        step: '05',
        icon: Rocket,
        title: 'Launch & Optimization',
        description: 'Seamless deployment to production servers, followed by performance monitoring and post-launch optimization tuning.'
    },
    {
        step: '06',
        icon: Headphones,
        title: 'Support & Growth',
        description: 'Ongoing maintenance, security updates, and feature enhancements to ensure your digital presence grows with your business.'
    }
];

const stats = [
    { value: '100+', label: 'Projects Delivered', icon: Globe },
    { value: '98%', label: 'Client Retention', icon: Users },
    { value: '<2s', label: 'Avg Load Time', icon: Gauge },
    { value: '24/7', label: 'Support Coverage', icon: Headphones },
];

const techStack = [
    { name: 'React', icon: '/Home-Page/icons/react.png', color: '#61DAFB' },
    { name: 'JavaScript', icon: '/Home-Page/icons/js.png', color: '#F7DF1E' },
    { name: 'HTML5', icon: '/Home-Page/icons/html.png', color: '#E34F26' },
    { name: 'CSS3', icon: '/Home-Page/icons/css.png', color: '#1572B6' },
    { name: 'Next.js', icon: '/Home-Page/icons/bootstrap.png', color: '#000000' },
    { name: 'TypeScript', icon: '/Home-Page/icons/flutter.png', color: '#3178C6' },
    { name: 'Node.js', icon: '/Home-Page/icons/firebase.png', color: '#339933' },
    { name: 'Tailwind', icon: '/Home-Page/icons/react.png', color: '#06B6D4' },
];

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the complexity of the project. A standard brochure website typically takes 2-4 weeks, while a complex e-commerce or web application can take 8-12 weeks. We provide a detailed timeline during the discovery phase."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes, we offer flexible maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. We handle backups, security patches, and content updates."
    },
    {
        question: "Will my website be mobile-friendly and SEO-optimized?",
        answer: "Absolutely. We adopt a mobile-first approach, ensuring your site looks and functions perfectly on all devices. All our websites are built with SEO best practices, including semantic HTML, fast loading speeds, and meta tag optimization."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Yes, we specialize in website redesigns. We'll analyze your current site's performance, identify pain points, and create a fresh, modern design that improves user experience and conversion rates."
    }
];

const clientTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Michael Chen',
        rating: 5,
        date: '10 Nov, 2023',
        userImage: '/About-Us/person1.png',
        text: "TechFleek delivered our website ahead of schedule and exceeded all expectations. The site is fast, beautiful, and has significantly improved our conversion rates."
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        rating: 5,
        date: '15 Dec, 2023',
        userImage: '/About-Us/person1.png',
        text: "Their team was professional, responsive, and a joy to work with. They took the time to understand our business and built a custom solution that fits us perfectly."
    },
    {
        id: 3,
        name: 'David Lee',
        rating: 4.9,
        date: '05 Jan, 2024',
        userImage: '/About-Us/person1.png',
        text: "We've seen a 40% increase in mobile traffic since launching our new PWA. The offline capabilities are a game-changer for our field agents."
    }
];

export default function WebDevelopmentPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Web Development"
                subtitle="Engineering Digital Excellence"
                description="We build scalable, high-performance websites and web applications that drive growth and deliver exceptional user experiences."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Web Development' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Building the Foundation of Your"
                titleHighlight="Digital Success"
                description="In today's digital-first world, your website is your most powerful asset. We combine cutting-edge technology with strategic design to create web solutions that aren't just beautiful, but are built to perform, scale, and convert."
                showActions={true}
                primaryActionText="Get a Quote"
                secondaryActionText="View Portfolio"
                secondaryActionHref="/case-study"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <Image
                            src="/About-Us/why-choose-us-illustration.png"
                            alt="Web Development Team"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white p-4">
                            <div className="text-sm font-bold bg-[#3C8ECB] px-3 py-1 rounded-full inline-block mb-2">TechFleek Studio</div>
                            <h3 className="text-2xl font-bold">Crafting Digital Masterpieces</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We interpret your vision into a digital reality. Whether you need a simple corporate website or a complex enterprise web application, our team of expert developers and designers works efficiently to deliver solutions that exceed expectations.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Custom Functionality",
                                "Responsive Design",
                                "High Performance",
                                "SEO Capabilities",
                                "Scalable Architecture",
                                "Secure Infrastructure"
                            ].map((item, idx) => (
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
                title="Comprehensive Web"
                titleHighlight="Solutions"
                description="From simple landing pages to complex enterprise platforms, we have the expertise to build it all."
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
                title="How We"
                titleHighlight="Work"
                description="Our proven development process ensures transparency, quality, and timely delivery."
                className="bg-slate-900 text-white"
                showGridBackground={false}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
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
            <TechStack
                items={techStack}
                title={<>Modern <span className={homeStyles.gradientText}>Tech Stack</span></>}
                description="We use the best tools in the industry to ensure your website is fast, secure, and future-proof."
            />

            {/* FAQ Section */}
            <ContentSection
                label="FAQ"
                title="Frequently Asked"
                titleHighlight="Questions"
                description="Answers to common questions about our web development services."
                className="bg-gray-50/50"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                                <span className="text-[#3C8ECB] text-xl">Q.</span>
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed pl-8">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </ContentSection>

            {/* Testimonials - Reused Component */}
            <TestimonialSlider
                title="What Our Clients"
                subtitle="Say"
                data={clientTestimonials}
            />

            <ServicePagination currentServiceSlug="web-development" />
        </PageTemplate>
    );
}
