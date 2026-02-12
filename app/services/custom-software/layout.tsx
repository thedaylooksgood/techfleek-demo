import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Custom Software Development – Tailored Enterprise Solutions',
    description:
        'End-to-end custom software development for enterprises. CRM, ERP, inventory management, and bespoke business applications.',
    canonicalPath: '/services/custom-software',
    keywords: ['custom software', 'enterprise software', 'CRM development', 'ERP development', 'bespoke software'],
});

export default function CustomSoftwareLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Custom Software Development',
                    description: 'End-to-end custom software development for enterprises and growing businesses.',
                    slug: 'custom-software',
                    serviceType: 'Custom Software Development',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Custom Software' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="custom-software" />
        </>
    );
}
