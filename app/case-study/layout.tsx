import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Case Studies – Real-World Success Stories',
    description:
        'Explore TechFleek case studies: real-world transformations across healthcare, fintech, e-commerce, and more. See how we deliver measurable results.',
    canonicalPath: '/case-study',
    keywords: ['case studies', 'portfolio', 'software success stories', 'client projects', 'project portfolio'],
});

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies' },
                ])}
            />
            {children}
        </>
    );
}
