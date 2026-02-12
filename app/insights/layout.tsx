import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Insights & Resources – Tech Trends & Expert Perspectives',
    description:
        'Stay ahead with the latest technology trends, expert perspectives, and actionable insights from the TechFleek team. Blog, articles, and resources.',
    canonicalPath: '/insights',
    keywords: ['tech blog', 'software insights', 'technology trends', 'AI articles', 'web development blog'],
    ogType: 'website',
});

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Insights' },
                ])}
            />
            {children}
        </>
    );
}
