'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import {
    Lato,
    Red_Hat_Display
} from "next/font/google";

// Font loading
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const redHat = Red_Hat_Display({ subsets: ["latin"], weight: ["700"] });

const testimonials = [
    {
        id: 1,
        name: 'Hannah Schmitt',
        role: 'Lead designer',
        userImage: '/About-Us/person1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
    },
    {
        id: 2,
        name: 'John Doe',
        role: 'Senior Developer',
        userImage: '/About-Us/person1.png',
        text: 'Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim. Suspendisse sed magna eget nibh in turpis. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
        id: 3,
        name: 'Jane Smith',
        role: 'Product Manager',
        userImage: '/About-Us/person1.png',
        text: 'Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
        id: 4,
        name: 'Michael Scott',
        role: 'Regional Manager',
        userImage: '/About-Us/person1.png',
        text: 'Faucibus venenatis felis id augue sit cursus pellentesque enim. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Duis aute irure dolor in reprehenderit.'
    }
];

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getCircularIndex = (idx: number) => {
        return (idx + testimonials.length) % testimonials.length;
    };

    // Derived indices for content mapping
    const leftContentIndex = getCircularIndex(currentIndex - 1);
    const centerContentIndex = getCircularIndex(currentIndex);
    const rightContentIndex = getCircularIndex(currentIndex + 1);

    // ============ MOBILE RENDER ============
    if (isMobile) {
        const currentTestimonial = testimonials[currentIndex];

        return (
            <div className="w-full bg-black py-8 px-4 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-6">
                    <h3
                        className={`${redHat.className} font-bold text-[12px] tracking-widest uppercase bg-gradient-to-r from-[#3C8ECB] to-[#1E4765] bg-clip-text text-transparent mb-2`}
                        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        See What Our Clients Say About Us
                    </h3>
                    <h2 className={`${lato.className} font-bold text-[20px] text-black`}>
                        What Our Clients Say About Us
                    </h2>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <button
                        onClick={handlePrev}
                        className="p-2 hover:scale-110 transition-transform"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-white hover:text-[#3C8ECB] transition-colors" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 hover:scale-110 transition-transform"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-white hover:text-[#3C8ECB] transition-colors" />
                    </button>
                </div>

                {/* Testimonial Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-[300px] aspect-[3/4] flex flex-col items-center"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/About-Us/review2.png"
                                alt="Background"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center text-center px-8 pt-16">
                            {/* Avatar */}
                            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <Image
                                    src={currentTestimonial.userImage}
                                    alt={currentTestimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Spacer */}
                            <div className="mt-12"></div>

                            {/* Name */}
                            <h4 className={`${lato.className} font-bold text-[16px] text-[#525252] mb-1`}>
                                {currentTestimonial.name}
                            </h4>

                            {/* Role */}
                            <p className={`${lato.className} text-[12px] text-[#525252] opacity-70 mb-3`}>
                                {currentTestimonial.role}
                            </p>

                            {/* Quote Icon */}
                            <Quote className="w-5 h-5 text-[#3C8ECB] fill-current opacity-80 mb-2" />

                            {/* Text */}
                            <p className={`${lato.className} text-[12px] text-[#525252] leading-relaxed line-clamp-5`}>
                                {currentTestimonial.text}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-300 rounded-full h-2 ${i === currentIndex
                                ? 'w-6 bg-[#3C8ECB]'
                                : 'w-2 bg-gray-400 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // ============ DESKTOP/TABLET RENDER ============
    return (
        <div className="w-full bg-black py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center relative overflow-hidden">
            {/* Header with Arrows */}
            <div className="text-center mb-6 md:mb-8 lg:mb-10 z-10 relative space-y-1 md:space-y-2">
                {/* Subheading */}
                <h3
                    className={`${redHat.className} font-bold text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] tracking-widest uppercase bg-gradient-to-r from-[#3C8ECB] to-[#1E4765] bg-clip-text text-transparent`}
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                    See What Our Clients Say About Us
                </h3>

                {/* Main Heading with Arrows */}
                <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    {/* Prev Arrow */}
                    <button
                        onClick={handlePrev}
                        className="p-2 cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white group-hover:text-[#3C8ECB] transition-colors" />
                    </button>

                    <h2 className={`${lato.className} font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[42px] text-white px-2`}>
                        What Our Clients Say About Us
                    </h2>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="p-2 cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white group-hover:text-[#3C8ECB] transition-colors" />
                    </button>
                </div>

                {/* Floating Decoration */}
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#1E4765] blur-[1px] mx-auto mt-2"></div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-[1400px] flex justify-center items-center px-4">

                {/* Static Grid Layout for Cards */}
                <div className="relative flex justify-center items-center gap-2 md:gap-4 lg:gap-6 h-[400px] md:h-[450px] lg:h-[520px] xl:h-[580px]">

                    {/* LEFT SLOT */}
                    <div className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500 w-[200px] md:w-[260px] lg:w-[340px] xl:w-[400px] h-[280px] md:h-[340px] lg:h-[420px] xl:h-[480px]">
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/About-Us/review1.png"
                                alt="Background Left"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Content Layer */}
                        <FadeContent
                            key={`left-${leftContentIndex}`}
                            content={testimonials[leftContentIndex]}
                            isCenter={false}
                        />
                    </div>

                    {/* CENTER SLOT */}
                    <div className="relative flex flex-col items-center justify-center z-20 -mt-4 md:-mt-6 lg:-mt-8 transition-all duration-500 w-[240px] md:w-[300px] lg:w-[380px] xl:w-[440px] h-[320px] md:h-[400px] lg:h-[480px] xl:h-[540px]">
                        <div className="absolute inset-0 w-full h-full drop-shadow-[0_20px_50px_rgba(60,142,203,0.15)]">
                            <Image
                                src="/About-Us/review2.png"
                                alt="Background Center"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Content Layer */}
                        <FadeContent
                            key={`center-${centerContentIndex}`}
                            content={testimonials[centerContentIndex]}
                            isCenter={true}
                        />
                    </div>

                    {/* RIGHT SLOT */}
                    <div className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500 w-[200px] md:w-[260px] lg:w-[340px] xl:w-[400px] h-[280px] md:h-[340px] lg:h-[420px] xl:h-[480px]">
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/About-Us/review3.png"
                                alt="Background Right"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Content Layer */}
                        <FadeContent
                            key={`right-${rightContentIndex}`}
                            content={testimonials[rightContentIndex]}
                            isCenter={false}
                        />
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-1 md:gap-1.5 lg:gap-2 mt-4 md:mt-6 lg:mt-8 z-20">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`transition-all duration-300 rounded-full h-1.5 md:h-2 lg:h-2.5 ${i === currentIndex
                            ? 'w-6 md:w-8 lg:w-10 bg-[#3C8ECB]'
                            : 'w-1.5 md:w-2 lg:w-2.5 bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Sub-component for animating content presence
const FadeContent = ({ content, isCenter }: { content: typeof testimonials[0], isCenter: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`relative z-10 w-full h-full flex flex-col items-center text-center 
                px-6 md:px-8 lg:px-10 xl:px-12
                ${isCenter ? 'pt-16 md:pt-20 lg:pt-24 xl:pt-28' : 'pt-14 md:pt-16 lg:pt-20 xl:pt-24 scale-95'}`}
        >
            {/* Avatar - Positioned to overlap the top edge */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0
                    ${isCenter
                        ? 'w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]'
                        : 'w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px] xl:w-[90px] xl:h-[90px]'
                    }`}
                style={{ top: '12%' }}
            >
                <Image
                    src={content.userImage}
                    alt={content.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Spacer for flow since avatar is absolute */}
            <div className={`${isCenter ? 'mt-6 md:mt-8 lg:mt-10' : 'mt-4 md:mt-6 lg:mt-8'}`}></div>

            {/* Name */}
            <h4
                className={`font-bold text-[#525252] mb-0.5 md:mb-1 font-[family-name:var(--font-lato)]
                    ${isCenter
                        ? 'text-[14px] md:text-[18px] lg:text-[22px] xl:text-[26px]'
                        : 'text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]'
                    }`}
            >
                {content.name}
            </h4>

            {/* Role */}
            <p
                className={`text-[#525252] opacity-70 font-[family-name:var(--font-lato)]
                    ${isCenter
                        ? 'text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] mb-2 md:mb-3 lg:mb-4'
                        : 'text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] mb-1 md:mb-2 lg:mb-3'
                    }`}
            >
                {content.role}
            </p>

            {/* Quote Icon - Only on center card */}
            {isCenter && (
                <div className="mb-1 md:mb-2 lg:mb-3">
                    <Quote className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-[#3C8ECB] fill-current opacity-80" />
                </div>
            )}

            {/* Testimonial Text */}
            <p
                className={`text-[#525252] leading-relaxed line-clamp-5 font-[family-name:var(--font-lato)]
                    ${isCenter
                        ? 'text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-normal'
                        : 'text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] opacity-90'
                    }`}
                style={{ lineHeight: '1.5' }}
            >
                {content.text}
            </p>
        </motion.div>
    );
}

export default TestimonialSlider;