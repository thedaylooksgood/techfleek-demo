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
        title: "Greysell Advertising",
        description: "Transformed a traditional retailer into a digital-first e-commerce powerhouse with 300% revenue growth.",
        image: "/case-study/Creative agency.png",
        category: "Advertising",
        href: "/case-study/greysell"
    },
    {
        title: "Dygo Diagnostics",
        description: "Built a HIPAA-compliant telemedicine platform serving 50,000+ patients monthly.",
        image: "/case-study/healthcare.png",
        category: "Healthcare",
        href: "/case-study/dygo-diagnostics"
    },
    {
        title: "MergerDomo",
        description: "Developed a secure investment and deal-making system handling multi-million dollar transactions.",
        image: "/case-study/FinTech Innovation.png",
        category: "FinTech",
        href: "/case-study/mergerdomo"
    },
    {
        title: "Bollco",
        description: "Created an interactive learning platform used by 100,000+ students worldwide.",
        image: "/case-study/Edtech.png",
        category: "EduTech",
        href: "/case-study/bollco"
    },
    {
        title: "Ucom Entertainment",
        description: "Built a streaming platform with real-time features serving millions of users.",
        image: "/case-study/entertainment Hub.png",
        category: "Entertainment",
        href: "/case-study/ucom-entertainment"
    },
    {
        title: "Fotoart Production",
        description: "Designed a stunning portfolio platform showcasing visual artistry and creative works.",
        image: "/case-study/Custom Software Development.png",
        category: "Production",
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
