import { MetadataRoute } from 'next'

// =============================================================================
// ROBOTS.TXT — Phase 3
// =============================================================================
// Programmatic robots.txt configuration. Allows all bots, but disallows
// API routes, admin routes, and Next.js internal files.
// =============================================================================

export default function robots(): MetadataRoute.Robots {
    const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://techfleek.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',         // API routes
                    '/admin/',       // Admin panel
                    '/_next/',       // Next.js internal files
                    '/test-connection/', // Test pages
                ],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
