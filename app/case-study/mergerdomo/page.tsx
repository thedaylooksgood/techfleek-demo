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
    title: "MergerDomo Case Study | TechFleek",
    description: "How TechFleek created an AI-powered custom wallpaper platform with intuitive design tools.",
};

// ========== ALL CONTENT FOR MERGERDOMO - EDIT HERE ==========

const heroData = {
    tag: "SUCCESS STORY",
    category: "UI/UX Design",
    title: "Creating an AI-Powered Custom Wallpaper Platform That Delights Users",
    subtitle: "How our innovative UI/UX design approach helped MergerDomo revolutionize the custom wallpaper industry with AI-powered design tools."
};

const aboutData = {
    caseStudyNumber: "Case Study No. 4",
    companyName: "MergerDomo",
    description: "MergerDomo is a creative tech company that bridges the gap between AI and interior design. Their platform allows users to create custom wallpapers using AI-powered design tools, making professional-quality designs accessible to everyone.",
    stats: [
        { value: "250K", label: "Active Users" },
        { value: "1M+", label: "Designs Created" },
        { value: "4.9★", label: "User Rating" },
        { value: "35", label: "Team Members" }
    ],
    imageSrc: "/CaseStudy/mergerdomo.png",
    badgeTitle: "Design Innovation",
    badgeSubtitle: "AI-Powered Creativity"
};

const challenges = [
    {
        title: "Complex AI Integration",
        description: "Making AI-powered design tools intuitive enough for non-designers while maintaining creative control."
    },
    {
        title: "Real-Time Preview",
        description: "Users needed to see how wallpapers would look in their actual rooms before ordering."
    },
    {
        title: "Print-Ready Quality",
        description: "Ensuring AI-generated designs maintained professional print quality at any scale."
    }
];

const solutionSteps = [
    {
        title: "Intuitive Design Interface",
        description: "Created a simple yet powerful interface that guides users through the design process with smart suggestions."
    },
    {
        title: "AR Room Visualization",
        description: "Integrated augmented reality to let users preview wallpapers in their actual spaces using their phone camera."
    },
    {
        title: "AI Style Engine",
        description: "Developed custom AI models that generate unique patterns based on user preferences and color choices."
    },
    {
        title: "Vector Output Pipeline",
        description: "Built a processing pipeline that converts AI designs to scalable vector formats for perfect print quality."
    }
];

const outcomeData = {
    metrics: [
        { value: "4.9★", label: "User Rating", icon: "award" as const, color: "#3C8ECB" },
        { value: "300%", label: "Conversion Rate", icon: "trending" as const, color: "#10B981" },
        { value: "65%", label: "Return Customers", icon: "users" as const, color: "#8B5CF6" },
        { value: "2min", label: "Avg Design Time", icon: "clock" as const, color: "#F59E0B" }
    ],
    summary: "The new platform transformed MergerDomo from a niche service to a mainstream design tool. The intuitive AI-powered features made custom wallpaper design accessible to everyone, resulting in viral growth and industry recognition."
};

const testimonialData = {
    quote: "TechFleek understood that great design is invisible. They created an experience where users forget they're using AI – they just feel creative and empowered. Our customer satisfaction scores have never been higher.",
    authorName: "Elena Rodriguez",
    authorRole: "Founder & Creative Director, MergerDomo"
};

const navigation = {
    prevStudy: { slug: "greysell", name: "GreySell" },
    nextStudy: { slug: "fotoart", name: "FOTOART Production" }
};

// ========== END OF CONTENT ==========

export default function MergerDomoCaseStudy() {
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
