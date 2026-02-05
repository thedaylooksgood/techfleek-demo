"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

const featureData = [
    {
        title: "Manage, automate, workflows to analytics — all in one place.",
        desc: "Manage, automate, and scale your business operations seamlessly with AI-driven tools — from workflows to analytics — all in one place."
    },
    {
        title: "Manage, automate, workflows to analytics — all in one place.",
        desc: "Manage, automate, and scale your business operations seamlessly with AI-driven tools — from workflows to analytics — all in one place."
    },
    {
        title: "Manage, automate, workflows to analytics — all in one place.",
        desc: "Manage, automate, and scale your business operations seamlessly with AI-driven tools — from workflows to analytics — all in one place."
    },
    {
        title: "Manage, automate, workflows to analytics — all in one place.",
        desc: "Manage, automate, and scale your business operations seamlessly with AI-driven tools — from workflows to analytics — all in one place."
    }
];

function Card({ item, index }: { item: { title: string; desc: string }, index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        amount: "some", // Trigger as soon as ANY part is visible
        margin: "100px 0px -50px 0px" // 100px above viewport, 50px below
    });

    return (
        <motion.div
            ref={ref}
            className="group relative cursor-default h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{
                duration: 0.35,
                delay: isInView ? index * 0.06 : 0,
                ease: "easeOut"
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {/* CARD - Fixed height for consistency */}
            <div
                className="relative w-full h-full min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] bg-white flex flex-col overflow-hidden transition-all duration-300 shadow-[0px_4px_25px_rgba(60,142,203,0.2)] hover:-translate-y-2 hover:shadow-[0px_12px_40px_rgba(60,142,203,0.5)]"
            >
                {/* HEADER */}
                <div
                    className="relative z-10 flex items-center 
                        px-4 sm:px-4 md:px-5 lg:px-[14px]
                        py-4 sm:py-5 md:py-6 lg:py-0 lg:min-h-[115px]"
                    style={{
                        background: 'linear-gradient(97.65deg, #000000 9.42%, #3C8ECB 92.26%)'
                    }}
                >
                    <h3
                        className={`${inter.className} font-medium text-white w-full 
                            text-[16px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px]
                            leading-[145%] sm:leading-[145%] lg:leading-[150%]`}
                    >
                        {item.title}
                    </h3>
                </div>

                {/* BODY */}
                <div
                    className="relative z-0 flex flex-col flex-grow bg-white 
                        px-4 sm:px-4 md:px-5 lg:px-[14px] 
                        py-4 sm:py-4 md:py-5 lg:py-3"
                >
                    <p
                        className={`${inter.className} font-normal text-[#9CA3AF]
                            text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px]
                            leading-[170%] sm:leading-[180%] lg:leading-[200%]`}
                    >
                        {item.desc}
                    </p>

                    {/* Illustration */}
                    <div
                        className="mt-4 sm:mt-auto self-center relative 
                            w-[65%] sm:w-[70%] md:w-[75%] lg:w-[80%]
                            mb-2 sm:mb-2 md:mb-3"
                        style={{ aspectRatio: '210 / 100' }}
                    >
                        <Image
                            src="/Home-Page/icons/saas-illustration.png"
                            alt="Feature Illustration"
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 20vw"
                            className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturesCards() {
    return (
        <section
            className="relative z-30 w-full mb-4 sm:mb-6 md:mb-8 lg:mb-10
                px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        >
            {/* CONTAINER - Reduced negative margin to position cards lower */}
            <div
                className="w-full mx-auto 
                    -mt-[40px] sm:-mt-[60px] md:-mt-[80px] lg:-mt-[120px] xl:-mt-[140px]
                    max-w-[400px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1188px]"
            >
                {/* GRID */}
                <div
                    className="grid 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                        gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8"
                >
                    {featureData.map((item, index) => (
                        <Card key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}