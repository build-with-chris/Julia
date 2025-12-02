import { useEffect } from 'react';

/**
 * SEO Component - Sets meta tags for each page
 * 
 * Usage:
 * <SEO 
 *   title="Seitentitel"
 *   description="Meta-Description für SEO"
 *   image="/path/to/og-image.jpg" // Optional
 * />
 */
const SEO = ({ title, description, image }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = `${title} | Julia Mayr Photography`;
    }

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Set Open Graph tags
    const setOGTag = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (title) {
      setOGTag('og:title', title);
    }
    if (description) {
      setOGTag('og:description', description);
    }
    if (image) {
      setOGTag('og:image', image);
    }
    setOGTag('og:type', 'website');

    // Set Twitter Card tags
    const setTwitterTag = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    if (title) {
      setTwitterTag('twitter:title', title);
    }
    if (description) {
      setTwitterTag('twitter:description', description);
    }
    if (image) {
      setTwitterTag('twitter:image', image);
    }

    // Cleanup function
    return () => {
      // Optionally reset to default on unmount
    };
  }, [title, description, image]);

  return null;
};

export default SEO;


