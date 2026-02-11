'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { homeStyles } from './styles';

// Tech Stack Data
const techStackByCategory = {
    'Frontend': [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    ],
    'Mobile': [
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: '#FA7343' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: '#7F52FF' },
        { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: '#3DDC84' },
    ],
    'Backend': [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4' },
    ],
    'Database': [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
    ],
    'Cloud': [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
    ],
};

const allTechItems = Object.values(techStackByCategory).flat();

// Card Style based on amenities reference
const TechCard = ({ item }: { item: { name: string; icon: string; color: string } }) => (
    <div
        className="flex items-center gap-3 md:gap-4 bg-white border border-white rounded-2xl p-3 md:p-4 shadow-sm w-[200px] md:w-[280px] h-[75px] md:h-[90px] mx-auto select-none"
        style={{
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}
    >
        {/* Icon Box */}
        <div className="w-[50px] md:w-[70px] h-[45px] md:h-[60px] flex items-center justify-center bg-gray-50 rounded-xl flex-shrink-0">
            <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
            />
        </div>

        {/* Text */}
        <span className="font-['Sansation',sans-serif] text-slate-900 text-sm md:text-lg font-medium leading-tight">
            {item.name}
        </span>
    </div>
);

// Vertical Marquee Component
const VerticalMarquee = ({
    items,
    direction = 'up',
    speed = 20
}: {
    items: typeof allTechItems;
    direction?: 'up' | 'down';
    speed?: number;
}) => {
    // Duplicate enough times to fill height and loop smoothly
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="relative h-[450px] overflow-hidden pointer-events-none">
            {/* Gradient Fade Top/Bottom */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAF9F7] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F7] to-transparent z-10" />

            <motion.div
                className="flex flex-col gap-6"
                animate={{
                    y: direction === 'up' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
                }}
                transition={{
                    y: {
                        duration: speed,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <TechCard key={`${item.name}-${idx}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

interface TechStackProps {
    items?: { name: string; icon: string; color: string }[];
    title?: React.ReactNode;
    description?: string;
}

const TechStack: React.FC<TechStackProps> = ({
    items = allTechItems,
    title = <>All the Tech <br /><span className={homeStyles.gradientText}>You Need to Build</span></>,
    description = "Techfleek uses a premium stack to connect users with seamless experiences. Choose from modern frameworks, robust backends, and scalable cloud solutions."
}) => {
    // Split items for two columns
    const half = Math.ceil(items.length / 2);
    const col1Items = items.slice(0, half);
    const col2Items = items.slice(half);

    return (
        <section
            className="w-full overflow-hidden relative font-[family-name:var(--font-red-hat)]"
            style={{ backgroundColor: '#FAF9F7' }} // Requested BG
        >
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>
            <div className="py-6 md:py-8 lg:py-10">
                <div className={homeStyles.container}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Text Content */}
                        <div className="col-span-12 lg:col-span-5 relative z-20">
                            <div className="flex flex-col gap-6 text-left">
                                <div className={homeStyles.headerWrapper}>
                                    <span className={homeStyles.label}>
                                        04 — Tech Stack
                                    </span>
                                    <h2 className={homeStyles.title}>
                                        {title}
                                    </h2>
                                    <p className={homeStyles.description}>
                                        {description}
                                    </p>

                                    {/* Benefits List */}
                                    <div className="flex flex-col gap-3 mt-2">
                                        {[
                                            "Scalable Architecture for Future Growth",
                                            "High-Performance & Speed Optimization",
                                            "Enterprise-Grade Security Standards",
                                            "Cloud-Native & Serverless Solutions"
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3.5 h-3.5 text-[#3C8ECB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-700 font-medium text-base">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* Right Side: Skewed Columns */}
                        <div className="col-span-12 lg:col-span-7 relative">
                            {/* Rotation Wrapper */}
                            <div
                                className="transform rotate-[-6deg] scale-[0.85] md:scale-95 origin-left md:origin-center -ml-4 md:ml-0"
                                style={{
                                    // Optional: Add the specific matrix from provided CSS if desired, 
                                    // but rotate is cleaner for responsiveness.
                                    // transform: 'matrix(1, -0.08, 0.11, 0.99, 0, 0)' 
                                }}
                            >
                                <div className="grid grid-cols-2 gap-6 md:gap-8">
                                    {/* Column 1 - Down */}
                                    <div className="-mt-12">
                                        <VerticalMarquee items={col1Items} direction="down" speed={40} />
                                    </div>

                                    {/* Column 2 - Up */}
                                    <div className="">
                                        <VerticalMarquee items={col2Items} direction="up" speed={40} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;