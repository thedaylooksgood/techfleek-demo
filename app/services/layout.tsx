import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Our Services – Custom Software, Web & Mobile Development',
    description:
        'Comprehensive digital solutions: web development, mobile apps, AI integration, cloud services, UI/UX design, and blockchain development.',
    canonicalPath: '/services',
    keywords: [
        'IT services',
        'custom software services',
        'web development services India',
        'mobile app services',
        'AI consulting',
        'cloud services',
        'blockchain consulting',
    ],
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                ])}
            />
            {children}
        </>
    );
}
