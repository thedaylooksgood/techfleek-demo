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
    title: "FOTOART Production Case Study | TechFleek",
    description: "How TechFleek built an enterprise CRM that streamlined operations for a creative agency.",
};

// ========== ALL CONTENT FOR FOTOART - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "Enterprise Systems",
    title: "Building an Enterprise CRM That Simplified Complex Creative Workflows",
    subtitle: "How we helped FOTOART Production streamline their client relationships and project management with a custom-built enterprise solution."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 5",
    companyName: "FOTOART Production",
    description: "FOTOART Production is a full-service creative agency specializing in commercial photography, video production, and brand content creation. They work with Fortune 500 companies across fashion, automotive, and technology sectors.",
    stats: [
        { value: "200+", label: "Enterprise Clients" },
        { value: "$25M", label: "Annual Revenue" },
        { value: "15+", label: "Industry Awards" },
        { value: "120", label: "Creative Team" }
    ],
    imageSrc: "/CaseStudy/fotoart.png",
    badgeTitle: "Creative Excellence",
    badgeSubtitle: "Award-Winning Agency"
};

const challenges = [
    {
        title: "Scattered Client Data",
        description: "Client information was spread across emails, spreadsheets, and various tools, causing communication gaps."
    },
    {
        title: "Complex Project Tracking",
        description: "Creative projects with multiple deliverables, revisions, and approvals were difficult to manage efficiently."
    },
    {
        title: "Resource Allocation",
        description: "Matching the right creative talent to projects while balancing workloads was a constant struggle."
    }
];

const solutionSteps = [
    {
        title: "Unified Client Hub",
        description: "Built a centralized platform for all client interactions, contracts, and project history with smart search capabilities."
    },
    {
        title: "Creative Project Pipeline",
        description: "Designed an intuitive workflow system with visual boards, milestone tracking, and automated notifications."
    },
    {
        title: "AI Resource Matching",
        description: "Implemented AI-powered talent matching that considers skills, availability, and past project performance."
    },
    {
        title: "Client Portal",
        description: "Created a branded portal where clients can review work, provide feedback, and approve deliverables."
    }
];

const outcomeData = {
    metrics: [
        { value: "45%", label: "Time Saved", icon: "clock" as const, color: "#3C8ECB" },
        { value: "30%", label: "More Projects", icon: "trending" as const, color: "#10B981" },
        { value: "95%", label: "Client Satisfaction", icon: "award" as const, color: "#8B5CF6" },
        { value: "Zero", label: "Missed Deadlines", icon: "users" as const, color: "#F59E0B" }
    ],
    summary: "The custom CRM transformed FOTOART's operations, enabling them to take on 30% more projects while improving quality and client satisfaction. The streamlined workflows eliminated missed deadlines entirely."
};

const testimonialData = {
    quote: "Our creative work is complex, and most off-the-shelf CRMs couldn't handle it. TechFleek built us a system that actually understands how creative agencies work. It's become the backbone of our entire operation.",
    authorName: "Michael Foster",
    authorRole: "Operations Director, FOTOART Production"
};

const navigation = {
    prevStudy: { slug: "mergerdomo", name: "MergerDomo" },
    nextStudy: { slug: "ucom-entertainment", name: "Ucom Entertainment" }
};

// ========== END OF CONTENT ==========

export default function FotoartCaseStudy() {
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
