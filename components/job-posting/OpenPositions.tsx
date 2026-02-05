"use client";

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import { ChevronDown, ChevronUp } from 'lucide-react';
import JobApplicationModal from './JobApplicationModal';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

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
        tagBg: "#DBEAFE",
        tagText: "#1E40AF",
        overview: "We are looking for a highly skilled Senior Software Engineer to join our engineering team. In this role, you will lead the development of scalable, reliable, and high-performance software solutions that empower businesses worldwide. You will collaborate with cross-functional teams, mentor junior developers, and ensure best coding practices to deliver impactful products.",
        responsibilities: [
            "Design, build, and maintain large-scale software applications.",
            "Write clean, efficient, and reusable code using modern technologies (React, Node.js, Python, or similar).",
            "Develop APIs, integrate third-party services, and optimize backend systems.",
            "Collaborate closely with designers, product managers, and DevOps engineers.",
            "Conduct code reviews, provide mentorship, and enforce engineering standards.",
            "Debug, troubleshoot, and improve existing applications for performance and security.",
            "Stay updated with industry trends, tools, and frameworks to continuously improve development processes."
        ],
        requirements: [
            "Bachelor’s/Master’s degree in Computer Science, Engineering, or a related field.",
            "5+ years of professional experience in software development.",
            "Strong expertise in JavaScript/TypeScript, React, Node.js, or similar frameworks.",
            "Solid understanding of cloud infrastructure (AWS, GCP, or Azure).",
            "Experience with relational and NoSQL databases (MySQL, PostgreSQL, MongoDB).",
            "Knowledge of microservices architecture, containerization (Docker, Kubernetes).",
            "Strong problem-solving skills and ability to handle complex challenges.",
            "Excellent communication and leadership skills."
        ],
        niceToHave: [
            "Experience with CI/CD pipelines and DevOps practices.",
            "Knowledge of AI/ML integrations or data-intensive applications.",
            "Contributions to open-source projects."
        ],
        benefits: [
            "Competitive salary with performance-based incentives.",
            "Flexible working hours and remote work options.",
            "Health insurance and wellness programs.",
            "Paid time off, holidays, and generous leave policies.",
            "Professional development budget for certifications, workshops, and conferences.",
            "Opportunity to work with a global, diverse, and innovative team.",
            "A culture that values collaboration, innovation, and growth."
        ]
    },
    {
        id: 2,
        title: "UX/UI Designer",
        location: "Remote / New Delhi",
        type: "Design",
        date: "30d+",
        tagBg: "#F3E8FF",
        tagText: "#6B21A8",
        overview: "We are looking for a highly skilled UI/UX Designer to join our engineering team. In this role, you will lead the development of scalable, reliable, and high-performance software solutions that empower businesses worldwide. You will collaborate with cross-functional teams, mentor junior developers, and ensure best coding practices to deliver impactful products.",
        responsibilities: [
            "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.",
            "Facilitate the client’s product vision by researching, conceiving, sketching, prototyping and user-testing experiences for digital products.",
            "Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces.",
            "Identify design problems and devise elegant solutions.",
            "Make strategic design and user-experience decisions related to core, and new, functions and features.",
            "Take a user-centered design approach and rapidly test and iterate your designs.",
            "Collaborate with other team members and stakeholders."
        ],
        requirements: [
            "Three or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions for complete digital environments.",
            "Expertise in standard UX software such as Sketch, OmniGraffle, Axure, InVision, UXPin, Balsamiq, Framer, and the like is a must. Basic HTML5, CSS3, and JavaScript skills are a plus.",
            "Ability to work with clients to understand detailed requirements and design complete user experiences that meet client needs and vision.",
            "Extensive experience in using UX design best practices to design solutions, and a deep understanding of mobile-first and responsive design.",
            "A solid grasp of user-centered design (UCD), planning and conducting user research, user testing, A/B testing, rapid prototyping, heuristic analysis, usability and accessibility concerns.",
            "Ability to work effectively in a team setting including synthesizing abstract ideas into concrete design implications.",
            "Be passionate about resolving user pain points through great design."
        ],
        niceToHave: [],
        benefits: []
    },
    {
        id: 3,
        title: "Frontend Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagBg: "#DBEAFE",
        tagText: "#1E40AF",
        overview: "We are looking for a highly skilled Frontend Engineer to join our engineering team. In this role, you will lead the development of scalable, reliable, and high-performance software solutions that empower businesses worldwide.",
        responsibilities: ["Develop new user-facing features.", "Build reusable code and libraries for future use.", "Ensure the technical feasibility of UI/UX designs."],
        requirements: ["Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.", "Thorough understanding of React.js and its core principles."],
        niceToHave: [],
        benefits: []
    },
    {
        id: 4,
        title: "Product Manager",
        location: "Remote / New Delhi",
        type: "Product",
        date: "30d+",
        tagBg: "#DCFCE7",
        tagText: "#166534",
        overview: "We are looking for a highly skilled Product Manager to join our team. In this role, you will lead the development of scalable products software solutions that empower businesses worldwide.",
        responsibilities: ["Define the product strategy and roadmap.", "Deliver MRDs and PRDs with prioritized features and corresponding justification.", "Run beta and pilot programs with early-stage products and samples."],
        requirements: ["Strong problem solving skills.", "Excellent written and verbal communication skills."],
        niceToHave: [],
        benefits: []
    },
    {
        id: 5,
        title: "Digital Marketing Specialist",
        location: "Remote / New Delhi",
        type: "Marketing",
        date: "30d+",
        tagBg: "#FFEDD5",
        tagText: "#9A3412",
        overview: "We are looking for a highly skilled Digital Marketing Specialist to join our team. In this role, you will lead the marketing strategies that empower businesses worldwide.",
        responsibilities: ["Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns.", "Design, build and maintain our social media presence."],
        requirements: ["BS/MS degree in marketing or a related field.", "Proven working experience in digital marketing."],
        niceToHave: [],
        benefits: []
    },
    {
        id: 6,
        title: "DevOps Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagBg: "#DBEAFE",
        tagText: "#1E40AF",
        overview: "We are looking for a highly skilled DevOps Engineer to join our team.",
        responsibilities: ["Implement integrations requested by customers.", "Deploy updates and fixes.", "Build tools to reduce occurrences of errors and improve customer experience."],
        requirements: ["Experience as a DevOps Engineer or similar software engineering role.", "Proficiency with git and git workflows."],
        niceToHave: [],
        benefits: []
    },
    {
        id: 7,
        title: "UX/UI Resercher",
        location: "Remote / New Delhi",
        type: "Design",
        date: "30d+",
        tagBg: "#F3E8FF",
        tagText: "#6B21A8",
        overview: "We are looking for a highly skilled UX/UI Researcher to join our team.",
        responsibilities: ["Conduct user research and testing.", "Develop wireframes and task flows based on user needs.", "Collaborate with Designers and Developers to create intuitive, user-friendly software."],
        requirements: ["Proven experience as a UX Researcher or UI/UX Designer.", "Strong portfolio of design projects."],
        niceToHave: [],
        benefits: []
    },
    {
        id: 8,
        title: "Backend Engineer",
        location: "Remote / New Delhi",
        type: "Engineering",
        date: "30d+",
        tagBg: "#DBEAFE",
        tagText: "#1E40AF",
        overview: "We are looking for a highly skilled Backend Engineer to join our team.",
        responsibilities: ["Integration of user-facing elements developed by front-end developers with server side logic.", "Building reusable code and libraries for future use.", "Optimization of the application for maximum speed and scalability."],
        requirements: ["Basic understanding of front-end technologies and platforms, such as JavaScript, HTML5, and CSS3.", "User authentication and authorization between multiple systems, servers, and environments."],
        niceToHave: [],
        benefits: []
    }
];

