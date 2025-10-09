"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SEOUtils, SEOMetadata } from '@/libs/seo-utils';
import { StructuredData } from './StructuredData';

interface SEOHeadProps {
  metadata: SEOMetadata;
  structuredData?: any;
  children?: React.ReactNode;
}

export function SEOHead({ metadata, structuredData, children }: SEOHeadProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Update document title
    if (metadata.title) {
      document.title = `${metadata.title} | Dash Stack`;
    }

    // Update meta description
    if (metadata.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);
    }

    // Update Open Graph meta tags
    if (metadata.title) {
      updateMetaTag('property', 'og:title', `${metadata.title} | Dash Stack`);
    }
    if (metadata.description) {
      updateMetaTag('property', 'og:description', metadata.description);
    }
    if (metadata.url) {
      updateMetaTag('property', 'og:url', `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${metadata.url}`);
    }

    // Update Twitter Card meta tags
    if (metadata.title) {
      updateMetaTag('name', 'twitter:title', `${metadata.title} | Dash Stack`);
    }
    if (metadata.description) {
      updateMetaTag('name', 'twitter:description', metadata.description);
    }

    // Cleanup function
    return () => {
      // Reset to default values if needed
    };
  }, [metadata]);

  const updateMetaTag = (attribute: string, name: string, content: string) => {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      {children}
    </>
  );
}

export default SEOHead;
