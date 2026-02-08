import { Metadata } from 'next';
import PageTemplate from '@/components/Common/PageTemplate';
import CaseStudyHero from '@/components/case-study/detail/CaseStudyHero';
import AboutSection from '@/components/case-study/detail/AboutSection';
import ChallengeSection from '@/components/case-study/detail/ChallengeSection';
import SolutionSection from '@/components/case-study/detail/SolutionSection';
import OutcomeSection from '@/components/case-study/detail/OutcomeSection';
import TestimonialSection from '@/components/case-study/detail/TestimonialSection';
import CaseStudyCTA from '@/components/case-study/detail/CaseStudyCTA';

export const metadata: Metadata = {
    title: "Bollco Case Study | TechFleek",
    description: "How TechFleek helped Bollco achieve 60% improvement in data insights through AI-driven analytics.",
};

// ========== ALL CONTENT FOR BOLLCO - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "AI & Automation",
    title: "How Bollco Achieved 60% Better Data Insights with AI-Driven Analytics",
    subtitle: "Discover how we transformed Bollco's data infrastructure and enabled real-time decision making across their global operations."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 1",
    companyName: "Bollco",
    description: "Bollco is a leading industrial automation company serving manufacturing clients across 12 countries. With over 15 years of experience, they specialize in smart factory solutions and predictive maintenance systems.",
    stats: [
        { value: "500+", label: "Enterprise Clients" },
        { value: "$120M", label: "Annual Revenue" },
        { value: "12", label: "Countries" },
        { value: "800+", label: "Employees" }
    ],
    imageSrc: "/CaseStudy/bollco.png",
    badgeTitle: "Industry Pioneer",
    badgeSubtitle: "Smart Factory Solutions"
};

const challenges = [
    {
        title: "Data Silos",
        description: "Critical data was scattered across multiple legacy systems, making it difficult to get a unified view of operations."
    },
    {
        title: "Slow Decision Making",
        description: "Manual data analysis processes took days, causing delays in responding to market changes and operational issues."
    },
    {
        title: "Scalability Issues",
        description: "Existing infrastructure couldn't handle the growing volume of IoT sensor data from smart factory implementations."
    }
];

const solutionSteps = [
    {
        title: "Data Integration Layer",
        description: "Built a unified data platform that connects all legacy systems, IoT devices, and third-party tools into a single source of truth."
    },
    {
        title: "AI-Powered Analytics Engine",
        description: "Developed custom machine learning models for predictive maintenance, demand forecasting, and anomaly detection."
    },
    {
        title: "Real-Time Dashboard",
        description: "Created an intuitive dashboard with real-time visualizations, alerts, and automated reporting capabilities."
    },
    {
        title: "Scalable Cloud Infrastructure",
        description: "Migrated to a cloud-native architecture capable of processing millions of data points per second."
    }
];

const outcomeData = {
    metrics: [
        { value: "60%", label: "Better Insights", icon: "trending" as const, color: "#3C8ECB" },
        { value: "75%", label: "Faster Decisions", icon: "clock" as const, color: "#10B981" },
        { value: "40%", label: "Cost Reduction", icon: "award" as const, color: "#8B5CF6" },
        { value: "3x", label: "Data Processing", icon: "users" as const, color: "#F59E0B" }
    ],
    summary: "The new AI-driven analytics platform transformed Bollco's operations, enabling real-time decision making and predictive insights that resulted in significant cost savings and improved operational efficiency across all their global facilities."
};

const testimonialData = {
    quote: "TechFleek's solution completely transformed how we handle data. What used to take us days now happens in real-time. The predictive capabilities have helped us prevent costly equipment failures and optimize our entire supply chain.",
    authorName: "Marcus Chen",
    authorRole: "CTO, Bollco Industries"
};

const navigation = {
    nextStudy: { slug: "dygo-diagnostics", name: "Dygo Diagnostics" }
};

// ========== END OF CONTENT ==========

export default function BollcoCaseStudy() {
    return (
        <PageTemplate>
            <CaseStudyHero {...heroData} />
            <AboutSection {...aboutData} />
            <ChallengeSection challenges={challenges} />
            <SolutionSection steps={solutionSteps} />
            <OutcomeSection {...outcomeData} />
            <TestimonialSection {...testimonialData} />
            <CaseStudyCTA nextStudy={navigation.nextStudy} />
        </PageTemplate>
    );
}
