'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Red_Hat_Display } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['600', '700', '800'] });

const services = [
    { title: 'Web Development', slug: 'web-development' },
    { title: 'Mobile App Development', slug: 'mobile-app-development' },
    { title: 'Custom Software', slug: 'custom-software' },
    { title: 'UI/UX Design', slug: 'ui-ux-design' },
    { title: 'Cloud Services', slug: 'cloud-services' },
];

interface ServicePaginationProps {
    currentServiceSlug: string;
}

const ServicePagination: React.FC<ServicePaginationProps> = ({ currentServiceSlug }) => {
    const currentIndex = services.findIndex(s => s.slug === currentServiceSlug);

    // Circular navigation logic
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;

    const prevService = services[prevIndex];
    const nextService = services[nextIndex];

    return (
        <section className="py-6 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Previous Service */}
                    <Link
                        href={`/services/${prevService.slug}`}
                        className="group flex items-center gap-3 transition-all duration-300 hover:-translate-x-1"
                    >
                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-[#3C8ECB] group-hover:border-[#3C8ECB] transition-all">
                            <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-bold">Previous</span>
                            <span className={`${redHat.className} block text-sm font-bold text-gray-900 group-hover:text-[#3C8ECB]`}>
                                {prevService.title}
                            </span>
                        </div>
                    </Link>

                    <div className="w-[1px] h-10 bg-gray-100 hidden sm:block" />

                    {/* Next Service */}
                    <Link
                        href={`/services/${nextService.slug}`}
                        className="group flex items-center gap-3 text-right transition-all duration-300 hover:translate-x-1"
                    >
                        <div className="hidden sm:block">
                            <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-bold">Next</span>
                            <span className={`${redHat.className} block text-sm font-bold text-gray-900 group-hover:text-[#3C8ECB]`}>
                                {nextService.title}
                            </span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-[#3C8ECB] group-hover:border-[#3C8ECB] transition-all">
                            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicePagination;
