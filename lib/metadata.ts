import type { Metadata } from "next";
import { baseUrl, businessInfo, imageAssets } from "@/data/site";

const defaultOgImage = imageAssets.ogShare;
const defaultOgAlt = `${businessInfo.name} on Belmont Ave in Chicago`;

function absoluteImageUrl(image: string) {
  return image.startsWith("http") ? image : `${baseUrl}${image}`;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  ogImageAlt?: string;
}): Metadata {
  const image = opts.ogImage ?? defaultOgImage;
  const absoluteImage = absoluteImageUrl(image);
  const ogAlt = opts.ogImageAlt ?? defaultOgAlt;

  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: opts.path
    },
    openGraph: {
      type: opts.ogType ?? "website",
      title: opts.title,
      description: opts.description,
      url: opts.path,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: ogAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [absoluteImage]
    }
  };
}

export { defaultOgImage, defaultOgAlt, absoluteImageUrl };
