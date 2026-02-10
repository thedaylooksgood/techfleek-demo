"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Clock, Briefcase } from 'lucide-react';
import { homeStyles } from '../Home-Page/styles';
import JobApplicationModal from './JobApplicationModal';

const categories = [
    "All Departments",
    "Engineering",
    "Design",
    "Product",
    "Marketing"
];

const jobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        location: "Remote / Delhi",
        type: "Engineering",
        date: "30d+",
        tagColor: "#3C8ECB",
        overview: "We are looking for a highly skilled Senior Software Engineer to join our engineering team. In this role, you will lead the development of scalable, reliable, and high-performance software solutions that empower businesses worldwide.",
        responsibilities: [
            "Design, build, and maintain large-scale software applications.",
            "Write clean, efficient, and reusable code using modern technologies.",
            "Develop APIs, integrate third-party services, and optimize backend systems.",
            "Collaborate closely with designers, product managers, and DevOps engineers.",
            "Conduct code reviews, provide mentorship, and enforce engineering standards."
        ],
        requirements: [
            "Bachelor's/Master's degree in Computer Science or related field.",
            "5+ years of professional experience in software development.",
            "Strong expertise in JavaScript/TypeScript, React, Node.js.",
            "Solid understanding of cloud infrastructure (AWS, GCP, or Azure).",
            "Experience with relational and NoSQL databases."
        ],
        benefits: [
            "Competitive salary with performance-based incentives.",
            "Flexible working hours and remote work options.",
            "Health insurance and wellness programs.",
            "Professional development budget."
        ]
    },
    {
        id: 2,
        title: "UX/UI Designer",
        location: "Remote / New Delhi",
        type: "Design",
        date: "30d+",
        tagColor: "#8B5CF6",
        overview: "We are looking for a highly skilled UI/UX Designer to create intuitive, user-centered designs that delight users and drive business results.",
        responsibilities: [
            "Translate concepts into user flows, wireframes, and prototypes.",
            "Conduct user research and usability testing.",
            "Design and deliver mockups optimized for various devices.",
            "Collaborate with developers to ensure design feasibility."
        ],
        requirements: [
            "3+ years of UX design experience.",
            "Expertise in Figma, Sketch, or similar design tools.",
            "Strong portfolio demonstrating design process and solutions.",
            "Understanding of mobile-first and responsive design."
        ],
        benefits: []
    },
    {
        id: 3,
        title: "Frontend Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagColor: "#3C8ECB",
        overview: "We are looking for a Frontend Engineer to build beautiful, performant user interfaces.",
        responsibilities: ["Develop new user-facing features.", "Build reusable components.", "Ensure technical feasibility of UI/UX designs."],
        requirements: ["Strong proficiency in JavaScript and React.js.", "Understanding of responsive design principles."],
        benefits: []
    },
    {
        id: 4,
        title: "Product Manager",
        location: "Remote / New Delhi",
        type: "Product",
        date: "30d+",
        tagColor: "#10B981",
        overview: "We are looking for a Product Manager to own the product roadmap and drive feature development.",
        responsibilities: ["Define product strategy and roadmap.", "Deliver PRDs with prioritized features.", "Work with engineering and design teams."],
        requirements: ["Strong problem solving skills.", "Excellent communication skills."],
        benefits: []
    },
    {
        id: 5,
        title: "Digital Marketing Specialist",
        location: "Remote / New Delhi",
        type: "Marketing",
        date: "30d+",
        tagColor: "#F59E0B",
        overview: "We are looking for a Digital Marketing Specialist to drive our marketing strategies.",
        responsibilities: ["Plan and execute digital marketing campaigns.", "Manage social media presence."],
        requirements: ["Proven experience in digital marketing.", "Knowledge of SEO/SEM."],
        benefits: []
    },
    {
        id: 6,
        title: "DevOps Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagColor: "#3C8ECB",
        overview: "We are looking for a DevOps Engineer to build and maintain our infrastructure.",
        responsibilities: ["Implement integrations.", "Deploy updates and fixes.", "Build tools to improve developer experience."],
        requirements: ["Experience as a DevOps Engineer.", "Proficiency with git and CI/CD."],
        benefits: []
    },
    {
        id: 7,
        title: "UX Researcher",
        location: "Remote / New Delhi",
        type: "Design",
        date: "30d+",
        tagColor: "#8B5CF6",
        overview: "We are looking for a UX Researcher to conduct user research and inform product decisions.",
        responsibilities: ["Conduct user research and testing.", "Develop insights based on user needs.", "Collaborate with design and product teams."],
        requirements: ["Proven experience as a UX Researcher.", "Strong portfolio of research projects."],
        benefits: []
    },
    {
        id: 8,
        title: "Backend Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagColor: "#3C8ECB",
        overview: "We are looking for a Backend Engineer to build scalable server-side applications.",
        responsibilities: ["Build server-side logic.", "Create reusable code and libraries.", "Optimize for performance and scalability."],
        requirements: ["Understanding of front-end technologies.", "Experience with user authentication systems."],
        benefits: []
    }
];

