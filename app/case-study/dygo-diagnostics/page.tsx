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
    title: "Dygo Diagnostics Case Study | TechFleek",
    description: "How TechFleek built a next-gen fintech mobile app that increased user engagement by 200%.",
};

// ========== ALL CONTENT FOR DYGO DIAGNOSTICS - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "Fintech Solutions",
    title: "Building a Next-Gen Fintech App That Increased User Engagement by 200%",
    subtitle: "How we helped Dygo Diagnostics launch a revolutionary mobile platform for financial health monitoring and personal finance management."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 2",
    companyName: "Dygo Diagnostics",
    description: "Dygo Diagnostics is an innovative fintech startup focused on making financial health accessible to everyone. Their mission is to democratize financial planning through AI-powered insights and personalized recommendations.",
    stats: [
        { value: "1.5M", label: "App Downloads" },
        { value: "$45M", label: "Series B Funding" },
        { value: "4.8★", label: "App Rating" },
        { value: "50+", label: "Team Members" }
    ],
    imageSrc: "/CaseStudy/dygo.png",
    badgeTitle: "Rising Star",
    badgeSubtitle: "Fintech Innovation Award"
};

const challenges = [
    {
        title: "Complex User Onboarding",
        description: "Financial apps require extensive user data collection which traditionally causes high drop-off rates during signup."
    },
    {
        title: "Real-Time Data Sync",
        description: "Connecting to multiple banking institutions while ensuring data security and real-time synchronization was technically challenging."
    },
    {
        title: "Regulatory Compliance",
        description: "Meeting strict financial regulations across multiple jurisdictions while maintaining a seamless user experience."
    }
];

const solutionSteps = [
    {
        title: "Progressive Onboarding",
        description: "Designed a gamified onboarding flow that collects information gradually, reducing friction while maintaining engagement."
    },
    {
        title: "Secure Banking Integration",
        description: "Implemented Plaid and custom banking APIs with bank-grade encryption and real-time transaction categorization."
    },
    {
        title: "AI Financial Coach",
        description: "Built an intelligent assistant that provides personalized financial advice based on spending patterns and goals."
    },
    {
        title: "Compliance-First Architecture",
        description: "Designed the entire system with SOC 2 and GDPR compliance built-in, with automated audit trails."
    }
];

const outcomeData = {
    metrics: [
        { value: "200%", label: "User Engagement", icon: "users" as const, color: "#3C8ECB" },
        { value: "85%", label: "Onboarding Rate", icon: "trending" as const, color: "#10B981" },
        { value: "4.8★", label: "App Store Rating", icon: "award" as const, color: "#8B5CF6" },
        { value: "45s", label: "Avg. Session Time", icon: "clock" as const, color: "#F59E0B" }
    ],
    summary: "The new mobile app exceeded all expectations, quickly becoming one of the top-rated fintech apps in its category. The intuitive design and AI-powered features helped Dygo Diagnostics secure their Series B funding."
};

const testimonialData = {
    quote: "TechFleek didn't just build us an app – they helped us reimagine what personal finance could look like. Their team understood both the technical challenges and the emotional aspects of how people interact with their money.",
    authorName: "Sarah Williams",
    authorRole: "CEO & Founder, Dygo Diagnostics"
};

const navigation = {
    prevStudy: { slug: "bollco", name: "Bollco" },
    nextStudy: { slug: "greysell", name: "GreySell" }
};

// ========== END OF CONTENT ==========

export default function DygoCaseStudy() {
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
