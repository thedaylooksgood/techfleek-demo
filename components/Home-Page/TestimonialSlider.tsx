'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { homeStyles } from './styles';

const testimonials = [
    {
        id: 1,
        name: 'Edward Alexander',
        rating: 4.9,
        date: '29 Aug, 2017',
        userImage: '/About-Us/person1.png',
        text: 'Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.'
    },
    {
        id: 2,
        name: 'Diana Johnston',
        rating: 4.9,
        date: '29 Aug, 2017',
        userImage: '/About-Us/person1.png',
        text: 'Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.'
    },
    {
        id: 3,
        name: 'Lauren Contreras',
        rating: 4.9,
        date: '29 Aug, 2017',
        userImage: '/About-Us/person1.png',
        text: 'Overall pleasurable experience. Pay a little first and Pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and Easy process.'
    }
];

export interface Testimonial {
    id: number;
    name: string;
    rating: number;
    date: string;
    userImage: string;
    text: string;
}

interface TestimonialSliderProps {
    title?: string;
    subtitle?: string;
    data?: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
    title = "Customer",
    subtitle = "Reviews",
    data = testimonials
}) => {
    const activeTestimonials = data;
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleAvatarClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Calculate position index relative to current index for the carousel
    // 0 = Top, 1 = Middle (Active), 2 = Bottom
    const getPositionIndex = (itemIndex: number) => {
        const diff = (itemIndex - currentIndex + activeTestimonials.length) % activeTestimonials.length;
        // Map standard diff to our visual slots:
        // diff 0 -> Middle (Active) -> Visual Index 1
        // diff 1 -> Bottom (Next) -> Visual Index 2
        // diff 2 (or -1) -> Top (Prev) -> Visual Index 0
        if (diff === 0) return 1;
        if (diff === 1) return 2;
        return 0;
    };

    const variants = {
        0: { top: 20, left: 20, scale: 0.85, opacity: 0.6, zIndex: 10 },
        1: { top: 120, left: 70, scale: 1.1, opacity: 1, zIndex: 30 },
        2: { top: 220, left: 20, scale: 0.85, opacity: 0.6, zIndex: 10 }
    };

    // --- MOBILE RENDER ---
    if (isMobile) {
        return (
            <div className="w-full py-12 px-4 relative overflow-hidden bg-white">
                {/* Grid Background */}
                <div className="absolute inset-0 pointer-events-none"
                    style={homeStyles.gridBackgroundStyle}>
                </div>

                <div className="relative z-10 p-0">
                    <div className="mb-6">
                        <span className={homeStyles.label}>
                            Testimonials
                        </span>
                        <h2 className={`${homeStyles.title} mt-2`}>
                            {title} <span className={homeStyles.gradientText}>{subtitle}</span>
                        </h2>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-100 shrink-0">
                                    <Image
                                        src={activeTestimonials[currentIndex].userImage}
                                        alt={activeTestimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 leading-tight">{activeTestimonials[currentIndex].name}</h4>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <Star className="w-3 h-3 fill-current text-[#3C8ECB]" />
                                        <span className="text-xs font-bold text-blue-700">{activeTestimonials[currentIndex].rating}</span>
                                        <span className="text-[10px] text-slate-400">on {activeTestimonials[currentIndex].date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic leading-snug font-serif text-sm">
                                "{activeTestimonials[currentIndex].text}"
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-1.5 mt-6">
                        {activeTestimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-[#3C8ECB]' : 'w-1.5 bg-slate-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // --- DESKTOP RENDER ---
    return (
        <section className="w-full py-20 relative flex justify-center items-center overflow-hidden bg-white">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <div className={homeStyles.container}>
                {/* Header Section */}
                <div className={homeStyles.headerWrapper}>
                    <span className={homeStyles.label}>
                        Testimonials
                    </span>
                    <h2 className={homeStyles.title}>
                        {title} <span className={homeStyles.gradientText}>{subtitle}</span>
                    </h2>
                </div>

                <div className="flex relative items-center gap-12 mt-8">

                    {/* Interactive Reviewer List with Arc */}
                    <div className="w-[350px] relative h-[300px] flex-shrink-0 select-none">

                        {/* The Connecting Arc SVG */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                            style={{ transform: 'translateX(28px)' }}
                        >
                            <path
                                d="M 20 45 C 80 100, 80 200, 20 255"
                                stroke="#E2E8F0"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        </svg>

                        {activeTestimonials.map((item, index) => {
                            const posIndex = getPositionIndex(index);
                            const isSelected = posIndex === 1;

                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute cursor-pointer flex items-center gap-4"
                                    initial={false}
                                    animate={variants[posIndex as keyof typeof variants]}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 25
                                    }}
                                    onClick={() => handleAvatarClick(index)}
                                >
                                    {/* Avatar Container */}
                                    <div
                                        className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 ${isSelected
                                            ? 'w-[80px] h-[80px] border-[#3C8ECB] shadow-xl grayscale-0'
                                            : 'w-[56px] h-[56px] border-transparent shadow-sm grayscale hover:grayscale-0'
                                            }`}
                                    >
                                        <Image
                                            src={item.userImage}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Labels */}
                                    <motion.div
                                        className="origin-left"
                                        animate={{
                                            opacity: isSelected ? 1 : 0.6,
                                            scale: isSelected ? 1 : 0.9,
                                            x: isSelected ? 0 : -10
                                        }}
                                    >
                                        <h4 className={`font-bold text-slate-800 leading-tight ${isSelected ? 'text-[18px]' : 'text-[14px]'}`}>
                                            {item.name}
                                        </h4>

                                        <AnimatePresence>
                                            {isSelected && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="flex items-center gap-2 mt-1 overflow-hidden"
                                                >
                                                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                                                        <Star className="w-3.5 h-3.5 fill-[#3C8ECB] text-[#3C8ECB]" />
                                                        <span className="text-xs font-bold text-blue-700">{item.rating}</span>
                                                    </div>
                                                    <span className="text-[11px] text-slate-400 font-medium">
                                                        {item.date}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Content: The Quote */}
                    <div className="flex-1 pl-6 pr-8 relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -top-10 -left-4 text-[120px] leading-none text-slate-200 font-serif select-none pointer-events-none">
                            “
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative z-10 pt-4"
                            >
                                <p className="text-[20px] lg:text-[24px] leading-[1.8] text-slate-700 font-serif italic tracking-wide">
                                    <span className="text-[72px] float-left mr-4 mt-[-18px] leading-[0.8] font-serif italic text-blue-800/80">O</span>
                                    {activeTestimonials[currentIndex].text.substring(1)}
                                </p>

                                {/* Small signature line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 80 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-8 h-1 bg-gradient-to-r from-[#3C8ECB] to-transparent rounded-full opacity-50"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;