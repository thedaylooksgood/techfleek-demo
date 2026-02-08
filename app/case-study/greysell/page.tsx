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
    title: "GreySell Case Study | TechFleek",
    description: "How TechFleek built a real-time analytics SaaS platform processing 1M+ events per second.",
};

// ========== ALL CONTENT FOR GREYSELL - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "SaaS Platform",
    title: "Building a Real-Time Analytics Platform That Processes 1M+ Events Per Second",
    subtitle: "How we helped GreySell create a scalable business intelligence solution that democratized data analytics for mid-market companies."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 3",
    companyName: "GreySell",
    description: "GreySell is a B2B SaaS company providing business intelligence tools to mid-market enterprises. Their platform helps companies make data-driven decisions without needing a dedicated data science team.",
    stats: [
        { value: "2,500+", label: "Business Clients" },
        { value: "$30M", label: "ARR" },
        { value: "99.9%", label: "Uptime" },
        { value: "150+", label: "Team Members" }
    ],
    imageSrc: "/CaseStudy/greysell.png",
    badgeTitle: "Market Leader",
    badgeSubtitle: "BI Solutions Provider"
};

const challenges = [
    {
        title: "Performance at Scale",
        description: "The existing system struggled with large datasets, causing slow query times and frustrated users."
    },
    {
        title: "Complex Data Modeling",
        description: "Clients had diverse data structures, making it difficult to provide a one-size-fits-all solution."
    },
    {
        title: "Real-Time Requirements",
        description: "Customers demanded real-time dashboards, but batch processing couldn't meet these expectations."
    }
];

const solutionSteps = [
    {
        title: "Columnar Database Architecture",
        description: "Migrated to a columnar database optimized for analytical queries, reducing query times by 95%."
    },
    {
        title: "Flexible Data Schema",
        description: "Built a dynamic schema system that adapts to any data structure while maintaining query performance."
    },
    {
        title: "Stream Processing Engine",
        description: "Implemented Apache Kafka and custom stream processors for real-time data ingestion and analysis."
    },
    {
        title: "Self-Service Dashboard Builder",
        description: "Created an intuitive drag-and-drop interface for non-technical users to build custom reports."
    }
];

const outcomeData = {
    metrics: [
        { value: "90%", label: "Faster Queries", icon: "clock" as const, color: "#3C8ECB" },
        { value: "1M+", label: "Events/Second", icon: "trending" as const, color: "#10B981" },
        { value: "50%", label: "Cost Reduction", icon: "award" as const, color: "#8B5CF6" },
        { value: "3x", label: "Customer Growth", icon: "users" as const, color: "#F59E0B" }
    ],
    summary: "The rebuilt platform transformed GreySell from a struggling startup to a market leader. Their ability to process real-time data at scale attracted enterprise clients and led to a successful Series C funding round."
};

const testimonialData = {
    quote: "Working with TechFleek was transformative for our business. They didn't just solve our technical problems – they helped us reimagine what was possible. Our platform now handles more data in a minute than it used to in an hour.",
    authorName: "David Park",
    authorRole: "VP of Engineering, GreySell"
};

const navigation = {
    prevStudy: { slug: "dygo-diagnostics", name: "Dygo Diagnostics" },
    nextStudy: { slug: "mergerdomo", name: "MergerDomo" }
};

// ========== END OF CONTENT ==========

export default function GreySellCaseStudy() {
    return (
        <PageTemplate>
            <CaseStudyHero {...heroData} />
            <AboutSection {...aboutData} />
            <ChallengeSection challenges={challenges} />
            <SolutionSection steps={solutionSteps} />
            <OutcomeSection {...outcomeData} />
            <TestimonialSection {...testimonialData} />
            <CaseStudyCTA prevStudy={navigation.prevStudy} nextStudy={navigation.nextStudy} />
        </PageTemplate>
    );
}
