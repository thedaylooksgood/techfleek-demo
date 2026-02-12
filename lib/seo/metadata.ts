import type { Metadata } from 'next';

// =============================================================================
// TECHFLEEK SEO — METADATA CONSTRUCTOR
// =============================================================================
// A reusable utility for constructing consistent, SEO-optimized metadata
// across all pages. Import and use with Next.js `generateMetadata` or
// static `metadata` exports.
// =============================================================================

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://techfleek.com';
const SITE_NAME = 'TechFleek Technologies';
const DEFAULT_OG_IMAGE = '/og-image.png';
const BRAND_SUFFIX = '| TechFleek';

export interface ConstructMetadataOptions {
    /** Page title — will be auto-suffixed with "| TechFleek" */
    title: string;
    /** Meta description — auto-truncated to 160 characters */
    description: string;
    /** Canonical URL path (e.g. "/services/web-development"). Auto-prefixed with SITE_URL. */
    canonicalPath?: string;
    /** Custom OG image path or full URL */
    ogImage?: string;
    /** If true, sets noindex/nofollow for the page */
    noIndex?: boolean;
    /** Additional keywords for the page */
    keywords?: string[];
    /** Page type for OpenGraph (default: "website") */
    ogType?: 'website' | 'article';
    /** Published date for article pages */
    publishedTime?: string;
    /** Modified date for article pages */
    modifiedTime?: string;
}

/**
 * Constructs a complete Next.js Metadata object with SEO best practices.
 *
 * @example
 * ```ts
 * // In any page.tsx
 * import { constructMetadata } from '@/lib/seo/metadata';
 *
 * export const metadata = constructMetadata({
 *   title: 'Web Development Services',
 *   description: 'We build scalable, high-performance websites...',
 *   canonicalPath: '/services/web-development',
 * });
 * ```
 */
export function constructMetadata({
    title,
    description,
    canonicalPath = '/',
    ogImage = DEFAULT_OG_IMAGE,
    noIndex = false,
    keywords = [],
    ogType = 'website',
    publishedTime,
    modifiedTime,
}: ConstructMetadataOptions): Metadata {
    // Auto-suffix the brand name
    const fullTitle = title.includes('TechFleek') ? title : `${title} ${BRAND_SUFFIX}`;

    // Enforce 160 character limit on description
    const truncatedDescription =
        description.length > 160 ? description.substring(0, 157) + '...' : description;

    // Build canonical URL
    const canonicalUrl = canonicalPath.startsWith('http')
        ? canonicalPath
        : `${SITE_URL}${canonicalPath}`;

    // Build OG image URL
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

    // Merge default and page-specific keywords — high-value target list
    const defaultKeywords = [
        'TechFleek',
        'Custom Software Development',
        'Web Development India',
        'Mobile App Development',
        'AI Chatbots',
        'Web3 Development',
        'DApp Development',
        'Blockchain Solutions',
        'Scalable Software',
        'IT Services India',
        'SaaS Development',
        'Next.js Experts',
    ];
    const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];

    const metadata: Metadata = {
        metadataBase: new URL(SITE_URL),
        title: fullTitle,
        description: truncatedDescription,
        keywords: mergedKeywords,
        authors: [{ name: SITE_NAME }],
        creator: SITE_NAME,
        publisher: SITE_NAME,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
            'max-video-preview': -1,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large' as const,
                'max-snippet': -1,
            },
        },
        openGraph: {
            title: fullTitle,
            description: truncatedDescription,
            url: canonicalUrl,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            locale: 'en_US',
            type: ogType,
            ...(ogType === 'article' && publishedTime
                ? { publishedTime, modifiedTime: modifiedTime || publishedTime }
                : {}),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: truncatedDescription,
            images: [ogImageUrl],
        },
        other: {
            'revisit-after': '7 days',
            language: 'English',
        },
    };

    return metadata;
}

// Re-export site constants for use in schemas and other utilities
export { SITE_URL, SITE_NAME };
