'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';
import { Code, Database, Workflow, Shield, Cog, Check, Server, Users, Clock, Headphones, Layers, Rocket, Award, Target, Settings, GitBranch, Lock } from 'lucide-react';
import ServiceDetailHero from '@/components/Home-Page/service-cards/shared/ServiceDetailHero';
import ServiceDetailCTA from '@/components/Home-Page/service-cards/shared/ServiceDetailCTA';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['600', '700', '800'] });

const solutions = [
    { icon: Workflow, title: 'Enterprise Applications', description: 'ERP, CRM, and custom business tools that streamline operations.', features: ['ERP Systems', 'CRM Solutions', 'Workflow Automation'] },
    { icon: Database, title: 'Database Architecture', description: 'Scalable SQL and NoSQL solutions with optimized performance.', features: ['SQL & NoSQL', 'Data Modeling', 'Performance Tuning'] },
    { icon: Code, title: 'API Development', description: 'RESTful and GraphQL APIs that power your digital ecosystem.', features: ['REST & GraphQL', 'Microservices', 'API Integration'] },
    { icon: Cog, title: 'System Integration', description: 'Connect existing systems into a unified, efficient workflow.', features: ['Third-Party APIs', 'Data Sync', 'Legacy Migration'] },
];

const benefits = [
    'Tailored to your exact business requirements',
    'Scalable architecture for future growth',
    'Full ownership of source code',
    '24/7 dedicated support included',
    'Security-first development approach',
    'Agile methodology with transparency',
];

const processSteps = [
    { step: '01', title: 'Analysis', description: 'Discovery sessions to understand your processes and goals.' },
    { step: '02', title: 'Architecture', description: 'Scalable solution design for current and future needs.' },
    { step: '03', title: 'Development', description: 'Agile sprints with demos and quality assurance.' },
    { step: '04', title: 'Deployment', description: 'Production deployment with training and support.' },
];

const stats = [
    { value: '75+', label: 'PROJECTS DELIVERED', icon: Code },
    { value: '99.9%', label: 'SYSTEM UPTIME', icon: Server },
    { value: '50+', label: 'ENTERPRISE CLIENTS', icon: Users },
    { value: '5+', label: 'YEARS EXPERIENCE', icon: Award },
];

const techStack = [
    { name: 'Node.js', icon: '/Home-Page/icons/js.png' },
    { name: 'React', icon: '/Home-Page/icons/react.png' },
    { name: 'MongoDB', icon: '/Home-Page/icons/bootstrap.png' },
    { name: 'Firebase', icon: '/Home-Page/icons/firebase.png' },
    { name: 'PostgreSQL', icon: '/Home-Page/icons/html.png' },
    { name: 'Python', icon: '/Home-Page/icons/css.png' },
    { name: 'Docker', icon: '/Home-Page/icons/flutter.png' },
    { name: 'AWS', icon: '/Home-Page/icons/react.png' },
];

const whyChooseUs = [
    { icon: Award, title: 'Domain Expertise', desc: 'Deep industry understanding.' },
    { icon: Rocket, title: 'Rapid Delivery', desc: 'Faster time-to-market.' },
    { icon: Target, title: 'Business-Focused', desc: 'Decisions with ROI in mind.' },
    { icon: Lock, title: 'Enterprise Security', desc: 'Bank-level protection.' },
];

const industries = ['Healthcare', 'Finance', 'Logistics', 'Manufacturing', 'Retail', 'Education', 'Government', 'Insurance'];

