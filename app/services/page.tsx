"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import ContentSection from "@/components/Common/ContentSection";
import { FeatureCard, StatsCard, TestimonialCard, ImageCard } from "@/components/Common/Cards";
import {
    Palette, Code, Smartphone, Cloud, Database, Cpu,
    Users, CheckCircle, Clock, Award, Globe,
    Layers, Zap, Shield, TrendingUp, Monitor
} from "lucide-react";

// Main services data
const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Create stunning, user-centric interfaces that captivate users and drive engagement. Our design team crafts experiences that convert."
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Build powerful, scalable web applications using cutting-edge technologies like React, Next.js, and Node.js."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure solutions using AWS, Azure, and Google Cloud to power your digital transformation."
    },
    {
        icon: Database,
        title: "Custom Software",
        description: "Tailored software solutions designed specifically for your business needs and workflows."
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights."
    }
];

// Why choose our services
const whyChoose = [
    {
        icon: Zap,
        title: "Fast Turnaround",
        description: "We deliver quality work quickly without compromising on standards."
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Enterprise-grade security and reliability for all solutions."
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        description: "Built to grow with your business from day one."
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Expert developers and designers committed to your success."
    }
];

// Our process
const process = [
    {
        number: "01",
        icon: Layers,
        title: "Discovery & Planning",
        description: "We dive deep into understanding your requirements, goals, and challenges to create a solid roadmap."
    },
    {
        number: "02",
        icon: Palette,
        title: "Design & Prototype",
        description: "Our designers create stunning visuals and interactive prototypes for your approval."
    },
    {
        number: "03",
        icon: Code,
        title: "Development",
        description: "Our engineers build your solution using best practices and cutting-edge technologies."
    },
    {
        number: "04",
        icon: Monitor,
        title: "Launch & Support",
        description: "We deploy your solution and provide ongoing support to ensure success."
    }
];

// Statistics
const statistics = [
    { value: "100+", label: "Projects Delivered", icon: CheckCircle },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "99%", label: "Client Satisfaction", icon: Award },
    { value: "24/7", label: "Support Available", icon: Clock }
];

// Testimonials
const testimonials = [
    {
        quote: "TechFleek's UI/UX team created an interface that increased our conversion rate by 40%. Absolutely incredible work!",
        author: "David Park",
        role: "Product Manager",
        company: "RetailPlus"
    },
    {
        quote: "The mobile app they built for us is flawless. Our users love it and our ratings went through the roof.",
        author: "Lisa Wang",
        role: "CEO",
        company: "FitTrack"
    },
    {
        quote: "Their cloud migration service saved us 60% on infrastructure costs. Highly professional team.",
        author: "James Miller",
        role: "CTO",
        company: "DataFlow Inc."
    }
];

export default function ServicesPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Our"
                subtitle="Services"
                description="From intuitive UI/UX design to robust software solutions and seamless website development, we offer comprehensive digital solutions tailored to your unique needs."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services" }
                ]}
                showCTA={true}
                ctaPrimaryText="Get a Quote"
                ctaPrimaryHref="/enquiry"
                ctaSecondaryText="View Portfolio"
                ctaSecondaryHref="/case-study"
            />

            {/* Main Services Section */}
            <ContentSection
                label="WHAT WE DO"
                title="Comprehensive Digital"
                titleHighlight="Solutions"
                description="We offer a full spectrum of services to bring your digital vision to life with precision and excellence."
                showActions={true}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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

            {/* Why Choose Us Section */}
            <ContentSection
                label="WHY CHOOSE US"
                title="Built for"
                titleHighlight="Excellence"
                description="We combine technical expertise with a client-first approach to deliver exceptional results."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {whyChoose.map((item, index) => (
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

            {/* Our Process Section */}
            <ContentSection
                label="OUR PROCESS"
                title="How We"
                titleHighlight="Work"
                description="Our streamlined process ensures clear communication and deliverables at every stage."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {process.map((step, index) => (
                        <FeatureCard
                            key={index}
                            number={step.number}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Statistics Section */}
            <ContentSection
                label="BY THE NUMBERS"
                title="Results That"
                titleHighlight="Matter"
                description="Our track record speaks for itself."
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {statistics.map((stat, index) => (
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

            {/* Testimonials Section */}
            <ContentSection
                label="CLIENT STORIES"
                title="What Our Clients"
                titleHighlight="Say"
                description="Real feedback from businesses we've helped transform."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            company={testimonial.company}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>
        </PageTemplate>
    );
}
