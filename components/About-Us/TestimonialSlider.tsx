'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

    const leftContentIndex = getCircularIndex(currentIndex - 1);
    const centerContentIndex = getCircularIndex(currentIndex);
    const rightContentIndex = getCircularIndex(currentIndex + 1);

    return (
        <section className="w-full bg-black py-[3vw] flex flex-col items-center relative overflow-hidden">
            {/* Header with Arrows */}
            <div className="text-center mb-[2vw] z-10 relative space-y-[0.5vw]">
                {/* Subheading */}
                <h3 className="font-bold tracking-widest uppercase"
                    style={{
                        fontSize: 'clamp(10px, 1vw, 16px)',
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
                        <ChevronLeft className="text-white group-hover:text-[#3C8ECB] transition-colors" style={{ width: 'clamp(24px, 2.5vw, 40px)', height: 'clamp(24px, 2.5vw, 40px)' }} />
                    </button>

                    <h2 className="font-bold text-white px-[1vw]" style={{ fontSize: 'clamp(18px, 3vw, 48px)', fontFamily: 'var(--font-lato)' }}>
                        What Our Clients Say About Us
                    </h2>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="p-2 cursor-pointer hover:scale-110 transition-transform group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="text-white group-hover:text-[#3C8ECB] transition-colors" style={{ width: 'clamp(24px, 2.5vw, 40px)', height: 'clamp(24px, 2.5vw, 40px)' }} />
                    </button>
                </div>

                {/* Floating Decoration */}
                <div className="w-[0.4vw] h-[0.4vw] rounded-full bg-[#1E4765] blur-[1px] mx-auto mt-[0.5vw]" style={{ minWidth: '4px', minHeight: '4px' }}></div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full max-w-[95vw] flex justify-center items-center">

                {/* Static Grid Layout for Cards */}
                <div className="relative flex justify-center items-center gap-[1vw]" style={{ height: 'clamp(350px, 40vw, 580px)' }}>
                    {/* LEFT SLOT */}
                    <div
                        className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500"
                        style={{ width: 'clamp(180px, 28vw, 400px)', height: 'clamp(250px, 30vw, 430px)' }}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/About-Us/review1.png"
                                alt="Background Left"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <FadeContent
                            key={`left-${leftContentIndex}`}
                            content={testimonials[leftContentIndex]}
                            isCenter={false}
                        />
                    </div>

                    {/* CENTER SLOT */}
                    <div
                        className="relative flex flex-col items-center justify-center z-20 transition-all duration-500"
                        style={{
                            width: 'clamp(260px, 30vw, 430px)',
                            height: 'clamp(320px, 36vw, 520px)',
                            marginTop: 'clamp(-20px, -3vw, -45px)'
                        }}
                    >
                        <div className="absolute inset-0 w-full h-full drop-shadow-[0_1.5vw_3.5vw_rgba(60,142,203,0.15)]">
                            <Image
                                src="/About-Us/review2.png"
                                alt="Background Center"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <FadeContent
                            key={`center-${centerContentIndex}`}
                            content={testimonials[centerContentIndex]}
                            isCenter={true}
                        />
                    </div>

                    {/* RIGHT SLOT */}
                    <div
                        className="relative hidden md:flex flex-col items-center justify-center transition-all duration-500"
                        style={{ width: 'clamp(180px, 28vw, 400px)', height: 'clamp(250px, 30vw, 430px)' }}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/About-Us/review3.png"
                                alt="Background Right"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <FadeContent
                            key={`right-${rightContentIndex}`}
                            content={testimonials[rightContentIndex]}
                            isCenter={false}
                        />
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-[0.5vw] mt-[1vw] z-20" style={{ gap: 'clamp(4px, 0.5vw, 8px)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className="transition-all duration-300 rounded-full"
                        style={{
                            height: 'clamp(4px, 0.4vw, 6px)',
                            width: i === currentIndex ? 'clamp(20px, 2vw, 32px)' : 'clamp(5px, 0.5vw, 8px)',
                            backgroundColor: i === currentIndex ? '#3C8ECB' : '#4B5563'
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

// Sub-component for animating content - CORRECTED AVATAR AT 12% FROM TOP
const FadeContent = ({ content, isCenter }: { content: typeof testimonials[0], isCenter: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: '1vw' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-1vw' }}
            transition={{ duration: 0.4 }}
            className={`relative z-10 w-full h-full flex flex-col items-center text-center ${isCenter ? 'scale-100' : 'scale-95'}`}
            style={{
                paddingLeft: 'clamp(16px, 4vw, 60px)',
                paddingRight: 'clamp(16px, 4vw, 60px)',
                paddingTop: isCenter ? 'clamp(50px, 6vw, 90px)' : 'clamp(40px, 5vw, 75px)'
            }}
        >
            {/* Avatar - Positioned at 12% from top with translateY(-50%) to make it half outside */}
            <div
                className="absolute left-1/2 rounded-full overflow-hidden border-white shadow-lg shrink-0"
                style={{
                    top: '12%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    width: isCenter ? 'clamp(60px, 8vw, 115px)' : 'clamp(48px, 6vw, 90px)',
                    height: isCenter ? 'clamp(60px, 8vw, 115px)' : 'clamp(48px, 6vw, 90px)',
                    borderWidth: 'clamp(2px, 0.2vw, 3px)'
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
            <div style={{ marginTop: isCenter ? 'clamp(20px, 2.5vw, 40px)' : 'clamp(12px, 1.5vw, 25px)' }}></div>

            {/* Text */}
            <h4
                className="font-bold text-[#525252]"
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? 'clamp(14px, 1.8vw, 28px)' : 'clamp(11px, 1.4vw, 22px)',
                    marginBottom: 'clamp(2px, 0.2vw, 4px)'
                }}
            >
                {content.name}
            </h4>
            <p
                className="text-[#525252] opacity-70"
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? 'clamp(10px, 1.1vw, 18px)' : 'clamp(8px, 0.9vw, 14px)',
                    marginBottom: 'clamp(8px, 1vw, 16px)'
                }}
            >
                {content.role}
            </p>

            {isCenter && (
                <div style={{ marginBottom: 'clamp(4px, 0.5vw, 10px)' }}>
                    <Quote
                        className="text-[#3C8ECB] fill-current opacity-80"
                        style={{ width: 'clamp(16px, 2vw, 32px)', height: 'clamp(16px, 2vw, 32px)' }}
                    />
                </div>
            )}

            <p
                className={`text-[#525252] leading-relaxed line-clamp-5 ${isCenter ? 'font-normal' : 'opacity-90'}`}
                style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: isCenter ? 'clamp(10px, 1.2vw, 20px)' : 'clamp(8px, 1vw, 16px)',
                    lineHeight: '1.5'
                }}
            >
                {content.text}
            </p>
        </motion.div>
    );
}

export default TestimonialSlider;