const features = [
    { icon: GitBranch, title: 'Version Control', desc: 'Full git history for all code.' },
    { icon: Settings, title: 'CI/CD Pipeline', desc: 'Automated testing and deployment.' },
    { icon: Shield, title: 'Security Audits', desc: 'Regular penetration testing.' },
    { icon: Clock, title: 'Monitoring', desc: 'Real-time dashboards and alerts.' },
    { icon: Users, title: 'User Training', desc: 'Comprehensive team sessions.' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Direct dev team access.' },
];

export default function CustomSoftwarePage() {
    return (
        <>
            <main className={`${inter.className} bg-white`}>
                <ServiceDetailHero
                    tag="Enterprise Solutions"
                    category="Services"
                    title="Custom Software Development"
                    subtitle="We transform complex business requirements into high-performance software tailored to your unique processes."
                    icon={Code}
                />

                {/* Intro Section */}
                <section className="py-7 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div
                                className="relative order-2 lg:order-1"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#3C8ECB] opacity-15 blur-[60px] rounded-full transform translate-y-4" />
                                    <Image src="/About-Us/why-choose-us-illustration.png" alt="Custom Software" width={500} height={400} className="rounded-xl w-full h-auto relative z-10" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="order-1 lg:order-2"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-[#3C8ECB] to-transparent" />
                                    <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.2em] text-xs uppercase`}>ENTERPRISE SOLUTIONS</span>
                                </div>

                                <h2 className={`${redHat.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4`}>
                                    Software Built{' '}
                                    <span className="bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent">
                                        Exactly for Your Business
                                    </span>
                                </h2>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                                    Off-the-shelf software forces you to adapt. Custom software adapts to you, streamlining operations and giving you a competitive edge.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {industries.map((industry, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-xs bg-[#3C8ECB]/10 text-[#3C8ECB] px-3 py-1.5 rounded-full font-medium hover:bg-[#3C8ECB]/20 transition-colors cursor-default"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.03, duration: 0.3 }}
                                        >
                                            {industry}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-7 relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            className="relative rounded-xl overflow-hidden"
                            style={{ boxShadow: '0px 2px 30px 10px rgba(60, 142, 203, 0.1)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(96.21deg, #3C8ECB -5.79%, #000000 99.29%)' }} />
                            <div className="absolute inset-0" style={{ backgroundImage: 'url(/About-Us/stats-background.png)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay', opacity: 0.4 }} />

                            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 py-5 px-3">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col items-center justify-center text-center py-2"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                        >
                                            <Icon className="w-5 h-5 text-[#3C8ECB] mb-2" />
                                            <span className="font-bold text-[8px] sm:text-[9px] mb-1 tracking-wider text-gray-300 uppercase">{stat.label}</span>
                                            <span className="font-bold text-xl sm:text-2xl" style={{ background: 'linear-gradient(90deg, #E5E7EB 0%, #3C8ECB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-7 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#3C8ECB]" />
                                <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.2em] text-xs uppercase`}>SOLUTIONS</span>
                                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#3C8ECB]" />
                            </div>
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>Custom Solutions We Build</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {solutions.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-2xl border border-gray-100 group hover:border-[#3C8ECB]/30 hover:shadow-xl hover:shadow-[#3C8ECB]/5 transition-all duration-300 cursor-default"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08, duration: 0.4 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-[#3C8ECB]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3C8ECB] group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-7 h-7 text-[#3C8ECB] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.features.map((f, i) => (
                                                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">{f}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-7 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ willChange: 'transform, opacity' }}>
                                <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4`}>
                                    Why Choose{' '}
                                    <span className="bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent">Custom Software?</span>
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                    Custom software offers advantages that off-the-shelf solutions simply cannot match.
                                </p>
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ willChange: 'transform, opacity' }}>
                                <div className="absolute inset-0 bg-[#3C8ECB] opacity-15 blur-[60px] rounded-full" />
                                <Image src="/About-Us/statistics.png" alt="Benefits" width={500} height={400} className="rounded-xl w-full h-auto relative z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-7 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>What's Included</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 group hover:border-[#3C8ECB]/30 hover:shadow-lg hover:shadow-[#3C8ECB]/5 transition-all duration-300 cursor-default"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <div className="w-12 h-12 bg-[#3C8ECB]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3C8ECB] group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-[#3C8ECB] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base mb-1">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-7 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>Our Process</h2>
                        </motion.div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {processSteps.map((item, index) => (
                                <motion.div key={index} className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:shadow-[#3C8ECB]/10 transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.4 }}>
                                    <span className="text-5xl sm:text-6xl font-extrabold text-[#3C8ECB]/10 absolute top-2 right-3">{item.step}</span>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3C8ECB] text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 group-hover:scale-110 transition-transform duration-300">{item.step}</div>
                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-7 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3C8ECB] rounded-full blur-[120px] opacity-10" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="bg-[#0A0A0A]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="will-change-transform">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-[2px] bg-gradient-to-r from-[#3C8ECB] to-transparent" />
                                        <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.25em] text-xs uppercase`}>WHY CHOOSE US</span>
                                    </div>

                                    <h2 className={`${redHat.className} text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-6`}>
                                        Your Partner for{' '}
                                        <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">Enterprise Excellence</span>
                                    </h2>

                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg border-l-2 border-white/10 pl-4">
                                        We're not just developers – we're technology partners who deliver real business value.
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {whyChooseUs.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.div key={index} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[rgba(60,142,203,0.15)] hover:scale-[1.02] transition-all duration-200 cursor-default" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                                    <Icon size={16} className="text-[#3C8ECB] flex-shrink-0" />
                                                    <span className="text-sm font-semibold text-white">{item.title}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ willChange: 'transform, opacity' }}>
                                    <div className="relative w-full max-w-[400px]">
                                        <div className="absolute inset-0 bg-[#3C8ECB] opacity-20 blur-[60px] rounded-full transform translate-y-4" />
                                        <Image src="/About-Us/why-choose-us-illustration.png" alt="Why Choose TechFleek" width={400} height={320} className="relative z-10 w-full h-auto" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="py-7 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-6 sm:mb-8" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                            <span className={`${redHat.className} text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider`}>Technologies We Use</span>
                        </motion.div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-6">
                            {techStack.map((tech, index) => (
                                <motion.div key={index} className="flex flex-col items-center gap-2 sm:gap-3 group cursor-default" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center p-2 sm:p-3 border border-gray-100 group-hover:shadow-lg group-hover:shadow-[#3C8ECB]/10 group-hover:scale-110 transition-all duration-300">
                                        <Image src={tech.icon} alt={tech.name} width={48} height={48} className="object-contain w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                                    </div>
                                    <span className={`${inter.className} text-[10px] sm:text-xs lg:text-sm font-medium text-gray-600`}>{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-7 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <motion.div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-lg shadow-gray-100/50 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed mb-6">
                                "TechFleek built us a custom ERP system that completely transformed our operations. What used to take hours now takes minutes."
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <Image src="/About-Us/person1.png" alt="Client" width={56} height={56} className="rounded-full" />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900">Robert Martinez</div>
                                    <div className="text-gray-500 text-sm">COO, Manufacturing Company</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <ServicePagination currentServiceSlug="custom-software" />
                <ServiceDetailCTA title="Ready to Build Custom Software?" description="Let's discuss your requirements and create a tailored solution." />
            </main>
        </>
    );
}
