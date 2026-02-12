import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'Mobile App Development – iOS, Android & Cross-Platform',
    description:
        'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and custom native solutions.',
    canonicalPath: '/services/mobile-app-development',
    keywords: ['iOS app development', 'Android app development', 'React Native', 'Flutter', 'cross-platform apps'],
});

export default function MobileAppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'Mobile App Development',
                    description: 'Native and cross-platform mobile app development for iOS and Android.',
                    slug: 'mobile-app-development',
                    serviceType: 'Mobile App Development',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Mobile App Development' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="mobile-app-development" />
        </>
    );
}
