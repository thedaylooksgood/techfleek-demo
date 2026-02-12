import React from 'react';
import { SITE_URL, SITE_NAME } from './metadata';

// =============================================================================
// TECHFLEEK SEO — JSON-LD SCHEMA GENERATORS
// =============================================================================
// Reusable components and functions for generating Google-friendly
// structured data (JSON-LD). Covers Organization, SoftwareApplication,
// Service, BreadcrumbList, FAQPage, and WebPage schemas.
// =============================================================================

// --- Generic <JsonLd> Component ---

interface JsonLdProps {
    data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * A reusable component to inject JSON-LD structured data into any page.
 *
 * @example
 * ```tsx
 * <JsonLd data={organizationSchema} />
 * ```
 */
export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
        />
    );
}

// --- Organization Schema (Root Layout) ---

export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        description:
            'Custom software development, AI solutions, and Web3 development company based in India, serving global clients.',
        url: SITE_URL,
        logo: `${SITE_URL}/logo/favicon.png`,
        image: `${SITE_URL}/og-image.png`,
        sameAs: [
            'https://linkedin.com/company/techfleek',
            'https://github.com/techfleek-code',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-88021-72570',
            contactType: 'Customer Service',
            email: 'hello@techfleek.in',
            availableLanguage: ['English', 'Hindi'],
            areaServed: 'Worldwide',
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'O-1106, Officer City-1, Raj Nagar Extension',
            addressLocality: 'Ghaziabad',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201017',
            addressCountry: 'IN',
        },
        foundingDate: '2024',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 2,
            maxValue: 10,
        },
        areaServed: 'Worldwide',
        knowsAbout: [
            'Web Development',
            'Mobile App Development',
            'AI Solutions',
            'Blockchain Development',
            'Custom Software Development',
            'UI/UX Design',
            'Cloud Services',
        ],
    };
}

// --- WebSite Schema (Root Layout — enables Google Sitelinks search) ---

export function getWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}

// --- SoftwareApplication Schema (Home Page) ---

export function getSoftwareApplicationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'TechFleek – Custom Software Solutions',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '5000',
            highPrice: '100000',
            offerCount: '8',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '50',
            bestRating: '5',
            worstRating: '1',
        },
        provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
        },
    };
}

// --- Service Schema (for individual service pages) ---

export interface ServiceSchemaOptions {
    name: string;
    description: string;
    slug: string;
    serviceType?: string;
}

export function getServiceSchema({
    name,
    description,
    slug,
    serviceType = 'IT Services',
}: ServiceSchemaOptions) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: `${SITE_URL}/services/${slug}`,
        serviceType,
        provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${name} Plans`,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name,
                    },
                },
            ],
        },
    };
}

// --- BreadcrumbList Schema (auto-generate from URL path) ---

export interface Breadcrumb {
    label: string;
    href?: string;
}

export function getBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.label,
            ...(crumb.href
                ? {
                    item: crumb.href.startsWith('http')
                        ? crumb.href
                        : `${SITE_URL}${crumb.href}`,
                }
                : {}),
        })),
    };
}

// --- FAQPage Schema (for service pages with FAQ sections) ---

export interface FAQItem {
    question: string;
    answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// --- WebPage Schema (general purpose) ---

export interface WebPageSchemaOptions {
    name: string;
    description: string;
    url: string;
    breadcrumbs?: Breadcrumb[];
}

export function getWebPageSchema({
    name,
    description,
    url,
}: WebPageSchemaOptions) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name,
        description,
        url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
        isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
        },
    };
}
