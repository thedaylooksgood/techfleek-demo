'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

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

    return (
        <div className="w-full bg-white py-[8vw] flex flex-col items-center relative overflow-hidden">
            {/* Header with Arrows */}
            <div className="text-center mb-[2vw] z-10 relative space-y-[0.5vw]">
                {/* Subheading */}
                <h3 className="font-bold tracking-widest uppercase"
                    style={{
                        fontSize: '1vw',
                        background: 'linear-gradient(90deg, #3C8ECB 0%, #1E4765 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'var(--font-red-hat)'
                    }}>
                    See What Our Clients Say About Us
                </h3>

                {/* Main Heading with Arrows */}
                <div className="flex items-center justify-center gap-[2vw]">
                    {/* Prev Arrow */}
                    <button
                        onClick={handlePrev}
                        className="p-2 cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="text-black group-hover:text-[#3C8ECB] transition-colors" style={{ width: '2.5vw', height: '2.5vw' }} />
                    </button>

                    <h2 className="font-bold text-black px-[1vw]" style={{ fontSize: '3vw', fontFamily: 'var(--font-lato)' }}>
                        What Our Clients Say About Us
                    </h2>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="p-2 cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="text-black group-hover:text-[#3C8ECB] transition-colors" style={{ width: '2.5vw', height: '2.5vw' }} />
                    </button>
                </div>

                {/* Floating Decoration */}
                <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-[#1E4765] blur-[1px] mx-auto mt-[0.5vw]"></div>
            </div>

            {/* Slider Container - Removed Arrows from here */}
            <div className="relative w-full max-w-[95vw] flex justify-center items-center px-[0vw]">

                {/* Static Grid Layout for Cards */}
                {/* Increased Height container */}
                <div className="relative flex justify-center items-center gap-[1vw] h-[40vw]">
                    {/* LEFT SLOT */}
                    {/* Increased width to stretch */}
                    <div className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500" style={{ width: '28vw', height: '30vw' }}>
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
                    <div className="relative flex flex-col items-center justify-center z-20 -mt-[3vw] transition-all duration-500" style={{ width: '30vw', height: '36vw' }}>
                        <div className="absolute inset-0 w-full h-full drop-shadow-[0_1.5vw_3.5vw_rgba(60,142,203,0.15)]">
                            <Image
                                src="/About-Us/review2.png" // The "Center" shape from design
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
                    {/* Increased width to stretch */}
                    <div className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500" style={{ width: '28vw', height: '30vw' }}>
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
            <div className="flex gap-[0.5vw] mt-[0w] z-20">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`transition-all duration-300 rounded-full h-[0.4vw] ${i === currentIndex ? 'w-[2vw] bg-[#3C8ECB]' : 'w-[0.5vw] bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Sub-component for animating content presence
const FadeContent = ({ content, isCenter }: { content: any, isCenter: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: '1vw' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-1vw' }}
            transition={{ duration: 0.4 }}
            // Adjusted padding to keep text safe within the organic shapes
            className={`relative z-10 w-full h-full flex flex-col items-center text-center px-[4vw] ${isCenter ? 'pt-[6vw]' : 'pt-[5vw] scale-95'}`}
        >
            {/* Avatar - Positioned to overlap the top edge */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-[0.2vw] border-white shadow-lg shrink-0`}
                style={{
                    top: '12%',
                    width: isCenter ? '8vw' : '6vw',
                    height: isCenter ? '8vw' : '6vw'
                }}
            >
                <Image
                    src={content.userImage}
                    alt={content.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Spacer for flow since avatar is absolute */}
            <div style={{ marginTop: isCenter ? '2.5vw' : '1.5vw' }}></div>

            {/* Text */}
            <h4
                className={`font-bold text-[#525252] mb-[0.2vw]`}
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? '1.8vw' : '1.4vw' // Increased font size
                }}
            >
                {content.name}
            </h4>
            <p
                className="text-[#525252] mb-[1vw] opacity-70"
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? '1.1vw' : '0.9vw' // Increased font size
                }}
            >
                {content.role}
            </p>

            {isCenter && (
                <div className="mb-[0.5vw]">
                    <Quote className="text-[#3C8ECB] fill-current opacity-80" style={{ width: '2vw', height: '2vw' }} />
                </div>
            )}

            <p
                className={`text-[#525252] leading-relaxed line-clamp-5 ${isCenter ? 'font-normal' : 'opacity-90'}`}
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? '1.2vw' : '1vw', // Increased font size significantly
                    lineHeight: '1.4'
                }}
            >
                {content.text}
            </p>
        </motion.div>
    );
}

export default TestimonialSlider;