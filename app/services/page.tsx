import React from 'react';
import Hero from '../../components/Services/Hero';
import ServiceDescription from '../../components/Services/ServiceDescription';
import WhyUiUx from '../../components/Services/WhyUiUx';
import Statistics from '../../components/Services/Statistics';
import TestimonialSlider from '../../components/Services/TestimonialSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services | TechFleek",
    description: "Discover our comprehensive range of services including UI/UX design, web development, and digital solutions.",
};

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen w-full flex flex-col">
            <Hero />
            <ServiceDescription />
            <WhyUiUx />
            <Statistics />
            <TestimonialSlider />
        </main>
    );
}
