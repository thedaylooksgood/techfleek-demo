import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'Ucom Entertainment – Streaming Platform Development',
    description: 'Case study: Developing a scalable streaming platform for Ucom Entertainment serving millions of users.',
    canonicalPath: '/case-study/ucom-entertainment',
    keywords: ['streaming platform development', 'video streaming app', 'entertainment software', 'media app development'],
});

export default function UcomLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'Ucom Entertainment' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="mobile-app-development" />
        </>
    );
}
