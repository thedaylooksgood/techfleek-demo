import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import RelatedServices from '@/components/seo/RelatedServices';

export const metadata = constructMetadata({
    title: 'Dygo Diagnostics – HIPAA Compliant Telemedicine App',
    description: 'Case study: Building a secure, HIPAA-compliant telemedicine platform for Dygo Diagnostics connecting patients with doctors.',
    canonicalPath: '/case-study/dygo-diagnostics',
    keywords: ['telemedicine app development', 'healthcare software', 'HIPAA compliant app', 'medical app development'],
});

export default function DygoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Case Studies', href: '/case-study' },
                    { label: 'Dygo Diagnostics' },
                ])}
            />
            {children}
            <RelatedServices currentSlug="mobile-app-development" />
        </>
    );
}
