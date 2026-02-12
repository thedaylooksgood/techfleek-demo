import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata, JsonLd, getBreadcrumbSchema } from '@/lib/seo';
import { getInsightBySlug } from '@/lib/seo/insights-registry';
import RelatedServices from '@/components/seo/RelatedServices';
import PageTemplate from '@/components/Common/PageTemplate';
import ContentSection from '@/components/Common/ContentSection';

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate Metadata for each blog post
export async function generateMetadata({ params }: PageProps) {
    const insight = getInsightBySlug(params.slug);

    if (!insight) {
        return constructMetadata({
            title: 'Insight Not Found',
            description: 'The requested insight could not be found.',
        });
    }

    return constructMetadata({
        title: insight.title,
        description: insight.description,
        canonicalPath: `/insights/${insight.slug}`,
        ogType: 'article',
        publishedTime: insight.publishedDate,
        keywords: [insight.category, 'TechFleek Insights', 'tech blog'],
        ogImage: insight.image,
    });
}

export default function InsightPage({ params }: PageProps) {
    const insight = getInsightBySlug(params.slug);

    if (!insight) {
        notFound();
    }

    return (
        <PageTemplate>
            {/* JSON-LD: Breadcrumb */}
            <JsonLd
                data={getBreadcrumbSchema([
                    { label: 'Home', href: '/' },
                    { label: 'Insights', href: '/insights' },
                    { label: insight.title },
                ])}
            />

            {/* Article Schema could be added here too */}

            <section className="pt-32 pb-16 px-4 md:px-8 max-w-[1000px] mx-auto font-[family-name:var(--font-red-hat)]">
                <span className="text-[#3C8ECB] font-bold tracking-widest uppercase text-sm mb-4 block">
                    {insight.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    {insight.title}
                </h1>
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-12 border-b border-slate-100 pb-8">
                    <span>{insight.publishedDate}</span>
                    <span>•</span>
                    <span>By {insight.author}</span>
                </div>

                <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                    <p className="text-xl text-slate-800 font-medium mb-8">
                        {insight.description}
                    </p>
                    <p>
                        [Content placeholder for {insight.title}. In a real application, this content would be fetched from a CMS or MDX file.]
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    {/* More placeholder content */}
                </div>
            </section>

            {/* Interlinking Component */}
            <RelatedServices />
        </PageTemplate>
    );
}
