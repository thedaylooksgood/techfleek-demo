import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'Greysell Advertising – E-Commerce Transformation',
    description: 'How we transformed Greysell Advertising into a digital-first e-commerce powerhouse with custom software.',
    canonicalPath: '/case-study/greysell',
    keywords: ['e-commerce development', 'digital transformation', 'advertising agency software', 'web development'],
});

export default function GreysellLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'Greysell' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="web-development" />
        </>
    );
}
