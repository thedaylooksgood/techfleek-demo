import React from 'react';
import Hero from '@/components/case-study/Hero';
import FilterSection from '@/components/case-study/FilterSection';
import CaseStudyGrid from '@/components/case-study/CaseStudyGrid';
import FeaturedCaseStudy from '@/components/case-study/FeaturedCaseStudy';
import StatsGrid from '@/components/case-study/StatsGrid';
import TestimonialSlider from '@/components/case-study/TestimonialSlider';
import TechStackCarousel from '@/components/case-study/TechStackCarousel';
import CTASection from '@/components/case-study/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Case Studies | TechFleek",
    description: "Explore our portfolio of successful projects and digital transformations.",
};

export default function CaseStudyPage() {
    return (
        <main className="bg-black min-h-screen w-full flex flex-col">
            <Hero />
            <FilterSection />
            <CaseStudyGrid />
            <FeaturedCaseStudy />
            <StatsGrid />
            <TestimonialSlider />
            <TechStackCarousel />
            <CTASection />
        </main>
    );
}
