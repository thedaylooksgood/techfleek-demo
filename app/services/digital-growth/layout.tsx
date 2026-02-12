import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Digital Growth & Marketing – SEO, Social & Performance Marketing',
    description:
        'Digital growth strategies: SEO optimization, social media marketing, performance marketing, and brand awareness campaigns.',
    canonicalPath: '/services/digital-growth',
    keywords: ['digital marketing', 'SEO services', 'social media marketing', 'performance marketing', 'growth hacking'],
});

export default function DigitalGrowthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Digital Growth & Marketing',
                    description: 'Digital growth strategies for SEO, social media, and performance marketing.',
                    slug: 'digital-growth',
                    serviceType: 'Digital Marketing',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Digital Growth' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="digital-growth" />
        </>
    );
}
