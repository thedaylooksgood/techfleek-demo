'use client';

import React from 'react';
import HeroSection from '../../components/Enquiry/Hero';
import EnquirySection from '../../components/Enquiry/EnquirySection';

export default function EnquiryPage() {
    return (
        <main>
            <HeroSection setIsHeaderVisible={() => { }} />
            <EnquirySection />
        </main>
    );
}
