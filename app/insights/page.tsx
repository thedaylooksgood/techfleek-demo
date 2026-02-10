"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import ContentSection from "@/components/Common/ContentSection";
import { FeatureCard, ImageCard } from "@/components/Common/Cards";
import {
    TrendingUp, Lightbulb, BookOpen, Newspaper, Video, Podcast,
    Rocket, Target, BarChart3, Cpu, Shield, Zap
} from "lucide-react";

// Featured insights/blog posts
const featuredInsights = [
    {
        title: "The Future of AI in Enterprise Software",
        description: "Explore how artificial intelligence is reshaping business operations and decision-making processes.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        category: "AI & ML"
    },
    {
        title: "Web Development Trends 2025",
        description: "Discover the latest frameworks, tools, and best practices shaping modern web development.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        category: "Development"
    },
    {
        title: "Securing Your Cloud Infrastructure",
        description: "Essential strategies and best practices for maintaining robust cloud security.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        category: "Security"
    },
    {
        title: "Designing for Accessibility",
        description: "How inclusive design principles create better experiences for all users.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
        category: "Design"
    },
    {
        title: "Mobile-First Strategy Success",
        description: "Why mobile-first approach is crucial for modern digital products.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
        category: "Mobile"
    },
    {
        title: "The Rise of Low-Code Platforms",
        description: "Understanding when and how to leverage low-code tools for rapid development.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        category: "Innovation"
    }
];

// Content categories
const categories = [
    { icon: Newspaper, title: "Blog Articles", description: "In-depth articles on technology and trends" },
    { icon: Video, title: "Video Content", description: "Tutorials, webinars, and expert interviews" },
    { icon: Podcast, title: "Podcasts", description: "Listen to tech discussions on the go" },
    { icon: BookOpen, title: "Case Studies", description: "Deep dives into project success stories" }
];

// Trending topics
const trendingTopics = [
    { icon: Cpu, title: "Generative AI", description: "The latest in AI-powered content and automation" },
    { icon: Shield, title: "Cybersecurity", description: "Protecting digital assets in the modern era" },
    { icon: Rocket, title: "Startup Insights", description: "Lessons from tech startup journeys" },
    { icon: BarChart3, title: "Data Analytics", description: "Making sense of big data" },
    { icon: Target, title: "Digital Strategy", description: "Planning for digital transformation" },
    { icon: Zap, title: "Performance", description: "Optimizing speed and efficiency" }
];

// Expert perspectives
const expertTopics = [
    {
        icon: Lightbulb,
        title: "Technology Leadership",
        description: "Insights from CTOs and tech leaders on building high-performing teams and scalable systems."
    },
    {
        icon: TrendingUp,
        title: "Market Analysis",
        description: "Expert analysis of tech market trends and investment opportunities."
    },
    {
        icon: Target,
        title: "Product Strategy",
        description: "How to build products that users love and businesses need."
    },
    {
        icon: Rocket,
        title: "Innovation Spotlight",
        description: "Highlighting breakthrough technologies and emerging startups."
    }
];

export default function InsightsPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Insights &"
                subtitle="Resources"
                description="Stay ahead of the curve with the latest technology trends, expert perspectives, and actionable insights from the TechFleek team."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Insights" }
                ]}
            />

            {/* Featured Insights Section */}
            <ContentSection
                label="FEATURED"
                title="Latest"
                titleHighlight="Insights"
                description="Explore our most recent and popular articles, guides, and thought leadership pieces."
                showActions={true}
                primaryActionText="View All"
                secondaryActionText="Subscribe"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {featuredInsights.map((insight, index) => (
                        <ImageCard
                            key={index}
                            src={insight.image}
                            alt={insight.title}
                            title={insight.title}
                            description={insight.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Content Categories Section */}
            <ContentSection
                label="BROWSE BY"
                title="Content"
                titleHighlight="Types"
                description="Find the content format that works best for you."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {categories.map((category, index) => (
                        <FeatureCard
                            key={index}
                            icon={category.icon}
                            title={category.title}
                            description={category.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Trending Topics Section */}
            <ContentSection
                label="TRENDING"
                title="Hot"
                titleHighlight="Topics"
                description="Explore the topics generating the most buzz in the tech community."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {trendingTopics.map((topic, index) => (
                        <FeatureCard
                            key={index}
                            icon={topic.icon}
                            title={topic.title}
                            description={topic.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>

            {/* Expert Perspectives Section */}
            <ContentSection
                label="EXPERT VIEWS"
                title="Perspectives From"
                titleHighlight="Industry Leaders"
                description="Gain wisdom from experienced technology professionals and thought leaders."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {expertTopics.map((topic, index) => (
                        <FeatureCard
                            key={index}
                            icon={topic.icon}
                            title={topic.title}
                            description={topic.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </ContentSection>
        </PageTemplate>
    );
}
