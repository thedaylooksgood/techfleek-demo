import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// =============================================================================
// PROGRAMMATIC SITEMAP — Phase 3
// =============================================================================
// Automatically generates sitemap.xml by scanning the file system for:
// 1. Static routes (core pages)
// 2. Service pages (app/services/*)
// 3. Case Study pages (app/case-study/*)
// 4. Insight pages (app/insights/[slug] — future-proofed)
// =============================================================================

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://techfleek.com'

/**
 * Scan a directory within the `app/` folder and return subfolders as routes.
 * Skips route groups like (Home-Page), dynamic segments like [slug],
 * and private folders starting with _.
 */
function getRoutesFromDirectory(dirName: string): string[] {
    try {
        const directoryPath = path.join(process.cwd(), 'app', dirName)

        if (!fs.existsSync(directoryPath)) {
            console.warn(`[Sitemap] Directory not found: ${directoryPath}`)
            return []
        }

        const files = fs.readdirSync(directoryPath)

        return files.filter(file => {
            const stats = fs.statSync(path.join(directoryPath, file))
            return stats.isDirectory() &&
                !file.startsWith('[') &&
                !file.startsWith('_') &&
                !file.startsWith('(')
        }).map(route => `/${dirName}/${route}`)
    } catch (error) {
        console.error(`[Sitemap] Error reading directory ${dirName}:`, error)
        return []
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date()

    // 1. Static Routes — Core pages with highest priority
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${BASE_URL}/case-study`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/insights`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/job-posting`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/enquiry`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    // 2. Dynamic Service Routes — High-value commercial pages
    const serviceRoutes: MetadataRoute.Sitemap = getRoutesFromDirectory('services').map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
    }))

    // 3. Dynamic Case Study Routes — Proof of competence
    const caseStudyRoutes: MetadataRoute.Sitemap = getRoutesFromDirectory('case-study').map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    // 4. Dynamic Insight Routes (from Registry)
    const insightRoutes: MetadataRoute.Sitemap = (await import('@/lib/seo/insights-registry')).insightsRegistry.map(insight => ({
        url: `${BASE_URL}/insights/${insight.slug}`,
        lastModified: new Date(insight.publishedDate),
        changeFrequency: 'weekly',
        priority: 0.75,
    }))

    // 5. Combine all routes
    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...caseStudyRoutes,
        ...insightRoutes,
    ]
}
