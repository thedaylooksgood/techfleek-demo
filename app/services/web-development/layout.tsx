import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Web Development Services – React, Next.js & E-Commerce',
    description:
        'We build scalable, high-performance websites and web applications using React, Next.js, and modern frameworks. SEO-optimized and conversion-driven.',
    canonicalPath: '/services/web-development',
    keywords: ['React development', 'Next.js development', 'e-commerce development', 'web application development', 'SSR web apps'],
});

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Web Development',
                    description: 'Scalable, high-performance websites and web applications using React, Next.js, and modern frameworks.',
                    slug: 'web-development',
                    serviceType: 'Web Development',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Web Development' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="web-development" />
        </>
    );
}
