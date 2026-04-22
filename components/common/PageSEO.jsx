import Head from "next/head";
import React from "react";

const PageSEO = ({ title, description = "", image = "", url = "" }) => {
  const maintitle = `NOMA — ${title}`;
  const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  return (
    <>
      {title && (
        <Head>
          <title>{maintitle}</title>
          <meta name="title" content={maintitle} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:title" content={maintitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={pageUrl} />
          <meta property="twitter:title" content={maintitle} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={image} />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
