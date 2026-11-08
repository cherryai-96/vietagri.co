import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  schema?: Record<string, unknown>;
  preloadImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Vietnam Agriculture Center, VAC, agricultural export, Việt Wolffia, contract farming Vietnam, global sourcing Vietnam',
  url = 'https://vietagri.co',
  image = 'https://vietagri.co/Logo/Vietgari/VAC_logo_og.jpg',
  schema,
  preloadImage,
}) => {
  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vietnam Agriculture Center" />

      {/* Preload Critical Hero Image */}
      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />
      )}

      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vietnam Agriculture Center" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD for AI AEO */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
