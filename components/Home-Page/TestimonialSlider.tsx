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

const TestimonialSlider: React.FC = () => {
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
        const diff = (itemIndex - currentIndex + testimonials.length) % testimonials.length;
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
            <div className="w-full py-8 px-4 relative overflow-hidden bg-slate-50">
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-6">
                    <div className="mb-4">
                        <div className="w-10 h-1 mb-2 rounded-full bg-emerald-600"></div>
                        <h2 className="text-xl font-bold text-slate-800">Customer Reviews</h2>
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
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-emerald-100 shrink-0">
                                    <Image
                                        src={testimonials[currentIndex].userImage}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 leading-tight">{testimonials[currentIndex].name}</h4>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <Star className="w-3 h-3 fill-current text-emerald-600" />
                                        <span className="text-xs font-bold text-emerald-700">{testimonials[currentIndex].rating}</span>
                                        <span className="text-[10px] text-slate-400">on {testimonials[currentIndex].date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic leading-snug font-serif text-sm">
                                "{testimonials[currentIndex].text}"
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-1.5 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-200'
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
        <div className="w-full py-16 relative flex justify-center items-center overflow-hidden bg-[#F0F4F8]">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            {/* Main Floating Card */}
            <div className="relative z-10 w-full max-w-[1000px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden h-[480px] flex mx-6">

                {/* Inner Container */}
                <div className="w-full h-full p-12 relative flex flex-col justify-center">

                    {/* Header Section */}
                    <div className="absolute top-10 left-12 w-[calc(100%-6rem)] border-b border-slate-100 pb-4">
                        <div className={homeStyles.headerWrapper.replace('mb-8', '')}>
                            <span className={homeStyles.label}>
                                Testimonials
                            </span>
                            <h2 className={homeStyles.title}>
                                Customer <span className={homeStyles.gradientText}>Reviews</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex relative h-[320px] mt-16 items-center">

                        {/* Interactive Reviewer List with Arc */}
                        <div className="w-[350px] relative h-[300px] flex-shrink-0 select-none">

                            {/* The Connecting Arc SVG */}
                            <svg
                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                                style={{ transform: 'translateX(28px)' }}
                            >
                                <path
                                    d="M 20 45 C 80 100, 80 200, 20 255"
                                    stroke="#CBD5E1"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>

                            {testimonials.map((item, index) => {
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
                                                ? 'w-[80px] h-[80px] border-emerald-500 shadow-xl grayscale-0'
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
                                                        <div className="flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                                            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                                                            <span className="text-xs font-bold text-emerald-700">{item.rating}</span>
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
                                    <p className="text-[20px] leading-[1.8] text-slate-700 font-serif italic tracking-wide">
                                        <span className="text-[64px] float-left mr-3 mt-[-16px] leading-[0.8] font-serif italic text-emerald-800/80">O</span>
                                        {testimonials[currentIndex].text.substring(1)}
                                    </p>

                                    {/* Small signature line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 80 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-8 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full opacity-50"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;