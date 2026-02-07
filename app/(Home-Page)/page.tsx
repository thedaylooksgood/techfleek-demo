import Hero from "../../components/Home-Page/Hero";
import FeaturesCards from "../../components/Home-Page/FeaturesCards";
import AboutTechFleek from "../../components/Home-Page/AboutTechFleek";
import TechFleekServices from "../../components/Home-Page/TechFleekServices";
import TechStack from "../../components/Home-Page/TechStack";
import TechStackCarousel from "../../components/Home-Page/TechStackCarousel";
import IndustryExpertise from "../../components/Home-Page/IndustryExpertise";
import IndustriesTargeted from "../../components/Home-Page/IndustriesTargeted";
import ClientSectionAnimated from "../../components/Home-Page/ClientSectionAnimated";
import CaseStudies from "../../components/Home-Page/CaseStudies";
import ProjectsSection from "../../components/Home-Page/ProjectsSection";
import TestimonialSlider from "../../components/Home-Page/TestimonialSlider";
import CTASection from "../../components/Home-Page/CTASection";

export default function Home() {
    return (
        <main className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <Hero />
            {/* 3. About Section */}
            <AboutTechFleek />

            {/* 4. Services Section (Make sure this appears ONLY ONCE) */}
            <TechFleekServices />

            {/* 5. Tech Stack Section */}
            <TechStack />

            {/* 6. Industry Expertise Section */}
            <IndustryExpertise />

            {/* 6b. Industries Targeted Section - Card Deck */}
            <IndustriesTargeted />

            {/* 7. Client Section */}
            <ClientSectionAnimated />

            {/* 8. Case Studies Section */}
            <CaseStudies />

            {/* 10. Testimonial Slider */}
            <TestimonialSlider />

            {/* 5b. Tech Stack Carousel Section */}
            <TechStackCarousel />

        </main>
    );
}
