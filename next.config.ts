import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/what-should-you-know-about-general-dentistry",
        destination: "/services/general-dentistry",
        permanent: true
      },
      {
        source: "/this-is-why-dental-implants-are-much-better-dentures",
        destination: "/services/dental-implants",
        permanent: true
      },
      {
        source: "/straighten-your-teeth-for-a-more-confident-smile-with-invisalign",
        destination: "/services/invisalign",
        permanent: true
      },
      {
        source: "/get-a-better-smile-with-the-help-of-cosmetic-dentistry",
        destination: "/services/cosmetic-dentistry",
        permanent: true
      },
      {
        source: "/everything-to-know-about-teeth-whitening",
        destination: "/services/teeth-whitening",
        permanent: true
      },
      {
        source: "/everything-to-know-about-root-canal-therapy",
        destination: "/services/root-canal-therapy",
        permanent: true
      },
      {
        source: "/3d-imaging-cbct-the-future-of-dental-care",
        destination: "/services/cbct-3d-imaging",
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
