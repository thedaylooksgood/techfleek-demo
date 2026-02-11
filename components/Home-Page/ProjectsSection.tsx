'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { homeStyles } from './styles';

// --- Constants & Types ---
const CARD_WIDTH_DESKTOP = 300;
const CARD_WIDTH_MOBILE = 200;
const CARD_GAP_DESKTOP = -80; // Negative gap to compensate for rotation shrinking the width
const CARD_GAP_MOBILE = -40;
const AUTOPLAY_DURATION = 40; // Seconds for one full loop

interface Project {
    id: number;
    image: string;
    title: string;
}

// Updated with high-quality Unsplash images for demo purposes
const projectsData: Project[] = [
    { id: 1, image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800', title: 'Beverage' },
    { id: 2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', title: 'T-Shirt' },
    { id: 3, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89d?auto=format&fit=crop&q=80&w=800', title: 'Cap' },
    { id: 4, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800', title: 'Can' },
    { id: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', title: 'Woman' },
    { id: 6, image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=800', title: 'Tote Bag' },
    { id: 7, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800', title: 'Smoothie' },
];

const processSteps = [
    { id: '01', title: 'Strategy & Planning' },
    { id: '02', title: 'Design & Development' },
    { id: '03', title: 'Launch & Growth' },
    { id: '04', title: 'Ongoing Support' },
];

// --- Main Component ---
const ProjectsSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    // Duplicate projects for seamless looping, adding unique IDs
    const displayProjects = [...projectsData, ...projectsData, ...projectsData, ...projectsData]
        .map((p, i) => ({ ...p, uniqueId: i }));

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
    const cardGap = isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP;
    const totalItemWidth = cardWidth + cardGap;
    const totalWidth = projectsData.length * totalItemWidth;

    useEffect(() => {
        // Start the infinite loop animation
        controls.start({
            x: -totalWidth,
            transition: {
                duration: AUTOPLAY_DURATION,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                onUpdate: (latest) => x.set(latest as number)
            }
        });
    }, [controls, totalWidth, x]);

    return (
        <section className={`${homeStyles.section} py-24 overflow-hidden`}>
            {/* Background enhancement */}
            <div className="absolute inset-0 pointer-events-none"
                style={homeStyles.gridBackgroundStyle}>
            </div>

            <div className={`${homeStyles.container} mb-20 relative z-10 border-b border-slate-100 pb-4`}>
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div className={homeStyles.headerWrapper.replace('border-b', '').replace('mb-8', 'mb-0').replace('pb-4', 'pb-0')}>
                        <span className={homeStyles.label}>
                            Behind the Designs
                        </span>
                        <div className="flex flex-col gap-2">
                            <h2 className={homeStyles.title}>
                                Curious What Else <span className={homeStyles.gradientText}>I've Created?</span>
                            </h2>
                            <p className={homeStyles.description}>
                                Explore more brand identities, packaging, and digital design work in my extended portfolio.
                            </p>
                        </div>
                    </div>

                    <Link href="/projects" passHref>
                        <button className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#3C8ECB] transition-colors group mt-4 md:mt-0 cursor-pointer">
                            See more Projects
                            <span className="bg-[#3C8ECB] p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300 ml-2">
                                <ArrowRight className="w-3 h-3 text-white" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Carousel Container with Deep Perspective */}
            <div
                className="relative h-[450px] md:h-[600px] flex items-center justify-center w-full"
                style={{
                    perspective: '1200px', // Increased perspective for a clearer view
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}
                ref={containerRef}
            >
                <motion.div
                    className="flex items-center absolute left-1/2 top-1/2 -translate-y-1/2"
                    animate={controls}
                    style={{
                        x,
                        marginLeft: `-${totalItemWidth / 2}px`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {displayProjects.map((project) => {
                        const cardOffset = totalItemWidth * project.uniqueId;
                        const cardX = useTransform(x, (currentX) => currentX + cardOffset);

                        return (
                            <Card
                                key={project.uniqueId}
                                project={project}
                                cardX={cardX}
                                cardWidth={cardWidth}
                                cardGap={cardGap}
                            />
                        );
                    })}
                </motion.div>
            </div>

            {/* Process Steps Footer - Refined Design */}
            <div className={`${homeStyles.container} mt-8`}>
                <div className="flex flex-wrap justify-center md:justify-around items-center max-w-6xl mx-auto gap-8 text-center md:text-left">
                    {processSteps.map((step) => (
                        <div key={step.id} className="group relative flex flex-col items-center">
                            <span className="text-[#FF6B35] font-bold text-sm mb-2 group-hover:scale-110 transition-transform duration-300">#{step.id}</span>
                            <h5 className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-[#3C8ECB] transition-colors">{step.title}</h5>
                            {/* Subtle dot decoration */}
                            <div className="w-1 h-1 bg-slate-200 rounded-full mt-4 group-hover:bg-[#FF6B35] transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Individual Card Component ---
interface CardProps {
    project: Project;
    cardX: any; // MotionValue<number>
    cardWidth: number;
    cardGap: number;
}

const Card = ({ project, cardX, cardWidth, cardGap }: CardProps) => {
    // Range determines how quickly the cards transform as they move away from center.
    const range = cardWidth * 3.5;
    const inputRange = [-range, 0, range];

    // 1. ROTATION: Strong rotation at edges creates the "cylinder" wall effect.
    const rotateY = useTransform(cardX, inputRange, [60, 0, -60]);

    // 2. TRANSLATION (Z): 
    const z = useTransform(cardX, inputRange, [-100, 0, -100]);

    // 3. ARC (Y): Subtle curve
    const y = useTransform(cardX, inputRange, [30, 0, 30]);

    // 4. SCALE:
    // Center card is highlighted (1.1), edges slightly smaller (0.85).
    const scale = useTransform(cardX, inputRange, [0.85, 1.1, 0.85]);

    // 5. Opacity: Fade out the very edges to blend with the mask
    const opacity = useTransform(cardX, inputRange, [0.5, 1, 0.5]);

    return (
        <Link href="/projects" scroll={true} onClick={() => window.scrollTo(0, 0)}>
            <motion.div
                className="absolute"
                style={{
                    width: cardWidth,
                    height: cardWidth * 1.3,
                    x: cardX,
                    y,
                    z,
                    rotateY,
                    scale,
                    opacity,
                    zIndex: useTransform(cardX, (curr: number) => 100 - Math.abs(curr / 10)),
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-white group border border-white/50 ring-1 ring-slate-100 transition-all duration-500 cursor-pointer">
                    {/* Fallback pattern if image is missing/loading */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse -z-20" />

                    {/* Main Image with fallback handler */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={`${cardWidth}px`}
                        priority={project.id <= 4}
                    />

                    {/* Visual Overlay - Refined for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Glassmorphism Badge for Text */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="overflow-hidden relative">
                            <h3 className="text-white font-bold text-xl drop-shadow-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                {project.title}
                            </h3>
                            <div className="h-1 w-12 bg-[#3C8ECB] mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectsSection;