'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Tech Stack with actual CDN icons
const techStackByCategory: Record<string, { name: string; icon: string; color: string }[]> = {
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
        { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', color: '#000000' },
    ],
    'Backend': [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4' },
        { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', color: '#CC342D' },
    ],
    'Database': [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098' },
    ],
    'Cloud': [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', color: '#000000' },
    ],
};

const categories = Object.keys(techStackByCategory);

// Glassmorphism Tech Item Component
const TechItem = ({ name, icon, color }: { name: string; icon: string; color: string }) => (
    <motion.div
        className="flex items-center gap-4 px-6 py-4 rounded-2xl flex-shrink-0 cursor-pointer"
        style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            minWidth: 'fit-content'
        }}
        whileHover={{
            scale: 1.04,
            y: -3,
            boxShadow: `0 12px 30px ${color}25, 0 4px 12px rgba(0, 0, 0, 0.08)`,
            border: `1px solid ${color}50`
        }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
        <div
            className="w-9 h-9 flex items-center justify-center rounded-xl p-1.5"
            style={{ background: `${color}15` }}
        >
            <img
                src={icon}
                alt={name}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="text-gray-800 font-semibold text-base whitespace-nowrap">{name}</span>
    </motion.div>
);

// Infinite Marquee Component
const InfiniteMarquee = ({
    items,
    direction = 'left',
    speed = 15
}: {
    items: { name: string; icon: string; color: string }[];
    direction?: 'left' | 'right';
    speed?: number;
}) => {
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden w-full py-3">
            {/* Gradient fade edges */}
            <div
                className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #e8eef7 0%, transparent 100%)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(270deg, #e8eef7 0%, transparent 100%)' }}
            />

            <motion.div
                className="flex gap-5"
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    x: {
                        duration: speed,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <TechItem key={`${item.name}-${index}`} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

const TechStack = () => {
    const fontRedHat = "font-[family-name:var(--font-red-hat)]";
    const [activeCategory, setActiveCategory] = useState<string>('Cloud');
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const getMarqueeItems = () => techStackByCategory[activeCategory] || techStackByCategory['Frontend'];
    const getAllItems = () => Object.values(techStackByCategory).flat();

    return (
        <section
            className={`w-full overflow-hidden relative ${fontRedHat}`}
            style={{
                padding: isMobile ? '0 16px' : isTablet ? '0 28px' : '0 clamp(40px, 5vw, 80px)',
                paddingTop: isMobile ? '50px' : isTablet ? '60px' : 'clamp(70px, 10vh, 100px)',
                paddingBottom: isMobile ? '50px' : isTablet ? '60px' : 'clamp(70px, 10vh, 100px)',
                background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)'
            }}
        >
            <motion.div
                className="w-full mx-auto relative"
                style={{ maxWidth: '1250px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Main Container */}
                <div
                    className="rounded-[2rem] overflow-hidden relative"
                    style={{
                        background: 'linear-gradient(135deg, #e8eef7 0%, #dde5f0 100%)',
                        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'url(/Home-Page/tech-stack-bg.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center right',
                            opacity: 0.7
                        }}
                    />

                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(232, 238, 247, 0.4) 0%, transparent 60%)'
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Header */}
                        <div
                            className="px-8 md:px-14 lg:px-20"
                            style={{
                                paddingTop: isMobile ? '48px' : isTablet ? '60px' : 'clamp(60px, 8vh, 90px)',
                                paddingBottom: isMobile ? '24px' : 'clamp(24px, 3vh, 40px)'
                            }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <Sparkles className="w-4 h-4 text-indigo-500" />
                                </motion.div>
                                <span
                                    className="text-gray-500 font-medium tracking-widest uppercase"
                                    style={{ fontSize: '11px', letterSpacing: '0.15em' }}
                                >
                                    04 — Tech Stack
                                </span>
                            </motion.div>

                            <motion.h2
                                className="font-bold"
                                style={{
                                    fontSize: isMobile ? '32px' : isTablet ? '42px' : 'clamp(46px, 5vw, 64px)',
                                    lineHeight: '1.05',
                                    color: '#1a1a2e',
                                    letterSpacing: '-0.02em'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                Technologies we
                                <br />
                                work with
                            </motion.h2>
                        </div>

                        {/* Background spacer */}
                        <div style={{ height: isMobile ? '60px' : isTablet ? '100px' : '140px' }} />

                        {/* Category Tabs */}
                        <motion.div
                            className="px-8 md:px-14 lg:px-20 pb-6"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                                        style={{
                                            fontSize: '14px',
                                            background: activeCategory === category
                                                ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                                                : 'rgba(255, 255, 255, 0.85)',
                                            backdropFilter: 'blur(8px)',
                                            color: activeCategory === category ? 'white' : '#4b5563',
                                            border: activeCategory === category
                                                ? '1px solid transparent'
                                                : '1px solid rgba(99, 102, 241, 0.15)',
                                            boxShadow: activeCategory === category
                                                ? '0 8px 25px rgba(99, 102, 241, 0.4)'
                                                : '0 2px 10px rgba(0, 0, 0, 0.04)'
                                        }}
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Marquee Section */}
                        <div className="pt-2 pb-10">
                            {/* Row 1 - Category specific */}
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <InfiniteMarquee
                                    items={getMarqueeItems()}
                                    direction="left"
                                    speed={12}
                                />
                            </motion.div>

                            {/* Row 2 - All items */}
                            <div className="mt-2">
                                <InfiniteMarquee
                                    items={getAllItems()}
                                    direction="right"
                                    speed={25}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default TechStack;