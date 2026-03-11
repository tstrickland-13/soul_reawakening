import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';

const SEO = ({
  title,
  description,
  image,
  url,
  type = "website",
  noindex = false,
}) => {
  const location = useLocation();
  const siteTitle = siteConfig.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || siteConfig.description;
  const metaUrl = url || `${siteConfig.siteUrl}${location.pathname}`;
  const rawImage = image || siteConfig.ogImage;
  const metaImage = rawImage.startsWith("http") ? rawImage : `${siteConfig.siteUrl}${rawImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}

      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
};

export default SEO;
