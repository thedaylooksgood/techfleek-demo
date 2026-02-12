import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'UI/UX Design Services – User Interface & Experience Design',
    description:
        'Beautiful, intuitive UI/UX design services. We create user-centered interfaces with prototyping, design systems, and usability testing.',
    canonicalPath: '/services/ui-ux-design',
    keywords: ['UI design', 'UX design', 'user interface design', 'Figma design', 'design systems'],
});

export default function UIUXDesignLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'UI/UX Design',
                    description: 'User-centered interface design with prototyping, design systems, and usability testing.',
                    slug: 'ui-ux-design',
                    serviceType: 'UI/UX Design',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'UI/UX Design' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="ui-ux-design" />
        </>
    );
}
