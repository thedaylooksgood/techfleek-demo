// =============================================================================
// SERVICE PAGE SEO DATA REGISTRY
// =============================================================================
// Central registry of SEO metadata for all service pages. Used by layouts
// to generate per-service metadata and JSON-LD schemas.
// =============================================================================

export interface ServiceSEOData {
    slug: string;
    title: string;
    description: string;
    serviceType: string;
    keywords: string[];
    faqPageSchemaEligible?: boolean;
}

export const servicesSEORegistry: ServiceSEOData[] = [
    {
        slug: 'web-development',
        title: 'Web Development Services – React, Next.js & E-Commerce',
        description:
            'We build scalable, high-performance websites and web applications using React, Next.js, and modern frameworks. SEO-optimized and conversion-driven.',
        serviceType: 'Web Development',
        keywords: ['React development', 'Next.js development', 'e-commerce development', 'web application development', 'SSR web apps'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'mobile-app-development',
        title: 'Mobile App Development – iOS, Android & Cross-Platform',
        description:
            'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and custom native solutions.',
        serviceType: 'Mobile App Development',
        keywords: ['iOS app development', 'Android app development', 'React Native', 'Flutter', 'cross-platform apps'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'ai-integration',
        title: 'AI Integration Services – Chatbots, ML & Generative AI',
        description:
            'Intelligent AI solutions: conversational chatbots, machine learning models, process automation, and generative AI for enterprise.',
        serviceType: 'AI Integration',
        keywords: ['AI chatbot development', 'machine learning', 'generative AI', 'LLM integration', 'AI automation'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'ui-ux-design',
        title: 'UI/UX Design Services – User Interface & Experience Design',
        description:
            'Beautiful, intuitive UI/UX design services. We create user-centered interfaces with prototyping, design systems, and usability testing.',
        serviceType: 'UI/UX Design',
        keywords: ['UI design', 'UX design', 'user interface design', 'Figma design', 'design systems'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'cloud-services',
        title: 'Cloud Services – AWS, Azure, DevOps & Scalable Infrastructure',
        description:
            'Cloud architecture, migration, and DevOps services. AWS, Azure, Docker, Kubernetes, and CI/CD pipeline setup.',
        serviceType: 'Cloud & DevOps',
        keywords: ['cloud services', 'AWS consulting', 'DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'custom-software',
        title: 'Custom Software Development – Tailored Enterprise Solutions',
        description:
            'End-to-end custom software development for enterprises. CRM, ERP, inventory management, and bespoke business applications.',
        serviceType: 'Custom Software Development',
        keywords: ['custom software', 'enterprise software', 'CRM development', 'ERP development', 'bespoke software'],
        faqPageSchemaEligible: true,
    },
    {
        slug: 'digital-growth',
        title: 'Digital Growth & Marketing – SEO, Social & Performance Marketing',
        description:
            'Digital growth strategies: SEO optimization, social media marketing, performance marketing, and brand awareness campaigns.',
        serviceType: 'Digital Marketing',
        keywords: ['digital marketing', 'SEO services', 'social media marketing', 'performance marketing', 'growth hacking'],
    },
    {
        slug: 'brand-identity',
        title: 'Brand Identity & Design – Logo, Visual & Brand Strategy',
        description:
            'Complete brand identity design: logo creation, visual identity, brand guidelines, and strategic brand positioning.',
        serviceType: 'Brand Identity Design',
        keywords: ['brand identity', 'logo design', 'visual identity', 'brand strategy', 'brand guidelines'],
    },
];

/**
 * Look up SEO data for a specific service by slug.
 */
export function getServiceSEO(slug: string): ServiceSEOData | undefined {
    return servicesSEORegistry.find((s) => s.slug === slug);
}
