export interface Insight {
    slug: string;
    title: string;
    description: string;
    publishedDate: string;
    author: string;
    image: string;
    category: string;
    content?: string; // In a real app, this would come from MDX or CMS
}

export const insightsRegistry: Insight[] = [
    {
        slug: 'future-of-ai-enterprise',
        title: 'The Future of AI in Enterprise Software',
        description: 'Explore how Artificial Intelligence is reshaping enterprise software, from automation to predictive analytics.',
        publishedDate: '2024-03-15',
        author: 'TechFleek Team',
        image: '/insights/ai-future.jpg',
        category: 'Artificial Intelligence',
    },
    {
        slug: 'web3-revolution-business',
        title: 'The Web3 Revolution: Transforming Business Logic',
        description: 'Understanding decentralized applications (DApps) and how blockchain technology is creating new business models.',
        publishedDate: '2024-03-10',
        author: 'TechFleek Team',
        image: '/insights/web3-business.jpg',
        category: 'Web3 & Blockchain',
    },
    {
        slug: 'optimizing-nextjs-performance',
        title: 'Optimizing Next.js for Maximum Performance',
        description: 'A deep dive into Next.js performance optimization techniques: Core Web Vitals, image optimization, and code splitting.',
        publishedDate: '2024-03-05',
        author: 'TechFleek Team',
        image: '/insights/nextjs-perf.jpg',
        category: 'Web Development',
    },
];

export function getInsightBySlug(slug: string): Insight | undefined {
    return insightsRegistry.find((i) => i.slug === slug);
}
