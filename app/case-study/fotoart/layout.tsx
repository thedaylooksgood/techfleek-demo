import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'Fotoart Production – Portfolio & E-Commerce Platform',
    description: 'How we created a stunning, high-performance portfolio and booking site for Fotoart Production.',
    canonicalPath: '/case-study/fotoart',
    keywords: ['photography website', 'portfolio website design', 'booking system', 'web development'],
});

export default function FotoartLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'Fotoart' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="ui-ux-design" />
        </>
    );
}
