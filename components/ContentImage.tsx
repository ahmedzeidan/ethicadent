import Image from "next/image";

type ContentImageVariant =
  | "hero"
  | "split"
  | "card"
  | "blog"
  | "logo"
  | "gallery"
  | "galleryLightbox";

type ContentImageProps = {
  src: string;
  alt: string;
  variant?: ContentImageVariant;
  priority?: boolean;
  className?: string;
};

const fillVariants: Record<
  Exclude<ContentImageVariant, "logo">,
  { sizes: string; priority?: boolean; imageClass: string }
> = {
  hero: {
    sizes: "(max-width: 920px) 100vw, 560px",
    priority: true,
    imageClass: "content-image content-image-cover"
  },
  split: {
    sizes: "(max-width: 920px) 100vw, 50vw",
    imageClass: "content-image content-image-cover"
  },
  card: {
    sizes: "(max-width: 640px) 50vw, 33vw",
    imageClass: "content-image content-image-cover content-image-card"
  },
  blog: {
    sizes: "(max-width: 640px) 100vw, 33vw",
    imageClass: "content-image content-image-cover"
  },
  gallery: {
    sizes: "(max-width: 640px) 50vw, 25vw",
    imageClass: "content-image content-image-cover"
  },
  galleryLightbox: {
    sizes: "90vw",
    imageClass: "content-image content-image-contain"
  }
};

export function ContentImage({
  src,
  alt,
  variant = "split",
  priority,
  className
}: ContentImageProps) {
  if (variant === "logo") {
    return (
      <Image
        src={src}
        alt={alt}
        width={220}
        height={60}
        priority
        className={className ?? "brand-logo"}
      />
    );
  }

  const config = fillVariants[variant];

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={config.sizes}
      priority={priority ?? config.priority ?? false}
      className={`${config.imageClass}${className ? ` ${className}` : ""}`}
    />
  );
}
