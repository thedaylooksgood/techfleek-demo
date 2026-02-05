import { Metadata } from 'next';
import CaseStudyHero from '@/components/case-study/detail/CaseStudyHero';
import AboutSection from '@/components/case-study/detail/AboutSection';
import ChallengeSection from '@/components/case-study/detail/ChallengeSection';
import SolutionSection from '@/components/case-study/detail/SolutionSection';
import OutcomeSection from '@/components/case-study/detail/OutcomeSection';
import TestimonialSection from '@/components/case-study/detail/TestimonialSection';
import CaseStudyCTA from '@/components/case-study/detail/CaseStudyCTA';

export const metadata: Metadata = {
    title: "Ucom Entertainment Case Study | TechFleek",
    description: "How TechFleek increased revenue by 340% for Ucom Entertainment with data-driven insights.",
};

// ========== ALL CONTENT FOR UCOM ENTERTAINMENT - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "Event Management",
    title: "How Ucom Entertainment Increased Revenue by 340% with Data-Driven Insights",
    subtitle: "Discover how we transformed their event management operations and achieved unprecedented growth using our advanced analytics platform in just 6 months."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 6",
    companyName: "Ucom Entertainment",
    description: "Ucom Entertainment is a leading event management company serving over 2 million attendees annually. They specialize in concerts, festivals, and corporate events, with a reputation for innovation and exceptional experiences.",
    stats: [
        { value: "2M+", label: "Annual Attendees" },
        { value: "$50M", label: "Annual Revenue" },
        { value: "15", label: "Countries" },
        { value: "500+", label: "Employees" }
    ],
    imageSrc: "/CaseStudy/ucom.png",
    badgeTitle: "Industry Leader",
    badgeSubtitle: "Event Management Excellence"
};

const challenges = [
    {
        title: "Manual Ticketing Processes",
        description: "Ticket sales and management were handled through disconnected systems, causing delays and errors."
    },
    {
        title: "Poor Attendee Insights",
        description: "Limited understanding of attendee preferences made it difficult to optimize event experiences."
    },
    {
        title: "Vendor Coordination",
        description: "Managing multiple vendors across different events was chaotic and time-consuming."
    }
];

const solutionSteps = [
    {
        title: "Unified Event Platform",
        description: "Built an all-in-one platform for ticketing, attendee management, and real-time analytics."
    },
    {
        title: "AI-Powered Recommendations",
        description: "Implemented machine learning to predict attendance, optimize pricing, and personalize experiences."
    },
    {
        title: "Vendor Management System",
        description: "Created a centralized hub for vendor onboarding, contracts, and performance tracking."
    },
    {
        title: "Real-Time Analytics Dashboard",
        description: "Deployed live dashboards showing ticket sales, social sentiment, and operational metrics."
    }
];

const outcomeData = {
    metrics: [
        { value: "340%", label: "Revenue Growth", icon: "trending" as const, color: "#3C8ECB" },
        { value: "85%", label: "Faster Response", icon: "clock" as const, color: "#10B981" },
        { value: "40%", label: "Higher Satisfaction", icon: "award" as const, color: "#8B5CF6" },
        { value: "10K+", label: "Active Users", icon: "users" as const, color: "#F59E0B" }
    ],
    summary: "The new platform transformed Ucom Entertainment's operations, enabling real-time decision making and predictive insights that resulted in record-breaking revenue growth and industry-leading customer satisfaction scores."
};

const testimonialData = {
    quote: "TechFleek's solution completely transformed how we manage events. What used to take us days now happens in real-time. The predictive capabilities have helped us sell out events faster and create better experiences for our attendees.",
    authorName: "James Mitchell",
    authorRole: "CEO, Ucom Entertainment"
};

const navigation = {
    prevStudy: { slug: "fotoart", name: "FOTOART Production" }
};

// ========== END OF CONTENT ==========

export default function UcomCaseStudy() {
    return (
        <main className="bg-white min-h-screen w-full">
            <CaseStudyHero {...heroData} />
            <AboutSection {...aboutData} />
            <ChallengeSection challenges={challenges} />
            <SolutionSection steps={solutionSteps} />
            <OutcomeSection {...outcomeData} />
            <TestimonialSection {...testimonialData} />
            <CaseStudyCTA prevStudy={navigation.prevStudy} />
        </main>
    );
}
