"use client";

import { Metadata } from 'next';

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export interface OrganizationStructuredData {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    availableLanguage: string;
  };
}

export interface WebSiteStructuredData {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export class SEOUtils {
  private static defaultImage = '/og-image.png';
  private static siteName = 'Dash Stack';
  private static siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  static generateMetadata(seoData: SEOMetadata, locale: string = 'en'): Metadata {
    const {
      title,
      description,
      keywords = [],
      image = this.defaultImage,
      url = '',
      type = 'website',
      publishedTime,
      modifiedTime,
      author,
      section,
      tags = []
    } = seoData;

    const fullTitle = title ? `${title} | ${this.siteName}` : this.siteName;
    const fullUrl = url ? `${this.siteUrl}${url}` : this.siteName;
    const imageUrl = image.startsWith('http') ? image : `${this.siteUrl}${image}`;

    return {
      title: fullTitle,
      description,
      keywords: [...keywords, 'dashboard', 'analytics', 'business intelligence'],
      authors: author ? [{ name: author }] : [{ name: "Dash Stack Team" }],
      openGraph: {
        title: fullTitle,
        description,
        url: fullUrl,
        siteName: this.siteName,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title || this.siteName,
          },
        ],
        locale: locale === 'ar' ? 'ar_SA' : 'en_US',
        type: type as "website" | "article", // Fix type constraint
        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
        ...(section && { section }),
        ...(tags.length > 0 && { tags }),
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description,
        images: [imageUrl],
        creator: '@dashstack',
      },
      alternates: {
        canonical: fullUrl,
      },
    };
  }

  static generateOrganizationStructuredData(): OrganizationStructuredData {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dash Stack",
      url: this.siteUrl,
      logo: `${this.siteUrl}/logo.png`,
      description: "Advanced dashboard and analytics platform for businesses",
      sameAs: [
        "https://twitter.com/dashstack",
        "https://linkedin.com/company/dashstack",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English, Arabic",
      },
    };
  }

  static generateWebSiteStructuredData(): WebSiteStructuredData {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Dash Stack",
      url: this.siteUrl,
      description: "Advanced dashboard and analytics platform for businesses",
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${this.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }

  static generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${this.siteUrl}${item.url}`,
      })),
    };
  }

  static generateFAQStructuredData(faqData: Array<{ question: string; answer: string }>) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  }
}

export default SEOUtils;
