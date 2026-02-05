import HeroSection from "@/components/About-Us/Hero";
import WhoWeAre from "@/components/About-Us/WhoWeAre";
import CoreValues from "@/components/About-Us/CoreValues";
import WhyChooseUs from "@/components/About-Us/WhyChooseUs";
import Statistics from "@/components/About-Us/Statistics";
import LeadershipTeam from "@/components/About-Us/LeadershipTeam";
import CaseStudies from "@/components/About-Us/CaseStudies";
import TechStackCarousel from "@/components/About-Us/TechStackCarousel";
import TestimonialSlider from "@/components/About-Us/TestimonialSlider";

export default function AboutUsPage() {
    return (
        <>
            <HeroSection />
            <WhoWeAre />
            <CoreValues />
            <WhyChooseUs />
            <Statistics />
            <LeadershipTeam />
            <CaseStudies />
            <TechStackCarousel />
            <TestimonialSlider />
        </>
    );
}
