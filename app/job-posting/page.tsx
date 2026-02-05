import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/job-posting/Hero';
import WhyChooseUs from '../../components/job-posting/WhyChooseUs';
import LifeAtTechFleek from '../../components/job-posting/LifeAtTechFleek';
import OpenPositions from '../../components/job-posting/OpenPositions';
import JobCTA from '../../components/job-posting/JobCTA';

export default function JobPostingPage() {
    return (
        <main className="min-h-screen bg-white pt-[50px] lg:pt-[75px]">
            <Header />
            <Hero />
            <WhyChooseUs />
            <LifeAtTechFleek />
            <OpenPositions />
            <JobCTA />
        </main>
    );
}
