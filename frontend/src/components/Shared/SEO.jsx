import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteUrl = 'https://claudioreyes.info';
  const defaultImage = 'https://www.origamis.cl/wp-content/uploads/2026/03/Fotografia-3-2.png';
  
  const seoTitle = title ? `${title} | Claudio Reyes` : 'Claudio Reyes | Psicólogo Clínico y Organizacional';
  const seoDescription = description || 'Psicólogo clínico y organizacional con +15 años de experiencia. Especialista en Reprogramación Focalizada de Alto Impacto (RFAI), bienestar emocional, trauma y liderazgo.';
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
