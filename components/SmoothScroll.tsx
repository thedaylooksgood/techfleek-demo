'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4, // Slightly longer for smoother feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
            infinite: false,
        });

        // Update scroll progress
        lenis.on('scroll', ({ progress }: { progress: number }) => {
            setScrollProgress(progress);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links for smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        lenis.scrollTo(targetEl as HTMLElement, {
                            offset: -100, // Account for fixed header
                            duration: 1.8,
                        });
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div
                className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, #3C8ECB 0%, #2563eb 50%, #8b5cf6 100%)',
                    transform: `scaleX(${scrollProgress})`,
                    transformOrigin: 'left',
                    transition: 'transform 0.1s linear',
                    opacity: scrollProgress > 0.01 ? 1 : 0,
                }}
            />
        </>
    );
}
