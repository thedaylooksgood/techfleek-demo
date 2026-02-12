import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Careers at TechFleek – Join Our Team',
    description:
        'Join TechFleek Technologies! Explore open positions in software development, design, blockchain, and more. Build your career with innovation.',
    canonicalPath: '/job-posting',
    keywords: ['careers', 'jobs at TechFleek', 'software developer jobs India', 'tech careers', 'hiring'],
});

export default function JobPostingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Careers' },
                ])}
            />
            {children}
        </>
    );
}