export default function OpenPositions() {
    const [activeCategory, setActiveCategory] = useState("All Departments");
    const [selectedJobId, setSelectedJobId] = useState<number | null>(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredJobs = activeCategory === "All Departments"
        ? jobs
        : jobs.filter(job => job.type === activeCategory);

    const activeJob = jobs.find(j => j.id === selectedJobId);

    const handleJobClick = (id: number) => {
        setSelectedJobId(id);
        setIsExpanded(false);
    };

    return (
        <section id="open-positions" className="w-full bg-slate-50 font-[family-name:var(--font-red-hat)] py-12 md:py-16">
            <div className={homeStyles.container}>
                {/* Section Header */}
                <motion.div
                    className="w-full mb-0 border-b border-slate-100 pb-2 flex flex-col gap-2 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className={homeStyles.label}>
                        OPPORTUNITIES
                    </span>
                    <h2 className={homeStyles.title}>
                        Open <span className={homeStyles.gradientText}>Positions</span>
                    </h2>
                    <p className={homeStyles.description}>
                        Find your perfect role and join our growing team of talented professionals.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex overflow-x-auto sm:flex-wrap gap-3 mb-2 sm:justify-center p-2 scrollbar-hide snap-x">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`flex-shrink-0 snap-start whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                ? 'bg-[#3C8ECB] text-white shadow-md transform scale-105'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#3C8ECB] hover:text-[#3C8ECB]'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Job Listings Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* Left: Job Cards */}
                    <div className="flex flex-col gap-3">
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                onClick={() => handleJobClick(job.id)}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -2 }}
                                className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${selectedJobId === job.id
                                    ? 'bg-white border-[#3C8ECB] shadow-lg shadow-[#3C8ECB]/20'
                                    : 'bg-white border-slate-100 hover:border-[#3C8ECB]/50 hover:shadow-md'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-900 text-base">
                                        {job.title}
                                    </h3>
                                    <span
                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                        style={{ backgroundColor: `${job.tagColor}15`, color: job.tagColor }}
                                    >
                                        {job.type}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {job.date}
                                    </span>
                                </div>

                                {/* Mobile: Show details inline */}
                                {selectedJobId === job.id && (
                                    <div className="lg:hidden mt-4 pt-4 border-t border-slate-100">
                                        <p className="text-sm text-slate-600 mb-4">{job.overview}</p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                                            className="w-full bg-[#3C8ECB] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#3C8ECB]/90 transition-colors"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Job Details Panel (Desktop) */}
                    <div className="hidden lg:block sticky top-24">
                        {activeJob && (
                            <motion.div
                                key={activeJob.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl border border-[#3C8ECB]/30 shadow-lg overflow-hidden"
                            >
                                {/* Header */}
                                <div className="p-6 border-b border-slate-100">
                                    <h2 className="font-bold text-slate-900 text-xl mb-2">
                                        {activeJob.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1.5 text-[#3C8ECB]">
                                            <MapPin className="w-4 h-4" />
                                            {activeJob.location}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Briefcase className="w-4 h-4" />
                                            Full-Time
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`p-6 ${isExpanded ? 'max-h-[600px]' : 'max-h-[300px]'} overflow-y-auto transition-all duration-300`}>
                                    <div className="mb-5">
                                        <h3 className="font-bold text-slate-900 text-sm mb-2">Overview</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{activeJob.overview}</p>
                                    </div>

                                    {activeJob.responsibilities.length > 0 && (
                                        <div className="mb-5">
                                            <h3 className="font-bold text-slate-900 text-sm mb-2">Responsibilities</h3>
                                            <ul className="space-y-1.5">
                                                {activeJob.responsibilities.map((item, idx) => (
                                                    <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3C8ECB] mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeJob.requirements.length > 0 && (
                                        <div className="mb-5">
                                            <h3 className="font-bold text-slate-900 text-sm mb-2">Requirements</h3>
                                            <ul className="space-y-1.5">
                                                {activeJob.requirements.map((item, idx) => (
                                                    <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3C8ECB] mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeJob.benefits && activeJob.benefits.length > 0 && (
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm mb-2">Benefits</h3>
                                            <ul className="space-y-1.5">
                                                {activeJob.benefits.map((item, idx) => (
                                                    <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50">
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="flex items-center gap-1 text-[#3C8ECB] font-semibold text-sm hover:underline"
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-2.5 bg-[#3C8ECB] text-white rounded-lg font-semibold text-sm hover:bg-[#3C8ECB]/90 transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <JobApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={activeJob?.title}
                availableJobs={jobs}
            />
        </section>
    );
}
