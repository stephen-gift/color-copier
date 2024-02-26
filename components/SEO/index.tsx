import Head from "next/head";

interface SEOProps {
  prefix?: string;
  suffix?: string;
  path: string;
  description?: string;
}

const SEO = ({
  prefix,
  suffix,
  path,
  description = "Unlock vibrant printing possibilities with our cutting-edge color copier. Experience unmatched clarity, speed, and efficiency for all your copying needs. Elevate your documents with true-to-life color reproduction and precise image quality. Explore seamless integration, intuitive controls, and eco-friendly features for a superior printing experience. Upgrade to the ultimate solution for vibrant, professional results every time.",
}: SEOProps) => {
  const seo = {
    description: description,
    url: `https://stephen.color.copier.${path}`,
    title: `${prefix ? prefix + " - " : ""}Color Copier${
      suffix ? " - " + suffix : ""
    }`,
    image: "/og-image.jpeg",
    twitterUsername: "",
    keywords:
      "Color copier, High-quality color copying, Professional color copying, Vibrant color reproduction,Fast color copying, Reliable color copier, Efficient color copying, Digital color copying,Office color copying",
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* TODO */}
      <link rel="icon" href="/favicon.ico" />
      {/* TODO */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {/* TODO */}
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
      <title>{seo.title}</title>
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

export default SEO;
