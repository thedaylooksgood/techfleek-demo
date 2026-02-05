'use client';

import { motion } from 'framer-motion';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ServiceWorkflowProps {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDescription?: string;
    steps: ProcessStep[];
}

export default function ServiceWorkflow({
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    steps,
}: ServiceWorkflowProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#3C8ECB] font-semibold tracking-wider uppercase text-sm mb-2">
                        {sectionSubtitle}
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {sectionTitle}
                    </h2>
                    {sectionDescription && (
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {sectionDescription}
                        </p>
                    )}
                </motion.div>

                {/* Process steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" style={{ marginLeft: '12.5%', marginRight: '12.5%' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                                className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                {/* Step number */}
                                <div className="absolute -top-4 left-6 bg-[#3C8ECB] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full border-4 border-gray-50 shadow-md">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
