'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Inter, Red_Hat_Display } from 'next/font/google';
import { Palette, Users, Lightbulb, TrendingUp, PenTool, Eye, MousePointer, Layers, Target, Award, Rocket, Headphones, Sparkles, Figma, MonitorSmartphone, FileCheck } from 'lucide-react';
import ServiceDetailHero from '@/components/Home-Page/service-cards/shared/ServiceDetailHero';
import ServiceDetailCTA from '@/components/Home-Page/service-cards/shared/ServiceDetailCTA';
import ServicePagination from '@/components/Home-Page/service-cards/shared/ServicePagination';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['600', '700', '800'] });

const services = [
    { icon: Users, title: 'User Research', description: 'Deep understanding through interviews, surveys, and behavioral analysis.', features: ['User Interviews', 'Surveys & Analytics', 'Persona Development'] },
    { icon: PenTool, title: 'Wireframing', description: 'Structural layouts establishing information architecture and flows.', features: ['Sketches & Flows', 'Information Architecture', 'Rapid Iteration'] },
    { icon: Palette, title: 'Visual Design', description: 'Beautiful, brand-aligned interfaces with cohesive design systems.', features: ['UI Design', 'Design Systems', 'Brand Identity'] },
    { icon: Layers, title: 'Prototyping', description: 'Interactive prototypes for usability testing and feedback.', features: ['Figma Prototypes', 'Interactive Demos', 'Usability Testing'] },
];

const principles = [
    { icon: Eye, title: 'User-Centric', desc: 'Every decision starts with the user.' },
    { icon: Layers, title: 'Consistency', desc: 'Unified design systems across platforms.' },
    { icon: MousePointer, title: 'Accessibility', desc: 'WCAG compliant for everyone.' },
    { icon: TrendingUp, title: 'Business Impact', desc: 'Designs that drive conversions.' },
];

const processSteps = [
    { step: '01', title: 'Discovery', description: 'Stakeholder interviews and user personas.' },
    { step: '02', title: 'Wireframes', description: 'Structural layouts and user flows.' },
    { step: '03', title: 'Visual Design', description: 'Stunning mockups and prototypes.' },
    { step: '04', title: 'Handoff', description: 'Design systems with documentation.' },
];

const stats = [
    { value: '200+', label: 'PROJECTS DESIGNED', icon: Palette },
    { value: '98%', label: 'CLIENT SATISFACTION', icon: Users },
    { value: '40%', label: 'AVG CONVERSION LIFT', icon: TrendingUp },
    { value: '15+', label: 'DESIGN AWARDS', icon: Award },
];

const tools = [
    { name: 'Figma', icon: '/Home-Page/icons/react.png' },
    { name: 'Adobe XD', icon: '/Home-Page/icons/css.png' },
    { name: 'Sketch', icon: '/Home-Page/icons/html.png' },
    { name: 'Framer', icon: '/Home-Page/icons/js.png' },
    { name: 'Photoshop', icon: '/Home-Page/icons/bootstrap.png' },
    { name: 'Illustrator', icon: '/Home-Page/icons/flutter.png' },
    { name: 'InVision', icon: '/Home-Page/icons/firebase.png' },
    { name: 'Principle', icon: '/Home-Page/icons/react.png' },
];

const whyChooseUs = [
    { icon: Award, title: 'Award-Winning', desc: 'Recognized globally.' },
    { icon: Rocket, title: 'Fast Turnaround', desc: 'Quality on schedule.' },
    { icon: Target, title: 'Conversion-Focused', desc: 'Designs with ROI in mind.' },
    { icon: Headphones, title: 'Ongoing Support', desc: 'Iterations as you evolve.' },
];

const deliverables = [
    { icon: Figma, title: 'Design Files', desc: 'Organized Figma/Sketch files.' },
    { icon: Layers, title: 'Design System', desc: 'Reusable component library.' },
    { icon: MonitorSmartphone, title: 'Responsive', desc: 'All device breakpoints.' },
    { icon: FileCheck, title: 'Dev Specs', desc: 'Measurements and notes.' },
    { icon: Sparkles, title: 'Animations', desc: 'Micro-interaction guidelines.' },
    { icon: Users, title: 'Usability Report', desc: 'Testing recommendations.' },
];

const industries = ['SaaS', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'B2B Platforms', 'Mobile Apps', 'Startups'];

