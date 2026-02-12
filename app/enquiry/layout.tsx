import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Contact Us – Get a Free Project Quote',
    description:
        'Ready to start your project? Contact TechFleek for a free consultation and personalized proposal. We respond within 24 hours.',
    canonicalPath: '/enquiry',
    keywords: ['contact us', 'get a quote', 'project enquiry', 'hire developers', 'free consultation'],
});

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us' },
                ])}
            />
            {children}
        </>
    );
}