export default function OpenPositions() {
    const [activeCategory, setActiveCategory] = useState("All Departments");
    const [selectedJobId, setSelectedJobId] = useState<number | null>(1); // Default activejob
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredJobs = activeCategory === "All Departments"
        ? jobs
        : jobs.filter(job => job.type === activeCategory);

    const activeJob = jobs.find(j => j.id === selectedJobId);

    const handleJobClick = (id: number) => {
        setSelectedJobId(id);
        setIsExpanded(false); // Reset expansion on job change
    };

    const handleApplyClick = () => {
        setIsModalOpen(true);
    };

    return (
        <section id="open-positions" className="w-full flex flex-col items-center bg-white py-5 sm:py-5 lg:py-5">
            {/* Header */}
            <div className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-14 px-4 text-center">
                <span
                    className={`${inter.className} font-bold text-[24px] sm:text-[24px] lg:text-[24px] leading-[1.2] mb-2`}
                    style={{
                        background: 'linear-gradient(90deg, #3C8ECB 0%, #000000 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    See What We Offer
                </span>

                <h2 className={`${inter.className} font-bold text-[28px] sm:text-[30px] lg:text-[30px] leading-[1.1] text-black mb-3 sm:mb-4`}>
                    Open Positions
                </h2>

                <p className={`${inter.className} font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.5] text-[#4B5563] max-w-[600px]`}>
                    Find your perfect role and join our growing team of talented professionals.
                </p>
            </div>

            {/* Filter Buttons - Horizontal scroll on mobile */}
            <div className="w-full max-w-[1232px] px-4 mb-8 sm:mb-12 lg:mb-14 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 sm:gap-4 justify-start sm:justify-center min-w-max sm:min-w-0 sm:flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${inter.className} font-medium text-[13px] sm:text-[14px] lg:text-[16px] transition-all duration-300 px-4 sm:px-6 h-[40px] sm:h-[44px] rounded-[8px] flex items-center justify-center border whitespace-nowrap ${activeCategory === category
                                ? 'border-[#3C8ECB] border-2 text-[#3C8ECB]'
                                : 'border-[#D1D5DB] text-[#4B5563] hover:shadow-[0_0_15px_rgba(60,142,203,0.5)] hover:border-[#3C8ECB] hover:text-[#3C8ECB]'
                                }`}
                            style={{ backgroundColor: 'white' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-[1232px] px-4 flex flex-col lg:flex-row gap-[24px] items-start">

                {/* Left Side: Job List */}
                <div className="w-full lg:w-[526px] flex flex-col gap-[16px] pb-24">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="flex flex-col w-full">
                            <div
                                onClick={() => handleJobClick(job.id)}
                                className={`group relative w-full min-h-[96px] py-4 rounded-[12px] border transition-all duration-300 cursor-pointer flex flex-col justify-center px-[24px]
                                    ${selectedJobId === job.id
                                        ? 'bg-white border-transparent'
                                        : 'bg-[#F9FAFB] border-[#E5E7EB] hover:bg-white hover:border-[#3C8ECB] hover:shadow-md'
                                    }
                                `}
                                style={{
                                    boxShadow: selectedJobId === job.id ? '0px 4px 28px rgba(152, 200, 90, 0.6)' : undefined
                                }}
                            >
                                {/* Top Row: Title & Tag */}
                                <div className="flex justify-between items-start mb-1 text-wrap">
                                    <h3 className={`${inter.className} font-semibold text-[16px] leading-[20px] text-[#111827] pr-2`}>
                                        {job.title}
                                    </h3>
                                    <span
                                        className={`${inter.className} text-[10px] sm:text-[12px] font-medium px-2 sm:px-3 py-1 rounded-full whitespace-nowrap`}
                                        style={{ backgroundColor: job.tagBg, color: job.tagText }}
                                    >
                                        {job.type}
                                    </span>
                                </div>

                                {/* Bottom Row: Location & Date */}
                                <div className="flex justify-between items-center mt-1">
                                    <p className={`${inter.className} font-normal text-[14px] leading-[20px] text-[#3C8ECB]`}>
                                        {job.location}
                                    </p>
                                    <p className={`${inter.className} font-normal text-[12px] leading-[20px] text-[#4B5563]`}>
                                        {job.date}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Accordion Details */}
                            {selectedJobId === job.id && (
                                <div className="lg:hidden mt-2 p-5 bg-white border border-[#3C8ECB] rounded-[12px] animate-in slide-in-from-top-2 duration-300 shadow-sm">
                                    <div className="mb-4">
                                        <h4 className={`${inter.className} font-bold text-[16px] text-[#111827] mb-2`}>Position Overview</h4>
                                        <p className={`${inter.className} text-[14px] leading-[22px] text-[#4B5563]`}>{job.overview}</p>
                                    </div>

                                    <button
                                        onClick={handleApplyClick}
                                        className="w-full bg-[#3C8ECB] text-white py-3 rounded-[8px] font-semibold text-[14px] hover:bg-[#2A75A8] transition-colors"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side: Details Panel */}
                <div
                    className={`hidden lg:flex flex-col flex-1 bg-white border border-[#3C8ECB] rounded-[12px] relative transition-all duration-300 ease-in-out overflow-hidden`}
                    style={{
                        height: isExpanded
                            ? `${Math.max(373, filteredJobs.length * 112 - 16)}px`
                            : '373px'
                    }}
                >
                    {activeJob && (
                        <div className="flex flex-col h-full">
                            {/* Job Details Header */}
                            <div className="mb-6 flex-shrink-0 pt-[32px] px-[32px]">
                                <h2 className={`${inter.className} font-bold text-[24px] leading-[29px] text-[#111827] mb-2`}>
                                    {activeJob.title}
                                </h2>
                                <div className="flex items-center gap-2 text-[16px] font-normal">
                                    <span className="text-[#3C8ECB]">{activeJob.location}</span>
                                    <span className="text-[#D1D5DB]">|</span>
                                    <span className="text-[#4B5563]">Full-Time</span>
                                </div>
                            </div>

                            <div className="h-[1px] bg-[#E5E7EB] mb-6 flex-shrink-0 mx-[32px]"></div>

                            {/* Content Area */}
                            <div className="flex-grow overflow-y-auto custom-scrollbar px-[32px]">
                                <div className="mb-6">
                                    <h3 className={`${inter.className} font-bold text-[18px] leading-[22px] text-[#111827] mb-3`}>
                                        Position Overview
                                    </h3>
                                    <p className={`${inter.className} font-normal text-[16px] leading-[26px] text-[#4B5563]`}>
                                        {activeJob.overview}
                                    </p>
                                </div>

                                {/* Render details unconditionally, visibility controlled by parent height/overflow */}
                                {activeJob.responsibilities && activeJob.responsibilities.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className={`${inter.className} font-bold text-[18px] leading-[22px] text-[#111827] mb-3`}>
                                            Key Responsibilities
                                        </h3>
                                        <ul className="list-disc pl-5 text-[#4B5563] space-y-2">
                                            {activeJob.responsibilities.map((item, idx) => (
                                                <li key={idx} className={`${inter.className} text-[16px] leading-[26px]`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeJob.requirements && activeJob.requirements.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className={`${inter.className} font-bold text-[18px] leading-[22px] text-[#111827] mb-3`}>
                                            Requirements
                                        </h3>
                                        <ul className="list-disc pl-5 text-[#4B5563] space-y-2">
                                            {activeJob.requirements.map((item, idx) => (
                                                <li key={idx} className={`${inter.className} text-[16px] leading-[26px]`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeJob.niceToHave && activeJob.niceToHave.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className={`${inter.className} font-bold text-[18px] leading-[22px] text-[#111827] mb-3`}>
                                            Nice to Have
                                        </h3>
                                        <ul className="list-disc pl-5 text-[#4B5563] space-y-2">
                                            {activeJob.niceToHave.map((item, idx) => (
                                                <li key={idx} className={`${inter.className} text-[16px] leading-[26px]`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeJob.benefits && activeJob.benefits.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className={`${inter.className} font-bold text-[18px] leading-[22px] text-[#111827] mb-3`}>
                                            Benefits & Perks
                                        </h3>
                                        <ul className="list-disc pl-5 text-[#4B5563] space-y-2">
                                            {activeJob.benefits.map((item, idx) => (
                                                <li key={idx} className={`${inter.className} text-[16px] leading-[26px]`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-auto pt-4 pb-[32px] px-[32px] border-t border-[#E5E7EB] flex-shrink-0 flex justify-between items-center bg-white">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="flex items-center gap-1 text-[#3C8ECB] font-semibold text-[16px] hover:underline"
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>

                                <button
                                    onClick={handleApplyClick}
                                    className="bg-[#3C8ECB] text-white px-6 py-2 rounded-[8px] font-medium hover:bg-[#2A75A8] transition-colors"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    )}
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
