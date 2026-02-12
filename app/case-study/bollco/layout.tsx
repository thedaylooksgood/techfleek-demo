import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'Bollco Case Study – AI-Driven EdTech Platform',
    description: 'See how we built Bollco, an AI-driven educational platform that improved student engagement by 40%.',
    canonicalPath: '/case-study/bollco',
    keywords: ['EdTech development', 'AI in education', 'learning management system', 'React development'],
});

export default function BollcoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'Bollco' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="ai-integration" />
        </>
    );
}
