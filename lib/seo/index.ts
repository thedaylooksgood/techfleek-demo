// =============================================================================
// TECHFLEEK SEO MODULE — Barrel Export
// =============================================================================
// Import everything from `@/lib/seo`:
//
//   import { constructMetadata, JsonLd, getServiceSchema } from '@/lib/seo';
//
// =============================================================================

export {
    constructMetadata,
    SITE_URL,
    SITE_NAME,
    type ConstructMetadataOptions,
} from './metadata';

export {
    JsonLd,
    getOrganizationSchema,
    getWebsiteSchema,
    getSoftwareApplicationSchema,
    getServiceSchema,
    getBreadcrumbSchema,
    getFAQSchema,
    getWebPageSchema,
    type ServiceSchemaOptions,
    type Breadcrumb,
    type FAQItem,
    type WebPageSchemaOptions,
} from './schema';
