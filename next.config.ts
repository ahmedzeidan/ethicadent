import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/what-should-you-know-about-general-dentistry",
        destination: "/blog/what-should-you-know-about-general-dentistry",
        permanent: true
      },
      {
        source: "/this-is-why-dental-implants-are-much-better-dentures",
        destination: "/blog/this-is-why-dental-implants-are-much-better-dentures",
        permanent: true
      },
      {
        source: "/straighten-your-teeth-for-a-more-confident-smile-with-invisalign",
        destination: "/blog/straighten-your-teeth-for-a-more-confident-smile-with-invisalign",
        permanent: true
      },
      {
        source: "/get-a-better-smile-with-the-help-of-cosmetic-dentistry",
        destination: "/blog/get-a-better-smile-with-the-help-of-cosmetic-dentistry",
        permanent: true
      },
      {
        source: "/everything-to-know-about-teeth-whitening",
        destination: "/blog/everything-to-know-about-teeth-whitening",
        permanent: true
      },
      {
        source: "/everything-to-know-about-root-canal-therapy",
        destination: "/blog/everything-to-know-about-root-canal-therapy",
        permanent: true
      },
      {
        source: "/3d-imaging-cbct-the-future-of-dental-care",
        destination: "/blog/3d-imaging-cbct-the-future-of-dental-care",
        permanent: true
      },
      {
        source: "/home-v2",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
