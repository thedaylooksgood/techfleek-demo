import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Cloud Services – AWS, Azure, DevOps & Scalable Infrastructure',
    description:
        'Cloud architecture, migration, and DevOps services. AWS, Azure, Docker, Kubernetes, and CI/CD pipeline setup for scalable infrastructure.',
    canonicalPath: '/services/cloud-services',
    keywords: ['cloud services', 'AWS consulting', 'DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
});

export default function CloudServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Cloud Services',
                    description: 'Cloud architecture, migration, and DevOps services for scalable infrastructure.',
                    slug: 'cloud-services',
                    serviceType: 'Cloud & DevOps',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Cloud Services' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="cloud-services" />
        </>
    );
}