export default function UIUXDesignPage() {
    return (
        <>
            <main className={`${inter.className} bg-white`}>
                <ServiceDetailHero
                    tag="Design Services"
                    category="Services"
                    title="UI/UX Design"
                    subtitle="We blend aesthetics with functionality to create user-centric interfaces that drive engagement and achieve business goals."
                    icon={Palette}
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
                                    <Image src="/About-Us/why-choose-us-illustration.png" alt="UI/UX Design" width={500} height={400} className="rounded-xl w-full h-auto relative z-10" />
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
                                    <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.2em] text-xs uppercase`}>DESIGN EXCELLENCE</span>
                                </div>

                                <h2 className={`${redHat.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4`}>
                                    Design That{' '}
                                    <span className="bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent">
                                        Solves Problems & Delights Users
                                    </span>
                                </h2>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
                                    Great design isn't just aesthetics – it's solving complex challenges through empathy-driven thinking. We create interfaces that feel intuitive and guide users toward their goals.
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

                {/* Services Grid */}
                <section className="py-7 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#3C8ECB]" />
                                <span className={`${redHat.className} text-[#3C8ECB] font-bold tracking-[0.2em] text-xs uppercase`}>SERVICES</span>
                                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#3C8ECB]" />
                            </div>
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>Our Design Services</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {services.map((item, index) => {
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

                {/* Design Principles */}
                <section className="py-7 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ willChange: 'transform, opacity' }}>
                                <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4`}>
                                    Our Design{' '}
                                    <span className="bg-gradient-to-r from-[#3C8ECB] to-[#0055DF] bg-clip-text text-transparent">Philosophy</span>
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                    Great design happens at the intersection of user needs, business goals, and technical feasibility. Every pixel serves a purpose.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {principles.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-lg hover:shadow-[#3C8ECB]/5 transition-all duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.3 }}>
                                                <div className="w-10 h-10 bg-[#3C8ECB]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="w-5 h-5 text-[#3C8ECB]" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                                                    <div className="text-gray-500 text-xs">{item.desc}</div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ willChange: 'transform, opacity' }}>
                                <div className="absolute inset-0 bg-[#3C8ECB] opacity-15 blur-[60px] rounded-full" />
                                <Image src="/About-Us/Who We Are.png" alt="Design Philosophy" width={500} height={400} className="rounded-xl w-full h-auto relative z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Deliverables */}
                <section className="py-7 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>What You'll Receive</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {deliverables.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 group hover:border-[#3C8ECB]/30 hover:shadow-lg hover:shadow-[#3C8ECB]/5 transition-all duration-300 cursor-default" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                        <div className="w-12 h-12 bg-[#3C8ECB]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3C8ECB] group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-[#3C8ECB] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
                            <h2 className={`${redHat.className} text-2xl sm:text-3xl font-extrabold text-gray-900`}>Our Design Process</h2>
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
                                        <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">Design Excellence</span>
                                    </h2>

                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg border-l-2 border-white/10 pl-4">
                                        We combine creativity with strategic thinking to deliver designs that work.
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

                {/* Tools */}
                <section className="py-7 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div className="text-center mb-6 sm:mb-8" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                            <span className={`${redHat.className} text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider`}>Tools We Use</span>
                        </motion.div>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-6">
                            {tools.map((tool, index) => (
                                <motion.div key={index} className="flex flex-col items-center gap-2 sm:gap-3 group cursor-default" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.3 }}>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-50 rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center p-2 sm:p-3 border border-gray-100 group-hover:shadow-lg group-hover:shadow-[#3C8ECB]/10 group-hover:scale-110 transition-all duration-300">
                                        <Image src={tool.icon} alt={tool.name} width={48} height={48} className="object-contain w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                                    </div>
                                    <span className={`${inter.className} text-[10px] sm:text-xs lg:text-sm font-medium text-gray-600`}>{tool.name}</span>
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
                                "TechFleek's design team completely reimagined our UX. User engagement increased by 60% and app store ratings went from 3.2 to 4.8 stars!"
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <Image src="/Ecommerce/jane-dow.png" alt="Client" width={56} height={56} className="rounded-full" />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900">Lisa Thompson</div>
                                    <div className="text-gray-500 text-sm">Product Manager, FinTech</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <ServicePagination currentServiceSlug="ui-ux-design" />
                <ServiceDetailCTA title="Ready to Transform Your User Experience?" description="Let's create designs that your users will love." />
            </main>
        </>
    );
}
