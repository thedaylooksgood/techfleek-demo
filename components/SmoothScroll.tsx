'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lenisRef = useRef<Lenis | null>(null);
    const isFirstMount = useRef(true);

    // Disable browser scroll restoration permanently
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Disable scroll restoration
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
        }
    }, []);

    // Initialize Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

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
                            offset: -100,
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
            lenisRef.current = null;
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        // Skip on first mount as the page should already be at top
        if (isFirstMount.current) {
            isFirstMount.current = false;
            // Still ensure we're at top on first mount
            forceScrollToTop();
            return;
        }

        // Force scroll to absolute top
        forceScrollToTop();

    }, [pathname, searchParams]);

    // Force scroll to top using multiple methods
    const forceScrollToTop = () => {
        // Method 1: Native scroll
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

        // Method 2: Set scroll directly on elements
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Method 3: Using Lenis
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true, force: true });
        }

        // Method 4: Delayed execution to catch any async rendering
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true, force: true });
            }
        });

        // Method 5: Another delayed check
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true, force: true });
            }
        }, 0);

        // Method 6: Slightly longer delay for any lazy-loaded content
        setTimeout(() => {
            window.scrollTo(0, 0);
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true, force: true });
            }
        }, 100);
    };

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
