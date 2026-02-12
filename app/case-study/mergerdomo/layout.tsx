import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'MergerDomo – FinTech Investment Platform',
    description: 'Building a secure, high-performance investment platform for MergerDomo to facilitate multi-million dollar deals.',
    canonicalPath: '/case-study/mergerdomo',
    keywords: ['fintech development', 'investment platform', 'secure software', 'financial technology'],
});

export default function MergerDomoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'MergerDomo' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="custom-software" />
        </>
    );
}
