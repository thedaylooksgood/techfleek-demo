"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

const stats = [
    { value: "30+", label: "Projects Delivered" },
    { value: "99%", label: "Client Retention" },
    { value: "6", label: "Industries Served" },
    { value: "10K+", label: "Global Users" }
];

export default function StatsGrid() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full z-20 px-4 sm:px-6 lg:px-8 pointer-events-none"
            style={{
                marginTop: '-48px', // 40% of 118px overlapping upwards
                marginBottom: '-70px' // 60% of 118px overlapping downwards (pulling next section up)
            }}
        >
            <style jsx global>{`
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes slideOutLeft {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(-50px); }
                }
                
                .stat-card {
                    pointer-events: auto;
                    transition: all 0.3s ease;
                    background: white;
                    opacity: 0;
                }

                .stat-card.animate-enter {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .stat-card.animate-exit {
                    animation: slideOutLeft 0.8s ease-in forwards;
                }

                .stat-card:hover {
                    border-color: #3C8ECB;
                    box-shadow: 0px 0.5vw 2vw 0.8vw rgba(60, 142, 203, 0.4);
                    transform: translateY(-5px);
                }

                /* Staggered animation delays */
                ${stats.map((_, i) => `.stat-card.animate-enter:nth-child(${i + 1}) { animation-delay: ${i * 150}ms; }`).join('\n')}
                ${stats.map((_, i) => `.stat-card.animate-exit:nth-child(${i + 1}) { animation-delay: ${(stats.length - 1 - i) * 100}ms; }`).join('\n')}

                @media (max-width: 1024px) {
                     .stat-card:hover {
                        box-shadow: 0px 4px 20px rgba(60, 142, 203, 0.4);
                     }
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card ${isVisible ? 'animate-enter' : 'animate-exit'} rounded-[16px] p-6 flex flex-col items-center justify-center text-center h-[118px] border border-transparent shadow-[0px_4px_20px_rgba(0,0,0,0.05)]`}
                        >
                            <div className={`${inter.className} text-[#3C8ECB] text-[30px] font-bold mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.value}
                            </div>
                            <div className={`${inter.className} text-[#4B5563] text-[16px] font-medium`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
