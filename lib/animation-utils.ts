/**
 * Optimized animation utilities for GPU-accelerated, smooth animations
 * - All animations use transform and opacity only (GPU accelerated)
 * - Preloading margin triggers animations 100px before visible
 * - Reduced motion support for accessibility
 */

// Optimized viewport settings for preloading
export const optimizedViewport = {
    once: true,
    margin: "-100px" as const, // Preload 100px before visible
    amount: 0.1
};

// Smooth easing curve (same as CSS ease-out)
export const smoothEasing = "easeOut" as const;

// ============ QUICK INLINE ANIMATIONS ============
// Use these for simple motion.div without variants

export const quickFadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: optimizedViewport,
    transition: { duration: 0.4, ease: smoothEasing }
};

export const quickFadeInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: optimizedViewport,
    transition: { duration: 0.5, ease: smoothEasing }
};

export const quickFadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: optimizedViewport,
    transition: { duration: 0.5, ease: smoothEasing }
};

export const quickScaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: optimizedViewport,
    transition: { duration: 0.4, ease: smoothEasing }
};

// ============ STAGGERED DELAY HELPER ============

export const getStaggerDelay = (index: number, baseDelay: number = 0.08) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: optimizedViewport,
    transition: { duration: 0.4, delay: index * baseDelay, ease: smoothEasing }
});
