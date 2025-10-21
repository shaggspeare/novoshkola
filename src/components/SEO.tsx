import { useEffect } from "react";

type SEOProps = {
  pageTitle: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
};

const SEO = ({
  pageTitle,
  description = "Підготовка до НМТ та ЗНО онлайн з досвідченими викладачами. Групові та індивідуальні заняття, малі групи до 5 учнів, особистий кабінет 24/7, симуляції реального тесту. Безкоштовний пробний урок.",
  keywords = "підготовка до НМТ, підготовка до ЗНО, НМТ онлайн, ЗНО онлайн, курси НМТ, репетитор НМТ, українська мова НМТ, математика НМТ, історія України НМТ, англійська НМТ, групові заняття НМТ, індивідуальні заняття НМТ, онлайн школа, дистанційне навчання",
  ogImage = "/assets/img/og-image-nmt.jpg",
  ogUrl = "https://novoshkola.ua/nmt",
  canonical
}: SEOProps) => {

  useEffect(() => {
    // Set document title
    document.title = pageTitle;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Новошкола');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'Ukrainian');
    setMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    setMetaTag('og:title', pageTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', ogUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'uk_UA', true);
    setMetaTag('og:site_name', 'Новошкола', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', pageTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Viewport meta tag (if not already set)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

  }, [pageTitle, description, keywords, ogImage, ogUrl, canonical]);

  return null;
};

export default SEO;
