import { Helmet } from "react-helmet-async";

/** Default values — used as fallback if a page doesn't provide them */
const SITE_NAME = "QuicKaka";
const DEFAULT_TITLE = "QuicKaka — Bhopal's Trusted Home Services Platform";
const DEFAULT_DESCRIPTION =
  "QuicKaka offers 37+ verified home services in Bhopal — plumbing, electrician, cleaning, painting, legal, events & more. Book a trusted professional in minutes.";
const BASE_URL = "https://www.quickaka.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface SEOProps {
  /** Page title — will show as "Your Title | QuicKaka" in browser tab */
  title?: string;
  /** Meta description — the snippet Google shows below your link (max ~155 chars) */
  description?: string;
  /** Comma-separated keywords for this page */
  keywords?: string;
  /** Canonical path e.g. "/services" — auto-prepends the domain */
  path?: string;
  /** Custom OG image URL (absolute) */
  ogImage?: string;
}

/**
 * Drop this into any page to set all its SEO meta tags.
 *
 * How it works:
 * - react-helmet-async intercepts these tags and injects them into <head>
 * - Each new page's <SEO> overrides the previous one (no duplicates)
 * - If a page doesn't use <SEO>, the index.html defaults kick in
 *
 * Usage:
 * ```tsx
 * <SEO
 *   title="Our Services"
 *   description="Browse 37+ home services..."
 *   keywords="plumber Bhopal, electrician..."
 *   path="/services"
 * />
 * ```
 */
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
}: SEOProps) => {
  // Format: "Services | QuicKaka" or just the default
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* ─── Basic ─── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* ─── Open Graph (Facebook, WhatsApp, LinkedIn) ─── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* ─── Twitter Card ─── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
