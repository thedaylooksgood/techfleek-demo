'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCTAProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

export default function ServiceCTA({
    title = "Let's Build Your Next Software Experience",
    description = "Ready to transform your ideas into powerful software solutions? Let's discuss your project and create something amazing together.",
    primaryButtonText = "Start Your Project",
    primaryButtonLink = "/enquiry",
    secondaryButtonText = "Schedule a Call",
    secondaryButtonLink = "/enquiry",
}: ServiceCTAProps) {
    return (
        <section className="py-24 relative overflow-hidden bg-[#1e3a8a]">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

            {/* Decorative blur */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-30" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#3C8ECB] rounded-full blur-[80px] opacity-20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={primaryButtonLink}
                            className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold transition shadow-lg"
                        >
                            {primaryButtonText}
                        </Link>
                        <Link
                            href={secondaryButtonLink}
                            className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition"
                        >
                            {secondaryButtonText}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
