"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import ContentSection from "@/components/Common/ContentSection";
import { FeatureCard, StatsCard, ImageCard } from "@/components/Common/Cards";
import {
    Briefcase, TrendingUp, Users, Award, Globe, Clock,
    ShoppingCart, Building2, Stethoscope, GraduationCap, Plane, Factory
} from "lucide-react";
import Link from "next/link";

// Featured case studies
const caseStudies = [
    {
        title: "E-Commerce Revolution",
        description: "Transformed a traditional retailer into a digital-first e-commerce powerhouse with 300% revenue growth.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        category: "E-Commerce",
        href: "/case-study/greysell"
    },
    {
        title: "Healthcare Platform",
        description: "Built a HIPAA-compliant telemedicine platform serving 50,000+ patients monthly.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
        category: "Healthcare",
        href: "/case-study/dygo-diagnostics"
    },
    {
        title: "FinTech Innovation",
        description: "Developed a secure payment processing system handling $10M+ in daily transactions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        category: "Finance",
        href: "/case-study/mergerdomo"
    },
    {
        title: "EdTech Platform",
        description: "Created an interactive learning platform used by 100,000+ students worldwide.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
        category: "Education",
        href: "/case-study/bollco"
    },
    {
        title: "Entertainment Hub",
        description: "Built a streaming platform with real-time features serving millions of users.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
        category: "Entertainment",
        href: "/case-study/ucom-entertainment"
    },
    {
        title: "Creative Agency Portfolio",
        description: "Designed a stunning portfolio platform showcasing visual artistry and creative works.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
        category: "Creative",
        href: "/case-study/fotoart"
    }
];

// Industries we serve
const industries = [
    { icon: ShoppingCart, title: "E-Commerce", description: "Online retail and marketplace solutions" },
    { icon: Building2, title: "Real Estate", description: "Property management platforms" },
    { icon: Stethoscope, title: "Healthcare", description: "HIPAA-compliant health tech" },
    { icon: GraduationCap, title: "Education", description: "EdTech and learning platforms" },
    { icon: Plane, title: "Travel", description: "Booking and hospitality systems" },
    { icon: Factory, title: "Manufacturing", description: "Industrial automation solutions" }
];

// Impact statistics
const statistics = [
    { value: "100+", label: "Projects Completed", icon: Briefcase },
    { value: "300%", label: "Avg. Growth Rate", icon: TrendingUp },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "15+", label: "Countries Served", icon: Globe }
];

// Success factors
const successFactors = [
    {
        icon: TrendingUp,
        title: "Data-Driven Approach",
        description: "Every decision backed by analytics and research."
    },
    {
        icon: Users,
        title: "Client Partnership",
        description: "We work as an extension of your team."
    },
    {
        icon: Award,
        title: "Quality First",
        description: "Excellence is non-negotiable in everything we do."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "We meet deadlines, every single time."
    }
];

export default function CaseStudyPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Our Case"
                subtitle="Studies"
                description="Real-world transformations powered by TechFleek's innovation. Explore how we've helped businesses achieve extraordinary results through technology."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Case Studies" }
                ]}
            />

            {/* Featured Case Studies Section */}
            <ContentSection
                label="FEATURED WORK"
                title="Success Stories That"
                titleHighlight="Inspire"
                description="Explore our portfolio of transformative projects across diverse industries."
                showActions={true}
                primaryActionText="View All"
                secondaryActionText="Contact Us"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {caseStudies.map((study, index) => (
                        <ImageCard
                            key={index}
                            src={study.image}
                            alt={study.title}
                            title={study.title}
                            description={study.description}
                            href={study.href}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Impact Statistics Section */}
            <ContentSection
                label="OUR IMPACT"
                title="Numbers That"
                titleHighlight="Speak"
                description="Measurable results that demonstrate our commitment to client success."
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

            {/* Industries Section */}
            <ContentSection
                label="INDUSTRIES"
                title="Expertise Across"
                titleHighlight="Sectors"
                description="We bring specialized knowledge to every industry we serve."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {industries.map((industry, index) => (
                        <FeatureCard
                            key={index}
                            icon={industry.icon}
                            title={industry.title}
                            description={industry.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Success Factors Section */}
            <ContentSection
                label="OUR APPROACH"
                title="What Makes Projects"
                titleHighlight="Succeed"
                description="The key factors behind every successful project we deliver."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {successFactors.map((factor, index) => (
                        <FeatureCard
                            key={index}
                            icon={factor.icon}
                            title={factor.title}
                            description={factor.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>
        </PageTemplate>
    );
}
