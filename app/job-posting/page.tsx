"use client";

import PageTemplate from "@/components/Common/PageTemplate";
import PageHero from "@/components/Common/PageHero";
import WhyChooseUs from '../../components/job-posting/WhyChooseUs';
import LifeAtTechFleek from '../../components/job-posting/LifeAtTechFleek';
import OpenPositions from '../../components/job-posting/OpenPositions';
import JobCTA from '../../components/job-posting/JobCTA';

export default function JobPostingPage() {
    return (
        <PageTemplate>
            {/* Hero Section */}
            <PageHero
                title="Build Your"
                subtitle="Future"
                description="Join our team of innovators shaping the future of software & digital solutions. Create impactful products that transform businesses worldwide."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Careers" }
                ]}
            />

            {/* Why Choose TechFleek */}
            <WhyChooseUs />

            {/* Life at TechFleek */}
            <LifeAtTechFleek />

            {/* Open Positions */}
            <OpenPositions />

            {/* CTA Section */}
            <JobCTA />
        </PageTemplate>
    );
}
