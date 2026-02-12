import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Brand Identity & Design – Logo, Visual & Brand Strategy',
    description:
        'Complete brand identity design: logo creation, visual identity, brand guidelines, and strategic brand positioning for your business.',
    canonicalPath: '/services/brand-identity',
    keywords: ['brand identity', 'logo design', 'visual identity', 'brand strategy', 'brand guidelines'],
});

export default function BrandIdentityLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Brand Identity Design',
                    description: 'Complete brand identity design: logo, visual identity, and brand strategy.',
                    slug: 'brand-identity',
                    serviceType: 'Brand Identity Design',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Brand Identity' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="brand-identity" />
        </>
    );
}
