import { constructMetadata, JsonLd, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo';
import RelatedCaseStudies from '@/components/seo/RelatedCaseStudies';

export const metadata = constructMetadata({
    title: 'AI Integration Services – Chatbots, ML & Generative AI',
    description:
        'Intelligent AI solutions: conversational chatbots, machine learning models, process automation, and generative AI for enterprise.',
    canonicalPath: '/services/ai-integration',
    keywords: ['AI chatbot development', 'machine learning', 'generative AI', 'LLM integration', 'AI automation'],
});

export default function AIIntegrationLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <JsonLd
                data={getServiceSchema({
                    name: 'AI Integration',
                    description: 'Intelligent automation, machine learning, and AI solutions to revolutionize your business.',
                    slug: 'ai-integration',
                    serviceType: 'AI Integration',
                })}
            />
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'AI Integration' },
                ])}
            />
            {children}
            <RelatedCaseStudies currentSlug="ai-integration" />
        </>
    );
}
