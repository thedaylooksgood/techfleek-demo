import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'About Us – TechFleek Technologies',
    description:
        'Learn about TechFleek Technologies: our mission, team, values, and leadership. Building secure, scalable digital solutions for businesses worldwide.',
    canonicalPath: '/about-us',
    keywords: ['about TechFleek', 'software company India', 'tech company Ghaziabad', 'IT company India', 'our team'],
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'About Us' },
                ])}
            />
            {children}
        </>
    );
}
