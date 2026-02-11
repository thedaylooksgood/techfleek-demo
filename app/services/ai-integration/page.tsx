'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Bot, Cpu, Brain, Zap, MessageSquare, Database, Sparkles,
    CheckCircle2, Rocket, Share2, Workflow, Lightbulb, Clock, Target,
    Activity
} from 'lucide-react';
import PageTemplate from '@/components/Common/PageTemplate';
import PageHero from '@/components/Common/PageHero';
import ContentSection from '@/components/Common/ContentSection';
import { FeatureCard, StatsCard, TestimonialCard } from '@/components/Common/Cards';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';
import TechStack from '@/components/Home-Page/TechStack';
import TestimonialSlider, { Testimonial } from '@/components/Home-Page/TestimonialSlider';
import { homeStyles } from '@/components/Home-Page/styles';

const services = [
    {
        icon: MessageSquare,
        title: 'Conversational AI',
        description: 'Intelligent chatbots and virtual assistants that engage customers and automate support.',
        features: ['NLP/NLU', 'Customer Support', 'Voice Assistants']
    },
    {
        icon: Database,
        title: 'Machine Learning',
        description: 'Predictive models that analyze data to identify trends, forecast outcomes, and optimize decisions.',
        features: ['Predictive Analytics', 'Recommendation Systems', 'Data Mining']
    },
    {
        icon: Workflow,
        title: 'Process Automation',
        description: 'Automating repetitive tasks with intelligent workflows using RPA and AI agents.',
        features: ['RPA', 'Document Processing', 'Workflow Optimization']
    },
    {
        icon: Brain,
        title: 'Generative AI',
        description: 'Leveraging LLMs to generate content, code, and creative assets for your business.',
        features: ['Content Generation', 'LLM Integration', 'Custom Models']
    }
];

const processSteps = [
    {
        step: '01',
        icon: Lightbulb,
        title: 'Identify',
        description: 'We assess your business to find high-impact use cases for AI implementation.'
    },
    {
        step: '02',
        icon: Database,
        title: 'Prepare',
        description: 'We collect, clean, and structure the data needed to train effective models.'
    },
    {
        step: '03',
        icon: Cpu,
        title: 'Develop',
        description: 'We build, train, and fine-tune AI models tailored to your specific requirements.'
    },
    {
        step: '04',
        icon: Rocket,
        title: 'Deploy',
        description: 'We integrate the AI solution into your workflow and continuously monitor performance.'
    }
];

const stats = [
    { value: '60%', label: 'Cost Reduction', icon: Zap },
    { value: '24/7', label: 'Availability', icon: Clock },
    { value: '95%', label: 'Accuracy Rate', icon: Target },
    { value: '3x', label: 'Productivity Boost', icon: Rocket },
];

const whyChooseUs = [
    "Expert AI Engineers",
    "Ethical AI Practices",
    "Custom Model Training",
    "Scalable Implementations",
    "Data Security Focus",
    "Ongoing Model Tuning"
];

const tools = [
    { name: 'OpenAI', icon: '/Home-Page/icons/react.png', color: '#10A37F' },
    { name: 'Python', icon: '/Home-Page/icons/python.png', color: '#3776AB' },
    { name: 'TensorFlow', icon: '/Home-Page/icons/html.png', color: '#FF6F00' },
    { name: 'PyTorch', icon: '/Home-Page/icons/css.png', color: '#EE4C2C' },
    { name: 'Hugging Face', icon: '/Home-Page/icons/js.png', color: '#FFD21E' },
    { name: 'LangChain', icon: '/Home-Page/icons/bootstrap.png', color: '#0055FF' },
    { name: 'Pinecone', icon: '/Home-Page/icons/firebase.png', color: '#2C3E50' },
];

const clientTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Emily Chen',
        rating: 5,
        date: '12 Jan, 2024',
        userImage: '/About-Us/person1.png',
        text: "Implementing TechFleek's AI automation reduced our customer support response times by 80% while significantly improving satisfaction scores."
    },
    {
        id: 2,
        name: 'Robert Stark',
        rating: 4.9,
        date: '28 Feb, 2024',
        userImage: '/About-Us/person1.png',
        text: "Their predictive analytics model has helped us forecast inventory needs with 95% accuracy, saving us thousands in storage costs."
    },
    {
        id: 3,
        name: 'Sophia Chang',
        rating: 5,
        date: '10 Mar, 2024',
        userImage: '/About-Us/person1.png',
        text: "The custom generative AI solution they built for our content team has tripled our output without compromising on quality."
    }
];

export default function AIIntegrationPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="AI Integration"
                subtitle="Future Tech"
                description="Intelligent automation, machine learning, and AI solutions to revolutionize your business."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'AI Integration' }
                ]}
            />

            {/* Introduction / Overview */}
            <ContentSection
                label="OVERVIEW"
                title="Smarter Business"
                titleHighlight="Decisions"
                description="Artificial Intelligence isn't just a buzzword; it's a competitive necessity. We help you practicalize AI to solve real-world problems and unlock new value."
                showActions={true}
                primaryActionText="Explore AI Solutions"
                secondaryActionText="Case Studies"
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
                            alt="AI Integration"
                            width={600}
                            height={400}
                            className="w-full h-[250px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white p-4">
                            <div className="text-sm font-bold bg-[#3C8ECB] px-3 py-1 rounded-full inline-block mb-2">TechFleek Intelligence</div>
                            <h3 className="text-2xl font-bold">The Future is Now</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            From automating routine tasks to providing deep insights into your operations, our AI solutions are designed to augment your human workforce, not replace it.
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
                title="AI"
                titleHighlight="Performance"
                description="The tangible benefits of integrating intelligence into your business."
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
                title="AI"
                titleHighlight="Solutions"
                description="Leverage the power of cutting-edge algorithms."
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
                title="Integration"
                titleHighlight="Process"
                description="A structured approach to adopting AI technology."
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
            <TechStack
                items={tools}
                title={<>AI <span className={homeStyles.gradientText}>Technologies</span></>}
                description="We use the most advanced frameworks and models."
            />

            {/* Testimonials - Reused Component */}
            <TestimonialSlider
                title="Client"
                subtitle="Success"
                data={clientTestimonials}
            />

            <ServicePagination currentServiceSlug="ai-integration" />
        </PageTemplate>
    );
}
